import type { CourseUnit } from "./types";

/** Speak2Co — Beginner English Course (A1). Units 4–10 do currículo oficial. */
export const BEGINNER_UNITS_4_10: CourseUnit[] = [
  {
    code: "BEGINNER-U04",
    number: 4,
    title: "Numbers and Plurals — Give exact information",
    titlePt: "Números e plurais — Dar informações exatas",
    cefr: "A1",
    objective: {
      en: "Form regular and irregular plurals and use numbers from 1 to 100 to give exact information.",
      pt: "Formar plurais regulares e irregulares e usar números de 1 a 100 para dar informações exatas.",
    },
    communicationGoal: {
      en: "You can say a phone number, an age and a price clearly, and count what you see.",
      pt: "Você consegue dizer um telefone, uma idade e um preço com clareza, e contar o que vê.",
    },
    prerequisites: {
      en: "Unit 3 — articles and this / that / these / those.",
      pt: "Unidade 3 — artigos e this / that / these / those.",
    },
    newContent: {
      en: "Grammar: plural -s / -es and irregular plurals. Vocabulary: numbers 1–100. Expressions: How many? / How much is it?",
      pt: "Gramática: plural -s / -es e plurais irregulares. Vocabulário: números 1–100. Expressões: How many? / How much is it?",
    },
    reviewContent: {
      en: "Review from Unit 3: a / an and demonstratives with plural nouns.",
      pt: "Revisão da Unidade 3: a / an e demonstrativos com substantivos no plural.",
    },
    discover: {
      id: "BEGINNER-U04-DISCOVER",
      warmUp: {
        prompt: {
          en: "Look at the picture. A visitor is at a school reception. How many numbers can you find in this situation?",
          pt: "Observe a imagem. Uma visitante está na recepção de uma escola. Quantos números você encontra nessa situação?",
        },
        phrases: [
          { en: "How many students are in the class?", pt: "Quantos alunos há na turma?" },
          { en: "There are twenty-two chairs.", pt: "Há vinte e duas cadeiras." },
          { en: "My phone number is nine one four…", pt: "Meu número de telefone é nove um quatro…" },
        ],
      },
      context: {
        situation: {
          en: "Marina arrives at a language school reception to ask about a course.",
          pt: "Marina chega à recepção de uma escola de idiomas para perguntar sobre um curso.",
        },
        dialogue: [
          { who: "Marina", en: "Good afternoon. How many classes are there per week?", pt: "Boa tarde. Quantas aulas há por semana?" },
          { who: "Receptionist", en: "There are two classes a week, with twelve students in each group.", pt: "São duas aulas por semana, com doze alunos em cada grupo." },
          { who: "Marina", en: "And how much is it?", pt: "E quanto custa?" },
          { who: "Receptionist", en: "It is ninety reais a month. Your room is number fifteen.", pt: "São noventa reais por mês. Sua sala é a número quinze." },
          { who: "Marina", en: "Perfect. My phone number is nine, nine, four, three, one, zero.", pt: "Perfeito. Meu telefone é nove, nove, quatro, três, um, zero." },
        ],
      },
      vocabulary: [
        { term: "number", pt: "número", ipa: "/ˈnʌmbər/", definition: "A symbol we use to count.", example: "My room number is fifteen.", examplePt: "O número da minha sala é quinze." },
        { term: "price", pt: "preço", ipa: "/praɪs/", definition: "How much money something costs.", example: "The price is ninety reais.", examplePt: "O preço é noventa reais." },
        { term: "class", pt: "aula, turma", ipa: "/klæs/", definition: "A group of students or a lesson.", example: "There are two classes a week.", examplePt: "São duas aulas por semana." },
        { term: "student", pt: "aluno, aluna", ipa: "/ˈstuːdnt/", definition: "A person who studies.", example: "Twelve students are in the group.", examplePt: "Doze alunos estão no grupo." },
        { term: "chair", pt: "cadeira", ipa: "/tʃer/", definition: "You sit on it.", example: "There are twenty chairs.", examplePt: "Há vinte cadeiras." },
        { term: "box", pt: "caixa", ipa: "/bɑːks/", definition: "A container with straight sides.", example: "Three boxes are on the floor.", examplePt: "Três caixas estão no chão." },
        { term: "child", pt: "criança", ipa: "/tʃaɪld/", definition: "A young person. Plural: children.", example: "Five children are here.", examplePt: "Cinco crianças estão aqui." },
        { term: "person", pt: "pessoa", ipa: "/ˈpɜːrsn̩/", definition: "One human being. Plural: people.", example: "Ten people are waiting.", examplePt: "Dez pessoas estão esperando." },
        { term: "week", pt: "semana", ipa: "/wiːk/", definition: "Seven days together.", example: "Two classes a week.", examplePt: "Duas aulas por semana." },
        { term: "month", pt: "mês", ipa: "/mʌnθ/", definition: "About thirty days.", example: "Ninety reais a month.", examplePt: "Noventa reais por mês." },
      ],
      expressions: [
        { en: "How many students are there?", pt: "Quantos alunos há?" },
        { en: "How much is it?", pt: "Quanto custa?" },
        { en: "It costs ninety reais.", pt: "Custa noventa reais." },
        { en: "Can you repeat the number, please?", pt: "Pode repetir o número, por favor?" },
      ],
      grammar: [
        {
          title: { en: "Regular plurals: -s and -es", pt: "Plurais regulares: -s e -es" },
          examples: [
            { en: "one chair → two chairs", pt: "uma cadeira → duas cadeiras" },
            { en: "one class → three classes", pt: "uma turma → três turmas" },
            { en: "one city → two cities", pt: "uma cidade → duas cidades" },
          ],
          rule: {
            en: "Add -s to most nouns. Add -es after s, ss, sh, ch, x. When a noun ends in consonant + y, change y to ies.",
            pt: "Acrescente -s na maioria dos substantivos. Use -es depois de s, ss, sh, ch, x. Quando termina em consoante + y, troque y por ies.",
          },
          mistakes: [
            { en: "two classs → two classes", pt: "Depois de ss use -es." },
            { en: "three citys → three cities", pt: "Consoante + y vira ies." },
          ],
        },
        {
          title: { en: "Irregular plurals", pt: "Plurais irregulares" },
          examples: [
            { en: "one child → two children", pt: "uma criança → duas crianças" },
            { en: "one person → ten people", pt: "uma pessoa → dez pessoas" },
            { en: "one man → two men", pt: "um homem → dois homens" },
          ],
          rule: {
            en: "Some nouns change form: child/children, person/people, man/men, woman/women, foot/feet.",
            pt: "Alguns substantivos mudam de forma: child/children, person/people, man/men, woman/women, foot/feet.",
          },
          mistakes: [
            { en: "two childs → two children", pt: "child tem plural irregular." },
            { en: "five persons → five people", pt: "Na fala comum, use people." },
          ],
        },
      ],
      controlledPractice: [
        {
          id: "b4d-cp1",
          prompt: { en: "Plural of 'box':", pt: "Plural de 'box':" },
          options: ["boxs", "boxes", "boxies"],
          answer: "boxes",
          explanation: { en: "After x we add -es.", pt: "Depois de x usamos -es." },
        },
        {
          id: "b4d-cp2",
          prompt: { en: "Plural of 'child':", pt: "Plural de 'child':" },
          options: ["childs", "childes", "children"],
          answer: "children",
          explanation: { en: "child → children.", pt: "child → children." },
        },
        {
          id: "b4d-cp3",
          prompt: { en: "Complete: There ___ twelve students.", pt: "Complete: There ___ twelve students." },
          options: ["is", "are", "am"],
          answer: "are",
          explanation: { en: "Plural → are.", pt: "Plural → are." },
        },
        {
          id: "b4d-cp4",
          prompt: { en: "Which question asks about quantity?", pt: "Qual pergunta é sobre quantidade?" },
          options: ["How much is it?", "How many chairs are there?", "Who is this?"],
          answer: "How many chairs are there?",
          explanation: { en: "How many + countable nouns.", pt: "How many + substantivos contáveis." },
        },
        {
          id: "b4d-cp5",
          prompt: { en: "Write 90 in words:", pt: "Escreva 90 por extenso:" },
          options: ["nineteen", "ninety", "nine hundred"],
          answer: "ninety",
          explanation: { en: "90 = ninety; 19 = nineteen.", pt: "90 = ninety; 19 = nineteen." },
        },
      ],
      input: {
        kind: "listening",
        title: { en: "Listening — At the reception desk", pt: "Listening — Na recepção" },
        lines: [
          { en: "The course has sixteen lessons and two teachers.", pt: "O curso tem dezesseis aulas e dois professores." },
          { en: "It costs eighty reais a month for children and one hundred for adults.", pt: "Custa oitenta reais por mês para crianças e cem para adultos." },
          { en: "My phone number is three, seven, zero, five, one, two.", pt: "Meu telefone é três, sete, zero, cinco, um, dois." },
        ],
        questions: [
          {
            id: "b4d-r1",
            prompt: { en: "How many lessons does the course have?", pt: "Quantas aulas o curso tem?" },
            options: ["sixteen", "sixty", "six"],
            answer: "sixteen",
            explanation: { en: "sixteen = 16.", pt: "sixteen = 16." },
          },
          {
            id: "b4d-r2",
            prompt: { en: "How much is it for children?", pt: "Quanto custa para crianças?" },
            options: ["eighty reais", "one hundred reais", "eighteen reais"],
            answer: "eighty reais",
            explanation: { en: "Eighty for children, one hundred for adults.", pt: "Eighty para crianças, one hundred para adultos." },
          },
          {
            id: "b4d-r3",
            prompt: { en: "Which digit is NOT in the phone number?", pt: "Qual dígito NÃO está no telefone?" },
            options: ["nine", "seven", "five"],
            answer: "nine",
            explanation: { en: "The number is 3-7-0-5-1-2.", pt: "O número é 3-7-0-5-1-2." },
          },
        ],
      },
      quickCheck: [
        {
          id: "b4d-qc1",
          prompt: { en: "Plural of 'person' in everyday speech:", pt: "Plural de 'person' na fala cotidiana:" },
          options: ["persons", "people", "peoples"],
          answer: "people",
          explanation: { en: "person → people.", pt: "person → people." },
        },
        {
          id: "b4d-qc2",
          prompt: { en: "Which number is 15?", pt: "Qual número é 15?" },
          options: ["fifty", "fifteen", "five"],
          answer: "fifteen",
          explanation: { en: "-teen = 13–19.", pt: "-teen = 13–19." },
        },
        {
          id: "b4d-qc3",
          prompt: { en: "Complete: ___ is the price?", pt: "Complete: ___ is the price?" },
          options: ["How many", "How much", "How old"],
          answer: "How much",
          explanation: { en: "Price → How much.", pt: "Preço → How much." },
        },
        {
          id: "b4d-qc4",
          prompt: { en: "You did not understand a number. You say:", pt: "Você não entendeu um número. Você diz:" },
          options: ["Can you repeat the number, please?", "I am number.", "Number is what?"],
          answer: "Can you repeat the number, please?",
          explanation: { en: "Polite request for repetition.", pt: "Pedido educado de repetição." },
        },
      ],
    },
    communicate: {
      id: "BEGINNER-U04-COMMUNICATE",
      review: [
        { en: "Plurals: -s, -es, y → ies, and irregular forms.", pt: "Plurais: -s, -es, y → ies e formas irregulares." },
        { en: "How many (quantity) · How much (price).", pt: "How many (quantidade) · How much (preço)." },
        { en: "Numbers: -teen (13–19) and -ty (20–90).", pt: "Números: -teen (13–19) e -ty (20–90)." },
      ],
      activities: [
        {
          id: "b4c-a1",
          title: { en: "Say your numbers", pt: "Diga seus números" },
          instruction: {
            en: "Say your phone number digit by digit, then your age and your street number.",
            pt: "Diga seu telefone dígito por dígito, depois sua idade e o número da sua rua.",
          },
          phrases: [
            { en: "My phone number is nine, eight, two, four, one, seven.", pt: "Meu telefone é nove, oito, dois, quatro, um, sete." },
            { en: "I am thirty-four years old and I live at number sixty.", pt: "Eu tenho trinta e quatro anos e moro no número sessenta." },
          ],
          check: [
            {
              id: "b4c-a1q1",
              prompt: { en: "Which sentence gives an age correctly?", pt: "Qual frase dá a idade corretamente?" },
              options: ["I have thirty years.", "I am thirty years old.", "I am thirty years."],
              answer: "I am thirty years old.",
              explanation: { en: "Age uses to be + years old.", pt: "Idade usa to be + years old." },
            },
          ],
        },
        {
          id: "b4c-a2",
          title: { en: "Count what you see", pt: "Conte o que você vê" },
          instruction: {
            en: "Look around you. Count five groups of objects and say the plural out loud.",
            pt: "Olhe ao redor. Conte cinco grupos de objetos e diga o plural em voz alta.",
          },
          phrases: [
            { en: "There are four chairs and two boxes here.", pt: "Há quatro cadeiras e duas caixas aqui." },
            { en: "There are three people in the room.", pt: "Há três pessoas na sala." },
          ],
          check: [
            {
              id: "b4c-a2q1",
              prompt: { en: "Complete: There are two ___ in the class.", pt: "Complete: There are two ___ in the class." },
              options: ["woman", "womans", "women"],
              answer: "women",
              explanation: { en: "woman → women.", pt: "woman → women." },
            },
          ],
        },
        {
          id: "b4c-a3",
          title: { en: "Ask about prices", pt: "Pergunte preços" },
          instruction: {
            en: "Ask the price of three things and answer with a full sentence.",
            pt: "Pergunte o preço de três coisas e responda com uma frase completa.",
          },
          phrases: [
            { en: "How much is the course? It costs one hundred reais.", pt: "Quanto custa o curso? Custa cem reais." },
            { en: "How much are the books? They are forty reais.", pt: "Quanto custam os livros? São quarenta reais." },
          ],
          check: [
            {
              id: "b4c-a3q1",
              prompt: { en: "Complete: How much ___ the books?", pt: "Complete: How much ___ the books?" },
              options: ["is", "are", "am"],
              answer: "are",
              explanation: { en: "Plural subject → are.", pt: "Sujeito plural → are." },
            },
          ],
        },
      ],
      challenge: {
        id: "b4c-challenge",
        title: { en: "Communication Challenge — At the reception", pt: "Desafio de comunicação — Na recepção" },
        instruction: {
          en: "You are at a school reception. Ask about quantity and price, give your phone number and your age, and repeat one number for confirmation.",
          pt: "Você está na recepção de uma escola. Pergunte quantidade e preço, dê seu telefone e sua idade, e repita um número para confirmar.",
        },
        phrases: [
          { en: "How many students are there in each class?", pt: "Quantos alunos há em cada turma?" },
          { en: "How much is the course a month?", pt: "Quanto custa o curso por mês?" },
          { en: "My number is seven, two, six, zero, four, one.", pt: "Meu número é sete, dois, seis, zero, quatro, um." },
          { en: "Sorry, is it fifteen or fifty?", pt: "Desculpe, é quinze ou cinquenta?" },
        ],
        check: [
          {
            id: "b4c-ch1",
            prompt: { en: "Which sentence has NO mistake?", pt: "Qual frase NÃO tem erro?" },
            options: ["There are two childs.", "There are two children.", "There is two children."],
            answer: "There are two children.",
            explanation: { en: "children + are.", pt: "children + are." },
          },
          {
            id: "b4c-ch2",
            prompt: { en: "50 in words is:", pt: "50 por extenso é:" },
            options: ["fifteen", "fifty", "five"],
            answer: "fifty",
            explanation: { en: "-ty = tens.", pt: "-ty = dezenas." },
          },
        ],
      },
      lessonReview: {
        summary: {
          en: "You gave exact information: quantities, prices, ages and phone numbers.",
          pt: "Você deu informações exatas: quantidades, preços, idades e telefones.",
        },
        canDo: [
          { en: "I can form regular and irregular plurals.", pt: "Consigo formar plurais regulares e irregulares." },
          { en: "I can say numbers from 1 to 100 clearly.", pt: "Consigo dizer números de 1 a 100 com clareza." },
          { en: "I can ask How many and How much.", pt: "Consigo perguntar How many e How much." },
        ],
        next: {
          en: "Next: talk about your morning routine with the present simple.",
          pt: "Próximo: falar da sua rotina da manhã com o present simple.",
        },
      },
    },
  },
  {
    code: "BEGINNER-U05",
    number: 5,
    title: "My Day Begins — Present simple",
    titlePt: "Meu dia começa — Present simple",
    cefr: "A1",
    objective: {
      en: "Use the present simple in affirmative sentences with I, you, we and they to describe everyday routines.",
      pt: "Usar o present simple em frases afirmativas com I, you, we e they para descrever rotinas diárias.",
    },
    communicationGoal: {
      en: "You can describe five actions of your morning in order.",
      pt: "Você consegue descrever cinco ações da sua manhã em ordem.",
    },
    prerequisites: {
      en: "Unit 4 — numbers, to say times and quantities.",
      pt: "Unidade 4 — números, para dizer horas e quantidades.",
    },
    newContent: {
      en: "Grammar: present simple (affirmative) and time expressions. Vocabulary: routine verbs. Expressions: first, then, after that.",
      pt: "Gramática: present simple (afirmativo) e expressões de tempo. Vocabulário: verbos de rotina. Expressões: first, then, after that.",
    },
    reviewContent: {
      en: "Review from Units 1–4: to be, plurals and numbers.",
      pt: "Revisão das Unidades 1–4: to be, plurais e números.",
    },
    discover: {
      id: "BEGINNER-U05-DISCOVER",
      warmUp: {
        prompt: {
          en: "Look at the picture. It is early morning at home. What does this person do before leaving?",
          pt: "Observe a imagem. É início da manhã em casa. O que essa pessoa faz antes de sair?",
        },
        phrases: [
          { en: "I wake up at six.", pt: "Eu acordo às seis." },
          { en: "I drink coffee in the kitchen.", pt: "Eu tomo café na cozinha." },
          { en: "We leave home at seven thirty.", pt: "Nós saímos de casa às sete e meia." },
        ],
      },
      context: {
        situation: {
          en: "Helena tells Bruno how her mornings work before she arrives at the coworking.",
          pt: "Helena conta a Bruno como são suas manhãs antes de chegar ao coworking.",
        },
        dialogue: [
          { who: "Bruno", en: "You always arrive early. What time do you wake up?", pt: "Você sempre chega cedo. Que horas você acorda?" },
          { who: "Helena", en: "I wake up at five thirty. First I drink water, then I walk for twenty minutes.", pt: "Eu acordo às cinco e meia. Primeiro bebo água, depois caminho por vinte minutos." },
          { who: "Bruno", en: "And after that?", pt: "E depois disso?" },
          { who: "Helena", en: "After that I take a shower, I have breakfast and I read the news.", pt: "Depois disso tomo banho, tomo café da manhã e leio as notícias." },
          { who: "Bruno", en: "We start work at nine, so you have a long morning!", pt: "Nós começamos a trabalhar às nove, então você tem uma manhã longa!" },
        ],
      },
      vocabulary: [
        { term: "wake up", pt: "acordar", ipa: "/weɪk ʌp/", definition: "To stop sleeping.", example: "I wake up at six.", examplePt: "Eu acordo às seis." },
        { term: "get up", pt: "levantar-se", ipa: "/ɡet ʌp/", definition: "To leave the bed.", example: "They get up early.", examplePt: "Eles se levantam cedo." },
        { term: "take a shower", pt: "tomar banho", ipa: "/teɪk ə ˈʃaʊər/", definition: "To wash your body with water.", example: "I take a shower every morning.", examplePt: "Eu tomo banho toda manhã." },
        { term: "have breakfast", pt: "tomar café da manhã", ipa: "/hæv ˈbrekfəst/", definition: "To eat the first meal of the day.", example: "We have breakfast together.", examplePt: "Nós tomamos café da manhã juntos." },
        { term: "leave home", pt: "sair de casa", ipa: "/liːv hoʊm/", definition: "To go out of your house.", example: "I leave home at seven.", examplePt: "Eu saio de casa às sete." },
        { term: "walk", pt: "caminhar", ipa: "/wɔːk/", definition: "To go somewhere on foot.", example: "They walk to the office.", examplePt: "Eles vão a pé para o escritório." },
        { term: "start work", pt: "começar a trabalhar", ipa: "/stɑːrt wɜːrk/", definition: "To begin your working day.", example: "We start work at nine.", examplePt: "Nós começamos a trabalhar às nove." },
        { term: "read", pt: "ler", ipa: "/riːd/", definition: "To look at words and understand them.", example: "I read the news.", examplePt: "Eu leio as notícias." },
        { term: "early", pt: "cedo", ipa: "/ˈɜːrli/", definition: "Before the usual time.", example: "She arrives early.", examplePt: "Ela chega cedo." },
        { term: "late", pt: "tarde", ipa: "/leɪt/", definition: "After the usual time.", example: "I never leave late.", examplePt: "Eu nunca saio tarde." },
      ],
      expressions: [
        { en: "First, I wake up.", pt: "Primeiro, eu acordo." },
        { en: "Then I have breakfast.", pt: "Depois eu tomo café da manhã." },
        { en: "After that, I leave home.", pt: "Depois disso, eu saio de casa." },
        { en: "Every day I do the same.", pt: "Todo dia eu faço o mesmo." },
      ],
      grammar: [
        {
          title: { en: "Present simple with I / you / we / they", pt: "Present simple com I / you / we / they" },
          examples: [
            { en: "I drink water in the morning.", pt: "Eu bebo água de manhã." },
            { en: "We start work at nine.", pt: "Nós começamos a trabalhar às nove." },
            { en: "They walk to the office.", pt: "Eles vão a pé para o escritório." },
          ],
          rule: {
            en: "With I, you, we and they, use the base verb with no ending: I work, you study, we read, they leave.",
            pt: "Com I, you, we e they, use o verbo na forma base, sem terminação: I work, you study, we read, they leave.",
          },
          mistakes: [
            { en: "I am wake up at six. → I wake up at six.", pt: "Não use to be junto de outro verbo no present simple." },
            { en: "We starts at nine. → We start at nine.", pt: "O -s é só da terceira pessoa (he / she / it)." },
          ],
        },
        {
          title: { en: "Time expressions and sequence", pt: "Expressões de tempo e sequência" },
          examples: [
            { en: "I wake up at six every day.", pt: "Eu acordo às seis todo dia." },
            { en: "First I walk, then I take a shower.", pt: "Primeiro eu caminho, depois tomo banho." },
            { en: "After that, I have breakfast.", pt: "Depois disso, eu tomo café da manhã." },
          ],
          rule: {
            en: "Use at + clock time (at seven), in + part of the day (in the morning) and first / then / after that to put actions in order.",
            pt: "Use at + hora (at seven), in + parte do dia (in the morning) e first / then / after that para ordenar as ações.",
          },
          mistakes: [
            { en: "I wake up in six. → I wake up at six.", pt: "Hora exata usa at." },
            { en: "I study at the morning. → I study in the morning.", pt: "Parte do dia usa in." },
          ],
        },
      ],
      controlledPractice: [
        {
          id: "b5d-cp1",
          prompt: { en: "Complete: I ___ up at six.", pt: "Complete: I ___ up at six." },
          options: ["wake", "wakes", "am wake"],
          answer: "wake",
          explanation: { en: "I + base verb.", pt: "I + verbo base." },
        },
        {
          id: "b5d-cp2",
          prompt: { en: "Complete: We ___ work at nine.", pt: "Complete: We ___ work at nine." },
          options: ["starts", "start", "are start"],
          answer: "start",
          explanation: { en: "we + base verb.", pt: "we + verbo base." },
        },
        {
          id: "b5d-cp3",
          prompt: { en: "Complete: They walk ___ the morning.", pt: "Complete: They walk ___ the morning." },
          options: ["at", "in", "on"],
          answer: "in",
          explanation: { en: "in the morning / afternoon / evening.", pt: "in the morning / afternoon / evening." },
        },
        {
          id: "b5d-cp4",
          prompt: { en: "Which word shows the first action?", pt: "Qual palavra mostra a primeira ação?" },
          options: ["First", "After that", "Then"],
          answer: "First",
          explanation: { en: "First opens the sequence.", pt: "First abre a sequência." },
        },
        {
          id: "b5d-cp5",
          prompt: { en: "Complete: I leave home ___ seven thirty.", pt: "Complete: I leave home ___ seven thirty." },
          options: ["in", "at", "of"],
          answer: "at",
          explanation: { en: "Clock time uses at.", pt: "Hora exata usa at." },
        },
      ],
      input: {
        kind: "listening",
        title: { en: "Listening — Two different mornings", pt: "Listening — Duas manhãs diferentes" },
        lines: [
          { en: "I get up at five and I walk in the park before work.", pt: "Eu me levanto às cinco e caminho no parque antes do trabalho." },
          { en: "We have breakfast together, then we leave home at seven.", pt: "Nós tomamos café da manhã juntos, depois saímos de casa às sete." },
          { en: "They start work at ten because they study in the morning.", pt: "Eles começam a trabalhar às dez porque estudam de manhã." },
        ],
        questions: [
          {
            id: "b5d-r1",
            prompt: { en: "What does the first person do before work?", pt: "O que a primeira pessoa faz antes do trabalho?" },
            options: ["walks in the park", "reads the news", "takes a shower"],
            answer: "walks in the park",
            explanation: { en: "I walk in the park before work.", pt: "I walk in the park before work." },
          },
          {
            id: "b5d-r2",
            prompt: { en: "What time do they leave home?", pt: "Que horas eles saem de casa?" },
            options: ["at five", "at seven", "at ten"],
            answer: "at seven",
            explanation: { en: "We leave home at seven.", pt: "We leave home at seven." },
          },
          {
            id: "b5d-r3",
            prompt: { en: "Why do they start work at ten?", pt: "Por que eles começam a trabalhar às dez?" },
            options: ["they study in the morning", "they walk to work", "they wake up late"],
            answer: "they study in the morning",
            explanation: { en: "because they study in the morning.", pt: "because they study in the morning." },
          },
        ],
      },
      quickCheck: [
        {
          id: "b5d-qc1",
          prompt: { en: "Choose the correct sentence.", pt: "Escolha a frase correta." },
          options: ["I am read the news.", "I read the news.", "I reads the news."],
          answer: "I read the news.",
          explanation: { en: "I + base verb, with no to be.", pt: "I + verbo base, sem to be." },
        },
        {
          id: "b5d-qc2",
          prompt: { en: "Complete: They ___ home at eight.", pt: "Complete: They ___ home at eight." },
          options: ["leave", "leaves", "leaving"],
          answer: "leave",
          explanation: { en: "they + base verb.", pt: "they + verbo base." },
        },
        {
          id: "b5d-qc3",
          prompt: { en: "Which sentence puts actions in order?", pt: "Qual frase coloca as ações em ordem?" },
          options: ["I wake up and after that I take a shower.", "I wake up because shower.", "After I wake up shower."],
          answer: "I wake up and after that I take a shower.",
          explanation: { en: "after that connects two actions.", pt: "after that liga duas ações." },
        },
        {
          id: "b5d-qc4",
          prompt: { en: "Opposite of 'early':", pt: "Oposto de 'early':" },
          options: ["late", "long", "fast"],
          answer: "late",
          explanation: { en: "early ↔ late.", pt: "early ↔ late." },
        },
      ],
    },
    communicate: {
      id: "BEGINNER-U05-COMMUNICATE",
      review: [
        { en: "Present simple: I / you / we / they + base verb.", pt: "Present simple: I / you / we / they + verbo base." },
        { en: "at + clock time · in + part of the day.", pt: "at + hora · in + parte do dia." },
        { en: "Sequence: first, then, after that.", pt: "Sequência: first, then, after that." },
      ],
      activities: [
        {
          id: "b5c-a1",
          title: { en: "Five actions of your morning", pt: "Cinco ações da sua manhã" },
          instruction: {
            en: "Say five things you do every morning, in order, with the time.",
            pt: "Diga cinco coisas que você faz toda manhã, em ordem, com o horário.",
          },
          phrases: [
            { en: "I wake up at six and I drink water.", pt: "Eu acordo às seis e bebo água." },
            { en: "Then I take a shower and I have breakfast.", pt: "Depois tomo banho e tomo café da manhã." },
          ],
          check: [
            {
              id: "b5c-a1q1",
              prompt: { en: "Complete: I have breakfast ___ seven.", pt: "Complete: I have breakfast ___ seven." },
              options: ["in", "at", "on"],
              answer: "at",
              explanation: { en: "Clock time uses at.", pt: "Hora exata usa at." },
            },
          ],
        },
        {
          id: "b5c-a2",
          title: { en: "Our routine", pt: "Nossa rotina" },
          instruction: {
            en: "Talk about a routine you share with someone, using we and they.",
            pt: "Fale de uma rotina que você divide com alguém, usando we e they.",
          },
          phrases: [
            { en: "We leave home together at seven thirty.", pt: "Nós saímos de casa juntos às sete e meia." },
            { en: "They start work at nine and we start at ten.", pt: "Eles começam a trabalhar às nove e nós começamos às dez." },
          ],
          check: [
            {
              id: "b5c-a2q1",
              prompt: { en: "Complete: We ___ to the office every day.", pt: "Complete: We ___ to the office every day." },
              options: ["walks", "walk", "are walk"],
              answer: "walk",
              explanation: { en: "we + base verb.", pt: "we + verbo base." },
            },
          ],
        },
        {
          id: "b5c-a3",
          title: { en: "Early or late?", pt: "Cedo ou tarde?" },
          instruction: {
            en: "Compare your morning with a busy day. Say what changes and at what time.",
            pt: "Compare sua manhã com um dia corrido. Diga o que muda e em que horário.",
          },
          phrases: [
            { en: "On busy days I wake up early and I leave home at six.", pt: "Em dias corridos eu acordo cedo e saio de casa às seis." },
            { en: "I never arrive late at work.", pt: "Eu nunca chego tarde ao trabalho." },
          ],
          check: [
            {
              id: "b5c-a3q1",
              prompt: { en: "Choose the natural sentence.", pt: "Escolha a frase natural." },
              options: ["I wake up in six.", "I wake up at six in the morning.", "I wake up on morning."],
              answer: "I wake up at six in the morning.",
              explanation: { en: "at + time, in + part of the day.", pt: "at + hora, in + parte do dia." },
            },
          ],
        },
      ],
      challenge: {
        id: "b5c-challenge",
        title: { en: "Communication Challenge — Tell me your morning", pt: "Desafio de comunicação — Conte sua manhã" },
        instruction: {
          en: "Describe your morning in six sentences: five actions in order with times, and one sentence about someone else's routine.",
          pt: "Descreva sua manhã em seis frases: cinco ações em ordem com horários e uma frase sobre a rotina de outra pessoa.",
        },
        phrases: [
          { en: "First, I wake up at five thirty.", pt: "Primeiro, eu acordo às cinco e meia." },
          { en: "Then I drink coffee and I read the news.", pt: "Depois tomo café e leio as notícias." },
          { en: "After that, I leave home and I walk to the station.", pt: "Depois disso, saio de casa e caminho até a estação." },
          { en: "We start work at nine every day.", pt: "Nós começamos a trabalhar às nove todo dia." },
        ],
        check: [
          {
            id: "b5c-ch1",
            prompt: { en: "Which sentence has NO mistake?", pt: "Qual frase NÃO tem erro?" },
            options: ["I am have breakfast.", "We reads the news.", "They leave home at seven."],
            answer: "They leave home at seven.",
            explanation: { en: "they + base verb + at + time.", pt: "they + verbo base + at + hora." },
          },
          {
            id: "b5c-ch2",
            prompt: { en: "Which sequence is correct?", pt: "Qual sequência está correta?" },
            options: [
              "First I wake up, then I take a shower, after that I leave home.",
              "After that I wake up, first I leave home, then I shower.",
              "Then I wake up, after that first I leave.",
            ],
            answer: "First I wake up, then I take a shower, after that I leave home.",
            explanation: { en: "first → then → after that.", pt: "first → then → after that." },
          },
        ],
      },
      lessonReview: {
        summary: {
          en: "You described your morning routine in order, with times and connected actions.",
          pt: "Você descreveu sua rotina da manhã em ordem, com horários e ações encadeadas.",
        },
        canDo: [
          { en: "I can describe five actions of my day.", pt: "Consigo descrever cinco ações do meu dia." },
          { en: "I can say at what time I do each thing.", pt: "Consigo dizer a que horas faço cada coisa." },
          { en: "I can connect actions with first, then and after that.", pt: "Consigo encadear ações com first, then e after that." },
        ],
        next: {
          en: "Next: talk about other people's routines with he works, she studies.",
          pt: "Próximo: falar da rotina de outras pessoas com he works, she studies.",
        },
      },
    },
  },
  {
    "code": "BEGINNER-U06",
    "number": 6,
    "title": "Daily Routine — Simple Present",
    "titlePt": "Rotina Diária — Simple Present",
    "cefr": "A1",
    "objective": {
      "en": "Teach daily routine vocabulary and the Simple Present (affirmative) for habits and routines, with third-person -s, in a contextualized way.",
      "pt": "Ensinar o vocabulário de rotina diária e o Simple Present (afirmativo) para hábitos e rotinas, com a forma -s para terceira pessoa, de forma contextualizada."
    },
    "communicationGoal": {
      "en": "Students will be able to use 'offering help' expressions and daily routine vocabulary to communicate in real situations.",
      "pt": "O aluno será capaz de usar 'oferecer ajuda' e o vocabulário de daily routine para se comunicar em situações reais."
    },
    "prerequisites": {
      "en": "Structure: Have / Has for possession and family relationships. Vocabulary: Possessions.",
      "pt": "Estrutura: Have / Has para posse e relações familiares. Vocabulário: Posses."
    },
    "newContent": {
      "en": "Grammar: Simple Present (affirmative) for habits and routines, with third-person -s. | Vocabulary: Daily Routine (10 lexical items) | Expressions: Offering Help",
      "pt": "Gramática: Simple Present (afirmativo) para hábitos e rotinas, com a forma -s para terceira pessoa. | Vocabulário: Rotina Diária (10 itens lexicais) | Expressões: Oferecer Ajuda"
    },
    "reviewContent": {
      "en": "Spiral review: Subject pronouns (I, you, he, she, it, we, they) + verb to be (am/is/are) in affirmative sentences (Unit 1).",
      "pt": "Revisão em espiral: Pronomes pessoais (I, you, he, she, it, we, they) + verb to be (am/is/are) em frases afirmativas (Unidade 1)."
    },
    "discover": {
      "id": "BEGINNER-U06-DISCOVER",
      "warmUp": {
        "prompt": {
          "en": "Look at the pictures. What do you do every day?",
          "pt": "Olhe as imagens. O que você faz todos os dias?"
        },
        "phrases": [
          {
            "en": "I sleep.",
            "pt": "Eu durmo."
          },
          {
            "en": "I eat.",
            "pt": "Eu como."
          },
          {
            "en": "I work.",
            "pt": "Eu trabalho."
          }
        ]
      },
      "context": {
        "situation": {
          "en": "Maria is busy preparing for work. Her friend, Alex, offers help.",
          "pt": "Maria está ocupada se preparando para o trabalho. Seu amigo, Alex, oferece ajuda."
        },
        "dialogue": [
          {
            "who": "Maria",
            "en": "Oh, it's 7 a.m.! I wake up late today. I need to take a shower and then have breakfast. And I have to go to work!",
            "pt": "Ah, são 7 da manhã! Acordei tarde hoje. Preciso tomar banho e depois tomar café. E tenho que ir para o trabalho!"
          },
          {
            "who": "Alex",
            "en": "Wow, you are busy. Can I help you?",
            "pt": "Uau, você está ocupada. Posso te ajudar?"
          },
          {
            "who": "Maria",
            "en": "Yes, please! My bag is over there.",
            "pt": "Sim, por favor! Minha bolsa está ali."
          },
          {
            "who": "Alex",
            "en": "Do you need anything else?",
            "pt": "Você precisa de mais alguma coisa?"
          },
          {
            "who": "Maria",
            "en": "No, thank you. I usually wake up at 6 a.m. I always have breakfast at home.",
            "pt": "Não, obrigada. Eu geralmente acordo às 6 da manhã. Eu sempre tomo café da manhã em casa."
          },
          {
            "who": "Alex",
            "en": "I understand. Let me help you with that bag.",
            "pt": "Eu entendo. Deixe-me ajudar com aquela bolsa."
          }
        ]
      },
      "vocabulary": [
        {
          "term": "wake up",
          "pt": "acordar",
          "ipa": "/weɪk ʌp/",
          "definition": "To stop sleeping.",
          "example": "I wake up at 6 a.m. every day.",
          "examplePt": "Eu acordo às 6 da manhã todos os dias."
        },
        {
          "term": "get up",
          "pt": "levantar-se",
          "ipa": "/ɡɛt ʌp/",
          "definition": "To rise from bed after sleeping.",
          "example": "He gets up at 7:30 a.m.",
          "examplePt": "Ele se levanta às 7:30 da manhã."
        },
        {
          "term": "have breakfast",
          "pt": "tomar café da manhã",
          "ipa": "/hæv ˈbrɛkfəst/",
          "definition": "To eat the first meal of the day.",
          "example": "We have breakfast together on Sundays.",
          "examplePt": "Nós tomamos café da manhã juntos aos domingos."
        },
        {
          "term": "go to work",
          "pt": "ir para o trabalho",
          "ipa": "/ɡoʊ tə wɜːrk/",
          "definition": "To travel to the place where you are employed.",
          "example": "She goes to work by bus.",
          "examplePt": "Ela vai para o trabalho de ônibus."
        },
        {
          "term": "have lunch",
          "pt": "almoçar",
          "ipa": "/hæv lʌntʃ/",
          "definition": "To eat the midday meal.",
          "example": "They have lunch at 1 p.m.",
          "examplePt": "Eles almoçam à 1 da tarde."
        },
        {
          "term": "come home",
          "pt": "voltar para casa",
          "ipa": "/kʌm hoʊm/",
          "definition": "To return to one's house.",
          "example": "I come home after work.",
          "examplePt": "Eu volto para casa depois do trabalho."
        },
        {
          "term": "have dinner",
          "pt": "jantar",
          "ipa": "/hæv ˈdɪnər/",
          "definition": "To eat the evening meal.",
          "example": "He has dinner with his family.",
          "examplePt": "Ele janta com a família dele."
        },
        {
          "term": "go to bed",
          "pt": "ir para a cama",
          "ipa": "/ɡoʊ tə bɛd/",
          "definition": "To lie down in bed to sleep.",
          "example": "She goes to bed at 10 p.m.",
          "examplePt": "Ela vai para a cama às 10 da noite."
        },
        {
          "term": "take a shower",
          "pt": "tomar banho (de chuveiro)",
          "ipa": "/teɪk ə ˈʃaʊər/",
          "definition": "To wash oneself under a shower.",
          "example": "We take a shower in the morning.",
          "examplePt": "Nós tomamos banho pela manhã."
        },
        {
          "term": "brush teeth",
          "pt": "escovar os dentes",
          "ipa": "/brʌʃ tiːθ/",
          "definition": "To clean one's teeth with a brush.",
          "example": "I brush my teeth after breakfast.",
          "examplePt": "Eu escovo meus dentes depois do café da manhã."
        }
      ],
      "expressions": [
        {
          "en": "Can I help you?",
          "pt": "Posso te ajudar?"
        },
        {
          "en": "Do you need anything?",
          "pt": "Você precisa de alguma coisa?"
        },
        {
          "en": "Let me help you with that.",
          "pt": "Deixe-me te ajudar com isso."
        }
      ],
      "grammar": [
        {
          "title": {
            "en": "Simple Present (Affirmative) for Habits and Routines",
            "pt": "Simple Present (Afirmativo) para Hábitos e Rotinas"
          },
          "examples": [
            {
              "en": "I wake up at 7 a.m.",
              "pt": "Eu acordo às 7 da manhã."
            },
            {
              "en": "You have breakfast every day.",
              "pt": "Você toma café da manhã todos os dias."
            },
            {
              "en": "We go to bed late.",
              "pt": "Nós vamos para a cama tarde."
            }
          ],
          "rule": {
            "en": "Use the Simple Present to talk about things you do regularly, habits, or routines. For I, You, We, They, the verb stays the same. For He, She, It, add -s to the verb.",
            "pt": "Use o Simple Present para falar sobre coisas que você faz regularmente, hábitos ou rotinas. Para I, You, We, They, o verbo permanece o mesmo. Para He, She, It, adicione -s ao verbo."
          },
          "mistakes": [
            {
              "en": "Incorrect: He go to work. Correct: He goes to work.",
              "pt": "Incorreto: Ele ir para o trabalho. Correto: Ele vai para o trabalho."
            },
            {
              "en": "Incorrect: She have lunch. Correct: She has lunch.",
              "pt": "Incorreto: Ela ter almoço. Correto: Ela almoça."
            }
          ]
        },
        {
          "title": {
            "en": "Third-person singular (-s form)",
            "pt": "Terceira pessoa do singular (forma -s)"
          },
          "examples": [
            {
              "en": "He works in an office.",
              "pt": "Ele trabalha em um escritório."
            },
            {
              "en": "She brushes her teeth.",
              "pt": "Ela escova os dentes dela."
            },
            {
              "en": "It eats a lot.",
              "pt": "Ele/Ela (animal/coisa) come muito."
            }
          ],
          "rule": {
            "en": "For verbs ending in -s, -sh, -ch, -x, -z, and -o, add -es (e.g., wash > washes, go > goes). For other verbs, add -s (e.g., eat > eats). For verbs ending in a consonant + y, change y to i and add -es (e.g., study > studies).",
            "pt": "Para verbos terminados em -s, -sh, -ch, -x, -z, e -o, adicione -es (ex: wash > washes, go > goes). Para outros verbos, adicione -s (ex: eat > eats). Para verbos terminados em consoante + y, mude y para i e adicione -es (ex: study > studies)."
          },
          "mistakes": [
            {
              "en": "Incorrect: He go to bed early. Correct: He goes to bed early.",
              "pt": "Incorreto: Ele ir para a cama cedo. Correto: Ele vai para a cama cedo."
            },
            {
              "en": "Incorrect: She wash her face. Correct: She washes her face.",
              "pt": "Incorreto: Ela lavar o rosto dela. Correto: Ela lava o rosto dela."
            }
          ]
        }
      ],
      "controlledPractice": [
        {
          "id": "b6d-cp-1",
          "prompt": {
            "en": "Choose the correct verb form: I ___ up at 6 AM.",
            "pt": "Escolha a forma verbal correta: Eu ___ às 6 da manhã."
          },
          "options": [
            "wake",
            "wakes",
            "waking"
          ],
          "answer": "wake",
          "explanation": {
            "en": "For 'I', the verb does not change.",
            "pt": "Para 'I', o verbo não muda."
          }
        },
        {
          "id": "b6d-cp-2",
          "prompt": {
            "en": "Choose the correct verb form: She ___ breakfast.",
            "pt": "Escolha a forma verbal correta: Ela ___ café da manhã."
          },
          "options": [
            "have",
            "has",
            "having"
          ],
          "answer": "has",
          "explanation": {
            "en": "For 'She', 'have' changes to 'has'.",
            "pt": "Para 'She', 'have' muda para 'has'."
          }
        },
        {
          "id": "b6d-cp-3",
          "prompt": {
            "en": "Complete the sentence: He ___ to work by car.",
            "pt": "Complete a frase: Ele ___ para o trabalho de carro."
          },
          "options": [
            "go",
            "goes",
            "going"
          ],
          "answer": "goes",
          "explanation": {
            "en": "For 'He', 'go' changes to 'goes'.",
            "pt": "Para 'He', 'go' muda para 'goes'."
          }
        },
        {
          "id": "b6d-cp-4",
          "prompt": {
            "en": "What do you say to offer help? ___ you need anything?",
            "pt": "O que você diz para oferecer ajuda? ___ você precisa de alguma coisa?"
          },
          "options": [
            "Can",
            "Do",
            "Are"
          ],
          "answer": "Do",
          "explanation": {
            "en": "'Do you need anything?' is a common expression for offering help.",
            "pt": "'Do you need anything?' é uma expressão comum para oferecer ajuda."
          }
        }
      ],
      "input": {
        "kind": "reading",
        "title": {
          "en": "A Busy Day",
          "pt": "Um Dia Agitado"
        },
        "lines": [
          {
            "en": "Hi, I'm Leo. I have a busy daily routine. I wake up at 5:30 a.m. every day. Then I take a shower and brush my teeth. At 6:30 a.m., I have breakfast. After breakfast, I go to work. I work in an office. I have lunch at 12:30 p.m. with my co-workers. I come home at 6 p.m. My wife, Ana, has dinner ready. We have dinner and talk about our day. At 10 p.m., I go to bed. Ana also goes to bed around 10 p.m. She wakes up at 6 a.m. She loves her routine too.",
            "pt": "Oi, eu sou o Leo. Eu tenho uma rotina diária agitada. Eu acordo às 5:30 da manhã todos os dias. Depois eu tomo banho e escovo meus dentes. Às 6:30 da manhã, eu tomo café da manhã. Depois do café, eu vou para o trabalho. Eu trabalho em um escritório. Eu almoço às 12:30 da tarde com meus colegas de trabalho. Eu volto para casa às 6 da tarde. Minha esposa, Ana, tem o jantar pronto. Nós jantamos e conversamos sobre nosso dia. Às 10 da noite, eu vou para a cama. Ana também vai para a cama por volta das 10 da noite. Ela acorda às 6 da manhã. Ela também adora a rotina dela."
          }
        ],
        "questions": [
          {
            "id": "b6d-in-1",
            "prompt": {
              "en": "What time does Leo wake up?",
              "pt": "A que horas o Leo acorda?"
            },
            "options": [
              "6 a.m.",
              "5:30 a.m.",
              "7 a.m."
            ],
            "answer": "5:30 a.m.",
            "explanation": {
              "en": "The text says 'I wake up at 5:30 a.m. every day.'",
              "pt": "O texto diz 'Eu acordo às 5:30 da manhã todos os dias.'"
            }
          },
          {
            "id": "b6d-in-2",
            "prompt": {
              "en": "When does Leo have lunch?",
              "pt": "Quando o Leo almoça?"
            },
            "options": [
              "At 12:30 p.m.",
              "At 1 p.m.",
              "At 6 p.m."
            ],
            "answer": "At 12:30 p.m.",
            "explanation": {
              "en": "The text says 'I have lunch at 12:30 p.m.'",
              "pt": "O texto diz 'Eu almoço às 12:30 da tarde.'"
            }
          },
          {
            "id": "b6d-in-3",
            "prompt": {
              "en": "What does Ana do in the morning?",
              "pt": "O que Ana faz pela manhã?"
            },
            "options": [
              "She goes to bed.",
              "She has dinner.",
              "She wakes up at 6 a.m."
            ],
            "answer": "She wakes up at 6 a.m.",
            "explanation": {
              "en": "The text states 'She wakes up at 6 a.m.'",
              "pt": "O texto afirma 'Ela acorda às 6 da manhã.'"
            }
          }
        ]
      },
      "quickCheck": [
        {
          "id": "b6d-qc-1",
          "prompt": {
            "en": "Fill in the blank: My mom ___ coffee every morning.",
            "pt": "Preencha a lacuna: Minha mãe ___ café todas as manhãs."
          },
          "options": [
            "drink",
            "drinks",
            "drinking"
          ],
          "answer": "drinks",
          "explanation": {
            "en": "'My mom' is 'she', so we use 'drinks'.",
            "pt": "'My mom' é 'she', então usamos 'drinks'."
          }
        },
        {
          "id": "b6d-qc-2",
          "prompt": {
            "en": "Choose the correct expression: Your hands are full. ___ help you with that?",
            "pt": "Escolha a expressão correta: Suas mãos estão cheias. ___ te ajudar com isso?"
          },
          "options": [
            "Do I",
            "Let me",
            "Are you"
          ],
          "answer": "Let me",
          "explanation": {
            "en": "'Let me help you with that' is a common way to offer help.",
            "pt": "'Let me help you with that' é uma forma comum de oferecer ajuda."
          }
        },
        {
          "id": "b6d-qc-3",
          "prompt": {
            "en": "What time does he go to bed?",
            "pt": "A que horas ele vai para a cama?"
          },
          "options": [
            "He goes to bed at 10 p.m.",
            "He go to bed at 10 p.m.",
            "He goes to bed 10 p.m."
          ],
          "answer": "He goes to bed at 10 p.m.",
          "explanation": {
            "en": "For 'He', we use 'goes'. 'At' is needed before the time.",
            "pt": "Para 'He', usamos 'goes'. 'At' é necessário antes da hora."
          }
        },
        {
          "id": "b6d-qc-4",
          "prompt": {
            "en": "Which sentence is correct?",
            "pt": "Qual frase está correta?"
          },
          "options": [
            "She brush her teeth.",
            "She brushes her teeth.",
            "She is brush her teeth."
          ],
          "answer": "She brushes her teeth.",
          "explanation": {
            "en": "For 'She', the verb 'brush' becomes 'brushes'.",
            "pt": "Para 'She', o verbo 'brush' se torna 'brushes'."
          }
        }
      ]
    },
    "communicate": {
      "id": "BEGINNER-U06-COMMUNICATE",
      "review": [
        {
          "en": "Remember the new vocabulary for daily routine: wake up, get up, have breakfast, go to work, have lunch, come home, have dinner, go to bed, take a shower, brush teeth.",
          "pt": "Lembre-se do novo vocabulário de rotina diária: wake up, get up, have breakfast, go to work, have lunch, come home, have dinner, go to bed, take a shower, brush teeth."
        },
        {
          "en": "Remember the Simple Present (affirmative) for habits and routines, especially adding -s for He/She/It.",
          "pt": "Lembre-se do Simple Present (afirmativo) para hábitos e rotinas, especialmente adicionando -s para He/She/It."
        },
        {
          "en": "Review expressions for offering help: Can I help you? Do you need anything? Let me help you with that.",
          "pt": "Revise as expressões para oferecer ajuda: Can I help you? Do you need anything? Let me help you with that."
        }
      ],
      "activities": [
        {
          "id": "b6c-act-1",
          "title": {
            "en": "Real-life Communication Activity: My Routine",
            "pt": "Atividade de Comunicação Real: Minha Rotina"
          },
          "instruction": {
            "en": "Talk about your daily routine using the new vocabulary. Say what time you do each activity. Example: 'I wake up at 7 a.m. I have breakfast at 7:30 a.m.'",
            "pt": "Fale sobre sua rotina diária usando o novo vocabulário. Diga a que horas você faz cada atividade. Exemplo: 'Eu acordo às 7 da manhã. Eu tomo café da manhã às 7:30 da manhã.'"
          },
          "phrases": [
            {
              "en": "I wake up at...",
              "pt": "Eu acordo às..."
            },
            {
              "en": "I take a shower at...",
              "pt": "Eu tomo banho às..."
            },
            {
              "en": "I go to work at...",
              "pt": "Eu vou para o trabalho às..."
            }
          ],
          "check": [
            {
              "id": "b6c-act-1-check-1",
              "prompt": {
                "en": "What do you do first in the morning?",
                "pt": "O que você faz primeiro pela manhã?"
              },
              "options": [
                "I have dinner.",
                "I wake up.",
                "I go to bed."
              ],
              "answer": "I wake up.",
              "explanation": {
                "en": "Waking up is usually the first thing you do.",
                "pt": "Acordar é geralmente a primeira coisa que você faz."
              }
            },
            {
              "id": "b6c-act-1-check-2",
              "prompt": {
                "en": "How do you say 'ir para a cama' in English?",
                "pt": "Como se diz 'ir para a cama' em inglês?"
              },
              "options": [
                "go to work",
                "go to bed",
                "go home"
              ],
              "answer": "go to bed",
              "explanation": {
                "en": "'Go to bed' means 'ir para a cama'.",
                "pt": "'Go to bed' significa 'ir para a cama'."
              }
            }
          ]
        },
        {
          "id": "b6c-act-2",
          "title": {
            "en": "Make Questions: About Their Day",
            "pt": "Faça Perguntas: Sobre o Dia Deles"
          },
          "instruction": {
            "en": "Formulate questions about someone's daily routine using 'Do you...?' or 'Does he/she...?'. Example: 'Do you brush your teeth every morning?'",
            "pt": "Formule perguntas sobre a rotina diária de alguém usando 'Do you...?' ou 'Does he/she...?'. Exemplo: 'Você escova os dentes todas as manhãs?'"
          },
          "phrases": [
            {
              "en": "___ you wake up early?",
              "pt": "___ você acorda cedo?"
            },
            {
              "en": "___ she have lunch at work?",
              "pt": "___ ela almoça no trabalho?"
            },
            {
              "en": "___ he take a shower at night?",
              "pt": "___ ele toma banho à noite?"
            }
          ],
          "check": [
            {
              "id": "b6c-act-2-check-1",
              "prompt": {
                "en": "What is the correct question for 'She goes to work by bus'?",
                "pt": "Qual é a pergunta correta para 'Ela vai para o trabalho de ônibus'?"
              },
              "options": [
                "Does she go to work by bus?",
                "Do she go to work by bus?",
                "Is she go to work by bus?"
              ],
              "answer": "Does she go to work by bus?",
              "explanation": {
                "en": "For 'she', use 'Does'. The main verb 'go' returns to its base form.",
                "pt": "Para 'she', use 'Does'. O verbo principal 'go' volta à sua forma base."
              }
            },
            {
              "id": "b6c-act-2-check-2",
              "prompt": {
                "en": "How do you ask about 'you have dinner'?",
                "pt": "Como você pergunta sobre 'você janta'?"
              },
              "options": [
                "Does you have dinner?",
                "Do you have dinner?",
                "You have dinner?"
              ],
              "answer": "Do you have dinner?",
              "explanation": {
                "en": "For 'you', use 'Do' to form a question.",
                "pt": "Para 'you', use 'Do' para formar uma pergunta."
              }
            }
          ]
        },
        {
          "id": "b6c-act-3",
          "title": {
            "en": "Build Sentences: Create Routine Statements",
            "pt": "Construa Frases: Crie Declarações de Rotina"
          },
          "instruction": {
            "en": "Combine subject pronouns, daily routine verbs, and time expressions to create complete sentences. Example: 'I usually have breakfast at 7 a.m.'",
            "pt": "Combine pronomes pessoais, verbos de rotina diária e expressões de tempo para criar frases completas. Exemplo: 'Eu geralmente tomo café da manhã às 7 da manhã.'"
          },
          "phrases": [
            {
              "en": "He / brush teeth / every morning",
              "pt": "Ele / escovar os dentes / todas as manhãs"
            },
            {
              "en": "We / have dinner / at 8 p.m.",
              "pt": "Nós / jantar / às 8 da noite"
            },
            {
              "en": "She / go to bed / late",
              "pt": "Ela / ir para a cama / tarde"
            }
          ],
          "check": [
            {
              "id": "b6c-act-3-check-1",
              "prompt": {
                "en": "Combine: 'He / go to work / early'",
                "pt": "Combine: 'Ele / ir para o trabalho / cedo'"
              },
              "options": [
                "He go to work early.",
                "He goes to work early.",
                "He is go to work early."
              ],
              "answer": "He goes to work early.",
              "explanation": {
                "en": "For 'He', 'go' becomes 'goes'.",
                "pt": "Para 'He', 'go' vira 'goes'."
              }
            },
            {
              "id": "b6c-act-3-check-2",
              "prompt": {
                "en": "Combine: 'They / have lunch / at noon'",
                "pt": "Combine: 'Eles / almoçar / ao meio-dia'"
              },
              "options": [
                "They has lunch at noon.",
                "They have lunch at noon.",
                "They is have lunch at noon."
              ],
              "answer": "They have lunch at noon.",
              "explanation": {
                "en": "For 'They', 'have' remains 'have'.",
                "pt": "Para 'They', 'have' permanece 'have'."
              }
            }
          ]
        },
        {
          "id": "b6c-act-4",
          "title": {
            "en": "Role-play: Offering and Accepting Help",
            "pt": "Role-play: Oferecendo e Aceitando Ajuda"
          },
          "instruction": {
            "en": "Work with a partner. One person describes a busy situation (e.g., 'I need to prepare dinner and also clean the house!'). The other person offers help using the new expressions. Then switch roles.",
            "pt": "Trabalhe com um parceiro. Uma pessoa descreve uma situação agitada (ex: 'Preciso preparar o jantar e também limpar a casa!'). A outra pessoa oferece ajuda usando as novas expressões. Depois troquem os papéis."
          },
          "phrases": [
            {
              "en": "I have so much to do!",
              "pt": "Eu tenho tanta coisa para fazer!"
            },
            {
              "en": "Can I help you with that?",
              "pt": "Posso te ajudar com isso?"
            },
            {
              "en": "Yes, please!",
              "pt": "Sim, por favor!"
            }
          ],
          "check": [
            {
              "id": "b6c-act-4-check-1",
              "prompt": {
                "en": "Someone is struggling with heavy bags. What can you say?",
                "pt": "Alguém está com dificuldade com sacolas pesadas. O que você pode dizer?"
              },
              "options": [
                "What are you doing?",
                "Let me help you with that.",
                "You need help?"
              ],
              "answer": "Let me help you with that.",
              "explanation": {
                "en": "'Let me help you with that' is a polite way to offer help.",
                "pt": "'Let me help you with that' é uma forma educada de oferecer ajuda."
              }
            },
            {
              "id": "b6c-act-4-check-2",
              "prompt": {
                "en": "Your friend looks tired and busy. What question can you ask?",
                "pt": "Seu amigo parece cansado e ocupado. Que pergunta você pode fazer?"
              },
              "options": [
                "Are you good?",
                "Do you need anything?",
                "Why are you busy?"
              ],
              "answer": "Do you need anything?",
              "explanation": {
                "en": "'Do you need anything?' is a polite question to offer help.",
                "pt": "'Do you need anything?' é uma pergunta educada para oferecer ajuda."
              }
            }
          ]
        },
        {
          "id": "b6c-act-5",
          "title": {
            "en": "Talk to Your Partner: Compare Routines",
            "pt": "Fale com Seu Parceiro: Compare Rotinas"
          },
          "instruction": {
            "en": "Interview your partner about their daily routine. Ask and answer questions. Then, tell the class about your partner's routine. Example: 'Pedro wakes up at 8 a.m. He has breakfast at home.'",
            "pt": "Entreviste seu parceiro sobre a rotina diária dele. Façam perguntas e respostas. Depois, conte à turma sobre a rotina do seu parceiro. Exemplo: 'Pedro acorda às 8 da manhã. Ele toma café da manhã em casa.'"
          },
          "phrases": [
            {
              "en": "Do you wake up early?",
              "pt": "Você acorda cedo?"
            },
            {
              "en": "What time does he/she go to work?",
              "pt": "A que horas ele/ela vai para o trabalho?"
            },
            {
              "en": "My partner brushes his/her teeth before bed.",
              "pt": "Meu parceiro(a) escova os dentes antes de dormir."
            }
          ],
          "check": [
            {
              "id": "b6c-act-5-check-1",
              "prompt": {
                "en": "To ask your partner about their lunch time, you say:",
                "pt": "Para perguntar ao seu parceiro sobre a hora do almoço dele, você diz:"
              },
              "options": [
                "What time you have lunch?",
                "What time do you have lunch?",
                "What time is your lunch?"
              ],
              "answer": "What time do you have lunch?",
              "explanation": {
                "en": "We use 'do you' for questions in the Simple Present.",
                "pt": "Usamos 'do you' para perguntas no Simple Present."
              }
            },
            {
              "id": "b6c-act-5-check-2",
              "prompt": {
                "en": "Your partner says: 'I go to bed at 10 p.m.' How do you tell this to the class?",
                "pt": "Seu parceiro diz: 'Eu vou para a cama às 22h.' Como você conta isso para a turma?"
              },
              "options": [
                "He goes to bed at 10 p.m.",
                "He go to bed at 10 p.m.",
                "He is going to bed at 10 p.m."
              ],
              "answer": "He goes to bed at 10 p.m.",
              "explanation": {
                "en": "For 'He', the verb 'go' becomes 'goes'.",
                "pt": "Para 'He', o verbo 'go' se torna 'goes'."
              }
            }
          ]
        }
      ],
      "challenge": {
        "id": "b6c-challenge",
        "title": {
          "en": "Planning a Week - Daily Routines & Help",
          "pt": "Planejando uma Semana - Rotinas Diárias e Ajuda"
        },
        "instruction": {
          "en": "In pairs, plan a busy day for an imaginary friend who needs help. Describe their routine and then practice offering help when they are 'too busy'. Example: 'Sarah wakes up early, then she has breakfast and takes a shower. She goes to work at 8 a.m. Oh no, she needs to prepare lunch! Can I help her?'",
          "pt": "Em duplas, planejem um dia agitado para um amigo imaginário que precisa de ajuda. Descrevam a rotina dele e, em seguida, pratiquem oferecer ajuda quando ele estiver 'muito ocupado'. Exemplo: 'Sarah acorda cedo, depois ela toma café da manhã e toma banho. Ela vai para o trabalho às 8 da manhã. Ah não, ela precisa preparar o almoço! Posso ajudá-la?'"
        },
        "phrases": [
          {
            "en": "My friend 'Leo' has a busy morning routine.",
            "pt": "Meu amigo 'Leo' tem uma rotina matinal agitada."
          },
          {
            "en": "He usually wakes up at 6 a.m., takes a shower, and then has breakfast.",
            "pt": "Ele geralmente acorda às 6 da manhã, toma banho e depois toma café da manhã."
          },
          {
            "en": "He needs to go to work, but his car doesn't start! Can I help him?",
            "pt": "Ele precisa ir para o trabalho, mas o carro dele não liga! Posso ajudá-lo?"
          }
        ],
        "check": [
          {
            "id": "b6c-chal-check-1",
            "prompt": {
              "en": "Your friend says, 'I need to clean the house and cook dinner.' What is a good way to offer help?",
              "pt": "Seu amigo diz: 'Preciso limpar a casa e cozinhar o jantar.' Qual é uma boa maneira de oferecer ajuda?"
            },
            "options": [
              "Are you busy?",
              "Can I help you with dinner?",
              "Why do you need to do that?"
            ],
            "answer": "Can I help you with dinner?",
            "explanation": {
              "en": "'Can I help you with dinner?' is a specific and helpful offer.",
              "pt": "Posso te ajudar com o jantar?' é uma oferta específica e útil."
            }
          },
          {
            "id": "b6c-chal-check-2",
            "prompt": {
              "en": "Someone is rushing to get ready. You see them looking for keys. What can you say?",
              "pt": "Alguém está com pressa para se arrumar. Você os vê procurando chaves. O que você pode dizer?"
            },
            "options": [
              "Where are your keys?",
              "Do you need anything?",
              "You are late."
            ],
            "answer": "Do you need anything?",
            "explanation": {
              "en": "'Do you need anything?' is a general offer of help, appropriate here.",
              "pt": "'Você precisa de alguma coisa?' é uma oferta geral de ajuda, apropriada aqui."
            }
          }
        ]
      },
      "lessonReview": {
        "summary": {
          "en": "In this unit, you learned about daily routines and how to talk about them using the Simple Present, including the -s form for 'he', 'she', and 'it'. You also practiced offering help in different situations.",
          "pt": "Nesta unidade, você aprendeu sobre rotinas diárias e como falar sobre elas usando o Simple Present, incluindo a forma -s para 'he', 'she' e 'it'. Você também praticou oferecer ajuda em diferentes situações."
        },
        "canDo": [
          {
            "en": "Describe my own daily routine and someone else's daily routine.",
            "pt": "Descrever minha própria rotina diária e a rotina diária de outra pessoa."
          },
          {
            "en": "Use verbs in the Simple Present (affirmative) correctly, including the -s for third person singular.",
            "pt": "Usar verbos no Simple Present (afirmativo) corretamente, incluindo o -s para a terceira pessoa do singular."
          },
          {
            "en": "Offer help using 'Can I help you?', 'Do you need anything?', and 'Let me help you with that.'",
            "pt": "Oferecer ajuda usando 'Can I help you?', 'Do you need anything?' e 'Let me help you with that.'"
          }
        ],
        "next": {
          "en": "In the next unit, we will continue with the Simple Present and learn how to form negative sentences and questions about daily routines.",
          "pt": "Na próxima unidade, continuaremos com o Simple Present e aprenderemos como formar frases negativas e perguntas sobre rotinas diárias."
        }
      }
    }
  },
  {
    "code": "BEGINNER-U07",
    "number": 7,
    "title": "School Work - Simple Present",
    "titlePt": "Trabalho Escolar - Presente Simples",
    "cefr": "A1",
    "objective": {
      "en": "To teach 'school work' vocabulary and Simple Present negative (don't/doesn't) and interrogative (do/does) forms in a contextualized way.",
      "pt": "Ensinar o vocabulário de 'school work' e as formas negativa (don't/doesn't) e interrogativa (do/does) do Simple Present de forma contextualizada."
    },
    "communicationGoal": {
      "en": "The student will be able to use 'accept refuse' expressions and 'school work' vocabulary to communicate in real situations.",
      "pt": "O aluno será capaz de usar as expressões de 'accept refuse' e o vocabulário de 'school work' para se comunicar em situações reais."
    },
    "prerequisites": {
      "en": "Simple Present (affirmative) for habits and routines, with third-person -s. Daily Routine vocabulary.",
      "pt": "Simple Present (afirmativo) para hábitos e rotinas, com -s na terceira pessoa. Vocabulário de Daily Routine."
    },
    "newContent": {
      "en": "Grammar: Simple Present — negative (don't/doesn't) and interrogative (do/does) forms. | Vocabulary: School Work (10 lexical items) | Expressions: Accept Refuse.",
      "pt": "Gramática: Simple Present — formas negativa (don't/doesn't) e interrogativa (do/does). | Vocabulário: School Work (10 itens lexicais) | Expressões: Accept Refuse."
    },
    "reviewContent": {
      "en": "Spiral review: Verb to be — negative and interrogative forms, plus possessive adjectives (my, your, his, her) (Unit 2).",
      "pt": "Revisão em espiral: Verb to be — formas negativa e interrogativa, mais adjetivos possessivos (my, your, his, her) (Unidade 2)."
    },
    "discover": {
      "id": "BEGINNER-U07-DISCOVER",
      "warmUp": {
        "prompt": {
          "en": "Look at the pictures. What do you see? Discuss what people do at school or work.",
          "pt": "Olhe as imagens. O que você vê? Discuta o que as pessoas fazem na escola ou no trabalho."
        },
        "phrases": [
          {
            "en": "Is this a school or an office?",
            "pt": "Isto é uma escola ou um escritório?"
          },
          {
            "en": "What do students do?",
            "pt": "O que os alunos fazem?"
          },
          {
            "en": "What does a teacher do?",
            "pt": "O que um professor faz?"
          }
        ]
      },
      "context": {
        "situation": {
          "en": "Leo is a student. He is talking to his friend, Maya, about school work.",
          "pt": "Leo é um estudante. Ele está conversando com sua amiga, Maya, sobre trabalho escolar."
        },
        "dialogue": [
          {
            "who": "Leo",
            "en": "Hi, Maya! Do you have a lot of homework today?",
            "pt": "Oi, Maya! Você tem muito dever de casa hoje?"
          },
          {
            "who": "Maya",
            "en": "Yes, I do! My teacher gives a lot of homework. I don't like it.",
            "pt": "Sim, eu tenho! Minha professora dá muito dever de casa. Eu não gosto."
          },
          {
            "who": "Leo",
            "en": "Oh, I see. Does your boss give you many deadlines for your job?",
            "pt": "Ah, entendi. Sua chefe te dá muitos prazos no seu trabalho?"
          },
          {
            "who": "Maya",
            "en": "Sometimes. But I manage my schedule well. Do you want to study together later?",
            "pt": "Às vezes. Mas eu gerencio bem minha agenda. Quer estudar juntos mais tarde?"
          },
          {
            "who": "Leo",
            "en": "Yes, sure! I'd love to! My schedule is free.",
            "pt": "Sim, claro! Eu adoraria! Minha agenda está livre."
          }
        ]
      },
      "vocabulary": [
        {
          "term": "classroom",
          "pt": "sala de aula",
          "ipa": "/ˈklæs.ruːm/",
          "definition": "A room where students have lessons.",
          "example": "The teacher writes on the board in the classroom.",
          "examplePt": "O professor escreve no quadro na sala de aula."
        },
        {
          "term": "teacher",
          "pt": "professor(a)",
          "ipa": "/ˈtiː.tʃər/",
          "definition": "A person who teaches students, especially in a school.",
          "example": "My English teacher is very kind.",
          "examplePt": "Minha professora de inglês é muito gentil."
        },
        {
          "term": "student",
          "pt": "estudante, aluno(a)",
          "ipa": "/ˈstuː.dənt/",
          "definition": "A person who is studying at a school or college.",
          "example": "I am a student at a university.",
          "examplePt": "Eu sou um estudante em uma universidade."
        },
        {
          "term": "homework",
          "pt": "dever de casa",
          "ipa": "/ˈhoʊm.wɜːrk/",
          "definition": "Work that a student is given to do at home.",
          "example": "I do my homework every evening.",
          "examplePt": "Eu faço meu dever de casa todas as noites."
        },
        {
          "term": "office",
          "pt": "escritório",
          "ipa": "/ˈɑː.fɪs/",
          "definition": "A room or building where people work, usually at desks.",
          "example": "My father works in an office.",
          "examplePt": "Meu pai trabalha em um escritório."
        },
        {
          "term": "meeting",
          "pt": "reunião",
          "ipa": "/ˈmiː.tɪŋ/",
          "definition": "A planned occasion when people come together to discuss something.",
          "example": "We have a meeting every Monday.",
          "examplePt": "Temos uma reunião toda segunda-feira."
        },
        {
          "term": "colleague",
          "pt": "colega de trabalho",
          "ipa": "/ˈkɑː.liːɡ/",
          "definition": "A person you work with.",
          "example": "My colleague helps me with my tasks.",
          "examplePt": "Meu colega me ajuda com minhas tarefas."
        },
        {
          "term": "boss",
          "pt": "chefe",
          "ipa": "/bɑːs/",
          "definition": "The person who is in charge of an organization or department.",
          "example": "My boss is a very busy person.",
          "examplePt": "Meu chefe é uma pessoa muito ocupada."
        },
        {
          "term": "deadline",
          "pt": "prazo",
          "ipa": "/ˈded.laɪn/",
          "definition": "A time or date by which a particular task must be completed.",
          "example": "I need to finish this report before the deadline.",
          "examplePt": "Preciso terminar este relatório antes do prazo."
        },
        {
          "term": "schedule",
          "pt": "agenda, cronograma",
          "ipa": "/ˈskedʒ.uːl/",
          "definition": "A plan that lists all the work you have to do and when you must do it.",
          "example": "My schedule is very full this week.",
          "examplePt": "Minha agenda está muito cheia esta semana."
        }
      ],
      "expressions": [
        {
          "en": "Yes, sure!",
          "pt": "Sim, claro!"
        },
        {
          "en": "No, thank you.",
          "pt": "Não, obrigado(a)."
        },
        {
          "en": "I'd love to, but I can't.",
          "pt": "Eu adoraria, mas não posso."
        }
      ],
      "grammar": [
        {
          "title": {
            "en": "Simple Present — Negative Form",
            "pt": "Simple Present — Forma Negativa"
          },
          "examples": [
            {
              "en": "I don't work on Sundays.",
              "pt": "Eu não trabalho aos domingos."
            },
            {
              "en": "She doesn't like coffee.",
              "pt": "Ela não gosta de café."
            },
            {
              "en": "They don't have a meeting today.",
              "pt": "Eles não têm uma reunião hoje."
            }
          ],
          "rule": {
            "en": "Use 'do not' (don't) for I, You, We, They. Use 'does not' (doesn't) for He, She, It. The main verb stays in the base form.",
            "pt": "Use 'do not' (don't) para I, You, We, They. Use 'does not' (doesn't) para He, She, It. O verbo principal permanece na forma base."
          },
          "mistakes": [
            {
              "en": "He doesn't likes coffee. (Incorrect 'likes')",
              "pt": "He doesn't likes coffee. (Uso incorreto de 'likes')"
            },
            {
              "en": "I not like homework. (Missing 'do')",
              "pt": "I not like homework. (Faltando 'do')"
            }
          ]
        },
        {
          "title": {
            "en": "Simple Present — Interrogative Form",
            "pt": "Simple Present — Forma Interrogativa"
          },
          "examples": [
            {
              "en": "Do you work on Saturdays?",
              "pt": "Você trabalha aos sábados?"
            },
            {
              "en": "Does he study English?",
              "pt": "Ele estuda inglês?"
            },
            {
              "en": "Do they have a deadline?",
              "pt": "Eles têm um prazo?"
            }
          ],
          "rule": {
            "en": "Use 'Do' before I, You, We, They. Use 'Does' before He, She, It. The main verb stays in the base form.",
            "pt": "Use 'Do' antes de I, You, We, They. Use 'Does' antes de He, She, It. O verbo principal permanece na forma base."
          },
          "mistakes": [
            {
              "en": "Does she works in an office? (Incorrect 'works')",
              "pt": "Does she works in an office? (Uso incorreto de 'works')"
            },
            {
              "en": "You like school? (Missing 'Do')",
              "pt": "You like school? (Faltando 'Do')"
            }
          ]
        }
      ],
      "controlledPractice": [
        {
          "id": "b7d-cp1",
          "prompt": {
            "en": "Choose the correct negative form: She _____ homework.",
            "pt": "Escolha a forma negativa correta: Ela _____ dever de casa."
          },
          "options": [
            "don't do",
            "doesn't do",
            "not do",
            "don't doing"
          ],
          "answer": "doesn't do",
          "explanation": {
            "en": "For 'she', we use 'doesn't' followed by the base form of the verb.",
            "pt": "Para 'she', usamos 'doesn't' seguido da forma base do verbo."
          }
        },
        {
          "id": "b7d-cp2",
          "prompt": {
            "en": "Choose the correct interrogative form: _____ you have a meeting?",
            "pt": "Escolha a forma interrogativa correta: _____ você tem uma reunião?"
          },
          "options": [
            "Does",
            "Is",
            "Do",
            "Are"
          ],
          "answer": "Do",
          "explanation": {
            "en": "For 'you', we use 'Do' to form a question in the Simple Present.",
            "pt": "Para 'you', usamos 'Do' para formar uma pergunta no Simple Present."
          }
        },
        {
          "id": "b7d-cp3",
          "prompt": {
            "en": "Complete the sentence: My colleague _____ work on weekends. (negative)",
            "pt": "Complete a frase: Meu colega _____ trabalhar nos fins de semana. (negativo)"
          },
          "options": [
            "don't",
            "doesn't",
            "not",
            "do not"
          ],
          "answer": "doesn't",
          "explanation": {
            "en": "'My colleague' is like 'he/she', so we use 'doesn't'.",
            "pt": "'My colleague' é como 'he/she', então usamos 'doesn't'."
          }
        },
        {
          "id": "b7d-cp4",
          "prompt": {
            "en": "Form a question: (they / study / in the classroom)",
            "pt": "Forme uma pergunta: (eles / estudar / na sala de aula)"
          },
          "options": [
            "Do they study in the classroom?",
            "Does they study in the classroom?",
            "Are they study in the classroom?",
            "They study in the classroom?"
          ],
          "answer": "Do they study in the classroom?",
          "explanation": {
            "en": "For 'they', use 'Do' at the beginning of the question.",
            "pt": "Para 'they', use 'Do' no início da pergunta."
          }
        }
      ],
      "input": {
        "kind": "reading",
        "title": {
          "en": "A Busy Day",
          "pt": "Um Dia Agitado"
        },
        "lines": [
          {
            "en": "I am Anna. I am a student and I also work part-time. In the morning, I go to my classroom. My teacher always gives us homework. I don't like a lot of homework, but I always do it. My friend, Leo, doesn't like homework either.",
            "pt": "Eu sou a Anna. Sou estudante e também trabalho em meio período. Pela manhã, vou para minha sala de aula. Minha professora sempre nos dá dever de casa. Eu não gosto de muito dever de casa, mas sempre faço. Meu amigo, Leo, também não gosta de dever de casa."
          },
          {
            "en": "In the afternoon, I work in an office. My boss is very strict. She gives me many deadlines. My colleagues and I have a meeting every Tuesday. It's a busy schedule! Do you have a busy schedule too?",
            "pt": "À tarde, trabalho em um escritório. Minha chefe é muito rigorosa. Ela me dá muitos prazos. Meus colegas e eu temos uma reunião toda terça-feira. É uma agenda cheia! Você também tem uma agenda cheia?"
          }
        ],
        "questions": [
          {
            "id": "b7d-iq1",
            "prompt": {
              "en": "Does Anna like a lot of homework?",
              "pt": "Anna gosta de muito dever de casa?"
            },
            "options": [
              "Yes, she does.",
              "No, she doesn't.",
              "Yes, she is.",
              "No, she isn't."
            ],
            "answer": "No, she doesn't.",
            "explanation": {
              "en": "The text says: 'I don't like a lot of homework'.",
              "pt": "O texto diz: 'Eu não gosto de muito dever de casa'."
            }
          },
          {
            "id": "b7d-iq2",
            "prompt": {
              "en": "When do Anna and her colleagues have a meeting?",
              "pt": "Quando Anna e seus colegas têm uma reunião?"
            },
            "options": [
              "Every Monday",
              "Every Wednesday",
              "Every Tuesday",
              "Every Friday"
            ],
            "answer": "Every Tuesday",
            "explanation": {
              "en": "The text states: 'My colleagues and I have a meeting every Tuesday.'",
              "pt": "O texto afirma: 'Meus colegas e eu temos uma reunião toda terça-feira.'"
            }
          },
          {
            "id": "b7d-iq3",
            "prompt": {
              "en": "Is Anna only a student?",
              "pt": "Anna é apenas uma estudante?"
            },
            "options": [
              "Yes, she is.",
              "No, she isn't.",
              "Yes, she does.",
              "No, she doesn't."
            ],
            "answer": "No, she isn't.",
            "explanation": {
              "en": "The text says: 'I am a student and I also work part-time.'",
              "pt": "O texto diz: 'Eu sou estudante e também trabalho em meio período'."
            }
          }
        ]
      },
      "quickCheck": [
        {
          "id": "b7d-qc1",
          "prompt": {
            "en": "My brother _____ work on Sundays. (negative)",
            "pt": "Meu irmão _____ trabalhar aos domingos. (negativo)"
          },
          "options": [
            "don't",
            "doesn't",
            "not",
            "do not"
          ],
          "answer": "doesn't",
          "explanation": {
            "en": "'My brother' is third person singular, so we use 'doesn't'.",
            "pt": "'My brother' é terceira pessoa do singular, então usamos 'doesn't'."
          }
        },
        {
          "id": "b7d-qc2",
          "prompt": {
            "en": "_____ your teacher give a lot of homework?",
            "pt": "_____ seu professor(a) dá muito dever de casa?"
          },
          "options": [
            "Do",
            "Does",
            "Is",
            "Are"
          ],
          "answer": "Does",
          "explanation": {
            "en": "'Your teacher' is third person singular, so we use 'Does'.",
            "pt": "'Your teacher' é terceira pessoa do singular, então usamos 'Does'."
          }
        },
        {
          "id": "b7d-qc3",
          "prompt": {
            "en": "Choose the correct phrase: (invitation)",
            "pt": "Escolha a frase correta: (convite)"
          },
          "options": [
            "No, thanks you.",
            "I'd love to, but I can't.",
            "Yes, I can't.",
            "No, sure!"
          ],
          "answer": "I'd love to, but I can't.",
          "explanation": {
            "en": "This is a common expression to politely refuse an invitation.",
            "pt": "Esta é uma expressão comum para recusar um convite educadamente."
          }
        },
        {
          "id": "b7d-qc4",
          "prompt": {
            "en": "What is 'homework' in Portuguese?",
            "pt": "O que significa 'homework' em português?"
          },
          "options": [
            "Reunião",
            "Prazo",
            "Dever de casa",
            "Escritório"
          ],
          "answer": "Dever de casa",
          "explanation": {
            "en": "'Homework' means 'dever de casa'.",
            "pt": "'Homework' significa 'dever de casa'."
          }
        }
      ]
    },
    "communicate": {
      "id": "BEGINNER-U07-COMMUNICATE",
      "review": [
        {
          "en": "Remember the negative and interrogative forms of Simple Present with 'do/does'.",
          "pt": "Lembre-se das formas negativa e interrogativa do Simple Present com 'do/does'."
        },
        {
          "en": "Recall vocabulary related to school and work.",
          "pt": "Recorde o vocabulário relacionado à escola e ao trabalho."
        },
        {
          "en": "Practice accepting and refusing invitations.",
          "pt": "Pratique aceitar e recusar convites."
        }
      ],
      "activities": [
        {
          "id": "b7c-act1",
          "title": {
            "en": "Complete the Conversation",
            "pt": "Complete a Conversa"
          },
          "instruction": {
            "en": "Complete the dialogues using the correct form of the verb or the correct expression.",
            "pt": "Complete os diálogos usando a forma correta do verbo ou a expressão correta."
          },
          "phrases": [
            {
              "en": "A: Do you work in an office? B: No, I _____. I work from home.",
              "pt": "A: Você trabalha em um escritório? B: Não, eu _____. Eu trabalho em casa."
            },
            {
              "en": "A: My boss gives many deadlines. B: _____ she give you a lot of work?",
              "pt": "A: Minha chefe dá muitos prazos. B: _____ ela te dá muito trabalho?"
            },
            {
              "en": "A: Do you want to study together? B: _____, but I can't. I have homework.",
              "pt": "A: Você quer estudar juntos? B: _____, mas não posso. Eu tenho dever de casa."
            }
          ],
          "check": [
            {
              "id": "b7c-act1-q1",
              "prompt": {
                "en": "Complete: A: Do you work in an office? B: No, I _____. I work from home.",
                "pt": "Complete: A: Você trabalha em um escritório? B: Não, eu _____. Eu trabalho em casa."
              },
              "options": [
                "don't",
                "doesn't",
                "am not",
                "not"
              ],
              "answer": "don't",
              "explanation": {
                "en": "Use 'don't' for 'I' in negative short answers.",
                "pt": "Use 'don't' para 'I' em respostas curtas negativas."
              }
            },
            {
              "id": "b7c-act1-q2",
              "prompt": {
                "en": "Complete: A: Do you want to study together? B: _____, but I can't. I have homework.",
                "pt": "Complete: A: Você quer estudar juntos? B: _____, mas não posso. Eu tenho dever de casa."
              },
              "options": [
                "No, thank you",
                "Yes, sure",
                "I'd love to",
                "Of course"
              ],
              "answer": "I'd love to",
              "explanation": {
                "en": "'I'd love to' is part of the expression 'I'd love to, but I can't'.",
                "pt": "'I'd love to' faz parte da expressão 'I'd love to, but I can't'."
              }
            }
          ]
        },
        {
          "id": "b7c-act2",
          "title": {
            "en": "Dialogue",
            "pt": "Diálogo"
          },
          "instruction": {
            "en": "Work with a partner. Create a dialogue about school or work, asking and answering questions about daily tasks and using accept/refuse expressions.",
            "pt": "Trabalhe com um parceiro. Crie um diálogo sobre escola ou trabalho, fazendo e respondendo perguntas sobre tarefas diárias e usando expressões de aceitar/recusar."
          },
          "phrases": [
            {
              "en": "Do you have a lot of homework this week?",
              "pt": "Você tem muito dever de casa esta semana?"
            },
            {
              "en": "Does your boss give you many deadlines?",
              "pt": "Seu chefe te dá muitos prazos?"
            },
            {
              "en": "Do you want to grab coffee after the meeting?",
              "pt": "Você quer tomar um café depois da reunião?"
            }
          ],
          "check": [
            {
              "id": "b7c-act2-q1",
              "prompt": {
                "en": "Which question asks about a work task?",
                "pt": "Qual pergunta pede sobre uma tarefa de trabalho?"
              },
              "options": [
                "Do you like pizza?",
                "Does your boss give you many deadlines?",
                "Do you watch TV?",
                "Are you happy?"
              ],
              "answer": "Does your boss give you many deadlines?",
              "explanation": {
                "en": "Deadlines are a common work task.",
                "pt": "Prazos são uma tarefa de trabalho comum."
              }
            },
            {
              "id": "b7c-act2-q2",
              "prompt": {
                "en": "How do you accept an invitation?",
                "pt": "Como você aceita um convite?"
              },
              "options": [
                "No, thank you.",
                "I'd love to, but I can't.",
                "Yes, sure!",
                "I don't like it."
              ],
              "answer": "Yes, sure!",
              "explanation": {
                "en": "'Yes, sure!' is a way to accept an invitation enthusiastically.",
                "pt": "'Yes, sure!' é uma forma de aceitar um convite com entusiasmo."
              }
            }
          ]
        },
        {
          "id": "b7c-act3",
          "title": {
            "en": "Talk About Yourself",
            "pt": "Fale Sobre Você"
          },
          "instruction": {
            "en": "Answer the questions about your school or work life. Use negative and interrogative forms.",
            "pt": "Responda às perguntas sobre sua vida escolar ou profissional. Use as formas negativa e interrogativa."
          },
          "phrases": [
            {
              "en": "Do you have a lot of school work?",
              "pt": "Você tem muito trabalho escolar?"
            },
            {
              "en": "Does your colleague help you with tasks?",
              "pt": "Seu colega te ajuda com as tarefas?"
            },
            {
              "en": "Do you like your schedule?",
              "pt": "Você gosta da sua agenda?"
            }
          ],
          "check": [
            {
              "id": "b7c-act3-q1",
              "prompt": {
                "en": "Choose the best answer for: 'Do you have a lot of school work?'",
                "pt": "Escolha a melhor resposta para: 'Você tem muito trabalho escolar?'"
              },
              "options": [
                "Yes, I am.",
                "No, I don't.",
                "Yes, I does.",
                "No, I am not."
              ],
              "answer": "No, I don't.",
              "explanation": {
                "en": "The question uses 'Do you', so the short answer is 'I don't'.",
                "pt": "A pergunta usa 'Do you', então a resposta curta é 'I don't'."
              }
            },
            {
              "id": "b7c-act3-q2",
              "prompt": {
                "en": "Which sentence is correct?",
                "pt": "Qual frase está correta?"
              },
              "options": [
                "My boss don't give deadlines.",
                "My boss doesn't give deadlines.",
                "My boss no give deadlines.",
                "My boss do not gives deadlines."
              ],
              "answer": "My boss doesn't give deadlines.",
              "explanation": {
                "en": "'My boss' is third person singular, so we use 'doesn't' and the base verb 'give'.",
                "pt": "'My boss' é terceira pessoa do singular, então usamos 'doesn't' e o verbo base 'give'."
              }
            }
          ]
        },
        {
          "id": "b7c-act4",
          "title": {
            "en": "Describe",
            "pt": "Descreva"
          },
          "instruction": {
            "en": "Describe your ideal classroom or office. What does it have? What doesn't it have? What do people do there?",
            "pt": "Descreva sua sala de aula ou escritório ideal. O que ele tem? O que ele não tem? O que as pessoas fazem lá?"
          },
          "phrases": [
            {
              "en": "My ideal classroom has many books.",
              "pt": "Minha sala de aula ideal tem muitos livros."
            },
            {
              "en": "It doesn't have a strict teacher.",
              "pt": "Não tem um professor rigoroso."
            },
            {
              "en": "Students learn and play there.",
              "pt": "Os alunos aprendem e brincam lá."
            }
          ],
          "check": [
            {
              "id": "b7c-act4-q1",
              "prompt": {
                "en": "Which sentence correctly describes something *not* present in a place?",
                "pt": "Qual frase descreve corretamente algo que *não* está presente em um lugar?"
              },
              "options": [
                "It have a big window.",
                "It don't have a window.",
                "It doesn't have a small window.",
                "It not has a window."
              ],
              "answer": "It doesn't have a small window.",
              "explanation": {
                "en": "For 'it', use 'doesn't have'.",
                "pt": "Para 'it', use 'doesn't have'."
              }
            },
            {
              "id": "b7c-act4-q2",
              "prompt": {
                "en": "What is the English word for 'agenda'?",
                "pt": "Qual é a palavra em inglês para 'agenda'?"
              },
              "options": [
                "Deadline",
                "Meeting",
                "Schedule",
                "Office"
              ],
              "answer": "Schedule",
              "explanation": {
                "en": "'Agenda' translates to 'schedule' in this context.",
                "pt": "'Agenda' se traduz como 'schedule' neste contexto."
              }
            }
          ]
        },
        {
          "id": "b7c-act5",
          "title": {
            "en": "Give Your Opinion",
            "pt": "Dê Sua Opinião"
          },
          "instruction": {
            "en": "Share your opinion on statements about school and work. Agree or disagree and explain why.",
            "pt": "Compartilhe sua opinião sobre afirmações sobre escola e trabalho. Concorde ou discorde e explique o porquê."
          },
          "phrases": [
            {
              "en": "Teachers don't give enough homework.",
              "pt": "Professores não dão dever de casa suficiente."
            },
            {
              "en": "A good boss doesn't give many deadlines.",
              "pt": "Um bom chefe não dá muitos prazos."
            },
            {
              "en": "Students don't need a classroom to learn.",
              "pt": "Os alunos não precisam de uma sala de aula para aprender."
            }
          ],
          "check": [
            {
              "id": "b7c-act5-q1",
              "prompt": {
                "en": "Which statement expresses a negative opinion about homework?",
                "pt": "Qual afirmação expressa uma opinião negativa sobre o dever de casa?"
              },
              "options": [
                "I love homework.",
                "Homework is fun.",
                "I don't like homework.",
                "Homework is easy."
              ],
              "answer": "I don't like homework.",
              "explanation": {
                "en": "'I don't like homework' clearly states a negative opinion.",
                "pt": "'I don't like homework' expressa claramente uma opinião negativa."
              }
            },
            {
              "id": "b7c-act5-q2",
              "prompt": {
                "en": "Complete the sentence with your opinion: 'Students _____ a lot of homework.'",
                "pt": "Complete a frase com sua opinião: 'Alunos _____ muito dever de casa.'"
              },
              "options": [
                "needs",
                "doesn't need",
                "don't need",
                "need"
              ],
              "answer": "don't need",
              "explanation": {
                "en": "'Students' is plural, so we use 'don't need' for a negative opinion.",
                "pt": "'Students' é plural, então usamos 'don't need' para uma opinião negativa."
              }
            }
          ]
        }
      ],
      "challenge": {
        "id": "b7c-chal1",
        "title": {
          "en": "Plan a Study Session",
          "pt": "Planeje uma Sessão de Estudos"
        },
        "instruction": {
          "en": "Imagine your friend invites you to study. Plan a short conversation where you ask about their schedule and homework, and then accept or refuse the invitation. Use at least 2 new vocabulary words and 1 expression.",
          "pt": "Imagine que seu amigo te convida para estudar. Planeje uma breve conversa onde você pergunta sobre a agenda e o dever de casa dele, e então aceita ou recusa o convite. Use pelo menos 2 palavras do novo vocabulário e 1 expressão."
        },
        "phrases": [
          {
            "en": "Do you have a lot of homework?",
            "pt": "Você tem muito dever de casa?"
          },
          {
            "en": "What does your schedule look like this evening?",
            "pt": "Como está sua agenda para esta noite?"
          },
          {
            "en": "Yes, sure! I'd love to!",
            "pt": "Sim, claro! Eu adoraria!"
          }
        ],
        "check": [
          {
            "id": "b7c-chal1-q1",
            "prompt": {
              "en": "Which response correctly refuses an invitation?",
              "pt": "Qual resposta recusa corretamente um convite?"
            },
            "options": [
              "Yes, sure!",
              "I'd love to, but I can't. I have a deadline.",
              "Great idea!",
              "I accept!"
            ],
            "answer": "I'd love to, but I can't. I have a deadline.",
            "explanation": {
              "en": "This expression politely refuses with a reason.",
              "pt": "Esta expressão recusa educadamente com uma razão."
            }
          },
          {
            "id": "b7c-chal1-q2",
            "prompt": {
              "en": "Your friend asks: 'Do you want to study in the classroom today?' What is a good way to accept?",
              "pt": "Seu amigo pergunta: 'Você quer estudar na sala de aula hoje?' Qual é uma boa forma de aceitar?"
            },
            "options": [
              "No, thank you.",
              "I'd love to, but I can't.",
              "Yes, sure! I need to finish my homework.",
              "I don't like it."
            ],
            "answer": "Yes, sure! I need to finish my homework.",
            "explanation": {
              "en": "'Yes, sure!' is a positive acceptance.",
              "pt": "'Yes, sure!' é uma aceitação positiva."
            }
          }
        ]
      },
      "lessonReview": {
        "summary": {
          "en": "In this unit, we learned new vocabulary for 'school work' and practiced using the Simple Present in negative (don't/doesn't) and interrogative (do/does) forms. We also practiced expressions to accept and refuse invitations.",
          "pt": "Nesta unidade, aprendemos novo vocabulário para 'school work' e praticamos o uso do Simple Present nas formas negativa (don't/doesn't) e interrogativa (do/does). Também praticamos expressões para aceitar e recusar convites."
        },
        "canDo": [
          {
            "en": "Ask and answer questions about daily routines at school or work.",
            "pt": "Fazer e responder perguntas sobre rotinas diárias na escola ou no trabalho."
          },
          {
            "en": "Express what you do or don't do.",
            "pt": "Expressar o que você faz ou não faz."
          },
          {
            "en": "Politely accept or refuse an invitation.",
            "pt": "Aceitar ou recusar um convite educadamente."
          }
        ],
        "next": {
          "en": "In the next unit, we will continue practicing the Simple Present and learn about prepositions of time.",
          "pt": "Na próxima unidade, continuaremos praticando o Simple Present e aprenderemos sobre preposições de tempo."
        }
      }
    }
  },
  {
    "code": "BEGINNER-U08",
    "number": 8,
    "title": "Free Time",
    "titlePt": "Tempo Livre",
    "cefr": "A1",
    "objective": {
      "en": "Teach 'free time' vocabulary and 'adverbs of frequency' (always, usually, often, sometimes, never) and their position in the sentence in a contextualized way.",
      "pt": "Ensinar vocabulário de 'tempo livre' e 'advérbios de frequência' (always, usually, often, sometimes, never) e sua posição na frase de forma contextualizada."
    },
    "communicationGoal": {
      "en": "The student will be able to use 'apologizing' and free time vocabulary to communicate in real situations.",
      "pt": "O aluno será capaz de usar 'pedir desculpas' e o vocabulário de tempo livre para se comunicar em situações reais."
    },
    "prerequisites": {
      "en": "Grammar: Simple Present – negative (don't/doesn't) and interrogative (do/does) forms. Vocabulary: School Work.",
      "pt": "Estrutura: Simple Present – formas negativa (don't/doesn't) e interrogativa (do/does). Vocabulário: School Work."
    },
    "newContent": {
      "en": "Grammar: Adverbs of frequency (always, usually, often, sometimes, never) and their position in the sentence. | Vocabulary: Free Time (10 lexical items) | Expressions: Apologizing",
      "pt": "Gramática: Advérbios de frequência (always, usually, often, sometimes, never) e sua posição na frase. | Vocabulário: Tempo Livre (10 itens lexicais) | Expressões: Pedir desculpas"
    },
    "reviewContent": {
      "en": "Spiral review: Indefinite/definite articles (a/an/the) and demonstratives (this, that, these, those) (Unit 3).",
      "pt": "Revisão em espiral: Artigos indefinidos/definidos (a/an/the) e demonstrativos (this, that, these, those) (Unidade 3)."
    },
    "discover": {
      "id": "BEGINNER-U08-DISCOVER",
      "warmUp": {
        "prompt": {
          "en": "Look at the pictures. What do you do in your free time?",
          "pt": "Observe as imagens. O que você faz no seu tempo livre?"
        },
        "phrases": [
          {
            "en": "Do you like to read?",
            "pt": "Você gosta de ler?"
          },
          {
            "en": "Do you play sports?",
            "pt": "Você pratica esportes?"
          },
          {
            "en": "What do you do on weekends?",
            "pt": "O que você faz nos fins de semana?"
          }
        ]
      },
      "context": {
        "situation": {
          "en": "Sarah is late for a meeting with her friend, Tom.",
          "pt": "Sarah está atrasada para um encontro com seu amigo, Tom."
        },
        "dialogue": [
          {
            "who": "Tom",
            "en": "Hi, Sarah. Are you okay?",
            "pt": "Oi, Sarah. Você está bem?"
          },
          {
            "who": "Sarah",
            "en": "Oh, Tom! I'm so sorry! I'm really late.",
            "pt": "Ah, Tom! Me desculpe! Estou muito atrasada."
          },
          {
            "who": "Tom",
            "en": "No problem. I usually read a book while I wait.",
            "pt": "Sem problemas. Eu geralmente leio um livro enquanto espero."
          },
          {
            "who": "Sarah",
            "en": "I apologize for being late. I sometimes lose track of time when I paint.",
            "pt": "Peço desculpas por estar atrasada. Às vezes, perco a noção do tempo quando pinto."
          },
          {
            "who": "Tom",
            "en": "It's fine. What do you usually do in your free time?",
            "pt": "Está tudo bem. O que você geralmente faz no seu tempo livre?"
          },
          {
            "who": "Sarah",
            "en": "I always paint. And I often listen to music.",
            "pt": "Eu sempre pinto. E eu frequentemente ouço música."
          },
          {
            "who": "Tom",
            "en": "That's nice. Let's go!",
            "pt": "Que legal. Vamos!"
          }
        ]
      },
      "vocabulary": [
        {
          "term": "watch TV",
          "pt": "assistir TV",
          "ipa": "/wɒtʃ tiːˈviː/",
          "definition": "To look at programs on a television screen.",
          "example": "I sometimes watch TV in the evening.",
          "examplePt": "Eu às vezes assisto TV à noite."
        },
        {
          "term": "read a book",
          "pt": "ler um livro",
          "ipa": "/riːd ə bʊk/",
          "definition": "To look at and understand the words in a book.",
          "example": "She usually reads a book before bed.",
          "examplePt": "Ela geralmente lê um livro antes de dormir."
        },
        {
          "term": "play sports",
          "pt": "praticar esportes",
          "ipa": "/pleɪ spɔːrts/",
          "definition": "To take part in games like football, basketball, etc.",
          "example": "They often play sports on Saturdays.",
          "examplePt": "Eles frequentemente praticam esportes aos sábados."
        },
        {
          "term": "listen to music",
          "pt": "ouvir música",
          "ipa": "/ˈlɪsən tuː ˈmjuːzɪk/",
          "definition": "To hear and enjoy sounds produced by instruments or voices.",
          "example": "He always listens to music when he exercises.",
          "examplePt": "Ele sempre ouve música quando se exercita."
        },
        {
          "term": "go out",
          "pt": "sair",
          "ipa": "/ɡoʊ aʊt/",
          "definition": "To leave your home to go to a social event or public place.",
          "example": "We sometimes go out for dinner.",
          "examplePt": "Nós às vezes saímos para jantar."
        },
        {
          "term": "relax",
          "pt": "relaxar",
          "ipa": "/rɪˈlæks/",
          "definition": "To rest and feel calm and comfortable.",
          "example": "On Sundays, I like to relax at home.",
          "examplePt": "Aos domingos, gosto de relaxar em casa."
        },
        {
          "term": "exercise",
          "pt": "exercitar-se",
          "ipa": "/ˈɛksərsaɪz/",
          "definition": "To do physical activities to stay fit and healthy.",
          "example": "She always exercises in the morning.",
          "examplePt": "Ela sempre se exercita de manhã."
        },
        {
          "term": "cook",
          "pt": "cozinhar",
          "ipa": "/kʊk/",
          "definition": "To prepare food by heating it.",
          "example": "My dad often cooks dinner.",
          "examplePt": "Meu pai frequentemente cozinha o jantar."
        },
        {
          "term": "paint",
          "pt": "pintar",
          "ipa": "/peɪnt/",
          "definition": "To create a picture or apply color to a surface.",
          "example": "He loves to paint in his free time.",
          "examplePt": "Ele adora pintar no seu tempo livre."
        },
        {
          "term": "garden",
          "pt": "jardinar",
          "ipa": "/ˈɡɑːrdən/",
          "definition": "To work in a garden, growing plants.",
          "example": "My grandma usually gardens in the afternoon.",
          "examplePt": "Minha avó geralmente jardina à tarde."
        }
      ],
      "expressions": [
        {
          "en": "I'm sorry.",
          "pt": "Me desculpe."
        },
        {
          "en": "I apologize for being late.",
          "pt": "Peço desculpas por estar atrasado(a)."
        },
        {
          "en": "Sorry about that.",
          "pt": "Desculpe por isso."
        }
      ],
      "grammar": [
        {
          "title": {
            "en": "Adverbs of frequency and their position in the sentence",
            "pt": "Advérbios de frequência e sua posição na frase"
          },
          "examples": [
            {
              "en": "I usually have breakfast at home.",
              "pt": "Eu geralmente tomo café da manhã em casa."
            },
            {
              "en": "He is never late.",
              "pt": "Ele nunca está atrasado."
            },
            {
              "en": "We often watch TV together.",
              "pt": "Nós frequentemente assistimos TV juntos."
            }
          ],
          "rule": {
            "en": "Adverbs of frequency (always, usually, often, sometimes, never) usually go BEFORE the main verb. But they go AFTER the verb 'to be'.",
            "pt": "Os advérbios de frequência (always, usually, often, sometimes, never) geralmente vêm ANTES do verbo principal. Mas eles vêm DEPOIS do verbo 'to be'."
          },
          "mistakes": [
            {
              "en": "Incorrect: I have always breakfast at home. Correct: I always have breakfast at home.",
              "pt": "Incorreto: I have always breakfast at home. Correto: I always have breakfast at home."
            },
            {
              "en": "Incorrect: He never is late. Correct: He is never late.",
              "pt": "Incorreto: He never is late. Correto: He is never late."
            }
          ]
        }
      ],
      "controlledPractice": [
        {
          "id": "b8d-cp1",
          "prompt": {
            "en": "Choose the correct sentence.",
            "pt": "Escolha a frase correta."
          },
          "options": [
            "She always reads books.",
            "She reads always books."
          ],
          "answer": "She always reads books.",
          "explanation": {
            "en": "The adverb 'always' comes before the main verb 'reads'.",
            "pt": "O advérbio 'always' vem antes do verbo principal 'reads'."
          }
        },
        {
          "id": "b8d-cp2",
          "prompt": {
            "en": "Choose the correct sentence.",
            "pt": "Escolha a frase correta."
          },
          "options": [
            "They are sometimes busy.",
            "They sometimes are busy."
          ],
          "answer": "They are sometimes busy.",
          "explanation": {
            "en": "The adverb 'sometimes' comes after the verb 'to be' ('are').",
            "pt": "O advérbio 'sometimes' vem depois do verbo 'to be' ('are')."
          }
        },
        {
          "id": "b8d-cp3",
          "prompt": {
            "en": "Complete the sentence: I ______ go out on Fridays. (usually)",
            "pt": "Complete a frase: Eu ______ saio às sextas. (usually)"
          },
          "options": [
            "usually go out",
            "go out usually"
          ],
          "answer": "usually go out",
          "explanation": {
            "en": "'Usually' comes before the main verb 'go out'.",
            "pt": "'Usually' vem antes do verbo principal 'go out'."
          }
        },
        {
          "id": "b8d-cp4",
          "prompt": {
            "en": "Complete the sentence: He ______ plays sports. (never)",
            "pt": "Complete a frase: Ele ______ pratica esportes. (never)"
          },
          "options": [
            "never plays",
            "plays never"
          ],
          "answer": "never plays",
          "explanation": {
            "en": "'Never' comes before the main verb 'plays'.",
            "pt": "'Never' vem antes do verbo principal 'plays'."
          }
        }
      ],
      "input": {
        "kind": "listening",
        "title": {
          "en": "Listen to the dialogue between friends.",
          "pt": "Ouça o diálogo entre amigos."
        },
        "lines": [
          {
            "en": "Hi, Anna. Sorry I'm late.",
            "pt": "Oi, Anna. Desculpe o atraso."
          },
          {
            "en": "It's okay, Mark. I'm usually here early.",
            "pt": "Tudo bem, Mark. Eu geralmente chego cedo."
          },
          {
            "en": "What do you do in your free time?",
            "pt": "O que você faz no seu tempo livre?"
          },
          {
            "en": "I always listen to music. And I often cook.",
            "pt": "Eu sempre ouço música. E eu frequentemente cozinho."
          },
          {
            "en": "That's nice. I sometimes watch TV.",
            "pt": "Que legal. Eu às vezes assisto TV."
          }
        ],
        "questions": [
          {
            "id": "b8d-lq1",
            "prompt": {
              "en": "Why does Mark apologize?",
              "pt": "Por que Mark pede desculpas?"
            },
            "options": [
              "He is early.",
              "He is late.",
              "He is busy."
            ],
            "answer": "He is late.",
            "explanation": {
              "en": "Mark says, 'Sorry I'm late.'",
              "pt": "Mark diz 'Desculpe o atraso'."
            }
          },
          {
            "id": "b8d-lq2",
            "prompt": {
              "en": "What does Anna always do?",
              "pt": "O que Anna sempre faz?"
            },
            "options": [
              "Watch TV",
              "Listen to music",
              "Cook"
            ],
            "answer": "Listen to music",
            "explanation": {
              "en": "Anna says, 'I always listen to music.'",
              "pt": "Anna diz 'Eu sempre ouço música'."
            }
          },
          {
            "id": "b8d-lq3",
            "prompt": {
              "en": "What does Mark sometimes do?",
              "pt": "O que Mark às vezes faz?"
            },
            "options": [
              "Cook",
              "Listen to music",
              "Watch TV"
            ],
            "answer": "Watch TV",
            "explanation": {
              "en": "Mark says, 'I sometimes watch TV.'",
              "pt": "Mark diz 'Eu às vezes assisto TV'."
            }
          }
        ]
      },
      "quickCheck": [
        {
          "id": "b8d-qc1",
          "prompt": {
            "en": "Which word is an adverb of frequency?",
            "pt": "Qual palavra é um advérbio de frequência?"
          },
          "options": [
            "book",
            "often",
            "relax"
          ],
          "answer": "often",
          "explanation": {
            "en": "'Often' describes how frequently an action happens.",
            "pt": "'Often' descreve a frequência com que uma ação acontece."
          }
        },
        {
          "id": "b8d-qc2",
          "prompt": {
            "en": "Complete: I'm _____. (apology)",
            "pt": "Complete: Eu _____. (pedido de desculpas)"
          },
          "options": [
            "sorry",
            "happy",
            "tired"
          ],
          "answer": "sorry",
          "explanation": {
            "en": "'I'm sorry' is an expression for apologizing.",
            "pt": "'I'm sorry' é uma expressão para pedir desculpas."
          }
        },
        {
          "id": "b8d-qc3",
          "prompt": {
            "en": "Choose the correct sentence.",
            "pt": "Escolha a frase correta."
          },
          "options": [
            "He is usually at home.",
            "He usually is at home."
          ],
          "answer": "He is usually at home.",
          "explanation": {
            "en": "Adverbs of frequency come after the verb 'to be'.",
            "pt": "Advérbios de frequência vêm depois do verbo 'to be'."
          }
        },
        {
          "id": "b8d-qc4",
          "prompt": {
            "en": "What does 'read a book' mean?",
            "pt": "O que significa 'read a book'?"
          },
          "options": [
            "Assistir TV",
            "Ler um livro",
            "Cozinhar"
          ],
          "answer": "Ler um livro",
          "explanation": {
            "en": "'Read a book' is a common free time activity.",
            "pt": "'Read a book' é uma atividade comum de tempo livre."
          }
        }
      ]
    },
    "communicate": {
      "id": "BEGINNER-U08-COMMUNICATE",
      "review": [
        {
          "en": "We learned about free time activities and how often we do them.",
          "pt": "Aprendemos sobre atividades de tempo livre e a frequência com que as fazemos."
        },
        {
          "en": "We also learned how to apologize.",
          "pt": "Também aprendemos a pedir desculpas."
        },
        {
          "en": "Remember: Adverbs of frequency go before the main verb, but after 'to be'.",
          "pt": "Lembre-se: Advérbios de frequência vêm antes do verbo principal, mas depois do 'to be'."
        }
      ],
      "activities": [
        {
          "id": "b8c-act1",
          "title": {
            "en": "Role-play: Apologizing for being late",
            "pt": "Role-play: Pedindo desculpas por atraso"
          },
          "instruction": {
            "en": "Work with a partner. One person is late and apologizes. The other person accepts the apology and asks about free time. Use the expressions and adverbs of frequency.",
            "pt": "Trabalhe com um parceiro. Uma pessoa está atrasada e pede desculpas. A outra pessoa aceita a desculpa e pergunta sobre tempo livre. Use as expressões e advérbios de frequência."
          },
          "phrases": [
            {
              "en": "I'm sorry for being late. I sometimes paint.",
              "pt": "Me desculpe por estar atrasado. Eu às vezes pinto."
            },
            {
              "en": "No problem! What do you usually do in your free time?",
              "pt": "Sem problemas! O que você geralmente faz no seu tempo livre?"
            },
            {
              "en": "Sorry about that. I never watch TV.",
              "pt": "Desculpe por isso. Eu nunca assisto TV."
            }
          ],
          "check": [
            {
              "id": "b8c-act1-chk1",
              "prompt": {
                "en": "Student A apologizes using 'I'm sorry'.",
                "pt": "O Aluno A pede desculpas usando 'I'm sorry'."
              },
              "options": [
                "Yes",
                "No"
              ],
              "answer": "Yes",
              "explanation": {
                "en": "The goal is to practice apologizing.",
                "pt": "O objetivo é praticar o pedido de desculpas."
              }
            },
            {
              "id": "b8c-act1-chk2",
              "prompt": {
                "en": "Student B asks about free time using an adverb of frequency.",
                "pt": "O Aluno B pergunta sobre tempo livre usando um advérbio de frequência."
              },
              "options": [
                "Yes",
                "No"
              ],
              "answer": "Yes",
              "explanation": {
                "en": "Students should incorporate adverbs of frequency.",
                "pt": "Os alunos devem incorporar advérbios de frequência."
              }
            }
          ]
        },
        {
          "id": "b8c-act2",
          "title": {
            "en": "Talk to Your Partner: Free Time Habits",
            "pt": "Converse com seu parceiro: Hábitos de Tempo Livre"
          },
          "instruction": {
            "en": "Ask your partner about their free time activities. Use adverbs of frequency in your questions and answers.",
            "pt": "Pergunte ao seu parceiro sobre suas atividades de tempo livre. Use advérbios de frequência em suas perguntas e respostas."
          },
          "phrases": [
            {
              "en": "Do you usually listen to music?",
              "pt": "Você geralmente ouve música?"
            },
            {
              "en": "I often play sports. Do you?",
              "pt": "Eu frequentemente pratico esportes. E você?"
            },
            {
              "en": "What do you sometimes do on Sundays?",
              "pt": "O que você às vezes faz aos domingos?"
            }
          ],
          "check": [
            {
              "id": "b8c-act2-chk1",
              "prompt": {
                "en": "Did your partner use at least two different adverbs of frequency?",
                "pt": "Seu parceiro usou pelo menos dois advérbios de frequência diferentes?"
              },
              "options": [
                "Yes",
                "No"
              ],
              "answer": "Yes",
              "explanation": {
                "en": "Focus on using varied adverbs of frequency.",
                "pt": "Focar no uso de advérbios de frequência variados."
              }
            },
            {
              "id": "b8c-act2-chk2",
              "prompt": {
                "en": "Did your partner mention at least two free time activities?",
                "pt": "Seu parceiro mencionou pelo menos duas atividades de tempo livre?"
              },
              "options": [
                "Yes",
                "No"
              ],
              "answer": "Yes",
              "explanation": {
                "en": "Practice using the new vocabulary.",
                "pt": "Praticar o uso do novo vocabulário."
              }
            }
          ]
        },
        {
          "id": "b8c-act3",
          "title": {
            "en": "Ask and Answer: How often do you...?",
            "pt": "Pergunte e Responda: Com que frequência você...?"
          },
          "instruction": {
            "en": "Form questions using 'How often do you...' and free time activities. Your partner answers using an adverb of frequency.",
            "pt": "Formule perguntas usando 'How often do you...' e atividades de tempo livre. Seu parceiro responde usando um advérbio de frequência."
          },
          "phrases": [
            {
              "en": "How often do you relax?",
              "pt": "Com que frequência você relaxa?"
            },
            {
              "en": "I always exercise.",
              "pt": "Eu sempre me exercito."
            },
            {
              "en": "How often do you garden?",
              "pt": "Com que frequência você jardina?"
            }
          ],
          "check": [
            {
              "id": "b8c-act3-chk1",
              "prompt": {
                "en": "Did you ask a 'How often' question correctly?",
                "pt": "Você fez uma pergunta 'How often' corretamente?"
              },
              "options": [
                "Yes",
                "No"
              ],
              "answer": "Yes",
              "explanation": {
                "en": "Ensure correct question formation.",
                "pt": "Garantir a formação correta da pergunta."
              }
            },
            {
              "id": "b8c-act3-chk2",
              "prompt": {
                "en": "Did your partner answer with an adverb of frequency before the main verb or after 'to be'?",
                "pt": "Seu parceiro respondeu com um advérbio de frequência antes do verbo principal ou depois do 'to be'?"
              },
              "options": [
                "Yes",
                "No"
              ],
              "answer": "Yes",
              "explanation": {
                "en": "Reinforce adverb position.",
                "pt": "Reforçar a posição do advérbio."
              }
            }
          ]
        },
        {
          "id": "b8c-act4",
          "title": {
            "en": "Short Speaking Task: My Week",
            "pt": "Tarefa Curta de Fala: Minha Semana"
          },
          "instruction": {
            "en": "Describe your typical week using at least three free time activities and three adverbs of frequency.",
            "pt": "Descreva sua semana típica usando pelo menos três atividades de tempo livre e três advérbios de frequência."
          },
          "phrases": [
            {
              "en": "I always work on weekdays.",
              "pt": "Eu sempre trabalho durante a semana."
            },
            {
              "en": "On Saturdays, I usually go out with friends.",
              "pt": "Aos sábados, eu geralmente saio com amigos."
            },
            {
              "en": "I sometimes read a book before sleep.",
              "pt": "Eu às vezes leio um livro antes de dormir."
            }
          ],
          "check": [
            {
              "id": "b8c-act4-chk1",
              "prompt": {
                "en": "Did the student use at least three free time activities?",
                "pt": "O aluno usou pelo menos três atividades de tempo livre?"
              },
              "options": [
                "Yes",
                "No"
              ],
              "answer": "Yes",
              "explanation": {
                "en": "Check for vocabulary usage.",
                "pt": "Verificar o uso do vocabulário."
              }
            },
            {
              "id": "b8c-act4-chk2",
              "prompt": {
                "en": "Did the student use at least three adverbs of frequency in correct positions?",
                "pt": "O aluno usou pelo menos três advérbios de frequência em posições corretas?"
              },
              "options": [
                "Yes",
                "No"
              ],
              "answer": "Yes",
              "explanation": {
                "en": "Check for grammar accuracy.",
                "pt": "Verificar a precisão gramatical."
              }
            }
          ]
        },
        {
          "id": "b8c-act5",
          "title": {
            "en": "Listening Task: Understanding Daily Routines",
            "pt": "Tarefa de Escuta: Compreendendo Rotinas Diárias"
          },
          "instruction": {
            "en": "Listen to a short audio clip describing someone's free time routine. Identify the activities and their frequency.",
            "pt": "Ouça um clipe de áudio curto descrevendo a rotina de tempo livre de alguém. Identifique as atividades e sua frequência."
          },
          "phrases": [
            {
              "en": "I always listen to music when I clean.",
              "pt": "Eu sempre ouço música quando limpo."
            },
            {
              "en": "I often watch TV in the evenings.",
              "pt": "Eu frequentemente assisto TV à noite."
            },
            {
              "en": "On weekends, I sometimes cook big meals.",
              "pt": "Nos fins de semana, eu às vezes cozinho grandes refeições."
            }
          ],
          "check": [
            {
              "id": "b8c-act5-chk1",
              "prompt": {
                "en": "According to the audio, what does the person always do?",
                "pt": "De acordo com o áudio, o que a pessoa sempre faz?"
              },
              "options": [
                "Cook big meals",
                "Listen to music",
                "Watch TV"
              ],
              "answer": "Listen to music",
              "explanation": {
                "en": "The audio states: 'I always listen to music'.",
                "pt": "O áudio afirma: 'Eu sempre ouço música'."
              }
            },
            {
              "id": "b8c-act5-chk2",
              "prompt": {
                "en": "What free time activity is done 'sometimes'?",
                "pt": "Qual atividade de tempo livre é feita 'às vezes'?"
              },
              "options": [
                "Watch TV",
                "Cook big meals",
                "Listen to music"
              ],
              "answer": "Cook big meals",
              "explanation": {
                "en": "The audio states: 'I sometimes cook big meals'.",
                "pt": "O áudio afirma: 'Eu às vezes cozinho grandes refeições'."
              }
            }
          ]
        }
      ],
      "challenge": {
        "id": "b8c-chg1",
        "title": {
          "en": "Planning a Weekend Meetup",
          "pt": "Planejando um Encontro de Fim de Semana"
        },
        "instruction": {
          "en": "You are planning to meet a friend this weekend, but you are late. Apologize and explain why (using a free time activity and an adverb of frequency). Then, ask your friend about their weekend plans, including what they usually do.",
          "pt": "Você está planejando encontrar um amigo neste fim de semana, mas está atrasado. Peça desculpas e explique o motivo (usando uma atividade de tempo livre e um advérbio de frequência). Em seguida, pergunte ao seu amigo sobre os planos dele para o fim de semana, incluindo o que ele geralmente faz."
        },
        "phrases": [
          {
            "en": "Oh no, I'm so sorry! I apologize for being late. I was gardening, and I sometimes lose track of time.",
            "pt": "Ah não, me desculpe muito! Peço desculpas por estar atrasado. Eu estava jardinando, e às vezes perco a noção do tempo."
          },
          {
            "en": "It's okay! What do you usually do on Saturdays?",
            "pt": "Está tudo bem! O que você geralmente faz aos sábados?"
          },
          {
            "en": "I often play sports. How about you?",
            "pt": "Eu frequentemente pratico esportes. E você?"
          }
        ],
        "check": [
          {
            "id": "b8c-chg1-chk1",
            "prompt": {
              "en": "Did you apologize clearly and explain with a free time activity and adverb of frequency?",
              "pt": "Você pediu desculpas claramente e explicou com uma atividade de tempo livre e um advérbio de frequência?"
            },
            "options": [
              "Yes",
              "No"
            ],
            "answer": "Yes",
            "explanation": {
              "en": "Check for apology, activity, and adverb usage.",
              "pt": "Verificar o uso de desculpa, atividade e advérbio."
            }
          },
          {
            "id": "b8c-chg1-chk2",
            "prompt": {
              "en": "Did you ask about your friend's weekend plans using 'usually' or 'often'?",
              "pt": "Você perguntou sobre os planos de fim de semana do seu amigo usando 'usually' ou 'often'?"
            },
            "options": [
              "Yes",
              "No"
            ],
            "answer": "Yes",
            "explanation": {
              "en": "Check for appropriate question formation and adverb usage.",
              "pt": "Verificar a formação da pergunta e o uso do advérbio."
            }
          }
        ]
      },
      "lessonReview": {
        "summary": {
          "en": "In this unit, we learned about free time activities and how to describe how often we do them using adverbs of frequency (always, usually, often, sometimes, never). We also practiced apologizing.",
          "pt": "Nesta unidade, aprendemos sobre atividades de tempo livre e como descrever a frequência com que as fazemos usando advérbios de frequência (always, usually, often, sometimes, never). Também praticamos como pedir desculpas."
        },
        "canDo": [
          {
            "en": "I can talk about my free time activities.",
            "pt": "Consigo falar sobre minhas atividades de tempo livre."
          },
          {
            "en": "I can use adverbs of frequency (always, usually, often, sometimes, never) correctly.",
            "pt": "Consigo usar advérbios de frequência (always, usually, often, sometimes, never) corretamente."
          },
          {
            "en": "I can apologize for being late or for other small mistakes.",
            "pt": "Consigo pedir desculpas por estar atrasado ou por pequenos erros."
          }
        ],
        "next": {
          "en": "Next, we will learn about 'Daily Routines' and 'Time Expressions' to describe our day.",
          "pt": "Em seguida, aprenderemos sobre 'Rotinas Diárias' e 'Expressões de Tempo' para descrever nosso dia."
        }
      }
    }
  },
  {
    "code": "BEGINNER-U09",
    "number": 9,
    "title": "Unit 9 — City Places — Question words",
    "titlePt": "Unidade 9 — Lugares da Cidade — Perguntas",
    "cefr": "A1",
    "objective": {
      "en": "To teach city places and question words (what, where, when, who, why, how) + object pronouns (me, him, her, us, them) in a contextualized way.",
      "pt": "Ensinar lugares da cidade e palavras interrogativas (what, where, when, who, why, how) + pronomes objeto (me, him, her, us, them) de forma contextualizada."
    },
    "communicationGoal": {
      "en": "Students will be able to use 'thanking' and city places vocabulary to communicate in real situations.",
      "pt": "O aluno será capaz de usar 'agradecimentos' e o vocabulário de lugares da cidade para se comunicar em situações reais."
    },
    "prerequisites": {
      "en": "Structure: Adverbs of frequency (always, usually, often, sometimes, never) and their position in the sentence. Vocabulary: Free Time.",
      "pt": "Estrutura: Advérbios de frequência (always, usually, often, sometimes, never) e sua posição na frase. Vocabulário: Tempo Livre."
    },
    "newContent": {
      "en": "Grammar: Question words (what, where, when, who, why, how) + object pronouns (me, him, her, us, them). Vocabulary: City Places (10 lexical items). Expressions: Thanking.",
      "pt": "Gramática: Palavras interrogativas (what, where, when, who, why, how) + pronomes objeto (me, him, her, us, them). Vocabulário: Lugares da Cidade (10 itens lexicais). Expressões: Agradecimentos."
    },
    "reviewContent": {
      "en": "Spiral review: There is / There are for existence, singular and plural (Unit 4).",
      "pt": "Revisão em espiral: There is / There are para existência, singular e plural (Unidade 4)."
    },
    "discover": {
      "id": "BEGINNER-U09-DISCOVER",
      "warmUp": {
        "prompt": {
          "en": "Look at the pictures. What places do you know in your city?",
          "pt": "Olhe as imagens. Quais lugares você conhece na sua cidade?"
        },
        "phrases": [
          {
            "en": "This is a bank.",
            "pt": "Este é um banco."
          },
          {
            "en": "This is a park.",
            "pt": "Este é um parque."
          },
          {
            "en": "Do you go to the supermarket?",
            "pt": "Você vai ao supermercado?"
          }
        ]
      },
      "context": {
        "situation": {
          "en": "Sarah is new in the city. She needs help finding some places.",
          "pt": "Sarah é nova na cidade. Ela precisa de ajuda para encontrar alguns lugares."
        },
        "dialogue": [
          {
            "who": "Sarah",
            "en": "Excuse me, where is the nearest supermarket?",
            "pt": "Com licença, onde é o supermercado mais próximo?"
          },
          {
            "who": "Man",
            "en": "It's on Main Street, next to the bank.",
            "pt": "É na Rua Principal, ao lado do banco."
          },
          {
            "who": "Sarah",
            "en": "Thank you very much!",
            "pt": "Muito obrigada!"
          },
          {
            "who": "Man",
            "en": "You're welcome.",
            "pt": "De nada."
          },
          {
            "who": "Sarah",
            "en": "And is there a pharmacy near here?",
            "pt": "E tem uma farmácia por perto?"
          },
          {
            "who": "Woman",
            "en": "Yes, there is one across from the hospital. I can show you.",
            "pt": "Sim, tem uma em frente ao hospital. Eu posso te mostrar."
          },
          {
            "who": "Sarah",
            "en": "Oh, that's very kind of you. Thanks for your help!",
            "pt": "Ah, que gentileza. Obrigada pela sua ajuda!"
          },
          {
            "who": "Woman",
            "en": "No problem! Let's go.",
            "pt": "Sem problemas! Vamos lá."
          }
        ]
      },
      "vocabulary": [
        {
          "term": "bank",
          "pt": "banco",
          "ipa": "/bæŋk/",
          "definition": "A financial institution where people can save or borrow money.",
          "example": "I need to go to the bank to withdraw money.",
          "examplePt": "Eu preciso ir ao banco para sacar dinheiro."
        },
        {
          "term": "hospital",
          "pt": "hospital",
          "ipa": "/ˈhɒspɪtl/",
          "definition": "A place where sick or injured people are given medical care.",
          "example": "The hospital is open 24 hours a day.",
          "examplePt": "O hospital está aberto 24 horas por dia."
        },
        {
          "term": "supermarket",
          "pt": "supermercado",
          "ipa": "/ˈsuːpərmɑːrkɪt/",
          "definition": "A large self-service store selling food and household goods.",
          "example": "Let's buy groceries at the supermarket.",
          "examplePt": "Vamos comprar mantimentos no supermercado."
        },
        {
          "term": "pharmacy",
          "pt": "farmácia",
          "ipa": "/ˈfɑːrməsi/",
          "definition": "A store where medicines are prepared and sold.",
          "example": "I need to go to the pharmacy for some medicine.",
          "examplePt": "Preciso ir à farmácia para comprar remédios."
        },
        {
          "term": "restaurant",
          "pt": "restaurante",
          "ipa": "/ˈrɛstərɑːnt/",
          "definition": "A place where people go to eat meals that are cooked and served there.",
          "example": "This restaurant has delicious Italian food.",
          "examplePt": "Este restaurante tem comida italiana deliciosa."
        },
        {
          "term": "park",
          "pt": "parque",
          "ipa": "/pɑːrk/",
          "definition": "A large public green area in a city or town, used for recreation.",
          "example": "We often walk in the park on weekends.",
          "examplePt": "Nós frequentemente caminhamos no parque nos fins de semana."
        },
        {
          "term": "museum",
          "pt": "museu",
          "ipa": "/mjuːˈziːəm/",
          "definition": "A building where collections of historical, scientific, or artistic objects are exhibited.",
          "example": "The art museum is very popular.",
          "examplePt": "O museu de arte é muito popular."
        },
        {
          "term": "station",
          "pt": "estação",
          "ipa": "/ˈsteɪʃn/",
          "definition": "A place where trains or buses stop for passengers.",
          "example": "The train station is downtown.",
          "examplePt": "A estação de trem fica no centro da cidade."
        },
        {
          "term": "airport",
          "pt": "aeroporto",
          "ipa": "/ˈɛərˌpɔːrt/",
          "definition": "A place where aircraft regularly take off and land.",
          "example": "My flight departs from the airport at 8 AM.",
          "examplePt": "Meu voo parte do aeroporto às 8h."
        },
        {
          "term": "library",
          "pt": "biblioteca",
          "ipa": "/ˈlaɪbrəri/",
          "definition": "A building or room containing collections of books, periodicals, and sometimes films and recorded music for use or borrowing by the public.",
          "example": "I borrow books from the library every month.",
          "examplePt": "Eu pego livros emprestados da biblioteca todo mês."
        }
      ],
      "expressions": [
        {
          "en": "Thank you very much.",
          "pt": "Muito obrigado(a)."
        },
        {
          "en": "Thanks for your help.",
          "pt": "Obrigado(a) pela sua ajuda."
        },
        {
          "en": "I really appreciate it.",
          "pt": "Eu realmente agradeço."
        },
        {
          "en": "You're welcome.",
          "pt": "De nada."
        },
        {
          "en": "No problem.",
          "pt": "Sem problemas."
        }
      ],
      "grammar": [
        {
          "title": {
            "en": "Question Words",
            "pt": "Palavras Interrogativas"
          },
          "examples": [
            {
              "en": "Where do you live?",
              "pt": "Onde você mora?"
            },
            {
              "en": "What is your name?",
              "pt": "Qual é o seu nome?"
            },
            {
              "en": "When is the meeting?",
              "pt": "Quando é a reunião?"
            },
            {
              "en": "Who is she?",
              "pt": "Quem é ela?"
            },
            {
              "en": "Why are you here?",
              "pt": "Por que você está aqui?"
            },
            {
              "en": "How do you go to work?",
              "pt": "Como você vai para o trabalho?"
            }
          ],
          "rule": {
            "en": "We use question words (What, Where, When, Who, Why, How) to ask for specific information. They usually come at the beginning of a question.",
            "pt": "Usamos palavras interrogativas (What, Where, When, Who, Why, How) para pedir informações específicas. Elas geralmente vêm no início de uma pergunta."
          },
          "mistakes": [
            {
              "en": "Incorrect order: You live where? (Correct: Where do you live?)",
              "pt": "Ordem incorreta: You live where? (Correto: Where do you live?)"
            },
            {
              "en": "Forgetting 'do'/'does' with simple present: Where you work? (Correct: Where do you work?)",
              "pt": "Esquecer 'do'/'does' com o simple present: Where you work? (Correto: Where do you work?)"
            }
          ]
        },
        {
          "title": {
            "en": "Object Pronouns",
            "pt": "Pronomes Objeto"
          },
          "examples": [
            {
              "en": "Can you help me, please?",
              "pt": "Você pode me ajudar, por favor?"
            },
            {
              "en": "I saw him at the park.",
              "pt": "Eu o vi no parque."
            },
            {
              "en": "She called us yesterday.",
              "pt": "Ela nos ligou ontem."
            }
          ],
          "rule": {
            "en": "Object pronouns (me, him, her, us, them, it, you) are used after a verb or a preposition. They replace object nouns.",
            "pt": "Os pronomes objeto (me, him, her, us, them, it, you) são usados após um verbo ou uma preposição. Eles substituem substantivos objetos."
          },
          "mistakes": [
            {
              "en": "Using subject pronoun instead of object pronoun: Can you help I? (Correct: Can you help me?)",
              "pt": "Usar pronome sujeito em vez de pronome objeto: Can you help I? (Correto: Can you help me?)"
            },
            {
              "en": "Incorrect pronoun for gender/number: I saw she. (Correct: I saw her.)",
              "pt": "Pronome incorreto para gênero/número: I saw she. (Correto: I saw her.)"
            }
          ]
        }
      ],
      "controlledPractice": [
        {
          "id": "b9d-cp-1",
          "prompt": {
            "en": "Choose the correct question word: _______ is your favorite place in the city?",
            "pt": "Escolha a palavra interrogativa correta: _______ é o seu lugar favorito na cidade?"
          },
          "options": [
            "Who",
            "What",
            "When",
            "Where"
          ],
          "answer": "What",
          "explanation": {
            "en": "'What' is used to ask about things or actions.",
            "pt": "'What' é usado para perguntar sobre coisas ou ações."
          }
        },
        {
          "id": "b9d-cp-2",
          "prompt": {
            "en": "Choose the correct object pronoun: Can you give the map to _______ (he)?",
            "pt": "Escolha o pronome objeto correto: Você pode dar o mapa para _______ (ele)?"
          },
          "options": [
            "he",
            "his",
            "him",
            "her"
          ],
          "answer": "him",
          "explanation": {
            "en": "'Him' is the object pronoun for 'he'.",
            "pt": "'Him' é o pronome objeto para 'he'."
          }
        },
        {
          "id": "b9d-cp-3",
          "prompt": {
            "en": "Complete the sentence: _______ do you go to the supermarket? (Reason)",
            "pt": "Complete a frase: _______ você vai ao supermercado? (Motivo)"
          },
          "options": [
            "When",
            "Where",
            "Why",
            "How"
          ],
          "answer": "Why",
          "explanation": {
            "en": "'Why' asks for a reason.",
            "pt": "'Why' pergunta por um motivo."
          }
        },
        {
          "id": "b9d-cp-4",
          "prompt": {
            "en": "Rewrite the sentence with an object pronoun: 'I like Sarah.'",
            "pt": "Reescreva a frase com um pronome objeto: 'Eu gosto da Sarah.'"
          },
          "options": [
            "I like she.",
            "I like her.",
            "I like you.",
            "I like them."
          ],
          "answer": "I like her.",
          "explanation": {
            "en": "'Her' is the object pronoun for a female person.",
            "pt": "'Her' é o pronome objeto para uma pessoa feminina."
          }
        }
      ],
      "input": {
        "kind": "reading",
        "title": {
          "en": "A Busy Day in the City",
          "pt": "Um Dia Agitado na Cidade"
        },
        "lines": [
          {
            "en": "My name is Leo. Today is a busy day for me. First, I go to the bank to deposit some money. The bank is near my house.",
            "pt": "Meu nome é Leo. Hoje é um dia agitado para mim. Primeiro, eu vou ao banco depositar dinheiro. O banco é perto da minha casa."
          },
          {
            "en": "Then, I go to the supermarket to buy food. I need bread and milk. After the supermarket, I walk to the park. I meet my friend, Ana, there.",
            "pt": "Depois, eu vou ao supermercado comprar comida. Eu preciso de pão e leite. Depois do supermercado, eu caminho até o parque. Eu encontro minha amiga, Ana, lá."
          },
          {
            "en": "We talk for an hour. She tells me about a new museum. It sounds interesting! Later, I go to the pharmacy for a small headache. It's across from the train station.",
            "pt": "Nós conversamos por uma hora. Ela me fala sobre um novo museu. Parece interessante! Mais tarde, eu vou à farmácia para uma pequena dor de cabeça. É em frente à estação de trem."
          },
          {
            "en": "Finally, I plan to have dinner at a new restaurant with my family. They usually like new places. What a day!",
            "pt": "Finalmente, eu planejo jantar em um novo restaurante com minha família. Eles geralmente gostam de lugares novos. Que dia!"
          }
        ],
        "questions": [
          {
            "id": "b9d-in-1",
            "prompt": {
              "en": "Where does Leo go first?",
              "pt": "Onde Leo vai primeiro?"
            },
            "options": [
              "To the supermarket.",
              "To the bank.",
              "To the park.",
              "To the pharmacy."
            ],
            "answer": "To the bank.",
            "explanation": {
              "en": "The text says: 'First, I go to the bank'.",
              "pt": "O texto diz: 'Primeiro, eu vou ao banco'."
            }
          },
          {
            "id": "b9d-in-2",
            "prompt": {
              "en": "Who does Leo meet at the park?",
              "pt": "Quem Leo encontra no parque?"
            },
            "options": [
              "His family.",
              "Ana.",
              "His boss.",
              "Nobody."
            ],
            "answer": "Ana.",
            "explanation": {
              "en": "The text says: 'I meet my friend, Ana, there.'",
              "pt": "O texto diz: 'Eu encontro minha amiga, Ana, lá.'"
            }
          },
          {
            "id": "b9d-in-3",
            "prompt": {
              "en": "What does Leo need from the pharmacy?",
              "pt": "O que Leo precisa da farmácia?"
            },
            "options": [
              "Food.",
              "Books.",
              "Medicine for a headache.",
              "Money."
            ],
            "answer": "Medicine for a headache.",
            "explanation": {
              "en": "The text says: 'I go to the pharmacy for a small headache.'",
              "pt": "O texto diz: 'Eu vou à farmácia para uma pequena dor de cabeça.'"
            }
          }
        ]
      },
      "quickCheck": [
        {
          "id": "b9d-qc-1",
          "prompt": {
            "en": "Which word asks about a place?",
            "pt": "Qual palavra pergunta sobre um lugar?"
          },
          "options": [
            "What",
            "Who",
            "Where",
            "When"
          ],
          "answer": "Where",
          "explanation": {
            "en": "'Where' asks about location.",
            "pt": "'Where' pergunta sobre localização."
          }
        },
        {
          "id": "b9d-qc-2",
          "prompt": {
            "en": "Choose the correct object pronoun: My friends visit ______ often. (I)",
            "pt": "Escolha o pronome objeto correto: Meus amigos visitam ______ frequentemente. (Eu)"
          },
          "options": [
            "I",
            "me",
            "my",
            "them"
          ],
          "answer": "me",
          "explanation": {
            "en": "'Me' is the object pronoun for 'I'.",
            "pt": "'Me' é o pronome objeto para 'I'."
          }
        },
        {
          "id": "b9d-qc-3",
          "prompt": {
            "en": "Which of these is a place to see art?",
            "pt": "Qual destes é um lugar para ver arte?"
          },
          "options": [
            "Supermarket",
            "Hospital",
            "Museum",
            "Bank"
          ],
          "answer": "Museum",
          "explanation": {
            "en": "A museum often displays art.",
            "pt": "Um museu frequentemente exibe arte."
          }
        },
        {
          "id": "b9d-qc-4",
          "prompt": {
            "en": "Complete the thanking expression: Thanks for ______ help.",
            "pt": "Complete a expressão de agradecimento: Obrigado pela ______ ajuda."
          },
          "options": [
            "me",
            "you",
            "your",
            "us"
          ],
          "answer": "your",
          "explanation": {
            "en": "'Your' is a possessive adjective.",
            "pt": "'Your' é um adjetivo possessivo."
          }
        }
      ]
    },
    "communicate": {
      "id": "BEGINNER-U09-COMMUNICATE",
      "review": [
        {
          "en": "Remember the new city places: bank, hospital, supermarket, pharmacy, restaurant, park, museum, station, airport, library.",
          "pt": "Lembre-se dos novos lugares da cidade: banco, hospital, supermercado, farmácia, restaurante, parque, museu, estação, aeroporto, biblioteca."
        },
        {
          "en": "Recall question words: What, Where, When, Who, Why, How.",
          "pt": "Recorde as palavras interrogativas: What, Where, When, Who, Why, How."
        },
        {
          "en": "Remember object pronouns: me, him, her, us, them, it, you.",
          "pt": "Lembre-se dos pronomes objeto: me, him, her, us, them, it, you."
        },
        {
          "en": "Practice thanking expressions: Thank you very much, Thanks for your help, I really appreciate it.",
          "pt": "Pratique as expressões de agradecimento: Thank you very much, Thanks for your help, I really appreciate it."
        }
      ],
      "activities": [
        {
          "id": "b9c-act-1",
          "title": {
            "en": "Describe Your City",
            "pt": "Descreva Sua Cidade"
          },
          "instruction": {
            "en": "Describe three places in your city. Say what they are and where they are located. Use 'There is' / 'There are' to describe existence.",
            "pt": "Descreva três lugares na sua cidade. Diga o que são e onde estão localizados. Use 'There is' / 'There are' para descrever existência."
          },
          "phrases": [
            {
              "en": "There is a big park near my house.",
              "pt": "Há um grande parque perto da minha casa."
            },
            {
              "en": "There are many restaurants downtown.",
              "pt": "Há muitos restaurantes no centro."
            },
            {
              "en": "The museum is on the main street.",
              "pt": "O museu fica na rua principal."
            }
          ],
          "check": [
            {
              "id": "b9c-act1-1",
              "prompt": {
                "en": "Which sentence describes a city place?",
                "pt": "Qual frase descreve um lugar da cidade?"
              },
              "options": [
                "I like to sleep.",
                "There is a small library in my neighborhood.",
                "He plays soccer.",
                "She eats an apple."
              ],
              "answer": "There is a small library in my neighborhood.",
              "explanation": {
                "en": "A library is a city place.",
                "pt": "Uma biblioteca é um lugar da cidade."
              }
            },
            {
              "id": "b9c-act1-2",
              "prompt": {
                "en": "Which option uses 'there is' correctly for a singular place?",
                "pt": "Qual opção usa 'there is' corretamente para um lugar singular?"
              },
              "options": [
                "There are a hospital.",
                "There is a bank.",
                "There is two parks.",
                "There are pharmacy."
              ],
              "answer": "There is a bank.",
              "explanation": {
                "en": "'There is' is used for singular nouns.",
                "pt": "'There is' é usado para substantivos singulares."
              }
            }
          ]
        },
        {
          "id": "b9c-act-2",
          "title": {
            "en": "Give Your Opinion on City Services",
            "pt": "Dê Sua Opinião Sobre Serviços da Cidade"
          },
          "instruction": {
            "en": "Talk about one city place you like and one you don't like. Say why.",
            "pt": "Fale sobre um lugar da cidade que você gosta e um que você não gosta. Diga o porquê."
          },
          "phrases": [
            {
              "en": "I like the park because it's green and quiet.",
              "pt": "Eu gosto do parque porque é verde e tranquilo."
            },
            {
              "en": "I don't like the hospital. It's often busy.",
              "pt": "Eu não gosto do hospital. Geralmente é movimentado."
            },
            {
              "en": "The restaurant 'Bella Pizza' is excellent. I recommend it to you.",
              "pt": "O restaurante 'Bella Pizza' é excelente. Eu o recomendo a você."
            }
          ],
          "check": [
            {
              "id": "b9c-act2-1",
              "prompt": {
                "en": "Which sentence expresses a positive opinion?",
                "pt": "Qual frase expressa uma opinião positiva?"
              },
              "options": [
                "The supermarket is very bad.",
                "I hate the station.",
                "The library is my favorite place.",
                "The bank is too far."
              ],
              "answer": "The library is my favorite place.",
              "explanation": {
                "en": "'My favorite place' shows a positive opinion.",
                "pt": "'Meu lugar favorito' mostra uma opinião positiva."
              }
            },
            {
              "id": "b9c-act2-2",
              "prompt": {
                "en": "Choose the best object pronoun: This park is beautiful. I visit ______ every week.",
                "pt": "Escolha o melhor pronome objeto: Este parque é lindo. Eu visito ______ toda semana."
              },
              "options": [
                "it",
                "them",
                "him",
                "her"
              ],
              "answer": "it",
              "explanation": {
                "en": "'It' is used for singular non-human nouns like 'park'.",
                "pt": "'It' é usado para substantivos singulares não humanos como 'parque'."
              }
            }
          ]
        },
        {
          "id": "b9c-act-3",
          "title": {
            "en": "Writing Tasks: Directions",
            "pt": "Tarefas de Escrita: Direções"
          },
          "instruction": {
            "en": "Write 3 sentences telling someone how to get to a city place from a starting point (e.g., 'from here').",
            "pt": "Escreva 3 frases dizendo a alguém como chegar a um lugar da cidade a partir de um ponto de partida (ex: 'daqui')."
          },
          "phrases": [
            {
              "en": "From here, go straight. The supermarket is on the left.",
              "pt": "Daqui, vá reto. O supermercado fica à esquerda."
            },
            {
              "en": "Turn right at the hospital. The park is behind it.",
              "pt": "Vire à direita no hospital. O parque fica atrás dele."
            },
            {
              "en": "The museum is far from us. Take a bus.",
              "pt": "O museu está longe de nós. Pegue um ônibus."
            }
          ],
          "check": [
            {
              "id": "b9c-act3-1",
              "prompt": {
                "en": "Which sentence gives a direction to a place?",
                "pt": "Qual frase dá uma direção para um lugar?"
              },
              "options": [
                "I like pizza.",
                "The bank is next to the pharmacy.",
                "She reads a book.",
                "He is happy today."
              ],
              "answer": "The bank is next to the pharmacy.",
              "explanation": {
                "en": "This sentence describes a location relative to another, which is part of giving directions.",
                "pt": "Esta frase descreve uma localização relativa a outra, o que faz parte de dar direções."
              }
            },
            {
              "id": "b9c-act3-2",
              "prompt": {
                "en": "Choose the correct object pronoun: This is a gift for _______ (you).",
                "pt": "Escolha o pronome objeto correto: Este é um presente para _______ (você)."
              },
              "options": [
                "you",
                "your",
                "yours",
                "yourself"
              ],
              "answer": "you",
              "explanation": {
                "en": "'You' is the object pronoun for 'you'.",
                "pt": "'You' é o pronome objeto para 'you'."
              }
            }
          ]
        },
        {
          "id": "b9c-act-4",
          "title": {
            "en": "Reading Comprehension: Tourist Information",
            "pt": "Compreensão de Leitura: Informações Turísticas"
          },
          "instruction": {
            "en": "Read the short text about a city and answer the questions.",
            "pt": "Leia o texto curto sobre uma cidade e responda às perguntas."
          },
          "phrases": [
            {
              "en": "Welcome to River City! Our city has a beautiful park, 'Green Park,' perfect for families. There is also a famous 'History Museum' open from 9 AM to 5 PM. If you need medicine, find a pharmacy on Central Avenue. Hungry? Many restaurants are near the river.",
              "pt": "Bem-vindo à River City! Nossa cidade tem um lindo parque, 'Green Park', perfeito para famílias. Há também um famoso 'Museu de História' aberto das 9h às 17h. Se você precisar de remédios, encontre uma farmácia na Avenida Central. Com fome? Muitos restaurantes ficam perto do rio."
            }
          ],
          "check": [
            {
              "id": "b9c-act4-1",
              "prompt": {
                "en": "What is the name of the park?",
                "pt": "Qual é o nome do parque?"
              },
              "options": [
                "Central Park",
                "River Park",
                "Green Park",
                "City Park"
              ],
              "answer": "Green Park",
              "explanation": {
                "en": "The text mentions 'Green Park'.",
                "pt": "O texto menciona 'Green Park'."
              }
            },
            {
              "id": "b9c-act4-2",
              "prompt": {
                "en": "Where can you find a pharmacy?",
                "pt": "Onde você pode encontrar uma farmácia?"
              },
              "options": [
                "Near the river.",
                "On Central Avenue.",
                "Next to the museum.",
                "Inside the park."
              ],
              "answer": "On Central Avenue.",
              "explanation": {
                "en": "The text says: 'find a pharmacy on Central Avenue'.",
                "pt": "O texto diz: 'encontre uma farmácia na Avenida Central'."
              }
            }
          ]
        },
        {
          "id": "b9c-act-5",
          "title": {
            "en": "Answer the Questions: Daily Routines",
            "pt": "Responda às Perguntas: Rotinas Diárias"
          },
          "instruction": {
            "en": "Answer the questions about your daily routine and city places you visit.",
            "pt": "Responda às perguntas sobre sua rotina diária e os lugares da cidade que você visita."
          },
          "phrases": [
            {
              "en": "Where do you usually go on Saturdays?",
              "pt": "Onde você geralmente vai aos sábados?"
            },
            {
              "en": "When do you go to the supermarket?",
              "pt": "Quando você vai ao supermercado?"
            },
            {
              "en": "Who do you go to the park with?",
              "pt": "Com quem você vai ao parque?"
            }
          ],
          "check": [
            {
              "id": "b9c-act5-1",
              "prompt": {
                "en": "Which question asks about a time?",
                "pt": "Qual pergunta pergunta sobre um horário?"
              },
              "options": [
                "Where is the bank?",
                "Who is your friend?",
                "When do you study?",
                "What is your job?"
              ],
              "answer": "When do you study?",
              "explanation": {
                "en": "'When' asks about time.",
                "pt": "'When' pergunta sobre tempo."
              }
            },
            {
              "id": "b9c-act5-2",
              "prompt": {
                "en": "Which of these is NOT a city place?",
                "pt": "Qual destes NÃO é um lugar da cidade?"
              },
              "options": [
                "Airport",
                "Pharmacy",
                "Bedroom",
                "Restaurant"
              ],
              "answer": "Bedroom",
              "explanation": {
                "en": "A bedroom is a room in a house, not a public city place.",
                "pt": "Um quarto é um cômodo de uma casa, não um lugar público da cidade."
              }
            }
          ]
        }
      ],
      "challenge": {
        "id": "b9c-challenge-1",
        "title": {
          "en": "Help a Tourist",
          "pt": "Ajude um Turista"
        },
        "instruction": {
          "en": "Imagine a tourist asks you for directions to two places in your city and asks about opening hours. Respond and thank them for asking.",
          "pt": "Imagine que um turista lhe pede direções para dois lugares na sua cidade e pergunta sobre horários de funcionamento. Responda e agradeça por perguntar."
        },
        "phrases": [
          {
            "en": "Excuse me, where is the museum?",
            "pt": "Com licença, onde é o museu?"
          },
          {
            "en": "What time does the library open?",
            "pt": "Que horas a biblioteca abre?"
          },
          {
            "en": "Can you show me the way to the park?",
            "pt": "Você pode me mostrar o caminho para o parque?"
          },
          {
            "en": "Thank you very much for your help!",
            "pt": "Muito obrigado(a) pela sua ajuda!"
          }
        ],
        "check": [
          {
            "id": "b9c-ch-1",
            "prompt": {
              "en": "A tourist asks: 'Where is the nearest hospital?' How do you reply using an object pronoun?",
              "pt": "Um turista pergunta: 'Onde é o hospital mais próximo?' Como você responde usando um pronome objeto?"
            },
            "options": [
              "I can show you.",
              "I can show your.",
              "I can show to you.",
              "I can show yours."
            ],
            "answer": "I can show you.",
            "explanation": {
              "en": "'You' is the correct object pronoun to refer to the tourist.",
              "pt": "'You' é o pronome objeto correto para se referir ao turista."
            }
          },
          {
            "id": "b9c-ch-2",
            "prompt": {
              "en": "A tourist thanks you: 'Thanks for your help!' What is a good response?",
              "pt": "Um turista te agradece: 'Obrigado(a) pela sua ajuda!' Qual é uma boa resposta?"
            },
            "options": [
              "Yes, help.",
              "I appreciate.",
              "You're welcome.",
              "Go away."
            ],
            "answer": "You're welcome.",
            "explanation": {
              "en": "'You're welcome' is a common and polite response to 'Thank you'.",
              "pt": "'You're welcome' é uma resposta comum e educada para 'Obrigado(a)'."
            }
          }
        ]
      },
      "lessonReview": {
        "summary": {
          "en": "In this unit, we learned new city places like bank, hospital, and museum. We also studied question words (what, where, when, who, why, how) and object pronouns (me, him, her, us, them). Finally, we practiced thanking expressions to communicate effectively.",
          "pt": "Nesta unidade, aprendemos novos lugares da cidade como banco, hospital e museu. Também estudamos palavras interrogativas (what, where, when, who, why, how) e pronomes objeto (me, him, her, us, them). Finalmente, praticamos expressões de agradecimento para nos comunicarmos de forma eficaz."
        },
        "canDo": [
          {
            "en": "I can name 10 city places.",
            "pt": "Consigo nomear 10 lugares da cidade."
          },
          {
            "en": "I can ask questions using 'what,' 'where,' and 'when.'",
            "pt": "Consigo fazer perguntas usando 'what,' 'where,' e 'when.'"
          },
          {
            "en": "I can use object pronouns like 'me' and 'him.'",
            "pt": "Consigo usar pronomes objeto como 'me' e 'him.'"
          },
          {
            "en": "I can thank people and respond politely.",
            "pt": "Consigo agradecer às pessoas e responder educadamente."
          }
        ],
        "next": {
          "en": "In the next unit, we will learn about family members and possessive adjectives.",
          "pt": "Na próxima unidade, aprenderemos sobre membros da família e adjetivos possessivos."
        }
      }
    }
  },
  {
    "code": "BEGINNER-U10",
    "number": 10,
    "title": "Activities Now – Prepositions of time and place",
    "titlePt": "Atividades Agora – Preposições de tempo e lugar",
    "cefr": "A1",
    "objective": {
      "en": "To teach 'activities now' and 'prepositions of time and place' (at, in, on, next to, between) in a contextualized way.",
      "pt": "Ensinar 'atividades agora' e 'preposições de tempo e lugar' (at, in, on, next to, between) de forma contextualizada."
    },
    "communicationGoal": {
      "en": "Students will be able to use 'directions' and 'activities now' vocabulary to communicate in real-life situations.",
      "pt": "O aluno será capaz de usar 'directions' e o vocabulário de 'activities now' para se comunicar em situações reais."
    },
    "prerequisites": {
      "en": "Structure: Question words (what, where, when, who, why, how) + object pronouns (me, him, her, us, them). Vocabulary: City Places.",
      "pt": "Estrutura: Question words (what, where, when, who, why, how) + object pronouns (me, him, her, us, them). Vocabulário: City Places."
    },
    "newContent": {
      "en": "Grammar: Prepositions of time and place (at, in, on, next to, between). Vocabulary: Activities Now (10 lexical items). Expressions: Directions.",
      "pt": "Grammar: Preposições de tempo e lugar (at, in, on, next to, between). Vocabulário: Activities Now (10 itens lexicais). Expressões: Directions."
    },
    "reviewContent": {
      "en": "Spiral review: Have / Has for possession and family relationships (Unit 5).",
      "pt": "Revisão em espiral: Have / Has para posse e relações familiares (Unidade 5)."
    },
    "discover": {
      "id": "BEGINNER-U10-DISCOVER",
      "warmUp": {
        "prompt": {
          "en": "Look at the pictures. What are these people doing now? Do you do these things?",
          "pt": "Observe as imagens. O que estas pessoas estão fazendo agora? Você faz estas coisas?"
        },
        "phrases": [
          {
            "en": "She is cooking.",
            "pt": "Ela está cozinhando."
          },
          {
            "en": "He is studying.",
            "pt": "Ele está estudando."
          },
          {
            "en": "They are shopping.",
            "pt": "Eles estão fazendo compras."
          }
        ]
      },
      "context": {
        "situation": {
          "en": "Anna is new in town. She is asking for directions to find some places.",
          "pt": "Anna é nova na cidade. Ela está pedindo direções para encontrar alguns lugares."
        },
        "dialogue": [
          {
            "who": "Anna",
            "en": "Excuse me, where is the bank?",
            "pt": "Com licença, onde fica o banco?"
          },
          {
            "who": "Man",
            "en": "The bank? It's on Main Street, next to the pharmacy.",
            "pt": "O banco? É na Main Street, ao lado da farmácia."
          },
          {
            "who": "Anna",
            "en": "And the library? Is it far?",
            "pt": "E a biblioteca? É longe?"
          },
          {
            "who": "Man",
            "en": "No, it's not far. Go straight, then turn left at the corner. It's between the café and the bookstore.",
            "pt": "Não, não é longe. Vá reto, depois vire à esquerda na esquina. É entre o café e a livraria."
          },
          {
            "who": "Anna",
            "en": "Thank you!",
            "pt": "Obrigado!"
          },
          {
            "who": "Man",
            "en": "You're welcome. Have a good day!",
            "pt": "De nada. Tenha um bom dia!"
          }
        ]
      },
      "vocabulary": [
        {
          "term": "cooking",
          "pt": "cozinhando",
          "ipa": "/ˈkʊkɪŋ/",
          "definition": "preparing food for eating, usually by heating it.",
          "example": "My mom is cooking dinner now.",
          "examplePt": "Minha mãe está cozinhando o jantar agora."
        },
        {
          "term": "studying",
          "pt": "estudando",
          "ipa": "/ˈstʌdiɪŋ/",
          "definition": "devoting time and attention to acquiring knowledge, especially from books.",
          "example": "I am studying English at the library.",
          "examplePt": "Estou estudando inglês na biblioteca."
        },
        {
          "term": "working",
          "pt": "trabalhando",
          "ipa": "/ˈwɜːrkɪŋ/",
          "definition": "doing a job or task, especially for money.",
          "example": "He is working from home today.",
          "examplePt": "Ele está trabalhando de casa hoje."
        },
        {
          "term": "traveling",
          "pt": "viajando",
          "ipa": "/ˈtrævəlɪŋ/",
          "definition": "going from one place to another, especially over a long distance.",
          "example": "They are traveling to Brazil next month.",
          "examplePt": "Eles estão viajando para o Brasil no próximo mês."
        },
        {
          "term": "shopping",
          "pt": "fazendo compras",
          "ipa": "/ˈʃɒpɪŋ/",
          "definition": "the activity of buying things from shops.",
          "example": "We are shopping for new clothes.",
          "examplePt": "Estamos comprando roupas novas."
        },
        {
          "term": "exercising",
          "pt": "se exercitando",
          "ipa": "/ˈɛksərsaɪzɪŋ/",
          "definition": "engaging in physical activity to improve health or fitness.",
          "example": "She is exercising at the gym every morning.",
          "examplePt": "Ela está se exercitando na academia todas as manhãs."
        },
        {
          "term": "cleaning",
          "pt": "limpando",
          "ipa": "/ˈkliːnɪŋ/",
          "definition": "making something free of dirt, marks, or stains.",
          "example": "He is cleaning his room right now.",
          "examplePt": "Ele está limpando o quarto dele agora."
        },
        {
          "term": "driving",
          "pt": "dirigindo",
          "ipa": "/ˈdraɪvɪŋ/",
          "definition": "operating and controlling a car or other vehicle.",
          "example": "My father is driving to work.",
          "examplePt": "Meu pai está dirigindo para o trabalho."
        },
        {
          "term": "waiting",
          "pt": "esperando",
          "ipa": "/ˈweɪtɪŋ/",
          "definition": "staying in one place until an expected event happens or someone arrives.",
          "example": "We are waiting for the bus.",
          "examplePt": "Estamos esperando o ônibus."
        },
        {
          "term": "meeting",
          "pt": "encontrando/reunindo",
          "ipa": "/ˈmiːtɪŋ/",
          "definition": "coming together with another person or people, or having a formal discussion.",
          "example": "They are meeting at the cafe.",
          "examplePt": "Eles estão se encontrando no café."
        }
      ],
      "expressions": [
        {
          "en": "Excuse me, where is the bank?",
          "pt": "Com licença, onde fica o banco?"
        },
        {
          "en": "Turn left at the corner.",
          "pt": "Vire à esquerda na esquina."
        },
        {
          "en": "It's next to the pharmacy.",
          "pt": "É ao lado da farmácia."
        },
        {
          "en": "Go straight.",
          "pt": "Vá reto."
        },
        {
          "en": "Turn right.",
          "pt": "Vire à direita."
        },
        {
          "en": "It's on Main Street.",
          "pt": "É na Main Street."
        }
      ],
      "grammar": [
        {
          "title": {
            "en": "Prepositions of Place",
            "pt": "Preposições de Lugar"
          },
          "examples": [
            {
              "en": "The bank is next to the pharmacy.",
              "pt": "O banco é ao lado da farmácia."
            },
            {
              "en": "The library is between the café and the bookstore.",
              "pt": "A biblioteca é entre o café e a livraria."
            },
            {
              "en": "The book is on the table.",
              "pt": "O livro está em cima da mesa."
            }
          ],
          "rule": {
            "en": "We use prepositions like 'at', 'in', 'on', 'next to', 'between' to describe where things are. 'At' for specific points/addresses, 'in' for enclosed spaces/cities/countries, 'on' for surfaces/streets/floors. 'Next to' means beside. 'Between' means in the middle of two things.",
            "pt": "Usamos preposições como 'at', 'in', 'on', 'next to', 'between' para descrever onde as coisas estão. 'At' para pontos/endereços específicos, 'in' para espaços fechados/cidades/países, 'on' para superfícies/ruas/andares. 'Next to' significa ao lado. 'Between' significa no meio de duas coisas."
          },
          "mistakes": [
            {
              "en": "Incorrect: The keys are in the table. Correct: The keys are on the table.",
              "pt": "Incorreto: The keys are in the table. Correto: The keys are on the table."
            },
            {
              "en": "Incorrect: I live on São Paulo. Correct: I live in São Paulo.",
              "pt": "Incorreto: I live on São Paulo. Correto: I live in São Paulo."
            }
          ]
        },
        {
          "title": {
            "en": "Prepositions of Time",
            "pt": "Preposições de Tempo"
          },
          "examples": [
            {
              "en": "I have class on Mondays at 6 p.m.",
              "pt": "Eu tenho aula às segundas-feiras às 18h."
            },
            {
              "en": "The store closes at 9 o'clock.",
              "pt": "A loja fecha às 9 horas."
            },
            {
              "en": "My birthday is in August.",
              "pt": "Meu aniversário é em agosto."
            }
          ],
          "rule": {
            "en": "We use 'at' for specific times (at 3 p.m.). We use 'on' for days of the week (on Monday) and specific dates (on July 4th). We use 'in' for months (in August), seasons (in summer), and years (in 2023).",
            "pt": "Usamos 'at' para horários específicos (at 3 p.m.). Usamos 'on' para dias da semana (on Monday) e datas específicas (on July 4th). Usamos 'in' para meses (in August), estações (in summer) e anos (in 2023)."
          },
          "mistakes": [
            {
              "en": "Incorrect: I wake up on 7 a.m. Correct: I wake up at 7 a.m.",
              "pt": "Incorreto: I wake up on 7 a.m. Correto: I wake up at 7 a.m."
            },
            {
              "en": "Incorrect: We meet in Friday. Correct: We meet on Friday.",
              "pt": "Incorreto: We meet in Friday. Correto: We meet on Friday."
            }
          ]
        }
      ],
      "controlledPractice": [
        {
          "id": "b10d-cp1",
          "prompt": {
            "en": "Choose the correct preposition: The book is _____ the shelf.",
            "pt": "Escolha a preposição correta: O livro está _____ a prateleira."
          },
          "options": [
            "at",
            "in",
            "on"
          ],
          "answer": "on",
          "explanation": {
            "en": "'On' is used for surfaces.",
            "pt": "'On' é usado para superfícies."
          }
        },
        {
          "id": "b10d-cp2",
          "prompt": {
            "en": "Complete the sentence: My house is _____ the park and the school.",
            "pt": "Complete a frase: Minha casa é _____ o parque e a escola."
          },
          "options": [
            "next to",
            "in",
            "between"
          ],
          "answer": "between",
          "explanation": {
            "en": "'Between' is used for two specific points.",
            "pt": "'Between' é usado para dois pontos específicos."
          }
        },
        {
          "id": "b10d-cp3",
          "prompt": {
            "en": "Which sentence is correct? A: She is traveling on May. B: She is traveling in May.",
            "pt": "Qual frase está correta? A: Ela está viajando on May. B: Ela está viajando in May."
          },
          "options": [
            "A",
            "B"
          ],
          "answer": "B",
          "explanation": {
            "en": "'In' is used for months.",
            "pt": "'In' é usado para meses."
          }
        },
        {
          "id": "b10d-cp4",
          "prompt": {
            "en": "Fill in the blank: The meeting is _____ 3 p.m. _____ Tuesday.",
            "pt": "Preencha a lacuna: A reunião é _____ 3 p.m. _____ terça-feira."
          },
          "options": [
            "at / on",
            "on / at",
            "in / on"
          ],
          "answer": "at / on",
          "explanation": {
            "en": "'At' for specific time, 'on' for day of the week.",
            "pt": "'At' para horário específico, 'on' para dia da semana."
          }
        }
      ],
      "input": {
        "kind": "listening",
        "title": {
          "en": "Finding the Supermarket",
          "pt": "Encontrando o Supermercado"
        },
        "lines": [
          {
            "en": "Excuse me, where is the supermarket?",
            "pt": "Com licença, onde fica o supermercado?"
          },
          {
            "en": "Go straight for two blocks. Then, turn right at the traffic light.",
            "pt": "Vá reto por dois quarteirões. Depois, vire à direita no semáforo."
          },
          {
            "en": "Right at the traffic light, okay.",
            "pt": "À direita no semáforo, ok."
          },
          {
            "en": "Yes. It's next to the bakery, on Green Street.",
            "pt": "Sim. É ao lado da padaria, na Green Street."
          },
          {
            "en": "Thank you! I am shopping for food now.",
            "pt": "Obrigado! Estou comprando comida agora."
          }
        ],
        "questions": [
          {
            "id": "b10d-lq1",
            "prompt": {
              "en": "What is the person looking for?",
              "pt": "O que a pessoa está procurando?"
            },
            "options": [
              "A bank",
              "A supermarket",
              "A bakery"
            ],
            "answer": "A supermarket",
            "explanation": {
              "en": "The person asks, 'where is the supermarket?'",
              "pt": "A pessoa pergunta, 'onde fica o supermercado?'"
            }
          },
          {
            "id": "b10d-lq2",
            "prompt": {
              "en": "What should the person do after two blocks?",
              "pt": "O que a pessoa deve fazer depois de dois quarteirões?"
            },
            "options": [
              "Turn left",
              "Go straight",
              "Turn right"
            ],
            "answer": "Turn right",
            "explanation": {
              "en": "The directions are 'turn right at the traffic light'.",
              "pt": "As direções são 'vire à direita no semáforo'."
            }
          },
          {
            "id": "b10d-lq3",
            "prompt": {
              "en": "Where is the supermarket located?",
              "pt": "Onde o supermercado está localizado?"
            },
            "options": [
              "Next to the post office",
              "Next to the bakery",
              "Between the bakery and the bank"
            ],
            "answer": "Next to the bakery",
            "explanation": {
              "en": "It's next to the bakery.",
              "pt": "É ao lado da padaria."
            }
          }
        ]
      },
      "quickCheck": [
        {
          "id": "b10d-qc1",
          "prompt": {
            "en": "I am _____ now. (activity)",
            "pt": "Eu estou _____ agora. (atividade)"
          },
          "options": [
            "cooking",
            "cook",
            "to cook"
          ],
          "answer": "cooking",
          "explanation": {
            "en": "We use '-ing' for activities happening now.",
            "pt": "Usamos '-ing' para atividades acontecendo agora."
          }
        },
        {
          "id": "b10d-qc2",
          "prompt": {
            "en": "The keys are _____ the box.",
            "pt": "As chaves estão _____ a caixa."
          },
          "options": [
            "on",
            "at",
            "in"
          ],
          "answer": "in",
          "explanation": {
            "en": "'In' is used for enclosed spaces.",
            "pt": "'In' é usado para espaços fechados."
          }
        },
        {
          "id": "b10d-qc3",
          "prompt": {
            "en": "Turn _____ at the corner.",
            "pt": "Vire _____ na esquina."
          },
          "options": [
            "straight",
            "left",
            "front"
          ],
          "answer": "left",
          "explanation": {
            "en": "'Turn left' is a common direction.",
            "pt": "'Turn left' é uma direção comum."
          }
        },
        {
          "id": "b10d-qc4",
          "prompt": {
            "en": "What are you doing _____ the weekend?",
            "pt": "O que você está fazendo _____ o fim de semana?"
          },
          "options": [
            "at",
            "on",
            "in"
          ],
          "answer": "on",
          "explanation": {
            "en": "'On' is used with 'the weekend' in American English.",
            "pt": "'On' é usado com 'the weekend' no inglês americano."
          }
        }
      ]
    },
    "communicate": {
      "id": "BEGINNER-U10-COMMUNICATE",
      "review": [
        {
          "en": "Remember prepositions of time and place: at, in, on, next to, between.",
          "pt": "Lembre-se das preposições de tempo e lugar: at, in, on, next to, between."
        },
        {
          "en": "Remember vocabulary for 'activities now': cooking, studying, working, traveling, shopping, exercising, cleaning, driving, waiting, meeting.",
          "pt": "Lembre-se do vocabulário para 'atividades agora': cooking, studying, working, traveling, shopping, exercising, cleaning, driving, waiting, meeting."
        },
        {
          "en": "Practice asking and giving directions.",
          "pt": "Pratique pedir e dar direções."
        }
      ],
      "activities": [
        {
          "id": "b10c-a1",
          "title": {
            "en": "Short Speaking Tasks: What are they doing?",
            "pt": "Tarefas Curtas de Fala: O que eles estão fazendo?"
          },
          "instruction": {
            "en": "Look at the pictures and describe what each person is doing now. Use the 'activities now' vocabulary.",
            "pt": "Observe as imagens e descreva o que cada pessoa está fazendo agora. Use o vocabulário de 'activities now'."
          },
          "phrases": [
            {
              "en": "He is driving to work.",
              "pt": "Ele está dirigindo para o trabalho."
            },
            {
              "en": "She is cleaning the house.",
              "pt": "Ela está limpando a casa."
            },
            {
              "en": "They are exercising at the park.",
              "pt": "Eles estão se exercitando no parque."
            }
          ],
          "check": [
            {
              "id": "b10c-a1-c1",
              "prompt": {
                "en": "Describe the picture: A woman with a shopping bag.",
                "pt": "Descreva a imagem: Uma mulher com uma sacola de compras."
              },
              "options": [
                "She is cooking.",
                "She is shopping.",
                "She is studying."
              ],
              "answer": "She is shopping.",
              "explanation": {
                "en": "The picture shows someone shopping.",
                "pt": "A imagem mostra alguém fazendo compras."
              }
            },
            {
              "id": "b10c-a1-c2",
              "prompt": {
                "en": "Describe the picture: A man looking at a map.",
                "pt": "Descreva a imagem: Um homem olhando para um mapa."
              },
              "options": [
                "He is working.",
                "He is traveling.",
                "He is cooking."
              ],
              "answer": "He is traveling.",
              "explanation": {
                "en": "Looking at a map often indicates traveling.",
                "pt": "Olhar um mapa muitas vezes indica viajando."
              }
            }
          ]
        },
        {
          "id": "b10c-a2",
          "title": {
            "en": "Listening Tasks: Where is the place?",
            "pt": "Tarefas de Escuta: Onde é o lugar?"
          },
          "instruction": {
            "en": "Listen to the audio. A person is asking for directions. Identify the place they are looking for and its location.",
            "pt": "Ouça o áudio. Uma pessoa está pedindo direções. Identifique o lugar que ela está procurando e sua localização."
          },
          "phrases": [
            {
              "en": "The park is between the school and the library.",
              "pt": "O parque fica entre a escola e a biblioteca."
            },
            {
              "en": "The cafe is on the corner, next to the bank.",
              "pt": "O café fica na esquina, ao lado do banco."
            },
            {
              "en": "The cinema is on Baker Street.",
              "pt": "O cinema fica na Baker Street."
            }
          ],
          "check": [
            {
              "id": "b10c-a2-c1",
              "prompt": {
                "en": "The person is looking for the Post Office. Where is it?",
                "pt": "A pessoa está procurando o Correio. Onde fica?"
              },
              "options": [
                "On Main Street",
                "Next to the cafe",
                "Between the park and the bank"
              ],
              "answer": "Next to the cafe",
              "explanation": {
                "en": "The audio states it's 'next to the cafe'.",
                "pt": "O áudio diz que é 'ao lado do café'."
              }
            },
            {
              "id": "b10c-a2-c2",
              "prompt": {
                "en": "The person asks for the gym. What street is it on?",
                "pt": "A pessoa pergunta pela academia. Em qual rua fica?"
              },
              "options": [
                "First Avenue",
                "Oak Street",
                "Green Street"
              ],
              "answer": "Oak Street",
              "explanation": {
                "en": "The audio specifies 'on Oak Street'.",
                "pt": "O áudio especifica 'na Oak Street'."
              }
            }
          ]
        },
        {
          "id": "b10c-a3",
          "title": {
            "en": "Real-life Communication Activity: Asking for Directions",
            "pt": "Atividade de Comunicação Real: Pedindo Direções"
          },
          "instruction": {
            "en": "Work with a partner. Role-play: One person asks for directions to a place (e.g., pharmacy, hospital, restaurant), and the other person gives directions using prepositions of place and expressions. Use a map if possible.",
            "pt": "Trabalhe com um parceiro. Role-play: Uma pessoa pede direções para um lugar (ex: farmácia, hospital, restaurante), e a outra pessoa dá as direções usando preposições de lugar e expressões. Use um mapa se possível."
          },
          "phrases": [
            {
              "en": "Excuse me, where is the nearest hospital?",
              "pt": "Com licença, onde fica o hospital mais próximo?"
            },
            {
              "en": "Go straight for three blocks. Turn right.",
              "pt": "Vá reto por três quarteirões. Vire à direita."
            },
            {
              "en": "It's on the left, across from the police station.",
              "pt": "É à esquerda, em frente à delegacia."
            }
          ],
          "check": [
            {
              "id": "b10c-a3-c1",
              "prompt": {
                "en": "You want to go to the park. What do you say?",
                "pt": "Você quer ir ao parque. O que você diz?"
              },
              "options": [
                "Where is the park?",
                "The park is here.",
                "I am at the park."
              ],
              "answer": "Where is the park?",
              "explanation": {
                "en": "This is how you ask for a location.",
                "pt": "É assim que você pergunta por uma localização."
              }
            },
            {
              "id": "b10c-a3-c2",
              "prompt": {
                "en": "Someone asks for the bank. It's across the street. What do you say?",
                "pt": "Alguém pergunta pelo banco. Ele fica do outro lado da rua. O que você diz?"
              },
              "options": [
                "It's between the hospital.",
                "It's on the bank.",
                "It's across the street."
              ],
              "answer": "It's across the street.",
              "explanation": {
                "en": "'Across the street' is a common direction.",
                "pt": "'Across the street' é uma direção comum."
              }
            }
          ]
        },
        {
          "id": "b10c-a4",
          "title": {
            "en": "Make Questions: About daily activities",
            "pt": "Faça Perguntas: Sobre atividades diárias"
          },
          "instruction": {
            "en": "Look at the sentences. Transform them into questions asking what someone is doing now.",
            "pt": "Observe as frases. Transforme-as em perguntas perguntando o que alguém está fazendo agora."
          },
          "phrases": [
            {
              "en": "She is cleaning.",
              "pt": "Ela está limpando."
            },
            {
              "en": "He is studying.",
              "pt": "Ele está estudando."
            },
            {
              "en": "They are shopping.",
              "pt": "Eles estão fazendo compras."
            }
          ],
          "check": [
            {
              "id": "b10c-a4-c1",
              "prompt": {
                "en": "Make a question: 'You are working.'",
                "pt": "Faça uma pergunta: 'Você está trabalhando.'"
              },
              "options": [
                "Are you working?",
                "You are working?",
                "Working you?"
              ],
              "answer": "Are you working?",
              "explanation": {
                "en": "The structure for 'is/are + subject + -ing' is for questions.",
                "pt": "A estrutura 'is/are + sujeito + -ing' é para perguntas."
              }
            },
            {
              "id": "b10c-a4-c2",
              "prompt": {
                "en": "Make a question: 'He is driving.'",
                "pt": "Faça uma pergunta: 'Ele está dirigindo.'"
              },
              "options": [
                "Is he driving?",
                "He is driving?",
                "Driving he?"
              ],
              "answer": "Is he driving?",
              "explanation": {
                "en": "The structure for 'is/are + subject + -ing' is for questions.",
                "pt": "A estrutura 'is/are + sujeito + -ing' é para perguntas."
              }
            }
          ]
        },
        {
          "id": "b10c-a5",
          "title": {
            "en": "Build Sentences: Using prepositions and activities",
            "pt": "Construa Frases: Usando preposições e atividades"
          },
          "instruction": {
            "en": "Combine the elements to build complete sentences using 'activities now' and prepositions of time/place.",
            "pt": "Combine os elementos para construir frases completas usando 'activities now' e preposições de tempo/lugar."
          },
          "phrases": [
            {
              "en": "My sister / working / at / home",
              "pt": "Minha irmã / trabalhando / em / casa"
            },
            {
              "en": "We / meeting / on / Friday / at / the cafe",
              "pt": "Nós / encontrando / na / sexta-feira / no / café"
            },
            {
              "en": "The children / playing / in / the park / now",
              "pt": "As crianças / brincando / no / parque / agora"
            }
          ],
          "check": [
            {
              "id": "b10c-a5-c1",
              "prompt": {
                "en": "Build a sentence: 'I / studying / in / my room'",
                "pt": "Construa uma frase: 'Eu / estudando / no / meu quarto'"
              },
              "options": [
                "I am studying in my room.",
                "I studying in my room.",
                "Studying in my room I am."
              ],
              "answer": "I am studying in my room.",
              "explanation": {
                "en": "Remember 'am' with 'I' for present continuous.",
                "pt": "Lembre-se de 'am' com 'I' para o presente contínuo."
              }
            },
            {
              "id": "b10c-a5-c2",
              "prompt": {
                "en": "Build a sentence: 'The restaurant / next to / the cinema'",
                "pt": "Construa uma frase: 'O restaurante / ao lado / do cinema'"
              },
              "options": [
                "The restaurant is next to the cinema.",
                "The restaurant next to the cinema.",
                "Next to the cinema the restaurant is."
              ],
              "answer": "The restaurant is next to the cinema.",
              "explanation": {
                "en": "Use 'is' to connect the subject and prepositional phrase.",
                "pt": "Use 'is' para conectar o sujeito e a frase preposicional."
              }
            }
          ]
        }
      ],
      "challenge": {
        "id": "b10c-challenge",
        "title": {
          "en": "My Day in the City",
          "pt": "Meu Dia na Cidade"
        },
        "instruction": {
          "en": "Imagine you are spending a day in a new city. Describe your activities using 'activities now' vocabulary and tell where these activities are happening, using prepositions of place and directions. For example: 'I am shopping at the mall, which is next to the park. Then I am meeting my friend at the cafe on Elm Street.'",
          "pt": "Imagine que você está passando um dia em uma nova cidade. Descreva suas atividades usando o vocabulário de 'activities now' e diga onde estas atividades estão acontecendo, usando preposições de lugar e direções. Por exemplo: 'Estou fazendo compras no shopping, que fica ao lado do parque. Depois, estou encontrando meu amigo no café na Elm Street.'"
        },
        "phrases": [
          {
            "en": "I am traveling to the museum now. It's on Central Avenue.",
            "pt": "Estou viajando para o museu agora. Fica na Central Avenue."
          },
          {
            "en": "After that, I am having lunch at the restaurant between the bank and the bookstore.",
            "pt": "Depois disso, estou almoçando no restaurante entre o banco e a livraria."
          },
          {
            "en": "In the evening, I am exercising at the gym next to the hotel.",
            "pt": "À noite, estou me exercitando na academia ao lado do hotel."
          }
        ],
        "check": [
          {
            "id": "b10c-ch-c1",
            "prompt": {
              "en": "Imagine you are going to the post office. Where is it?",
              "pt": "Imagine que você está indo ao correio. Onde fica?"
            },
            "options": [
              "It's in the table.",
              "It's on the table.",
              "It's next to the library."
            ],
            "answer": "It's next to the library.",
            "explanation": {
              "en": "This is a plausible location for a post office.",
              "pt": "Esta é uma localização plausível para um correio."
            }
          },
          {
            "id": "b10c-ch-c2",
            "prompt": {
              "en": "What are you doing at 8 p.m. at home?",
              "pt": "O que você está fazendo às 20h em casa?"
            },
            "options": [
              "I am cooking dinner.",
              "I am cooking on dinner.",
              "I am cooking in dinner."
            ],
            "answer": "I am cooking dinner.",
            "explanation": {
              "en": "You 'cook dinner', not 'on dinner' or 'in dinner'.",
              "pt": "Você 'cook dinner', não 'on dinner' ou 'in dinner'."
            }
          }
        ]
      },
      "lessonReview": {
        "summary": {
          "en": "In this unit, we learned about 'activities now' and how to use prepositions of time and place (at, in, on, next to, between). We also practiced asking for and giving directions.",
          "pt": "Nesta unidade, aprendemos sobre 'activities now' e como usar preposições de tempo e lugar (at, in, on, next to, between). Também praticamos pedir e dar direções."
        },
        "canDo": [
          {
            "en": "I can talk about activities happening now (e.g., 'I am studying').",
            "pt": "Eu consigo falar sobre atividades acontecendo agora (ex: 'Estou estudando')."
          },
          {
            "en": "I can use 'at', 'in', 'on', 'next to', and 'between' for places.",
            "pt": "Eu consigo usar 'at', 'in', 'on', 'next to' e 'between' para lugares."
          },
          {
            "en": "I can use 'at', 'in', and 'on' for time.",
            "pt": "Eu consigo usar 'at', 'in' e 'on' para tempo."
          },
          {
            "en": "I can ask for and give simple directions (e.g., 'Turn left at the corner').",
            "pt": "Eu consigo pedir e dar direções simples (ex: 'Vire à esquerda na esquina')."
          }
        ],
        "next": {
          "en": "In the next unit, we will learn about daily routines and frequency adverbs.",
          "pt": "Na próxima unidade, aprenderemos sobre rotinas diárias e advérbios de frequência."
        }
      }
    }
  }
];
