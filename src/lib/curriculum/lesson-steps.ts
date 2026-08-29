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
    { key: "speak2drill", title: { en: "Speak2Drill", pt: "Speak2Drill — fluência por substituição" } },
  ];
}
