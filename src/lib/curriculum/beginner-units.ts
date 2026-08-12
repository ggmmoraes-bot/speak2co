import type { CourseUnit } from "./types";

/**
 * Speak2Co — Beginner English Course (30 unidades).
 * Piloto visual: Units 1–3 (conteúdo autoral seguindo o escopo linguístico
 * definido no currículo oficial do curso).
 */
export const BEGINNER_UNITS: CourseUnit[] = [
  {
    code: "BEGINNER-U01",
    number: 1,
    title: "Personal Info — Subject pronouns",
    titlePt: "Informações pessoais — Pronomes pessoais",
    cefr: "A1",
    objective: {
      en: "Use subject pronouns (I, you, he, she, it, we, they) with the verb to be in affirmative sentences to introduce yourself.",
      pt: "Usar pronomes pessoais com o verbo to be em frases afirmativas para se apresentar.",
    },
    communicationGoal: {
      en: "You can greet someone and give your basic personal information.",
      pt: "Você consegue cumprimentar alguém e dar suas informações pessoais básicas.",
    },
    prerequisites: { en: "No prerequisites — first unit of the course.", pt: "Sem pré-requisitos — primeira unidade do curso." },
    newContent: {
      en: "Grammar: subject pronouns + to be (affirmative). Vocabulary: personal info. Expressions: greetings.",
      pt: "Gramática: pronomes pessoais + to be (afirmativo). Vocabulário: informações pessoais. Expressões: cumprimentos.",
    },
    reviewContent: { en: "Not applicable — first unit.", pt: "Não aplicável — primeira unidade." },
    discover: {
      id: "BEGINNER-U01-DISCOVER",
      warmUp: {
        prompt: {
          en: "Look at the people below. How do you say your name and where you are from?",
          pt: "Olhe as pessoas abaixo. Como você diz seu nome e de onde você é?",
        },
        phrases: [
          { en: "Hello! My name is Ana.", pt: "Olá! Meu nome é Ana." },
          { en: "I am from Brazil.", pt: "Eu sou do Brasil." },
        ],
      },
      context: {
        situation: {
          en: "First day at an English school. Two students meet in the hall.",
          pt: "Primeiro dia em uma escola de inglês. Dois alunos se encontram no corredor.",
        },
        dialogue: [
          { who: "Ana", en: "Hi! I am Ana. Nice to meet you.", pt: "Oi! Eu sou a Ana. Prazer em conhecer você." },
          { who: "Paul", en: "Nice to meet you too. I am Paul.", pt: "Prazer em conhecer você também. Eu sou o Paul." },
          { who: "Ana", en: "I am from Brazil. And you?", pt: "Eu sou do Brasil. E você?" },
          { who: "Paul", en: "I am from Canada. She is my sister, Mary.", pt: "Eu sou do Canadá. Ela é minha irmã, Mary." },
          { who: "Ana", en: "Good morning, Mary! We are students here.", pt: "Bom dia, Mary! Nós somos alunos aqui." },
        ],
      },
      vocabulary: [
        { term: "name", pt: "nome", ipa: "/neɪm/", definition: "The word people use to call you.", example: "My name is Carla.", examplePt: "Meu nome é Carla." },
        { term: "age", pt: "idade", ipa: "/eɪdʒ/", definition: "How many years old a person is.", example: "My age is thirty.", examplePt: "Minha idade é trinta." },
        { term: "nationality", pt: "nacionalidade", ipa: "/ˌnæʃəˈnæləti/", definition: "The country a person belongs to.", example: "My nationality is Brazilian.", examplePt: "Minha nacionalidade é brasileira." },
        { term: "country", pt: "país", ipa: "/ˈkʌntri/", definition: "A nation with its own government.", example: "Canada is a big country.", examplePt: "O Canadá é um país grande." },
        { term: "city", pt: "cidade", ipa: "/ˈsɪti/", definition: "A large town where many people live.", example: "She is from a small city.", examplePt: "Ela é de uma cidade pequena." },
        { term: "address", pt: "endereço", ipa: "/əˈdres/", definition: "The place where you live.", example: "This is my new address.", examplePt: "Este é meu novo endereço." },
        { term: "phone number", pt: "número de telefone", ipa: "/ˈfoʊn ˌnʌmbər/", definition: "The numbers people use to call you.", example: "My phone number is easy.", examplePt: "Meu número de telefone é fácil." },
        { term: "email", pt: "e-mail", ipa: "/ˈiːmeɪl/", definition: "Your electronic mail address.", example: "My email is short.", examplePt: "Meu e-mail é curto." },
        { term: "occupation", pt: "profissão", ipa: "/ˌɑːkjuˈpeɪʃn/", definition: "The job a person does.", example: "His occupation is teacher.", examplePt: "A profissão dele é professor." },
        { term: "marital status", pt: "estado civil", ipa: "/ˈmærətl ˈsteɪtəs/", definition: "If a person is single, married or divorced.", example: "Her marital status is single.", examplePt: "O estado civil dela é solteira." },
      ],
      expressions: [
        { en: "Hi, how are you?", pt: "Oi, como você está?" },
        { en: "Nice to meet you.", pt: "Prazer em conhecer você." },
        { en: "Good morning!", pt: "Bom dia!" },
      ],
      grammar: [
        {
          title: { en: "Subject pronouns + verb to be (affirmative)", pt: "Pronomes pessoais + verbo to be (afirmativo)" },
          examples: [
            { en: "I am from Brazil.", pt: "Eu sou do Brasil." },
            { en: "She is a teacher.", pt: "Ela é professora." },
            { en: "We are students.", pt: "Nós somos alunos." },
          ],
          rule: {
            en: "Use am with I, is with he / she / it, and are with you / we / they.",
            pt: "Use am com I, is com he / she / it, e are com you / we / they.",
          },
          mistakes: [
            { en: "I is from Brazil. → I am from Brazil.", pt: "O verbo muda com o pronome." },
            { en: "She are a teacher. → She is a teacher.", pt: "He, she e it sempre usam is." },
          ],
        },
      ],
      controlledPractice: [
        {
          id: "b1d-cp1",
          prompt: { en: "Complete: I ___ a student.", pt: "Complete: I ___ a student." },
          options: ["am", "is", "are"],
          answer: "am",
          explanation: { en: "I always takes am.", pt: "I sempre usa am." },
        },
        {
          id: "b1d-cp2",
          prompt: { en: "Complete: He ___ from Canada.", pt: "Complete: He ___ from Canada." },
          options: ["am", "is", "are"],
          answer: "is",
          explanation: { en: "He / she / it take is.", pt: "He, she e it usam is." },
        },
        {
          id: "b1d-cp3",
          prompt: { en: "Complete: They ___ my friends.", pt: "Complete: They ___ my friends." },
          options: ["am", "is", "are"],
          answer: "are",
          explanation: { en: "You / we / they take are.", pt: "You, we e they usam are." },
        },
        {
          id: "b1d-cp4",
          prompt: { en: "Which pronoun replaces 'Ana and I'?", pt: "Qual pronome substitui 'Ana and I'?" },
          options: ["they", "we", "she"],
          answer: "we",
          explanation: { en: "Another person + I = we.", pt: "Outra pessoa + eu = we." },
        },
      ],
      input: {
        kind: "reading",
        title: { en: "Reading — A short profile", pt: "Leitura — Um perfil curto" },
        lines: [
          { en: "My name is Lucas. I am twenty-five years old.", pt: "Meu nome é Lucas. Eu tenho vinte e cinco anos." },
          { en: "I am from Recife, a city in Brazil.", pt: "Eu sou de Recife, uma cidade no Brasil." },
          { en: "My occupation is nurse. My email is short and easy.", pt: "Minha profissão é enfermeiro. Meu e-mail é curto e fácil." },
        ],
        questions: [
          {
            id: "b1d-r1",
            prompt: { en: "Where is Lucas from?", pt: "De onde é o Lucas?" },
            options: ["Canada", "Recife", "Lisbon"],
            answer: "Recife",
            explanation: { en: "The text says: I am from Recife.", pt: "O texto diz: I am from Recife." },
          },
          {
            id: "b1d-r2",
            prompt: { en: "What is his occupation?", pt: "Qual é a profissão dele?" },
            options: ["teacher", "nurse", "student"],
            answer: "nurse",
            explanation: { en: "My occupation is nurse.", pt: "My occupation is nurse." },
          },
        ],
      },
      quickCheck: [
        {
          id: "b1d-qc1",
          prompt: { en: "Choose the correct sentence.", pt: "Escolha a frase correta." },
          options: ["We is friends.", "We are friends.", "We am friends."],
          answer: "We are friends.",
          explanation: { en: "We takes are.", pt: "We usa are." },
        },
        {
          id: "b1d-qc2",
          prompt: { en: "Which greeting is correct in the morning?", pt: "Qual cumprimento é correto de manhã?" },
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
      ],
    },
    communicate: {
      id: "BEGINNER-U01-COMMUNICATE",
      review: [
        { en: "I am / you are / he is — the verb to be changes with the pronoun.", pt: "I am / you are / he is — o verbo to be muda com o pronome." },
        { en: "Personal info words: name, age, city, occupation.", pt: "Palavras de informação pessoal: name, age, city, occupation." },
      ],
      activities: [
        {
          id: "b1c-a1",
          title: { en: "Answer the questions", pt: "Responda às perguntas" },
          instruction: { en: "Say your answers out loud, then check the grammar.", pt: "Fale suas respostas em voz alta e depois confira a gramática." },
          phrases: [
            { en: "My name is Gisele and I am from Brazil.", pt: "Meu nome é Gisele e eu sou do Brasil." },
            { en: "I am a student and she is a teacher.", pt: "Eu sou aluno e ela é professora." },
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
          title: { en: "Complete the conversation", pt: "Complete a conversa" },
          instruction: { en: "Read the dialogue aloud and complete the missing line.", pt: "Leia o diálogo em voz alta e complete a fala que falta." },
          phrases: [
            { en: "Hi! Nice to meet you. I am Paul.", pt: "Oi! Prazer em conhecer você. Eu sou o Paul." },
            { en: "We are new students here.", pt: "Nós somos alunos novos aqui." },
          ],
          check: [
            {
              id: "b1c-a2q1",
              prompt: { en: "A: Hi, how are you? B: ___", pt: "A: Hi, how are you? B: ___" },
              options: ["I am fine, thank you.", "I are fine.", "Fine is me."],
              answer: "I am fine, thank you.",
              explanation: { en: "Standard answer with I am.", pt: "Resposta padrão com I am." },
            },
          ],
        },
        {
          id: "b1c-a3",
          title: { en: "Talk about yourself", pt: "Fale sobre você" },
          instruction: { en: "Record three sentences about you using to be.", pt: "Grave três frases sobre você usando o verbo to be." },
          phrases: [
            { en: "I am twenty-eight years old.", pt: "Eu tenho vinte e oito anos." },
            { en: "My occupation is engineer.", pt: "Minha profissão é engenheiro." },
          ],
          check: [
            {
              id: "b1c-a3q1",
              prompt: { en: "Choose the correct self-introduction.", pt: "Escolha a autoapresentação correta." },
              options: ["She am Carla.", "I am Carla.", "I is Carla."],
              answer: "I am Carla.",
              explanation: { en: "First person singular uses am.", pt: "A primeira pessoa do singular usa am." },
            },
          ],
        },
      ],
      challenge: {
        id: "b1c-challenge",
        title: { en: "Communication Challenge — Introduce yourself", pt: "Desafio de comunicação — Apresente-se" },
        instruction: {
          en: "You meet a new classmate. Greet them and give four pieces of personal information.",
          pt: "Você conhece um colega novo. Cumprimente e dê quatro informações pessoais.",
        },
        phrases: [
          { en: "Good morning! My name is Rafael.", pt: "Bom dia! Meu nome é Rafael." },
          { en: "I am from São Paulo and I am a designer.", pt: "Eu sou de São Paulo e sou designer." },
          { en: "Nice to meet you!", pt: "Prazer em conhecer você!" },
        ],
        check: [
          {
            id: "b1c-ch1",
            prompt: { en: "Which sentence has NO mistake?", pt: "Qual frase NÃO tem erro?" },
            options: ["He are my friend.", "They is students.", "You are welcome here."],
            answer: "You are welcome here.",
            explanation: { en: "You always takes are.", pt: "You sempre usa are." },
          },
        ],
      },
      lessonReview: {
        summary: {
          en: "You introduced yourself using subject pronouns and the verb to be.",
          pt: "Você se apresentou usando pronomes pessoais e o verbo to be.",
        },
        canDo: [
          { en: "I can greet people in English.", pt: "Consigo cumprimentar pessoas em inglês." },
          { en: "I can give my personal information.", pt: "Consigo dar minhas informações pessoais." },
        ],
        next: { en: "Next: talk about your family with negative and question forms.", pt: "Próximo: falar da sua família com formas negativas e interrogativas." },
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

export const BEGINNER_UNITS_TOTAL = 30;

export function getBeginnerUnit(code: string) {
  return BEGINNER_UNITS.find((u) => u.code === code.toUpperCase());
}
