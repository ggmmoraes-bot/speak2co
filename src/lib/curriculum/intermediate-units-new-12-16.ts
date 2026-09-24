import type { CourseUnit } from "./types";

/**
 * Intermediate — Unit 12 (Gym Comparisons). Conteúdo autoral Speak2Co.
 * Foco: comparações de igualdade com "as...as", revisão de there is/are e
 * revisão de passado simples regular (love, send, watch).
 * Personagens originais: Bianca e Diego, amigos que treinam juntos.
 */
export const INTERMEDIATE_U12: CourseUnit = {
  code: "INTERMEDIATE-U12",
  number: 12,
  title: "As Strong As You? — Are you as fast as your friend?",
  titlePt: "Tão forte quanto você? — Você é tão rápido quanto seu amigo?",
  cefr: "B1",
  objective: {
    en: "Compare people and things using 'as...as', review 'there is/are' with quantities, and use love, send and watch in the simple past.",
    pt: "Comparar pessoas e coisas usando 'as...as', revisar 'there is/are' com quantidades, e usar love, send e watch no passado simples.",
  },
  communicationGoal: {
    en: "Talk about a gym routine: compare your progress with a friend's, describe the equipment available and report what you did last week.",
    pt: "Falar sobre uma rotina de academia: comparar seu progresso com o de um amigo, descrever os equipamentos disponíveis e contar o que você fez na semana passada.",
  },
  prerequisites: {
    en: "Intermediate units 1-11: 'be going to', simple past of common verbs, comparatives with -er/more.",
    pt: "Unidades Intermediate 1-11: 'be going to', passado simples de verbos comuns, comparativos com -er/more.",
  },
  newContent: {
    en: "Grammar: comparisons of equality 'as + adjective + as' (affirmative, negative, questions) + review 'there is/are' | Vocabulary: gym and fitness habits (12 items) | Expressions: encouragement and reactions",
    pt: "Gramática: comparações de igualdade 'as + adjetivo + as' (afirmativa, negativa, perguntas) + revisão de 'there is/are' | Vocabulário: academia e hábitos de fitness (12 itens) | Expressões: incentivo e reações",
  },
  reviewContent: {
    en: "Simple past of love, send and watch in affirmative, negative and questions.",
    pt: "Passado simples de love, send e watch na afirmativa, negativa e perguntas.",
  },
  discover: {
    id: "INTERMEDIATE-U12-DISCOVER",
    warmUp: {
      prompt: {
        en: "Look at the picture. Are these two friends training the same way? Who looks stronger?",
        pt: "Observe a imagem. Esses dois amigos treinam do mesmo jeito? Quem parece mais forte?",
      },
      phrases: [
        { en: "Are you as active as your best friend?", pt: "Você é tão ativo quanto seu melhor amigo?" },
        { en: "Is your gym as crowded as mine?", pt: "Sua academia é tão cheia quanto a minha?" },
        { en: "Did you watch any videos to learn new exercises?", pt: "Você assistiu algum vídeo para aprender exercícios novos?" },
      ],
    },
    context: {
      situation: {
        en: "It's Monday evening at the gym. Bianca and Diego have trained together for three months, and today they are comparing their progress.",
        pt: "É segunda à noite na academia. Bianca e Diego treinam juntos há três meses, e hoje estão comparando seu progresso.",
      },
      dialogue: [
        { who: "Bianca", en: "Look! There are more people here than last week. Is it always this crowded on Mondays?", pt: "Olha! Tem mais gente aqui do que na semana passada. É sempre tão cheio às segundas?" },
        { who: "Diego", en: "Yes, everyone comes back after the weekend. Are you as tired as me today?", pt: "Sim, todo mundo volta depois do fim de semana. Você está tão cansada quanto eu hoje?" },
        { who: "Bianca", en: "Honestly, I'm not as tired as you. I watched a training video last night, so I already know the new routine.", pt: "Sinceramente, não estou tão cansada quanto você. Assisti a um vídeo de treino ontem à noite, então já conheço a rotina nova." },
        { who: "Diego", en: "Lucky you! I sent the trainer a message, but she didn't answer.", pt: "Sorte a sua! Eu mandei uma mensagem para a treinadora, mas ela não respondeu." },
        { who: "Bianca", en: "There isn't a trainer here on Mondays. There's only one on Wednesdays and Fridays.", pt: "Não tem treinadora aqui às segundas. Só tem uma às quartas e sextas." },
        { who: "Diego", en: "Are there enough treadmills for everyone tonight?", pt: "Tem esteiras suficientes para todo mundo hoje à noite?" },
        { who: "Bianca", en: "There are only four, but there's one free right now. Go!", pt: "Só tem quatro, mas tem uma livre agora. Vai!" },
        { who: "Diego", en: "I loved my run yesterday, so let's do it again. Keep it up, Bianca!", pt: "Eu amei minha corrida ontem, então vamos fazer de novo. Continue assim, Bianca!" },
      ],
    },
    vocabulary: [
      { term: "workout", pt: "treino", ipa: "/ˈwɜːrkaʊt/", definition: "A period of physical exercise.", example: "My workout takes about an hour.", examplePt: "Meu treino dura cerca de uma hora." },
      { term: "weight", pt: "peso", ipa: "/weɪt/", definition: "Something heavy that you lift to build strength.", example: "He lifts more weight than me.", examplePt: "Ele levanta mais peso do que eu." },
      { term: "treadmill", pt: "esteira", ipa: "/ˈtredmɪl/", definition: "A machine for walking or running indoors.", example: "There are only four treadmills at the gym.", examplePt: "Só tem quatro esteiras na academia." },
      { term: "trainer", pt: "treinador(a), personal", ipa: "/ˈtreɪnər/", definition: "A person who helps you exercise correctly.", example: "The trainer isn't here on Mondays.", examplePt: "A treinadora não está aqui às segundas." },
      { term: "effort", pt: "esforço", ipa: "/ˈefərt/", definition: "The physical or mental energy you put into something.", example: "You need a lot of effort to finish this workout.", examplePt: "Você precisa de muito esforço para terminar esse treino." },
      { term: "strong", pt: "forte", ipa: "/strɔːŋ/", definition: "Having a lot of physical power.", example: "She's as strong as her brother.", examplePt: "Ela é tão forte quanto o irmão dela." },
      { term: "fast", pt: "rápido", ipa: "/fæst/", definition: "Moving with speed.", example: "He isn't as fast as he was last year.", examplePt: "Ele não está tão rápido quanto estava no ano passado." },
      { term: "tired", pt: "cansado", ipa: "/ˈtaɪərd/", definition: "Needing rest or sleep.", example: "I'm not as tired as you today.", examplePt: "Não estou tão cansada quanto você hoje." },
      { term: "healthy", pt: "saudável", ipa: "/ˈhelθi/", definition: "In good physical condition.", example: "Exercise helps you stay healthy.", examplePt: "Exercício ajuda você a se manter saudável." },
      { term: "habit", pt: "hábito", ipa: "/ˈhæbɪt/", definition: "Something you do regularly, often without thinking.", example: "Going to the gym is now a habit for me.", examplePt: "Ir à academia agora é um hábito para mim." },
      { term: "goal", pt: "meta, objetivo", ipa: "/ɡoʊl/", definition: "Something you want to achieve.", example: "My goal is to run five kilometers.", examplePt: "Minha meta é correr cinco quilômetros." },
      { term: "improve", pt: "melhorar", ipa: "/ɪmˈpruːv/", definition: "To get better at something.", example: "Your form is going to improve with practice.", examplePt: "Sua forma vai melhorar com a prática." },
    ],
    expressions: [
      { en: "Keep it up!", pt: "Continue assim!" },
      { en: "Lucky you!", pt: "Sorte a sua!" },
      { en: "Honestly,…", pt: "Sinceramente,…" },
      { en: "Way to go!", pt: "Muito bem! / Mandou bem!" },
      { en: "Give it a try.", pt: "Dá uma chance / tenta." },
      { en: "as far as I know", pt: "pelo que eu sei" },
    ],
    grammar: [
      {
        title: { en: "Comparisons of equality: as + adjective + as", pt: "Comparações de igualdade: as + adjetivo + as" },
        examples: [
          { en: "She's as strong as her brother.", pt: "Ela é tão forte quanto o irmão dela." },
          { en: "I'm not as tired as you.", pt: "Não estou tão cansada quanto você." },
          { en: "Is your gym as crowded as mine?", pt: "Sua academia é tão cheia quanto a minha?" },
          { en: "He can run as fast as she can.", pt: "Ele consegue correr tão rápido quanto ela." },
          { en: "We aren't as busy as last week.", pt: "Não estamos tão ocupados quanto na semana passada." },
        ],
        rule: {
          en: "Use 'as + adjective + as' to say two things are equal, and 'not as + adjective + as' to say one is less than the other. With actions, use 'can/could + verb + as + adverb + as'. Questions: invert be/can/do as usual before the subject.",
          pt: "Use 'as + adjetivo + as' para dizer que duas coisas são iguais, e 'not as + adjetivo + as' para dizer que uma é menor que a outra. Com ações, use 'can/could + verbo + as + advérbio + as'. Perguntas: inverta be/can/do antes do sujeito, como de costume.",
        },
        mistakes: [
          { en: "✗ She's as strong than her brother. → ✓ She's as strong as her brother.", pt: "✗ She's as strong than her brother. → ✓ She's as strong as her brother." },
          { en: "✗ I'm not so tired than you. → ✓ I'm not as tired as you.", pt: "✗ I'm not so tired than you. → ✓ I'm not as tired as you." },
        ],
      },
      {
        title: { en: "Review: there is / there are", pt: "Revisão: there is / there are" },
        examples: [
          { en: "There's one treadmill free right now.", pt: "Tem uma esteira livre agora." },
          { en: "There are more people here than last week.", pt: "Tem mais gente aqui do que na semana passada." },
          { en: "There isn't a trainer here on Mondays.", pt: "Não tem treinadora aqui às segundas." },
          { en: "Are there enough treadmills for everyone?", pt: "Tem esteiras suficientes para todo mundo?" },
          { en: "How many treadmills are there?", pt: "Quantas esteiras têm?" },
        ],
        rule: {
          en: "Use 'there is/there's' with singular or uncountable nouns and 'there are' with plural nouns to say something exists. Negative: there isn't / there aren't. Questions: Is there…? / Are there…? / How many… are there?",
          pt: "Use 'there is/there's' com substantivos singulares ou incontáveis e 'there are' com plurais para dizer que algo existe. Negativa: there isn't / there aren't. Perguntas: Is there…? / Are there…? / How many… are there?",
        },
        mistakes: [
          { en: "✗ There are a trainer today. → ✓ There is a trainer today.", pt: "✗ There are a trainer today. → ✓ There is a trainer today." },
          { en: "✗ There isn't much treadmills. → ✓ There aren't many treadmills.", pt: "✗ There isn't much treadmills. → ✓ There aren't many treadmills." },
        ],
      },
      {
        title: { en: "Review: love, send, watch (simple past)", pt: "Revisão: love, send, watch (passado simples)" },
        examples: [
          { en: "I loved my run yesterday.", pt: "Eu amei minha corrida ontem." },
          { en: "Diego sent the trainer a message.", pt: "Diego mandou uma mensagem para a treinadora." },
          { en: "Bianca watched a training video last night.", pt: "Bianca assistiu a um vídeo de treino ontem à noite." },
          { en: "She didn't answer, and I didn't watch the class live.", pt: "Ela não respondeu, e eu não assisti a aula ao vivo." },
        ],
        rule: {
          en: "Regular verbs like 'love' and 'watch' add -ed in the past (loved, watched). 'Send' is irregular: send → sent. Negatives and questions use didn't/did + base verb: I didn't watch. Did you send it?",
          pt: "Verbos regulares como 'love' e 'watch' recebem -ed no passado (loved, watched). 'Send' é irregular: send → sent. Negativas e perguntas usam didn't/did + verbo base: I didn't watch. Did you send it?",
        },
        mistakes: [
          { en: "✗ I sended the email. → ✓ I sent the email.", pt: "✗ I sended the email. → ✓ I sent the email." },
          { en: "✗ Did you watched it? → ✓ Did you watch it?", pt: "✗ Did you watched it? → ✓ Did you watch it?" },
        ],
      },
    ],
    controlledPractice: [
      { id: "i12d-cp1", prompt: { en: "Complete: 'He's as strong ___ his coach.'", pt: "Complete: 'He's as strong ___ his coach.'" }, options: ["than", "as", "like"], answer: "as", explanation: { en: "The pattern is 'as + adjective + as'.", pt: "O padrão é 'as + adjetivo + as'." } },
      { id: "i12d-cp2", prompt: { en: "Complete: '___ there enough treadmills?'", pt: "Complete: '___ there enough treadmills?'" }, options: ["Is", "Are", "Do"], answer: "Are", explanation: { en: "'Treadmills' is plural, so use 'Are there…?'.", pt: "'Treadmills' é plural, então usa-se 'Are there…?'." } },
      { id: "i12d-cp3", prompt: { en: "Choose the correct past of 'send'.", pt: "Escolha o passado correto de 'send'." }, options: ["sended", "sent", "sends"], answer: "sent", explanation: { en: "'Send' is irregular: send → sent.", pt: "'Send' é irregular: send → sent." } },
      { id: "i12d-cp4", prompt: { en: "Make it negative: 'I'm as tired as you.'", pt: "Deixe negativo: 'I'm as tired as you.'" }, options: ["I'm not tired as you.", "I'm not as tired as you.", "I not am as tired as you."], answer: "I'm not as tired as you.", explanation: { en: "Negative: not as + adjective + as.", pt: "Negativa: not as + adjetivo + as." } },
      { id: "i12d-cp5", prompt: { en: "Complete: 'She ___ a training video last night.'", pt: "Complete: 'She ___ a training video last night.'" }, options: ["watch", "watched", "watches"], answer: "watched", explanation: { en: "Regular verb in the past: watch → watched.", pt: "Verbo regular no passado: watch → watched." } },
    ],
    input: {
      kind: "listening",
      title: { en: "A fitness podcast about progress", pt: "Um podcast de fitness sobre progresso" },
      lines: [
        { en: "Welcome back! Today we're talking about comparing your progress with other people.", pt: "Bem-vindos de volta! Hoje vamos falar sobre comparar seu progresso com o de outras pessoas." },
        { en: "Remember: you don't need to be as fast as a professional runner to be healthy.", pt: "Lembre-se: você não precisa ser tão rápido quanto um corredor profissional para ser saudável." },
        { en: "Last month, there weren't many people who finished the 5K challenge, but this month there are a lot more.", pt: "No mês passado, não teve muita gente que terminou o desafio de 5K, mas este mês tem muito mais." },
        { en: "One listener sent us a message: she loved the new beginner plan and watched every video twice!", pt: "Uma ouvinte nos mandou uma mensagem: ela amou o novo plano para iniciantes e assistiu a todo vídeo duas vezes!" },
        { en: "So keep it up. Your only goal is to improve, not to be as strong as anyone else.", pt: "Então continue assim. Sua única meta é melhorar, não ser tão forte quanto qualquer outra pessoa." },
      ],
      questions: [
        { id: "i12d-iq1", prompt: { en: "Do you need to be as fast as a professional to be healthy?", pt: "Você precisa ser tão rápido quanto um profissional para ser saudável?" }, options: ["Yes", "No", "The podcast doesn't say"], answer: "No", explanation: { en: "'You don't need to be as fast as a professional runner.'", pt: "'Você não precisa ser tão rápido quanto um corredor profissional.'" } },
        { id: "i12d-iq2", prompt: { en: "What did the listener send?", pt: "O que a ouvinte mandou?" }, options: ["A photo", "A message", "A video"], answer: "A message", explanation: { en: "'One listener sent us a message.'", pt: "'Uma ouvinte nos mandou uma mensagem.'" } },
        { id: "i12d-iq3", prompt: { en: "What is your real goal, according to the podcast?", pt: "Qual é sua verdadeira meta, segundo o podcast?" }, options: ["To be the strongest", "To improve", "To finish first"], answer: "To improve", explanation: { en: "'Your only goal is to improve.'", pt: "'Sua única meta é melhorar.'" } },
      ],
    },
    quickCheck: [
      { id: "i12d-qc1", prompt: { en: "What does 'effort' mean?", pt: "O que significa 'effort'?" }, options: ["Energy you put into something", "A type of machine", "A weekly schedule"], answer: "Energy you put into something", explanation: { en: "Effort is the energy you use to do something hard.", pt: "Esforço é a energia usada para fazer algo difícil." } },
      { id: "i12d-qc2", prompt: { en: "Choose the correct comparison.", pt: "Escolha a comparação correta." }, options: ["He's as fast than me.", "He's as fast as me.", "He's so fast as me."], answer: "He's as fast as me.", explanation: { en: "Equality comparisons use 'as...as'.", pt: "Comparações de igualdade usam 'as...as'." } },
      { id: "i12d-qc3", prompt: { en: "Past of 'love'?", pt: "Passado de 'love'?" }, options: ["loveed", "loved", "lovd"], answer: "loved", explanation: { en: "Regular verb: love → loved.", pt: "Verbo regular: love → loved." } },
      { id: "i12d-qc4", prompt: { en: "'___ is only one trainer today.'", pt: "'___ is only one trainer today.'" }, options: ["There", "It", "This"], answer: "There", explanation: { en: "'There is' introduces existence.", pt: "'There is' introduz existência." } },
    ],
  },
  communicate: {
    id: "INTERMEDIATE-U12-COMMUNICATE",
    review: [
      { en: "She's as strong as her brother. — comparisons of equality.", pt: "Ela é tão forte quanto o irmão dela. — comparações de igualdade." },
      { en: "There are more people here than last week. Are there enough treadmills?", pt: "Tem mais gente aqui do que na semana passada. Tem esteiras suficientes?" },
      { en: "I loved my run. I sent a message. She watched a video.", pt: "Eu amei minha corrida. Eu mandei uma mensagem. Ela assistiu a um vídeo." },
      { en: "Keep it up! Way to go!", pt: "Continue assim! Muito bem!" },
    ],
    activities: [
      {
        id: "i12c-a1",
        title: { en: "Comparing Habits", pt: "Comparando hábitos" },
        instruction: { en: "Compare yourself with a friend or family member using 'as...as'. Say two things that are equal and one that isn't.", pt: "Compare-se com um amigo ou familiar usando 'as...as'. Diga duas coisas iguais e uma diferente." },
        phrases: [
          { en: "I'm as busy as my sister this month.", pt: "Estou tão ocupado quanto minha irmã este mês." },
          { en: "My brother isn't as organized as me.", pt: "Meu irmão não é tão organizado quanto eu." },
          { en: "We're as healthy as each other.", pt: "Nós somos tão saudáveis quanto o outro." },
        ],
        check: [
          { id: "i12c-a1q1", prompt: { en: "Which sentence compares two equal things?", pt: "Qual frase compara duas coisas iguais?" }, options: ["I'm as tall as him.", "I'm taller than him.", "I'm the tallest."], answer: "I'm as tall as him.", explanation: { en: "'As tall as' means the same height.", pt: "'As tall as' significa a mesma altura." } },
          { id: "i12c-a1q2", prompt: { en: "Make it negative: 'She's as fast as me.'", pt: "Deixe negativo: 'She's as fast as me.'" }, options: ["She isn't as fast as me.", "She isn't fast as me.", "She's not fast than me."], answer: "She isn't as fast as me.", explanation: { en: "Negative: isn't as + adjective + as.", pt: "Negativa: isn't as + adjetivo + as." } },
        ],
      },
      {
        id: "i12c-a2",
        title: { en: "Describing the Gym", pt: "Descrevendo a academia" },
        instruction: { en: "Describe a place you know using 'there is/are'. Say what there is, isn't, and ask a question about it.", pt: "Descreva um lugar que você conhece usando 'there is/are'. Diga o que tem, o que não tem, e faça uma pergunta." },
        phrases: [
          { en: "There are two treadmills and a lot of weights.", pt: "Tem duas esteiras e muitos pesos." },
          { en: "There isn't a swimming pool.", pt: "Não tem piscina." },
          { en: "Is there a trainer on the weekend?", pt: "Tem treinador no fim de semana?" },
        ],
        check: [
          { id: "i12c-a2q1", prompt: { en: "Choose the correct question.", pt: "Escolha a pergunta correta." }, options: ["There is a pool?", "Is there a pool?", "Is a pool there?"], answer: "Is there a pool?", explanation: { en: "Invert 'is' and 'there' for questions.", pt: "Inverta 'is' e 'there' nas perguntas." } },
          { id: "i12c-a2q2", prompt: { en: "'There ___ many people at 6 a.m.'", pt: "'There ___ many people at 6 a.m.'" }, options: ["isn't", "aren't", "doesn't"], answer: "aren't", explanation: { en: "Plural noun 'people' takes 'aren't'.", pt: "Substantivo plural 'people' usa 'aren't'." } },
        ],
      },
      {
        id: "i12c-a3",
        title: { en: "Last Night's Activities", pt: "As atividades de ontem à noite" },
        instruction: { en: "Say what you loved, sent, or watched last night, and ask a friend the same.", pt: "Diga o que você amou, mandou ou assistiu ontem à noite, e pergunte o mesmo a um amigo." },
        phrases: [
          { en: "I watched a documentary about running.", pt: "Assisti a um documentário sobre corrida." },
          { en: "I sent my trainer a video of my workout.", pt: "Mandei para minha treinadora um vídeo do meu treino." },
          { en: "Did you love the new gym playlist?", pt: "Você amou a nova playlist da academia?" },
        ],
        check: [
          { id: "i12c-a3q1", prompt: { en: "Which is the correct question?", pt: "Qual é a pergunta correta?" }, options: ["Did you watched it?", "Did you watch it?", "You watched it?"], answer: "Did you watch it?", explanation: { en: "Did + subject + base verb.", pt: "Did + sujeito + verbo base." } },
          { id: "i12c-a3q2", prompt: { en: "Negative of 'I sent it.'", pt: "Negativa de 'I sent it.'" }, options: ["I didn't send it.", "I didn't sent it.", "I not sent it."], answer: "I didn't send it.", explanation: { en: "didn't + base verb.", pt: "didn't + verbo base." } },
        ],
      },
    ],
    challenge: {
      id: "i12c-cc1",
      title: { en: "Compare Two Gyms", pt: "Compare duas academias" },
      instruction: {
        en: "Talk out loud comparing two gyms or two workout routines you know. Use 'as...as', 'there is/are', and tell what you watched or sent about one of them.",
        pt: "Fale em voz alta comparando duas academias ou duas rotinas de treino que você conhece. Use 'as...as', 'there is/are', e conte o que você assistiu ou mandou sobre uma delas.",
      },
      phrases: [
        { en: "This gym isn't as crowded as the one downtown.", pt: "Essa academia não é tão cheia quanto a do centro." },
        { en: "There are more machines here, but there isn't a pool.", pt: "Tem mais aparelhos aqui, mas não tem piscina." },
        { en: "I watched a review before I chose this one.", pt: "Assisti a uma avaliação antes de escolher essa." },
        { en: "I sent the link to my friend because I loved the classes.", pt: "Mandei o link para minha amiga porque amei as aulas." },
      ],
      check: [
        { id: "i12c-cc1q1", prompt: { en: "Did you use 'as...as' correctly?", pt: "Você usou 'as...as' corretamente?" }, options: ["Yes", "No", "Partially"], answer: "Yes", explanation: { en: "Self-check: as + adjective + as.", pt: "Autoavaliação: as + adjetivo + as." } },
        { id: "i12c-cc1q2", prompt: { en: "Did you use 'there is/are' to describe a place?", pt: "Você usou 'there is/are' para descrever um lugar?" }, options: ["Yes", "No", "Partially"], answer: "Yes", explanation: { en: "Self-check: there is/are + noun.", pt: "Autoavaliação: there is/are + substantivo." } },
      ],
    },
    lessonReview: {
      summary: {
        en: "You compared people and places with 'as...as', reviewed 'there is/are' and the simple past of love, send and watch.",
        pt: "Você comparou pessoas e lugares com 'as...as', revisou 'there is/are' e o passado simples de love, send e watch.",
      },
      canDo: [
        { en: "I can compare two people or things that are equal.", pt: "Consigo comparar duas pessoas ou coisas que são iguais." },
        { en: "I can describe a place with 'there is/are'.", pt: "Consigo descrever um lugar com 'there is/are'." },
        { en: "I can talk about what I loved, sent and watched.", pt: "Consigo falar sobre o que amei, mandei e assisti." },
      ],
      next: { en: "Next unit: lost and found — talking about whose things are whose.", pt: "Próxima unidade: achados e perdidos — falar de quem é o quê." },
    },
  },
};

