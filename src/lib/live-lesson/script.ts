import type { Bi, CourseUnit, UnitPartKey } from "@/lib/curriculum/types";

/**
 * SPEAK2CO LIVE LESSON — camada de instrutora sobre o currículo existente.
 *
 * Este módulo é puro: transforma uma unidade do curso (conteúdo oficial, que
 * NÃO é alterado nem duplicado) num roteiro de aula ao vivo com 9 estágios.
 * O texto falado pela Gisele é gerado depois, no servidor, a partir do brief
 * montado aqui — nunca de conteúdo inventado.
 */

export const LIVE_STAGES = [
  "welcome",
  "warmup",
  "discover",
  "guided",
  "speaking",
  "scenario",
  "challenge",
  "wrapup",
] as const;

export type LiveStageKey = (typeof LIVE_STAGES)[number];

export const STAGE_LABEL: Record<LiveStageKey, Bi> = {
  welcome: { en: "Welcome", pt: "Boas-vindas" },
  warmup: { en: "Warm-up", pt: "Aquecimento" },
  discover: { en: "Discover", pt: "Descobrir" },
  guided: { en: "Guided Practice", pt: "Prática guiada" },
  speaking: { en: "AI Speaking Practice", pt: "Conversa com a Gisele" },
  scenario: { en: "Real-life Scenario", pt: "Situação real" },
  challenge: { en: "Challenge", pt: "Desafio" },
  wrapup: { en: "Lesson Wrap-up", pt: "Fechamento da aula" },
};

export type StageInteraction = "none" | "speak" | "speak-or-type";

export const STAGE_INTERACTION: Record<LiveStageKey, StageInteraction> = {
  welcome: "none",
  warmup: "speak-or-type",
  discover: "none",
  guided: "speak-or-type",
  speaking: "speak-or-type",
  scenario: "speak-or-type",
  challenge: "speak",
  wrapup: "none",
};

export type CourseLevel = "beginner" | "intermediate" | "upper";

export const LEVEL_LABEL: Record<CourseLevel, string> = {
  beginner: "Beginner (A1–A2)",
  intermediate: "Intermediate (B1)",
  upper: "Upper-Intermediate (B2)",
};

/** Como a instrutora conduz a aula em cada nível. */
export const LEVEL_COACHING: Record<CourseLevel, string> = {
  beginner:
    "Frases curtas, ritmo mais lento, vocabulário essencial, muita repetição e bastante apoio. Corrija com gentileza e peça repetição.",
  intermediate:
    "Frases conversacionais naturais, perguntas de acompanhamento, complexidade moderada e apoio gradualmente menor.",
  upper:
    "Inglês natural e espontâneo, expressões idiomáticas, nuance, perguntas desafiadoras e postura de conversation coach.",
};

export type LiveStageScript = {
  key: LiveStageKey;
  /** Fala da instrutora (inglês em destaque). */
  instructorEn: string;
  /** Apoio curto em português (pode ser vazio quando óbvio). */
  instructorPt: string;
  /** Pergunta/tarefa dada ao aluno neste estágio (vazio quando não há). */
  promptEn: string;
  promptPt: string;
  /** Dica liberada pelo botão 💡 Hint. */
  hint: string;
  /** Exemplos ou frases-modelo tiradas do conteúdo da unidade. */
  examples: string[];
};

export type LiveLessonScript = {
  courseId: string;
  unitCode: string;
  part: UnitPartKey;
  level: CourseLevel;
  titleEn: string;
  titlePt: string;
  stages: LiveStageScript[];
};

const list = (items: string[], max = 12) => items.filter(Boolean).slice(0, max).join(" | ");

/**
 * Brief compacto com o conteúdo REAL da unidade — é a única fonte permitida
 * para o roteiro da instrutora.
 */
export function buildUnitBrief(unit: CourseUnit, part: UnitPartKey): string {
  const header = [
    `UNIDADE: ${unit.code} — Unit ${unit.number}: ${unit.title} (${unit.titlePt})`,
    `CEFR: ${unit.cefr}`,
    `OBJETIVO: ${unit.objective.en}`,
    `META DE COMUNICAÇÃO: ${unit.communicationGoal.en}`,
    `CONTEÚDO NOVO: ${unit.newContent.en}`,
    `REVISÃO: ${unit.reviewContent.en}`,
  ].join("\n");

  if (part === "discover") {
    const d = unit.discover;
    return [
      header,
      `PARTE: Part 1 — Discover`,
      `WARM-UP: ${d.warmUp.prompt.en} — frases: ${list(d.warmUp.phrases.map((p) => p.en))}`,
      `CONTEXTO: ${d.context.situation.en}`,
      `DIÁLOGO: ${list(d.context.dialogue.map((l) => `${l.who}: ${l.en}`))}`,
      `VOCABULÁRIO: ${list(d.vocabulary.map((v) => `${v.term} (${v.pt}) — ${v.example}`))}`,
      `EXPRESSÕES: ${list(d.expressions.map((e) => e.en))}`,
      `GRAMÁTICA: ${list(
        d.grammar.map((g) => `${g.title.en} — regra: ${g.rule.en} — exemplos: ${g.examples.map((e) => e.en).join("; ")}`),
        4,
      )}`,
      `ERROS COMUNS: ${list(d.grammar.flatMap((g) => g.mistakes.map((m) => m.en)), 6)}`,
      `${d.input.kind === "reading" ? "LEITURA" : "LISTENING"}: ${d.input.title.en} — ${list(
        d.input.lines.map((l) => l.en),
        6,
      )}`,
    ].join("\n");
  }

  const c = unit.communicate;
  return [
    header,
    `PARTE: Part 2 — Communicate`,
    `RETOMADA: ${list(c.review.map((r) => r.en))}`,
    `ATIVIDADES: ${list(
      c.activities.map((a) => `${a.title.en} — ${a.instruction.en} — frases: ${a.phrases.map((p) => p.en).join("; ")}`),
      5,
    )}`,
    `DESAFIO: ${c.challenge.title.en} — ${c.challenge.instruction.en} — frases: ${list(
      c.challenge.phrases.map((p) => p.en),
      6,
    )}`,
    `RESUMO DA UNIDADE: ${c.lessonReview.summary.en}`,
    `CAN-DO: ${list(c.lessonReview.canDo.map((x) => x.en))}`,
    `PRÓXIMO PASSO: ${c.lessonReview.next.en}`,
  ].join("\n");
}

/** Vocabulário e gramática praticados nesta parte (para o progresso). */
export function partFocus(unit: CourseUnit, part: UnitPartKey) {
  if (part === "discover") {
    return {
      vocabulary: unit.discover.vocabulary.map((v) => v.term),
      grammar: unit.discover.grammar.map((g) => g.title.en),
    };
  }
  return {
    vocabulary: unit.communicate.review.map((r) => r.en).slice(0, 10),
    grammar: [unit.communicate.challenge.title.en],
  };
}

/** Frases-modelo da unidade para o aluno ouvir e repetir. */
export function stageExamplesFallback(unit: CourseUnit, part: UnitPartKey): string[] {
  if (part === "discover") {
    return [
      ...unit.discover.expressions.map((e) => e.en),
      ...unit.discover.vocabulary.map((v) => v.example),
    ].slice(0, 6);
  }
  return unit.communicate.challenge.phrases.map((p) => p.en).slice(0, 6);
}
