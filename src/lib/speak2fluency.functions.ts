import { createServerFn } from "@tanstack/react-start";
import { requireFeature } from "@/lib/entitlement-middleware";
import { generateText, Output } from "ai";
import { z } from "zod";

export type FluencyProgressRow = {
  moduleId: string;
  sectionsDone: string[];
  answers: Record<string, string>;
  feedback: FluencyFeedback | null;
  score: number | null;
  attempts: number;
  completed: boolean;
  updatedAt: string | null;
};

export type FluencyMissionRow = {
  date: string;
  blocks: Record<string, boolean>;
  minutes: number;
  completed: boolean;
};

const feedbackSchema = z.object({
  score: z.number(),
  summary: z.string(),
  pronunciation: z.string(),
  stress: z.string(),
  intonation: z.string(),
  fluency: z.string(),
  highlights: z.array(z.string()),
  focus: z.array(z.string()),
  rewrite: z.string(),
  nextStep: z.string(),
});

export type FluencyFeedback = z.infer<typeof feedbackSchema>;

const FEATURE = "product_line_fluency";

function mapProgress(row: {
  module_id: string;
  sections_done: unknown;
  answers: unknown;
  feedback: unknown;
  score: number | null;
  attempts: number;
  completed: boolean;
  updated_at: string | null;
}): FluencyProgressRow {
  return {
    moduleId: row.module_id,
    sectionsDone: (row.sections_done ?? []) as string[],
    answers: (row.answers ?? {}) as Record<string, string>,
    feedback: (row.feedback ?? null) as FluencyFeedback | null,
    score: row.score,
    attempts: row.attempts,
    completed: row.completed,
    updatedAt: row.updated_at,
  };
}

/** Progresso de todos os módulos + missões diárias recentes (para o streak). */
export const getFluencyOverview = createServerFn({ method: "POST" })
  .middleware([requireFeature(FEATURE)])
  .handler(async ({ context }) => {
    const [progressRes, missionRes] = await Promise.all([
      context.supabase.from("fluency_progress").select("*").eq("user_id", context.userId),
      context.supabase
        .from("fluency_missions")
        .select("mission_date, blocks, minutes, completed")
        .eq("user_id", context.userId)
        .order("mission_date", { ascending: false })
        .limit(30),
    ]);
    if (progressRes.error) throw new Error(progressRes.error.message);

    const missions: FluencyMissionRow[] = (missionRes.data ?? []).map((m) => ({
      date: m.mission_date,
      blocks: (m.blocks ?? {}) as Record<string, boolean>,
      minutes: m.minutes,
      completed: m.completed,
    }));

    return {
      progress: (progressRes.data ?? []).map(mapProgress),
      missions,
      streak: computeStreak(missions),
    };
  });

/** Dias consecutivos concluídos, terminando hoje ou ontem. */
function computeStreak(missions: FluencyMissionRow[]) {
  const done = new Set(missions.filter((m) => m.completed).map((m) => m.date));
  const day = new Date();
  let streak = 0;
  const key = (d: Date) => d.toISOString().slice(0, 10);
  if (!done.has(key(day))) day.setDate(day.getDate() - 1);
  while (done.has(key(day))) {
    streak += 1;
    day.setDate(day.getDate() - 1);
  }
  return streak;
}

export const getFluencyModuleProgress = createServerFn({ method: "POST" })
  .middleware([requireFeature(FEATURE)])
  .inputValidator((input: unknown) => z.object({ moduleId: z.string().max(60) }).parse(input))
  .handler(async ({ context, data }): Promise<FluencyProgressRow | null> => {
    const { data: row, error } = await context.supabase
      .from("fluency_progress")
      .select("*")
      .eq("user_id", context.userId)
      .eq("module_id", data.moduleId)
      .maybeSingle();
    if (error) throw new Error(error.message);
    return row ? mapProgress(row) : null;
  });

export const saveFluencyProgress = createServerFn({ method: "POST" })
  .middleware([requireFeature(FEATURE)])
  .inputValidator((input: unknown) =>
    z
      .object({
        moduleId: z.string().max(60),
        sectionsDone: z.array(z.string().max(40)).max(20),
        answers: z.record(z.string(), z.string().max(4000)),
        feedback: z.any().nullable().optional(),
        score: z.number().int().min(0).max(100).nullable().optional(),
        completed: z.boolean().optional(),
      })
      .parse(input),
  )
  .handler(async ({ context, data }) => {
    const completed = data.completed ?? false;
    const { error } = await context.supabase.from("fluency_progress").upsert(
      {
        user_id: context.userId,
        module_id: data.moduleId,
        sections_done: data.sectionsDone,
        answers: data.answers,
        feedback: (data.feedback ?? null) as never,
        score: data.score ?? null,
        completed,
        completed_at: completed ? new Date().toISOString() : null,
      },
      { onConflict: "user_id,module_id" },
    );
    if (error) throw new Error(error.message);
    return { ok: true };
  });

