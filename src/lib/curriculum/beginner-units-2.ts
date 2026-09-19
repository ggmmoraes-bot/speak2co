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
