import type { QuizQuestion } from "@/lib/beginner-course";
import { BEGINNER_UNITS } from "@/lib/beginner-course";

/** Identificador usado em course_progress para guardar o assessment final. */
export const BEGINNER_ASSESSMENT_ID = "final-assessment";

/** Nota mínima para aprovação no assessment final do Beginner. */
export const BEGINNER_PASS_SCORE = 70;

export type AssessmentQuestion = QuizQuestion & { lessonNumber: number; lessonTitle: string };

/**
 * Assessment final: uma questão de cada uma das 30 unidades do currículo
 * oficial, em ordem, garantindo cobertura de todo o conteúdo do curso.
 */
export const BEGINNER_ASSESSMENT: AssessmentQuestion[] = BEGINNER_UNITS.map((unit, index) => {
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
