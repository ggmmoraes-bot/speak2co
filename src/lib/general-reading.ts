/**
 * Learning Tools — Reading (biblioteca geral).
 * Textos progressivos com vocabulário guiado e perguntas de compreensão.
 */

export type ReadingQuestion = {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
};

export type ReadingText = {
  id: string;
  title: string;
  titlePt: string;
  theme: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  intro: string;
  paragraphs: string[];
  vocabulary: { term: string; pt: string; definition: string }[];
  questions: ReadingQuestion[];
};

export const READING_LEVELS = ["Beginner", "Intermediate", "Advanced"] as const;

export const GENERAL_READING: ReadingText[] = [
  {
    id: "a-new-city",
    title: "A new city",
    titlePt: "Uma cidade nova",
    theme: "Everyday life",
    level: "Beginner",
    intro: "Read about Tom's first weeks after moving. Focus on present simple and daily habits.",
    paragraphs: [
      "Tom moved to a small city near the coast three weeks ago. He lives in a flat above a bakery, so every morning he wakes up with the smell of fresh bread.",
      "He works at a bookshop from Tuesday to Saturday. The shop is quiet in the morning and busy after lunch, when students arrive to study.",
      "On Sundays, Tom walks to the market and buys fruit and vegetables. He does not have a car, so he goes everywhere by bike.",
      "He still misses his old friends, but he has already met two neighbours who invite him for coffee on Sunday afternoons.",
    ],
    vocabulary: [
      { term: "flat", pt: "apartamento", definition: "A set of rooms for living in, usually on one floor." },
      { term: "bakery", pt: "padaria", definition: "A place where bread and cakes are made and sold." },
      { term: "quiet", pt: "calmo, silencioso", definition: "With little noise or activity." },
      { term: "miss", pt: "sentir falta", definition: "To feel sad because someone or something is not with you." },
    ],
    questions: [
      {
        question: "Where does Tom live?",
        options: ["Above a bakery", "Next to the bookshop", "In a house by the beach"],
        answer: 0,
        explanation: "“He lives in a flat above a bakery.”",
      },
      {
        question: "When is the bookshop busy?",
        options: ["Early in the morning", "After lunch", "On Sundays"],
        answer: 1,
        explanation: "“The shop is quiet in the morning and busy after lunch.”",
      },
      {
        question: "How does Tom travel around the city?",
        options: ["By car", "By bus", "By bike"],
        answer: 2,
        explanation: "“He goes everywhere by bike.”",
      },
    ],
  },
  {
    id: "healthy-habits",
    title: "Small healthy habits",
    titlePt: "Pequenos hábitos saudáveis",
    theme: "Health",
    level: "Beginner",
    intro: "A short article with practical advice. Look for imperatives and quantity words.",
    paragraphs: [
      "You do not need a perfect routine to feel better. Small habits, repeated every day, change more than one big effort once a month.",
      "Drink water before coffee. Walk for twenty minutes after lunch. Go to bed at the same time, even at the weekend.",
      "Doctors say that sleep is as important as exercise. People who sleep seven or eight hours make better decisions and get sick less often.",
      "Start with one habit. When it becomes easy, add another one.",
    ],
    vocabulary: [
      { term: "habit", pt: "hábito", definition: "Something you do regularly, often without thinking." },
      { term: "effort", pt: "esforço", definition: "The energy you use to do something." },
      { term: "get sick", pt: "ficar doente", definition: "To become ill." },
      { term: "at the weekend", pt: "no fim de semana", definition: "During Saturday and Sunday." },
    ],
    questions: [
      {
        question: "What does the text recommend?",
        options: ["One big change per month", "Small daily habits", "Sleeping less to train more"],
        answer: 1,
        explanation: "“Small habits, repeated every day, change more…”",
      },
      {
        question: "According to doctors, sleep is…",
        options: ["Less important than exercise", "As important as exercise", "Only important for children"],
        answer: 1,
        explanation: "“Sleep is as important as exercise.”",
      },
    ],
  },
  {
    id: "remote-work",
    title: "The remote work debate",
    titlePt: "O debate do trabalho remoto",
    theme: "Work",
    level: "Intermediate",
    intro: "An opinion article. Notice linking words and arguments on both sides.",
    paragraphs: [
      "When offices closed in 2020, few managers believed that teams could stay productive at home. Five years later, the discussion has changed completely.",
      "Supporters of remote work argue that employees save time, sleep better and concentrate more easily. Companies also spend less on office space.",
      "Critics, on the other hand, point out that new employees learn far more quickly when they sit next to experienced colleagues. Informal conversations, they say, cannot be scheduled.",
      "Most organisations have chosen a middle path. Teams meet in person two or three days a week and work remotely for the rest, keeping flexibility without losing connection.",
    ],
    vocabulary: [
      { term: "productive", pt: "produtivo", definition: "Able to produce good results in the time available." },
      { term: "point out", pt: "apontar, destacar", definition: "To mention a fact so that people notice it." },
      { term: "schedule", pt: "agendar", definition: "To plan something for a particular time." },
      { term: "middle path", pt: "meio-termo", definition: "A solution between two extreme positions." },
    ],
    questions: [
      {
        question: "What do supporters of remote work say?",
        options: [
          "Employees save time and concentrate better",
          "New employees learn faster at home",
          "Companies spend more money",
        ],
        answer: 0,
        explanation: "Paragraph 2 lists saving time, sleeping better and concentration.",
      },
      {
        question: "What is the main argument of the critics?",
        options: [
          "Remote work is too expensive",
          "Learning from colleagues happens in person",
          "Employees work fewer hours",
        ],
        answer: 1,
        explanation: "“New employees learn far more quickly when they sit next to experienced colleagues.”",
      },
      {
        question: "What have most organisations decided?",
        options: ["Return fully to the office", "Stay fully remote", "Adopt a hybrid model"],
        answer: 2,
        explanation: "“Most organisations have chosen a middle path.”",
      },
    ],
  },
  {
    id: "learning-languages",
    title: "Why adults learn languages differently",
    titlePt: "Por que adultos aprendem idiomas de outra forma",
    theme: "Education",
    level: "Intermediate",
    intro: "A popular-science text. Watch for comparatives and cause-and-effect language.",
    paragraphs: [
      "It is often said that children learn languages effortlessly while adults struggle. Research suggests the picture is more complex.",
      "Adults actually learn grammar and vocabulary faster, because they can compare structures with their first language and study strategically.",
      "Children, however, are usually exposed to the language for many more hours, and they are less afraid of making mistakes.",
      "The practical conclusion is simple: adults progress quickly when they combine consistent exposure with a tolerance for imperfection.",
    ],
    vocabulary: [
      { term: "effortlessly", pt: "sem esforço", definition: "In a way that needs little or no effort." },
      { term: "struggle", pt: "ter dificuldade", definition: "To try hard to do something difficult." },
      { term: "exposure", pt: "exposição", definition: "The experience of hearing or seeing something regularly." },
      { term: "tolerance", pt: "tolerância", definition: "The ability to accept something you may not like." },
    ],
    questions: [
      {
        question: "What do adults do better than children?",
        options: ["Learn grammar and vocabulary faster", "Avoid all mistakes", "Listen for more hours"],
        answer: 0,
        explanation: "“Adults actually learn grammar and vocabulary faster.”",
      },
      {
        question: "What advantage do children have?",
        options: ["Better memory", "More exposure and less fear of mistakes", "Better teachers"],
        answer: 1,
        explanation: "Paragraph 3 mentions more hours of exposure and less fear.",
      },
    ],
  },
  {
    id: "attention-economy",
    title: "The price of our attention",
    titlePt: "O preço da nossa atenção",
    theme: "Society & technology",
    level: "Advanced",
    intro: "A dense argumentative text. Focus on abstract nouns and formal connectors.",
    paragraphs: [
      "Few resources have become as valuable — and as contested — as human attention. Platforms that appear to be free are, in reality, financed by the minutes we surrender to them.",
      "The design consequences are far from accidental. Infinite scrolling, autoplay and unpredictable notifications exploit well-documented features of human psychology, rewarding the interface rather than the user.",
      "Critics of regulation insist that individuals should simply exercise self-control. Yet expecting restraint from users while entire industries optimise against it is, at best, naive.",
      "A more promising approach combines transparency about how ranking systems work with genuine friction: defaults that protect focus instead of eroding it. Attention, after all, is the raw material of everything else we intend to do.",
    ],
    vocabulary: [
      { term: "contested", pt: "disputado", definition: "Argued about or competed for by different sides." },
      { term: "surrender", pt: "entregar, ceder", definition: "To give up something, often unwillingly." },
      { term: "restraint", pt: "autocontrole", definition: "Control over your own behaviour or impulses." },
      { term: "erode", pt: "corroer, desgastar", definition: "To gradually destroy or weaken something." },
    ],
    questions: [
      {
        question: "According to the text, how are 'free' platforms financed?",
        options: ["By government funds", "By the time users give them", "By subscription fees"],
        answer: 1,
        explanation: "“…financed by the minutes we surrender to them.”",
      },
      {
        question: "How does the author describe features like infinite scrolling?",
        options: ["Accidental side effects", "Deliberate design choices", "Technical limitations"],
        answer: 1,
        explanation: "“The design consequences are far from accidental.”",
      },
      {
        question: "What solution does the author prefer?",
        options: [
          "Relying only on user self-control",
          "Banning social platforms",
          "Transparency plus defaults that protect focus",
        ],
        answer: 2,
        explanation: "The last paragraph proposes transparency and protective defaults.",
      },
    ],
  },
  {
    id: "leadership-listening",
    title: "Leaders who listen",
    titlePt: "Líderes que escutam",
    theme: "Career & leadership",
    level: "Advanced",
    intro: "A business-magazine style article with idiomatic and formal vocabulary.",
    paragraphs: [
      "Ask employees what they value most in a manager and the answer is rarely charisma. Overwhelmingly, they mention the sense of being heard.",
      "Listening, in a leadership context, is not passive. It requires asking questions that cannot be answered with a yes, tolerating silence, and resisting the urge to solve a problem before it has been fully described.",
      "Organisations that build this habit tend to detect risks earlier, because bad news travels upwards instead of being quietly buried.",
      "The return is measurable: teams report higher engagement, and turnover — the most expensive symptom of poor management — falls significantly.",
    ],
    vocabulary: [
      { term: "overwhelmingly", pt: "de forma esmagadora", definition: "By a very large majority." },
      { term: "urge", pt: "impulso", definition: "A strong wish to do something." },
      { term: "buried", pt: "enterrado, escondido", definition: "Hidden so that it cannot be found or noticed." },
      { term: "turnover", pt: "rotatividade", definition: "The rate at which employees leave a company." },
    ],
    questions: [
      {
        question: "What do employees value most, according to the text?",
        options: ["Charisma", "Feeling heard", "High salaries"],
        answer: 1,
        explanation: "“…they mention the sense of being heard.”",
      },
      {
        question: "Why do listening organisations detect risks earlier?",
        options: [
          "Because bad news reaches leaders",
          "Because they hire consultants",
          "Because they hold more meetings",
        ],
        answer: 0,
        explanation: "“bad news travels upwards instead of being quietly buried.”",
      },
    ],
  },
];

export const GENERAL_READING_TOTAL = GENERAL_READING.length;
