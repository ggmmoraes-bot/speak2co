import type { CourseUnit } from "./types";

/**
 * Intermediate — Unit 6 (A Special Day). Conteúdo autoral Speak2Co.
 * Foco: o verbo "give" (give/gave/given), números ordinais e datas,
 * e "look" + cores/adjetivos para descrever aparência.
 * Personagens originais: Marina, Theo e Rafa (mesmo trio da unidade 1).
 */
export const INTERMEDIATE_U06: CourseUnit = {
  code: "INTERMEDIATE-U06",
  number: 6,
  title: "A Special Day — What did you give her?",
  titlePt: "Um Dia Especial — O que você deu para ela?",
  cefr: "B1",
  objective: {
    en: "Talk about a birthday party: use the verb 'give' in the past, say ordinal numbers and dates, and describe how things look with colors.",
    pt: "Falar sobre uma festa de aniversário: usar o verbo 'give' no passado, dizer números ordinais e datas, e descrever a aparência das coisas com cores.",
  },
  communicationGoal: {
    en: "Describe a birthday celebration: say the date, what people gave and how the decorations look.",
    pt: "Descrever uma comemoração de aniversário: dizer a data, o que as pessoas deram e como está a decoração.",
  },
  prerequisites: {
    en: "Past Continuous for actions in progress that were interrupted by another action.",
    pt: "Past Continuous para ações em andamento que foram interrompidas por outra ação.",
  },
  newContent: {
    en: "Grammar: verb 'give' (give/gave/given) in affirmative, negative and questions; ordinal numbers (first, second, third…) and dates; 'look' + adjective/color | Vocabulary: party and colors (12 items) | Expressions: celebrating and complimenting",
    pt: "Gramática: verbo 'give' (give/gave/given) na afirmativa, negativa e perguntas; números ordinais (first, second, third…) e datas; 'look' + adjetivo/cor | Vocabulário: festa e cores (12 itens) | Expressões: celebrar e elogiar",
  },
  reviewContent: {
    en: "Past Continuous for actions in progress interrupted by another action, and irregular past forms.",
    pt: "Past Continuous para ações em andamento interrompidas por outra ação, e formas irregulares do passado.",
  },
  discover: {
    id: "INTERMEDIATE-U06-DISCOVER",
    warmUp: {
      prompt: {
        en: "Look at the picture. What day is it? What did the friends give each other? How does the table look?",
        pt: "Observe a imagem. Que dia é hoje? O que os amigos deram um ao outro? Como está a mesa?",
      },
      phrases: [
        { en: "When is your birthday?", pt: "Quando é seu aniversário?" },
        { en: "What did you give your best friend last year?", pt: "O que você deu para seu melhor amigo no ano passado?" },
        { en: "How does the room look today?", pt: "Como está a sala hoje?" },
      ],
    },
    context: {
      situation: {
        en: "It's June 21st, Marina's birthday. Theo and Rafa were setting up a surprise party when Marina walked in early.",
        pt: "É 21 de junho, aniversário da Marina. Theo e Rafa estavam preparando uma festa surpresa quando a Marina chegou mais cedo.",
      },
      dialogue: [
        { who: "Marina", en: "Wait… what's going on? Is today the twenty-first?", pt: "Espera… o que está acontecendo? Hoje é dia vinte e um?" },
        { who: "Theo", en: "Surprise! Happy birthday! We were hanging the balloons when you opened the door!", pt: "Surpresa! Feliz aniversário! Estávamos pendurando os balões quando você abriu a porta!" },
        { who: "Rafa", en: "Here, this is for you. I gave it to Theo this morning to wrap.", pt: "Aqui, isso é para você. Eu dei isso para o Theo hoje de manhã para embrulhar." },
        { who: "Marina", en: "A blue box with a golden ribbon! It looks amazing. What is it?", pt: "Uma caixa azul com um laço dourado! Está incrível. O que é?" },
        { who: "Theo", en: "Open it! Rafa didn't give me any hints, so I'm curious too.", pt: "Abre! O Rafa não me deu nenhuma dica, então eu também estou curioso." },
        { who: "Marina", en: "A red scarf! It's beautiful. Thank you so much!", pt: "Um cachecol vermelho! É lindo. Muito obrigada!" },
        { who: "Rafa", en: "You look great in red. Now, this is your third birthday with us in this apartment!", pt: "Você fica ótima de vermelho. Agora, este é o seu terceiro aniversário com a gente neste apartamento!" },
        { who: "Marina", en: "It is! And it's the best one so far. The table looks amazing, by the way.", pt: "É verdade! E é o melhor até agora. A mesa está incrível, por sinal." },
      ],
    },
    vocabulary: [
      { term: "birthday", pt: "aniversário", ipa: "/ˈbɜːrθdeɪ/", definition: "The day someone was born, celebrated every year.", example: "My birthday is in June.", examplePt: "Meu aniversário é em junho." },
      { term: "gift", pt: "presente", ipa: "/ɡɪft/", definition: "Something you give someone, usually for a special occasion.", example: "She opened her gift with a big smile.", examplePt: "Ela abriu o presente com um grande sorriso." },
      { term: "balloon", pt: "balão", ipa: "/bəˈluːn/", definition: "A colorful rubber object filled with air, used at parties.", example: "We hung blue and yellow balloons on the wall.", examplePt: "Penduramos balões azuis e amarelos na parede." },
      { term: "ribbon", pt: "laço, fita", ipa: "/ˈrɪbən/", definition: "A thin strip of material used to decorate gifts.", example: "The box had a golden ribbon on top.", examplePt: "A caixa tinha um laço dourado em cima." },
      { term: "surprise", pt: "surpresa", ipa: "/sərˈpraɪz/", definition: "Something unexpected that happens.", example: "It was a surprise party for Marina.", examplePt: "Foi uma festa surpresa para a Marina." },
      { term: "scarf", pt: "cachecol", ipa: "/skɑːrf/", definition: "A piece of clothing worn around the neck.", example: "I gave her a red scarf for her birthday.", examplePt: "Eu dei a ela um cachecol vermelho de aniversário." },
      { term: "candle", pt: "vela", ipa: "/ˈkændl/", definition: "A stick of wax with a flame, often on a birthday cake.", example: "Blow out the candles and make a wish!", examplePt: "Apague as velas e faça um pedido!" },
      { term: "golden", pt: "dourado", ipa: "/ˈɡoʊldən/", definition: "The color of gold.", example: "The ribbon was golden and shiny.", examplePt: "O laço era dourado e brilhante." },
      { term: "silver", pt: "prateado", ipa: "/ˈsɪlvər/", definition: "The color of silver, a light gray metal color.", example: "She wore a silver necklace.", examplePt: "Ela usava um colar prateado." },
      { term: "hint", pt: "dica", ipa: "/hɪnt/", definition: "A small clue about something.", example: "Give me a hint about my gift!", examplePt: "Me dá uma dica sobre meu presente!" },
      { term: "curious", pt: "curioso", ipa: "/ˈkjʊriəs/", definition: "Wanting to know or learn something.", example: "I'm curious about the surprise.", examplePt: "Estou curioso sobre a surpresa." },
      { term: "so far", pt: "até agora", ipa: "/soʊ fɑːr/", definition: "Until this moment.", example: "This is the best party so far.", examplePt: "Esta é a melhor festa até agora." },
    ],
    expressions: [
      { en: "What's going on?", pt: "O que está acontecendo?" },
      { en: "Happy birthday!", pt: "Feliz aniversário!" },
      { en: "This is for you.", pt: "Isso é para você." },
      { en: "It looks amazing.", pt: "Está incrível." },
      { en: "You look great in red.", pt: "Você fica ótima de vermelho." },
      { en: "so far", pt: "até agora" },
    ],
    grammar: [
      {
        title: { en: "The verb 'give' (give/gave/given)", pt: "O verbo 'give' (give/gave/given)" },
        examples: [
          { en: "Rafa gave Marina a gift.", pt: "O Rafa deu um presente para a Marina." },
          { en: "I gave it to Theo this morning.", pt: "Eu dei isso para o Theo hoje de manhã." },
          { en: "Rafa didn't give me any hints.", pt: "O Rafa não me deu nenhuma dica." },
          { en: "Did you give her a card?", pt: "Você deu um cartão para ela?" },
          { en: "What did they give you for your birthday?", pt: "O que eles te deram de aniversário?" },
        ],
        rule: {
          en: "Past simple of 'give' is 'gave' (irregular). Negative and questions use 'did/didn't' + base verb 'give'. You can say 'give someone something' or 'give something to someone'.",
          pt: "O passado simples de 'give' é 'gave' (irregular). Na negativa e nas perguntas, use 'did/didn't' + verbo base 'give'. Você pode dizer 'give someone something' ou 'give something to someone'.",
        },
        mistakes: [
          { en: "✗ I gived him a book. → ✓ I gave him a book. ('gave' is irregular)", pt: "✗ I gived him a book. → ✓ I gave him a book. ('gave' é irregular)" },
          { en: "✗ Did you gave her a gift? → ✓ Did you give her a gift? (base verb after 'did')", pt: "✗ Did you gave her a gift? → ✓ Did you give her a gift? (verbo base depois de 'did')" },
        ],
      },
      {
        title: { en: "Ordinal numbers and dates", pt: "Números ordinais e datas" },
        examples: [
          { en: "Today is the twenty-first of June.", pt: "Hoje é dia vinte e um de junho." },
          { en: "This is my third birthday here.", pt: "Este é meu terceiro aniversário aqui." },
          { en: "Her birthday is on the fifth of May.", pt: "O aniversário dela é dia cinco de maio." },
          { en: "It's her first time at a surprise party.", pt: "É a primeira vez dela em uma festa surpresa." },
        ],
        rule: {
          en: "Ordinal numbers show order: first, second, third, fourth… twenty-first. Use 'the' + ordinal + 'of' + month for dates: 'the twenty-first of June' or, in short form, 'June 21st'.",
          pt: "Números ordinais mostram ordem: first, second, third, fourth… twenty-first. Use 'the' + ordinal + 'of' + mês para datas: 'the twenty-first of June' ou, na forma curta, 'June 21st'.",
        },
        mistakes: [
          { en: "✗ Today is the two of June. → ✓ Today is the second of June.", pt: "✗ Today is the two of June. → ✓ Today is the second of June." },
          { en: "✗ It's my three birthday. → ✓ It's my third birthday.", pt: "✗ It's my three birthday. → ✓ It's my third birthday." },
        ],
      },
      {
        title: { en: "Look + adjective / color", pt: "Look + adjetivo / cor" },
        examples: [
          { en: "It looks amazing!", pt: "Está incrível!" },
          { en: "You look great in red.", pt: "Você fica ótima de vermelho." },
          { en: "The table looks beautiful with the golden ribbons.", pt: "A mesa está linda com os laços dourados." },
          { en: "Does the room look ready for the party?", pt: "A sala está pronta para a festa?" },
        ],
        rule: {
          en: "Use 'look' + adjective (not adverb) to describe appearance: You look happy. It looks blue. Don't add 'like' before an adjective or color.",
          pt: "Use 'look' + adjetivo (não advérbio) para descrever aparência: You look happy. It looks blue. Não adicione 'like' antes de um adjetivo ou cor.",
        },
        mistakes: [
          { en: "✗ It looks like beautiful. → ✓ It looks beautiful.", pt: "✗ It looks like beautiful. → ✓ It looks beautiful." },
          { en: "✗ You look nicely. → ✓ You look nice. (adjective, not adverb)", pt: "✗ You look nicely. → ✓ You look nice. (adjetivo, não advérbio)" },
        ],
      },
    ],
    controlledPractice: [
      { id: "i6d-cp1", prompt: { en: "Complete: 'Rafa ___ Marina a gift.'", pt: "Complete: 'Rafa ___ Marina a gift.'" }, options: ["give", "gived", "gave"], answer: "gave", explanation: { en: "Irregular past of 'give' is 'gave'.", pt: "Passado irregular de 'give' é 'gave'." } },
      { id: "i6d-cp2", prompt: { en: "Make it negative: 'He gave me a hint.'", pt: "Faça a negativa: 'He gave me a hint.'" }, options: ["He didn't gave me a hint.", "He didn't give me a hint.", "He not gave me a hint."], answer: "He didn't give me a hint.", explanation: { en: "didn't + base verb 'give'.", pt: "didn't + verbo base 'give'." } },
      { id: "i6d-cp3", prompt: { en: "Choose the correct date: 'Today is ___ of June.'", pt: "Escolha a data correta: 'Today is ___ of June.'" }, options: ["the twenty-one", "the twenty-first", "twenty-first"], answer: "the twenty-first", explanation: { en: "Use 'the' + ordinal + 'of' + month.", pt: "Use 'the' + ordinal + 'of' + mês." } },
      { id: "i6d-cp4", prompt: { en: "Complete: 'This is my ___ birthday here.' (3)", pt: "Complete: 'This is my ___ birthday here.' (3)" }, options: ["three", "third", "threeth"], answer: "third", explanation: { en: "Ordinal for 3 is 'third'.", pt: "Ordinal de 3 é 'third'." } },
      { id: "i6d-cp5", prompt: { en: "Choose the correct sentence.", pt: "Escolha a frase correta." }, options: ["You look nicely today.", "You look nice today.", "You look like nice today."], answer: "You look nice today.", explanation: { en: "'Look' + adjective, not adverb.", pt: "'Look' + adjetivo, não advérbio." } },
    ],
    input: {
      kind: "listening",
      title: { en: "A message about the party", pt: "Uma mensagem sobre a festa" },
      lines: [
        { en: "Hi! I just wanted to tell you about Marina's birthday party.", pt: "Oi! Só queria te contar sobre a festa de aniversário da Marina." },
        { en: "It was on the twenty-first of June, and the apartment looked beautiful, full of blue and golden balloons.", pt: "Foi no dia vinte e um de junho, e o apartamento estava lindo, cheio de balões azuis e dourados." },
        { en: "Rafa gave her a red scarf, and I gave her a book about photography.", pt: "O Rafa deu um cachecol vermelho para ela, e eu dei um livro sobre fotografia." },
        { en: "It was her third birthday in that apartment, and she said it was the best one so far.", pt: "Foi o terceiro aniversário dela naquele apartamento, e ela disse que foi o melhor até agora." },
        { en: "We didn't give her any hints before the party. She looked so surprised!", pt: "A gente não deu nenhuma dica antes da festa. Ela ficou tão surpresa!" },
      ],
      questions: [
        { id: "i6d-iq1", prompt: { en: "When was the party?", pt: "Quando foi a festa?" }, options: ["The first of June", "The twenty-first of June", "The third of June"], answer: "The twenty-first of June", explanation: { en: "'It was on the twenty-first of June.'", pt: "'Foi no dia vinte e um de junho.'" } },
        { id: "i6d-iq2", prompt: { en: "What did Rafa give Marina?", pt: "O que o Rafa deu para a Marina?" }, options: ["A book", "A red scarf", "A blue box"], answer: "A red scarf", explanation: { en: "'Rafa gave her a red scarf.'", pt: "'O Rafa deu um cachecol vermelho para ela.'" } },
        { id: "i6d-iq3", prompt: { en: "How many birthdays has Marina had in that apartment?", pt: "Quantos aniversários a Marina teve naquele apartamento?" }, options: ["First", "Second", "Third"], answer: "Third", explanation: { en: "'It was her third birthday in that apartment.'", pt: "'Foi o terceiro aniversário dela naquele apartamento.'" } },
      ],
    },
    quickCheck: [
      { id: "i6d-qc1", prompt: { en: "What does 'gift' mean?", pt: "O que significa 'gift'?" }, options: ["A present", "A candle", "A ribbon"], answer: "A present", explanation: { en: "A 'gift' is something you give someone.", pt: "Um 'gift' é algo que você dá a alguém." } },
      { id: "i6d-qc2", prompt: { en: "Past of 'give'?", pt: "Passado de 'give'?" }, options: ["gived", "gave", "given"], answer: "gave", explanation: { en: "Simple past is 'gave'; 'given' is the past participle.", pt: "O passado simples é 'gave'; 'given' é o particípio." } },
      { id: "i6d-qc3", prompt: { en: "Which is a correct date?", pt: "Qual é uma data correta?" }, options: ["The five of May.", "The fifth of May.", "The five May."], answer: "The fifth of May.", explanation: { en: "Use 'the' + ordinal + 'of' + month.", pt: "Use 'the' + ordinal + 'of' + mês." } },
      { id: "i6d-qc4", prompt: { en: "'The balloons ___ colorful.' (look)", pt: "'The balloons ___ colorful.' (look)" }, options: ["looks", "look", "looking"], answer: "look", explanation: { en: "'Balloons' is plural, so use 'look'.", pt: "'Balloons' é plural, então use 'look'." } },
    ],
  },
  communicate: {
    id: "INTERMEDIATE-U06-COMMUNICATE",
    review: [
      { en: "Rafa gave Marina a gift. — irregular past of 'give'.", pt: "O Rafa deu um presente para a Marina. — passado irregular de 'give'." },
      { en: "Today is the twenty-first of June. — ordinal numbers and dates.", pt: "Hoje é dia vinte e um de junho. — números ordinais e datas." },
      { en: "It looks amazing! You look great in red. — look + adjective/color.", pt: "Está incrível! Você fica ótima de vermelho. — look + adjetivo/cor." },
      { en: "Rafa didn't give me any hints. Did you give her a card?", pt: "O Rafa não me deu nenhuma dica. Você deu um cartão para ela?" },
    ],
    activities: [
      {
        id: "i6c-a1",
        title: { en: "My Last Birthday", pt: "Meu último aniversário" },
        instruction: { en: "Say the date of your last birthday and what someone gave you.", pt: "Diga a data do seu último aniversário e o que alguém te deu." },
        phrases: [
          { en: "My birthday was on the tenth of March.", pt: "Meu aniversário foi dia dez de março." },
          { en: "My mother gave me a new phone.", pt: "Minha mãe me deu um celular novo." },
          { en: "My friends didn't give me any hints before the party.", pt: "Meus amigos não me deram nenhuma dica antes da festa." },
        ],
        check: [
          { id: "i6c-a1q1", prompt: { en: "Which sentence uses 'give' in the past correctly?", pt: "Qual frase usa 'give' no passado corretamente?" }, options: ["She gived me a gift.", "She gave me a gift.", "She give me a gift."], answer: "She gave me a gift.", explanation: { en: "Irregular past: gave.", pt: "Passado irregular: gave." } },
          { id: "i6c-a1q2", prompt: { en: "Choose the correct date form.", pt: "Escolha a forma correta da data." }, options: ["the ten of March", "the tenth of March", "tenth March"], answer: "the tenth of March", explanation: { en: "'the' + ordinal + 'of' + month.", pt: "'the' + ordinal + 'of' + mês." } },
        ],
      },
      {
        id: "i6c-a2",
        title: { en: "Describe the Party", pt: "Descreva a festa" },
        instruction: { en: "Describe how a room, a cake or an outfit looks, using 'look' + color or adjective.", pt: "Descreva como uma sala, um bolo ou uma roupa está, usando 'look' + cor ou adjetivo." },
        phrases: [
          { en: "The cake looks delicious.", pt: "O bolo está delicioso." },
          { en: "The balloons look colorful.", pt: "Os balões estão coloridos." },
          { en: "You look amazing in that dress.", pt: "Você está incrível nesse vestido." },
        ],
        check: [
          { id: "i6c-a2q1", prompt: { en: "Which sentence is correct?", pt: "Qual frase está correta?" }, options: ["The room look nice.", "The room looks nice.", "The room looking nice."], answer: "The room looks nice.", explanation: { en: "Singular subject → 'looks'.", pt: "Sujeito no singular → 'looks'." } },
        ],
      },
      {
        id: "i6c-a3",
        title: { en: "Gift Interview", pt: "Entrevista sobre presentes" },
        instruction: { en: "Ask a partner three questions with 'give' in the past, and answer their questions too.", pt: "Faça a um parceiro três perguntas com 'give' no passado, e responda às perguntas dele também." },
        phrases: [
          { en: "What did you give your best friend last year?", pt: "O que você deu ao seu melhor amigo no ano passado?" },
          { en: "Did anyone give you a surprise gift?", pt: "Alguém te deu um presente surpresa?" },
          { en: "Who gave you the best gift so far?", pt: "Quem te deu o melhor presente até agora?" },
        ],
        check: [
          { id: "i6c-a3q1", prompt: { en: "Make a question: 'You gave her a scarf.'", pt: "Faça uma pergunta: 'You gave her a scarf.'" }, options: ["Did you gave her a scarf?", "Did you give her a scarf?", "You gave her a scarf?"], answer: "Did you give her a scarf?", explanation: { en: "Did + subject + base verb.", pt: "Did + sujeito + verbo base." } },
        ],
      },
    ],
    challenge: {
      id: "i6c-cc1",
      title: { en: "Tell the Story of a Special Day", pt: "Conte a história de um dia especial" },
      instruction: {
        en: "Describe a special day out loud: say the date, what happened, what someone gave you, and how everything looked.",
        pt: "Descreva um dia especial em voz alta: diga a data, o que aconteceu, o que alguém te deu e como tudo estava.",
      },
      phrases: [
        { en: "It was on the fifteenth of December, my graduation day.", pt: "Foi dia quinze de dezembro, meu dia de formatura." },
        { en: "My parents gave me a watch, and my friends gave me a card.", pt: "Meus pais me deram um relógio, e meus amigos me deram um cartão." },
        { en: "The hall looked amazing, full of golden decorations.", pt: "O salão estava incrível, cheio de decorações douradas." },
        { en: "It was my best day so far.", pt: "Foi o meu melhor dia até agora." },
      ],
      check: [
        { id: "i6c-cc1q1", prompt: { en: "Did you say the date with an ordinal number?", pt: "Você disse a data com um número ordinal?" }, options: ["Yes", "No", "Partially"], answer: "Yes", explanation: { en: "Self-check: the + ordinal + of + month.", pt: "Autoavaliação: the + ordinal + of + mês." } },
        { id: "i6c-cc1q2", prompt: { en: "Did you use 'gave' correctly?", pt: "Você usou 'gave' corretamente?" }, options: ["Yes", "No", "Partially"], answer: "Yes", explanation: { en: "Self-check: irregular past of give.", pt: "Autoavaliação: passado irregular de give." } },
      ],
    },
    lessonReview: {
      summary: {
        en: "You described a special day: the verb 'give' in the past, ordinal numbers and dates, and 'look' + color/adjective.",
        pt: "Você descreveu um dia especial: o verbo 'give' no passado, números ordinais e datas, e 'look' + cor/adjetivo.",
      },
      canDo: [
        { en: "I can use 'gave' in affirmative, negative and questions.", pt: "Consigo usar 'gave' na afirmativa, negativa e perguntas." },
        { en: "I can say dates with ordinal numbers.", pt: "Consigo dizer datas com números ordinais." },
        { en: "I can describe how things look using colors and adjectives.", pt: "Consigo descrever a aparência das coisas usando cores e adjetivos." },
        { en: "I can tell the story of a special day.", pt: "Consigo contar a história de um dia especial." },
      ],
      next: { en: "Next unit: reviewing what you were doing when something happened.", pt: "Próxima unidade: revisar o que você estava fazendo quando algo aconteceu." },
    },
  },
};
