import type { CourseUnit } from "./types";

/**
 * Intermediate — Unit 2 (New Skills). Conteúdo autoral Speak2Co.
 * Foco: "learn how to" + verbo, preposições de lugar behind/in front of, e
 * "How old...?" com idade e duração usando "in" (in + período de tempo).
 * Personagens originais: Marina, Theo e Rafa, amigos que dividem apartamento.
 */
export const INTERMEDIATE_U02: CourseUnit = {
  code: "INTERMEDIATE-U02",
  number: 2,
  title: "New Skills — How old were you when you learned?",
  titlePt: "Novas Habilidades — Quantos anos você tinha quando aprendeu?",
  cefr: "B1",
  objective: {
    en: "Talk about skills you know how to do and are learning to do, describe positions with 'behind' and 'in front of', and ask/answer 'How old...?' using 'in' for how long something took.",
    pt: "Falar sobre habilidades que você sabe fazer e está aprendendo a fazer, descrever posições com 'behind' e 'in front of', e perguntar/responder 'How old...?' usando 'in' para quanto tempo algo levou.",
  },
  communicationGoal: {
    en: "Describe a new skill you are learning: what you know how to do, where things are in the room, and how old you were or how long it took to learn.",
    pt: "Descrever uma nova habilidade que você está aprendendo: o que você sabe fazer, onde as coisas estão na sala, e quantos anos você tinha ou quanto tempo levou para aprender.",
  },
  prerequisites: {
    en: "Intermediate Unit 1: 'be going to' for plans and predictions, weather vocabulary, simple past of do/pay/put.",
    pt: "Intermediate Unidade 1: 'be going to' para planos e previsões, vocabulário de clima, passado simples de do/pay/put.",
  },
  newContent: {
    en: "Grammar: 'know how to' / 'learn how to' + base verb + prepositions of place 'behind' and 'in front of' + 'How old...?' and 'in' for duration | Vocabulary: learning and skills (12 items) | Expressions: encouragement while learning",
    pt: "Gramática: 'know how to' / 'learn how to' + verbo base + preposições de lugar 'behind' e 'in front of' + 'How old...?' e 'in' para duração | Vocabulário: aprendizagem e habilidades (12 itens) | Expressões: incentivo durante o aprendizado",
  },
  reviewContent: {
    en: "Simple past (regular and irregular verbs) and 'be going to' for plans, from Unit 1.",
    pt: "Passado simples (verbos regulares e irregulares) e 'be going to' para planos, da Unidade 1.",
  },
  discover: {
    id: "INTERMEDIATE-U02-DISCOVER",
    warmUp: {
      prompt: {
        en: "Look at the picture. What are these friends learning to do? What instrument is behind the other one?",
        pt: "Observe a imagem. O que esses amigos estão aprendendo a fazer? Que instrumento está atrás do outro?",
      },
      phrases: [
        { en: "What new skill are you learning right now?", pt: "Que nova habilidade você está aprendendo agora?" },
        { en: "Do you know how to play any instrument?", pt: "Você sabe tocar algum instrumento?" },
        { en: "How old were you when you learned to ride a bike?", pt: "Quantos anos você tinha quando aprendeu a andar de bicicleta?" },
      ],
    },
    context: {
      situation: {
        en: "Marina, Theo and Rafa turned their living room into a small music corner. Theo is learning the guitar, and Rafa is learning the piano.",
        pt: "Marina, Theo e Rafa transformaram a sala em um pequeno cantinho de música. Theo está aprendendo violão, e Rafa está aprendendo piano.",
      },
      dialogue: [
        { who: "Marina", en: "Wow, you two look so focused! Do you know how to play that song yet?", pt: "Nossa, vocês dois parecem tão concentrados! Já sabem tocar essa música?" },
        { who: "Theo", en: "Not yet, but I'm learning how to play it. Little by little!", pt: "Ainda não, mas estou aprendendo a tocá-la. Aos poucos!" },
        { who: "Rafa", en: "I only started last month, but I already know how to play a few chords.", pt: "Só comecei mês passado, mas já sei tocar alguns acordes." },
        { who: "Marina", en: "That's great! How old were you when you learned how to play piano the first time?", pt: "Que ótimo! Quantos anos você tinha quando aprendeu a tocar piano pela primeira vez?" },
        { who: "Rafa", en: "I was seven. My sister sat behind me and showed me the notes.", pt: "Eu tinha sete anos. Minha irmã sentava atrás de mim e me mostrava as notas." },
        { who: "Theo", en: "And where's your guitar teacher? I thought she was in front of you during lessons.", pt: "E onde está sua professora de violão? Achei que ela ficava na sua frente durante as aulas." },
        { who: "Rafa", en: "She usually sits in front of me, but today she's behind the piano, watching Theo.", pt: "Ela normalmente senta na minha frente, mas hoje está atrás do piano, olhando o Theo." },
        { who: "Marina", en: "I want to learn how to play too! How long did it take you to learn the basics?", pt: "Eu também quero aprender a tocar! Quanto tempo levou para você aprender o básico?" },
        { who: "Theo", en: "I learned the basics in three months. Practice makes it faster!", pt: "Aprendi o básico em três meses. A prática deixa mais rápido!" },
      ],
    },
    vocabulary: [
      { term: "instrument", pt: "instrumento", ipa: "/ˈɪnstrəmənt/", definition: "An object used to play music, like a guitar or piano.", example: "The guitar is my favorite instrument.", examplePt: "O violão é meu instrumento favorito." },
      { term: "lesson", pt: "aula", ipa: "/ˈlesn/", definition: "A period of time when someone teaches or learns something.", example: "I have a piano lesson every Tuesday.", examplePt: "Tenho aula de piano toda terça-feira." },
      { term: "teacher", pt: "professor(a)", ipa: "/ˈtiːtʃər/", definition: "A person who teaches a skill or subject.", example: "My guitar teacher is very patient.", examplePt: "Minha professora de violão é muito paciente." },
      { term: "skill", pt: "habilidade", ipa: "/skɪl/", definition: "The ability to do something well, usually learned with practice.", example: "Playing piano is a skill you can learn at any age.", examplePt: "Tocar piano é uma habilidade que você pode aprender em qualquer idade." },
      { term: "beginner", pt: "iniciante", ipa: "/bɪˈɡɪnər/", definition: "Someone who is just starting to learn something.", example: "This class is perfect for beginners.", examplePt: "Esta aula é perfeita para iniciantes." },
      { term: "talented", pt: "talentoso", ipa: "/ˈtæləntɪd/", definition: "Having a natural ability to do something well.", example: "Rafa is really talented at music.", examplePt: "O Rafa é realmente talentoso em música." },
      { term: "practice", pt: "praticar; prática", ipa: "/ˈpræktɪs/", definition: "To do something regularly to improve a skill.", example: "You need to practice every day to improve.", examplePt: "Você precisa praticar todo dia para melhorar." },
      { term: "mistake", pt: "erro", ipa: "/mɪˈsteɪk/", definition: "Something done wrong, often part of learning.", example: "Don't worry about mistakes. They help you learn.", examplePt: "Não se preocupe com erros. Eles ajudam você a aprender." },
      { term: "patience", pt: "paciência", ipa: "/ˈpeɪʃəns/", definition: "The ability to stay calm while learning or waiting.", example: "Learning a new skill takes patience.", examplePt: "Aprender uma nova habilidade exige paciência." },
      { term: "chord", pt: "acorde", ipa: "/kɔːrd/", definition: "Several musical notes played together on an instrument.", example: "I already know how to play three chords.", examplePt: "Já sei tocar três acordes." },
      { term: "note", pt: "nota (musical)", ipa: "/noʊt/", definition: "A single musical sound with a specific pitch.", example: "My sister showed me the notes on the piano.", examplePt: "Minha irmã me mostrou as notas no piano." },
      { term: "improve", pt: "melhorar", ipa: "/ɪmˈpruːv/", definition: "To get better at something.", example: "He wants to improve his guitar skills.", examplePt: "Ele quer melhorar suas habilidades no violão." },
    ],
    expressions: [
      { en: "Little by little.", pt: "Aos poucos." },
      { en: "Step by step.", pt: "Passo a passo." },
      { en: "Not yet.", pt: "Ainda não." },
      { en: "Practice makes it faster / perfect.", pt: "A prática deixa mais rápido / perfeito." },
      { en: "That's great!", pt: "Que ótimo!" },
      { en: "It takes time.", pt: "Isso leva tempo." },
    ],
    grammar: [
      {
        title: { en: "Know how to / learn how to + base verb", pt: "Know how to / learn how to + verbo base" },
        examples: [
          { en: "I know how to play the guitar.", pt: "Eu sei tocar violão." },
          { en: "She doesn't know how to swim.", pt: "Ela não sabe nadar." },
          { en: "We're learning how to play the piano.", pt: "Estamos aprendendo a tocar piano." },
          { en: "Do you know how to cook Italian food?", pt: "Você sabe cozinhar comida italiana?" },
          { en: "He learned how to drive when he was eighteen.", pt: "Ele aprendeu a dirigir quando tinha dezoito anos." },
        ],
        rule: {
          en: "Use 'know how to + base verb' to talk about a skill you already have, and 'learn how to + base verb' for a skill you are getting or got. Always use the base verb after 'to', not the -ing form.",
          pt: "Use 'know how to + verbo base' para uma habilidade que você já tem, e 'learn how to + verbo base' para uma habilidade que você está adquirindo ou adquiriu. Sempre use o verbo base depois de 'to', nunca a forma -ing.",
        },
        mistakes: [
          { en: "✗ I know how to playing guitar. → ✓ I know how to play guitar.", pt: "✗ I know how to playing guitar. → ✓ I know how to play guitar." },
          { en: "✗ She know how to swim. → ✓ She knows how to swim. (3rd person -s)", pt: "✗ She know how to swim. → ✓ She knows how to swim. (3ª pessoa -s)" },
        ],
      },
      {
        title: { en: "Prepositions of place: behind / in front of", pt: "Preposições de lugar: behind / in front of" },
        examples: [
          { en: "My sister sat behind me.", pt: "Minha irmã sentava atrás de mim." },
          { en: "The teacher sits in front of me during lessons.", pt: "A professora senta na minha frente durante as aulas." },
          { en: "The piano is behind the guitar.", pt: "O piano está atrás do violão." },
          { en: "Is the microphone in front of you or behind you?", pt: "O microfone está na sua frente ou atrás de você?" },
        ],
        rule: {
          en: "Use 'behind' for something located at the back of another thing or person, and 'in front of' for something located at the front. Both are followed by a noun or pronoun (behind me, in front of the window).",
          pt: "Use 'behind' para algo localizado atrás de outra coisa ou pessoa, e 'in front of' para algo localizado na frente. Ambos são seguidos de um substantivo ou pronome (behind me, in front of the window).",
        },
        mistakes: [
          { en: "✗ She is in front the piano. → ✓ She is in front of the piano.", pt: "✗ She is in front the piano. → ✓ She is in front of the piano." },
          { en: "✗ The teacher is behind of me. → ✓ The teacher is behind me. ('behind' has no 'of')", pt: "✗ The teacher is behind of me. → ✓ The teacher is behind me. ('behind' não tem 'of')" },
        ],
      },
      {
        title: { en: "How old...? and 'in' for duration", pt: "How old...? e 'in' para duração" },
        examples: [
          { en: "How old were you when you learned to ride a bike?", pt: "Quantos anos você tinha quando aprendeu a andar de bicicleta?" },
          { en: "I was seven when I started piano lessons.", pt: "Eu tinha sete anos quando comecei aulas de piano." },
          { en: "I learned the basics in three months.", pt: "Aprendi o básico em três meses." },
          { en: "He learned how to swim in two years.", pt: "Ele aprendeu a nadar em dois anos." },
        ],
        rule: {
          en: "Use 'How old + be + subject' to ask about age (How old were you...?), and answer with 'I was + number'. Use 'in + a period of time' (in three months, in two years) to say how long it took for something to happen or be completed.",
          pt: "Use 'How old + be + sujeito' para perguntar sobre idade (How old were you...?), e responda com 'I was + número'. Use 'in + período de tempo' (in three months, in two years) para dizer quanto tempo levou para algo acontecer ou ser concluído.",
        },
        mistakes: [
          { en: "✗ How old did you have when you learned? → ✓ How old were you when you learned?", pt: "✗ How old did you have when you learned? → ✓ How old were you when you learned?" },
          { en: "✗ I learned it for three months. → ✓ I learned it in three months. (time to complete = 'in')", pt: "✗ I learned it for three months. → ✓ I learned it in three months. (tempo para concluir = 'in')" },
        ],
      },
    ],
    controlledPractice: [
      { id: "i2d-cp1", prompt: { en: "Complete: 'I ___ how to play the guitar.'", pt: "Complete: 'I ___ how to play the guitar.'" }, options: ["know", "knows", "knowing"], answer: "know", explanation: { en: "'I' + base verb 'know'.", pt: "'I' + verbo base 'know'." } },
      { id: "i2d-cp2", prompt: { en: "Complete: 'She ___ how to cook.'", pt: "Complete: 'She ___ how to cook.'" }, options: ["know", "knows", "knowing"], answer: "knows", explanation: { en: "3rd person singular needs '-s': knows.", pt: "3ª pessoa do singular precisa de '-s': knows." } },
      { id: "i2d-cp3", prompt: { en: "Choose the correct sentence.", pt: "Escolha a frase correta." }, options: ["The piano is in front the window.", "The piano is in front of the window.", "The piano is front of the window."], answer: "The piano is in front of the window.", explanation: { en: "'In front of' always keeps 'of'.", pt: "'In front of' sempre mantém 'of'." } },
      { id: "i2d-cp4", prompt: { en: "Complete: 'How old ___ you when you learned to swim?'", pt: "Complete: 'How old ___ you when you learned to swim?'" }, options: ["did", "were", "was"], answer: "were", explanation: { en: "Use 'be' in the past for age: were you.", pt: "Use 'be' no passado para idade: were you." } },
      { id: "i2d-cp5", prompt: { en: "Choose the correct sentence about duration.", pt: "Escolha a frase correta sobre duração." }, options: ["I learned the basics for three months.", "I learned the basics in three months.", "I learned the basics at three months."], answer: "I learned the basics in three months.", explanation: { en: "Use 'in' for the time it took to complete something.", pt: "Use 'in' para o tempo que levou para concluir algo." } },
    ],
    input: {
      kind: "reading",
      title: { en: "Learning something new, at any age", pt: "Aprendendo algo novo, em qualquer idade" },
      lines: [
        { en: "It's never too late to learn a new skill. Some people learn how to play an instrument when they are children, and others start as adults.", pt: "Nunca é tarde demais para aprender uma nova habilidade. Algumas pessoas aprendem a tocar um instrumento quando são crianças, e outras começam quando adultas." },
        { en: "A good teacher usually sits in front of the student to show the movements, and sometimes stands behind the student to correct their hands.", pt: "Um bom professor geralmente senta na frente do aluno para mostrar os movimentos, e às vezes fica atrás do aluno para corrigir as mãos." },
        { en: "Most beginners learn the basics of an instrument in six months to one year, with regular practice.", pt: "A maioria dos iniciantes aprende o básico de um instrumento em seis meses a um ano, com prática regular." },
        { en: "The most important thing is patience: mistakes are part of learning, and little by little, you improve.", pt: "O mais importante é a paciência: erros fazem parte do aprendizado, e aos poucos, você melhora." },
      ],
      questions: [
        { id: "i2d-iq1", prompt: { en: "According to the text, when can people learn a new skill?", pt: "De acordo com o texto, quando as pessoas podem aprender uma nova habilidade?" }, options: ["Only as children", "At any age", "Only as adults"], answer: "At any age", explanation: { en: "'It's never too late to learn a new skill.'", pt: "'Nunca é tarde demais para aprender uma nova habilidade.'" } },
        { id: "i2d-iq2", prompt: { en: "Where does a teacher usually sit to show the movements?", pt: "Onde o professor geralmente senta para mostrar os movimentos?" }, options: ["Behind the student", "In front of the student", "Next to the door"], answer: "In front of the student", explanation: { en: "'A good teacher usually sits in front of the student...'", pt: "'Um bom professor geralmente senta na frente do aluno...'" } },
        { id: "i2d-iq3", prompt: { en: "How long does it usually take beginners to learn the basics?", pt: "Quanto tempo geralmente leva para os iniciantes aprenderem o básico?" }, options: ["One week", "Six months to one year", "Ten years"], answer: "Six months to one year", explanation: { en: "'Most beginners learn the basics... in six months to one year.'", pt: "'A maioria dos iniciantes aprende o básico... em seis meses a um ano.'" } },
      ],
    },
    quickCheck: [
      { id: "i2d-qc1", prompt: { en: "What does 'beginner' mean?", pt: "O que significa 'beginner'?" }, options: ["Someone just starting to learn", "A music teacher", "An expert"], answer: "Someone just starting to learn", explanation: { en: "A beginner is new to a skill.", pt: "Um iniciante é novo em uma habilidade." } },
      { id: "i2d-qc2", prompt: { en: "Choose the correct sentence.", pt: "Escolha a frase correta." }, options: ["He know how to play piano.", "He knows how to play piano.", "He knowing how to play piano."], answer: "He knows how to play piano.", explanation: { en: "3rd person singular: knows.", pt: "3ª pessoa do singular: knows." } },
      { id: "i2d-qc3", prompt: { en: "'The dog is ___ the car.' (opposite of in front of)", pt: "'The dog is ___ the car.' (oposto de in front of)" }, options: ["behind", "in front of", "chord"], answer: "behind", explanation: { en: "'Behind' is the opposite of 'in front of'.", pt: "'Behind' é o oposto de 'in front of'." } },
      { id: "i2d-qc4", prompt: { en: "'I learned it ___ two months.'", pt: "'I learned it ___ two months.'" }, options: ["for", "in", "since"], answer: "in", explanation: { en: "Use 'in' for the time something took to be completed.", pt: "Use 'in' para o tempo que algo levou para ser concluído." } },
    ],
  },
  communicate: {
    id: "INTERMEDIATE-U02-COMMUNICATE",
    review: [
      { en: "I know how to play the guitar. — habilidade já adquirida.", pt: "Eu sei tocar violão. — habilidade já adquirida." },
      { en: "We're learning how to play the piano. — habilidade em progresso.", pt: "Estamos aprendendo a tocar piano. — habilidade em progresso." },
      { en: "The teacher sits in front of me. The piano is behind the guitar.", pt: "A professora senta na minha frente. O piano está atrás do violão." },
      { en: "How old were you when you learned to swim? I learned it in two years.", pt: "Quantos anos você tinha quando aprendeu a nadar? Aprendi em dois anos." },
    ],
    activities: [
      {
        id: "i2c-a1",
        title: { en: "My Skills", pt: "Minhas habilidades" },
        instruction: { en: "Say two things you know how to do and one thing you are learning how to do.", pt: "Diga duas coisas que você sabe fazer e uma coisa que você está aprendendo a fazer." },
        phrases: [
          { en: "I know how to cook Italian food.", pt: "Eu sei cozinhar comida italiana." },
          { en: "I know how to swim very well.", pt: "Eu sei nadar muito bem." },
          { en: "I'm learning how to play the guitar.", pt: "Estou aprendendo a tocar violão." },
        ],
        check: [
          { id: "i2c-a1q1", prompt: { en: "Which sentence describes a skill you already have?", pt: "Qual frase descreve uma habilidade que você já tem?" }, options: ["I know how to cook.", "I'm learning to cook.", "I'll cook tomorrow."], answer: "I know how to cook.", explanation: { en: "'Know how to' shows an existing skill.", pt: "'Know how to' mostra uma habilidade já existente." } },
          { id: "i2c-a1q2", prompt: { en: "Complete: 'She ___ how to drive.'", pt: "Complete: 'She ___ how to drive.'" }, options: ["know", "knows", "knowing"], answer: "knows", explanation: { en: "3rd person singular: knows.", pt: "3ª pessoa do singular: knows." } },
        ],
      },
      {
        id: "i2c-a2",
        title: { en: "Where Is It?", pt: "Onde está?" },
        instruction: { en: "Describe the position of three objects in your room using 'behind' and 'in front of'.", pt: "Descreva a posição de três objetos no seu quarto usando 'behind' e 'in front of'." },
        phrases: [
          { en: "My desk is in front of the window.", pt: "Minha mesa fica na frente da janela." },
          { en: "The chair is behind the desk.", pt: "A cadeira fica atrás da mesa." },
          { en: "My guitar is behind the door.", pt: "Meu violão fica atrás da porta." },
        ],
        check: [
          { id: "i2c-a2q1", prompt: { en: "Choose the correct sentence.", pt: "Escolha a frase correta." }, options: ["The chair is behind of the desk.", "The chair is behind the desk.", "The chair behind the desk."], answer: "The chair is behind the desk.", explanation: { en: "'Behind' does not use 'of'.", pt: "'Behind' não usa 'of'." } },
          { id: "i2c-a2q2", prompt: { en: "Opposite of 'behind'?", pt: "Oposto de 'behind'?" }, options: ["in front of", "instrument", "patience"], answer: "in front of", explanation: { en: "'In front of' is the opposite of 'behind'.", pt: "'In front of' é o oposto de 'behind'." } },
        ],
      },
      {
        id: "i2c-a3",
        title: { en: "How Old Were You?", pt: "Quantos anos você tinha?" },
        instruction: { en: "Ask and answer 'How old were you when...?' about three skills, saying how long it took to learn each one.", pt: "Pergunte e responda 'How old were you when...?' sobre três habilidades, dizendo quanto tempo levou para aprender cada uma." },
        phrases: [
          { en: "How old were you when you learned to ride a bike? — I was six.", pt: "Quantos anos você tinha quando aprendeu a andar de bicicleta? — Eu tinha seis anos." },
          { en: "I learned how to swim in one year.", pt: "Aprendi a nadar em um ano." },
          { en: "How old were you when you learned to cook? — I was fifteen. I learned it in a few months.", pt: "Quantos anos você tinha quando aprendeu a cozinhar? — Eu tinha quinze anos. Aprendi em alguns meses." },
        ],
        check: [
          { id: "i2c-a3q1", prompt: { en: "Correct question about age in the past?", pt: "Pergunta correta sobre idade no passado?" }, options: ["How old you were?", "How old were you?", "How old did you?"], answer: "How old were you?", explanation: { en: "'How old + were + you'.", pt: "'How old + were + you'." } },
          { id: "i2c-a3q2", prompt: { en: "'I learned it ___ six months.'", pt: "'I learned it ___ six months.'" }, options: ["in", "for", "at"], answer: "in", explanation: { en: "Use 'in' for time taken to complete something.", pt: "Use 'in' para o tempo levado para concluir algo." } },
        ],
      },
    ],
    challenge: {
      id: "i2c-cc1",
      title: { en: "Tell Your Learning Story", pt: "Conte sua história de aprendizado" },
      instruction: {
        en: "Talk out loud about a skill you know how to do or are learning. Say how old you were when you started, how long it took (or is taking), and describe where your teacher or the instrument was, using 'behind' or 'in front of'.",
        pt: "Fale em voz alta sobre uma habilidade que você sabe fazer ou está aprendendo. Diga quantos anos você tinha quando começou, quanto tempo levou (ou está levando), e descreva onde seu professor ou o instrumento estava, usando 'behind' ou 'in front of'.",
      },
      phrases: [
        { en: "I know how to play the guitar. I was ten when I started.", pt: "Eu sei tocar violão. Eu tinha dez anos quando comecei." },
        { en: "I learned the basics in about a year.", pt: "Aprendi o básico em cerca de um ano." },
        { en: "My teacher always sat in front of me during lessons.", pt: "Minha professora sempre sentava na minha frente durante as aulas." },
        { en: "Now I'm learning how to play the piano too, little by little.", pt: "Agora também estou aprendendo a tocar piano, aos poucos." },
      ],
      check: [
        { id: "i2c-cc1q1", prompt: { en: "Did you use 'know how to' or 'learn how to' correctly?", pt: "Você usou 'know how to' ou 'learn how to' corretamente?" }, options: ["Yes", "No", "Partially"], answer: "Yes", explanation: { en: "Self-check: + base verb after 'how to'.", pt: "Autoavaliação: + verbo base depois de 'how to'." } },
        { id: "i2c-cc1q2", prompt: { en: "Did you use 'in' for how long it took?", pt: "Você usou 'in' para quanto tempo levou?" }, options: ["Yes", "No", "Partially"], answer: "Yes", explanation: { en: "Self-check: 'in + period of time' for duration to complete.", pt: "Autoavaliação: 'in + período de tempo' para duração até concluir." } },
      ],
    },
    lessonReview: {
      summary: {
        en: "You talked about skills with 'know how to' and 'learn how to', described positions with 'behind' and 'in front of', and asked/answered 'How old...?' using 'in' for duration.",
        pt: "Você falou sobre habilidades com 'know how to' e 'learn how to', descreveu posições com 'behind' e 'in front of', e perguntou/respondeu 'How old...?' usando 'in' para duração.",
      },
      canDo: [
        { en: "I can say what I know how to do and what I'm learning to do.", pt: "Consigo dizer o que sei fazer e o que estou aprendendo a fazer." },
        { en: "I can describe positions using 'behind' and 'in front of'.", pt: "Consigo descrever posições usando 'behind' e 'in front of'." },
        { en: "I can ask 'How old were you when...?'.", pt: "Consigo perguntar 'How old were you when...?'." },
        { en: "I can say how long it took me to learn something using 'in'.", pt: "Consigo dizer quanto tempo levei para aprender algo usando 'in'." },
      ],
      next: { en: "Next unit: big dreams — talking about goals and ambitions.", pt: "Próxima unidade: grandes sonhos — falar de metas e ambições." },
    },
  },
};
