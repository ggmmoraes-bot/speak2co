import type { SupabaseClient } from "@supabase/supabase-js";
import { streamText, Output } from "ai";
import { z } from "zod";
import type { Database } from "@/integrations/supabase/types";
import { createLovableAiGatewayProvider } from "@/lib/ai-gateway.server";
import { withGiselePersona } from "@/lib/gisele-ai-persona";
import { buildStudentSnapshot, describeSnapshot } from "@/lib/gisele-context.server";
import {
  FEEDBACK_PROMPT_RULES,
  GiseleFeedbackSchema,
  type GiseleFeedback,
} from "@/lib/gisele-feedback-types";

type Client = SupabaseClient<Database>;

const MODEL = "google/gemini-3.6-flash";

function gateway() {
  const apiKey = process.env["LOVABLE_API_KEY"];
  if (!apiKey) throw new Error("IA indisponível no momento.");
  return createLovableAiGatewayProvider(apiKey, undefined, { structuredOutputs: true });
}

async function structured<T>(schema: z.ZodType<T>, system: string, prompt: string): Promise<T> {
  const result = streamText({
    model: gateway()(MODEL),
    system: withGiselePersona(system),
    prompt,
    output: Output.object({ schema: schema as z.ZodType<T> }),
  });
  return (await result.output) as T;
}

/* ------------------------------ Atividades ------------------------------ */

export const ACTIVITY_KINDS = [
  "listening",
  "writing",
  "review",
  "reallife",
  "weakness",
  "challenge",
  "practice",
] as const;
export type ActivityKind = (typeof ACTIVITY_KINDS)[number];

export const ActivitySchema = z.object({
  titleEn: z.string(),
  titlePt: z.string(),
  whyThis: z.string(),
  instructionsEn: z.string(),
  instructionsPt: z.string(),
  /** Texto que a GiseleAI vai falar em voz alta (listening / role-play). */
  spokenText: z.string().nullable(),
  /** Perguntas ou pontos que o aluno deve responder. */
  prompts: z.array(z.string()).max(5),
  targetSkill: z.enum(["speaking", "listening", "writing", "grammar", "vocabulary", "pronunciation"]),
});
export type GiseleActivity = z.infer<typeof ActivitySchema>;

const KIND_BRIEF: Record<ActivityKind, string> = {
  listening: "Uma prática de LISTENING: um trecho curto (60-110 palavras) em inglês natural em spokenText e 2-3 perguntas de compreensão em prompts.",
  writing: "Uma prática de WRITING: um prompt de escrita relevante para o aluno, com orientação de extensão. spokenText = null.",
  review: "Uma REVISÃO do que o aluno já praticou com a GiseleAI (vocabulário, expressões e correções recentes), com recuperação ativa.",
  reallife: "Uma SIMULAÇÃO de situação real (role-play). Descreva a cena e o papel que a GiseleAI vai interpretar; spokenText = a primeira fala da outra pessoa.",
  weakness: "Uma prática focada nos PONTOS FRACOS reais do aluno, explicando em whyThis por que este foco agora.",
  challenge: "O DESAFIO DE HOJE: uma tarefa falada curta e estimulante (1-3 minutos), como 'Speak for two minutes about your weekend.'",
  practice: "Uma prática personalizada escolhida pela GiseleAI a partir do desempenho recente, explicando o porquê em whyThis.",
};

export async function generateActivity(
  supabase: Client,
  userId: string,
  kind: ActivityKind,
  topic?: string,
): Promise<GiseleActivity> {
  const snapshot = await buildStudentSnapshot(supabase, userId);
  return structured(
    ActivitySchema,
    `Você vai criar uma atividade dentro da GiseleAI. ${KIND_BRIEF[kind]}
Adapte ao nível e ao objetivo reais do aluno. Enunciados em inglês (instructionsEn) com tradução curta (instructionsPt).
NUNCA mencione ou recomende Speak2Travel, Speak2Hire, Speak2Fluency, Learning Tools, AI Teacher, cursos ou outras áreas: tudo acontece dentro da GiseleAI.`,
    `${describeSnapshot(snapshot)}\n\nTema/pedido do aluno: ${topic?.trim() || "livre — escolha o mais útil agora"}`,
  );
}

/* ------------------------------- Feedback ------------------------------- */

export async function evaluateAnswer(
  supabase: Client,
  userId: string,
  params: { activityTitle: string; question: string; answer: string; mode?: string },
): Promise<GiseleFeedback> {
  const snapshot = await buildStudentSnapshot(supabase, userId);
  const feedback = await structured(
    GiseleFeedbackSchema,
    FEEDBACK_PROMPT_RULES,
    `${describeSnapshot(snapshot)}

Atividade: ${params.activityTitle}
Tipo de prática: ${params.mode ?? "practice"}
Pedido feito ao aluno: ${params.question}
Resposta do aluno:
"""${params.answer}"""`,
  );

  await supabase.from("ai_feedback").insert({
    user_id: userId,
    category: feedback.category,
    observation: `✅ ${feedback.whatYouDidWell}\n🎯 ${feedback.letsImprove}\n➡️ ${feedback.nextStep}`,
    priority: feedback.priority,
  });

  return feedback;
}

/* ------------------- How Would Gisele Say It? / Correct Me -------------- */

export const RephraseSchema = z.object({
  naturalEnglish: z.string(),
  casualEnglish: z.string().nullable(),
  professionalEnglish: z.string().nullable(),
  moreNaturalEnglish: z.string().nullable(),
  note: z.string(),
});
export type RephraseResult = z.infer<typeof RephraseSchema>;

