import type { CourseUnit } from "./types";

/**
 * Intermediate — Units 37-40. Conteúdo autoral Speak2Co.
 * U37: first conditional (travel/airport). U38: second conditional (dream job).
 * U39: relative clauses who/which/that (apartment hunting). U40: wish + review capstone (farewell party).
 */

export const INTERMEDIATE_U37: CourseUnit = {
  code: "INTERMEDIATE-U37",
  number: 37,
  title: "If Everything Goes Well — What will you do if your flight is delayed?",
  titlePt: "Se Tudo Der Certo — O que você vai fazer se o voo atrasar?",
  cefr: "B1",
  objective: {
    en: "Talk about real future possibilities with the first conditional and describe an airport situation.",
    pt: "Falar de possibilidades reais no futuro com o first conditional e descrever uma situação de aeroporto.",
  },
  communicationGoal: {
    en: "Discuss travel plans and react to problems: say what will happen if a condition is true.",
    pt: "Discutir planos de viagem e reagir a problemas: dizer o que vai acontecer se uma condição for verdadeira.",
  },
  prerequisites: {
    en: "Be going to for plans and predictions, present simple, simple past.",
    pt: "Be going to para planos e previsões, presente simples, passado simples.",
  },
  newContent: {
    en: "Grammar: first conditional (if + present, will + base verb) | Vocabulary: airport and travel (12 items) | Expressions: fortunately, to be honest, get lost",
    pt: "Gramática: first conditional (if + presente, will + verbo base) | Vocabulário: aeroporto e viagem (12 itens) | Expressões: fortunately, to be honest, get lost",
  },
  reviewContent: {
    en: "Be going to for plans and predictions; simple past of irregular verbs.",
    pt: "Be going to para planos e previsões; passado simples de verbos irregulares.",
  },
  discover: {
    id: "INTERMEDIATE-U37-DISCOVER",
    warmUp: {
      prompt: {
        en: "Look at the picture. What do you do if your flight is delayed? Do you get worried or stay calm?",
        pt: "Observe a imagem. O que você faz se o voo atrasa? Você fica preocupado ou fica calmo?",
      },
      phrases: [
        { en: "What will you do if your flight is delayed?", pt: "O que você vai fazer se o seu voo atrasar?" },
        { en: "Have you ever missed a flight?", pt: "Você já perdeu um voo?" },
        { en: "Do you get nervous before boarding?", pt: "Você fica nervoso antes de embarcar?" },
      ],
    },
    context: {
      situation: {
        en: "Bianca works at a travel agency. Her client Diego is flying to Lisbon tonight, but there's a storm near the airport.",
        pt: "Bianca trabalha em uma agência de viagens. Seu cliente Diego vai voar para Lisboa hoje à noite, mas há uma tempestade perto do aeroporto.",
      },
      dialogue: [
        { who: "Diego", en: "Bianca, the airline just sent a message. What will happen if the storm doesn't stop?", pt: "Bianca, a companhia aérea acabou de mandar uma mensagem. O que vai acontecer se a tempestade não parar?" },
        { who: "Bianca", en: "If it doesn't stop, they'll cancel the flight and put you on the morning one.", pt: "Se ela não parar, eles vão cancelar o voo e te colocar no da manhã." },
        { who: "Diego", en: "And if they cancel it, will I lose my hotel reservation in Lisbon?", pt: "E se cancelarem, eu vou perder a reserva do hotel em Lisboa?" },
        { who: "Bianca", en: "No, don't worry. If that happens, I'll call the hotel myself.", pt: "Não, não se preocupe. Se isso acontecer, eu mesma vou ligar para o hotel." },
        { who: "Diego", en: "Fortunately, I checked in early. To be honest, I'm still a little nervous.", pt: "Felizmente, eu fiz o check-in cedo. Para ser sincero, ainda estou um pouco nervoso." },
        { who: "Bianca", en: "That's normal. If you follow the signs to the gate, you won't get lost.", pt: "Isso é normal. Se você seguir as placas até o portão, você não vai se perder." },
        { who: "Diego", en: "OK. And if the flight attendant asks for my boarding pass, I'll show it on my phone.", pt: "Certo. E se a aeromoça pedir meu cartão de embarque, eu vou mostrar no celular." },
        { who: "Bianca", en: "Perfect. If everything goes well, you'll be in Lisbon by breakfast time.", pt: "Perfeito. Se tudo der certo, você vai estar em Lisboa na hora do café da manhã." },
      ],
    },
    vocabulary: [
      { term: "flight attendant", pt: "comissário(a) de bordo", ipa: "/flaɪt əˈtendənt/", definition: "A person who works on a plane and helps passengers.", example: "The flight attendant asked for our boarding passes.", examplePt: "A aeromoça pediu nossos cartões de embarque." },
      { term: "boarding pass", pt: "cartão de embarque", ipa: "/ˈbɔːrdɪŋ pæs/", definition: "The document you need to get on a plane.", example: "Don't lose your boarding pass.", examplePt: "Não perca seu cartão de embarque." },
      { term: "gate", pt: "portão de embarque", ipa: "/ɡeɪt/", definition: "The place in an airport where you get on the plane.", example: "Our gate closes in ten minutes.", examplePt: "Nosso portão fecha em dez minutos." },
      { term: "runway", pt: "pista de pouso/decolagem", ipa: "/ˈrʌnweɪ/", definition: "The long road where planes take off and land.", example: "The runway is closed because of the snow.", examplePt: "A pista está fechada por causa da neve." },
      { term: "delay", pt: "atraso; atrasar", ipa: "/dɪˈleɪ/", definition: "A situation when something happens later than planned.", example: "There's a two-hour delay because of the storm.", examplePt: "Há um atraso de duas horas por causa da tempestade." },
      { term: "board (verb)", pt: "embarcar", ipa: "/bɔːrd/", definition: "To get on a plane, train or ship.", example: "We boarded the plane at nine.", examplePt: "Nós embarcamos no avião às nove." },
      { term: "layover", pt: "conexão (escala)", ipa: "/ˈleɪoʊvər/", definition: "A short stop between flights.", example: "We have a two-hour layover in Madrid.", examplePt: "Temos uma conexão de duas horas em Madri." },
      { term: "lost (get lost)", pt: "perdido (se perder)", ipa: "/lɔːst/", definition: "Not able to find your way.", example: "If you don't follow the signs, you'll get lost.", examplePt: "Se você não seguir as placas, vai se perder." },
      { term: "check in", pt: "fazer check-in", ipa: "/tʃek ɪn/", definition: "To register for a flight before boarding.", example: "We checked in online yesterday.", examplePt: "Fizemos o check-in on-line ontem." },
      { term: "storm", pt: "tempestade", ipa: "/stɔːrm/", definition: "Very bad weather with strong wind and rain.", example: "The storm is going to pass soon.", examplePt: "A tempestade vai passar logo." },
      { term: "reservation", pt: "reserva", ipa: "/ˌrezərˈveɪʃən/", definition: "An arrangement to keep something for you, like a room or a seat.", example: "I made a reservation at the hotel.", examplePt: "Fiz uma reserva no hotel." },
      { term: "nervous", pt: "nervoso", ipa: "/ˈnɜːrvəs/", definition: "Feeling worried or afraid about something.", example: "She's always nervous before a flight.", examplePt: "Ela sempre fica nervosa antes de um voo." },
    ],
    expressions: [
      { en: "Fortunately, I checked in early.", pt: "Felizmente, eu fiz o check-in cedo." },
      { en: "To be honest, I'm nervous.", pt: "Para ser sincero, estou nervoso." },
      { en: "Don't worry.", pt: "Não se preocupe." },
      { en: "If everything goes well…", pt: "Se tudo der certo…" },
      { en: "get lost", pt: "se perder" },
      { en: "by breakfast time", pt: "até a hora do café da manhã" },
    ],
    grammar: [
      {
        title: { en: "First conditional — real future possibilities", pt: "First conditional — possibilidades reais no futuro" },
        examples: [
          { en: "If it doesn't stop, they'll cancel the flight.", pt: "Se não parar, eles vão cancelar o voo." },
          { en: "If you follow the signs, you won't get lost.", pt: "Se você seguir as placas, você não vai se perder." },
          { en: "Will you call me if the flight is delayed?", pt: "Você vai me ligar se o voo atrasar?" },
          { en: "If everything goes well, you'll be in Lisbon by morning.", pt: "Se tudo der certo, você vai estar em Lisboa até de manhã." },
        ],
        rule: {
          en: "Use 'If + present simple, ... will + base verb' to talk about a real, possible condition and its future result. The if-clause can come first or last: You'll get lost if you don't follow the signs. Negative: won't. Question: Will + subject + ...if...?",
          pt: "Use 'If + presente simples, ... will + verbo base' para falar de uma condição real e possível e o resultado futuro dela. A oração com if pode vir antes ou depois: You'll get lost if you don't follow the signs. Negativa: won't. Pergunta: Will + sujeito + ...if...?",
        },
        mistakes: [
          { en: "✗ If it will rain, we'll stay home. → ✓ If it rains, we'll stay home. (no 'will' after if)", pt: "✗ If it will rain, we'll stay home. → ✓ If it rains, we'll stay home. (sem 'will' depois de if)" },
          { en: "✗ If she comes, she help us. → ✓ If she comes, she'll help us.", pt: "✗ If she comes, she help us. → ✓ If she comes, she'll help us." },
        ],
      },
      {
        title: { en: "Talking about air travel", pt: "Falando sobre viagens de avião" },
        examples: [
          { en: "The gate closes in ten minutes.", pt: "O portão fecha em dez minutos." },
          { en: "We have a layover in Madrid.", pt: "Temos uma conexão em Madri." },
          { en: "Did you check in online?", pt: "Você fez o check-in on-line?" },
        ],
        rule: {
          en: "Use specific airport vocabulary (gate, boarding pass, runway, layover) together with the first conditional to talk naturally about travel plans and problems.",
          pt: "Use o vocabulário específico de aeroporto (gate, boarding pass, runway, layover) junto com o first conditional para falar naturalmente de planos e problemas de viagem.",
        },
        mistakes: [
          { en: "✗ I boarded on the plane. → ✓ I boarded the plane. (no preposition)", pt: "✗ I boarded on the plane. → ✓ I boarded the plane. (sem preposição)" },
        ],
      },
    ],
    controlledPractice: [
      { id: "i37d-cp1", prompt: { en: "Complete: 'If it ___ tomorrow, we'll cancel the trip.'", pt: "Complete: 'If it ___ tomorrow, we'll cancel the trip.'" }, options: ["will rain", "rains", "rained"], answer: "rains", explanation: { en: "After 'if', use present simple.", pt: "Depois de 'if', use presente simples." } },
      { id: "i37d-cp2", prompt: { en: "Choose the correct sentence.", pt: "Escolha a frase correta." }, options: ["If you hurry, you won't miss the flight.", "If you hurry, you not will miss the flight.", "If you will hurry, you won't miss the flight."], answer: "If you hurry, you won't miss the flight.", explanation: { en: "If + present, will/won't + base verb.", pt: "If + presente, will/won't + verbo base." } },
      { id: "i37d-cp3", prompt: { en: "Make a question: 'You will call me if the flight is delayed.'", pt: "Transforme em pergunta: 'You will call me if the flight is delayed.'" }, options: ["Will you call me if the flight is delayed?", "You will call me if the flight is delayed?", "Do you call me if the flight is delayed?"], answer: "Will you call me if the flight is delayed?", explanation: { en: "Invert will and the subject.", pt: "Inverta will e o sujeito." } },
      { id: "i37d-cp4", prompt: { en: "What does 'boarding pass' mean?", pt: "O que significa 'boarding pass'?" }, options: ["A document to get on a plane", "A hotel reservation", "A type of luggage"], answer: "A document to get on a plane", explanation: { en: "Boarding pass = cartão de embarque.", pt: "Boarding pass = cartão de embarque." } },
      { id: "i37d-cp5", prompt: { en: "Complete: 'If you don't follow the signs, you'll ___.'", pt: "Complete: 'If you don't follow the signs, you'll ___.'" }, options: ["get lost", "getting lost", "gets lost"], answer: "get lost", explanation: { en: "After 'will/won't', use the base verb.", pt: "Depois de 'will/won't', use o verbo base." } },
    ],
    input: {
      kind: "listening",
      title: { en: "Airport announcement", pt: "Anúncio no aeroporto" },
      lines: [
        { en: "Attention, passengers. If the storm doesn't stop soon, all flights will be delayed.", pt: "Atenção, passageiros. Se a tempestade não parar logo, todos os voos vão atrasar." },
        { en: "If you have a connecting flight, please talk to the flight attendant at your gate.", pt: "Se você tem um voo de conexão, por favor fale com a aeromoça no seu portão." },
        { en: "If your flight is cancelled, you will receive a new boarding pass at the counter.", pt: "Se o seu voo for cancelado, você vai receber um novo cartão de embarque no balcão." },
        { en: "Fortunately, the runway is still open, so we hope to start boarding soon.", pt: "Felizmente, a pista ainda está aberta, então esperamos começar o embarque logo." },
        { en: "Thank you for your patience, and don't worry: we'll keep you informed.", pt: "Obrigado pela paciência, e não se preocupem: vamos mantê-los informados." },
      ],
      questions: [
        { id: "i37d-iq1", prompt: { en: "What will happen if the storm doesn't stop?", pt: "O que vai acontecer se a tempestade não parar?" }, options: ["All flights will be delayed.", "The airport will close.", "Nothing will change."], answer: "All flights will be delayed.", explanation: { en: "'If the storm doesn't stop soon, all flights will be delayed.'", pt: "'Se a tempestade não parar logo, todos os voos vão atrasar.'" } },
        { id: "i37d-iq2", prompt: { en: "What will passengers get if their flight is cancelled?", pt: "O que os passageiros vão receber se o voo for cancelado?" }, options: ["A new boarding pass", "A free hotel room", "A new suitcase"], answer: "A new boarding pass", explanation: { en: "'You will receive a new boarding pass at the counter.'", pt: "'Você vai receber um novo cartão de embarque no balcão.'" } },
        { id: "i37d-iq3", prompt: { en: "Is the runway open?", pt: "A pista está aberta?" }, options: ["Yes, it's still open.", "No, it's closed.", "It's not mentioned."], answer: "Yes, it's still open.", explanation: { en: "'Fortunately, the runway is still open.'", pt: "'Felizmente, a pista ainda está aberta.'" } },
      ],
    },
    quickCheck: [
      { id: "i37d-qc1", prompt: { en: "What does 'delay' mean?", pt: "O que significa 'delay'?" }, options: ["A late arrival or departure", "A type of ticket", "A pilot"], answer: "A late arrival or departure", explanation: { en: "Delay = atraso.", pt: "Delay = atraso." } },
      { id: "i37d-qc2", prompt: { en: "Choose the correct first conditional.", pt: "Escolha o first conditional correto." }, options: ["If she calls, I'll answer.", "If she'll call, I'll answer.", "If she calls, I answer."], answer: "If she calls, I'll answer.", explanation: { en: "If + present, will + base verb.", pt: "If + presente, will + verbo base." } },
      { id: "i37d-qc3", prompt: { en: "What is a 'layover'?", pt: "O que é 'layover'?" }, options: ["A short stop between flights", "A type of luggage", "A flight delay"], answer: "A short stop between flights", explanation: { en: "Layover = escala/conexão.", pt: "Layover = escala/conexão." } },
      { id: "i37d-qc4", prompt: { en: "Complete: 'If you ___ nervous, tell me.'", pt: "Complete: 'If you ___ nervous, tell me.'" }, options: ["are", "will be", "were"], answer: "are", explanation: { en: "Present simple after 'if'.", pt: "Presente simples depois de 'if'." } },
    ],
  },
  communicate: {
    id: "INTERMEDIATE-U37-COMMUNICATE",
    review: [
      { en: "If it doesn't stop, they'll cancel the flight. — first conditional.", pt: "Se não parar, eles vão cancelar o voo. — first conditional." },
      { en: "If you follow the signs, you won't get lost.", pt: "Se você seguir as placas, você não vai se perder." },
      { en: "Fortunately, I checked in early. To be honest, I'm nervous.", pt: "Felizmente, fiz o check-in cedo. Para ser sincero, estou nervoso." },
      { en: "gate, boarding pass, runway, layover, delay", pt: "portão, cartão de embarque, pista, conexão, atraso" },
    ],
    activities: [
      {
        id: "i37c-a1",
        title: { en: "Travel Plans B", pt: "Planos de Viagem B" },
        instruction: { en: "Say two things that will happen if your next trip goes well, and one thing that will happen if it doesn't.", pt: "Diga duas coisas que vão acontecer se sua próxima viagem der certo, e uma coisa que vai acontecer se não der." },
        phrases: [
          { en: "If the flight isn't delayed, I'll arrive on time.", pt: "Se o voo não atrasar, eu vou chegar na hora." },
          { en: "If I have a layover, I'll walk around the airport.", pt: "Se eu tiver uma conexão, vou passear pelo aeroporto." },
          { en: "If it rains, I won't go to the beach.", pt: "Se chover, eu não vou à praia." },
        ],
        check: [
          { id: "i37c-a1q1", prompt: { en: "Which sentence uses the first conditional correctly?", pt: "Qual frase usa o first conditional corretamente?" }, options: ["If I travel, I'll be happy.", "If I will travel, I'll be happy.", "If I travel, I happy."], answer: "If I travel, I'll be happy.", explanation: { en: "If + present, will + base verb.", pt: "If + presente, will + verbo base." } },
          { id: "i37c-a1q2", prompt: { en: "Complete: 'If we miss the gate, we ___ the flight.'", pt: "Complete: 'If we miss the gate, we ___ the flight.'" }, options: ["will miss", "miss", "missed"], answer: "will miss", explanation: { en: "Result clause uses will + base verb.", pt: "A oração de resultado usa will + verbo base." } },
        ],
      },
      {
        id: "i37c-a2",
        title: { en: "Airport Role-Play", pt: "Simulação no Aeroporto" },
        instruction: { en: "Imagine you are at the gate. Say what the flight attendant asks for and how you will react.", pt: "Imagine que você está no portão. Diga o que a aeromoça pede e como você vai reagir." },
        phrases: [
          { en: "Can I see your boarding pass, please?", pt: "Posso ver seu cartão de embarque, por favor?" },
          { en: "If the gate changes, I'll check the screen.", pt: "Se o portão mudar, vou checar a tela." },
          { en: "To be honest, I always get a little nervous before boarding.", pt: "Para ser sincero, sempre fico um pouco nervoso antes de embarcar." },
        ],
        check: [
          { id: "i37c-a2q1", prompt: { en: "Who asks for the boarding pass?", pt: "Quem pede o cartão de embarque?" }, options: ["The flight attendant", "The pilot", "The taxi driver"], answer: "The flight attendant", explanation: { en: "The flight attendant checks boarding passes.", pt: "A aeromoça confere os cartões de embarque." } },
          { id: "i37c-a2q2", prompt: { en: "Complete: 'If the gate changes, I ___ the screen.'", pt: "Complete: 'If the gate changes, I ___ the screen.'" }, options: ["'ll check", "check", "checked"], answer: "'ll check", explanation: { en: "Will + base verb for the result.", pt: "Will + verbo base para o resultado." } },
        ],
      },
    ],
    challenge: {
      id: "i37c-ch1",
      title: { en: "My Travel Conditions", pt: "Minhas Condições de Viagem" },
      instruction: { en: "Tell a short story with three first-conditional sentences about a trip you are planning.", pt: "Conte uma pequena história com três frases no first conditional sobre uma viagem que você está planejando." },
      phrases: [
        { en: "If I save enough money, I'll travel next year.", pt: "Se eu economizar dinheiro suficiente, vou viajar no ano que vem." },
        { en: "If the weather is good, we'll go hiking.", pt: "Se o tempo estiver bom, vamos fazer trilha." },
        { en: "If I miss the connection, I'll wait for the next flight.", pt: "Se eu perder a conexão, vou esperar o próximo voo." },
      ],
      check: [
        { id: "i37c-ch1q1", prompt: { en: "Which is a correct first-conditional sentence?", pt: "Qual é uma frase correta no first conditional?" }, options: ["If I have time, I'll visit you.", "If I will have time, I'll visit you.", "If I have time, I visit you tomorrow."], answer: "If I have time, I'll visit you.", explanation: { en: "If + present, will + base verb.", pt: "If + presente, will + verbo base." } },
        { id: "i37c-ch1q2", prompt: { en: "Complete: 'If they hurry, they ___ the gate.'", pt: "Complete: 'If they hurry, they ___ the gate.'" }, options: ["will make", "made", "make"], answer: "will make", explanation: { en: "Result clause uses will + base verb.", pt: "A oração de resultado usa will + verbo base." } },
      ],
    },
    lessonReview: {
      summary: { en: "You learned to use the first conditional to talk about real future possibilities and to describe an airport situation.", pt: "Você aprendeu a usar o first conditional para falar de possibilidades reais no futuro e a descrever uma situação de aeroporto." },
      canDo: [
        { en: "I can say what will happen if a real condition is true.", pt: "Eu consigo dizer o que vai acontecer se uma condição real for verdadeira." },
        { en: "I can use airport vocabulary like gate, boarding pass and layover.", pt: "Eu consigo usar vocabulário de aeroporto como gate, boarding pass e layover." },
      ],
      next: { en: "Next, you'll learn the second conditional to talk about imaginary situations.", pt: "A seguir, você vai aprender o second conditional para falar de situações imaginárias." },
    },
  },
};

