/**
 * Roteiro e feedback da sala guiada dos Practice Meetings.
 * Reaproveita o mesmo motor de IA já usado nas demais experiências.
 */
import { SPEAK2CO_AI_SYSTEM_PROMPT } from "@/lib/gisele-ai-persona";

export type MeetingStep = {
  id: string;
  /** Nome da etapa em inglês (padrão da plataforma). */
  label: string;
  labelPt: string;
  minutes: number;
  /** Enunciado em inglês, com tradução de apoio. */
  prompt: string;
  promptPt: string;
  /** Vocabulário/expressões de apoio da etapa. */
  support: string[];
  /** Etapa em que o aluno fala e recebe correção. */
  speaking: boolean;
};

export type MeetingFeedback = {
  summary: string;
  strengths: string[];
  improvements: string[];
  nextStep: string;
};

function fallbackScript(topic: string, level: string): MeetingStep[] {
  return [
    {
      id: "warmup",
      label: "Warm-up",
      labelPt: "Aquecimento",
      minutes: 5,
      prompt: `Introduce yourself and say what comes to your mind about "${topic}".`,
      promptPt: `Apresente-se e diga o que vem à sua cabeça sobre "${topic}".`,
      support: ["I'd say that…", "For me, …", "It reminds me of…"],
      speaking: true,
    },
    {
      id: "vocabulary",
      label: "Topic vocabulary",
      labelPt: "Vocabulário do tema",
      minutes: 5,
      prompt: `Use three expressions about "${topic}" in your own sentences.`,
      promptPt: `Use três expressões sobre "${topic}" em frases suas.`,
      support: ["in my experience", "the main challenge is", "what really helps is"],
      speaking: true,
    },
    {
      id: "speaking",
      label: "Speaking round",
      labelPt: "Rodada de fala",
      minutes: 10,
      prompt: `Tell a real story connected to "${topic}". Speak for at least one minute.`,
      promptPt: `Conte uma história real ligada a "${topic}". Fale por pelo menos um minuto.`,
      support: ["First…", "Then…", "In the end…"],
      speaking: true,
    },
    {
      id: "discussion",
      label: "Discussion",
      labelPt: "Discussão",
      minutes: 7,
      prompt: `Give your opinion: what would you change about "${topic}" and why?`,
      promptPt: `Dê sua opinião: o que você mudaria sobre "${topic}" e por quê?`,
      support: ["I believe that…", "On the other hand…", "That's why…"],
      speaking: true,
    },
    {
      id: "wrapup",
      label: "Wrap-up",
      labelPt: "Fechamento",
      minutes: 3,
      prompt: `Summarize what you practiced today at level ${level}.`,
      promptPt: `Resuma o que você praticou hoje no nível ${level}.`,
      support: ["Today I practiced…", "My next step is…"],
      speaking: true,
    },
  ];
}

async function generateJson<T>(system: string, prompt: string): Promise<T | null> {
  const apiKey = process.env["LOVABLE_API_KEY"];
  if (!apiKey) return null;
  try {
    const { createLovableAiGatewayProvider } = await import("@/lib/ai-gateway.server");
    const { generateText } = await import("ai");
    const gateway = createLovableAiGatewayProvider(apiKey);
    const { text } = await generateText({
      model: gateway("google/gemini-3.6-flash"),
      system,
      prompt,
    });
    const match = text.match(/\{[\s\S]*\}/);
    if (!match) return null;
    return JSON.parse(match[0]) as T;
  } catch (e) {
    console.error("[practice-meetings]", e);
    return null;
  }
}

/** Monta o roteiro cronometrado do encontro a partir do tema. */
export async function buildMeetingScript(input: {
  title: string;
  topic: string;
  level: string;
  durationMinutes: number;
}): Promise<MeetingStep[]> {
  const result = await generateJson<{ steps: MeetingStep[] }>(
    `${SPEAK2CO_AI_SYSTEM_PROMPT}

Você monta o roteiro de um encontro de prática guiado da Speak2Co.
Responda APENAS com JSON válido: {"steps":[{"id","label","labelPt","minutes","prompt","promptPt","support":["..."],"speaking":true}]}
Regras: 5 etapas (Warm-up, Topic vocabulary, Speaking round, Discussion, Wrap-up); "prompt" sempre em inglês e "promptPt" a tradução curta em português; 3 itens de apoio por etapa; a soma de "minutes" deve ficar próxima da duração informada.`,
    `Encontro: ${input.title}. Tema: ${input.topic}. Nível: ${input.level}. Duração: ${input.durationMinutes} minutos.`,
  );
  const steps = result?.steps;
  if (!Array.isArray(steps) || steps.length === 0) {
    return fallbackScript(input.topic || input.title, input.level);
  }
  return steps.map((s, i) => ({
    id: s.id || `step-${i + 1}`,
    label: s.label ?? "Step",
    labelPt: s.labelPt ?? "Etapa",
    minutes: Number(s.minutes) || 5,
    prompt: s.prompt ?? "",
    promptPt: s.promptPt ?? "",
    support: Array.isArray(s.support) ? s.support.slice(0, 4) : [],
    speaking: s.speaking !== false,
  }));
}

/** Feedback final individual do encontro. */
export async function buildMeetingFeedback(
  answers: { prompt: string; answer: string }[],
): Promise<MeetingFeedback> {
  const transcript = answers
    .filter((a) => a.answer.trim())
    .map((a) => `Task: ${a.prompt}\nStudent: ${a.answer}`)
    .join("\n\n");

  const fallback: MeetingFeedback = {
    summary: "Você concluiu o encontro. Continue praticando o mesmo tema durante a semana.",
    strengths: ["Participou de todas as etapas do encontro."],
    improvements: ["Grave respostas mais longas para receber correções mais detalhadas."],
    nextStep: "Repita a rodada de fala amanhã, com mais detalhes na sua história.",
  };
  if (!transcript) return fallback;

  const result = await generateJson<MeetingFeedback>(
    `${SPEAK2CO_AI_SYSTEM_PROMPT}

Você fecha um encontro de prática da Speak2Co com feedback individual.
Responda APENAS com JSON válido: {"summary","strengths":["..."],"improvements":["..."],"nextStep"}
"summary" e "nextStep" em português curto; "strengths" e "improvements" com até 4 itens cada, citando exemplos reais da fala do aluno (original → versão natural em inglês).`,
    transcript,
  );
  if (!result) return fallback;
  return {
    summary: result.summary ?? fallback.summary,
    strengths: Array.isArray(result.strengths) ? result.strengths.slice(0, 4) : fallback.strengths,
    improvements: Array.isArray(result.improvements)
      ? result.improvements.slice(0, 4)
      : fallback.improvements,
    nextStep: result.nextStep ?? fallback.nextStep,
  };
}