/**
 * Intermediate — Unit 13 (Whose Is It?). Conteúdo autoral Speak2Co.
 * Foco: pronomes possessivos (mine, yours, his, hers, ours, theirs) e
 * demonstrativos (this/that/these/those), com revisão de as...as.
 * Personagens originais: Clara e Pedro, no balcão de achados e perdidos.
 */
export const INTERMEDIATE_U13: CourseUnit = {
  code: "INTERMEDIATE-U13",
  number: 13,
  title: "Whose Is It? — Is this bag yours or mine?",
  titlePt: "De quem é isso? — Essa bolsa é sua ou minha?",
  cefr: "B1",
  objective: {
    en: "Identify ownership with possessive pronouns (mine, yours, his, hers, ours, theirs) and describe objects with this/that/these/those.",
    pt: "Identificar posse com pronomes possessivos (mine, yours, his, hers, ours, theirs) e descrever objetos com this/that/these/those.",
  },
  communicationGoal: {
    en: "Handle a lost and found situation: describe an item, say whose it is, and confirm details before claiming it.",
    pt: "Lidar com uma situação de achados e perdidos: descrever um item, dizer de quem é, e confirmar detalhes antes de retirá-lo.",
  },
  prerequisites: {
    en: "Intermediate unit 12: comparisons with 'as...as' and possessive adjectives (my, your, his, her) from earlier units.",
    pt: "Unidade Intermediate 12: comparações com 'as...as' e adjetivos possessivos (my, your, his, her) de unidades anteriores.",
  },
  newContent: {
    en: "Grammar: possessive pronouns (mine, yours, his, hers, ours, theirs) + this/that/these/those | Vocabulary: lost items and description (12 items) | Expressions: checking and confirming",
    pt: "Gramática: pronomes possessivos (mine, yours, his, hers, ours, theirs) + this/that/these/those | Vocabulário: itens perdidos e descrição (12 itens) | Expressões: conferir e confirmar",
  },
  reviewContent: {
    en: "Comparisons of equality with 'as...as' from Unit 12.",
    pt: "Comparações de igualdade com 'as...as' da Unidade 12.",
  },
  discover: {
    id: "INTERMEDIATE-U13-DISCOVER",
    warmUp: {
      prompt: {
        en: "Look at the picture. Whose things are these? Have you ever lost something important?",
        pt: "Observe a imagem. De quem são essas coisas? Você já perdeu algo importante?",
      },
      phrases: [
        { en: "Is this umbrella yours?", pt: "Esse guarda-chuva é seu?" },
        { en: "Have you ever found something that wasn't yours?", pt: "Você já achou algo que não era seu?" },
        { en: "What do you do when you lose something?", pt: "O que você faz quando perde algo?" },
      ],
    },
    context: {
      situation: {
        en: "Clara works at the lost and found office of a train station. Pedro comes in to look for his bag, but there are two similar bags on the desk.",
        pt: "Clara trabalha no balcão de achados e perdidos de uma estação de trem. Pedro chega para procurar sua bolsa, mas há duas bolsas parecidas na mesa.",
      },
      dialogue: [
        { who: "Pedro", en: "Excuse me, I think I left my bag on the 5 o'clock train.", pt: "Com licença, acho que deixei minha bolsa no trem das 5 horas." },
        { who: "Clara", en: "We have two bags here. Is this one yours, or is that one?", pt: "Temos duas bolsas aqui. Essa aqui é sua, ou aquela?" },
        { who: "Pedro", en: "That one, I think. Mine is black with a small red tag.", pt: "Aquela, eu acho. A minha é preta com uma etiqueta vermelha pequena." },
        { who: "Clara", en: "This black one? Let me check. Yes, there's a red tag. Is this wallet inside yours too?", pt: "Essa preta? Deixe eu conferir. Sim, tem uma etiqueta vermelha. Essa carteira dentro também é sua?" },
        { who: "Pedro", en: "Yes, that's mine. And those keys next to it are mine as well.", pt: "Sim, essa é minha. E aquelas chaves do lado também são minhas." },
        { who: "Clara", en: "Great. And these sunglasses? Are they yours or hers? A woman left them here too.", pt: "Ótimo. E esses óculos de sol? São seus ou dela? Uma mulher também deixou eles aqui." },
        { who: "Pedro", en: "Those aren't mine. I don't wear sunglasses like that.", pt: "Aqueles não são meus. Eu não uso óculos de sol assim." },
        { who: "Clara", en: "OK, they must be hers, then. Here's your bag. Sign here, please.", pt: "Ok, então devem ser dela. Aqui está sua bolsa. Assine aqui, por favor." },
      ],
    },
    vocabulary: [
      { term: "suitcase", pt: "mala", ipa: "/ˈsuːtkeɪs/", definition: "A large bag used for carrying clothes when you travel.", example: "Is this suitcase yours or theirs?", examplePt: "Essa mala é sua ou deles?" },
      { term: "wallet", pt: "carteira", ipa: "/ˈwɑːlɪt/", definition: "A small case for money and cards.", example: "My wallet has my ID and a few cards.", examplePt: "Minha carteira tem minha identidade e alguns cartões." },
      { term: "umbrella", pt: "guarda-chuva", ipa: "/ʌmˈbrelə/", definition: "An object you open to protect yourself from rain.", example: "Is this umbrella yours? It was on the train.", examplePt: "Esse guarda-chuva é seu? Estava no trem." },
      { term: "charger", pt: "carregador", ipa: "/ˈtʃɑːrdʒər/", definition: "A device that gives power to a phone or laptop.", example: "That charger over there is hers, not mine.", examplePt: "Aquele carregador ali é dela, não meu." },
      { term: "receipt", pt: "recibo, comprovante", ipa: "/rɪˈsiːt/", definition: "A piece of paper that shows you paid for something.", example: "Do you need a receipt to claim your bag?", examplePt: "Você precisa de um comprovante para retirar sua bolsa?" },
      { term: "claim", pt: "reclamar, retirar (algo perdido)", ipa: "/kleɪm/", definition: "To ask for something back because it's yours.", example: "He came to claim his suitcase.", examplePt: "Ele veio retirar a mala dele." },
      { term: "lost", pt: "perdido", ipa: "/lɔːst/", definition: "Not in the place it should be; can't be found.", example: "My phone was lost for two days.", examplePt: "Meu celular ficou perdido por dois dias." },
      { term: "found", pt: "encontrado", ipa: "/faʊnd/", definition: "Discovered after being lost.", example: "The keys were found under the seat.", examplePt: "As chaves foram encontradas embaixo do banco." },
      { term: "describe", pt: "descrever", ipa: "/dɪˈskraɪb/", definition: "To say what something looks like.", example: "Can you describe your bag, please?", examplePt: "Você pode descrever sua bolsa, por favor?" },
      { term: "similar", pt: "parecido", ipa: "/ˈsɪmɪlər/", definition: "Almost the same as something else.", example: "These two bags are very similar.", examplePt: "Essas duas bolsas são bem parecidas." },
      { term: "careful", pt: "cuidadoso", ipa: "/ˈkerfəl/", definition: "Paying close attention to avoid mistakes.", example: "Be careful with your things on the train.", examplePt: "Cuidado com suas coisas no trem." },
      { term: "honest", pt: "honesto", ipa: "/ˈɑːnɪst/", definition: "Telling the truth; not lying or stealing.", example: "The woman was honest and returned the wallet.", examplePt: "A mulher foi honesta e devolveu a carteira." },
    ],
    expressions: [
      { en: "Let me check.", pt: "Deixe eu conferir." },
      { en: "That rings a bell.", pt: "Isso me lembra algo." },
      { en: "It must be hers.", pt: "Deve ser dela." },
      { en: "Sign here, please.", pt: "Assine aqui, por favor." },
      { en: "Better safe than sorry.", pt: "É melhor prevenir do que remediar." },
      { en: "Thanks a million.", pt: "Muito obrigado mesmo." },
    ],
    grammar: [
      {
        title: { en: "Possessive pronouns: mine, yours, his, hers, ours, theirs", pt: "Pronomes possessivos: mine, yours, his, hers, ours, theirs" },
        examples: [
          { en: "Is this bag yours? — No, it isn't mine.", pt: "Essa bolsa é sua? — Não, não é minha." },
          { en: "That wallet is his, not hers.", pt: "Aquela carteira é dele, não dela." },
          { en: "Those keys are ours.", pt: "Aquelas chaves são nossas." },
          { en: "The sunglasses must be theirs.", pt: "Os óculos de sol devem ser deles." },
          { en: "Whose bag is this? — It's mine.", pt: "De quem é essa bolsa? — É minha." },
        ],
        rule: {
          en: "Possessive pronouns replace 'possessive adjective + noun': my bag → mine, your bag → yours, his bag → his, her bag → hers, our bag → ours, their bag → theirs. Use 'Whose…?' to ask about ownership.",
          pt: "Pronomes possessivos substituem 'adjetivo possessivo + substantivo': my bag → mine, your bag → yours, his bag → his, her bag → hers, our bag → ours, their bag → theirs. Use 'Whose…?' para perguntar sobre posse.",
        },
        mistakes: [
          { en: "✗ This is mine bag. → ✓ This bag is mine. / This is my bag.", pt: "✗ This is mine bag. → ✓ This bag is mine. / This is my bag." },
          { en: "✗ It's her's. → ✓ It's hers. (no apostrophe)", pt: "✗ It's her's. → ✓ It's hers. (sem apóstrofo)" },
        ],
      },
      {
        title: { en: "This, that, these, those", pt: "This, that, these, those" },
        examples: [
          { en: "Is this bag yours, or is that one?", pt: "Essa bolsa é sua, ou é aquela?" },
          { en: "These sunglasses are on the desk.", pt: "Esses óculos de sol estão na mesa." },
          { en: "Those keys next to it are mine.", pt: "Aquelas chaves do lado são minhas." },
          { en: "This is my wallet, and that is her umbrella.", pt: "Esta é minha carteira, e aquele é o guarda-chuva dela." },
        ],
        rule: {
          en: "Use 'this/these' for people or things close to you (this = singular, these = plural) and 'that/those' for things farther away (that = singular, those = plural).",
          pt: "Use 'this/these' para pessoas ou coisas perto de você (this = singular, these = plural) e 'that/those' para coisas mais distantes (that = singular, those = plural).",
        },
        mistakes: [
          { en: "✗ This keys are mine. → ✓ These keys are mine.", pt: "✗ This keys are mine. → ✓ These keys are mine." },
          { en: "✗ Those bag is his. → ✓ That bag is his.", pt: "✗ Those bag is his. → ✓ That bag is his." },
        ],
      },
      {
        title: { en: "Review: as...as with descriptions", pt: "Revisão: as...as em descrições" },
        examples: [
          { en: "These two bags are as similar as twins.", pt: "Essas duas bolsas são tão parecidas quanto gêmeas." },
          { en: "My wallet isn't as organized as hers.", pt: "Minha carteira não é tão organizada quanto a dela." },
          { en: "Is this suitcase as heavy as that one?", pt: "Essa mala é tão pesada quanto aquela?" },
        ],
        rule: {
          en: "Keep using 'as + adjective + as' to compare objects while you describe lost items, e.g. 'This bag is as old as mine.'",
          pt: "Continue usando 'as + adjetivo + as' para comparar objetos enquanto descreve itens perdidos, ex.: 'This bag is as old as mine.'",
        },
        mistakes: [
          { en: "✗ as heavy that one → ✓ as heavy as that one", pt: "✗ as heavy that one → ✓ as heavy as that one" },
        ],
      },
    ],
    controlledPractice: [
      { id: "i13d-cp1", prompt: { en: "Complete: 'This isn't my bag. It's ___.'", pt: "Complete: 'This isn't my bag. It's ___.'" }, options: ["her", "hers", "she"], answer: "hers", explanation: { en: "Possessive pronoun replaces 'her bag'.", pt: "Pronome possessivo substitui 'her bag'." } },
      { id: "i13d-cp2", prompt: { en: "Choose the correct sentence.", pt: "Escolha a frase correta." }, options: ["Those key are mine.", "That keys are mine.", "Those keys are mine."], answer: "Those keys are mine.", explanation: { en: "Plural + far away = 'those'.", pt: "Plural + distante = 'those'." } },
      { id: "i13d-cp3", prompt: { en: "'Whose umbrella ___ this?'", pt: "'Whose umbrella ___ this?'" }, options: ["is", "are", "does"], answer: "is", explanation: { en: "Singular subject 'umbrella' takes 'is'.", pt: "Sujeito singular 'umbrella' usa 'is'." } },
      { id: "i13d-cp4", prompt: { en: "Complete: 'That suitcase is ___, not yours.'", pt: "Complete: 'That suitcase is ___, not yours.'" }, options: ["my", "mine", "me"], answer: "mine", explanation: { en: "Use possessive pronoun 'mine' after 'is'.", pt: "Use o pronome possessivo 'mine' depois de 'is'." } },
      { id: "i13d-cp5", prompt: { en: "Choose the correct comparison.", pt: "Escolha a comparação correta." }, options: ["This bag is as heavy as that one.", "This bag is as heavy that one.", "This bag is so heavy that one."], answer: "This bag is as heavy as that one.", explanation: { en: "'as + adjective + as' compares equal things.", pt: "'as + adjetivo + as' compara coisas iguais." } },
    ],
    input: {
      kind: "reading",
      title: { en: "A notice at the lost and found office", pt: "Um aviso no balcão de achados e perdidos" },
      lines: [
        { en: "Attention, passengers: if you lost something on a train this week, please come to this office.", pt: "Atenção, passageiros: se vocês perderam algo no trem esta semana, por favor venham a este balcão." },
        { en: "We have several items here: two bags, one suitcase, three umbrellas, and a pair of sunglasses.", pt: "Temos vários itens aqui: duas bolsas, uma mala, três guarda-chuvas e um par de óculos de sol." },
        { en: "To claim an item, you need to describe it and show an ID. Please don't say an item is yours if it isn't.", pt: "Para retirar um item, você precisa descrevê-lo e mostrar um documento. Por favor, não diga que um item é seu se não for." },
        { en: "Last week, a passenger found a wallet and brought it here. That was very honest of her.", pt: "Na semana passada, uma passageira encontrou uma carteira e a trouxe aqui. Isso foi muito honesto da parte dela." },
        { en: "If an item isn't claimed in thirty days, it's no longer ours to keep, and we send it to the city office.", pt: "Se um item não for retirado em trinta dias, ele deixa de ser nosso para guardar, e nós o mandamos para a prefeitura." },
      ],
      questions: [
        { id: "i13d-iq1", prompt: { en: "What do you need to claim an item?", pt: "O que você precisa para retirar um item?" }, options: ["A receipt only", "A description and an ID", "Nothing"], answer: "A description and an ID", explanation: { en: "'You need to describe it and show an ID.'", pt: "'Você precisa descrevê-lo e mostrar um documento.'" } },
        { id: "i13d-iq2", prompt: { en: "What did a passenger do last week?", pt: "O que uma passageira fez na semana passada?" }, options: ["She lost a wallet", "She found and returned a wallet", "She lost sunglasses"], answer: "She found and returned a wallet", explanation: { en: "'A passenger found a wallet and brought it here.'", pt: "'Uma passageira encontrou uma carteira e a trouxe aqui.'" } },
        { id: "i13d-iq3", prompt: { en: "What happens after thirty days?", pt: "O que acontece depois de trinta dias?" }, options: ["The item is thrown away", "It goes to the city office", "Nothing changes"], answer: "It goes to the city office", explanation: { en: "'We send it to the city office.'", pt: "'Nós o mandamos para a prefeitura.'" } },
      ],
    },
    quickCheck: [
      { id: "i13d-qc1", prompt: { en: "What does 'claim' mean here?", pt: "O que significa 'claim' aqui?" }, options: ["To ask for something back", "To lose something", "To describe something"], answer: "To ask for something back", explanation: { en: "To claim is to ask for what is yours.", pt: "Claim é pedir de volta o que é seu." } },
      { id: "i13d-qc2", prompt: { en: "Choose the correct possessive pronoun.", pt: "Escolha o pronome possessivo correto." }, options: ["theirs", "their's", "theys"], answer: "theirs", explanation: { en: "'Theirs' has no apostrophe.", pt: "'Theirs' não tem apóstrofo." } },
      { id: "i13d-qc3", prompt: { en: "Which word points to something far from you, plural?", pt: "Qual palavra aponta para algo distante, no plural?" }, options: ["this", "those", "that"], answer: "those", explanation: { en: "'Those' is plural and far away.", pt: "'Those' é plural e distante." } },
      { id: "i13d-qc4", prompt: { en: "'This suitcase is as ___ as mine.'", pt: "'This suitcase is as ___ as mine.'" }, options: ["heavy", "heavier", "heaviest"], answer: "heavy", explanation: { en: "'as + adjective + as' uses the base adjective.", pt: "'as + adjetivo + as' usa o adjetivo base." } },
    ],
  },
  communicate: {
    id: "INTERMEDIATE-U13-COMMUNICATE",
    review: [
      { en: "Is this bag yours? — No, it isn't mine.", pt: "Essa bolsa é sua? — Não, não é minha." },
      { en: "This bag is mine. That one is hers. Those keys are ours.", pt: "Essa bolsa é minha. Aquela é dela. Aquelas chaves são nossas." },
      { en: "This/these (close) vs. that/those (far).", pt: "This/these (perto) vs. that/those (longe)." },
      { en: "This bag is as heavy as that one.", pt: "Essa bolsa é tão pesada quanto aquela." },
    ],
    activities: [
      {
        id: "i13c-a1",
        title: { en: "Whose Is It?", pt: "De quem é isso?" },
        instruction: { en: "Point to three objects near you and say whose they are, using possessive pronouns.", pt: "Aponte para três objetos perto de você e diga de quem são, usando pronomes possessivos." },
        phrases: [
          { en: "This phone is mine.", pt: "Este celular é meu." },
          { en: "That jacket is his.", pt: "Aquela jaqueta é dele." },
          { en: "These books are ours.", pt: "Estes livros são nossos." },
        ],
        check: [
          { id: "i13c-a1q1", prompt: { en: "Choose the correct pronoun for 'her bag'.", pt: "Escolha o pronome correto para 'her bag'." }, options: ["hers", "her's", "she"], answer: "hers", explanation: { en: "Possessive pronoun: hers.", pt: "Pronome possessivo: hers." } },
          { id: "i13c-a1q2", prompt: { en: "'Whose shoes ___ these?'", pt: "'Whose shoes ___ these?'" }, options: ["is", "are", "do"], answer: "are", explanation: { en: "'Shoes' is plural, use 'are'.", pt: "'Shoes' é plural, use 'are'." } },
        ],
      },
      {
        id: "i13c-a2",
        title: { en: "Describe and Guess", pt: "Descreva e adivinhe" },
        instruction: { en: "Describe an item you lost once (color, size, where you left it) using this/that/these/those.", pt: "Descreva um item que você já perdeu (cor, tamanho, onde deixou) usando this/that/these/those." },
        phrases: [
          { en: "This is a small black wallet with a red tag.", pt: "Esta é uma carteira preta pequena com etiqueta vermelha." },
          { en: "I left it on that bench near the entrance.", pt: "Eu deixei ela naquele banco perto da entrada." },
          { en: "Those are the keys I lost last month.", pt: "Aquelas são as chaves que eu perdi mês passado." },
        ],
        check: [
          { id: "i13c-a2q1", prompt: { en: "Which is correct for something close to you?", pt: "Qual está correto para algo perto de você?" }, options: ["This is my wallet.", "That is my wallet here.", "Those is my wallet."], answer: "This is my wallet.", explanation: { en: "'This' is for close, singular things.", pt: "'This' é para coisas perto, singular." } },
          { id: "i13c-a2q2", prompt: { en: "Complete: 'Is ___ suitcase yours?' (far, singular)", pt: "Complete: 'Is ___ suitcase yours?' (longe, singular)" }, options: ["this", "that", "these"], answer: "that", explanation: { en: "Far + singular = 'that'.", pt: "Longe + singular = 'that'." } },
        ],
      },
      {
        id: "i13c-a3",
        title: { en: "At the Office", pt: "No balcão" },
        instruction: { en: "Role-play a short conversation at a lost and found office, confirming what belongs to whom.", pt: "Faça um pequeno diálogo em um balcão de achados e perdidos, confirmando de quem é cada coisa." },
        phrases: [
          { en: "Let me check if this is yours.", pt: "Deixe eu conferir se isso é seu." },
          { en: "That rings a bell — I think it's mine!", pt: "Isso me lembra algo — acho que é meu!" },
          { en: "Thanks a million for your help.", pt: "Muito obrigado mesmo pela ajuda." },
        ],
        check: [
          { id: "i13c-a3q1", prompt: { en: "Which is a polite way to check ownership?", pt: "Qual é uma forma educada de confirmar posse?" }, options: ["Let me check.", "Give it now.", "Not mine, go away."], answer: "Let me check.", explanation: { en: "'Let me check' is polite and useful.", pt: "'Let me check' é educado e útil." } },
          { id: "i13c-a3q2", prompt: { en: "Complete: 'It must be ___.' (belongs to them)", pt: "Complete: 'It must be ___.' (pertence a eles)" }, options: ["their", "theirs", "them"], answer: "theirs", explanation: { en: "Possessive pronoun after 'be': theirs.", pt: "Pronome possessivo depois de 'be': theirs." } },
        ],
      },
    ],
    challenge: {
      id: "i13c-cc1",
      title: { en: "The Lost and Found Desk", pt: "O balcão de achados e perdidos" },
      instruction: {
        en: "Talk out loud as if you work at a lost and found desk. Describe three items, ask whose they are, and use this/that/these/those and possessive pronouns.",
        pt: "Fale em voz alta como se você trabalhasse em um balcão de achados e perdidos. Descreva três itens, pergunte de quem são, e use this/that/these/those e pronomes possessivos.",
      },
      phrases: [
        { en: "Is this suitcase yours, sir?", pt: "Essa mala é sua, senhor?" },
        { en: "Those sunglasses are hers, not mine.", pt: "Aqueles óculos de sol são dela, não meus." },
        { en: "This charger is as new as that one.", pt: "Esse carregador é tão novo quanto aquele." },
        { en: "These keys must be theirs.", pt: "Essas chaves devem ser deles." },
      ],
      check: [
        { id: "i13c-cc1q1", prompt: { en: "Did you use at least two possessive pronouns?", pt: "Você usou pelo menos dois pronomes possessivos?" }, options: ["Yes", "No", "Partially"], answer: "Yes", explanation: { en: "Self-check: mine, yours, his, hers, ours, theirs.", pt: "Autoavaliação: mine, yours, his, hers, ours, theirs." } },
        { id: "i13c-cc1q2", prompt: { en: "Did you use 'this/that/these/those' correctly?", pt: "Você usou 'this/that/these/those' corretamente?" }, options: ["Yes", "No", "Partially"], answer: "Yes", explanation: { en: "Self-check: close vs. far, singular vs. plural.", pt: "Autoavaliação: perto vs. longe, singular vs. plural." } },
      ],
    },
    lessonReview: {
      summary: {
        en: "You learned to identify ownership with possessive pronouns, describe objects with this/that/these/those, and reviewed 'as...as'.",
        pt: "Você aprendeu a identificar posse com pronomes possessivos, descrever objetos com this/that/these/those, e revisou 'as...as'.",
      },
      canDo: [
        { en: "I can say whose something is with mine, yours, his, hers, ours, theirs.", pt: "Consigo dizer de quem é algo com mine, yours, his, hers, ours, theirs." },
        { en: "I can describe objects with this, that, these and those.", pt: "Consigo descrever objetos com this, that, these e those." },
        { en: "I can compare objects with 'as...as'.", pt: "Consigo comparar objetos com 'as...as'." },
      ],
      next: { en: "Next unit: asking for favors — what could you do to help someone?", pt: "Próxima unidade: pedir favores — o que você poderia fazer para ajudar alguém?" },
    },
  },
};