export const INTERMEDIATE_U38: CourseUnit = {
  code: "INTERMEDIATE-U38",
  number: 38,
  title: "If I Had the Chance — What would you do in your dream job?",
  titlePt: "Se Eu Tivesse a Chance — O que você faria no seu emprego dos sonhos?",
  cefr: "B1",
  objective: {
    en: "Talk about imaginary or unlikely situations with the second conditional.",
    pt: "Falar de situações imaginárias ou improváveis com o second conditional.",
  },
  communicationGoal: {
    en: "Describe a dream job interview: say what you would do in a hypothetical situation.",
    pt: "Descrever uma entrevista de emprego dos sonhos: dizer o que você faria em uma situação hipotética.",
  },
  prerequisites: {
    en: "First conditional (if + present, will + base verb).",
    pt: "First conditional (if + presente, will + verbo base).",
  },
  newContent: {
    en: "Grammar: second conditional (if + simple past, would + base verb) | Vocabulary: work and interviews (12 items) | Expressions: I'd love to, it depends, sooner or later",
    pt: "Gramática: second conditional (if + passado simples, would + verbo base) | Vocabulário: trabalho e entrevistas (12 itens) | Expressões: I'd love to, it depends, sooner or later",
  },
  reviewContent: {
    en: "First conditional and simple past forms of irregular verbs.",
    pt: "First conditional e formas do passado simples de verbos irregulares.",
  },
  discover: {
    id: "INTERMEDIATE-U38-DISCOVER",
    warmUp: {
      prompt: {
        en: "Look at the picture. If you could have any job in the world, what would you choose?",
        pt: "Observe a imagem. Se você pudesse ter qualquer emprego do mundo, qual você escolheria?",
      },
      phrases: [
        { en: "If you could have any job, what would you do?", pt: "Se você pudesse ter qualquer emprego, o que você faria?" },
        { en: "Would you work abroad if you had the chance?", pt: "Você trabalharia no exterior se tivesse a chance?" },
        { en: "What would you say in a job interview?", pt: "O que você diria em uma entrevista de emprego?" },
      ],
    },
    context: {
      situation: {
        en: "Laura is having a job interview with Mr. Reis for a position at a design studio. He asks her hypothetical questions.",
        pt: "Laura está tendo uma entrevista de emprego com o Sr. Reis para uma vaga em um estúdio de design. Ele faz perguntas hipotéticas para ela.",
      },
      dialogue: [
        { who: "Mr. Reis", en: "If we offered you the job, when would you start?", pt: "Se nós te oferecêssemos a vaga, quando você começaria?" },
        { who: "Laura", en: "I'd love to start next month, if that worked for the team.", pt: "Eu adoraria começar no mês que vem, se isso funcionasse para o time." },
        { who: "Mr. Reis", en: "And if a client changed the project the night before, what would you do?", pt: "E se um cliente mudasse o projeto na véspera, o que você faria?" },
        { who: "Laura", en: "I'd stay calm and I'd call the team immediately.", pt: "Eu ficaria calma e ligaria para o time imediatamente." },
        { who: "Mr. Reis", en: "Good answer. If you had more time, would you travel for the job?", pt: "Boa resposta. Se você tivesse mais tempo, você viajaria pelo trabalho?" },
        { who: "Laura", en: "It depends. If the trip helped the project, I'd definitely go.", pt: "Depende. Se a viagem ajudasse o projeto, eu com certeza iria." },
        { who: "Mr. Reis", en: "Sooner or later, we all face hard decisions here. If you didn't agree with your boss, what would you do?", pt: "Cedo ou tarde, todos nós enfrentamos decisões difíceis aqui. Se você não concordasse com seu chefe, o que você faria?" },
        { who: "Laura", en: "I'd explain my opinion politely, but I'd respect the final decision.", pt: "Eu explicaria minha opinião educadamente, mas respeitaria a decisão final." },
      ],
    },
    vocabulary: [
      { term: "interview", pt: "entrevista", ipa: "/ˈɪntərvjuː/", definition: "A formal meeting where someone asks you questions, often for a job.", example: "I have a job interview on Friday.", examplePt: "Tenho uma entrevista de emprego na sexta." },
      { term: "candidate", pt: "candidato(a)", ipa: "/ˈkændɪdət/", definition: "A person who applies for a job or a position.", example: "There were ten candidates for the job.", examplePt: "Havia dez candidatos para a vaga." },
      { term: "offer (a job)", pt: "oferecer (um emprego)", ipa: "/ˈɔːfər/", definition: "To formally give someone a job or opportunity.", example: "They offered her the job on Monday.", examplePt: "Eles ofereceram o emprego a ela na segunda." },
      { term: "salary", pt: "salário", ipa: "/ˈsæləri/", definition: "The money you earn from your job.", example: "The salary is very good at that company.", examplePt: "O salário é muito bom naquela empresa." },
      { term: "position", pt: "cargo, vaga", ipa: "/pəˈzɪʃən/", definition: "A job or role in a company.", example: "She applied for a new position.", examplePt: "Ela se candidatou a um novo cargo." },
      { term: "deadline", pt: "prazo final", ipa: "/ˈdedlaɪn/", definition: "The time by which something must be finished.", example: "The deadline for the report is Friday.", examplePt: "O prazo do relatório é sexta." },
      { term: "team", pt: "equipe", ipa: "/tiːm/", definition: "A group of people who work together.", example: "My team is very creative.", examplePt: "Minha equipe é muito criativa." },
      { term: "client", pt: "cliente", ipa: "/ˈklaɪənt/", definition: "A person or company that pays for a service.", example: "The client changed the project.", examplePt: "O cliente mudou o projeto." },
      { term: "opportunity", pt: "oportunidade", ipa: "/ˌɒpərˈtuːnəti/", definition: "A chance to do something good.", example: "This is a great opportunity for me.", examplePt: "Essa é uma ótima oportunidade para mim." },
      { term: "boss", pt: "chefe", ipa: "/bɒs/", definition: "The person who manages you at work.", example: "My boss is very supportive.", examplePt: "Meu chefe é muito solidário." },
      { term: "decision", pt: "decisão", ipa: "/dɪˈsɪʒən/", definition: "A choice you make after thinking about it.", example: "It was a hard decision.", examplePt: "Foi uma decisão difícil." },
      { term: "abroad", pt: "no exterior", ipa: "/əˈbrɔːd/", definition: "In or to a foreign country.", example: "Would you like to work abroad?", examplePt: "Você gostaria de trabalhar no exterior?" },
    ],
    expressions: [
      { en: "I'd love to.", pt: "Eu adoraria." },
      { en: "It depends.", pt: "Depende." },
      { en: "Sooner or later.", pt: "Cedo ou tarde." },
      { en: "Good answer.", pt: "Boa resposta." },
      { en: "If that worked for the team.", pt: "Se isso funcionasse para o time." },
      { en: "I'd respect the final decision.", pt: "Eu respeitaria a decisão final." },
    ],
    grammar: [
      {
        title: { en: "Second conditional — imaginary situations", pt: "Second conditional — situações imaginárias" },
        examples: [
          { en: "If we offered you the job, when would you start?", pt: "Se nós te oferecêssemos a vaga, quando você começaria?" },
          { en: "If a client changed the project, I'd stay calm.", pt: "Se um cliente mudasse o projeto, eu ficaria calma." },
          { en: "I wouldn't accept a job with a low salary.", pt: "Eu não aceitaria um emprego com um salário baixo." },
          { en: "Would you travel for the job if you had more time?", pt: "Você viajaria pelo trabalho se tivesse mais tempo?" },
        ],
        rule: {
          en: "Use 'If + simple past, ... would + base verb' for imaginary, unlikely or hypothetical situations in the present/future. Use 'were' for all subjects with 'be' in formal style: If I were you… Negative: wouldn't. Question: Would + subject + ...if...?",
          pt: "Use 'If + passado simples, ... would + verbo base' para situações imaginárias, improváveis ou hipotéticas no presente/futuro. Use 'were' para todos os sujeitos com 'be' em estilo formal: If I were you… Negativa: wouldn't. Pergunta: Would + sujeito + ...if...?",
        },
        mistakes: [
          { en: "✗ If I would have money, I'd travel. → ✓ If I had money, I'd travel. (no 'would' after if)", pt: "✗ If I would have money, I'd travel. → ✓ If I had money, I'd travel. (sem 'would' depois de if)" },
          { en: "✗ If I was you, I'd accept. → ✓ If I were you, I'd accept. (formal 'were')", pt: "✗ If I was you, I'd accept. → ✓ If I were you, I'd accept. ('were' formal)" },
        ],
      },
      {
        title: { en: "First vs. second conditional", pt: "First vs. second conditional" },
        examples: [
          { en: "If it rains, I'll take an umbrella. (real, possible)", pt: "Se chover, eu vou levar um guarda-chuva. (real, possível)" },
          { en: "If I won the lottery, I'd travel the world. (imaginary)", pt: "Se eu ganhasse na loteria, eu viajaria pelo mundo. (imaginário)" },
        ],
        rule: {
          en: "The first conditional talks about things that can really happen; the second conditional talks about things that are imaginary, unlikely or impossible now.",
          pt: "O first conditional fala de coisas que podem realmente acontecer; o second conditional fala de coisas imaginárias, improváveis ou impossíveis agora.",
        },
        mistakes: [
          { en: "✗ If I have a million dollars, I buy a house. → ✓ If I had a million dollars, I'd buy a house.", pt: "✗ If I have a million dollars, I buy a house. → ✓ If I had a million dollars, I'd buy a house." },
        ],
      },
    ],
    controlledPractice: [
      { id: "i38d-cp1", prompt: { en: "Complete: 'If I ___ more time, I'd travel more.'", pt: "Complete: 'If I ___ more time, I'd travel more.'" }, options: ["have", "had", "will have"], answer: "had", explanation: { en: "Second conditional uses simple past after 'if'.", pt: "Second conditional usa passado simples depois de 'if'." } },
      { id: "i38d-cp2", prompt: { en: "Choose the correct sentence.", pt: "Escolha a frase correta." }, options: ["If I were you, I'd accept.", "If I was you, I would accept.", "If I am you, I'd accept."], answer: "If I were you, I'd accept.", explanation: { en: "Formal style uses 'were' for all subjects.", pt: "O estilo formal usa 'were' para todos os sujeitos." } },
      { id: "i38d-cp3", prompt: { en: "Make a question: 'You would travel abroad.'", pt: "Transforme em pergunta: 'You would travel abroad.'" }, options: ["Would you travel abroad?", "You would travel abroad?", "Do you would travel abroad?"], answer: "Would you travel abroad?", explanation: { en: "Invert would and the subject.", pt: "Inverta would e o sujeito." } },
      { id: "i38d-cp4", prompt: { en: "What does 'deadline' mean?", pt: "O que significa 'deadline'?" }, options: ["The time by which something must be finished", "A type of interview", "A salary"], answer: "The time by which something must be finished", explanation: { en: "Deadline = prazo final.", pt: "Deadline = prazo final." } },
      { id: "i38d-cp5", prompt: { en: "Complete: 'If a client changed the project, I ___ calm.'", pt: "Complete: 'If a client changed the project, I ___ calm.'" }, options: ["'d stay", "stay", "will stay"], answer: "'d stay", explanation: { en: "Would + base verb for the result.", pt: "Would + verbo base para o resultado." } },
    ],
    input: {
      kind: "reading",
      title: { en: "Career advice column", pt: "Coluna de conselhos de carreira" },
      lines: [
        { en: "Dear readers, this week a reader asked: 'If I got a job offer with a lower salary, would I regret leaving my current job?'", pt: "Caros leitores, essa semana uma leitora perguntou: 'Se eu recebesse uma proposta de emprego com salário menor, eu me arrependeria de deixar meu emprego atual?'" },
        { en: "If the new position offered more opportunities, I wouldn't focus only on the salary.", pt: "Se a nova vaga oferecesse mais oportunidades, eu não focaria só no salário." },
        { en: "If I had a great team and a supportive boss, I would consider the change.", pt: "Se eu tivesse uma ótima equipe e um chefe solidário, eu consideraria a mudança." },
        { en: "But if the deadline for the decision were too short, I'd ask for more time.", pt: "Mas se o prazo para a decisão fosse muito curto, eu pediria mais tempo." },
        { en: "Sooner or later, every candidate faces this kind of hard decision.", pt: "Cedo ou tarde, todo candidato enfrenta esse tipo de decisão difícil." },
      ],
      questions: [
        { id: "i38d-iq1", prompt: { en: "What did the reader ask about?", pt: "Sobre o que a leitora perguntou?" }, options: ["A job offer with a lower salary", "A trip abroad", "A job interview question"], answer: "A job offer with a lower salary", explanation: { en: "'If I got a job offer with a lower salary...'", pt: "'Se eu recebesse uma proposta de emprego com salário menor...'" } },
        { id: "i38d-iq2", prompt: { en: "What would the writer do if the deadline were too short?", pt: "O que a autora faria se o prazo fosse muito curto?" }, options: ["Ask for more time", "Refuse the job immediately", "Accept without thinking"], answer: "Ask for more time", explanation: { en: "'I'd ask for more time.'", pt: "'Eu pediria mais tempo.'" } },
        { id: "i38d-iq3", prompt: { en: "What would make the writer consider the change?", pt: "O que faria a autora considerar a mudança?" }, options: ["A great team and a supportive boss", "A shorter deadline", "A lower salary"], answer: "A great team and a supportive boss", explanation: { en: "'If I had a great team and a supportive boss...'", pt: "'Se eu tivesse uma ótima equipe e um chefe solidário...'" } },
      ],
    },
    quickCheck: [
      { id: "i38d-qc1", prompt: { en: "What does 'candidate' mean?", pt: "O que significa 'candidate'?" }, options: ["A person who applies for a job", "A boss", "A salary"], answer: "A person who applies for a job", explanation: { en: "Candidate = candidato.", pt: "Candidate = candidato." } },
      { id: "i38d-qc2", prompt: { en: "Choose the correct second conditional.", pt: "Escolha o second conditional correto." }, options: ["If I had time, I'd help you.", "If I have time, I'd help you.", "If I had time, I help you."], answer: "If I had time, I'd help you.", explanation: { en: "If + simple past, would + base verb.", pt: "If + passado simples, would + verbo base." } },
      { id: "i38d-qc3", prompt: { en: "What is a 'deadline'?", pt: "O que é 'deadline'?" }, options: ["The time by which something must be finished", "A job title", "A team meeting"], answer: "The time by which something must be finished", explanation: { en: "Deadline = prazo final.", pt: "Deadline = prazo final." } },
      { id: "i38d-qc4", prompt: { en: "Complete: 'If I ___ you, I'd take the job.'", pt: "Complete: 'If I ___ you, I'd take the job.'" }, options: ["were", "am", "will be"], answer: "were", explanation: { en: "Formal 'were' with 'if I'.", pt: "'Were' formal com 'if I'." } },
    ],
  },
  communicate: {
    id: "INTERMEDIATE-U38-COMMUNICATE",
    review: [
      { en: "If we offered you the job, when would you start? — second conditional.", pt: "Se nós te oferecêssemos a vaga, quando você começaria? — second conditional." },
      { en: "If I were you, I'd accept the offer.", pt: "Se eu fosse você, eu aceitaria a proposta." },
      { en: "I'd love to. It depends. Sooner or later.", pt: "Eu adoraria. Depende. Cedo ou tarde." },
      { en: "interview, candidate, salary, position, deadline, boss", pt: "entrevista, candidato, salário, cargo, prazo, chefe" },
    ],
    activities: [
      {
        id: "i38c-a1",
        title: { en: "My Dream Job", pt: "Meu Emprego dos Sonhos" },
        instruction: { en: "Say what you would do if you had your dream job, and one thing you wouldn't do.", pt: "Diga o que você faria se tivesse o emprego dos seus sonhos, e uma coisa que você não faria." },
        phrases: [
          { en: "If I had my dream job, I'd travel every month.", pt: "Se eu tivesse meu emprego dos sonhos, eu viajaria todo mês." },
          { en: "I wouldn't work on weekends.", pt: "Eu não trabalharia nos fins de semana." },
          { en: "If I earned more, I'd help my family.", pt: "Se eu ganhasse mais, eu ajudaria minha família." },
        ],
        check: [
          { id: "i38c-a1q1", prompt: { en: "Which sentence uses the second conditional correctly?", pt: "Qual frase usa o second conditional corretamente?" }, options: ["If I had my dream job, I'd travel.", "If I have my dream job, I'd travel.", "If I had my dream job, I travel."], answer: "If I had my dream job, I'd travel.", explanation: { en: "If + simple past, would + base verb.", pt: "If + passado simples, would + verbo base." } },
          { id: "i38c-a1q2", prompt: { en: "Complete: 'If I earned more, I ___ my family.'", pt: "Complete: 'If I earned more, I ___ my family.'" }, options: ["'d help", "help", "will help"], answer: "'d help", explanation: { en: "Would + base verb for the result.", pt: "Would + verbo base para o resultado." } },
        ],
      },
      {
        id: "i38c-a2",
        title: { en: "Interview Practice", pt: "Prática de Entrevista" },
        instruction: { en: "Answer a hypothetical interview question with 'if I were...'.", pt: "Responda a uma pergunta hipotética de entrevista com 'if I were...'." },
        phrases: [
          { en: "If I were the manager, I'd listen to my team more.", pt: "Se eu fosse o gerente, eu ouviria mais a minha equipe." },
          { en: "If a client disagreed, I'd explain my opinion politely.", pt: "Se um cliente discordasse, eu explicaria minha opinião educadamente." },
          { en: "It depends on the situation.", pt: "Depende da situação." },
        ],
        check: [
          { id: "i38c-a2q1", prompt: { en: "Complete: 'If I ___ the manager, I'd listen more.'", pt: "Complete: 'If I ___ the manager, I'd listen more.'" }, options: ["were", "am", "will be"], answer: "were", explanation: { en: "Formal 'were' with 'if I'.", pt: "'Were' formal com 'if I'." } },
          { id: "i38c-a2q2", prompt: { en: "What does 'it depends' mean?", pt: "O que significa 'it depends'?" }, options: ["The answer changes based on the situation", "Yes, always", "No, never"], answer: "The answer changes based on the situation", explanation: { en: "'It depends' shows the answer isn't fixed.", pt: "'It depends' mostra que a resposta não é fixa." } },
        ],
      },
    ],
    challenge: {
      id: "i38c-ch1",
      title: { en: "If I Won the Lottery", pt: "Se Eu Ganhasse na Loteria" },
      instruction: { en: "Tell a short story with three second-conditional sentences about an imaginary situation.", pt: "Conte uma pequena história com três frases no second conditional sobre uma situação imaginária." },
      phrases: [
        { en: "If I won the lottery, I'd quit my job.", pt: "Se eu ganhasse na loteria, eu deixaria meu emprego." },
        { en: "If I had a lot of money, I wouldn't stop studying.", pt: "Se eu tivesse muito dinheiro, eu não pararia de estudar." },
        { en: "If I were rich, I'd help other candidates find good jobs.", pt: "Se eu fosse rico, eu ajudaria outros candidatos a achar bons empregos." },
      ],
      check: [
        { id: "i38c-ch1q1", prompt: { en: "Which is a correct second-conditional sentence?", pt: "Qual é uma frase correta no second conditional?" }, options: ["If I won the lottery, I'd travel.", "If I win the lottery, I'd travel.", "If I won the lottery, I travel."], answer: "If I won the lottery, I'd travel.", explanation: { en: "If + simple past, would + base verb.", pt: "If + passado simples, would + verbo base." } },
        { id: "i38c-ch1q2", prompt: { en: "Complete: 'If I were rich, I ___ other candidates.'", pt: "Complete: 'If I were rich, I ___ other candidates.'" }, options: ["'d help", "help", "will help"], answer: "'d help", explanation: { en: "Would + base verb for the result.", pt: "Would + verbo base para o resultado." } },
      ],
    },
    lessonReview: {
      summary: { en: "You learned to use the second conditional to talk about imaginary situations, and vocabulary for jobs and interviews.", pt: "Você aprendeu a usar o second conditional para falar de situações imaginárias, e vocabulário de trabalho e entrevistas." },
      canDo: [
        { en: "I can talk about hypothetical situations with 'if I were...'.", pt: "Eu consigo falar de situações hipotéticas com 'if I were...'." },
        { en: "I can use words like candidate, salary, position and deadline.", pt: "Eu consigo usar palavras como candidate, salary, position e deadline." },
      ],
      next: { en: "Next, you'll learn relative clauses to describe people and things.", pt: "A seguir, você vai aprender orações relativas para descrever pessoas e coisas." },
    },
  },
};

