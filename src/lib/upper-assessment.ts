import type { QuizQuestion } from "@/lib/beginner-course";
import { UPPER_UNITS } from "@/lib/upper-course";

/** Identificador usado em course_progress para guardar o assessment final. */
export const UPPER_ASSESSMENT_ID = "final-assessment";

/** Nota mínima para aprovação no assessment final do Upper-Intermediate. */
export const UPPER_PASS_SCORE = 70;

export type AssessmentQuestion = QuizQuestion & { lessonNumber: number; lessonTitle: string };

/** Uma questão de cada uma das 50 unidades do currículo oficial B2. */
export const UPPER_ASSESSMENT: AssessmentQuestion[] = UPPER_UNITS.map((unit, index) => {
  const pool = [...unit.discover.quickCheck, ...unit.discover.controlledPractice];
  const question = pool[index % pool.length] ?? pool[0]!;
  return {
    question: question.prompt.en,
    options: question.options,
    answer: question.answer,
    lessonNumber: unit.number,
    lessonTitle: unit.title,
  };
});
