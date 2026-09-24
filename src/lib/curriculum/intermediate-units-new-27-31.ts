import type { CourseUnit } from "./types";

/**
 * Intermediate — Unit 27 (Life Back Then). Conteúdo autoral Speak2Co.
 * Foco: "used to" para hábitos e estados do passado, contrastados com o
 * presente. Personagens originais: Tomás e sua avó, Dona Alice.
 */
export const INTERMEDIATE_U27: CourseUnit = {
  code: "INTERMEDIATE-U27",
  number: 27,
  title: "Life Back Then — What did you use to do?",
  titlePt: "A Vida Antigamente — O que você costumava fazer?",
  cefr: "B1",
  objective: {
    en: "Talk about past habits and states with 'used to' and contrast them with life now.",
    pt: "Falar de hábitos e estados do passado com 'used to' e contrastar com a vida de hoje.",
  },
  communicationGoal: {
    en: "Interview an older relative about how things used to be and compare it with today.",
    pt: "Entrevistar um parente mais velho sobre como as coisas eram antigamente e comparar com hoje.",
  },
  prerequisites: {
    en: "Simple past (regular and irregular verbs) and comparative adjectives from previous units.",
    pt: "Passado simples (verbos regulares e irregulares) e adjetivos comparativos das unidades anteriores.",
  },
  newContent: {
    en: "Grammar: 'used to' for past habits and states (affirmative, negative, questions) | Vocabulary: generations and everyday life then and now (12 items) | Expressions: talking about the past",
    pt: "Gramática: 'used to' para hábitos e estados do passado (afirmativa, negativa, perguntas) | Vocabulário: gerações e o dia a dia antes e agora (12 itens) | Expressões: falando do passado",
  },
  reviewContent: {
    en: "Simple past of regular and irregular verbs, and comparative adjectives (bigger, easier, more modern).",
    pt: "Passado simples de verbos regulares e irregulares, e adjetivos comparativos (bigger, easier, more modern).",
  },
  discover: {
    id: "INTERMEDIATE-U27-DISCOVER",
    warmUp: {
      prompt: {
        en: "Look at the picture. What did people use to do before smartphones and the internet?",
        pt: "Observe a imagem. O que as pessoas costumavam fazer antes dos smartphones e da internet?",
      },
      phrases: [
        { en: "Did you use to write letters when you were young?", pt: "Você costumava escrever cartas quando era jovem?" },
        { en: "What did your grandparents use to do for fun?", pt: "O que seus avós costumavam fazer para se divertir?" },
        { en: "Life didn't use to be so fast, did it?", pt: "A vida não costumava ser tão corrida, né?" },
      ],
    },
    context: {
      situation: {
        en: "Tomás is visiting his grandmother, Dona Alice, for the weekend. He is curious about her childhood and how the neighborhood used to be.",
        pt: "Tomás está visitando a avó, Dona Alice, no fim de semana. Ele está curioso sobre a infância dela e como o bairro costumava ser.",
      },
      dialogue: [
        { who: "Tomás", en: "Grandma, did you use to have a phone at home when you were a kid?", pt: "Vó, a senhora costumava ter telefone em casa quando era criança?" },
        { who: "Alice", en: "Not at first! We used to have a landline much later, and only one neighbor had it.", pt: "No começo não! A gente teve telefone fixo bem mais tarde, e só um vizinho tinha." },
        { who: "Tomás", en: "So how did you use to talk to your friends?", pt: "Então como a senhora costumava conversar com as amigas?" },
        { who: "Alice", en: "We used to knock on their door! Or we used to write postcards when someone traveled.", pt: "A gente batia na porta! Ou escrevia cartão-postal quando alguém viajava." },
        { who: "Tomás", en: "Did this neighborhood use to be so busy?", pt: "Esse bairro costumava ser tão movimentado?" },
        { who: "Alice", en: "It didn't use to be like this at all. There used to be a big field right there, where that building is now.", pt: "Não costumava ser assim, de jeito nenhum. Tinha um campo enorme bem ali, onde é aquele prédio agora." },
        { who: "Tomás", en: "You have no idea how different my generation is, Grandma.", pt: "A senhora nem imagina como minha geração é diferente, vó." },
        { who: "Alice", en: "Believe it or not, we used to be happy with very little. Things have changed, but people haven't changed that much.", pt: "Acredite se quiser, a gente era feliz com muito pouco. As coisas mudaram, mas as pessoas não mudaram tanto." },
      ],
    },
    vocabulary: [
      { term: "generation", pt: "geração", ipa: "/ˌdʒenəˈreɪʃn/", definition: "A group of people born and living around the same time.", example: "My grandmother's generation didn't use to have cell phones.", examplePt: "A geração da minha avó não costumava ter celular." },
      { term: "neighborhood", pt: "bairro, vizinhança", ipa: "/ˈneɪbərhʊd/", definition: "The area around someone's home.", example: "This neighborhood used to be much quieter.", examplePt: "Esse bairro costumava ser bem mais tranquilo." },
      { term: "landline", pt: "telefone fixo", ipa: "/ˈlændlaɪn/", definition: "A telephone connected by wires, not a mobile phone.", example: "We got a landline when I was ten.", examplePt: "A gente conseguiu um telefone fixo quando eu tinha dez anos." },
      { term: "postcard", pt: "cartão-postal", ipa: "/ˈpoʊstkɑːrd/", definition: "A card you send by mail, usually with a picture.", example: "She used to send postcards from every trip.", examplePt: "Ela costumava mandar cartão-postal de cada viagem." },
      { term: "mail", pt: "correspondência, correio", ipa: "/meɪl/", definition: "Letters and packages sent through the post.", example: "We used to check the mail every afternoon.", examplePt: "A gente costumava conferir a correspondência toda tarde." },
      { term: "cassette tape", pt: "fita cassete", ipa: "/kəˈset teɪp/", definition: "An old device used to record and play music.", example: "I used to record songs from the radio on a cassette tape.", examplePt: "Eu costumava gravar músicas do rádio numa fita cassete." },
      { term: "chore", pt: "tarefa doméstica", ipa: "/tʃɔːr/", definition: "A small job you do regularly, like cleaning.", example: "We used to do the chores together on Saturdays.", examplePt: "A gente costumava fazer as tarefas domésticas juntos aos sábados." },
      { term: "allowance", pt: "mesada", ipa: "/əˈlaʊəns/", definition: "Money parents give children regularly.", example: "I used to get a small allowance every week.", examplePt: "Eu costumava ganhar uma mesada pequena toda semana." },
      { term: "curfew", pt: "toque de recolher, horário para voltar", ipa: "/ˈkɜːrfjuː/", definition: "A time you have to be home by.", example: "Our curfew used to be nine o'clock.", examplePt: "Nosso horário para voltar costumava ser às nove." },
      { term: "field", pt: "campo, terreno", ipa: "/fiːld/", definition: "An open area of land, often used for playing or farming.", example: "There used to be a field behind our house.", examplePt: "Tinha um campo atrás da nossa casa." },
      { term: "technology", pt: "tecnologia", ipa: "/tekˈnɑːlədʒi/", definition: "Machines and equipment developed from science.", example: "Technology has changed the way we communicate.", examplePt: "A tecnologia mudou a forma como a gente se comunica." },
      { term: "nowadays", pt: "hoje em dia", ipa: "/ˈnaʊədeɪz/", definition: "At the present time, in contrast with the past.", example: "Nowadays, everyone has a smartphone.", examplePt: "Hoje em dia, todo mundo tem smartphone." },
    ],
    expressions: [
      { en: "Believe it or not.", pt: "Acredite se quiser." },
      { en: "Back in the day…", pt: "Antigamente… / Naquela época…" },
      { en: "Things have changed.", pt: "As coisas mudaram." },
      { en: "You have no idea.", pt: "Você nem imagina." },
      { en: "Those were the days.", pt: "Aqueles eram bons tempos." },
      { en: "It wasn't easy, but…", pt: "Não era fácil, mas…" },
    ],
    grammar: [
      {
        title: { en: "Used to — past habits and states", pt: "Used to — hábitos e estados do passado" },
        examples: [
          { en: "We used to have a landline much later.", pt: "A gente teve telefone fixo bem mais tarde. (hábito)" },
          { en: "There used to be a field right there.", pt: "Tinha um campo bem ali. (estado do passado)" },
          { en: "I didn't use to like vegetables.", pt: "Eu não costumava gostar de verduras." },
          { en: "Did you use to walk to school?", pt: "Você costumava ir a pé para a escola?" },
          { en: "This neighborhood didn't use to be so busy.", pt: "Esse bairro não costumava ser tão movimentado." },
          { en: "What did people use to do before cell phones?", pt: "O que as pessoas costumavam fazer antes do celular?" },
        ],
        rule: {
          en: "Use 'used to + base verb' for habits or states that were true in the past but are not true now. Negative: didn't use to + base verb. Questions: Did + subject + use to + base verb? 'Used to' never changes form and is not used for one single past action.",
          pt: "Use 'used to + verbo base' para hábitos ou estados verdadeiros no passado, mas que não são mais verdadeiros. Negativa: didn't use to + verbo base. Perguntas: Did + sujeito + use to + verbo base? 'Used to' nunca muda de forma e não é usado para uma única ação pontual.",
        },
        mistakes: [
          { en: "✗ I use to play outside. → ✓ I used to play outside. (past form only)", pt: "✗ I use to play outside. → ✓ I used to play outside. (só a forma do passado)" },
          { en: "✗ Did you used to walk? → ✓ Did you use to walk? (base form after 'did')", pt: "✗ Did you used to walk? → ✓ Did you use to walk? (forma base depois de 'did')" },
          { en: "✗ I used to went there every day. → ✓ I used to go there every day.", pt: "✗ I used to went there every day. → ✓ I used to go there every day." },
        ],
      },
      {
        title: { en: "Used to vs. simple past", pt: "Used to vs. passado simples" },
        examples: [
          { en: "I used to visit my grandmother every summer. (repeated habit)", pt: "Eu costumava visitar minha avó todo verão. (hábito repetido)" },
          { en: "I visited my grandmother last weekend. (one specific time)", pt: "Eu visitei minha avó no fim de semana passado. (um momento específico)" },
          { en: "She used to be shy, but now she isn't.", pt: "Ela costumava ser tímida, mas agora não é mais." },
        ],
        rule: {
          en: "Use the simple past for a single, finished action at a specific time. Use 'used to' for something that happened repeatedly or was true for a period, and that is different now.",
          pt: "Use o passado simples para uma ação única e específica. Use 'used to' para algo que acontecia repetidamente ou era verdade por um período, e que é diferente agora.",
        },
        mistakes: [
          { en: "✗ I used to visit her last week. → ✓ I visited her last week. (specific time)", pt: "✗ I used to visit her last week. → ✓ I visited her last week. (tempo específico)" },
        ],
      },
    ],
    controlledPractice: [
      { id: "i27d-cp1", prompt: { en: "Complete: 'We ___ have a landline.'", pt: "Complete: 'We ___ have a landline.'" }, options: ["use to", "used to", "uses to"], answer: "used to", explanation: { en: "Past habit: used to + base verb.", pt: "Hábito do passado: used to + verbo base." } },
      { id: "i27d-cp2", prompt: { en: "Make it negative: 'I used to like vegetables.'", pt: "Transforme em negativa: 'I used to like vegetables.'" }, options: ["I didn't used to like vegetables.", "I didn't use to like vegetables.", "I don't use to like vegetables."], answer: "I didn't use to like vegetables.", explanation: { en: "didn't + use to + base verb.", pt: "didn't + use to + verbo base." } },
      { id: "i27d-cp3", prompt: { en: "Make a question: 'You used to walk to school.'", pt: "Transforme em pergunta: 'You used to walk to school.'" }, options: ["Did you use to walk to school?", "Did you used to walk to school?", "Do you use to walk to school?"], answer: "Did you use to walk to school?", explanation: { en: "Did + subject + use to + base verb.", pt: "Did + sujeito + use to + verbo base." } },
      { id: "i27d-cp4", prompt: { en: "Choose the sentence for a single past action.", pt: "Escolha a frase de uma ação única no passado." }, options: ["I used to visit her yesterday.", "I visited her yesterday.", "I use to visit her yesterday."], answer: "I visited her yesterday.", explanation: { en: "A specific time needs the simple past, not 'used to'.", pt: "Um momento específico pede o passado simples, não 'used to'." } },
      { id: "i27d-cp5", prompt: { en: "Complete: 'There ___ be a field here.'", pt: "Complete: 'There ___ be a field here.'" }, options: ["used to", "use to", "uses to"], answer: "used to", explanation: { en: "'There used to be' describes a past state.", pt: "'There used to be' descreve um estado do passado." } },
    ],
    input: {
      kind: "reading",
      title: { en: "A blog post: How my street has changed", pt: "Um post de blog: Como minha rua mudou" },
      lines: [
        { en: "When I was a child, this street used to be quiet, and kids used to play outside until dark.", pt: "Quando eu era criança, esta rua costumava ser tranquila, e as crianças costumavam brincar na rua até escurecer." },
        { en: "There didn't use to be so many cars, so we used to ride our bikes everywhere.", pt: "Não costumava ter tantos carros, então a gente andava de bicicleta pra todo lado." },
        { en: "We didn't use to have supermarkets nearby, so my mother used to shop at a small local store.", pt: "A gente não costumava ter supermercados por perto, então minha mãe costumava comprar num mercadinho local." },
        { en: "Nowadays, the street is busier, and there are two new supermarkets and a shopping center.", pt: "Hoje em dia, a rua está mais movimentada, e há dois supermercados novos e um shopping." },
        { en: "Did people use to know their neighbors better? I think they did.", pt: "As pessoas costumavam conhecer melhor os vizinhos? Eu acho que sim." },
      ],
      questions: [
        { id: "i27d-iq1", prompt: { en: "What did kids use to do on the street?", pt: "O que as crianças costumavam fazer na rua?" }, options: ["Play outside until dark", "Watch TV all day", "Do homework"], answer: "Play outside until dark", explanation: { en: "'Kids used to play outside until dark.'", pt: "'As crianças costumavam brincar na rua até escurecer.'" } },
        { id: "i27d-iq2", prompt: { en: "Why did the family ride bikes everywhere?", pt: "Por que a família andava de bicicleta pra todo lado?" }, options: ["There weren't so many cars", "Bikes were cheaper", "There was no bus"], answer: "There weren't so many cars", explanation: { en: "'There didn't use to be so many cars.'", pt: "'Não costumava ter tantos carros.'" } },
        { id: "i27d-iq3", prompt: { en: "What is different nowadays?", pt: "O que é diferente hoje em dia?" }, options: ["The street is busier with new supermarkets", "There are fewer people", "There is a field instead of buildings"], answer: "The street is busier with new supermarkets", explanation: { en: "'Nowadays, the street is busier, and there are two new supermarkets.'", pt: "'Hoje em dia, a rua está mais movimentada, com dois supermercados novos.'" } },
      ],
    },
    quickCheck: [
      { id: "i27d-qc1", prompt: { en: "What does 'nowadays' mean?", pt: "O que significa 'nowadays'?" }, options: ["At the present time", "A long time ago", "Never"], answer: "At the present time", explanation: { en: "'Nowadays' contrasts with the past.", pt: "'Nowadays' contrasta com o passado." } },
      { id: "i27d-qc2", prompt: { en: "Choose the correct negative form.", pt: "Escolha a forma negativa correta." }, options: ["She didn't used to smoke.", "She didn't use to smoke.", "She not used to smoke."], answer: "She didn't use to smoke.", explanation: { en: "didn't + use to (base form).", pt: "didn't + use to (forma base)." } },
      { id: "i27d-qc3", prompt: { en: "What is a 'chore'?", pt: "O que é uma 'chore'?" }, options: ["A small regular job at home", "A type of postcard", "A kind of allowance"], answer: "A small regular job at home", explanation: { en: "Chores are regular household tasks.", pt: "Chores são tarefas domésticas regulares." } },
      { id: "i27d-qc4", prompt: { en: "'Did they ___ to live here?'", pt: "'Did they ___ to live here?'" }, options: ["use", "used", "uses"], answer: "use", explanation: { en: "After 'did', use the base form 'use to'.", pt: "Depois de 'did', use a forma base 'use to'." } },
    ],
  },
  communicate: {
    id: "INTERMEDIATE-U27-COMMUNICATE",
    review: [
      { en: "We used to have a landline. — past habits with 'used to'.", pt: "A gente tinha telefone fixo. — hábitos do passado com 'used to'." },
      { en: "There used to be a field here. — past states.", pt: "Tinha um campo aqui. — estados do passado." },
      { en: "I didn't use to like vegetables. Did you use to walk to school?", pt: "Eu não gostava de verduras. Você costumava ir a pé para a escola?" },
      { en: "Things have changed, but people haven't changed that much.", pt: "As coisas mudaram, mas as pessoas não mudaram tanto." },
    ],
    activities: [
      {
        id: "i27c-a1",
        title: { en: "When I Was a Child", pt: "Quando eu era criança" },
        instruction: { en: "Say three things you used to do as a child and one thing you didn't use to do.", pt: "Diga três coisas que você costumava fazer quando criança e uma que não costumava fazer." },
        phrases: [
          { en: "I used to play outside every afternoon.", pt: "Eu costumava brincar na rua toda tarde." },
          { en: "I used to be afraid of the dark.", pt: "Eu costumava ter medo do escuro." },
          { en: "I didn't use to eat vegetables.", pt: "Eu não costumava comer verduras." },
        ],
        check: [
          { id: "i27c-a1q1", prompt: { en: "Which sentence describes a past habit?", pt: "Qual frase descreve um hábito do passado?" }, options: ["I used to play outside.", "I am playing outside.", "I play outside."], answer: "I used to play outside.", explanation: { en: "'Used to' expresses a past habit.", pt: "'Used to' expressa um hábito do passado." } },
          { id: "i27c-a1q2", prompt: { en: "Complete: 'I ___ afraid of the dark.' (negative)", pt: "Complete: 'I ___ afraid of the dark.' (negativa)" }, options: ["didn't used to be", "didn't use to be", "don't use to be"], answer: "didn't use to be", explanation: { en: "didn't + use to + be.", pt: "didn't + use to + be." } },
        ],
      },
      {
        id: "i27c-a2",
        title: { en: "Interview an Elder", pt: "Entreviste um mais velho" },
        instruction: { en: "Ask an older person (real or imaginary) three questions with 'used to' about their childhood.", pt: "Faça três perguntas com 'used to' a uma pessoa mais velha (real ou imaginária) sobre a infância dela." },
        phrases: [
          { en: "Did you use to have a TV at home?", pt: "Você costumava ter TV em casa?" },
          { en: "What did you use to do on weekends?", pt: "O que você costumava fazer nos fins de semana?" },
          { en: "Where did you use to live?", pt: "Onde você costumava morar?" },
        ],
        check: [
          { id: "i27c-a2q1", prompt: { en: "Choose the correct question.", pt: "Escolha a pergunta correta." }, options: ["What did you use to do?", "What did you used to do?", "What you used to do?"], answer: "What did you use to do?", explanation: { en: "Question word + did + subject + use to + verb.", pt: "Pergunta + did + sujeito + use to + verbo." } },
          { id: "i27c-a2q2", prompt: { en: "Complete: 'Where ___ you use to live?'", pt: "Complete: 'Where ___ you use to live?'" }, options: ["do", "did", "were"], answer: "did", explanation: { en: "Past question needs 'did'.", pt: "Pergunta no passado precisa de 'did'." } },
        ],
      },
      {
        id: "i27c-a3",
        title: { en: "Then and Now", pt: "Antes e agora" },
        instruction: { en: "Compare something that used to be different and how it is now. Use 'used to' and 'nowadays'.", pt: "Compare algo que costumava ser diferente e como está agora. Use 'used to' e 'nowadays'." },
        phrases: [
          { en: "This street used to be quiet. Nowadays, it's very busy.", pt: "Essa rua costumava ser tranquila. Hoje em dia, é bem movimentada." },
          { en: "People used to write letters. Nowadays, they send messages.", pt: "As pessoas costumavam escrever cartas. Hoje em dia, mandam mensagens." },
          { en: "I used to be shy. Nowadays, I love talking to people.", pt: "Eu costumava ser tímido. Hoje em dia, adoro conversar com as pessoas." },
        ],
        check: [
          { id: "i27c-a3q1", prompt: { en: "Which word contrasts with 'used to'?", pt: "Qual palavra contrasta com 'used to'?" }, options: ["nowadays", "yesterday", "lastly"], answer: "nowadays", explanation: { en: "'Nowadays' means at the present time.", pt: "'Nowadays' significa no presente." } },
          { id: "i27c-a3q2", prompt: { en: "Complete: 'There ___ be a field there.'", pt: "Complete: 'There ___ be a field there.'" }, options: ["used to", "uses to", "use to"], answer: "used to", explanation: { en: "'There used to be' for a past state.", pt: "'There used to be' para um estado do passado." } },
        ],
      },
    ],
    challenge: {
      id: "i27c-cc1",
      title: { en: "My Family's Story", pt: "A história da minha família" },
      instruction: {
        en: "Talk about how your family or neighborhood used to be, and how it is different now. Use at least four sentences with 'used to' and one with 'nowadays'.",
        pt: "Fale sobre como sua família ou bairro costumava ser, e como é diferente agora. Use pelo menos quatro frases com 'used to' e uma com 'nowadays'.",
      },
      phrases: [
        { en: "My grandparents used to live on a farm.", pt: "Meus avós costumavam morar numa fazenda." },
        { en: "They used to grow their own food.", pt: "Eles costumavam plantar a própria comida." },
        { en: "They didn't use to have electricity at first.", pt: "No começo, eles não costumavam ter luz elétrica." },
        { en: "Nowadays, our family lives in the city.", pt: "Hoje em dia, nossa família mora na cidade." },
      ],
      check: [
        { id: "i27c-cc1q1", prompt: { en: "Did you use 'used to' at least four times?", pt: "Você usou 'used to' pelo menos quatro vezes?" }, options: ["Yes", "No", "Partially"], answer: "Yes", explanation: { en: "Self-check: past habits and states with 'used to'.", pt: "Autoavaliação: hábitos e estados do passado com 'used to'." } },
        { id: "i27c-cc1q2", prompt: { en: "Did you contrast the past with 'nowadays'?", pt: "Você contrastou o passado com 'nowadays'?" }, options: ["Yes", "No", "Partially"], answer: "Yes", explanation: { en: "Self-check: nowadays for the present.", pt: "Autoavaliação: nowadays para o presente." } },
      ],
    },
    lessonReview: {
      summary: {
        en: "You talked about past habits and states with 'used to', and compared the past with life nowadays.",
        pt: "Você falou de hábitos e estados do passado com 'used to', e comparou o passado com a vida de hoje em dia.",
      },
      canDo: [
        { en: "I can describe past habits with 'used to'.", pt: "Consigo descrever hábitos do passado com 'used to'." },
        { en: "I can make it negative and ask questions with 'used to'.", pt: "Consigo usar a negativa e fazer perguntas com 'used to'." },
        { en: "I can contrast the past with 'nowadays'.", pt: "Consigo contrastar o passado com 'nowadays'." },
      ],
      next: { en: "Next unit: house rules — talking about obligations with have to and must.", pt: "Próxima unidade: regras da casa — falar de obrigações com have to e must." },
    },
  },
};

