import type { CourseUnit } from "./types";

/**
 * Intermediate — Unit 3 (Big Dreams). Conteúdo autoral Speak2Co.
 * Foco: "know how to" / "be able to" para habilidades, infinitivo de
 * propósito (to + verbo) e metas pessoais.
 * Personagens originais: Marina, Theo e Rafa (mesmo grupo da Unidade 1).
 */
export const INTERMEDIATE_U03: CourseUnit = {
  code: "INTERMEDIATE-U03",
  number: 3,
  title: "Big Dreams — What are you able to do?",
  titlePt: "Grandes Sonhos — O que você é capaz de fazer?",
  cefr: "B1",
  objective: {
    en: "Talk about abilities with 'know how to' and 'be able to', explain the purpose of actions with the infinitive, and describe personal goals.",
    pt: "Falar sobre habilidades com 'know how to' e 'be able to', explicar o propósito de ações com o infinitivo, e descrever metas pessoais.",
  },
  communicationGoal: {
    en: "Describe your skills and dreams: say what you know how to do, what you're able to do, why you do things, and what your goals are.",
    pt: "Descrever suas habilidades e sonhos: dizer o que você sabe fazer, o que é capaz de fazer, por que faz as coisas, e quais são suas metas.",
  },
  prerequisites: {
    en: "Intermediate Unit 2: new skills and 'learn to' / simple past of learn.",
    pt: "Intermediate Unidade 2: novas habilidades e 'learn to' / passado simples de learn.",
  },
  newContent: {
    en: "Grammar: 'know how to' and 'be able to' for ability + infinitive of purpose (to + verb) | Vocabulary: goals and achievements (12 items) | Expressions: talking about dreams and progress",
    pt: "Gramática: 'know how to' e 'be able to' para habilidade + infinitivo de propósito (to + verbo) | Vocabulário: metas e conquistas (12 itens) | Expressões: falar sobre sonhos e progresso",
  },
  reviewContent: {
    en: "Review of 'learn to' and simple past of regular and irregular verbs.",
    pt: "Revisão de 'learn to' e passado simples de verbos regulares e irregulares.",
  },
  discover: {
    id: "INTERMEDIATE-U03-DISCOVER",
    warmUp: {
      prompt: {
        en: "Look at the picture. What is this person doing to reach a goal? What are you able to do that you're proud of?",
        pt: "Observe a imagem. O que essa pessoa está fazendo para alcançar uma meta? O que você é capaz de fazer e tem orgulho?",
      },
      phrases: [
        { en: "What do you know how to do really well?", pt: "O que você sabe fazer muito bem?" },
        { en: "Are you able to speak another language?", pt: "Você é capaz de falar outro idioma?" },
        { en: "What is one of your big dreams?", pt: "Qual é um dos seus grandes sonhos?" },
      ],
    },
    context: {
      situation: {
        en: "Marina just finished a certificate course. Theo and Rafa are celebrating with her and talking about goals.",
        pt: "A Marina acabou de terminar um curso de certificação. Theo e Rafa estão comemorando com ela e falando sobre metas.",
      },
      dialogue: [
        { who: "Theo", en: "Congratulations, Marina! You worked so hard to get this certificate.", pt: "Parabéns, Marina! Você trabalhou tanto para conseguir esse certificado." },
        { who: "Marina", en: "Thank you! Now I know how to build a website from scratch. It's a big step toward my dream.", pt: "Obrigada! Agora eu sei construir um site do zero. É um grande passo rumo ao meu sonho." },
        { who: "Rafa", en: "What's your dream, exactly?", pt: "Qual é o seu sonho, exatamente?" },
        { who: "Marina", en: "I want to start my own business one day. I'm saving money to buy a laptop and open a small online shop.", pt: "Eu quero abrir meu próprio negócio um dia. Estou economizando dinheiro para comprar um notebook e abrir uma lojinha online." },
        { who: "Theo", en: "That's amazing. Are you able to manage everything alone, though?", pt: "Isso é incrível. Mas você é capaz de administrar tudo sozinha?" },
        { who: "Marina", en: "Not yet, but I'm learning. I go to workshops to improve my skills every month.", pt: "Ainda não, mas estou aprendendo. Eu vou a workshops para melhorar minhas habilidades todo mês." },
        { who: "Rafa", en: "I admire that. I know how to cook really well, but I don't have a clear goal like that.", pt: "Eu admiro isso. Eu sei cozinhar muito bem, mas não tenho uma meta clara assim." },
        { who: "Marina", en: "It's never too late to set one, Rafa! Come on, let's make a plan to achieve your dreams too.", pt: "Nunca é tarde para definir uma, Rafa! Vamos lá, vamos fazer um plano para você também alcançar seus sonhos." },
      ],
    },
    vocabulary: [
      { term: "goal", pt: "meta, objetivo", ipa: "/ɡoʊl/", definition: "Something you want to achieve in the future.", example: "My goal is to save enough money to travel abroad.", examplePt: "Minha meta é economizar dinheiro suficiente para viajar ao exterior." },
      { term: "dream", pt: "sonho", ipa: "/driːm/", definition: "Something you hope to achieve, even if it's difficult.", example: "Her dream is to open her own restaurant.", examplePt: "O sonho dela é abrir o próprio restaurante." },
      { term: "achieve", pt: "alcançar, conquistar", ipa: "/əˈtʃiːv/", definition: "To succeed in doing or getting something after effort.", example: "You can achieve anything if you work hard.", examplePt: "Você pode alcançar qualquer coisa se trabalhar duro." },
      { term: "improve", pt: "melhorar", ipa: "/ɪmˈpruːv/", definition: "To make something better.", example: "I take classes to improve my English.", examplePt: "Faço aulas para melhorar meu inglês." },
      { term: "skill", pt: "habilidade", ipa: "/skɪl/", definition: "The ability to do something well, usually learned with practice.", example: "Cooking is a useful skill for everyday life.", examplePt: "Cozinhar é uma habilidade útil para o dia a dia." },
      { term: "certificate", pt: "certificado", ipa: "/sərˈtɪfɪkət/", definition: "An official document that proves you finished a course.", example: "She got a certificate in graphic design.", examplePt: "Ela conseguiu um certificado em design gráfico." },
      { term: "save (money)", pt: "economizar", ipa: "/seɪv/", definition: "To keep money instead of spending it, usually for a future purpose.", example: "We're saving money to buy a house.", examplePt: "Estamos economizando dinheiro para comprar uma casa." },
      { term: "manage", pt: "administrar, conseguir", ipa: "/ˈmænɪdʒ/", definition: "To be in control of a business, task or situation.", example: "It's hard to manage a business alone.", examplePt: "É difícil administrar um negócio sozinho." },
      { term: "workshop", pt: "workshop, oficina", ipa: "/ˈwɜːrkʃɑːp/", definition: "A short course where you learn practical skills.", example: "I went to a workshop on public speaking.", examplePt: "Fui a um workshop sobre falar em público." },
      { term: "step", pt: "passo", ipa: "/step/", definition: "One action in a series that leads toward a goal.", example: "This is the first step toward my new career.", examplePt: "Este é o primeiro passo rumo à minha nova carreira." },
      { term: "admire", pt: "admirar", ipa: "/ədˈmaɪər/", definition: "To respect and value someone for their qualities or actions.", example: "I admire people who never give up.", examplePt: "Eu admiro pessoas que nunca desistem." },
      { term: "from scratch", pt: "do zero", ipa: "/frʌm skrætʃ/", definition: "Starting something without using anything made before.", example: "He built his company from scratch.", examplePt: "Ele construiu a empresa dele do zero." },
    ],
    expressions: [
      { en: "It's a big step toward my dream.", pt: "É um grande passo rumo ao meu sonho." },
      { en: "That's amazing.", pt: "Isso é incrível." },
      { en: "Not yet, but I'm learning.", pt: "Ainda não, mas estou aprendendo." },
      { en: "It's never too late to…", pt: "Nunca é tarde para…" },
      { en: "Come on, let's…", pt: "Vamos lá, vamos…" },
      { en: "set a goal", pt: "definir uma meta" },
    ],
    grammar: [
      {
        title: { en: "Know how to / Be able to — talking about ability", pt: "Know how to / Be able to — falando de habilidade" },
        examples: [
          { en: "I know how to build a website.", pt: "Eu sei construir um site." },
          { en: "She doesn't know how to drive yet.", pt: "Ela ainda não sabe dirigir." },
          { en: "Are you able to manage everything alone?", pt: "Você é capaz de administrar tudo sozinha?" },
          { en: "I'm not able to finish it today.", pt: "Não sou capaz de terminar isso hoje." },
          { en: "Do you know how to cook Italian food?", pt: "Você sabe cozinhar comida italiana?" },
          { en: "We were able to fix the problem.", pt: "Conseguimos resolver o problema." },
        ],
        rule: {
          en: "'Know how to + verb' describes a learned skill: I know how to swim. 'Be able to + verb' describes ability or capacity, and can also replace 'can' in other tenses: She's able to help / She was able to help / She'll be able to help. Negative: don't/doesn't know how to; am not/isn't/aren't able to. Questions: Do you know how to…? / Are you able to…?",
          pt: "'Know how to + verbo' descreve uma habilidade aprendida: I know how to swim. 'Be able to + verbo' descreve capacidade e também substitui 'can' em outros tempos: She's able to help / She was able to help / She'll be able to help. Negativa: don't/doesn't know how to; am not/isn't/aren't able to. Perguntas: Do you know how to…? / Are you able to…?",
        },
        mistakes: [
          { en: "✗ I know how cook. → ✓ I know how to cook. (don't forget 'to')", pt: "✗ I know how cook. → ✓ I know how to cook. (não esqueça o 'to')" },
          { en: "✗ She is able speak French. → ✓ She is able to speak French.", pt: "✗ She is able speak French. → ✓ She is able to speak French." },
          { en: "✗ I can able to swim. → ✓ I'm able to swim. / I can swim. (don't mix both)", pt: "✗ I can able to swim. → ✓ I'm able to swim. / I can swim. (não misture os dois)" },
        ],
      },
      {
        title: { en: "Infinitive of purpose — to + verb (why we do things)", pt: "Infinitivo de propósito — to + verbo (por que fazemos as coisas)" },
        examples: [
          { en: "I'm saving money to buy a laptop.", pt: "Estou economizando dinheiro para comprar um notebook." },
          { en: "She goes to workshops to improve her skills.", pt: "Ela vai a workshops para melhorar suas habilidades." },
          { en: "We study every day to reach our goals.", pt: "Estudamos todo dia para alcançar nossas metas." },
          { en: "He called me to ask for advice.", pt: "Ele me ligou para pedir conselho." },
          { en: "They opened a business to help their community.", pt: "Eles abriram um negócio para ajudar a comunidade." },
        ],
        rule: {
          en: "Use 'to + base verb' to explain the purpose or reason for an action — it answers the question 'Why?'. It works with any tense: I go / I went / I'm going to the gym to stay healthy.",
          pt: "Use 'to + verbo base' para explicar o propósito ou motivo de uma ação — responde à pergunta 'Por quê?'. Funciona com qualquer tempo verbal: I go / I went / I'm going to the gym to stay healthy.",
        },
        mistakes: [
          { en: "✗ I study for improve my English. → ✓ I study to improve my English.", pt: "✗ I study for improve my English. → ✓ I study to improve my English." },
          { en: "✗ She called for asking for help. → ✓ She called to ask for help.", pt: "✗ She called for asking for help. → ✓ She called to ask for help." },
        ],
      },
    ],
    controlledPractice: [
      { id: "i3d-cp1", prompt: { en: "Complete: 'I ___ how to swim since I was five.'", pt: "Complete: 'I ___ how to swim since I was five.'" }, options: ["know", "knows", "am"], answer: "know", explanation: { en: "'Know how to' uses the base form for 'I'.", pt: "'Know how to' usa a forma base para 'I'." } },
      { id: "i3d-cp2", prompt: { en: "Choose the correct question about ability.", pt: "Escolha a pergunta correta sobre habilidade." }, options: ["Are you able fix it?", "Are you able to fix it?", "You are able to fix it?"], answer: "Are you able to fix it?", explanation: { en: "Questions invert 'be': Are you able to…?", pt: "Perguntas invertem o 'be': Are you able to…?" } },
      { id: "i3d-cp3", prompt: { en: "Complete the purpose: 'She saves money ___ a laptop.'", pt: "Complete o propósito: 'She saves money ___ a laptop.'" }, options: ["for buy", "to buy", "for buying"], answer: "to buy", explanation: { en: "Use 'to + base verb' for purpose.", pt: "Use 'to + verbo base' para propósito." } },
      { id: "i3d-cp4", prompt: { en: "Make it negative: 'He knows how to cook.'", pt: "Deixe negativa: 'He knows how to cook.'" }, options: ["He doesn't know how to cook.", "He not knows how to cook.", "He isn't know how to cook."], answer: "He doesn't know how to cook.", explanation: { en: "Negative with 'doesn't' + base verb.", pt: "Negativa com 'doesn't' + verbo base." } },
      { id: "i3d-cp5", prompt: { en: "Which sentence explains a purpose?", pt: "Qual frase explica um propósito?" }, options: ["I go to the gym to stay healthy.", "I go to the gym every day.", "I went to the gym yesterday."], answer: "I go to the gym to stay healthy.", explanation: { en: "'To stay healthy' answers 'why?'.", pt: "'To stay healthy' responde 'por quê?'." } },
    ],
    input: {
      kind: "reading",
      title: { en: "A blog post: Small steps, big dreams", pt: "Um post de blog: Pequenos passos, grandes sonhos" },
      lines: [
        { en: "Everyone has a dream, but not everyone knows how to turn it into a plan.", pt: "Todo mundo tem um sonho, mas nem todo mundo sabe transformá-lo em um plano." },
        { en: "My goal is to open a small bakery in two years. To achieve that, I take business classes every week.", pt: "Minha meta é abrir uma pequena padaria em dois anos. Para alcançar isso, faço aulas de negócios toda semana." },
        { en: "I'm not able to quit my job yet, so I bake on weekends to practice and to build my recipes.", pt: "Ainda não sou capaz de deixar meu emprego, então eu asso nos finais de semana para praticar e criar minhas receitas." },
        { en: "Last month, I was able to sell my first cakes to friends. It was a small step, but an important one.", pt: "No mês passado, consegui vender meus primeiros bolos para amigos. Foi um passo pequeno, mas importante." },
        { en: "I go to workshops to learn how to manage a small business. Slowly, I'm getting closer to my dream.", pt: "Eu vou a workshops para aprender a administrar um pequeno negócio. Aos poucos, estou chegando mais perto do meu sonho." },
      ],
      questions: [
        { id: "i3d-iq1", prompt: { en: "What is the writer's goal?", pt: "Qual é a meta do escritor(a)?" }, options: ["To open a bakery", "To quit their job", "To sell cars"], answer: "To open a bakery", explanation: { en: "'My goal is to open a small bakery in two years.'", pt: "'Minha meta é abrir uma pequena padaria em dois anos.'" } },
        { id: "i3d-iq2", prompt: { en: "Why does the writer bake on weekends?", pt: "Por que o escritor(a) assa nos finais de semana?" }, options: ["To practice and build recipes", "To relax only", "To help a friend's bakery"], answer: "To practice and build recipes", explanation: { en: "'I bake on weekends to practice and to build my recipes.'", pt: "'Eu asso nos finais de semana para praticar e criar minhas receitas.'" } },
        { id: "i3d-iq3", prompt: { en: "Is the writer able to quit their job now?", pt: "O escritor(a) é capaz de deixar o emprego agora?" }, options: ["Yes", "No, not yet", "They already quit"], answer: "No, not yet", explanation: { en: "'I'm not able to quit my job yet.'", pt: "'Ainda não sou capaz de deixar meu emprego.'" } },
      ],
    },
    quickCheck: [
      { id: "i3d-qc1", prompt: { en: "What does 'achieve' mean?", pt: "O que significa 'achieve'?" }, options: ["To succeed in doing something", "To forget something", "To sell something"], answer: "To succeed in doing something", explanation: { en: "Achieve = to reach a goal after effort.", pt: "Achieve = alcançar uma meta após esforço." } },
      { id: "i3d-qc2", prompt: { en: "Choose the correct sentence about ability.", pt: "Escolha a frase correta sobre habilidade." }, options: ["I know how to drive.", "I know to drive.", "I know driving how."], answer: "I know how to drive.", explanation: { en: "'Know how to + base verb.'", pt: "'Know how to + verbo base.'" } },
      { id: "i3d-qc3", prompt: { en: "Complete: 'She studies hard ___ pass the exam.'", pt: "Complete: 'She studies hard ___ pass the exam.'" }, options: ["for", "to", "for to"], answer: "to", explanation: { en: "Infinitive of purpose: to + base verb.", pt: "Infinitivo de propósito: to + verbo base." } },
      { id: "i3d-qc4", prompt: { en: "'They ___ able to finish the project last week.'", pt: "'They ___ able to finish the project last week.'" }, options: ["were", "was", "are"], answer: "were", explanation: { en: "Past of 'be able to' with 'they': were able to.", pt: "Passado de 'be able to' com 'they': were able to." } },
    ],
  },
  communicate: {
    id: "INTERMEDIATE-U03-COMMUNICATE",
    review: [
      { en: "I know how to build a website. — learned skills.", pt: "Eu sei construir um site. — habilidades aprendidas." },
      { en: "Are you able to manage everything alone? — ability.", pt: "Você é capaz de administrar tudo sozinha? — capacidade." },
      { en: "I'm saving money to buy a laptop. — infinitive of purpose.", pt: "Estou economizando dinheiro para comprar um notebook. — infinitivo de propósito." },
      { en: "It's never too late to set a goal.", pt: "Nunca é tarde para definir uma meta." },
    ],
    activities: [
      {
        id: "i3c-a1",
        title: { en: "Skills I Have", pt: "Habilidades que eu tenho" },
        instruction: { en: "Say three things you know how to do and one thing you're not able to do yet.", pt: "Diga três coisas que você sabe fazer e uma coisa que ainda não é capaz de fazer." },
        phrases: [
          { en: "I know how to play the guitar.", pt: "Eu sei tocar violão." },
          { en: "I'm able to speak two languages.", pt: "Eu sou capaz de falar dois idiomas." },
          { en: "I'm not able to swim very well yet.", pt: "Ainda não sou capaz de nadar muito bem." },
        ],
        check: [
          { id: "i3c-a1q1", prompt: { en: "Which sentence describes a learned skill?", pt: "Qual frase descreve uma habilidade aprendida?" }, options: ["I know how to cook.", "I cooked yesterday.", "I like to cook."], answer: "I know how to cook.", explanation: { en: "'Know how to' expresses a learned skill.", pt: "'Know how to' expressa uma habilidade aprendida." } },
          { id: "i3c-a1q2", prompt: { en: "Complete: 'She ___ able to help you tomorrow.' (future)", pt: "Complete: 'She ___ able to help you tomorrow.' (futuro)" }, options: ["will be", "is", "was"], answer: "will be", explanation: { en: "'Be able to' works in the future: will be able to.", pt: "'Be able to' funciona no futuro: will be able to." } },
        ],
      },
      {
        id: "i3c-a2",
        title: { en: "My Goals", pt: "Minhas metas" },
        instruction: { en: "Talk about one goal you have and explain the purpose of two actions you take to reach it.", pt: "Fale sobre uma meta que você tem e explique o propósito de duas ações que você faz para alcançá-la." },
        phrases: [
          { en: "My goal is to travel to Europe next year.", pt: "Minha meta é viajar para a Europa no próximo ano." },
          { en: "I work extra hours to save money.", pt: "Trabalho horas extras para economizar dinheiro." },
          { en: "I read articles to learn about new places.", pt: "Leio artigos para aprender sobre lugares novos." },
        ],
        check: [
          { id: "i3c-a2q1", prompt: { en: "Which sentence shows purpose?", pt: "Qual frase mostra propósito?" }, options: ["I work extra hours to save money.", "I work extra hours on Mondays.", "I worked extra hours."], answer: "I work extra hours to save money.", explanation: { en: "'To save money' explains why.", pt: "'To save money' explica o porquê." } },
          { id: "i3c-a2q2", prompt: { en: "Choose the correct goal sentence.", pt: "Escolha a frase de meta correta." }, options: ["My goal is travel to Europe.", "My goal is to travel to Europe.", "My goal to travel to Europe."], answer: "My goal is to travel to Europe.", explanation: { en: "'My goal is to + verb.'", pt: "'My goal is to + verbo.'" } },
        ],
      },
      {
        id: "i3c-a3",
        title: { en: "Ability Interview", pt: "Entrevista de habilidades" },
        instruction: { en: "Ask and answer with a friend about abilities using 'know how to' and 'be able to'.", pt: "Pergunte e responda com um amigo sobre habilidades usando 'know how to' e 'be able to'." },
        phrases: [
          { en: "Do you know how to drive a car? — Yes, I do.", pt: "Você sabe dirigir um carro? — Sim, eu sei." },
          { en: "Were you able to finish the report? — No, I wasn't.", pt: "Você conseguiu terminar o relatório? — Não, não consegui." },
          { en: "Who knows how to fix a computer? — Rafa does.", pt: "Quem sabe consertar um computador? — O Rafa sabe." },
        ],
        check: [
          { id: "i3c-a3q1", prompt: { en: "Short answer: 'Do you know how to cook?'", pt: "Resposta curta: 'Do you know how to cook?'" }, options: ["Yes, I know.", "Yes, I do.", "Yes, I can."], answer: "Yes, I do.", explanation: { en: "Short answers repeat the auxiliary: do.", pt: "Respostas curtas repetem o auxiliar: do." } },
          { id: "i3c-a3q2", prompt: { en: "Which is correct?", pt: "Qual está correta?" }, options: ["She wasn't able to come.", "She didn't able to come.", "She not able to come."], answer: "She wasn't able to come.", explanation: { en: "Past negative: wasn't/weren't able to.", pt: "Negativa no passado: wasn't/weren't able to." } },
        ],
      },
    ],
    challenge: {
      id: "i3c-cc1",
      title: { en: "Present Your Big Dream", pt: "Apresente seu grande sonho" },
      instruction: {
        en: "Talk about a big dream out loud. Say what skills you know how to do, what you're not able to do yet, and what you do to reach your goal.",
        pt: "Fale sobre um grande sonho em voz alta. Diga quais habilidades você sabe fazer, o que ainda não é capaz de fazer, e o que você faz para alcançar sua meta.",
      },
      phrases: [
        { en: "My dream is to become a nurse.", pt: "Meu sonho é me tornar enfermeira." },
        { en: "I already know how to help people in difficult moments.", pt: "Eu já sei ajudar pessoas em momentos difíceis." },
        { en: "I'm not able to work in a hospital yet, but I'm studying to change that.", pt: "Ainda não sou capaz de trabalhar em um hospital, mas estou estudando para mudar isso." },
        { en: "I take extra classes to improve my skills every week.", pt: "Faço aulas extras para melhorar minhas habilidades toda semana." },
      ],
      check: [
        { id: "i3c-cc1q1", prompt: { en: "Did you use 'know how to' or 'be able to' correctly?", pt: "Você usou 'know how to' ou 'be able to' corretamente?" }, options: ["Yes", "No", "Partially"], answer: "Yes", explanation: { en: "Self-check: skill vs. ability structures.", pt: "Autoavaliação: estruturas de habilidade e capacidade." } },
        { id: "i3c-cc1q2", prompt: { en: "Did you explain a purpose with 'to + verb'?", pt: "Você explicou um propósito com 'to + verbo'?" }, options: ["Yes", "No", "Partially"], answer: "Yes", explanation: { en: "Self-check: infinitive of purpose.", pt: "Autoavaliação: infinitivo de propósito." } },
      ],
    },
    lessonReview: {
      summary: {
        en: "You talked about abilities with 'know how to' and 'be able to', explained the purpose of actions with the infinitive, and described your goals and dreams.",
        pt: "Você falou sobre habilidades com 'know how to' e 'be able to', explicou o propósito de ações com o infinitivo, e descreveu suas metas e sonhos.",
      },
      canDo: [
        { en: "I can say what I know how to do.", pt: "Consigo dizer o que eu sei fazer." },
        { en: "I can talk about what I'm able or not able to do.", pt: "Consigo falar sobre o que sou ou não sou capaz de fazer." },
        { en: "I can explain the purpose of an action with 'to + verb'.", pt: "Consigo explicar o propósito de uma ação com 'to + verbo'." },
        { en: "I can describe a personal goal or dream.", pt: "Consigo descrever uma meta ou sonho pessoal." },
      ],
      next: { en: "Next unit: telling stories about the past — what things were like back then.", pt: "Próxima unidade: contar histórias sobre o passado — como as coisas eram naquela época." },
    },
  },
};