/**
 * Intermediate — Unit 14 (Could You Help?). Conteúdo autoral Speak2Co.
 * Foco: "could" para habilidade passada e pedidos educados, revisão de
 * respostas curtas com auxiliares variados.
 * Personagens originais: Sofia e o Sr. Alan, vizinhos em um dia de mudança.
 */
export const INTERMEDIATE_U14: CourseUnit = {
  code: "INTERMEDIATE-U14",
  number: 14,
  title: "Could You Help? — What could you do for a neighbor today?",
  titlePt: "Você poderia ajudar? — O que você poderia fazer por um vizinho hoje?",
  cefr: "B1",
  objective: {
    en: "Use 'could' to talk about past ability and to make polite requests, and review short answers with different auxiliaries.",
    pt: "Usar 'could' para falar de habilidade no passado e fazer pedidos educados, e revisar respostas curtas com auxiliares diferentes.",
  },
  communicationGoal: {
    en: "Ask a neighbor for help on moving day: request favors politely, offer help, and talk about what you could or couldn't do before.",
    pt: "Pedir ajuda a um vizinho no dia da mudança: pedir favores educadamente, oferecer ajuda, e falar do que você conseguia ou não fazer antes.",
  },
  prerequisites: {
    en: "Intermediate units 12-13: 'as...as', possessive pronouns, this/that/these/those.",
    pt: "Unidades Intermediate 12-13: 'as...as', pronomes possessivos, this/that/these/those.",
  },
  newContent: {
    en: "Grammar: 'could' for past ability and polite requests (affirmative, negative, questions) | Vocabulary: neighbors and favors (12 items) | Expressions: offering and thanking",
    pt: "Gramática: 'could' para habilidade passada e pedidos educados (afirmativa, negativa, perguntas) | Vocabulário: vizinhos e favores (12 itens) | Expressões: oferecer e agradecer",
  },
  reviewContent: {
    en: "Short answers with different auxiliaries (do/does/did, is/are/was/were, can/will) from previous units.",
    pt: "Respostas curtas com auxiliares diferentes (do/does/did, is/are/was/were, can/will) de unidades anteriores.",
  },
  discover: {
    id: "INTERMEDIATE-U14-DISCOVER",
    warmUp: {
      prompt: {
        en: "Look at the picture. What could you ask a neighbor for help with?",
        pt: "Observe a imagem. Com o que você poderia pedir ajuda a um vizinho?",
      },
      phrases: [
        { en: "Could you help me carry something heavy?", pt: "Você poderia me ajudar a carregar algo pesado?" },
        { en: "Could you swim or ride a bike when you were a child?", pt: "Você conseguia nadar ou andar de bicicleta quando era criança?" },
        { en: "Do you like asking your neighbors for favors?", pt: "Você gosta de pedir favores aos seus vizinhos?" },
      ],
    },
    context: {
      situation: {
        en: "Sofia just moved into a new apartment. She has a lot of heavy boxes, and her elevator isn't working. She meets her new neighbor, Mr. Alan, in the hallway.",
        pt: "Sofia acabou de se mudar para um apartamento novo. Ela tem muitas caixas pesadas, e o elevador não está funcionando. Ela encontra seu novo vizinho, Sr. Alan, no corredor.",
      },
      dialogue: [
        { who: "Sofia", en: "Excuse me, could you help me for a minute? The elevator isn't working.", pt: "Com licença, você poderia me ajudar por um minuto? O elevador não está funcionando." },
        { who: "Mr. Alan", en: "Of course! Could you show me which boxes are the heaviest?", pt: "Claro! Você poderia me mostrar quais caixas são as mais pesadas?" },
        { who: "Sofia", en: "This one, please. I couldn't carry it alone; it's too heavy.", pt: "Esta aqui, por favor. Eu não consegui carregar sozinha; está muito pesada." },
        { who: "Mr. Alan", en: "No problem at all. When I was younger, I could carry two boxes at once!", pt: "Sem problema nenhum. Quando eu era mais jovem, eu conseguia carregar duas caixas de uma vez!" },
        { who: "Sofia", en: "Really? I could never do that. Thank you so much for your help.", pt: "Sério? Eu nunca conseguiria fazer isso. Muito obrigada pela sua ajuda." },
        { who: "Mr. Alan", en: "Anytime. Could you also lend me your Wi-Fi password? Mine isn't working today.", pt: "Sempre que precisar. Você poderia também me emprestar sua senha do Wi-Fi? A minha não está funcionando hoje." },
        { who: "Sofia", en: "Of course! And could you recommend a good restaurant near here?", pt: "Claro! E você poderia recomendar um bom restaurante aqui perto?" },
        { who: "Mr. Alan", en: "I could tell you about three! I owe you one for the password.", pt: "Eu poderia te falar de três! Estou te devendo uma pela senha." },
      ],
    },
    vocabulary: [
      { term: "neighbor", pt: "vizinho(a)", ipa: "/ˈneɪbər/", definition: "A person who lives near you.", example: "My neighbor helped me move some boxes.", examplePt: "Meu vizinho me ajudou a carregar umas caixas." },
      { term: "favor", pt: "favor", ipa: "/ˈfeɪvər/", definition: "A kind, helpful action.", example: "Could you do me a favor?", examplePt: "Você poderia me fazer um favor?" },
      { term: "carry", pt: "carregar", ipa: "/ˈkæri/", definition: "To hold and move something from one place to another.", example: "He could carry two boxes at once.", examplePt: "Ele conseguia carregar duas caixas de uma vez." },
      { term: "borrow", pt: "pegar emprestado", ipa: "/ˈbɑːroʊ/", definition: "To take something for a while and give it back.", example: "Could I borrow your umbrella?", examplePt: "Eu poderia pegar seu guarda-chuva emprestado?" },
      { term: "lend", pt: "emprestar", ipa: "/lend/", definition: "To let someone use something of yours for a while.", example: "Could you lend me your charger?", examplePt: "Você poderia me emprestar seu carregador?" },
      { term: "elevator", pt: "elevador", ipa: "/ˈelɪveɪtər/", definition: "A machine that takes people up and down in a building.", example: "The elevator isn't working today.", examplePt: "O elevador não está funcionando hoje." },
      { term: "stairs", pt: "escada", ipa: "/sterz/", definition: "A set of steps between floors.", example: "We had to use the stairs.", examplePt: "Tivemos que usar a escada." },
      { term: "heavy", pt: "pesado", ipa: "/ˈhevi/", definition: "Having a lot of weight.", example: "This box is too heavy for me alone.", examplePt: "Essa caixa é pesada demais para mim sozinho." },
      { term: "kind", pt: "gentil, bondoso", ipa: "/kaɪnd/", definition: "Friendly and helpful to others.", example: "That was very kind of you.", examplePt: "Isso foi muito gentil da sua parte." },
      { term: "grateful", pt: "grato(a)", ipa: "/ˈɡreɪtfəl/", definition: "Feeling thankful for something.", example: "I'm really grateful for your help.", examplePt: "Sou muito grata pela sua ajuda." },
      { term: "apartment", pt: "apartamento", ipa: "/əˈpɑːrtmənt/", definition: "A set of rooms for living, usually in a building.", example: "Sofia just moved into a new apartment.", examplePt: "A Sofia acabou de se mudar para um apartamento novo." },
      { term: "move (house)", pt: "se mudar", ipa: "/muːv/", definition: "To go and live in a different home.", example: "We could move next month.", examplePt: "Poderíamos nos mudar mês que vem." },
    ],
    expressions: [
      { en: "No problem at all.", pt: "Sem problema nenhum." },
      { en: "I really appreciate it.", pt: "Eu realmente agradeço." },
      { en: "Anytime.", pt: "Sempre que precisar." },
      { en: "That's very kind of you.", pt: "Isso é muito gentil da sua parte." },
      { en: "I owe you one.", pt: "Estou te devendo uma." },
      { en: "Let me know if you need anything.", pt: "Me avise se precisar de algo." },
    ],
    grammar: [
      {
        title: { en: "Could — past ability", pt: "Could — habilidade no passado" },
        examples: [
          { en: "When I was younger, I could carry two boxes at once.", pt: "Quando eu era mais jovem, eu conseguia carregar duas caixas de uma vez." },
          { en: "I couldn't carry it alone.", pt: "Eu não consegui carregar sozinha." },
          { en: "Could you swim when you were a child?", pt: "Você conseguia nadar quando era criança?" },
          { en: "She couldn't speak English five years ago.", pt: "Ela não conseguia falar inglês cinco anos atrás." },
        ],
        rule: {
          en: "Use 'could/couldn't + base verb' to talk about general ability in the past. Questions invert 'could' and the subject: Could you…?",
          pt: "Use 'could/couldn't + verbo base' para falar de habilidade geral no passado. Perguntas invertem 'could' e o sujeito: Could you…?",
        },
        mistakes: [
          { en: "✗ I could to carry it. → ✓ I could carry it. (no 'to')", pt: "✗ I could to carry it. → ✓ I could carry it. (sem 'to')" },
          { en: "✗ She couldn't spoke English. → ✓ She couldn't speak English.", pt: "✗ She couldn't spoke English. → ✓ She couldn't speak English." },
        ],
      },
      {
        title: { en: "Could — polite requests", pt: "Could — pedidos educados" },
        examples: [
          { en: "Could you help me for a minute?", pt: "Você poderia me ajudar por um minuto?" },
          { en: "Could you lend me your Wi-Fi password?", pt: "Você poderia me emprestar sua senha do Wi-Fi?" },
          { en: "Could I borrow your umbrella?", pt: "Eu poderia pegar seu guarda-chuva emprestado?" },
          { en: "Could you show me which boxes are the heaviest?", pt: "Você poderia me mostrar quais caixas são as mais pesadas?" },
        ],
        rule: {
          en: "Use 'Could you/I + base verb…?' to make polite requests, more formal than 'Can you…?'. Answer with 'Sure' / 'Of course' or 'I'm sorry, I can't right now.'",
          pt: "Use 'Could you/I + verbo base…?' para pedidos educados, mais formal que 'Can you…?'. Responda com 'Sure' / 'Of course' ou 'I'm sorry, I can't right now.'",
        },
        mistakes: [
          { en: "✗ Could you to help me? → ✓ Could you help me?", pt: "✗ Could you to help me? → ✓ Could you help me?" },
          { en: "✗ Could you helping me? → ✓ Could you help me?", pt: "✗ Could you helping me? → ✓ Could you help me?" },
        ],
      },
      {
        title: { en: "Review: short answers with different auxiliaries", pt: "Revisão: respostas curtas com auxiliares diferentes" },
        examples: [
          { en: "Did you move last week? — Yes, I did.", pt: "Você se mudou semana passada? — Sim, me mudei." },
          { en: "Are you tired? — No, I'm not.", pt: "Você está cansado? — Não, não estou." },
          { en: "Was the elevator working? — No, it wasn't.", pt: "O elevador estava funcionando? — Não, não estava." },
          { en: "Could you carry it? — No, I couldn't.", pt: "Você conseguiu carregar? — Não, não consegui." },
        ],
        rule: {
          en: "Short answers repeat the auxiliary from the question (did, do, does, is, are, was, were, can, could, will), never the full verb.",
          pt: "Respostas curtas repetem o auxiliar da pergunta (did, do, does, is, are, was, were, can, could, will), nunca o verbo completo.",
        },
        mistakes: [
          { en: "✗ Yes, I carried. → ✓ Yes, I did.", pt: "✗ Yes, I carried. → ✓ Yes, I did." },
          { en: "✗ No, I not could. → ✓ No, I couldn't.", pt: "✗ No, I not could. → ✓ No, I couldn't." },
        ],
      },
    ],
    controlledPractice: [
      { id: "i14d-cp1", prompt: { en: "Complete: '___ you help me for a minute?'", pt: "Complete: '___ you help me for a minute?'" }, options: ["Could", "Do", "Are"], answer: "Could", explanation: { en: "'Could you…?' is a polite request.", pt: "'Could you…?' é um pedido educado." } },
      { id: "i14d-cp2", prompt: { en: "Choose the correct past ability sentence.", pt: "Escolha a frase de habilidade no passado correta." }, options: ["I can swim when I was five.", "I could swim when I was five.", "I could to swim when I was five."], answer: "I could swim when I was five.", explanation: { en: "'Could + base verb' for past ability, no 'to'.", pt: "'Could + verbo base' para habilidade passada, sem 'to'." } },
      { id: "i14d-cp3", prompt: { en: "Short answer: 'Could you carry it?' (no)", pt: "Resposta curta: 'Could you carry it?' (não)" }, options: ["No, I can't.", "No, I couldn't.", "No, I didn't."], answer: "No, I couldn't.", explanation: { en: "Repeat the auxiliary 'could'.", pt: "Repita o auxiliar 'could'." } },
      { id: "i14d-cp4", prompt: { en: "Make it negative: 'She could carry the box.'", pt: "Deixe negativo: 'She could carry the box.'" }, options: ["She not could carry the box.", "She couldn't carry the box.", "She didn't could carry the box."], answer: "She couldn't carry the box.", explanation: { en: "Negative: could + not = couldn't.", pt: "Negativa: could + not = couldn't." } },
      { id: "i14d-cp5", prompt: { en: "Complete: 'Could I ___ your charger?'", pt: "Complete: 'Could I ___ your charger?'" }, options: ["borrow", "borrowed", "borrows"], answer: "borrow", explanation: { en: "After 'could', use the base verb.", pt: "Depois de 'could', use o verbo base." } },
    ],
    input: {
      kind: "listening",
      title: { en: "A voicemail between neighbors", pt: "Uma mensagem de voz entre vizinhos" },
      lines: [
        { en: "Hi, Sofia. It's Alan. I hope you're settling into the new apartment well.", pt: "Oi, Sofia. Aqui é o Alan. Espero que você esteja se adaptando bem no apartamento novo." },
        { en: "Could you call me back when you have a minute? I have a small favor to ask.", pt: "Você poderia me ligar de volta quando tiver um minuto? Tenho um pequeno favor para pedir." },
        { en: "I couldn't find my keys this morning, and I think I left them at your door.", pt: "Não consegui achar minhas chaves hoje de manhã, e acho que deixei na sua porta." },
        { en: "When I was a kid, I could never keep track of anything either, so don't worry!", pt: "Quando eu era criança, eu também nunca conseguia manter controle de nada, então não se preocupe!" },
        { en: "Thanks a lot. I really appreciate it. Talk soon!", pt: "Muito obrigado. Eu realmente agradeço. Falamos em breve!" },
      ],
      questions: [
        { id: "i14d-iq1", prompt: { en: "What does Alan ask Sofia to do?", pt: "O que Alan pede que Sofia faça?" }, options: ["Move his boxes", "Call him back", "Lend him money"], answer: "Call him back", explanation: { en: "'Could you call me back?'", pt: "'Você poderia me ligar de volta?'" } },
        { id: "i14d-iq2", prompt: { en: "What couldn't Alan find?", pt: "O que Alan não conseguiu achar?" }, options: ["His keys", "His phone", "His wallet"], answer: "His keys", explanation: { en: "'I couldn't find my keys.'", pt: "'Não consegui achar minhas chaves.'" } },
        { id: "i14d-iq3", prompt: { en: "What was Alan like as a kid?", pt: "Como Alan era quando criança?" }, options: ["Very organized", "Forgetful, like Sofia", "Very tall"], answer: "Forgetful, like Sofia", explanation: { en: "'I could never keep track of anything either.'", pt: "'Eu também nunca conseguia manter controle de nada.'" } },
      ],
    },
    quickCheck: [
      { id: "i14d-qc1", prompt: { en: "What does 'favor' mean?", pt: "O que significa 'favor'?" }, options: ["A kind, helpful action", "A type of elevator", "A piece of furniture"], answer: "A kind, helpful action", explanation: { en: "A favor is something helpful you do for someone.", pt: "Um favor é algo útil que você faz por alguém." } },
      { id: "i14d-qc2", prompt: { en: "Choose the polite request.", pt: "Escolha o pedido educado." }, options: ["Help me now!", "Could you help me, please?", "You help me."], answer: "Could you help me, please?", explanation: { en: "'Could you…?' is polite.", pt: "'Could you…?' é educado." } },
      { id: "i14d-qc3", prompt: { en: "Difference between 'borrow' and 'lend'?", pt: "Diferença entre 'borrow' e 'lend'?" }, options: ["Same meaning", "Borrow = take, lend = give", "Borrow = give, lend = take"], answer: "Borrow = take, lend = give", explanation: { en: "You borrow from someone; you lend to someone.", pt: "Você pega emprestado de alguém; você empresta para alguém." } },
      { id: "i14d-qc4", prompt: { en: "'Were you tired? — No, I ___.'", pt: "'Were you tired? — No, I ___.'" }, options: ["didn't", "wasn't", "don't"], answer: "wasn't", explanation: { en: "Short answers repeat the same auxiliary.", pt: "Respostas curtas repetem o mesmo auxiliar." } },
    ],
  },
  communicate: {
    id: "INTERMEDIATE-U14-COMMUNICATE",
    review: [
      { en: "Could you help me for a minute? — polite request.", pt: "Você poderia me ajudar por um minuto? — pedido educado." },
      { en: "I could carry two boxes when I was younger. I couldn't do it alone yesterday.", pt: "Eu conseguia carregar duas caixas quando era mais jovem. Não consegui fazer sozinha ontem." },
      { en: "Did you move? — Yes, I did. Could you help? — No, I couldn't.", pt: "Você se mudou? — Sim, me mudei. Você pôde ajudar? — Não, não pude." },
      { en: "That's very kind of you. I owe you one.", pt: "Isso é muito gentil da sua parte. Estou te devendo uma." },
    ],
    activities: [
      {
        id: "i14c-a1",
        title: { en: "Ask a Favor", pt: "Peça um favor" },
        instruction: { en: "Make three polite requests with 'Could you...?' for things you need help with this week.", pt: "Faça três pedidos educados com 'Could you...?' para coisas que você precisa de ajuda essa semana." },
        phrases: [
          { en: "Could you help me carry these bags?", pt: "Você poderia me ajudar a carregar essas bolsas?" },
          { en: "Could you watch my dog on Saturday?", pt: "Você poderia cuidar do meu cachorro no sábado?" },
          { en: "Could you lend me a ladder?", pt: "Você poderia me emprestar uma escada?" },
        ],
        check: [
          { id: "i14c-a1q1", prompt: { en: "Which is the polite request?", pt: "Qual é o pedido educado?" }, options: ["Help me now.", "Could you help me?", "You must help me."], answer: "Could you help me?", explanation: { en: "'Could you…?' is polite.", pt: "'Could you…?' é educado." } },
          { id: "i14c-a1q2", prompt: { en: "Complete: 'Could you ___ me your ladder?'", pt: "Complete: 'Could you ___ me your ladder?'" }, options: ["lend", "borrow", "lending"], answer: "lend", explanation: { en: "You lend something to someone.", pt: "Você empresta algo para alguém." } },
        ],
      },
      {
        id: "i14c-a2",
        title: { en: "When I Was a Kid", pt: "Quando eu era criança" },
        instruction: { en: "Say two things you could do as a child and one thing you couldn't do.", pt: "Diga duas coisas que você conseguia fazer quando criança e uma que não conseguia." },
        phrases: [
          { en: "I could climb trees very well.", pt: "Eu conseguia subir em árvores muito bem." },
          { en: "I couldn't ride a bike until I was eight.", pt: "Eu não conseguia andar de bicicleta até os oito anos." },
          { en: "Could you swim as a child?", pt: "Você conseguia nadar quando era criança?" },
        ],
        check: [
          { id: "i14c-a2q1", prompt: { en: "Which sentence is about past ability?", pt: "Qual frase é sobre habilidade no passado?" }, options: ["I can swim now.", "I could swim as a child.", "I will swim tomorrow."], answer: "I could swim as a child.", explanation: { en: "'Could' + base verb talks about past ability.", pt: "'Could' + verbo base fala de habilidade passada." } },
          { id: "i14c-a2q2", prompt: { en: "Negative of 'I could dance.'", pt: "Negativa de 'I could dance.'" }, options: ["I couldn't dance.", "I could not danced.", "I didn't could dance."], answer: "I couldn't dance.", explanation: { en: "could + not = couldn't.", pt: "could + not = couldn't." } },
        ],
      },
      {
        id: "i14c-a3",
        title: { en: "Quick Answers", pt: "Respostas rápidas" },
        instruction: { en: "Answer five yes/no questions about your week using the correct short answers.", pt: "Responda a cinco perguntas de sim/não sobre sua semana usando respostas curtas corretas." },
        phrases: [
          { en: "Did you help a neighbor this week? — Yes, I did.", pt: "Você ajudou um vizinho essa semana? — Sim, ajudei." },
          { en: "Were you busy on Monday? — No, I wasn't.", pt: "Você estava ocupado na segunda? — Não, não estava." },
          { en: "Could you finish your work early? — No, I couldn't.", pt: "Você conseguiu terminar o trabalho cedo? — Não, não consegui." },
        ],
        check: [
          { id: "i14c-a3q1", prompt: { en: "Short answer for: 'Was the elevator working?' (no)", pt: "Resposta curta para: 'Was the elevator working?' (não)" }, options: ["No, it didn't.", "No, it wasn't.", "No, it isn't."], answer: "No, it wasn't.", explanation: { en: "Repeat 'was' in the short answer.", pt: "Repita 'was' na resposta curta." } },
          { id: "i14c-a3q2", prompt: { en: "Short answer for: 'Could they help?' (yes)", pt: "Resposta curta para: 'Could they help?' (sim)" }, options: ["Yes, they could.", "Yes, they can.", "Yes, they did."], answer: "Yes, they could.", explanation: { en: "Repeat 'could' in the short answer.", pt: "Repita 'could' na resposta curta." } },
        ],
      },
    ],
    challenge: {
      id: "i14c-cc1",
      title: { en: "Moving Day Favors", pt: "Favores no dia da mudança" },
      instruction: {
        en: "Talk out loud about moving day. Ask a neighbor for two favors politely, say one thing you could do as a child, and answer a short question about it.",
        pt: "Fale em voz alta sobre o dia da mudança. Peça dois favores educadamente a um vizinho, diga uma coisa que você conseguia fazer quando criança, e responda a uma pergunta curta sobre isso.",
      },
      phrases: [
        { en: "Could you help me carry this box, please?", pt: "Você poderia me ajudar a carregar essa caixa, por favor?" },
        { en: "Could you lend me your Wi-Fi password for today?", pt: "Você poderia me emprestar sua senha do Wi-Fi por hoje?" },
        { en: "When I was younger, I could carry heavy things easily.", pt: "Quando eu era mais jovem, eu conseguia carregar coisas pesadas facilmente." },
        { en: "Could you do it now? — Yes, I could.", pt: "Você conseguiria fazer isso agora? — Sim, conseguiria." },
      ],
      check: [
        { id: "i14c-cc1q1", prompt: { en: "Did you make at least two polite requests with 'Could you…?'", pt: "Você fez pelo menos dois pedidos educados com 'Could you…?'" }, options: ["Yes", "No", "Partially"], answer: "Yes", explanation: { en: "Self-check: Could you + base verb.", pt: "Autoavaliação: Could you + verbo base." } },
        { id: "i14c-cc1q2", prompt: { en: "Did you talk about a past ability with 'could/couldn't'?", pt: "Você falou de uma habilidade passada com 'could/couldn't'?" }, options: ["Yes", "No", "Partially"], answer: "Yes", explanation: { en: "Self-check: could + base verb for past ability.", pt: "Autoavaliação: could + verbo base para habilidade passada." } },
      ],
    },
    lessonReview: {
      summary: {
        en: "You made polite requests and talked about past ability with 'could', and reviewed short answers with different auxiliaries.",
        pt: "Você fez pedidos educados e falou sobre habilidade passada com 'could', e revisou respostas curtas com auxiliares diferentes.",
      },
      canDo: [
        { en: "I can make polite requests with 'Could you…?'.", pt: "Consigo fazer pedidos educados com 'Could you…?'." },
        { en: "I can talk about what I could or couldn't do in the past.", pt: "Consigo falar do que eu conseguia ou não conseguia fazer no passado." },
        { en: "I can give short answers with the correct auxiliary.", pt: "Consigo dar respostas curtas com o auxiliar correto." },
      ],
      next: { en: "Next unit: a quiet night — talking about when there was nothing to do.", pt: "Próxima unidade: uma noite tranquila — falar de quando não tinha nada para fazer." },
    },
  },
};

