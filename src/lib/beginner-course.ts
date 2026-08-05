/**
 * Speak2Co Method — Beginner English Course (Essential plan).
 * 20 lições progressivas: contexto antes da gramática, prática intensiva,
 * repetição espaçada e checagem de pronúncia com IA em cada frase.
 */

export type VocabItem = {
  en: string;
  pt: string;
  ipa: string;
  example: string;
  examplePt: string;
};

export type VerbItem = {
  infinitive: string;
  pt: string;
  ipa: string;
  explanation: string;
  conjugation: string[];
};

export type GrammarBlock = {
  title: string;
  /** Exemplos vêm antes da regra — método Speak2Co. */
  examples: string[];
  when: string;
  structure: string;
  mistakes: string[];
};

export type ExpressionItem = { situation: string; en: string; pt: string };
export type DialogueLine = { who: string; en: string; pt: string };
export type PronunciationFocus = { sound: string; tip: string; words: string[] };

export type WrittenExerciseType = "fill" | "complete" | "match" | "translate" | "writing";
export type WrittenExercise = {
  type: WrittenExerciseType;
  prompt: string;
  answer: string;
};

export type SpeakingExerciseType = "read" | "roleplay" | "ai";
export type SpeakingExercise = {
  type: SpeakingExerciseType;
  prompt: string;
  /** Frase em inglês para ler em voz alta e checar com a IA. */
  phrase?: string;
};

export type QuizQuestion = { question: string; options: string[]; answer: string };

export type LessonReview = {
  summary: string;
  grammar: string[];
  vocabulary: string[];
  mistakes: string[];
};

export type BeginnerLesson = {
  id: string;
  number: number;
  title: string;
  titlePt: string;
  goal: string;
  warmUp: string[];
  vocabulary: VocabItem[];
  verbs: VerbItem[];
  grammar: GrammarBlock[];
  expressions: ExpressionItem[];
  dialogue: DialogueLine[];
  pronunciation: PronunciationFocus[];
  written: WrittenExercise[];
  speaking: SpeakingExercise[];
  quiz: QuizQuestion[];
  review: LessonReview;
};

export const WRITTEN_LABEL: Record<WrittenExerciseType, string> = {
  fill: "Complete a lacuna",
  complete: "Complete a frase",
  match: "Relacione",
  translate: "Traduza",
  writing: "Escreva",
};

export const SPEAKING_LABEL: Record<SpeakingExerciseType, string> = {
  read: "Leia em voz alta",
  roleplay: "Role play",
  ai: "Converse com a IA",
};

export const BEGINNER_COURSE_ID = "beginner";

export const LESSON_SECTIONS = [
  { key: "warmup", label: "Warm-up" },
  { key: "vocabulary", label: "Vocabulary" },
  { key: "verbs", label: "Verbs" },
  { key: "grammar", label: "Grammar" },
  { key: "expressions", label: "Expressions" },
  { key: "dialogue", label: "Conversation" },
  { key: "pronunciation", label: "Pronunciation" },
  { key: "written", label: "Written" },
  { key: "speaking", label: "Speaking" },
  { key: "quiz", label: "Quiz" },
  { key: "review", label: "Review" },
] as const;

export type LessonSectionKey = (typeof LESSON_SECTIONS)[number]["key"];

import { LESSONS_1_5 } from "./beginner-course-lessons-1";
import { LESSONS_6_10 } from "./beginner-course-lessons-2";
import { LESSONS_11_15 } from "./beginner-course-lessons-3";
import { LESSONS_16_20 } from "./beginner-course-lessons-4";

export const BEGINNER_LESSONS: BeginnerLesson[] = [
  ...LESSONS_1_5,
  ...LESSONS_6_10,
  ...LESSONS_11_15,
  ...LESSONS_16_20,
];

export function getBeginnerLesson(id: string) {
  return BEGINNER_LESSONS.find((lesson) => lesson.id === id);
}

/** Todas as frases da lição que valem prática de pronúncia com a IA. */
export function lessonPhrases(lesson: BeginnerLesson): { en: string; pt: string }[] {
  return [
    ...lesson.vocabulary.map((v) => ({ en: v.example, pt: v.examplePt })),
    ...lesson.expressions.map((e) => ({ en: e.en, pt: e.pt })),
    ...lesson.dialogue.map((d) => ({ en: d.en, pt: d.pt })),
  ];
}
