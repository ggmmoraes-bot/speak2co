import type { CourseUnit } from "./types";

/**
 * Intermediate — Unit 4 (Back Then). Conteúdo autoral Speak2Co.
 * Foco: passado simples do verbo "be" (was/were), o verbo irregular "take"
 * (took), formas de tratamento (Mr./Mrs./Miss) e plurais irregulares.
 * Personagens originais: Marina, Theo e Rafa, amigos que dividem apartamento,
 * olhando fotos antigas da escola.
 */
export const INTERMEDIATE_U04: CourseUnit = {
  code: "INTERMEDIATE-U04",
  number: 4,
  title: "Back Then — Was your childhood different?",
  titlePt: "Antigamente — Sua infância era diferente?",
  cefr: "B1",
  objective: {
    en: "Talk about the past with 'was/were', use the irregular verb 'take' (took), address people with Mr./Mrs./Miss, and use irregular plurals.",
    pt: "Falar sobre o passado com 'was/were', usar o verbo irregular 'take' (took), tratar pessoas com Mr./Mrs./Miss e usar plurais irregulares.",
  },
  communicationGoal: {
    en: "Look at old photos with friends and describe what people, places and things were like, and what people took or did back then.",
    pt: "Olhar fotos antigas com amigos e descrever como pessoas, lugares e coisas eram, e o que as pessoas levavam ou faziam antigamente.",
  },
  prerequisites: {
    en: "Intermediate Unit 1–3: 'be going to', simple past of do/pay/put, present continuous review.",
    pt: "Intermediate Unidades 1–3: 'be going to', passado simples de do/pay/put, revisão do presente contínuo.",
  },
  newContent: {
    en: "Grammar: simple past of 'be' (was/were) + irregular verb 'take' (took) | Vocabulary: titles Mr./Mrs./Miss and irregular plurals (child/children, person/people, man/men, woman/women, foot/feet, tooth/teeth) | Expressions: talking about the past",
    pt: "Gramática: passado simples do verbo 'be' (was/were) + verbo irregular 'take' (took) | Vocabulário: formas de tratamento Mr./Mrs./Miss e plurais irregulares (child/children, person/people, man/men, woman/women, foot/feet, tooth/teeth) | Expressões: falar do passado",
  },
  reviewContent: {
    en: "Review of simple past questions and negatives (did/didn't) from Units 1–3.",
    pt: "Revisão de perguntas e negativas no passado simples (did/didn't) das Unidades 1–3.",
  },
  discover: {
    id: "INTERMEDIATE-U04-DISCOVER",
    warmUp: {
      prompt: {
        en: "Look at the picture. What was different back then? Who were these people?",
        pt: "Observe a imagem. O que era diferente antigamente? Quem eram essas pessoas?",
      },
      phrases: [
        { en: "Was your school different from schools today?", pt: "Sua escola era diferente das escolas de hoje?" },
        { en: "Were you a shy child or a talkative one?", pt: "Você era uma criança tímida ou falante?" },
        { en: "What did you take to school every day?", pt: "O que você levava para a escola todos os dias?" },
      ],
    },
    context: {
      situation: {
        en: "Sunday afternoon. Marina found an old box of photos in the closet. She, Theo and Rafa are looking at pictures from their school days.",
        pt: "Domingo à tarde. Marina achou uma caixa velha de fotos no armário. Ela, Theo e Rafa estão olhando fotos da época da escola.",
      },
      dialogue: [
        { who: "Marina", en: "Look at this photo! We were so young. Was I really that short?", pt: "Olha essa foto! Éramos tão jovens. Eu era mesmo tão baixinha?" },
        { who: "Theo", en: "Yes, you were! And Rafa's teeth were huge back then.", pt: "Era sim! E os dentes do Rafa eram enormes naquela época." },
        { who: "Rafa", en: "Very funny. Who was that woman next to Mrs. Lopes?", pt: "Muito engraçado. Quem era aquela mulher ao lado da Sra. Lopes?" },
        { who: "Marina", en: "That was Miss Andrade, the new teacher. She was really strict.", pt: "Aquela era a Miss Andrade, a professora nova. Ela era bem rígida." },
        { who: "Theo", en: "And that man was Mr. Costa, remember? He always took his dog to the school gate.", pt: "E aquele homem era o Sr. Costa, lembra? Ele sempre levava o cachorro dele até o portão da escola." },
        { who: "Rafa", en: "Right! We took the same bus every morning, all the children from our street.", pt: "É verdade! Pegávamos o mesmo ônibus toda manhã, todas as crianças da nossa rua." },
        { who: "Marina", en: "There were so many people in that little bus! Men, women, children… it was crowded.", pt: "Tinha tanta gente naquele ônibus pequeno! Homens, mulheres, crianças… era lotado." },
        { who: "Theo", en: "I took a photo of it once. Look, my feet were on the seat! I was in trouble that day.", pt: "Eu tirei uma foto disso uma vez. Olha, meus pés estavam no banco! Eu me dei mal naquele dia." },
      ],
    },
    vocabulary: [
      { term: "childhood", pt: "infância", ipa: "/ˈtʃaɪldhʊd/", definition: "The period of your life when you are a child.", example: "My childhood was full of good memories.", examplePt: "Minha infância foi cheia de boas lembranças." },
      { term: "child (children)", pt: "criança (crianças)", ipa: "/tʃaɪld/", definition: "A young person; plural is irregular: children.", example: "There were ten children on the bus.", examplePt: "Tinha dez crianças no ônibus." },
      { term: "person (people)", pt: "pessoa (pessoas)", ipa: "/ˈpɜːrsən/", definition: "A human being; plural is irregular: people.", example: "There were a lot of people in the photo.", examplePt: "Tinha muita gente na foto." },
      { term: "man (men)", pt: "homem (homens)", ipa: "/mæn/", definition: "An adult male person; plural is irregular: men.", example: "The men in the picture were our teachers.", examplePt: "Os homens na foto eram nossos professores." },
      { term: "woman (women)", pt: "mulher (mulheres)", ipa: "/ˈwʊmən/", definition: "An adult female person; plural is irregular: women.", example: "Two women were standing near the door.", examplePt: "Duas mulheres estavam perto da porta." },
      { term: "foot (feet)", pt: "pé (pés)", ipa: "/fʊt/", definition: "The part of the body you stand on; plural is irregular: feet.", example: "My feet were on the seat.", examplePt: "Meus pés estavam no banco." },
      { term: "tooth (teeth)", pt: "dente (dentes)", ipa: "/tuːθ/", definition: "One of the hard white parts in your mouth; plural is irregular: teeth.", example: "His teeth were huge when he was a kid.", examplePt: "Os dentes dele eram enormes quando ele era criança." },
      { term: "strict", pt: "rígido, exigente", ipa: "/strɪkt/", definition: "Expecting people to follow rules carefully.", example: "Our old teacher was very strict.", examplePt: "Nossa professora antiga era bem rígida." },
      { term: "crowded", pt: "lotado", ipa: "/ˈkraʊdɪd/", definition: "Full of people.", example: "The little bus was very crowded.", examplePt: "O ônibus pequeno estava muito lotado." },
      { term: "gate", pt: "portão", ipa: "/ɡeɪt/", definition: "A door in a fence or outside wall.", example: "He waited for me at the school gate.", examplePt: "Ele me esperava no portão da escola." },
      { term: "in trouble", pt: "encrencado, em apuros", ipa: "/ɪn ˈtrʌbəl/", definition: "In a situation where you may be punished.", example: "I was in trouble for putting my feet on the seat.", examplePt: "Eu me dei mal por colocar os pés no banco." },
      { term: "memory", pt: "lembrança, memória", ipa: "/ˈmeməri/", definition: "Something you remember from the past.", example: "That photo brings back a good memory.", examplePt: "Aquela foto traz uma boa lembrança." },
    ],
    expressions: [
      { en: "Back then…", pt: "Naquela época… / Antigamente…" },
      { en: "Remember when…?", pt: "Lembra quando…?" },
      { en: "So young!", pt: "Tão jovem!" },
      { en: "Very funny.", pt: "Muito engraçado." },
      { en: "That's true. / Right!", pt: "É verdade! / Isso mesmo!" },
      { en: "I was in trouble.", pt: "Eu me dei mal." },
    ],
    grammar: [
      {
        title: { en: "Simple past of 'be' — was/were", pt: "Passado simples de 'be' — was/were" },
        examples: [
          { en: "I was a shy child.", pt: "Eu era uma criança tímida." },
          { en: "We were so young in that photo.", pt: "Éramos tão jovens naquela foto." },
          { en: "She wasn't strict at all.", pt: "Ela não era nada rígida." },
          { en: "They weren't in the same class.", pt: "Eles não eram da mesma turma." },
          { en: "Was I really that short?", pt: "Eu era mesmo tão baixinha?" },
          { en: "Were there many children on the bus?", pt: "Tinha muitas crianças no ônibus?" },
        ],
        rule: {
          en: "Use 'was' with I/he/she/it and 'were' with you/we/they. Negative: wasn't / weren't. Questions: invert was/were and the subject. 'There was/There were' describes what existed in the past.",
          pt: "Use 'was' com I/he/she/it e 'were' com you/we/they. Negativa: wasn't / weren't. Perguntas: inverta was/were e o sujeito. 'There was/There were' descreve o que existia no passado.",
        },
        mistakes: [
          { en: "✗ We was young. → ✓ We were young. (we takes 'were')", pt: "✗ We was young. → ✓ We were young. (we usa 'were')" },
          { en: "✗ She were strict. → ✓ She was strict. (she takes 'was')", pt: "✗ She were strict. → ✓ She was strict. (she usa 'was')" },
          { en: "✗ Was there many people? → ✓ Were there many people? (plural takes 'were')", pt: "✗ Was there many people? → ✓ Were there many people? (plural usa 'were')" },
        ],
      },
      {
        title: { en: "Irregular verb 'take' — took", pt: "Verbo irregular 'take' — took" },
        examples: [
          { en: "We took the same bus every morning.", pt: "Pegávamos o mesmo ônibus toda manhã." },
          { en: "Mr. Costa took his dog to the gate.", pt: "O Sr. Costa levava o cachorro dele até o portão." },
          { en: "I didn't take any photos that day.", pt: "Eu não tirei nenhuma foto naquele dia." },
          { en: "Did you take the bus to school too?", pt: "Você também pegava o ônibus para a escola?" },
        ],
        rule: {
          en: "'Take' → 'took' in the affirmative simple past. In negatives and questions, use didn't/did + take (base form): I didn't take it. Did you take it? Common uses: take a bus, take a photo, take care of, take a class.",
          pt: "'Take' → 'took' na afirmativa do passado simples. Na negativa e na pergunta, use didn't/did + take (forma base): I didn't take it. Did you take it? Usos comuns: take a bus, take a photo, take care of, take a class.",
        },
        mistakes: [
          { en: "✗ I taked a photo. → ✓ I took a photo. (irregular verb)", pt: "✗ I taked a photo. → ✓ I took a photo. (verbo irregular)" },
          { en: "✗ Did you took the bus? → ✓ Did you take the bus? (base form after did)", pt: "✗ Did you took the bus? → ✓ Did you take the bus? (forma base depois de did)" },
        ],
      },
      {
        title: { en: "Mr./Mrs./Miss — talking about people", pt: "Mr./Mrs./Miss — falando de pessoas" },
        examples: [
          { en: "That man was Mr. Costa.", pt: "Aquele homem era o Sr. Costa." },
          { en: "Mrs. Lopes was our first teacher.", pt: "A Sra. Lopes foi nossa primeira professora." },
          { en: "Miss Andrade was the new teacher.", pt: "A Miss Andrade era a professora nova." },
        ],
        rule: {
          en: "Mr. (any man), Mrs. (a married woman) and Miss (an unmarried woman, or a female teacher) come before a last name: Mr. Costa, Mrs. Lopes, Miss Andrade. Today Ms. is also common when a woman's marital status isn't important.",
          pt: "Mr. (qualquer homem), Mrs. (mulher casada) e Miss (mulher solteira, ou professora) vêm antes do sobrenome: Mr. Costa, Mrs. Lopes, Miss Andrade. Hoje Ms. também é comum quando o estado civil não é importante.",
        },
        mistakes: [
          { en: "✗ Mr. John → ✓ Mr. Silva (use the last name, not the first name)", pt: "✗ Mr. John → ✓ Mr. Silva (use o sobrenome, não o primeiro nome)" },
        ],
      },
      {
        title: { en: "Irregular plurals", pt: "Plurais irregulares" },
        examples: [
          { en: "There were a lot of children on the bus.", pt: "Tinha muitas crianças no ônibus." },
          { en: "The men and women in the photo were our neighbors.", pt: "Os homens e mulheres na foto eram nossos vizinhos." },
          { en: "My feet were on the seat.", pt: "Meus pés estavam no banco." },
          { en: "His teeth were huge back then.", pt: "Os dentes dele eram enormes naquela época." },
        ],
        rule: {
          en: "Some plurals don't take -s: child → children, person → people, man → men, woman → women, foot → feet, tooth → teeth. Use them with 'were' because they are plural.",
          pt: "Alguns plurais não usam -s: child → children, person → people, man → men, woman → women, foot → feet, tooth → teeth. Use com 'were' porque são plurais.",
        },
        mistakes: [
          { en: "✗ two childs → ✓ two children", pt: "✗ two childs → ✓ two children" },
          { en: "✗ three persons → ✓ three people", pt: "✗ three persons → ✓ three people" },
        ],
      },
    ],
    controlledPractice: [
      { id: "i4d-cp1", prompt: { en: "Complete: 'We ___ so young in that photo.'", pt: "Complete: 'We ___ so young in that photo.'" }, options: ["was", "were", "is"], answer: "were", explanation: { en: "'We' takes 'were'.", pt: "'We' usa 'were'." } },
      { id: "i4d-cp2", prompt: { en: "Choose the correct negative: 'Mrs. Lopes ___ strict.'", pt: "Escolha a negativa correta: 'Mrs. Lopes ___ strict.'" }, options: ["wasn't", "weren't", "didn't"], answer: "wasn't", explanation: { en: "'Mrs. Lopes' (she) takes 'wasn't'.", pt: "'Mrs. Lopes' (she) usa 'wasn't'." } },
      { id: "i4d-cp3", prompt: { en: "Past of 'take': 'He ___ his dog to the gate.'", pt: "Passado de 'take': 'He ___ his dog to the gate.'" }, options: ["taked", "took", "take"], answer: "took", explanation: { en: "'Take' is irregular: took.", pt: "'Take' é irregular: took." } },
      { id: "i4d-cp4", prompt: { en: "Make a question: 'You took the bus to school.'", pt: "Transforme em pergunta: 'You took the bus to school.'" }, options: ["Did you took the bus to school?", "Did you take the bus to school?", "You did take the bus to school?"], answer: "Did you take the bus to school?", explanation: { en: "Use did + base verb in questions.", pt: "Use did + verbo base nas perguntas." } },
      { id: "i4d-cp5", prompt: { en: "Choose the correct plural: 'There were ten ___ on the bus.'", pt: "Escolha o plural correto: 'There were ten ___ on the bus.'" }, options: ["childs", "children", "childrens"], answer: "children", explanation: { en: "'Child' has an irregular plural: children.", pt: "'Child' tem plural irregular: children." } },
    ],
    input: {
      kind: "reading",
      title: { en: "A page from Marina's old diary", pt: "Uma página do diário antigo da Marina" },
      lines: [
        { en: "My school was small, but there were a lot of children in my class.", pt: "Minha escola era pequena, mas tinha muitas crianças na minha turma." },
        { en: "Mrs. Lopes was my first teacher. She wasn't strict, but Miss Andrade was.", pt: "A Sra. Lopes foi minha primeira professora. Ela não era rígida, mas a Miss Andrade era." },
        { en: "Every morning, Theo, Rafa and I took the same crowded bus.", pt: "Toda manhã, eu, o Theo e o Rafa pegávamos o mesmo ônibus lotado." },
        { en: "Mr. Costa always took his dog to the school gate to wait for his son.", pt: "O Sr. Costa sempre levava o cachorro dele até o portão da escola para esperar o filho." },
        { en: "Those were good times. My feet were always dirty and my teeth were too big for my mouth!", pt: "Aqueles eram bons tempos. Meus pés sempre estavam sujos e meus dentes eram grandes demais para minha boca!" },
      ],
      questions: [
        { id: "i4d-iq1", prompt: { en: "Who was Marina's first teacher?", pt: "Quem foi a primeira professora da Marina?" }, options: ["Miss Andrade", "Mrs. Lopes", "Mr. Costa"], answer: "Mrs. Lopes", explanation: { en: "'Mrs. Lopes was my first teacher.'", pt: "'A Sra. Lopes foi minha primeira professora.'" } },
        { id: "i4d-iq2", prompt: { en: "How did the friends get to school?", pt: "Como os amigos iam para a escola?" }, options: ["By car", "On foot", "By bus"], answer: "By bus", explanation: { en: "'We took the same crowded bus.'", pt: "'Pegávamos o mesmo ônibus lotado.'" } },
        { id: "i4d-iq3", prompt: { en: "Why did Mr. Costa go to the school gate?", pt: "Por que o Sr. Costa ia até o portão da escola?" }, options: ["To teach a class", "To wait for his son", "To take a photo"], answer: "To wait for his son", explanation: { en: "'He took his dog to the school gate to wait for his son.'", pt: "'Ele levava o cachorro até o portão para esperar o filho.'" } },
      ],
    },
    quickCheck: [
      { id: "i4d-qc1", prompt: { en: "What does 'crowded' mean?", pt: "O que significa 'crowded'?" }, options: ["Full of people", "Very quiet", "Very old"], answer: "Full of people", explanation: { en: "A crowded place has a lot of people.", pt: "Um lugar crowded tem muita gente." } },
      { id: "i4d-qc2", prompt: { en: "Choose the correct negative.", pt: "Escolha a negativa correta." }, options: ["They weren't in my class.", "They wasn't in my class.", "They didn't were in my class."], answer: "They weren't in my class.", explanation: { en: "'They' takes 'weren't'.", pt: "'They' usa 'weren't'." } },
      { id: "i4d-qc3", prompt: { en: "Irregular plural of 'foot'?", pt: "Plural irregular de 'foot'?" }, options: ["foots", "feet", "feets"], answer: "feet", explanation: { en: "'Foot' → 'feet' (irregular).", pt: "'Foot' → 'feet' (irregular)." } },
      { id: "i4d-qc4", prompt: { en: "Which title is used for a married woman?", pt: "Qual título é usado para uma mulher casada?" }, options: ["Mr.", "Mrs.", "Miss"], answer: "Mrs.", explanation: { en: "'Mrs.' is used for a married woman.", pt: "'Mrs.' é usado para uma mulher casada." } },
    ],
  },
  communicate: {
    id: "INTERMEDIATE-U04-COMMUNICATE",
    review: [
      { en: "We were so young. — was/were in the simple past.", pt: "Éramos tão jovens. — was/were no passado simples." },
      { en: "We took the same bus every morning. — irregular verb 'take'.", pt: "Pegávamos o mesmo ônibus toda manhã. — verbo irregular 'take'." },
      { en: "Mr. Costa, Mrs. Lopes, Miss Andrade. — titles for people.", pt: "Mr. Costa, Mrs. Lopes, Miss Andrade. — formas de tratamento." },
      { en: "There were a lot of children and people. — irregular plurals.", pt: "Tinha muitas crianças e pessoas. — plurais irregulares." },
    ],
    activities: [
      {
        id: "i4c-a1",
        title: { en: "My Old School", pt: "Minha escola antiga" },
        instruction: { en: "Describe your old school. Say what it was like and who your teachers were.", pt: "Descreva sua escola antiga. Diga como ela era e quem eram seus professores." },
        phrases: [
          { en: "My school was small and old.", pt: "Minha escola era pequena e antiga." },
          { en: "My teacher, Mrs. Ramos, was very kind.", pt: "Minha professora, a Sra. Ramos, era muito gentil." },
          { en: "There were about thirty children in my class.", pt: "Tinha cerca de trinta crianças na minha turma." },
        ],
        check: [
          { id: "i4c-a1q1", prompt: { en: "Which sentence describes the past correctly?", pt: "Qual frase descreve o passado corretamente?" }, options: ["My school were big.", "My school was big.", "My school is big back then."], answer: "My school was big.", explanation: { en: "'School' (it) takes 'was'.", pt: "'School' (it) usa 'was'." } },
          { id: "i4c-a1q2", prompt: { en: "Complete: 'There ___ many students in the class.'", pt: "Complete: 'There ___ many students in the class.'" }, options: ["was", "were", "is"], answer: "were", explanation: { en: "Plural subject takes 'were'.", pt: "Sujeito plural usa 'were'." } },
        ],
      },
      {
        id: "i4c-a2",
        title: { en: "What Did You Take?", pt: "O que você levava?" },
        instruction: { en: "Talk about what you used to take to school every day, and how you got there.", pt: "Fale sobre o que você levava para a escola todos os dias e como ia até lá." },
        phrases: [
          { en: "I took a small backpack with my books.", pt: "Eu levava uma mochila pequena com meus livros." },
          { en: "I took the bus with my friends every day.", pt: "Eu pegava o ônibus com meus amigos todo dia." },
          { en: "I didn't take a phone to school back then.", pt: "Eu não levava celular para a escola naquela época." },
        ],
        check: [
          { id: "i4c-a2q1", prompt: { en: "Choose the correct question.", pt: "Escolha a pergunta correta." }, options: ["Did you took a backpack?", "Did you take a backpack?", "You took a backpack?"], answer: "Did you take a backpack?", explanation: { en: "Did + base verb in questions.", pt: "Did + verbo base nas perguntas." } },
          { id: "i4c-a2q2", prompt: { en: "Complete: 'She ___ care of her little brother.'", pt: "Complete: 'She ___ care of her little brother.'" }, options: ["took", "taked", "take"], answer: "took", explanation: { en: "'Take care of' → 'took care of' in the past.", pt: "'Take care of' → 'took care of' no passado." } },
        ],
      },
      {
        id: "i4c-a3",
        title: { en: "Old Photos", pt: "Fotos antigas" },
        instruction: { en: "Describe an old photo of your family or friends. Say who the people were and use titles like Mr./Mrs./Miss.", pt: "Descreva uma foto antiga da sua família ou amigos. Diga quem eram as pessoas e use títulos como Mr./Mrs./Miss." },
        phrases: [
          { en: "This man was Mr. Alves, my grandfather's friend.", pt: "Esse homem era o Sr. Alves, amigo do meu avô." },
          { en: "The woman next to him was Mrs. Alves, his wife.", pt: "A mulher ao lado dele era a Sra. Alves, esposa dele." },
          { en: "There were a lot of people at that party.", pt: "Tinha muita gente naquela festa." },
        ],
        check: [
          { id: "i4c-a3q1", prompt: { en: "Irregular plural of 'person'?", pt: "Plural irregular de 'person'?" }, options: ["persons", "people", "peoples"], answer: "people", explanation: { en: "'Person' → 'people' (irregular).", pt: "'Person' → 'people' (irregular)." } },
          { id: "i4c-a3q2", prompt: { en: "Which title fits an unmarried teacher?", pt: "Qual título combina com uma professora solteira?" }, options: ["Mr.", "Mrs.", "Miss"], answer: "Miss", explanation: { en: "'Miss' is used for an unmarried woman or a female teacher.", pt: "'Miss' é usado para mulher solteira ou professora." } },
        ],
      },
    ],
    challenge: {
      id: "i4c-cc1",
      title: { en: "Tell a Story About Your Childhood", pt: "Conte uma história sobre sua infância" },
      instruction: {
        en: "Tell a short story out loud about your childhood. Describe what your school was like, who a teacher or neighbor was (use Mr./Mrs./Miss), and one thing you took with you every day.",
        pt: "Conte em voz alta uma pequena história sobre sua infância. Descreva como era sua escola, quem era um professor ou vizinho (use Mr./Mrs./Miss) e uma coisa que você levava todos os dias.",
      },
      phrases: [
        { en: "My childhood was full of good memories.", pt: "Minha infância foi cheia de boas lembranças." },
        { en: "Mrs. Nunes was my neighbor. She was very friendly.", pt: "A Sra. Nunes era minha vizinha. Ela era muito simpática." },
        { en: "There were a lot of children on my street.", pt: "Tinha muitas crianças na minha rua." },
        { en: "I took my bike to the park every afternoon.", pt: "Eu levava minha bicicleta ao parque toda tarde." },
      ],
      check: [
        { id: "i4c-cc1q1", prompt: { en: "Did you use 'was/were' at least twice?", pt: "Você usou 'was/were' pelo menos duas vezes?" }, options: ["Yes", "No", "Partially"], answer: "Yes", explanation: { en: "Self-check: was/were for the simple past of 'be'.", pt: "Autoavaliação: was/were no passado simples de 'be'." } },
        { id: "i4c-cc1q2", prompt: { en: "Did you use 'took' at least once?", pt: "Você usou 'took' pelo menos uma vez?" }, options: ["Yes", "No", "Partially"], answer: "Yes", explanation: { en: "Self-check: 'take' → 'took' in the past.", pt: "Autoavaliação: 'take' → 'took' no passado." } },
      ],
    },
    lessonReview: {
      summary: {
        en: "You talked about the past with 'was/were', used the irregular verb 'take' (took), used Mr./Mrs./Miss, and used irregular plurals.",
        pt: "Você falou do passado com 'was/were', usou o verbo irregular 'take' (took), usou Mr./Mrs./Miss e usou plurais irregulares.",
      },
      canDo: [
        { en: "I can describe the past with 'was' and 'were'.", pt: "Consigo descrever o passado com 'was' e 'were'." },
        { en: "I can use 'took' to talk about the past.", pt: "Consigo usar 'took' para falar do passado." },
        { en: "I can address people with Mr., Mrs. and Miss.", pt: "Consigo tratar pessoas com Mr., Mrs. e Miss." },
        { en: "I can use irregular plurals like children, people, men and women.", pt: "Consigo usar plurais irregulares como children, people, men e women." },
      ],
      next: { en: "Next unit: What were you doing? — talking about actions in progress in the past.", pt: "Próxima unidade: O que você estava fazendo? — falar de ações em andamento no passado." },
    },
  },
};
