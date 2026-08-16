/**
 * Learning Tools — Writing (biblioteca geral).
 * Tarefas progressivas com modelo, checklist e correção da IA.
 */

export type WritingTask = {
  id: string;
  title: string;
  titlePt: string;
  theme: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  prompt: string;
  promptPt: string;
  minWords: number;
  checklist: string[];
  usefulLanguage: string[];
  model: string;
};

export const WRITING_LEVELS = ["Beginner", "Intermediate", "Advanced"] as const;

export const GENERAL_WRITING: WritingTask[] = [
  {
    id: "about-me",
    title: "A short profile about you",
    titlePt: "Um perfil curto sobre você",
    theme: "Personal",
    level: "Beginner",
    prompt: "Write a short profile: your name, where you live, your job or studies, and two things you like doing.",
    promptPt: "Escreva um perfil curto: nome, onde mora, trabalho ou estudos e duas coisas que gosta de fazer.",
    minWords: 50,
    checklist: [
      "Use the present simple (I live, I work, I like).",
      "Write at least four complete sentences.",
      "Use 'and' or 'but' to connect ideas.",
    ],
    usefulLanguage: ["My name is…", "I live in…", "I work as…", "In my free time, I…"],
    model:
      "My name is Carla and I live in Curitiba, in the south of Brazil. I work as a nurse in a small hospital near my house. I usually start early, so I wake up at five thirty. In my free time, I like reading and going to the park with my dog.",
  },
  {
    id: "email-request",
    title: "A polite email request",
    titlePt: "Um e-mail educado de solicitação",
    theme: "Work",
    level: "Beginner",
    prompt: "Write an email to a colleague asking to move a meeting to another day. Give a reason and suggest two options.",
    promptPt: "Escreva um e-mail a um colega pedindo para mudar uma reunião de dia. Dê um motivo e sugira duas opções.",
    minWords: 60,
    checklist: [
      "Open and close the email politely.",
      "Give a clear reason.",
      "Suggest two alternative times.",
    ],
    usefulLanguage: ["I hope you're well.", "Would it be possible to…", "How about Tuesday at 10?", "Thanks in advance."],
    model:
      "Hi Daniel,\n\nI hope you're well. Unfortunately, I have a medical appointment on Thursday morning, so I can't join our meeting. Would it be possible to move it? I'm free on Tuesday at 10 or Friday after 2 p.m.\n\nThanks in advance,\nCarla",
  },
  {
    id: "opinion-paragraph",
    title: "An opinion paragraph",
    titlePt: "Um parágrafo de opinião",
    theme: "Discussion",
    level: "Intermediate",
    prompt: "Do you think schools should teach personal finance? Write one paragraph with your opinion, two reasons and one example.",
    promptPt: "Você acha que escolas deveriam ensinar finanças pessoais? Escreva um parágrafo com opinião, dois motivos e um exemplo.",
    minWords: 100,
    checklist: [
      "State your opinion in the first sentence.",
      "Give two different reasons.",
      "Include one concrete example.",
      "Use linking words (firstly, moreover, for instance).",
    ],
    usefulLanguage: ["In my view…", "Firstly…", "Moreover…", "For instance…", "For this reason…"],
    model:
      "In my view, personal finance should be a compulsory subject at school. Firstly, most young adults make important financial decisions — credit cards, loans, first salaries — before anyone explains how interest works. Moreover, financial stress affects health and study performance. For instance, a friend of mine spent two years paying off a debt that started with a single credit card. For this reason, teaching basic budgeting would prevent problems that are far more expensive to fix later.",
  },
  {
    id: "complaint-email",
    title: "A formal complaint",
    titlePt: "Uma reclamação formal",
    theme: "Real life",
    level: "Intermediate",
    prompt: "Write a formal email to a hotel about a problem during your stay. Describe the problem and say what you expect.",
    promptPt: "Escreva um e-mail formal a um hotel sobre um problema na sua estadia. Descreva o problema e diga o que espera.",
    minWords: 120,
    checklist: [
      "Use a formal greeting and sign-off.",
      "Describe the facts in chronological order.",
      "Keep a firm but polite tone.",
      "End with a clear request.",
    ],
    usefulLanguage: [
      "I am writing to complain about…",
      "Despite several requests…",
      "I would appreciate it if you could…",
      "I look forward to your reply.",
    ],
    model:
      "Dear Sir or Madam,\n\nI am writing to complain about my stay at your hotel between 3 and 6 March (booking 44821). On the first night, the air conditioning in room 512 stopped working. Despite two requests at reception, the problem was not solved during my stay, and I was unable to sleep properly.\n\nI would appreciate it if you could refund part of the amount paid, or offer a credit for a future booking. I look forward to your reply.\n\nYours faithfully,\nCarla Moreira",
  },
  {
    id: "essay-argument",
    title: "An argumentative essay",
    titlePt: "Uma redação argumentativa",
    theme: "Academic",
    level: "Advanced",
    prompt: "Some people believe artificial intelligence will reduce the number of jobs; others believe it will create new ones. Discuss both views and give your own opinion.",
    promptPt: "Alguns acreditam que a IA reduzirá empregos; outros, que criará novos. Discuta as duas visões e dê sua opinião.",
    minWords: 220,
    checklist: [
      "Write four paragraphs: introduction, view A, view B, conclusion with your position.",
      "Use hedging language (tends to, is likely to).",
      "Avoid repeating the same connectors.",
      "Support each view with an example.",
    ],
    usefulLanguage: [
      "It is frequently argued that…",
      "Proponents of this view claim…",
      "Conversely…",
      "On balance, I would argue that…",
    ],
    model:
      "The impact of artificial intelligence on employment is one of the most contested economic questions of the decade. While some analysts predict widespread job losses, others expect a familiar cycle of destruction and creation.\n\nProponents of the pessimistic view point to tasks that are already automated: document review, first-line support and routine analysis. Unlike previous waves of technology, they argue, this one affects cognitive work, which employs a large share of the middle class.\n\nConversely, optimists observe that every major technological shift has generated occupations that did not previously exist. The demand for data governance specialists, AI auditors and prompt designers barely existed five years ago.\n\nOn balance, I would argue that the total number of jobs is unlikely to collapse, but their distribution will change sharply. The realistic risk is not mass unemployment; it is a mismatch between the skills people have and the work that remains. Public policy should therefore focus on continuous retraining rather than on protecting specific roles.",
  },
  {
    id: "executive-summary",
    title: "An executive summary",
    titlePt: "Um sumário executivo",
    theme: "Career",
    level: "Advanced",
    prompt: "Summarise a project you led for a senior leader who has two minutes: context, decision, result and next step.",
    promptPt: "Resuma um projeto que você liderou para um executivo com dois minutos: contexto, decisão, resultado e próximo passo.",
    minWords: 150,
    checklist: [
      "Lead with the outcome, not the chronology.",
      "Quantify results where possible.",
      "Keep sentences short and specific.",
      "Finish with a clear recommendation.",
    ],
    usefulLanguage: [
      "In summary,…",
      "The key driver was…",
      "This resulted in a 12% reduction in…",
      "My recommendation is to…",
    ],
    model:
      "In summary, the onboarding redesign reduced the time to first delivery from 21 to 9 days. The key driver was replacing three sequential approvals with a single risk-based check.\n\nContext: new analysts were waiting an average of three weeks before touching client work, which delayed two contracts last quarter. After mapping the process, we identified that 60% of the waiting time came from approvals that never resulted in a rejection.\n\nResult: the pilot with twelve new hires cut onboarding time by 57% with no increase in compliance incidents. Manager satisfaction rose from 6.1 to 8.4.\n\nMy recommendation is to extend the model to all business units in the next quarter, with a quarterly audit of the risk-based check.",
  },
];

export const GENERAL_WRITING_TOTAL = GENERAL_WRITING.length;
