import type { CourseUnit } from "./types";

/**
 * Intermediate — Unit 17 (House Rules). Conteúdo autoral Speak2Co.
 * Foco: must/mustn't (obrigação e proibição), must x have to, e revisão de
 * there is/are + some/any com cômodos e móveis.
 * Personagens: Bia e Diego, novos inquilinos, e Sr. Cardoso, o proprietário.
 */
export const INTERMEDIATE_U17: CourseUnit = {
  code: "INTERMEDIATE-U17",
  number: 17,
  title: "House Rules — What must we do here?",
  titlePt: "Regras da Casa — O que devemos fazer aqui?",
  cefr: "B1",
  objective: {
    en: "Talk about obligation and prohibition with 'must/mustn't', contrast 'must' with 'have to', and describe a house with 'there is/are'.",
    pt: "Falar de obrigação e proibição com 'must/mustn't', contrastar 'must' com 'have to' e descrever uma casa com 'there is/are'.",
  },
  communicationGoal: {
    en: "Explain the rules of a house or workplace: what people must do, mustn't do and don't have to do.",
    pt: "Explicar as regras de uma casa ou trabalho: o que as pessoas devem, não podem e não precisam fazer.",
  },
  prerequisites: {
    en: "Intermediate units 1–16: present, past and future forms; there is/are with some/any.",
    pt: "Unidades 1–16 do Intermediate: formas de presente, passado e futuro; there is/are com some/any.",
  },
  newContent: {
    en: "Grammar: 'must/mustn't' for obligation and prohibition; 'must' vs 'have to' | Vocabulary: parts of a house and furniture (12 items) | Expressions: talking about rules",
    pt: "Gramática: 'must/mustn't' para obrigação e proibição; 'must' x 'have to' | Vocabulário: partes da casa e móveis (12 itens) | Expressões: falar sobre regras",
  },
  reviewContent: {
    en: "There is / there are with some and any, describing rooms and furniture.",
    pt: "There is / there are com some e any, descrevendo cômodos e móveis.",
  },
  discover: {
    id: "INTERMEDIATE-U17-DISCOVER",
    warmUp: {
      prompt: {
        en: "Look at the picture. What must you check before you move into an old house?",
        pt: "Observe a imagem. O que você deve verificar antes de se mudar para uma casa antiga?",
      },
      phrases: [
        { en: "What are the most important house rules for you?", pt: "Quais são as regras de casa mais importantes para você?" },
        { en: "Do you prefer an old house or a new apartment?", pt: "Você prefere uma casa antiga ou um apartamento novo?" },
        { en: "What must you do before you sign a rental contract?", pt: "O que você deve fazer antes de assinar um contrato de aluguel?" },
      ],
    },
    context: {
      situation: {
        en: "Bia and Diego just rented an old house in the countryside. Mr. Cardoso, the landlord, is showing them around and explaining the house rules.",
        pt: "Bia e Diego acabaram de alugar uma casa antiga no interior. O Sr. Cardoso, o proprietário, está mostrando a casa e explicando as regras.",
      },
      dialogue: [
        { who: "Cardoso", en: "Welcome! This is an old house, so you must be careful with a few things.", pt: "Bem-vindos! É uma casa antiga, então vocês devem ter cuidado com algumas coisas." },
        { who: "Bia", en: "Sure. What must we do first?", pt: "Claro. O que devemos fazer primeiro?" },
        { who: "Cardoso", en: "You must turn off the gas every night. The oven is a little old.", pt: "Vocês devem desligar o gás toda noite. O forno é um pouco velho." },
        { who: "Diego", en: "No problem. Must we clean the attic too?", pt: "Sem problema. Devemos limpar o sótão também?" },
        { who: "Cardoso", en: "No, you don't have to clean the attic. It's just for storage.", pt: "Não, vocês não precisam limpar o sótão. É só para guardar coisas." },
        { who: "Bia", en: "Great. And the basement? Can we use it?", pt: "Ótimo. E o porão? Podemos usá-lo?" },
        { who: "Cardoso", en: "Yes, but you mustn't leave the basement door open. There's a broken faucet down there, and the cellar gets very wet.", pt: "Sim, mas vocês não podem deixar a porta do porão aberta. Tem uma torneira quebrada lá embaixo, e a adega fica muito úmida." },
        { who: "Diego", en: "Understood. Is there a bookcase for our books?", pt: "Entendido. Tem uma estante para os nossos livros?" },
        { who: "Cardoso", en: "Yes, there's a large bookcase in the living room, and a comfortable bench by the window.", pt: "Sim, tem uma estante grande na sala, e um banco confortável perto da janela." },
      ],
    },
    vocabulary: [
      { term: "attic", pt: "sótão", ipa: "/ˈætɪk/", definition: "The space under the roof of a house, often used for storage.", example: "We keep old boxes in the attic.", examplePt: "Guardamos caixas velhas no sótão." },
      { term: "basement", pt: "porão", ipa: "/ˈbeɪsmənt/", definition: "The floor of a building that is partly or completely below the ground.", example: "The washing machine is in the basement.", examplePt: "A máquina de lavar fica no porão." },
      { term: "cellar", pt: "adega, porão", ipa: "/ˈselər/", definition: "An underground room, often used to store wine or food.", example: "The cellar gets very wet in winter.", examplePt: "A adega fica muito úmida no inverno." },
      { term: "ceiling", pt: "teto", ipa: "/ˈsiːlɪŋ/", definition: "The inside roof of a room.", example: "There's a crack in the ceiling.", examplePt: "Tem uma rachadura no teto." },
      { term: "faucet", pt: "torneira", ipa: "/ˈfɔːsɪt/", definition: "A device that controls the flow of water from a pipe.", example: "The faucet in the basement is broken.", examplePt: "A torneira do porão está quebrada." },
      { term: "oven", pt: "forno", ipa: "/ˈʌvən/", definition: "An appliance used for baking or roasting food.", example: "The oven is a little old, so be careful.", examplePt: "O forno é um pouco velho, então tenha cuidado." },
      { term: "bookcase", pt: "estante de livros", ipa: "/ˈbʊkkeɪs/", definition: "A piece of furniture with shelves for books.", example: "There's a bookcase in the living room.", examplePt: "Tem uma estante na sala." },
      { term: "shelf", pt: "prateleira", ipa: "/ʃelf/", definition: "A flat surface for holding things, usually one of several.", example: "Put the plates on the top shelf.", examplePt: "Coloque os pratos na prateleira de cima." },
      { term: "bench", pt: "banco (assento)", ipa: "/bentʃ/", definition: "A long seat for more than one person.", example: "There's a comfortable bench by the window.", examplePt: "Tem um banco confortável perto da janela." },
      { term: "stool", pt: "banquinho", ipa: "/stuːl/", definition: "A seat without a back or arms.", example: "We need a stool for the kitchen counter.", examplePt: "Precisamos de um banquinho para o balcão da cozinha." },
      { term: "saucer", pt: "pires", ipa: "/ˈsɔːsər/", definition: "A small plate that goes under a cup.", example: "Each cup comes with a matching saucer.", examplePt: "Cada xícara vem com um pires combinando." },
      { term: "comfortable", pt: "confortável", ipa: "/ˈkʌmftərbəl/", definition: "Giving a feeling of physical ease.", example: "This old bench is surprisingly comfortable.", examplePt: "Esse banco velho é surpreendentemente confortável." },
    ],
    expressions: [
      { en: "No problem.", pt: "Sem problema." },
      { en: "Understood.", pt: "Entendido." },
      { en: "a little old", pt: "um pouco velho" },
      { en: "be careful with", pt: "tenha cuidado com" },
      { en: "just for storage", pt: "só para guardar coisas" },
      { en: "down there", pt: "lá embaixo" },
    ],
    grammar: [
      {
        title: { en: "Must / mustn't — obligation and prohibition", pt: "Must / mustn't — obrigação e proibição" },
        examples: [
          { en: "You must turn off the gas every night.", pt: "Vocês devem desligar o gás toda noite." },
          { en: "You mustn't leave the basement door open.", pt: "Vocês não podem deixar a porta do porão aberta." },
          { en: "We must be careful with the old oven.", pt: "Devemos ter cuidado com o forno velho." },
          { en: "She mustn't forget the keys.", pt: "Ela não pode esquecer as chaves." },
          { en: "Must I sign the contract today?", pt: "Eu devo assinar o contrato hoje?" },
        ],
        rule: {
          en: "Use 'must + base verb' for a strong obligation, often a rule the speaker considers important. 'Mustn't + base verb' means it is prohibited — don't do it. 'Must' has the same form for all subjects (I/you/he/we...).",
          pt: "Use 'must + verbo base' para uma obrigação forte, muitas vezes uma regra que o falante considera importante. 'Mustn't + verbo base' significa que é proibido — não faça isso. 'Must' tem a mesma forma para todos os sujeitos (I/you/he/we...).",
        },
        mistakes: [
          { en: "✗ You must to turn off the gas. → ✓ You must turn off the gas. (no 'to')", pt: "✗ You must to turn off the gas. → ✓ You must turn off the gas. (sem 'to')" },
          { en: "✗ You don't must open it. → ✓ You mustn't open it.", pt: "✗ You don't must open it. → ✓ You mustn't open it." },
        ],
      },
      {
        title: { en: "Must vs. have to", pt: "Must x have to" },
        examples: [
          { en: "You must be careful with the oven. (the landlord's own rule)", pt: "Vocês devem ter cuidado com o forno. (regra do próprio locador)" },
          { en: "You don't have to clean the attic. (it isn't necessary)", pt: "Vocês não precisam limpar o sótão. (não é necessário)" },
          { en: "We have to pay the rent on the first of the month.", pt: "Temos que pagar o aluguel no primeiro dia do mês." },
          { en: "Do you have to sign the contract today?", pt: "Vocês têm que assinar o contrato hoje?" },
        ],
        rule: {
          en: "'Must' often expresses the speaker's own authority or strong opinion. 'Have to' expresses an obligation that comes from a rule, a law or another person, and changes like a normal verb (has to / had to). Negatives are different in meaning: 'mustn't' = prohibited; 'don't have to' = not necessary, but allowed.",
          pt: "'Must' costuma expressar a autoridade ou opinião forte do próprio falante. 'Have to' expressa uma obrigação que vem de uma regra, lei ou outra pessoa, e muda como um verbo normal (has to / had to). As negativas têm sentidos diferentes: 'mustn't' = proibido; 'don't have to' = não é necessário, mas é permitido." ,
        },
        mistakes: [
          { en: "✗ You mustn't clean the attic if you don't want to. → ✓ You don't have to clean the attic if you don't want to.", pt: "✗ You mustn't clean the attic if you don't want to. → ✓ You don't have to clean the attic if you don't want to." },
          { en: "✗ She have to pay the rent. → ✓ She has to pay the rent.", pt: "✗ She have to pay the rent. → ✓ She has to pay the rent." },
        ],
      },
      {
        title: { en: "Review: There is/are + some/any", pt: "Revisão: There is/are + some/any" },
        examples: [
          { en: "There's a bookcase in the living room.", pt: "Tem uma estante na sala." },
          { en: "There are two stools in the kitchen.", pt: "Tem dois banquinhos na cozinha." },
          { en: "Is there any furniture in the attic?", pt: "Tem algum móvel no sótão?" },
          { en: "There isn't any furniture in the attic yet.", pt: "Ainda não tem nenhum móvel no sótão." },
        ],
        rule: {
          en: "Use 'there is/there's' with singular nouns and 'there are' with plural nouns. Use 'some' in affirmative sentences and 'any' in negatives and questions.",
          pt: "Use 'there is/there's' com substantivos singulares e 'there are' com substantivos plurais. Use 'some' em frases afirmativas e 'any' em negativas e perguntas.",
        },
        mistakes: [
          { en: "✗ There are a bench. → ✓ There is a bench.", pt: "✗ There are a bench. → ✓ There is a bench." },
          { en: "✗ Is there furniture? → ✓ Is there any furniture?", pt: "✗ Is there furniture? → ✓ Is there any furniture?" },
        ],
      },
    ],
    controlledPractice: [
      { id: "i17d-cp1", prompt: { en: "Complete: 'You ___ leave the basement door open.' (prohibition)", pt: "Complete: 'You ___ leave the basement door open.' (proibição)" }, options: ["mustn't", "don't have to", "aren't"], answer: "mustn't", explanation: { en: "'Mustn't' means it is prohibited.", pt: "'Mustn't' significa que é proibido." } },
      { id: "i17d-cp2", prompt: { en: "Complete: 'You ___ clean the attic. It's optional.'", pt: "Complete: 'You ___ clean the attic. It's optional.'" }, options: ["mustn't", "don't have to", "must not"], answer: "don't have to", explanation: { en: "Not necessary, but allowed = don't have to.", pt: "Não é necessário, mas é permitido = don't have to." } },
      { id: "i17d-cp3", prompt: { en: "Choose the correct question.", pt: "Escolha a pergunta correta." }, options: ["Must I to sign it?", "Do I must sign it?", "Must I sign it?"], answer: "Must I sign it?", explanation: { en: "Invert 'must' and the subject, no 'to'.", pt: "Inverta 'must' e o sujeito, sem 'to'." } },
      { id: "i17d-cp4", prompt: { en: "Complete: 'She ___ to pay the rent every month.'", pt: "Complete: 'She ___ to pay the rent every month.'" }, options: ["must", "have", "has"], answer: "has", explanation: { en: "'Have to' changes with the subject: has to.", pt: "'Have to' muda com o sujeito: has to." } },
      { id: "i17d-cp5", prompt: { en: "Complete: 'Is there ___ furniture in the basement?'", pt: "Complete: 'Is there ___ furniture in the basement?'" }, options: ["some", "any", "a"], answer: "any", explanation: { en: "Use 'any' in questions.", pt: "Use 'any' em perguntas." } },
    ],
    input: {
      kind: "reading",
      title: { en: "House rules for tenants", pt: "Regras da casa para inquilinos" },
      lines: [
        { en: "Welcome to your new home! Please read these simple house rules.", pt: "Bem-vindo à sua nova casa! Por favor, leia estas regras simples." },
        { en: "You must turn off the gas and the lights before you leave the house.", pt: "Vocês devem desligar o gás e as luzes antes de sair de casa." },
        { en: "You mustn't leave the basement door open because of the old faucet.", pt: "Vocês não podem deixar a porta do porão aberta por causa da torneira velha." },
        { en: "You don't have to clean the attic, but you must keep the kitchen and the oven clean.", pt: "Vocês não precisam limpar o sótão, mas devem manter a cozinha e o forno limpos." },
        { en: "There is a bookcase, a bench and some stools for you. Enjoy your new home!", pt: "Tem uma estante, um banco e alguns banquinhos para vocês. Aproveitem a nova casa!" },
      ],
      questions: [
        { id: "i17d-iq1", prompt: { en: "What must tenants do before they leave the house?", pt: "O que os inquilinos devem fazer antes de sair de casa?" }, options: ["Clean the attic", "Turn off the gas and the lights", "Open the basement door"], answer: "Turn off the gas and the lights", explanation: { en: "'You must turn off the gas and the lights before you leave.'", pt: "'Vocês devem desligar o gás e as luzes antes de sair.'" } },
        { id: "i17d-iq2", prompt: { en: "Do tenants have to clean the attic?", pt: "Os inquilinos precisam limpar o sótão?" }, options: ["Yes, they must.", "No, they don't have to.", "No, they mustn't."], answer: "No, they don't have to.", explanation: { en: "'You don't have to clean the attic.'", pt: "'Vocês não precisam limpar o sótão.'" } },
        { id: "i17d-iq3", prompt: { en: "Why mustn't tenants leave the basement door open?", pt: "Por que os inquilinos não podem deixar a porta do porão aberta?" }, options: ["Because of the old faucet", "Because of the oven", "Because of the bookcase"], answer: "Because of the old faucet", explanation: { en: "'...because of the old faucet.'", pt: "'...por causa da torneira velha.'" } },
      ],
    },
    quickCheck: [
      { id: "i17d-qc1", prompt: { en: "What is a 'cellar'?", pt: "O que é 'cellar'?" }, options: ["An underground room for food or wine", "A piece of furniture", "A kitchen appliance"], answer: "An underground room for food or wine", explanation: { en: "A cellar stores wine or food underground.", pt: "A adega guarda vinho ou comida embaixo da terra." } },
      { id: "i17d-qc2", prompt: { en: "Choose the correct prohibition.", pt: "Escolha a proibição correta." }, options: ["You don't have to smoke here.", "You mustn't smoke here.", "You haven't to smoke here."], answer: "You mustn't smoke here.", explanation: { en: "Prohibition = mustn't.", pt: "Proibição = mustn't." } },
      { id: "i17d-qc3", prompt: { en: "'a small plate under a cup' = ?", pt: "'a small plate under a cup' = ?" }, options: ["saucer", "shelf", "stool"], answer: "saucer", explanation: { en: "A saucer goes under a cup.", pt: "O pires fica embaixo da xícara." } },
      { id: "i17d-qc4", prompt: { en: "Complete: 'There ___ two bookcases in the office.'", pt: "Complete: 'There ___ two bookcases in the office.'" }, options: ["is", "are", "have"], answer: "are", explanation: { en: "Plural noun needs 'are'.", pt: "Substantivo plural precisa de 'are'." } },
    ],
  },
  communicate: {
    id: "INTERMEDIATE-U17-COMMUNICATE",
    review: [
      { en: "You must turn off the gas every night. — obligation.", pt: "Vocês devem desligar o gás toda noite. — obrigação." },
      { en: "You mustn't leave the door open. — prohibition.", pt: "Vocês não podem deixar a porta aberta. — proibição." },
      { en: "You don't have to clean the attic. — not necessary.", pt: "Vocês não precisam limpar o sótão. — não é necessário." },
      { en: "There's a bookcase and some stools. — describing the house.", pt: "Tem uma estante e alguns banquinhos. — descrevendo a casa." },
    ],
    activities: [
      {
        id: "i17c-a1",
        title: { en: "My House Rules", pt: "As regras da minha casa" },
        instruction: { en: "Say three rules for your own home using 'must' and 'mustn't'.", pt: "Diga três regras da sua casa usando 'must' e 'mustn't'." },
        phrases: [
          { en: "You must take off your shoes at the door.", pt: "Você deve tirar os sapatos na porta." },
          { en: "You mustn't smoke inside the house.", pt: "Você não pode fumar dentro de casa." },
          { en: "We must keep the kitchen clean.", pt: "Devemos manter a cozinha limpa." },
        ],
        check: [
          { id: "i17c-a1q1", prompt: { en: "Which sentence is a prohibition?", pt: "Qual frase é uma proibição?" }, options: ["You mustn't smoke here.", "You must smoke here.", "You have to smoke here."], answer: "You mustn't smoke here.", explanation: { en: "'Mustn't' = prohibited.", pt: "'Mustn't' = proibido." } },
          { id: "i17c-a1q2", prompt: { en: "Complete: 'They ___ be quiet after 10 p.m.'", pt: "Complete: 'They ___ be quiet after 10 p.m.'" }, options: ["must", "musts", "musted"], answer: "must", explanation: { en: "'Must' never changes form.", pt: "'Must' nunca muda de forma." } },
        ],
      },
      {
        id: "i17c-a2",
        title: { en: "Have To or Not?", pt: "Precisa ou não?" },
        instruction: { en: "Say two things you have to do and one thing you don't have to do this week.", pt: "Diga duas coisas que você tem que fazer e uma que você não precisa fazer nesta semana." },
        phrases: [
          { en: "I have to finish a report by Friday.", pt: "Tenho que terminar um relatório até sexta." },
          { en: "I have to pay the rent tomorrow.", pt: "Tenho que pagar o aluguel amanhã." },
          { en: "I don't have to go to the office on Saturday.", pt: "Não preciso ir ao escritório no sábado." },
        ],
        check: [
          { id: "i17c-a2q1", prompt: { en: "Complete: 'He ___ to work overtime this weekend.' (negative)", pt: "Complete: 'He ___ to work overtime this weekend.' (negativa)" }, options: ["doesn't have", "don't have", "hasn't"], answer: "doesn't have", explanation: { en: "He/she/it → doesn't have to.", pt: "He/she/it → doesn't have to." } },
          { id: "i17c-a2q2", prompt: { en: "'Do you have to...?' asks about?", pt: "'Do you have to...?' pergunta sobre?" }, options: ["Necessity", "Prohibition", "Ability"], answer: "Necessity", explanation: { en: "'Have to' expresses necessity.", pt: "'Have to' expressa necessidade." } },
        ],
      },
      {
        id: "i17c-a3",
        title: { en: "Is There...?", pt: "Tem...?" },
        instruction: { en: "Describe the rooms of your house with 'there is/are' and 'some/any'.", pt: "Descreva os cômodos da sua casa com 'there is/are' e 'some/any'." },
        phrases: [
          { en: "There's a small basement under my house.", pt: "Tem um porãozinho embaixo da minha casa." },
          { en: "There are some shelves in the kitchen.", pt: "Tem algumas prateleiras na cozinha." },
          { en: "There isn't any attic in my apartment.", pt: "Não tem sótão no meu apartamento." },
        ],
        check: [
          { id: "i17c-a3q1", prompt: { en: "Complete: 'There ___ a comfortable bench in the garden.'", pt: "Complete: 'There ___ a comfortable bench in the garden.'" }, options: ["is", "are", "have"], answer: "is", explanation: { en: "Singular noun needs 'is'.", pt: "Substantivo singular precisa de 'is'." } },
          { id: "i17c-a3q2", prompt: { en: "Make a question: 'There is some furniture in the attic.'", pt: "Transforme em pergunta: 'There is some furniture in the attic.'" }, options: ["Is there some furniture in the attic?", "Is there any furniture in the attic?", "There is any furniture in the attic?"], answer: "Is there any furniture in the attic?", explanation: { en: "Questions use 'any', not 'some'.", pt: "Perguntas usam 'any', não 'some'." } },
        ],
      },
    ],
    challenge: {
      id: "i17c-cc1",
      title: { en: "Show a New Roommate Around", pt: "Mostre a casa para um novo colega" },
      instruction: {
        en: "Give a house tour to a new roommate out loud. Explain what they must do, what they mustn't do, what they don't have to do, and what there is in each room.",
        pt: "Faça um tour pela casa em voz alta para um novo colega. Explique o que ele deve fazer, o que não pode fazer, o que não precisa fazer e o que tem em cada cômodo.",
      },
      phrases: [
        { en: "You must turn off the lights before you go to bed.", pt: "Você deve apagar as luzes antes de dormir." },
        { en: "You mustn't leave the basement door open.", pt: "Você não pode deixar a porta do porão aberta." },
        { en: "You don't have to clean the attic every week.", pt: "Você não precisa limpar o sótão toda semana." },
        { en: "There's a bookcase, a bench and two stools in the living room.", pt: "Tem uma estante, um banco e dois banquinhos na sala." },
      ],
      check: [
        { id: "i17c-cc1q1", prompt: { en: "Did you use 'must' and 'mustn't' correctly?", pt: "Você usou 'must' e 'mustn't' corretamente?" }, options: ["Yes", "No", "Partially"], answer: "Yes", explanation: { en: "Self-check: must = obligation, mustn't = prohibition.", pt: "Autoavaliação: must = obrigação, mustn't = proibição." } },
        { id: "i17c-cc1q2", prompt: { en: "Did you describe the rooms with 'there is/are'?", pt: "Você descreveu os cômodos com 'there is/are'?" }, options: ["Yes", "No", "Partially"], answer: "Yes", explanation: { en: "Self-check: there is + singular, there are + plural.", pt: "Autoavaliação: there is + singular, there are + plural." } },
      ],
    },
    lessonReview: {
      summary: {
        en: "You talked about house rules with 'must/mustn't', contrasted 'must' with 'have to', and reviewed 'there is/are' with 'some/any'.",
        pt: "Você falou sobre regras da casa com 'must/mustn't', contrastou 'must' com 'have to' e revisou 'there is/are' com 'some/any'.",
      },
      canDo: [
        { en: "I can explain rules with 'must' and 'mustn't'.", pt: "Consigo explicar regras com 'must' e 'mustn't'." },
        { en: "I can say what is necessary with 'have to'.", pt: "Consigo dizer o que é necessário com 'have to'." },
        { en: "I can say what isn't necessary with 'don't have to'.", pt: "Consigo dizer o que não é necessário com 'don't have to'." },
        { en: "I can describe a house with 'there is/are' and furniture words.", pt: "Consigo descrever uma casa com 'there is/are' e nomes de móveis." },
      ],
      next: { en: "Next unit: giving advice with 'should' and talking about future wishes with 'would like to'.", pt: "Próxima unidade: dar conselhos com 'should' e falar de desejos futuros com 'would like to'." },
    },
  },
};

