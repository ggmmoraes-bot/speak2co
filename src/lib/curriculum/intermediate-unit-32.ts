import type { CourseUnit } from "./types";

/**
 * Intermediate — Unit 32 (Best of the Best). Conteúdo autoral Speak2Co.
 * Foco: superlativos (regulares e irregulares) para falar de recordes e
 * conquistas, com revisão de comparativos ("as...as", "more...than").
 * Personagens originais: Maya, Leo e Sam, um time de quiz de bar chamado
 * "The Brainiacs".
 */
export const INTERMEDIATE_U32: CourseUnit = {
  code: "INTERMEDIATE-U32",
  number: 32,
  title: "Best of the Best — Who's the smartest team in town?",
  titlePt: "Melhor dos Melhores — Qual é o time mais inteligente da cidade?",
  cefr: "B1",
  objective: {
    en: "Use superlative adjectives, including irregular forms, to talk about records, achievements and the 'best of the best' in a pub trivia context.",
    pt: "Usar adjetivos superlativos, incluindo formas irregulares, para falar de recordes, conquistas e o 'melhor dos melhores' em um contexto de quiz de bar.",
  },
  communicationGoal: {
    en: "Take part in a pub trivia night: introduce your team, react to questions, and talk about who is the best, the fastest or the smartest.",
    pt: "Participar de uma noite de quiz em um bar: apresentar seu time, reagir às perguntas e falar sobre quem é o melhor, o mais rápido ou o mais inteligente.",
  },
  prerequisites: {
    en: "Comparative adjectives with 'as...as' and 'more...than' (Unit 12).",
    pt: "Adjetivos comparativos com 'as...as' e 'more...than' (Unidade 12).",
  },
  newContent: {
    en: "Grammar: superlative adjectives — regular (the fastest, the most interesting) and irregular (the best, the worst) | Vocabulary: pub trivia night (10 items) | Expressions: reacting to right and wrong answers",
    pt: "Gramática: adjetivos superlativos — regulares (the fastest, the most interesting) e irregulares (the best, the worst) | Vocabulário: noite de quiz em um bar (10 itens) | Expressões: reagir a respostas certas e erradas",
  },
  reviewContent: {
    en: "Spiral review: comparative adjectives with 'as...as' and 'more...than' (Unit 12).",
    pt: "Revisão em espiral: adjetivos comparativos com 'as...as' e 'more...than' (Unidade 12).",
  },
  discover: {
    id: "INTERMEDIATE-U32-DISCOVER",
    warmUp: {
      prompt: {
        en: "Look at the picture. What is a pub trivia night? Who do you think is the best at answering questions: you or your friends?",
        pt: "Observe a imagem. O que é uma noite de quiz em um bar? Quem você acha que é o melhor em responder perguntas: você ou seus amigos?",
      },
      phrases: [
        { en: "It's a trivia night at a pub, with a scoreboard and a trophy.", pt: "É uma noite de quiz em um bar, com placar e troféu." },
        { en: "I think I'm the fastest at answering, but my friend is the smartest.", pt: "Acho que sou o mais rápido para responder, mas meu amigo é o mais inteligente." },
      ],
    },
    context: {
      situation: {
        en: "Maya, Leo and Sam are a trivia team called 'The Brainiacs'. It's the final round of the pub quiz.",
        pt: "Maya, Leo e Sam são um time de quiz chamado 'The Brainiacs'. É a rodada final do quiz do bar.",
      },
      dialogue: [
        { who: "Host", en: "Welcome to the final round, the tiebreaker! This is the most difficult question of the night.", pt: "Bem-vindos à rodada final, o desempate! Essa é a pergunta mais difícil da noite." },
        { who: "Maya", en: "We're the best team here, so let's ring the bell first!", pt: "Somos o melhor time aqui, então vamos tocar a campainha primeiro!" },
        { who: "Leo", en: "Wait, this is also the most confusing question. Let's think carefully.", pt: "Espera, essa também é a pergunta mais confusa. Vamos pensar com calma." },
        { who: "Sam", en: "I'm the worst at geography, but I'm sure the answer is Brazil.", pt: "Sou o pior em geografia, mas tenho certeza que a resposta é Brasil." },
        { who: "Host", en: "That's correct! The Brainiacs are the winners tonight, with the highest score!", pt: "Está correto! The Brainiacs são os vencedores hoje à noite, com a maior pontuação!" },
        { who: "Maya", en: "Yes! This is the best trophy we've ever won!", pt: "Isso! Esse é o melhor troféu que já ganhamos!" },
      ],
    },
    vocabulary: [
      { term: "quiz", pt: "quiz", ipa: "/kwɪz/", definition: "A game or competition in which people answer questions.", example: "The pub quiz starts at eight tonight.", examplePt: "O quiz do bar começa às oito hoje à noite." },
      { term: "host", pt: "apresentador(a)", ipa: "/hoʊst/", definition: "The person who runs a quiz or event and asks the questions.", example: "The host read the final question slowly.", examplePt: "O apresentador leu a pergunta final devagar." },
      { term: "scoreboard", pt: "placar", ipa: "/ˈskɔːrbɔːrd/", definition: "A board that shows the score of a game or competition.", example: "Our team's name is at the top of the scoreboard.", examplePt: "O nome do nosso time está no topo do placar." },
      { term: "bell", pt: "campainha", ipa: "/bel/", definition: "A small device you ring to signal that you know the answer.", example: "She rang the bell before anyone else.", examplePt: "Ela tocou a campainha antes de todo mundo." },
      { term: "trophy", pt: "troféu", ipa: "/ˈtroʊfi/", definition: "A cup or object given as a prize for winning a competition.", example: "The winning team took home a big trophy.", examplePt: "O time vencedor levou um troféu grande para casa." },
      { term: "round", pt: "rodada", ipa: "/raʊnd/", definition: "One part of a competition with several stages.", example: "There are five rounds in tonight's quiz.", examplePt: "Tem cinco rodadas no quiz de hoje." },
      { term: "tiebreaker", pt: "desempate", ipa: "/ˈtaɪˌbreɪkər/", definition: "An extra question or round used to decide a winner when scores are equal.", example: "Both teams needed a tiebreaker to find the champion.", examplePt: "Os dois times precisaram de um desempate para achar o campeão." },
      { term: "category", pt: "categoria", ipa: "/ˈkætəˌɡɔːri/", definition: "A group of questions about the same topic.", example: "The next category is movies from the 90s.", examplePt: "A próxima categoria é filmes dos anos 90." },
      { term: "contestant", pt: "competidor(a)", ipa: "/kənˈtɛstənt/", definition: "A person who takes part in a competition.", example: "Every contestant got one point for a correct answer.", examplePt: "Cada competidor ganhou um ponto por resposta certa." },
      { term: "buzzer", pt: "campainha de resposta", ipa: "/ˈbʌzər/", definition: "A button that makes a sound to show a team wants to answer.", example: "Press the buzzer as soon as you know the answer.", examplePt: "Aperte a campainha assim que souber a resposta." },
    ],
    expressions: [
      { en: "That's correct!", pt: "Está correto!" },
      { en: "Good guess, but that's wrong.", pt: "Bom chute, mas está errado." },
      { en: "We're on a roll tonight!", pt: "Estamos em uma sequência boa hoje à noite!" },
      { en: "So close! That was almost right.", pt: "Tão perto! Isso quase estava certo." },
    ],
    grammar: [
      {
        title: { en: "Superlative adjectives (regular)", pt: "Adjetivos superlativos (regulares)" },
        examples: [
          { en: "This is the hardest question of the night.", pt: "Essa é a pergunta mais difícil da noite." },
          { en: "Maya is the fastest player on the team.", pt: "Maya é a jogadora mais rápida do time." },
          { en: "That was the most interesting round.", pt: "Aquela foi a rodada mais interessante." },
        ],
        rule: {
          en: "For short adjectives (one syllable, or two ending in -y), we add '-est' and use 'the' before the adjective: the fast → the fastest, the easy → the easiest. For longer adjectives, we use 'the most' + adjective: the most interesting, the most difficult.",
          pt: "Para adjetivos curtos (uma sílaba, ou duas terminadas em -y), adicionamos '-est' e usamos 'the' antes do adjetivo: fast → the fastest, easy → the easiest. Para adjetivos mais longos, usamos 'the most' + adjetivo: the most interesting, the most difficult.",
        },
        mistakes: [
          { en: "'This is the most hard question.' → It should be 'the hardest question.' (short adjective + -est)", pt: "'This is the most hard question.' → O correto é 'the hardest question.' (adjetivo curto + -est)" },
          { en: "'She is the intelligentest player.' → It should be 'the most intelligent player.' (long adjective + most)", pt: "'She is the intelligentest player.' → O correto é 'the most intelligent player.' (adjetivo longo + most)" },
        ],
      },
      {
        title: { en: "Irregular superlatives", pt: "Superlativos irregulares" },
        examples: [
          { en: "This is the best trophy we've ever won.", pt: "Esse é o melhor troféu que já ganhamos." },
          { en: "That was the worst answer of the round.", pt: "Aquela foi a pior resposta da rodada." },
          { en: "Sam has the least experience with geography.", pt: "Sam tem a menor experiência com geografia." },
        ],
        rule: {
          en: "Some adjectives don't follow the regular pattern: good → the best, bad → the worst, far → the farthest, little → the least. These forms must be memorized.",
          pt: "Alguns adjetivos não seguem o padrão regular: good → the best, bad → the worst, far → the farthest, little → the least. Essas formas precisam ser memorizadas.",
        },
        mistakes: [
          { en: "'This is the goodest team.' → It should be 'the best team.'", pt: "'This is the goodest team.' → O correto é 'the best team.'" },
          { en: "'That was the baddest question.' → It should be 'the worst question.'", pt: "'That was the baddest question.' → O correto é 'the worst question.'" },
        ],
      },
    ],
    controlledPractice: [
      { id: "i32d-cp1", prompt: { en: "Choose the correct superlative: 'This is ___ question of the night.' (hard)", pt: "Escolha o superlativo correto: 'This is ___ question of the night.' (hard)" }, options: ["the most hard", "the hardest", "harder"], answer: "the hardest", explanation: { en: "Short adjective + -est: the hardest.", pt: "Adjetivo curto + -est: the hardest." } },
      { id: "i32d-cp2", prompt: { en: "Choose the correct superlative: 'That was ___ round.' (interesting)", pt: "Escolha o superlativo correto: 'That was ___ round.' (interesting)" }, options: ["the most interesting", "the interestingest", "more interesting"], answer: "the most interesting", explanation: { en: "Long adjective + the most: the most interesting.", pt: "Adjetivo longo + the most: the most interesting." } },
      { id: "i32d-cp3", prompt: { en: "Choose the irregular superlative of 'good'.", pt: "Escolha o superlativo irregular de 'good'." }, options: ["the goodest", "the best", "the more good"], answer: "the best", explanation: { en: "'Good' is irregular: the best.", pt: "'Good' é irregular: the best." } },
      { id: "i32d-cp4", prompt: { en: "Choose the irregular superlative of 'bad'.", pt: "Escolha o superlativo irregular de 'bad'." }, options: ["the baddest", "the worst", "the most bad"], answer: "the worst", explanation: { en: "'Bad' is irregular: the worst.", pt: "'Bad' é irregular: the worst." } },
    ],
    input: {
      kind: "reading",
      title: { en: "The Championship Team", pt: "O Time Campeão" },
      lines: [
        { en: "The Brainiacs are the best trivia team in the city.", pt: "The Brainiacs são o melhor time de quiz da cidade." },
        { en: "They have won the trophy three times, the most of any team.", pt: "Eles já ganharam o troféu três vezes, o mais de qualquer time." },
        { en: "Maya is the fastest at pressing the buzzer, and Leo has the most knowledge about movies.", pt: "Maya é a mais rápida para apertar a campainha, e Leo tem o mais conhecimento sobre filmes." },
        { en: "Sam says the tiebreaker round is always the most stressful part of the night.", pt: "Sam diz que a rodada de desempate é sempre a parte mais estressante da noite." },
      ],
      questions: [
        { id: "i32d-iq1", prompt: { en: "How many times have the Brainiacs won the trophy?", pt: "Quantas vezes os Brainiacs ganharam o troféu?" }, options: ["Once", "Twice", "Three times"], answer: "Three times", explanation: { en: "'They have won the trophy three times.'", pt: "'Eles já ganharam o troféu três vezes.'" } },
        { id: "i32d-iq2", prompt: { en: "Who presses the buzzer the fastest?", pt: "Quem aperta a campainha mais rápido?" }, options: ["Maya", "Leo", "Sam"], answer: "Maya", explanation: { en: "'Maya is the fastest at pressing the buzzer.'", pt: "'Maya é a mais rápida para apertar a campainha.'" } },
      ],
    },
    quickCheck: [
      { id: "i32d-qc1", prompt: { en: "What do you ring when you know the answer?", pt: "O que você toca quando sabe a resposta?" }, options: ["The scoreboard", "The bell", "The trophy"], answer: "The bell", explanation: { en: "You ring the bell (or press the buzzer) to answer.", pt: "Você toca a campainha (ou aperta o buzzer) para responder." } },
      { id: "i32d-qc2", prompt: { en: "Complete: 'This is ___ question.' (difficult)", pt: "Complete: 'This is ___ question.' (difficult)" }, options: ["the difficultest", "the most difficult", "more difficult"], answer: "the most difficult", explanation: { en: "Long adjective + the most.", pt: "Adjetivo longo + the most." } },
      { id: "i32d-qc3", prompt: { en: "Complete: 'She is ___ player on the team.' (good)", pt: "Complete: 'She is ___ player on the team.' (good)" }, options: ["the best", "the goodest", "the better"], answer: "the best", explanation: { en: "'Good' → the best.", pt: "'Good' → the best." } },
      { id: "i32d-qc4", prompt: { en: "What is an extra question used to decide a winner called?", pt: "Como se chama uma pergunta extra usada para decidir o vencedor?" }, options: ["A category", "A tiebreaker", "A contestant"], answer: "A tiebreaker", explanation: { en: "A tiebreaker decides the winner when scores are equal.", pt: "O tiebreaker decide o vencedor quando as pontuações empatam." } },
    ],
  },
  communicate: {
    id: "INTERMEDIATE-U32-COMMUNICATE",
    review: [
      { en: "This is the hardest question of the night, but Maya is the fastest at answering.", pt: "Essa é a pergunta mais difícil da noite, mas Maya é a mais rápida para responder." },
      { en: "That was the most interesting round, and it's the best trophy we've ever won.", pt: "Aquela foi a rodada mais interessante, e é o melhor troféu que já ganhamos." },
      { en: "Sam is the worst at geography, but he had the least difficulty with the tiebreaker.", pt: "Sam é o pior em geografia, mas teve a menor dificuldade com o desempate." },
      { en: "Leo is as smart as Maya, but he isn't as fast as her.", pt: "Leo é tão inteligente quanto Maya, mas não é tão rápido quanto ela." },
    ],
    activities: [
      {
        id: "i32c-a1",
        title: { en: "Team Introductions", pt: "Apresentações do Time" },
        instruction: { en: "Introduce your trivia team. Say who is the best at each category, using superlatives.", pt: "Apresente seu time de quiz. Diga quem é o melhor em cada categoria, usando superlativos." },
        phrases: [
          { en: "We are the best team here tonight.", pt: "Somos o melhor time aqui hoje à noite." },
          { en: "Maya is the fastest at pressing the buzzer.", pt: "Maya é a mais rápida para apertar a campainha." },
          { en: "Leo has the most knowledge about movies.", pt: "Leo tem o mais conhecimento sobre filmes." },
        ],
        check: [
          { id: "i32c-a1q1", prompt: { en: "Which sentence uses a superlative correctly?", pt: "Qual frase usa um superlativo corretamente?" }, options: ["She is more fast.", "She is the fastest.", "She is fastest as him."], answer: "She is the fastest.", explanation: { en: "Short adjective + -est with 'the'.", pt: "Adjetivo curto + -est com 'the'." } },
          { id: "i32c-a1q2", prompt: { en: "Complete: 'He is ___ contestant tonight.' (interesting)", pt: "Complete: 'He is ___ contestant tonight.' (interesting)" }, options: ["the most interesting", "the interestingest", "more interesting"], answer: "the most interesting", explanation: { en: "Long adjective + the most.", pt: "Adjetivo longo + the most." } },
        ],
      },
      {
        id: "i32c-a2",
        title: { en: "The Winning Category", pt: "A Categoria Vencedora" },
        instruction: { en: "Talk about your favorite trivia category and say why it's the best one, using superlatives and irregular forms.", pt: "Fale sobre sua categoria de quiz favorita e diga por que ela é a melhor, usando superlativos e formas irregulares." },
        phrases: [
          { en: "Movies is the best category for me.", pt: "Filmes é a melhor categoria para mim." },
          { en: "Geography is the worst category for Sam.", pt: "Geografia é a pior categoria para Sam." },
          { en: "This is the most exciting round of the whole night.", pt: "Essa é a rodada mais empolgante da noite toda." },
        ],
        check: [
          { id: "i32c-a2q1", prompt: { en: "Choose the irregular superlative of 'bad'.", pt: "Escolha o superlativo irregular de 'bad'." }, options: ["the baddest", "the worst", "the most bad"], answer: "the worst", explanation: { en: "'Bad' is irregular: the worst.", pt: "'Bad' é irregular: the worst." } },
          { id: "i32c-a2q2", prompt: { en: "Complete: 'This is ___ round of the night.' (exciting)", pt: "Complete: 'This is ___ round of the night.' (exciting)" }, options: ["the most exciting", "the excitingest", "exciting"], answer: "the most exciting", explanation: { en: "Long adjective + the most.", pt: "Adjetivo longo + the most." } },
        ],
      },
      {
        id: "i32c-a3",
        title: { en: "Reacting to Answers", pt: "Reagindo às Respostas" },
        instruction: { en: "Practice reacting to correct and incorrect trivia answers using the expressions from the unit.", pt: "Pratique reagir a respostas certas e erradas do quiz usando as expressões da unidade." },
        phrases: [
          { en: "That's correct! We're on a roll tonight!", pt: "Está correto! Estamos em uma sequência boa hoje à noite!" },
          { en: "Good guess, but that's wrong.", pt: "Bom chute, mas está errado." },
          { en: "So close! That was almost right.", pt: "Tão perto! Isso quase estava certo." },
        ],
        check: [
          { id: "i32c-a3q1", prompt: { en: "What do you say when a team gets the answer right several times?", pt: "O que você diz quando um time acerta a resposta várias vezes?" }, options: ["So close!", "We're on a roll!", "Good guess, but that's wrong."], answer: "We're on a roll!", explanation: { en: "'We're on a roll' means having a series of successes.", pt: "'We're on a roll' significa ter uma sequência de sucessos." } },
          { id: "i32c-a3q2", prompt: { en: "What do you say when an answer is close but not exact?", pt: "O que você diz quando a resposta está perto, mas não exata?" }, options: ["That's correct!", "So close!", "That's the best answer."], answer: "So close!", explanation: { en: "'So close!' reacts to an almost-right answer.", pt: "'So close!' reage a uma resposta quase certa." } },
        ],
      },
    ],
    challenge: {
      id: "i32c-cc1",
      title: { en: "Host a Trivia Round", pt: "Apresente uma Rodada de Quiz" },
      instruction: {
        en: "Imagine you are the host of a pub trivia night. Talk out loud, introducing a round, a category and the tiebreaker, and use at least three superlative adjectives to describe the teams and questions.",
        pt: "Imagine que você é o apresentador de uma noite de quiz em um bar. Fale em voz alta, apresentando uma rodada, uma categoria e o desempate, e use pelo menos três adjetivos superlativos para descrever os times e as perguntas.",
      },
      phrases: [
        { en: "Welcome, everyone! This is the most exciting round of the night.", pt: "Bem-vindos, todos! Essa é a rodada mais empolgante da noite." },
        { en: "This is the hardest category, so get ready to press the buzzer.", pt: "Essa é a categoria mais difícil, então se preparem para apertar a campainha." },
        { en: "And now, the tiebreaker: only the best team will win the trophy tonight.", pt: "E agora, o desempate: só o melhor time vai ganhar o troféu hoje à noite." },
        { en: "That's correct! You are the smartest team we've had this year.", pt: "Está correto! Vocês são o time mais inteligente que tivemos esse ano." },
      ],
      check: [
        { id: "i32c-cc1q1", prompt: { en: "Did you use at least three superlative adjectives correctly?", pt: "Você usou pelo menos três adjetivos superlativos corretamente?" }, options: ["Yes", "No", "Partially"], answer: "Yes", explanation: { en: "Self-check: regular and irregular superlatives.", pt: "Autoavaliação: superlativos regulares e irregulares." } },
        { id: "i32c-cc1q2", prompt: { en: "Did you introduce a round, a category and a tiebreaker?", pt: "Você apresentou uma rodada, uma categoria e um desempate?" }, options: ["Yes", "No", "Partially"], answer: "Yes", explanation: { en: "Self-check: trivia night vocabulary.", pt: "Autoavaliação: vocabulário de noite de quiz." } },
      ],
    },
    lessonReview: {
      summary: {
        en: "You learned to use superlative adjectives, regular (the fastest, the most interesting) and irregular (the best, the worst), and to talk about pub trivia nights with vocabulary like quiz, host, scoreboard and tiebreaker.",
        pt: "Você aprendeu a usar adjetivos superlativos, regulares (the fastest, the most interesting) e irregulares (the best, the worst), e a falar sobre noites de quiz em bares com vocabulário como quiz, host, scoreboard e tiebreaker.",
      },
      canDo: [
        { en: "I can form regular superlative adjectives correctly.", pt: "Consigo formar adjetivos superlativos regulares corretamente." },
        { en: "I can use irregular superlatives like 'the best' and 'the worst'.", pt: "Consigo usar superlativos irregulares como 'the best' e 'the worst'." },
        { en: "I can talk about a trivia night using its specific vocabulary.", pt: "Consigo falar sobre uma noite de quiz usando o vocabulário específico." },
      ],
      next: { en: "Next unit: talking to people — reported questions and asking for clarification.", pt: "Próxima unidade: conversando com pessoas — perguntas reportadas e pedidos de esclarecimento." },
    },
  },
};
