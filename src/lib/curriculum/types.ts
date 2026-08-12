/**
 * Modelo de dados do novo currículo Speak2Co (Beginner, Intermediate e
 * Upper-Intermediate). Cada unidade tem duas partes com identificador próprio
 * e estável — ex.: BEGINNER-U01-DISCOVER / BEGINNER-U01-COMMUNICATE — usadas
 * como chave de progresso, revisão e navegação.
 */

/** Enunciado bilíngue: inglês é sempre o texto principal. */
export type Bi = { en: string; pt: string };

export type VocabEntry = {
  term: string;
  pt: string;
  ipa: string;
  definition: string;
  example: string;
  examplePt: string;
};

export type GrammarPoint = {
  title: Bi;
  /** Exemplos vêm antes da regra — método Speak2Co. */
  examples: Bi[];
  rule: Bi;
  mistakes: Bi[];
};

export type CheckQuestion = {
  id: string;
  prompt: Bi;
  options: string[];
  answer: string;
  explanation: Bi;
};

export type DialogueLine = { who: string; en: string; pt: string };

export type ReadingBlock = {
  kind: "reading" | "listening";
  title: Bi;
  lines: Bi[];
  questions: CheckQuestion[];
};

export type SpeakingTask = {
  id: string;
  title: Bi;
  instruction: Bi;
  phrases: Bi[];
};

export type Activity = {
  id: string;
  title: Bi;
  instruction: Bi;
  /** Prática de fala com checagem de pronúncia por IA. */
  phrases: Bi[];
  /** Checagem obrigatória da atividade. */
  check: CheckQuestion[];
};

export type DiscoverPart = {
  id: string;
  warmUp: { prompt: Bi; phrases: Bi[] };
  context: { situation: Bi; dialogue: DialogueLine[] };
  vocabulary: VocabEntry[];
  expressions: Bi[];
  grammar: GrammarPoint[];
  controlledPractice: CheckQuestion[];
  input: ReadingBlock;
  quickCheck: CheckQuestion[];
};

export type CommunicatePart = {
  id: string;
  review: Bi[];
  activities: Activity[];
  challenge: SpeakingTask & { check: CheckQuestion[] };
  lessonReview: { summary: Bi; canDo: Bi[]; next: Bi };
};

export type CourseUnit = {
  /** Ex.: BEGINNER-U01 */
  code: string;
  number: number;
  title: string;
  titlePt: string;
  cefr: string;
  objective: Bi;
  communicationGoal: Bi;
  prerequisites: Bi;
  newContent: Bi;
  reviewContent: Bi;
  discover: DiscoverPart;
  communicate: CommunicatePart;
};

export type UnitPartKey = "discover" | "communicate";

export const PART_LABEL: Record<UnitPartKey, Bi> = {
  discover: { en: "Part 1 — Discover", pt: "Parte 1 — Descobrir" },
  communicate: { en: "Part 2 — Communicate", pt: "Parte 2 — Comunicar" },
};

/** Frases praticáveis (pronúncia com IA) de uma parte da unidade. */
export function partPhrases(unit: CourseUnit, part: UnitPartKey): Bi[] {
  if (part === "discover") {
    const d = unit.discover;
    return [
      ...d.warmUp.phrases,
      ...d.context.dialogue.map((l) => ({ en: l.en, pt: l.pt })),
      ...d.vocabulary.map((v) => ({ en: v.example, pt: v.examplePt })),
      ...d.expressions,
    ];
  }
  const c = unit.communicate;
  return [...c.activities.flatMap((a) => a.phrases), ...c.challenge.phrases];
}

/** Todas as questões de checagem de uma parte. */
export function partChecks(unit: CourseUnit, part: UnitPartKey): CheckQuestion[] {
  if (part === "discover") {
    return [
      ...unit.discover.controlledPractice,
      ...unit.discover.input.questions,
      ...unit.discover.quickCheck,
    ];
  }
  return [...unit.communicate.activities.flatMap((a) => a.check), ...unit.communicate.challenge.check];
}
