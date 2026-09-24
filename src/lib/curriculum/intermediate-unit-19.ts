import type { CourseUnit } from "./types";

/**
 * Intermediate — Unit 19 (Choices, Choices). Conteúdo autoral Speak2Co.
 * Foco: comparar verbos modais (must/should/could/would) e "could" para
 * sugestões e possibilidade, com revisão de adjetivos comparativos.
 * Personagens: Bia e Diego, comprando um carro e eletrodomésticos, com a
 * ajuda de Sofia.
 */
export const INTERMEDIATE_U19: CourseUnit = {
  code: "INTERMEDIATE-U19",
  number: 19,
  title: "Choices, Choices — Which one should we get?",
  titlePt: "Escolhas, Escolhas — Qual devemos comprar?",
  cefr: "B1",
  objective: {
    en: "Compare the modal verbs 'must, should, could, would' and use 'could' for suggestions and possibility.",
    pt: "Comparar os verbos modais 'must, should, could, would' e usar 'could' para sugestões e possibilidade.",
  },
  communicationGoal: {
    en: "Discuss options and give suggestions when choosing between products, using the right modal verb.",
    pt: "Discutir opções e dar sugestões ao escolher entre produtos, usando o verbo modal certo.",
  },
  prerequisites: {
    en: "Unit 17: must/mustn't and have to. Unit 18: should/shouldn't and would like to.",
    pt: "Unidade 17: must/mustn't e have to. Unidade 18: should/shouldn't e would like to.",
  },
  newContent: {
    en: "Grammar: comparing 'must, should, could, would'; 'could' for suggestions and possibility | Vocabulary: kitchen appliances and car parts (12 items) | Expressions: talking about options",
    pt: "Gramática: comparar 'must, should, could, would'; 'could' para sugestões e possibilidade | Vocabulário: eletrodomésticos e partes do carro (12 itens) | Expressões: falar de opções",
  },
  reviewContent: {
    en: "Comparative adjectives (cheaper, more comfortable) applied to appliances and cars.",
    pt: "Adjetivos comparativos (cheaper, more comfortable) aplicados a eletrodomésticos e carros.",
  },
  discover: {
    id: "INTERMEDIATE-U19-DISCOVER",
    warmUp: {
      prompt: {
        en: "Look at the picture. What could you check before buying a used car?",
        pt: "Observe a imagem. O que você poderia verificar antes de comprar um carro usado?",
      },
      phrases: [
        { en: "What should people check before buying a car?", pt: "O que as pessoas deveriam verificar antes de comprar um carro?" },
        { en: "Which is more important: price or comfort?", pt: "O que é mais importante: preço ou conforto?" },
        { en: "Could you help me choose a new fridge?", pt: "Você poderia me ajudar a escolher uma geladeira nova?" },
      ],
    },
    context: {
      situation: {
        en: "Bia and Diego are buying a car and a few kitchen appliances for their new house. Sofia comes along to help them decide.",
        pt: "Bia e Diego estão comprando um carro e alguns eletrodomésticos para a casa nova. A Sofia vai junto para ajudar na decisão.",
      },
      dialogue: [
        { who: "Diego", en: "We must decide today. The dealer said the price goes up tomorrow.", pt: "Devemos decidir hoje. O vendedor disse que o preço aumenta amanhã." },
        { who: "Sofia", en: "You should test the engine and check the trunk size first.", pt: "Vocês deveriam testar o motor e verificar o tamanho do porta-malas primeiro." },
        { who: "Bia", en: "Good idea. We could also ask about the brakes and the tires.", pt: "Boa ideia. Também poderíamos perguntar sobre os freios e os pneus." },
        { who: "Diego", en: "This car is cheaper, but that one is more comfortable.", pt: "Esse carro é mais barato, mas aquele é mais confortável." },
        { who: "Sofia", en: "You could choose the cheaper one and save money for the kitchen.", pt: "Vocês poderiam escolher o mais barato e guardar dinheiro para a cozinha." },
        { who: "Bia", en: "Speaking of that, we still need a fridge, a blender and a microwave.", pt: "Por falar nisso, ainda precisamos de uma geladeira, um liquidificador e um micro-ondas." },
        { who: "Diego", en: "We don't have to buy everything today. We could come back next week.", pt: "Não precisamos comprar tudo hoje. Poderíamos voltar semana que vem." },
        { who: "Sofia", en: "True, but you must remember the sale ends on Sunday!", pt: "Verdade, mas vocês precisam lembrar que a promoção termina no domingo!" },
      ],
    },
    vocabulary: [
      { term: "dealer", pt: "vendedor(a) (de carros)", ipa: "/ˈdiːlər/", definition: "A person or company that sells cars.", example: "The dealer said the price goes up tomorrow.", examplePt: "O vendedor disse que o preço aumenta amanhã." },
      { term: "engine", pt: "motor", ipa: "/ˈendʒɪn/", definition: "The part of a vehicle that makes it move.", example: "You should test the engine before buying.", examplePt: "Você deveria testar o motor antes de comprar." },
      { term: "trunk", pt: "porta-malas", ipa: "/trʌŋk/", definition: "The storage space at the back of a car.", example: "Check the trunk size first.", examplePt: "Verifique o tamanho do porta-malas primeiro." },
      { term: "brakes", pt: "freios", ipa: "/breɪks/", definition: "The parts of a vehicle that make it stop.", example: "Ask about the brakes and the tires.", examplePt: "Pergunte sobre os freios e os pneus." },
      { term: "tires", pt: "pneus", ipa: "/ˈtaɪərz/", definition: "The rubber parts around a car's wheels.", example: "The tires look almost new.", examplePt: "Os pneus parecem quase novos." },
      { term: "steering wheel", pt: "volante", ipa: "/ˈstɪrɪŋ wiːl/", definition: "The wheel a driver uses to control the direction of a car.", example: "The steering wheel is a little loose.", examplePt: "O volante está um pouco frouxo." },
      { term: "fridge", pt: "geladeira", ipa: "/frɪdʒ/", definition: "A machine that keeps food cold.", example: "We still need a fridge for the kitchen.", examplePt: "Ainda precisamos de uma geladeira para a cozinha." },
      { term: "blender", pt: "liquidificador", ipa: "/ˈblendər/", definition: "A kitchen machine used to mix or crush food and drinks.", example: "I use the blender every morning for juice.", examplePt: "Uso o liquidificador toda manhã para o suco." },
      { term: "microwave", pt: "micro-ondas", ipa: "/ˈmaɪkrəweɪv/", definition: "An appliance used to heat food quickly.", example: "The microwave heats food in two minutes.", examplePt: "O micro-ondas esquenta a comida em dois minutos." },
      { term: "dishwasher", pt: "lava-louças", ipa: "/ˈdɪʃwɒʃər/", definition: "A machine that washes dishes automatically.", example: "A dishwasher could save you a lot of time.", examplePt: "Um lava-louças poderia economizar muito tempo." },
      { term: "kettle", pt: "chaleira", ipa: "/ˈketl/", definition: "A container used to boil water.", example: "The kettle is faster than the stove.", examplePt: "A chaleira é mais rápida que o fogão." },
      { term: "on sale", pt: "em promoção", ipa: "/ɒn seɪl/", definition: "Available at a lower price than usual.", example: "The kitchen appliances are on sale this week.", examplePt: "Os eletrodomésticos estão em promoção esta semana." },
    ],
    expressions: [
      { en: "Good idea.", pt: "Boa ideia." },
      { en: "Speaking of that,", pt: "Por falar nisso," },
      { en: "True, but...", pt: "Verdade, mas..." },
      { en: "save money for", pt: "guardar dinheiro para" },
      { en: "come back next week", pt: "voltar semana que vem" },
      { en: "the sale ends on Sunday", pt: "a promoção termina no domingo" },
    ],
    grammar: [
      {
        title: { en: "Comparing must, should, could and would", pt: "Comparando must, should, could e would" },
        examples: [
          { en: "We must decide today. (strong obligation)", pt: "Devemos decidir hoje. (obrigação forte)" },
          { en: "You should test the engine first. (advice)", pt: "Você deveria testar o motor primeiro. (conselho)" },
          { en: "We could ask about the brakes. (suggestion/possibility)", pt: "Poderíamos perguntar sobre os freios. (sugestão/possibilidade)" },
          { en: "I'd like to buy the cheaper car. (wish)", pt: "Eu gostaria de comprar o carro mais barato. (desejo)" },
        ],
        rule: {
          en: "'Must' expresses strong obligation or a rule; 'should' gives advice or an opinion; 'could' offers a suggestion or a possibility (weaker than should, not an order); 'would' (with 'like to') expresses a wish. All four use the base verb, with no 's' and no 'to' after them (except 'would like to').",
          pt: "'Must' expressa obrigação forte ou regra; 'should' dá conselho ou opinião; 'could' oferece uma sugestão ou possibilidade (mais fraco que should, não é ordem); 'would' (com 'like to') expressa um desejo. Todos os quatro usam o verbo base, sem 's' e sem 'to' depois (exceto 'would like to').",
        },
        mistakes: [
          { en: "✗ We could to ask about the brakes. → ✓ We could ask about the brakes. (no 'to')", pt: "✗ We could to ask about the brakes. → ✓ We could ask about the brakes. (sem 'to')" },
          { en: "✗ She coulds help us. → ✓ She could help us.", pt: "✗ She coulds help us. → ✓ She could help us." },
        ],
      },
      {
        title: { en: "Could — suggestions and possibility", pt: "Could — sugestões e possibilidade" },
        examples: [
          { en: "You could choose the cheaper one.", pt: "Você poderia escolher o mais barato." },
          { en: "We could come back next week.", pt: "Poderíamos voltar semana que vem." },
          { en: "Could you help me choose a fridge?", pt: "Você poderia me ajudar a escolher uma geladeira?" },
          { en: "It could rain later, so let's take an umbrella.", pt: "Pode ser que chova mais tarde, então vamos levar um guarda-chuva." },
        ],
        rule: {
          en: "Use 'could + base verb' to suggest an option (softer than 'should') or to talk about something that is possible, not certain. 'Could you...?' is also a polite way to ask for help.",
          pt: "Use 'could + verbo base' para sugerir uma opção (mais suave que 'should') ou para falar de algo possível, não certo. 'Could you...?' também é uma forma educada de pedir ajuda.",
        },
        mistakes: [
          { en: "✗ Could you to help me? → ✓ Could you help me?", pt: "✗ Could you to help me? → ✓ Could you help me?" },
          { en: "✗ We could to buy it later. → ✓ We could buy it later.", pt: "✗ We could to buy it later. → ✓ We could buy it later." },
        ],
      },
      {
        title: { en: "Review: comparative adjectives", pt: "Revisão: adjetivos comparativos" },
        examples: [
          { en: "This car is cheaper than that one.", pt: "Esse carro é mais barato que aquele." },
          { en: "That car is more comfortable than this one.", pt: "Aquele carro é mais confortável que esse." },
          { en: "The kettle is faster than the stove.", pt: "A chaleira é mais rápida que o fogão." },
          { en: "Is the dishwasher more expensive than the microwave?", pt: "O lava-louças é mais caro que o micro-ondas?" },
        ],
        rule: {
          en: "Add '-er' to short adjectives (cheap → cheaper, fast → faster) and use 'more' before long adjectives (comfortable → more comfortable, expensive → more expensive), followed by 'than'.",
          pt: "Adicione '-er' em adjetivos curtos (cheap → cheaper, fast → faster) e use 'more' antes de adjetivos longos (comfortable → more comfortable, expensive → more expensive), seguido de 'than'.",
        },
        mistakes: [
          { en: "✗ This car is more cheap. → ✓ This car is cheaper.", pt: "✗ This car is more cheap. → ✓ This car is cheaper." },
          { en: "✗ It's comfortabler. → ✓ It's more comfortable.", pt: "✗ It's comfortabler. → ✓ It's more comfortable." },
        ],
      },
    ],
    controlledPractice: [
      { id: "i19d-cp1", prompt: { en: "Which verb expresses strong obligation? 'We ___ decide today.'", pt: "Qual verbo expressa obrigação forte? 'We ___ decide today.'" }, options: ["must", "could", "would"], answer: "must", explanation: { en: "'Must' = strong obligation.", pt: "'Must' = obrigação forte." } },
      { id: "i19d-cp2", prompt: { en: "Which verb is a softer suggestion? 'We ___ ask about the brakes.'", pt: "Qual verbo é uma sugestão mais suave? 'We ___ ask about the brakes.'" }, options: ["must", "could", "have to"], answer: "could", explanation: { en: "'Could' = softer suggestion.", pt: "'Could' = sugestão mais suave." } },
      { id: "i19d-cp3", prompt: { en: "Choose the polite request.", pt: "Escolha o pedido educado." }, options: ["Could you help me?", "You must help me.", "Helps me?"], answer: "Could you help me?", explanation: { en: "'Could you...?' is a polite request.", pt: "'Could you...?' é um pedido educado." } },
      { id: "i19d-cp4", prompt: { en: "Complete: 'This fridge is ___ than that one.' (cheap)", pt: "Complete: 'This fridge is ___ than that one.' (cheap)" }, options: ["more cheap", "cheaper", "cheapest"], answer: "cheaper", explanation: { en: "Short adjective + '-er'.", pt: "Adjetivo curto + '-er'." } },
      { id: "i19d-cp5", prompt: { en: "Complete: 'This car is ___ than the other one.' (comfortable)", pt: "Complete: 'This car is ___ than the other one.' (comfortable)" }, options: ["comfortabler", "more comfortable", "most comfortable"], answer: "more comfortable", explanation: { en: "Long adjective needs 'more'.", pt: "Adjetivo longo precisa de 'more'." } },
    ],
    input: {
      kind: "reading",
      title: { en: "Buying guide: cars and kitchen appliances", pt: "Guia de compras: carros e eletrodomésticos" },
      lines: [
        { en: "Before you buy a car, you should test the engine and check the trunk size.", pt: "Antes de comprar um carro, você deveria testar o motor e verificar o tamanho do porta-malas." },
        { en: "You could also ask the dealer about the brakes and the tires.", pt: "Você também poderia perguntar ao vendedor sobre os freios e os pneus." },
        { en: "A cheaper car isn't always the best choice, but it can save you money.", pt: "Um carro mais barato nem sempre é a melhor escolha, mas pode economizar dinheiro." },
        { en: "For the kitchen, you must decide between a fridge, a blender, a microwave and a dishwasher.", pt: "Para a cozinha, você deve decidir entre uma geladeira, um liquidificador, um micro-ondas e um lava-louças." },
        { en: "Remember: you don't have to buy everything at once, but sales usually end soon!", pt: "Lembre-se: você não precisa comprar tudo de uma vez, mas as promoções geralmente acabam logo!" },
      ],
      questions: [
        { id: "i19d-iq1", prompt: { en: "What should you do before buying a car?", pt: "O que você deveria fazer antes de comprar um carro?" }, options: ["Test the engine and check the trunk", "Buy the most expensive one", "Wait one year"], answer: "Test the engine and check the trunk", explanation: { en: "'You should test the engine and check the trunk size.'", pt: "'Você deveria testar o motor e verificar o porta-malas.'" } },
        { id: "i19d-iq2", prompt: { en: "Is a cheaper car always the best choice?", pt: "Um carro mais barato é sempre a melhor escolha?" }, options: ["Yes, always", "No, but it can save money", "No, it's never a good choice"], answer: "No, but it can save money", explanation: { en: "'A cheaper car isn't always the best choice, but it can save you money.'", pt: "'Nem sempre é a melhor escolha, mas pode economizar dinheiro.'" } },
        { id: "i19d-iq3", prompt: { en: "Do you have to buy everything at once?", pt: "Você precisa comprar tudo de uma vez?" }, options: ["Yes, you must", "No, you don't have to", "No, you mustn't"], answer: "No, you don't have to", explanation: { en: "'You don't have to buy everything at once.'", pt: "'Você não precisa comprar tudo de uma vez.'" } },
      ],
    },
    quickCheck: [
      { id: "i19d-qc1", prompt: { en: "What is a 'trunk'?", pt: "O que é 'trunk'?" }, options: ["The storage space at the back of a car", "A kitchen appliance", "A type of tire"], answer: "The storage space at the back of a car", explanation: { en: "A trunk stores luggage in a car.", pt: "O porta-malas guarda bagagem no carro." } },
      { id: "i19d-qc2", prompt: { en: "Which appliance heats food quickly?", pt: "Qual eletrodoméstico esquenta comida rapidamente?" }, options: ["microwave", "blender", "kettle"], answer: "microwave", explanation: { en: "A microwave heats food fast.", pt: "O micro-ondas esquenta comida rápido." } },
      { id: "i19d-qc3", prompt: { en: "Choose the strongest obligation.", pt: "Escolha a obrigação mais forte." }, options: ["We could decide.", "We must decide.", "We would decide."], answer: "We must decide.", explanation: { en: "'Must' is the strongest of the four.", pt: "'Must' é o mais forte dos quatro." } },
      { id: "i19d-qc4", prompt: { en: "Complete: 'The dishwasher is ___ than the kettle.' (expensive)", pt: "Complete: 'The dishwasher is ___ than the kettle.' (expensive)" }, options: ["expensiver", "more expensive", "most expensive"], answer: "more expensive", explanation: { en: "Long adjective needs 'more'.", pt: "Adjetivo longo precisa de 'more'." } },
    ],
  },
  communicate: {
    id: "INTERMEDIATE-U19-COMMUNICATE",
    review: [
      { en: "We must decide today. — strong obligation.", pt: "Devemos decidir hoje. — obrigação forte." },
      { en: "You should test the engine first. — advice.", pt: "Você deveria testar o motor primeiro. — conselho." },
      { en: "We could ask about the brakes. — suggestion.", pt: "Poderíamos perguntar sobre os freios. — sugestão." },
      { en: "This car is cheaper, but that one is more comfortable. — comparing.", pt: "Esse carro é mais barato, mas aquele é mais confortável. — comparando." },
    ],
    activities: [
      {
        id: "i19c-a1",
        title: { en: "Choosing a Car", pt: "Escolhendo um carro" },
        instruction: { en: "Compare two cars using 'cheaper', 'more comfortable' and give one suggestion with 'could'.", pt: "Compare dois carros usando 'cheaper', 'more comfortable' e dê uma sugestão com 'could'." },
        phrases: [
          { en: "This car is cheaper than that one.", pt: "Esse carro é mais barato que aquele." },
          { en: "That car is more comfortable, but it's older.", pt: "Aquele carro é mais confortável, mas é mais velho." },
          { en: "We could test both engines before deciding.", pt: "Poderíamos testar os dois motores antes de decidir." },
        ],
        check: [
          { id: "i19c-a1q1", prompt: { en: "Which sentence is a suggestion?", pt: "Qual frase é uma sugestão?" }, options: ["We must buy it now.", "We could test both engines.", "We mustn't test it."], answer: "We could test both engines.", explanation: { en: "'Could' = suggestion.", pt: "'Could' = sugestão." } },
          { id: "i19c-a1q2", prompt: { en: "Complete: 'This car is ___ than that one.' (cheap)", pt: "Complete: 'This car is ___ than that one.' (cheap)" }, options: ["cheaper", "more cheap", "cheapest"], answer: "cheaper", explanation: { en: "Short adjective + '-er'.", pt: "Adjetivo curto + '-er'." } },
        ],
      },
      {
        id: "i19c-a2",
        title: { en: "Kitchen Shopping List", pt: "Lista de compras da cozinha" },
        instruction: { en: "Say what you must buy, what you could buy later, and what you'd like to have.", pt: "Diga o que você deve comprar, o que poderia comprar depois e o que gostaria de ter." },
        phrases: [
          { en: "I must buy a fridge this week.", pt: "Preciso comprar uma geladeira essa semana." },
          { en: "I could buy the dishwasher next month.", pt: "Eu poderia comprar o lava-louças mês que vem." },
          { en: "I'd like to have a nice kettle too.", pt: "Eu também gostaria de ter uma chaleira legal." },
        ],
        check: [
          { id: "i19c-a2q1", prompt: { en: "Complete: 'I ___ buy the fridge this week. It's urgent.'", pt: "Complete: 'I ___ buy the fridge this week. It's urgent.'" }, options: ["could", "must", "would"], answer: "must", explanation: { en: "Urgent = strong obligation = must.", pt: "Urgente = obrigação forte = must." } },
          { id: "i19c-a2q2", prompt: { en: "Complete: 'I ___ like to have a nice kettle.'", pt: "Complete: 'I ___ like to have a nice kettle.'" }, options: ["would", "could", "must"], answer: "would", explanation: { en: "Wish = would like to.", pt: "Desejo = would like to." } },
        ],
      },
      {
        id: "i19c-a3",
        title: { en: "Could You Help Me?", pt: "Você poderia me ajudar?" },
        instruction: { en: "Politely ask a friend for help choosing an appliance or a car, using 'Could you...?'.", pt: "Peça educadamente ajuda a um amigo para escolher um eletrodoméstico ou carro, usando 'Could you...?'." },
        phrases: [
          { en: "Could you help me choose a fridge?", pt: "Você poderia me ajudar a escolher uma geladeira?" },
          { en: "Could you check the trunk size for me?", pt: "Você poderia verificar o tamanho do porta-malas para mim?" },
          { en: "Could you come with me to the store on Saturday?", pt: "Você poderia ir comigo à loja no sábado?" },
        ],
        check: [
          { id: "i19c-a3q1", prompt: { en: "Choose the polite request.", pt: "Escolha o pedido educado." }, options: ["Could you help me?", "You must help me.", "Help me now."], answer: "Could you help me?", explanation: { en: "'Could you...?' is polite.", pt: "'Could you...?' é educado." } },
          { id: "i19c-a3q2", prompt: { en: "Fix: 'Could you to check the tires?'", pt: "Corrija: 'Could you to check the tires?'" }, options: ["Could you check the tires?", "Could you checks the tires?", "You could to check the tires?"], answer: "Could you check the tires?", explanation: { en: "No 'to' after 'could'.", pt: "Sem 'to' depois de 'could'." } },
        ],
      },
    ],
    challenge: {
      id: "i19c-cc1",
      title: { en: "Deciding Together", pt: "Decidindo juntos" },
      instruction: { en: "Talk out loud about choosing a car and a kitchen appliance. Use 'must', 'should', 'could' and a comparative adjective.", pt: "Fale em voz alta sobre escolher um carro e um eletrodoméstico. Use 'must', 'should', 'could' e um adjetivo comparativo." },
      phrases: [
        { en: "We must decide before the sale ends.", pt: "Devemos decidir antes que a promoção termine." },
        { en: "You should check the engine and the brakes first.", pt: "Você deveria verificar o motor e os freios primeiro." },
        { en: "We could also look at a smaller car.", pt: "Também poderíamos olhar um carro menor." },
        { en: "The dishwasher is more expensive, but it saves time.", pt: "O lava-louças é mais caro, mas economiza tempo." },
      ],
      check: [
        { id: "i19c-cc1q1", prompt: { en: "Did you use 'must' for a strong obligation?", pt: "Você usou 'must' para uma obrigação forte?" }, options: ["Yes", "No", "Partially"], answer: "Yes", explanation: { en: "Self-check: must = strong obligation.", pt: "Autoavaliação: must = obrigação forte." } },
        { id: "i19c-cc1q2", prompt: { en: "Did you compare two things with 'more' or '-er'?", pt: "Você comparou duas coisas com 'more' ou '-er'?" }, options: ["Yes", "No", "Partially"], answer: "Yes", explanation: { en: "Self-check: comparative adjectives.", pt: "Autoavaliação: adjetivos comparativos." } },
      ],
    },
    lessonReview: {
      summary: { en: "You compared 'must, should, could, would', used 'could' for suggestions and requests, and reviewed comparative adjectives.", pt: "Você comparou 'must, should, could, would', usou 'could' para sugestões e pedidos, e revisou adjetivos comparativos." },
      canDo: [
        { en: "I can choose the right modal verb for obligation, advice, suggestion or wish.", pt: "Consigo escolher o verbo modal certo para obrigação, conselho, sugestão ou desejo." },
        { en: "I can make polite requests with 'Could you...?'.", pt: "Consigo fazer pedidos educados com 'Could you...?'." },
        { en: "I can use kitchen appliance and car vocabulary.", pt: "Consigo usar vocabulário de eletrodomésticos e carro." },
        { en: "I can compare two things with comparative adjectives.", pt: "Consigo comparar duas coisas com adjetivos comparativos." },
      ],
      next: { en: "Next unit: the present perfect for life experiences, with vocabulary about travel.", pt: "Próxima unidade: o present perfect para experiências de vida, com vocabulário de viagens." },
    },
  },
};
