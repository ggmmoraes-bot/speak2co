import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";
import { generateText, Output } from "ai";
import { z } from "zod";
import { describePlacement, getPlacementSnapshot } from "./placement-context.server";

export const planSchema = z.object({
  summary: z.string(),
  weekly_focus: z.array(
    z.object({ week: z.number(), title: z.string(), activities: z.array(z.string()) }),
  ),
  milestones: z.array(z.string()),
});

export type StudyPlan = z.infer<typeof planSchema>;

type Db = SupabaseClient<Database>;

/**
 * Generates and persists the 8-week study plan, honoring locked weeks and using
 * the latest placement test result as the main calibration signal.
 */
export async function buildAndSaveStudyPlan(
  supabase: Db,
  userId: string,
  reason: "generated" | "placement" = "generated",
): Promise<StudyPlan> {
  const apiKey = process.env["LOVABLE_API_KEY"];
  if (!apiKey) throw new Error("AI indisponível no momento.");

  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("full_name, english_level, goal, target_level")
    .eq("id", userId)
    .maybeSingle();
  if (profileError) throw new Error(profileError.message);
  if (!profile?.full_name || !profile.goal || !profile.target_level) {
    throw new Error("Complete seu perfil (nome, objetivo e nível desejado) antes de gerar o plano.");
  }

  const [{ data: past }, placement] = await Promise.all([
    supabase
      .from("daily_exercises")
      .select("week_number, items, explanation_feedback")
      .eq("user_id", userId)
      .eq("completed", true)
      .order("exercise_date", { ascending: false })
      .limit(30),
    getPlacementSnapshot(supabase, userId),
  ]);

  const helpfulTopics: string[] = [];
  const unhelpfulTopics: string[] = [];
  for (const row of past ?? []) {
    const items = (row.items ?? []) as { question: string }[];
    const feedback = (row.explanation_feedback ?? {}) as Record<string, string>;
    for (const [index, value] of Object.entries(feedback)) {
      const question = items[Number(index)]?.question;
      if (!question) continue;
      (value === "helpful" ? helpfulTopics : unhelpfulTopics).push(question);
    }
  }
  const feedbackHint =
    helpfulTopics.length + unhelpfulTopics.length === 0
      ? "Sem feedback do aluno ainda."
      : `Explicações que ajudaram (reforce esse estilo e temas): ${helpfulTopics.slice(0, 10).join(" | ") || "nenhuma"}\nExplicações que NÃO ajudaram (explique esses temas de outra forma, com mais exemplos e passo a passo): ${unhelpfulTopics.slice(0, 10).join(" | ") || "nenhuma"}`;

  const { createLovableAiGatewayProvider } = await import("./ai-gateway.server");
  const gateway = createLovableAiGatewayProvider(apiKey);

  let output: StudyPlan;
  try {
    const result = await generateText({
      model: gateway("google/gemini-2.5-flash"),
      output: Output.object({ schema: planSchema }),
      system:
        'Você é o professor de inglês da Speak2Co. Crie planos de estudo de inglês objetivos, motivadores e práticos. Escreva o conteúdo em português do Brasil, exceto exemplos em inglês. Gere exatamente 8 semanas e de 4 a 6 marcos. Calibre a dificuldade pelo resultado do teste de nivelamento: as primeiras semanas devem atacar as prioridades apontadas no teste e as últimas devem aproximar o aluno do nível desejado. Responda SOMENTE com um JSON com estas chaves exatas em inglês: {"summary": string, "weekly_focus": [{"week": number, "title": string, "activities": string[]}], "milestones": string[]}. Nunca traduza os nomes das chaves e nunca adicione outras chaves.',
      prompt: `Aluno: ${profile.full_name}
Nível atual (perfil): ${placement?.level ?? profile.english_level ?? "não avaliado"}
Nível desejado: ${profile.target_level}
Objetivo: ${profile.goal}

Resultado do teste de nivelamento:
${describePlacement(placement)}

Feedback do aluno sobre explicações anteriores:
${feedbackHint}

Crie um plano de estudos personalizado com um resumo curto (2 a 3 frases, citando o nível do teste), foco semanal (8 semanas, cada uma com título e 3 atividades práticas) e marcos de evolução. Use exatamente as chaves summary, weekly_focus (week, title, activities) e milestones.`,
    });
    output = result.output;
  } catch (e) {
    const message = e instanceof Error ? e.message : "";
    if (message.includes("429")) throw new Error("Muitas solicitações. Tente novamente em instantes.");
    if (message.includes("402")) throw new Error("Créditos de IA esgotados. Adicione créditos para continuar.");
    const rescued = rescuePlan(e);
    if (!rescued) {
      console.error("[study-plan] geração falhou", e);
      throw new Error("Não foi possível gerar seu plano agora.");
    }
    output = rescued;
  }


  const { data: existingPlan } = await supabase
    .from("study_plans")
    .select("weekly_focus, locked_weeks")
    .eq("user_id", userId)
    .maybeSingle();
  const lockedWeeks = ((existingPlan?.locked_weeks ?? []) as number[]).map(Number);
  const existingByWeek = new Map(
    ((existingPlan?.weekly_focus ?? []) as StudyPlan["weekly_focus"]).map((w) => [w.week, w]),
  );
  const finalWeeks = output.weekly_focus.map((w) =>
    lockedWeeks.includes(w.week) ? (existingByWeek.get(w.week) ?? w) : w,
  );
  output = { ...output, weekly_focus: finalWeeks };

  const { error: upsertError } = await supabase.from("study_plans").upsert(
    {
      user_id: userId,
      summary: output.summary,
      weekly_focus: output.weekly_focus,
      milestones: output.milestones,
      locked_weeks: lockedWeeks,
    },
    { onConflict: "user_id" },
  );
  if (upsertError) throw new Error(upsertError.message);

  await supabase.from("study_plan_versions").insert({
    user_id: userId,
    summary: output.summary,
    weekly_focus: output.weekly_focus,
    milestones: output.milestones,
    locked_weeks: lockedWeeks,
    reason,
    refined_weeks: [],
  });

  return output;
}

