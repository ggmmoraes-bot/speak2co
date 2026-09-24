import type { CourseUnit } from "./types";

/**
 * Intermediate — Unit 21 (Have You Ever...?). Conteúdo autoral Speak2Co.
 * Foco: present perfect para experiências (ever/never), already/yet/just, e
 * contraste com o passado simples para eventos com tempo definido.
 * Personagens originais: Rafael e Camila, amigos trocando histórias de viagem.
 */
export const INTERMEDIATE_U21: CourseUnit = {
  code: "INTERMEDIATE-U21",
  number: 21,
  title: "Have You Ever...? — Have you ever tried something new?",
  titlePt: "Você já...? — Você já tentou algo novo?",
  cefr: "B1",
  objective: {
    en: "Talk about life experiences with the present perfect ('have/has + past participle'), use 'ever' and 'never', and add 'already', 'yet' and 'just' to show when something happened.",
    pt: "Falar sobre experiências de vida com o present perfect ('have/has + particípio'), usar 'ever' e 'never', e acrescentar 'already', 'yet' e 'just' para mostrar quando algo aconteceu.",
  },
  communicationGoal: {
    en: "Ask and answer questions about experiences you've had, and update a friend on things you have just finished or haven't done yet.",
    pt: "Perguntar e responder sobre experiências que você já teve, e atualizar um amigo sobre coisas que você acabou de terminar ou ainda não fez.",
  },
  prerequisites: {
    en: "Intermediate units 1-20: simple past for finished events, modal verbs, comparisons and object pronouns.",
    pt: "Unidades Intermediate 1-20: passado simples para eventos concluídos, verbos modais, comparações e pronomes objeto.",
  },
  newContent: {
    en: "Grammar: present perfect for experience with 'ever/never' + 'already/yet/just' | Vocabulary: travel and new experiences (12 items) | Expressions: reacting to news and experiences",
    pt: "Gramática: present perfect para experiência com 'ever/never' + 'already/yet/just' | Vocabulário: viagens e experiências novas (12 itens) | Expressões: reagir a notícias e experiências",
  },
  reviewContent: {
    en: "Contrast between the present perfect (unspecified time) and the simple past (specific finished time).",
    pt: "Contraste entre o present perfect (tempo não especificado) e o passado simples (tempo específico e concluído).",
  },
  discover: {
    id: "INTERMEDIATE-U21-DISCOVER",
    warmUp: {
      prompt: {
        en: "Look at the picture. What is something you have never done, but would like to try?",
        pt: "Observe a imagem. O que é algo que você nunca fez, mas gostaria de tentar?",
      },
      phrases: [
        { en: "Have you ever traveled alone?", pt: "Você já viajou sozinho(a)?" },
        { en: "What's the most interesting food you've ever tried?", pt: "Qual é a comida mais interessante que você já experimentou?" },
        { en: "Have you already visited another country this year?", pt: "Você já visitou outro país este ano?" },
      ],
    },
    context: {
      situation: {
        en: "Rafael just got back from a backpacking trip. Camila, his old friend, meets him for coffee to hear about his adventures.",
        pt: "Rafael acabou de voltar de uma viagem de mochilão. Camila, sua velha amiga, se encontra com ele para um café e para ouvir sobre suas aventuras.",
      },
      dialogue: [
        { who: "Camila", en: "You're back! Have you ever traveled for so long before?", pt: "Você voltou! Você já tinha viajado por tanto tempo antes?" },
        { who: "Rafael", en: "Never! This was my longest trip ever. I've already visited five countries this year.", pt: "Nunca! Essa foi minha viagem mais longa. Já visitei cinco países este ano." },
        { who: "Camila", en: "Wow! Have you tried any strange food?", pt: "Uau! Você já experimentou alguma comida estranha?" },
        { who: "Rafael", en: "Yes, I've just eaten fried insects in Thailand. I haven't told my mother yet!", pt: "Sim, acabei de comer insetos fritos na Tailândia. Ainda não contei para minha mãe!" },
        { who: "Camila", en: "Haha! Have you ever been scared during the trip?", pt: "Haha! Você já ficou com medo durante a viagem?" },
        { who: "Rafael", en: "Once, when I got lost at night. I haven't had that feeling since I was a kid.", pt: "Uma vez, quando me perdi à noite. Eu não sentia isso desde que era criança." },
        { who: "Camila", en: "I haven't traveled alone yet, but your stories are giving me courage.", pt: "Eu ainda não viajei sozinha, mas suas histórias estão me dando coragem." },
        { who: "Rafael", en: "Just do it! I've already planned my next trip.", pt: "Simplesmente faça! Eu já planejei minha próxima viagem." },
      ],
    },
    vocabulary: [
      { term: "experience", pt: "experiência", ipa: "/ɪkˈspɪriəns/", definition: "Something that happens to you that you can learn from.", example: "It was an unforgettable experience.", examplePt: "Foi uma experiência inesquecível." },
      { term: "backpacking", pt: "viagem de mochilão", ipa: "/ˈbækpækɪŋ/", definition: "Traveling with a backpack, usually on a low budget.", example: "Backpacking taught me to be more flexible.", examplePt: "A viagem de mochilão me ensinou a ser mais flexível." },
      { term: "adventure", pt: "aventura", ipa: "/ədˈventʃər/", definition: "An exciting or unusual experience.", example: "This trip was a real adventure.", examplePt: "Essa viagem foi uma verdadeira aventura." },
      { term: "abroad", pt: "no exterior", ipa: "/əˈbrɔːd/", definition: "In or to a foreign country.", example: "Have you ever studied abroad?", examplePt: "Você já estudou no exterior?" },
      { term: "strange", pt: "estranho(a)", ipa: "/streɪndʒ/", definition: "Unusual or unfamiliar.", example: "I tried a strange fruit yesterday.", examplePt: "Eu experimentei uma fruta estranha ontem." },
      { term: "scared", pt: "assustado(a)", ipa: "/skerd/", definition: "Feeling fear.", example: "I was scared when I got lost.", examplePt: "Fiquei assustado quando me perdi." },
      { term: "courage", pt: "coragem", ipa: "/ˈkɜːrɪdʒ/", definition: "The ability to do something that frightens you.", example: "It takes courage to travel alone.", examplePt: "É preciso coragem para viajar sozinho." },
      { term: "unforgettable", pt: "inesquecível", ipa: "/ˌʌnfərˈɡetəbl/", definition: "So special that you will always remember it.", example: "It was an unforgettable trip.", examplePt: "Foi uma viagem inesquecível." },
      { term: "lost", pt: "perdido(a)", ipa: "/lɔːst/", definition: "Unable to find your way.", example: "I got lost in the old city.", examplePt: "Eu me perdi na cidade antiga." },
      { term: "insect", pt: "inseto", ipa: "/ˈɪnsekt/", definition: "A small creature with six legs.", example: "He ate a fried insect for the first time.", examplePt: "Ele comeu um inseto frito pela primeira vez." },
      { term: "journey", pt: "jornada, viagem", ipa: "/ˈdʒɜːrni/", definition: "An act of traveling from one place to another.", example: "It was a long journey by bus.", examplePt: "Foi uma longa jornada de ônibus." },
      { term: "plan", pt: "planejar / plano", ipa: "/plæn/", definition: "To decide in advance what you will do.", example: "I've already planned my next trip.", examplePt: "Eu já planejei minha próxima viagem." },
    ],
    expressions: [
      { en: "Just do it!", pt: "Simplesmente faça!" },
      { en: "my longest trip ever", pt: "minha viagem mais longa" },
      { en: "I haven't... yet", pt: "Eu ainda não..." },
      { en: "I've just...", pt: "Eu acabei de..." },
      { en: "Wow, that's amazing!", pt: "Uau, isso é incrível!" },
      { en: "It's giving me courage.", pt: "Isso está me dando coragem." },
    ],
    grammar: [
      {
        title: { en: "Present perfect with ever / never", pt: "Present perfect com ever / never" },
        examples: [
          { en: "Have you ever traveled alone?", pt: "Você já viajou sozinho(a)?" },
          { en: "I've never been to Thailand before.", pt: "Eu nunca fui à Tailândia antes." },
          { en: "This was my longest trip ever.", pt: "Essa foi minha viagem mais longa." },
          { en: "Has she ever tried fried insects?", pt: "Ela já experimentou insetos fritos?" },
          { en: "I haven't had that feeling since I was a kid.", pt: "Eu não sentia isso desde que era criança." },
        ],
        rule: {
          en: "Use the present perfect ('have/has + past participle') with 'ever' in questions and 'never' in negative statements to talk about life experience, without saying exactly when it happened.",
          pt: "Use o present perfect ('have/has + particípio') com 'ever' em perguntas e 'never' em negativas para falar de experiência de vida, sem dizer exatamente quando aconteceu.",
        },
        mistakes: [
          { en: "✗ Did you ever traveled alone? → ✓ Have you ever traveled alone?", pt: "✗ Did you ever traveled alone? → ✓ Have you ever traveled alone?" },
          { en: "✗ I never have been to Thailand. → ✓ I've never been to Thailand.", pt: "✗ I never have been to Thailand. → ✓ I've never been to Thailand." },
        ],
      },
      {
        title: { en: "Already, yet, just", pt: "Already, yet, just" },
        examples: [
          { en: "I've already visited five countries this year.", pt: "Já visitei cinco países este ano." },
          { en: "I haven't told my mother yet!", pt: "Ainda não contei para minha mãe!" },
          { en: "I've just eaten fried insects.", pt: "Acabei de comer insetos fritos." },
          { en: "Have you finished packing yet?", pt: "Você já terminou de fazer as malas?" },
          { en: "I've already planned my next trip.", pt: "Eu já planejei minha próxima viagem." },
        ],
        rule: {
          en: "'Already' goes in affirmative sentences to show something happened sooner than expected. 'Yet' goes at the end of negatives and questions to ask/say something hasn't happened. 'Just' shows something happened a very short time ago.",
          pt: "'Already' aparece em frases afirmativas para mostrar que algo aconteceu antes do esperado. 'Yet' vai no final de negativas e perguntas para dizer que algo ainda não aconteceu. 'Just' mostra que algo aconteceu há pouquíssimo tempo.",
        },
        mistakes: [
          { en: "✗ I haven't told my mother already. → ✓ I haven't told my mother yet.", pt: "✗ I haven't told my mother already. → ✓ I haven't told my mother yet." },
          { en: "✗ I have eaten just. → ✓ I've just eaten.", pt: "✗ I have eaten just. → ✓ I've just eaten." },
        ],
      },
      {
        title: { en: "Review: present perfect vs. simple past", pt: "Revisão: present perfect x passado simples" },
        examples: [
          { en: "I've visited Thailand. (unspecified time)", pt: "Eu visitei a Tailândia. (tempo não especificado)" },
          { en: "I visited Thailand in March. (specific time)", pt: "Eu visitei a Tailândia em março. (tempo específico)" },
          { en: "I got lost last night.", pt: "Eu me perdi ontem à noite." },
          { en: "Have you ever gotten lost?", pt: "Você já se perdeu alguma vez?" },
        ],
        rule: {
          en: "Use the present perfect when the time isn't mentioned or important (experience). Use the simple past when you say or know exactly when it happened.",
          pt: "Use o present perfect quando o tempo não é mencionado ou não é importante (experiência). Use o passado simples quando você diz ou sabe exatamente quando aconteceu.",
        },
        mistakes: [
          { en: "✗ I have visited Thailand in March. → ✓ I visited Thailand in March.", pt: "✗ I have visited Thailand in March. → ✓ I visited Thailand in March." },
          { en: "✗ Did you ever visit Thailand? → ✓ Have you ever visited Thailand?", pt: "✗ Did you ever visit Thailand? → ✓ Have you ever visited Thailand?" },
        ],
      },
    ],
    controlledPractice: [
      { id: "i21d-cp1", prompt: { en: "Complete: 'Have you ___ tried sushi?'", pt: "Complete: 'Have you ___ tried sushi?'" }, options: ["ever", "never", "yet"], answer: "ever", explanation: { en: "'Ever' is used in present perfect questions.", pt: "'Ever' é usado em perguntas no present perfect." } },
      { id: "i21d-cp2", prompt: { en: "Complete: 'I've ___ been to Japan.'", pt: "Complete: 'I've ___ been to Japan.'" }, options: ["never", "yet", "already"], answer: "never", explanation: { en: "'Never' makes the sentence negative in meaning.", pt: "'Never' torna a frase negativa em significado." } },
      { id: "i21d-cp3", prompt: { en: "Complete: 'I haven't finished ___.'", pt: "Complete: 'I haven't finished ___.'" }, options: ["already", "yet", "just"], answer: "yet", explanation: { en: "'Yet' is used in negatives to say something hasn't happened.", pt: "'Yet' é usado em negativas para dizer que algo ainda não aconteceu." } },
      { id: "i21d-cp4", prompt: { en: "Choose the correct past participle of 'eat'.", pt: "Escolha o particípio correto de 'eat'." }, options: ["ate", "eaten", "eating"], answer: "eaten", explanation: { en: "'Eat' is irregular: eat - ate - eaten.", pt: "'Eat' é irregular: eat - ate - eaten." } },
      { id: "i21d-cp5", prompt: { en: "Choose the correct sentence.", pt: "Escolha a frase correta." }, options: ["I visited Paris in 2019.", "I have visited Paris in 2019.", "I have visit Paris in 2019."], answer: "I visited Paris in 2019.", explanation: { en: "With a specific time (2019), use the simple past.", pt: "Com um tempo específico (2019), use o passado simples." } },
    ],
    input: {
      kind: "reading",
      title: { en: "A traveler's blog post", pt: "Um post de blog de um viajante" },
      lines: [
        { en: "I've just come back from my longest trip ever: three months backpacking through Southeast Asia.", pt: "Acabei de voltar da minha viagem mais longa: três meses de mochilão pelo Sudeste Asiático." },
        { en: "I've already visited five countries, and I've tried food I had never eaten before.", pt: "Já visitei cinco países e experimentei comidas que nunca tinha comido antes." },
        { en: "Have you ever eaten fried insects? I have, and it was strange, but unforgettable!", pt: "Você já comeu insetos fritos? Eu já, e foi estranho, mas inesquecível!" },
        { en: "I got lost once, in a small town in Vietnam, but a kind family helped me find my way.", pt: "Eu me perdi uma vez, em uma cidadezinha no Vietnã, mas uma família gentil me ajudou a encontrar o caminho." },
        { en: "I haven't planned my next adventure yet, but I already know it will need a lot of courage.", pt: "Ainda não planejei minha próxima aventura, mas já sei que ela vai precisar de muita coragem." },
      ],
      questions: [
        { id: "i21d-iq1", prompt: { en: "How long was the traveler's trip?", pt: "Quanto tempo durou a viagem do viajante?" }, options: ["One month", "Three months", "One year"], answer: "Three months", explanation: { en: "'Three months backpacking through Southeast Asia.'", pt: "'Três meses de mochilão pelo Sudeste Asiático.'" } },
        { id: "i21d-iq2", prompt: { en: "Has the traveler planned the next trip?", pt: "O viajante já planejou a próxima viagem?" }, options: ["Yes", "No, not yet", "It doesn't say"], answer: "No, not yet", explanation: { en: "'I haven't planned my next adventure yet.'", pt: "'Ainda não planejei minha próxima aventura.'" } },
        { id: "i21d-iq3", prompt: { en: "Who helped the traveler in Vietnam?", pt: "Quem ajudou o viajante no Vietnã?" }, options: ["A tour guide", "A kind family", "A police officer"], answer: "A kind family", explanation: { en: "'A kind family helped me find my way.'", pt: "'Uma família gentil me ajudou a encontrar o caminho.'" } },
      ],
    },
    quickCheck: [
      { id: "i21d-qc1", prompt: { en: "What does 'abroad' mean?", pt: "O que significa 'abroad'?" }, options: ["In a foreign country", "At home", "In the past"], answer: "In a foreign country", explanation: { en: "'Abroad' means in or to another country.", pt: "'Abroad' significa em ou para outro país." } },
      { id: "i21d-qc2", prompt: { en: "Choose the correct question.", pt: "Escolha a pergunta correta." }, options: ["Have you ever seen snow?", "Did you ever seen snow?", "Have you ever saw snow?"], answer: "Have you ever seen snow?", explanation: { en: "'Have/has + subject + ever + past participle'.", pt: "'Have/has + sujeito + ever + particípio'." } },
      { id: "i21d-qc3", prompt: { en: "What does 'courage' mean?", pt: "O que significa 'courage'?" }, options: ["Fear", "The ability to do something scary", "A type of trip"], answer: "The ability to do something scary", explanation: { en: "Courage is the ability to face fear.", pt: "Coragem é a capacidade de enfrentar o medo." } },
      { id: "i21d-qc4", prompt: { en: "'I ___ just arrived.'", pt: "'I ___ just arrived.'" }, options: ["have", "did", "am"], answer: "have", explanation: { en: "'Just' is used with the present perfect: have/has + just + past participle.", pt: "'Just' é usado com present perfect: have/has + just + particípio." } },
    ],
  },
  communicate: {
    id: "INTERMEDIATE-U21-COMMUNICATE",
    review: [
      { en: "Have you ever traveled alone? — I've never been to Thailand before.", pt: "Você já viajou sozinho(a)? — Eu nunca fui à Tailândia antes." },
      { en: "I've already visited five countries. I haven't told my mother yet.", pt: "Já visitei cinco países. Ainda não contei para minha mãe." },
      { en: "I've just eaten fried insects. It was unforgettable!", pt: "Acabei de comer insetos fritos. Foi inesquecível!" },
      { en: "I visited Thailand in March. (simple past with a specific time)", pt: "Eu visitei a Tailândia em março. (passado simples com tempo específico)" },
    ],
    activities: [
      {
        id: "i21c-a1",
        title: { en: "Have You Ever...?", pt: "Você já...?" },
        instruction: { en: "Ask a friend three 'Have you ever...?' questions about travel or food, and answer with 'ever/never'.", pt: "Pergunte a um amigo três perguntas com 'Have you ever...?' sobre viagem ou comida, e responda com 'ever/never'." },
        phrases: [
          { en: "Have you ever tried Thai food?", pt: "Você já experimentou comida tailandesa?" },
          { en: "I've never traveled to another continent.", pt: "Eu nunca viajei para outro continente." },
          { en: "Has she ever been camping?", pt: "Ela já acampou alguma vez?" },
        ],
        check: [
          { id: "i21c-a1q1", prompt: { en: "Which question is correct?", pt: "Qual pergunta está correta?" }, options: ["Have you ever traveled alone?", "Have you ever travel alone?", "You have ever traveled alone?"], answer: "Have you ever traveled alone?", explanation: { en: "Have + subject + ever + past participle.", pt: "Have + sujeito + ever + particípio." } },
          { id: "i21c-a1q2", prompt: { en: "Negative form with 'never'.", pt: "Forma negativa com 'never'." }, options: ["I've never eaten sushi.", "I haven't never eaten sushi.", "I never haven't eaten sushi."], answer: "I've never eaten sushi.", explanation: { en: "'Never' already makes the meaning negative.", pt: "'Never' já torna o significado negativo." } },
        ],
      },
      {
        id: "i21c-a2",
        title: { en: "What Have You Just Done?", pt: "O que você acabou de fazer?" },
        instruction: { en: "Tell a friend three things you've just done, already done today, or haven't done yet.", pt: "Conte a um amigo três coisas que você acabou de fazer, já fez hoje, ou ainda não fez." },
        phrases: [
          { en: "I've just finished my lunch.", pt: "Acabei de terminar meu almoço." },
          { en: "I've already read the news today.", pt: "Já li as notícias hoje." },
          { en: "I haven't called my parents yet.", pt: "Ainda não liguei para meus pais." },
        ],
        check: [
          { id: "i21c-a2q1", prompt: { en: "Where does 'yet' usually go in negatives?", pt: "Onde 'yet' geralmente fica nas negativas?" }, options: ["At the start", "At the end", "Before 'have'"], answer: "At the end", explanation: { en: "'Yet' goes at the end of negative sentences and questions.", pt: "'Yet' vai no final de negativas e perguntas." } },
          { id: "i21c-a2q2", prompt: { en: "Choose the correct sentence with 'just'.", pt: "Escolha a frase correta com 'just'." }, options: ["I've just arrived.", "I just have arrived.", "I have arrived just."], answer: "I've just arrived.", explanation: { en: "'Just' goes between 'have/has' and the past participle.", pt: "'Just' fica entre 'have/has' e o particípio." } },
        ],
      },
      {
        id: "i21c-a3",
        title: { en: "This Year or That Year?", pt: "Este ano ou naquele ano?" },
        instruction: { en: "Compare an experience without a specific time (present perfect) with one from a specific time in the past (simple past).", pt: "Compare uma experiência sem tempo específico (present perfect) com uma de um tempo específico no passado (passado simples)." },
        phrases: [
          { en: "I've visited three countries in my life.", pt: "Já visitei três países na minha vida." },
          { en: "I visited Argentina in 2022.", pt: "Eu visitei a Argentina em 2022." },
          { en: "Have you ever seen the ocean?", pt: "Você já viu o oceano?" },
        ],
        check: [
          { id: "i21c-a3q1", prompt: { en: "Which sentence has a specific time?", pt: "Qual frase tem um tempo específico?" }, options: ["I visited Argentina in 2022.", "I've visited Argentina.", "I have never visited Argentina."], answer: "I visited Argentina in 2022.", explanation: { en: "Specific time = simple past.", pt: "Tempo específico = passado simples." } },
          { id: "i21c-a3q2", prompt: { en: "Which is correct for an unspecified time?", pt: "Qual está correta para tempo não especificado?" }, options: ["I've visited three countries.", "I visited three countries ever.", "I have three countries visited."], answer: "I've visited three countries.", explanation: { en: "Unspecified time = present perfect.", pt: "Tempo não especificado = present perfect." } },
        ],
      },
    ],
    challenge: {
      id: "i21c-cc1",
      title: { en: "Tell Your Travel Story", pt: "Conte sua história de viagem" },
      instruction: {
        en: "Talk out loud about a trip or new experience. Use 'ever/never', 'already/yet/just', and one sentence in the simple past with a specific time.",
        pt: "Fale em voz alta sobre uma viagem ou experiência nova. Use 'ever/never', 'already/yet/just', e uma frase no passado simples com tempo específico.",
      },
      phrases: [
        { en: "I've never traveled alone before, but last year I finally did it.", pt: "Nunca tinha viajado sozinho antes, mas no ano passado finalmente fiz isso." },
        { en: "I visited the coast in July, and it was unforgettable.", pt: "Visitei o litoral em julho, e foi inesquecível." },
        { en: "I've already told my friends, but I haven't posted the photos yet.", pt: "Já contei para meus amigos, mas ainda não postei as fotos." },
        { en: "I've just started planning my next adventure.", pt: "Acabei de começar a planejar minha próxima aventura." },
      ],
      check: [
        { id: "i21c-cc1q1", prompt: { en: "Did you use 'ever' or 'never' correctly?", pt: "Você usou 'ever' ou 'never' corretamente?" }, options: ["Yes", "No", "Partially"], answer: "Yes", explanation: { en: "Self-check: ever in questions, never in affirmatives with negative meaning.", pt: "Autoavaliação: ever em perguntas, never em afirmativas com sentido negativo." } },
        { id: "i21c-cc1q2", prompt: { en: "Did you include a specific time with the simple past?", pt: "Você incluiu um tempo específico com o passado simples?" }, options: ["Yes", "No", "Partially"], answer: "Yes", explanation: { en: "Self-check: simple past needs a specific finished time.", pt: "Autoavaliação: o passado simples precisa de um tempo específico e concluído." } },
      ],
    },
    lessonReview: {
      summary: {
        en: "You talked about life experiences with the present perfect, used 'ever/never' and 'already/yet/just', and reviewed the contrast with the simple past.",
        pt: "Você falou sobre experiências de vida com o present perfect, usou 'ever/never' e 'already/yet/just', e revisou o contraste com o passado simples.",
      },
      canDo: [
        { en: "I can ask and answer 'Have you ever...?' questions.", pt: "Consigo perguntar e responder 'Have you ever...?'." },
        { en: "I can use 'already', 'yet' and 'just' correctly.", pt: "Consigo usar 'already', 'yet' e 'just' corretamente." },
        { en: "I can choose between the present perfect and the simple past.", pt: "Consigo escolher entre o present perfect e o passado simples." },
      ],
      next: { en: "Next unit: more practice with everyday situations and experiences.", pt: "Próxima unidade: mais prática com situações e experiências do dia a dia." },
    },
  },
};
