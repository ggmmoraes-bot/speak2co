import type { GiseleFocus } from "@/lib/gisele.functions";

/** Rótulos bilíngues das sessões guiadas (inglês em destaque). */
export const FOCUS_LABEL: Record<GiseleFocus, { en: string; pt: string; prompt: string }> = {
  conversation: {
    en: "Conversation",
    pt: "Conversa livre",
    prompt: "Free conversation practice adapted to the student's level.",
  },
  pronunciation: {
    en: "Pronunciation Coaching",
    pt: "Treino de pronúncia",
    prompt:
      "Pronunciation coaching: drill sounds, word stress, intonation and connected speech, one target at a time.",
  },
  interview: {
    en: "Interview Prep",
    pt: "Preparação para entrevistas",
    prompt:
      "Job interview preparation aligned with Speak2Hire: behavioural questions, STAR answers and professional vocabulary.",
  },
  travel: {
    en: "Travel Roleplay",
    pt: "Simulação de viagem",
    prompt:
      "Travel roleplay aligned with Speak2Travel: airport, hotel, restaurant, transport and tourist situations.",
  },
  grammar: {
    en: "Grammar Clinic",
    pt: "Clínica de gramática",
    prompt:
      "Grammar clinic: diagnose the student's recurring mistakes, explain briefly and drill with active recall.",
  },
  vocabulary: {
    en: "Vocabulary Review",
    pt: "Revisão de vocabulário",
    prompt:
      "Spaced vocabulary review using the student's saved review items and recent lessons.",
  },
};