/** Marca blocos da rotina diária de 25 minutos. */
export const saveDailyMission = createServerFn({ method: "POST" })
  .middleware([requireFeature(FEATURE)])
  .inputValidator((input: unknown) =>
    z
      .object({
        blocks: z.record(z.string(), z.boolean()),
        minutes: z.number().int().min(0).max(600),
      })
      .parse(input),
  )
  .handler(async ({ context, data }) => {
    const today = new Date().toISOString().slice(0, 10);
    const completed = ["listening", "speaking", "vocabulary"].every(
      (block) => data.blocks[block] === true,
    );
    const { error } = await context.supabase.from("fluency_missions").upsert(
      {
        user_id: context.userId,
        mission_date: today,
        blocks: data.blocks,
        minutes: data.minutes,
        completed,
      },
      { onConflict: "user_id,mission_date" },
    );
    if (error) throw new Error(error.message);
    return { ok: true, completed };
  });

/** Feedback da IA sobre o desafio de fala do módulo. */
export const evaluateFluencyChallenge = createServerFn({ method: "POST" })
  .middleware([requireFeature(FEATURE)])
  .inputValidator((input: unknown) =>
    z
      .object({
        moduleId: z.string().max(60),
        transcript: z.string().min(5).max(6000),
        attempt: z.number().int().min(1).max(10).default(1),
      })
      .parse(input),
  )
  .handler(async ({ context, data }): Promise<FluencyFeedback> => {
    const apiKey = process.env["LOVABLE_API_KEY"];
    if (!apiKey) throw new Error("AI indisponível no momento.");

    const { getFluencyModule } = await import("./speak2fluency-content");
    const module = getFluencyModule(data.moduleId);
    if (!module) throw new Error("Módulo não encontrado.");

    const { data: profile } = await context.supabase
      .from("profiles")
      .select("full_name, english_level, target_level, goal")
      .eq("id", context.userId)
      .maybeSingle();

    const { createLovableAiGatewayProvider } = await import("./ai-gateway.server");
    const gateway = createLovableAiGatewayProvider(apiKey);

    try {
      const result = await generateText({
        model: gateway("google/gemini-2.5-flash"),
        output: Output.object({ schema: feedbackSchema }),
        system:
          "Você é o coach do Speak2Fluency (Speak2Co), produto focado em transformar inglês funcional em comunicação espontânea. Avalie a fala do aluno em quatro dimensões: pronunciation, stress, intonation e fluency. Comentários sempre em português do Brasil, diretos e encorajadores; exemplos e a reescrita ('rewrite') em inglês natural com chunks reais. Aponte no máximo 2 prioridades por vez. Dê uma nota de 0 a 100 considerando naturalidade, uso de chunks, ritmo e ausência de tradução literal.",
        prompt: `Aluno: ${profile?.full_name ?? "aluno"} (nível ${profile?.english_level ?? "não avaliado"}, meta ${profile?.target_level ?? "B1"}, objetivo ${profile?.goal ?? "fluência no dia a dia"})
Módulo ${module.order}: ${module.titleEn} — ${module.objective.en}
Desafio: ${module.challenge.context.en} | Meta: ${module.challenge.goal.en}
Chunks-alvo: ${module.chunks.map((c) => c.en).join(" | ")}
Tentativa número: ${data.attempt}

Transcrição da fala do aluno:
${data.transcript}

Devolva score, summary (2-3 frases), pronunciation, stress, intonation, fluency (1-2 frases cada), highlights (2 a 4 acertos), focus (1 a 2 prioridades), rewrite (versão modelo em inglês do que o aluno quis dizer) e nextStep (1 frase com o próximo treino recomendado).`,
      });
      return result.output;
    } catch (e) {
      const message = e instanceof Error ? e.message : "";
      if (message.includes("429"))
        throw new Error("Muitas solicitações. Tente novamente em instantes.");
      if (message.includes("402"))
        throw new Error("Créditos de IA esgotados. Adicione créditos para continuar.");
      console.error("[speak2fluency] feedback falhou", e);
      throw new Error("Não foi possível avaliar sua fala agora.");
    }
  });
