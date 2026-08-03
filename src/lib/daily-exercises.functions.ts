import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { generateText, Output } from "ai";
import { z } from "zod";

const itemSchema = z.object({
  question: z.string(),
  options: z.array(z.string()),
  answer: z.string(),
  explanation: z.string(),
});

const exerciseSchema = z.object({
  title: z.string(),
  instructions: z.string(),
  items: z.array(itemSchema),
});

export type ExerciseItem = z.infer<typeof itemSchema>;
export type DailyExercise = {
  id: string;
  exercise_date: string;
  week_number: number | null;
  title: string;
  instructions: string | null;
  items: ExerciseItem[];
  answers: Record<string, string>;
  score: number | null;
  completed: boolean;
  explanation_feedback?: Record<string, "helpful" | "not_helpful">;
};

function today() {
  return new Date().toISOString().slice(0, 10);
}

export const getExerciseHistory = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data, error } = await context.supabase
      .from("daily_exercises")
      .select("id, exercise_date, week_number, title, instructions, items, answers, score, completed, explanation_feedback")
      .eq("user_id", context.userId)
      .eq("completed", true)
      .order("exercise_date", { ascending: false })
      .limit(60);
    if (error) throw new Error(error.message);
    return (data ?? []) as DailyExercise[];
  });



export const getTodayExercise = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data, error } = await context.supabase
      .from("daily_exercises")
      .select("id, exercise_date, week_number, title, instructions, items, answers, score, completed, explanation_feedback")
      .eq("user_id", context.userId)
      .eq("exercise_date", today())
      .maybeSingle();
    if (error) throw new Error(error.message);
    return data as DailyExercise | null;
  });

export const generateTodayExercise = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const apiKey = process.env["LOVABLE_API_KEY"];
    if (!apiKey) throw new Error("AI indisponível no momento.");

    const [{ data: profile }, { data: plan }] = await Promise.all([
      context.supabase
        .from("profiles")
        .select("full_name, english_level, goal, target_level")
        .eq("id", context.userId)
        .maybeSingle(),
      context.supabase
        .from("study_plans")
        .select("summary, weekly_focus")
        .eq("user_id", context.userId)
        .maybeSingle(),
    ]);

    if (!plan) throw new Error("Gere seu plano de estudos antes dos exercícios diários.");

    const { count } = await context.supabase
      .from("daily_exercises")
      .select("id", { count: "exact", head: true })
      .eq("user_id", context.userId);

    const weeks = (plan.weekly_focus ?? []) as { week: number; title: string; activities: string[] }[];
    const weekNumber = weeks.length > 0 ? (Math.floor((count ?? 0) / 5) % weeks.length) + 1 : 1;
    const week = weeks.find((w) => w.week === weekNumber) ?? weeks[0];

    const { createLovableAiGatewayProvider } = await import("./ai-gateway.server");
    const gateway = createLovableAiGatewayProvider(apiKey);

    let output: z.infer<typeof exerciseSchema>;
    try {
      const result = await generateText({
        model: gateway("google/gemini-2.5-flash"),
        output: Output.object({ schema: exerciseSchema }),
        system:
          "Você é o professor de inglês da Speak2Co. Crie exercícios diários curtos de inglês. Enunciados e explicações em português do Brasil; as frases praticadas em inglês. Gere exatamente 5 questões de múltipla escolha, cada uma com 4 alternativas e uma resposta correta idêntica a uma das alternativas.",
        prompt: `Aluno: ${profile?.full_name ?? "aluno"}
Nível atual: ${placement?.level ?? profile?.english_level ?? "não avaliado"}
Nível desejado: ${profile?.target_level ?? "B2"}
Objetivo: ${profile?.goal ?? "melhorar o inglês geral"}

Resultado do teste de nivelamento (use para calibrar a dificuldade e priorizar os erros):
${describePlacement(placement)}

Resumo do plano: ${plan.summary ?? ""}
Foco da semana ${weekNumber}: ${week?.title ?? "inglês geral"}
Atividades da semana: ${(week?.activities ?? []).join("; ")}

Crie o exercício de hoje com título curto, instruções de 1 frase e 5 questões alinhadas ao foco da semana.`,
      });
      output = result.output;
    } catch (e) {
      const message = e instanceof Error ? e.message : "";
      if (message.includes("429")) throw new Error("Muitas solicitações. Tente novamente em instantes.");
      if (message.includes("402")) throw new Error("Créditos de IA esgotados. Adicione créditos para continuar.");
      console.error("[daily-exercises] geração falhou", e);
      throw new Error("Não foi possível gerar seus exercícios agora.");
    }

    const { data, error } = await context.supabase
      .from("daily_exercises")
      .upsert(
        {
          user_id: context.userId,
          exercise_date: today(),
          week_number: weekNumber,
          title: output.title,
          instructions: output.instructions,
          items: output.items,
          answers: {},
          score: null,
          completed: false,
        },
        { onConflict: "user_id,exercise_date" },
      )
      .select("id, exercise_date, week_number, title, instructions, items, answers, score, completed, explanation_feedback")
      .single();
    if (error) throw new Error(error.message);
    return data as DailyExercise;
  });

export const submitTodayExercise = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) =>
    z.object({ id: z.string(), answers: z.record(z.string(), z.string()) }).parse(input),
  )
  .handler(async ({ data, context }) => {
    const { data: existing, error: readError } = await context.supabase
      .from("daily_exercises")
      .select("items")
      .eq("id", data.id)
      .eq("user_id", context.userId)
      .maybeSingle();
    if (readError) throw new Error(readError.message);
    if (!existing) throw new Error("Exercício não encontrado.");

    const items = (existing.items ?? []) as ExerciseItem[];
    let score = 0;
    items.forEach((item, index) => {
      if (data.answers[String(index)] === item.answer) score += 1;
    });

    const { data: updated, error } = await context.supabase
      .from("daily_exercises")
      .update({ answers: data.answers, score, completed: true })
      .eq("id", data.id)
      .eq("user_id", context.userId)
      .select("id, exercise_date, week_number, title, instructions, items, answers, score, completed, explanation_feedback")
      .single();
    if (error) throw new Error(error.message);
    return updated as DailyExercise;
  });

export const setExplanationFeedback = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) =>
    z
      .object({
        id: z.string(),
        itemIndex: z.number().int().min(0),
        value: z.enum(["helpful", "not_helpful"]).nullable(),
      })
      .parse(input),
  )
  .handler(async ({ data, context }) => {
    const { data: existing, error: readError } = await context.supabase
      .from("daily_exercises")
      .select("explanation_feedback")
      .eq("id", data.id)
      .eq("user_id", context.userId)
      .maybeSingle();
    if (readError) throw new Error(readError.message);
    if (!existing) throw new Error("Exercício não encontrado.");

    const feedback = {
      ...((existing.explanation_feedback ?? {}) as Record<string, string>),
    };
    if (data.value === null) delete feedback[String(data.itemIndex)];
    else feedback[String(data.itemIndex)] = data.value;

    const { data: updated, error } = await context.supabase
      .from("daily_exercises")
      .update({ explanation_feedback: feedback })
      .eq("id", data.id)
      .eq("user_id", context.userId)
      .select("id, exercise_date, week_number, title, instructions, items, answers, score, completed, explanation_feedback")
      .single();
    if (error) throw new Error(error.message);
    return updated as DailyExercise;
  });
