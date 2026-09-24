import type { CourseUnit } from "./types";

/**
 * Intermediate — Unit 36 (Lessons 113-114). Conteúdo autoral Speak2Co.
 * More and More — double comparatives for describing ongoing change.
 */
export const INTERMEDIATE_U36: CourseUnit = {
  code: "INTERMEDIATE-U36",
  number: 36,
  title: "More and More — Is your city changing more and more every year?",
  titlePt: "Cada Vez Mais — Sua cidade está mudando cada vez mais a cada ano?",
  cefr: "B1",
  objective: {
    en: "Describe ongoing change over time using double comparatives (more and more / -er and -er).",
    pt: "Descrever mudanças contínuas ao longo do tempo usando double comparatives (more and more / -er and -er).",
  },
  communicationGoal: {
    en: "Talk about how life, cities and habits are changing over the years.",
    pt: "Falar sobre como a vida, as cidades e os hábitos estão mudando ao longo dos anos.",
  },
  prerequisites: {
    en: "Comparative adjectives (bigger, more expensive), present continuous.",
    pt: "Adjetivos comparativos (bigger, more expensive), presente contínuo.",
  },
  newContent: {
    en: "Grammar: double comparatives — 'more and more' / '-er and -er' | Vocabulary: change and city life (10 items) | Expressions: to be honest, it seems like, over the years",
    pt: "Gramática: double comparatives — 'more and more' / '-er and -er' | Vocabulário: mudança e vida na cidade (10 itens) | Expressões: to be honest, it seems like, over the years",
  },
  reviewContent: {
    en: "Comparative adjectives; present continuous for current trends.",
    pt: "Adjetivos comparativos; presente contínuo para tendências atuais.",
  },
  discover: {
    id: "INTERMEDIATE-U36-DISCOVER",
    warmUp: {
      prompt: {
        en: "Look at the picture. Do you think this park has changed a lot over the years? What changes more and more every year in your city?",
        pt: "Observe a imagem. Você acha que esse parque mudou muito ao longo dos anos? O que muda cada vez mais a cada ano na sua cidade?",
      },
      phrases: [
        { en: "This park looks quiet, but the city around it is probably changing fast.", pt: "Esse parque parece tranquilo, mas a cidade ao redor provavelmente está mudando rápido." },
        { en: "What is getting more and more expensive where you live?", pt: "O que está ficando cada vez mais caro onde você mora?" },
        { en: "Is traffic getting worse and worse in your city?", pt: "O trânsito está ficando cada vez pior na sua cidade?" },
      ],
    },
    context: {
      situation: {
        en: "Camila meets her old friend Thiago in the same park where they used to play as kids. They talk about how the city has changed.",
        pt: "Camila encontra seu velho amigo Thiago no mesmo parque onde brincavam quando crianças. Eles falam sobre como a cidade mudou.",
      },
      dialogue: [
        { who: "Thiago", en: "Camila! It's been years. This park looks the same, but everything else seems more and more different.", pt: "Camila! Faz anos. Esse parque parece o mesmo, mas tudo o mais parece cada vez mais diferente." },
        { who: "Camila", en: "I know. Rent is getting higher and higher, and it's harder and harder to find parking downtown.", pt: "Eu sei. O aluguel está ficando cada vez mais alto, e está cada vez mais difícil achar estacionamento no centro." },
        { who: "Thiago", en: "To be honest, I don't recognize half the streets anymore. New buildings keep appearing.", pt: "Para ser sincero, eu não reconheço mais metade das ruas. Novos prédios continuam aparecendo." },
        { who: "Camila", en: "It seems like more and more people are moving here for work.", pt: "Parece que cada vez mais pessoas estão se mudando para cá por causa do trabalho." },
        { who: "Thiago", en: "True, but over the years the traffic has also gotten worse and worse.", pt: "Verdade, mas ao longo dos anos o trânsito também ficou cada vez pior." },
        { who: "Camila", en: "At least this neighborhood is getting greener and greener with all these new trees.", pt: "Pelo menos esse bairro está ficando cada vez mais verde com todas essas árvores novas." },
        { who: "Thiago", en: "That's a good change. I guess not everything is getting worse.", pt: "Essa é uma boa mudança. Acho que nem tudo está piorando." },
        { who: "Camila", en: "Exactly. Some things change for the better, and some just get more and more complicated.", pt: "Exatamente. Algumas coisas mudam para melhor, e outras só ficam cada vez mais complicadas." },
      ],
    },
    vocabulary: [
      { term: "neighborhood", pt: "bairro", ipa: "/ˈneɪbərhʊd/", definition: "A district or area within a city.", example: "This neighborhood has changed a lot.", examplePt: "Esse bairro mudou muito." },
      { term: "rent", pt: "aluguel", ipa: "/rent/", definition: "Money you pay to live in a place you don't own.", example: "Rent is getting higher every year.", examplePt: "O aluguel está ficando mais alto a cada ano." },
      { term: "traffic", pt: "trânsito", ipa: "/ˈtræfɪk/", definition: "The vehicles moving on a road.", example: "Traffic gets worse and worse downtown.", examplePt: "O trânsito fica cada vez pior no centro." },
      { term: "downtown", pt: "centro (da cidade)", ipa: "/ˌdaʊnˈtaʊn/", definition: "The central business area of a city.", example: "It's hard to find parking downtown.", examplePt: "É difícil achar estacionamento no centro." },
      { term: "population", pt: "população", ipa: "/ˌpɒpjuˈleɪʃən/", definition: "The number of people living in a place.", example: "The population is growing more and more.", examplePt: "A população está crescendo cada vez mais." },
      { term: "crowded", pt: "lotado", ipa: "/ˈkraʊdɪd/", definition: "Full of people.", example: "The streets are getting more and more crowded.", examplePt: "As ruas estão ficando cada vez mais lotadas." },
      { term: "construction", pt: "construção", ipa: "/kənˈstrʌkʃən/", definition: "The activity of building something.", example: "There's construction on every corner now.", examplePt: "Tem construção em cada esquina agora." },
      { term: "recognize", pt: "reconhecer", ipa: "/ˈrekəɡnaɪz/", definition: "To know someone or something because you have seen it before.", example: "I don't recognize this street anymore.", examplePt: "Eu não reconheço mais essa rua." },
      { term: "appear", pt: "aparecer", ipa: "/əˈpɪr/", definition: "To start to exist or become visible.", example: "New buildings keep appearing.", examplePt: "Novos prédios continuam aparecendo." },
      { term: "complicated", pt: "complicado", ipa: "/ˈkɒmplɪkeɪtɪd/", definition: "Difficult to understand or deal with.", example: "Life in a big city can get more and more complicated.", examplePt: "A vida numa cidade grande pode ficar cada vez mais complicada." },
    ],
    expressions: [
      { en: "To be honest, I don't recognize this street.", pt: "Para ser sincero, eu não reconheço essa rua." },
      { en: "It seems like more people are moving here.", pt: "Parece que mais pessoas estão se mudando para cá." },
      { en: "Over the years, things have changed a lot.", pt: "Ao longo dos anos, as coisas mudaram muito." },
      { en: "It's been years!", pt: "Faz anos!" },
      { en: "I guess not everything is getting worse.", pt: "Acho que nem tudo está piorando." },
    ],
    grammar: [
      {
        title: { en: "Double comparatives — describing ongoing change", pt: "Double comparatives — descrevendo mudança contínua" },
        examples: [
          { en: "Rent is getting higher and higher.", pt: "O aluguel está ficando cada vez mais alto." },
          { en: "It's harder and harder to find parking.", pt: "Está cada vez mais difícil achar estacionamento." },
          { en: "More and more people are moving here.", pt: "Cada vez mais pessoas estão se mudando para cá." },
          { en: "The traffic has gotten worse and worse.", pt: "O trânsito ficou cada vez pior." },
        ],
        rule: {
          en: "To show that something keeps increasing or changing over time, repeat the comparative form joined by 'and'. Short adjectives: adjective+er and adjective+er (bigger and bigger). Long adjectives: more and more + adjective (more and more expensive). For nouns/quantities, use 'more and more' + noun (more and more people). Irregular: worse and worse, better and better.",
          pt: "Para mostrar que algo continua aumentando ou mudando com o tempo, repita a forma comparativa unida por 'and'. Adjetivos curtos: adjetivo+er and adjetivo+er (bigger and bigger). Adjetivos longos: more and more + adjetivo (more and more expensive). Para substantivos/quantidades, use 'more and more' + substantivo (more and more people). Irregulares: worse and worse, better and better.",
        },
        mistakes: [
          { en: "✗ more expensive and more expensive → ✓ more and more expensive", pt: "✗ more expensive and more expensive → ✓ more and more expensive" },
          { en: "✗ gooder and gooder → ✓ better and better", pt: "✗ gooder and gooder → ✓ better and better" },
        ],
      },
    ],
    controlledPractice: [
      { id: "i36d-cp1", prompt: { en: "Complete: 'The city is getting ___ crowded.'", pt: "Complete: 'The city is getting ___ crowded.'" }, options: ["more and more", "more expensive", "much more"], answer: "more and more", explanation: { en: "Long adjectives use 'more and more + adjective'.", pt: "Adjetivos longos usam 'more and more + adjetivo'." } },
      { id: "i36d-cp2", prompt: { en: "Choose the correct sentence.", pt: "Escolha a frase correta." }, options: ["It's getting harder and harder.", "It's getting hard and hard.", "It's getting more harder and harder."], answer: "It's getting harder and harder.", explanation: { en: "Short adjectives repeat the -er form: harder and harder.", pt: "Adjetivos curtos repetem a forma -er: harder and harder." } },
      { id: "i36d-cp3", prompt: { en: "Complete: 'Traffic is getting ___.'", pt: "Complete: 'Traffic is getting ___.'" }, options: ["worse and worse", "bad and bad", "more bad"], answer: "worse and worse", explanation: { en: "'Bad' is irregular: worse and worse.", pt: "'Bad' é irregular: worse and worse." } },
      { id: "i36d-cp4", prompt: { en: "What does 'downtown' mean?", pt: "O que significa 'downtown'?" }, options: ["The central area of a city", "A type of park", "A quiet neighborhood"], answer: "The central area of a city", explanation: { en: "Downtown = centro da cidade.", pt: "Downtown = centro da cidade." } },
      { id: "i36d-cp5", prompt: { en: "Complete: 'More and more people ___ moving here.'", pt: "Complete: 'More and more people ___ moving here.'" }, options: ["are", "is", "was"], answer: "are", explanation: { en: "'People' is plural, so use 'are'.", pt: "'People' é plural, então use 'are'." } },
    ],
    input: {
      kind: "reading",
      title: { en: "A Changing City", pt: "Uma Cidade em Mudança" },
      lines: [
        { en: "Twenty years ago, this was a small, quiet town. Today, it's getting bigger and bigger every year.", pt: "Vinte anos atrás, isso era uma cidade pequena e tranquila. Hoje, ela está ficando cada vez maior a cada ano." },
        { en: "More and more people are moving here for work, and rent keeps getting higher and higher.", pt: "Cada vez mais pessoas estão se mudando para cá por causa do trabalho, e o aluguel continua ficando cada vez mais alto." },
        { en: "To be honest, the streets are more and more crowded, and traffic gets worse and worse during rush hour.", pt: "Para ser sincero, as ruas estão cada vez mais lotadas, e o trânsito fica cada vez pior na hora do rush." },
        { en: "It seems like new buildings appear every month, and it's harder and harder to recognize old neighborhoods.", pt: "Parece que novos prédios aparecem todo mês, e está cada vez mais difícil reconhecer bairros antigos." },
        { en: "Over the years, though, the city has also gotten greener and greener, with more parks than before.", pt: "Ao longo dos anos, porém, a cidade também ficou cada vez mais verde, com mais parques do que antes." },
      ],
      questions: [
        { id: "i36d-iq1", prompt: { en: "What is happening to rent in the city?", pt: "O que está acontecendo com o aluguel na cidade?" }, options: ["It keeps getting higher and higher.", "It's getting lower and lower.", "It hasn't changed."], answer: "It keeps getting higher and higher.", explanation: { en: "'Rent keeps getting higher and higher.'", pt: "'O aluguel continua ficando cada vez mais alto.'" } },
        { id: "i36d-iq2", prompt: { en: "What gets worse during rush hour?", pt: "O que piora na hora do rush?" }, options: ["Traffic", "Rent", "The parks"], answer: "Traffic", explanation: { en: "'Traffic gets worse and worse during rush hour.'", pt: "'O trânsito fica cada vez pior na hora do rush.'" } },
        { id: "i36d-iq3", prompt: { en: "What positive change happened over the years?", pt: "Que mudança positiva aconteceu ao longo dos anos?" }, options: ["The city has gotten greener.", "Rent has gotten cheaper.", "Traffic disappeared."], answer: "The city has gotten greener.", explanation: { en: "'The city has also gotten greener and greener.'", pt: "'A cidade também ficou cada vez mais verde.'" } },
      ],
    },
    quickCheck: [
      { id: "i36d-qc1", prompt: { en: "What does 'crowded' mean?", pt: "O que significa 'crowded'?" }, options: ["Full of people", "Very quiet", "Very expensive"], answer: "Full of people", explanation: { en: "Crowded = lotado.", pt: "Crowded = lotado." } },
      { id: "i36d-qc2", prompt: { en: "Choose the correct double comparative.", pt: "Escolha o double comparative correto." }, options: ["more and more difficult", "difficult and difficult", "more difficult and difficult"], answer: "more and more difficult", explanation: { en: "Long adjectives use 'more and more + adjective'.", pt: "Adjetivos longos usam 'more and more + adjetivo'." } },
      { id: "i36d-qc3", prompt: { en: "What is 'population'?", pt: "O que é 'population'?" }, options: ["The number of people in a place", "A type of building", "A traffic problem"], answer: "The number of people in a place", explanation: { en: "Population = população.", pt: "Population = população." } },
      { id: "i36d-qc4", prompt: { en: "Complete: 'It's getting ___ and ___ to find parking.'", pt: "Complete: 'It's getting ___ and ___ to find parking.'" }, options: ["harder / harder", "hard / hardly", "more hard / hard"], answer: "harder / harder", explanation: { en: "Short adjectives repeat the -er form.", pt: "Adjetivos curtos repetem a forma -er." } },
    ],
  },
  communicate: {
    id: "INTERMEDIATE-U36-COMMUNICATE",
    review: [
      { en: "Rent is getting higher and higher. — double comparative with a short adjective.", pt: "O aluguel está ficando cada vez mais alto. — double comparative com adjetivo curto." },
      { en: "More and more people are moving here. — double comparative with 'more and more' + noun.", pt: "Cada vez mais pessoas estão se mudando para cá. — double comparative com 'more and more' + substantivo." },
      { en: "To be honest, it seems like the city changes over the years.", pt: "Para ser sincero, parece que a cidade muda ao longo dos anos." },
      { en: "neighborhood, rent, traffic, downtown, crowded, construction", pt: "bairro, aluguel, trânsito, centro, lotado, construção" },
    ],
    activities: [
      {
        id: "i36c-a1",
        title: { en: "My Changing City", pt: "Minha Cidade em Mudança" },
        instruction: { en: "Say three things that are getting more and more common in your city, using double comparatives.", pt: "Diga três coisas que estão ficando cada vez mais comuns na sua cidade, usando double comparatives." },
        phrases: [
          { en: "Prices are getting higher and higher.", pt: "Os preços estão ficando cada vez mais altos." },
          { en: "The streets are getting more and more crowded.", pt: "As ruas estão ficando cada vez mais lotadas." },
          { en: "It's getting harder and harder to find parking.", pt: "Está ficando cada vez mais difícil achar estacionamento." },
        ],
        check: [
          { id: "i36c-a1q1", prompt: { en: "Which sentence uses a double comparative correctly?", pt: "Qual frase usa um double comparative corretamente?" }, options: ["The city is getting bigger and bigger.", "The city is getting big and big.", "The city is getting more big and big."], answer: "The city is getting bigger and bigger.", explanation: { en: "Short adjectives repeat the -er form.", pt: "Adjetivos curtos repetem a forma -er." } },
          { id: "i36c-a1q2", prompt: { en: "Complete: 'Life in the city is getting ___ expensive.'", pt: "Complete: 'Life in the city is getting ___ expensive.'" }, options: ["more and more", "expensiver and expensiver", "much more"], answer: "more and more", explanation: { en: "Long adjectives use 'more and more'.", pt: "Adjetivos longos usam 'more and more'." } },
        ],
      },
      {
        id: "i36c-a2",
        title: { en: "Then and Now", pt: "Antes e Agora" },
        instruction: { en: "Compare your neighborhood now to how it was years ago, using expressions like 'to be honest' and 'over the years'.", pt: "Compare seu bairro agora com como era anos atrás, usando expressões como 'to be honest' e 'over the years'." },
        phrases: [
          { en: "Over the years, this neighborhood has changed a lot.", pt: "Ao longo dos anos, esse bairro mudou muito." },
          { en: "To be honest, I don't recognize some streets anymore.", pt: "Para ser sincero, eu não reconheço mais algumas ruas." },
          { en: "It seems like more and more buildings appear every year.", pt: "Parece que cada vez mais prédios aparecem a cada ano." },
        ],
        check: [
          { id: "i36c-a2q1", prompt: { en: "What does 'over the years' mean?", pt: "O que significa 'over the years'?" }, options: ["During a long period of time", "Yesterday", "Right now"], answer: "During a long period of time", explanation: { en: "'Over the years' refers to a long period of time.", pt: "'Over the years' se refere a um longo período de tempo." } },
          { id: "i36c-a2q2", prompt: { en: "Complete: 'To be honest, I ___ this street anymore.'", pt: "Complete: 'To be honest, I ___ this street anymore.'" }, options: ["don't recognize", "doesn't recognize", "not recognize"], answer: "don't recognize", explanation: { en: "Use 'don't' with 'I'.", pt: "Use 'don't' com 'I'." } },
        ],
      },
    ],
    challenge: {
      id: "i36c-ch1",
      title: { en: "City Interview", pt: "Entrevista sobre a Cidade" },
      instruction: { en: "Imagine a friend from another city asks you about changes where you live. Answer using double comparatives and the new expressions.", pt: "Imagine que um amigo de outra cidade te pergunta sobre mudanças onde você mora. Responda usando double comparatives e as novas expressões." },
      phrases: [
        { en: "To be honest, everything here is getting more and more expensive.", pt: "Para ser sincero, tudo aqui está ficando cada vez mais caro." },
        { en: "It seems like traffic gets worse and worse every year.", pt: "Parece que o trânsito piora cada vez mais a cada ano." },
        { en: "Over the years, more and more people have moved to this neighborhood.", pt: "Ao longo dos anos, cada vez mais pessoas se mudaram para esse bairro." },
      ],
      check: [
        { id: "i36c-ch1q1", prompt: { en: "Choose the best double comparative for a growing population.", pt: "Escolha o melhor double comparative para uma população crescente." }, options: ["More and more people live here.", "More people and more people live here.", "People live here more and more."], answer: "More and more people live here.", explanation: { en: "'More and more' goes before the noun.", pt: "'More and more' vem antes do substantivo." } },
        { id: "i36c-ch1q2", prompt: { en: "Complete: 'The traffic here gets ___ every year.'", pt: "Complete: 'The traffic here gets ___ every year.'" }, options: ["worse and worse", "bad and bad", "more worse"], answer: "worse and worse", explanation: { en: "'Bad' is irregular: worse and worse.", pt: "'Bad' é irregular: worse and worse." } },
      ],
    },
    lessonReview: {
      summary: {
        en: "You learned to describe ongoing change with double comparatives (more and more / -er and -er) and to talk about how a city changes over time.",
        pt: "Você aprendeu a descrever mudanças contínuas com double comparatives (more and more / -er and -er) e a falar sobre como uma cidade muda com o tempo.",
      },
      canDo: [
        { en: "I can use double comparatives to describe change over time.", pt: "Eu consigo usar double comparatives para descrever mudanças ao longo do tempo." },
        { en: "I can talk about city life using new vocabulary like 'crowded', 'rent' and 'traffic'.", pt: "Eu consigo falar sobre a vida na cidade usando vocabulário novo como 'crowded', 'rent' e 'traffic'." },
        { en: "I can use expressions like 'to be honest', 'it seems like' and 'over the years'.", pt: "Eu consigo usar expressões como 'to be honest', 'it seems like' e 'over the years'." },
      ],
      next: {
        en: "Next, you'll build on comparatives with more real-life speaking practice.",
        pt: "A seguir, você vai avançar nos comparativos com mais prática de fala do dia a dia.",
      },
    },
  },
};
