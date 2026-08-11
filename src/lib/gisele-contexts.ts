import type { GiseleFocus } from "@/lib/gisele.functions";

/** Contextos de conversa que o aluno escolhe antes de falar com a Gisele. */
export type ConversationContext = {
  id: string;
  titleEn: string;
  titlePt: string;
  focus: GiseleFocus;
  scenarioEn: string;
  goalEn: string;
  level: string;
};

export const CONVERSATION_CONTEXTS: ConversationContext[] = [
  {
    id: "job-interview",
    titleEn: "Job interview",
    titlePt: "Entrevista de emprego",
    focus: "interview",
    scenarioEn:
      "You are being interviewed by a hiring manager at an international company for the role you want.",
    goalEn: "Answer behavioural questions clearly and talk about your achievements.",
    level: "B1",
  },
  {
    id: "airport",
    titleEn: "At the airport",
    titlePt: "No aeroporto",
    focus: "travel",
    scenarioEn:
      "You are travelling alone: check-in, security, boarding and one unexpected problem.",
    goalEn: "Handle the whole journey in English without switching to Portuguese.",
    level: "A2",
  },
  {
    id: "hotel",
    titleEn: "Hotel check-in",
    titlePt: "Check-in no hotel",
    focus: "travel",
    scenarioEn: "You arrive at a hotel abroad and need to check in and solve a room issue.",
    goalEn: "Make polite requests and complaints.",
    level: "A2",
  },
  {
    id: "small-talk",
    titleEn: "Small talk at work",
    titlePt: "Conversa informal no trabalho",
    focus: "conversation",
    scenarioEn: "You meet an international colleague in the office kitchen.",
    goalEn: "Keep a natural conversation going with follow-up questions.",
    level: "B1",
  },
  {
    id: "meeting",
    titleEn: "Team meeting",
    titlePt: "Reunião de equipe",
    focus: "conversation",
    scenarioEn: "A weekly meeting where you must give updates and share an opinion.",
    goalEn: "Agree, disagree and justify with professional language.",
    level: "B2",
  },
  {
    id: "restaurant",
    titleEn: "Ordering at a restaurant",
    titlePt: "Pedindo em um restaurante",
    focus: "travel",
    scenarioEn: "You are at a restaurant abroad with dietary restrictions.",
    goalEn: "Order confidently and ask about the menu.",
    level: "A2",
  },
  {
    id: "pronunciation-lab",
    titleEn: "Pronunciation lab",
    titlePt: "Laboratório de pronúncia",
    focus: "pronunciation",
    scenarioEn: "A focused drill on the sounds you struggle with.",
    goalEn: "Produce target sounds, stress and intonation accurately.",
    level: "A2",
  },
  {
    id: "grammar-clinic",
    titleEn: "Grammar clinic",
    titlePt: "Clínica de gramática",
    focus: "grammar",
    scenarioEn: "Guided practice on your recurring mistakes.",
    goalEn: "Use the target structure correctly in your own sentences.",
    level: "B1",
  },
];

export function findContext(id?: string | null) {
  return CONVERSATION_CONTEXTS.find((c) => c.id === id) ?? null;
}
