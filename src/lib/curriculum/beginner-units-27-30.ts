import type { CourseUnit } from "./types";

/**
 * Speak2Co Beginner — Unidades 27–30 (bloco final "Ahead", A1).
 * Aulas 53–60 da matriz curricular. Conteúdo 100% autoral, elenco fixo:
 * Bruno, Helena e Ivan.
 */
export const BEGINNER_UNITS_27_30: CourseUnit[] = [
  {
    code: "BEGINNER-U27",
    number: 27,
    title: "Plans Ahead — Going to",
    titlePt: "Planos à frente — Going to",
    cefr: "A1",
    objective: {
      en: "Use be going to to talk about plans and intentions for the near future.",
      pt: "Usar be going to para falar de planos e intenções para um futuro próximo.",
    },
    communicationGoal: {
      en: "You can describe eight plans for a trip or a busy week.",
      pt: "Você consegue descrever oito planos para uma viagem ou uma semana cheia.",
    },
    prerequisites: {
      en: "Unit 26 — present continuous for actions happening now.",
      pt: "Unidade 26 — present continuous para ações acontecendo agora.",
    },
    newContent: {
      en: "Grammar: be going to (affirmative, negative, questions). Vocabulary: travel and plans. Expressions: I'm going to..., What are you going to do?",
      pt: "Gramática: be going to (afirmativo, negativo, perguntas). Vocabulário: viagem e planos. Expressões: I'm going to..., What are you going to do?",
    },
    reviewContent: {
      en: "Review from Unit 26: present continuous (be + verb-ing).",
      pt: "Revisão da Unidade 26: present continuous (be + verb-ing).",
    },
    discover: {
      id: "BEGINNER-U27-DISCOVER",
      warmUp: {
        prompt: {
          en: "Look at the picture. Someone is organizing a trip, with a suitcase and a map. What are they going to do?",
          pt: "Observe a imagem. Alguém está organizando uma viagem, com uma mala e um mapa. O que essa pessoa vai fazer?",
        },
        phrases: [
          { en: "I'm going to travel next month.", pt: "Eu vou viajar mês que vem." },
          { en: "She's going to book the hotel today.", pt: "Ela vai reservar o hotel hoje." },
          { en: "We're going to visit the city center.", pt: "Nós vamos visitar o centro da cidade." },
        ],
      },
      context: {
        situation: {
          en: "Helena is planning a short trip and tells Bruno what she is going to do.",
          pt: "Helena está planejando uma viagem curta e conta a Bruno o que ela vai fazer.",
        },
        dialogue: [
          { who: "Bruno", en: "Are you going to travel this weekend?", pt: "Você vai viajar neste fim de semana?" },
          { who: "Helena", en: "Yes! I'm going to visit my sister in the mountains.", pt: "Sim! Eu vou visitar minha irmã nas montanhas." },
          { who: "Bruno", en: "Nice! What are you going to do there?", pt: "Legal! O que você vai fazer lá?" },
          { who: "Helena", en: "We're going to walk in the park and cook together.", pt: "Nós vamos caminhar no parque e cozinhar juntas." },
          { who: "Bruno", en: "Are you going to take the bus or the car?", pt: "Você vai de ônibus ou de carro?" },
          { who: "Helena", en: "I'm going to take the bus. It's cheaper.", pt: "Eu vou de ônibus. É mais barato." },
          { who: "Bruno", en: "I'm not going to travel, but I'm going to plan my next vacation!", pt: "Eu não vou viajar, mas vou planejar minhas próximas férias!" },
        ],
      },
      vocabulary: [
        { term: "plan", pt: "plano", ipa: "/plæn/", definition: "Something you decide to do in the future.", example: "I have a plan for the weekend.", examplePt: "Eu tenho um plano para o fim de semana." },
        { term: "trip", pt: "viagem", ipa: "/trɪp/", definition: "A journey to a place.", example: "Our trip is next week.", examplePt: "Nossa viagem é semana que vem." },
        { term: "book", pt: "reservar", ipa: "/bʊk/", definition: "To arrange something in advance.", example: "I'm going to book the hotel.", examplePt: "Eu vou reservar o hotel." },
        { term: "suitcase", pt: "mala", ipa: "/ˈsuːtkeɪs/", definition: "A bag used for travel.", example: "She's going to pack her suitcase.", examplePt: "Ela vai fazer a mala." },
        { term: "visit", pt: "visitar", ipa: "/ˈvɪzɪt/", definition: "To go and see a person or place.", example: "We're going to visit my sister.", examplePt: "Nós vamos visitar minha irmã." },
        { term: "vacation", pt: "férias", ipa: "/veɪˈkeɪʃn/", definition: "A period of rest from work or study.", example: "I'm going to plan my vacation.", examplePt: "Eu vou planejar minhas férias." },
        { term: "map", pt: "mapa", ipa: "/mæp/", definition: "A drawing that shows a place.", example: "He's going to check the map.", examplePt: "Ele vai olhar o mapa." },
        { term: "ticket", pt: "passagem, bilhete", ipa: "/ˈtɪkɪt/", definition: "A paper that lets you travel or enter a place.", example: "I'm going to buy the ticket online.", examplePt: "Eu vou comprar a passagem online." },
        { term: "cheap", pt: "barato", ipa: "/tʃiːp/", definition: "Not expensive.", example: "The bus is cheaper than the train.", examplePt: "O ônibus é mais barato que o trem." },
        { term: "pack", pt: "arrumar (a mala)", ipa: "/pæk/", definition: "To put things into a bag before a trip.", example: "I'm going to pack tonight.", examplePt: "Eu vou arrumar a mala hoje à noite." },
      ],
      expressions: [
        { en: "I'm going to...", pt: "Eu vou... (plano)" },
        { en: "What are you going to do?", pt: "O que você vai fazer?" },
        { en: "Are you going to...?", pt: "Você vai...?" },
        { en: "We're going to...", pt: "Nós vamos... (plano)" },
        { en: "I'm not going to...", pt: "Eu não vou... (plano)" },
      ],
      grammar: [
        {
          title: { en: "Be going to — affirmative and negative", pt: "Be going to — afirmativo e negativo" },
          examples: [
            { en: "I'm going to travel next month.", pt: "Eu vou viajar mês que vem." },
            { en: "She's going to book the hotel.", pt: "Ela vai reservar o hotel." },
            { en: "I'm not going to travel this weekend.", pt: "Eu não vou viajar neste fim de semana." },
          ],
          rule: {
            en: "Use am/is/are + going to + base verb to talk about a plan or intention: I'm going to work, she's going to study, they're going to travel. For negatives, add not after am/is/are.",
            pt: "Use am/is/are + going to + verbo base para falar de um plano ou intenção: I'm going to work, she's going to study, they're going to travel. No negativo, coloque not depois de am/is/are.",
          },
          mistakes: [
            { en: "I going to travel. → I'm going to travel.", pt: "Sempre use o verbo to be antes de going to." },
            { en: "She's going to travels. → She's going to travel.", pt: "Depois de going to, use o verbo na forma base, sem -s." },
          ],
        },
        {
          title: { en: "Be going to — questions", pt: "Be going to — perguntas" },
          examples: [
            { en: "Are you going to travel this weekend?", pt: "Você vai viajar neste fim de semana?" },
            { en: "What are you going to do there?", pt: "O que você vai fazer lá?" },
            { en: "Is he going to book the hotel?", pt: "Ele vai reservar o hotel?" },
          ],
          rule: {
            en: "Invert the verb to be and the subject: Am/Is/Are + subject + going to + verb? Use question words (what, where, when) before am/is/are for information questions.",
            pt: "Inverta o verbo to be e o sujeito: Am/Is/Are + sujeito + going to + verbo? Use palavras interrogativas (what, where, when) antes de am/is/are para perguntas com informação.",
          },
          mistakes: [
            { en: "You are going to travel? → Are you going to travel?", pt: "Em perguntas, o to be vem antes do sujeito." },
            { en: "What you are going to do? → What are you going to do?", pt: "Depois da palavra interrogativa, inverta to be e sujeito." },
          ],
        },
      ],
      controlledPractice: [
        {
          id: "b27d-cp1",
          prompt: { en: "Complete: I ___ going to travel next week.", pt: "Complete: I ___ going to travel next week." },
          options: ["am", "is", "are"],
          answer: "am",
          explanation: { en: "I + am.", pt: "I + am." },
        },
        {
          id: "b27d-cp2",
          prompt: { en: "Complete: She ___ going to book the hotel.", pt: "Complete: She ___ going to book the hotel." },
          options: ["am", "is", "are"],
          answer: "is",
          explanation: { en: "she + is.", pt: "she + is." },
        },
        {
          id: "b27d-cp3",
          prompt: { en: "Choose the question.", pt: "Escolha a pergunta." },
          options: ["You are going to travel?", "Are you going to travel?", "Going to travel you?"],
          answer: "Are you going to travel?",
          explanation: { en: "Invert to be and subject.", pt: "Inverta to be e sujeito." },
        },
        {
          id: "b27d-cp4",
          prompt: { en: "Complete: We ___ not going to take the car.", pt: "Complete: We ___ not going to take the car." },
          options: ["are", "is", "am"],
          answer: "are",
          explanation: { en: "we + are.", pt: "we + are." },
        },
        {
          id: "b27d-cp5",
          prompt: { en: "Complete: What ___ you going to do there?", pt: "Complete: What ___ you going to do there?" },
          options: ["are", "is", "am"],
          answer: "are",
          explanation: { en: "Question word + are + you.", pt: "Palavra interrogativa + are + you." },
        },
        {
          id: "b27d-cp6",
          prompt: { en: "Complete: He ___ going to pack tonight.", pt: "Complete: He ___ going to pack tonight." },
          options: ["is", "are", "am"],
          answer: "is",
          explanation: { en: "he + is.", pt: "he + is." },
        },
      ],
      input: {
        kind: "listening",
        title: { en: "Listening — Weekend plans", pt: "Listening — Planos de fim de semana" },
        lines: [
          { en: "I'm going to visit my parents on Saturday.", pt: "Eu vou visitar meus pais no sábado." },
          { en: "We're going to cook a big lunch together.", pt: "Nós vamos cozinhar um almoço grande juntos." },
          { en: "My brother is going to bring his guitar.", pt: "Meu irmão vai trazer o violão dele." },
          { en: "We're not going to work this weekend.", pt: "Nós não vamos trabalhar neste fim de semana." },
        ],
        questions: [
          {
            id: "b27d-r1",
            prompt: { en: "Who is the speaker going to visit?", pt: "Quem o falante vai visitar?" },
            options: ["parents", "sister", "friends"],
            answer: "parents",
            explanation: { en: "I'm going to visit my parents.", pt: "I'm going to visit my parents." },
          },
          {
            id: "b27d-r2",
            prompt: { en: "What is the brother going to bring?", pt: "O que o irmão vai trazer?" },
            options: ["a suitcase", "his guitar", "a map"],
            answer: "his guitar",
            explanation: { en: "My brother is going to bring his guitar.", pt: "My brother is going to bring his guitar." },
          },
          {
            id: "b27d-r3",
            prompt: { en: "Are they going to work this weekend?", pt: "Eles vão trabalhar neste fim de semana?" },
            options: ["Yes", "No", "They don't say"],
            answer: "No",
            explanation: { en: "We're not going to work this weekend.", pt: "We're not going to work this weekend." },
          },
        ],
      },
      quickCheck: [
        {
          id: "b27d-qc1",
          prompt: { en: "Choose the correct sentence.", pt: "Escolha a frase correta." },
          options: ["I going to travel.", "I'm going to travel.", "I am going travel."],
          answer: "I'm going to travel.",
          explanation: { en: "am/is/are + going to + base verb.", pt: "am/is/are + going to + verbo base." },
        },
        {
          id: "b27d-qc2",
          prompt: { en: "Complete: Is he ___ to book the ticket?", pt: "Complete: Is he ___ to book the ticket?" },
          options: ["go", "going", "goes"],
          answer: "going",
          explanation: { en: "going to + base verb.", pt: "going to + verbo base." },
        },
        {
          id: "b27d-qc3",
          prompt: { en: "Choose the negative form.", pt: "Escolha a forma negativa." },
          options: ["I'm not going to travel.", "I not going to travel.", "I amn't going to travel."],
          answer: "I'm not going to travel.",
          explanation: { en: "not comes right after am/is/are.", pt: "not vem logo depois de am/is/are." },
        },
        {
          id: "b27d-qc4",
          prompt: { en: "'Cheap' means:", pt: "'Cheap' significa:" },
          options: ["expensive", "not expensive", "far"],
          answer: "not expensive",
          explanation: { en: "cheap = not expensive.", pt: "cheap = não caro." },
        },
      ],
    },
    communicate: {
      id: "BEGINNER-U27-COMMUNICATE",
      review: [
        { en: "Be going to: am/is/are + going to + base verb.", pt: "Be going to: am/is/are + going to + verbo base." },
        { en: "Questions: Am/Is/Are + subject + going to + verb?", pt: "Perguntas: Am/Is/Are + sujeito + going to + verbo?" },
        { en: "Negative: subject + am/is/are + not + going to + verb.", pt: "Negativo: sujeito + am/is/are + not + going to + verbo." },
      ],
      activities: [
        {
          id: "b27c-a1",
          title: { en: "Eight plans", pt: "Oito planos" },
          instruction: {
            en: "Say eight plans for your next free week, using I'm going to and We're going to.",
            pt: "Diga oito planos para sua próxima semana livre, usando I'm going to e We're going to.",
          },
          phrases: [
            { en: "I'm going to visit my grandmother.", pt: "Eu vou visitar minha avó." },
            { en: "We're going to book a small trip.", pt: "Nós vamos reservar uma viagem curta." },
          ],
          check: [
            {
              id: "b27c-a1q1",
              prompt: { en: "Complete: We ___ going to visit the city.", pt: "Complete: We ___ going to visit the city." },
              options: ["is", "are", "am"],
              answer: "are",
              explanation: { en: "we + are.", pt: "we + are." },
            },
          ],
        },
        {
          id: "b27c-a2",
          title: { en: "Ask a friend", pt: "Pergunte a um amigo" },
          instruction: {
            en: "Ask three questions about someone's plans with Are you going to...?",
            pt: "Faça três perguntas sobre os planos de alguém com Are you going to...?",
          },
          phrases: [
            { en: "Are you going to travel this month?", pt: "Você vai viajar este mês?" },
            { en: "What are you going to do on your vacation?", pt: "O que você vai fazer nas suas férias?" },
          ],
          check: [
            {
              id: "b27c-a2q1",
              prompt: { en: "Choose the correct question.", pt: "Escolha a pergunta correta." },
              options: ["You going to travel?", "Are you going to travel?", "Do you going to travel?"],
              answer: "Are you going to travel?",
              explanation: { en: "Are + subject + going to + verb.", pt: "Are + sujeito + going to + verbo." },
            },
          ],
        },
        {
          id: "b27c-a3",
          title: { en: "Not this time", pt: "Não desta vez" },
          instruction: {
            en: "Say two things you are going to do and two things you are not going to do this week.",
            pt: "Diga duas coisas que você vai fazer e duas que não vai fazer nesta semana.",
          },
          phrases: [
            { en: "I'm going to study English every day.", pt: "Eu vou estudar inglês todos os dias." },
            { en: "I'm not going to travel this week.", pt: "Eu não vou viajar nesta semana." },
          ],
          check: [
            {
              id: "b27c-a3q1",
              prompt: { en: "Choose the negative sentence.", pt: "Escolha a frase negativa." },
              options: ["I'm not going to travel.", "I no going to travel.", "I don't going to travel."],
              answer: "I'm not going to travel.",
              explanation: { en: "not after am/is/are.", pt: "not depois de am/is/are." },
            },
          ],
        },
      ],
      challenge: {
        id: "b27c-challenge",
        title: { en: "Communication Challenge — Let's plan a trip", pt: "Desafio de comunicação — Vamos planejar uma viagem" },
        instruction: {
          en: "With a partner (real or imagined), agree on one shared plan. Say what you're both going to do, where, and how you're going to travel.",
          pt: "Com uma dupla (real ou imaginada), combine um plano em conjunto. Diga o que vocês dois vão fazer, onde e como vão viajar.",
        },
        phrases: [
          { en: "Let's do it! We're going to visit the mountains.", pt: "Vamos fazer isso! Nós vamos visitar as montanhas." },
          { en: "We're going to take the bus on Saturday.", pt: "Nós vamos de ônibus no sábado." },
          { en: "I'm going to book the hotel today.", pt: "Eu vou reservar o hotel hoje." },
        ],
        check: [
          {
            id: "b27c-ch1",
            prompt: { en: "Which sentence has NO mistake?", pt: "Qual frase NÃO tem erro?" },
            options: ["We going to travel.", "We're going to travel.", "We is going to travel."],
            answer: "We're going to travel.",
            explanation: { en: "we + are + going to + base verb.", pt: "we + are + going to + verbo base." },
          },
          {
            id: "b27c-ch2",
            prompt: { en: "Choose the natural way to agree on a plan.", pt: "Escolha a forma natural de combinar um plano." },
            options: ["Let's do it!", "Do it we!", "Let we do it!"],
            answer: "Let's do it!",
            explanation: { en: "Let's do it! is a natural way to agree.", pt: "Let's do it! é uma forma natural de concordar." },
          },
        ],
      },
      lessonReview: {
        summary: {
          en: "You made plans, asked about other people's plans, and agreed on a shared plan with be going to.",
          pt: "Você fez planos, perguntou sobre os planos de outras pessoas e combinou um plano em conjunto com be going to.",
        },
        canDo: [
          { en: "I can talk about my plans with be going to.", pt: "Consigo falar dos meus planos com be going to." },
          { en: "I can ask other people about their plans.", pt: "Consigo perguntar a outras pessoas sobre os planos delas." },
          { en: "I can agree on a plan with someone else.", pt: "Consigo combinar um plano com outra pessoa." },
        ],
        next: {
          en: "Next: decide things quickly with will, for decisions made at the moment.",
          pt: "Próximo: decidir coisas rapidamente com will, para decisões tomadas na hora.",
        },
      },
    },
  },
  {
    code: "BEGINNER-U28",
    number: 28,
    title: "Decisions and Promises — Will",
    titlePt: "Decisões e promessas — Will",
    cefr: "A1",
    objective: {
      en: "Use will and won't to make quick decisions, offers and promises.",
      pt: "Usar will e won't para tomar decisões rápidas, fazer ofertas e promessas.",
    },
    communicationGoal: {
      en: "You can react to four everyday situations and offer help with will.",
      pt: "Você consegue reagir a quatro situações do dia a dia e oferecer ajuda com will.",
    },
    prerequisites: {
      en: "Unit 27 — be going to for plans made in advance.",
      pt: "Unidade 27 — be going to para planos feitos com antecedência.",
    },
    newContent: {
      en: "Grammar: will / won't for instant decisions. Vocabulary: decisions in a shop. Expressions: I'll take it, Don't worry, I'll...",
      pt: "Gramática: will / won't para decisões instantâneas. Vocabulário: decisões em uma loja. Expressões: I'll take it, Don't worry, I'll...",
    },
    reviewContent: {
      en: "Spiral review from Unit 27: be going to for plans.",
      pt: "Revisão em espiral da Unidade 27: be going to para planos.",
    },
    discover: {
      id: "BEGINNER-U28-DISCOVER",
      warmUp: {
        prompt: {
          en: "Look at the picture. A person is deciding in a shop, in front of two products. What is she going to say?",
          pt: "Observe a imagem. Uma pessoa está decidindo em uma loja, na frente de dois produtos. O que ela vai dizer?",
        },
        phrases: [
          { en: "I'll take this one.", pt: "Eu vou levar este." },
          { en: "I won't buy the expensive one.", pt: "Eu não vou comprar o caro." },
          { en: "I'll pay with card.", pt: "Eu vou pagar com cartão." },
        ],
      },
      context: {
        situation: {
          en: "Ivan is shopping for a gift with Helena and decides on the spot.",
          pt: "Ivan está comprando um presente com a Helena e decide na hora.",
        },
        dialogue: [
          { who: "Helena", en: "Look, this bag is nice, but it's expensive.", pt: "Olha, essa bolsa é bonita, mas é cara." },
          { who: "Ivan", en: "You're right. I won't buy that one.", pt: "Você tem razão. Eu não vou comprar essa." },
          { who: "Helena", en: "What about this small one?", pt: "E essa pequena aqui?" },
          { who: "Ivan", en: "Perfect! I'll take it.", pt: "Perfeita! Eu vou levar essa." },
          { who: "Helena", en: "Great choice! It's for your mother, right?", pt: "Ótima escolha! É para sua mãe, certo?" },
          { who: "Ivan", en: "Yes. I'll wrap it tonight.", pt: "Sim. Eu vou embrulhar hoje à noite." },
          { who: "Helena", en: "Don't worry, I'll help you with that.", pt: "Não se preocupe, eu vou te ajudar com isso." },
        ],
      },
      vocabulary: [
        { term: "decide", pt: "decidir", ipa: "/dɪˈsaɪd/", definition: "To choose something after thinking.", example: "I'll decide now.", examplePt: "Eu vou decidir agora." },
        { term: "choice", pt: "escolha", ipa: "/tʃɔɪs/", definition: "Something you pick between options.", example: "It's a great choice.", examplePt: "É uma ótima escolha." },
        { term: "take it", pt: "levar (comprar)", ipa: "/teɪk ɪt/", definition: "To decide to buy something.", example: "I'll take it.", examplePt: "Eu vou levar." },
        { term: "expensive", pt: "caro", ipa: "/ɪkˈspensɪv/", definition: "Costing a lot of money.", example: "This bag is expensive.", examplePt: "Essa bolsa é cara." },
        { term: "pay", pt: "pagar", ipa: "/peɪ/", definition: "To give money for something.", example: "I'll pay with card.", examplePt: "Eu vou pagar com cartão." },
        { term: "promise", pt: "prometer", ipa: "/ˈprɒmɪs/", definition: "To say you will do something for sure.", example: "I promise I'll call you.", examplePt: "Eu prometo que vou te ligar." },
        { term: "wrap", pt: "embrulhar", ipa: "/ræp/", definition: "To cover a gift with paper.", example: "I'll wrap the gift tonight.", examplePt: "Eu vou embrulhar o presente hoje à noite." },
        { term: "help", pt: "ajudar", ipa: "/help/", definition: "To do something for someone.", example: "I'll help you with that.", examplePt: "Eu vou te ajudar com isso." },
        { term: "worry", pt: "preocupar-se", ipa: "/ˈwɜːri/", definition: "To feel nervous about something.", example: "Don't worry, I'll help.", examplePt: "Não se preocupe, eu vou ajudar." },
        { term: "gift", pt: "presente", ipa: "/ɡɪft/", definition: "Something you give to someone.", example: "It's a gift for my mother.", examplePt: "É um presente para minha mãe." },
      ],
      expressions: [
        { en: "I'll take it.", pt: "Eu vou levar isso." },
        { en: "Don't worry, I'll...", pt: "Não se preocupe, eu vou..." },
        { en: "I won't...", pt: "Eu não vou..." },
        { en: "I promise I'll...", pt: "Eu prometo que vou..." },
        { en: "I think I'll...", pt: "Acho que eu vou..." },
      ],
      grammar: [
        {
          title: { en: "Will / won't for instant decisions", pt: "Will / won't para decisões instantâneas" },
          examples: [
            { en: "I'll take it.", pt: "Eu vou levar isso." },
            { en: "I won't buy the expensive one.", pt: "Eu não vou comprar o caro." },
            { en: "I'll pay with card.", pt: "Eu vou pagar com cartão." },
          ],
          rule: {
            en: "Use will (short form 'll) + base verb for decisions made at the moment of speaking, not planned before. The negative is won't (will not).",
            pt: "Use will (forma curta 'll) + verbo base para decisões tomadas na hora de falar, não planejadas antes. O negativo é won't (will not).",
          },
          mistakes: [
            { en: "I will to take it. → I'll take it.", pt: "Não use to depois de will." },
            { en: "I no will buy it. → I won't buy it.", pt: "O negativo de will é won't." },
          ],
        },
        {
          title: { en: "Will vs. going to", pt: "Will vs. going to" },
          examples: [
            { en: "I'm going to visit my sister next week. (planned)", pt: "Eu vou visitar minha irmã semana que vem. (planejado)" },
            { en: "I'll help you with that. (decided now)", pt: "Eu vou te ajudar com isso. (decidido agora)" },
            { en: "Don't worry, I'll call the hotel.", pt: "Não se preocupe, eu vou ligar para o hotel." },
          ],
          rule: {
            en: "Use going to for plans decided before speaking. Use will for decisions, offers and promises made at the moment.",
            pt: "Use going to para planos decididos antes de falar. Use will para decisões, ofertas e promessas feitas na hora.",
          },
          mistakes: [
            { en: "I'm going to help you now, wait one second! → I'll help you now, wait one second!", pt: "Decisão instantânea usa will, não going to." },
            { en: "I will visit my sister tomorrow, I bought the ticket last week. → I'm going to visit my sister tomorrow.", pt: "Plano já feito antes usa going to." },
          ],
        },
      ],
      controlledPractice: [
        {
          id: "b28d-cp1",
          prompt: { en: "Complete: Perfect! I ___ take it.", pt: "Complete: Perfect! I ___ take it." },
          options: ["going to", "'ll", "am"],
          answer: "'ll",
          explanation: { en: "Instant decision uses will.", pt: "Decisão instantânea usa will." },
        },
        {
          id: "b28d-cp2",
          prompt: { en: "Complete: I ___ buy the expensive one.", pt: "Complete: I ___ buy the expensive one." },
          options: ["won't", "not will", "no will"],
          answer: "won't",
          explanation: { en: "Negative of will is won't.", pt: "Negativo de will é won't." },
        },
        {
          id: "b28d-cp3",
          prompt: { en: "Choose the correct offer.", pt: "Escolha a oferta correta." },
          options: ["I'll help you.", "I help will you.", "I will to help you."],
          answer: "I'll help you.",
          explanation: { en: "will + base verb, no to.", pt: "will + verbo base, sem to." },
        },
        {
          id: "b28d-cp4",
          prompt: { en: "Which sentence is a planned action?", pt: "Qual frase é uma ação planejada?" },
          options: ["I'll take it right now.", "I'm going to travel next month.", "Don't worry, I'll do it."],
          answer: "I'm going to travel next month.",
          explanation: { en: "Plans made before use going to.", pt: "Planos feitos antes usam going to." },
        },
        {
          id: "b28d-cp5",
          prompt: { en: "Complete: I promise I ___ call you tonight.", pt: "Complete: I promise I ___ call you tonight." },
          options: ["'ll", "am going", "do"],
          answer: "'ll",
          explanation: { en: "Promises use will.", pt: "Promessas usam will." },
        },
      ],
      input: {
        kind: "reading",
        title: { en: "Reading — At the store", pt: "Reading — Na loja" },
        lines: [
          { en: "Ivan is choosing a gift for his mother.", pt: "Ivan está escolhendo um presente para a mãe dele." },
          { en: "He sees an expensive bag, but he won't buy it.", pt: "Ele vê uma bolsa cara, mas não vai comprá-la." },
          { en: "He finds a small, nice one and says: I'll take it!", pt: "Ele encontra uma pequena e bonita e diz: Eu vou levar essa!" },
          { en: "He promises Helena he'll wrap the gift tonight.", pt: "Ele promete à Helena que vai embrulhar o presente hoje à noite." },
        ],
        questions: [
          {
            id: "b28d-r1",
            prompt: { en: "What is Ivan doing?", pt: "O que Ivan está fazendo?" },
            options: ["choosing a gift", "booking a trip", "reading the news"],
            answer: "choosing a gift",
            explanation: { en: "Ivan is choosing a gift.", pt: "Ivan is choosing a gift." },
          },
          {
            id: "b28d-r2",
            prompt: { en: "Why won't he buy the first bag?", pt: "Por que ele não vai comprar a primeira bolsa?" },
            options: ["it's expensive", "it's ugly", "it's too small"],
            answer: "it's expensive",
            explanation: { en: "He sees an expensive bag, but won't buy it.", pt: "He sees an expensive bag, but won't buy it." },
          },
          {
            id: "b28d-r3",
            prompt: { en: "What does he promise Helena?", pt: "O que ele promete à Helena?" },
            options: ["he'll wrap the gift", "he'll pay her back", "he'll call his mother"],
            answer: "he'll wrap the gift",
            explanation: { en: "He promises Helena he'll wrap the gift tonight.", pt: "He promises Helena he'll wrap the gift tonight." },
          },
        ],
      },
      quickCheck: [
        {
          id: "b28d-qc1",
          prompt: { en: "Choose the correct decision.", pt: "Escolha a decisão correta." },
          options: ["I'll take it.", "I take will it.", "I will take."],
          answer: "I'll take it.",
          explanation: { en: "'ll + base verb.", pt: "'ll + verbo base." },
        },
        {
          id: "b28d-qc2",
          prompt: { en: "Complete: Don't worry, I ___ help you.", pt: "Complete: Don't worry, I ___ help you." },
          options: ["'ll", "going", "am"],
          answer: "'ll",
          explanation: { en: "Offers use will.", pt: "Ofertas usam will." },
        },
        {
          id: "b28d-qc3",
          prompt: { en: "Negative of 'I will buy it':", pt: "Negativo de 'I will buy it':" },
          options: ["I won't buy it.", "I willn't buy it.", "I don't will buy it."],
          answer: "I won't buy it.",
          explanation: { en: "will not = won't.", pt: "will not = won't." },
        },
        {
          id: "b28d-qc4",
          prompt: { en: "'Expensive' means:", pt: "'Expensive' significa:" },
          options: ["cheap", "costing a lot", "small"],
          answer: "costing a lot",
          explanation: { en: "expensive = costing a lot of money.", pt: "expensive = que custa muito dinheiro." },
        },
      ],
    },
    communicate: {
      id: "BEGINNER-U28-COMMUNICATE",
      review: [
        { en: "Will / won't for instant decisions, offers and promises.", pt: "Will / won't para decisões, ofertas e promessas instantâneas." },
        { en: "Going to for plans made before speaking.", pt: "Going to para planos feitos antes de falar." },
        { en: "'ll = will (short form).", pt: "'ll = will (forma curta)." },
      ],
      activities: [
        {
          id: "b28c-a1",
          title: { en: "React to four situations", pt: "Reaja a quatro situações" },
          instruction: {
            en: "React to four everyday problems with an offer using will (I'll...).",
            pt: "Reaja a quatro problemas do dia a dia com uma oferta usando will (I'll...).",
          },
          phrases: [
            { en: "Don't worry, I'll help you with the bags.", pt: "Não se preocupe, eu vou te ajudar com as malas." },
            { en: "I'll call the hotel right now.", pt: "Eu vou ligar para o hotel agora." },
          ],
          check: [
            {
              id: "b28c-a1q1",
              prompt: { en: "Complete: Don't worry, I ___ fix it.", pt: "Complete: Don't worry, I ___ fix it." },
              options: ["'ll", "going to", "am"],
              answer: "'ll",
              explanation: { en: "Offer at the moment uses will.", pt: "Oferta na hora usa will." },
            },
          ],
        },
        {
          id: "b28c-a2",
          title: { en: "Decide in a shop", pt: "Decida em uma loja" },
          instruction: {
            en: "Choose between two products and say your decision with I'll take it or I won't buy it.",
            pt: "Escolha entre dois produtos e diga sua decisão com I'll take it ou I won't buy it.",
          },
          phrases: [
            { en: "I won't buy the expensive one.", pt: "Eu não vou comprar o caro." },
            { en: "I'll take the small one, please.", pt: "Eu vou levar o pequeno, por favor." },
          ],
          check: [
            {
              id: "b28c-a2q1",
              prompt: { en: "Choose the correct sentence.", pt: "Escolha a frase correta." },
              options: ["I'll take it.", "I taking it will.", "I will to take it."],
              answer: "I'll take it.",
              explanation: { en: "'ll + base verb.", pt: "'ll + verbo base." },
            },
          ],
        },
        {
          id: "b28c-a3",
          title: { en: "A small promise", pt: "Uma pequena promessa" },
          instruction: {
            en: "Make two promises to a friend or coworker using I promise I'll...",
            pt: "Faça duas promessas a um amigo ou colega usando I promise I'll...",
          },
          phrases: [
            { en: "I promise I'll call you tonight.", pt: "Eu prometo que vou te ligar hoje à noite." },
            { en: "I promise I'll help with the plan.", pt: "Eu prometo que vou ajudar com o plano." },
          ],
          check: [
            {
              id: "b28c-a3q1",
              prompt: { en: "Complete: I promise I ___ help you.", pt: "Complete: I promise I ___ help you." },
              options: ["'ll", "am", "going"],
              answer: "'ll",
              explanation: { en: "Promises use will.", pt: "Promessas usam will." },
            },
          ],
        },
      ],
      challenge: {
        id: "b28c-challenge",
        title: { en: "Communication Challenge — An unexpected problem", pt: "Desafio de comunicação — Um imprevisto" },
        instruction: {
          en: "Imagine an unexpected problem (a delayed bus, a lost ticket). React with will: offer help, make a promise and decide something on the spot.",
          pt: "Imagine um imprevisto (um ônibus atrasado, uma passagem perdida). Reaja com will: ofereça ajuda, faça uma promessa e decida algo na hora.",
        },
        phrases: [
          { en: "Don't worry, I'll find another bus.", pt: "Não se preocupe, eu vou achar outro ônibus." },
          { en: "I promise I'll be there on time.", pt: "Eu prometo que vou chegar na hora." },
          { en: "I'll call the hotel to explain.", pt: "Eu vou ligar para o hotel para explicar." },
        ],
        check: [
          {
            id: "b28c-ch1",
            prompt: { en: "Which sentence has NO mistake?", pt: "Qual frase NÃO tem erro?" },
            options: ["I will to help.", "I'll help you.", "I help will."],
            answer: "I'll help you.",
            explanation: { en: "'ll + base verb, no to.", pt: "'ll + verbo base, sem to." },
          },
          {
            id: "b28c-ch2",
            prompt: { en: "Choose the sentence for a plan decided before.", pt: "Escolha a frase para um plano decidido antes." },
            options: ["I'm going to travel next month.", "I'll travel right now.", "Don't worry, I'll travel."],
            answer: "I'm going to travel next month.",
            explanation: { en: "Plans decided before use going to.", pt: "Planos decididos antes usam going to." },
          },
        ],
      },
      lessonReview: {
        summary: {
          en: "You made instant decisions, offered help and made promises using will and won't.",
          pt: "Você tomou decisões instantâneas, ofereceu ajuda e fez promessas usando will e won't.",
        },
        canDo: [
          { en: "I can make a decision at the moment with will.", pt: "Consigo tomar uma decisão na hora com will." },
          { en: "I can offer help using I'll...", pt: "Consigo oferecer ajuda usando I'll..." },
          { en: "I can tell the difference between will and going to.", pt: "Consigo diferenciar will de going to." },
        ],
        next: {
          en: "Next: connect your ideas with and, but, because and so.",
          pt: "Próximo: conectar suas ideias com and, but, because e so.",
        },
      },
    },
  },
  {
    code: "BEGINNER-U29",
    number: 29,
    title: "Connecting My English",
    titlePt: "Conectando meu inglês",
    cefr: "A1",
    objective: {
      en: "Use and, but, because and so to connect ideas into longer, clearer sentences.",
      pt: "Usar and, but, because e so para conectar ideias em frases mais longas e claras.",
    },
    communicationGoal: {
      en: "You can present a short idea using all four connectors.",
      pt: "Você consegue apresentar uma ideia curta usando os quatro conectores.",
    },
    prerequisites: {
      en: "Unit 28 — will for decisions and promises.",
      pt: "Unidade 28 — will para decisões e promessas.",
    },
    newContent: {
      en: "Grammar: connectors and, but, because, so. Vocabulary: linking ideas. Expressions: Because..., Anyway...",
      pt: "Gramática: conectores and, but, because, so. Vocabulário: encadear ideias. Expressões: Because..., Anyway...",
    },
    reviewContent: {
      en: "Review from Unit 28: will / won't for decisions and promises.",
      pt: "Revisão da Unidade 28: will / won't para decisões e promessas.",
    },
    discover: {
      id: "BEGINNER-U29-DISCOVER",
      warmUp: {
        prompt: {
          en: "Look at the picture. A person is presenting ideas to a small group. How do they connect their sentences?",
          pt: "Observe a imagem. Uma pessoa está apresentando ideias para um pequeno grupo. Como ela conecta as frases?",
        },
        phrases: [
          { en: "I like this job, and I like my team.", pt: "Eu gosto deste trabalho, e gosto da minha equipe." },
          { en: "It's difficult, but it's interesting.", pt: "É difícil, mas é interessante." },
          { en: "I'm tired because I worked all day.", pt: "Estou cansado porque trabalhei o dia todo." },
        ],
      },
      context: {
        situation: {
          en: "Bruno presents his weekly plan to Ivan and connects his ideas clearly.",
          pt: "Bruno apresenta seu plano semanal ao Ivan e conecta as ideias com clareza.",
        },
        dialogue: [
          { who: "Ivan", en: "How is your week going, Bruno?", pt: "Como está sua semana, Bruno?" },
          { who: "Bruno", en: "It's busy, but it's good. I have meetings and I write reports.", pt: "Está corrida, mas está boa. Eu tenho reuniões e escrevo relatórios." },
          { who: "Ivan", en: "Are you going to finish the report today?", pt: "Você vai terminar o relatório hoje?" },
          { who: "Bruno", en: "I'm tired, so I'll finish it tomorrow.", pt: "Estou cansado, então vou terminar amanhã." },
          { who: "Ivan", en: "That's fine. Why is it taking longer?", pt: "Tudo bem. Por que está levando mais tempo?" },
          { who: "Bruno", en: "Because I have a lot of new information to organize.", pt: "Porque tenho muita informação nova para organizar." },
          { who: "Ivan", en: "Anyway, I'll help you tomorrow morning.", pt: "De qualquer forma, eu vou te ajudar amanhã de manhã." },
          { who: "Bruno", en: "Thanks! I'm going to sleep early, so I'll be ready.", pt: "Obrigado! Eu vou dormir cedo, então vou estar pronto." },
        ],
      },
      vocabulary: [
        { term: "connect", pt: "conectar", ipa: "/kəˈnekt/", definition: "To join two ideas together.", example: "I connect my ideas with and.", examplePt: "Eu conecto minhas ideias com and." },
        { term: "idea", pt: "ideia", ipa: "/aɪˈdiːə/", definition: "A thought or plan.", example: "That's a good idea.", examplePt: "Essa é uma boa ideia." },
        { term: "busy", pt: "ocupado", ipa: "/ˈbɪzi/", definition: "Having a lot to do.", example: "My week is busy.", examplePt: "Minha semana está corrida." },
        { term: "report", pt: "relatório", ipa: "/rɪˈpɔːrt/", definition: "A written document about facts.", example: "I write a report every week.", examplePt: "Eu escrevo um relatório toda semana." },
        { term: "organize", pt: "organizar", ipa: "/ˈɔːrɡənaɪz/", definition: "To put things in order.", example: "I organize my information.", examplePt: "Eu organizo minhas informações." },
        { term: "tired", pt: "cansado", ipa: "/ˈtaɪərd/", definition: "Needing rest.", example: "I'm tired today.", examplePt: "Estou cansado hoje." },
        { term: "difficult", pt: "difícil", ipa: "/ˈdɪfɪkəlt/", definition: "Not easy.", example: "The report is difficult.", examplePt: "O relatório é difícil." },
        { term: "interesting", pt: "interessante", ipa: "/ˈɪntrəstɪŋ/", definition: "Making you want to know more.", example: "This job is interesting.", examplePt: "Esse trabalho é interessante." },
        { term: "anyway", pt: "de qualquer forma", ipa: "/ˈeniweɪ/", definition: "Used to change or continue a subject.", example: "Anyway, I'll help you tomorrow.", examplePt: "De qualquer forma, vou te ajudar amanhã." },
        { term: "ready", pt: "pronto", ipa: "/ˈredi/", definition: "Prepared for something.", example: "I'll be ready at nine.", examplePt: "Eu vou estar pronto às nove." },
      ],
      expressions: [
        { en: "Because...", pt: "Porque..." },
        { en: "Anyway...", pt: "De qualquer forma..." },
        { en: "It's busy, but it's good.", pt: "Está corrido, mas está bom." },
        { en: "I'm tired, so I'll...", pt: "Estou cansado, então eu vou..." },
        { en: "I like this and I like that.", pt: "Eu gosto disso e gosto daquilo." },
      ],
      grammar: [
        {
          title: { en: "And, but, because, so", pt: "And, but, because, so" },
          examples: [
            { en: "I have meetings and I write reports.", pt: "Eu tenho reuniões e escrevo relatórios." },
            { en: "It's difficult, but it's interesting.", pt: "É difícil, mas é interessante." },
            { en: "I'm tired because I worked all day.", pt: "Estou cansado porque trabalhei o dia todo." },
            { en: "I'm tired, so I'll finish tomorrow.", pt: "Estou cansado, então vou terminar amanhã." },
          ],
          rule: {
            en: "Use and to add information, but to show contrast, because to give a reason, and so to show a result. They join two ideas into one sentence.",
            pt: "Use and para adicionar informação, but para mostrar contraste, because para dar um motivo e so para mostrar um resultado. Eles unem duas ideias em uma só frase.",
          },
          mistakes: [
            { en: "I'm tired because I'll sleep. → I'm tired, so I'll sleep.", pt: "Because dá o motivo; so dá o resultado. Não troque os dois." },
            { en: "It's difficult so it's interesting. → It's difficult, but it's interesting.", pt: "Use but para contraste, não so." },
          ],
        },
        {
          title: { en: "Anyway to change or continue the topic", pt: "Anyway para mudar ou continuar o assunto" },
          examples: [
            { en: "Anyway, I'll help you tomorrow morning.", pt: "De qualquer forma, eu vou te ajudar amanhã de manhã." },
            { en: "Anyway, let's plan the next trip.", pt: "De qualquer forma, vamos planejar a próxima viagem." },
          ],
          rule: {
            en: "Use anyway at the start of a sentence to move the conversation forward, after a small problem or a change of subject.",
            pt: "Use anyway no início da frase para seguir com a conversa, depois de um pequeno problema ou uma mudança de assunto.",
          },
          mistakes: [
            { en: "Anyway I helping you tomorrow. → Anyway, I'll help you tomorrow.", pt: "Depois de anyway, use uma frase completa e correta." },
          ],
        },
      ],
      controlledPractice: [
        {
          id: "b29d-cp1",
          prompt: { en: "Complete: I like my job, ___ I like my team.", pt: "Complete: I like my job, ___ I like my team." },
          options: ["and", "but", "because"],
          answer: "and",
          explanation: { en: "and adds information.", pt: "and adiciona informação." },
        },
        {
          id: "b29d-cp2",
          prompt: { en: "Complete: It's difficult, ___ it's interesting.", pt: "Complete: It's difficult, ___ it's interesting." },
          options: ["so", "but", "and"],
          answer: "but",
          explanation: { en: "but shows contrast.", pt: "but mostra contraste." },
        },
        {
          id: "b29d-cp3",
          prompt: { en: "Complete: I'm tired ___ I worked all day.", pt: "Complete: I'm tired ___ I worked all day." },
          options: ["because", "so", "but"],
          answer: "because",
          explanation: { en: "because gives the reason.", pt: "because dá o motivo." },
        },
        {
          id: "b29d-cp4",
          prompt: { en: "Complete: I'm tired, ___ I'll sleep early.", pt: "Complete: I'm tired, ___ I'll sleep early." },
          options: ["so", "because", "but"],
          answer: "so",
          explanation: { en: "so shows the result.", pt: "so mostra o resultado." },
        },
        {
          id: "b29d-cp5",
          prompt: { en: "Which word changes the subject smoothly?", pt: "Qual palavra muda o assunto naturalmente?" },
          options: ["Anyway", "So", "And"],
          answer: "Anyway",
          explanation: { en: "Anyway moves the conversation forward.", pt: "Anyway segue com a conversa." },
        },
        {
          id: "b29d-cp6",
          prompt: { en: "Complete: We're busy, ___ we're happy.", pt: "Complete: We're busy, ___ we're happy." },
          options: ["but", "because", "so"],
          answer: "but",
          explanation: { en: "but shows contrast.", pt: "but mostra contraste." },
        },
      ],
      input: {
        kind: "listening",
        title: { en: "Listening — A busy but good week", pt: "Listening — Uma semana corrida, mas boa" },
        lines: [
          { en: "My week is busy, but I like my job.", pt: "Minha semana está corrida, mas eu gosto do meu trabalho." },
          { en: "I have a lot of meetings because we have a new project.", pt: "Eu tenho muitas reuniões porque temos um projeto novo." },
          { en: "I'm tired, so I'm going to sleep early tonight.", pt: "Estou cansado, então vou dormir cedo hoje à noite." },
          { en: "Anyway, I'll finish the report tomorrow morning.", pt: "De qualquer forma, vou terminar o relatório amanhã de manhã." },
        ],
        questions: [
          {
            id: "b29d-r1",
            prompt: { en: "Is the week busy?", pt: "A semana está corrida?" },
            options: ["Yes", "No", "Not mentioned"],
            answer: "Yes",
            explanation: { en: "My week is busy.", pt: "My week is busy." },
          },
          {
            id: "b29d-r2",
            prompt: { en: "Why does the speaker have a lot of meetings?", pt: "Por que o falante tem muitas reuniões?" },
            options: ["a new project", "a trip", "a promise"],
            answer: "a new project",
            explanation: { en: "because we have a new project.", pt: "because we have a new project." },
          },
          {
            id: "b29d-r3",
            prompt: { en: "What is the result of being tired?", pt: "Qual é o resultado de estar cansado?" },
            options: ["sleeping early", "traveling", "working more"],
            answer: "sleeping early",
            explanation: { en: "so I'm going to sleep early tonight.", pt: "so I'm going to sleep early tonight." },
          },
        ],
      },
      quickCheck: [
        {
          id: "b29d-qc1",
          prompt: { en: "Which connector shows a reason?", pt: "Qual conector mostra um motivo?" },
          options: ["because", "and", "but"],
          answer: "because",
          explanation: { en: "because = reason.", pt: "because = motivo." },
        },
        {
          id: "b29d-qc2",
          prompt: { en: "Which connector shows a result?", pt: "Qual conector mostra um resultado?" },
          options: ["so", "but", "and"],
          answer: "so",
          explanation: { en: "so = result.", pt: "so = resultado." },
        },
        {
          id: "b29d-qc3",
          prompt: { en: "Complete: I like coffee, ___ I don't like tea.", pt: "Complete: I like coffee, ___ I don't like tea." },
          options: ["but", "so", "because"],
          answer: "but",
          explanation: { en: "but shows contrast.", pt: "but mostra contraste." },
        },
        {
          id: "b29d-qc4",
          prompt: { en: "Which word means 'ready'?", pt: "Qual palavra significa 'pronto'?" },
          options: ["ready", "tired", "busy"],
          answer: "ready",
          explanation: { en: "ready = prepared.", pt: "ready = preparado." },
        },
      ],
    },
    communicate: {
      id: "BEGINNER-U29-COMMUNICATE",
      review: [
        { en: "and (adds), but (contrasts), because (reason), so (result).", pt: "and (adiciona), but (contrasta), because (motivo), so (resultado)." },
        { en: "Anyway moves the conversation forward.", pt: "Anyway segue com a conversa." },
        { en: "Connectors join two short ideas into one longer sentence.", pt: "Conectores unem duas ideias curtas em uma frase mais longa." },
      ],
      activities: [
        {
          id: "b29c-a1",
          title: { en: "Four connectors", pt: "Quatro conectores" },
          instruction: {
            en: "Make one sentence with each connector: and, but, because, so.",
            pt: "Monte uma frase com cada conector: and, but, because, so.",
          },
          phrases: [
            { en: "I work and I study every day.", pt: "Eu trabalho e estudo todos os dias." },
            { en: "I'm tired because I worked a lot.", pt: "Estou cansado porque trabalhei muito." },
          ],
          check: [
            {
              id: "b29c-a1q1",
              prompt: { en: "Complete: It's late, ___ I'll go home.", pt: "Complete: It's late, ___ I'll go home." },
              options: ["so", "because", "but"],
              answer: "so",
              explanation: { en: "so shows result.", pt: "so mostra resultado." },
            },
          ],
        },
        {
          id: "b29c-a2",
          title: { en: "A short conversation", pt: "Uma conversa curta" },
          instruction: {
            en: "Have a short conversation about your week without stopping, using anyway to keep it going.",
            pt: "Tenha uma conversa curta sobre sua semana sem travar, usando anyway para seguir em frente.",
          },
          phrases: [
            { en: "My week is busy, but it's good.", pt: "Minha semana está corrida, mas está boa." },
            { en: "Anyway, let's talk about the weekend.", pt: "De qualquer forma, vamos falar do fim de semana." },
          ],
          check: [
            {
              id: "b29c-a2q1",
              prompt: { en: "Choose the natural way to continue a conversation.", pt: "Escolha a forma natural de seguir uma conversa." },
              options: ["Anyway, let's talk about the weekend.", "So anyway but let's talk.", "Because anyway weekend."],
              answer: "Anyway, let's talk about the weekend.",
              explanation: { en: "Anyway moves the topic forward naturally.", pt: "Anyway muda o assunto naturalmente." },
            },
          ],
        },
        {
          id: "b29c-a3",
          title: { en: "Explain a decision", pt: "Explique uma decisão" },
          instruction: {
            en: "Explain a recent decision with because, and say a result with so.",
            pt: "Explique uma decisão recente com because, e diga um resultado com so.",
          },
          phrases: [
            { en: "I won't travel because I have a lot of work.", pt: "Eu não vou viajar porque tenho muito trabalho." },
            { en: "I'm busy, so I'll travel next month.", pt: "Estou ocupado, então vou viajar mês que vem." },
          ],
          check: [
            {
              id: "b29c-a3q1",
              prompt: { en: "Complete: I'm busy ___ I have a new project.", pt: "Complete: I'm busy ___ I have a new project." },
              options: ["because", "so", "but"],
              answer: "because",
              explanation: { en: "because gives the reason.", pt: "because dá o motivo." },
            },
          ],
        },
      ],
      challenge: {
        id: "b29c-challenge",
        title: { en: "Communication Challenge — Three minutes, connected", pt: "Desafio de comunicação — Três minutos, conectados" },
        instruction: {
          en: "Talk for three minutes about your week without stopping. Use and, but, because, so and anyway to keep your ideas connected.",
          pt: "Fale por três minutos sobre sua semana sem parar. Use and, but, because, so e anyway para manter as ideias conectadas.",
        },
        phrases: [
          { en: "My week is busy, but I like it.", pt: "Minha semana está corrida, mas eu gosto." },
          { en: "I have meetings because we have a new project.", pt: "Eu tenho reuniões porque temos um projeto novo." },
          { en: "I'm tired, so I'll sleep early tonight.", pt: "Estou cansado, então vou dormir cedo hoje à noite." },
          { en: "Anyway, next week I'm going to travel.", pt: "De qualquer forma, semana que vem eu vou viajar." },
        ],
        check: [
          {
            id: "b29c-ch1",
            prompt: { en: "Which sentence uses 'but' correctly?", pt: "Qual frase usa 'but' corretamente?" },
            options: ["It's difficult, but it's interesting.", "It's difficult, but I finish it.", "It's difficult and but interesting."],
            answer: "It's difficult, but it's interesting.",
            explanation: { en: "but connects a contrast.", pt: "but conecta um contraste." },
          },
          {
            id: "b29c-ch2",
            prompt: { en: "Which sentence connects a reason and a result correctly?", pt: "Qual frase conecta motivo e resultado corretamente?" },
            options: ["I'm tired because I'll sleep early.", "I'm tired, so I'll sleep early.", "I'm tired, but I'll sleep early because."],
            answer: "I'm tired, so I'll sleep early.",
            explanation: { en: "tired (reason) → so → sleep early (result).", pt: "cansado (motivo) → so → dormir cedo (resultado)." },
          },
        ],
      },
      lessonReview: {
        summary: {
          en: "You connected your ideas about a busy week using and, but, because, so and anyway, without stopping.",
          pt: "Você conectou suas ideias sobre uma semana corrida usando and, but, because, so e anyway, sem travar.",
        },
        canDo: [
          { en: "I can add, contrast, explain and show results with connectors.", pt: "Consigo adicionar, contrastar, explicar e mostrar resultados com conectores." },
          { en: "I can keep a conversation going with anyway.", pt: "Consigo manter uma conversa em andamento com anyway." },
          { en: "I can speak for three minutes without stopping.", pt: "Consigo falar por três minutos sem parar." },
        ],
        next: {
          en: "Next: review everything from the Beginner course, from Unit 1 to Unit 29.",
          pt: "Próximo: revisar tudo do curso Beginner, da Unidade 1 até a 29.",
        },
      },
    },
  },
  {
    code: "BEGINNER-U30",
    number: 30,
    title: "A1 Final Review and Challenge",
    titlePt: "Revisão final e desafio A1",
    cefr: "A1",
    objective: {
      en: "Review the main structures of the Beginner course and demonstrate solid A1 command of English.",
      pt: "Revisar as principais estruturas do curso Beginner e demonstrar domínio sólido do inglês em nível A1.",
    },
    communicationGoal: {
      en: "You can complete a full guided task in English, combining everything you learned.",
      pt: "Você consegue completar uma tarefa completa em inglês, combinando tudo o que aprendeu.",
    },
    prerequisites: {
      en: "Unit 29 — connectors and, but, because, so.",
      pt: "Unidade 29 — conectores and, but, because, so.",
    },
    newContent: {
      en: "Integrated review: to be, present simple, present continuous, past simple, going to, will, and connectors.",
      pt: "Revisão integrada: to be, present simple, present continuous, past simple, going to, will e conectores.",
    },
    reviewContent: {
      en: "Everything from Units 1–29 of the Beginner course.",
      pt: "Tudo das Unidades 1–29 do curso Beginner.",
    },
    discover: {
      id: "BEGINNER-U30-DISCOVER",
      warmUp: {
        prompt: {
          en: "Look at the picture. It shows a timeline from Unit 1 to Unit 30. What have you learned along the way?",
          pt: "Observe a imagem. Ela mostra uma linha do tempo da Unidade 1 até a 30. O que você aprendeu no caminho?",
        },
        phrases: [
          { en: "I learned to talk about myself and my day.", pt: "Eu aprendi a falar sobre mim e o meu dia." },
          { en: "I can talk about the past and the future now.", pt: "Eu consigo falar do passado e do futuro agora." },
          { en: "I can connect my ideas in English.", pt: "Eu consigo conectar minhas ideias em inglês." },
        ],
      },
      context: {
        situation: {
          en: "Bruno, Helena and Ivan look back at their journey through the Beginner course.",
          pt: "Bruno, Helena e Ivan olham para trás e revisam a jornada pelo curso Beginner.",
        },
        dialogue: [
          { who: "Ivan", en: "Do you remember Unit 1? We only said 'I am' and 'you are'!", pt: "Vocês lembram da Unidade 1? A gente só dizia 'I am' e 'you are'!" },
          { who: "Helena", en: "Yes! Now I can describe my routine, my job and my family.", pt: "Sim! Agora eu consigo descrever minha rotina, meu trabalho e minha família." },
          { who: "Bruno", en: "And I can talk about last weekend and my plans for next month.", pt: "E eu consigo falar sobre o fim de semana passado e meus planos para o mês que vem." },
          { who: "Ivan", en: "I'm going to use will and going to every day now.", pt: "Eu vou usar will e going to todo dia agora." },
          { who: "Helena", en: "We finished the course, so we're going to celebrate!", pt: "Nós terminamos o curso, então vamos comemorar!" },
          { who: "Bruno", en: "Because we worked hard, and we did it together.", pt: "Porque trabalhamos duro, e fizemos isso juntos." },
        ],
      },
      vocabulary: [
        { term: "review", pt: "revisão", ipa: "/rɪˈvjuː/", definition: "To look at something again to remember it.", example: "This is a review of the course.", examplePt: "Esta é uma revisão do curso." },
        { term: "journey", pt: "jornada", ipa: "/ˈdʒɜːrni/", definition: "A long process of learning or traveling.", example: "Our English journey started in Unit 1.", examplePt: "Nossa jornada em inglês começou na Unidade 1." },
        { term: "achieve", pt: "alcançar, conquistar", ipa: "/əˈtʃiːv/", definition: "To succeed in doing something.", example: "We achieved a lot this year.", examplePt: "Nós conquistamos muito este ano." },
        { term: "confident", pt: "confiante", ipa: "/ˈkɒnfɪdənt/", definition: "Sure of your own ability.", example: "I feel confident in English now.", examplePt: "Eu me sinto confiante em inglês agora." },
        { term: "level", pt: "nível", ipa: "/ˈlevl/", definition: "A stage of knowledge or skill.", example: "We finished the A1 level.", examplePt: "Nós terminamos o nível A1." },
        { term: "task", pt: "tarefa", ipa: "/tæsk/", definition: "A piece of work to complete.", example: "Let's do this task together.", examplePt: "Vamos fazer esta tarefa juntos." },
        { term: "complete", pt: "completar", ipa: "/kəmˈpliːt/", definition: "To finish something fully.", example: "I completed the course.", examplePt: "Eu completei o curso." },
        { term: "celebrate", pt: "comemorar", ipa: "/ˈselɪbreɪt/", definition: "To do something special for an achievement.", example: "We're going to celebrate tonight.", examplePt: "Nós vamos comemorar hoje à noite." },
        { term: "improve", pt: "melhorar", ipa: "/ɪmˈpruːv/", definition: "To become better at something.", example: "My English improved a lot.", examplePt: "Meu inglês melhorou muito." },
        { term: "next step", pt: "próximo passo", ipa: "/nekst step/", definition: "The following stage after this one.", example: "The next step is Intermediate.", examplePt: "O próximo passo é o Intermediate." },
      ],
      expressions: [
        { en: "I can... now.", pt: "Eu consigo... agora." },
        { en: "We did it together.", pt: "Nós fizemos isso juntos." },
        { en: "I feel confident.", pt: "Eu me sinto confiante." },
        { en: "We're going to celebrate!", pt: "Nós vamos comemorar!" },
      ],
      grammar: [
        {
          title: { en: "Integrated review — verb tenses", pt: "Revisão integrada — tempos verbais" },
          examples: [
            { en: "I am a student. I work every day. I'm working right now.", pt: "Eu sou um estudante. Eu trabalho todo dia. Eu estou trabalhando agora." },
            { en: "Last month I traveled to the coast.", pt: "Mês passado eu viajei para o litoral." },
            { en: "Next week I'm going to visit my family, and I'll call them tonight.", pt: "Semana que vem eu vou visitar minha família, e vou ligar para eles hoje à noite." },
          ],
          rule: {
            en: "Use to be for identity, present simple for routines, present continuous for now, past simple for finished actions, going to for planned future and will for instant decisions and promises.",
            pt: "Use to be para identidade, present simple para rotinas, present continuous para o momento presente, past simple para ações terminadas, going to para o futuro planejado e will para decisões e promessas instantâneas.",
          },
          mistakes: [
            { en: "I am work every day. → I work every day.", pt: "Não use to be junto com o verbo no present simple." },
            { en: "I travel last month. → I traveled last month.", pt: "Ações passadas terminadas usam past simple." },
          ],
        },
        {
          title: { en: "Connecting a full answer", pt: "Conectando uma resposta completa" },
          examples: [
            { en: "I finished the course, so I'm proud.", pt: "Eu terminei o curso, então estou orgulhoso." },
            { en: "It was difficult, but it was worth it.", pt: "Foi difícil, mas valeu a pena." },
            { en: "I improved a lot because I practiced every day.", pt: "Eu melhorei muito porque pratiquei todo dia." },
          ],
          rule: {
            en: "Combine tenses and connectors (and, but, because, so) to give complete, natural answers instead of short, separate sentences.",
            pt: "Combine tempos verbais e conectores (and, but, because, so) para dar respostas completas e naturais, em vez de frases curtas e separadas.",
          },
          mistakes: [
            { en: "I finish course. I proud. → I finished the course, so I'm proud.", pt: "Combine as ideias em uma frase completa com o tempo verbal certo." },
          ],
        },
      ],
      controlledPractice: [
        {
          id: "b30d-cp1",
          prompt: { en: "Complete: I ___ a student. I ___ English every day.", pt: "Complete: I ___ a student. I ___ English every day." },
          options: ["am / study", "is / studies", "are / study"],
          answer: "am / study",
          explanation: { en: "to be (am) + present simple (study).", pt: "to be (am) + present simple (study)." },
        },
        {
          id: "b30d-cp2",
          prompt: { en: "Complete: Last year I ___ to the coast.", pt: "Complete: Last year I ___ to the coast." },
          options: ["travel", "traveled", "am traveling"],
          answer: "traveled",
          explanation: { en: "Finished past action uses past simple.", pt: "Ação passada terminada usa past simple." },
        },
        {
          id: "b30d-cp3",
          prompt: { en: "Complete: Next month I ___ visit my family.", pt: "Complete: Next month I ___ visit my family." },
          options: ["am going to", "will to", "am"],
          answer: "am going to",
          explanation: { en: "Planned future uses going to.", pt: "Futuro planejado usa going to." },
        },
        {
          id: "b30d-cp4",
          prompt: { en: "Complete: Don't worry, I ___ call you tonight.", pt: "Complete: Don't worry, I ___ call you tonight." },
          options: ["'ll", "going to", "am"],
          answer: "'ll",
          explanation: { en: "Instant promise uses will.", pt: "Promessa instantânea usa will." },
        },
        {
          id: "b30d-cp5",
          prompt: { en: "Complete: It was difficult, ___ it was worth it.", pt: "Complete: It was difficult, ___ it was worth it." },
          options: ["but", "because", "and"],
          answer: "but",
          explanation: { en: "but shows contrast.", pt: "but mostra contraste." },
        },
        {
          id: "b30d-cp6",
          prompt: { en: "Complete: I improved a lot ___ I practiced every day.", pt: "Complete: I improved a lot ___ I practiced every day." },
          options: ["because", "so", "but"],
          answer: "because",
          explanation: { en: "because gives the reason.", pt: "because dá o motivo." },
        },
        {
          id: "b30d-cp7",
          prompt: { en: "Complete: Right now, I ___ reviewing the whole course.", pt: "Complete: Right now, I ___ reviewing the whole course." },
          options: ["am", "do", "was"],
          answer: "am",
          explanation: { en: "Now uses present continuous: am/is/are + verb-ing.", pt: "Agora usa present continuous: am/is/are + verb-ing." },
        },
        {
          id: "b30d-cp8",
          prompt: { en: "Complete: We finished the course, ___ we're going to celebrate.", pt: "Complete: We finished the course, ___ we're going to celebrate." },
          options: ["so", "but", "because"],
          answer: "so",
          explanation: { en: "so shows the result.", pt: "so mostra o resultado." },
        },
      ],
      input: {
        kind: "listening",
        title: { en: "Listening — Our English journey", pt: "Listening — Nossa jornada em inglês" },
        lines: [
          { en: "In Unit 1, I only said my name and where I'm from.", pt: "Na Unidade 1, eu só dizia meu nome e de onde eu sou." },
          { en: "Now I can talk about my routine, my past and my plans.", pt: "Agora eu consigo falar da minha rotina, do meu passado e dos meus planos." },
          { en: "It was difficult sometimes, but I practiced every day.", pt: "Às vezes foi difícil, mas eu pratiquei todo dia." },
          { en: "I finished the A1 level, so I feel confident and ready for the next step.", pt: "Eu terminei o nível A1, então me sinto confiante e pronto para o próximo passo." },
        ],
        questions: [
          {
            id: "b30d-r1",
            prompt: { en: "What could the speaker say in Unit 1?", pt: "O que o falante conseguia dizer na Unidade 1?" },
            options: ["name and where from", "past and future plans", "long connected ideas"],
            answer: "name and where from",
            explanation: { en: "I only said my name and where I'm from.", pt: "I only said my name and where I'm from." },
          },
          {
            id: "b30d-r2",
            prompt: { en: "What can the speaker do now?", pt: "O que o falante consegue fazer agora?" },
            options: ["talk about routine, past and plans", "only say hello", "only count numbers"],
            answer: "talk about routine, past and plans",
            explanation: { en: "Now I can talk about my routine, my past and my plans.", pt: "Now I can talk about my routine, my past and my plans." },
          },
          {
            id: "b30d-r3",
            prompt: { en: "How does the speaker feel at the end?", pt: "Como o falante se sente no final?" },
            options: ["confident and ready", "confused", "bored"],
            answer: "confident and ready",
            explanation: { en: "I feel confident and ready for the next step.", pt: "I feel confident and ready for the next step." },
          },
        ],
      },
      quickCheck: [
        {
          id: "b30d-qc1",
          prompt: { en: "Choose the sentence with the correct tense for now.", pt: "Escolha a frase com o tempo verbal correto para agora." },
          options: ["I review the course right now.", "I am reviewing the course right now.", "I reviewed the course right now."],
          answer: "I am reviewing the course right now.",
          explanation: { en: "Now = present continuous.", pt: "Agora = present continuous." },
        },
        {
          id: "b30d-qc2",
          prompt: { en: "Choose the sentence for a finished past action.", pt: "Escolha a frase para uma ação passada terminada." },
          options: ["I study English last year.", "I studied English last year.", "I'm studying English last year."],
          answer: "I studied English last year.",
          explanation: { en: "Finished past action = past simple.", pt: "Ação passada terminada = past simple." },
        },
        {
          id: "b30d-qc3",
          prompt: { en: "Choose the sentence for a plan.", pt: "Escolha a frase para um plano." },
          options: ["I'll travel every year.", "I'm going to travel next month.", "I travel next month."],
          answer: "I'm going to travel next month.",
          explanation: { en: "Planned future = going to.", pt: "Futuro planejado = going to." },
        },
        {
          id: "b30d-qc4",
          prompt: { en: "Choose the connector for a result.", pt: "Escolha o conector para um resultado." },
          options: ["so", "but", "because"],
          answer: "so",
          explanation: { en: "so shows a result.", pt: "so mostra um resultado." },
        },
        {
          id: "b30d-qc5",
          prompt: { en: "'Confident' means:", pt: "'Confident' significa:" },
          options: ["nervous", "sure of yourself", "tired"],
          answer: "sure of yourself",
          explanation: { en: "confident = sure of your own ability.", pt: "confident = seguro da sua própria capacidade." },
        },
      ],
    },
    communicate: {
      id: "BEGINNER-U30-COMMUNICATE",
      review: [
        { en: "to be, present simple, present continuous and past simple for facts, routines, now and finished actions.", pt: "to be, present simple, present continuous e past simple para fatos, rotinas, agora e ações terminadas." },
        { en: "going to for plans, will for instant decisions and promises.", pt: "going to para planos, will para decisões e promessas instantâneas." },
        { en: "and, but, because, so to connect ideas into full answers.", pt: "and, but, because, so para conectar ideias em respostas completas." },
      ],
      activities: [
        {
          id: "b30c-a1",
          title: { en: "My English journey", pt: "Minha jornada em inglês" },
          instruction: {
            en: "Tell your English journey in five sentences: who you are, your routine, something from the past, a plan and a promise.",
            pt: "Conte sua jornada em inglês em cinco frases: quem você é, sua rotina, algo do passado, um plano e uma promessa.",
          },
          phrases: [
            { en: "I'm a student, and I study English every day.", pt: "Eu sou estudante, e estudo inglês todo dia." },
            { en: "Last year I couldn't speak English, but now I can.", pt: "Ano passado eu não conseguia falar inglês, mas agora consigo." },
          ],
          check: [
            {
              id: "b30c-a1q1",
              prompt: { en: "Complete: Last year I ___ speak English well.", pt: "Complete: Last year I ___ speak English well." },
              options: ["couldn't", "can't", "don't"],
              answer: "couldn't",
              explanation: { en: "Past ability uses couldn't / could.", pt: "Habilidade no passado usa couldn't / could." },
            },
          ],
        },
        {
          id: "b30c-a2",
          title: { en: "Fast review round", pt: "Rodada rápida de revisão" },
          instruction: {
            en: "Answer four fast questions about yourself, using a different tense in each answer.",
            pt: "Responda quatro perguntas rápidas sobre você, usando um tempo verbal diferente em cada resposta.",
          },
          phrases: [
            { en: "I'm working on my English every day.", pt: "Eu estou trabalhando no meu inglês todo dia." },
            { en: "I'm going to keep practicing after this course.", pt: "Eu vou continuar praticando depois deste curso." },
          ],
          check: [
            {
              id: "b30c-a2q1",
              prompt: { en: "Choose the sentence with going to.", pt: "Escolha a frase com going to." },
              options: ["I'm going to keep practicing.", "I keep practicing will.", "I practiced going to."],
              answer: "I'm going to keep practicing.",
              explanation: { en: "am/is/are + going to + base verb.", pt: "am/is/are + going to + verbo base." },
            },
          ],
        },
        {
          id: "b30c-a3",
          title: { en: "Celebrate the level", pt: "Comemore o nível" },
          instruction: {
            en: "Say why you're proud of finishing A1, connecting two ideas with because and so.",
            pt: "Diga por que você está orgulhoso de terminar o A1, conectando duas ideias com because e so.",
          },
          phrases: [
            { en: "I'm proud because I practiced every day.", pt: "Estou orgulhoso porque pratiquei todo dia." },
            { en: "I finished the level, so I'm going to celebrate.", pt: "Eu terminei o nível, então vou comemorar." },
          ],
          check: [
            {
              id: "b30c-a3q1",
              prompt: { en: "Complete: I'm proud ___ I worked hard.", pt: "Complete: I'm proud ___ I worked hard." },
              options: ["because", "so", "but"],
              answer: "because",
              explanation: { en: "because gives the reason.", pt: "because dá o motivo." },
            },
          ],
        },
      ],
      challenge: {
        id: "b30c-challenge",
        title: { en: "Final Challenge — Complete the A1 task", pt: "Desafio final — Complete a tarefa A1" },
        instruction: {
          en: "Complete a full guided task: introduce yourself, describe your routine, tell a past event, share a future plan, make a promise, and connect it all with and, but, because and so.",
          pt: "Complete uma tarefa guiada completa: apresente-se, descreva sua rotina, conte um evento passado, compartilhe um plano futuro, faça uma promessa, e conecte tudo com and, but, because e so.",
        },
        phrases: [
          { en: "I'm from Brazil, and I work in a small company.", pt: "Eu sou do Brasil, e trabalho em uma empresa pequena." },
          { en: "Last year I started studying English, but it was difficult at first.", pt: "Ano passado eu comecei a estudar inglês, mas foi difícil no começo." },
          { en: "I'm going to keep practicing, so I'll improve every month.", pt: "Eu vou continuar praticando, então vou melhorar todo mês." },
          { en: "I promise I'll speak English every day.", pt: "Eu prometo que vou falar inglês todo dia." },
        ],
        check: [
          {
            id: "b30c-ch1",
            prompt: { en: "Which sentence combines past and contrast correctly?", pt: "Qual frase combina passado e contraste corretamente?" },
            options: [
              "Last year I started English, but it was difficult.",
              "Last year I start English, but difficult.",
              "Last year I'm starting English, so difficult.",
            ],
            answer: "Last year I started English, but it was difficult.",
            explanation: { en: "past simple + but + past simple.", pt: "past simple + but + past simple." },
          },
          {
            id: "b30c-ch2",
            prompt: { en: "Which sentence is a complete promise for the future?", pt: "Qual frase é uma promessa completa para o futuro?" },
            options: ["I promise I'll speak English every day.", "I promise I speak English.", "I promise I'm speak English."],
            answer: "I promise I'll speak English every day.",
            explanation: { en: "promise + I'll + base verb.", pt: "promise + I'll + verbo base." },
          },
          {
            id: "b30c-ch3",
            prompt: { en: "You reached 80% or more on this review — what's next?", pt: "Você alcançou 80% ou mais nesta revisão — qual é o próximo passo?" },
            options: ["Start the Intermediate course.", "Repeat Unit 1.", "Stop studying English."],
            answer: "Start the Intermediate course.",
            explanation: { en: "Finishing A1 with a strong score means you're ready for Intermediate.", pt: "Terminar o A1 com boa pontuação significa que você está pronto para o Intermediate." },
          },
        ],
      },
      lessonReview: {
        summary: {
          en: "You completed a full guided task in English, connecting everything you learned from Unit 1 to Unit 30.",
          pt: "Você completou uma tarefa guiada completa em inglês, conectando tudo o que aprendeu da Unidade 1 até a 30.",
        },
        canDo: [
          { en: "I can talk about myself using all the main tenses of A1.", pt: "Consigo falar de mim usando todos os principais tempos verbais do A1." },
          { en: "I can connect my ideas naturally with and, but, because and so.", pt: "Consigo conectar minhas ideias naturalmente com and, but, because e so." },
          { en: "I can complete a full spoken task in English from start to finish.", pt: "Consigo completar uma tarefa falada completa em inglês do início ao fim." },
        ],
        next: {
          en: "Congratulations! You finished the Beginner A1 course. Next: the Intermediate course.", 
          pt: "Parabéns! Você terminou o curso Beginner A1. Próximo: o curso Intermediate.",
        },
      },
    },
  },
];
