import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { generateText, Output } from "ai";
import { z } from "zod";
import {
  CEFR_ORDER,
  PLACEMENT_QUESTIONS,
  WRITING_PROMPT,
  estimateLevelFromAnswers,
  type CefrLevel,
  type PlacementQuestion,
} from "./placement-content";

const SELECT =
  "id, questions, answers, writing_prompt, writing_answer, correct_count, total_questions, score, level, feedback, completed, created_at, completed_at";

const feedbackSchema = z.object({
  level: z.enum(["A1", "A2", "B1", "B2", "C1"]),
  summary: z.string(),
  strengths: z.array(z.string()),
  focus: z.array(z.string()),
  writingFeedback: z.string(),
  writingRewrite: z.string(),
  nextSteps: z.array(z.string()),
});

export type PlacementFeedback = z.infer<typeof feedbackSchema>;

export type PlacementTest = {
  id: string;
  questions: PlacementQuestion[];
  answers: Record<string, number>;
  writing_prompt: string | null;
  writing_answer: string | null;
  correct_count: number;
  total_questions: number;
  score: number | null;
  level: CefrLevel | null;
  feedback: PlacementFeedback | null;
  completed: boolean;
  created_at: string;
  completed_at: string | null;
};

export const listPlacementTests = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data, error } = await context.supabase
      .from("placement_tests")
      .select(SELECT)
      .eq("user_id", context.userId)
      .order("created_at", { ascending: false })
      .limit(20);
    if (error) throw new Error(error.message);
    return (data ?? []) as unknown as PlacementTest[];
  });

export const getPlacementTest = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) => z.object({ testId: z.string() }).parse(input))
  .handler(async ({ context, data }) => {
    const { data: row, error } = await context.supabase
      .from("placement_tests")
      .select(SELECT)
      .eq("id", data.testId)
      .eq("user_id", context.userId)
      .maybeSingle();
    if (error) throw new Error(error.message);
    return (row ?? null) as unknown as PlacementTest | null;
  });

export const startPlacementTest = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data: row, error } = await context.supabase
      .from("placement_tests")
      .insert({
        user_id: context.userId,
        questions: PLACEMENT_QUESTIONS,
        answers: {},
        writing_prompt: WRITING_PROMPT,
        total_questions: PLACEMENT_QUESTIONS.length,
      })
      .select(SELECT)
      .single();
    if (error) throw new Error(error.message);
    return row as unknown as PlacementTest;
  });

export const deletePlacementTest = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) => z.object({ testId: z.string() }).parse(input))
  .handler(async ({ context, data }) => {
    const { error } = await context.supabase
      .from("placement_tests")
      .delete()
      .eq("id", data.testId)
      .eq("user_id", context.userId);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

export const finishPlacementTest = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) =>
    z
      .object({
        testId: z.string(),
        answers: z.record(z.string(), z.number().int().min(0).max(3)),
        writingAnswer: z.string().max(4000),
      })
      .parse(input),
  )
  .handler(async ({ context, data }) => {
    const apiKey = process.env["LOVABLE_API_KEY"];
    if (!apiKey) throw new Error("AI indisponível no momento.");

    const { data: test, error: readError } = await context.supabase
      .from("placement_tests")
      .select("id, completed")
      .eq("id", data.testId)
      .eq("user_id", context.userId)
      .maybeSingle();
    if (readError) throw new Error(readError.message);
    if (!test) throw new Error("Teste não encontrado.");
    if (test.completed) throw new Error("Este teste já foi finalizado.");

    const { level: baseLevel, correctCount, perLevel } = estimateLevelFromAnswers(data.answers);
    const score = Math.round((correctCount / PLACEMENT_QUESTIONS.length) * 100);

    const { data: profile } = await context.supabase
      .from("profiles")
      .select("full_name, goal, target_level")
      .eq("id", context.userId)
      .maybeSingle();

    const breakdown = CEFR_ORDER.map(
      (level) => `${level}: ${perLevel[level].correct}/${perLevel[level].total}`,
    ).join(" | ");

    const { createLovableAiGatewayProvider } = await import("./ai-gateway.server");
    const gateway = createLovableAiGatewayProvider(apiKey);

    let feedback: PlacementFeedback;
    try {
      const result = await generateText({
        model: gateway("google/gemini-2.5-flash"),
        output: Output.object({ schema: feedbackSchema }),
        system:
          "Você é o avaliador de nivelamento da Speak2Co. Classifique o aluno no quadro CEFR (A1 a C1) combinando o desempenho objetivo com a qualidade do texto escrito. Comentários em português do Brasil; a reescrita do texto sempre em inglês natural. Seja encorajador, específico e objetivo.",
        prompt: `Aluno: ${profile?.full_name ?? "aluno"}
Objetivo: ${profile?.goal ?? "não informado"}
Nível desejado: ${profile?.target_level ?? "não informado"}

Resultado objetivo: ${correctCount}/${PLACEMENT_QUESTIONS.length} (${score}%)
Acertos por faixa: ${breakdown}
Nível sugerido pelo cálculo: ${baseLevel}

Prompt de escrita: ${WRITING_PROMPT}
Texto escrito pelo aluno:
"""
${data.writingAnswer.trim() || "(não respondeu)"}
"""

Devolva: level (confirme ou ajuste em no máximo um degrau em relação ao nível calculado, considerando o texto escrito), summary (2-3 frases), strengths (2 a 4), focus (2 a 4 prioridades), writingFeedback (análise do texto: gramática, vocabulário, coesão), writingRewrite (versão corrigida e natural do texto em inglês) e nextSteps (3 recomendações práticas de estudo).`,
      });
      feedback = result.output;
    } catch (e) {
      const message = e instanceof Error ? e.message : "";
      if (message.includes("429")) throw new Error("Muitas solicitações. Tente novamente em instantes.");
      if (message.includes("402")) throw new Error("Créditos de IA esgotados. Adicione créditos para continuar.");
      console.error("[nivelamento] avaliação falhou", e);
      throw new Error("Não foi possível avaliar seu teste agora.");
    }

    const { data: row, error } = await context.supabase
      .from("placement_tests")
      .update({
        answers: data.answers,
        writing_answer: data.writingAnswer,
        correct_count: correctCount,
        total_questions: PLACEMENT_QUESTIONS.length,
        score,
        level: feedback.level,
        feedback,
        completed: true,
        completed_at: new Date().toISOString(),
      })
      .eq("id", data.testId)
      .eq("user_id", context.userId)
      .select(SELECT)
      .single();
    if (error) throw new Error(error.message);

    await context.supabase
      .from("profiles")
      .update({ english_level: feedback.level })
      .eq("id", context.userId);

    // Reajusta automaticamente o plano personalizado com o novo nível.
    let planUpdated = false;
    try {
      const { buildAndSaveStudyPlan } = await import("./study-plan.server");
      await buildAndSaveStudyPlan(context.supabase, context.userId, "placement");
      planUpdated = true;
    } catch (e) {
      console.error("[nivelamento] plano não pôde ser regenerado", e);
    }

    return { ...(row as unknown as PlacementTest), planUpdated };
  });