export const INTERMEDIATE_U39: CourseUnit = {
  code: "INTERMEDIATE-U39",
  number: 39,
  title: "The Apartment That I Found — Who lives next door?",
  titlePt: "O Apartamento Que Eu Encontrei — Quem mora ao lado?",
  cefr: "B1",
  objective: {
    en: "Describe people and things with relative clauses (who, which, that).",
    pt: "Descrever pessoas e coisas com orações relativas (who, which, that).",
  },
  communicationGoal: {
    en: "Describe an apartment and its neighbours, giving extra information with relative clauses.",
    pt: "Descrever um apartamento e seus vizinhos, dando informação extra com orações relativas.",
  },
  prerequisites: {
    en: "First and second conditional.",
    pt: "First and second conditional.",
  },
  newContent: {
    en: "Grammar: relative clauses with who, which, that | Vocabulary: housing and neighbours (12 items) | Expressions: as a matter of fact, from now on, keep me posted",
    pt: "Gramática: orações relativas com who, which, that | Vocabulário: moradia e vizinhos (12 itens) | Expressões: as a matter of fact, from now on, keep me posted",
  },
  reviewContent: {
    en: "First and second conditional; adjectives to describe people and places.",
    pt: "First and second conditional; adjetivos para descrever pessoas e lugares.",
  },
  discover: {
    id: "INTERMEDIATE-U39-DISCOVER",
    warmUp: {
      prompt: {
        en: "Look at the picture. What kind of apartment would you like to live in? Who would you like as a neighbour?",
        pt: "Observe a imagem. Em que tipo de apartamento você gostaria de morar? Quem você gostaria de ter como vizinho?",
      },
      phrases: [
        { en: "What kind of apartment are you looking for?", pt: "Que tipo de apartamento você está procurando?" },
        { en: "Do you know the person who lives next door?", pt: "Você conhece a pessoa que mora ao lado?" },
        { en: "What is the thing that matters most in a new home?", pt: "Qual é a coisa que mais importa em um novo lar?" },
      ],
    },
    context: {
      situation: {
        en: "Yuri just moved into a new building. His friend Camila, who works as a real estate agent, is visiting to see the apartment.",
        pt: "Yuri acabou de se mudar para um prédio novo. Sua amiga Camila, que trabalha como corretora de imóveis, está visitando para ver o apartamento.",
      },
      dialogue: [
        { who: "Camila", en: "This is the apartment that I sent you last month! It's perfect for you.", pt: "Este é o apartamento que eu te mandei mês passado! É perfeito para você." },
        { who: "Yuri", en: "As a matter of fact, the man who lives next door is really friendly.", pt: "Por sinal, o homem que mora ao lado é muito simpático." },
        { who: "Camila", en: "That's the neighbour whose dog barks all night, right?", pt: "Esse é o vizinho cujo cachorro late a noite toda, certo?" },
        { who: "Yuri", en: "No, that's the family that lives on the third floor. This neighbour is quiet.", pt: "Não, essa é a família que mora no terceiro andar. Esse vizinho é tranquilo." },
        { who: "Camila", en: "Good. And the kitchen, which is small, has a great view.", pt: "Ótimo. E a cozinha, que é pequena, tem uma vista ótima." },
        { who: "Yuri", en: "Exactly. From now on, I'm going to have breakfast there every morning.", pt: "Exatamente. A partir de agora, vou tomar café da manhã lá todo dia." },
        { who: "Camila", en: "And the elevator that was broken last week is working again.", pt: "E o elevador que estava quebrado semana passada está funcionando de novo." },
        { who: "Yuri", en: "Perfect. Keep me posted if you find another place like this for a friend of mine.", pt: "Perfeito. Me mantenha informado se você encontrar outro lugar assim para um amigo meu." },
      ],
    },
    vocabulary: [
      { term: "neighbour", pt: "vizinho(a)", ipa: "/ˈneɪbər/", definition: "A person who lives near you.", example: "My neighbour is very friendly.", examplePt: "Meu vizinho é muito simpático." },
      { term: "building", pt: "prédio, edifício", ipa: "/ˈbɪldɪŋ/", definition: "A structure with a roof and walls, like a house or an apartment block.", example: "We live in a tall building.", examplePt: "Nós moramos em um prédio alto." },
      { term: "elevator", pt: "elevador", ipa: "/ˈelɪveɪtər/", definition: "A machine that carries people between floors.", example: "The elevator is broken again.", examplePt: "O elevador quebrou de novo." },
      { term: "view", pt: "vista", ipa: "/vjuː/", definition: "What you can see from a window or a place.", example: "The apartment has a beautiful view.", examplePt: "O apartamento tem uma vista linda." },
      { term: "rent (noun/verb)", pt: "aluguel; alugar", ipa: "/rent/", definition: "The money you pay to live in a place that isn't yours, or the act of paying it.", example: "The rent is high in this neighbourhood.", examplePt: "O aluguel é alto neste bairro." },
      { term: "real estate agent", pt: "corretor(a) de imóveis", ipa: "/riːl ɪˈsteɪt ˈeɪdʒənt/", definition: "A person who helps people buy, sell or rent properties.", example: "The real estate agent showed us three apartments.", examplePt: "A corretora nos mostrou três apartamentos." },
      { term: "quiet", pt: "quieto, tranquilo", ipa: "/ˈkwaɪət/", definition: "Making little or no noise.", example: "This street is very quiet at night.", examplePt: "Essa rua é bem tranquila à noite." },
      { term: "noisy", pt: "barulhento", ipa: "/ˈnɔɪzi/", definition: "Making a lot of noise.", example: "The dog next door is very noisy.", examplePt: "O cachorro ao lado é muito barulhento." },
      { term: "move (in/out)", pt: "mudar-se", ipa: "/muːv/", definition: "To go and live in a new place.", example: "We're moving in next weekend.", examplePt: "Vamos nos mudar no próximo fim de semana." },
      { term: "furnished", pt: "mobiliado", ipa: "/ˈfɜːrnɪʃt/", definition: "Already having furniture inside.", example: "We're looking for a furnished apartment.", examplePt: "Estamos procurando um apartamento mobiliado." },
      { term: "landlord", pt: "senhorio, proprietário", ipa: "/ˈlændlɔːrd/", definition: "A person who owns a property and rents it to others.", example: "The landlord fixed the elevator quickly.", examplePt: "O senhorio consertou o elevador rápido." },
      { term: "floor (level)", pt: "andar", ipa: "/flɔːr/", definition: "A level of a building.", example: "They live on the third floor.", examplePt: "Eles moram no terceiro andar." },
    ],
    expressions: [
      { en: "As a matter of fact…", pt: "Por sinal… / Na verdade…" },
      { en: "From now on…", pt: "A partir de agora…" },
      { en: "Keep me posted.", pt: "Me mantenha informado." },
      { en: "It's perfect for you.", pt: "É perfeito para você." },
      { en: "working again", pt: "funcionando de novo" },
      { en: "a friend of mine", pt: "um amigo meu" },
    ],
    grammar: [
      {
        title: { en: "Relative clauses — who and which", pt: "Orações relativas — who e which" },
        examples: [
          { en: "The man who lives next door is friendly.", pt: "O homem que mora ao lado é simpático." },
          { en: "This is the apartment that I sent you.", pt: "Este é o apartamento que eu te mandei." },
          { en: "The kitchen, which is small, has a great view.", pt: "A cozinha, que é pequena, tem uma vista ótima." },
          { en: "The elevator that was broken is working again.", pt: "O elevador que estava quebrado está funcionando de novo." },
        ],
        rule: {
          en: "Use 'who' for people, 'which' for things, and 'that' for people or things (more informal). The relative clause comes right after the noun it describes and gives extra information without starting a new sentence.",
          pt: "Use 'who' para pessoas, 'which' para coisas e 'that' para pessoas ou coisas (mais informal). A oração relativa vem logo depois do substantivo que ela descreve e dá informação extra sem começar uma nova frase.",
        },
        mistakes: [
          { en: "✗ The man which lives next door. → ✓ The man who lives next door. ('who' for people)", pt: "✗ The man which lives next door. → ✓ The man who lives next door. ('who' para pessoas)" },
          { en: "✗ The apartment who I sent you. → ✓ The apartment that/which I sent you. ('that/which' for things)", pt: "✗ The apartment who I sent you. → ✓ The apartment that/which I sent you. ('that/which' para coisas)" },
        ],
      },
      {
        title: { en: "Relative clauses — whose", pt: "Orações relativas — whose" },
        examples: [
          { en: "That's the neighbour whose dog barks all night.", pt: "Esse é o vizinho cujo cachorro late a noite toda." },
          { en: "I know a family whose apartment has an amazing view.", pt: "Eu conheço uma família cujo apartamento tem uma vista incrível." },
        ],
        rule: {
          en: "Use 'whose' to show possession in a relative clause, for both people and things: whose + noun. It replaces 'his/her/its/their' inside the clause.",
          pt: "Use 'whose' para mostrar posse em uma oração relativa, tanto para pessoas quanto para coisas: whose + substantivo. Substitui 'his/her/its/their' dentro da oração.",
        },
        mistakes: [
          { en: "✗ The neighbour who's dog barks. → ✓ The neighbour whose dog barks. (don't confuse whose/who's)", pt: "✗ The neighbour who's dog barks. → ✓ The neighbour whose dog barks. (não confunda whose/who's)" },
        ],
      },
    ],
    controlledPractice: [
      { id: "i39d-cp1", prompt: { en: "Complete: 'The woman ___ lives upstairs is a doctor.'", pt: "Complete: 'The woman ___ lives upstairs is a doctor.'" }, options: ["which", "who", "whose"], answer: "who", explanation: { en: "'Who' is used for people.", pt: "'Who' é usado para pessoas." } },
      { id: "i39d-cp2", prompt: { en: "Choose the correct sentence.", pt: "Escolha a frase correta." }, options: ["The apartment which I found is great.", "The apartment who I found is great.", "The apartment whose I found is great."], answer: "The apartment which I found is great.", explanation: { en: "'Which' is used for things.", pt: "'Which' é usado para coisas." } },
      { id: "i39d-cp3", prompt: { en: "Complete: 'That's the neighbour ___ dog is very noisy.'", pt: "Complete: 'That's the neighbour ___ dog is very noisy.'" }, options: ["who", "which", "whose"], answer: "whose", explanation: { en: "'Whose' shows possession.", pt: "'Whose' mostra posse." } },
      { id: "i39d-cp4", prompt: { en: "What does 'furnished' mean?", pt: "O que significa 'furnished'?" }, options: ["Already having furniture", "Very noisy", "On the top floor"], answer: "Already having furniture", explanation: { en: "Furnished = mobiliado.", pt: "Furnished = mobiliado." } },
      { id: "i39d-cp5", prompt: { en: "Complete: 'This is the building ___ I live in.'", pt: "Complete: 'This is the building ___ I live in.'" }, options: ["who", "that", "whose"], answer: "that", explanation: { en: "'That' can replace 'which' informally.", pt: "'That' pode substituir 'which' informalmente." } },
    ],
    input: {
      kind: "reading",
      title: { en: "An online apartment listing", pt: "Um anúncio de apartamento on-line" },
      lines: [
        { en: "This is the furnished apartment that everyone is talking about!", pt: "Este é o apartamento mobiliado do qual todo mundo está falando!" },
        { en: "It's on the fifth floor, in a building which has a new elevator.", pt: "Fica no quinto andar, em um prédio que tem um elevador novo." },
        { en: "The kitchen, which has a beautiful view, is the best part of the apartment.", pt: "A cozinha, que tem uma vista linda, é a melhor parte do apartamento." },
        { en: "The landlord, whose family lived here for years, keeps the building very clean.", pt: "O senhorio, cuja família morou aqui por anos, mantém o prédio bem limpo." },
        { en: "As a matter of fact, the neighbours who live here are extremely quiet.", pt: "Por sinal, os vizinhos que moram aqui são extremamente quietos." },
      ],
      questions: [
        { id: "i39d-iq1", prompt: { en: "What floor is the apartment on?", pt: "Em que andar fica o apartamento?" }, options: ["The fifth floor", "The third floor", "The ground floor"], answer: "The fifth floor", explanation: { en: "'It's on the fifth floor.'", pt: "'Fica no quinto andar.'" } },
        { id: "i39d-iq2", prompt: { en: "What is the best part of the apartment?", pt: "Qual é a melhor parte do apartamento?" }, options: ["The kitchen", "The elevator", "The bedroom"], answer: "The kitchen", explanation: { en: "'The kitchen... is the best part of the apartment.'", pt: "'A cozinha... é a melhor parte do apartamento.'" } },
        { id: "i39d-iq3", prompt: { en: "How are the neighbours described?", pt: "Como os vizinhos são descritos?" }, options: ["Extremely quiet", "Very noisy", "Not friendly"], answer: "Extremely quiet", explanation: { en: "'The neighbours who live here are extremely quiet.'", pt: "'Os vizinhos que moram aqui são extremamente quietos.'" } },
      ],
    },
    quickCheck: [
      { id: "i39d-qc1", prompt: { en: "What does 'landlord' mean?", pt: "O que significa 'landlord'?" }, options: ["A person who owns and rents a property", "A neighbour", "A real estate agent"], answer: "A person who owns and rents a property", explanation: { en: "Landlord = senhorio.", pt: "Landlord = senhorio." } },
      { id: "i39d-qc2", prompt: { en: "Choose the correct relative pronoun for things.", pt: "Escolha o pronome relativo correto para coisas." }, options: ["which", "who", "whose"], answer: "which", explanation: { en: "'Which' is used for things.", pt: "'Which' é usado para coisas." } },
      { id: "i39d-qc3", prompt: { en: "What does 'from now on' mean?", pt: "O que significa 'from now on'?" }, options: ["Starting from this moment", "A long time ago", "Never again"], answer: "Starting from this moment", explanation: { en: "'From now on' = a partir de agora.", pt: "'From now on' = a partir de agora." } },
      { id: "i39d-qc4", prompt: { en: "Complete: 'The dog ___ barks all night belongs to my neighbour.'", pt: "Complete: 'The dog ___ barks all night belongs to my neighbour.'" }, options: ["that", "whose", "whom"], answer: "that", explanation: { en: "'That' can be used for animals/things.", pt: "'That' pode ser usado para animais/coisas." } },
    ],
  },
  communicate: {
    id: "INTERMEDIATE-U39-COMMUNICATE",
    review: [
      { en: "The man who lives next door is friendly. — relative clause with 'who'.", pt: "O homem que mora ao lado é simpático. — oração relativa com 'who'." },
      { en: "The kitchen, which is small, has a great view. — relative clause with 'which'.", pt: "A cozinha, que é pequena, tem uma vista ótima. — oração relativa com 'which'." },
      { en: "That's the neighbour whose dog barks all night. — relative clause with 'whose'.", pt: "Esse é o vizinho cujo cachorro late a noite toda. — oração relativa com 'whose'." },
      { en: "As a matter of fact, from now on, keep me posted.", pt: "Por sinal, a partir de agora, me mantenha informado." },
    ],
    activities: [
      {
        id: "i39c-a1",
        title: { en: "Describe Your Neighbourhood", pt: "Descreva Seu Bairro" },
        instruction: { en: "Describe a neighbour or a place near your home using a relative clause.", pt: "Descreva um vizinho ou um lugar perto da sua casa usando uma oração relativa." },
        phrases: [
          { en: "I have a neighbour who plays music every night.", pt: "Eu tenho um vizinho que toca música toda noite." },
          { en: "There's a bakery that opens at six in the morning.", pt: "Tem uma padaria que abre às seis da manhã." },
          { en: "My street, which is very quiet, has beautiful trees.", pt: "Minha rua, que é bem tranquila, tem árvores lindas." },
        ],
        check: [
          { id: "i39c-a1q1", prompt: { en: "Which sentence uses a relative clause correctly?", pt: "Qual frase usa uma oração relativa corretamente?" }, options: ["I have a neighbour who plays music.", "I have a neighbour which plays music.", "I have a neighbour whose plays music."], answer: "I have a neighbour who plays music.", explanation: { en: "'Who' is used for people.", pt: "'Who' é usado para pessoas." } },
          { id: "i39c-a1q2", prompt: { en: "Complete: 'The bakery ___ opens at six is close to my house.'", pt: "Complete: 'The bakery ___ opens at six is close to my house.'" }, options: ["that", "who", "whose"], answer: "that", explanation: { en: "'That' can replace 'which' for things.", pt: "'That' pode substituir 'which' para coisas." } },
        ],
      },
      {
        id: "i39c-a2",
        title: { en: "Apartment Hunting", pt: "Procurando Apartamento" },
        instruction: { en: "Describe your ideal apartment, including a relative clause about a neighbour or a room.", pt: "Descreva seu apartamento ideal, incluindo uma oração relativa sobre um vizinho ou um cômodo." },
        phrases: [
          { en: "I'd like an apartment which has a big kitchen.", pt: "Eu gostaria de um apartamento que tenha uma cozinha grande." },
          { en: "I want a building that has a working elevator.", pt: "Eu quero um prédio que tenha um elevador funcionando." },
          { en: "As a matter of fact, I prefer a quiet building.", pt: "Por sinal, eu prefiro um prédio tranquilo." },
        ],
        check: [
          { id: "i39c-a2q1", prompt: { en: "Complete: 'I want a building ___ has a working elevator.'", pt: "Complete: 'I want a building ___ has a working elevator.'" }, options: ["that", "who", "whose"], answer: "that", explanation: { en: "'That' is used for things.", pt: "'That' é usado para coisas." } },
          { id: "i39c-a2q2", prompt: { en: "What does 'as a matter of fact' mean?", pt: "O que significa 'as a matter of fact'?" }, options: ["Actually / In fact", "Never", "By chance"], answer: "Actually / In fact", explanation: { en: "'As a matter of fact' = na verdade / por sinal.", pt: "'As a matter of fact' = na verdade / por sinal." } },
        ],
      },
    ],
    challenge: {
      id: "i39c-ch1",
      title: { en: "My Building", pt: "Meu Prédio" },
      instruction: { en: "Describe your building or a friend's building using three sentences with relative clauses.", pt: "Descreva seu prédio ou o prédio de um amigo usando três frases com orações relativas." },
      phrases: [
        { en: "I live in a building that has twelve floors.", pt: "Eu moro em um prédio que tem doze andares." },
        { en: "My neighbour, who is a musician, is very quiet during the day.", pt: "Meu vizinho, que é músico, fica bem quieto durante o dia." },
        { en: "The landlord, whose office is downstairs, is always helpful.", pt: "O senhorio, cujo escritório fica no térreo, sempre ajuda." },
      ],
      check: [
        { id: "i39c-ch1q1", prompt: { en: "Which is a correct relative clause with 'who'?", pt: "Qual é uma oração relativa correta com 'who'?" }, options: ["My neighbour, who is a musician, is quiet.", "My neighbour, which is a musician, is quiet.", "My neighbour, whose is a musician, is quiet."], answer: "My neighbour, who is a musician, is quiet.", explanation: { en: "'Who' is used for people.", pt: "'Who' é usado para pessoas." } },
        { id: "i39c-ch1q2", prompt: { en: "Complete: 'The landlord, ___ office is downstairs, is helpful.'", pt: "Complete: 'The landlord, ___ office is downstairs, is helpful.'" }, options: ["whose", "who", "which"], answer: "whose", explanation: { en: "'Whose' shows possession.", pt: "'Whose' mostra posse." } },
      ],
    },
    lessonReview: {
      summary: { en: "You learned to describe people and things with relative clauses (who, which, that, whose) and vocabulary about housing and neighbours.", pt: "Você aprendeu a descrever pessoas e coisas com orações relativas (who, which, that, whose) e vocabulário sobre moradia e vizinhos." },
      canDo: [
        { en: "I can add extra information about a person or thing with a relative clause.", pt: "Eu consigo acrescentar informação extra sobre uma pessoa ou coisa com uma oração relativa." },
        { en: "I can use 'whose' to show possession.", pt: "Eu consigo usar 'whose' para mostrar posse." },
      ],
      next: { en: "Next, you'll review conditionals and learn 'wish' to talk about regrets.", pt: "A seguir, você vai revisar os conditionals e aprender 'wish' para falar de arrependimentos." },
    },
  },
};