export async function rephrase(input: string): Promise<RephraseResult> {
  return structured(
    RephraseSchema,
    `A ferramenta "How Would Gisele Say It?": o aluno diz o que quer expressar (em português ou inglês imperfeito) e você devolve a versão em inglês natural.
Sempre preencha naturalEnglish. Preencha casualEnglish, professionalEnglish e moreNaturalEnglish apenas quando fizerem diferença real (caso contrário, null).
"note": explicação curta e amigável da escolha (1-2 frases).`,
    input,
  );
}

export const CorrectionSchema = z.object({
  worthCorrecting: z.boolean(),
  youSaid: z.string(),
  betterWay: z.string(),
  why: z.string(),
});
export type CorrectionResult = z.infer<typeof CorrectionSchema>;

export async function correctMe(input: string): Promise<CorrectionResult> {
  return structured(
    CorrectionSchema,
    `A ferramenta "Correct me": o aluno pede correção de algo que disse.
Corrija apenas o que impacta a comunicação ou é relevante para o desenvolvimento dele. Se estiver bom, worthCorrecting = false e elogie em "why".
Formato: youSaid (o que ele disse), betterWay (uma forma mais natural), why (por quê, curto e claro).`,
    input,
  );
}

/* ---------------------------- Mini aula --------------------------------- */

export const LessonSchema = z.object({
  titleEn: z.string(),
  titlePt: z.string(),
  warmUp: z.string(),
  vocabulary: z.array(z.object({ term: z.string(), meaning: z.string(), example: z.string() })).max(8),
  expressions: z.array(z.string()).max(6),
  grammar: z.string(),
  speaking: z.string(),
  practice: z.string(),
  feedbackFocus: z.string(),
  review: z.string(),
});
export type GiseleLesson = z.infer<typeof LessonSchema>;

export async function createLesson(
  supabase: Client,
  userId: string,
  topic?: string,
): Promise<GiseleLesson> {
  const snapshot = await buildStudentSnapshot(supabase, userId);
  return structured(
    LessonSchema,
    `Crie uma MINI AULA da GiseleAI com a estrutura: Warm-up, Vocabulary, Expressions, Grammar, Speaking, Practice, Feedback focus, Review.
Tudo acontece dentro da GiseleAI — nunca envie o aluno para outra área da plataforma.`,
    `${describeSnapshot(snapshot)}\n\nPedido do aluno: ${topic?.trim() || "escolha o tema mais útil agora"}`,
  );
}

/* ------------------- Focus areas e learning notes (dados reais) --------- */

export type FocusAreasResult = {
  areas: { area: string; evidence: string; count: number }[];
  basedOnSessions: number;
};

const SKILL_LABEL: Record<string, string> = {
  grammar: "Grammar",
  vocabulary: "Vocabulary",
  pronunciation: "Pronunciation",
  fluency: "Fluency",
  strategy: "Speaking strategy",
  conversation: "Speaking confidence",
  interview: "Professional speaking",
  travel: "Real-life situations",
};

/** Focus areas derivadas apenas de feedback e sessões reais do aluno. */
export async function buildFocusAreas(supabase: Client, userId: string): Promise<FocusAreasResult> {
  const [{ data: feedback }, { data: sessions }] = await Promise.all([
    supabase
      .from("ai_feedback")
      .select("category, observation, created_at")
      .eq("user_id", userId)
      .order("created_at", { ascending: false })
      .limit(30),
    supabase.from("gisele_sessions").select("id, focus").eq("user_id", userId),
  ]);

  const counts = new Map<string, { count: number; evidence: string }>();
  for (const row of feedback ?? []) {
    const current = counts.get(row.category) ?? { count: 0, evidence: row.observation ?? "" };
    current.count += 1;
    counts.set(row.category, current);
  }

  const areas = [...counts.entries()]
    .sort((a, b) => b[1].count - a[1].count)
    .slice(0, 3)
    .map(([category, value]) => ({
      area: SKILL_LABEL[category] ?? category,
      evidence: value.evidence.split("\n")[0] ?? "",
      count: value.count,
    }));

  return { areas, basedOnSessions: (sessions ?? []).length };
}

export type LearningNote = { id: string; content: string; created_at: string };

export async function listLearningNotes(
  supabase: Client,
  userId: string,
): Promise<LearningNote[]> {
  const { data } = await supabase
    .from("gisele_memory")
    .select("id, content, created_at")
    .eq("user_id", userId)
    .eq("kind", "note")
    .order("created_at", { ascending: false })
    .limit(20);
  return (data ?? []) as LearningNote[];
}

/** Cria uma observação curta da jornada com base em dados reais; sem dados, não inventa. */
export async function writeLearningNote(supabase: Client, userId: string): Promise<LearningNote | null> {
  const snapshot = await buildStudentSnapshot(supabase, userId);
  const { data: sessions } = await supabase
    .from("gisele_sessions")
    .select("id")
    .eq("user_id", userId)
    .limit(1);
  if (!sessions || sessions.length === 0) return null;

  const NoteSchema = z.object({ note: z.string() });
  const { note } = await structured(
    NoteSchema,
    `Escreva UMA observação curta (1-2 frases) sobre a jornada do aluno, começando por "GiseleAI noticed that...".
Baseie-se apenas nos dados reais fornecidos. Nunca invente progresso, notas ou certificados.`,
    describeSnapshot(snapshot),
  );

  const { data } = await supabase
    .from("gisele_memory")
    .insert({ user_id: userId, kind: "note", content: note })
    .select("id, content, created_at")
    .maybeSingle();

  return (data as LearningNote | null) ?? null;
}
