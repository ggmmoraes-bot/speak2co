/**
 * Speak2Co Method™ — Intermediate English Course (Essential plan).
 * 20 lições B1 → B2: comunicação real antes de regra, prática intensiva de fala,
 * repetição espaçada e checagem de pronúncia com IA em cada frase.
 */
import type { BeginnerLesson } from "./beginner-course";

import { INTERMEDIATE_LESSONS_1_5 } from "./intermediate-course-lessons-1";
import { INTERMEDIATE_LESSONS_6_10 } from "./intermediate-course-lessons-2";
import { INTERMEDIATE_LESSONS_11_15 } from "./intermediate-course-lessons-3";
import { INTERMEDIATE_LESSONS_16_20 } from "./intermediate-course-lessons-4";

/** O Intermediate usa a mesma estrutura de lição do Beginner. */
export type IntermediateLesson = BeginnerLesson;

export const INTERMEDIATE_COURSE_ID = "intermediate";

export const INTERMEDIATE_LESSONS: IntermediateLesson[] = [
  ...INTERMEDIATE_LESSONS_1_5,
  ...INTERMEDIATE_LESSONS_6_10,
  ...INTERMEDIATE_LESSONS_11_15,
  ...INTERMEDIATE_LESSONS_16_20,
];

export function getIntermediateLesson(id: string) {
  return INTERMEDIATE_LESSONS.find((lesson) => lesson.id === id);
}