export const INTERMEDIATE_U40: CourseUnit = {
  code: "INTERMEDIATE-U40",
  number: 40,
  title: "I Wish I Had More Time — What would you change about today?",
  titlePt: "Eu Queria Ter Mais Tempo — O que você mudaria sobre hoje?",
  cefr: "B1",
  objective: {
    en: "Use 'wish' to talk about present regrets and review conditionals and relative clauses.",
    pt: "Usar 'wish' para falar de arrependimentos no presente e revisar conditionals e orações relativas.",
  },
  communicationGoal: {
    en: "Reflect on a farewell party for a friend: express regrets, plans and descriptions using everything learned in the course.",
    pt: "Refletir sobre uma festa de despedida de um amigo: expressar arrependimentos, planos e descrições usando tudo o que foi aprendido no curso.",
  },
  prerequisites: {
    en: "First conditional, second conditional, relative clauses.",
    pt: "First conditional, second conditional, orações relativas.",
  },
  newContent: {
    en: "Grammar: 'wish' + simple past for present regrets | Vocabulary: farewells and feelings (12 items) | Expressions: better late than never, no news is good news, so far so good",
    pt: "Gramática: 'wish' + passado simples para arrependimentos no presente | Vocabulário: despedidas e sentimentos (12 itens) | Expressões: better late than never, no news is good news, so far so good",
  },
  reviewContent: {
    en: "First conditional, second conditional and relative clauses (who, which, that, whose) from the whole course.",
    pt: "First conditional, second conditional e orações relativas (who, which, that, whose) de todo o curso.",
  },
  discover: {
    id: "INTERMEDIATE-U40-DISCOVER",
    warmUp: {
      prompt: {
        en: "Look at the picture. Is there anything you wish were different about today? What would you change?",
        pt: "Observe a imagem. Existe algo que você gostaria que fosse diferente hoje? O que você mudaria?",
      },
      phrases: [
        { en: "Do you wish you had more free time?", pt: "Você gostaria de ter mais tempo livre?" },
        { en: "Is there anything you wish you knew how to do?", pt: "Existe algo que você gostaria de saber fazer?" },
        { en: "What would you change about your daily routine?", pt: "O que você mudaria na sua rotina diária?" },
      ],
    },
    context: {
      situation: {
        en: "Bianca is organizing a farewell party for Yuri, who is moving abroad. Camila and Diego help her plan the last details.",
        pt: "Bianca está organizando uma festa de despedida para o Yuri, que vai se mudar para o exterior. Camila e Diego ajudam a planejar os últimos detalhes.",
      },
      dialogue: [
        { who: "Bianca", en: "I wish I had more time to plan this party. It's tomorrow already!", pt: "Eu queria ter mais tempo para planejar essa festa. Já é amanhã!" },
        { who: "Camila", en: "Don't worry. If everyone brings something, we'll have plenty of food.", pt: "Não se preocupe. Se todo mundo trouxer algo, vamos ter comida de sobra." },
        { who: "Diego", en: "So far so good. The friend who has the biggest apartment offered to host it.", pt: "Até agora, tudo bem. O amigo que tem o apartamento maior se ofereceu para receber a festa." },
        { who: "Bianca", en: "Better late than never — I finally sent the invitations this morning.", pt: "Antes tarde do que nunca — eu finalmente mandei os convites hoje de manhã." },
        { who: "Camila", en: "I wish Yuri didn't have to leave. If he stayed, we'd see him every weekend.", pt: "Eu queria que o Yuri não tivesse que ir embora. Se ele ficasse, a gente o veria toda semana." },
        { who: "Diego", en: "I know. But if the new job goes well, he'll visit us often.", pt: "Eu sei. Mas se o novo emprego der certo, ele vai nos visitar com frequência." },
        { who: "Bianca", en: "True. No news is good news, right? Let's just enjoy the party.", pt: "Verdade. Notícia boa é notícia nenhuma, né? Vamos só aproveitar a festa." },
        { who: "Camila", en: "Exactly. And if this course taught us anything, it's that things always work out.", pt: "Exatamente. E se esse curso nos ensinou algo, é que as coisas sempre dão certo." },
      ],
    },
    vocabulary: [
      { term: "farewell", pt: "despedida", ipa: "/ferˈwel/", definition: "The act of saying goodbye, often before a long trip.", example: "We had a farewell party for Yuri.", examplePt: "Fizemos uma festa de despedida para o Yuri." },
      { term: "regret", pt: "arrependimento; arrepender-se", ipa: "/rɪˈɡret/", definition: "A feeling of sadness about something you did or didn't do.", example: "I have no regrets about this trip.", examplePt: "Não tenho arrependimentos sobre essa viagem." },
      { term: "invitation", pt: "convite", ipa: "/ˌɪnvɪˈteɪʃən/", definition: "A request for someone to come to an event.", example: "I sent the invitations this morning.", examplePt: "Mandei os convites hoje de manhã." },
      { term: "host (verb)", pt: "receber, sediar", ipa: "/hoʊst/", definition: "To organize an event at your place.", example: "He offered to host the party.", examplePt: "Ele se ofereceu para receber a festa." },
      { term: "miss (someone)", pt: "sentir falta de (alguém)", ipa: "/mɪs/", definition: "To feel sad because someone isn't with you.", example: "We're going to miss you a lot.", examplePt: "Vamos sentir muita sua falta." },
      { term: "grateful", pt: "grato", ipa: "/ˈɡreɪtfəl/", definition: "Feeling thankful for something.", example: "I'm grateful for this course.", examplePt: "Sou grato por este curso." },
      { term: "achievement", pt: "conquista", ipa: "/əˈtʃiːvmənt/", definition: "Something you did well through effort.", example: "Finishing this course is a great achievement.", examplePt: "Terminar este curso é uma grande conquista." },
      { term: "plenty of", pt: "bastante, de sobra", ipa: "/ˈplenti ʌv/", definition: "A large amount of something.", example: "We have plenty of food for the party.", examplePt: "Temos comida de sobra para a festa." },
      { term: "keep in touch", pt: "manter contato", ipa: "/kiːp ɪn tʌtʃ/", definition: "To continue communicating with someone.", example: "Let's keep in touch after you move.", examplePt: "Vamos manter contato depois que você se mudar." },
      { term: "proud", pt: "orgulhoso", ipa: "/praʊd/", definition: "Feeling pleased about an achievement.", example: "I'm proud of how much you've learned.", examplePt: "Estou orgulhoso do quanto você aprendeu." },
      { term: "goodbye party", pt: "festa de despedida", ipa: "/ɡʊdˈbaɪ ˈpɑːrti/", definition: "A party organized before someone leaves.", example: "We're planning a goodbye party for him.", examplePt: "Estamos planejando uma festa de despedida para ele." },
      { term: "opportunity (new)", pt: "oportunidade (nova)", ipa: "/ˌɒpərˈtuːnəti/", definition: "A good chance to do something new.", example: "Moving abroad is a great opportunity for him.", examplePt: "Se mudar para o exterior é uma ótima oportunidade para ele." },
    ],
    expressions: [
      { en: "Better late than never.", pt: "Antes tarde do que nunca." },
      { en: "No news is good news.", pt: "Notícia boa é notícia nenhuma." },
      { en: "So far so good.", pt: "Até agora, tudo bem." },
      { en: "things always work out", pt: "as coisas sempre dão certo" },
      { en: "plenty of food", pt: "comida de sobra" },
      { en: "I wish I had more time.", pt: "Eu queria ter mais tempo." },
    ],
    grammar: [
      {
        title: { en: "Wish + simple past — present regrets", pt: "Wish + passado simples — arrependimentos no presente" },
        examples: [
          { en: "I wish I had more time to plan this party.", pt: "Eu queria ter mais tempo para planejar essa festa." },
          { en: "I wish Yuri didn't have to leave.", pt: "Eu queria que o Yuri não tivesse que ir embora." },
          { en: "She wishes she lived closer to her friends.", pt: "Ela gostaria de morar mais perto dos amigos." },
          { en: "I wish I knew what to say.", pt: "Eu queria saber o que dizer." },
        ],
        rule: {
          en: "Use 'wish + simple past' to express a regret or a wish about the present that is different from reality. For 'be', formal style uses 'were' for all subjects: I wish I were there. This is similar in form to the second conditional.",
          pt: "Use 'wish + passado simples' para expressar um arrependimento ou um desejo sobre o presente diferente da realidade. Para 'be', o estilo formal usa 'were' para todos os sujeitos: I wish I were there. Isso é parecido em forma com o second conditional.",
        },
        mistakes: [
          { en: "✗ I wish I have more time. → ✓ I wish I had more time. (simple past after wish)", pt: "✗ I wish I have more time. → ✓ I wish I had more time. (passado simples depois de wish)" },
          { en: "✗ I wish I was there. → ✓ I wish I were there. (formal 'were')", pt: "✗ I wish I was there. → ✓ I wish I were there. ('were' formal)" },
        ],
      },
      {
        title: { en: "Course review: conditionals and relative clauses", pt: "Revisão do curso: conditionals e orações relativas" },
        examples: [
          { en: "If everyone brings something, we'll have plenty of food. (1st conditional)", pt: "Se todo mundo trouxer algo, vamos ter comida de sobra. (1st conditional)" },
          { en: "If he stayed, we'd see him every weekend. (2nd conditional)", pt: "Se ele ficasse, a gente o veria toda semana. (2nd conditional)" },
          { en: "The friend who has the biggest apartment offered to host it. (relative clause)", pt: "O amigo que tem o apartamento maior se ofereceu para receber a festa. (oração relativa)" },
        ],
        rule: {
          en: "First conditional talks about real future possibilities (if + present, will + base verb). Second conditional talks about imaginary situations (if + simple past, would + base verb). Relative clauses (who/which/that/whose) add extra information about a noun.",
          pt: "First conditional fala de possibilidades reais no futuro (if + presente, will + verbo base). Second conditional fala de situações imaginárias (if + passado simples, would + verbo base). Orações relativas (who/which/that/whose) acrescentam informação extra sobre um substantivo.",
        },
        mistakes: [
          { en: "✗ If he stays, we'd see him more. → ✓ If he stayed, we'd see him more. (don't mix conditionals)", pt: "✗ If he stays, we'd see him more. → ✓ If he stayed, we'd see him more. (não misture os conditionals)" },
        ],
      },
    ],
    controlledPractice: [
      { id: "i40d-cp1", prompt: { en: "Complete: 'I wish I ___ more time today.'", pt: "Complete: 'I wish I ___ more time today.'" }, options: ["have", "had", "will have"], answer: "had", explanation: { en: "Wish + simple past for present regrets.", pt: "Wish + passado simples para arrependimentos no presente." } },
      { id: "i40d-cp2", prompt: { en: "Choose the correct sentence.", pt: "Escolha a frase correta." }, options: ["I wish I were there.", "I wish I am there.", "I wish I will be there."], answer: "I wish I were there.", explanation: { en: "Formal 'were' after 'wish' with 'be'.", pt: "'Were' formal depois de 'wish' com 'be'." } },
      { id: "i40d-cp3", prompt: { en: "Is this sentence 1st or 2nd conditional? 'If it rains, we'll stay inside.'", pt: "Essa frase é 1st ou 2nd conditional? 'If it rains, we'll stay inside.'" }, options: ["1st conditional", "2nd conditional", "Neither"], answer: "1st conditional", explanation: { en: "It talks about a real future possibility.", pt: "Fala de uma possibilidade real no futuro." } },
      { id: "i40d-cp4", prompt: { en: "Complete: 'The friend ___ hosted the party is very kind.'", pt: "Complete: 'The friend ___ hosted the party is very kind.'" }, options: ["who", "which", "whose"], answer: "who", explanation: { en: "'Who' is used for people.", pt: "'Who' é usado para pessoas." } },
      { id: "i40d-cp5", prompt: { en: "What does 'better late than never' mean?", pt: "O que significa 'better late than never'?" }, options: ["It's good to do something even if it's late", "You should never be late", "Time doesn't matter"], answer: "It's good to do something even if it's late", explanation: { en: "It's an idiom about finally doing something.", pt: "É uma expressão sobre finalmente fazer algo." } },
    ],
    input: {
      kind: "listening",
      title: { en: "A farewell speech at the party", pt: "Um discurso de despedida na festa" },
      lines: [
        { en: "Thank you all for coming. I wish I had the right words to say goodbye.", pt: "Obrigado a todos por virem. Eu queria ter as palavras certas para me despedir." },
        { en: "This course, which changed the way I see English, brought me amazing friends.", pt: "Este curso, que mudou a forma como eu vejo o inglês, me trouxe amigos incríveis." },
        { en: "If I hadn't joined this class, I wouldn't have met the people who are here tonight.", pt: "Se eu não tivesse entrado nessa turma, eu não teria conhecido as pessoas que estão aqui hoje." },
        { en: "So far so good, and I'm proud of everything we achieved together.", pt: "Até agora, tudo bem, e estou orgulhoso de tudo que conquistamos juntos." },
        { en: "Let's keep in touch. And remember: no news is good news!", pt: "Vamos manter contato. E lembrem-se: notícia boa é notícia nenhuma!" },
      ],
      questions: [
        { id: "i40d-iq1", prompt: { en: "What does the speaker wish for?", pt: "O que o orador deseja?" }, options: ["The right words to say goodbye", "More food at the party", "A bigger apartment"], answer: "The right words to say goodbye", explanation: { en: "'I wish I had the right words to say goodbye.'", pt: "'Eu queria ter as palavras certas para me despedir.'" } },
        { id: "i40d-iq2", prompt: { en: "What did the course bring the speaker?", pt: "O que o curso trouxe para o orador?" }, options: ["Amazing friends", "A new job", "A new apartment"], answer: "Amazing friends", explanation: { en: "'This course... brought me amazing friends.'", pt: "'Este curso... me trouxe amigos incríveis.'" } },
        { id: "i40d-iq3", prompt: { en: "What does the speaker ask everyone to do?", pt: "O que o orador pede a todos que façam?" }, options: ["Keep in touch", "Move abroad too", "Plan another party"], answer: "Keep in touch", explanation: { en: "'Let's keep in touch.'", pt: "'Vamos manter contato.'" } },
      ],
    },
    quickCheck: [
      { id: "i40d-qc1", prompt: { en: "What does 'farewell' mean?", pt: "O que significa 'farewell'?" }, options: ["The act of saying goodbye", "A type of party food", "An achievement"], answer: "The act of saying goodbye", explanation: { en: "Farewell = despedida.", pt: "Farewell = despedida." } },
      { id: "i40d-qc2", prompt: { en: "Choose the correct 'wish' sentence.", pt: "Escolha a frase correta com 'wish'." }, options: ["I wish I had more time.", "I wish I have more time.", "I wish I will have more time."], answer: "I wish I had more time.", explanation: { en: "Wish + simple past.", pt: "Wish + passado simples." } },
      { id: "i40d-qc3", prompt: { en: "What does 'so far so good' mean?", pt: "O que significa 'so far so good'?" }, options: ["Everything is fine up to now", "Nothing is working", "It's too late"], answer: "Everything is fine up to now", explanation: { en: "'So far so good' = até agora, tudo bem.", pt: "'So far so good' = até agora, tudo bem." } },
      { id: "i40d-qc4", prompt: { en: "Complete: 'The apartment ___ has the best view is Yuri's.'", pt: "Complete: 'The apartment ___ has the best view is Yuri's.'" }, options: ["that", "who", "whose"], answer: "that", explanation: { en: "'That' can replace 'which' for things.", pt: "'That' pode substituir 'which' para coisas." } },
    ],
  },
  communicate: {
    id: "INTERMEDIATE-U40-COMMUNICATE",
    review: [
      { en: "I wish I had more time to plan this party. — wish + simple past.", pt: "Eu queria ter mais tempo para planejar essa festa. — wish + passado simples." },
      { en: "If everyone brings something, we'll have plenty of food. — 1st conditional.", pt: "Se todo mundo trouxer algo, vamos ter comida de sobra. — 1st conditional." },
      { en: "If he stayed, we'd see him every weekend. — 2nd conditional.", pt: "Se ele ficasse, a gente o veria toda semana. — 2nd conditional." },
      { en: "The friend who has the biggest apartment offered to host it. — relative clause.", pt: "O amigo que tem o apartamento maior se ofereceu para receber a festa. — oração relativa." },
    ],
    activities: [
      {
        id: "i40c-a1",
        title: { en: "Something I Wish Were Different", pt: "Algo Que Eu Gostaria Que Fosse Diferente" },
        instruction: { en: "Say two things you wish were different in your life right now.", pt: "Diga duas coisas que você gostaria que fossem diferentes na sua vida agora." },
        phrases: [
          { en: "I wish I had more free time.", pt: "Eu queria ter mais tempo livre." },
          { en: "I wish I lived closer to my family.", pt: "Eu queria morar mais perto da minha família." },
          { en: "I wish I knew how to cook better.", pt: "Eu queria saber cozinhar melhor." },
        ],
        check: [
          { id: "i40c-a1q1", prompt: { en: "Which sentence uses 'wish' correctly?", pt: "Qual frase usa 'wish' corretamente?" }, options: ["I wish I had more free time.", "I wish I have more free time.", "I wish I will have more free time."], answer: "I wish I had more free time.", explanation: { en: "Wish + simple past.", pt: "Wish + passado simples." } },
          { id: "i40c-a1q2", prompt: { en: "Complete: 'I wish I ___ how to cook better.'", pt: "Complete: 'I wish I ___ how to cook better.'" }, options: ["knew", "know", "will know"], answer: "knew", explanation: { en: "Wish + simple past for present regrets.", pt: "Wish + passado simples para arrependimentos no presente." } },
        ],
      },
      {
        id: "i40c-a2",
        title: { en: "Course Wrap-Up", pt: "Encerramento do Curso" },
        instruction: { en: "Use a relative clause and a conditional to talk about what you learned in this course.", pt: "Use uma oração relativa e um conditional para falar sobre o que você aprendeu neste curso." },
        phrases: [
          { en: "This course, which was challenging, taught me a lot.", pt: "Este curso, que foi desafiador, me ensinou muito." },
          { en: "If I keep practicing, I'll speak English fluently.", pt: "Se eu continuar praticando, vou falar inglês fluentemente." },
          { en: "I'm grateful for the friends who studied with me.", pt: "Sou grato pelos amigos que estudaram comigo." },
        ],
        check: [
          { id: "i40c-a2q1", prompt: { en: "Complete: 'This course, ___ was challenging, taught me a lot.'", pt: "Complete: 'This course, ___ was challenging, taught me a lot.'" }, options: ["which", "who", "whose"], answer: "which", explanation: { en: "'Which' is used for things.", pt: "'Which' é usado para coisas." } },
          { id: "i40c-a2q2", prompt: { en: "Complete: 'If I keep practicing, I ___ fluently.'", pt: "Complete: 'If I keep practicing, I ___ fluently.'" }, options: ["'ll speak", "speak", "spoke"], answer: "'ll speak", explanation: { en: "1st conditional: will + base verb.", pt: "1st conditional: will + verbo base." } },
        ],
      },
    ],
    challenge: {
      id: "i40c-ch1",
      title: { en: "My Farewell Message", pt: "Minha Mensagem de Despedida" },
      instruction: { en: "Give a short farewell message using 'wish', a conditional, and a relative clause.", pt: "Faça uma pequena mensagem de despedida usando 'wish', um conditional e uma oração relativa." },
      phrases: [
        { en: "I wish we had more time together.", pt: "Eu queria que a gente tivesse mais tempo juntos." },
        { en: "If you need anything, I'll be here for you.", pt: "Se você precisar de algo, eu estarei aqui para você." },
        { en: "You are the kind of friend who always helps.", pt: "Você é o tipo de amigo que sempre ajuda." },
      ],
      check: [
        { id: "i40c-ch1q1", prompt: { en: "Which sentence uses a relative clause correctly?", pt: "Qual frase usa uma oração relativa corretamente?" }, options: ["You are the kind of friend who always helps.", "You are the kind of friend which always helps.", "You are the kind of friend whose always helps."], answer: "You are the kind of friend who always helps.", explanation: { en: "'Who' is used for people.", pt: "'Who' é usado para pessoas." } },
        { id: "i40c-ch1q2", prompt: { en: "Complete: 'I wish we ___ more time together.'", pt: "Complete: 'I wish we ___ more time together.'" }, options: ["had", "have", "will have"], answer: "had", explanation: { en: "Wish + simple past.", pt: "Wish + passado simples." } },
      ],
    },
    lessonReview: {
      summary: { en: "You learned to express present regrets with 'wish', and reviewed conditionals and relative clauses from the whole course.", pt: "Você aprendeu a expressar arrependimentos no presente com 'wish', e revisou conditionals e orações relativas de todo o curso." },
      canDo: [
        { en: "I can say what I wish were different using 'wish + simple past'.", pt: "Eu consigo dizer o que eu gostaria que fosse diferente usando 'wish + passado simples'." },
        { en: "I can combine conditionals and relative clauses to talk about my life and plans.", pt: "Eu consigo combinar conditionals e orações relativas para falar da minha vida e dos meus planos." },
      ],
      next: { en: "Congratulations on completing the Intermediate course! Keep practicing everything you've learned.", pt: "Parabéns por concluir o curso Intermediate! Continue praticando tudo o que você aprendeu." },
    },
  },
};
