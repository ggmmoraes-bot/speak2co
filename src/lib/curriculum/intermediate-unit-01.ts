import type { CourseUnit } from "./types";

/**
 * Intermediate — Unit 1 (Plans and Forecasts). Conteúdo autoral Speak2Co.
 * Foco: futuro com "going to" (planos e previsões), clima, e revisão do
 * passado simples com do/did, pay/paid, put/put.
 * Personagens originais: Marina, Theo e Rafa, amigos que dividem apartamento.
 */
export const INTERMEDIATE_U01: CourseUnit = {
  code: "INTERMEDIATE-U01",
  number: 1,
  title: "Plans and Forecasts — What are you going to do?",
  titlePt: "Planos e Previsões — O que você vai fazer?",
  cefr: "B1",
  objective: {
    en: "Talk about future plans and predictions with 'going to', describe the weather, and review what you did, paid for and put somewhere.",
    pt: "Falar de planos e previsões com 'going to', descrever o tempo e revisar o que você fez, pagou e colocou em algum lugar.",
  },
  communicationGoal: {
    en: "Plan a weekend with friends: say what you are going to do, react to the forecast and report what is already done.",
    pt: "Planejar um fim de semana com amigos: dizer o que vai fazer, reagir à previsão do tempo e contar o que já está feito.",
  },
  prerequisites: {
    en: "Beginner course: present simple, present continuous and regular/irregular simple past.",
    pt: "Curso Beginner: presente simples, presente contínuo e passado simples regular/irregular.",
  },
  newContent: {
    en: "Grammar: 'be going to' for plans and predictions (affirmative, negative, questions) + 'How's the weather?' | Vocabulary: weather and everyday items (12 items) | Expressions: planning and reacting",
    pt: "Gramática: 'be going to' para planos e previsões (afirmativa, negativa, perguntas) + 'How's the weather?' | Vocabulário: clima e itens do dia a dia (12 itens) | Expressões: planejar e reagir",
  },
  reviewContent: {
    en: "Simple past of do (did), pay (paid) and put (put) in affirmative, negative and questions.",
    pt: "Passado simples de do (did), pay (paid) e put (put) na afirmativa, negativa e perguntas.",
  },
  discover: {
    id: "INTERMEDIATE-U01-DISCOVER",
    warmUp: {
      prompt: {
        en: "Look at the picture. What are these friends going to do? How is the weather outside?",
        pt: "Observe a imagem. O que esses amigos vão fazer? Como está o tempo lá fora?",
      },
      phrases: [
        { en: "What are you going to do this weekend?", pt: "O que você vai fazer neste fim de semana?" },
        { en: "How's the weather in your city today?", pt: "Como está o tempo na sua cidade hoje?" },
        { en: "Do you check the forecast before you make plans?", pt: "Você confere a previsão antes de fazer planos?" },
      ],
    },
    context: {
      situation: {
        en: "It's Thursday night. Marina, Theo and Rafa share an apartment. They are planning a weekend trip to the mountains, but the forecast is changing.",
        pt: "É quinta à noite. Marina, Theo e Rafa dividem um apartamento. Eles estão planejando uma viagem de fim de semana para a serra, mas a previsão está mudando.",
      },
      dialogue: [
        { who: "Marina", en: "So, are we going to leave early on Saturday?", pt: "Então, nós vamos sair cedo no sábado?" },
        { who: "Theo", en: "That's the plan. I already paid for the cabin this afternoon.", pt: "Esse é o plano. Eu já paguei o chalé hoje à tarde." },
        { who: "Rafa", en: "Great! But wait… the app says it's going to rain on Saturday morning.", pt: "Ótimo! Mas espera… o aplicativo diz que vai chover no sábado de manhã." },
        { who: "Marina", en: "Rain? And what about Sunday? Is it going to be sunny?", pt: "Chuva? E o domingo? Vai fazer sol?" },
        { who: "Rafa", en: "Cloudy in the morning, sunny in the afternoon. And foggy at night, of course.", pt: "Nublado de manhã, ensolarado à tarde. E com neblina à noite, claro." },
        { who: "Theo", en: "No problem. We're going to leave after lunch, then. Did you put the raincoats in the car?", pt: "Sem problema. Vamos sair depois do almoço, então. Você colocou as capas de chuva no carro?" },
        { who: "Marina", en: "I didn't put them in the car yet. They're on the floor by the door. I'm so forgetful!", pt: "Ainda não coloquei no carro. Estão no chão, perto da porta. Sou tão esquecida!" },
        { who: "Rafa", en: "Don't worry. I'm going to do it right now. Finally, a weekend off!", pt: "Não se preocupe. Vou fazer isso agora mesmo. Finalmente, um fim de semana de folga!" },
      ],
    },
    vocabulary: [
      { term: "weather", pt: "tempo (clima)", ipa: "/ˈweðər/", definition: "The conditions in the air: sun, rain, wind, temperature.", example: "The weather is perfect for a walk today.", examplePt: "O tempo está perfeito para uma caminhada hoje." },
      { term: "forecast", pt: "previsão do tempo", ipa: "/ˈfɔːrkæst/", definition: "A statement about what the weather is going to be like.", example: "The forecast says it's going to be cold tomorrow.", examplePt: "A previsão diz que vai fazer frio amanhã." },
      { term: "rain", pt: "chuva; chover", ipa: "/reɪn/", definition: "Water that falls from the clouds.", example: "Take an umbrella. It's going to rain.", examplePt: "Leve um guarda-chuva. Vai chover." },
      { term: "snow", pt: "neve; nevar", ipa: "/snoʊ/", definition: "Soft white ice that falls from the sky when it's very cold.", example: "It never snows in my city.", examplePt: "Nunca neva na minha cidade." },
      { term: "fog", pt: "neblina", ipa: "/fɑːɡ/", definition: "A thick cloud near the ground that makes it hard to see.", example: "Drive slowly. There's a lot of fog on the road.", examplePt: "Dirija devagar. Tem muita neblina na estrada." },
      { term: "cloud", pt: "nuvem", ipa: "/klaʊd/", definition: "A white or gray mass in the sky.", example: "There isn't a single cloud in the sky.", examplePt: "Não há uma única nuvem no céu." },
      { term: "sun", pt: "sol", ipa: "/sʌn/", definition: "The star that gives us light and heat during the day.", example: "The sun is going to come out in the afternoon.", examplePt: "O sol vai aparecer à tarde." },
      { term: "cabin", pt: "chalé, cabana", ipa: "/ˈkæbɪn/", definition: "A small wooden house, often in the mountains or woods.", example: "We rented a cabin for two nights.", examplePt: "Alugamos um chalé por duas noites." },
      { term: "raincoat", pt: "capa de chuva", ipa: "/ˈreɪnkoʊt/", definition: "A coat that keeps you dry in the rain.", example: "I put my raincoat in my backpack.", examplePt: "Coloquei minha capa de chuva na mochila." },
      { term: "ready", pt: "pronto", ipa: "/ˈredi/", definition: "Prepared for something.", example: "Are you ready to go?", examplePt: "Você está pronto para ir?" },
      { term: "slow", pt: "lento, devagar", ipa: "/sloʊ/", definition: "Not fast.", example: "The internet is really slow in the mountains.", examplePt: "A internet é bem lenta na serra." },
      { term: "forgetful", pt: "esquecido", ipa: "/fərˈɡetfəl/", definition: "Often forgetting things.", example: "I'm so forgetful. I left my keys at home again.", examplePt: "Sou tão esquecido. Deixei minhas chaves em casa de novo." },
    ],
    expressions: [
      { en: "That's the plan.", pt: "Esse é o plano." },
      { en: "What about…?", pt: "E quanto a…? / E o…?" },
      { en: "No problem, then.", pt: "Sem problema, então." },
      { en: "Right now.", pt: "Agora mesmo." },
      { en: "Finally!", pt: "Finalmente!" },
      { en: "a weekend off", pt: "um fim de semana de folga" },
    ],
    grammar: [
      {
        title: { en: "Be going to — plans and predictions", pt: "Be going to — planos e previsões" },
        examples: [
          { en: "We're going to leave after lunch.", pt: "Nós vamos sair depois do almoço. (plano)" },
          { en: "It's going to rain on Saturday.", pt: "Vai chover no sábado. (previsão com evidência)" },
          { en: "I'm not going to drive at night.", pt: "Eu não vou dirigir à noite." },
          { en: "Are you going to take the raincoats?", pt: "Você vai levar as capas de chuva?" },
          { en: "What are you going to do tomorrow?", pt: "O que você vai fazer amanhã?" },
          { en: "Who's going to cook tonight?", pt: "Quem vai cozinhar hoje à noite?" },
        ],
        rule: {
          en: "Use 'be (am/is/are) + going to + base verb' for plans you have already decided and for predictions based on what you can see or know now. Negative: am not / isn't / aren't going to. Questions: invert the verb 'be' (Are you going to…?). With 'Who', use 'is': Who's going to…?",
          pt: "Use 'be (am/is/are) + going to + verbo base' para planos já decididos e para previsões baseadas no que você vê ou sabe agora. Negativa: am not / isn't / aren't going to. Perguntas: inverta o verbo 'be' (Are you going to…?). Com 'Who', use 'is': Who's going to…?",
        },
        mistakes: [
          { en: "✗ I going to travel. → ✓ I'm going to travel. (don't forget 'be')", pt: "✗ I going to travel. → ✓ I'm going to travel. (não esqueça o 'be')" },
          { en: "✗ She's going to traveling. → ✓ She's going to travel. (base verb after 'to')", pt: "✗ She's going to traveling. → ✓ She's going to travel. (verbo base depois de 'to')" },
          { en: "✗ You are going to stay? → ✓ Are you going to stay? (invert in questions)", pt: "✗ You are going to stay? → ✓ Are you going to stay? (inverta nas perguntas)" },
        ],
      },
      {
        title: { en: "Talking about the weather", pt: "Falando sobre o tempo" },
        examples: [
          { en: "How's the weather today? — It's sunny.", pt: "Como está o tempo hoje? — Está ensolarado." },
          { en: "It's cloudy / rainy / foggy / windy.", pt: "Está nublado / chuvoso / com neblina / ventando." },
          { en: "It's raining a lot. / It's snowing.", pt: "Está chovendo muito. / Está nevando." },
          { en: "Is it going to snow tomorrow?", pt: "Vai nevar amanhã?" },
        ],
        rule: {
          en: "Weather sentences always start with 'It'. Use It's + adjective (sunny, cloudy, rainy, foggy) for conditions, It's + verb-ing (raining, snowing) for what is happening now, and It's going to + verb for predictions.",
          pt: "Frases sobre o tempo sempre começam com 'It'. Use It's + adjetivo (sunny, cloudy, rainy, foggy) para condições, It's + verbo-ing (raining, snowing) para o que está acontecendo agora, e It's going to + verbo para previsões.",
        },
        mistakes: [
          { en: "✗ Is sunny. → ✓ It's sunny. (English needs a subject)", pt: "✗ Is sunny. → ✓ It's sunny. (o inglês precisa de sujeito)" },
          { en: "✗ How is the time today? → ✓ How's the weather today? ('time' is hora; 'weather' is clima)", pt: "✗ How is the time today? → ✓ How's the weather today? ('time' é hora; 'weather' é clima)" },
        ],
      },
      {
        title: { en: "Review: did, paid, put", pt: "Revisão: did, paid, put" },
        examples: [
          { en: "I did the shopping. / I didn't do the dishes.", pt: "Eu fiz as compras. / Eu não lavei a louça." },
          { en: "Theo paid for the cabin. / Did you pay for the gas?", pt: "O Theo pagou o chalé. / Você pagou a gasolina?" },
          { en: "She put the bags in the car. / Didn't you put them there?", pt: "Ela colocou as malas no carro. / Você não colocou lá?" },
        ],
        rule: {
          en: "Past forms: do → did, pay → paid, put → put (same form). In negatives and questions, use did/didn't + base verb: I didn't pay. Did you put…?",
          pt: "Formas do passado: do → did, pay → paid, put → put (igual). Na negativa e na pergunta, use did/didn't + verbo base: I didn't pay. Did you put…?",
        },
        mistakes: [
          { en: "✗ I didn't paid. → ✓ I didn't pay.", pt: "✗ I didn't paid. → ✓ I didn't pay." },
          { en: "✗ Did you putted it there? → ✓ Did you put it there?", pt: "✗ Did you putted it there? → ✓ Did you put it there?" },
        ],
      },
    ],
    controlledPractice: [
      { id: "i1d-cp1", prompt: { en: "Complete: 'We ___ going to leave after lunch.'", pt: "Complete: 'We ___ going to leave after lunch.'" }, options: ["is", "are", "am"], answer: "are", explanation: { en: "'We' takes 'are': We're going to…", pt: "'We' usa 'are': We're going to…" } },
      { id: "i1d-cp2", prompt: { en: "Choose the correct prediction: dark clouds in the sky.", pt: "Escolha a previsão correta: nuvens escuras no céu." }, options: ["It going to rain.", "It's going to rain.", "It's going to raining."], answer: "It's going to rain.", explanation: { en: "It + is + going to + base verb.", pt: "It + is + going to + verbo base." } },
      { id: "i1d-cp3", prompt: { en: "Make it a question: 'You are going to take the raincoats.'", pt: "Transforme em pergunta: 'You are going to take the raincoats.'" }, options: ["You are going to take the raincoats?", "Are you going to take the raincoats?", "Do you going to take the raincoats?"], answer: "Are you going to take the raincoats?", explanation: { en: "Invert 'be' and the subject.", pt: "Inverta o 'be' e o sujeito." } },
      { id: "i1d-cp4", prompt: { en: "Complete: 'I didn't ___ for the tickets.'", pt: "Complete: 'I didn't ___ for the tickets.'" }, options: ["paid", "pay", "pays"], answer: "pay", explanation: { en: "After didn't, use the base verb.", pt: "Depois de didn't, use o verbo base." } },
      { id: "i1d-cp5", prompt: { en: "Which sentence describes the weather correctly?", pt: "Qual frase descreve o tempo corretamente?" }, options: ["Is foggy today.", "It's foggy today.", "The time is foggy today."], answer: "It's foggy today.", explanation: { en: "Weather sentences start with 'It'.", pt: "Frases de clima começam com 'It'." } },
    ],
    input: {
      kind: "listening",
      title: { en: "Weekend forecast on the radio", pt: "Previsão do fim de semana no rádio" },
      lines: [
        { en: "Good evening! Here's your weekend forecast for the mountain region.", pt: "Boa noite! Aqui está a previsão do fim de semana para a região serrana." },
        { en: "On Saturday morning, it's going to rain a lot, so drivers, be careful on the roads.", pt: "No sábado de manhã, vai chover bastante, então, motoristas, cuidado nas estradas." },
        { en: "In the afternoon, the rain is going to stop, but it's going to be cloudy and cold.", pt: "À tarde, a chuva vai parar, mas vai ficar nublado e frio." },
        { en: "Sunday is going to be beautiful: sunny from morning to afternoon.", pt: "O domingo vai ser lindo: ensolarado de manhã até a tarde." },
        { en: "At night, there's going to be fog near the lakes. It isn't going to snow this weekend.", pt: "À noite, vai ter neblina perto dos lagos. Não vai nevar neste fim de semana." },
      ],
      questions: [
        { id: "i1d-iq1", prompt: { en: "How is the weather going to be on Saturday morning?", pt: "Como vai estar o tempo no sábado de manhã?" }, options: ["Sunny", "Rainy", "Snowy"], answer: "Rainy", explanation: { en: "'On Saturday morning, it's going to rain a lot.'", pt: "'No sábado de manhã, vai chover bastante.'" } },
        { id: "i1d-iq2", prompt: { en: "When is it going to be sunny?", pt: "Quando vai fazer sol?" }, options: ["Saturday afternoon", "Sunday", "Saturday night"], answer: "Sunday", explanation: { en: "'Sunday is going to be beautiful: sunny…'", pt: "'O domingo vai ser lindo: ensolarado…'" } },
        { id: "i1d-iq3", prompt: { en: "Is it going to snow?", pt: "Vai nevar?" }, options: ["Yes, on Sunday.", "No, it isn't.", "Yes, at night."], answer: "No, it isn't.", explanation: { en: "'It isn't going to snow this weekend.'", pt: "'Não vai nevar neste fim de semana.'" } },
      ],
    },
    quickCheck: [
      { id: "i1d-qc1", prompt: { en: "What does 'forecast' mean?", pt: "O que significa 'forecast'?" }, options: ["A weather prediction", "A small house", "A raincoat"], answer: "A weather prediction", explanation: { en: "A forecast says what the weather is going to be like.", pt: "A previsão diz como o tempo vai estar." } },
      { id: "i1d-qc2", prompt: { en: "Choose the correct negative.", pt: "Escolha a negativa correta." }, options: ["She not going to come.", "She isn't going to come.", "She doesn't going to come."], answer: "She isn't going to come.", explanation: { en: "Negative: isn't + going to.", pt: "Negativa: isn't + going to." } },
      { id: "i1d-qc3", prompt: { en: "Past of 'put'?", pt: "Passado de 'put'?" }, options: ["putted", "put", "puted"], answer: "put", explanation: { en: "'Put' has the same form in the past.", pt: "'Put' tem a mesma forma no passado." } },
      { id: "i1d-qc4", prompt: { en: "'Who ___ going to drive?'", pt: "'Who ___ going to drive?'" }, options: ["are", "is", "do"], answer: "is", explanation: { en: "With 'Who' as subject, use 'is'.", pt: "Com 'Who' como sujeito, use 'is'." } },
    ],
  },
  communicate: {
    id: "INTERMEDIATE-U01-COMMUNICATE",
    review: [
      { en: "We're going to leave after lunch. — plans with 'going to'.", pt: "Vamos sair depois do almoço. — planos com 'going to'." },
      { en: "It's going to rain on Saturday. — predictions.", pt: "Vai chover no sábado. — previsões." },
      { en: "How's the weather? It's sunny / cloudy / foggy.", pt: "Como está o tempo? Está ensolarado / nublado / com neblina." },
      { en: "I paid for the cabin. Did you put the raincoats in the car?", pt: "Eu paguei o chalé. Você colocou as capas de chuva no carro?" },
    ],
    activities: [
      {
        id: "i1c-a1",
        title: { en: "My Weekend Plans", pt: "Meus planos para o fim de semana" },
        instruction: { en: "Say three things you are going to do and one thing you are not going to do this weekend.", pt: "Diga três coisas que você vai fazer e uma que você não vai fazer neste fim de semana." },
        phrases: [
          { en: "I'm going to visit my parents on Saturday.", pt: "Vou visitar meus pais no sábado." },
          { en: "I'm going to finish a book on Sunday afternoon.", pt: "Vou terminar um livro no domingo à tarde." },
          { en: "I'm not going to work this weekend.", pt: "Não vou trabalhar neste fim de semana." },
        ],
        check: [
          { id: "i1c-a1q1", prompt: { en: "Which sentence is a plan?", pt: "Qual frase é um plano?" }, options: ["I'm going to cook tonight.", "I cooked last night.", "I cook every day."], answer: "I'm going to cook tonight.", explanation: { en: "'Going to' expresses a decided plan.", pt: "'Going to' expressa um plano decidido." } },
          { id: "i1c-a1q2", prompt: { en: "Complete: 'They ___ going to travel.' (negative)", pt: "Complete: 'They ___ going to travel.' (negativa)" }, options: ["aren't", "isn't", "don't"], answer: "aren't", explanation: { en: "They + aren't + going to.", pt: "They + aren't + going to." } },
        ],
      },
      {
        id: "i1c-a2",
        title: { en: "Weather Reporter", pt: "Repórter do tempo" },
        instruction: { en: "Be the weather reporter. Describe today's weather and give the forecast for tomorrow.", pt: "Seja o repórter do tempo. Descreva o tempo de hoje e dê a previsão para amanhã." },
        phrases: [
          { en: "Today it's cloudy and a little cold.", pt: "Hoje está nublado e um pouco frio." },
          { en: "Tomorrow it's going to be sunny in the afternoon.", pt: "Amanhã vai fazer sol à tarde." },
          { en: "At night, it's going to rain near the coast.", pt: "À noite, vai chover perto do litoral." },
        ],
        check: [
          { id: "i1c-a2q1", prompt: { en: "Choose the correct sentence for right now.", pt: "Escolha a frase correta para agora." }, options: ["It's raining.", "It rains now.", "Is raining."], answer: "It's raining.", explanation: { en: "Use It's + -ing for weather happening now.", pt: "Use It's + -ing para o tempo acontecendo agora." } },
          { id: "i1c-a2q2", prompt: { en: "Opposite of 'sunny'?", pt: "Oposto de 'sunny'?" }, options: ["cloudy", "ready", "slow"], answer: "cloudy", explanation: { en: "Clouds cover the sun.", pt: "As nuvens cobrem o sol." } },
        ],
      },
      {
        id: "i1c-a3",
        title: { en: "Did You Do It?", pt: "Você fez isso?" },
        instruction: { en: "Before a trip, check the list with a friend. Ask and answer with did, paid and put.", pt: "Antes de uma viagem, confira a lista com um amigo. Pergunte e responda com did, paid e put." },
        phrases: [
          { en: "Did you pay for the hotel? — Yes, I paid for it yesterday.", pt: "Você pagou o hotel? — Sim, paguei ontem." },
          { en: "Did you put the charger in your bag? — No, I didn't. I'm going to do it now.", pt: "Você colocou o carregador na mala? — Não. Vou fazer isso agora." },
          { en: "Who did the shopping? — Rafa did.", pt: "Quem fez as compras? — O Rafa." },
        ],
        check: [
          { id: "i1c-a3q1", prompt: { en: "Short answer: 'Did you pay for the gas?'", pt: "Resposta curta: 'Did you pay for the gas?'" }, options: ["Yes, I paid.", "Yes, I did.", "Yes, I do."], answer: "Yes, I did.", explanation: { en: "Short answers repeat the auxiliary: did.", pt: "Respostas curtas repetem o auxiliar: did." } },
          { id: "i1c-a3q2", prompt: { en: "Which is correct?", pt: "Qual está correta?" }, options: ["I didn't put it there.", "I didn't putted it there.", "I not put it there."], answer: "I didn't put it there.", explanation: { en: "didn't + base verb.", pt: "didn't + verbo base." } },
        ],
      },
    ],
    challenge: {
      id: "i1c-cc1",
      title: { en: "Plan a Weekend Trip", pt: "Planeje uma viagem de fim de semana" },
      instruction: {
        en: "Plan a weekend trip out loud. Say where you are going to go, what the weather is going to be like, what you are going to do if it rains, and one thing you already did or paid for.",
        pt: "Planeje uma viagem de fim de semana em voz alta. Diga para onde vai, como vai estar o tempo, o que vai fazer se chover e uma coisa que você já fez ou pagou.",
      },
      phrases: [
        { en: "We're going to go to the beach on Saturday.", pt: "Vamos para a praia no sábado." },
        { en: "The forecast says it's going to be sunny, but a little windy.", pt: "A previsão diz que vai fazer sol, mas um pouco de vento." },
        { en: "If it rains, we're going to visit a museum.", pt: "Se chover, vamos visitar um museu." },
        { en: "I already paid for the hotel and put everything in my bag.", pt: "Já paguei o hotel e coloquei tudo na mala." },
      ],
      check: [
        { id: "i1c-cc1q1", prompt: { en: "Did you use 'going to' for at least two plans?", pt: "Você usou 'going to' para pelo menos dois planos?" }, options: ["Yes", "No", "Partially"], answer: "Yes", explanation: { en: "Self-check: plans with be + going to + verb.", pt: "Autoavaliação: planos com be + going to + verbo." } },
        { id: "i1c-cc1q2", prompt: { en: "Did you describe the weather with 'It's…'?", pt: "Você descreveu o tempo com 'It's…'?" }, options: ["Yes", "No", "Partially"], answer: "Yes", explanation: { en: "Self-check: It's sunny / It's going to rain.", pt: "Autoavaliação: It's sunny / It's going to rain." } },
      ],
    },
    lessonReview: {
      summary: {
        en: "You planned a weekend with 'going to', talked about the weather and the forecast, and reviewed did, paid and put.",
        pt: "Você planejou um fim de semana com 'going to', falou sobre o tempo e a previsão, e revisou did, paid e put.",
      },
      canDo: [
        { en: "I can talk about my plans with 'going to'.", pt: "Consigo falar dos meus planos com 'going to'." },
        { en: "I can make predictions based on the forecast.", pt: "Consigo fazer previsões com base na previsão do tempo." },
        { en: "I can ask and answer 'How's the weather?'.", pt: "Consigo perguntar e responder 'How's the weather?'." },
        { en: "I can say what I did, paid for and put somewhere.", pt: "Consigo dizer o que fiz, paguei e coloquei em algum lugar." },
      ],
      next: { en: "Next unit: learning new skills — talking about when you learned to do things.", pt: "Próxima unidade: aprender novas habilidades — falar de quando você aprendeu a fazer coisas." },
    },
  },
};
