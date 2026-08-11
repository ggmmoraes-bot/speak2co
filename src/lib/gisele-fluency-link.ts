import type { GiseleFocus } from "@/lib/gisele.functions";

/**
 * Ponte entre a Gisele AI e o Speak2Fluency: a mentora precisa conhecer os
 * módulos, o que já foi concluído e qual lacuna atacar em seguida.
 */
export type FluencyLink = {
  id: string;
  order: number;
  titleEn: string;
  objectiveEn: string;
  skills: string[];
  focus: GiseleFocus;
  /** Palavras-chave que indicam dificuldade ligada a este módulo. */
  signals: string[];
  minutes: number;
};

export const FLUENCY_LINKS: FluencyLink[] = [
  {
    id: "think-in-english",
    order: 1,
    titleEn: "Think in English",
    objectiveEn: "Stop translating and build thoughts directly in English.",
    skills: ["speaking", "vocabulary"],
    focus: "conversation",
    signals: ["translation", "tradução", "hesitation", "pausa", "fluency"],
    minutes: 25,
  },
  {
    id: "speak-naturally",
    order: 2,
    titleEn: "Speak Naturally",
    objectiveEn: "Use natural chunks, rhythm and connected speech.",
    skills: ["speaking", "pronunciation", "vocabulary"],
    focus: "pronunciation",
    signals: ["pronunciation", "pronúncia", "stress", "intonation", "accent", "rhythm"],
    minutes: 25,
  },
  {
    id: "everyday-conversations",
    order: 3,
    titleEn: "Everyday Conversations",
    objectiveEn: "Keep everyday conversations going with follow-up questions.",
    skills: ["speaking", "listening", "confidence"],
    focus: "conversation",
    signals: ["small talk", "conversation", "questions", "conversa"],
    minutes: 25,
  },
  {
    id: "storytelling",
    order: 4,
    titleEn: "Storytelling",
    objectiveEn: "Tell stories with clear sequence, tenses and impact.",
    skills: ["speaking", "vocabulary"],
    focus: "conversation",
    signals: ["storytelling", "narrativa", "past tense", "sequence", "story"],
    minutes: 25,
  },
  {
    id: "listening-real-life",
    order: 5,
    titleEn: "Listening in Real Life",
    objectiveEn: "Understand fast, real-life speech without subtitles.",
    skills: ["listening", "pronunciation"],
    focus: "pronunciation",
    signals: ["listening", "escuta", "understand", "compreensão"],
    minutes: 25,
  },
  {
    id: "confidence-conversation",
    order: 6,
    titleEn: "Confidence & Conversation",
    objectiveEn: "Speak with confidence even when you make mistakes.",
    skills: ["speaking", "confidence"],
    focus: "conversation",
    signals: ["confidence", "confiança", "shy", "insegurança", "medo"],
    minutes: 25,
  },
  {
    id: "real-world-fluency",
    order: 7,
    titleEn: "Real-World Fluency",
    objectiveEn: "Handle real situations: work, travel and negotiation.",
    skills: ["listening", "speaking", "vocabulary", "confidence"],
    focus: "travel",
    signals: ["work", "travel", "meeting", "negotiation", "interview"],
    minutes: 30,
  },
  {
    id: "personal-fluency-path",
    order: 8,
    titleEn: "Personal Fluency Path",
    objectiveEn: "Consolidate everything into your own fluency routine.",
    skills: ["listening", "speaking", "vocabulary", "pronunciation", "confidence"],
    focus: "conversation",
    signals: ["routine", "rotina", "plan", "consolidation"],
    minutes: 30,
  },
];

export const fluencyModuleRoute = (id: string) => `/speak2fluency/modulo/${id}`;

export function findFluencyLink(id: string) {
  return FLUENCY_LINKS.find((m) => m.id === id) ?? null;
}

/**
 * Escolhe o módulo do Fluency mais relevante: primeiro pelo sinal de
 * dificuldade (erros recorrentes / foco), depois pela ordem do currículo.
 */
export function recommendFluencyModule(options: {
  completedIds: string[];
  weaknesses?: string[];
  focus?: GiseleFocus | null;
}): FluencyLink | null {
  const done = new Set(options.completedIds);
  const pending = FLUENCY_LINKS.filter((m) => !done.has(m.id));
  if (pending.length === 0) return null;

  const text = (options.weaknesses ?? []).join(" ").toLowerCase();
  if (text) {
    const bySignal = pending.find((m) => m.signals.some((s) => text.includes(s)));
    if (bySignal) return bySignal;
  }
  if (options.focus) {
    const byFocus = pending.find((m) => m.focus === options.focus);
    if (byFocus) return byFocus;
  }
  return pending.sort((a, b) => a.order - b.order)[0] ?? null;
}
