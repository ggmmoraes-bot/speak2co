import type { CourseUnit } from "./types";

/**
 * Intermediate — Unit 5 (What Were You Doing?). Conteúdo autoral Speak2Co.
 * Foco: passado contínuo (past continuous) para ações em andamento no
 * passado, "think about" e "be interested in" + verbo -ing.
 * Personagens originais: Marina, Theo e Rafa, amigos que dividem apartamento.
 */
export const INTERMEDIATE_U05: CourseUnit = {
  code: "INTERMEDIATE-U05",
  number: 5,
  title: "What Were You Doing? — Talking about actions in progress in the past",
  titlePt: "O Que Você Estava Fazendo? — Falando de ações em andamento no passado",
  cefr: "B1",
  objective: {
    en: "Describe what was happening at a specific moment in the past using the past continuous, and talk about interests with 'think about' and 'be interested in' + -ing.",
    pt: "Descrever o que estava acontecendo em um momento específico do passado usando o passado contínuo, e falar de interesses com 'think about' e 'be interested in' + -ing.",
  },
  communicationGoal: {
    en: "Tell a story about an interruption: say what you were doing when something happened, and share what you were thinking about or interested in at the time.",
    pt: "Contar uma história sobre uma interrupção: dizer o que você estava fazendo quando algo aconteceu, e compartilhar o que você estava pensando ou interessado em fazer na época.",
  },
  prerequisites: {
    en: "Intermediate Unit 4: simple past of regular and irregular verbs to describe finished events.",
    pt: "Intermediate Unidade 4: passado simples de verbos regulares e irregulares para descrever eventos concluídos.",
  },
  newContent: {
    en: "Grammar: past continuous (affirmative, negative, questions) for actions in progress and interruptions with simple past | Expressions: 'think about' + -ing, 'be interested in' + -ing | Vocabulary: everyday activities and interruptions (12 items)",
    pt: "Gramática: passado contínuo (afirmativa, negativa, perguntas) para ações em andamento e interrupções com passado simples | Expressões: 'think about' + -ing, 'be interested in' + -ing | Vocabulário: atividades do dia a dia e interrupções (12 itens)",
  },
  reviewContent: {
    en: "Simple past of regular and irregular verbs to describe finished actions and set the interrupting event.",
    pt: "Passado simples de verbos regulares e irregulares para descrever ações concluídas e marcar o evento que interrompe.",
  },
  discover: {
    id: "INTERMEDIATE-U05-DISCOVER",
    warmUp: {
      prompt: {
        en: "Look at the picture. What were the people doing? What happened to interrupt them?",
        pt: "Observe a imagem. O que as pessoas estavam fazendo? O que aconteceu para interrompê-las?",
      },
      phrases: [
        { en: "What were you doing at 8 p.m. yesterday?", pt: "O que você estava fazendo às 20h ontem?" },
        { en: "Were you sleeping when your alarm went off this morning?", pt: "Você estava dormindo quando o despertador tocou hoje de manhã?" },
        { en: "What are you interested in doing this year?", pt: "No que você está interessado em fazer este ano?" },
      ],
    },
    context: {
      situation: {
        en: "It's Saturday morning. Marina, Theo and Rafa are talking about last night, when the power suddenly went out in the building.",
        pt: "É sábado de manhã. Marina, Theo e Rafa estão conversando sobre a noite passada, quando a luz de repente acabou no prédio.",
      },
      dialogue: [
        { who: "Marina", en: "What were you doing when the lights went out last night?", pt: "O que você estava fazendo quando a luz acabou ontem à noite?" },
        { who: "Theo", en: "I was cooking dinner! I was thinking about trying a new recipe when everything went dark.", pt: "Eu estava cozinhando o jantar! Eu estava pensando em experimentar uma receita nova quando tudo escureceu." },
        { who: "Rafa", en: "I was working on my laptop. I wasn't saving my file, so I lost everything.", pt: "Eu estava trabalhando no meu laptop. Eu não estava salvando meu arquivo, então perdi tudo." },
        { who: "Marina", en: "Oh no! I was talking to my sister on the phone. We were laughing when it happened.", pt: "Ah não! Eu estava falando com minha irmã no telefone. Estávamos rindo quando aconteceu." },
        { who: "Theo", en: "Were you two scared?", pt: "Vocês dois ficaram com medo?" },
        { who: "Rafa", en: "A little. I'm interested in buying some candles, just in case.", pt: "Um pouco. Estou interessado em comprar algumas velas, só por precaução." },
        { who: "Marina", en: "Good idea. What were the neighbors doing while we were sitting in the dark?", pt: "Boa ideia. O que os vizinhos estavam fazendo enquanto ficávamos sentados no escuro?" },
        { who: "Theo", en: "They were singing on the balcony! It was actually a lot of fun.", pt: "Eles estavam cantando na varanda! Na verdade, foi muito divertido." },
      ],
    },
    vocabulary: [
      { term: "power", pt: "energia elétrica", ipa: "/ˈpaʊər/", definition: "Electricity used to make things work.", example: "The power went out during the storm.", examplePt: "A energia acabou durante a tempestade." },
      { term: "candle", pt: "vela", ipa: "/ˈkændl/", definition: "A stick of wax with a wick that burns to give light.", example: "We lit a candle when the lights went out.", examplePt: "Acendemos uma vela quando a luz acabou." },
      { term: "recipe", pt: "receita (culinária)", ipa: "/ˈresəpi/", definition: "A set of instructions for cooking a dish.", example: "I found a new recipe for pasta online.", examplePt: "Encontrei uma receita nova de macarrão online." },
      { term: "laptop", pt: "notebook, laptop", ipa: "/ˈlæptɑːp/", definition: "A small portable computer.", example: "I was working on my laptop when it crashed.", examplePt: "Eu estava trabalhando no meu laptop quando ele travou." },
      { term: "to save", pt: "salvar", ipa: "/seɪv/", definition: "To keep a file so you don't lose the information.", example: "Always save your work before you close the file.", examplePt: "Sempre salve seu trabalho antes de fechar o arquivo." },
      { term: "to lose", pt: "perder", ipa: "/luːz/", definition: "To no longer have something.", example: "I lost my file because I didn't save it.", examplePt: "Perdi meu arquivo porque não salvei." },
      { term: "scared", pt: "assustado", ipa: "/skerd/", definition: "Feeling afraid.", example: "She was scared during the thunderstorm.", examplePt: "Ela ficou assustada durante a tempestade." },
      { term: "neighbor", pt: "vizinho", ipa: "/ˈneɪbər/", definition: "A person who lives near you.", example: "Our neighbors were singing on the balcony.", examplePt: "Nossos vizinhos estavam cantando na varanda." },
      { term: "balcony", pt: "varanda", ipa: "/ˈbælkəni/", definition: "An outdoor platform attached to a building, above ground level.", example: "We sat on the balcony and watched the sunset.", examplePt: "Sentamos na varanda e assistimos ao pôr do sol." },
      { term: "suddenly", pt: "de repente", ipa: "/ˈsʌdənli/", definition: "Happening quickly and without warning.", example: "Suddenly, the lights went out.", examplePt: "De repente, a luz acabou." },
      { term: "storm", pt: "tempestade", ipa: "/stɔːrm/", definition: "Very bad weather with strong wind and rain.", example: "The storm caused a power cut in our area.", examplePt: "A tempestade causou um corte de energia na nossa região." },
      { term: "in the dark", pt: "no escuro", ipa: "/ɪn ðə dɑːrk/", definition: "Without light.", example: "We stayed in the dark for two hours.", examplePt: "Ficamos no escuro por duas horas." },
    ],
    expressions: [
      { en: "went dark", pt: "escureceu" },
      { en: "just in case", pt: "só por precaução" },
      { en: "It was a lot of fun.", pt: "Foi muito divertido." },
      { en: "A little.", pt: "Um pouco." },
      { en: "while we were…", pt: "enquanto estávamos…" },
      { en: "went out (the lights went out)", pt: "acabou/apagou (a luz acabou)" },
    ],
    grammar: [
      {
        title: { en: "Past continuous — actions in progress in the past", pt: "Past continuous — ações em andamento no passado" },
        examples: [
          { en: "I was cooking dinner when the lights went out.", pt: "Eu estava cozinhando o jantar quando a luz acabou." },
          { en: "They were singing on the balcony.", pt: "Eles estavam cantando na varanda." },
          { en: "I wasn't saving my file.", pt: "Eu não estava salvando meu arquivo." },
          { en: "Were you sleeping at 8 p.m.?", pt: "Você estava dormindo às 20h?" },
          { en: "What were you doing when it happened?", pt: "O que você estava fazendo quando aconteceu?" },
          { en: "We were laughing when the power went out.", pt: "Estávamos rindo quando a energia acabou." },
        ],
        rule: {
          en: "Use 'was/were + verb-ing' for an action in progress at a specific moment in the past. It is often interrupted by a shorter action in the simple past: past continuous (longer action) + when + simple past (interruption). Negative: wasn't/weren't + verb-ing. Questions: invert was/were.",
          pt: "Use 'was/were + verbo-ing' para uma ação em andamento em um momento específico do passado. Costuma ser interrompida por uma ação mais curta no passado simples: past continuous (ação mais longa) + when + passado simples (interrupção). Negativa: wasn't/weren't + verbo-ing. Perguntas: inverta was/were.",
        },
        mistakes: [
          { en: "✗ I was cook dinner. → ✓ I was cooking dinner. (verb + -ing)", pt: "✗ I was cook dinner. → ✓ I was cooking dinner. (verbo + -ing)" },
          { en: "✗ She were working. → ✓ She was working. (she/he/it + was)", pt: "✗ She were working. → ✓ She was working. (she/he/it + was)" },
          { en: "✗ When the lights were going out, I was cooking. → ✓ When the lights went out, I was cooking. (interruption = simple past)", pt: "✗ When the lights were going out, I was cooking. → ✓ When the lights went out, I was cooking. (interrupção = passado simples)" },
        ],
      },
      {
        title: { en: "Think about / be interested in + verb-ing", pt: "Think about / be interested in + verbo-ing" },
        examples: [
          { en: "I was thinking about trying a new recipe.", pt: "Eu estava pensando em experimentar uma receita nova." },
          { en: "I'm interested in buying some candles.", pt: "Estou interessado em comprar algumas velas." },
          { en: "Are you thinking about changing jobs?", pt: "Você está pensando em mudar de emprego?" },
          { en: "She isn't interested in learning to cook.", pt: "Ela não está interessada em aprender a cozinhar." },
        ],
        rule: {
          en: "After 'think about' and 'be interested in', use a verb ending in -ing (gerund), not the base verb or the infinitive with 'to'. This rule applies with prepositions in general: verb/adjective + preposition + verb-ing.",
          pt: "Depois de 'think about' e 'be interested in', use um verbo terminado em -ing (gerúndio), e não o verbo base nem o infinitivo com 'to'. Essa regra vale com preposições em geral: verbo/adjetivo + preposição + verbo-ing.",
        },
        mistakes: [
          { en: "✗ I'm interested in cook. → ✓ I'm interested in cooking. (preposition + -ing)", pt: "✗ I'm interested in cook. → ✓ I'm interested in cooking. (preposição + -ing)" },
          { en: "✗ She's thinking about to travel. → ✓ She's thinking about traveling.", pt: "✗ She's thinking about to travel. → ✓ She's thinking about traveling." },
        ],
      },
    ],
    controlledPractice: [
      { id: "i5d-cp1", prompt: { en: "Complete: 'I ___ cooking dinner when the power went out.'", pt: "Complete: 'I ___ cooking dinner when the power went out.'" }, options: ["was", "were", "am"], answer: "was", explanation: { en: "'I' takes 'was' in the past continuous.", pt: "'I' usa 'was' no passado contínuo." } },
      { id: "i5d-cp2", prompt: { en: "Choose the correct sentence about an interruption.", pt: "Escolha a frase correta sobre uma interrupção." }, options: ["I was reading when the phone was ringing.", "I was reading when the phone rang.", "I read when the phone was ringing."], answer: "I was reading when the phone rang.", explanation: { en: "Longer action in past continuous, interruption in simple past.", pt: "Ação mais longa no passado contínuo, interrupção no passado simples." } },
      { id: "i5d-cp3", prompt: { en: "Make it a question: 'You were sleeping at 9 p.m.'", pt: "Transforme em pergunta: 'You were sleeping at 9 p.m.'" }, options: ["Were you sleeping at 9 p.m.?", "You were sleeping at 9 p.m.?", "Did you were sleeping at 9 p.m.?"], answer: "Were you sleeping at 9 p.m.?", explanation: { en: "Invert 'were' and the subject.", pt: "Inverta o 'were' e o sujeito." } },
      { id: "i5d-cp4", prompt: { en: "Complete: 'I'm interested in ___ new recipes.'", pt: "Complete: 'I'm interested in ___ new recipes.'" }, options: ["try", "to try", "trying"], answer: "trying", explanation: { en: "After a preposition, use verb-ing.", pt: "Depois de preposição, use verbo-ing." } },
      { id: "i5d-cp5", prompt: { en: "Which sentence is a correct negative?", pt: "Qual frase é uma negativa correta?" }, options: ["I wasn't saving my file.", "I didn't saving my file.", "I not was saving my file."], answer: "I wasn't saving my file.", explanation: { en: "Negative: wasn't/weren't + verb-ing.", pt: "Negativa: wasn't/weren't + verbo-ing." } },
    ],
    input: {
      kind: "listening",
      title: { en: "A phone call about last night's blackout", pt: "Uma ligação sobre o apagão de ontem à noite" },
      lines: [
        { en: "Hey, were you home when the power went out last night?", pt: "Oi, você estava em casa quando a luz acabou ontem à noite?" },
        { en: "Yes, I was! I was watching a movie with my roommates when it happened.", pt: "Sim, estava! Eu estava assistindo a um filme com meus colegas de apartamento quando aconteceu." },
        { en: "Were you scared?", pt: "Você ficou com medo?" },
        { en: "A little, but we were laughing about it two minutes later. We weren't panicking, we were just curious.", pt: "Um pouco, mas dois minutos depois já estávamos rindo. Não estávamos em pânico, estávamos só curiosos." },
        { en: "I'm thinking about buying a generator now, just in case it happens again.", pt: "Estou pensando em comprar um gerador agora, só por precaução caso aconteça de novo." },
      ],
      questions: [
        { id: "i5d-iq1", prompt: { en: "What was the person doing when the power went out?", pt: "O que a pessoa estava fazendo quando a luz acabou?" }, options: ["Cooking", "Watching a movie", "Sleeping"], answer: "Watching a movie", explanation: { en: "'I was watching a movie with my roommates.'", pt: "'I was watching a movie with my roommates.'" } },
        { id: "i5d-iq2", prompt: { en: "Were they panicking?", pt: "Eles estavam em pânico?" }, options: ["Yes, a lot.", "No, they weren't.", "They were sleeping."], answer: "No, they weren't.", explanation: { en: "'We weren't panicking, we were just curious.'", pt: "'We weren't panicking, we were just curious.'" } },
        { id: "i5d-iq3", prompt: { en: "What is the person interested in buying?", pt: "No que a pessoa está interessada em comprar?" }, options: ["Candles", "A generator", "A laptop"], answer: "A generator", explanation: { en: "'I'm thinking about buying a generator now.'", pt: "'I'm thinking about buying a generator now.'" } },
      ],
    },
    quickCheck: [
      { id: "i5d-qc1", prompt: { en: "What does 'suddenly' mean?", pt: "O que significa 'suddenly'?" }, options: ["Quickly, without warning", "Slowly, as planned", "Never"], answer: "Quickly, without warning", explanation: { en: "'Suddenly' describes something unexpected.", pt: "'Suddenly' descreve algo inesperado." } },
      { id: "i5d-qc2", prompt: { en: "Choose the correct question.", pt: "Escolha a pergunta correta." }, options: ["What you were doing?", "What were you doing?", "What did you were doing?"], answer: "What were you doing?", explanation: { en: "Invert 'were' with the subject after the question word.", pt: "Inverta 'were' com o sujeito depois da palavra de pergunta." } },
      { id: "i5d-qc3", prompt: { en: "'They ___ singing on the balcony.'", pt: "'They ___ singing on the balcony.'" }, options: ["was", "were", "are"], answer: "were", explanation: { en: "'They' takes 'were' in the past continuous.", pt: "'They' usa 'were' no passado contínuo." } },
      { id: "i5d-qc4", prompt: { en: "'I'm interested in ___ candles.'", pt: "'I'm interested in ___ candles.'" }, options: ["buy", "to buy", "buying"], answer: "buying", explanation: { en: "'Be interested in' is followed by verb-ing.", pt: "'Be interested in' é seguido de verbo-ing." } },
    ],
  },
  communicate: {
    id: "INTERMEDIATE-U05-COMMUNICATE",
    review: [
      { en: "I was cooking dinner when the lights went out. — past continuous + interruption.", pt: "Eu estava cozinhando o jantar quando a luz acabou. — passado contínuo + interrupção." },
      { en: "Were you sleeping at 9 p.m.? — questions with was/were.", pt: "Você estava dormindo às 21h? — perguntas com was/were." },
      { en: "I was thinking about trying a new recipe.", pt: "Eu estava pensando em experimentar uma receita nova." },
      { en: "I'm interested in buying some candles.", pt: "Estou interessado em comprar algumas velas." },
    ],
    activities: [
      {
        id: "i5c-a1",
        title: { en: "This Time Yesterday", pt: "Esta hora ontem" },
        instruction: { en: "Say what you were doing at three different moments yesterday (morning, afternoon, night).", pt: "Diga o que você estava fazendo em três momentos diferentes ontem (manhã, tarde, noite)." },
        phrases: [
          { en: "At 8 a.m., I was having breakfast.", pt: "Às 8h, eu estava tomando café da manhã." },
          { en: "At 3 p.m., I was working at my desk.", pt: "Às 15h, eu estava trabalhando na minha mesa." },
          { en: "At 11 p.m., I was sleeping.", pt: "Às 23h, eu estava dormindo." },
        ],
        check: [
          { id: "i5c-a1q1", prompt: { en: "Which sentence describes an action in progress at a past moment?", pt: "Qual frase descreve uma ação em andamento em um momento passado?" }, options: ["I was reading at 9 p.m.", "I read at 9 p.m.", "I read every night."], answer: "I was reading at 9 p.m.", explanation: { en: "Past continuous shows the action happening at that moment.", pt: "O passado contínuo mostra a ação acontecendo naquele momento." } },
          { id: "i5c-a1q2", prompt: { en: "Complete: 'We ___ having dinner at 7 p.m.'", pt: "Complete: 'We ___ having dinner at 7 p.m.'" }, options: ["was", "were", "are"], answer: "were", explanation: { en: "'We' takes 'were'.", pt: "'We' usa 'were'." } },
        ],
      },
      {
        id: "i5c-a2",
        title: { en: "Interrupted!", pt: "Interrompido!" },
        instruction: { en: "Tell a short story about a time you were doing something when something else happened.", pt: "Conte uma pequena história sobre um momento em que você estava fazendo algo quando outra coisa aconteceu." },
        phrases: [
          { en: "I was walking home when it started to rain.", pt: "Eu estava caminhando para casa quando começou a chover." },
          { en: "She was studying when her phone rang.", pt: "Ela estava estudando quando o telefone tocou." },
          { en: "We were watching TV when the power went out.", pt: "Estávamos assistindo TV quando a energia acabou." },
        ],
        check: [
          { id: "i5c-a2q1", prompt: { en: "Choose the correct sentence.", pt: "Escolha a frase correta." }, options: ["I was walking when it start to rain.", "I was walking when it started to rain.", "I walked when it was starting to rain."], answer: "I was walking when it started to rain.", explanation: { en: "Longer action in past continuous, interruption in simple past.", pt: "Ação mais longa no passado contínuo, interrupção no passado simples." } },
          { id: "i5c-a2q2", prompt: { en: "Negative of 'She was studying'?", pt: "Negativa de 'She was studying'?" }, options: ["She wasn't studying.", "She didn't studying.", "She isn't studying."], answer: "She wasn't studying.", explanation: { en: "wasn't + verb-ing.", pt: "wasn't + verbo-ing." } },
        ],
      },
      {
        id: "i5c-a3",
        title: { en: "What Are You Interested In?", pt: "No que você está interessado?" },
        instruction: { en: "Say two things you are thinking about doing and two things you are interested in learning.", pt: "Diga duas coisas que você está pensando em fazer e duas coisas que está interessado em aprender." },
        phrases: [
          { en: "I'm thinking about traveling next year.", pt: "Estou pensando em viajar no ano que vem." },
          { en: "I'm interested in learning to play the guitar.", pt: "Estou interessado em aprender a tocar violão." },
          { en: "I'm not interested in watching horror movies.", pt: "Não estou interessado em assistir a filmes de terror." },
        ],
        check: [
          { id: "i5c-a3q1", prompt: { en: "Complete: 'She's thinking about ___ a new job.'", pt: "Complete: 'She's thinking about ___ a new job.'" }, options: ["find", "to find", "finding"], answer: "finding", explanation: { en: "After 'about', use verb-ing.", pt: "Depois de 'about', use verbo-ing." } },
          { id: "i5c-a3q2", prompt: { en: "Which is correct?", pt: "Qual está correta?" }, options: ["I'm interested in cook.", "I'm interested to cook.", "I'm interested in cooking."], answer: "I'm interested in cooking.", explanation: { en: "'Interested in' + verb-ing.", pt: "'Interested in' + verbo-ing." } },
        ],
      },
    ],
    challenge: {
      id: "i5c-cc1",
      title: { en: "The Night the Power Went Out", pt: "A noite em que a luz acabou" },
      instruction: {
        en: "Tell the story out loud: what were you doing when the power went out, who was with you, what were you thinking about doing next, and what are you interested in doing to be more prepared next time.",
        pt: "Conte a história em voz alta: o que você estava fazendo quando a luz acabou, quem estava com você, no que você estava pensando em fazer a seguir, e no que você está interessado em fazer para estar mais preparado da próxima vez.",
      },
      phrases: [
        { en: "I was studying when the lights suddenly went out.", pt: "Eu estava estudando quando a luz de repente acabou." },
        { en: "My roommate was cooking, and we were laughing about the situation.", pt: "Meu colega de apartamento estava cozinhando, e nós estávamos rindo da situação." },
        { en: "I was thinking about lighting some candles.", pt: "Eu estava pensando em acender algumas velas." },
        { en: "Now I'm interested in buying a flashlight, just in case.", pt: "Agora estou interessado em comprar uma lanterna, só por precaução." },
      ],
      check: [
        { id: "i5c-cc1q1", prompt: { en: "Did you use the past continuous for the ongoing action?", pt: "Você usou o passado contínuo para a ação em andamento?" }, options: ["Yes", "No", "Partially"], answer: "Yes", explanation: { en: "Self-check: was/were + verb-ing.", pt: "Autoavaliação: was/were + verbo-ing." } },
        { id: "i5c-cc1q2", prompt: { en: "Did you use 'think about' or 'be interested in' + verb-ing?", pt: "Você usou 'think about' ou 'be interested in' + verbo-ing?" }, options: ["Yes", "No", "Partially"], answer: "Yes", explanation: { en: "Self-check: preposition + verb-ing.", pt: "Autoavaliação: preposição + verbo-ing." } },
      ],
    },
    lessonReview: {
      summary: {
        en: "You described actions in progress in the past with the past continuous, told stories about interruptions, and talked about interests with 'think about' and 'be interested in' + -ing.",
        pt: "Você descreveu ações em andamento no passado com o passado contínuo, contou histórias sobre interrupções, e falou de interesses com 'think about' e 'be interested in' + -ing.",
      },
      canDo: [
        { en: "I can say what I was doing at a specific moment in the past.", pt: "Consigo dizer o que eu estava fazendo em um momento específico do passado." },
        { en: "I can tell a story about an action that was interrupted.", pt: "Consigo contar uma história sobre uma ação que foi interrompida." },
        { en: "I can ask 'What were you doing when...?'.", pt: "Consigo perguntar 'What were you doing when...?'." },
        { en: "I can say what I'm thinking about doing or interested in doing.", pt: "Consigo dizer o que estou pensando em fazer ou interessado em fazer." },
      ],
      next: { en: "Next unit: a special day — talking about celebrations and important events.", pt: "Próxima unidade: um dia especial — falar sobre celebrações e eventos importantes." },
    },
  },
};
