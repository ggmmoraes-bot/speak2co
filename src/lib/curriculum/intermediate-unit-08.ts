import type { CourseUnit } from "./types";

/**
 * Intermediate — Unit 8 (Environment). Conteúdo autoral Speak2Co.
 * Foco: phrasal verbs para meio ambiente e opiniões (turn off, throw away,
 * pick up, cut down, run out of, come up with, give up).
 * Personagens: Lia and Bruno, colegas de trabalho organizando uma campanha
 * ambiental no escritório.
 */
export const INTERMEDIATE_U08: CourseUnit = {
  code: "INTERMEDIATE-U08",
  number: 8,
  title: "Environment — Phrasal Verbs for Opinions and Discussions",
  titlePt: "Meio Ambiente — Phrasal Verbs para Opiniões e Discussões",
  cefr: "B1",
  objective: {
    en: "Use phrasal verbs to discuss environmental habits and give opinions about protecting the planet.",
    pt: "Usar phrasal verbs para discutir hábitos ambientais e dar opiniões sobre proteger o planeta.",
  },
  communicationGoal: {
    en: "Discuss environmental problems and solutions at work, using phrasal verbs to describe everyday green habits.",
    pt: "Discutir problemas e soluções ambientais no trabalho, usando phrasal verbs para descrever hábitos sustentáveis do dia a dia.",
  },
  prerequisites: {
    en: "Intermediate units 1–7: future forms, present perfect continuous, phrasal verbs for daily life, past continuous, collocations and past perfect.",
    pt: "Unidades Intermediate 1–7: formas do futuro, present perfect continuous, phrasal verbs do dia a dia, past continuous, collocations e past perfect.",
  },
  newContent: {
    en: "Grammar/Vocabulary: phrasal verbs for the environment (turn off, throw away, pick up, cut down (on), run out of, come up with, give up) | Expressions: giving and supporting opinions",
    pt: "Gramática/Vocabulário: phrasal verbs sobre meio ambiente (turn off, throw away, pick up, cut down (on), run out of, come up with, give up) | Expressões: dar e sustentar opiniões",
  },
  reviewContent: {
    en: "Review of present simple and present continuous to describe habits and ongoing actions.",
    pt: "Revisão do presente simples e presente contínuo para descrever hábitos e ações em andamento.",
  },
  discover: {
    id: "INTERMEDIATE-U08-DISCOVER",
    warmUp: {
      prompt: {
        en: "Look at the picture. What are the people doing to help the environment?",
        pt: "Observe a imagem. O que as pessoas estão fazendo para ajudar o meio ambiente?",
      },
      phrases: [
        { en: "Do you turn off the lights when you leave a room?", pt: "Você apaga as luzes quando sai de um cômodo?" },
        { en: "How often do you throw away plastic bottles?", pt: "Com que frequência você joga fora garrafas de plástico?" },
        { en: "What do you do to help the environment?", pt: "O que você faz para ajudar o meio ambiente?" },
      ],
    },
    context: {
      situation: {
        en: "Lia and Bruno work together in a small office. Their company wants to start a green campaign, and they are planning the first ideas.",
        pt: "Lia e Bruno trabalham juntos em um escritório pequeno. A empresa deles quer começar uma campanha verde, e eles estão planejando as primeiras ideias.",
      },
      dialogue: [
        { who: "Lia", en: "Bruno, we run out of recycling bins every week. Can we order more?", pt: "Bruno, ficamos sem lixeiras de reciclagem toda semana. Podemos pedir mais?" },
        { who: "Bruno", en: "Good idea. Also, people never turn off the computers at night.", pt: "Boa ideia. Além disso, as pessoas nunca desligam os computadores à noite." },
        { who: "Lia", en: "Right. And they throw away paper that could be reused.", pt: "Certo. E jogam fora papel que poderia ser reaproveitado." },
        { who: "Bruno", en: "What if we come up with a poster campaign? 'Pick up your trash, cut down on waste.'", pt: "E se a gente criasse uma campanha de cartazes? 'Recolha seu lixo, reduza o desperdício.'" },
        { who: "Lia", en: "I love it! We could ask everyone to give up plastic cups too.", pt: "Adorei! A gente podia pedir para todo mundo abandonar os copos de plástico também." },
        { who: "Bruno", en: "Let's not give up before we even start. Small changes make a big difference.", pt: "Não vamos desistir antes mesmo de começar. Pequenas mudanças fazem uma grande diferença." },
        { who: "Lia", en: "Agreed. Let's pick up some reusable cups this week and try it out.", pt: "Concordo. Vamos comprar (buscar) copos reutilizáveis esta semana e testar." },
        { who: "Bruno", en: "Perfect. I'll come up with a schedule and send it to everyone.", pt: "Perfeito. Vou criar um cronograma e mandar para todo mundo." },
      ],
    },
    vocabulary: [
      { term: "turn off", pt: "desligar", ipa: "/tɜːrn ɔːf/", definition: "To stop a machine or light from working.", example: "Please turn off the lights when you leave.", examplePt: "Por favor, apague as luzes quando sair." },
      { term: "throw away", pt: "jogar fora", ipa: "/θroʊ əˈweɪ/", definition: "To get rid of something you don't need.", example: "Don't throw away the paper. Recycle it.", examplePt: "Não jogue o papel fora. Recicle." },
      { term: "pick up", pt: "pegar, recolher", ipa: "/pɪk ʌp/", definition: "To lift or collect something from a surface.", example: "Please pick up the trash on the street.", examplePt: "Por favor, recolha o lixo na rua." },
      { term: "cut down (on)", pt: "reduzir", ipa: "/kʌt daʊn/", definition: "To reduce the amount of something.", example: "We need to cut down on plastic waste.", examplePt: "Precisamos reduzir o desperdício de plástico." },
      { term: "run out of", pt: "ficar sem", ipa: "/rʌn aʊt əv/", definition: "To have no more of something left.", example: "We ran out of recycling bins again.", examplePt: "Ficamos sem lixeiras de reciclagem de novo." },
      { term: "come up with", pt: "criar, ter uma ideia", ipa: "/kʌm ʌp wɪð/", definition: "To think of a plan or idea.", example: "Let's come up with a new campaign.", examplePt: "Vamos criar uma nova campanha." },
      { term: "give up", pt: "desistir, abandonar", ipa: "/ɡɪv ʌp/", definition: "To stop doing something.", example: "Don't give up on your environmental goals.", examplePt: "Não desista das suas metas ambientais." },
      { term: "recycle", pt: "reciclar", ipa: "/riːˈsaɪkəl/", definition: "To process used material so it can be used again.", example: "We recycle paper, glass and plastic here.", examplePt: "Aqui reciclamos papel, vidro e plástico." },
      { term: "waste", pt: "desperdício; desperdiçar", ipa: "/weɪst/", definition: "Materials that are not useful and are thrown away, or to use something carelessly.", example: "Food waste is a big problem in restaurants.", examplePt: "O desperdício de comida é um grande problema em restaurantes." },
      { term: "reusable", pt: "reutilizável", ipa: "/riːˈjuːzəbəl/", definition: "Something that can be used more than once.", example: "I always carry a reusable cup.", examplePt: "Eu sempre carrego um copo reutilizável." },
      { term: "pollution", pt: "poluição", ipa: "/pəˈluːʃən/", definition: "Damage caused to air, water or land by harmful substances.", example: "Air pollution is worse in big cities.", examplePt: "A poluição do ar é pior nas grandes cidades." },
      { term: "campaign", pt: "campanha", ipa: "/kæmˈpeɪn/", definition: "A planned set of activities to achieve a goal.", example: "The company started a recycling campaign.", examplePt: "A empresa começou uma campanha de reciclagem." },
    ],
    expressions: [
      { en: "What if we…?", pt: "E se a gente…?" },
      { en: "I love it!", pt: "Adorei!" },
      { en: "Let's not give up.", pt: "Não vamos desistir." },
      { en: "Small changes make a big difference.", pt: "Pequenas mudanças fazem uma grande diferença." },
      { en: "Let's try it out.", pt: "Vamos testar." },
      { en: "Agreed.", pt: "Concordo." },
    ],
    grammar: [
      {
        title: { en: "Phrasal verbs — separable and inseparable", pt: "Phrasal verbs — separáveis e inseparáveis" },
        examples: [
          { en: "Turn off the lights. / Turn the lights off. / Turn them off.", pt: "Apague as luzes. (Com pronome, o verbo deve ser separado: turn them off.)" },
          { en: "Don't throw away the paper. / Don't throw it away.", pt: "Não jogue o papel fora. / Não jogue fora." },
          { en: "We ran out of bins. (inseparable — no object between the words)", pt: "Ficamos sem lixeiras. (inseparável — nada entre as palavras)" },
          { en: "Let's come up with an idea. (inseparable)", pt: "Vamos criar uma ideia. (inseparável)" },
        ],
        rule: {
          en: "Some phrasal verbs are separable: the object can go between the verb and particle, or after it (turn off the lights / turn the lights off), but a pronoun must go in the middle (turn them off). Others are inseparable: the object always comes after the whole phrasal verb (run out of milk, come up with a plan).",
          pt: "Alguns phrasal verbs são separáveis: o objeto pode ficar entre o verbo e a partícula, ou depois (turn off the lights / turn the lights off), mas um pronome deve ficar no meio (turn them off). Outros são inseparáveis: o objeto sempre vem depois de todo o phrasal verb (run out of milk, come up with a plan).",
        },
        mistakes: [
          { en: "✗ Turn off them. → ✓ Turn them off. (pronoun goes in the middle)", pt: "✗ Turn off them. → ✓ Turn them off. (pronome fica no meio)" },
          { en: "✗ We ran the milk out of. → ✓ We ran out of milk. (inseparable)", pt: "✗ We ran the milk out of. → ✓ We ran out of milk. (inseparável)" },
        ],
      },
      {
        title: { en: "Giving opinions about the environment", pt: "Dando opiniões sobre o meio ambiente" },
        examples: [
          { en: "I think we should cut down on plastic.", pt: "Acho que deveríamos reduzir o plástico." },
          { en: "In my opinion, recycling makes a big difference.", pt: "Na minha opinião, reciclar faz uma grande diferença." },
          { en: "I don't think we should give up so easily.", pt: "Acho que não deveríamos desistir tão facilmente." },
        ],
        rule: {
          en: "Use 'I think (that)...', 'In my opinion,...' and 'I don't think (that)...' followed by a full sentence to share opinions politely and clearly.",
          pt: "Use 'I think (that)...', 'In my opinion,...' e 'I don't think (that)...' seguidos de uma frase completa para expressar opiniões de forma educada e clara.",
        },
        mistakes: [
          { en: "✗ In my opinion I think... → ✓ In my opinion,... (don't combine both)", pt: "✗ In my opinion I think... → ✓ In my opinion,... (não combine as duas)" },
          { en: "✗ I not think so. → ✓ I don't think so.", pt: "✗ I not think so. → ✓ I don't think so." },
        ],
      },
    ],
    controlledPractice: [
      { id: "i8d-cp1", prompt: { en: "Complete: 'Please ___ the lights when you leave.'", pt: "Complete: 'Please ___ the lights when you leave.'" }, options: ["turn off", "throw away", "run out of"], answer: "turn off", explanation: { en: "'Turn off' means to stop a light or machine from working.", pt: "'Turn off' significa desligar uma luz ou máquina." } },
      { id: "i8d-cp2", prompt: { en: "Rewrite with a pronoun: 'Turn off the computer.'", pt: "Reescreva com pronome: 'Turn off the computer.'" }, options: ["Turn off it.", "Turn it off.", "Turn off the it."], answer: "Turn it off.", explanation: { en: "With a pronoun, separate the phrasal verb.", pt: "Com pronome, separe o phrasal verb." } },
      { id: "i8d-cp3", prompt: { en: "Complete: 'We ___ recycling bins again.'", pt: "Complete: 'We ___ recycling bins again.'" }, options: ["ran out of", "came up with", "gave up"], answer: "ran out of", explanation: { en: "'Run out of' means to have no more of something.", pt: "'Run out of' significa ficar sem algo." } },
      { id: "i8d-cp4", prompt: { en: "Which phrasal verb means 'to think of a plan'?", pt: "Qual phrasal verb significa 'pensar em um plano'?" }, options: ["come up with", "throw away", "pick up"], answer: "come up with", explanation: { en: "'Come up with' means to create an idea or plan.", pt: "'Come up with' significa criar uma ideia ou plano." } },
      { id: "i8d-cp5", prompt: { en: "Complete: 'Don't ___ on your goals.'", pt: "Complete: 'Don't ___ on your goals.'" }, options: ["give up", "cut down", "pick up"], answer: "give up", explanation: { en: "'Give up' means to stop doing something.", pt: "'Give up' significa desistir de algo." } },
    ],
    input: {
      kind: "reading",
      title: { en: "The Office Green Challenge", pt: "O Desafio Verde do Escritório" },
      lines: [
        { en: "Last month, our office decided to cut down on waste and started a green challenge.", pt: "No mês passado, nosso escritório decidiu reduzir o desperdício e começou um desafio verde." },
        { en: "First, we asked everyone to turn off their computers at the end of the day.", pt: "Primeiro, pedimos para todos desligarem os computadores no fim do dia." },
        { en: "Then, we came up with a rule: nobody can throw away paper without trying to reuse it first.", pt: "Depois, criamos uma regra: ninguém pode jogar papel fora sem tentar reaproveitá-lo primeiro." },
        { en: "We also ran out of plastic cups on purpose and gave everyone a reusable one instead.", pt: "Também ficamos sem copos de plástico de propósito e demos um reutilizável para cada um." },
        { en: "In the end, nobody gave up, and now we pick up less trash every week.", pt: "No final, ninguém desistiu, e agora recolhemos menos lixo toda semana." },
      ],
      questions: [
        { id: "i8d-iq1", prompt: { en: "What did the office ask people to do at the end of the day?", pt: "O que o escritório pediu para as pessoas fazerem no fim do dia?" }, options: ["Throw away paper", "Turn off their computers", "Pick up trash"], answer: "Turn off their computers", explanation: { en: "'We asked everyone to turn off their computers.'", pt: "'Pedimos para todos desligarem os computadores.'" } },
        { id: "i8d-iq2", prompt: { en: "What is the new rule about paper?", pt: "Qual é a nova regra sobre papel?" }, options: ["Nobody can use paper.", "Try to reuse it before throwing it away.", "Buy more paper."], answer: "Try to reuse it before throwing it away.", explanation: { en: "'Nobody can throw away paper without trying to reuse it first.'", pt: "'Ninguém pode jogar papel fora sem tentar reaproveitá-lo primeiro.'" } },
        { id: "i8d-iq3", prompt: { en: "What happened with plastic cups?", pt: "O que aconteceu com os copos de plástico?" }, options: ["They bought more.", "They ran out of them on purpose.", "They threw them away."], answer: "They ran out of them on purpose.", explanation: { en: "'We ran out of plastic cups on purpose.'", pt: "'Ficamos sem copos de plástico de propósito.'" } },
      ],
    },
    quickCheck: [
      { id: "i8d-qc1", prompt: { en: "What does 'recycle' mean?", pt: "O que significa 'recycle'?" }, options: ["To throw something away", "To process material to use again", "To buy something new"], answer: "To process material to use again", explanation: { en: "Recycling turns used materials into new products.", pt: "Reciclar transforma materiais usados em novos produtos." } },
      { id: "i8d-qc2", prompt: { en: "Choose the correct sentence.", pt: "Escolha a frase correta." }, options: ["We need cut down on waste.", "We need to cut down on waste.", "We need cutting down on waste."], answer: "We need to cut down on waste.", explanation: { en: "'Need to' is followed by a base verb.", pt: "'Need to' é seguido de verbo base." } },
      { id: "i8d-qc3", prompt: { en: "'Pollution' means...", pt: "'Pollution' significa..." }, options: ["Damage to air, water or land", "A reusable object", "A green campaign"], answer: "Damage to air, water or land", explanation: { en: "Pollution is harmful damage to the environment.", pt: "Poluição é o dano causado ao meio ambiente." } },
      { id: "i8d-qc4", prompt: { en: "Complete: 'In my opinion, ___ makes a difference.'", pt: "Complete: 'In my opinion, ___ makes a difference.'" }, options: ["recycle", "recycling", "recycled"], answer: "recycling", explanation: { en: "After a preposition/subject position, use the -ing form as a noun.", pt: "Na posição de sujeito, use a forma -ing como substantivo." } },
    ],
  },
  communicate: {
    id: "INTERMEDIATE-U08-COMMUNICATE",
    review: [
      { en: "Turn off the lights. / Turn them off.", pt: "Apague as luzes. / Apague-as." },
      { en: "We ran out of recycling bins.", pt: "Ficamos sem lixeiras de reciclagem." },
      { en: "Let's come up with a new campaign.", pt: "Vamos criar uma nova campanha." },
      { en: "In my opinion, small changes make a big difference.", pt: "Na minha opinião, pequenas mudanças fazem uma grande diferença." },
    ],
    activities: [
      {
        id: "i8c-a1",
        title: { en: "My Green Habits", pt: "Meus hábitos verdes" },
        instruction: { en: "Say three environmental habits you have, using phrasal verbs from this unit.", pt: "Diga três hábitos ambientais que você tem, usando phrasal verbs desta unidade." },
        phrases: [
          { en: "I always turn off the lights when I leave a room.", pt: "Sempre apago as luzes quando saio de um cômodo." },
          { en: "I try to cut down on plastic bags.", pt: "Eu tento reduzir o uso de sacolas plásticas." },
          { en: "I never throw away paper without recycling it.", pt: "Nunca jogo papel fora sem reciclar." },
        ],
        check: [
          { id: "i8c-a1q1", prompt: { en: "Which phrasal verb means 'to reduce'?", pt: "Qual phrasal verb significa 'reduzir'?" }, options: ["cut down on", "pick up", "give up"], answer: "cut down on", explanation: { en: "'Cut down on' means to reduce the amount of something.", pt: "'Cut down on' significa reduzir a quantidade de algo." } },
          { id: "i8c-a1q2", prompt: { en: "Complete: 'I ___ the lights every night.'", pt: "Complete: 'I ___ the lights every night.'" }, options: ["turn off", "turns off", "turning off"], answer: "turn off", explanation: { en: "Present simple with 'I': base form.", pt: "Presente simples com 'I': forma base." } },
        ],
      },
      {
        id: "i8c-a2",
        title: { en: "Office Green Rules", pt: "Regras verdes do escritório" },
        instruction: { en: "Give your opinion about three rules an office should have to help the environment.", pt: "Dê sua opinião sobre três regras que um escritório deveria ter para ajudar o meio ambiente." },
        phrases: [
          { en: "I think everyone should turn off their computers at night.", pt: "Acho que todos deveriam desligar os computadores à noite." },
          { en: "In my opinion, the office should give up plastic cups.", pt: "Na minha opinião, o escritório deveria abandonar os copos de plástico." },
          { en: "I don't think we should waste so much paper.", pt: "Acho que não deveríamos desperdiçar tanto papel." },
        ],
        check: [
          { id: "i8c-a2q1", prompt: { en: "Choose the correct opinion structure.", pt: "Escolha a estrutura de opinião correta." }, options: ["In my opinion I think...", "In my opinion,...", "My opinion is I think..."], answer: "In my opinion,...", explanation: { en: "Don't combine 'in my opinion' with 'I think'.", pt: "Não combine 'in my opinion' com 'I think'." } },
          { id: "i8c-a2q2", prompt: { en: "Which phrasal verb means 'to stop doing something'?", pt: "Qual phrasal verb significa 'parar de fazer algo'?" }, options: ["give up", "come up with", "run out of"], answer: "give up", explanation: { en: "'Give up' means to stop doing something.", pt: "'Give up' significa desistir de algo." } },
        ],
      },
      {
        id: "i8c-a3",
        title: { en: "Solve a Problem: The Office Ran Out of Bins", pt: "Resolver um Problema: O Escritório Ficou Sem Lixeiras" },
        instruction: { en: "The office ran out of recycling bins. Discuss ideas to solve the problem.", pt: "O escritório ficou sem lixeiras de reciclagem. Discuta ideias para resolver o problema." },
        phrases: [
          { en: "We ran out of bins, so let's come up with a solution.", pt: "Ficamos sem lixeiras, então vamos criar uma solução." },
          { en: "Why don't we pick up some boxes to use instead?", pt: "Por que não pegamos algumas caixas para usar em vez disso?" },
          { en: "Let's not give up. We can order more tomorrow.", pt: "Não vamos desistir. Podemos pedir mais amanhã." },
        ],
        check: [
          { id: "i8c-a3q1", prompt: { en: "Complete: 'We ___ bins, so we need a plan.'", pt: "Complete: 'We ___ bins, so we need a plan.'" }, options: ["ran out of", "picked up", "turned off"], answer: "ran out of", explanation: { en: "'Run out of' means to have no more of something.", pt: "'Run out of' significa ficar sem algo." } },
          { id: "i8c-a3q2", prompt: { en: "Which phrasal verb fits: 'Let's ___ a solution.'", pt: "Qual phrasal verb combina: 'Let's ___ a solution.'" }, options: ["come up with", "throw away", "give up"], answer: "come up with", explanation: { en: "'Come up with' means to think of a plan.", pt: "'Come up with' significa criar um plano." } },
        ],
      },
    ],
    challenge: {
      id: "i8c-cc1",
      title: { en: "Present Your Green Campaign", pt: "Apresente sua Campanha Verde" },
      instruction: {
        en: "Present a short green campaign for your workplace or home out loud. Use at least four phrasal verbs from this unit and give your opinion about why it matters.",
        pt: "Apresente em voz alta uma pequena campanha verde para seu trabalho ou sua casa. Use pelo menos quatro phrasal verbs desta unidade e dê sua opinião sobre a importância dela.",
      },
      phrases: [
        { en: "Our campaign asks everyone to turn off the lights and cut down on plastic.", pt: "Nossa campanha pede para todos apagarem as luzes e reduzirem o plástico." },
        { en: "We came up with a poster to remind people not to throw away paper.", pt: "Criamos um cartaz para lembrar as pessoas de não jogar papel fora." },
        { en: "In my opinion, if we don't give up, we can really make a difference.", pt: "Na minha opinião, se não desistirmos, podemos realmente fazer a diferença." },
      ],
      check: [
        { id: "i8c-cc1q1", prompt: { en: "Did you use at least four phrasal verbs?", pt: "Você usou pelo menos quatro phrasal verbs?" }, options: ["Yes", "No", "Partially"], answer: "Yes", explanation: { en: "Self-check: turn off, throw away, come up with, give up, etc.", pt: "Autoavaliação: turn off, throw away, come up with, give up, etc." } },
        { id: "i8c-cc1q2", prompt: { en: "Did you give an opinion with 'I think' or 'In my opinion'?", pt: "Você deu uma opinião com 'I think' ou 'In my opinion'?" }, options: ["Yes", "No", "Partially"], answer: "Yes", explanation: { en: "Self-check: opinion structures for discussions.", pt: "Autoavaliação: estruturas de opinião para discussões." } },
      ],
    },
    lessonReview: {
      summary: {
        en: "You learned phrasal verbs for environmental habits, discussed office green rules and gave your opinion about protecting the planet.",
        pt: "Você aprendeu phrasal verbs sobre hábitos ambientais, discutiu regras verdes de escritório e deu sua opinião sobre proteger o planeta.",
      },
      canDo: [
        { en: "I can use phrasal verbs like turn off, throw away and pick up.", pt: "Consigo usar phrasal verbs como turn off, throw away e pick up." },
        { en: "I can talk about running out of things and coming up with solutions.", pt: "Consigo falar sobre ficar sem algo e criar soluções." },
        { en: "I can give my opinion with 'I think' and 'In my opinion'.", pt: "Consigo dar minha opinião com 'I think' e 'In my opinion'." },
        { en: "I can discuss environmental habits at work and at home.", pt: "Consigo discutir hábitos ambientais no trabalho e em casa." },
      ],
      next: { en: "Next unit: education — reviewing future forms to talk about learning and the future of school.", pt: "Próxima unidade: educação — revisar formas do futuro para falar sobre aprendizado e o futuro da escola." },
    },
  },
};
