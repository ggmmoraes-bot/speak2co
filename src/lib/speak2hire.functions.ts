import { createServerFn } from "@tanstack/react-start";
import { requireFeature } from "@/lib/entitlement-middleware";
import { generateText, Output } from "ai";
import { z } from "zod";
import { getTrack, type InterviewQuestion } from "./speak2hire-content";

const SELECT =
  "id, track, title, questions, answers, durations, total_seconds, feedback, score, completed, created_at, completed_at";

const feedbackItemSchema = z.object({
  questionId: z.string(),
  strengths: z.string(),
  improvements: z.string(),
  rewrite: z.string(),
});

const feedbackSchema = z.object({
  score: z.number(),
  summary: z.string(),
  highlights: z.array(z.string()),
  focus: z.array(z.string()),
  items: z.array(feedbackItemSchema),
});

export type InterviewFeedback = z.infer<typeof feedbackSchema>;

export type InterviewSession = {
  id: string;
  track: string;
  title: string;
  questions: InterviewQuestion[];
  answers: Record<string, string>;
  durations: Record<string, number>;
  total_seconds: number;
  feedback: InterviewFeedback | null;
  score: number | null;
  completed: boolean;
  created_at: string;
  completed_at: string | null;
};

export const listInterviewSessions = createServerFn({ method: "GET" })
  .middleware([requireFeature("product_line_hire")])
  .handler(async ({ context }) => {
    const { data, error } = await context.supabase
      .from("interview_sessions")
      .select(SELECT)
      .eq("user_id", context.userId)
      .order("created_at", { ascending: false })
      .limit(50);
    if (error) throw new Error(error.message);
    return (data ?? []) as unknown as InterviewSession[];
  });

export const getInterviewSession = createServerFn({ method: "GET" })
  .middleware([requireFeature("product_line_hire")])
  .inputValidator((input: unknown) => z.object({ sessionId: z.string() }).parse(input))
  .handler(async ({ context, data }) => {
    const { data: row, error } = await context.supabase
      .from("interview_sessions")
      .select(SELECT)
      .eq("id", data.sessionId)
      .eq("user_id", context.userId)
      .maybeSingle();
    if (error) throw new Error(error.message);
    return (row ?? null) as unknown as InterviewSession | null;
  });

export const startInterviewSession = createServerFn({ method: "POST" })
  .middleware([requireFeature("product_line_hire")])
  .inputValidator((input: unknown) => z.object({ trackId: z.string() }).parse(input))
  .handler(async ({ context, data }) => {
    const track = getTrack(data.trackId);
    if (!track) throw new Error("Trilha de entrevista não encontrada.");

    const { data: row, error } = await context.supabase
      .from("interview_sessions")
      .insert({
        user_id: context.userId,
        track: track.id,
        title: track.title,
        questions: track.questions,
        answers: {},
        durations: {},
      })
      .select(SELECT)
      .single();
    if (error) throw new Error(error.message);
    return row as unknown as InterviewSession;
  });

export const saveInterviewAnswer = createServerFn({ method: "POST" })
  .middleware([requireFeature("product_line_hire")])
  .inputValidator((input: unknown) =>
    z
      .object({
        sessionId: z.string(),
        questionId: z.string(),
        answer: z.string(),
        seconds: z.number().int().min(0),
      })
      .parse(input),
  )
  .handler(async ({ context, data }) => {
    const { data: existing, error: readError } = await context.supabase
      .from("interview_sessions")
      .select("answers, durations, total_seconds, completed")
      .eq("id", data.sessionId)
      .eq("user_id", context.userId)
      .maybeSingle();
    if (readError) throw new Error(readError.message);
    if (!existing) throw new Error("Sessão não encontrada.");
    if (existing.completed) throw new Error("Esta sessão já foi finalizada.");

    const answers = { ...((existing.answers ?? {}) as Record<string, string>) };
    const durations = { ...((existing.durations ?? {}) as Record<string, number>) };
    answers[data.questionId] = data.answer;
    durations[data.questionId] = data.seconds;
    const total = Object.values(durations).reduce((sum, value) => sum + (value ?? 0), 0);

    const { data: row, error } = await context.supabase
      .from("interview_sessions")
      .update({ answers, durations, total_seconds: total })
      .eq("id", data.sessionId)
      .eq("user_id", context.userId)
      .select(SELECT)
      .single();
    if (error) throw new Error(error.message);
    return row as unknown as InterviewSession;
  });

