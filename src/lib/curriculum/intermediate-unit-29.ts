import type { CourseUnit } from "./types";

/**
 * Intermediate — Unit 29 (Hobbies and Free Time). Conteúdo autoral Speak2Co.
 * Foco: tag questions para conversa natural, com vocabulário de hobbies.
 * Personagens: Marina e Diego, colegas de trabalho planejando um encontro da equipe.
 */
export const INTERMEDIATE_U29: CourseUnit = {
  code: "INTERMEDIATE-U29",
  number: 29,
  title: "Hobbies and Free Time — You like hiking, don't you?",
  titlePt: "Hobbies e Tempo Livre — Você gosta de trilha, não gosta?",
  cefr: "B1",
  objective: {
    en: "Talk about hobbies and free-time activities and use tag questions to check information or invite agreement.",
    pt: "Falar sobre hobbies e atividades de tempo livre e usar tag questions para checar informações ou convidar concordância.",
  },
  communicationGoal: {
    en: "Make small talk about hobbies with a coworker and plan a team outing together.",
    pt: "Fazer conversa fiada sobre hobbies com um colega de trabalho e planejar um encontro de equipe.",
  },
  prerequisites: {
    en: "Have to / must / mustn't for obligation, and some / any / much / many for quantities from previous units.",
    pt: "Have to / must / mustn't para obrigação, e some / any / much / many para quantidades das unidades anteriores.",
  },
  newContent: {
    en: "Grammar: Tag questions (affirmative + negative tag, negative + positive tag) | Vocabulary: hobbies and free time (12 items) | Expressions: making small talk",
    pt: "Gramática: Tag questions (afirmativa + tag negativa, negativa + tag positiva) | Vocabulário: hobbies e tempo livre (12 itens) | Expressões: puxando conversa",
  },
  reviewContent: {
    en: "Have to / must / mustn't for obligation and prohibition, and some / any / much / many for quantities.",
    pt: "Have to / must / mustn't para obrigação e proibição, e some / any / much / many para quantidades.",
  },
  discover: {
    id: "INTERMEDIATE-U29-DISCOVER",
    warmUp: {
      prompt: {
        en: "Look at the picture. What hobbies do you think these coworkers enjoy? What do you do in your free time?",
        pt: "Observe a imagem. Que hobbies você acha que esses colegas de trabalho curtem? O que você faz no seu tempo livre?",
      },
      phrases: [
        { en: "You like hiking, don't you?", pt: "Você gosta de trilha, não gosta?" },
        { en: "This isn't your first photography class, is it?", pt: "Essa não é sua primeira aula de fotografia, é?" },
        { en: "We should plan something fun for the team, shouldn't we?", pt: "A gente devia planejar algo divertido para a equipe, não devia?" },
      ],
    },
    context: {
      situation: {
        en: "Marina and Diego are coworkers chatting during a coffee break. They are planning a weekend activity for the whole team.",
        pt: "Marina e Diego são colegas de trabalho conversando durante uma pausa para o café. Eles estão planejando uma atividade de fim de semana para toda a equipe.",
      },
      dialogue: [
        { who: "Diego", en: "Busy week, isn't it? I really need a hobby to relax this weekend.", pt: "Semana corrida, não é? Eu realmente preciso de um hobby para relaxar esse fim de semana." },
        { who: "Marina", en: "You used to go hiking on weekends, didn't you?", pt: "Você costumava fazer trilha nos fins de semana, não costumava?" },
        { who: "Diego", en: "I did, but lately I've been into photography instead. You paint, don't you?", pt: "Eu costumava, mas ultimamente tenho me interessado por fotografia. Você pinta, não pinta?" },
        { who: "Marina", en: "Yes, and I also love gardening. It isn't as relaxing as painting, is it? But I still enjoy it.", pt: "Sim, e também adoro jardinagem. Não é tão relaxante quanto pintar, é? Mas eu ainda curto." },
        { who: "Diego", en: "By the way, we should plan a team outing soon, shouldn't we? Everyone seems stressed.", pt: "A propósito, a gente devia planejar um encontro de equipe em breve, não devia? Todo mundo parece estressado." },
        { who: "Marina", en: "Great idea! There isn't a park near the office, is there?", pt: "Ótima ideia! Não tem um parque perto do escritório, tem?" },
        { who: "Diego", en: "Actually, there is one two blocks away. We could go hiking there, couldn't we?", pt: "Na verdade, tem um a duas quadras. A gente podia ir fazer trilha lá, não podia?" },
        { who: "Marina", en: "Perfect. Let's send an invite to the team. Everyone loves a good excuse to unwind, don't they?", pt: "Perfeito. Vamos mandar um convite para a equipe. Todo mundo adora uma boa desculpa para relaxar, não adora?" },
      ],
    },
    vocabulary: [
      { term: "hobby", pt: "hobby, passatempo", ipa: "/ˈhɑːbi/", definition: "An activity you do regularly for pleasure in your free time.", example: "Photography became my favorite hobby last year.", examplePt: "Fotografia virou meu hobby favorito no ano passado." },
      { term: "hiking", pt: "fazer trilha", ipa: "/ˈhaɪkɪŋ/", definition: "Walking long distances outdoors, especially in nature, for pleasure.", example: "We're going hiking in the mountains this weekend.", examplePt: "Vamos fazer trilha nas montanhas esse fim de semana." },
      { term: "photography", pt: "fotografia", ipa: "/fəˈtɑːɡrəfi/", definition: "The activity of taking pictures with a camera.", example: "She takes a photography class every Tuesday.", examplePt: "Ela faz aula de fotografia toda terça." },
      { term: "gardening", pt: "jardinagem", ipa: "/ˈɡɑːrdnɪŋ/", definition: "The activity of growing and taking care of plants.", example: "Gardening helps me relax after work.", examplePt: "Jardinagem me ajuda a relaxar depois do trabalho." },
      { term: "painting", pt: "pintura", ipa: "/ˈpeɪntɪŋ/", definition: "The activity or hobby of creating pictures with paint.", example: "He spends his weekends painting landscapes.", examplePt: "Ele passa os fins de semana pintando paisagens." },
      { term: "collecting", pt: "colecionar", ipa: "/kəˈlɛktɪŋ/", definition: "Gathering specific items over time as a hobby.", example: "My uncle enjoys collecting old vinyl records.", examplePt: "Meu tio gosta de colecionar discos de vinil antigos." },
      { term: "board game", pt: "jogo de tabuleiro", ipa: "/bɔːrd ɡeɪm/", definition: "A game played by moving pieces on a printed surface.", example: "We play a board game every Friday night.", examplePt: "A gente joga um jogo de tabuleiro toda sexta à noite." },
      { term: "knitting", pt: "tricô", ipa: "/ˈnɪtɪŋ/", definition: "Making clothes or fabric by looping wool with needles.", example: "She learned knitting from her grandmother.", examplePt: "Ela aprendeu tricô com a avó." },
      { term: "outing", pt: "passeio, saída em grupo", ipa: "/ˈaʊtɪŋ/", definition: "A short trip or activity made together, usually for fun.", example: "The office is planning a team outing this month.", examplePt: "O escritório está planejando um passeio de equipe esse mês." },
      { term: "to unwind", pt: "relaxar, descontrair", ipa: "/ʌnˈwaɪnd/", definition: "To relax after a period of work or stress.", example: "I like to unwind by listening to music.", examplePt: "Eu gosto de relaxar ouvindo música." },
      { term: "to be into (something)", pt: "curtir, se interessar por", ipa: "/bi ˈɪntuː/", definition: "To be interested in or enjoy an activity a lot.", example: "Lately, I've been into photography.", examplePt: "Ultimamente, tenho me interessado por fotografia." },
      { term: "free time", pt: "tempo livre", ipa: "/friː taɪm/", definition: "Time when you are not working or studying.", example: "What do you usually do in your free time?", examplePt: "O que você costuma fazer no seu tempo livre?" },
    ],
    expressions: [
      { en: "Busy week, isn't it?", pt: "Semana corrida, não é?" },
      { en: "By the way…", pt: "A propósito…" },
      { en: "Great idea!", pt: "Ótima ideia!" },
      { en: "Everyone seems stressed.", pt: "Todo mundo parece estressado." },
      { en: "Let's send an invite.", pt: "Vamos mandar um convite." },
      { en: "It's a good excuse to unwind.", pt: "É uma boa desculpa para relaxar." },
    ],
    grammar: [
      {
        title: { en: "Tag questions — affirmative statement + negative tag", pt: "Tag questions — afirmação + tag negativa" },
        examples: [
          { en: "Busy week, isn't it?", pt: "Semana corrida, não é?" },
          { en: "You paint, don't you?", pt: "Você pinta, não pinta?" },
          { en: "You used to go hiking, didn't you?", pt: "Você costumava fazer trilha, não costumava?" },
          { en: "We should plan a team outing, shouldn't we?", pt: "A gente devia planejar um passeio de equipe, não devia?" },
        ],
        rule: {
          en: "When the main statement is affirmative, the tag is negative. Use the same auxiliary verb as the statement (be, have, do/does/did, modal verbs), and a pronoun that matches the subject.",
          pt: "Quando a afirmação principal é positiva, a tag é negativa. Use o mesmo verbo auxiliar da afirmação (be, have, do/does/did, verbos modais), e um pronome que corresponda ao sujeito.",
        },
        mistakes: [
          { en: "✗ You paint, do you? → ✓ You paint, don't you? (negative tag after affirmative)", pt: "✗ You paint, do you? → ✓ You paint, don't you? (tag negativa depois de afirmativa)" },
          { en: "✗ She likes coffee, isn't she? → ✓ She likes coffee, doesn't she? (match the auxiliary)", pt: "✗ She likes coffee, isn't she? → ✓ She likes coffee, doesn't she? (use o auxiliar certo)" },
        ],
      },
      {
        title: { en: "Tag questions — negative statement + positive tag", pt: "Tag questions — negação + tag positiva" },
        examples: [
          { en: "This isn't your first class, is it?", pt: "Essa não é sua primeira aula, é?" },
          { en: "It isn't as relaxing as painting, is it?", pt: "Não é tão relaxante quanto pintar, é?" },
          { en: "There isn't a park near here, is there?", pt: "Não tem um parque perto daqui, tem?" },
          { en: "You haven't tried gardening, have you?", pt: "Você nunca experimentou jardinagem, experimentou?" },
        ],
        rule: {
          en: "When the main statement is negative, the tag is positive, using the same auxiliary verb and a matching pronoun. We use tag questions in speaking to check information or invite the listener to agree — the voice usually rises for a real question and falls when we expect agreement.",
          pt: "Quando a afirmação é negativa, a tag é positiva, usando o mesmo verbo auxiliar e um pronome correspondente. Usamos tag questions para checar informações ou convidar o ouvinte a concordar — a entonação geralmente sobe quando é uma pergunta real e desce quando esperamos concordância.",
        },
        mistakes: [
          { en: "✗ There isn't a park, isn't there? → ✓ There isn't a park, is there? (opposite polarity)", pt: "✗ There isn't a park, isn't there? → ✓ There isn't a park, is there? (polaridade oposta)" },
        ],
      },
    ],
    controlledPractice: [
      { id: "i29d-cp1", prompt: { en: "Complete: 'You like hiking, ______?'", pt: "Complete: 'You like hiking, ______?'" }, options: ["don't you", "do you", "aren't you"], answer: "don't you", explanation: { en: "Affirmative statement → negative tag with 'do'.", pt: "Afirmação positiva → tag negativa com 'do'." } },
      { id: "i29d-cp2", prompt: { en: "Complete: 'This isn't your first class, ______?'", pt: "Complete: 'This isn't your first class, ______?'" }, options: ["is it", "isn't it", "was it"], answer: "is it", explanation: { en: "Negative statement → positive tag.", pt: "Afirmação negativa → tag positiva." } },
      { id: "i29d-cp3", prompt: { en: "Complete: 'We should plan an outing, ______?'", pt: "Complete: 'We should plan an outing, ______?'" }, options: ["shouldn't we", "should we", "didn't we"], answer: "shouldn't we", explanation: { en: "Modal 'should' repeats in the tag, negative form.", pt: "O modal 'should' se repete na tag, na forma negativa." } },
      { id: "i29d-cp4", prompt: { en: "Complete: 'You used to go hiking, ______?'", pt: "Complete: 'You used to go hiking, ______?'" }, options: ["didn't you", "don't you", "weren't you"], answer: "didn't you", explanation: { en: "'Used to' is simple past, so the tag uses 'did'.", pt: "'Used to' é passado simples, então a tag usa 'did'." } },
      { id: "i29d-cp5", prompt: { en: "Complete: 'There isn't a park near here, ______?'", pt: "Complete: 'There isn't a park near here, ______?'" }, options: ["is there", "isn't there", "does it"], answer: "is there", explanation: { en: "Negative statement with 'there is' → positive tag 'is there'.", pt: "Afirmação negativa com 'there is' → tag positiva 'is there'." } },
    ],
    input: {
      kind: "reading",
      title: { en: "A blog post: Why hobbies matter", pt: "Um post de blog: Por que hobbies importam" },
      lines: [
        { en: "Everyone needs free time to unwind, don't they? A good hobby can turn a stressful week into a better one.", pt: "Todo mundo precisa de tempo livre para relaxar, não precisa? Um bom hobby pode transformar uma semana estressante em uma melhor." },
        { en: "Some people are into photography, and others prefer gardening or painting. You don't have to choose just one, do you?", pt: "Algumas pessoas curtem fotografia, e outras preferem jardinagem ou pintura. Você não precisa escolher só uma, precisa?" },
        { en: "Coworkers who share hobbies often plan outings together, like hiking trips or board game nights. That sounds like fun, doesn't it?", pt: "Colegas de trabalho que compartilham hobbies costumam planejar passeios juntos, como trilhas ou noites de jogo de tabuleiro. Isso parece divertido, não parece?" },
        { en: "There isn't a single perfect hobby for everyone, is there? The best one is simply the one that helps you relax.", pt: "Não existe um único hobby perfeito para todo mundo, existe? O melhor é simplesmente aquele que ajuda você a relaxar." },
      ],
      questions: [
        { id: "i29d-iq1", prompt: { en: "According to the text, why are hobbies important?", pt: "De acordo com o texto, por que os hobbies são importantes?" }, options: ["They turn a stressful week into a better one", "They are only for creative people", "They must be shared with coworkers"], answer: "They turn a stressful week into a better one", explanation: { en: "'A good hobby can turn a stressful week into a better one.'", pt: "'Um bom hobby pode transformar uma semana estressante em uma melhor.'" } },
        { id: "i29d-iq2", prompt: { en: "What do coworkers who share hobbies often do?", pt: "O que colegas que compartilham hobbies costumam fazer?" }, options: ["Plan outings together", "Avoid talking to each other", "Only talk about work"], answer: "Plan outings together", explanation: { en: "'Coworkers who share hobbies often plan outings together.'", pt: "'Colegas que compartilham hobbies costumam planejar passeios juntos.'" } },
        { id: "i29d-iq3", prompt: { en: "What is the best hobby, according to the text?", pt: "Qual é o melhor hobby, segundo o texto?" }, options: ["The one that helps you relax", "The most expensive one", "The one everyone else has"], answer: "The one that helps you relax", explanation: { en: "'The best one is simply the one that helps you relax.'", pt: "'O melhor é simplesmente aquele que ajuda você a relaxar.'" } },
      ],
    },
    quickCheck: [
      { id: "i29d-qc1", prompt: { en: "What does 'to unwind' mean?", pt: "O que significa 'to unwind'?" }, options: ["To relax after stress", "To work harder", "To collect items"], answer: "To relax after stress", explanation: { en: "'Unwind' means to relax.", pt: "'Unwind' significa relaxar." } },
      { id: "i29d-qc2", prompt: { en: "Complete: 'She loves gardening, ______?'", pt: "Complete: 'She loves gardening, ______?'" }, options: ["doesn't she", "isn't she", "does she"], answer: "doesn't she", explanation: { en: "Affirmative statement, simple present → 'doesn't she'.", pt: "Afirmação positiva, presente simples → 'doesn't she'." } },
      { id: "i29d-qc3", prompt: { en: "What is an 'outing'?", pt: "O que é um 'outing'?" }, options: ["A short trip made for fun", "A type of board game", "A kind of hobby tool"], answer: "A short trip made for fun", explanation: { en: "An outing is a group trip or activity for pleasure.", pt: "Um outing é um passeio ou atividade em grupo por diversão." } },
      { id: "i29d-qc4", prompt: { en: "'You haven't tried knitting, ______?'", pt: "'You haven't tried knitting, ______?'" }, options: ["have you", "haven't you", "do you"], answer: "have you", explanation: { en: "Negative statement with 'have' → positive tag 'have you'.", pt: "Afirmação negativa com 'have' → tag positiva 'have you'." } },
    ],
  },
  communicate: {
    id: "INTERMEDIATE-U29-COMMUNICATE",
    review: [
      { en: "You like hiking, don't you? — affirmative statement, negative tag.", pt: "Você gosta de trilha, não gosta? — afirmação positiva, tag negativa." },
      { en: "This isn't your first class, is it? — negative statement, positive tag.", pt: "Essa não é sua primeira aula, é? — afirmação negativa, tag positiva." },
      { en: "We should plan an outing, shouldn't we? Hobbies help us unwind.", pt: "A gente devia planejar um passeio, não devia? Hobbies ajudam a gente a relaxar." },
      { en: "Vocabulary: hiking, photography, gardening, painting, collecting, board game, knitting, outing, free time.", pt: "Vocabulário: hiking, photography, gardening, painting, collecting, board game, knitting, outing, free time." },
    ],
    activities: [
      {
        id: "i29c-a1",
        title: { en: "Guess My Hobby", pt: "Adivinhe meu hobby" },
        instruction: { en: "Say three tag questions to guess a partner's favorite hobby.", pt: "Diga três tag questions para adivinhar o hobby favorito de um parceiro." },
        phrases: [
          { en: "You like outdoor activities, don't you?", pt: "Você gosta de atividades ao ar livre, não gosta?" },
          { en: "You aren't into board games, are you?", pt: "Você não curte jogos de tabuleiro, curte?" },
          { en: "You collect something, don't you?", pt: "Você coleciona alguma coisa, não coleciona?" },
        ],
        check: [
          { id: "i29c-a1q1", prompt: { en: "Which is a correct tag question?", pt: "Qual é uma tag question correta?" }, options: ["You like hiking, don't you?", "You like hiking, do you?", "You like hiking, isn't you?"], answer: "You like hiking, don't you?", explanation: { en: "Affirmative + negative tag with 'do'.", pt: "Afirmativa + tag negativa com 'do'." } },
          { id: "i29c-a1q2", prompt: { en: "Complete: 'You collect stamps, ______?'", pt: "Complete: 'You collect stamps, ______?'" }, options: ["don't you", "aren't you", "haven't you"], answer: "don't you", explanation: { en: "Simple present affirmative → 'don't you'.", pt: "Presente simples afirmativo → 'don't you'." } },
        ],
      },
      {
        id: "i29c-a2",
        title: { en: "Plan a Team Outing", pt: "Planeje um passeio de equipe" },
        instruction: { en: "Suggest a free-time activity for your team, using at least two tag questions.", pt: "Sugira uma atividade de tempo livre para sua equipe, usando pelo menos duas tag questions." },
        phrases: [
          { en: "We could go hiking this weekend, couldn't we?", pt: "A gente podia fazer trilha esse fim de semana, não podia?" },
          { en: "Everyone likes board games, don't they?", pt: "Todo mundo gosta de jogo de tabuleiro, não gosta?" },
          { en: "There's a park nearby, isn't there?", pt: "Tem um parque perto, tem?" },
        ],
        check: [
          { id: "i29c-a2q1", prompt: { en: "Complete: 'There's a park nearby, ______?'", pt: "Complete: 'There's a park nearby, ______?'" }, options: ["isn't there", "is there", "wasn't there"], answer: "isn't there", explanation: { en: "Affirmative statement → negative tag.", pt: "Afirmação positiva → tag negativa." } },
          { id: "i29c-a2q2", prompt: { en: "Which tag matches 'We could go hiking'?", pt: "Qual tag combina com 'We could go hiking'?" }, options: ["couldn't we", "can't we", "didn't we"], answer: "couldn't we", explanation: { en: "The modal 'could' repeats in the tag, negative form.", pt: "O modal 'could' se repete na tag, na forma negativa." } },
        ],
      },
      {
        id: "i29c-a3",
        title: { en: "Small Talk Practice", pt: "Prática de conversa fiada" },
        instruction: { en: "Start a short small talk conversation about hobbies using expressions from this unit.", pt: "Comece uma conversa fiada curta sobre hobbies usando expressões desta unidade." },
        phrases: [
          { en: "Busy week, isn't it? What do you do to unwind?", pt: "Semana corrida, não é? O que você faz para relaxar?" },
          { en: "By the way, do you have any hobbies?", pt: "A propósito, você tem algum hobby?" },
          { en: "That's a great idea for the weekend!", pt: "Essa é uma ótima ideia para o fim de semana!" },
        ],
        check: [
          { id: "i29c-a3q1", prompt: { en: "Which expression starts small talk about a busy week?", pt: "Qual expressão inicia uma conversa fiada sobre uma semana corrida?" }, options: ["Busy week, isn't it?", "Let's move on.", "Could you clarify that?"], answer: "Busy week, isn't it?", explanation: { en: "It's a common small talk opener with a tag question.", pt: "É um jeito comum de puxar conversa, com uma tag question." } },
        ],
      },
    ],
    challenge: {
      id: "i29c-cc1",
      title: { en: "My Favorite Hobby", pt: "Meu hobby favorito" },
      instruction: {
        en: "Describe your favorite hobby and why you enjoy it, using at least three tag questions to invite your listener to react.",
        pt: "Descreva seu hobby favorito e por que você gosta dele, usando pelo menos três tag questions para convidar seu ouvinte a reagir.",
      },
      phrases: [
        { en: "I love photography, and it's relaxing, isn't it?", pt: "Eu adoro fotografia, e é relaxante, não é?" },
        { en: "You should try it sometime, shouldn't you?", pt: "Você devia experimentar algum dia, não devia?" },
        { en: "It isn't expensive to start, is it?", pt: "Não é caro para começar, é?" },
      ],
      check: [
        { id: "i29c-cc1q1", prompt: { en: "Did you use at least three tag questions?", pt: "Você usou pelo menos três tag questions?" }, options: ["Yes", "No", "Partially"], answer: "Yes", explanation: { en: "Self-check: tag questions to invite reaction.", pt: "Autoavaliação: tag questions para convidar reação." } },
        { id: "i29c-cc1q2", prompt: { en: "Did you use at least two hobby vocabulary words?", pt: "Você usou pelo menos duas palavras de vocabulário de hobbies?" }, options: ["Yes", "No", "Partially"], answer: "Yes", explanation: { en: "Self-check: hobbies vocabulary from this unit.", pt: "Autoavaliação: vocabulário de hobbies desta unidade." } },
      ],
    },
    lessonReview: {
      summary: {
        en: "You talked about hobbies and free time, and used tag questions to check information and invite agreement.",
        pt: "Você falou sobre hobbies e tempo livre, e usou tag questions para checar informações e convidar concordância.",
      },
      canDo: [
        { en: "I can talk about hobbies and free-time activities.", pt: "Consigo falar sobre hobbies e atividades de tempo livre." },
        { en: "I can form tag questions with the correct auxiliary and polarity.", pt: "Consigo formar tag questions com o auxiliar e a polaridade corretos." },
        { en: "I can use small talk expressions to start a casual conversation.", pt: "Consigo usar expressões de conversa fiada para começar uma conversa casual." },
      ],
      next: { en: "Next unit: workplace — combining clauses fluently in complex sentences.", pt: "Próxima unidade: ambiente de trabalho — combinando orações fluentemente em frases complexas." },
    },
  },
};
