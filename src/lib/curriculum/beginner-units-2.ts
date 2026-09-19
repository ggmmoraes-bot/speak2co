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
    code: "BEGINNER-U06",
    number: 6,
    title: "He Works, She Studies — Talk about other people",
    titlePt: "Ele trabalha, ela estuda — Falar de outras pessoas",
    cefr: "A1",
    objective: {
      en: "Use the present simple in the third person (he, she, it) with the final -s to talk about other people's routines and jobs.",
      pt: "Usar o present simple na terceira pessoa (he, she, it) com o -s final para falar da rotina e do trabalho de outras pessoas.",
    },
    communicationGoal: {
      en: "You can present a colleague or a family member: who the person is, what the person does and when.",
      pt: "Você consegue apresentar um colega ou familiar: quem é, o que faz e quando faz.",
    },
    prerequisites: {
      en: "Unit 5 — present simple with I, you, we and they.",
      pt: "Unidade 5 — present simple com I, you, we e they.",
    },
    newContent: {
      en: "Grammar: present simple third person (-s / -es / irregular). Vocabulary: jobs and workplaces. Expressions: introducing a third person.",
      pt: "Gramática: present simple na terceira pessoa (-s / -es / irregular). Vocabulário: profissões e locais de trabalho. Expressões: apresentar uma terceira pessoa.",
    },
    reviewContent: {
      en: "Sequence review of Units 1–5: to be, possessives, plurals, numbers and routine verbs.",
      pt: "Revisão do bloco das Unidades 1–5: to be, possessivos, plurais, números e verbos de rotina.",
    },
    discover: {
      id: "BEGINNER-U06-DISCOVER",
      warmUp: {
        prompt: {
          en: "Look at the picture. Three people are working. What does each person do?",
          pt: "Observe a imagem. Três pessoas estão trabalhando. O que cada uma faz?",
        },
        phrases: [
          { en: "She studies in the morning.", pt: "Ela estuda de manhã." },
          { en: "He works in a coffee shop.", pt: "Ele trabalha em uma cafeteria." },
          { en: "She teaches English online.", pt: "Ela ensina inglês online." },
        ],
      },
      context: {
        situation: {
          en: "Ivan asks Bruno about the new people at the coworking space.",
          pt: "Ivan pergunta a Bruno sobre as pessoas novas no coworking.",
        },
        dialogue: [
          { who: "Ivan", en: "Who is the woman at table four?", pt: "Quem é a mulher da mesa quatro?" },
          { who: "Bruno", en: "That is Helena. She works for a small design studio.", pt: "Aquela é a Helena. Ela trabalha para um pequeno estúdio de design." },
          { who: "Ivan", en: "And what does she do exactly?", pt: "E o que exatamente ela faz?" },
          { who: "Bruno", en: "She designs websites. She also studies English every evening.", pt: "Ela cria sites. Ela também estuda inglês toda noite." },
          { who: "Ivan", en: "My sister studies English too. She watches videos before bed.", pt: "Minha irmã também estuda inglês. Ela assiste vídeos antes de dormir." },
        ],
      },
      vocabulary: [
        { term: "designer", pt: "designer", ipa: "/dɪˈzaɪnər/", definition: "A person who creates images, products or websites.", example: "She is a designer.", examplePt: "Ela é designer." },
        { term: "teacher", pt: "professor(a)", ipa: "/ˈtiːtʃər/", definition: "A person who teaches a subject.", example: "He is a teacher at a language school.", examplePt: "Ele é professor em uma escola de idiomas." },
        { term: "nurse", pt: "enfermeiro(a)", ipa: "/nɜːrs/", definition: "A person who takes care of patients.", example: "My cousin is a nurse.", examplePt: "Meu primo é enfermeiro." },
        { term: "driver", pt: "motorista", ipa: "/ˈdraɪvər/", definition: "A person who drives a car or a bus.", example: "He works as a driver.", examplePt: "Ele trabalha como motorista." },
        { term: "study", pt: "estudar", ipa: "/ˈstʌdi/", definition: "To learn something with attention.", example: "She studies every evening.", examplePt: "Ela estuda toda noite." },
        { term: "teach", pt: "ensinar", ipa: "/tiːtʃ/", definition: "To help other people learn.", example: "He teaches two classes a day.", examplePt: "Ele dá duas aulas por dia." },
        { term: "watch", pt: "assistir", ipa: "/wɑːtʃ/", definition: "To look at something for a period of time.", example: "She watches short videos.", examplePt: "Ela assiste vídeos curtos." },
        { term: "finish", pt: "terminar", ipa: "/ˈfɪnɪʃ/", definition: "To end an activity.", example: "He finishes work at six.", examplePt: "Ele termina o trabalho às seis." },
        { term: "office", pt: "escritório", ipa: "/ˈɔːfɪs/", definition: "A place where people work at desks.", example: "She works in a small office.", examplePt: "Ela trabalha em um escritório pequeno." },
        { term: "shift", pt: "turno", ipa: "/ʃɪft/", definition: "The period of the day when a person works.", example: "His shift starts at two.", examplePt: "O turno dele começa às duas." },
      ],
      expressions: [
        { en: "This is Helena. She works with me.", pt: "Esta é a Helena. Ela trabalha comigo." },
        { en: "He is the one who opens the office.", pt: "Ele é quem abre o escritório." },
        { en: "What does she do?", pt: "O que ela faz?" },
        { en: "She works as a designer.", pt: "Ela trabalha como designer." },
      ],
      grammar: [
        {
          title: { en: "Third person: he / she / it + verb + -s", pt: "Terceira pessoa: he / she / it + verbo + -s" },
          examples: [
            { en: "He works in a coffee shop.", pt: "Ele trabalha em uma cafeteria." },
            { en: "She finishes work at six.", pt: "Ela termina o trabalho às seis." },
            { en: "It starts at nine.", pt: "Começa às nove." },
          ],
          rule: {
            en: "With he, she and it, add -s to the verb: work → works, start → starts. This -s only exists in the third person.",
            pt: "Com he, she e it, acrescente -s ao verbo: work → works, start → starts. Esse -s existe só na terceira pessoa.",
          },
          mistakes: [
            { en: "She work in an office. → She works in an office.", pt: "Falta o -s da terceira pessoa." },
            { en: "He is works at two. → He works at two.", pt: "Não use to be junto do verbo principal." },
          ],
        },
        {
          title: { en: "Spelling: -s, -es and special verbs", pt: "Escrita: -s, -es e verbos especiais" },
          examples: [
            { en: "She watches videos in the evening.", pt: "Ela assiste vídeos à noite." },
            { en: "He teaches English online.", pt: "Ele ensina inglês online." },
            { en: "She studies before work.", pt: "Ela estuda antes do trabalho." },
          ],
          rule: {
            en: "Verbs ending in -ch, -sh, -ss, -x or -o take -es (watch → watches, go → goes). Consonant + y becomes -ies (study → studies). Have becomes has.",
            pt: "Verbos terminados em -ch, -sh, -ss, -x ou -o recebem -es (watch → watches, go → goes). Consoante + y vira -ies (study → studies). Have vira has.",
          },
          mistakes: [
            { en: "She studys English. → She studies English.", pt: "Consoante + y vira -ies." },
            { en: "He have two jobs. → He has two jobs.", pt: "Na terceira pessoa, have vira has." },
          ],
        },
      ],
      controlledPractice: [
        {
          id: "b6d-cp1",
          prompt: { en: "Complete: She ___ in a small office.", pt: "Complete: She ___ in a small office." },
          options: ["work", "works", "working"],
          answer: "works",
          explanation: { en: "she + verb + -s.", pt: "she + verbo + -s." },
        },
        {
          id: "b6d-cp2",
          prompt: { en: "Complete: He ___ English at a language school.", pt: "Complete: He ___ English at a language school." },
          options: ["teachs", "teaches", "teach"],
          answer: "teaches",
          explanation: { en: "Verbs in -ch take -es.", pt: "Verbos em -ch recebem -es." },
        },
        {
          id: "b6d-cp3",
          prompt: { en: "Complete: My sister ___ every evening.", pt: "Complete: My sister ___ every evening." },
          options: ["studys", "studies", "study"],
          answer: "studies",
          explanation: { en: "Consonant + y → -ies.", pt: "Consoante + y → -ies." },
        },
        {
          id: "b6d-cp4",
          prompt: { en: "Complete: Ivan ___ two jobs.", pt: "Complete: Ivan ___ two jobs." },
          options: ["have", "has", "haves"],
          answer: "has",
          explanation: { en: "have → has in the third person.", pt: "have → has na terceira pessoa." },
        },
        {
          id: "b6d-cp5",
          prompt: { en: "Which question asks about a job?", pt: "Qual pergunta é sobre a profissão?" },
          options: ["What does she do?", "Where is she from?", "How old is she?"],
          answer: "What does she do?",
          explanation: { en: "What does she do? asks about the job.", pt: "What does she do? pergunta a profissão." },
        },
      ],
      input: {
        kind: "listening",
        title: { en: "Listening — Three people, three routines", pt: "Listening — Três pessoas, três rotinas" },
        lines: [
          { en: "Helena designs websites and she studies English in the evening.", pt: "Helena cria sites e estuda inglês à noite." },
          { en: "Bruno works in a coffee shop and his shift starts at two.", pt: "Bruno trabalha em uma cafeteria e o turno dele começa às duas." },
          { en: "Ivan's sister is a nurse and she finishes work at eight.", pt: "A irmã do Ivan é enfermeira e termina o trabalho às oito." },
        ],
        questions: [
          {
            id: "b6d-r1",
            prompt: { en: "What does Helena do in the evening?", pt: "O que Helena faz à noite?" },
            options: ["she studies English", "she drives a bus", "she teaches design"],
            answer: "she studies English",
            explanation: { en: "she studies English in the evening.", pt: "she studies English in the evening." },
          },
          {
            id: "b6d-r2",
            prompt: { en: "When does Bruno's shift start?", pt: "Quando começa o turno de Bruno?" },
            options: ["at two", "at eight", "at six"],
            answer: "at two",
            explanation: { en: "his shift starts at two.", pt: "his shift starts at two." },
          },
          {
            id: "b6d-r3",
            prompt: { en: "What is Ivan's sister's job?", pt: "Qual é a profissão da irmã do Ivan?" },
            options: ["nurse", "driver", "designer"],
            answer: "nurse",
            explanation: { en: "she is a nurse.", pt: "she is a nurse." },
          },
        ],
      },
      quickCheck: [
        {
          id: "b6d-qc1",
          prompt: { en: "Choose the correct sentence.", pt: "Escolha a frase correta." },
          options: ["He finish at six.", "He finishes at six.", "He is finish at six."],
          answer: "He finishes at six.",
          explanation: { en: "he + verb + -es.", pt: "he + verbo + -es." },
        },
        {
          id: "b6d-qc2",
          prompt: { en: "Complete: She ___ short videos before bed.", pt: "Complete: She ___ short videos before bed." },
          options: ["watch", "watches", "watchs"],
          answer: "watches",
          explanation: { en: "watch → watches.", pt: "watch → watches." },
        },
        {
          id: "b6d-qc3",
          prompt: { en: "Which sentence presents a third person?", pt: "Qual frase apresenta uma terceira pessoa?" },
          options: ["This is Helena. She works with me.", "I am Helena and works here.", "She am my colleague."],
          answer: "This is Helena. She works with me.",
          explanation: { en: "This is + name, then she + verb + -s.", pt: "This is + nome, depois she + verbo + -s." },
        },
        {
          id: "b6d-qc4",
          prompt: { en: "Where does a driver work?", pt: "Onde trabalha um motorista?" },
          options: ["in a car or a bus", "in a hospital", "in a design studio"],
          answer: "in a car or a bus",
          explanation: { en: "A driver drives a car or a bus.", pt: "Um motorista dirige carro ou ônibus." },
        },
      ],
    },
    communicate: {
      id: "BEGINNER-U06-COMMUNICATE",
      review: [
        { en: "Third person: he / she / it + verb + -s.", pt: "Terceira pessoa: he / she / it + verbo + -s." },
        { en: "Spelling: watches, teaches, studies, goes, has.", pt: "Escrita: watches, teaches, studies, goes, has." },
        { en: "Question about jobs: What does she do?", pt: "Pergunta sobre profissão: What does she do?" },
      ],
      activities: [
        {
          id: "b6c-a1",
          title: { en: "Present a colleague", pt: "Apresente um colega" },
          instruction: {
            en: "Introduce someone you work or study with. Say the name, the job and one routine action.",
            pt: "Apresente alguém com quem você trabalha ou estuda. Diga o nome, a profissão e uma ação da rotina.",
          },
          phrases: [
            { en: "This is Helena. She works as a designer.", pt: "Esta é a Helena. Ela trabalha como designer." },
            { en: "She starts work at nine and finishes at six.", pt: "Ela começa a trabalhar às nove e termina às seis." },
          ],
          check: [
            {
              id: "b6c-a1q1",
              prompt: { en: "Complete: He ___ as a driver.", pt: "Complete: He ___ as a driver." },
              options: ["work", "works", "is work"],
              answer: "works",
              explanation: { en: "he + works.", pt: "he + works." },
            },
          ],
        },
        {
          id: "b6c-a2",
          title: { en: "Someone in my family", pt: "Alguém da minha família" },
          instruction: {
            en: "Describe one person in your family: job, place of work and a daily habit.",
            pt: "Descreva uma pessoa da sua família: profissão, local de trabalho e um hábito diário.",
          },
          phrases: [
            { en: "My mother is a teacher and she teaches two classes a day.", pt: "Minha mãe é professora e dá duas aulas por dia." },
            { en: "My brother has a long shift and he finishes late.", pt: "Meu irmão tem um turno longo e termina tarde." },
          ],
          check: [
            {
              id: "b6c-a2q1",
              prompt: { en: "Complete: My father ___ a small office.", pt: "Complete: My father ___ a small office." },
              options: ["have", "has", "haves"],
              answer: "has",
              explanation: { en: "have → has.", pt: "have → has." },
            },
          ],
        },
        {
          id: "b6c-a3",
          title: { en: "From I to she", pt: "De I para she" },
          instruction: {
            en: "Say a sentence about your routine and then say the same sentence about another person.",
            pt: "Diga uma frase sobre a sua rotina e depois repita a mesma frase sobre outra pessoa.",
          },
          phrases: [
            { en: "I study English in the evening. She studies English in the evening.", pt: "Eu estudo inglês à noite. Ela estuda inglês à noite." },
            { en: "I watch videos every day. He watches videos every day.", pt: "Eu assisto vídeos todo dia. Ele assiste vídeos todo dia." },
          ],
          check: [
            {
              id: "b6c-a3q1",
              prompt: { en: "Change to 'she': I go to the office at eight.", pt: "Mude para 'she': I go to the office at eight." },
              options: ["She go to the office at eight.", "She goes to the office at eight.", "She gos to the office at eight."],
              answer: "She goes to the office at eight.",
              explanation: { en: "go → goes.", pt: "go → goes." },
            },
          ],
        },
      ],
      challenge: {
        id: "b6c-challenge",
        title: { en: "Communication Challenge — Three people I know", pt: "Desafio de comunicação — Três pessoas que conheço" },
        instruction: {
          en: "Describe three people in six sentences: job, workplace and one routine action for each one.",
          pt: "Descreva três pessoas em seis frases: profissão, local de trabalho e uma ação de rotina para cada uma.",
        },
        phrases: [
          { en: "Helena works in a design studio and she starts at nine.", pt: "Helena trabalha em um estúdio de design e começa às nove." },
          { en: "Bruno works in a coffee shop and his shift finishes at ten.", pt: "Bruno trabalha em uma cafeteria e o turno dele termina às dez." },
          { en: "My cousin is a nurse and she watches the news after work.", pt: "Minha prima é enfermeira e assiste às notícias depois do trabalho." },
          { en: "He teaches English and he has classes every morning.", pt: "Ele ensina inglês e tem aulas toda manhã." },
        ],
        check: [
          {
            id: "b6c-ch1",
            prompt: { en: "Which sentence has NO mistake?", pt: "Qual frase NÃO tem erro?" },
            options: ["She teach English.", "He studys at night.", "She watches videos every day."],
            answer: "She watches videos every day.",
            explanation: { en: "watch → watches.", pt: "watch → watches." },
          },
          {
            id: "b6c-ch2",
            prompt: { en: "Answer: What does he do?", pt: "Responda: What does he do?" },
            options: ["He is from Brazil.", "He works as a driver.", "He is twenty."],
            answer: "He works as a driver.",
            explanation: { en: "The question asks about the job.", pt: "A pergunta é sobre a profissão." },
          },
        ],
      },
      lessonReview: {
        summary: {
          en: "You talked about other people's jobs and routines using the third person -s.",
          pt: "Você falou do trabalho e da rotina de outras pessoas usando o -s da terceira pessoa.",
        },
        canDo: [
          { en: "I can say what another person does.", pt: "Consigo dizer o que outra pessoa faz." },
          { en: "I can use works, studies, teaches and has correctly.", pt: "Consigo usar works, studies, teaches e has corretamente." },
          { en: "I can introduce a colleague or a family member.", pt: "Consigo apresentar um colega ou familiar." },
        ],
        next: {
          en: "Next: clock times, days and months to arrange meetings.",
          pt: "Próximo: horas, dias e meses para marcar encontros.",
        },
      },
    },
  },
  {
    code: "BEGINNER-U07",
    number: 7,
    title: "Clock and Calendar — Say when",
    titlePt: "Relógio e calendário — Dizer quando",
    cefr: "A1",
    objective: {
      en: "Tell the time, name days and months, and use the prepositions at, on and in to say when something happens.",
      pt: "Dizer as horas, nomear dias e meses e usar as preposições at, on e in para dizer quando algo acontece.",
    },
    communicationGoal: {
      en: "You can arrange two appointments, saying the day and the exact time.",
      pt: "Você consegue marcar dois compromissos, dizendo o dia e o horário exato.",
    },
    prerequisites: {
      en: "Unit 6 — third person of the present simple, to talk about other people's schedules.",
      pt: "Unidade 6 — terceira pessoa do present simple, para falar da agenda de outras pessoas.",
    },
    newContent: {
      en: "Grammar: prepositions of time at / on / in. Vocabulary: clock times, days of the week, months. Expressions: arranging a meeting.",
      pt: "Gramática: preposições de tempo at / on / in. Vocabulário: horas, dias da semana, meses. Expressões: marcar um encontro.",
    },
    reviewContent: {
      en: "Review from Units 4–6: numbers, routine verbs and the third person -s.",
      pt: "Revisão das Unidades 4–6: números, verbos de rotina e o -s da terceira pessoa.",
    },
    discover: {
      id: "BEGINNER-U07-DISCOVER",
      warmUp: {
        prompt: {
          en: "Look at the picture. There is a clock and a calendar. What time is it and what day is today?",
          pt: "Observe a imagem. Há um relógio e um calendário. Que horas são e que dia é hoje?",
        },
        phrases: [
          { en: "It is half past nine.", pt: "São nove e meia." },
          { en: "Today is Tuesday.", pt: "Hoje é terça-feira." },
          { en: "My meeting is on Friday at three.", pt: "Minha reunião é na sexta às três." },
        ],
      },
      context: {
        situation: {
          en: "Helena and Ivan try to find a free time for a short meeting.",
          pt: "Helena e Ivan tentam encontrar um horário livre para uma reunião curta.",
        },
        dialogue: [
          { who: "Helena", en: "Ivan, are you free on Wednesday morning?", pt: "Ivan, você está livre na quarta de manhã?" },
          { who: "Ivan", en: "Not really. I have a class at ten.", pt: "Na verdade, não. Eu tenho uma aula às dez." },
          { who: "Helena", en: "What about Thursday at two thirty?", pt: "Que tal quinta às duas e meia?" },
          { who: "Ivan", en: "Thursday is perfect. Let's meet at two thirty in the small room.", pt: "Quinta é perfeito. Vamos nos encontrar às duas e meia na sala pequena." },
          { who: "Helena", en: "Great. I always finish my report in the afternoon, so it works.", pt: "Ótimo. Eu sempre termino meu relatório à tarde, então dá certo." },
        ],
      },
      vocabulary: [
        { term: "o'clock", pt: "em ponto", ipa: "/əˈklɑːk/", definition: "Used for an exact hour with no minutes.", example: "It is five o'clock.", examplePt: "São cinco em ponto." },
        { term: "half past", pt: "e meia", ipa: "/hæf pæst/", definition: "Thirty minutes after the hour.", example: "It is half past six.", examplePt: "São seis e meia." },
        { term: "quarter to", pt: "quinze para", ipa: "/ˈkwɔːrtər tuː/", definition: "Fifteen minutes before the hour.", example: "It is quarter to nine.", examplePt: "São quinze para as nove." },
        { term: "Monday", pt: "segunda-feira", ipa: "/ˈmʌndeɪ/", definition: "The first working day of the week.", example: "I study on Monday.", examplePt: "Eu estudo na segunda-feira." },
        { term: "weekend", pt: "fim de semana", ipa: "/ˈwiːkend/", definition: "Saturday and Sunday.", example: "She rests at the weekend.", examplePt: "Ela descansa no fim de semana." },
        { term: "month", pt: "mês", ipa: "/mʌnθ/", definition: "One of the twelve parts of a year.", example: "March is a busy month.", examplePt: "Março é um mês corrido." },
        { term: "appointment", pt: "compromisso", ipa: "/əˈpɔɪntmənt/", definition: "A meeting arranged for a certain time.", example: "I have an appointment at four.", examplePt: "Eu tenho um compromisso às quatro." },
        { term: "free", pt: "livre", ipa: "/friː/", definition: "With no work or plan at that moment.", example: "Are you free on Friday?", examplePt: "Você está livre na sexta?" },
        { term: "busy", pt: "ocupado(a)", ipa: "/ˈbɪzi/", definition: "With a lot to do.", example: "He is busy in the morning.", examplePt: "Ele está ocupado de manhã." },
        { term: "schedule", pt: "agenda", ipa: "/ˈskedʒuːl/", definition: "The plan of your times and activities.", example: "My schedule is full today.", examplePt: "Minha agenda está cheia hoje." },
      ],
      expressions: [
        { en: "What time is it?", pt: "Que horas são?" },
        { en: "Are you free on Thursday?", pt: "Você está livre na quinta?" },
        { en: "Let's meet at two thirty.", pt: "Vamos nos encontrar às duas e meia." },
        { en: "That works for me.", pt: "Isso funciona para mim." },
      ],
      grammar: [
        {
          title: { en: "at / on / in for time", pt: "at / on / in para tempo" },
          examples: [
            { en: "The class starts at ten.", pt: "A aula começa às dez." },
            { en: "We meet on Thursday.", pt: "Nós nos encontramos na quinta." },
            { en: "She travels in July.", pt: "Ela viaja em julho." },
          ],
          rule: {
            en: "Use at + clock time (at six), on + day or date (on Monday), in + month, year or part of the day (in May, in the morning).",
            pt: "Use at + hora (at six), on + dia ou data (on Monday), in + mês, ano ou parte do dia (in May, in the morning).",
          },
          mistakes: [
            { en: "We meet in Monday. → We meet on Monday.", pt: "Dia da semana usa on." },
            { en: "The class starts on ten. → The class starts at ten.", pt: "Hora exata usa at." },
          ],
        },
        {
          title: { en: "Telling the time", pt: "Dizendo as horas" },
          examples: [
            { en: "It is seven o'clock.", pt: "São sete em ponto." },
            { en: "It is half past eight.", pt: "São oito e meia." },
            { en: "It is quarter to five.", pt: "São quinze para as cinco." },
          ],
          rule: {
            en: "Start with It is. Use o'clock for exact hours, half past for thirty minutes, quarter past and quarter to for fifteen minutes. You can also say the numbers: seven thirty.",
            pt: "Comece com It is. Use o'clock para hora cheia, half past para trinta minutos, quarter past e quarter to para quinze minutos. Também é possível dizer os números: seven thirty.",
          },
          mistakes: [
            { en: "It is the five hours. → It is five o'clock.", pt: "Não se usa 'hours' para dizer horas." },
            { en: "Is half past two. → It is half past two.", pt: "A frase precisa de It." },
          ],
        },
      ],
      controlledPractice: [
        {
          id: "b7d-cp1",
          prompt: { en: "Complete: The meeting is ___ Friday.", pt: "Complete: The meeting is ___ Friday." },
          options: ["at", "on", "in"],
          answer: "on",
          explanation: { en: "Days of the week take on.", pt: "Dias da semana usam on." },
        },
        {
          id: "b7d-cp2",
          prompt: { en: "Complete: She travels ___ September.", pt: "Complete: She travels ___ September." },
          options: ["on", "in", "at"],
          answer: "in",
          explanation: { en: "Months take in.", pt: "Meses usam in." },
        },
        {
          id: "b7d-cp3",
          prompt: { en: "How do you say 8:30?", pt: "Como se diz 8:30?" },
          options: ["half past eight", "quarter to eight", "eight o'clock"],
          answer: "half past eight",
          explanation: { en: "30 minutes = half past.", pt: "30 minutos = half past." },
        },
        {
          id: "b7d-cp4",
          prompt: { en: "How do you say 4:45?", pt: "Como se diz 4:45?" },
          options: ["quarter past four", "quarter to five", "half past four"],
          answer: "quarter to five",
          explanation: { en: "15 minutes before five.", pt: "15 minutos para as cinco." },
        },
        {
          id: "b7d-cp5",
          prompt: { en: "Complete: He is busy ___ the morning.", pt: "Complete: He is busy ___ the morning." },
          options: ["in", "at", "on"],
          answer: "in",
          explanation: { en: "in the morning / afternoon / evening.", pt: "in the morning / afternoon / evening." },
        },
      ],
      input: {
        kind: "listening",
        title: { en: "Listening — A week of appointments", pt: "Listening — Uma semana de compromissos" },
        lines: [
          { en: "I have an English class on Monday at seven in the evening.", pt: "Eu tenho aula de inglês na segunda às sete da noite." },
          { en: "Helena is busy on Wednesday, but she is free on Thursday afternoon.", pt: "Helena está ocupada na quarta, mas está livre na quinta à tarde." },
          { en: "We meet at quarter past three and we finish at four.", pt: "Nós nos encontramos às três e quinze e terminamos às quatro." },
        ],
        questions: [
          {
            id: "b7d-r1",
            prompt: { en: "When is the English class?", pt: "Quando é a aula de inglês?" },
            options: ["on Monday at seven", "on Thursday at three", "on Wednesday at four"],
            answer: "on Monday at seven",
            explanation: { en: "on Monday at seven in the evening.", pt: "on Monday at seven in the evening." },
          },
          {
            id: "b7d-r2",
            prompt: { en: "When is Helena free?", pt: "Quando Helena está livre?" },
            options: ["Wednesday morning", "Thursday afternoon", "Monday evening"],
            answer: "Thursday afternoon",
            explanation: { en: "she is free on Thursday afternoon.", pt: "she is free on Thursday afternoon." },
          },
          {
            id: "b7d-r3",
            prompt: { en: "What time does the meeting start?", pt: "Que horas começa a reunião?" },
            options: ["at quarter past three", "at half past three", "at four"],
            answer: "at quarter past three",
            explanation: { en: "We meet at quarter past three.", pt: "We meet at quarter past three." },
          },
        ],
      },
      quickCheck: [
        {
          id: "b7d-qc1",
          prompt: { en: "Choose the correct sentence.", pt: "Escolha a frase correta." },
          options: ["My class is in Tuesday.", "My class is on Tuesday.", "My class is at Tuesday."],
          answer: "My class is on Tuesday.",
          explanation: { en: "on + day.", pt: "on + dia." },
        },
        {
          id: "b7d-qc2",
          prompt: { en: "Complete: It ___ half past ten.", pt: "Complete: It ___ half past ten." },
          options: ["is", "are", "has"],
          answer: "is",
          explanation: { en: "It is + time.", pt: "It is + hora." },
        },
        {
          id: "b7d-qc3",
          prompt: { en: "Which answer accepts an invitation?", pt: "Qual resposta aceita um convite?" },
          options: ["That works for me.", "What time is it?", "I am busy all day."],
          answer: "That works for me.",
          explanation: { en: "It confirms the time.", pt: "Confirma o horário." },
        },
        {
          id: "b7d-qc4",
          prompt: { en: "Saturday and Sunday are the:", pt: "Sábado e domingo são o:" },
          options: ["weekend", "month", "schedule"],
          answer: "weekend",
          explanation: { en: "weekend = Saturday + Sunday.", pt: "weekend = sábado + domingo." },
        },
      ],
    },
    communicate: {
      id: "BEGINNER-U07-COMMUNICATE",
      review: [
        { en: "at + clock time · on + day · in + month or part of the day.", pt: "at + hora · on + dia · in + mês ou parte do dia." },
        { en: "It is five o'clock / half past six / quarter to nine.", pt: "It is five o'clock / half past six / quarter to nine." },
        { en: "Arranging: Are you free...? Let's meet at...", pt: "Marcar: Are you free...? Let's meet at..." },
      ],
      activities: [
        {
          id: "b7c-a1",
          title: { en: "Read the clock", pt: "Leia o relógio" },
          instruction: {
            en: "Say five different times out loud, using o'clock, half past and quarter to.",
            pt: "Diga cinco horários diferentes em voz alta, usando o'clock, half past e quarter to.",
          },
          phrases: [
            { en: "It is quarter past seven.", pt: "São sete e quinze." },
            { en: "It is quarter to eleven.", pt: "São quinze para as onze." },
          ],
          check: [
            {
              id: "b7c-a1q1",
              prompt: { en: "How do you say 6:15?", pt: "Como se diz 6:15?" },
              options: ["quarter past six", "quarter to six", "half past six"],
              answer: "quarter past six",
              explanation: { en: "15 minutes after six.", pt: "15 minutos depois das seis." },
            },
          ],
        },
        {
          id: "b7c-a2",
          title: { en: "My week", pt: "Minha semana" },
          instruction: {
            en: "Say what you do on three different days, with the day and the time.",
            pt: "Diga o que você faz em três dias diferentes, com o dia e o horário.",
          },
          phrases: [
            { en: "On Monday I study English at eight in the evening.", pt: "Na segunda eu estudo inglês às oito da noite." },
            { en: "On Saturday I rest and I meet my family.", pt: "No sábado eu descanso e encontro minha família." },
          ],
          check: [
            {
              id: "b7c-a2q1",
              prompt: { en: "Complete: I work ___ the afternoon.", pt: "Complete: I work ___ the afternoon." },
              options: ["on", "at", "in"],
              answer: "in",
              explanation: { en: "in the afternoon.", pt: "in the afternoon." },
            },
          ],
        },
        {
          id: "b7c-a3",
          title: { en: "Arrange a meeting", pt: "Marque um encontro" },
          instruction: {
            en: "Invite someone, hear a no, and offer a second day and time.",
            pt: "Convide alguém, receba um não e ofereça um segundo dia e horário.",
          },
          phrases: [
            { en: "Are you free on Wednesday at ten?", pt: "Você está livre na quarta às dez?" },
            { en: "What about Thursday at two thirty?", pt: "Que tal quinta às duas e meia?" },
          ],
          check: [
            {
              id: "b7c-a3q1",
              prompt: { en: "Choose the natural invitation.", pt: "Escolha o convite natural." },
              options: ["Let's meet on Friday at four.", "Let's meet in Friday on four.", "Let's meet at Friday in four."],
              answer: "Let's meet on Friday at four.",
              explanation: { en: "on + day, at + time.", pt: "on + dia, at + hora." },
            },
          ],
        },
      ],
      challenge: {
        id: "b7c-challenge",
        title: { en: "Communication Challenge — Two appointments", pt: "Desafio de comunicação — Dois compromissos" },
        instruction: {
          en: "Arrange two appointments in six sentences: one for this week and one for next month, with day and exact time.",
          pt: "Marque dois compromissos em seis frases: um para esta semana e outro para o próximo mês, com dia e horário exato.",
        },
        phrases: [
          { en: "Are you free on Tuesday morning?", pt: "Você está livre na terça de manhã?" },
          { en: "Let's meet at quarter past nine in the small room.", pt: "Vamos nos encontrar às nove e quinze na sala pequena." },
          { en: "My schedule is full in May, but I am free in June.", pt: "Minha agenda está cheia em maio, mas estou livre em junho." },
          { en: "That works for me. See you then.", pt: "Isso funciona para mim. Até lá." },
        ],
        check: [
          {
            id: "b7c-ch1",
            prompt: { en: "Which sentence has NO mistake?", pt: "Qual frase NÃO tem erro?" },
            options: ["We meet in Monday at ten.", "We meet on Monday at ten.", "We meet at Monday on ten."],
            answer: "We meet on Monday at ten.",
            explanation: { en: "on + day, at + time.", pt: "on + dia, at + hora." },
          },
          {
            id: "b7c-ch2",
            prompt: { en: "Complete: She has an appointment ___ four o'clock.", pt: "Complete: She has an appointment ___ four o'clock." },
            options: ["in", "on", "at"],
            answer: "at",
            explanation: { en: "Clock time uses at.", pt: "Hora exata usa at." },
          },
        ],
      },
      lessonReview: {
        summary: {
          en: "You told the time, named days and months, and arranged appointments.",
          pt: "Você disse as horas, nomeou dias e meses e marcou compromissos.",
        },
        canDo: [
          { en: "I can tell the time in English.", pt: "Consigo dizer as horas em inglês." },
          { en: "I can use at, on and in correctly.", pt: "Consigo usar at, on e in corretamente." },
          { en: "I can arrange a meeting with a day and a time.", pt: "Consigo marcar um encontro com dia e horário." },
        ],
        next: {
          en: "Next: say what you do not do, with don't and doesn't.",
          pt: "Próximo: dizer o que você não faz, com don't e doesn't.",
        },
      },
    },
  },
  {
    code: "BEGINNER-U08",
    number: 8,
    title: "I Don't, He Doesn't — Correct the information",
    titlePt: "Eu não faço, ele não faz — Corrigir a informação",
    cefr: "A1",
    objective: {
      en: "Use the negative of the present simple with don't and doesn't to say what people do not do and to correct wrong information politely.",
      pt: "Usar a negativa do present simple com don't e doesn't para dizer o que as pessoas não fazem e corrigir informações erradas com educação.",
    },
    communicationGoal: {
      en: "You can clear up a misunderstanding: say what is not true and then give the correct information.",
      pt: "Você consegue desfazer um mal-entendido: dizer o que não é verdade e depois dar a informação correta.",
    },
    prerequisites: {
      en: "Unit 7 — times and days, to correct schedule information.",
      pt: "Unidade 7 — horários e dias, para corrigir informações de agenda.",
    },
    newContent: {
      en: "Grammar: present simple negative (don't / doesn't). Vocabulary: habits and free-time actions. Expressions: polite correction.",
      pt: "Gramática: negativa do present simple (don't / doesn't). Vocabulário: hábitos e ações de tempo livre. Expressões: correção educada.",
    },
    reviewContent: {
      en: "Spaced review of Unit 5 and Unit 6: affirmative present simple and the third person -s.",
      pt: "Revisão espaçada das Unidades 5 e 6: present simple afirmativo e o -s da terceira pessoa.",
    },
    discover: {
      id: "BEGINNER-U08-DISCOVER",
      warmUp: {
        prompt: {
          en: "Look at the picture. One person is correcting an idea. What do you think is not true?",
          pt: "Observe a imagem. Uma pessoa está corrigindo uma ideia. O que você acha que não é verdade?",
        },
        phrases: [
          { en: "I don't work on Saturdays.", pt: "Eu não trabalho aos sábados." },
          { en: "She doesn't drink coffee at night.", pt: "Ela não toma café à noite." },
          { en: "Actually, I don't live here.", pt: "Na verdade, eu não moro aqui." },
        ],
      },
      context: {
        situation: {
          en: "Bruno believes Helena works every weekend. Helena corrects him politely.",
          pt: "Bruno acha que Helena trabalha todo fim de semana. Helena o corrige com educação.",
        },
        dialogue: [
          { who: "Bruno", en: "You work on Saturdays, right?", pt: "Você trabalha aos sábados, certo?" },
          { who: "Helena", en: "Actually, I don't work at the weekend. I study on Saturday morning.", pt: "Na verdade, eu não trabalho no fim de semana. Eu estudo no sábado de manhã." },
          { who: "Bruno", en: "Oh, sorry. And Ivan? He opens the office on Sunday.", pt: "Ah, desculpe. E o Ivan? Ele abre o escritório no domingo." },
          { who: "Helena", en: "No, he doesn't. He doesn't come here on Sundays.", pt: "Não, ele não abre. Ele não vem aqui aos domingos." },
          { who: "Bruno", en: "Good to know. I don't want to send him a message for nothing.", pt: "Bom saber. Não quero mandar mensagem para ele à toa." },
        ],
      },
      vocabulary: [
        { term: "weekday", pt: "dia útil", ipa: "/ˈwiːkdeɪ/", definition: "A day from Monday to Friday.", example: "I study on weekdays.", examplePt: "Eu estudo nos dias úteis." },
        { term: "cook", pt: "cozinhar", ipa: "/kʊk/", definition: "To prepare food.", example: "He doesn't cook every day.", examplePt: "Ele não cozinha todo dia." },
        { term: "drive", pt: "dirigir", ipa: "/draɪv/", definition: "To control a car.", example: "She doesn't drive to work.", examplePt: "Ela não dirige para o trabalho." },
        { term: "smoke", pt: "fumar", ipa: "/smoʊk/", definition: "To breathe in smoke from a cigarette.", example: "I don't smoke.", examplePt: "Eu não fumo." },
        { term: "travel", pt: "viajar", ipa: "/ˈtrævl/", definition: "To go from one place to another, usually far.", example: "They don't travel in winter.", examplePt: "Eles não viajam no inverno." },
        { term: "rest", pt: "descansar", ipa: "/rest/", definition: "To stop working for a while.", example: "She rests on Sunday.", examplePt: "Ela descansa no domingo." },
        { term: "usually", pt: "geralmente", ipa: "/ˈjuːʒuəli/", definition: "Most of the time.", example: "I usually walk to work.", examplePt: "Eu geralmente vou a pé para o trabalho." },
        { term: "actually", pt: "na verdade", ipa: "/ˈæktʃuəli/", definition: "Used to give the real information.", example: "Actually, I don't live here.", examplePt: "Na verdade, eu não moro aqui." },
        { term: "misunderstanding", pt: "mal-entendido", ipa: "/ˌmɪsʌndərˈstændɪŋ/", definition: "A wrong idea about something.", example: "It is a small misunderstanding.", examplePt: "É um pequeno mal-entendido." },
        { term: "true", pt: "verdadeiro(a)", ipa: "/truː/", definition: "Correct, real.", example: "That is not true.", examplePt: "Isso não é verdade." },
      ],
      expressions: [
        { en: "Actually, I don't.", pt: "Na verdade, eu não." },
        { en: "No, he doesn't.", pt: "Não, ele não." },
        { en: "That is not true, but thank you.", pt: "Isso não é verdade, mas obrigada." },
        { en: "Let me correct that.", pt: "Deixe-me corrigir isso." },
      ],
      grammar: [
        {
          title: { en: "Negative with don't (I / you / we / they)", pt: "Negativa com don't (I / you / we / they)" },
          examples: [
            { en: "I don't work at the weekend.", pt: "Eu não trabalho no fim de semana." },
            { en: "We don't travel in winter.", pt: "Nós não viajamos no inverno." },
            { en: "They don't cook on weekdays.", pt: "Eles não cozinham nos dias úteis." },
          ],
          rule: {
            en: "Use do not (don't) + base verb. The main verb never changes: I don't work, not I don't works.",
            pt: "Use do not (don't) + verbo base. O verbo principal nunca muda: I don't work, e não I don't works.",
          },
          mistakes: [
            { en: "I no work on Sunday. → I don't work on Sunday.", pt: "A negativa usa don't, não 'no'." },
            { en: "We don't travels. → We don't travel.", pt: "Depois de don't, o verbo fica na forma base." },
          ],
        },
        {
          title: { en: "Negative with doesn't (he / she / it)", pt: "Negativa com doesn't (he / she / it)" },
          examples: [
            { en: "He doesn't come here on Sundays.", pt: "Ele não vem aqui aos domingos." },
            { en: "She doesn't drive to work.", pt: "Ela não dirige para o trabalho." },
            { en: "It doesn't start at nine.", pt: "Não começa às nove." },
          ],
          rule: {
            en: "With he, she and it use does not (doesn't) + base verb. The -s moves to doesn't: she works → she doesn't work.",
            pt: "Com he, she e it use does not (doesn't) + verbo base. O -s passa para doesn't: she works → she doesn't work.",
          },
          mistakes: [
            { en: "She doesn't works here. → She doesn't work here.", pt: "O -s já está em doesn't." },
            { en: "He don't cook. → He doesn't cook.", pt: "Terceira pessoa usa doesn't." },
          ],
        },
      ],
      controlledPractice: [
        {
          id: "b8d-cp1",
          prompt: { en: "Complete: I ___ work on Saturdays.", pt: "Complete: I ___ work on Saturdays." },
          options: ["don't", "doesn't", "not"],
          answer: "don't",
          explanation: { en: "I + don't.", pt: "I + don't." },
        },
        {
          id: "b8d-cp2",
          prompt: { en: "Complete: She ___ drive to the office.", pt: "Complete: She ___ drive to the office." },
          options: ["don't", "doesn't", "isn't"],
          answer: "doesn't",
          explanation: { en: "she + doesn't.", pt: "she + doesn't." },
        },
        {
          id: "b8d-cp3",
          prompt: { en: "Choose the correct form: He doesn't ___ coffee at night.", pt: "Escolha a forma correta: He doesn't ___ coffee at night." },
          options: ["drinks", "drink", "drinking"],
          answer: "drink",
          explanation: { en: "After doesn't, use the base verb.", pt: "Depois de doesn't, verbo base." },
        },
        {
          id: "b8d-cp4",
          prompt: { en: "Make it negative: They travel in July.", pt: "Passe para a negativa: They travel in July." },
          options: ["They don't travel in July.", "They doesn't travel in July.", "They not travel in July."],
          answer: "They don't travel in July.",
          explanation: { en: "they + don't + base verb.", pt: "they + don't + verbo base." },
        },
        {
          id: "b8d-cp5",
          prompt: { en: "Which word introduces a polite correction?", pt: "Qual palavra introduz uma correção educada?" },
          options: ["Actually", "Always", "Also"],
          answer: "Actually",
          explanation: { en: "Actually gives the real information.", pt: "Actually traz a informação real." },
        },
      ],
      input: {
        kind: "listening",
        title: { en: "Listening — That is not exactly right", pt: "Listening — Não é bem assim" },
        lines: [
          { en: "Actually, I don't live in the city centre. I live near the park.", pt: "Na verdade, eu não moro no centro. Eu moro perto do parque." },
          { en: "Helena doesn't work at the weekend. She studies on Saturday morning.", pt: "Helena não trabalha no fim de semana. Ela estuda no sábado de manhã." },
          { en: "Ivan doesn't open the office on Sunday, because the building is closed.", pt: "Ivan não abre o escritório no domingo, porque o prédio está fechado." },
        ],
        questions: [
          {
            id: "b8d-r1",
            prompt: { en: "Where does the first person live?", pt: "Onde mora a primeira pessoa?" },
            options: ["near the park", "in the city centre", "near the office"],
            answer: "near the park",
            explanation: { en: "I live near the park.", pt: "I live near the park." },
          },
          {
            id: "b8d-r2",
            prompt: { en: "What does Helena do on Saturday morning?", pt: "O que Helena faz no sábado de manhã?" },
            options: ["she studies", "she works", "she travels"],
            answer: "she studies",
            explanation: { en: "She studies on Saturday morning.", pt: "She studies on Saturday morning." },
          },
          {
            id: "b8d-r3",
            prompt: { en: "Why doesn't Ivan open the office on Sunday?", pt: "Por que Ivan não abre o escritório no domingo?" },
            options: ["the building is closed", "he is tired", "he studies"],
            answer: "the building is closed",
            explanation: { en: "because the building is closed.", pt: "because the building is closed." },
          },
        ],
      },
      quickCheck: [
        {
          id: "b8d-qc1",
          prompt: { en: "Choose the correct sentence.", pt: "Escolha a frase correta." },
          options: ["He doesn't works here.", "He doesn't work here.", "He don't work here."],
          answer: "He doesn't work here.",
          explanation: { en: "doesn't + base verb.", pt: "doesn't + verbo base." },
        },
        {
          id: "b8d-qc2",
          prompt: { en: "Complete: We ___ cook on weekdays.", pt: "Complete: We ___ cook on weekdays." },
          options: ["doesn't", "don't", "not"],
          answer: "don't",
          explanation: { en: "we + don't.", pt: "we + don't." },
        },
        {
          id: "b8d-qc3",
          prompt: { en: "Which answer corrects information politely?", pt: "Qual resposta corrige a informação com educação?" },
          options: ["Actually, I don't. I study on Saturday.", "No! You are wrong.", "Yes, I work every day."],
          answer: "Actually, I don't. I study on Saturday.",
          explanation: { en: "Correct and give the real information.", pt: "Corrija e dê a informação real." },
        },
        {
          id: "b8d-qc4",
          prompt: { en: "What is a weekday?", pt: "O que é um weekday?" },
          options: ["Monday to Friday", "Saturday and Sunday", "any day in May"],
          answer: "Monday to Friday",
          explanation: { en: "weekday = Monday to Friday.", pt: "weekday = de segunda a sexta." },
        },
      ],
    },
    communicate: {
      id: "BEGINNER-U08-COMMUNICATE",
      review: [
        { en: "I / you / we / they + don't + base verb.", pt: "I / you / we / they + don't + verbo base." },
        { en: "He / she / it + doesn't + base verb.", pt: "He / she / it + doesn't + verbo base." },
        { en: "Polite correction: Actually, I don't...", pt: "Correção educada: Actually, I don't..." },
      ],
      activities: [
        {
          id: "b8c-a1",
          title: { en: "Three things I don't do", pt: "Três coisas que eu não faço" },
          instruction: {
            en: "Say three habits you do not have, using don't and a time expression.",
            pt: "Diga três hábitos que você não tem, usando don't e uma expressão de tempo.",
          },
          phrases: [
            { en: "I don't drink coffee in the evening.", pt: "Eu não tomo café à noite." },
            { en: "I don't work on weekdays after six.", pt: "Eu não trabalho nos dias úteis depois das seis." },
          ],
          check: [
            {
              id: "b8c-a1q1",
              prompt: { en: "Complete: I ___ smoke.", pt: "Complete: I ___ smoke." },
              options: ["don't", "doesn't", "am not"],
              answer: "don't",
              explanation: { en: "I + don't.", pt: "I + don't." },
            },
          ],
        },
        {
          id: "b8c-a2",
          title: { en: "What she doesn't do", pt: "O que ela não faz" },
          instruction: {
            en: "Talk about a person you know: two things the person does and two things the person doesn't do.",
            pt: "Fale de alguém que você conhece: duas coisas que a pessoa faz e duas que não faz.",
          },
          phrases: [
            { en: "She studies English, but she doesn't watch films in English.", pt: "Ela estuda inglês, mas não assiste a filmes em inglês." },
            { en: "He works in an office, but he doesn't drive to work.", pt: "Ele trabalha em escritório, mas não vai dirigindo ao trabalho." },
          ],
          check: [
            {
              id: "b8c-a2q1",
              prompt: { en: "Complete: My brother ___ cook.", pt: "Complete: My brother ___ cook." },
              options: ["don't", "doesn't", "not"],
              answer: "doesn't",
              explanation: { en: "Third person + doesn't.", pt: "Terceira pessoa + doesn't." },
            },
          ],
        },
        {
          id: "b8c-a3",
          title: { en: "Correct the misunderstanding", pt: "Corrija o mal-entendido" },
          instruction: {
            en: "Someone says something wrong about you. Correct it politely and give the real information.",
            pt: "Alguém diz algo errado sobre você. Corrija com educação e dê a informação correta.",
          },
          phrases: [
            { en: "Actually, I don't live in the city centre. I live near the park.", pt: "Na verdade, eu não moro no centro. Eu moro perto do parque." },
            { en: "No, she doesn't teach on Fridays. She teaches on Mondays.", pt: "Não, ela não dá aula às sextas. Ela dá aula às segundas." },
          ],
          check: [
            {
              id: "b8c-a3q1",
              prompt: { en: "Choose the polite correction.", pt: "Escolha a correção educada." },
              options: ["Actually, I don't work there. I work here.", "You never listen to me.", "I work there, yes."],
              answer: "Actually, I don't work there. I work here.",
              explanation: { en: "Negative + correct information.", pt: "Negativa + informação correta." },
            },
          ],
        },
      ],
      challenge: {
        id: "b8c-challenge",
        title: { en: "Communication Challenge — Clear it up", pt: "Desafio de comunicação — Desfaça o mal-entendido" },
        instruction: {
          en: "In six sentences, correct four wrong ideas about you and about a person you know, always giving the real information.",
          pt: "Em seis frases, corrija quatro ideias erradas sobre você e sobre alguém que você conhece, sempre dando a informação real.",
        },
        phrases: [
          { en: "Actually, I don't work at the weekend.", pt: "Na verdade, eu não trabalho no fim de semana." },
          { en: "I don't travel in July, I travel in December.", pt: "Eu não viajo em julho, eu viajo em dezembro." },
          { en: "She doesn't start at eight, she starts at nine.", pt: "Ela não começa às oito, ela começa às nove." },
          { en: "He doesn't live here, but he works near the office.", pt: "Ele não mora aqui, mas trabalha perto do escritório." },
        ],
        check: [
          {
            id: "b8c-ch1",
            prompt: { en: "Which sentence has NO mistake?", pt: "Qual frase NÃO tem erro?" },
            options: ["She doesn't works on Monday.", "They doesn't cook.", "He doesn't travel in winter."],
            answer: "He doesn't travel in winter.",
            explanation: { en: "doesn't + base verb.", pt: "doesn't + verbo base." },
          },
          {
            id: "b8c-ch2",
            prompt: { en: "Correct the information: 'You work on Sundays.'", pt: "Corrija a informação: 'You work on Sundays.'" },
            options: ["Actually, I don't work on Sundays.", "Actually, I doesn't work on Sundays.", "Actually, I no work on Sundays."],
            answer: "Actually, I don't work on Sundays.",
            explanation: { en: "I + don't + base verb.", pt: "I + don't + verbo base." },
          },
        ],
      },
      lessonReview: {
        summary: {
          en: "You said what you and other people do not do, and you corrected wrong information politely.",
          pt: "Você disse o que você e outras pessoas não fazem e corrigiu informações erradas com educação.",
        },
        canDo: [
          { en: "I can make negative sentences with don't and doesn't.", pt: "Consigo fazer frases negativas com don't e doesn't." },
          { en: "I can correct a misunderstanding politely.", pt: "Consigo corrigir um mal-entendido com educação." },
          { en: "I can contrast what is true and what is not true.", pt: "Consigo contrastar o que é verdade e o que não é." },
        ],
        next: {
          en: "Next: ask questions with Do you...? and Does he...?",
          pt: "Próximo: fazer perguntas com Do you...? e Does he...?",
        },
      },
    },
  },
  {
    code: "BEGINNER-U09",
    number: 9,
    title: "Do You...? — Ask real questions",
    titlePt: "Você...? — Fazer perguntas de verdade",
    cefr: "A1",
    objective: {
      en: "Ask and answer present simple questions with do and does, using short answers.",
      pt: "Fazer e responder perguntas no present simple com do e does, usando respostas curtas.",
    },
    communicationGoal: {
      en: "You can run a short interview with five questions and react to the answers.",
      pt: "Você consegue conduzir uma mini-entrevista com cinco perguntas e reagir às respostas.",
    },
    prerequisites: {
      en: "Unit 8 — the negative with don't and doesn't.",
      pt: "Unidade 8 — a negativa com don't e doesn't.",
    },
    newContent: {
      en: "Grammar: questions with do / does and short answers. Vocabulary: free-time verbs. Expressions: reacting in a conversation.",
      pt: "Gramática: perguntas com do / does e respostas curtas. Vocabulário: verbos de tempo livre. Expressões: reagir na conversa.",
    },
    reviewContent: {
      en: "Review from Units 5–8: affirmative, third person -s and negative forms.",
      pt: "Revisão das Unidades 5–8: afirmativa, -s da terceira pessoa e formas negativas.",
    },
    discover: {
      id: "BEGINNER-U09-DISCOVER",
      warmUp: {
        prompt: {
          en: "Look at the picture. Two people are talking. What questions do you think they ask?",
          pt: "Observe a imagem. Duas pessoas conversam. Que perguntas você acha que elas fazem?",
        },
        phrases: [
          { en: "Do you live near here?", pt: "Você mora perto daqui?" },
          { en: "Does he work with you?", pt: "Ele trabalha com você?" },
          { en: "Yes, I do. No, he doesn't.", pt: "Sim. Não, ele não." },
        ],
      },
      context: {
        situation: {
          en: "Ivan interviews Bruno for the coworking newsletter.",
          pt: "Ivan entrevista Bruno para o boletim do coworking.",
        },
        dialogue: [
          { who: "Ivan", en: "Do you work here every day?", pt: "Você trabalha aqui todo dia?" },
          { who: "Bruno", en: "No, I don't. I work here three days a week.", pt: "Não. Eu trabalho aqui três dias por semana." },
          { who: "Ivan", en: "Do you like the morning shift?", pt: "Você gosta do turno da manhã?" },
          { who: "Bruno", en: "Yes, I do. It is quiet and I study before work.", pt: "Sim, gosto. É tranquilo e eu estudo antes do trabalho." },
          { who: "Ivan", en: "Really? Me too. And does Helena study with you?", pt: "Sério? Eu também. E a Helena estuda com você?" },
          { who: "Bruno", en: "No, she doesn't. She studies at home in the evening.", pt: "Não, ela não. Ela estuda em casa à noite." },
        ],
      },
      vocabulary: [
        { term: "interview", pt: "entrevista", ipa: "/ˈɪntərvjuː/", definition: "A conversation with questions and answers.", example: "We have a short interview today.", examplePt: "Temos uma entrevista curta hoje." },
        { term: "question", pt: "pergunta", ipa: "/ˈkwestʃən/", definition: "Something you ask to get information.", example: "Can I ask a question?", examplePt: "Posso fazer uma pergunta?" },
        { term: "answer", pt: "resposta", ipa: "/ˈænsər/", definition: "What you say after a question.", example: "Your answer is clear.", examplePt: "Sua resposta está clara." },
        { term: "enjoy", pt: "curtir, apreciar", ipa: "/ɪnˈdʒɔɪ/", definition: "To like doing something.", example: "Do you enjoy your job?", examplePt: "Você gosta do seu trabalho?" },
        { term: "practice", pt: "praticar", ipa: "/ˈpræktɪs/", definition: "To do something again to get better.", example: "I practice English every day.", examplePt: "Eu pratico inglês todo dia." },
        { term: "listen to", pt: "ouvir", ipa: "/ˈlɪsn tuː/", definition: "To pay attention to a sound.", example: "She listens to podcasts.", examplePt: "Ela ouve podcasts." },
        { term: "play", pt: "jogar, tocar", ipa: "/pleɪ/", definition: "To take part in a game or play music.", example: "Do you play football?", examplePt: "Você joga futebol?" },
        { term: "hobby", pt: "hobby, passatempo", ipa: "/ˈhɑːbi/", definition: "An activity you do for pleasure.", example: "Cooking is my hobby.", examplePt: "Cozinhar é meu hobby." },
        { term: "often", pt: "com frequência", ipa: "/ˈɔːfn/", definition: "Many times.", example: "Do you often travel?", examplePt: "Você viaja com frequência?" },
        { term: "really", pt: "sério, mesmo", ipa: "/ˈriːəli/", definition: "Used to show interest or surprise.", example: "Really? That is great.", examplePt: "Sério? Que ótimo." },
      ],
      expressions: [
        { en: "Do you like it here?", pt: "Você gosta daqui?" },
        { en: "Yes, I do. / No, I don't.", pt: "Sim. / Não." },
        { en: "Really? Me too.", pt: "Sério? Eu também." },
        { en: "Can I ask you a question?", pt: "Posso te fazer uma pergunta?" },
      ],
      grammar: [
        {
          title: { en: "Questions with do and does", pt: "Perguntas com do e does" },
          examples: [
            { en: "Do you work here every day?", pt: "Você trabalha aqui todo dia?" },
            { en: "Does she study in the evening?", pt: "Ela estuda à noite?" },
            { en: "Where do they live?", pt: "Onde eles moram?" },
          ],
          rule: {
            en: "Start with Do (I, you, we, they) or Does (he, she, it) + subject + base verb. With a question word, put it first: Where do you work?",
            pt: "Comece com Do (I, you, we, they) ou Does (he, she, it) + sujeito + verbo base. Com palavra interrogativa, ela vem primeiro: Where do you work?",
          },
          mistakes: [
            { en: "Does she works here? → Does she work here?", pt: "Depois de does, o verbo fica na forma base." },
            { en: "You like coffee? → Do you like coffee?", pt: "A pergunta precisa de do." },
          ],
        },
        {
          title: { en: "Short answers", pt: "Respostas curtas" },
          examples: [
            { en: "Yes, I do.", pt: "Sim." },
            { en: "No, she doesn't.", pt: "Não, ela não." },
            { en: "Yes, they do.", pt: "Sim, eles sim." },
          ],
          rule: {
            en: "Answer with Yes / No + subject + do, does, don't or doesn't. Do not repeat the main verb: Yes, I do (not Yes, I do work).",
            pt: "Responda com Yes / No + sujeito + do, does, don't ou doesn't. Não repita o verbo principal: Yes, I do (e não Yes, I do work).",
          },
          mistakes: [
            { en: "Yes, I like. → Yes, I do.", pt: "A resposta curta usa o auxiliar." },
            { en: "No, she don't. → No, she doesn't.", pt: "Terceira pessoa usa doesn't." },
          ],
        },
      ],
      controlledPractice: [
        {
          id: "b9d-cp1",
          prompt: { en: "Complete: ___ you live near here?", pt: "Complete: ___ you live near here?" },
          options: ["Do", "Does", "Are"],
          answer: "Do",
          explanation: { en: "you + Do.", pt: "you + Do." },
        },
        {
          id: "b9d-cp2",
          prompt: { en: "Complete: ___ she work on Mondays?", pt: "Complete: ___ she work on Mondays?" },
          options: ["Do", "Does", "Is"],
          answer: "Does",
          explanation: { en: "she + Does.", pt: "she + Does." },
        },
        {
          id: "b9d-cp3",
          prompt: { en: "Choose the correct question.", pt: "Escolha a pergunta correta." },
          options: ["Does he studies English?", "Does he study English?", "Do he study English?"],
          answer: "Does he study English?",
          explanation: { en: "Does + subject + base verb.", pt: "Does + sujeito + verbo base." },
        },
        {
          id: "b9d-cp4",
          prompt: { en: "Answer: Do you practice every day?", pt: "Responda: Do you practice every day?" },
          options: ["Yes, I do.", "Yes, I practice do.", "Yes, I am."],
          answer: "Yes, I do.",
          explanation: { en: "Short answer with do.", pt: "Resposta curta com do." },
        },
        {
          id: "b9d-cp5",
          prompt: { en: "Complete: Where ___ they work?", pt: "Complete: Where ___ they work?" },
          options: ["does", "do", "are"],
          answer: "do",
          explanation: { en: "they + do.", pt: "they + do." },
        },
      ],
      input: {
        kind: "listening",
        title: { en: "Listening — A short interview", pt: "Listening — Uma entrevista curta" },
        lines: [
          { en: "Do you listen to podcasts in English? Yes, I do, usually on the bus.", pt: "Você ouve podcasts em inglês? Sim, geralmente no ônibus." },
          { en: "Does your brother play football? No, he doesn't. He plays the guitar.", pt: "Seu irmão joga futebol? Não. Ele toca violão." },
          { en: "Where do you practice speaking? I practice at the coworking with my colleagues.", pt: "Onde você pratica conversação? Eu pratico no coworking com meus colegas." },
        ],
        questions: [
          {
            id: "b9d-r1",
            prompt: { en: "When does the person listen to podcasts?", pt: "Quando a pessoa ouve podcasts?" },
            options: ["on the bus", "at night", "at the gym"],
            answer: "on the bus",
            explanation: { en: "usually on the bus.", pt: "usually on the bus." },
          },
          {
            id: "b9d-r2",
            prompt: { en: "What does the brother do?", pt: "O que o irmão faz?" },
            options: ["he plays the guitar", "he plays football", "he studies English"],
            answer: "he plays the guitar",
            explanation: { en: "He plays the guitar.", pt: "He plays the guitar." },
          },
          {
            id: "b9d-r3",
            prompt: { en: "Where does the person practice speaking?", pt: "Onde a pessoa pratica conversação?" },
            options: ["at the coworking", "at home", "at school"],
            answer: "at the coworking",
            explanation: { en: "I practice at the coworking.", pt: "I practice at the coworking." },
          },
        ],
      },
      quickCheck: [
        {
          id: "b9d-qc1",
          prompt: { en: "Choose the correct short answer to 'Does she cook?'", pt: "Escolha a resposta curta correta para 'Does she cook?'" },
          options: ["Yes, she does.", "Yes, she do.", "Yes, she cooks does."],
          answer: "Yes, she does.",
          explanation: { en: "she + does.", pt: "she + does." },
        },
        {
          id: "b9d-qc2",
          prompt: { en: "Complete: ___ they travel in July?", pt: "Complete: ___ they travel in July?" },
          options: ["Does", "Do", "Are"],
          answer: "Do",
          explanation: { en: "they + Do.", pt: "they + Do." },
        },
        {
          id: "b9d-qc3",
          prompt: { en: "Which reaction shows interest?", pt: "Qual reação mostra interesse?" },
          options: ["Really? Me too.", "I don't know.", "Nothing."],
          answer: "Really? Me too.",
          explanation: { en: "It keeps the conversation going.", pt: "Mantém a conversa viva." },
        },
        {
          id: "b9d-qc4",
          prompt: { en: "A hobby is:", pt: "Um hobby é:" },
          options: ["an activity you do for pleasure", "a place of work", "a kind of question"],
          answer: "an activity you do for pleasure",
          explanation: { en: "hobby = free-time activity.", pt: "hobby = atividade de lazer." },
        },
      ],
    },
    communicate: {
      id: "BEGINNER-U09-COMMUNICATE",
      review: [
        { en: "Do + I / you / we / they + base verb?", pt: "Do + I / you / we / they + verbo base?" },
        { en: "Does + he / she / it + base verb?", pt: "Does + he / she / it + verbo base?" },
        { en: "Short answers: Yes, I do. / No, she doesn't.", pt: "Respostas curtas: Yes, I do. / No, she doesn't." },
      ],
      activities: [
        {
          id: "b9c-a1",
          title: { en: "Five questions", pt: "Cinco perguntas" },
          instruction: {
            en: "Ask five questions about work, study and free time, using do and does.",
            pt: "Faça cinco perguntas sobre trabalho, estudo e tempo livre, usando do e does.",
          },
          phrases: [
            { en: "Do you work near your home?", pt: "Você trabalha perto de casa?" },
            { en: "Does your best friend study English too?", pt: "Seu melhor amigo também estuda inglês?" },
          ],
          check: [
            {
              id: "b9c-a1q1",
              prompt: { en: "Complete: ___ your sister live here?", pt: "Complete: ___ your sister live here?" },
              options: ["Do", "Does", "Is"],
              answer: "Does",
              explanation: { en: "Third person + Does.", pt: "Terceira pessoa + Does." },
            },
          ],
        },
        {
          id: "b9c-a2",
          title: { en: "Short answers only", pt: "Só respostas curtas" },
          instruction: {
            en: "Answer questions with short answers and then add one piece of information.",
            pt: "Responda às perguntas com respostas curtas e depois acrescente uma informação.",
          },
          phrases: [
            { en: "Yes, I do. I practice every morning.", pt: "Sim. Eu pratico toda manhã." },
            { en: "No, he doesn't. He works at the weekend.", pt: "Não, ele não. Ele trabalha no fim de semana." },
          ],
          check: [
            {
              id: "b9c-a2q1",
              prompt: { en: "Answer: Does he drive to work?", pt: "Responda: Does he drive to work?" },
              options: ["No, he don't.", "No, he doesn't.", "No, he not."],
              answer: "No, he doesn't.",
              explanation: { en: "he + doesn't.", pt: "he + doesn't." },
            },
          ],
        },
        {
          id: "b9c-a3",
          title: { en: "React and continue", pt: "Reaja e continue" },
          instruction: {
            en: "Listen to an answer, react with Really? or Me too, and ask one more question.",
            pt: "Ouça uma resposta, reaja com Really? ou Me too e faça mais uma pergunta.",
          },
          phrases: [
            { en: "Really? Do you listen to podcasts too?", pt: "Sério? Você também ouve podcasts?" },
            { en: "Me too. Where do you practice?", pt: "Eu também. Onde você pratica?" },
          ],
          check: [
            {
              id: "b9c-a3q1",
              prompt: { en: "Choose the natural follow-up question.", pt: "Escolha a pergunta de continuidade natural." },
              options: ["Where do you study?", "Where you study?", "Where does you study?"],
              answer: "Where do you study?",
              explanation: { en: "Question word + do + you + base verb.", pt: "Palavra interrogativa + do + you + verbo base." },
            },
          ],
        },
      ],
      challenge: {
        id: "b9c-challenge",
        title: { en: "Communication Challenge — Mini interview", pt: "Desafio de comunicação — Mini-entrevista" },
        instruction: {
          en: "Run a five-question interview: ask, listen, react and ask again. Use do, does and short answers.",
          pt: "Conduza uma entrevista de cinco perguntas: pergunte, ouça, reaja e pergunte de novo. Use do, does e respostas curtas.",
        },
        phrases: [
          { en: "Do you work or study in the morning?", pt: "Você trabalha ou estuda de manhã?" },
          { en: "Does your family live in the same city?", pt: "Sua família mora na mesma cidade?" },
          { en: "Really? What do you do at the weekend?", pt: "Sério? O que você faz no fim de semana?" },
          { en: "No, I don't. I practice English at home.", pt: "Não. Eu pratico inglês em casa." },
        ],
        check: [
          {
            id: "b9c-ch1",
            prompt: { en: "Which question has NO mistake?", pt: "Qual pergunta NÃO tem erro?" },
            options: ["Does she likes music?", "Do she like music?", "Does she like music?"],
            answer: "Does she like music?",
            explanation: { en: "Does + subject + base verb.", pt: "Does + sujeito + verbo base." },
          },
          {
            id: "b9c-ch2",
            prompt: { en: "Complete the short answer: 'Do they travel a lot?' — 'Yes, ___.'", pt: "Complete a resposta curta: 'Do they travel a lot?' — 'Yes, ___.'" },
            options: ["they do", "they does", "they travel"],
            answer: "they do",
            explanation: { en: "they + do.", pt: "they + do." },
          },
        ],
      },
      lessonReview: {
        summary: {
          en: "You asked and answered present simple questions and kept a short conversation going.",
          pt: "Você fez e respondeu perguntas no present simple e manteve uma conversa curta.",
        },
        canDo: [
          { en: "I can ask questions with do and does.", pt: "Consigo fazer perguntas com do e does." },
          { en: "I can give short answers.", pt: "Consigo dar respostas curtas." },
          { en: "I can react and ask one more question.", pt: "Consigo reagir e fazer mais uma pergunta." },
        ],
        next: {
          en: "Next: say how often you do things, with always, usually and never.",
          pt: "Próximo: dizer com que frequência você faz as coisas, com always, usually e never.",
        },
      },
    },
  },
  {
    code: "BEGINNER-U10",
    number: 10,
    title: "How Often? — Talk about frequency",
    titlePt: "Com que frequência? — Falar de frequência",
    cefr: "A1",
    objective: {
      en: "Use frequency adverbs and frequency expressions to say how often you and other people do things.",
      pt: "Usar advérbios e expressões de frequência para dizer com que frequência você e outras pessoas fazem as coisas.",
    },
    communicationGoal: {
      en: "You can compare four habits: yours and someone else's.",
      pt: "Você consegue comparar quatro hábitos: os seus e os de outra pessoa.",
    },
    prerequisites: {
      en: "Unit 9 — questions with do and does.",
      pt: "Unidade 9 — perguntas com do e does.",
    },
    newContent: {
      en: "Grammar: position of frequency adverbs. Vocabulary: frequency expressions. Expressions: How often do you...?",
      pt: "Gramática: posição dos advérbios de frequência. Vocabulário: expressões de frequência. Expressões: How often do you...?",
    },
    reviewContent: {
      en: "Spaced review of Unit 7: days, times and prepositions at / on / in.",
      pt: "Revisão espaçada da Unidade 7: dias, horários e preposições at / on / in.",
    },
    discover: {
      id: "BEGINNER-U10-DISCOVER",
      warmUp: {
        prompt: {
          en: "Look at the picture. It is a weekly plan. How often does this person do each activity?",
          pt: "Observe a imagem. É um plano semanal. Com que frequência essa pessoa faz cada atividade?",
        },
        phrases: [
          { en: "I always start the week with a plan.", pt: "Eu sempre começo a semana com um plano." },
          { en: "She studies twice a week.", pt: "Ela estuda duas vezes por semana." },
          { en: "We never work on Sunday.", pt: "Nós nunca trabalhamos no domingo." },
        ],
      },
      context: {
        situation: {
          en: "Helena and Bruno compare their study habits after a busy week.",
          pt: "Helena e Bruno comparam seus hábitos de estudo depois de uma semana corrida.",
        },
        dialogue: [
          { who: "Helena", en: "How often do you practice speaking?", pt: "Com que frequência você pratica conversação?" },
          { who: "Bruno", en: "Three times a week. I usually practice before work.", pt: "Três vezes por semana. Eu geralmente pratico antes do trabalho." },
          { who: "Helena", en: "I always practice in the evening, but I sometimes skip Friday.", pt: "Eu sempre pratico à noite, mas às vezes pulo a sexta." },
          { who: "Bruno", en: "Do you ever study at the weekend?", pt: "Você chega a estudar no fim de semana?" },
          { who: "Helena", en: "Rarely. I hardly ever open the book on Sunday.", pt: "Raramente. Quase nunca abro o livro no domingo." },
        ],
      },
      vocabulary: [
        { term: "always", pt: "sempre", ipa: "/ˈɔːlweɪz/", definition: "Every time, one hundred per cent.", example: "I always drink water.", examplePt: "Eu sempre bebo água." },
        { term: "usually", pt: "geralmente", ipa: "/ˈjuːʒuəli/", definition: "Most of the time.", example: "She usually walks to work.", examplePt: "Ela geralmente vai a pé para o trabalho." },
        { term: "often", pt: "frequentemente", ipa: "/ˈɔːfn/", definition: "Many times, but not always.", example: "We often meet on Friday.", examplePt: "Nós nos encontramos com frequência na sexta." },
        { term: "sometimes", pt: "às vezes", ipa: "/ˈsʌmtaɪmz/", definition: "On some occasions.", example: "He sometimes cooks dinner.", examplePt: "Ele às vezes faz o jantar." },
        { term: "rarely", pt: "raramente", ipa: "/ˈrerli/", definition: "Almost never.", example: "They rarely travel in winter.", examplePt: "Eles raramente viajam no inverno." },
        { term: "never", pt: "nunca", ipa: "/ˈnevər/", definition: "Not at any time.", example: "I never smoke.", examplePt: "Eu nunca fumo." },
        { term: "once a week", pt: "uma vez por semana", ipa: "/wʌns ə wiːk/", definition: "One time in each week.", example: "She calls her mother once a week.", examplePt: "Ela liga para a mãe uma vez por semana." },
        { term: "twice a month", pt: "duas vezes por mês", ipa: "/twaɪs ə mʌnθ/", definition: "Two times in each month.", example: "We meet twice a month.", examplePt: "Nós nos encontramos duas vezes por mês." },
        { term: "every day", pt: "todo dia", ipa: "/ˈevri deɪ/", definition: "Each day with no exception.", example: "I practice every day.", examplePt: "Eu pratico todo dia." },
        { term: "hardly ever", pt: "quase nunca", ipa: "/ˈhɑːrdli ˈevər/", definition: "Almost never.", example: "He hardly ever watches TV.", examplePt: "Ele quase nunca assiste TV." },
      ],
      expressions: [
        { en: "How often do you study?", pt: "Com que frequência você estuda?" },
        { en: "Three times a week.", pt: "Três vezes por semana." },
        { en: "I usually do, but not today.", pt: "Eu geralmente faço, mas hoje não." },
        { en: "Me too. / Me neither.", pt: "Eu também. / Eu também não." },
      ],
      grammar: [
        {
          title: { en: "Where to put the frequency adverb", pt: "Onde colocar o advérbio de frequência" },
          examples: [
            { en: "I always practice in the morning.", pt: "Eu sempre pratico de manhã." },
            { en: "She never works at the weekend.", pt: "Ela nunca trabalha no fim de semana." },
            { en: "He is usually busy on Monday.", pt: "Ele geralmente está ocupado na segunda." },
          ],
          rule: {
            en: "Put always, usually, often, sometimes, rarely and never before the main verb, but after the verb to be: I never work / I am never late.",
            pt: "Coloque always, usually, often, sometimes, rarely e never antes do verbo principal, mas depois do verbo to be: I never work / I am never late.",
          },
          mistakes: [
            { en: "I practice always in the morning. → I always practice in the morning.", pt: "O advérbio vem antes do verbo principal." },
            { en: "She never is late. → She is never late.", pt: "Com to be, o advérbio vem depois." },
          ],
        },
        {
          title: { en: "How often? and frequency expressions", pt: "How often? e expressões de frequência" },
          examples: [
            { en: "How often do you travel?", pt: "Com que frequência você viaja?" },
            { en: "Twice a year.", pt: "Duas vezes por ano." },
            { en: "We meet three times a month.", pt: "Nós nos encontramos três vezes por mês." },
          ],
          rule: {
            en: "Ask with How often + do / does + subject + base verb. Answer with once, twice or a number + times + a week / a month / a year. These expressions go at the end of the sentence.",
            pt: "Pergunte com How often + do / does + sujeito + verbo base. Responda com once, twice ou um número + times + a week / a month / a year. Essas expressões vêm no fim da frase.",
          },
          mistakes: [
            { en: "Two times a week I go. → I go twice a week.", pt: "Prefira twice e deixe a expressão no fim." },
            { en: "How often you study? → How often do you study?", pt: "A pergunta precisa de do." },
          ],
        },
      ],
      controlledPractice: [
        {
          id: "b10d-cp1",
          prompt: { en: "Choose the correct order.", pt: "Escolha a ordem correta." },
          options: ["I always study at night.", "I study always at night.", "Always I study at night."],
          answer: "I always study at night.",
          explanation: { en: "Adverb before the main verb.", pt: "Advérbio antes do verbo principal." },
        },
        {
          id: "b10d-cp2",
          prompt: { en: "Choose the correct sentence with to be.", pt: "Escolha a frase correta com to be." },
          options: ["He never is late.", "He is never late.", "He is late never."],
          answer: "He is never late.",
          explanation: { en: "After to be.", pt: "Depois do to be." },
        },
        {
          id: "b10d-cp3",
          prompt: { en: "Complete: How often ___ she practice?", pt: "Complete: How often ___ she practice?" },
          options: ["do", "does", "is"],
          answer: "does",
          explanation: { en: "she + does.", pt: "she + does." },
        },
        {
          id: "b10d-cp4",
          prompt: { en: "Two times a week is:", pt: "Duas vezes por semana é:" },
          options: ["once a week", "twice a week", "every day"],
          answer: "twice a week",
          explanation: { en: "twice = two times.", pt: "twice = duas vezes." },
        },
        {
          id: "b10d-cp5",
          prompt: { en: "Which adverb means 'almost never'?", pt: "Qual advérbio significa 'quase nunca'?" },
          options: ["usually", "rarely", "often"],
          answer: "rarely",
          explanation: { en: "rarely = almost never.", pt: "rarely = quase nunca." },
        },
      ],
      input: {
        kind: "listening",
        title: { en: "Listening — How often do they do it?", pt: "Listening — Com que frequência eles fazem?" },
        lines: [
          { en: "I always have breakfast at home, but I sometimes eat lunch at the office.", pt: "Eu sempre tomo café da manhã em casa, mas às vezes almoço no escritório." },
          { en: "Helena practices speaking three times a week and she never studies on Sunday.", pt: "Helena pratica conversação três vezes por semana e nunca estuda no domingo." },
          { en: "Bruno hardly ever watches TV, but he listens to podcasts every day.", pt: "Bruno quase nunca assiste TV, mas ouve podcasts todo dia." },
        ],
        questions: [
          {
            id: "b10d-r1",
            prompt: { en: "How often does the first person eat lunch at the office?", pt: "Com que frequência a primeira pessoa almoça no escritório?" },
            options: ["sometimes", "always", "never"],
            answer: "sometimes",
            explanation: { en: "I sometimes eat lunch at the office.", pt: "I sometimes eat lunch at the office." },
          },
          {
            id: "b10d-r2",
            prompt: { en: "How often does Helena practice speaking?", pt: "Com que frequência Helena pratica conversação?" },
            options: ["three times a week", "once a month", "every day"],
            answer: "three times a week",
            explanation: { en: "three times a week.", pt: "three times a week." },
          },
          {
            id: "b10d-r3",
            prompt: { en: "What does Bruno do every day?", pt: "O que Bruno faz todo dia?" },
            options: ["he listens to podcasts", "he watches TV", "he studies at night"],
            answer: "he listens to podcasts",
            explanation: { en: "he listens to podcasts every day.", pt: "he listens to podcasts every day." },
          },
        ],
      },
      quickCheck: [
        {
          id: "b10d-qc1",
          prompt: { en: "Choose the correct sentence.", pt: "Escolha a frase correta." },
          options: ["She usually is tired.", "She is usually tired.", "Usually she is tired always."],
          answer: "She is usually tired.",
          explanation: { en: "After to be.", pt: "Depois do to be." },
        },
        {
          id: "b10d-qc2",
          prompt: { en: "Complete: We meet ___ a month.", pt: "Complete: We meet ___ a month." },
          options: ["twice", "two", "second"],
          answer: "twice",
          explanation: { en: "twice a month.", pt: "twice a month." },
        },
        {
          id: "b10d-qc3",
          prompt: { en: "Which question asks about frequency?", pt: "Qual pergunta é sobre frequência?" },
          options: ["How often do you travel?", "Where do you travel?", "When is your trip?"],
          answer: "How often do you travel?",
          explanation: { en: "How often asks about frequency.", pt: "How often pergunta a frequência." },
        },
        {
          id: "b10d-qc4",
          prompt: { en: "Order from more to less: always, never, sometimes.", pt: "Ordene de mais para menos: always, never, sometimes." },
          options: ["always, sometimes, never", "never, always, sometimes", "sometimes, never, always"],
          answer: "always, sometimes, never",
          explanation: { en: "100% → 50% → 0%.", pt: "100% → 50% → 0%." },
        },
      ],
    },
    communicate: {
      id: "BEGINNER-U10-COMMUNICATE",
      review: [
        { en: "Adverb before the main verb, after to be.", pt: "Advérbio antes do verbo principal, depois do to be." },
        { en: "once / twice / three times a week.", pt: "once / twice / three times a week." },
        { en: "Question: How often do you...?", pt: "Pergunta: How often do you...?" },
      ],
      activities: [
        {
          id: "b10c-a1",
          title: { en: "My week in frequency", pt: "Minha semana em frequência" },
          instruction: {
            en: "Say six sentences about your week, using a different frequency adverb in each one.",
            pt: "Diga seis frases sobre sua semana, usando um advérbio de frequência diferente em cada uma.",
          },
          phrases: [
            { en: "I always check my schedule on Monday.", pt: "Eu sempre confiro minha agenda na segunda." },
            { en: "I rarely work after eight in the evening.", pt: "Eu raramente trabalho depois das oito da noite." },
          ],
          check: [
            {
              id: "b10c-a1q1",
              prompt: { en: "Complete: I ___ study before breakfast.", pt: "Complete: I ___ study before breakfast." },
              options: ["study never", "never study", "never am study"],
              answer: "never study",
              explanation: { en: "Adverb before the verb.", pt: "Advérbio antes do verbo." },
            },
          ],
        },
        {
          id: "b10c-a2",
          title: { en: "How often do you...?", pt: "Com que frequência você...?" },
          instruction: {
            en: "Ask four How often questions and answer with a frequency expression.",
            pt: "Faça quatro perguntas com How often e responda com uma expressão de frequência.",
          },
          phrases: [
            { en: "How often do you speak English at work?", pt: "Com que frequência você fala inglês no trabalho?" },
            { en: "Twice a week, usually in meetings.", pt: "Duas vezes por semana, geralmente em reuniões." },
          ],
          check: [
            {
              id: "b10c-a2q1",
              prompt: { en: "Complete: How often ___ he travel?", pt: "Complete: How often ___ he travel?" },
              options: ["do", "does", "is"],
              answer: "does",
              explanation: { en: "he + does.", pt: "he + does." },
            },
          ],
        },
        {
          id: "b10c-a3",
          title: { en: "Compare two routines", pt: "Compare duas rotinas" },
          instruction: {
            en: "Compare your habits with another person's habits, using but and frequency words.",
            pt: "Compare seus hábitos com os de outra pessoa, usando but e palavras de frequência.",
          },
          phrases: [
            { en: "I always practice in the morning, but she usually practices at night.", pt: "Eu sempre pratico de manhã, mas ela geralmente pratica à noite." },
            { en: "We both hardly ever study at the weekend.", pt: "Nós dois quase nunca estudamos no fim de semana." },
          ],
          check: [
            {
              id: "b10c-a3q1",
              prompt: { en: "Choose the correct comparison.", pt: "Escolha a comparação correta." },
              options: [
                "I often cook, but he never cooks.",
                "I cook often, but he cooks never.",
                "Often I cook, but never he cook.",
              ],
              answer: "I often cook, but he never cooks.",
              explanation: { en: "Adverb before the verb, third person with -s.", pt: "Advérbio antes do verbo, terceira pessoa com -s." },
            },
          ],
        },
      ],
      challenge: {
        id: "b10c-challenge",
        title: { en: "Communication Challenge — Four habits compared", pt: "Desafio de comunicação — Quatro hábitos comparados" },
        instruction: {
          en: "Compare four habits of yours with someone else's, using frequency adverbs and expressions.",
          pt: "Compare quatro hábitos seus com os de outra pessoa, usando advérbios e expressões de frequência.",
        },
        phrases: [
          { en: "I always wake up early, but my brother usually wakes up at nine.", pt: "Eu sempre acordo cedo, mas meu irmão geralmente acorda às nove." },
          { en: "She studies twice a week and I study every day.", pt: "Ela estuda duas vezes por semana e eu estudo todo dia." },
          { en: "We rarely travel in winter, but they often travel in July.", pt: "Nós raramente viajamos no inverno, mas eles viajam com frequência em julho." },
          { en: "He hardly ever cooks, and I never order food at night.", pt: "Ele quase nunca cozinha, e eu nunca peço comida à noite." },
        ],
        check: [
          {
            id: "b10c-ch1",
            prompt: { en: "Which sentence has NO mistake?", pt: "Qual frase NÃO tem erro?" },
            options: ["He never is at home.", "She always is busy.", "They are always on time."],
            answer: "They are always on time.",
            explanation: { en: "With to be, the adverb comes after.", pt: "Com to be, o advérbio vem depois." },
          },
          {
            id: "b10c-ch2",
            prompt: { en: "Answer: How often do you practice English?", pt: "Responda: How often do you practice English?" },
            options: ["In the office.", "Three times a week.", "Because I like it."],
            answer: "Three times a week.",
            explanation: { en: "The question asks about frequency.", pt: "A pergunta é sobre frequência." },
          },
        ],
      },
      lessonReview: {
        summary: {
          en: "You said how often you do things and compared your habits with someone else's.",
          pt: "Você disse com que frequência faz as coisas e comparou seus hábitos com os de outra pessoa.",
        },
        canDo: [
          { en: "I can use six frequency adverbs correctly.", pt: "Consigo usar seis advérbios de frequência corretamente." },
          { en: "I can ask and answer How often questions.", pt: "Consigo perguntar e responder com How often." },
          { en: "I can compare two routines.", pt: "Consigo comparar duas rotinas." },
        ],
        next: {
          en: "Next: a checkpoint to put Units 1–10 together in one conversation.",
          pt: "Próximo: um checkpoint para juntar as Unidades 1–10 em uma conversa.",
        },
      },
    },
  }
];