/**
 * Intermediate — Unit 28 (House Rules). Conteúdo autoral Speak2Co.
 * Foco: have to / must / don't have to / mustn't para obrigação, e
 * some/any/much/many para quantidades. Personagens: Priya e Sam, colegas de apê.
 */
export const INTERMEDIATE_U28: CourseUnit = {
  code: "INTERMEDIATE-U28",
  number: 28,
  title: "House Rules — What do you have to do?",
  titlePt: "Regras da Casa — O que você tem que fazer?",
  cefr: "B1",
  objective: {
    en: "Talk about obligation, prohibition and lack of obligation with 'have to', 'must' and 'mustn't', and describe quantities with 'some', 'any', 'much' and 'many'.",
    pt: "Falar de obrigação, proibição e falta de obrigação com 'have to', 'must' e 'mustn't', e descrever quantidades com 'some', 'any', 'much' e 'many'.",
  },
  communicationGoal: {
    en: "Agree on house rules with a roommate and make a shared shopping list.",
    pt: "Combinar regras da casa com um colega de apê e montar uma lista de compras conjunta.",
  },
  prerequisites: {
    en: "Used to for past habits, simple present and simple past from previous units.",
    pt: "Used to para hábitos do passado, presente simples e passado simples das unidades anteriores.",
  },
  newContent: {
    en: "Grammar: 'have to / don't have to', 'must / mustn't' for obligation and prohibition; 'some / any / much / many' | Vocabulary: shared housing (12 items) | Expressions: agreeing on rules",
    pt: "Gramática: 'have to / don't have to', 'must / mustn't' para obrigação e proibição; 'some / any / much / many' | Vocabulário: moradia compartilhada (12 itens) | Expressões: combinando regras",
  },
  reviewContent: {
    en: "Used to for past habits and states, and comparative adjectives.",
    pt: "Used to para hábitos e estados do passado, e adjetivos comparativos.",
  },
  discover: {
    id: "INTERMEDIATE-U28-DISCOVER",
    warmUp: {
      prompt: {
        en: "Look at the picture. What rules do people usually have when they share a house?",
        pt: "Observe a imagem. Que regras as pessoas costumam ter quando dividem uma casa?",
      },
      phrases: [
        { en: "Do you have to clean up after yourself at home?", pt: "Você tem que limpar depois de si mesmo em casa?" },
        { en: "What rules do you have with your roommates?", pt: "Que regras você tem com seus colegas de apê?" },
        { en: "Is there anything you mustn't do in your building?", pt: "Tem alguma coisa que você não pode fazer no seu prédio?" },
      ],
    },
    context: {
      situation: {
        en: "Priya and Sam just moved into a small apartment together. They are setting the house rules and making a shopping list for the week.",
        pt: "Priya e Sam acabaram de se mudar juntos para um apartamento pequeno. Eles estão definindo as regras da casa e fazendo a lista de compras da semana.",
      },
      dialogue: [
        { who: "Priya", en: "Okay, first rule: we have to wash our own dishes right after we eat.", pt: "Ok, primeira regra: temos que lavar nossa própria louça logo depois de comer." },
        { who: "Sam", en: "Fair enough. And we mustn't leave the trash for more than two days.", pt: "Justo. E não podemos deixar o lixo por mais de dois dias." },
        { who: "Priya", en: "Agreed. Do we have to split the rent exactly in half?", pt: "Combinado. Temos que dividir o aluguel exatamente na metade?" },
        { who: "Sam", en: "Yes, but we don't have to split the internet bill — I already pay for that one.", pt: "Sim, mas não precisamos dividir a conta de internet — eu já pago essa." },
        { who: "Priya", en: "Great. Now, how much milk do we need this week?", pt: "Ótimo. Agora, quanta quantidade de leite a gente precisa essa semana?" },
        { who: "Sam", en: "We don't have much milk left, so we need some. And we don't have any coffee at all.", pt: "Não sobrou muito leite, então precisamos de um pouco. E não temos café nenhum." },
        { who: "Priya", en: "How many eggs are in the fridge?", pt: "Quantos ovos tem na geladeira?" },
        { who: "Sam", en: "There aren't many — just three. Let's add eggs to the list too.", pt: "Não tem muitos — só três. Vamos colocar ovos na lista também." },
      ],
    },
    vocabulary: [
      { term: "roommate", pt: "colega de apartamento", ipa: "/ˈruːmmeɪt/", definition: "A person you share a house or apartment with.", example: "My roommate and I split the bills evenly.", examplePt: "Eu e meu colega de apê dividimos as contas igualmente." },
      { term: "rent", pt: "aluguel", ipa: "/rent/", definition: "Money you pay regularly to live in a place.", example: "We have to pay the rent on the first of the month.", examplePt: "Temos que pagar o aluguel no primeiro dia do mês." },
      { term: "landlord", pt: "senhorio, proprietário", ipa: "/ˈlændlɔːrd/", definition: "A person who owns a property and rents it to others.", example: "You mustn't paint the walls without asking the landlord.", examplePt: "Você não pode pintar as paredes sem pedir ao senhorio." },
      { term: "lease", pt: "contrato de aluguel", ipa: "/liːs/", definition: "A legal agreement to rent a place for a period of time.", example: "We have to sign the lease before we move in.", examplePt: "Temos que assinar o contrato antes de nos mudarmos." },
      { term: "deposit", pt: "depósito, caução", ipa: "/dɪˈpɑːzɪt/", definition: "Money you pay in advance as a guarantee.", example: "You have to pay a deposit before you move in.", examplePt: "Você tem que pagar um depósito antes de se mudar." },
      { term: "utilities", pt: "contas de serviços (água, luz, etc.)", ipa: "/juːˈtɪlətiz/", definition: "Services like water, electricity and gas.", example: "We split the utilities every month.", examplePt: "Dividimos as contas de água e luz todo mês." },
      { term: "trash", pt: "lixo", ipa: "/træʃ/", definition: "Waste that you throw away.", example: "You mustn't leave the trash outside the door.", examplePt: "Você não pode deixar o lixo do lado de fora da porta." },
      { term: "dishes", pt: "louça", ipa: "/ˈdɪʃɪz/", definition: "Plates, cups and other things used for eating.", example: "We have to wash the dishes after dinner.", examplePt: "Temos que lavar a louça depois do jantar." },
      { term: "groceries", pt: "mantimentos, compras do mercado", ipa: "/ˈɡroʊsəriz/", definition: "Food and other items you buy at the market.", example: "We need to buy some groceries this weekend.", examplePt: "Precisamos comprar mantimentos esse fim de semana." },
      { term: "receipt", pt: "recibo, nota fiscal", ipa: "/rɪˈsiːt/", definition: "A paper that proves you paid for something.", example: "Keep the receipt in case we split the bill.", examplePt: "Guarde o recibo caso a gente divida a conta." },
      { term: "recycle", pt: "reciclar", ipa: "/riːˈsaɪkl/", definition: "To use waste materials again instead of throwing them away.", example: "We have to recycle the plastic bottles.", examplePt: "Temos que reciclar as garrafas de plástico." },
      { term: "guest", pt: "convidado, visita", ipa: "/ɡest/", definition: "A person invited to visit or stay somewhere.", example: "You mustn't have guests after midnight.", examplePt: "Você não pode ter visitas depois da meia-noite." },
    ],
    expressions: [
      { en: "Fair enough.", pt: "Justo. / Faz sentido." },
      { en: "Agreed.", pt: "Combinado." },
      { en: "Let's add it to the list.", pt: "Vamos colocar na lista." },
      { en: "That works for me.", pt: "Por mim tudo bem." },
      { en: "No big deal.", pt: "Não é grande coisa." },
      { en: "As long as…", pt: "Contanto que…" },
    ],
    grammar: [
      {
        title: { en: "Have to / don't have to — obligation and lack of obligation", pt: "Have to / don't have to — obrigação e falta de obrigação" },
        examples: [
          { en: "We have to wash our own dishes.", pt: "Temos que lavar nossa própria louça. (obrigação)" },
          { en: "We don't have to split the internet bill.", pt: "Não precisamos dividir a conta de internet. (não é obrigatório)" },
          { en: "Does she have to pay a deposit?", pt: "Ela tem que pagar um depósito?" },
          { en: "Do you have to sign a lease?", pt: "Você tem que assinar um contrato?" },
        ],
        rule: {
          en: "Use 'have to / has to + base verb' for obligations that come from rules or circumstances. Negative 'don't have to / doesn't have to' means something is not necessary, not that it is forbidden. Questions use do/does.",
          pt: "Use 'have to / has to + verbo base' para obrigações que vêm de regras ou circunstâncias. A negativa 'don't have to / doesn't have to' significa que algo não é necessário, não que é proibido. Perguntas usam do/does.",
        },
        mistakes: [
          { en: "✗ She have to pay. → ✓ She has to pay. (third person)", pt: "✗ She have to pay. → ✓ She has to pay. (terceira pessoa)" },
          { en: "✗ I don't have to smoke here. (meaning forbidden) → use 'mustn't' for prohibition.", pt: "✗ I don't have to smoke here. (com sentido de proibido) → use 'mustn't' para proibição." },
        ],
      },
      {
        title: { en: "Must / mustn't — strong obligation and prohibition", pt: "Must / mustn't — obrigação forte e proibição" },
        examples: [
          { en: "We mustn't leave the trash for more than two days.", pt: "Não podemos deixar o lixo por mais de dois dias." },
          { en: "You mustn't have guests after midnight.", pt: "Você não pode ter visitas depois da meia-noite." },
          { en: "Everyone must sign the lease.", pt: "Todo mundo deve assinar o contrato." },
        ],
        rule: {
          en: "Use 'must' for strong obligation (often rules) and 'mustn't' for prohibition — something is not allowed. 'Must' doesn't change with the subject and is not usually used in questions in everyday speech (we prefer 'have to').",
          pt: "Use 'must' para obrigação forte (geralmente regras) e 'mustn't' para proibição — algo que não é permitido. 'Must' não muda com o sujeito e geralmente não é usado em perguntas no dia a dia (preferimos 'have to').",
        },
        mistakes: [
          { en: "✗ You don't must smoke here. → ✓ You mustn't smoke here.", pt: "✗ You don't must smoke here. → ✓ You mustn't smoke here." },
        ],
      },
      {
        title: { en: "Some / any / much / many", pt: "Some / any / much / many" },
        examples: [
          { en: "We need some milk.", pt: "Precisamos de um pouco de leite." },
          { en: "We don't have any coffee.", pt: "Não temos café nenhum." },
          { en: "We don't have much milk left.", pt: "Não sobrou muito leite." },
          { en: "There aren't many eggs.", pt: "Não tem muitos ovos." },
          { en: "How much milk do we need? How many eggs are there?", pt: "Quanto leite a gente precisa? Quantos ovos tem?" },
        ],
        rule: {
          en: "Use 'some' in affirmative sentences and offers; use 'any' in negatives and questions. Use 'much' with uncountable nouns (milk, coffee) and 'many' with countable nouns (eggs, apples), usually in negatives and questions.",
          pt: "Use 'some' em frases afirmativas e ofertas; use 'any' em negativas e perguntas. Use 'much' com substantivos incontáveis (milk, coffee) e 'many' com contáveis (eggs, apples), geralmente em negativas e perguntas.",
        },
        mistakes: [
          { en: "✗ We have some coffee? → ✓ Do we have any coffee?", pt: "✗ We have some coffee? → ✓ Do we have any coffee?" },
          { en: "✗ How much eggs? → ✓ How many eggs?", pt: "✗ How much eggs? → ✓ How many eggs?" },
        ],
      },
    ],
    controlledPractice: [
      { id: "i28d-cp1", prompt: { en: "Complete: 'She ___ to pay a deposit.'", pt: "Complete: 'She ___ to pay a deposit.'" }, options: ["have", "has", "having"], answer: "has", explanation: { en: "Third person: has to.", pt: "Terceira pessoa: has to." } },
      { id: "i28d-cp2", prompt: { en: "Which means 'it's not necessary'?", pt: "Qual significa 'não é necessário'?" }, options: ["We mustn't go.", "We don't have to go.", "We can't go."], answer: "We don't have to go.", explanation: { en: "Don't have to = not necessary.", pt: "Don't have to = não é necessário." } },
      { id: "i28d-cp3", prompt: { en: "Which means 'it's forbidden'?", pt: "Qual significa 'é proibido'?" }, options: ["You don't have to smoke here.", "You mustn't smoke here.", "You have to smoke here."], answer: "You mustn't smoke here.", explanation: { en: "Mustn't = prohibition.", pt: "Mustn't = proibição." } },
      { id: "i28d-cp4", prompt: { en: "Complete: 'We don't have ___ coffee.'", pt: "Complete: 'We don't have ___ coffee.'" }, options: ["some", "any", "many"], answer: "any", explanation: { en: "Negatives usually use 'any'.", pt: "Negativas geralmente usam 'any'." } },
      { id: "i28d-cp5", prompt: { en: "Complete: 'How ___ eggs are there?'", pt: "Complete: 'How ___ eggs are there?'" }, options: ["much", "many", "some"], answer: "many", explanation: { en: "'Eggs' is countable: use 'many'.", pt: "'Eggs' é contável: use 'many'." } },
    ],
    input: {
      kind: "listening",
      title: { en: "Building rules announcement", pt: "Aviso de regras do prédio" },
      lines: [
        { en: "Good morning, residents. A few reminders about our building rules.", pt: "Bom dia, moradores. Alguns lembretes sobre as regras do prédio." },
        { en: "You have to keep the hallways clean, and you mustn't leave bikes there.", pt: "Vocês têm que manter os corredores limpos, e não podem deixar bicicletas ali." },
        { en: "You don't have to pay for parking, but you must park in your own spot.", pt: "Vocês não precisam pagar pelo estacionamento, mas devem estacionar na própria vaga." },
        { en: "We don't have much space for guest parking, so please don't invite many cars at once.", pt: "Não temos muito espaço para visitantes, então não convidem muitos carros de uma vez." },
        { en: "And remember: you mustn't make noise after 10 p.m. Thank you for your cooperation!", pt: "E lembrem-se: não podem fazer barulho depois das 22h. Obrigado pela colaboração!" },
      ],
      questions: [
        { id: "i28d-iq1", prompt: { en: "What mustn't residents leave in the hallways?", pt: "O que os moradores não podem deixar nos corredores?" }, options: ["Bikes", "Guests", "Trash bags"], answer: "Bikes", explanation: { en: "'You mustn't leave bikes there.'", pt: "'Vocês não podem deixar bicicletas ali.'" } },
        { id: "i28d-iq2", prompt: { en: "Do residents have to pay for parking?", pt: "Os moradores têm que pagar pelo estacionamento?" }, options: ["Yes", "No", "Only on weekends"], answer: "No", explanation: { en: "'You don't have to pay for parking.'", pt: "'Vocês não precisam pagar pelo estacionamento.'" } },
        { id: "i28d-iq3", prompt: { en: "What time mustn't residents make noise after?", pt: "A partir de que horário não podem fazer barulho?" }, options: ["10 p.m.", "midnight", "9 p.m."], answer: "10 p.m.", explanation: { en: "'You mustn't make noise after 10 p.m.'", pt: "'Não podem fazer barulho depois das 22h.'" } },
      ],
    },
    quickCheck: [
      { id: "i28d-qc1", prompt: { en: "What is a 'lease'?", pt: "O que é um 'lease'?" }, options: ["A rental agreement", "A type of trash", "A shopping list"], answer: "A rental agreement", explanation: { en: "A lease is a legal renting contract.", pt: "Um lease é um contrato de aluguel." } },
      { id: "i28d-qc2", prompt: { en: "Complete: 'We ___ split the rent.'", pt: "Complete: 'We ___ split the rent.'" }, options: ["have to", "has to", "having to"], answer: "have to", explanation: { en: "We + have to.", pt: "We + have to." } },
      { id: "i28d-qc3", prompt: { en: "Choose the correct quantity word: 'There aren't ___ eggs.'", pt: "Escolha a palavra correta: 'There aren't ___ eggs.'" }, options: ["much", "many", "any much"], answer: "many", explanation: { en: "Countable noun + many.", pt: "Substantivo contável + many." } },
      { id: "i28d-qc4", prompt: { en: "'You ___ leave guests without asking.' (prohibition)", pt: "'You ___ leave guests without asking.' (proibição)" }, options: ["don't have to", "mustn't", "must"], answer: "mustn't", explanation: { en: "Prohibition = mustn't.", pt: "Proibição = mustn't." } },
    ],
  },
  communicate: {
    id: "INTERMEDIATE-U28-COMMUNICATE",
    review: [
      { en: "We have to wash our own dishes. Do we have to split the internet bill?", pt: "Temos que lavar nossa própria louça. Precisamos dividir a conta de internet?" },
      { en: "We mustn't leave the trash for more than two days.", pt: "Não podemos deixar o lixo por mais de dois dias." },
      { en: "We don't have much milk, but we don't have any coffee.", pt: "Não sobrou muito leite, e não temos café nenhum." },
      { en: "How many eggs are there? There aren't many.", pt: "Quantos ovos tem? Não tem muitos." },
    ],
    activities: [
      {
        id: "i28c-a1",
        title: { en: "Our House Rules", pt: "Nossas regras da casa" },
        instruction: { en: "Create three house rules using 'have to' and 'mustn't'.", pt: "Crie três regras da casa usando 'have to' e 'mustn't'." },
        phrases: [
          { en: "We have to take out the trash on Fridays.", pt: "Temos que tirar o lixo às sextas." },
          { en: "We mustn't leave dirty dishes overnight.", pt: "Não podemos deixar louça suja de um dia pro outro." },
          { en: "We don't have to clean every day, but we have to clean every week.", pt: "Não precisamos limpar todo dia, mas temos que limpar toda semana." },
        ],
        check: [
          { id: "i28c-a1q1", prompt: { en: "Which expresses prohibition?", pt: "Qual expressa proibição?" }, options: ["We have to clean.", "We mustn't smoke inside.", "We don't have to pay."], answer: "We mustn't smoke inside.", explanation: { en: "Mustn't = forbidden.", pt: "Mustn't = proibido." } },
          { id: "i28c-a1q2", prompt: { en: "Complete: 'He ___ to pay the rent.'", pt: "Complete: 'He ___ to pay the rent.'" }, options: ["have", "has", "having"], answer: "has", explanation: { en: "Third person singular: has to.", pt: "Terceira pessoa: has to." } },
        ],
      },
      {
        id: "i28c-a2",
        title: { en: "Shopping List", pt: "Lista de compras" },
        instruction: { en: "Talk about what you have and don't have at home, using some, any, much and many.", pt: "Fale sobre o que você tem e não tem em casa, usando some, any, much e many." },
        phrases: [
          { en: "We have some rice, but we don't have any beans.", pt: "Temos um pouco de arroz, mas não temos feijão nenhum." },
          { en: "We don't have much sugar left.", pt: "Não sobrou muito açúcar." },
          { en: "How many apples do we have?", pt: "Quantas maçãs a gente tem?" },
        ],
        check: [
          { id: "i28c-a2q1", prompt: { en: "Complete: 'We don't have ___ apples.'", pt: "Complete: 'We don't have ___ apples.'" }, options: ["much", "many", "some"], answer: "many", explanation: { en: "Countable + many.", pt: "Contável + many." } },
          { id: "i28c-a2q2", prompt: { en: "Complete: 'Can I have ___ water, please?'", pt: "Complete: 'Can I have ___ water, please?'" }, options: ["any", "some", "many"], answer: "some", explanation: { en: "Offers/requests usually use 'some'.", pt: "Ofertas/pedidos geralmente usam 'some'." } },
        ],
      },
      {
        id: "i28c-a3",
        title: { en: "Landlord Rules", pt: "Regras do proprietário" },
        instruction: { en: "Imagine you are a landlord. Tell a new tenant three rules of the building.", pt: "Imagine que você é o proprietário. Diga a um novo inquilino três regras do prédio." },
        phrases: [
          { en: "You have to pay the rent by the fifth of the month.", pt: "Você tem que pagar o aluguel até o dia cinco." },
          { en: "You mustn't have loud parties on weekdays.", pt: "Você não pode fazer festas barulhentas nos dias de semana." },
          { en: "You don't have to pay for water, but you have to pay for electricity.", pt: "Você não precisa pagar pela água, mas tem que pagar pela luz." },
        ],
        check: [
          { id: "i28c-a3q1", prompt: { en: "What must a new tenant sign?", pt: "O que um novo inquilino deve assinar?" }, options: ["a lease", "a receipt", "a deposit"], answer: "a lease", explanation: { en: "A lease is the rental agreement.", pt: "O lease é o contrato de aluguel." } },
          { id: "i28c-a3q2", prompt: { en: "Choose the correct sentence.", pt: "Escolha a frase correta." }, options: ["You must to pay rent.", "You have to pay rent.", "You must paying rent."], answer: "You have to pay rent.", explanation: { en: "Have to + base verb.", pt: "Have to + verbo base." } },
        ],
      },
    ],
    challenge: {
      id: "i28c-cc1",
      title: { en: "Negotiate the Rules", pt: "Negocie as regras" },
      instruction: {
        en: "Talk out loud about the rules you would set with a roommate: what you have to do, what you mustn't do, and what you don't have to do. Mention quantities of something you would share.",
        pt: "Fale em voz alta sobre as regras que você combinaria com um colega de apê: o que tem que fazer, o que não pode fazer, e o que não precisa fazer. Mencione a quantidade de algo que vocês dividiriam.",
      },
      phrases: [
        { en: "We have to keep the kitchen clean.", pt: "Temos que manter a cozinha limpa." },
        { en: "We mustn't invite guests without asking first.", pt: "Não podemos convidar visitas sem avisar antes." },
        { en: "We don't have to share our food, but we do have to share the internet bill.", pt: "Não precisamos dividir a comida, mas temos que dividir a conta de internet." },
        { en: "We don't have much space, so we can't buy many things.", pt: "Não temos muito espaço, então não podemos comprar muitas coisas." },
      ],
      check: [
        { id: "i28c-cc1q1", prompt: { en: "Did you use 'have to' and 'mustn't' correctly?", pt: "Você usou 'have to' e 'mustn't' corretamente?" }, options: ["Yes", "No", "Partially"], answer: "Yes", explanation: { en: "Self-check: obligation vs. prohibition.", pt: "Autoavaliação: obrigação vs. proibição." } },
        { id: "i28c-cc1q2", prompt: { en: "Did you use 'much' or 'many' correctly?", pt: "Você usou 'much' ou 'many' corretamente?" }, options: ["Yes", "No", "Partially"], answer: "Yes", explanation: { en: "Self-check: much with uncountable, many with countable.", pt: "Autoavaliação: much com incontável, many com contável." } },
      ],
    },
    lessonReview: {
      summary: {
        en: "You talked about obligation and prohibition with 'have to' and 'mustn't', and described quantities with 'some', 'any', 'much' and 'many'.",
        pt: "Você falou de obrigação e proibição com 'have to' e 'mustn't', e descreveu quantidades com 'some', 'any', 'much' e 'many'.",
      },
      canDo: [
        { en: "I can talk about obligations with 'have to'.", pt: "Consigo falar de obrigações com 'have to'." },
        { en: "I can express prohibition with 'mustn't'.", pt: "Consigo expressar proibição com 'mustn't'." },
        { en: "I can ask and answer about quantities with 'much' and 'many'.", pt: "Consigo perguntar e responder sobre quantidades com 'much' e 'many'." },
      ],
      next: { en: "Next unit: gossip and news — reporting what people said.", pt: "Próxima unidade: fofocas e notícias — relatar o que as pessoas disseram." },
    },
  },
};