/** Aceita respostas do modelo com chaves traduzidas/variantes e devolve o plano no formato esperado. */
function rescuePlan(error: unknown): StudyPlan | null {
  const raw = (error as { text?: unknown } | null)?.text;
  if (typeof raw !== "string") return null;
  const match = raw.match(/\{[\s\S]*\}/);
  if (!match) return null;

  let parsed: Record<string, unknown>;
  try {
    parsed = JSON.parse(match[0]) as Record<string, unknown>;
  } catch {
    return null;
  }

  // Procura a chave em qualquer profundidade — o modelo às vezes embrulha o plano
  // dentro de um objeto com dados do aluno ("aluno", "nivel_atual", "objetivo").
  const deepFind = (node: unknown, keys: string[], depth = 0): unknown => {
    if (depth > 6 || !node || typeof node !== "object") return undefined;
    if (Array.isArray(node)) {
      for (const item of node) {
        const found = deepFind(item, keys, depth + 1);
        if (found !== undefined) return found;
      }
      return undefined;
    }
    const record = node as Record<string, unknown>;
    for (const key of keys) {
      if (record[key] !== undefined) return record[key];
    }
    for (const value of Object.values(record)) {
      const found = deepFind(value, keys, depth + 1);
      if (found !== undefined) return found;
    }
    return undefined;
  };
  const pick = (...keys: string[]) => deepFind(parsed, keys);
  const toText = (value: unknown): string =>
    typeof value === "string"
      ? value
      : value && typeof value === "object"
        ? String(
            (value as Record<string, unknown>)["descricao"] ??
              (value as Record<string, unknown>)["description"] ??
              (value as Record<string, unknown>)["marco"] ??
              JSON.stringify(value),
          )
        : String(value ?? "");

  const summary = toText(
    pick("summary", "resumo", "resumo_plano", "resumo_do_plano", "descricao", "overview"),
  );
  const weeksRaw = pick(
    "weekly_focus",
    "plano_de_estudos",
    "plano_semanal",
    "semanas",
    "foco_semanal",
    "weeks",
    "cronograma",
  );
  const milestonesRaw = pick(
    "milestones",
    "marcos",
    "marcos_de_evolucao",
    "marcos_de_progresso",
    "objetivos",
  );
  if (!Array.isArray(weeksRaw)) return null;

  const weekly_focus = weeksRaw.map((item, index) => {
    const w = (item ?? {}) as Record<string, unknown>;
    const activities = (w["activities"] ??
      w["atividades"] ??
      w["tarefas"] ??
      w["acoes"] ??
      []) as unknown;
    return {
      week: Number(w["week"] ?? w["semana"] ?? w["numero"] ?? index + 1) || index + 1,
      title: toText(w["title"] ?? w["titulo"] ?? w["foco"] ?? `Semana ${index + 1}`),
      activities: Array.isArray(activities) ? activities.map(toText) : [toText(activities)],
    };
  });

  const candidate = {
    summary: summary || "Plano de estudos personalizado gerado a partir do seu nivelamento.",
    weekly_focus,
    milestones: Array.isArray(milestonesRaw) ? milestonesRaw.map(toText) : [],
  };
  const result = planSchema.safeParse(candidate);
  return result.success ? result.data : null;
}