/**
 * Intermediate — Unit 15 (Nothing To Do). Conteúdo autoral Speak2Co.
 * Foco: pronomes indefinidos (anything/anybody/anywhere/nothing/nobody/nowhere)
 * com revisão de "there was/were" e "could".
 * Personagens originais: os irmãos gêmeos Vitor e Lucas, numa noite parada.
 */
export const INTERMEDIATE_U15: CourseUnit = {
  code: "INTERMEDIATE-U15",
  number: 15,
  title: "Nothing To Do — Was there anything interesting last night?",
  titlePt: "Nada para fazer — Teve alguma coisa interessante ontem à noite?",
  cefr: "B1",
  objective: {
    en: "Use indefinite pronouns (anything, anybody, anywhere, nothing, nobody, nowhere) with the past, and review 'there was/were' and 'could'.",
    pt: "Usar pronomes indefinidos (anything, anybody, anywhere, nothing, nobody, nowhere) com o passado, e revisar 'there was/were' e 'could'.",
  },
  communicationGoal: {
    en: "Describe a boring or quiet night: say there was nothing to do, nobody around, and explain what you could have done instead.",
    pt: "Descrever uma noite parada ou entediante: dizer que não tinha nada para fazer, ninguém por perto, e explicar o que você poderia ter feito.",
  },
  prerequisites: {
    en: "Intermediate unit 14: 'could' for past ability and polite requests, review of there is/are from Unit 12.",
    pt: "Unidade Intermediate 14: 'could' para habilidade passada e pedidos educados, revisão de there is/are da Unidade 12.",
  },
  newContent: {
    en: "Grammar: indefinite pronouns anything/anybody/anywhere and nothing/nobody/nowhere + review 'there was/were' | Vocabulary: boredom and free time (12 items) | Expressions: disappointment and acceptance",
    pt: "Gramática: pronomes indefinidos anything/anybody/anywhere e nothing/nobody/nowhere + revisão de 'there was/were' | Vocabulário: tédio e tempo livre (12 itens) | Expressões: decepção e aceitação",
  },
  reviewContent: {
    en: "'Could' for past ability and polite requests from Unit 14.",
    pt: "'Could' para habilidade passada e pedidos educados da Unidade 14.",
  },
  discover: {
    id: "INTERMEDIATE-U15-DISCOVER",
    warmUp: {
      prompt: {
        en: "Look at the picture. Does this street look busy or quiet? What could you do on a night like this?",
        pt: "Observe a imagem. Essa rua parece movimentada ou tranquila? O que você poderia fazer numa noite assim?",
      },
      phrases: [
        { en: "Was there anything interesting on TV last night?", pt: "Teve algo interessante na TV ontem à noite?" },
        { en: "Is there anywhere fun to go in your neighborhood at night?", pt: "Tem algum lugar divertido para ir no seu bairro à noite?" },
        { en: "What do you do when there's nothing to do?", pt: "O que você faz quando não tem nada para fazer?" },
      ],
    },
    context: {
      situation: {
        en: "Vitor and Lucas are twin brothers in a small town. It's Sunday night, and everything seems closed.",
        pt: "Vitor e Lucas são irmãos gêmeos em uma cidade pequena. É domingo à noite, e tudo parece estar fechado.",
      },
      dialogue: [
        { who: "Vitor", en: "There wasn't anything good on TV, so I called some friends.", pt: "Não teve nada bom na TV, então liguei para uns amigos." },
        { who: "Lucas", en: "And? Was there anybody free to hang out?", pt: "E aí? Teve alguém livre para sair?" },
        { who: "Vitor", en: "No, there wasn't anybody. Everyone was busy or tired.", pt: "Não, não teve ninguém. Todo mundo estava ocupado ou cansado." },
        { who: "Lucas", en: "What a waste of time! Is there anywhere open downtown?", pt: "Que perda de tempo! Tem algum lugar aberto no centro?" },
        { who: "Vitor", en: "I don't think so. There's nowhere open on Sundays here.", pt: "Acho que não. Não tem nada aberto aos domingos aqui." },
        { who: "Lucas", en: "Same here in my part of town. Could we have gone to the movies earlier?", pt: "Mesma coisa aqui na minha parte da cidade. A gente poderia ter ido ao cinema mais cedo?" },
        { who: "Vitor", en: "The theater was closed too. There was nothing to watch, nowhere to go and nobody around.", pt: "O cinema também estava fechado. Não tinha nada para assistir, lugar nenhum para ir e ninguém por perto." },
        { who: "Lucas", en: "It is what it is. Next time for sure we'll plan something better.", pt: "É assim mesmo. Da próxima vez com certeza vamos planejar algo melhor." },
      ],
    },
    vocabulary: [
      { term: "bored", pt: "entediado", ipa: "/bɔːrd/", definition: "Feeling tired because there's nothing interesting to do.", example: "I was so bored last night.", examplePt: "Fiquei tão entediado ontem à noite." },
      { term: "boring", pt: "chato, entediante", ipa: "/ˈbɔːrɪŋ/", definition: "Not interesting; making you feel bored.", example: "That was a really boring Sunday.", examplePt: "Aquele domingo foi bem chato." },
      { term: "quiet", pt: "tranquilo, silencioso", ipa: "/ˈkwaɪət/", definition: "With little or no noise or activity.", example: "The streets were very quiet at night.", examplePt: "As ruas estavam bem tranquilas à noite." },
      { term: "open", pt: "aberto", ipa: "/ˈoʊpən/", definition: "Available for people to enter or use.", example: "Is anything open downtown?", examplePt: "Tem alguma coisa aberta no centro?" },
      { term: "closed", pt: "fechado", ipa: "/kloʊzd/", definition: "Not open; not available.", example: "The theater was closed on Sunday.", examplePt: "O cinema estava fechado no domingo." },
      { term: "crowded", pt: "cheio, lotado", ipa: "/ˈkraʊdɪd/", definition: "Full of people.", example: "The mall isn't crowded on Sunday nights.", examplePt: "O shopping não fica cheio aos domingos à noite." },
      { term: "empty", pt: "vazio", ipa: "/ˈempti/", definition: "With nothing or no one inside.", example: "The street was completely empty.", examplePt: "A rua estava completamente vazia." },
      { term: "exciting", pt: "empolgante", ipa: "/ɪkˈsaɪtɪŋ/", definition: "Making you feel very interested or happy.", example: "There wasn't anything exciting to do.", examplePt: "Não tinha nada empolgante para fazer." },
      { term: "event", pt: "evento", ipa: "/ɪˈvent/", definition: "Something that happens, often planned.", example: "There wasn't any event this weekend.", examplePt: "Não teve nenhum evento este fim de semana." },
      { term: "downtown", pt: "centro (da cidade)", ipa: "/ˌdaʊnˈtaʊn/", definition: "The central area of a city or town.", example: "Nothing is open downtown on Sundays.", examplePt: "Nada está aberto no centro aos domingos." },
      { term: "canceled", pt: "cancelado", ipa: "/ˈkænsəld/", definition: "Stopped from happening.", example: "The concert was canceled at the last minute.", examplePt: "O show foi cancelado de última hora." },
      { term: "disappointed", pt: "decepcionado", ipa: "/ˌdɪsəˈpɔɪntɪd/", definition: "Feeling sad because something wasn't as good as expected.", example: "We were disappointed that nothing was open.", examplePt: "Ficamos decepcionados por nada estar aberto." },
    ],
    expressions: [
      { en: "What a waste of time!", pt: "Que perda de tempo!" },
      { en: "Same here.", pt: "Mesma coisa aqui." },
      { en: "It is what it is.", pt: "É assim mesmo." },
      { en: "Next time for sure.", pt: "Da próxima vez com certeza." },
      { en: "No such luck.", pt: "Não tive sorte dessa vez." },
      { en: "Better luck next time.", pt: "Mais sorte na próxima." },
    ],
    grammar: [
      {
        title: { en: "Indefinite pronouns: anything, anybody, anywhere", pt: "Pronomes indefinidos: anything, anybody, anywhere" },
        examples: [
          { en: "Was there anything good on TV?", pt: "Teve algo bom na TV?" },
          { en: "Is there anybody free to hang out?", pt: "Tem alguém livre para sair?" },
          { en: "Is there anywhere open downtown?", pt: "Tem algum lugar aberto no centro?" },
          { en: "I don't think there's anything to do.", pt: "Acho que não tem nada para fazer." },
        ],
        rule: {
          en: "Use any- words (anything, anybody, anywhere) in negative sentences and questions: anything = thing, anybody = person, anywhere = place. They usually don't appear in affirmative sentences.",
          pt: "Use as palavras com any- (anything, anybody, anywhere) em frases negativas e perguntas: anything = coisa, anybody = pessoa, anywhere = lugar. Elas normalmente não aparecem em frases afirmativas.",
        },
        mistakes: [
          { en: "✗ There is anything to do. → ✓ There isn't anything to do. / Is there anything to do?", pt: "✗ There is anything to do. → ✓ There isn't anything to do. / Is there anything to do?" },
        ],
      },
      {
        title: { en: "Indefinite pronouns: nothing, nobody, nowhere", pt: "Pronomes indefinidos: nothing, nobody, nowhere" },
        examples: [
          { en: "There was nothing to watch.", pt: "Não tinha nada para assistir." },
          { en: "There was nobody around.", pt: "Não tinha ninguém por perto." },
          { en: "There's nowhere open on Sundays.", pt: "Não tem nada aberto aos domingos." },
        ],
        rule: {
          en: "No- words (nothing, nobody, nowhere) already have a negative meaning, so use them with an affirmative verb — never with 'not': 'There was nothing' (not 'There wasn't nothing').",
          pt: "As palavras com no- (nothing, nobody, nowhere) já têm sentido negativo, então use com verbo afirmativo — nunca com 'not': 'There was nothing' (não 'There wasn't nothing').",
        },
        mistakes: [
          { en: "✗ There wasn't nothing to do. → ✓ There was nothing to do.", pt: "✗ There wasn't nothing to do. → ✓ There was nothing to do." },
          { en: "✗ There wasn't nobody there. → ✓ There was nobody there.", pt: "✗ There wasn't nobody there. → ✓ There was nobody there." },
        ],
      },
      {
        title: { en: "Review: there was/were + could", pt: "Revisão: there was/were + could" },
        examples: [
          { en: "There wasn't anybody free.", pt: "Não teve ninguém livre." },
          { en: "There weren't many people downtown.", pt: "Não teve muita gente no centro." },
          { en: "Could we have gone to the movies earlier?", pt: "A gente poderia ter ido ao cinema mais cedo?" },
          { en: "We couldn't find anywhere open.", pt: "Não conseguimos achar nenhum lugar aberto." },
        ],
        rule: {
          en: "'There was/were' is the past of 'there is/are'. Combine it with any-/no- words and with 'could/couldn't' to talk about a quiet night in the past.",
          pt: "'There was/were' é o passado de 'there is/are'. Combine com palavras any-/no- e com 'could/couldn't' para falar de uma noite parada no passado.",
        },
        mistakes: [
          { en: "✗ There didn't anybody there. → ✓ There wasn't anybody there.", pt: "✗ There didn't anybody there. → ✓ There wasn't anybody there." },
        ],
      },
    ],
    controlledPractice: [
      { id: "i15d-cp1", prompt: { en: "Complete: 'There was ___ to watch.' (no options)", pt: "Complete: 'There was ___ to watch.' (nenhuma opção)" }, options: ["nothing", "anything", "everything"], answer: "nothing", explanation: { en: "'Nothing' already means 'no thing', used with affirmative verb.", pt: "'Nothing' já significa 'nenhuma coisa', usado com verbo afirmativo." } },
      { id: "i15d-cp2", prompt: { en: "Complete the question: 'Is there ___ open downtown?'", pt: "Complete a pergunta: 'Is there ___ open downtown?'" }, options: ["nowhere", "anywhere", "somewhere else"], answer: "anywhere", explanation: { en: "Use 'anywhere' in questions.", pt: "Use 'anywhere' em perguntas." } },
      { id: "i15d-cp3", prompt: { en: "Choose the correct sentence.", pt: "Escolha a frase correta." }, options: ["There wasn't nobody there.", "There was nobody there.", "There isn't nobody there."], answer: "There was nobody there.", explanation: { en: "'Nobody' is already negative; don't use 'not'.", pt: "'Nobody' já é negativo; não use 'not'." } },
      { id: "i15d-cp4", prompt: { en: "Complete: 'Was there ___ free to hang out?'", pt: "Complete: 'Was there ___ free to hang out?'" }, options: ["anybody", "nobody", "somebody good"], answer: "anybody", explanation: { en: "Use 'anybody' in questions.", pt: "Use 'anybody' em perguntas." } },
      { id: "i15d-cp5", prompt: { en: "Choose the correct past of 'there is/are'.", pt: "Escolha o passado correto de 'there is/are'." }, options: ["there was/were", "there did", "there has"], answer: "there was/were", explanation: { en: "'There was/were' is the past form.", pt: "'There was/were' é a forma no passado." } },
    ],
    input: {
      kind: "reading",
      title: { en: "A blog post: The most boring Sunday ever", pt: "Um post de blog: O domingo mais chato de todos" },
      lines: [
        { en: "Last Sunday, there was absolutely nothing to do in my town.", pt: "No domingo passado, não tinha absolutamente nada para fazer na minha cidade." },
        { en: "I called my friends, but there wasn't anybody free. Everyone was busy or tired after the weekend.", pt: "Liguei para meus amigos, mas não teve ninguém livre. Todo mundo estava ocupado ou cansado depois do fim de semana." },
        { en: "I checked online for events, but there weren't any near me. Even the small park was closed.", pt: "Verifiquei online por eventos, mas não teve nenhum perto de mim. Até o parquinho estava fechado." },
        { en: "There was nowhere open, so I couldn't even buy a coffee. I was so disappointed!", pt: "Não tinha nada aberto, então nem consegui comprar um café. Fiquei tão decepcionado!" },
        { en: "In the end, I stayed home and watched an old movie. It is what it is — next time I'll plan ahead.", pt: "No final, fiquei em casa e assisti a um filme antigo. É assim mesmo — na próxima vou planejar com antecedência." },
      ],
      questions: [
        { id: "i15d-iq1", prompt: { en: "Was there anybody free to meet the writer?", pt: "Teve alguém livre para encontrar o autor?" }, options: ["Yes, many people", "No, nobody", "Only one friend"], answer: "No, nobody", explanation: { en: "'There wasn't anybody free.'", pt: "'Não teve ninguém livre.'" } },
        { id: "i15d-iq2", prompt: { en: "Why couldn't the writer buy a coffee?", pt: "Por que o autor não conseguiu comprar um café?" }, options: ["No money", "Nowhere was open", "Too crowded"], answer: "Nowhere was open", explanation: { en: "'There was nowhere open.'", pt: "'Não tinha nada aberto.'" } },
        { id: "i15d-iq3", prompt: { en: "What did the writer do in the end?", pt: "O que o autor fez no final?" }, options: ["Went to a party", "Stayed home and watched a movie", "Went to the mall"], answer: "Stayed home and watched a movie", explanation: { en: "'I stayed home and watched an old movie.'", pt: "'Fiquei em casa e assisti a um filme antigo.'" } },
      ],
    },
    quickCheck: [
      { id: "i15d-qc1", prompt: { en: "What does 'crowded' mean?", pt: "O que significa 'crowded'?" }, options: ["Full of people", "Completely empty", "Very quiet"], answer: "Full of people", explanation: { en: "Crowded means full of people.", pt: "Crowded significa cheio de gente." } },
      { id: "i15d-qc2", prompt: { en: "Choose the correct sentence.", pt: "Escolha a frase correta." }, options: ["There was nothing exciting.", "There wasn't nothing exciting.", "There isn't nothing exciting."], answer: "There was nothing exciting.", explanation: { en: "'Nothing' is used with an affirmative verb.", pt: "'Nothing' é usado com verbo afirmativo." } },
      { id: "i15d-qc3", prompt: { en: "'Is there ___ to do tonight?'", pt: "'Is there ___ to do tonight?'" }, options: ["anything", "nothing", "something great"], answer: "anything", explanation: { en: "Questions use 'anything'.", pt: "Perguntas usam 'anything'." } },
      { id: "i15d-qc4", prompt: { en: "What does 'canceled' mean?", pt: "O que significa 'canceled'?" }, options: ["Stopped from happening", "Very exciting", "Open late"], answer: "Stopped from happening", explanation: { en: "If an event is canceled, it doesn't happen.", pt: "Se um evento é cancelado, ele não acontece." } },
    ],
  },
  communicate: {
    id: "INTERMEDIATE-U15-COMMUNICATE",
    review: [
      { en: "Is there anything to do? Is there anybody around?", pt: "Tem alguma coisa para fazer? Tem alguém por perto?" },
      { en: "There was nothing to watch, nobody around and nowhere to go.", pt: "Não tinha nada para assistir, ninguém por perto e lugar nenhum para ir." },
      { en: "There wasn't anybody free. There weren't any events.", pt: "Não teve ninguém livre. Não teve nenhum evento." },
      { en: "Could we have gone earlier? It is what it is.", pt: "A gente poderia ter ido mais cedo? É assim mesmo." },
    ],
    activities: [
      {
        id: "i15c-a1",
        title: { en: "My Most Boring Day", pt: "Meu dia mais chato" },
        instruction: { en: "Describe a boring day you had, using nothing/nobody/nowhere and anything/anybody/anywhere.", pt: "Descreva um dia chato que você teve, usando nothing/nobody/nowhere e anything/anybody/anywhere." },
        phrases: [
          { en: "There was nothing to do at home.", pt: "Não tinha nada para fazer em casa." },
          { en: "I called my friends, but there wasn't anybody free.", pt: "Liguei para meus amigos, mas não teve ninguém livre." },
          { en: "There was nowhere to go on a Sunday.", pt: "Não tinha lugar nenhum para ir num domingo." },
        ],
        check: [
          { id: "i15c-a1q1", prompt: { en: "Choose the correct sentence.", pt: "Escolha a frase correta." }, options: ["There was nobody there.", "There wasn't nobody there.", "There isn't nobody there."], answer: "There was nobody there.", explanation: { en: "Use 'nobody' with an affirmative verb.", pt: "Use 'nobody' com verbo afirmativo." } },
          { id: "i15c-a1q2", prompt: { en: "Complete: 'I didn't have ___ to do.'", pt: "Complete: 'I didn't have ___ to do.'" }, options: ["anything", "nothing", "everything"], answer: "anything", explanation: { en: "Use 'anything' with a negative verb.", pt: "Use 'anything' com verbo negativo." } },
        ],
      },
      {
        id: "i15c-a2",
        title: { en: "Weekend Check", pt: "Conferência de fim de semana" },
        instruction: { en: "Ask a friend three questions with 'is there anything/anybody/anywhere...?' about their weekend.", pt: "Faça a um amigo três perguntas com 'is there anything/anybody/anywhere...?' sobre o fim de semana dele." },
        phrases: [
          { en: "Was there anything fun to do this weekend?", pt: "Teve algo divertido para fazer nesse fim de semana?" },
          { en: "Was there anybody with you?", pt: "Teve alguém com você?" },
          { en: "Was there anywhere new to visit?", pt: "Teve algum lugar novo para visitar?" },
        ],
        check: [
          { id: "i15c-a2q1", prompt: { en: "Choose the correct question.", pt: "Escolha a pergunta correta." }, options: ["Was there anywhere open?", "Was there nowhere open?", "Was there somewhere open, no?"], answer: "Was there anywhere open?", explanation: { en: "Use 'anywhere' in questions.", pt: "Use 'anywhere' em perguntas." } },
          { id: "i15c-a2q2", prompt: { en: "Answer: 'No, there wasn't ___.'", pt: "Responda: 'No, there wasn't ___.'" }, options: ["anybody", "nobody", "somebody"], answer: "anybody", explanation: { en: "Negative answers use 'anybody'.", pt: "Respostas negativas usam 'anybody'." } },
        ],
      },
      {
        id: "i15c-a3",
        title: { en: "Plan B", pt: "Plano B" },
        instruction: { en: "Say what you could have done differently on a boring night, using 'could'.", pt: "Diga o que você poderia ter feito diferente numa noite chata, usando 'could'." },
        phrases: [
          { en: "We could have gone to the movies earlier.", pt: "A gente poderia ter ido ao cinema mais cedo." },
          { en: "I could have called a different friend.", pt: "Eu poderia ter ligado para um amigo diferente." },
          { en: "Next time for sure we'll plan something better.", pt: "Da próxima vez com certeza vamos planejar algo melhor." },
        ],
        check: [
          { id: "i15c-a3q1", prompt: { en: "Which expression shows acceptance?", pt: "Qual expressão mostra aceitação?" }, options: ["It is what it is.", "What a waste of time!", "No such luck."], answer: "It is what it is.", explanation: { en: "This phrase means accepting a situation.", pt: "Essa frase significa aceitar uma situação." } },
          { id: "i15c-a3q2", prompt: { en: "Complete: 'Better luck ___ time.'", pt: "Complete: 'Better luck ___ time.'" }, options: ["next", "last", "another"], answer: "next", explanation: { en: "Fixed expression: 'better luck next time'.", pt: "Expressão fixa: 'better luck next time'." } },
        ],
      },
    ],
    challenge: {
      id: "i15c-cc1",
      title: { en: "A Quiet Weekend", pt: "Um fim de semana tranquilo" },
      instruction: {
        en: "Talk out loud about a quiet or boring weekend. Use anything/anybody/anywhere, nothing/nobody/nowhere, and 'could' at least once.",
        pt: "Fale em voz alta sobre um fim de semana tranquilo ou chato. Use anything/anybody/anywhere, nothing/nobody/nowhere, e 'could' pelo menos uma vez.",
      },
      phrases: [
        { en: "There wasn't anything interesting to do this weekend.", pt: "Não teve nada interessante para fazer nesse fim de semana." },
        { en: "There was nobody around, so I stayed home.", pt: "Não tinha ninguém por perto, então fiquei em casa." },
        { en: "We could have gone somewhere else, but everything was closed.", pt: "A gente poderia ter ido para outro lugar, mas tudo estava fechado." },
        { en: "It is what it is. Better luck next time.", pt: "É assim mesmo. Mais sorte na próxima." },
      ],
      check: [
        { id: "i15c-cc1q1", prompt: { en: "Did you use both any- and no- words correctly?", pt: "Você usou palavras com any- e no- corretamente?" }, options: ["Yes", "No", "Partially"], answer: "Yes", explanation: { en: "Self-check: any- in negatives/questions, no- in affirmatives.", pt: "Autoavaliação: any- em negativas/perguntas, no- em afirmativas." } },
        { id: "i15c-cc1q2", prompt: { en: "Did you use 'could' to talk about an alternative?", pt: "Você usou 'could' para falar de uma alternativa?" }, options: ["Yes", "No", "Partially"], answer: "Yes", explanation: { en: "Self-check: 'We could have gone...'.", pt: "Autoavaliação: 'We could have gone...'." } },
      ],
    },
    lessonReview: {
      summary: {
        en: "You described a quiet or boring night using anything/anybody/anywhere and nothing/nobody/nowhere, and reviewed 'there was/were' and 'could'.",
        pt: "Você descreveu uma noite tranquila ou chata usando anything/anybody/anywhere e nothing/nobody/nowhere, e revisou 'there was/were' e 'could'.",
      },
      canDo: [
        { en: "I can ask if there was anything/anybody/anywhere.", pt: "Consigo perguntar se tinha alguma coisa/alguém/algum lugar." },
        { en: "I can say there was nothing/nobody/nowhere.", pt: "Consigo dizer que não tinha nada/ninguém/lugar nenhum." },
        { en: "I can talk about what I could have done differently.", pt: "Consigo falar sobre o que eu poderia ter feito diferente." },
      ],
      next: { en: "Next unit: advice at work — what should you do about it?", pt: "Próxima unidade: conselhos no trabalho — o que você deveria fazer sobre isso?" },
    },
  },
};

