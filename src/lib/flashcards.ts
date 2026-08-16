/**
 * Learning Tools — Flashcards (revisão espaçada).
 * Fonte de conteúdo: Vocabulary with IPA (banco geral), sem alterá-lo.
 */
import { GENERAL_VOCABULARY, type GeneralWord } from "@/lib/general-vocabulary";

export type FlashcardGrade = "again" | "hard" | "good" | "easy";

export type CardState = {
  /** Intervalo em dias até a próxima revisão. */
  interval: number;
  /** Fator de facilidade (SM-2 simplificado). */
  ease: number;
  /** Timestamp (ms) da próxima revisão. */
  due: number;
  reps: number;
};

export type Flashcard = GeneralWord & { id: string; category: string; categoryId: string };

export const FLASHCARD_DECK: Flashcard[] = GENERAL_VOCABULARY.flatMap((cat) =>
  cat.words.map((w) => ({
    ...w,
    id: `${cat.id}:${w.term}`,
    category: cat.title,
    categoryId: cat.id,
  })),
);

export const FLASHCARD_CATEGORIES = GENERAL_VOCABULARY.map((c) => ({
  id: c.id,
  title: c.title,
  titlePt: c.titlePt,
  count: c.words.length,
}));

const DAY = 24 * 60 * 60 * 1000;

export const STORAGE_KEY = "speak2co:flashcards";

export function newCardState(): CardState {
  return { interval: 0, ease: 2.5, due: Date.now(), reps: 0 };
}

/** Aplica a nota do aluno e devolve o novo estado de revisão espaçada. */
export function schedule(state: CardState, grade: FlashcardGrade): CardState {
  const now = Date.now();
  let { interval, ease, reps } = state;

  if (grade === "again") {
    ease = Math.max(1.3, ease - 0.2);
    interval = 0;
    reps = 0;
    return { interval, ease, reps, due: now + 10 * 60 * 1000 };
  }

  if (grade === "hard") ease = Math.max(1.3, ease - 0.15);
  if (grade === "easy") ease = Math.min(2.8, ease + 0.15);

  reps += 1;
  if (reps === 1) interval = grade === "easy" ? 2 : 1;
  else if (reps === 2) interval = grade === "hard" ? 3 : grade === "easy" ? 6 : 4;
  else interval = Math.max(1, Math.round(interval * ease * (grade === "hard" ? 0.7 : 1)));

  return { interval, ease, reps, due: now + interval * DAY };
}

export function loadStates(): Record<string, CardState> {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Record<string, CardState>) : {};
  } catch {
    return {};
  }
}

export function saveStates(states: Record<string, CardState>) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(states));
  } catch {
    /* storage indisponível */
  }
}

export function dueCards(states: Record<string, CardState>, categoryId: string) {
  const now = Date.now();
  return FLASHCARD_DECK.filter(
    (card) =>
      (categoryId === "all" || card.categoryId === categoryId) &&
      (states[card.id]?.due ?? 0) <= now,
  );
}