/**
 * Intermediate — Unit 18 (Someday, Maybe). Conteúdo autoral Speak2Co.
 * Foco: should/shouldn't (conselhos), would like to (preferências e desejos),
 * revisão de pronomes objetos. Personagens: Bia, Diego e a amiga Sofia.
 */
export const INTERMEDIATE_U18: CourseUnit = {
  code: "INTERMEDIATE-U18",
  number: 18,
  title: "Someday, Maybe — Would you like to get engaged?",
  titlePt: "Um dia, Talvez — Você gostaria de noivar?",
  cefr: "B1",
  objective: {
    en: "Give advice with 'should/shouldn't' and talk about wishes and preferences with 'would like to'.",
    pt: "Dar conselhos com 'should/shouldn't' e falar de desejos e preferências com 'would like to'.",
  },
  communicationGoal: {
    en: "Give a friend advice about money and relationships, and talk about future wishes.",
    pt: "Dar conselhos a um amigo sobre dinheiro e relacionamentos, e falar de desejos futuros.",
  },
  prerequisites: { en: "Unit 17: must/mustn't and have to.", pt: "Unidade 17: must/mustn't e have to." },
  newContent: {
    en: "Grammar: 'should/shouldn't' for advice; 'would like to / wouldn't like to' for wishes | Vocabulary: banking and relationships (12 items) | Expressions: talking about money and dating",
    pt: "Gramática: 'should/shouldn't' para conselhos; 'would like to / wouldn't like to' para desejos | Vocabulário: banco e relacionamentos (12 itens) | Expressões: falar de dinheiro e namoro",
  },
  reviewContent: { en: "Object pronouns (him, her, them, us) in everyday sentences.", pt: "Pronomes objeto (him, her, them, us) em frases do dia a dia." },
  discover: {
    id: "INTERMEDIATE-U18-DISCOVER",
    warmUp: {
      prompt: { en: "Look at the picture. What would you like to do in the next few years?", pt: "Observe a imagem. O que você gostaria de fazer nos próximos anos?" },
      phrases: [
        { en: "Would you like to open a savings account?", pt: "Você gostaria de abrir uma poupança?" },
        { en: "What would you like to change about your life?", pt: "O que você gostaria de mudar na sua vida?" },
        { en: "What should young people do with their first salary?", pt: "O que os jovens deveriam fazer com o primeiro salário?" },
      ],
    },
    context: {
      situation: { en: "Bia's friend Sofia comes over for coffee. She just got a new job and wants advice about money and about her boyfriend, Rafael.", pt: "A Sofia, amiga da Bia, vem tomar um café. Ela acabou de conseguir um emprego novo e quer conselhos sobre dinheiro e sobre o namorado, o Rafael." },
      dialogue: [
        { who: "Sofia", en: "I got my first paycheck! I don't know what I should do with it.", pt: "Recebi meu primeiro salário! Não sei o que devo fazer com ele." },
        { who: "Bia", en: "You should open a savings account. Interest can really help you.", pt: "Você deveria abrir uma poupança. Os juros podem te ajudar muito." },
        { who: "Diego", en: "And you shouldn't keep all your money in cash at home.", pt: "E você não deveria manter todo o dinheiro em espécie em casa." },
        { who: "Sofia", en: "Good point. I'd like to get a checkbook too, for the rent.", pt: "Boa observação. Eu gostaria de ter um talão de cheques também, para o aluguel." },
        { who: "Bia", en: "By the way, how's Rafael? Would you like to get engaged someday?", pt: "A propósito, como está o Rafael? Você gostaria de noivar um dia?" },
        { who: "Sofia", en: "I'd like to, but not yet. We only started dating a few months ago.", pt: "Eu gostaria, mas ainda não. A gente só começou a namorar há alguns meses." },
        { who: "Diego", en: "You shouldn't rush it. Although... he seems really nice.", pt: "Você não deveria apressar isso. Embora... ele pareça muito legal." },
        { who: "Sofia", en: "He is! We'd like to travel together this year, maybe by ship.", pt: "Ele é! A gente gostaria de viajar junto este ano, talvez de navio." },
      ],
    },
    vocabulary: [
      { term: "interest", pt: "juros", ipa: "/ˈɪntrəst/", definition: "Money a bank pays you for keeping your money there, or money you pay for a loan.", example: "This savings account has good interest.", examplePt: "Essa poupança tem bons juros." },
      { term: "bank account", pt: "conta bancária", ipa: "/bæŋk əˈkaʊnt/", definition: "An arrangement with a bank to keep your money.", example: "I opened a bank account last week.", examplePt: "Abri uma conta bancária semana passada." },
      { term: "savings account", pt: "conta poupança", ipa: "/ˈseɪvɪŋz əˈkaʊnt/", definition: "A bank account for saving money that earns interest.", example: "You should open a savings account.", examplePt: "Você deveria abrir uma poupança." },
      { term: "checkbook", pt: "talão de cheques", ipa: "/ˈtʃekbʊk/", definition: "A book of blank checks.", example: "I'd like to get a checkbook for the rent.", examplePt: "Eu gostaria de ter um talão de cheques para o aluguel." },
      { term: "ATM", pt: "caixa eletrônico", ipa: "/ˌeɪ tiː ˈem/", definition: "A machine that lets you take out money from your bank account.", example: "Is there an ATM near here?", examplePt: "Tem um caixa eletrônico perto daqui?" },
      { term: "engagement", pt: "noivado", ipa: "/ɪnˈɡeɪdʒmənt/", definition: "A formal agreement to get married.", example: "They announced their engagement yesterday.", examplePt: "Eles anunciaram o noivado ontem." },
      { term: "to get engaged", pt: "ficar noivo(a)", ipa: "/ɡet ɪnˈɡeɪdʒd/", definition: "To formally agree to marry someone.", example: "Would you like to get engaged someday?", examplePt: "Você gostaria de noivar um dia?" },
      { term: "to date", pt: "namorar", ipa: "/deɪt/", definition: "To go out regularly with someone romantically.", example: "We only started dating a few months ago.", examplePt: "A gente só começou a namorar há alguns meses." },
      { term: "fiancé / fiancée", pt: "noivo / noiva", ipa: "/ˌfiːɑːnˈseɪ/", definition: "The person you are engaged to marry.", example: "Her fiancé would like to buy a flat.", examplePt: "O noivo dela gostaria de comprar um apartamento." },
      { term: "flat", pt: "apartamento", ipa: "/flæt/", definition: "British English word for apartment.", example: "They'd like to buy a flat downtown.", examplePt: "Eles gostariam de comprar um apartamento no centro." },
      { term: "ship", pt: "navio", ipa: "/ʃɪp/", definition: "A large boat used for long trips at sea.", example: "We'd like to travel by ship this year.", examplePt: "Nós gostaríamos de viajar de navio este ano." },
      { term: "although", pt: "embora", ipa: "/ɔːlˈðoʊ/", definition: "Used to introduce a contrast.", example: "Although it's expensive, I'd like to buy it.", examplePt: "Embora seja caro, eu gostaria de comprar." },
    ],
    expressions: [
      { en: "Good point.", pt: "Boa observação." },
      { en: "By the way,", pt: "A propósito," },
      { en: "not yet", pt: "ainda não" },
      { en: "to rush it", pt: "apressar as coisas" },
      { en: "to keep money in cash", pt: "manter dinheiro em espécie" },
      { en: "someday", pt: "um dia (no futuro)" },
    ],
    grammar: [
      {
        title: { en: "Should / shouldn't — giving advice", pt: "Should / shouldn't — dando conselhos" },
        examples: [
          { en: "You should open a savings account.", pt: "Você deveria abrir uma poupança." },
          { en: "You shouldn't keep all your money in cash.", pt: "Você não deveria manter todo o dinheiro em espécie." },
          { en: "What should I do with my first paycheck?", pt: "O que eu deveria fazer com meu primeiro salário?" },
          { en: "She shouldn't rush the engagement.", pt: "Ela não deveria apressar o noivado." },
        ],
        rule: {
          en: "Use 'should/shouldn't + base verb' to give advice or opinions about what is a good or bad idea. It has the same form for all subjects. Questions invert should and the subject: Should I…?",
          pt: "Use 'should/shouldn't + verbo base' para dar conselhos ou opiniões sobre o que é uma boa ou má ideia. Tem a mesma forma para todos os sujeitos. Perguntas invertem should e o sujeito: Should I…?",
        },
        mistakes: [
          { en: "✗ You should to save money. → ✓ You should save money.", pt: "✗ You should to save money. → ✓ You should save money." },
          { en: "✗ She don't should rush it. → ✓ She shouldn't rush it.", pt: "✗ She don't should rush it. → ✓ She shouldn't rush it." },
        ],
      },
      {
        title: { en: "Would like to / wouldn't like to — wishes", pt: "Would like to / wouldn't like to — desejos" },
        examples: [
          { en: "I'd like to get a checkbook too.", pt: "Eu também gostaria de ter um talão de cheques." },
          { en: "Would you like to get engaged someday?", pt: "Você gostaria de noivar um dia?" },
          { en: "I wouldn't like to rush the engagement.", pt: "Eu não gostaria de apressar o noivado." },
          { en: "We'd like to travel by ship this year.", pt: "Nós gostaríamos de viajar de navio este ano." },
        ],
        rule: {
          en: "Use 'would like to + base verb' to talk about a wish or preference, more polite than 'want to'. Contracted form: I'd, you'd, we'd, they'd. Negative: wouldn't like to. Questions: Would you like to…?",
          pt: "Use 'would like to + verbo base' para falar de um desejo ou preferência, mais educado que 'want to'. Forma contraída: I'd, you'd, we'd, they'd. Negativa: wouldn't like to. Perguntas: Would you like to…?",
        },
        mistakes: [
          { en: "✗ I would like get engaged. → ✓ I would like to get engaged.", pt: "✗ I would like get engaged. → ✓ I would like to get engaged." },
          { en: "✗ Do you would like to travel? → ✓ Would you like to travel?", pt: "✗ Do you would like to travel? → ✓ Would you like to travel?" },
        ],
      },
      {
        title: { en: "Review: object pronouns", pt: "Revisão: pronomes objeto" },
        examples: [
          { en: "I'd like to call him tonight.", pt: "Eu gostaria de ligar para ele hoje à noite." },
          { en: "She should tell her about the account.", pt: "Ela deveria contar a ela sobre a conta." },
          { en: "We shouldn't wait for them.", pt: "Não deveríamos esperar por eles." },
        ],
        rule: {
          en: "Object pronouns (me, you, him, her, it, us, them) go after the verb or preposition, never as the subject: me, him, her, us, them.",
          pt: "Pronomes objeto (me, you, him, her, it, us, them) vêm depois do verbo ou preposição, nunca como sujeito: me, him, her, us, them.",
        },
        mistakes: [
          { en: "✗ Call he tonight. → ✓ Call him tonight.", pt: "✗ Call he tonight. → ✓ Call him tonight." },
          { en: "✗ Tell she the news. → ✓ Tell her the news.", pt: "✗ Tell she the news. → ✓ Tell her the news." },
        ],
      },
    ],
    controlledPractice: [
      { id: "i18d-cp1", prompt: { en: "Complete: 'You ___ open a savings account.'", pt: "Complete: 'You ___ open a savings account.'" }, options: ["should", "would", "must to"], answer: "should", explanation: { en: "Advice = should.", pt: "Conselho = should." } },
      { id: "i18d-cp2", prompt: { en: "Complete: 'I ___ like to get a checkbook.'", pt: "Complete: 'I ___ like to get a checkbook.'" }, options: ["would", "should", "must"], answer: "would", explanation: { en: "Wish = would like to.", pt: "Desejo = would like to." } },
      { id: "i18d-cp3", prompt: { en: "Make it negative: 'You should rush it.'", pt: "Transforme em negativa: 'You should rush it.'" }, options: ["You shouldn't rush it.", "You don't should rush it.", "You aren't should rush it."], answer: "You shouldn't rush it.", explanation: { en: "Should + n't.", pt: "Should + n't." } },
      { id: "i18d-cp4", prompt: { en: "Make it a question: 'You would like to travel.'", pt: "Transforme em pergunta: 'You would like to travel.'" }, options: ["Would you like to travel?", "Do you would like to travel?", "You would like to travel?"], answer: "Would you like to travel?", explanation: { en: "Invert would and the subject.", pt: "Inverta would e o sujeito." } },
      { id: "i18d-cp5", prompt: { en: "Complete: 'Call ___ tonight.' (Rafael)", pt: "Complete: 'Call ___ tonight.' (Rafael)" }, options: ["he", "him", "his"], answer: "him", explanation: { en: "Object pronoun for a man is 'him'.", pt: "Pronome objeto para homem é 'him'." } },
    ],
    input: {
      kind: "listening",
      title: { en: "Money advice podcast", pt: "Podcast de conselhos financeiros" },
      lines: [
        { en: "Hi everyone! Today we're talking about your first paycheck.", pt: "Olá a todos! Hoje vamos falar sobre o primeiro salário de vocês." },
        { en: "You should open a savings account. The interest really adds up.", pt: "Vocês deveriam abrir uma poupança. Os juros aumentam bastante." },
        { en: "You shouldn't keep all your money in cash at home.", pt: "Vocês não deveriam manter todo o dinheiro em espécie em casa." },
        { en: "If you'd like to travel someday, start saving a little every month.", pt: "Se vocês gostariam de viajar um dia, comecem a poupar um pouco todo mês." },
        { en: "And remember: you don't have to spend everything at once!", pt: "E lembrem-se: vocês não precisam gastar tudo de uma vez!" },
      ],
      questions: [
        { id: "i18d-iq1", prompt: { en: "What should you do with your first paycheck?", pt: "O que você deveria fazer com o primeiro salário?" }, options: ["Open a savings account", "Keep it in cash", "Spend it all"], answer: "Open a savings account", explanation: { en: "'You should open a savings account.'", pt: "'Vocês deveriam abrir uma poupança.'" } },
        { id: "i18d-iq2", prompt: { en: "What shouldn't you do?", pt: "O que você não deveria fazer?" }, options: ["Save every month", "Keep all your money in cash", "Open a bank account"], answer: "Keep all your money in cash", explanation: { en: "'You shouldn't keep all your money in cash.'", pt: "'Vocês não deveriam manter todo o dinheiro em espécie.'" } },
        { id: "i18d-iq3", prompt: { en: "What can help if you'd like to travel someday?", pt: "O que pode ajudar se você gostaria de viajar um dia?" }, options: ["Saving a little every month", "Spending everything at once", "Getting a checkbook only"], answer: "Saving a little every month", explanation: { en: "'Start saving a little every month.'", pt: "'Comecem a poupar um pouco todo mês.'" } },
      ],
    },
    quickCheck: [
      { id: "i18d-qc1", prompt: { en: "What does 'engagement' mean?", pt: "O que significa 'engagement'?" }, options: ["A formal agreement to marry", "A bank account", "A trip by ship"], answer: "A formal agreement to marry", explanation: { en: "Engagement = agreement to get married.", pt: "Engagement = acordo para se casar." } },
      { id: "i18d-qc2", prompt: { en: "Choose the polite wish.", pt: "Escolha o desejo educado." }, options: ["I want travel.", "I'd like to travel.", "I must travel."], answer: "I'd like to travel.", explanation: { en: "'Would like to' is more polite than 'want to'.", pt: "'Would like to' é mais educado que 'want to'." } },
      { id: "i18d-qc3", prompt: { en: "'to date' means?", pt: "'to date' significa?" }, options: ["To go out romantically", "To open an account", "To get married"], answer: "To go out romantically", explanation: { en: "To date = to go out with someone romantically.", pt: "To date = sair com alguém romanticamente." } },
      { id: "i18d-qc4", prompt: { en: "Complete: 'Tell ___ about the plan.' (Sofia and Rafael)", pt: "Complete: 'Tell ___ about the plan.' (Sofia e Rafael)" }, options: ["they", "them", "their"], answer: "them", explanation: { en: "Object pronoun for plural people is 'them'.", pt: "Pronome objeto para pessoas no plural é 'them'." } },
    ],
  },
  communicate: {
    id: "INTERMEDIATE-U18-COMMUNICATE",
    review: [
      { en: "You should open a savings account. — advice.", pt: "Você deveria abrir uma poupança. — conselho." },
      { en: "You shouldn't keep all your money in cash. — advice against.", pt: "Você não deveria manter tudo em espécie. — conselho contra." },
      { en: "Would you like to get engaged someday? — future wish.", pt: "Você gostaria de noivar um dia? — desejo futuro." },
      { en: "We'd like to travel by ship. — polite wish.", pt: "Nós gostaríamos de viajar de navio. — desejo educado." },
    ],
    activities: [
      { id: "i18c-a1", title: { en: "Advice Column", pt: "Coluna de conselhos" }, instruction: { en: "Give a friend two pieces of advice with 'should' and one warning with 'shouldn't'.", pt: "Dê a um amigo dois conselhos com 'should' e um aviso com 'shouldn't'." }, phrases: [
        { en: "You should save part of your salary every month.", pt: "Você deveria guardar parte do salário todo mês." },
        { en: "You should ask the bank about the interest rate.", pt: "Você deveria perguntar ao banco sobre a taxa de juros." },
        { en: "You shouldn't spend everything on the first day.", pt: "Você não deveria gastar tudo no primeiro dia." },
      ], check: [
        { id: "i18c-a1q1", prompt: { en: "Which is a warning?", pt: "Qual é um aviso?" }, options: ["You should save money.", "You shouldn't spend it all.", "You would like to save."], answer: "You shouldn't spend it all.", explanation: { en: "'Shouldn't' warns against something.", pt: "'Shouldn't' avisa contra algo." } },
        { id: "i18c-a1q2", prompt: { en: "Complete: 'What ___ I do?'", pt: "Complete: 'What ___ I do?'" }, options: ["should", "would", "must to"], answer: "should", explanation: { en: "Asking for advice uses 'should'.", pt: "Pedir conselho usa 'should'." } },
      ] },
      { id: "i18c-a2", title: { en: "Future Wishes", pt: "Desejos futuros" }, instruction: { en: "Say two things you would like to do and one you wouldn't like to do this year.", pt: "Diga duas coisas que você gostaria de fazer e uma que não gostaria de fazer este ano." }, phrases: [
        { en: "I'd like to open my first bank account.", pt: "Eu gostaria de abrir minha primeira conta bancária." },
        { en: "I'd like to travel by ship someday.", pt: "Eu gostaria de viajar de navio um dia." },
        { en: "I wouldn't like to move to another city this year.", pt: "Eu não gostaria de me mudar para outra cidade este ano." },
      ], check: [
        { id: "i18c-a2q1", prompt: { en: "Complete: 'She ___ like to travel abroad.'", pt: "Complete: 'She ___ like to travel abroad.'" }, options: ["would", "should", "musts"], answer: "would", explanation: { en: "Wish = would like to.", pt: "Desejo = would like to." } },
        { id: "i18c-a2q2", prompt: { en: "Negative form of 'would like to'?", pt: "Forma negativa de 'would like to'?" }, options: ["wouldn't like to", "don't would like to", "not would like to"], answer: "wouldn't like to", explanation: { en: "Would + n't like to.", pt: "Would + n't like to." } },
      ] },
      { id: "i18c-a3", title: { en: "Talking About Them", pt: "Falando sobre eles" }, instruction: { en: "Talk about a couple you know using object pronouns (him, her, them).", pt: "Fale sobre um casal que você conhece usando pronomes objeto (him, her, them)." }, phrases: [
        { en: "I met him at a party last year.", pt: "Eu o conheci em uma festa ano passado." },
        { en: "She would like to marry him someday.", pt: "Ela gostaria de se casar com ele algum dia." },
        { en: "We should invite them for dinner.", pt: "Deveríamos convidá-los para jantar." },
      ], check: [
        { id: "i18c-a3q1", prompt: { en: "Choose the correct object pronoun for 'Sofia'.", pt: "Escolha o pronome objeto correto para 'Sofia'." }, options: ["she", "her", "hers"], answer: "her", explanation: { en: "Object pronoun for a woman is 'her'.", pt: "Pronome objeto para mulher é 'her'." } },
        { id: "i18c-a3q2", prompt: { en: "Choose the correct sentence.", pt: "Escolha a frase correta." }, options: ["Call they tonight.", "Call them tonight.", "Call their tonight."], answer: "Call them tonight.", explanation: { en: "Object pronoun for plural is 'them'.", pt: "Pronome objeto para plural é 'them'." } },
      ] },
    ],
    challenge: {
      id: "i18c-cc1",
      title: { en: "Advice for a Friend", pt: "Conselho para um amigo" },
      instruction: { en: "Give a friend advice about money and relationships out loud. Use 'should/shouldn't', 'would like to' and object pronouns.", pt: "Dê conselhos a um amigo sobre dinheiro e relacionamentos em voz alta. Use 'should/shouldn't', 'would like to' e pronomes objeto." },
      phrases: [
        { en: "You should open a savings account and save part of your salary.", pt: "Você deveria abrir uma poupança e guardar parte do salário." },
        { en: "You shouldn't rush the engagement.", pt: "Você não deveria apressar o noivado." },
        { en: "If you'd like to travel with him, start planning now.", pt: "Se você gostaria de viajar com ele, comece a planejar agora." },
        { en: "You should talk to her about it.", pt: "Você deveria conversar com ela sobre isso." },
      ],
      check: [
        { id: "i18c-cc1q1", prompt: { en: "Did you give at least two pieces of advice with should/shouldn't?", pt: "Você deu pelo menos dois conselhos com should/shouldn't?" }, options: ["Yes", "No", "Partially"], answer: "Yes", explanation: { en: "Self-check: advice with should/shouldn't.", pt: "Autoavaliação: conselhos com should/shouldn't." } },
        { id: "i18c-cc1q2", prompt: { en: "Did you use 'would like to' for a wish?", pt: "Você usou 'would like to' para um desejo?" }, options: ["Yes", "No", "Partially"], answer: "Yes", explanation: { en: "Self-check: would like to + base verb.", pt: "Autoavaliação: would like to + verbo base." } },
      ],
    },
    lessonReview: {
      summary: { en: "You gave advice with 'should/shouldn't', talked about wishes with 'would like to' and reviewed object pronouns.", pt: "Você deu conselhos com 'should/shouldn't', falou de desejos com 'would like to' e revisou pronomes objeto." },
      canDo: [
        { en: "I can give advice with 'should' and 'shouldn't'.", pt: "Consigo dar conselhos com 'should' e 'shouldn't'." },
        { en: "I can talk about wishes with 'would like to'.", pt: "Consigo falar de desejos com 'would like to'." },
        { en: "I can use banking and relationship vocabulary.", pt: "Consigo usar vocabulário de banco e relacionamentos." },
        { en: "I can use object pronouns correctly.", pt: "Consigo usar pronomes objeto corretamente." },
      ],
      next: { en: "Next unit: comparing modal verbs (must, should, could, would) and kitchen and car vocabulary.", pt: "Próxima unidade: comparar verbos modais (must, should, could, would) e vocabulário de cozinha e carro." },
    },
  },
};
