import type { CourseUnit } from "./types";

/**
 * Intermediate — Unit 25 (Have You Ever...?). Conteúdo autoral Speak2Co.
 * Foco: present perfect com ever/never para falar de experiências de vida,
 * vocabulário de viagens, e revisão de comparativos e superlativos.
 * Personagens originais: Ana e Bruno, colegas de trabalho que adoram viajar.
 */
export const INTERMEDIATE_U25: CourseUnit = {
  code: "INTERMEDIATE-U25",
  number: 25,
  title: "Have You Ever...? — What's the most exciting thing you've done?",
  titlePt: "Você Já...? — Qual é a coisa mais empolgante que você já fez?",
  cefr: "B1",
  objective: {
    en: "Talk about life experiences using the present perfect with 'ever' and 'never', and review comparatives and superlatives.",
    pt: "Falar sobre experiências de vida usando o present perfect com 'ever' e 'never', e revisar comparativos e superlativos.",
  },
  communicationGoal: {
    en: "Ask and answer questions about things you have or haven't done in your life, and compare experiences with a friend.",
    pt: "Perguntar e responder sobre coisas que você já fez ou nunca fez na vida, e comparar experiências com um amigo.",
  },
  prerequisites: {
    en: "Intermediate: simple past of regular and irregular verbs, comparatives and superlatives.",
    pt: "Intermediate: passado simples de verbos regulares e irregulares, comparativos e superlativos.",
  },
  newContent: {
    en: "Grammar: present perfect with 'ever/never' (affirmative, negative, questions), irregular past participles | Vocabulary: travel and adventure (12 items) | Expressions: reacting to stories",
    pt: "Gramática: present perfect com 'ever/never' (afirmativa, negativa, perguntas), particípios irregulares | Vocabulário: viagem e aventura (12 itens) | Expressões: reagir a histórias",
  },
  reviewContent: {
    en: "Comparatives and superlatives (more exciting, the most exciting, better, the best).",
    pt: "Comparativos e superlativos (more exciting, the most exciting, better, the best).",
  },
  discover: {
    id: "INTERMEDIATE-U25-DISCOVER",
    warmUp: {
      prompt: {
        en: "Look at the picture. What has this traveler done? Have you ever done something similar?",
        pt: "Observe a imagem. O que esse viajante já fez? Você já fez algo parecido?",
      },
      phrases: [
        { en: "Have you ever traveled to another country?", pt: "Você já viajou para outro país?" },
        { en: "What's the most exciting trip you've taken?", pt: "Qual foi a viagem mais empolgante que você fez?" },
        { en: "Have you ever tried an extreme sport?", pt: "Você já tentou algum esporte radical?" },
      ],
    },
    context: {
      situation: {
        en: "Ana and Bruno work together and love to travel. During lunch, they start talking about their craziest travel experiences.",
        pt: "Ana e Bruno trabalham juntos e adoram viajar. Durante o almoço, eles começam a falar sobre suas experiências de viagem mais malucas.",
      },
      dialogue: [
        { who: "Ana", en: "Have you ever traveled alone, Bruno?", pt: "Você já viajou sozinho, Bruno?" },
        { who: "Bruno", en: "Yes, I have. I've been to Peru by myself. It was the most exciting trip of my life.", pt: "Sim, já. Já fui ao Peru sozinho. Foi a viagem mais empolgante da minha vida." },
        { who: "Ana", en: "Wow! Have you ever climbed a mountain there?", pt: "Uau! Você já escalou uma montanha lá?" },
        { who: "Bruno", en: "Yes, I have climbed to Machu Picchu. It was harder than I expected, but incredible.", pt: "Sim, já escalei até Machu Picchu. Foi mais difícil do que eu esperava, mas incrível." },
        { who: "Ana", en: "I've never done anything that adventurous. I've only been to the beach.", pt: "Eu nunca fiz nada tão aventureiro. Só fui à praia." },
        { who: "Bruno", en: "Have you ever tried surfing, at least?", pt: "Você já tentou surfar, pelo menos?" },
        { who: "Ana", en: "Actually, yes! I've tried surfing twice. It's more difficult than it looks!", pt: "Na verdade, sim! Já tentei surfar duas vezes. É mais difícil do que parece!" },
        { who: "Bruno", en: "Ha! Well, surfing is the best way to start. Maybe our next trip should be an adventure together.", pt: "Ha! Bom, surfar é a melhor forma de começar. Talvez nossa próxima viagem devesse ser uma aventura juntos." },
      ],
    },
    vocabulary: [
      { term: "journey", pt: "jornada, viagem", ipa: "/ˈdʒɜːrni/", definition: "A trip from one place to another, especially a long one.", example: "It was a long journey, but worth it.", examplePt: "Foi uma jornada longa, mas valeu a pena." },
      { term: "adventure", pt: "aventura", ipa: "/ədˈventʃər/", definition: "An exciting or unusual experience.", example: "Climbing the mountain was a real adventure.", examplePt: "Escalar a montanha foi uma verdadeira aventura." },
      { term: "abroad", pt: "no exterior", ipa: "/əˈbrɔːd/", definition: "In or to a foreign country.", example: "Have you ever studied abroad?", examplePt: "Você já estudou no exterior?" },
      { term: "passport", pt: "passaporte", ipa: "/ˈpæspɔːrt/", definition: "An official document you need to travel to other countries.", example: "I always check my passport before a trip.", examplePt: "Sempre confiro meu passaporte antes de uma viagem." },
      { term: "luggage", pt: "bagagem", ipa: "/ˈlʌɡɪdʒ/", definition: "The bags and suitcases you take when you travel.", example: "My luggage was really heavy this time.", examplePt: "Minha bagagem estava bem pesada dessa vez." },
      { term: "souvenir", pt: "lembrança (de viagem)", ipa: "/ˌsuːvəˈnɪr/", definition: "An object you buy to remember a place or trip.", example: "I bought a souvenir for my sister.", examplePt: "Comprei uma lembrança para minha irmã." },
      { term: "climb", pt: "escalar, subir", ipa: "/klaɪm/", definition: "To go up something using your hands and feet.", example: "We climbed to the top of the hill.", examplePt: "Escalamos até o topo da colina." },
      { term: "surf", pt: "surfar", ipa: "/sɜːrf/", definition: "To ride on waves in the ocean, usually standing on a board.", example: "I tried to surf last summer.", examplePt: "Tentei surfar no verão passado." },
      { term: "extreme sport", pt: "esporte radical", ipa: "/ɪkˈstriːm spɔːrt/", definition: "A dangerous or exciting sport, like skydiving or rock climbing.", example: "Skydiving is an extreme sport.", examplePt: "Paraquedismo é um esporte radical." },
      { term: "explore", pt: "explorar", ipa: "/ɪkˈsplɔːr/", definition: "To travel around a place to learn about it.", example: "We explored the old city for hours.", examplePt: "Exploramos a cidade antiga por horas." },
      { term: "brave", pt: "corajoso", ipa: "/breɪv/", definition: "Not afraid of dangerous or difficult things.", example: "You were so brave to travel alone!", examplePt: "Você foi tão corajoso de viajar sozinho!" },
      { term: "unforgettable", pt: "inesquecível", ipa: "/ˌʌnfərˈɡetəbl/", definition: "So special or good that you will never forget it.", example: "It was an unforgettable trip.", examplePt: "Foi uma viagem inesquecível." },
    ],
    expressions: [
      { en: "Have you ever…?", pt: "Você já…?" },
      { en: "I've never done anything like that.", pt: "Eu nunca fiz nada parecido com isso." },
      { en: "It was harder than I expected.", pt: "Foi mais difícil do que eu esperava." },
      { en: "At least…", pt: "Pelo menos…" },
      { en: "It's more difficult than it looks.", pt: "É mais difícil do que parece." },
      { en: "The best way to start.", pt: "A melhor forma de começar." },
    ],
    grammar: [
      {
        title: { en: "Present perfect with ever / never", pt: "Present perfect com ever / never" },
        examples: [
          { en: "Have you ever traveled alone?", pt: "Você já viajou sozinho?" },
          { en: "Yes, I have. I've been to Peru.", pt: "Sim, já. Já fui ao Peru." },
          { en: "I've never done anything that adventurous.", pt: "Eu nunca fiz nada tão aventureiro." },
          { en: "She has never tried surfing.", pt: "Ela nunca tentou surfar." },
          { en: "Have they ever climbed a mountain?", pt: "Eles já escalaram uma montanha?" },
        ],
        rule: {
          en: "Use 'have/has + past participle' to talk about life experiences without saying exactly when. 'Ever' means 'at any time' and appears in questions. 'Never' means 'at no time' and replaces 'not' in negatives (I've never been = I haven't ever been). Use 'been' for visited places and 'gone' for someone who went and hasn't come back.",
          pt: "Use 'have/has + particípio passado' para falar de experiências de vida sem dizer exatamente quando. 'Ever' significa 'alguma vez' e aparece em perguntas. 'Never' significa 'nunca' e substitui 'not' nas negativas (I've never been = I haven't ever been). Use 'been' para lugares visitados e 'gone' para alguém que foi e não voltou.",
        },
        mistakes: [
          { en: "✗ Have you ever went to Peru? → ✓ Have you ever been to Peru? (past participle, not simple past)", pt: "✗ Have you ever went to Peru? → ✓ Have you ever been to Peru? (particípio, não passado simples)" },
          { en: "✗ I never have tried it. → ✓ I've never tried it. ('never' goes after 'have')", pt: "✗ I never have tried it. → ✓ I've never tried it. ('never' vem depois de 'have')" },
          { en: "✗ She haven't ever climbed. → ✓ She hasn't ever climbed. (use 'has' with she/he/it)", pt: "✗ She haven't ever climbed. → ✓ She hasn't ever climbed. (use 'has' com she/he/it)" },
        ],
      },
      {
        title: { en: "Irregular past participles", pt: "Particípios passados irregulares" },
        examples: [
          { en: "I've been to three countries.", pt: "Já estive em três países." },
          { en: "He's seen that movie before.", pt: "Ele já viu esse filme antes." },
          { en: "We've eaten sushi many times.", pt: "Já comemos sushi muitas vezes." },
          { en: "They've never tried Peruvian food.", pt: "Eles nunca tentaram comida peruana." },
        ],
        rule: {
          en: "Many common verbs have irregular past participles: be → been, see → seen, go → gone, eat → eaten, do → done, try → tried (regular). The participle doesn't change for person: I've/you've/she's/we've + participle.",
          pt: "Muitos verbos comuns têm particípios irregulares: be → been, see → seen, go → gone, eat → eaten, do → done, try → tried (regular). O particípio não muda conforme a pessoa: I've/you've/she's/we've + particípio.",
        },
        mistakes: [
          { en: "✗ I've saw that. → ✓ I've seen that. (use the participle, not simple past)", pt: "✗ I've saw that. → ✓ I've seen that. (use o particípio, não o passado simples)" },
          { en: "✗ She've been there. → ✓ She's been there. (contraction is 's' for has)", pt: "✗ She've been there. → ✓ She's been there. (a contração é 's' para has)" },
        ],
      },
      {
        title: { en: "Review: comparatives and superlatives", pt: "Revisão: comparativos e superlativos" },
        examples: [
          { en: "It was harder than I expected.", pt: "Foi mais difícil do que eu esperava." },
          { en: "It's more difficult than it looks.", pt: "É mais difícil do que parece." },
          { en: "It was the most exciting trip of my life.", pt: "Foi a viagem mais empolgante da minha vida." },
          { en: "Surfing is the best way to start.", pt: "Surfar é a melhor forma de começar." },
        ],
        rule: {
          en: "Short adjectives: add -er/-est (harder, the hardest). Long adjectives: use more/the most (more exciting, the most exciting). Irregular: good → better → the best; bad → worse → the worst.",
          pt: "Adjetivos curtos: adicione -er/-est (harder, the hardest). Adjetivos longos: use more/the most (more exciting, the most exciting). Irregulares: good → better → the best; bad → worse → the worst.",
        },
        mistakes: [
          { en: "✗ more harder → ✓ harder (don't use 'more' with -er)", pt: "✗ more harder → ✓ harder (não use 'more' com -er)" },
          { en: "✗ the excitingest trip → ✓ the most exciting trip", pt: "✗ the excitingest trip → ✓ the most exciting trip" },
        ],
      },
    ],
    controlledPractice: [
      { id: "i25d-cp1", prompt: { en: "Complete: 'Have you ___ tried surfing?'", pt: "Complete: 'Have you ___ tried surfing?'" }, options: ["never", "ever", "already"], answer: "ever", explanation: { en: "'Ever' is used in questions with present perfect.", pt: "'Ever' é usado em perguntas com present perfect." } },
      { id: "i25d-cp2", prompt: { en: "Complete: 'I've ___ been to Peru.'", pt: "Complete: 'I've ___ been to Peru.'" }, options: ["never", "ever", "not ever"], answer: "never", explanation: { en: "'Never' replaces 'not... ever' in affirmative-form negatives.", pt: "'Never' substitui 'not... ever' na negativa." } },
      { id: "i25d-cp3", prompt: { en: "Choose the correct past participle: 'She's ___ that movie.'", pt: "Escolha o particípio correto: 'She's ___ that movie.'" }, options: ["saw", "seen", "see"], answer: "seen", explanation: { en: "See → seen (irregular past participle).", pt: "See → seen (particípio irregular)." } },
      { id: "i25d-cp4", prompt: { en: "Choose the correct comparative: 'This trip was ___ than the last one.'", pt: "Escolha o comparativo correto: 'This trip was ___ than the last one.'" }, options: ["excitinger", "more exciting", "the most exciting"], answer: "more exciting", explanation: { en: "Long adjectives use 'more' for comparatives.", pt: "Adjetivos longos usam 'more' no comparativo." } },
      { id: "i25d-cp5", prompt: { en: "Choose the correct superlative: 'It was ___ trip of my life.'", pt: "Escolha o superlativo correto: 'It was ___ trip of my life.'" }, options: ["the most exciting", "more exciting", "excitinger"], answer: "the most exciting", explanation: { en: "Long adjectives use 'the most' for superlatives.", pt: "Adjetivos longos usam 'the most' no superlativo." } },
    ],
    input: {
      kind: "reading",
      title: { en: "A travel blog: My bucket list", pt: "Um blog de viagem: Minha lista de desejos" },
      lines: [
        { en: "Hi, everyone! I'm Ana, and I love writing about travel and new experiences.", pt: "Oi, pessoal! Eu sou a Ana, e adoro escrever sobre viagens e novas experiências." },
        { en: "I've never traveled outside South America, but that's going to change soon.", pt: "Nunca viajei para fora da América do Sul, mas isso vai mudar em breve." },
        { en: "My colleague Bruno has already climbed to Machu Picchu, and he says it was the most unforgettable adventure of his life.", pt: "Meu colega Bruno já escalou até Machu Picchu, e ele diz que foi a aventura mais inesquecível da vida dele." },
        { en: "I've tried surfing twice, and it's harder than it looks, but I want to try it again.", pt: "Já tentei surfar duas vezes, e é mais difícil do que parece, mas quero tentar de novo." },
        { en: "Have you ever made a bucket list? Mine includes climbing a mountain and traveling abroad alone, just like Bruno.", pt: "Você já fez uma lista de desejos? A minha inclui escalar uma montanha e viajar sozinha para o exterior, assim como o Bruno." },
      ],
      questions: [
        { id: "i25d-iq1", prompt: { en: "Has Ana ever traveled outside South America?", pt: "Ana já viajou para fora da América do Sul?" }, options: ["Yes, many times.", "No, never.", "Yes, once."], answer: "No, never.", explanation: { en: "'I've never traveled outside South America.'", pt: "'Nunca viajei para fora da América do Sul.'" } },
        { id: "i25d-iq2", prompt: { en: "What does Bruno say about climbing Machu Picchu?", pt: "O que Bruno diz sobre escalar Machu Picchu?" }, options: ["It was boring.", "It was the most unforgettable adventure.", "It was easy."], answer: "It was the most unforgettable adventure.", explanation: { en: "'He says it was the most unforgettable adventure of his life.'", pt: "'Ele diz que foi a aventura mais inesquecível da vida dele.'" } },
        { id: "i25d-iq3", prompt: { en: "How many times has Ana tried surfing?", pt: "Quantas vezes Ana tentou surfar?" }, options: ["Never", "Once", "Twice"], answer: "Twice", explanation: { en: "'I've tried surfing twice.'", pt: "'Já tentei surfar duas vezes.'" } },
      ],
    },
    quickCheck: [
      { id: "i25d-qc1", prompt: { en: "What does 'abroad' mean?", pt: "O que significa 'abroad'?" }, options: ["In a foreign country", "A type of luggage", "A dangerous sport"], answer: "In a foreign country", explanation: { en: "'Abroad' means in or to another country.", pt: "'Abroad' significa em ou para outro país." } },
      { id: "i25d-qc2", prompt: { en: "Choose the correct question.", pt: "Escolha a pergunta correta." }, options: ["Have you ever went abroad?", "Have you ever been abroad?", "Have you never been abroad?"], answer: "Have you ever been abroad?", explanation: { en: "Use the past participle 'been' after 'have'.", pt: "Use o particípio 'been' depois de 'have'." } },
      { id: "i25d-qc3", prompt: { en: "Past participle of 'eat'?", pt: "Particípio de 'eat'?" }, options: ["ate", "eaten", "eating"], answer: "eaten", explanation: { en: "Eat → ate (past) → eaten (participle).", pt: "Eat → ate (passado) → eaten (particípio)." } },
      { id: "i25d-qc4", prompt: { en: "Superlative of 'good'?", pt: "Superlativo de 'good'?" }, options: ["gooder", "the goodest", "the best"], answer: "the best", explanation: { en: "'Good' is irregular: good → better → the best.", pt: "'Good' é irregular: good → better → the best." } },
    ],
  },
  communicate: {
    id: "INTERMEDIATE-U25-COMMUNICATE",
    review: [
      { en: "Have you ever traveled alone? — Yes, I have. / No, I haven't.", pt: "Você já viajou sozinho? — Sim, já. / Não, nunca." },
      { en: "I've never done anything that adventurous.", pt: "Eu nunca fiz nada tão aventureiro." },
      { en: "It was harder than I expected. It was the most exciting trip of my life.", pt: "Foi mais difícil do que eu esperava. Foi a viagem mais empolgante da minha vida." },
      { en: "She's been to Peru. He's tried surfing twice.", pt: "Ela já esteve no Peru. Ele já tentou surfar duas vezes." },
    ],
    activities: [
      {
        id: "i25c-a1",
        title: { en: "Have You Ever...?", pt: "Você Já...?" },
        instruction: { en: "Ask a friend three 'Have you ever...?' questions about travel and adventure, and answer with 'ever/never'.", pt: "Pergunte a um amigo três perguntas com 'Have you ever...?' sobre viagem e aventura, e responda com 'ever/never'." },
        phrases: [
          { en: "Have you ever traveled abroad?", pt: "Você já viajou para o exterior?" },
          { en: "I've never tried an extreme sport.", pt: "Eu nunca tentei um esporte radical." },
          { en: "Yes, I have. I've been to Argentina twice.", pt: "Sim, já. Já fui à Argentina duas vezes." },
        ],
        check: [
          { id: "i25c-a1q1", prompt: { en: "Which question uses the present perfect correctly?", pt: "Qual pergunta usa o present perfect corretamente?" }, options: ["Have you ever travel abroad?", "Have you ever traveled abroad?", "Do you ever traveled abroad?"], answer: "Have you ever traveled abroad?", explanation: { en: "Have + subject + ever + past participle.", pt: "Have + sujeito + ever + particípio." } },
          { id: "i25c-a1q2", prompt: { en: "Complete: 'I've ___ tried an extreme sport.' (negative)", pt: "Complete: 'I've ___ tried an extreme sport.' (negativa)" }, options: ["never", "ever", "not never"], answer: "never", explanation: { en: "'Never' makes the sentence negative without 'not'.", pt: "'Never' torna a frase negativa sem usar 'not'." } },
        ],
      },
      {
        id: "i25c-a2",
        title: { en: "My Most Exciting Experience", pt: "Minha experiência mais empolgante" },
        instruction: { en: "Describe the most exciting or unforgettable thing you've ever done, using a superlative.", pt: "Descreva a coisa mais empolgante ou inesquecível que você já fez, usando um superlativo." },
        phrases: [
          { en: "The most exciting thing I've ever done is climb a mountain.", pt: "A coisa mais empolgante que já fiz foi escalar uma montanha." },
          { en: "It was the best trip of my life.", pt: "Foi a melhor viagem da minha vida." },
          { en: "It was harder than I expected, but unforgettable.", pt: "Foi mais difícil do que eu esperava, mas inesquecível." },
        ],
        check: [
          { id: "i25c-a2q1", prompt: { en: "Choose the correct superlative sentence.", pt: "Escolha a frase no superlativo correto." }, options: ["It was the excitingest trip.", "It was the most exciting trip.", "It was more exciting trip."], answer: "It was the most exciting trip.", explanation: { en: "Long adjectives use 'the most' + adjective.", pt: "Adjetivos longos usam 'the most' + adjetivo." } },
          { id: "i25c-a2q2", prompt: { en: "Complete: 'It was ___ than I expected.'", pt: "Complete: 'It was ___ than I expected.'" }, options: ["harder", "more hard", "hardest"], answer: "harder", explanation: { en: "Short adjectives add -er for comparatives.", pt: "Adjetivos curtos recebem -er no comparativo." } },
        ],
      },
      {
        id: "i25c-a3",
        title: { en: "Compare Two Adventures", pt: "Compare duas aventuras" },
        instruction: { en: "Compare two trips or experiences you've had, saying which one was better and why.", pt: "Compare duas viagens ou experiências que você teve, dizendo qual foi melhor e por quê." },
        phrases: [
          { en: "Surfing was more difficult than climbing.", pt: "Surfar foi mais difícil do que escalar." },
          { en: "The beach trip was better than the mountain trip.", pt: "A viagem à praia foi melhor do que a viagem à montanha." },
          { en: "I've never had a worse experience than that flight!", pt: "Nunca tive uma experiência pior do que aquele voo!" },
        ],
        check: [
          { id: "i25c-a3q1", prompt: { en: "Comparative of 'bad'?", pt: "Comparativo de 'bad'?" }, options: ["badder", "worse", "the worst"], answer: "worse", explanation: { en: "Bad → worse → the worst (irregular).", pt: "Bad → worse → the worst (irregular)." } },
          { id: "i25c-a3q2", prompt: { en: "Which sentence compares two things correctly?", pt: "Qual frase compara duas coisas corretamente?" }, options: ["Surfing was difficult than climbing.", "Surfing was more difficult than climbing.", "Surfing was the most difficult than climbing."], answer: "Surfing was more difficult than climbing.", explanation: { en: "Use 'more + adjective + than' to compare two things.", pt: "Use 'more + adjetivo + than' para comparar duas coisas." } },
        ],
      },
    ],
    challenge: {
      id: "i25c-challenge",
      title: { en: "Bucket List Interview", pt: "Entrevista sobre a lista de desejos" },
      instruction: { en: "Interview a partner about their bucket list: ask what they have and haven't done, and compare it with your own experiences.", pt: "Entreviste um parceiro sobre a lista de desejos dele: pergunte o que ele já fez e nunca fez, e compare com suas próprias experiências." },
      phrases: [
        { en: "What's the most adventurous thing on your bucket list?", pt: "Qual é a coisa mais aventureira na sua lista de desejos?" },
        { en: "Have you ever done something braver than that?", pt: "Você já fez algo mais corajoso do que isso?" },
        { en: "I've never tried it, but I'd like to.", pt: "Nunca tentei, mas eu gostaria." },
      ],
      check: [
        { id: "i25c-cq1", prompt: { en: "Complete: 'What's ___ thing on your bucket list?'", pt: "Complete: 'What's ___ thing on your bucket list?'" }, options: ["the most adventurous", "more adventurous", "adventurousest"], answer: "the most adventurous", explanation: { en: "Superlative: the most + long adjective.", pt: "Superlativo: the most + adjetivo longo." } },
        { id: "i25c-cq2", prompt: { en: "Complete: 'Have you ___ done something braver?'", pt: "Complete: 'Have you ___ done something braver?'" }, options: ["ever", "never", "already been"], answer: "ever", explanation: { en: "'Ever' is used in present perfect questions.", pt: "'Ever' é usado em perguntas no present perfect." } },
      ],
    },
    lessonReview: {
      summary: {
        en: "In this unit, you learned to talk about life experiences with the present perfect and 'ever/never', and to compare experiences with comparatives and superlatives.",
        pt: "Nesta unidade, você aprendeu a falar sobre experiências de vida com o present perfect e 'ever/never', e a comparar experiências com comparativos e superlativos.",
      },
      canDo: [
        { en: "I can ask and answer 'Have you ever...?' questions.", pt: "Eu consigo perguntar e responder 'Have you ever...?'." },
        { en: "I can talk about things I've never done using 'never'.", pt: "Eu consigo falar sobre coisas que nunca fiz usando 'never'." },
        { en: "I can compare experiences using comparatives and superlatives.", pt: "Eu consigo comparar experiências usando comparativos e superlativos." },
      ],
      next: {
        en: "Next, you're going to learn how to talk about things you have already done or haven't done yet, with 'already' and 'yet'.",
        pt: "A seguir, você vai aprender a falar sobre coisas que já fez ou ainda não fez, com 'already' e 'yet'.",
      },
    },
  },
};
