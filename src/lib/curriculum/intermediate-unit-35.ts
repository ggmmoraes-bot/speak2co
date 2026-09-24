import type { CourseUnit } from "./types";

/**
 * Intermediate — Unit 35 (Better Than Before). Conteúdo autoral Speak2Co.
 * Foco: adjetivos comparativos (-er / more + adjective, good/bad irregulares)
 * para comparar opções, e revisão de "going to" para planos.
 * Personagens originais: Dev e Priya, amigos alugando um carro para uma viagem.
 */
export const INTERMEDIATE_U35: CourseUnit = {
  code: "INTERMEDIATE-U35",
  number: 35,
  title: "Better Than Before — Which one is better?",
  titlePt: "Melhor do que Antes — Qual é melhor?",
  cefr: "B1",
  objective: {
    en: "Compare two or more options using comparative adjectives (regular and irregular) to make a decision.",
    pt: "Comparar duas ou mais opções usando adjetivos comparativos (regulares e irregulares) para tomar uma decisão.",
  },
  communicationGoal: {
    en: "Compare products or plans and explain which one is better, cheaper, bigger or more comfortable.",
    pt: "Comparar produtos ou planos e explicar qual é melhor, mais barato, maior ou mais confortável.",
  },
  prerequisites: {
    en: "Intermediate course: 'be going to' for plans and predictions, and basic adjectives.",
    pt: "Curso Intermediate: 'be going to' para planos e previsões, e adjetivos básicos.",
  },
  newContent: {
    en: "Grammar: comparative adjectives (-er / more + adjective; good → better, bad → worse) + 'than' | Vocabulary: car rental (12 items) | Expressions: making a decision",
    pt: "Gramática: adjetivos comparativos (-er / more + adjetivo; good → better, bad → worse) + 'than' | Vocabulário: aluguel de carro (12 itens) | Expressões: tomar uma decisão",
  },
  reviewContent: {
    en: "Review of 'be going to' for plans and predictions.",
    pt: "Revisão de 'be going to' para planos e previsões.",
  },
  discover: {
    id: "INTERMEDIATE-U35-DISCOVER",
    warmUp: {
      prompt: {
        en: "Look at the picture. There are two cars in the rental lot. Which one looks better for a long trip? Why?",
        pt: "Observe a imagem. Há dois carros no pátio de aluguel. Qual parece melhor para uma viagem longa? Por quê?",
      },
      phrases: [
        { en: "This car looks smaller than that one.", pt: "Este carro parece menor do que aquele." },
        { en: "Which is more comfortable, a car or a van?", pt: "Qual é mais confortável, um carro ou uma van?" },
        { en: "Is a bigger car always better for a trip?", pt: "Um carro maior é sempre melhor para uma viagem?" },
      ],
    },
    context: {
      situation: {
        en: "Dev and Priya are at a car rental agency, planning a road trip to the coast. The agent shows them two options: a compact red car and a bigger blue van.",
        pt: "Dev e Priya estão em uma locadora de carros, planejando uma viagem de estrada até o litoral. O agente mostra duas opções: um carro compacto vermelho e uma van azul maior.",
      },
      dialogue: [
        { who: "Agent", en: "Here are your two options. The red car is cheaper than the van.", pt: "Aqui estão suas duas opções. O carro vermelho é mais barato do que a van." },
        { who: "Priya", en: "It's cheaper, but is it more comfortable than the van for a long trip?", pt: "É mais barato, mas é mais confortável do que a van para uma viagem longa?" },
        { who: "Agent", en: "Actually, the van is more spacious and better for four people.", pt: "Na verdade, a van é mais espaçosa e melhor para quatro pessoas." },
        { who: "Dev", en: "But is the van's mileage worse than the car's?", pt: "Mas o consumo da van é pior do que o do carro?" },
        { who: "Agent", en: "A little worse, yes, but the insurance is cheaper for the van this month.", pt: "Um pouco pior, sim, mas o seguro está mais barato para a van este mês." },
        { who: "Priya", en: "Hmm. We're going to travel with four friends and a lot of bags.", pt: "Hmm. Vamos viajar com quatro amigos e muitas malas." },
        { who: "Dev", en: "Then the van is a better deal than the car, even with the mileage.", pt: "Então a van é um negócio melhor do que o carro, mesmo com o consumo." },
        { who: "Priya", en: "Agreed. Let's go for it. It's worth it for more space.", pt: "Concordo. Vamos com essa. Vale a pena por mais espaço." },
      ],
    },
    vocabulary: [
      { term: "rental", pt: "aluguel", ipa: "/ˈrentl/", definition: "The act of paying to use something for a period of time.", example: "We booked a car rental for the whole week.", examplePt: "Reservamos um aluguel de carro para a semana toda." },
      { term: "deal", pt: "negócio, oferta", ipa: "/diːl/", definition: "An agreement or arrangement, often with a good price.", example: "This is a great deal for a weekend trip.", examplePt: "Este é um ótimo negócio para uma viagem de fim de semana." },
      { term: "mileage", pt: "consumo, quilometragem", ipa: "/ˈmaɪlɪdʒ/", definition: "The distance a vehicle can travel using a certain amount of fuel.", example: "This car has better mileage than the van.", examplePt: "Este carro tem melhor consumo do que a van." },
      { term: "insurance", pt: "seguro", ipa: "/ɪnˈʃʊrəns/", definition: "A payment that protects you against costs from accidents or damage.", example: "The insurance for the van is cheaper this month.", examplePt: "O seguro da van está mais barato este mês." },
      { term: "spacious", pt: "espaçoso", ipa: "/ˈspeɪʃəs/", definition: "Having a lot of space; roomy.", example: "The van is more spacious than the car.", examplePt: "A van é mais espaçosa do que o carro." },
      { term: "compact", pt: "compacto", ipa: "/kəmˈpækt/", definition: "Small and taking up little space.", example: "A compact car is easier to park.", examplePt: "Um carro compacto é mais fácil de estacionar." },
      { term: "upgrade", pt: "upgrade, melhoria", ipa: "/ˈʌpɡreɪd/", definition: "A change to something better or more advanced.", example: "We paid for an upgrade to a bigger car.", examplePt: "Pagamos por um upgrade para um carro maior." },
      { term: "deposit", pt: "depósito, caução", ipa: "/dɪˈpɑːzɪt/", definition: "Money paid in advance as a guarantee.", example: "You need to leave a deposit to rent the van.", examplePt: "Você precisa deixar um depósito para alugar a van." },
      { term: "receipt", pt: "recibo", ipa: "/rɪˈsiːt/", definition: "A paper that proves you paid for something.", example: "Don't forget to ask for the receipt.", examplePt: "Não esqueça de pedir o recibo." },
      { term: "trunk", pt: "porta-malas", ipa: "/trʌŋk/", definition: "The space at the back of a car for luggage.", example: "The van's trunk is bigger than the car's.", examplePt: "O porta-malas da van é maior do que o do carro." },
      { term: "comfortable", pt: "confortável", ipa: "/ˈkʌmftərbəl/", definition: "Providing physical ease and relaxation.", example: "The seats in the van are more comfortable.", examplePt: "Os bancos da van são mais confortáveis." },
      { term: "worth it", pt: "vale a pena", ipa: "/wɜːrθ ɪt/", definition: "Something that is good enough to justify its cost or effort.", example: "The extra space is worth it for a long trip.", examplePt: "O espaço extra vale a pena para uma viagem longa." },
    ],
    expressions: [
      { en: "It's worth it.", pt: "Vale a pena." },
      { en: "Let's go for it.", pt: "Vamos com essa. / Vamos em frente." },
      { en: "What a deal!", pt: "Que negócio bom!" },
      { en: "Even with...", pt: "Mesmo com..." },
      { en: "Agreed.", pt: "Concordo." },
      { en: "On second thought...", pt: "Pensando bem..." },
    ],
    grammar: [
      {
        title: { en: "Comparative adjectives — regular forms", pt: "Adjetivos comparativos — formas regulares" },
        examples: [
          { en: "The red car is cheaper than the van.", pt: "O carro vermelho é mais barato do que a van." },
          { en: "The van is bigger than the car.", pt: "A van é maior do que o carro." },
          { en: "This van is more spacious than that car.", pt: "Esta van é mais espaçosa do que aquele carro." },
          { en: "Is the van more comfortable than the car?", pt: "A van é mais confortável do que o carro?" },
          { en: "This trip isn't cheaper than the last one.", pt: "Esta viagem não é mais barata do que a última." },
        ],
        rule: {
          en: "Short adjectives (1 syllable, or 2 ending in -y) add -er: cheap → cheaper, big → bigger (double the last letter), easy → easier. Longer adjectives use 'more + adjective': more spacious, more comfortable. Always add 'than' before the second thing being compared.",
          pt: "Adjetivos curtos (1 sílaba, ou 2 sílabas terminados em -y) recebem -er: cheap → cheaper, big → bigger (dobra a última letra), easy → easier. Adjetivos mais longos usam 'more + adjetivo': more spacious, more comfortable. Sempre use 'than' antes da segunda coisa comparada.",
        },
        mistakes: [
          { en: "✗ more cheaper → ✓ cheaper (don't use 'more' with -er)", pt: "✗ more cheaper → ✓ cheaper (não use 'more' com -er)" },
          { en: "✗ bigger that → ✓ bigger than", pt: "✗ bigger that → ✓ bigger than" },
          { en: "✗ this car is comfortabler → ✓ this car is more comfortable", pt: "✗ this car is comfortabler → ✓ this car is more comfortable" },
        ],
      },
      {
        title: { en: "Comparative adjectives — irregular forms", pt: "Adjetivos comparativos — formas irregulares" },
        examples: [
          { en: "The van is a better deal than the car.", pt: "A van é um negócio melhor do que o carro." },
          { en: "Is the mileage worse than the car's?", pt: "O consumo é pior do que o do carro?" },
          { en: "This week's price is better than last week's.", pt: "O preço desta semana é melhor do que o da semana passada." },
          { en: "The traffic is worse than yesterday.", pt: "O trânsito está pior do que ontem." },
        ],
        rule: {
          en: "Some adjectives don't follow the regular rule: good → better, bad → worse. Use them with 'than' just like other comparatives: better than, worse than.",
          pt: "Alguns adjetivos não seguem a regra regular: good → better, bad → worse. Use com 'than' como os outros comparativos: better than, worse than.",
        },
        mistakes: [
          { en: "✗ gooder → ✓ better", pt: "✗ gooder → ✓ better" },
          { en: "✗ more bad → ✓ worse", pt: "✗ more bad → ✓ worse" },
        ],
      },
      {
        title: { en: "Review: be going to", pt: "Revisão: be going to" },
        examples: [
          { en: "We're going to travel with four friends.", pt: "Vamos viajar com quatro amigos." },
          { en: "Are you going to rent the van or the car?", pt: "Você vai alugar a van ou o carro?" },
          { en: "I'm not going to drive at night.", pt: "Eu não vou dirigir à noite." },
        ],
        rule: {
          en: "Use 'be + going to + base verb' for plans already decided, just like in earlier units.",
          pt: "Use 'be + going to + verbo base' para planos já decididos, assim como em unidades anteriores.",
        },
        mistakes: [
          { en: "✗ We going to travel. → ✓ We're going to travel.", pt: "✗ We going to travel. → ✓ We're going to travel." },
        ],
      },
    ],
    controlledPractice: [
      { id: "i35d-cp1", prompt: { en: "Complete: 'This car is ___ than that one.' (cheap)", pt: "Complete: 'This car is ___ than that one.' (cheap)" }, options: ["more cheap", "cheaper", "cheapest"], answer: "cheaper", explanation: { en: "Short adjectives add -er: cheap → cheaper.", pt: "Adjetivos curtos recebem -er: cheap → cheaper." } },
      { id: "i35d-cp2", prompt: { en: "Complete: 'The van is ___ than the car.' (spacious)", pt: "Complete: 'The van is ___ than the car.' (spacious)" }, options: ["spaciouser", "more spacious", "most spacious"], answer: "more spacious", explanation: { en: "Longer adjectives use 'more + adjective'.", pt: "Adjetivos mais longos usam 'more + adjetivo'." } },
      { id: "i35d-cp3", prompt: { en: "Choose the correct comparative of 'good'.", pt: "Escolha o comparativo correto de 'good'." }, options: ["gooder", "more good", "better"], answer: "better", explanation: { en: "'Good' is irregular: good → better.", pt: "'Good' é irregular: good → better." } },
      { id: "i35d-cp4", prompt: { en: "Complete: 'The mileage is ___ than the car's.' (bad)", pt: "Complete: 'The mileage is ___ than the car's.' (bad)" }, options: ["worse", "badder", "more bad"], answer: "worse", explanation: { en: "'Bad' is irregular: bad → worse.", pt: "'Bad' é irregular: bad → worse." } },
      { id: "i35d-cp5", prompt: { en: "Make a question: 'The van is bigger than the car.'", pt: "Faça uma pergunta: 'The van is bigger than the car.'" }, options: ["Is the van bigger than the car?", "The van is bigger than the car?", "Does the van bigger than the car?"], answer: "Is the van bigger than the car?", explanation: { en: "Invert 'be' and the subject to make a question.", pt: "Inverta 'be' e o sujeito para fazer uma pergunta." } },
    ],
    input: {
      kind: "reading",
      title: { en: "Choosing the right rental car", pt: "Escolhendo o carro de aluguel certo" },
      lines: [
        { en: "When you rent a car, price isn't the only thing to compare. A cheaper car can be worse for a long trip if it isn't comfortable.", pt: "Quando você aluga um carro, o preço não é a única coisa a comparar. Um carro mais barato pode ser pior para uma viagem longa se não for confortável." },
        { en: "A bigger van is usually more spacious, but its mileage is often worse than a compact car's.", pt: "Uma van maior geralmente é mais espaçosa, mas seu consumo costuma ser pior do que o de um carro compacto." },
        { en: "Before you decide, check the insurance and the deposit. Sometimes the more expensive option has a better deal on insurance.", pt: "Antes de decidir, verifique o seguro e o depósito. Às vezes, a opção mais cara tem um negócio melhor no seguro." },
        { en: "In the end, the best choice depends on how many people are going to travel and how much luggage you have.", pt: "No final, a melhor escolha depende de quantas pessoas vão viajar e quanta bagagem você tem." },
      ],
      questions: [
        { id: "i35d-iq1", prompt: { en: "According to the text, what is NOT always the most important thing?", pt: "De acordo com o texto, o que NÃO é sempre a coisa mais importante?" }, options: ["Price", "Mileage", "Comfort"], answer: "Price", explanation: { en: "'Price isn't the only thing to compare.'", pt: "'O preço não é a única coisa a comparar.'" } },
        { id: "i35d-iq2", prompt: { en: "What is often worse in a bigger van?", pt: "O que costuma ser pior em uma van maior?" }, options: ["Space", "Mileage", "Comfort"], answer: "Mileage", explanation: { en: "'Its mileage is often worse than a compact car's.'", pt: "'Seu consumo costuma ser pior do que o de um carro compacto.'" } },
        { id: "i35d-iq3", prompt: { en: "What does the best choice depend on?", pt: "Do que depende a melhor escolha?" }, options: ["The color of the car", "The number of people and luggage", "The name of the agency"], answer: "The number of people and luggage", explanation: { en: "'The best choice depends on how many people are going to travel and how much luggage you have.'", pt: "'A melhor escolha depende de quantas pessoas vão viajar e quanta bagagem você tem.'" } },
      ],
    },
    quickCheck: [
      { id: "i35d-qc1", prompt: { en: "What does 'spacious' mean?", pt: "O que significa 'spacious'?" }, options: ["Having a lot of space", "Very cheap", "Very small"], answer: "Having a lot of space", explanation: { en: "'Spacious' means roomy, with a lot of space.", pt: "'Spacious' significa espaçoso, com muito espaço." } },
      { id: "i35d-qc2", prompt: { en: "Choose the correct comparative form of 'easy'.", pt: "Escolha a forma comparativa correta de 'easy'." }, options: ["easyer", "easier", "more easy"], answer: "easier", explanation: { en: "Adjectives ending in -y change to -ier: easy → easier.", pt: "Adjetivos terminados em -y mudam para -ier: easy → easier." } },
      { id: "i35d-qc3", prompt: { en: "What does 'it's worth it' mean?", pt: "O que significa 'it's worth it'?" }, options: ["It's too expensive", "It's good enough to justify the cost", "It's not necessary"], answer: "It's good enough to justify the cost", explanation: { en: "'Worth it' means good enough to justify the cost or effort.", pt: "'Worth it' significa bom o suficiente para justificar o custo ou esforço." } },
      { id: "i35d-qc4", prompt: { en: "Complete: 'This deal is ___ than the other one.' (good)", pt: "Complete: 'This deal is ___ than the other one.' (good)" }, options: ["better", "gooder", "best"], answer: "better", explanation: { en: "'Good' is irregular: good → better.", pt: "'Good' é irregular: good → better." } },
    ],
  },
  communicate: {
    id: "INTERMEDIATE-U35-COMMUNICATE",
    review: [
      { en: "The red car is cheaper, but the van is more spacious. — regular comparatives.", pt: "O carro vermelho é mais barato, mas a van é mais espaçosa. — comparativos regulares." },
      { en: "The van is a better deal, even with worse mileage. — irregular comparatives.", pt: "A van é um negócio melhor, mesmo com consumo pior. — comparativos irregulares." },
      { en: "We're going to travel with four friends. — review of 'going to'.", pt: "Vamos viajar com quatro amigos. — revisão de 'going to'." },
      { en: "It's worth it. Let's go for it.", pt: "Vale a pena. Vamos com essa." },
    ],
    activities: [
      {
        id: "i35c-a1",
        title: { en: "Compare Two Options", pt: "Compare duas opções" },
        instruction: { en: "Think of two things you could buy or rent (two phones, two apartments, two trips). Compare them using at least three comparative adjectives.", pt: "Pense em duas coisas que você poderia comprar ou alugar (dois celulares, dois apartamentos, duas viagens). Compare-as usando pelo menos três adjetivos comparativos." },
        phrases: [
          { en: "This phone is more expensive, but its camera is better.", pt: "Este celular é mais caro, mas a câmera é melhor." },
          { en: "That apartment is smaller, but it's cheaper than this one.", pt: "Aquele apartamento é menor, mas é mais barato do que este." },
          { en: "The beach trip is more relaxing than the city trip.", pt: "A viagem à praia é mais relaxante do que a viagem à cidade." },
        ],
        check: [
          { id: "i35c-a1q1", prompt: { en: "Which sentence compares two things correctly?", pt: "Qual frase compara duas coisas corretamente?" }, options: ["This is more good than that.", "This is better than that.", "This is gooder than that."], answer: "This is better than that.", explanation: { en: "'Good' is irregular: good → better.", pt: "'Good' é irregular: good → better." } },
          { id: "i35c-a1q2", prompt: { en: "Complete: 'This apartment is ___ than that one.' (small)", pt: "Complete: 'This apartment is ___ than that one.' (small)" }, options: ["smaller", "more small", "smallest"], answer: "smaller", explanation: { en: "Short adjectives add -er: small → smaller.", pt: "Adjetivos curtos recebem -er: small → smaller." } },
        ],
      },
      {
        id: "i35c-a2",
        title: { en: "Renting a Car", pt: "Alugando um carro" },
        instruction: { en: "Role-play a conversation with a car rental agent. Ask about price, insurance and comfort, and decide which car is better for your trip.", pt: "Faça um role-play de uma conversa com um agente de aluguel de carros. Pergunte sobre preço, seguro e conforto, e decida qual carro é melhor para sua viagem." },
        phrases: [
          { en: "Is the insurance cheaper for the compact car?", pt: "O seguro é mais barato para o carro compacto?" },
          { en: "Which car is more comfortable for a long trip?", pt: "Qual carro é mais confortável para uma viagem longa?" },
          { en: "I think the van is a better deal for our group.", pt: "Eu acho que a van é um negócio melhor para o nosso grupo." },
        ],
        check: [
          { id: "i35c-a2q1", prompt: { en: "What do you check before renting a car, according to the unit?", pt: "O que você verifica antes de alugar um carro, de acordo com a unidade?" }, options: ["Only the color", "Price, insurance and comfort", "Only the brand"], answer: "Price, insurance and comfort", explanation: { en: "The unit compares price, insurance, mileage and comfort.", pt: "A unidade compara preço, seguro, consumo e conforto." } },
          { id: "i35c-a2q2", prompt: { en: "Complete: 'The van's trunk is ___ than the car's.' (big)", pt: "Complete: 'The van's trunk is ___ than the car's.' (big)" }, options: ["bigger", "more big", "biggest"], answer: "bigger", explanation: { en: "Short adjectives ending in one vowel + consonant double the consonant: big → bigger.", pt: "Adjetivos curtos terminados em vogal + consoante dobram a consoante: big → bigger." } },
        ],
      },
      {
        id: "i35c-a3",
        title: { en: "Plans for the Trip", pt: "Planos para a viagem" },
        instruction: { en: "Say three things you and your friends are going to do on a trip, comparing at least one option (better hotel, cheaper restaurant, etc.).", pt: "Diga três coisas que você e seus amigos vão fazer em uma viagem, comparando pelo menos uma opção (hotel melhor, restaurante mais barato, etc.)." },
        phrases: [
          { en: "We're going to stay at a hotel that's cheaper than the one downtown.", pt: "Vamos ficar em um hotel mais barato do que o do centro." },
          { en: "I'm going to choose the restaurant with better reviews.", pt: "Vou escolher o restaurante com melhores avaliações." },
          { en: "We're not going to rent the smaller car.", pt: "Não vamos alugar o carro menor." },
        ],
        check: [
          { id: "i35c-a3q1", prompt: { en: "Which sentence combines 'going to' and a comparative correctly?", pt: "Qual frase combina 'going to' e um comparativo corretamente?" }, options: ["We going to choose the cheaper hotel.", "We're going to choose the cheaper hotel.", "We're going choose the cheaper hotel."], answer: "We're going to choose the cheaper hotel.", explanation: { en: "Don't forget 'be' and 'to': We're going to + verb.", pt: "Não esqueça o 'be' e o 'to': We're going to + verbo." } },
          { id: "i35c-a3q2", prompt: { en: "Complete: 'This restaurant has ___ reviews than that one.' (good)", pt: "Complete: 'This restaurant has ___ reviews than that one.' (good)" }, options: ["gooder", "better", "more good"], answer: "better", explanation: { en: "'Good' is irregular: good → better.", pt: "'Good' é irregular: good → better." } },
        ],
      },
    ],
    challenge: {
      id: "i35c-cc1",
      title: { en: "Choose the Best Option", pt: "Escolha a melhor opção" },
      instruction: {
        en: "Out loud, compare two real options you know (two jobs, two cities, two courses). Use at least three comparative adjectives and say what you are going to choose and why.",
        pt: "Em voz alta, compare duas opções reais que você conhece (dois empregos, duas cidades, dois cursos). Use pelo menos três adjetivos comparativos e diga o que você vai escolher e por quê.",
      },
      phrases: [
        { en: "This city is bigger, but that one is cheaper to live in.", pt: "Esta cidade é maior, mas aquela é mais barata para se viver." },
        { en: "This job is more interesting, but the other one pays better.", pt: "Este emprego é mais interessante, mas o outro paga melhor." },
        { en: "I'm going to choose the option that's worth it in the end.", pt: "Vou escolher a opção que vale a pena no final." },
      ],
      check: [
        { id: "i35c-cc1q1", prompt: { en: "Did you use at least one irregular comparative (better/worse)?", pt: "Você usou pelo menos um comparativo irregular (better/worse)?" }, options: ["Yes", "No", "Partially"], answer: "Yes", explanation: { en: "Self-check: good → better, bad → worse.", pt: "Autoavaliação: good → better, bad → worse." } },
        { id: "i35c-cc1q2", prompt: { en: "Did you say what you are going to choose?", pt: "Você disse o que vai escolher?" }, options: ["Yes", "No", "Partially"], answer: "Yes", explanation: { en: "Self-check: I'm going to choose...", pt: "Autoavaliação: I'm going to choose..." } },
      ],
    },
    lessonReview: {
      summary: {
        en: "You compared options with comparative adjectives (regular and irregular), reviewed 'going to', and practiced making a decision.",
        pt: "Você comparou opções com adjetivos comparativos (regulares e irregulares), revisou 'going to' e praticou tomar uma decisão.",
      },
      canDo: [
        { en: "I can compare two things with -er and 'more'.", pt: "Consigo comparar duas coisas com -er e 'more'." },
        { en: "I can use 'better' and 'worse' correctly.", pt: "Consigo usar 'better' e 'worse' corretamente." },
        { en: "I can explain which option is worth it and why.", pt: "Consigo explicar qual opção vale a pena e por quê." },
        { en: "I can talk about plans with 'going to' while comparing options.", pt: "Consigo falar de planos com 'going to' enquanto comparo opções." },
      ],
      next: { en: "Next unit: talking about more and more changes over time.", pt: "Próxima unidade: falar sobre mudanças cada vez maiores ao longo do tempo." },
    },
  },
};
