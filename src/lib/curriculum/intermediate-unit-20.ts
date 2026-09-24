import type { CourseUnit } from "./types";

/**
 * Intermediate — Unit 20 (City or Country?). Conteúdo autoral Speak2Co.
 * Foco: comparativos e superlativos de adjetivos, "as...as" para igualdade,
 * e revisão de should/shouldn't. Personagens: Bia e Diego, decidindo onde morar.
 */
export const INTERMEDIATE_U20: CourseUnit = {
  code: "INTERMEDIATE-U20",
  number: 20,
  title: "City or Country? — Which is better?",
  titlePt: "Cidade ou Campo? — Qual é melhor?",
  cefr: "B1",
  objective: {
    en: "Compare people, places and things with comparative and superlative adjectives, and express equality with 'as...as'.",
    pt: "Comparar pessoas, lugares e coisas com adjetivos comparativos e superlativos, e expressar igualdade com 'as...as'.",
  },
  communicationGoal: {
    en: "Compare two places to live and explain which one is better, worse, cheaper or more convenient.",
    pt: "Comparar dois lugares para morar e explicar qual é melhor, pior, mais barato ou mais conveniente.",
  },
  prerequisites: {
    en: "Unit 18: should/shouldn't for advice and would like to for wishes.",
    pt: "Unidade 18: should/shouldn't para conselhos e would like to para desejos.",
  },
  newContent: {
    en: "Grammar: comparative and superlative adjectives (regular and irregular); 'as...as' for equality | Vocabulary: city and countryside life (12 items) | Expressions: giving opinions when comparing",
    pt: "Gramática: adjetivos comparativos e superlativos (regulares e irregulares); 'as...as' para igualdade | Vocabulário: vida na cidade e no campo (12 itens) | Expressões: dar opiniões ao comparar",
  },
  reviewContent: {
    en: "Should/shouldn't for advice, used to give an opinion about a decision.",
    pt: "Should/shouldn't para conselhos, usado para dar uma opinião sobre uma decisão.",
  },
  discover: {
    id: "INTERMEDIATE-U20-DISCOVER",
    warmUp: {
      prompt: {
        en: "Look at the picture. Which place looks quieter, the city or the countryside?",
        pt: "Observe a imagem. Qual lugar parece mais tranquilo, a cidade ou o campo?",
      },
      phrases: [
        { en: "Is the countryside cheaper than the city?", pt: "O campo é mais barato do que a cidade?" },
        { en: "What is the best thing about living in a big city?", pt: "Qual é a melhor coisa de morar em uma cidade grande?" },
        { en: "Is your hometown as busy as the capital?", pt: "Sua cidade natal é tão movimentada quanto a capital?" },
      ],
    },
    context: {
      situation: {
        en: "Bia and Diego are talking about moving out of the old rented house. They are comparing life in the city with life in the countryside.",
        pt: "Bia e Diego estão conversando sobre se mudar da casa alugada antiga. Eles estão comparando a vida na cidade com a vida no campo.",
      },
      dialogue: [
        { who: "Bia", en: "I think the countryside is quieter than the city, but it's farther from my job.", pt: "Acho que o campo é mais tranquilo do que a cidade, mas é mais longe do meu trabalho." },
        { who: "Diego", en: "True, but the traffic here is worse than there. The commute takes forever.", pt: "Verdade, mas o trânsito aqui é pior do que lá. O trajeto demora uma eternidade." },
        { who: "Bia", en: "Rent is also cheaper in the countryside. It's the most affordable option for us.", pt: "O aluguel também é mais barato no campo. É a opção mais acessível para nós." },
        { who: "Diego", en: "I agree, but the city has the best hospitals and the fastest internet.", pt: "Concordo, mas a cidade tem os melhores hospitais e a internet mais rápida." },
        { who: "Bia", en: "That's a good point. Is the small town as safe as the city, though?", pt: "É um bom ponto. Mas será que a cidade pequena é tão segura quanto a cidade grande?" },
        { who: "Diego", en: "Actually, small towns are usually safer than big cities. Less crime.", pt: "Na verdade, cidades pequenas geralmente são mais seguras do que cidades grandes. Menos crime." },
        { who: "Bia", en: "So the countryside seems better for our lifestyle now.", pt: "Então o campo parece melhor para o nosso estilo de vida agora." },
        { who: "Diego", en: "I think so. It's the friendliest place we've visited.", pt: "Acho que sim. É o lugar mais amigável que já visitamos." },
      ],
    },
    vocabulary: [
      { term: "countryside", pt: "campo, zona rural", ipa: "/ˈkʌntrisaɪd/", definition: "Land outside of towns and cities, with fields and farms.", example: "They want to live in the countryside.", examplePt: "Eles querem morar no campo." },
      { term: "traffic", pt: "trânsito", ipa: "/ˈtræfɪk/", definition: "The vehicles moving on a road at a particular time.", example: "The traffic downtown is terrible in the morning.", examplePt: "O trânsito no centro é terrível de manhã." },
      { term: "commute", pt: "trajeto (casa-trabalho)", ipa: "/kəˈmjuːt/", definition: "The journey a person makes regularly between home and work.", example: "My commute takes almost an hour.", examplePt: "Meu trajeto até o trabalho demora quase uma hora." },
      { term: "affordable", pt: "acessível (preço)", ipa: "/əˈfɔːrdəbl/", definition: "Not too expensive; something you can pay for.", example: "We found an affordable apartment near the park.", examplePt: "Encontramos um apartamento acessível perto do parque." },
      { term: "crime", pt: "crime, criminalidade", ipa: "/kraɪm/", definition: "Illegal activity, or an illegal act.", example: "There's less crime in small towns.", examplePt: "Há menos criminalidade em cidades pequenas." },
      { term: "lifestyle", pt: "estilo de vida", ipa: "/ˈlaɪfstaɪl/", definition: "The way a person or a group of people lives.", example: "A quiet lifestyle suits us better now.", examplePt: "Um estilo de vida tranquilo combina mais com a gente agora." },
      { term: "farm", pt: "fazenda", ipa: "/fɑːrm/", definition: "An area of land used to grow crops or raise animals.", example: "Her uncle owns a small farm.", examplePt: "O tio dela tem uma pequena fazenda." },
      { term: "neighbor", pt: "vizinho", ipa: "/ˈneɪbər/", definition: "A person who lives near you.", example: "Our neighbors are very friendly.", examplePt: "Nossos vizinhos são muito simpáticos." },
      { term: "crowded", pt: "lotado, cheio", ipa: "/ˈkraʊdɪd/", definition: "Full of people.", example: "The subway is always crowded at rush hour.", examplePt: "O metrô está sempre lotado na hora do rush." },
      { term: "peaceful", pt: "tranquilo, pacífico", ipa: "/ˈpiːsfəl/", definition: "Calm and quiet, without stress or noise.", example: "The village is very peaceful at night.", examplePt: "O vilarejo é muito tranquilo à noite." },
      { term: "convenient", pt: "conveniente", ipa: "/kənˈviːniənt/", definition: "Easy or useful for a particular purpose.", example: "Living near the office is very convenient.", examplePt: "Morar perto do escritório é muito conveniente." },
      { term: "hometown", pt: "cidade natal", ipa: "/ˈhoʊmtaʊn/", definition: "The town or city where a person was born or grew up.", example: "My hometown is small but lively.", examplePt: "Minha cidade natal é pequena, mas animada." },
    ],
    expressions: [
      { en: "That's a good point.", pt: "É um bom ponto." },
      { en: "I think so.", pt: "Acho que sim." },
      { en: "It seems better for...", pt: "Parece melhor para..." },
      { en: "Actually,...", pt: "Na verdade,..." },
      { en: "It takes forever.", pt: "Demora uma eternidade." },
      { en: "Less crime.", pt: "Menos crime." },
    ],
    grammar: [
      {
        title: { en: "Comparative adjectives", pt: "Adjetivos comparativos" },
        examples: [
          { en: "The countryside is quieter than the city.", pt: "O campo é mais tranquilo do que a cidade." },
          { en: "Rent is cheaper in the countryside.", pt: "O aluguel é mais barato no campo." },
          { en: "The traffic here is worse than there.", pt: "O trânsito aqui é pior do que lá." },
          { en: "Small towns are more affordable than big cities.", pt: "Cidades pequenas são mais acessíveis do que cidades grandes." },
        ],
        rule: {
          en: "For short adjectives, add '-er + than' (quiet → quieter). For adjectives ending in a consonant + y, change y to i and add '-er' (friendly → friendlier). For long adjectives (2+ syllables), use 'more + adjective + than'. Some adjectives are irregular: good → better, bad → worse.",
          pt: "Para adjetivos curtos, adicione '-er + than' (quiet → quieter). Para adjetivos terminados em consoante + y, mude y para i e adicione '-er' (friendly → friendlier). Para adjetivos longos (2+ sílabas), use 'more + adjetivo + than'. Alguns adjetivos são irregulares: good → better, bad → worse.",
        },
        mistakes: [
          { en: "✗ The city is more busy than the countryside. → ✓ The city is busier than the countryside.", pt: "✗ The city is more busy than the countryside. → ✓ The city is busier than the countryside." },
          { en: "✗ This place is gooder than that one. → ✓ This place is better than that one.", pt: "✗ This place is gooder than that one. → ✓ This place is better than that one." },
        ],
      },
      {
        title: { en: "Superlative adjectives", pt: "Adjetivos superlativos" },
        examples: [
          { en: "It's the most affordable option for us.", pt: "É a opção mais acessível para nós." },
          { en: "The city has the best hospitals.", pt: "A cidade tem os melhores hospitais.", },
          { en: "It's the friendliest place we've visited.", pt: "É o lugar mais amigável que já visitamos." },
          { en: "That was the worst commute of my life.", pt: "Aquele foi o pior trajeto da minha vida." },
        ],
        rule: {
          en: "For short adjectives, use 'the + adjective + -est' (quiet → the quietest). For long adjectives, use 'the most + adjective'. Irregular forms: good → the best, bad → the worst. Superlatives compare one thing to all the others in a group.",
          pt: "Para adjetivos curtos, use 'the + adjetivo + -est' (quiet → the quietest). Para adjetivos longos, use 'the most + adjetivo'. Formas irregulares: good → the best, bad → the worst. Superlativos comparam uma coisa com todas as outras de um grupo.",
        },
        mistakes: [
          { en: "✗ It's the most quiet place. → ✓ It's the quietest place.", pt: "✗ It's the most quiet place. → ✓ It's the quietest place." },
          { en: "✗ It's the bestest hospital. → ✓ It's the best hospital.", pt: "✗ It's the bestest hospital. → ✓ It's the best hospital." },
        ],
      },
      {
        title: { en: "As...as — equality", pt: "As...as — igualdade" },
        examples: [
          { en: "Is the small town as safe as the city?", pt: "A cidade pequena é tão segura quanto a cidade grande?" },
          { en: "This apartment isn't as convenient as the last one.", pt: "Este apartamento não é tão conveniente quanto o anterior." },
          { en: "Our new neighbors are as friendly as the old ones.", pt: "Nossos novos vizinhos são tão simpáticos quanto os antigos." },
        ],
        rule: {
          en: "Use 'as + adjective + as' to say two things are equal. Use 'not as + adjective + as' to say one thing is less than the other. This structure works with any adjective, without changing its form.",
          pt: "Use 'as + adjetivo + as' para dizer que duas coisas são iguais. Use 'not as + adjetivo + as' para dizer que uma coisa é menor que a outra. Essa estrutura funciona com qualquer adjetivo, sem mudar sua forma.",
        },
        mistakes: [
          { en: "✗ It's as quieter as the countryside. → ✓ It's as quiet as the countryside.", pt: "✗ It's as quieter as the countryside. → ✓ It's as quiet as the countryside." },
          { en: "✗ It's not so safe than the city. → ✓ It's not as safe as the city.", pt: "✗ It's not so safe than the city. → ✓ It's not as safe as the city." },
        ],
      },
    ],
    controlledPractice: [
      { id: "i20d-cp1", prompt: { en: "Complete: 'The countryside is ___ than the city.' (quiet)", pt: "Complete: 'The countryside is ___ than the city.' (quiet)" }, options: ["quieter", "more quiet", "quietest"], answer: "quieter", explanation: { en: "Short adjectives take '-er'.", pt: "Adjetivos curtos recebem '-er'." } },
      { id: "i20d-cp2", prompt: { en: "Complete: 'This is the ___ hospital in the city.' (good)", pt: "Complete: 'This is the ___ hospital in the city.' (good)" }, options: ["gooder", "best", "goodest"], answer: "best", explanation: { en: "'Good' is irregular: the best.", pt: "'Good' é irregular: the best." } },
      { id: "i20d-cp3", prompt: { en: "Complete: 'This town isn't ___ busy as the capital.'", pt: "Complete: 'This town isn't ___ busy as the capital.'" }, options: ["as", "so", "more"], answer: "as", explanation: { en: "'Not as + adjective + as' = equality/comparison.", pt: "'Not as + adjetivo + as' = igualdade/comparação." } },
      { id: "i20d-cp4", prompt: { en: "Complete: 'This apartment is ___ affordable than that one.' (affordable, long adjective)", pt: "Complete: 'This apartment is ___ affordable than that one.' (affordable, adjetivo longo)" }, options: ["more", "-er", "most"], answer: "more", explanation: { en: "Long adjectives use 'more + adjective'.", pt: "Adjetivos longos usam 'more + adjetivo'." } },
      { id: "i20d-cp5", prompt: { en: "Complete: 'The traffic today is ___ than yesterday.' (bad)", pt: "Complete: 'The traffic today is ___ than yesterday.' (bad)" }, options: ["badder", "worse", "worst"], answer: "worse", explanation: { en: "'Bad' is irregular: worse (comparative).", pt: "'Bad' é irregular: worse (comparativo)." } },
    ],
    input: {
      kind: "reading",
      title: { en: "City or countryside: making the choice", pt: "Cidade ou campo: fazendo a escolha" },
      lines: [
        { en: "Many people wonder if the city or the countryside is a better place to live.", pt: "Muitas pessoas se perguntam se a cidade ou o campo é um lugar melhor para viver." },
        { en: "Cities are usually more crowded and more expensive, but they have the best hospitals and schools.", pt: "Cidades geralmente são mais lotadas e mais caras, mas têm os melhores hospitais e escolas." },
        { en: "The countryside is often cheaper and more peaceful, and it can be as safe as, or even safer than, a big city.", pt: "O campo costuma ser mais barato e mais tranquilo, e pode ser tão seguro quanto, ou até mais seguro que, uma cidade grande." },
        { en: "For Bia and Diego, the countryside seems like the friendliest and most affordable option right now.", pt: "Para Bia e Diego, o campo parece a opção mais amigável e mais acessível no momento." },
        { en: "In the end, the best choice depends on your job, your budget and your lifestyle.", pt: "No fim, a melhor escolha depende do seu trabalho, do seu orçamento e do seu estilo de vida." },
      ],
      questions: [
        { id: "i20d-iq1", prompt: { en: "What do cities usually have, according to the text?", pt: "O que as cidades geralmente têm, de acordo com o texto?" }, options: ["The best hospitals and schools", "The cheapest rent", "The most peaceful streets"], answer: "The best hospitals and schools", explanation: { en: "'Cities... have the best hospitals and schools.'", pt: "'Cities... have the best hospitals and schools.'" } },
        { id: "i20d-iq2", prompt: { en: "How does the text describe the countryside compared to the city?", pt: "Como o texto descreve o campo em comparação com a cidade?" }, options: ["Cheaper and more peaceful", "More crowded and more expensive", "Less safe"], answer: "Cheaper and more peaceful", explanation: { en: "'The countryside is often cheaper and more peaceful.'", pt: "'The countryside is often cheaper and more peaceful.'" } },
        { id: "i20d-iq3", prompt: { en: "What does the best choice depend on?", pt: "Do que depende a melhor escolha?" }, options: ["Your job, your budget and your lifestyle", "Only the price of rent", "The size of the city"], answer: "Your job, your budget and your lifestyle", explanation: { en: "'...the best choice depends on your job, your budget and your lifestyle.'", pt: "'...the best choice depends on your job, your budget and your lifestyle.'" } },
      ],
    },
    quickCheck: [
      { id: "i20d-qc1", prompt: { en: "What does 'commute' mean?", pt: "O que significa 'commute'?" }, options: ["The journey between home and work", "A type of farm", "A crowded place"], answer: "The journey between home and work", explanation: { en: "'Commute' is the regular trip to and from work.", pt: "'Commute' é a viagem regular de ida e volta do trabalho." } },
      { id: "i20d-qc2", prompt: { en: "Choose the correct superlative for 'friendly'.", pt: "Escolha o superlativo correto para 'friendly'." }, options: ["the most friendly", "the friendliest", "the friendlyest"], answer: "the friendliest", explanation: { en: "Consonant + y → change y to i, add '-est'.", pt: "Consoante + y → mude y para i, adicione '-est'." } },
      { id: "i20d-qc3", prompt: { en: "'Full of people' means?", pt: "'Full of people' significa?" }, options: ["crowded", "peaceful", "affordable"], answer: "crowded", explanation: { en: "'Crowded' = full of people.", pt: "'Crowded' = lotado, cheio de gente." } },
      { id: "i20d-qc4", prompt: { en: "Complete: 'My town is ___ as the capital.' (not equal, busy)", pt: "Complete: 'My town is ___ as the capital.' (não igual, busy)" }, options: ["not as busy", "not busyer", "not more busy as"], answer: "not as busy", explanation: { en: "'Not as + adjective + as' expresses inequality.", pt: "'Not as + adjetivo + as' expressa desigualdade." } },
    ],
  },
  communicate: {
    id: "INTERMEDIATE-U20-COMMUNICATE",
    review: [
      { en: "The countryside is quieter than the city. — comparative.", pt: "O campo é mais tranquilo do que a cidade. — comparativo." },
      { en: "It's the most affordable option for us. — superlative.", pt: "É a opção mais acessível para nós. — superlativo." },
      { en: "Is the small town as safe as the city? — equality.", pt: "A cidade pequena é tão segura quanto a cidade grande? — igualdade." },
      { en: "Small towns are usually safer than big cities. — comparative with irregular-free adjective.", pt: "Cidades pequenas geralmente são mais seguras do que cidades grandes. — comparativo." },
    ],
    activities: [
      {
        id: "i20c-a1",
        title: { en: "City vs. Countryside", pt: "Cidade vs. Campo" },
        instruction: { en: "Compare the city and the countryside using three comparative adjectives.", pt: "Compare a cidade e o campo usando três adjetivos comparativos." },
        phrases: [
          { en: "The city is more expensive than the countryside.", pt: "A cidade é mais cara do que o campo." },
          { en: "The countryside is safer than the city.", pt: "O campo é mais seguro do que a cidade." },
          { en: "The traffic is worse in the city.", pt: "O trânsito é pior na cidade." },
        ],
        check: [
          { id: "i20c-a1q1", prompt: { en: "Which is a comparative sentence?", pt: "Qual frase é comparativa?" }, options: ["The city is busier than the countryside.", "The city is the busiest place.", "The city is busy."], answer: "The city is busier than the countryside.", explanation: { en: "Comparatives use '-er/more + than'.", pt: "Comparativos usam '-er/more + than'." } },
          { id: "i20c-a1q2", prompt: { en: "Complete: 'The countryside is ___ (peaceful) than downtown.'", pt: "Complete: 'The countryside is ___ (peaceful) than downtown.'" }, options: ["more peaceful", "peacefuler", "most peaceful"], answer: "more peaceful", explanation: { en: "Long adjectives use 'more + adjective'.", pt: "Adjetivos longos usam 'more + adjetivo'." } },
        ],
      },
      {
        id: "i20c-a2",
        title: { en: "The Best of All", pt: "O Melhor de Todos" },
        instruction: { en: "Say the best and the worst thing about the place where you live now, using superlatives.", pt: "Diga a melhor e a pior coisa sobre o lugar onde você mora agora, usando superlativos." },
        phrases: [
          { en: "The best thing is the convenient location.", pt: "A melhor coisa é a localização conveniente." },
          { en: "The worst thing is the crowded streets.", pt: "A pior coisa são as ruas lotadas." },
          { en: "It's the friendliest neighborhood I know.", pt: "É o bairro mais amigável que eu conheço." },
        ],
        check: [
          { id: "i20c-a2q1", prompt: { en: "Complete: 'It's the ___ (bad) traffic in the city.'", pt: "Complete: 'It's the ___ (bad) traffic in the city.'" }, options: ["worse", "worst", "baddest"], answer: "worst", explanation: { en: "'Bad' superlative = the worst.", pt: "Superlativo de 'bad' = the worst." } },
          { id: "i20c-a2q2", prompt: { en: "Superlatives usually begin with?", pt: "Superlativos geralmente começam com?" }, options: ["the", "a", "more"], answer: "the", explanation: { en: "Superlatives use 'the' before the adjective.", pt: "Superlativos usam 'the' antes do adjetivo." } },
        ],
      },
      {
        id: "i20c-a3",
        title: { en: "As Good As?", pt: "Tão Bom Quanto?" },
        instruction: { en: "Compare your hometown to another city using 'as...as' and 'not as...as'.", pt: "Compare sua cidade natal com outra cidade usando 'as...as' e 'not as...as'." },
        phrases: [
          { en: "My hometown is as convenient as the capital.", pt: "Minha cidade natal é tão conveniente quanto a capital." },
          { en: "It isn't as crowded as the capital.", pt: "Não é tão lotada quanto a capital." },
          { en: "Our neighbors are as friendly as family.", pt: "Nossos vizinhos são tão simpáticos quanto família." },
        ],
        check: [
          { id: "i20c-a3q1", prompt: { en: "Choose the correct sentence.", pt: "Escolha a frase correta." }, options: ["It's as safe as the city.", "It's as safer as the city.", "It's so safe than the city."], answer: "It's as safe as the city.", explanation: { en: "'As + adjective + as' keeps the base form.", pt: "'As + adjetivo + as' mantém a forma base." } },
          { id: "i20c-a3q2", prompt: { en: "'Not as busy as' means the place is...", pt: "'Not as busy as' significa que o lugar é..." }, options: ["less busy", "busier", "the busiest"], answer: "less busy", explanation: { en: "'Not as + adjective + as' = less than.", pt: "'Not as + adjetivo + as' = menos que." } },
        ],
      },
    ],
    challenge: {
      id: "i20c-cc1",
      title: { en: "Where Should We Move?", pt: "Para Onde Devemos Nos Mudar?" },
      instruction: {
        en: "Give a spoken opinion comparing the city and the countryside. Use at least one comparative, one superlative and one 'as...as' sentence to explain where you should move.",
        pt: "Dê uma opinião falada comparando a cidade e o campo. Use pelo menos uma frase comparativa, uma superlativa e uma com 'as...as' para explicar para onde vocês deveriam se mudar.",
      },
      phrases: [
        { en: "The countryside is cheaper and quieter than the city.", pt: "O campo é mais barato e mais tranquilo do que a cidade." },
        { en: "It's the most affordable option for our budget.", pt: "É a opção mais acessível para o nosso orçamento." },
        { en: "It isn't as convenient as the city for work, though.", pt: "Mas não é tão conveniente quanto a cidade para o trabalho." },
        { en: "I think we should move to the countryside.", pt: "Acho que devíamos nos mudar para o campo." },
      ],
      check: [
        { id: "i20c-cc1q1", prompt: { en: "Did you use a comparative and a superlative adjective?", pt: "Você usou um adjetivo comparativo e um superlativo?" }, options: ["Yes", "No", "Partially"], answer: "Yes", explanation: { en: "Self-check: comparative = -er/more + than; superlative = the -est/most.", pt: "Autoavaliação: comparativo = -er/more + than; superlativo = the -est/most." } },
        { id: "i20c-cc1q2", prompt: { en: "Did you use 'as...as' or 'not as...as' correctly?", pt: "Você usou 'as...as' ou 'not as...as' corretamente?" }, options: ["Yes", "No", "Partially"], answer: "Yes", explanation: { en: "Self-check: 'as + adjective + as' keeps the base adjective form.", pt: "Autoavaliação: 'as + adjetivo + as' mantém a forma base do adjetivo." } },
      ],
    },
    lessonReview: {
      summary: {
        en: "You compared the city and the countryside using comparative and superlative adjectives, and expressed equality with 'as...as'.",
        pt: "Você comparou a cidade e o campo usando adjetivos comparativos e superlativos, e expressou igualdade com 'as...as'.",
      },
      canDo: [
        { en: "I can compare two things with comparative adjectives.", pt: "Consigo comparar duas coisas com adjetivos comparativos." },
        { en: "I can describe the best or worst option with superlatives.", pt: "Consigo descrever a melhor ou pior opção com superlativos." },
        { en: "I can say two things are equal or not with 'as...as'.", pt: "Consigo dizer que duas coisas são iguais ou não com 'as...as'." },
        { en: "I can use vocabulary about city and countryside life.", pt: "Consigo usar vocabulário sobre a vida na cidade e no campo." },
      ],
      next: { en: "Next unit: new grammar and vocabulary building on comparisons.", pt: "Próxima unidade: nova gramática e vocabulário construindo sobre comparações." },
    },
  },
};