export const finishInterviewSession = createServerFn({ method: "POST" })
  .middleware([requireFeature("product_line_hire")])
  .inputValidator((input: unknown) => z.object({ sessionId: z.string() }).parse(input))
  .handler(async ({ context, data }) => {
    const apiKey = process.env["LOVABLE_API_KEY"];
    if (!apiKey) throw new Error("AI indisponível no momento.");

    const { data: session, error: readError } = await context.supabase
      .from("interview_sessions")
      .select(SELECT)
      .eq("id", data.sessionId)
      .eq("user_id", context.userId)
      .maybeSingle();
    if (readError) throw new Error(readError.message);
    if (!session) throw new Error("Sessão não encontrada.");

    const questions = (session.questions ?? []) as unknown as InterviewQuestion[];
    const answers = (session.answers ?? {}) as Record<string, string>;
    const durations = (session.durations ?? {}) as Record<string, number>;

    const answered = questions.filter((question) => (answers[question.id] ?? "").trim().length > 0);
    if (answered.length === 0) throw new Error("Responda pelo menos uma pergunta antes de finalizar.");

    const { data: profile } = await context.supabase
      .from("profiles")
      .select("full_name, english_level, goal, target_level")
      .eq("id", context.userId)
      .maybeSingle();

    const transcript = answered
      .map(
        (question) =>
          `Pergunta (${question.id}): ${question.prompt}\nEstrutura esperada: ${question.structure}\nTempo usado: ${durations[question.id] ?? 0}s (recomendado ${question.seconds}s)\nResposta do aluno: ${answers[question.id]}`,
      )
      .join("\n\n");

    const { createLovableAiGatewayProvider } = await import("./ai-gateway.server");
    const gateway = createLovableAiGatewayProvider(apiKey, undefined, { structuredOutputs: true });

    let feedback: InterviewFeedback;
    try {
      const result = await generateText({
        model: gateway("google/gemini-2.5-flash"),
        output: Output.object({ schema: feedbackSchema }),
        system:
          "Você é o coach do Speak2Hire, módulo de entrevistas em inglês da Speak2Co, baseado nos materiais The Interview Blueprint, STAR Method Mastery, Mock Interview Blueprint e S.O.S. Pocket Guide. Avalie respostas de entrevista em inglês. Comentários e orientações em português do Brasil; as reescritas (rewrite) sempre em inglês corporativo natural. Cobre: estrutura (Present-Past-Future ou STAR), uso de 'I' em vez de 'we', verbos de ação fortes, resultado quantificado, ausência de tradução literal e concisão (60-90s). Dê uma nota de 0 a 100.",
        prompt: `Aluno: ${profile?.full_name ?? "aluno"}
Nível atual: ${profile?.english_level ?? "não avaliado"}
Nível desejado: ${profile?.target_level ?? "B2"}
Objetivo: ${profile?.goal ?? "carreira internacional"}
Trilha: ${session.title}

Transcrição da simulação:
${transcript}

Devolva: score (0-100), summary (2-3 frases), highlights (2 a 4 pontos fortes), focus (2 a 4 prioridades de melhoria) e items com um objeto por pergunta respondida (questionId exatamente como informado, strengths, improvements e rewrite — uma versão modelo da resposta em inglês, de 60 a 90 segundos falados).`,
      });
      feedback = result.output;
    } catch (e) {
      const message = e instanceof Error ? e.message : "";
      if (message.includes("429")) throw new Error("Muitas solicitações. Tente novamente em instantes.");
      if (message.includes("402")) throw new Error("Créditos de IA esgotados. Adicione créditos para continuar.");
      console.error("[speak2hire] feedback falhou", e);
      throw new Error("Não foi possível avaliar sua entrevista agora.");
    }

    const score = Math.max(0, Math.min(100, Math.round(feedback.score)));

    const { data: row, error } = await context.supabase
      .from("interview_sessions")
      .update({
        feedback,
        score,
        completed: true,
        completed_at: new Date().toISOString(),
      })
      .eq("id", data.sessionId)
      .eq("user_id", context.userId)
      .select(SELECT)
      .single();
    if (error) throw new Error(error.message);
    return row as unknown as InterviewSession;
  });

export const deleteInterviewSession = createServerFn({ method: "POST" })
  .middleware([requireFeature("product_line_hire")])
  .inputValidator((input: unknown) => z.object({ sessionId: z.string() }).parse(input))
  .handler(async ({ context, data }) => {
    const { error } = await context.supabase
      .from("interview_sessions")
      .delete()
      .eq("id", data.sessionId)
      .eq("user_id", context.userId);
    if (error) throw new Error(error.message);
    return { ok: true };
  });
