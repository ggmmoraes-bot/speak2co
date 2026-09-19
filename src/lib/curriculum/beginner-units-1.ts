import type { CourseUnit } from "./types";

/** Speak2Co — Beginner English Course (A1). Units 1–3 do currículo oficial. */
export const BEGINNER_UNITS_1_3: CourseUnit[] = [
  {
    code: "BEGINNER-U01",
    number: 1,
    title: "First Contact — Say who you are",
    titlePt: "Primeiro contato — Diga quem você é",
    cefr: "A1",
    objective: {
      en: "Use subject pronouns with the verb to be in affirmative sentences to say who you are, where you are from and what you do.",
      pt: "Usar pronomes pessoais com o verbo to be em frases afirmativas para dizer quem você é, de onde vem e o que faz.",
    },
    communicationGoal: {
      en: "You can greet someone new and share four pieces of personal information about yourself.",
      pt: "Você consegue cumprimentar alguém novo e dar quatro informações pessoais sobre você.",
    },
    prerequisites: {
      en: "No prerequisites — this is your first contact with the course.",
      pt: "Sem pré-requisitos — este é seu primeiro contato com o curso.",
    },
    newContent: {
      en: "Grammar: subject pronouns + to be (affirmative). Vocabulary: personal information. Expressions: first greetings.",
      pt: "Gramática: pronomes pessoais + to be (afirmativo). Vocabulário: informações pessoais. Expressões: primeiros cumprimentos.",
    },
    reviewContent: {
      en: "Nothing to review yet — everything here is new.",
      pt: "Nada a revisar ainda — tudo aqui é novo.",
    },
    discover: {
      id: "BEGINNER-U01-DISCOVER",
      warmUp: {
        prompt: {
          en: "Look at the picture. Three people are meeting for the first time. What do they say in the first ten seconds?",
          pt: "Observe a imagem. Três pessoas estão se conhecendo. O que elas dizem nos dez primeiros segundos?",
        },
        phrases: [
          { en: "Hello! I am Bruno.", pt: "Olá! Eu sou o Bruno." },
          { en: "I am from Salvador.", pt: "Eu sou de Salvador." },
          { en: "She is a designer.", pt: "Ela é designer." },
        ],
      },
      context: {
        situation: {
          en: "Monday morning at a coworking space. Bruno arrives and meets two new colleagues.",
          pt: "Segunda-feira de manhã em um coworking. Bruno chega e conhece dois colegas novos.",
        },
        dialogue: [
          { who: "Bruno", en: "Good morning! I am Bruno. I am new here.", pt: "Bom dia! Eu sou o Bruno. Sou novo aqui." },
          { who: "Helena", en: "Welcome, Bruno! I am Helena. This is Ivan.", pt: "Bem-vindo, Bruno! Eu sou a Helena. Este é o Ivan." },
          { who: "Ivan", en: "Nice to meet you. He is my partner and we are architects.", pt: "Prazer em conhecer você. Ele é meu sócio e nós somos arquitetos." },
          { who: "Bruno", en: "Nice to meet you too. I am a photographer.", pt: "Prazer em conhecer vocês também. Eu sou fotógrafo." },
          { who: "Helena", en: "Great! You are on the second floor with us.", pt: "Ótimo! Você fica no segundo andar com a gente." },
        ],
      },
      vocabulary: [
        { term: "name", pt: "nome", ipa: "/neɪm/", definition: "The word people use to call you.", example: "My name is Bruno.", examplePt: "Meu nome é Bruno." },
        { term: "surname", pt: "sobrenome", ipa: "/ˈsɜːrneɪm/", definition: "Your family name.", example: "My surname is short.", examplePt: "Meu sobrenome é curto." },
        { term: "age", pt: "idade", ipa: "/eɪdʒ/", definition: "How many years old you are.", example: "My age is thirty-one.", examplePt: "Minha idade é trinta e um." },
        { term: "city", pt: "cidade", ipa: "/ˈsɪti/", definition: "The town where you live.", example: "My city is Salvador.", examplePt: "Minha cidade é Salvador." },
        { term: "country", pt: "país", ipa: "/ˈkʌntri/", definition: "The nation you come from.", example: "My country is Brazil.", examplePt: "Meu país é o Brasil." },
        { term: "job", pt: "trabalho, profissão", ipa: "/dʒɑːb/", definition: "The work you do every day.", example: "My job is photography.", examplePt: "Meu trabalho é fotografia." },
        { term: "colleague", pt: "colega de trabalho", ipa: "/ˈkɑːliːɡ/", definition: "A person you work with.", example: "She is my colleague.", examplePt: "Ela é minha colega." },
        { term: "team", pt: "equipe", ipa: "/tiːm/", definition: "A group of people who work together.", example: "We are a small team.", examplePt: "Nós somos uma equipe pequena." },
        { term: "floor", pt: "andar", ipa: "/flɔːr/", definition: "One level of a building.", example: "It is on the second floor.", examplePt: "É no segundo andar." },
        { term: "welcome", pt: "bem-vindo", ipa: "/ˈwelkəm/", definition: "A friendly word for someone who arrives.", example: "You are welcome here.", examplePt: "Você é bem-vindo aqui." },
      ],
      expressions: [
        { en: "Good morning!", pt: "Bom dia!" },
        { en: "Nice to meet you.", pt: "Prazer em conhecer você." },
        { en: "I am new here.", pt: "Eu sou novo aqui." },
        { en: "This is my colleague.", pt: "Este é meu colega." },
      ],
      grammar: [
        {
          title: { en: "Subject pronouns + to be (affirmative)", pt: "Pronomes pessoais + to be (afirmativo)" },
          examples: [
            { en: "I am a photographer.", pt: "Eu sou fotógrafo." },
            { en: "He is my partner.", pt: "Ele é meu sócio." },
            { en: "We are architects.", pt: "Nós somos arquitetos." },
          ],
          rule: {
            en: "Use am with I, is with he / she / it, and are with you / we / they.",
            pt: "Use am com I, is com he / she / it, e are com you / we / they.",
          },
          mistakes: [
            { en: "I is new here. → I am new here.", pt: "I sempre usa am." },
            { en: "They is architects. → They are architects.", pt: "They sempre usa are." },
          ],
        },
        {
          title: { en: "Short forms in real speech", pt: "Formas contraídas na fala real" },
          examples: [
            { en: "I'm Bruno.", pt: "Eu sou o Bruno." },
            { en: "She's my colleague.", pt: "Ela é minha colega." },
            { en: "We're on the second floor.", pt: "Nós estamos no segundo andar." },
          ],
          rule: {
            en: "In conversation, people say I'm, you're, he's, she's, we're, they're. The meaning is the same.",
            pt: "Na conversa, as pessoas dizem I'm, you're, he's, she's, we're, they're. O sentido é o mesmo.",
          },
          mistakes: [
            { en: "I'am Bruno. → I'm Bruno.", pt: "O apóstrofo substitui a letra a de am." },
            { en: "She's is my colleague. → She's my colleague.", pt: "Não repita o verbo depois da contração." },
          ],
        },
      ],
      controlledPractice: [
        {
          id: "b1d-cp1",
          prompt: { en: "Complete: I ___ a photographer.", pt: "Complete: I ___ a photographer." },
          options: ["am", "is", "are"],
          answer: "am",
          explanation: { en: "I always takes am.", pt: "I sempre usa am." },
        },
        {
          id: "b1d-cp2",
          prompt: { en: "Complete: Helena ___ an architect.", pt: "Complete: Helena ___ an architect." },
          options: ["am", "is", "are"],
          answer: "is",
          explanation: { en: "One other person = he / she = is.", pt: "Uma outra pessoa = he / she = is." },
        },
        {
          id: "b1d-cp3",
          prompt: { en: "Complete: Ivan and Helena ___ colleagues.", pt: "Complete: Ivan and Helena ___ colleagues." },
          options: ["am", "is", "are"],
          answer: "are",
          explanation: { en: "Two people = they = are.", pt: "Duas pessoas = they = are." },
        },
        {
          id: "b1d-cp4",
          prompt: { en: "Which pronoun replaces 'Bruno and I'?", pt: "Qual pronome substitui 'Bruno and I'?" },
          options: ["they", "we", "she"],
          answer: "we",
          explanation: { en: "Another person + I = we.", pt: "Outra pessoa + eu = we." },
        },
        {
          id: "b1d-cp5",
          prompt: { en: "Choose the natural short form of 'She is my colleague.'", pt: "Escolha a forma contraída natural de 'She is my colleague.'" },
          options: ["She's my colleague.", "Shes my colleague.", "She'is my colleague."],
          answer: "She's my colleague.",
          explanation: { en: "she is → she's.", pt: "she is → she's." },
        },
      ],
      input: {
        kind: "listening",
        title: { en: "Listening — Who is who at the coworking?", pt: "Listening — Quem é quem no coworking?" },
        lines: [
          { en: "Hi, I'm Helena. I'm from Porto Alegre.", pt: "Oi, eu sou a Helena. Sou de Porto Alegre." },
          { en: "This is Ivan. He's an architect too.", pt: "Este é o Ivan. Ele também é arquiteto." },
          { en: "We're on the second floor, and Bruno is with us now.", pt: "Nós estamos no segundo andar, e o Bruno está com a gente agora." },
        ],
        questions: [
          {
            id: "b1d-r1",
            prompt: { en: "Where is Helena from?", pt: "De onde é a Helena?" },
            options: ["Salvador", "Porto Alegre", "Lisbon"],
            answer: "Porto Alegre",
            explanation: { en: "She says: I'm from Porto Alegre.", pt: "Ela diz: I'm from Porto Alegre." },
          },
          {
            id: "b1d-r2",
            prompt: { en: "What is Ivan's job?", pt: "Qual é a profissão do Ivan?" },
            options: ["photographer", "architect", "teacher"],
            answer: "architect",
            explanation: { en: "He's an architect too.", pt: "He's an architect too." },
          },
          {
            id: "b1d-r3",
            prompt: { en: "Where is the team?", pt: "Onde está a equipe?" },
            options: ["on the first floor", "on the second floor", "at home"],
            answer: "on the second floor",
            explanation: { en: "We're on the second floor.", pt: "We're on the second floor." },
          },
        ],
      },
      quickCheck: [
        {
          id: "b1d-qc1",
          prompt: { en: "Choose the correct sentence.", pt: "Escolha a frase correta." },
          options: ["We is a team.", "We are a team.", "We am a team."],
          answer: "We are a team.",
          explanation: { en: "We takes are.", pt: "We usa are." },
        },
        {
          id: "b1d-qc2",
          prompt: { en: "You arrive at 9 a.m. What do you say?", pt: "Você chega às 9h. O que você diz?" },
          options: ["Good night!", "Good morning!", "Good evening!"],
          answer: "Good morning!",
          explanation: { en: "Good morning is used before noon.", pt: "Good morning é usado antes do meio-dia." },
        },
        {
          id: "b1d-qc3",
          prompt: { en: "Complete: ___ is my city.", pt: "Complete: ___ is my city." },
          options: ["It", "They", "We"],
          answer: "It",
          explanation: { en: "It is used for things and places.", pt: "It é usado para coisas e lugares." },
        },
        {
          id: "b1d-qc4",
          prompt: { en: "Someone says 'Nice to meet you.' The best answer is:", pt: "Alguém diz 'Nice to meet you.' A melhor resposta é:" },
          options: ["Nice to meet you too.", "I am meet you.", "Yes, I am nice."],
          answer: "Nice to meet you too.",
          explanation: { en: "Add too to return the greeting.", pt: "Acrescente too para devolver o cumprimento." },
        },
      ],
    },
    communicate: {
      id: "BEGINNER-U01-COMMUNICATE",
      review: [
        { en: "am / is / are change with the pronoun: I am, he is, we are.", pt: "am / is / are mudam com o pronome: I am, he is, we are." },
        { en: "Personal information: name, city, country, job.", pt: "Informações pessoais: name, city, country, job." },
        { en: "First greetings: Good morning · Nice to meet you · I am new here.", pt: "Primeiros cumprimentos: Good morning · Nice to meet you · I am new here." },
      ],
      activities: [
        {
          id: "b1c-a1",
          title: { en: "Say it about you", pt: "Diga sobre você" },
          instruction: {
            en: "Say each sentence out loud with your own information. Record and check your pronunciation.",
            pt: "Diga cada frase em voz alta com suas próprias informações. Grave e confira sua pronúncia.",
          },
          phrases: [
            { en: "My name is Bruno and I am from Brazil.", pt: "Meu nome é Bruno e eu sou do Brasil." },
            { en: "I am a photographer and I am new here.", pt: "Eu sou fotógrafo e sou novo aqui." },
          ],
          check: [
            {
              id: "b1c-a1q1",
              prompt: { en: "Question: Where are you from? Best answer:", pt: "Pergunta: Where are you from? Melhor resposta:" },
              options: ["I am from Brazil.", "I is Brazil.", "I from Brazil."],
              answer: "I am from Brazil.",
              explanation: { en: "Use I am + from + country.", pt: "Use I am + from + país." },
            },
          ],
        },
        {
          id: "b1c-a2",
          title: { en: "Introduce another person", pt: "Apresente outra pessoa" },
          instruction: {
            en: "Imagine a colleague next to you. Present them in two sentences.",
            pt: "Imagine um colega ao seu lado. Apresente-o em duas frases.",
          },
          phrases: [
            { en: "This is Helena. She is my colleague.", pt: "Esta é a Helena. Ela é minha colega." },
            { en: "They are architects and we are a small team.", pt: "Eles são arquitetos e nós somos uma equipe pequena." },
          ],
          check: [
            {
              id: "b1c-a2q1",
              prompt: { en: "Complete: This is Ivan. ___ my partner.", pt: "Complete: This is Ivan. ___ my partner." },
              options: ["He's", "He are", "His"],
              answer: "He's",
              explanation: { en: "he is → he's.", pt: "he is → he's." },
            },
          ],
        },
        {
          id: "b1c-a3",
          title: { en: "First ten seconds", pt: "Os dez primeiros segundos" },
          instruction: {
            en: "Greet, give your name, your city and your job — all in one turn.",
            pt: "Cumprimente, diga seu nome, sua cidade e sua profissão — tudo em uma única fala.",
          },
          phrases: [
            { en: "Good morning! I'm Carla, I'm from Recife and I'm a nurse.", pt: "Bom dia! Eu sou a Carla, sou de Recife e sou enfermeira." },
            { en: "Nice to meet you. I'm on the second floor.", pt: "Prazer em conhecer você. Eu fico no segundo andar." },
          ],
          check: [
            {
              id: "b1c-a3q1",
              prompt: { en: "Choose the correct self-introduction.", pt: "Escolha a autoapresentação correta." },
              options: ["She am Carla.", "I'm Carla.", "I is Carla."],
              answer: "I'm Carla.",
              explanation: { en: "First person singular uses am / I'm.", pt: "A primeira pessoa do singular usa am / I'm." },
            },
          ],
        },
      ],
      challenge: {
        id: "b1c-challenge",
        title: { en: "Communication Challenge — Your first day", pt: "Desafio de comunicação — Seu primeiro dia" },
        instruction: {
          en: "It is your first day in a new place. Greet two people, introduce yourself with four pieces of information, and introduce a colleague.",
          pt: "É seu primeiro dia em um lugar novo. Cumprimente duas pessoas, apresente-se com quatro informações e apresente um colega.",
        },
        phrases: [
          { en: "Good morning! My name is Rafael.", pt: "Bom dia! Meu nome é Rafael." },
          { en: "I'm from São Paulo and I'm a designer.", pt: "Eu sou de São Paulo e sou designer." },
          { en: "This is Marina. She's my colleague and we're on the same team.", pt: "Esta é a Marina. Ela é minha colega e nós somos da mesma equipe." },
          { en: "Nice to meet you!", pt: "Prazer em conhecer você!" },
        ],
        check: [
          {
            id: "b1c-ch1",
            prompt: { en: "Which sentence has NO mistake?", pt: "Qual frase NÃO tem erro?" },
            options: ["He are my colleague.", "They is architects.", "You are welcome here."],
            answer: "You are welcome here.",
            explanation: { en: "You always takes are.", pt: "You sempre usa are." },
          },
          {
            id: "b1c-ch2",
            prompt: { en: "Which introduction gives four pieces of information?", pt: "Qual apresentação dá quatro informações?" },
            options: [
              "Hi, I'm Rafael.",
              "Hi, I'm Rafael, I'm from São Paulo, I'm a designer and I'm new here.",
              "Hi, nice day.",
            ],
            answer: "Hi, I'm Rafael, I'm from São Paulo, I'm a designer and I'm new here.",
            explanation: { en: "Name + city + job + status = four pieces.", pt: "Nome + cidade + profissão + situação = quatro informações." },
          },
        ],
      },
      lessonReview: {
        summary: {
          en: "You made first contact in English: you greeted people, said who you are and introduced a colleague.",
          pt: "Você fez o primeiro contato em inglês: cumprimentou pessoas, disse quem é e apresentou um colega.",
        },
        canDo: [
          { en: "I can greet someone in English.", pt: "Consigo cumprimentar alguém em inglês." },
          { en: "I can say my name, my city, my country and my job.", pt: "Consigo dizer meu nome, minha cidade, meu país e minha profissão." },
          { en: "I can introduce another person with he / she / they.", pt: "Consigo apresentar outra pessoa com he / she / they." },
        ],
        next: {
          en: "Next: ask questions and say what is not true, to talk about the people around you.",
          pt: "Próximo: fazer perguntas e dizer o que não é verdade, para falar das pessoas ao seu redor.",
        },
      },
    },
  },
  {
    code: "BEGINNER-U02",
    number: 2,
    title: "Family — Verb to be",
    titlePt: "Família — Verbo to be",
    cefr: "A1",
    objective: {
      en: "Use the verb to be in negative and question forms with possessive adjectives to talk about family.",
      pt: "Usar o verbo to be nas formas negativa e interrogativa com adjetivos possessivos para falar da família.",
    },
    communicationGoal: {
      en: "You can ask for and give information about people in your family.",
      pt: "Você consegue pedir e dar informações sobre pessoas da sua família.",
    },
    prerequisites: { en: "Unit 1: subject pronouns + to be (affirmative), personal info.", pt: "Unidade 1: pronomes pessoais + to be (afirmativo), informações pessoais." },
    newContent: {
      en: "Grammar: to be — negative and interrogative + possessive adjectives (my, your, his, her). Vocabulary: family. Expressions: asking info.",
      pt: "Gramática: to be — negativa e interrogativa + adjetivos possessivos. Vocabulário: família. Expressões: pedir informação.",
    },
    reviewContent: { en: "Review: to be affirmative and personal info from Unit 1.", pt: "Revisão: to be afirmativo e informações pessoais da Unidade 1." },
    discover: {
      id: "BEGINNER-U02-DISCOVER",
      warmUp: {
        prompt: { en: "Think about your family. Who lives with you?", pt: "Pense na sua família. Quem mora com você?" },
        phrases: [
          { en: "This is my family.", pt: "Esta é a minha família." },
          { en: "My sister is not at home.", pt: "Minha irmã não está em casa." },
        ],
      },
      context: {
        situation: { en: "Two colleagues look at a family photo.", pt: "Dois colegas olham uma foto de família." },
        dialogue: [
          { who: "Beto", en: "Is this your family?", pt: "Esta é a sua família?" },
          { who: "Lia", en: "Yes, it is. This is my mother and my father.", pt: "Sim, é. Esta é minha mãe e meu pai." },
          { who: "Beto", en: "Is he your brother?", pt: "Ele é seu irmão?" },
          { who: "Lia", en: "No, he isn't. He is my cousin.", pt: "Não, não é. Ele é meu primo." },
          { who: "Beto", en: "Are your grandparents here?", pt: "Seus avós estão aqui?" },
          { who: "Lia", en: "No, they aren't. They are in Bahia.", pt: "Não, não estão. Eles estão na Bahia." },
        ],
      },
      vocabulary: [
        { term: "mother", pt: "mãe", ipa: "/ˈmʌðər/", definition: "A female parent.", example: "My mother is a doctor.", examplePt: "Minha mãe é médica." },
        { term: "father", pt: "pai", ipa: "/ˈfɑːðər/", definition: "A male parent.", example: "His father isn't here today.", examplePt: "O pai dele não está aqui hoje." },
        { term: "brother", pt: "irmão", ipa: "/ˈbrʌðər/", definition: "A male sibling.", example: "Is he your brother?", examplePt: "Ele é seu irmão?" },
        { term: "sister", pt: "irmã", ipa: "/ˈsɪstər/", definition: "A female sibling.", example: "Her sister is a student.", examplePt: "A irmã dela é estudante." },
        { term: "grandparents", pt: "avós", ipa: "/ˈɡrænperənts/", definition: "The parents of your mother or father.", example: "My grandparents are in Bahia.", examplePt: "Meus avós estão na Bahia." },
        { term: "cousin", pt: "primo(a)", ipa: "/ˈkʌzn/", definition: "The child of your uncle or aunt.", example: "He is my cousin.", examplePt: "Ele é meu primo." },
        { term: "husband", pt: "marido", ipa: "/ˈhʌzbənd/", definition: "The man a woman is married to.", example: "Her husband is Italian.", examplePt: "O marido dela é italiano." },
        { term: "wife", pt: "esposa", ipa: "/waɪf/", definition: "The woman a man is married to.", example: "His wife isn't at work.", examplePt: "A esposa dele não está no trabalho." },
        { term: "children", pt: "filhos / crianças", ipa: "/ˈtʃɪldrən/", definition: "Sons and daughters.", example: "Their children are young.", examplePt: "Os filhos deles são jovens." },
        { term: "relatives", pt: "parentes", ipa: "/ˈrelətɪvz/", definition: "People in your family.", example: "My relatives are very kind.", examplePt: "Meus parentes são muito gentis." },
      ],
      expressions: [
        { en: "What's your name?", pt: "Qual é o seu nome?" },
        { en: "Where are you from?", pt: "De onde você é?" },
        { en: "What do you do?", pt: "O que você faz?" },
      ],
      grammar: [
        {
          title: { en: "To be — negative and questions", pt: "To be — negativa e perguntas" },
          examples: [
            { en: "He isn't at home.", pt: "Ele não está em casa." },
            { en: "Is this your book?", pt: "Este é o seu livro?" },
            { en: "They aren't my cousins.", pt: "Eles não são meus primos." },
          ],
          rule: {
            en: "Negative: pronoun + to be + not (isn't / aren't). Question: to be + pronoun + …?",
            pt: "Negativa: pronome + to be + not. Pergunta: to be + pronome + …?",
          },
          mistakes: [
            { en: "He no is at home. → He isn't at home.", pt: "A negativa usa not depois do verbo." },
            { en: "This is your book? → Is this your book?", pt: "Na pergunta o verbo vem primeiro." },
          ],
        },
        {
          title: { en: "Possessive adjectives", pt: "Adjetivos possessivos" },
          examples: [
            { en: "My mother is a doctor.", pt: "Minha mãe é médica." },
            { en: "Her husband is Italian.", pt: "O marido dela é italiano." },
          ],
          rule: { en: "I → my, you → your, he → his, she → her.", pt: "I → my, you → your, he → his, she → her." },
          mistakes: [{ en: "The your sister → your sister", pt: "Não se usa artigo antes do possessivo." }],
        },
      ],
      controlledPractice: [
        {
          id: "b2d-cp1",
          prompt: { en: "Make it negative: She is my sister.", pt: "Passe para a negativa: She is my sister." },
          options: ["She isn't my sister.", "She not is my sister.", "She don't my sister."],
          answer: "She isn't my sister.",
          explanation: { en: "is + not = isn't.", pt: "is + not = isn't." },
        },
        {
          id: "b2d-cp2",
          prompt: { en: "Make it a question: They are your cousins.", pt: "Transforme em pergunta: They are your cousins." },
          options: ["They are your cousins?", "Are they your cousins?", "Do they your cousins?"],
          answer: "Are they your cousins?",
          explanation: { en: "The verb comes before the pronoun.", pt: "O verbo vem antes do pronome." },
        },
        {
          id: "b2d-cp3",
          prompt: { en: "Complete: ___ father is a teacher. (he)", pt: "Complete: ___ father is a teacher. (he)" },
          options: ["He", "His", "Her"],
          answer: "His",
          explanation: { en: "he → his.", pt: "he → his." },
        },
      ],
      input: {
        kind: "listening",
        title: { en: "Listening — A family photo", pt: "Escuta — Uma foto de família" },
        lines: [
          { en: "This is my family. My mother is a doctor.", pt: "Esta é minha família. Minha mãe é médica." },
          { en: "My father isn't in the photo. He is at work.", pt: "Meu pai não está na foto. Ele está no trabalho." },
          { en: "Are my grandparents here? No, they aren't.", pt: "Meus avós estão aqui? Não, não estão." },
        ],
        questions: [
          {
            id: "b2d-l1",
            prompt: { en: "Why isn't the father in the photo?", pt: "Por que o pai não está na foto?" },
            options: ["He is at work.", "He is a doctor.", "He is in Bahia."],
            answer: "He is at work.",
            explanation: { en: "He is at work.", pt: "He is at work." },
          },
        ],
      },
      quickCheck: [
        {
          id: "b2d-qc1",
          prompt: { en: "Choose the correct short answer: Is she your wife?", pt: "Escolha a resposta curta correta: Is she your wife?" },
          options: ["No, she isn't.", "No, she don't.", "No, she not."],
          answer: "No, she isn't.",
          explanation: { en: "Short answers repeat the verb to be.", pt: "Respostas curtas repetem o verbo to be." },
        },
        {
          id: "b2d-qc2",
          prompt: { en: "Complete: ___ name is Ana. (she)", pt: "Complete: ___ name is Ana. (she)" },
          options: ["His", "Her", "Your"],
          answer: "Her",
          explanation: { en: "she → her.", pt: "she → her." },
        },
        {
          id: "b2d-qc3",
          prompt: { en: "Which word means 'parentes'?", pt: "Qual palavra significa 'parentes'?" },
          options: ["relatives", "children", "cousins"],
          answer: "relatives",
          explanation: { en: "Relatives = family members.", pt: "Relatives = parentes." },
        },
      ],
    },
    communicate: {
      id: "BEGINNER-U02-COMMUNICATE",
      review: [
        { en: "isn't / aren't for negatives; Is …? / Are …? for questions.", pt: "isn't / aren't para negativas; Is …? / Are …? para perguntas." },
        { en: "my, your, his, her before family words.", pt: "my, your, his, her antes das palavras de família." },
      ],
      activities: [
        {
          id: "b2c-a1",
          title: { en: "Build sentences", pt: "Monte frases" },
          instruction: { en: "Say the sentences aloud and check your pronunciation.", pt: "Fale as frases em voz alta e cheque sua pronúncia." },
          phrases: [
            { en: "My brother isn't a doctor.", pt: "Meu irmão não é médico." },
            { en: "Her children are at school.", pt: "Os filhos dela estão na escola." },
          ],
          check: [
            {
              id: "b2c-a1q1",
              prompt: { en: "Choose the correct order.", pt: "Escolha a ordem correta." },
              options: ["Isn't my brother a doctor.", "My brother isn't a doctor.", "My brother a doctor isn't."],
              answer: "My brother isn't a doctor.",
              explanation: { en: "Subject + verb + not + complement.", pt: "Sujeito + verbo + not + complemento." },
            },
          ],
        },
        {
          id: "b2c-a2",
          title: { en: "Ask and answer", pt: "Pergunte e responda" },
          instruction: { en: "Ask about someone's family and answer with short answers.", pt: "Pergunte sobre a família de alguém e responda com respostas curtas." },
          phrases: [
            { en: "Is your sister a student?", pt: "Sua irmã é estudante?" },
            { en: "Yes, she is. / No, she isn't.", pt: "Sim, ela é. / Não, ela não é." },
          ],
          check: [
            {
              id: "b2c-a2q1",
              prompt: { en: "Question: Are they your relatives? Correct answer:", pt: "Pergunta: Are they your relatives? Resposta correta:" },
              options: ["Yes, they are.", "Yes, they is.", "Yes, they be."],
              answer: "Yes, they are.",
              explanation: { en: "they → are.", pt: "they → are." },
            },
          ],
        },
      ],
      challenge: {
        id: "b2c-challenge",
        title: { en: "Communication Challenge — Your family photo", pt: "Desafio de comunicação — Sua foto de família" },
        instruction: {
          en: "Describe a family photo: say who is there, who isn't, and ask one question.",
          pt: "Descreva uma foto de família: diga quem está, quem não está e faça uma pergunta.",
        },
        phrases: [
          { en: "This is my mother. She is a nurse.", pt: "Esta é minha mãe. Ela é enfermeira." },
          { en: "My cousins aren't in the photo.", pt: "Meus primos não estão na foto." },
          { en: "Is your family big?", pt: "Sua família é grande?" },
        ],
        check: [
          {
            id: "b2c-ch1",
            prompt: { en: "Which question is correct?", pt: "Qual pergunta está correta?" },
            options: ["Your father is a teacher?", "Is your father a teacher?", "Does your father is a teacher?"],
            answer: "Is your father a teacher?",
            explanation: { en: "Questions with to be start with the verb.", pt: "Perguntas com to be começam pelo verbo." },
          },
        ],
      },
      lessonReview: {
        summary: { en: "You talked about family using negatives, questions and possessives.", pt: "Você falou de família usando negativas, perguntas e possessivos." },
        canDo: [
          { en: "I can ask questions with the verb to be.", pt: "Consigo fazer perguntas com o verbo to be." },
          { en: "I can describe my family.", pt: "Consigo descrever minha família." },
        ],
        next: { en: "Next: objects at home with a / an / the.", pt: "Próximo: objetos da casa com a / an / the." },
      },
    },
  },
  {
    code: "BEGINNER-U03",
    number: 3,
    title: "Home Objects — Indefinite/definite articles",
    titlePt: "Objetos da casa — Artigos indefinidos/definidos",
    cefr: "A1",
    objective: {
      en: "Use a, an and the with singular and plural nouns to talk about objects at home.",
      pt: "Usar a, an e the com substantivos no singular e plural para falar de objetos da casa.",
    },
    communicationGoal: {
      en: "You can name and describe everyday objects in your house.",
      pt: "Você consegue nomear e descrever objetos do dia a dia na sua casa.",
    },
    prerequisites: { en: "Units 1–2: to be in all forms, personal info and family.", pt: "Unidades 1–2: to be em todas as formas, informações pessoais e família." },
    newContent: {
      en: "Grammar: indefinite and definite articles + regular plural nouns. Vocabulary: home objects. Expressions: describing things.",
      pt: "Gramática: artigos indefinidos e definidos + plural regular. Vocabulário: objetos da casa. Expressões: descrever coisas.",
    },
    reviewContent: { en: "Review: to be and possessive adjectives from Units 1–2.", pt: "Revisão: to be e adjetivos possessivos das Unidades 1–2." },
    discover: {
      id: "BEGINNER-U03-DISCOVER",
      warmUp: {
        prompt: { en: "Look around your room. Which objects can you name in English?", pt: "Olhe ao redor do seu quarto. Quais objetos você sabe nomear em inglês?" },
        phrases: [
          { en: "This is a table.", pt: "Isto é uma mesa." },
          { en: "The chair is new.", pt: "A cadeira é nova." },
        ],
      },
      context: {
        situation: { en: "A student shows her new apartment on a video call.", pt: "Uma aluna mostra o apartamento novo em uma videochamada." },
        dialogue: [
          { who: "Nina", en: "This is my new apartment. It's small but nice.", pt: "Este é meu apartamento novo. É pequeno, mas legal." },
          { who: "Ted", en: "Is that a sofa?", pt: "Aquilo é um sofá?" },
          { who: "Nina", en: "Yes, it is. The sofa is old, but it's comfortable.", pt: "Sim, é. O sofá é velho, mas é confortável." },
          { who: "Ted", en: "And the lamps? Are they new?", pt: "E as luminárias? São novas?" },
          { who: "Nina", en: "The lamps are new. I have an armchair too.", pt: "As luminárias são novas. Eu tenho uma poltrona também." },
        ],
      },
      vocabulary: [
        { term: "table", pt: "mesa", ipa: "/ˈteɪbl/", definition: "A flat surface with legs.", example: "The table is very big.", examplePt: "A mesa é muito grande." },
        { term: "chair", pt: "cadeira", ipa: "/tʃer/", definition: "A seat for one person.", example: "This is a comfortable chair.", examplePt: "Esta é uma cadeira confortável." },
        { term: "sofa", pt: "sofá", ipa: "/ˈsoʊfə/", definition: "A long soft seat for two or more people.", example: "The sofa is old.", examplePt: "O sofá é velho." },
        { term: "bed", pt: "cama", ipa: "/bed/", definition: "Furniture for sleeping.", example: "My bed is next to the window.", examplePt: "Minha cama fica ao lado da janela." },
        { term: "lamp", pt: "luminária", ipa: "/læmp/", definition: "An object that gives light.", example: "There is a lamp on the desk.", examplePt: "Há uma luminária na escrivaninha." },
        { term: "window", pt: "janela", ipa: "/ˈwɪndoʊ/", definition: "An opening in a wall with glass.", example: "The window is open.", examplePt: "A janela está aberta." },
        { term: "door", pt: "porta", ipa: "/dɔːr/", definition: "You open it to enter a room.", example: "Please close the door.", examplePt: "Por favor, feche a porta." },
        { term: "mirror", pt: "espelho", ipa: "/ˈmɪrər/", definition: "Glass where you see yourself.", example: "There is a mirror in the hall.", examplePt: "Há um espelho no corredor." },
        { term: "desk", pt: "escrivaninha", ipa: "/desk/", definition: "A table for studying or working.", example: "My desk is small.", examplePt: "Minha escrivaninha é pequena." },
        { term: "armchair", pt: "poltrona", ipa: "/ˈɑːrmtʃer/", definition: "A comfortable chair with arms.", example: "I have an armchair in my room.", examplePt: "Eu tenho uma poltrona no meu quarto." },
      ],
      expressions: [
        { en: "What's this in English?", pt: "Como se diz isto em inglês?" },
        { en: "It's very nice!", pt: "É muito bonito!" },
        { en: "Look at this.", pt: "Olhe isto." },
      ],
      grammar: [
        {
          title: { en: "A / an / the", pt: "A / an / the" },
          examples: [
            { en: "This is a table.", pt: "Isto é uma mesa." },
            { en: "I have an armchair.", pt: "Eu tenho uma poltrona." },
            { en: "The sofa is old.", pt: "O sofá é velho." },
          ],
          rule: {
            en: "Use a before consonant sounds, an before vowel sounds, and the when the object is already known.",
            pt: "Use a antes de som de consoante, an antes de som de vogal, e the quando o objeto já é conhecido.",
          },
          mistakes: [
            { en: "a armchair → an armchair", pt: "Antes de som de vogal usa-se an." },
            { en: "I have the chair. (first mention) → I have a chair.", pt: "Na primeira menção usa-se a/an." },
          ],
        },
        {
          title: { en: "Regular plural nouns", pt: "Plural regular" },
          examples: [
            { en: "Two lamps are new.", pt: "Duas luminárias são novas." },
            { en: "The chairs are in the kitchen.", pt: "As cadeiras estão na cozinha." },
          ],
          rule: { en: "Add -s to most nouns: table → tables.", pt: "Acrescente -s à maioria dos substantivos: table → tables." },
          mistakes: [{ en: "two lamp → two lamps", pt: "Plural sempre com -s." }],
        },
      ],
      controlledPractice: [
        {
          id: "b3d-cp1",
          prompt: { en: "Complete: This is ___ armchair.", pt: "Complete: This is ___ armchair." },
          options: ["a", "an", "the"],
          answer: "an",
          explanation: { en: "Armchair starts with a vowel sound.", pt: "Armchair começa com som de vogal." },
        },
        {
          id: "b3d-cp2",
          prompt: { en: "Complete: ___ door is open. (we know which door)", pt: "Complete: ___ door is open. (sabemos qual porta)" },
          options: ["A", "An", "The"],
          answer: "The",
          explanation: { en: "The = known object.", pt: "The = objeto conhecido." },
        },
        {
          id: "b3d-cp3",
          prompt: { en: "Plural of 'mirror':", pt: "Plural de 'mirror':" },
          options: ["mirrors", "mirroes", "mirror"],
          answer: "mirrors",
          explanation: { en: "Add -s.", pt: "Acrescente -s." },
        },
      ],
      input: {
        kind: "reading",
        title: { en: "Reading — My small apartment", pt: "Leitura — Meu apartamento pequeno" },
        lines: [
          { en: "I live in a small apartment. There is a sofa and two chairs.", pt: "Eu moro em um apartamento pequeno. Há um sofá e duas cadeiras." },
          { en: "The desk is near the window. The lamps are new.", pt: "A escrivaninha fica perto da janela. As luminárias são novas." },
        ],
        questions: [
          {
            id: "b3d-r1",
            prompt: { en: "How many chairs are there?", pt: "Quantas cadeiras há?" },
            options: ["one", "two", "three"],
            answer: "two",
            explanation: { en: "There is a sofa and two chairs.", pt: "There is a sofa and two chairs." },
          },
        ],
      },
      quickCheck: [
        {
          id: "b3d-qc1",
          prompt: { en: "Choose the correct sentence.", pt: "Escolha a frase correta." },
          options: ["I have a email.", "I have an email.", "I have email an."],
          answer: "I have an email.",
          explanation: { en: "Vowel sound → an.", pt: "Som de vogal → an." },
        },
        {
          id: "b3d-qc2",
          prompt: { en: "Which word is a home object?", pt: "Qual palavra é um objeto da casa?" },
          options: ["cousin", "mirror", "nationality"],
          answer: "mirror",
          explanation: { en: "Mirror = espelho.", pt: "Mirror = espelho." },
        },
        {
          id: "b3d-qc3",
          prompt: { en: "Complete: ___ windows are open.", pt: "Complete: ___ windows are open." },
          options: ["A", "An", "The"],
          answer: "The",
          explanation: { en: "A/an are never used with plurals.", pt: "A/an nunca são usados no plural." },
        },
      ],
    },
    communicate: {
      id: "BEGINNER-U03-COMMUNICATE",
      review: [
        { en: "a / an for the first mention; the for known objects.", pt: "a / an na primeira menção; the para objetos conhecidos." },
        { en: "Plural nouns take -s.", pt: "Substantivos no plural levam -s." },
      ],
      activities: [
        {
          id: "b3c-a1",
          title: { en: "Describe your room", pt: "Descreva seu quarto" },
          instruction: { en: "Name five objects in your room and describe two of them.", pt: "Nomeie cinco objetos do seu quarto e descreva dois deles." },
          phrases: [
            { en: "There is a desk and a lamp in my room.", pt: "Há uma escrivaninha e uma luminária no meu quarto." },
            { en: "The bed is comfortable and the window is big.", pt: "A cama é confortável e a janela é grande." },
          ],
          check: [
            {
              id: "b3c-a1q1",
              prompt: { en: "Complete: I have ___ old sofa.", pt: "Complete: I have ___ old sofa." },
              options: ["a", "an", "the"],
              answer: "an",
              explanation: { en: "Old starts with a vowel sound.", pt: "Old começa com som de vogal." },
            },
          ],
        },
        {
          id: "b3c-a2",
          title: { en: "Role-play — Showing your home", pt: "Role-play — Mostrando sua casa" },
          instruction: { en: "A friend visits you. Show three objects and answer one question.", pt: "Um amigo visita você. Mostre três objetos e responda a uma pergunta." },
          phrases: [
            { en: "Look at this. It's a new mirror.", pt: "Olhe isto. É um espelho novo." },
            { en: "What's this in English?", pt: "Como se diz isto em inglês?" },
          ],
          check: [
            {
              id: "b3c-a2q1",
              prompt: { en: "Which answer is correct for 'Is that a desk?'", pt: "Qual resposta está correta para 'Is that a desk?'" },
              options: ["Yes, it is.", "Yes, it are.", "Yes, this are."],
              answer: "Yes, it is.",
              explanation: { en: "Short answer with it + is.", pt: "Resposta curta com it + is." },
            },
          ],
        },
      ],
      challenge: {
        id: "b3c-challenge",
        title: { en: "Communication Challenge — Home tour", pt: "Desafio de comunicação — Tour pela casa" },
        instruction: {
          en: "Record a 30-second tour of your home using a, an, the and plural nouns.",
          pt: "Grave um tour de 30 segundos pela sua casa usando a, an, the e plurais.",
        },
        phrases: [
          { en: "This is my living room. There is a sofa and two armchairs.", pt: "Esta é minha sala. Há um sofá e duas poltronas." },
          { en: "The lamps are new and the table is old.", pt: "As luminárias são novas e a mesa é velha." },
        ],
        check: [
          {
            id: "b3c-ch1",
            prompt: { en: "Which sentence has NO mistake?", pt: "Qual frase NÃO tem erro?" },
            options: ["There is two chair.", "There are two chairs.", "There are a chairs."],
            answer: "There are two chairs.",
            explanation: { en: "Plural noun + are.", pt: "Substantivo no plural + are." },
          },
        ],
      },
      lessonReview: {
        summary: { en: "You described objects at home using articles and plurals.", pt: "Você descreveu objetos da casa usando artigos e plurais." },
        canDo: [
          { en: "I can use a, an and the correctly.", pt: "Consigo usar a, an e the corretamente." },
          { en: "I can name objects in my home.", pt: "Consigo nomear objetos da minha casa." },
        ],
        next: { en: "Next: rooms in the house with There is / There are.", pt: "Próximo: cômodos da casa com There is / There are." },
      },
    },
  },
];
