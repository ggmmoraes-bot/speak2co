import { BEGINNER_LESSONS, type QuizQuestion } from "@/lib/beginner-course";

/** Identificador usado em course_progress para guardar o assessment final. */
export const BEGINNER_ASSESSMENT_ID = "final-assessment";

/** Nota mínima para aprovação no assessment final do Beginner. */
export const BEGINNER_PASS_SCORE = 70;

export type AssessmentQuestion = QuizQuestion & { lessonNumber: number; lessonTitle: string };

/**
 * Assessment final: uma questão de cada uma das 20 lições, em ordem,
 * garantindo cobertura de todo o conteúdo do curso.
 */
export const BEGINNER_ASSESSMENT: AssessmentQuestion[] = BEGINNER_LESSONS.map((lesson, index) => {
  const question = lesson.quiz[index % lesson.quiz.length] ?? lesson.quiz[0]!;
  return { ...question, lessonNumber: lesson.number, lessonTitle: lesson.title };
});
