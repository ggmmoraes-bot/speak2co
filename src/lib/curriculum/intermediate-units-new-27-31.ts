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
