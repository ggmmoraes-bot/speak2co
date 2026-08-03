export type CefrLevel = "A1" | "A2" | "B1" | "B2" | "C1";

export type PlacementQuestion = {
  id: string;
  level: CefrLevel;
  skill: "grammar" | "vocabulary" | "reading";
  prompt: string;
  options: string[];
  answer: number;
};

export const CEFR_ORDER: CefrLevel[] = ["A1", "A2", "B1", "B2", "C1"];

export const LEVEL_DESCRIPTIONS: Record<CefrLevel, string> = {
  A1: "Iniciante. Você entende e usa expressões básicas do dia a dia e se apresenta com frases simples.",
  A2: "Básico. Você lida com situações rotineiras, fala sobre sua rotina, trabalho e necessidades imediatas.",
  B1: "Intermediário. Você sustenta conversas sobre temas familiares, viaja com autonomia e explica opiniões.",
  B2: "Intermediário avançado. Você participa de reuniões, argumenta com fluidez e entende textos complexos.",
  C1: "Avançado. Você se comunica com precisão e naturalidade em contextos profissionais e acadêmicos.",
};

export const WRITING_PROMPT =
  "Write 4 to 6 sentences in English about your professional goals and why you want to improve your English. Mention one situation where you need English (work, travel, interviews or studies).";

export const PLACEMENT_QUESTIONS: PlacementQuestion[] = [
  // A1
  {
    id: "a1-1",
    level: "A1",
    skill: "grammar",
    prompt: "___ your name Maria?",
    options: ["Is", "Are", "Am", "Be"],
    answer: 0,
  },
  {
    id: "a1-2",
    level: "A1",
    skill: "grammar",
    prompt: "She ___ coffee every morning.",
    options: ["drink", "drinks", "drinking", "is drink"],
    answer: 1,
  },
  {
    id: "a1-3",
    level: "A1",
    skill: "vocabulary",
    prompt: "Where do you buy bread and milk?",
    options: ["At the airport", "At the supermarket", "At the hospital", "At the bank"],
    answer: 1,
  },
  {
    id: "a1-4",
    level: "A1",
    skill: "grammar",
    prompt: "There ___ two books on the table.",
    options: ["is", "be", "are", "has"],
    answer: 2,
  },
  // A2
  {
    id: "a2-1",
    level: "A2",
    skill: "grammar",
    prompt: "Last weekend we ___ to the beach.",
    options: ["go", "goes", "went", "gone"],
    answer: 2,
  },
  {
    id: "a2-2",
    level: "A2",
    skill: "grammar",
    prompt: "I'm not very good ___ math.",
    options: ["in", "at", "on", "for"],
    answer: 1,
  },
  {
    id: "a2-3",
    level: "A2",
    skill: "vocabulary",
    prompt: "At the hotel, you ask: “Could I ___ in, please? My reservation is for two nights.”",
    options: ["check", "take off", "board", "sign out"],
    answer: 0,
  },
  {
    id: "a2-4",
    level: "A2",
    skill: "grammar",
    prompt: "This exercise is ___ than the last one.",
    options: ["more easy", "easier", "easiest", "the easier"],
    answer: 1,
  },
  // B1
  {
    id: "b1-1",
    level: "B1",
    skill: "grammar",
    prompt: "I ___ in this company for three years.",
    options: ["work", "am working", "have worked", "worked"],
    answer: 2,
  },
  {
    id: "b1-2",
    level: "B1",
    skill: "grammar",
    prompt: "If I had more time, I ___ another language.",
    options: ["will study", "would study", "study", "had studied"],
    answer: 1,
  },
  {
    id: "b1-3",
    level: "B1",
    skill: "vocabulary",
    prompt: "In a meeting, “to follow up” means to…",
    options: [
      "cancel a task",
      "check the progress of something later",
      "start a new project",
      "leave the room",
    ],
    answer: 1,
  },
  {
    id: "b1-4",
    level: "B1",
    skill: "reading",
    prompt:
      "“The flight was delayed due to bad weather, so passengers were offered a meal voucher.” Why did passengers get a voucher?",
    options: [
      "Because the flight was cancelled",
      "Because they paid extra",
      "Because the flight was late",
      "Because the food was free for everyone",
    ],
    answer: 2,
  },
  // B2
  {
    id: "b2-1",
    level: "B2",
    skill: "grammar",
    prompt: "By the time the manager arrived, the team ___ the presentation.",
    options: ["finished", "had finished", "has finished", "was finishing"],
    answer: 1,
  },
  {
    id: "b2-2",
    level: "B2",
    skill: "grammar",
    prompt: "The report ___ by the end of the day.",
    options: [
      "will have been delivered",
      "will delivering",
      "is deliver",
      "has deliver",
    ],
    answer: 0,
  },
  {
    id: "b2-3",
    level: "B2",
    skill: "vocabulary",
    prompt: "Choose the best interview answer opener for a strength question.",
    options: [
      "I think maybe I am good, I don't know.",
      "One of my key strengths is turning data into clear decisions.",
      "My strength is to be a person that works.",
      "Sorry, my English is bad.",
    ],
    answer: 1,
  },
  {
    id: "b2-4",
    level: "B2",
    skill: "grammar",
    prompt: "She insisted ___ the invoice before signing the contract.",
    options: ["to review", "on reviewing", "in review", "review"],
    answer: 1,
  },
  // C1
  {
    id: "c1-1",
    level: "C1",
    skill: "grammar",
    prompt: "Not only ___ the deadline, but he also improved the process.",
    options: ["he met", "did he meet", "he did meet", "met he"],
    answer: 1,
  },
  {
    id: "c1-2",
    level: "C1",
    skill: "vocabulary",
    prompt: "“The proposal was met with lukewarm enthusiasm” means the reaction was…",
    options: ["very positive", "hostile", "moderately unenthusiastic", "confused"],
    answer: 2,
  },
  {
    id: "c1-3",
    level: "C1",
    skill: "grammar",
    prompt: "Had we anticipated the risk, we ___ the launch.",
    options: [
      "would postpone",
      "would have postponed",
      "will postpone",
      "had postponed",
    ],
    answer: 1,
  },
  {
    id: "c1-4",
    level: "C1",
    skill: "reading",
    prompt:
      "“While the strategy is sound in principle, its execution hinges on resources the team simply does not have.” The writer suggests the strategy…",
    options: [
      "is a bad idea overall",
      "is good but hard to implement",
      "has already failed",
      "needs a new author",
    ],
    answer: 1,
  },
];

export function estimateLevelFromAnswers(answers: Record<string, number>): {
  level: CefrLevel;
  correctCount: number;
  perLevel: Record<CefrLevel, { correct: number; total: number }>;
} {
  const perLevel = CEFR_ORDER.reduce(
    (acc, level) => {
      acc[level] = { correct: 0, total: 0 };
      return acc;
    },
    {} as Record<CefrLevel, { correct: number; total: number }>,
  );

  let correctCount = 0;
  for (const question of PLACEMENT_QUESTIONS) {
    perLevel[question.level].total += 1;
    if (answers[question.id] === question.answer) {
      perLevel[question.level].correct += 1;
      correctCount += 1;
    }
  }

  let level: CefrLevel = "A1";
  for (const candidate of CEFR_ORDER) {
    const stats = perLevel[candidate];
    if (stats.total > 0 && stats.correct / stats.total >= 0.75) {
      level = candidate;
    } else {
      break;
    }
  }

  return { level, correctCount, perLevel };
}
