/**
 * Learning Tools — Grammar (biblioteca geral).
 * Conteúdo próprio e independente: não redireciona para Speak2Fluency
 * nem para os cursos. A gramática do Speak2Fluency permanece intacta lá.
 */

export type GrammarExercise =
  | {
      kind: "choice";
      prompt: string;
      options: string[];
      answer: number;
    }
  | {
      kind: "write";
      prompt: string;
      answer: string;
      hint?: string;
    };

export type GrammarTopic = {
  id: string;
  title: string;
  titlePt: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  explanation: string;
  explanationPt: string;
  examples: string[];
  exercises: GrammarExercise[];
};

export const GRAMMAR_LEVELS = ["Beginner", "Intermediate", "Advanced"] as const;

export const GENERAL_GRAMMAR: GrammarTopic[] = [
  {
    id: "verb-to-be",
    title: "Verb to be",
    titlePt: "Verbo to be",
    level: "Beginner",
    explanation:
      "Use am / is / are to identify, describe and locate. Negative: am not, isn't, aren't. Questions invert the verb and the subject.",
    explanationPt:
      "Use am / is / are para identificar, descrever e localizar. Na pergunta, o verbo vem antes do sujeito.",
    examples: ["I am a student.", "She isn't at home.", "Are they ready?"],
    exercises: [
      { kind: "choice", prompt: "My parents ___ in Canada.", options: ["is", "are", "am"], answer: 1 },
      { kind: "choice", prompt: "___ she your teacher?", options: ["Is", "Are", "Am"], answer: 0 },
      { kind: "write", prompt: "Make it negative: He is late.", answer: "he isn't late", hint: "isn't" },
    ],
  },
  {
    id: "pronouns-possessives",
    title: "Subject pronouns & possessive adjectives",
    titlePt: "Pronomes e adjetivos possessivos",
    level: "Beginner",
    explanation:
      "Subject pronouns (I, you, he, she, it, we, they) replace the subject. Possessive adjectives (my, your, his, her, its, our, their) come before a noun.",
    explanationPt:
      "Pronomes sujeitos substituem o sujeito; adjetivos possessivos vêm antes do substantivo.",
    examples: ["She is my sister.", "They lost their keys.", "We like our new flat."],
    exercises: [
      { kind: "choice", prompt: "John is a doctor. ___ clinic is downtown.", options: ["He", "His", "Him"], answer: 1 },
      { kind: "choice", prompt: "___ are studying English.", options: ["Us", "Our", "We"], answer: 2 },
      { kind: "write", prompt: "Complete: Maria and I finished ___ homework.", answer: "our" },
    ],
  },
  {
    id: "present-simple",
    title: "Present Simple",
    titlePt: "Presente simples",
    level: "Beginner",
    explanation:
      "Habits, routines and general truths. Add -s/-es in the third person. Use do/does for questions and negatives.",
    explanationPt:
      "Hábitos, rotinas e fatos gerais. Terceira pessoa recebe -s/-es; perguntas e negativas usam do/does.",
    examples: ["I work from home.", "He studies at night.", "Do you like coffee?"],
    exercises: [
      { kind: "choice", prompt: "She ___ to the gym every day.", options: ["go", "goes", "going"], answer: 1 },
      { kind: "choice", prompt: "___ they live near here?", options: ["Do", "Does", "Are"], answer: 0 },
      { kind: "write", prompt: "Negative: He plays tennis.", answer: "he doesn't play tennis", hint: "doesn't + verbo base" },
    ],
  },
  {
    id: "present-continuous",
    title: "Present Continuous",
    titlePt: "Presente contínuo",
    level: "Beginner",
    explanation:
      "Actions happening now or around now, and fixed future arrangements. Form: be + verb-ing.",
    explanationPt: "Ações acontecendo agora ou combinadas para o futuro. Forma: be + verbo-ing.",
    examples: ["I'm working right now.", "They aren't listening.", "We're meeting Ana on Friday."],
    exercises: [
      { kind: "choice", prompt: "Listen! The baby ___.", options: ["cries", "is crying", "cry"], answer: 1 },
      { kind: "choice", prompt: "Which sentence is correct?", options: ["I am knowing the answer.", "I know the answer.", "I knowing the answer."], answer: 1 },
      { kind: "write", prompt: "Complete: They ___ (have) lunch at the moment.", answer: "are having" },
    ],
  },
  {
    id: "past-simple",
    title: "Past Simple",
    titlePt: "Passado simples",
    level: "Beginner",
    explanation:
      "Finished actions at a defined past time. Regular verbs take -ed; questions and negatives use did / didn't + base form.",
    explanationPt:
      "Ações concluídas no passado. Regulares com -ed; perguntas e negativas com did/didn't + verbo base.",
    examples: ["We travelled last July.", "She didn't call me.", "Did you see the message?"],
    exercises: [
      { kind: "choice", prompt: "I ___ the film yesterday.", options: ["watch", "watched", "was watch"], answer: 1 },
      { kind: "choice", prompt: "He didn't ___ the email.", options: ["sent", "send", "sends"], answer: 1 },
      { kind: "write", prompt: "Question: (you / go) to the party?", answer: "did you go to the party" },
    ],
  },
  {
    id: "comparatives",
    title: "Comparatives & superlatives",
    titlePt: "Comparativos e superlativos",
    level: "Beginner",
    explanation:
      "Short adjectives: -er / the -est. Long adjectives: more / the most. Irregular: good → better → the best.",
    explanationPt:
      "Adjetivos curtos usam -er/-est; longos usam more/the most. Irregulares: good → better → best.",
    examples: ["This road is shorter.", "It's the most expensive option.", "Today is better than yesterday."],
    exercises: [
      { kind: "choice", prompt: "This exercise is ___ than the last one.", options: ["easy", "easier", "easiest"], answer: 1 },
      { kind: "choice", prompt: "She is ___ student in the class.", options: ["the best", "better", "best"], answer: 0 },
      { kind: "write", prompt: "Complete: London is ___ (expensive) than Lisbon.", answer: "more expensive" },
    ],
  },
  {
    id: "present-perfect",
    title: "Present Perfect",
    titlePt: "Presente perfeito",
    level: "Intermediate",
    explanation:
      "Experiences, recent actions and unfinished time. Use for + period and since + starting point. Never with a finished past time expression.",
    explanationPt:
      "Experiências, ações recentes e tempo não terminado. for + período, since + ponto inicial.",
    examples: ["I've lived here for six years.", "She has just arrived.", "Have you ever tried sushi?"],
    exercises: [
      { kind: "choice", prompt: "We've known each other ___ 2019.", options: ["for", "since", "ago"], answer: 1 },
      { kind: "choice", prompt: "Which is correct?", options: ["I have seen him yesterday.", "I saw him yesterday.", "I have saw him yesterday."], answer: 1 },
      { kind: "write", prompt: "Complete: They ___ (not finish) the report yet.", answer: "haven't finished" },
    ],
  },
  {
    id: "past-continuous-perfect",
    title: "Past Continuous & Past Perfect",
    titlePt: "Passado contínuo e mais-que-perfeito",
    level: "Intermediate",
    explanation:
      "Past continuous sets the background (was/were + -ing); past perfect (had + participle) shows what happened earlier than another past event.",
    explanationPt:
      "Passado contínuo dá o pano de fundo; mais-que-perfeito mostra o que aconteceu antes de outro fato passado.",
    examples: [
      "I was cooking when the phone rang.",
      "By the time we arrived, the film had started.",
    ],
    exercises: [
      { kind: "choice", prompt: "She ___ when I called.", options: ["slept", "was sleeping", "had slept"], answer: 1 },
      { kind: "choice", prompt: "He couldn't get in because he ___ his keys.", options: ["forgot", "had forgotten", "was forgetting"], answer: 1 },
      { kind: "write", prompt: "Complete: They ___ (already leave) when we got there.", answer: "had already left" },
    ],
  },
  {
    id: "conditionals",
    title: "Conditionals (0–3)",
    titlePt: "Condicionais",
    level: "Intermediate",
    explanation:
      "Zero: general truth. First: real future. Second: unreal present. Third: unreal past (would have + participle).",
    explanationPt:
      "Zero: fato geral. Primeira: futuro real. Segunda: presente irreal. Terceira: passado irreal.",
    examples: [
      "If you heat water, it boils.",
      "If it rains, we'll stay in.",
      "If I had more time, I would study Japanese.",
      "If she had asked, I would have helped.",
    ],
    exercises: [
      { kind: "choice", prompt: "If I ___ you, I'd accept the offer.", options: ["am", "was", "were"], answer: 2 },
      { kind: "choice", prompt: "If we leave now, we ___ on time.", options: ["arrive", "will arrive", "would arrive"], answer: 1 },
      { kind: "write", prompt: "Third conditional: If he ___ (study), he would have passed.", answer: "had studied" },
    ],
  },
  {
    id: "passive-voice",
    title: "Passive voice",
    titlePt: "Voz passiva",
    level: "Intermediate",
    explanation:
      "Use be + past participle when the action matters more than the agent. Add by + agent only if relevant.",
    explanationPt:
      "Use be + particípio quando a ação importa mais que o agente. by + agente apenas se relevante.",
    examples: ["The report is reviewed every month.", "The keys were left on the table."],
    exercises: [
      { kind: "choice", prompt: "The office ___ every evening.", options: ["cleans", "is cleaned", "cleaned"], answer: 1 },
      { kind: "choice", prompt: "The results ___ tomorrow.", options: ["will announce", "will be announced", "are announcing"], answer: 1 },
      { kind: "write", prompt: "Passive: Someone stole my bike.", answer: "my bike was stolen" },
    ],
  },
  {
    id: "reported-speech",
    title: "Reported speech",
    titlePt: "Discurso indireto",
    level: "Intermediate",
    explanation:
      "Shift the tense one step back and adjust pronouns and time references (now → then, tomorrow → the next day).",
    explanationPt:
      "Recue um tempo verbal e ajuste pronomes e referências de tempo.",
    examples: ["“I'm tired.” → She said she was tired.", "“I'll call you.” → He said he would call me."],
    exercises: [
      { kind: "choice", prompt: "“I live in Porto.” → She said she ___ in Porto.", options: ["lives", "lived", "is living"], answer: 1 },
      { kind: "choice", prompt: "“Are you coming?” → He asked ___.", options: ["if I was coming", "am I coming", "if am I coming"], answer: 0 },
      { kind: "write", prompt: "“I have finished.” → He said he ___ finished.", answer: "had" },
    ],
  },
  {
    id: "gerunds-infinitives",
    title: "Gerunds & infinitives",
    titlePt: "Gerúndio e infinitivo",
    level: "Intermediate",
    explanation:
      "Some verbs take -ing (enjoy, avoid, suggest), others take to + base (decide, hope, manage). After prepositions, always use -ing.",
    explanationPt:
      "Alguns verbos pedem -ing; outros pedem to + verbo. Depois de preposição, sempre -ing.",
    examples: ["I enjoy reading.", "We decided to move.", "She's good at solving problems."],
    exercises: [
      { kind: "choice", prompt: "He avoided ___ about it.", options: ["to talk", "talking", "talk"], answer: 1 },
      { kind: "choice", prompt: "They hope ___ next year.", options: ["travelling", "to travel", "travel"], answer: 1 },
      { kind: "write", prompt: "Complete: I'm interested in ___ (learn) more.", answer: "learning" },
    ],
  },
  {
    id: "mixed-conditionals",
    title: "Mixed conditionals",
    titlePt: "Condicionais mistas",
    level: "Advanced",
    explanation:
      "Combine a past condition with a present result (If I had studied medicine, I'd be a doctor now) or a present condition with a past result.",
    explanationPt:
      "Combinam condição passada com resultado presente, ou condição presente com resultado passado.",
    examples: [
      "If I had taken that job, I would be living in Berlin now.",
      "If she weren't so careful, she would have made that mistake.",
    ],
    exercises: [
      { kind: "choice", prompt: "If he had saved money, he ___ a car now.", options: ["would have", "would have had", "will have"], answer: 0 },
      { kind: "write", prompt: "Complete: If I ___ (not miss) the flight, I'd be there already.", answer: "hadn't missed" },
    ],
  },
  {
    id: "inversion",
    title: "Inversion & emphasis",
    titlePt: "Inversão e ênfase",
    level: "Advanced",
    explanation:
      "After negative or limiting adverbials at the start of a sentence, invert subject and auxiliary: Never have I…, Not only did she…, Rarely do we…",
    explanationPt:
      "Após advérbios negativos no início da frase, inverta sujeito e auxiliar.",
    examples: [
      "Never have I seen such a response.",
      "Not only did she apologise, but she also fixed it.",
    ],
    exercises: [
      { kind: "choice", prompt: "Rarely ___ such commitment.", options: ["we see", "do we see", "we do see"], answer: 1 },
      { kind: "write", prompt: "Invert: I had never heard that before. → Never ___ heard that before.", answer: "had i" },
    ],
  },
  {
    id: "causative",
    title: "Causative structures",
    titlePt: "Estruturas causativas",
    level: "Advanced",
    explanation:
      "have / get something done when someone else performs the action; have / get someone to do something when you name the person.",
    explanationPt:
      "have/get + objeto + particípio quando outra pessoa realiza a ação.",
    examples: ["I had my laptop repaired.", "She got the contract reviewed by a lawyer."],
    exercises: [
      { kind: "choice", prompt: "We're having the kitchen ___ next week.", options: ["paint", "painted", "painting"], answer: 1 },
      { kind: "write", prompt: "Rewrite: A designer made my website. → I had my website ___.", answer: "made" },
    ],
  },
  {
    id: "discourse-markers",
    title: "Discourse markers & register",
    titlePt: "Marcadores de discurso e registro",
    level: "Advanced",
    explanation:
      "Use markers to signal contrast (nevertheless, whereas), result (consequently, hence), and addition (moreover, furthermore). Match the register to the context.",
    explanationPt:
      "Use marcadores para sinalizar contraste, consequência e adição, ajustando o registro formal ou informal.",
    examples: [
      "The costs rose; nevertheless, the project stayed on track.",
      "Sales grew in Europe, whereas Asia remained flat.",
    ],
    exercises: [
      { kind: "choice", prompt: "The data was incomplete; ___, the conclusion stands.", options: ["moreover", "nevertheless", "hence"], answer: 1 },
      { kind: "choice", prompt: "Choose the most formal option:", options: ["So we cancelled it.", "Consequently, it was cancelled.", "Anyway, it's off."], answer: 1 },
      { kind: "write", prompt: "Complete: Costs fell; ___, profits increased.", answer: "consequently" },
    ],
  },
];

export const GENERAL_GRAMMAR_TOTAL = GENERAL_GRAMMAR.length;
