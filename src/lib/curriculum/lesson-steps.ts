import type { Bi, CourseUnit, UnitPartKey } from "./types";

/**
 * Passos ("lessons") de cada parte de uma unidade. A mesma lista alimenta o
 * accordion do curso (lista de aulas) e o LessonPlayer (uma etapa por tela),
 * garantindo numeração idêntica nos dois lugares.
 *
 * Estrutura reutilizável: qualquer produto futuro pode montar sua própria
 * lista de steps no mesmo formato e usar o LessonPlayer.
 */
export type LessonStepMeta = {
  key: string;
  title: Bi;
};

export function partStepTitles(unit: CourseUnit, part: UnitPartKey): LessonStepMeta[] {
  if (part === "discover") {
    const d = unit.discover;
    const steps: LessonStepMeta[] = [
      { key: "warmup", title: { en: "Warm-up", pt: "Aquecimento" } },
      { key: "context", title: { en: "Conversation in Context", pt: "Conversa em contexto" } },
      { key: "vocabulary", title: { en: "Vocabulary", pt: "Vocabulário" } },
      { key: "expressions", title: { en: "Expressions", pt: "Expressões úteis" } },
      { key: "grammar", title: { en: "Grammar", pt: "Gramática em uso" } },
      { key: "practice", title: { en: "Controlled Practice", pt: "Prática controlada" } },
      {
        key: "input",
        title:
          d.input.kind === "reading"
            ? { en: "Reading", pt: "Leitura" }
            : { en: "Listening", pt: "Escuta" },
      },
      { key: "quickcheck", title: { en: "Quick Check", pt: "Checagem rápida" } },
    ];
    return steps;
  }
  const c = unit.communicate;
  return [
    { key: "review", title: { en: "Review", pt: "Retomada" } },
    ...c.activities.map((a) => ({ key: `act:${a.id}`, title: a.title })),
    { key: "challenge", title: c.challenge.title },
    { key: "wrapup", title: { en: "Lesson Review", pt: "Resumo da unidade" } },
  ];
}

/**
 * Estrutura mostrada ao aluno na lista da unidade: 6 aulas por unidade.
 * Part 1 — Discover: Lessons 1–5. Part 2 — Communicate: Lesson 6 (Lesson Review).
 * Cada aula aponta para a etapa inicial correspondente dentro do LessonPlayer.
 */
export type UnitLessonEntry = {
  key: string;
  number: number;
  title: Bi;
  /** Índice (1-based) da etapa dentro do LessonPlayer daquela parte. */
  stepIndex: number;
};

export function partLessonEntries(unit: CourseUnit, part: UnitPartKey): UnitLessonEntry[] {
  const steps = partStepTitles(unit, part);
  const indexOf = (key: string) => Math.max(1, steps.findIndex((s) => s.key === key) + 1);

  if (part === "discover") {
    const inputTitle = steps.find((s) => s.key === "input")?.title ?? {
      en: "Listening",
      pt: "Escuta",
    };
    return [
      {
        key: "warmup",
        number: 1,
        title: { en: "Warm-up & Conversation in Context", pt: "Aquecimento e conversa em contexto" },
        stepIndex: indexOf("warmup"),
      },
      {
        key: "vocabulary",
        number: 2,
        title: { en: "Vocabulary", pt: "Vocabulário" },
        stepIndex: indexOf("vocabulary"),
      },
      {
        key: "expressions",
        number: 3,
        title: { en: "Expressions & Grammar in Use", pt: "Expressões e gramática em uso" },
        stepIndex: indexOf("expressions"),
      },
      {
        key: "practice",
        number: 4,
        title: { en: "Controlled Practice", pt: "Prática controlada" },
        stepIndex: indexOf("practice"),
      },
      {
        key: "input",
        number: 5,
        title: { en: `${inputTitle.en} & Quick Check`, pt: `${inputTitle.pt} e checagem rápida` },
        stepIndex: indexOf("input"),
      },
    ];
  }

  return [
    {
      key: "communicate",
      number: 6,
      title: { en: "Lesson Review", pt: "Resumo da unidade" },
      stepIndex: 1,
    },
  ];
}
