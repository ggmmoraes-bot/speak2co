import type { CourseUnit } from "./types";

/**
 * Intermediate — Unit 34 (Look at the Stars). Conteúdo autoral Speak2Co.
 * Foco: Present Perfect para experiências de vida (ever/never, been/seen)
 * e revisão do passado simples irregular (saw, went, felt).
 * Personagens originais: Ana, Diego e Priya, amigos acampando nas montanhas.
 */
export const INTERMEDIATE_U34: CourseUnit = {
  code: "INTERMEDIATE-U34",
  number: 34,
  title: "Look at the Stars — Have You Ever Seen a Shooting Star?",
  titlePt: "Olhe as Estrelas — Você Já Viu Uma Estrela Cadente?",
  cefr: "B1",
  objective: {
    en: "Talk about life experiences with the present perfect ('ever', 'never', 'been', 'seen') and describe a night under the stars.",
    pt: "Falar sobre experiências de vida com o present perfect ('ever', 'never', 'been', 'seen') e descrever uma noite sob as estrelas.",
  },
  communicationGoal: {
    en: "Ask and answer questions about things you have or haven't experienced, and tell a short story about a memorable night.",
    pt: "Perguntar e responder sobre coisas que você já viveu ou nunca viveu, e contar uma pequena história sobre uma noite marcante.",
  },
  prerequisites: {
    en: "Simple past (regular and irregular verbs) and basic question forms.",
    pt: "Passado simples (verbos regulares e irregulares) e formas básicas de perguntas.",
  },
  newContent: {
    en: "Grammar: Present perfect for life experiences with 'ever'/'never' and irregular past participles (been, seen, done, had) | Vocabulary: night sky and camping (12 items) | Expressions: reacting to stories",
    pt: "Gramática: Present perfect para experiências de vida com 'ever'/'never' e particípios irregulares (been, seen, done, had) | Vocabulário: céu noturno e acampamento (12 itens) | Expressões: reagir a histórias",
  },
  reviewContent: {
    en: "Simple past of irregular verbs: see (saw), go (went), feel (felt) in affirmative, negative and questions.",
    pt: "Passado simples de verbos irregulares: see (saw), go (went), feel (felt) na afirmativa, negativa e perguntas.",
  },
  discover: {
    id: "INTERMEDIATE-U34-DISCOVER",
    warmUp: {
      prompt: {
        en: "Look at the picture. What can you see in the night sky? Have you ever camped somewhere far from the city?",
        pt: "Observe a imagem. O que você consegue ver no céu noturno? Você já acampou em algum lugar longe da cidade?",
      },
      phrases: [
        { en: "Have you ever seen a shooting star?", pt: "Você já viu uma estrela cadente?" },
        { en: "What's the sky like where you live?", pt: "Como é o céu onde você mora?" },
        { en: "Do you like looking at the stars at night?", pt: "Você gosta de olhar as estrelas à noite?" },
      ],
    },
    context: {
      situation: {
        en: "Ana, Diego and Priya are camping in the mountains, far from the city lights. They lie on the grass and look up at the sky.",
        pt: "Ana, Diego e Priya estão acampando nas montanhas, longe das luzes da cidade. Eles se deitam na grama e olham para o céu.",
      },
      dialogue: [
        { who: "Ana", en: "Wow, look at the stars! I've never seen so many in my life.", pt: "Nossa, olhem as estrelas! Nunca vi tantas na minha vida." },
        { who: "Diego", en: "I know. Have you ever been somewhere this dark before?", pt: "Eu sei. Você já esteve em algum lugar tão escuro assim antes?" },
        { who: "Ana", en: "Never! In the city, I've only seen three or four stars at once.", pt: "Nunca! Na cidade, só vi três ou quatro estrelas de uma vez." },
        { who: "Priya", en: "Look! A shooting star! Did you see it?", pt: "Olhem! Uma estrela cadente! Vocês viram?" },
        { who: "Diego", en: "Yes! I saw it too. Have you ever made a wish on a shooting star?", pt: "Sim! Eu também vi. Você já pediu um desejo para uma estrela cadente?" },
        { who: "Priya", en: "I have! Last year, on a trip to the desert. I felt so small under all those stars.", pt: "Já! No ano passado, em uma viagem ao deserto. Eu me senti tão pequena sob todas aquelas estrelas." },
        { who: "Ana", en: "I've never been to a desert. Did you go alone?", pt: "Nunca fui a um deserto. Você foi sozinha?" },
        { who: "Priya", en: "No, I went with my family. We haven't done a trip like that since, actually.", pt: "Não, fui com minha família. Na verdade, não fizemos uma viagem assim desde então." },
      ],
    },
    vocabulary: [
      { term: "star", pt: "estrela", ipa: "/stɑːr/", definition: "A bright point of light in the night sky.", example: "I've counted more than a hundred stars tonight.", examplePt: "Contei mais de cem estrelas hoje à noite." },
      { term: "sky", pt: "céu", ipa: "/skaɪ/", definition: "The space above the earth that you see when you look up.", example: "The sky is completely clear tonight.", examplePt: "O céu está completamente limpo hoje à noite." },
      { term: "shooting star", pt: "estrela cadente", ipa: "/ˈʃuːtɪŋ stɑːr/", definition: "A small piece of rock that burns and makes a bright line of light as it falls.", example: "Make a wish! That was a shooting star.", examplePt: "Peça um desejo! Aquilo foi uma estrela cadente." },
      { term: "moon", pt: "lua", ipa: "/muːn/", definition: "The bright object that moves around the earth and shines at night.", example: "The moon is full tonight.", examplePt: "A lua está cheia hoje à noite." },
      { term: "dark", pt: "escuro", ipa: "/dɑːrk/", definition: "With little or no light.", example: "It gets dark very early in winter.", examplePt: "Escurece muito cedo no inverno." },
      { term: "campfire", pt: "fogueira", ipa: "/ˈkæmpfaɪər/", definition: "A fire that people make outdoors, usually for camping.", example: "We sat around the campfire and told stories.", examplePt: "Ficamos sentados ao redor da fogueira e contamos histórias." },
      { term: "tent", pt: "barraca", ipa: "/tent/", definition: "A structure made of cloth, used for sleeping outdoors.", example: "We set up the tent before it got dark.", examplePt: "Montamos a barraca antes de escurecer." },
      { term: "desert", pt: "deserto", ipa: "/ˈdezərt/", definition: "A large area of land with very little rain and few plants.", example: "The stars are amazing in the desert.", examplePt: "As estrelas são incríveis no deserto." },
      { term: "wish", pt: "desejo; desejar", ipa: "/wɪʃ/", definition: "A hope for something to happen; to hope for something.", example: "She made a wish and blew out the candles.", examplePt: "Ela pediu um desejo e apagou as velas." },
      { term: "amazing", pt: "incrível", ipa: "/əˈmeɪzɪŋ/", definition: "Causing great surprise or wonder; excellent.", example: "That view of the stars was amazing.", examplePt: "Aquela vista das estrelas foi incrível." },
      { term: "quiet", pt: "silencioso, quieto", ipa: "/ˈkwaɪət/", definition: "Making very little or no noise.", example: "It's so quiet out here, far from the city.", examplePt: "É tão silencioso aqui, longe da cidade." },
      { term: "blanket", pt: "cobertor, manta", ipa: "/ˈblæŋkɪt/", definition: "A large piece of soft cloth used to keep warm or sit on.", example: "We put a blanket on the grass to lie down.", examplePt: "Colocamos uma manta na grama para deitar." },
    ],
    expressions: [
      { en: "Look at that!", pt: "Olha aquilo!" },
      { en: "I've never seen so many…", pt: "Nunca vi tantos/tantas…" },
      { en: "Make a wish!", pt: "Peça um desejo!" },
      { en: "I felt so small.", pt: "Me senti tão pequeno(a)." },
      { en: "Not since…", pt: "Não desde…" },
      { en: "Have you ever…?", pt: "Você já…?" },
    ],
    grammar: [
      {
        title: { en: "Present perfect — life experiences with ever/never", pt: "Present perfect — experiências de vida com ever/never" },
        examples: [
          { en: "I've never seen so many stars in my life.", pt: "Nunca vi tantas estrelas na minha vida." },
          { en: "Have you ever been somewhere this dark?", pt: "Você já esteve em algum lugar tão escuro assim?" },
          { en: "Priya has made a wish on a shooting star.", pt: "A Priya já pediu um desejo para uma estrela cadente." },
          { en: "We haven't done a trip like that since.", pt: "Não fizemos uma viagem assim desde então." },
          { en: "Has Ana ever camped in the desert?", pt: "A Ana já acampou no deserto?" },
        ],
        rule: {
          en: "Use 'have/has + past participle' to talk about experiences at some point in life, without saying exactly when. 'Ever' is used in questions (Have you ever…?) and 'never' in negative statements (I've never…). Common irregular participles: be→been, see→seen, do→done, have→had, make→made.",
          pt: "Use 'have/has + particípio passado' para falar de experiências em algum momento da vida, sem dizer exatamente quando. 'Ever' é usado em perguntas (Have you ever…?) e 'never' em afirmações negativas (I've never…). Particípios irregulares comuns: be→been, see→seen, do→done, have→had, make→made.",
        },
        mistakes: [
          { en: "✗ I never have seen that. → ✓ I've never seen that. (never goes after have/has)", pt: "✗ I never have seen that. → ✓ I've never seen that. (never vem depois de have/has)" },
          { en: "✗ Have you ever go there? → ✓ Have you ever been there? (use the past participle)", pt: "✗ Have you ever go there? → ✓ Have you ever been there? (use o particípio)" },
          { en: "✗ She has saw a shooting star. → ✓ She has seen a shooting star.", pt: "✗ She has saw a shooting star. → ✓ She has seen a shooting star." },
        ],
      },
      {
        title: { en: "Been vs. gone", pt: "Been vs. gone" },
        examples: [
          { en: "I've been to the desert twice. (I visited it and I'm back)", pt: "Já fui ao deserto duas vezes. (visitei e voltei)" },
          { en: "He's gone to the campsite. (he's still there)", pt: "Ele foi para o acampamento. (ainda está lá)" },
        ],
        rule: {
          en: "'Have/has been to' means someone visited a place and came back. 'Have/has gone to' means someone went to a place and is still there (or on the way).",
          pt: "'Have/has been to' significa que alguém visitou um lugar e voltou. 'Have/has gone to' significa que alguém foi a um lugar e ainda está lá (ou a caminho).",
        },
        mistakes: [
          { en: "✗ I've gone to Peru three times. (if you're back, use 'been') → ✓ I've been to Peru three times.", pt: "✗ I've gone to Peru three times. (se você voltou, use 'been') → ✓ I've been to Peru three times." },
        ],
      },
      {
        title: { en: "Review: saw, went, felt", pt: "Revisão: saw, went, felt" },
        examples: [
          { en: "I saw a shooting star last night. Did you see it too?", pt: "Vi uma estrela cadente ontem à noite. Você também viu?" },
          { en: "They went camping last summer. They didn't go alone.", pt: "Eles foram acampar no verão passado. Não foram sozinhos." },
          { en: "Priya felt small under the stars. She didn't feel scared.", pt: "A Priya se sentiu pequena sob as estrelas. Ela não se sentiu com medo." },
        ],
        rule: {
          en: "Past forms: see → saw, go → went, feel → felt. In negatives and questions, use did/didn't + base verb: I didn't see it. Did you go camping?",
          pt: "Formas do passado: see → saw, go → went, feel → felt. Na negativa e na pergunta, use did/didn't + verbo base: I didn't see it. Did you go camping?",
        },
        mistakes: [
          { en: "✗ I didn't saw it. → ✓ I didn't see it.", pt: "✗ I didn't saw it. → ✓ I didn't see it." },
          { en: "✗ Did you went camping? → ✓ Did you go camping?", pt: "✗ Did you went camping? → ✓ Did you go camping?" },
        ],
      },
    ],
    controlledPractice: [
      { id: "i34d-cp1", prompt: { en: "Complete: 'I've ___ seen so many stars.'", pt: "Complete: 'I've ___ seen so many stars.'" }, options: ["never", "ever", "not never"], answer: "never", explanation: { en: "'Never' is used in affirmative sentences with the meaning 'not ever'.", pt: "'Never' é usado em frases afirmativas com o sentido de 'not ever'." } },
      { id: "i34d-cp2", prompt: { en: "Complete: 'Have you ___ been to a desert?'", pt: "Complete: 'Have you ___ been to a desert?'" }, options: ["ever", "never", "already"], answer: "ever", explanation: { en: "'Ever' is used in present perfect questions about experience.", pt: "'Ever' é usado em perguntas no present perfect sobre experiência." } },
      { id: "i34d-cp3", prompt: { en: "Choose the correct participle: 'She has ___ a shooting star.'", pt: "Escolha o particípio correto: 'She has ___ a shooting star.'" }, options: ["saw", "seen", "see"], answer: "seen", explanation: { en: "Present perfect uses the past participle: see → seen.", pt: "O present perfect usa o particípio: see → seen." } },
      { id: "i34d-cp4", prompt: { en: "Complete: 'I ___ to the desert twice.' (visited and came back)", pt: "Complete: 'I ___ to the desert twice.' (visitou e voltou)" }, options: ["have gone", "have been", "went"], answer: "have been", explanation: { en: "'Have been to' = visited and came back.", pt: "'Have been to' = visitou e voltou." } },
      { id: "i34d-cp5", prompt: { en: "Complete: 'They ___ camping last summer.'", pt: "Complete: 'They ___ camping last summer.'" }, options: ["have gone", "went", "have went"], answer: "went", explanation: { en: "With a past time expression ('last summer'), use simple past.", pt: "Com uma expressão de tempo passado ('last summer'), use o passado simples." } },
    ],
    input: {
      kind: "reading",
      title: { en: "A night to remember", pt: "Uma noite para lembrar" },
      lines: [
        { en: "Ana had never camped far from the city before, so this trip was special for her.", pt: "A Ana nunca tinha acampado longe da cidade antes, então esta viagem foi especial para ela." },
        { en: "She has seen the stars from her window many times, but never like this.", pt: "Ela já viu as estrelas da janela dela muitas vezes, mas nunca assim." },
        { en: "Diego has been to the mountains before, but he had never seen a shooting star until that night.", pt: "O Diego já esteve nas montanhas antes, mas nunca tinha visto uma estrela cadente até aquela noite." },
        { en: "Priya has traveled to the desert once, and she has never forgotten how small she felt under the sky.", pt: "A Priya já viajou ao deserto uma vez, e ela nunca esqueceu como se sentiu pequena sob o céu." },
        { en: "The three friends went home the next day, but they haven't stopped talking about that night since.", pt: "Os três amigos foram para casa no dia seguinte, mas não pararam de falar sobre aquela noite desde então." },
      ],
      questions: [
        { id: "i34d-iq1", prompt: { en: "Had Ana ever camped far from the city before?", pt: "A Ana já tinha acampado longe da cidade antes?" }, options: ["Yes, many times.", "No, never.", "Yes, once."], answer: "No, never.", explanation: { en: "'Ana had never camped far from the city before.'", pt: "'A Ana nunca tinha acampado longe da cidade antes.'" } },
        { id: "i34d-iq2", prompt: { en: "Had Diego ever seen a shooting star before that night?", pt: "O Diego já tinha visto uma estrela cadente antes daquela noite?" }, options: ["Yes, many times.", "No, never.", "He isn't sure."], answer: "No, never.", explanation: { en: "'He had never seen a shooting star until that night.'", pt: "'Ele nunca tinha visto uma estrela cadente até aquela noite.'" } },
        { id: "i34d-iq3", prompt: { en: "Have the friends stopped talking about that night?", pt: "Os amigos pararam de falar sobre aquela noite?" }, options: ["Yes, they have.", "No, they haven't.", "They never talked about it."], answer: "No, they haven't.", explanation: { en: "'They haven't stopped talking about that night since.'", pt: "'Eles não pararam de falar sobre aquela noite desde então.'" } },
      ],
    },
    quickCheck: [
      { id: "i34d-qc1", prompt: { en: "What does 'shooting star' mean?", pt: "O que significa 'shooting star'?" }, options: ["A bright line of light falling from the sky", "A very large star", "A star made of ice"], answer: "A bright line of light falling from the sky", explanation: { en: "A shooting star is a small piece of rock burning as it falls.", pt: "Uma estrela cadente é um pequeno pedaço de rocha que queima ao cair." } },
      { id: "i34d-qc2", prompt: { en: "Choose the correct question.", pt: "Escolha a pergunta correta." }, options: ["Have you ever seen a shooting star?", "Have you ever saw a shooting star?", "Did you have ever seen a shooting star?"], answer: "Have you ever seen a shooting star?", explanation: { en: "Have + subject + ever + past participle.", pt: "Have + sujeito + ever + particípio." } },
      { id: "i34d-qc3", prompt: { en: "Past of 'feel'?", pt: "Passado de 'feel'?" }, options: ["feeled", "felt", "feelt"], answer: "felt", explanation: { en: "'Feel' is irregular: feel → felt.", pt: "'Feel' é irregular: feel → felt." } },
      { id: "i34d-qc4", prompt: { en: "'She ___ never been to a desert.'", pt: "'She ___ never been to a desert.'" }, options: ["have", "has", "is"], answer: "has", explanation: { en: "With 'she', use 'has' in the present perfect.", pt: "Com 'she', use 'has' no present perfect." } },
    ],
  },
  communicate: {
    id: "INTERMEDIATE-U34-COMMUNICATE",
    review: [
      { en: "I've never seen so many stars. — present perfect with 'never'.", pt: "Nunca vi tantas estrelas. — present perfect com 'never'." },
      { en: "Have you ever seen a shooting star? — present perfect with 'ever'.", pt: "Você já viu uma estrela cadente? — present perfect com 'ever'." },
      { en: "I've been to the desert twice. / He's gone to the campsite.", pt: "Já fui ao deserto duas vezes. / Ele foi para o acampamento (e está lá)." },
      { en: "I saw a shooting star. We went camping. She felt small.", pt: "Vi uma estrela cadente. Fomos acampar. Ela se sentiu pequena." },
    ],
    activities: [
      {
        id: "i34c-a1",
        title: { en: "Have you ever…?", pt: "Você já…?" },
        instruction: { en: "Ask a friend three 'Have you ever…?' questions about unusual experiences and answer with 'yes, I have' or 'no, I haven't'.", pt: "Pergunte a um amigo três perguntas 'Have you ever…?' sobre experiências incomuns e responda com 'yes, I have' ou 'no, I haven't'." },
        phrases: [
          { en: "Have you ever slept outside under the stars?", pt: "Você já dormiu ao ar livre sob as estrelas?" },
          { en: "Have you ever seen a shooting star?", pt: "Você já viu uma estrela cadente?" },
          { en: "No, I haven't, but I'd love to.", pt: "Não, nunca, mas eu adoraria." },
        ],
        check: [
          { id: "i34c-a1q1", prompt: { en: "Which is the correct short answer?", pt: "Qual é a resposta curta correta?" }, options: ["Yes, I have.", "Yes, I did.", "Yes, I am."], answer: "Yes, I have.", explanation: { en: "Present perfect questions get 'have/haven't' short answers.", pt: "Perguntas no present perfect recebem respostas curtas com 'have/haven't'." } },
          { id: "i34c-a1q2", prompt: { en: "Complete: 'She ___ never camped before.'", pt: "Complete: 'She ___ never camped before.'" }, options: ["has", "have", "is"], answer: "has", explanation: { en: "Third person singular uses 'has'.", pt: "Terceira pessoa do singular usa 'has'." } },
        ],
      },
      {
        id: "i34c-a2",
        title: { en: "A memorable night", pt: "Uma noite marcante" },
        instruction: { en: "Describe a memorable night outdoors (real or invented) using the present perfect and the simple past.", pt: "Descreva uma noite marcante ao ar livre (real ou inventada) usando o present perfect e o passado simples." },
        phrases: [
          { en: "I've been camping many times, but last month was special.", pt: "Já acampei muitas vezes, mas o mês passado foi especial." },
          { en: "We saw three shooting stars and made a wish.", pt: "Vimos três estrelas cadentes e pedimos um desejo." },
          { en: "I felt so quiet and happy under all those stars.", pt: "Me senti tão tranquilo(a) e feliz sob todas aquelas estrelas." },
        ],
        check: [
          { id: "i34c-a2q1", prompt: { en: "Which sentence is correct?", pt: "Qual frase está correta?" }, options: ["We saw three shooting stars.", "We have saw three shooting stars.", "We seen three shooting stars."], answer: "We saw three shooting stars.", explanation: { en: "With a specific past time or event, use simple past.", pt: "Com um momento ou evento específico do passado, use o passado simples." } },
          { id: "i34c-a2q2", prompt: { en: "Complete: 'I've never ___ so happy outdoors.'", pt: "Complete: 'I've never ___ so happy outdoors.'" }, options: ["felt", "feel", "feeled"], answer: "felt", explanation: { en: "Present perfect: have/has + past participle (feel → felt).", pt: "Present perfect: have/has + particípio (feel → felt)." } },
        ],
      },
    ],
    challenge: {
      id: "i34c-challenge",
      title: { en: "Under the same sky", pt: "Sob o mesmo céu" },
      instruction: { en: "Have a short conversation: ask your partner about experiences with nature, and tell a short true or invented story with the simple past.", pt: "Tenha uma conversa curta: pergunte ao seu parceiro sobre experiências com a natureza e conte uma pequena história verdadeira ou inventada com o passado simples." },
      phrases: [
        { en: "Have you ever been camping in the mountains?", pt: "Você já foi acampar nas montanhas?" },
        { en: "Yes, I have. I went there two years ago with my family.", pt: "Sim, já. Eu fui lá há dois anos com minha família." },
        { en: "We haven't done a trip like that since, actually.", pt: "Na verdade, não fizemos uma viagem assim desde então." },
      ],
      check: [
        { id: "i34c-chq1", prompt: { en: "Complete: 'We haven't ___ a trip like that since.'", pt: "Complete: 'We haven't ___ a trip like that since.'" }, options: ["done", "did", "do"], answer: "done", explanation: { en: "Present perfect negative: haven't + past participle (do → done).", pt: "Present perfect negativo: haven't + particípio (do → done)." } },
        { id: "i34c-chq2", prompt: { en: "Complete: 'I ___ there two years ago.'", pt: "Complete: 'I ___ there two years ago.'" }, options: ["have gone", "went", "have been"], answer: "went", explanation: { en: "With a specific past time ('two years ago'), use simple past.", pt: "Com um momento específico do passado ('two years ago'), use o passado simples." } },
      ],
    },
    lessonReview: {
      summary: {
        en: "You learned to talk about life experiences with the present perfect ('ever'/'never', 'been'/'gone'), and reviewed the simple past of see, go and feel.",
        pt: "Você aprendeu a falar sobre experiências de vida com o present perfect ('ever'/'never', 'been'/'gone'), e revisou o passado simples de see, go e feel.",
      },
      canDo: [
        { en: "I can ask 'Have you ever…?' and answer about my experiences.", pt: "Eu consigo perguntar 'Have you ever…?' e responder sobre minhas experiências." },
        { en: "I can tell a short story about a memorable night using the simple past.", pt: "Eu consigo contar uma pequena história sobre uma noite marcante usando o passado simples." },
      ],
      next: { en: "Next unit: comparing things — better than before.", pt: "Próxima unidade: comparando coisas — melhor do que antes." },
    },
  },
};