/**
 * Intermediate — Unit 16 (You Should Try This). Conteúdo autoral Speak2Co.
 * Foco: "should/shouldn't" para conselhos, com vocabulário de trabalho e
 * revisão de "could" para pedidos educados.
 * Personagens originais: Renata (gerente) e Igor (novo funcionário).
 */
export const INTERMEDIATE_U16: CourseUnit = {
  code: "INTERMEDIATE-U16",
  number: 16,
  title: "You Should Try This — What should I do at work?",
  titlePt: "Você deveria tentar isso — O que eu deveria fazer no trabalho?",
  cefr: "B1",
  objective: {
    en: "Give and ask for advice using 'should/shouldn't', and use common workplace vocabulary in context.",
    pt: "Dar e pedir conselhos usando 'should/shouldn't', e usar vocabulário comum do trabalho em contexto.",
  },
  communicationGoal: {
    en: "Handle a first week at a new job: ask for advice, receive feedback politely, and make polite requests when needed.",
    pt: "Lidar com a primeira semana em um emprego novo: pedir conselhos, receber feedback educadamente, e fazer pedidos educados quando necessário.",
  },
  prerequisites: {
    en: "Intermediate unit 15: indefinite pronouns and review of 'could' for past ability and polite requests.",
    pt: "Unidade Intermediate 15: pronomes indefinidos e revisão de 'could' para habilidade passada e pedidos educados.",
  },
  newContent: {
    en: "Grammar: 'should/shouldn't' for advice (affirmative, negative, questions) | Vocabulary: office and work situations (12 items) | Expressions: giving feedback",
    pt: "Gramática: 'should/shouldn't' para conselhos (afirmativa, negativa, perguntas) | Vocabulário: escritório e situações de trabalho (12 itens) | Expressões: dar feedback",
  },
  reviewContent: {
    en: "'Could' for polite requests from Unit 14.",
    pt: "'Could' para pedidos educados da Unidade 14.",
  },
  discover: {
    id: "INTERMEDIATE-U16-DISCOVER",
    warmUp: {
      prompt: {
        en: "Look at the picture. What advice would you give to someone starting a new job?",
        pt: "Observe a imagem. Que conselho você daria a alguém começando um emprego novo?",
      },
      phrases: [
        { en: "What should a new employee do on the first day?", pt: "O que um novo funcionário deveria fazer no primeiro dia?" },
        { en: "Should you ask a lot of questions when you start a job?", pt: "Você deveria fazer muitas perguntas quando começa um trabalho?" },
        { en: "What shouldn't you do at work?", pt: "O que você não deveria fazer no trabalho?" },
      ],
    },
    context: {
      situation: {
        en: "It's Igor's first week at a new company. His manager, Renata, is giving him some advice about how things work in the office.",
        pt: "É a primeira semana do Igor em uma empresa nova. Sua gerente, Renata, está dando conselhos sobre como as coisas funcionam no escritório.",
      },
      dialogue: [
        { who: "Renata", en: "Welcome, Igor! First of all, you should always send your report before the deadline.", pt: "Bem-vindo, Igor! Antes de tudo, você sempre deveria mandar seu relatório antes do prazo." },
        { who: "Igor", en: "Got it. Should I send it to you or to the whole team?", pt: "Entendi. Eu deveria mandar para você ou para toda a equipe?" },
        { who: "Renata", en: "Just to me for now. Also, you shouldn't work overtime every day. It isn't healthy.", pt: "Só para mim por enquanto. Além disso, você não deveria fazer hora extra todo dia. Não é saudável." },
        { who: "Igor", en: "That's good advice. What should I do if I make a mistake?", pt: "É um bom conselho. O que eu deveria fazer se eu cometer um erro?" },
        { who: "Renata", en: "You should tell me right away and apologize. Everyone here understands mistakes happen.", pt: "Você deveria me contar na hora e pedir desculpas. Todo mundo aqui entende que erros acontecem." },
        { who: "Igor", en: "Could you also show me where the report templates are?", pt: "Você poderia também me mostrar onde estão os modelos de relatório?" },
        { who: "Renata", en: "Sure. And one more tip: you should be punctual, but you shouldn't worry if you're a few minutes late once in a while.", pt: "Claro. E mais uma dica: você deveria ser pontual, mas não deveria se preocupar se se atrasar alguns minutos vez ou outra." },
        { who: "Igor", en: "Sounds like a plan. Thanks for the advice, Renata!", pt: "Parece um bom plano. Obrigado pelo conselho, Renata!" },
      ],
    },
    vocabulary: [
      { term: "résumé", pt: "currículo", ipa: "/ˈrezəmeɪ/", definition: "A document that describes your education and work experience.", example: "You should update your résumé every year.", examplePt: "Você deveria atualizar seu currículo todo ano." },
      { term: "deadline", pt: "prazo", ipa: "/ˈdedlaɪn/", definition: "The time by which something must be finished.", example: "You should send your report before the deadline.", examplePt: "Você deveria mandar seu relatório antes do prazo." },
      { term: "promote", pt: "promover", ipa: "/prəˈmoʊt/", definition: "To give someone a higher position at work.", example: "They should promote her; she works so hard.", examplePt: "Eles deveriam promovê-la; ela trabalha muito." },
      { term: "overtime", pt: "hora extra", ipa: "/ˈoʊvərtaɪm/", definition: "Extra time worked after normal hours.", example: "You shouldn't work overtime every day.", examplePt: "Você não deveria fazer hora extra todo dia." },
      { term: "report", pt: "relatório", ipa: "/rɪˈpɔːrt/", definition: "A written document with information about something.", example: "Should I send the report by email?", examplePt: "Eu deveria mandar o relatório por email?" },
      { term: "colleague", pt: "colega de trabalho", ipa: "/ˈkɑːliːɡ/", definition: "A person you work with.", example: "You should ask a colleague for help.", examplePt: "Você deveria pedir ajuda a um colega." },
      { term: "mistake", pt: "erro", ipa: "/mɪˈsteɪk/", definition: "Something done wrong.", example: "You should tell me if you make a mistake.", examplePt: "Você deveria me contar se cometer um erro." },
      { term: "apologize", pt: "pedir desculpas", ipa: "/əˈpɑːlədʒaɪz/", definition: "To say sorry for something.", example: "You should apologize and move on.", examplePt: "Você deveria pedir desculpas e seguir em frente." },
      { term: "punctual", pt: "pontual", ipa: "/ˈpʌŋktʃuəl/", definition: "Arriving or doing things at the right time.", example: "You should be punctual for meetings.", examplePt: "Você deveria ser pontual para as reuniões." },
      { term: "organized", pt: "organizado", ipa: "/ˈɔːrɡənaɪzd/", definition: "Arranged in an orderly, planned way.", example: "You should keep your files organized.", examplePt: "Você deveria manter seus arquivos organizados." },
      { term: "decision", pt: "decisão", ipa: "/dɪˈsɪʒn/", definition: "A choice made after thinking about it.", example: "What decision should we make?", examplePt: "Que decisão nós deveríamos tomar?" },
      { term: "advice", pt: "conselho", ipa: "/ədˈvaɪs/", definition: "An opinion about what someone should do.", example: "Thanks for the advice!", examplePt: "Obrigado pelo conselho!" },
    ],
    expressions: [
      { en: "Got it.", pt: "Entendi." },
      { en: "That's good advice.", pt: "É um bom conselho." },
      { en: "Sounds like a plan.", pt: "Parece um bom plano." },
      { en: "Good point.", pt: "Bom ponto." },
      { en: "Let's see.", pt: "Vamos ver." },
      { en: "No worries.", pt: "Sem preocupação." },
    ],
    grammar: [
      {
        title: { en: "Should / shouldn't — giving advice", pt: "Should / shouldn't — dando conselhos" },
        examples: [
          { en: "You should always send your report before the deadline.", pt: "Você sempre deveria mandar seu relatório antes do prazo." },
          { en: "You shouldn't work overtime every day.", pt: "Você não deveria fazer hora extra todo dia." },
          { en: "She should be more organized.", pt: "Ela deveria ser mais organizada." },
          { en: "They shouldn't make that decision alone.", pt: "Eles não deveriam tomar essa decisão sozinhos." },
        ],
        rule: {
          en: "Use 'should/shouldn't + base verb' to give advice or say what is a good or bad idea. It doesn't change for different subjects: I/you/he/she/we/they should…",
          pt: "Use 'should/shouldn't + verbo base' para dar conselhos ou dizer o que é uma boa ou má ideia. Não muda de acordo com o sujeito: I/you/he/she/we/they should…",
        },
        mistakes: [
          { en: "✗ You should to apologize. → ✓ You should apologize. (no 'to')", pt: "✗ You should to apologize. → ✓ You should apologize. (sem 'to')" },
          { en: "✗ She shoulds be punctual. → ✓ She should be punctual.", pt: "✗ She shoulds be punctual. → ✓ She should be punctual." },
        ],
      },
      {
        title: { en: "Should — questions for advice", pt: "Should — perguntas para pedir conselho" },
        examples: [
          { en: "Should I send it to you or to the team?", pt: "Eu deveria mandar para você ou para a equipe?" },
          { en: "What should I do if I make a mistake?", pt: "O que eu deveria fazer se eu cometer um erro?" },
          { en: "Shouldn't we ask a colleague for help?", pt: "Não deveríamos pedir ajuda a um colega?" },
          { en: "What time should we arrive tomorrow?", pt: "A que horas nós deveríamos chegar amanhã?" },
        ],
        rule: {
          en: "Invert 'should' and the subject to ask for advice: Should + subject + base verb…? Use question words (What, When, Where) before 'should' for more specific advice.",
          pt: "Inverta 'should' e o sujeito para pedir conselho: Should + sujeito + verbo base…? Use palavras interrogativas (What, When, Where) antes de 'should' para conselhos mais específicos.",
        },
        mistakes: [
          { en: "✗ I should do what? → ✓ What should I do?", pt: "✗ I should do what? → ✓ What should I do?" },
        ],
      },
      {
        title: { en: "Review: could for polite requests at work", pt: "Revisão: could para pedidos educados no trabalho" },
        examples: [
          { en: "Could you show me where the templates are?", pt: "Você poderia me mostrar onde estão os modelos?" },
          { en: "Could I ask you a question about the report?", pt: "Eu poderia te fazer uma pergunta sobre o relatório?" },
        ],
        rule: {
          en: "Keep using 'Could you/I…?' for polite requests in professional situations, together with 'should' for advice.",
          pt: "Continue usando 'Could you/I…?' para pedidos educados em situações profissionais, junto com 'should' para conselhos.",
        },
        mistakes: [
          { en: "✗ Could you to help me? → ✓ Could you help me?", pt: "✗ Could you to help me? → ✓ Could you help me?" },
        ],
      },
    ],
    controlledPractice: [
      { id: "i16d-cp1", prompt: { en: "Complete: 'You ___ apologize for that.'", pt: "Complete: 'You ___ apologize for that.'" }, options: ["should", "should to", "shoulds"], answer: "should", explanation: { en: "'Should' doesn't change and has no 'to'.", pt: "'Should' não muda e não tem 'to'." } },
      { id: "i16d-cp2", prompt: { en: "Choose the correct advice question.", pt: "Escolha a pergunta de conselho correta." }, options: ["What I should do?", "What should I do?", "Should what I do?"], answer: "What should I do?", explanation: { en: "Question word + should + subject + verb.", pt: "Palavra interrogativa + should + sujeito + verbo." } },
      { id: "i16d-cp3", prompt: { en: "Make it negative: 'You should work overtime every day.'", pt: "Deixe negativo: 'You should work overtime every day.'" }, options: ["You shouldn't work overtime every day.", "You don't should work overtime every day.", "You not should work overtime every day."], answer: "You shouldn't work overtime every day.", explanation: { en: "Negative: should + not = shouldn't.", pt: "Negativa: should + not = shouldn't." } },
      { id: "i16d-cp4", prompt: { en: "Complete: '___ you show me the templates?' (polite request)", pt: "Complete: '___ you show me the templates?' (pedido educado)" }, options: ["Should", "Could", "Do"], answer: "Could", explanation: { en: "'Could you…?' is a polite request, not advice.", pt: "'Could you…?' é um pedido educado, não conselho." } },
      { id: "i16d-cp5", prompt: { en: "Choose the correct sentence about advice.", pt: "Escolha a frase correta sobre conselho." }, options: ["He should to be punctual.", "He should be punctual.", "He shoulds be punctual."], answer: "He should be punctual.", explanation: { en: "'Should' + base verb, no 'to', no -s.", pt: "'Should' + verbo base, sem 'to', sem -s." } },
    ],
    input: {
      kind: "listening",
      title: { en: "Advice for new employees (HR podcast)", pt: "Conselhos para novos funcionários (podcast de RH)" },
      lines: [
        { en: "Starting a new job can be stressful, so here are five tips for your first month.", pt: "Começar um emprego novo pode ser estressante, então aqui vão cinco dicas para o seu primeiro mês." },
        { en: "First, you should ask questions. Nobody expects you to know everything on day one.", pt: "Primeiro, você deveria fazer perguntas. Ninguém espera que você saiba tudo no primeiro dia." },
        { en: "Second, you shouldn't be afraid to make mistakes, but you should always tell your manager.", pt: "Segundo, você não deveria ter medo de cometer erros, mas sempre deveria contar ao seu gerente." },
        { en: "Third, you should be organized and keep your reports ready before the deadline.", pt: "Terceiro, você deveria ser organizado e manter seus relatórios prontos antes do prazo." },
        { en: "Finally, you shouldn't work overtime every single day. A healthy balance helps you improve.", pt: "Por fim, você não deveria fazer hora extra todo santo dia. Um equilíbrio saudável ajuda você a melhorar." },
      ],
      questions: [
        { id: "i16d-iq1", prompt: { en: "What should new employees do?", pt: "O que os novos funcionários deveriam fazer?" }, options: ["Stay silent", "Ask questions", "Work overtime"], answer: "Ask questions", explanation: { en: "'You should ask questions.'", pt: "'Você deveria fazer perguntas.'" } },
        { id: "i16d-iq2", prompt: { en: "What should you do if you make a mistake?", pt: "O que você deveria fazer se cometer um erro?" }, options: ["Hide it", "Tell your manager", "Quit the job"], answer: "Tell your manager", explanation: { en: "'You should always tell your manager.'", pt: "'Você sempre deveria contar ao seu gerente.'" } },
        { id: "i16d-iq3", prompt: { en: "What shouldn't you do every single day?", pt: "O que você não deveria fazer todo santo dia?" }, options: ["Ask questions", "Work overtime", "Be organized"], answer: "Work overtime", explanation: { en: "'You shouldn't work overtime every single day.'", pt: "'Você não deveria fazer hora extra todo santo dia.'" } },
      ],
    },
    quickCheck: [
      { id: "i16d-qc1", prompt: { en: "What does 'deadline' mean?", pt: "O que significa 'deadline'?" }, options: ["The time to finish something", "A type of report", "A work colleague"], answer: "The time to finish something", explanation: { en: "A deadline is the time limit to finish a task.", pt: "Deadline é o prazo limite para terminar uma tarefa." } },
      { id: "i16d-qc2", prompt: { en: "Choose the correct advice sentence.", pt: "Escolha a frase de conselho correta." }, options: ["You should apologize.", "You should to apologize.", "You shoulds apologize."], answer: "You should apologize.", explanation: { en: "Should + base verb, no 'to'.", pt: "Should + verbo base, sem 'to'." } },
      { id: "i16d-qc3", prompt: { en: "What does 'punctual' mean?", pt: "O que significa 'punctual'?" }, options: ["Arriving on time", "Very organized", "Making mistakes"], answer: "Arriving on time", explanation: { en: "Punctual means on time.", pt: "Punctual significa pontual, na hora certa." } },
      { id: "i16d-qc4", prompt: { en: "'___ I send it by email or in person?'", pt: "'___ I send it by email or in person?'" }, options: ["Should", "Am", "Could to"], answer: "Should", explanation: { en: "Use 'Should I…?' to ask for advice.", pt: "Use 'Should I…?' para pedir conselho." } },
    ],
  },
  communicate: {
    id: "INTERMEDIATE-U16-COMMUNICATE",
    review: [
      { en: "You should always send your report before the deadline.", pt: "Você sempre deveria mandar seu relatório antes do prazo." },
      { en: "You shouldn't work overtime every day.", pt: "Você não deveria fazer hora extra todo dia." },
      { en: "What should I do if I make a mistake?", pt: "O que eu deveria fazer se eu cometer um erro?" },
      { en: "Could you show me where the templates are?", pt: "Você poderia me mostrar onde estão os modelos?" },
    ],
    activities: [
      {
        id: "i16c-a1",
        title: { en: "Give Advice", pt: "Dê um conselho" },
        instruction: { en: "Give advice to a new employee using 'should' and 'shouldn't' — two dos and one don't.", pt: "Dê conselhos a um novo funcionário usando 'should' e 'shouldn't' — dois 'faça' e um 'não faça'." },
        phrases: [
          { en: "You should introduce yourself to your colleagues.", pt: "Você deveria se apresentar aos seus colegas." },
          { en: "You should ask questions when you're not sure.", pt: "Você deveria fazer perguntas quando não tiver certeza." },
          { en: "You shouldn't be afraid to make mistakes.", pt: "Você não deveria ter medo de cometer erros." },
        ],
        check: [
          { id: "i16c-a1q1", prompt: { en: "Which sentence gives advice?", pt: "Qual frase dá um conselho?" }, options: ["You should ask questions.", "You are asking questions.", "You asked questions."], answer: "You should ask questions.", explanation: { en: "'Should' gives advice.", pt: "'Should' dá conselhos." } },
          { id: "i16c-a1q2", prompt: { en: "Negative of 'He should apologize.'", pt: "Negativa de 'He should apologize.'" }, options: ["He shouldn't apologize.", "He should not to apologize.", "He doesn't should apologize."], answer: "He shouldn't apologize.", explanation: { en: "should + not = shouldn't.", pt: "should + not = shouldn't." } },
        ],
      },
      {
        id: "i16c-a2",
        title: { en: "Ask for Advice", pt: "Peça um conselho" },
        instruction: { en: "Ask three 'Should I…?' questions about a real problem at work or school.", pt: "Faça três perguntas 'Should I…?' sobre um problema real no trabalho ou na escola." },
        phrases: [
          { en: "Should I talk to my manager about this?", pt: "Eu deveria falar com meu gerente sobre isso?" },
          { en: "Should I finish the report today or tomorrow?", pt: "Eu deveria terminar o relatório hoje ou amanhã?" },
          { en: "What should I say in the meeting?", pt: "O que eu deveria dizer na reunião?" },
        ],
        check: [
          { id: "i16c-a2q1", prompt: { en: "Choose the correct question.", pt: "Escolha a pergunta correta." }, options: ["Should I talk to her?", "I should talk to her?", "Should talk I to her?"], answer: "Should I talk to her?", explanation: { en: "Invert should and the subject.", pt: "Inverta should e o sujeito." } },
          { id: "i16c-a2q2", prompt: { en: "Complete: 'What ___ we do next?'", pt: "Complete: 'What ___ we do next?'" }, options: ["should", "shoulds", "do should"], answer: "should", explanation: { en: "Question word + should + subject.", pt: "Palavra interrogativa + should + sujeito." } },
        ],
      },
      {
        id: "i16c-a3",
        title: { en: "Polite Requests at Work", pt: "Pedidos educados no trabalho" },
        instruction: { en: "Make two polite requests to a colleague using 'Could you...?' about a work task.", pt: "Faça dois pedidos educados a um colega usando 'Could you...?' sobre uma tarefa do trabalho." },
        phrases: [
          { en: "Could you send me the report by Friday?", pt: "Você poderia me mandar o relatório até sexta?" },
          { en: "Could you check my email before the meeting?", pt: "Você poderia conferir meu email antes da reunião?" },
        ],
        check: [
          { id: "i16c-a3q1", prompt: { en: "Which sentence is a polite request, not advice?", pt: "Qual frase é um pedido educado, não um conselho?" }, options: ["Could you send me the file?", "You should send me the file.", "You send me the file."], answer: "Could you send me the file?", explanation: { en: "'Could you…?' is a request, 'should' is advice.", pt: "'Could you…?' é um pedido, 'should' é conselho." } },
          { id: "i16c-a3q2", prompt: { en: "Complete: 'Could you ___ the templates?'", pt: "Complete: 'Could you ___ the templates?'" }, options: ["show me", "showing me", "shows me"], answer: "show me", explanation: { en: "After 'could', use the base verb.", pt: "Depois de 'could', use o verbo base." } },
        ],
      },
    ],
    challenge: {
      id: "i16c-cc1",
      title: { en: "New Job, New Advice", pt: "Emprego novo, conselho novo" },
      instruction: {
        en: "Talk out loud as a manager giving advice to a new employee. Use 'should/shouldn't' twice, ask one 'Should I...?' question and make one polite request with 'Could you...?'.",
        pt: "Fale em voz alta como uma gerente dando conselhos a um novo funcionário. Use 'should/shouldn't' duas vezes, faça uma pergunta 'Should I...?' e um pedido educado com 'Could you...?'.",
      },
      phrases: [
        { en: "You should always be on time for meetings.", pt: "Você sempre deveria ser pontual nas reuniões." },
        { en: "You shouldn't be afraid to ask for help.", pt: "Você não deveria ter medo de pedir ajuda." },
        { en: "Should I introduce you to the rest of the team?", pt: "Eu deveria te apresentar ao resto da equipe?" },
        { en: "Could you finish this small task by tomorrow?", pt: "Você poderia terminar essa tarefinha até amanhã?" },
      ],
      check: [
        { id: "i16c-cc1q1", prompt: { en: "Did you use 'should/shouldn't' to give advice?", pt: "Você usou 'should/shouldn't' para dar conselhos?" }, options: ["Yes", "No", "Partially"], answer: "Yes", explanation: { en: "Self-check: should/shouldn't + base verb.", pt: "Autoavaliação: should/shouldn't + verbo base." } },
        { id: "i16c-cc1q2", prompt: { en: "Did you make a polite request with 'Could you...?'", pt: "Você fez um pedido educado com 'Could you...?'" }, options: ["Yes", "No", "Partially"], answer: "Yes", explanation: { en: "Self-check: Could you + base verb.", pt: "Autoavaliação: Could you + verbo base." } },
      ],
    },
    lessonReview: {
      summary: {
        en: "You gave and asked for advice with 'should/shouldn't', used office vocabulary, and reviewed polite requests with 'could'.",
        pt: "Você deu e pediu conselhos com 'should/shouldn't', usou vocabulário de escritório, e revisou pedidos educados com 'could'.",
      },
      canDo: [
        { en: "I can give advice with 'should' and 'shouldn't'.", pt: "Consigo dar conselhos com 'should' e 'shouldn't'." },
        { en: "I can ask for advice with 'Should I…?'.", pt: "Consigo pedir conselhos com 'Should I…?'." },
        { en: "I can make polite requests at work with 'Could you…?'.", pt: "Consigo fazer pedidos educados no trabalho com 'Could you…?'." },
      ],
      next: { en: "Next unit: new grammar challenges ahead — keep practicing every day!", pt: "Próxima unidade: novos desafios gramaticais pela frente — continue praticando todo dia!" },
    },
  },
};
