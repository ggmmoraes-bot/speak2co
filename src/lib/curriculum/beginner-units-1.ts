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
    title: "People Around Me — Ask and correct",
    titlePt: "Pessoas ao meu redor — Perguntar e corrigir",
    cefr: "A1",
    objective: {
      en: "Use the verb to be in negative and question forms, with possessive adjectives, to talk about the people around you.",
      pt: "Usar o verbo to be nas formas negativa e interrogativa, com adjetivos possessivos, para falar das pessoas ao seu redor.",
    },
    communicationGoal: {
      en: "You can ask three correct questions about someone and correct wrong information politely.",
      pt: "Você consegue fazer três perguntas corretas sobre alguém e corrigir uma informação errada com educação.",
    },
    prerequisites: {
      en: "Unit 1 — subject pronouns and to be in affirmative sentences.",
      pt: "Unidade 1 — pronomes pessoais e to be em frases afirmativas.",
    },
    newContent: {
      en: "Grammar: to be (negative and questions) and possessive adjectives. Vocabulary: family and people. Expressions: asking about someone.",
      pt: "Gramática: to be (negativo e interrogativo) e adjetivos possessivos. Vocabulário: família e pessoas. Expressões: perguntar sobre alguém.",
    },
    reviewContent: {
      en: "Review from Unit 1: am / is / are and personal information.",
      pt: "Revisão da Unidade 1: am / is / are e informações pessoais.",
    },
    discover: {
      id: "BEGINNER-U02-DISCOVER",
      warmUp: {
        prompt: {
          en: "Look at the picture. A photo album is open on the table. Who are these people? What questions do you want to ask?",
          pt: "Observe a imagem. Um álbum de fotos está aberto sobre a mesa. Quem são essas pessoas? Que perguntas você quer fazer?",
        },
        phrases: [
          { en: "Who is this?", pt: "Quem é esta pessoa?" },
          { en: "She isn't my sister.", pt: "Ela não é minha irmã." },
          { en: "Are they your parents?", pt: "Eles são seus pais?" },
        ],
      },
      context: {
        situation: {
          en: "Helena shows Bruno an old photo album during the coffee break.",
          pt: "Helena mostra a Bruno um álbum de fotos antigo na pausa do café.",
        },
        dialogue: [
          { who: "Bruno", en: "Who is this woman? Is she your mother?", pt: "Quem é esta mulher? Ela é sua mãe?" },
          { who: "Helena", en: "No, she isn't. She is my aunt Laura.", pt: "Não, não é. Ela é minha tia Laura." },
          { who: "Bruno", en: "And these two boys? Are they your brothers?", pt: "E estes dois meninos? Eles são seus irmãos?" },
          { who: "Helena", en: "Yes, they are. Their names are Caio and Téo.", pt: "Sim, são. Os nomes deles são Caio e Téo." },
          { who: "Bruno", en: "Your family is big! My family isn't big — we are only three.", pt: "Sua família é grande! Minha família não é grande — somos só três." },
        ],
      },
      vocabulary: [
        { term: "mother", pt: "mãe", ipa: "/ˈmʌðər/", definition: "Your female parent.", example: "My mother is a nurse.", examplePt: "Minha mãe é enfermeira." },
        { term: "father", pt: "pai", ipa: "/ˈfɑːðər/", definition: "Your male parent.", example: "His father is from Recife.", examplePt: "O pai dele é de Recife." },
        { term: "parents", pt: "pais", ipa: "/ˈperənts/", definition: "Your mother and father together.", example: "Our parents are at home.", examplePt: "Nossos pais estão em casa." },
        { term: "sister", pt: "irmã", ipa: "/ˈsɪstər/", definition: "A girl or woman with the same parents.", example: "Her sister is a student.", examplePt: "A irmã dela é estudante." },
        { term: "brother", pt: "irmão", ipa: "/ˈbrʌðər/", definition: "A boy or man with the same parents.", example: "My brother isn't here.", examplePt: "Meu irmão não está aqui." },
        { term: "aunt", pt: "tia", ipa: "/ænt/", definition: "The sister of your mother or father.", example: "She is my aunt Laura.", examplePt: "Ela é minha tia Laura." },
        { term: "uncle", pt: "tio", ipa: "/ˈʌŋkl̩/", definition: "The brother of your mother or father.", example: "Their uncle is a driver.", examplePt: "O tio deles é motorista." },
        { term: "cousin", pt: "primo, prima", ipa: "/ˈkʌzn̩/", definition: "The child of your aunt or uncle.", example: "My cousin is twelve.", examplePt: "Meu primo tem doze anos." },
        { term: "neighbour", pt: "vizinho, vizinha", ipa: "/ˈneɪbər/", definition: "A person who lives near you.", example: "Our neighbour is very kind.", examplePt: "Nosso vizinho é muito gentil." },
        { term: "friend", pt: "amigo, amiga", ipa: "/frend/", definition: "A person you like and trust.", example: "They are my friends.", examplePt: "Eles são meus amigos." },
      ],
      expressions: [
        { en: "Who is this?", pt: "Quem é esta pessoa?" },
        { en: "Is she your sister?", pt: "Ela é sua irmã?" },
        { en: "No, she isn't.", pt: "Não, ela não é." },
        { en: "Yes, they are.", pt: "Sim, eles são." },
      ],
      grammar: [
        {
          title: { en: "To be — negative and questions", pt: "To be — negativa e interrogativa" },
          examples: [
            { en: "She isn't my mother.", pt: "Ela não é minha mãe." },
            { en: "They aren't at home.", pt: "Eles não estão em casa." },
            { en: "Are you Helena's brother?", pt: "Você é irmão da Helena?" },
          ],
          rule: {
            en: "For the negative, add not after am / is / are (isn't, aren't). For questions, put am / is / are before the pronoun.",
            pt: "Para a negativa, acrescente not depois de am / is / are (isn't, aren't). Para perguntas, coloque am / is / are antes do pronome.",
          },
          mistakes: [
            { en: "She no is my mother. → She isn't my mother.", pt: "A negativa usa not depois do verbo, não no." },
            { en: "You are my cousin? → Are you my cousin?", pt: "Na pergunta, o verbo vem antes do pronome." },
          ],
        },
        {
          title: { en: "Possessive adjectives", pt: "Adjetivos possessivos" },
          examples: [
            { en: "My family is small.", pt: "Minha família é pequena." },
            { en: "Her sister is a student.", pt: "A irmã dela é estudante." },
            { en: "Their names are Caio and Téo.", pt: "Os nomes deles são Caio e Téo." },
          ],
          rule: {
            en: "my, your, his, her, its, our, their come before the noun and never change in the plural: my friend, my friends.",
            pt: "my, your, his, her, its, our, their vêm antes do substantivo e não mudam no plural: my friend, my friends.",
          },
          mistakes: [
            { en: "The name of her is Laura. → Her name is Laura.", pt: "Use o possessivo antes do substantivo." },
            { en: "Their are my cousins. → They are my cousins.", pt: "their = deles; they are = eles são." },
          ],
        },
      ],
      controlledPractice: [
        {
          id: "b2d-cp1",
          prompt: { en: "Complete: She ___ my mother. (negative)", pt: "Complete: She ___ my mother. (negativa)" },
          options: ["isn't", "aren't", "am not"],
          answer: "isn't",
          explanation: { en: "she → is → isn't.", pt: "she → is → isn't." },
        },
        {
          id: "b2d-cp2",
          prompt: { en: "Make a question: ___ they your brothers?", pt: "Faça a pergunta: ___ they your brothers?" },
          options: ["Is", "Are", "Am"],
          answer: "Are",
          explanation: { en: "they → are, and are comes first in questions.", pt: "they → are, e are vem primeiro na pergunta." },
        },
        {
          id: "b2d-cp3",
          prompt: { en: "Complete: ___ name is Laura. (she)", pt: "Complete: ___ name is Laura. (she)" },
          options: ["Her", "She", "Hers"],
          answer: "Her",
          explanation: { en: "she → her + noun.", pt: "she → her + substantivo." },
        },
        {
          id: "b2d-cp4",
          prompt: { en: "Short answer: Is he your uncle? — No, ___.", pt: "Resposta curta: Is he your uncle? — No, ___." },
          options: ["he isn't", "he not is", "he doesn't"],
          answer: "he isn't",
          explanation: { en: "Short answers repeat the pronoun + verb.", pt: "Respostas curtas repetem pronome + verbo." },
        },
        {
          id: "b2d-cp5",
          prompt: { en: "Complete: ___ parents are teachers. (we)", pt: "Complete: ___ parents are teachers. (we)" },
          options: ["Our", "Us", "We"],
          answer: "Our",
          explanation: { en: "we → our.", pt: "we → our." },
        },
      ],
      input: {
        kind: "listening",
        title: { en: "Listening — Two photos, four people", pt: "Listening — Duas fotos, quatro pessoas" },
        lines: [
          { en: "This is my cousin Nina. She isn't a student — she's a dentist.", pt: "Esta é minha prima Nina. Ela não é estudante — é dentista." },
          { en: "Are these your neighbours? Yes, they are. Their son is my friend.", pt: "Estes são seus vizinhos? Sim, são. O filho deles é meu amigo." },
          { en: "My uncle isn't in this photo. He's in Portugal.", pt: "Meu tio não está nesta foto. Ele está em Portugal." },
        ],
        questions: [
          {
            id: "b2d-r1",
            prompt: { en: "What is Nina's job?", pt: "Qual é a profissão da Nina?" },
            options: ["student", "dentist", "teacher"],
            answer: "dentist",
            explanation: { en: "She isn't a student — she's a dentist.", pt: "She isn't a student — she's a dentist." },
          },
          {
            id: "b2d-r2",
            prompt: { en: "Who is the speaker's friend?", pt: "Quem é amigo de quem fala?" },
            options: ["the neighbours' son", "the uncle", "the cousin"],
            answer: "the neighbours' son",
            explanation: { en: "Their son is my friend.", pt: "Their son is my friend." },
          },
          {
            id: "b2d-r3",
            prompt: { en: "Where is the uncle?", pt: "Onde está o tio?" },
            options: ["in the photo", "in Portugal", "at work"],
            answer: "in Portugal",
            explanation: { en: "He's in Portugal.", pt: "He's in Portugal." },
          },
        ],
      },
      quickCheck: [
        {
          id: "b2d-qc1",
          prompt: { en: "Choose the correct question.", pt: "Escolha a pergunta correta." },
          options: ["She is your aunt?", "Is she your aunt?", "Is your aunt she?"],
          answer: "Is she your aunt?",
          explanation: { en: "Verb + pronoun + rest.", pt: "Verbo + pronome + resto." },
        },
        {
          id: "b2d-qc2",
          prompt: { en: "Complete: They ___ my parents. (negative)", pt: "Complete: They ___ my parents. (negativa)" },
          options: ["isn't", "aren't", "not are"],
          answer: "aren't",
          explanation: { en: "they → are → aren't.", pt: "they → are → aren't." },
        },
        {
          id: "b2d-qc3",
          prompt: { en: "Which word means 'de vocês / de você'?", pt: "Qual palavra significa 'de vocês / de você'?" },
          options: ["your", "their", "our"],
          answer: "your",
          explanation: { en: "you → your.", pt: "you → your." },
        },
        {
          id: "b2d-qc4",
          prompt: { en: "Someone says: 'Is he your brother?' You correct them. Best answer:", pt: "Alguém diz: 'Is he your brother?' Você corrige. Melhor resposta:" },
          options: ["No, he isn't. He's my cousin.", "No, he don't.", "No, his cousin."],
          answer: "No, he isn't. He's my cousin.",
          explanation: { en: "Say no, then give the correct information.", pt: "Diga no e depois dê a informação correta." },
        },
      ],
    },
    communicate: {
      id: "BEGINNER-U02-COMMUNICATE",
      review: [
        { en: "Negative: isn't / aren't. Questions: Is she…? Are they…?", pt: "Negativa: isn't / aren't. Perguntas: Is she…? Are they…?" },
        { en: "Possessives: my, your, his, her, our, their.", pt: "Possessivos: my, your, his, her, our, their." },
        { en: "Family words: mother, father, sister, brother, cousin, neighbour.", pt: "Palavras de família: mother, father, sister, brother, cousin, neighbour." },
      ],
      activities: [
        {
          id: "b2c-a1",
          title: { en: "Ask about the photo", pt: "Pergunte sobre a foto" },
          instruction: {
            en: "Imagine a photo of your family. Ask three questions out loud and record them.",
            pt: "Imagine uma foto da sua família. Faça três perguntas em voz alta e grave.",
          },
          phrases: [
            { en: "Who is this man? Is he your father?", pt: "Quem é este homem? Ele é seu pai?" },
            { en: "Are these your cousins?", pt: "Estes são seus primos?" },
          ],
          check: [
            {
              id: "b2c-a1q1",
              prompt: { en: "Choose the correct question about one person.", pt: "Escolha a pergunta correta sobre uma pessoa." },
              options: ["Are she your sister?", "Is she your sister?", "She your sister is?"],
              answer: "Is she your sister?",
              explanation: { en: "One person = is.", pt: "Uma pessoa = is." },
            },
          ],
        },
        {
          id: "b2c-a2",
          title: { en: "Correct the information", pt: "Corrija a informação" },
          instruction: {
            en: "Someone gives you wrong information. Say no and correct it in one sentence.",
            pt: "Alguém dá uma informação errada. Diga no e corrija em uma frase.",
          },
          phrases: [
            { en: "No, she isn't my mother. She's my aunt.", pt: "Não, ela não é minha mãe. Ela é minha tia." },
            { en: "No, they aren't students. They're teachers.", pt: "Não, eles não são estudantes. São professores." },
          ],
          check: [
            {
              id: "b2c-a2q1",
              prompt: { en: "Complete: No, he ___. He's my uncle.", pt: "Complete: No, he ___. He's my uncle." },
              options: ["isn't", "aren't", "not"],
              answer: "isn't",
              explanation: { en: "he → isn't.", pt: "he → isn't." },
            },
          ],
        },
        {
          id: "b2c-a3",
          title: { en: "Describe three people", pt: "Descreva três pessoas" },
          instruction: {
            en: "Describe three people close to you: who they are, where they are from and what they do.",
            pt: "Descreva três pessoas próximas: quem são, de onde são e o que fazem.",
          },
          phrases: [
            { en: "My sister is a designer and she's from Curitiba.", pt: "Minha irmã é designer e é de Curitiba." },
            { en: "Our neighbours aren't Brazilian. They're from Chile.", pt: "Nossos vizinhos não são brasileiros. São do Chile." },
          ],
          check: [
            {
              id: "b2c-a3q1",
              prompt: { en: "Complete: ___ brother is a driver. (he)", pt: "Complete: ___ brother is a driver. (he)" },
              options: ["His", "He", "Him"],
              answer: "His",
              explanation: { en: "he → his.", pt: "he → his." },
            },
          ],
        },
      ],
      challenge: {
        id: "b2c-challenge",
        title: { en: "Communication Challenge — The family album", pt: "Desafio de comunicação — O álbum de família" },
        instruction: {
          en: "Open an imaginary album. Ask three questions, answer two of them with a short answer, and correct one wrong idea.",
          pt: "Abra um álbum imaginário. Faça três perguntas, responda duas com resposta curta e corrija uma ideia errada.",
        },
        phrases: [
          { en: "Who is this? Is she your grandmother?", pt: "Quem é esta? Ela é sua avó?" },
          { en: "Yes, she is. Her name is Dora.", pt: "Sim, é. O nome dela é Dora." },
          { en: "No, they aren't my parents. They're my neighbours.", pt: "Não, eles não são meus pais. São meus vizinhos." },
          { en: "My family isn't big, but we are very close.", pt: "Minha família não é grande, mas somos muito unidos." },
        ],
        check: [
          {
            id: "b2c-ch1",
            prompt: { en: "Which sentence has NO mistake?", pt: "Qual frase NÃO tem erro?" },
            options: ["Their is my cousin.", "She no is my aunt.", "They aren't my parents."],
            answer: "They aren't my parents.",
            explanation: { en: "they → aren't.", pt: "they → aren't." },
          },
          {
            id: "b2c-ch2",
            prompt: { en: "Best short answer to 'Are they your friends?'", pt: "Melhor resposta curta para 'Are they your friends?'" },
            options: ["Yes, they are.", "Yes, they is.", "Yes, their are."],
            answer: "Yes, they are.",
            explanation: { en: "Repeat pronoun + are.", pt: "Repita pronome + are." },
          },
        ],
      },
      lessonReview: {
        summary: {
          en: "You asked about people, answered with short answers and corrected wrong information.",
          pt: "Você perguntou sobre pessoas, respondeu com respostas curtas e corrigiu informações erradas.",
        },
        canDo: [
          { en: "I can ask questions with Is / Are.", pt: "Consigo fazer perguntas com Is / Are." },
          { en: "I can say what is not true with isn't / aren't.", pt: "Consigo dizer o que não é verdade com isn't / aren't." },
          { en: "I can use my, your, his, her, our and their.", pt: "Consigo usar my, your, his, her, our e their." },
        ],
        next: {
          en: "Next: name the objects you carry every day with a, an and this / that.",
          pt: "Próximo: nomear os objetos que você carrega todo dia com a, an e this / that.",
        },
      },
    },
  },
  {
    code: "BEGINNER-U03",
    number: 3,
    title: "Things I Carry — Name and ask for objects",
    titlePt: "Coisas que eu levo — Nomear e pedir objetos",
    cefr: "A1",
    objective: {
      en: "Use the articles a / an / the with this, that, these and those to name everyday objects and ask for them politely.",
      pt: "Usar os artigos a / an / the com this, that, these e those para nomear objetos do dia a dia e pedi-los com educação.",
    },
    communicationGoal: {
      en: "You can name ten everyday objects and make three polite requests.",
      pt: "Você consegue nomear dez objetos do dia a dia e fazer três pedidos educados.",
    },
    prerequisites: {
      en: "Unit 2 — to be in questions and negatives, possessive adjectives.",
      pt: "Unidade 2 — to be em perguntas e negativas, adjetivos possessivos.",
    },
    newContent: {
      en: "Grammar: a / an / the and this / that / these / those. Vocabulary: personal objects. Expressions: polite requests.",
      pt: "Gramática: a / an / the e this / that / these / those. Vocabulário: objetos pessoais. Expressões: pedidos educados.",
    },
    reviewContent: {
      en: "Review from Units 1–2: to be and possessive adjectives.",
      pt: "Revisão das Unidades 1–2: to be e adjetivos possessivos.",
    },
    discover: {
      id: "BEGINNER-U03-DISCOVER",
      warmUp: {
        prompt: {
          en: "Look at the picture. Ten objects are on the desk. Which ones are in your bag today?",
          pt: "Observe a imagem. Dez objetos estão sobre a mesa. Quais deles estão na sua bolsa hoje?",
        },
        phrases: [
          { en: "This is a notebook.", pt: "Isto é um caderno." },
          { en: "That is an umbrella.", pt: "Aquilo é um guarda-chuva." },
          { en: "These are my keys.", pt: "Estas são minhas chaves." },
        ],
      },
      context: {
        situation: {
          en: "Ivan cannot find his badge before a meeting. Bruno helps him at the desk.",
          pt: "Ivan não encontra o crachá antes de uma reunião. Bruno o ajuda na mesa.",
        },
        dialogue: [
          { who: "Ivan", en: "Bruno, what's this? Is it my badge?", pt: "Bruno, o que é isto? É meu crachá?" },
          { who: "Bruno", en: "No, that's a card for the coffee machine. Your badge is here.", pt: "Não, isso é um cartão para a máquina de café. Seu crachá está aqui." },
          { who: "Ivan", en: "Thank you! Can I borrow a pen, please?", pt: "Obrigado! Posso pegar uma caneta emprestada, por favor?" },
          { who: "Bruno", en: "Sure. Take the blue one. These pens are old.", pt: "Claro. Pegue a azul. Estas canetas estão velhas." },
          { who: "Ivan", en: "Perfect. Here is my notebook and the meeting is in five minutes.", pt: "Perfeito. Aqui está meu caderno e a reunião é em cinco minutos." },
        ],
      },
      vocabulary: [
        { term: "bag", pt: "bolsa, mochila", ipa: "/bæɡ/", definition: "You carry your things inside it.", example: "My bag is heavy today.", examplePt: "Minha bolsa está pesada hoje." },
        { term: "key", pt: "chave", ipa: "/kiː/", definition: "You use it to open a door.", example: "These are my keys.", examplePt: "Estas são minhas chaves." },
        { term: "wallet", pt: "carteira", ipa: "/ˈwɑːlət/", definition: "A small case for money and cards.", example: "The wallet is on the desk.", examplePt: "A carteira está sobre a mesa." },
        { term: "notebook", pt: "caderno", ipa: "/ˈnoʊtbʊk/", definition: "A book with empty pages for writing.", example: "This is a notebook.", examplePt: "Isto é um caderno." },
        { term: "pen", pt: "caneta", ipa: "/pen/", definition: "You write with it.", example: "Can I borrow a pen?", examplePt: "Posso pegar uma caneta emprestada?" },
        { term: "umbrella", pt: "guarda-chuva", ipa: "/ʌmˈbrelə/", definition: "It protects you from the rain.", example: "That is an umbrella.", examplePt: "Aquilo é um guarda-chuva." },
        { term: "badge", pt: "crachá", ipa: "/bædʒ/", definition: "A card with your name for work or school.", example: "My badge is in the bag.", examplePt: "Meu crachá está na bolsa." },
        { term: "bottle", pt: "garrafa", ipa: "/ˈbɑːtl̩/", definition: "You keep water inside it.", example: "The bottle is empty.", examplePt: "A garrafa está vazia." },
        { term: "headphones", pt: "fones de ouvido", ipa: "/ˈhedfoʊnz/", definition: "You listen to music with them.", example: "Those headphones are new.", examplePt: "Aqueles fones são novos." },
        { term: "charger", pt: "carregador", ipa: "/ˈtʃɑːrdʒər/", definition: "You use it to put energy in your phone.", example: "Is this your charger?", examplePt: "Este é o seu carregador?" },
      ],
      expressions: [
        { en: "What's this?", pt: "O que é isto?" },
        { en: "Can I borrow a pen, please?", pt: "Posso pegar uma caneta emprestada, por favor?" },
        { en: "Here you are.", pt: "Aqui está." },
        { en: "Thank you! / You're welcome.", pt: "Obrigado! / De nada." },
      ],
      grammar: [
        {
          title: { en: "a / an / the", pt: "a / an / the" },
          examples: [
            { en: "This is a badge.", pt: "Isto é um crachá." },
            { en: "That is an umbrella.", pt: "Aquilo é um guarda-chuva." },
            { en: "The badge is on the desk.", pt: "O crachá está sobre a mesa." },
          ],
          rule: {
            en: "Use a before a consonant sound and an before a vowel sound. Use the when both people know which object it is.",
            pt: "Use a antes de som de consoante e an antes de som de vogal. Use the quando as duas pessoas sabem de qual objeto se trata.",
          },
          mistakes: [
            { en: "This is a umbrella. → This is an umbrella.", pt: "Som de vogal pede an." },
            { en: "I need a keys. → I need the keys.", pt: "a / an só com singular." },
          ],
        },
        {
          title: { en: "this / that / these / those", pt: "this / that / these / those" },
          examples: [
            { en: "This pen is mine.", pt: "Esta caneta é minha." },
            { en: "That bag is Ivan's.", pt: "Aquela bolsa é do Ivan." },
            { en: "These keys are on the table.", pt: "Estas chaves estão na mesa." },
          ],
          rule: {
            en: "this / these = near you. that / those = far from you. this / that = one object; these / those = more than one.",
            pt: "this / these = perto de você. that / those = longe de você. this / that = um objeto; these / those = mais de um.",
          },
          mistakes: [
            { en: "This are my keys. → These are my keys.", pt: "Plural pede these." },
            { en: "Those is my bag. → That is my bag.", pt: "Um objeto pede that." },
          ],
        },
      ],
      controlledPractice: [
        {
          id: "b3d-cp1",
          prompt: { en: "Complete: This is ___ umbrella.", pt: "Complete: This is ___ umbrella." },
          options: ["a", "an", "the"],
          answer: "an",
          explanation: { en: "Vowel sound → an.", pt: "Som de vogal → an." },
        },
        {
          id: "b3d-cp2",
          prompt: { en: "Complete: ___ are my headphones. (near me)", pt: "Complete: ___ are my headphones. (perto de mim)" },
          options: ["This", "These", "That"],
          answer: "These",
          explanation: { en: "Plural + near = these.", pt: "Plural + perto = these." },
        },
        {
          id: "b3d-cp3",
          prompt: { en: "Complete: ___ bag over there is Helena's.", pt: "Complete: ___ bag over there is Helena's." },
          options: ["This", "That", "These"],
          answer: "That",
          explanation: { en: "Singular + far = that.", pt: "Singular + longe = that." },
        },
        {
          id: "b3d-cp4",
          prompt: { en: "Choose the polite request.", pt: "Escolha o pedido educado." },
          options: ["Give me a pen.", "Can I borrow a pen, please?", "I want pen."],
          answer: "Can I borrow a pen, please?",
          explanation: { en: "Can I…, please? is polite.", pt: "Can I…, please? é educado." },
        },
        {
          id: "b3d-cp5",
          prompt: { en: "Complete: Where is ___ charger? (we both know it)", pt: "Complete: Where is ___ charger? (os dois sabem qual)" },
          options: ["a", "an", "the"],
          answer: "the",
          explanation: { en: "Known object → the.", pt: "Objeto conhecido → the." },
        },
      ],
      input: {
        kind: "listening",
        title: { en: "Listening — What is in the bag?", pt: "Listening — O que tem na bolsa?" },
        lines: [
          { en: "In my bag I have a bottle, a notebook and an old charger.", pt: "Na minha bolsa eu tenho uma garrafa, um caderno e um carregador velho." },
          { en: "These keys aren't mine. That wallet is Helena's.", pt: "Estas chaves não são minhas. Aquela carteira é da Helena." },
          { en: "Can I borrow the umbrella, please? Thank you!", pt: "Posso pegar o guarda-chuva emprestado, por favor? Obrigado!" },
        ],
        questions: [
          {
            id: "b3d-r1",
            prompt: { en: "Which object is NOT in the bag?", pt: "Qual objeto NÃO está na bolsa?" },
            options: ["a bottle", "a notebook", "a badge"],
            answer: "a badge",
            explanation: { en: "The speaker names bottle, notebook and charger.", pt: "A pessoa cita bottle, notebook e charger." },
          },
          {
            id: "b3d-r2",
            prompt: { en: "Whose wallet is it?", pt: "De quem é a carteira?" },
            options: ["Helena's", "Ivan's", "Bruno's"],
            answer: "Helena's",
            explanation: { en: "That wallet is Helena's.", pt: "That wallet is Helena's." },
          },
          {
            id: "b3d-r3",
            prompt: { en: "What does the speaker ask for?", pt: "O que a pessoa pede?" },
            options: ["the umbrella", "the keys", "the charger"],
            answer: "the umbrella",
            explanation: { en: "Can I borrow the umbrella, please?", pt: "Can I borrow the umbrella, please?" },
          },
        ],
      },
      quickCheck: [
        {
          id: "b3d-qc1",
          prompt: { en: "Choose the correct sentence.", pt: "Escolha a frase correta." },
          options: ["This are my keys.", "These are my keys.", "That are my keys."],
          answer: "These are my keys.",
          explanation: { en: "Plural near you = these.", pt: "Plural perto de você = these." },
        },
        {
          id: "b3d-qc2",
          prompt: { en: "Complete: I need ___ pen.", pt: "Complete: I need ___ pen." },
          options: ["a", "an", "these"],
          answer: "a",
          explanation: { en: "Consonant sound → a.", pt: "Som de consoante → a." },
        },
        {
          id: "b3d-qc3",
          prompt: { en: "Someone lends you a pen. You say:", pt: "Alguém empresta uma caneta. Você diz:" },
          options: ["Thank you!", "Please.", "Here you are."],
          answer: "Thank you!",
          explanation: { en: "Thank you is the answer when you receive something.", pt: "Thank you é a resposta ao receber algo." },
        },
        {
          id: "b3d-qc4",
          prompt: { en: "Which question asks about one object near you?", pt: "Qual pergunta é sobre um objeto perto de você?" },
          options: ["What's this?", "What are those?", "Who is this?"],
          answer: "What's this?",
          explanation: { en: "this = one object near you.", pt: "this = um objeto perto de você." },
        },
      ],
    },
    communicate: {
      id: "BEGINNER-U03-COMMUNICATE",
      review: [
        { en: "a / an with one object; the for an object we both know.", pt: "a / an com um objeto; the para um objeto que os dois conhecem." },
        { en: "this / these (near) · that / those (far).", pt: "this / these (perto) · that / those (longe)." },
        { en: "Polite request: Can I borrow…, please?", pt: "Pedido educado: Can I borrow…, please?" },
      ],
      activities: [
        {
          id: "b3c-a1",
          title: { en: "Name what you carry", pt: "Nomeie o que você carrega" },
          instruction: {
            en: "Look inside your bag. Name five objects out loud using a, an or the.",
            pt: "Olhe dentro da sua bolsa. Nomeie cinco objetos em voz alta usando a, an ou the.",
          },
          phrases: [
            { en: "This is a bottle and that is an old charger.", pt: "Isto é uma garrafa e aquilo é um carregador velho." },
            { en: "The keys are in my bag.", pt: "As chaves estão na minha bolsa." },
          ],
          check: [
            {
              id: "b3c-a1q1",
              prompt: { en: "Complete: That is ___ badge.", pt: "Complete: That is ___ badge." },
              options: ["a", "an", "these"],
              answer: "a",
              explanation: { en: "badge starts with a consonant sound.", pt: "badge começa com som de consoante." },
            },
          ],
        },
        {
          id: "b3c-a2",
          title: { en: "Ask for something", pt: "Peça alguma coisa" },
          instruction: {
            en: "Make three polite requests and give a polite answer to each one.",
            pt: "Faça três pedidos educados e dê uma resposta educada a cada um.",
          },
          phrases: [
            { en: "Can I borrow your charger, please?", pt: "Posso pegar seu carregador emprestado, por favor?" },
            { en: "Sure, here you are.", pt: "Claro, aqui está." },
          ],
          check: [
            {
              id: "b3c-a2q1",
              prompt: { en: "Best answer to 'Can I borrow your pen, please?'", pt: "Melhor resposta para 'Can I borrow your pen, please?'" },
              options: ["Sure, here you are.", "Yes, I am.", "Thank you, please."],
              answer: "Sure, here you are.",
              explanation: { en: "Here you are is used when you give something.", pt: "Here you are é usado ao entregar algo." },
            },
          ],
        },
        {
          id: "b3c-a3",
          title: { en: "Near or far?", pt: "Perto ou longe?" },
          instruction: {
            en: "Point at objects near you and far from you. Use this, that, these and those.",
            pt: "Aponte para objetos perto e longe de você. Use this, that, these e those.",
          },
          phrases: [
            { en: "This notebook is mine, but those books are yours.", pt: "Este caderno é meu, mas aqueles livros são seus." },
            { en: "That bottle over there isn't mine.", pt: "Aquela garrafa ali não é minha." },
          ],
          check: [
            {
              id: "b3c-a3q1",
              prompt: { en: "Objects far from you, plural. Use:", pt: "Objetos longe de você, no plural. Use:" },
              options: ["these", "those", "this"],
              answer: "those",
              explanation: { en: "Plural + far = those.", pt: "Plural + longe = those." },
            },
          ],
        },
      ],
      challenge: {
        id: "b3c-challenge",
        title: { en: "Communication Challenge — The shared desk", pt: "Desafio de comunicação — A mesa compartilhada" },
        instruction: {
          en: "You share a desk with a colleague. Name four objects, ask for two of them politely and say which ones are not yours.",
          pt: "Você divide a mesa com um colega. Nomeie quatro objetos, peça dois deles com educação e diga quais não são seus.",
        },
        phrases: [
          { en: "This is my notebook and that is your wallet.", pt: "Este é meu caderno e aquela é sua carteira." },
          { en: "Can I borrow the charger, please?", pt: "Posso pegar o carregador emprestado, por favor?" },
          { en: "These headphones aren't mine.", pt: "Estes fones não são meus." },
          { en: "Thank you! You're welcome.", pt: "Obrigado! De nada." },
        ],
        check: [
          {
            id: "b3c-ch1",
            prompt: { en: "Which sentence has NO mistake?", pt: "Qual frase NÃO tem erro?" },
            options: ["This are my keys.", "Can I borrow a pen, please?", "That is a umbrella."],
            answer: "Can I borrow a pen, please?",
            explanation: { en: "Polite structure and correct article.", pt: "Estrutura educada e artigo correto." },
          },
          {
            id: "b3c-ch2",
            prompt: { en: "Complete: ___ bottle over there is Ivan's.", pt: "Complete: ___ bottle over there is Ivan's." },
            options: ["That", "These", "This"],
            answer: "That",
            explanation: { en: "One object, far away = that.", pt: "Um objeto, longe = that." },
          },
        ],
      },
      lessonReview: {
        summary: {
          en: "You named everyday objects and asked for them politely at a shared desk.",
          pt: "Você nomeou objetos do dia a dia e os pediu com educação em uma mesa compartilhada.",
        },
        canDo: [
          { en: "I can name ten objects I carry.", pt: "Consigo nomear dez objetos que carrego." },
          { en: "I can use a, an and the correctly.", pt: "Consigo usar a, an e the corretamente." },
          { en: "I can ask for something politely.", pt: "Consigo pedir algo com educação." },
        ],
        next: {
          en: "Next: numbers and plurals, to give prices, ages and phone numbers.",
          pt: "Próximo: números e plurais, para dar preços, idades e telefones.",
        },
      },
    },
  },
];
