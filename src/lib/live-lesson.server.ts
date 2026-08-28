import type { SupabaseClient } from "@supabase/supabase-js";
import { streamText, Output } from "ai";
import { z } from "zod";
import type { Database } from "@/integrations/supabase/types";
import { createLovableAiGatewayProvider } from "@/lib/ai-gateway.server";
import { withGiselePersona } from "@/lib/gisele-ai-persona";
import { FEEDBACK_PROMPT_RULES, GiseleFeedbackSchema, type GiseleFeedback } from "@/lib/gisele-feedback-types";
import type { CourseUnit, UnitPartKey } from "@/lib/curriculum/types";
import {
  LEVEL_COACHING,
  LEVEL_LABEL,
  LIVE_STAGES,
  STAGE_LABEL,
  buildUnitBrief,
  stageExamplesFallback,
  type CourseLevel,
  type LiveLessonScript,
  type LiveStageScript,
} from "@/lib/live-lesson/script";

type Client = SupabaseClient<Database>;

const MODEL = "google/gemini-3.6-flash";
const SCRIPT_VERSION = "v1";

function gateway() {
  const apiKey = process.env["LOVABLE_API_KEY"];
  if (!apiKey) throw new Error("IA indisponível no momento.");
  return createLovableAiGatewayProvider(apiKey, undefined, { structuredOutputs: true });
}

const StageSchema = z.object({
  key: z.enum(LIVE_STAGES),
  instructorEn: z.string(),
  instructorPt: z.string(),
  promptEn: z.string(),
  promptPt: z.string(),
  hint: z.string(),
  examples: z.array(z.string()).max(6),
});

const ScriptSchema = z.object({ stages: z.array(StageSchema).max(8) });

const STAGE_BRIEF = `Escreva a fala da instrutora para cada estágio, nesta ordem exata:
1. welcome — recebe o aluno pelo nome da unidade, diz o objetivo da aula e o que ele vai conseguir fazer no fim. Sem pergunta (promptEn = "").
2. warmup — ativa o conhecimento prévio com UMA pergunta simples ligada ao tema da unidade.
3. discover — apresenta o conteúdo novo (vocabulário, expressões e gramática DA UNIDADE) com exemplos reais em examples. Sem pergunta.
4. guided — prática guiada: peça ao aluno que use uma estrutura específica da unidade numa frase.
5. speaking — conversa livre curta com a instrutora usando o vocabulário da unidade.
6. scenario — situação real ligada ao contexto da unidade; a instrutora interpreta a outra pessoa e faz a primeira fala.
7. challenge — o desafio final falado da parte, baseado no conteúdo da unidade.
8. wrapup — fecha a aula: o que foi praticado, o que revisar e uma frase de incentivo. Sem pergunta.`;

async function generateScript(unit: CourseUnit, part: UnitPartKey, level: CourseLevel): Promise<LiveStageScript[]> {
  const result = streamText({
    model: gateway()(MODEL),
    system: withGiselePersona(
      `Você é a Gisele, fundadora e instrutora da Speak2Co, conduzindo pessoalmente uma AULA AO VIVO (Live Lesson) do curso ${LEVEL_LABEL[level]}.
${LEVEL_COACHING[level]}
Fale como uma professora real falando com UM aluno: calorosa, direta, sem enrolação. Primeira pessoa ("I", "let's").
REGRA ABSOLUTA: use SOMENTE o conteúdo da unidade fornecido — não invente vocabulário, gramática, textos ou objetivos que não estejam ali.
instructorEn é a fala principal em inglês (2 a 5 frases). instructorPt é um apoio curto em português (pode ser "" quando for óbvio).
promptEn/promptPt são a tarefa dada ao aluno naquele estágio ("" quando não houver). hint é uma dica prática que o aluno pode abrir se travar.
examples são frases-modelo tiradas da unidade.
${STAGE_BRIEF}`,
    ),
    prompt: `Conteúdo oficial desta parte da aula:\n\n${buildUnitBrief(unit, part)}`,
    output: Output.object({ schema: ScriptSchema }),
  });
  const { stages } = (await result.output) as z.infer<typeof ScriptSchema>;

  const fallbackExamples = stageExamplesFallback(unit, part);
  return LIVE_STAGES.map((key) => {
    const s = stages.find((x) => x.key === key);
    return {
      key,
      instructorEn: s?.instructorEn?.trim() || STAGE_LABEL[key].en,
      instructorPt: s?.instructorPt?.trim() || "",
      promptEn: s?.promptEn?.trim() || "",
      promptPt: s?.promptPt?.trim() || "",
      hint: s?.hint?.trim() || "",
      examples: s?.examples?.length ? s.examples : key === "discover" ? fallbackExamples : [],
    } satisfies LiveStageScript;
  });
}

/** Roteiro da aula ao vivo, com cache no banco (não regenera a cada acesso). */
export async function getLiveLessonScript(
  supabase: Client,
  courseId: CourseLevel,
  unit: CourseUnit,
  part: UnitPartKey,
): Promise<LiveLessonScript> {
  const cacheKey = `${SCRIPT_VERSION}:${courseId}:${unit.code}:${part}`;
  const base = {
    courseId,
    unitCode: unit.code,
    part,
    level: courseId,
    titleEn: `Unit ${unit.number}: ${unit.title}`,
    titlePt: unit.titlePt,
  };

  const { data: cached } = await supabase
    .from("live_lesson_script_cache")
    .select("script")
    .eq("cache_key", cacheKey)
    .maybeSingle();

  if (cached?.script) {
    return { ...base, stages: cached.script as unknown as LiveStageScript[] };
  }

  const stages = await generateScript(unit, part, courseId);
  await supabase.from("live_lesson_script_cache").insert({
    cache_key: cacheKey,
    course_id: courseId,
    unit_code: unit.code,
    part,
    script: stages as unknown as Database["public"]["Tables"]["live_lesson_script_cache"]["Insert"]["script"],
  });

  return { ...base, stages };
}

/** Avaliação da resposta do aluno num estágio da aula ao vivo. */
export async function evaluateLiveAnswer(
  input: {
    level: CourseLevel;
    unitTitle: string;
    stageLabel: string;
    question: string;
    answer: string;
    spoken: boolean;
  },
): Promise<GiseleFeedback> {
  const result = streamText({
    model: gateway()(MODEL),
    system: withGiselePersona(
      `Você é a Gisele conduzindo uma Live Lesson do curso ${LEVEL_LABEL[input.level]}. ${LEVEL_COACHING[input.level]}
${FEEDBACK_PROMPT_RULES}
Neste contexto o "próximo passo" é sempre dentro desta mesma aula (repetir, tentar de novo, avançar para o próximo estágio).`,
    ),
    prompt: `Unidade: ${input.unitTitle}
Estágio: ${input.stageLabel}
Tarefa dada ao aluno: ${input.question}
Resposta do aluno (${input.spoken ? "falada, transcrita por IA" : "escrita"}): ${input.answer}`,
    output: Output.object({ schema: GiseleFeedbackSchema }),
  });
  return (await result.output) as GiseleFeedback;
}
