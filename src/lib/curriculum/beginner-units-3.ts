import type { CourseUnit } from "./types";

/** Speak2Co — Beginner English Course (A1). Units 11–20 do currículo oficial. */
export const BEGINNER_UNITS_11_20: CourseUnit[] = [
  {
    code: "BEGINNER-U11",
    number: 11,
    title: "Checkpoint — Everyday Me",
    titlePt: "Checkpoint — Meu dia a dia",
    cefr: "A1",
    objective: {
      en: "Put Units 1–10 together: introduce yourself, describe your routine and ask about someone else's.",
      pt: "Juntar as Unidades 1–10: se apresentar, descrever sua rotina e perguntar sobre a de outra pessoa.",
    },
    communicationGoal: {
      en: "You can hold a guided two-minute conversation about who you are and what you do every week.",
      pt: "Você consegue manter uma conversa guiada de dois minutos sobre quem você é e o que faz toda semana.",
    },
    prerequisites: {
      en: "Units 1–10 — to be, present simple, negatives, questions and frequency.",
      pt: "Unidades 1–10 — to be, present simple, negativas, perguntas e frequência.",
    },
    newContent: {
      en: "No new grammar: this unit consolidates everything with longer turns and linking words and, but, because.",
      pt: "Sem gramática nova: esta unidade consolida tudo com falas mais longas e conectivos and, but, because.",
    },
    reviewContent: {
      en: "Full review of Units 1–10: identity, family, objects, numbers, routine, times, negatives, questions and frequency.",
      pt: "Revisão completa das Unidades 1–10: identidade, família, objetos, números, rotina, horários, negativas, perguntas e frequência.",
    },
    discover: {
      id: "BEGINNER-U11-DISCOVER",
      warmUp: {
        prompt: {
          en: "Look at the picture. Three colleagues are talking at the end of the week. What do they say about their week?",
          pt: "Observe a imagem. Três colegas conversam no fim da semana. O que eles dizem sobre a semana?",
        },
        phrases: [
          { en: "My name is Bruno and I work in a coworking space.", pt: "Meu nome é Bruno e eu trabalho em um coworking." },
          { en: "I usually start at nine, but on Friday I start later.", pt: "Eu geralmente começo às nove, mas na sexta começo mais tarde." },
          { en: "I study English because I want a new job.", pt: "Eu estudo inglês porque quero um trabalho novo." },
        ],
      },
      context: {
        situation: {
          en: "Helena introduces Bruno to a new member of the coworking space, and they compare weeks.",
          pt: "Helena apresenta Bruno a um novo membro do coworking, e eles comparam as semanas.",
        },
        dialogue: [
          { who: "Helena", en: "Ivan, this is Bruno. He works here three days a week.", pt: "Ivan, este é o Bruno. Ele trabalha aqui três dias por semana." },
          { who: "Ivan", en: "Nice to meet you, Bruno. Where do you live?", pt: "Prazer, Bruno. Onde você mora?" },
          { who: "Bruno", en: "I live near the station, so I usually walk here.", pt: "Eu moro perto da estação, então geralmente venho a pé." },
          { who: "Ivan", en: "Do you work on Saturday?", pt: "Você trabalha no sábado?" },
          { who: "Bruno", en: "No, I don't. I never work at the weekend because I study English.", pt: "Não. Eu nunca trabalho no fim de semana porque estudo inglês." },
          { who: "Helena", en: "He has two classes a week, and he always does the homework.", pt: "Ele tem duas aulas por semana, e sempre faz a lição de casa." },
          { who: "Ivan", en: "That is great. I hardly ever practice, but I want to start.", pt: "Que ótimo. Eu quase nunca pratico, mas quero começar." },
        ],
      },
      vocabulary: [
        { term: "colleague", pt: "colega de trabalho", ipa: "/ˈkɑːliːɡ/", definition: "A person you work with.", example: "My colleague speaks English well.", examplePt: "Meu colega fala inglês bem." },
        { term: "routine", pt: "rotina", ipa: "/ruːˈtiːn/", definition: "The things you do regularly.", example: "My routine is simple.", examplePt: "Minha rotina é simples." },
        { term: "because", pt: "porque", ipa: "/bɪˈkɔːz/", definition: "Used to give a reason.", example: "I study because I want a new job.", examplePt: "Eu estudo porque quero um trabalho novo." },
        { term: "so", pt: "então, por isso", ipa: "/soʊ/", definition: "Used to give a result.", example: "I live near, so I walk.", examplePt: "Eu moro perto, então vou a pé." },
        { term: "homework", pt: "lição de casa", ipa: "/ˈhoʊmwɜːrk/", definition: "Work you do at home for a class.", example: "I do my homework at night.", examplePt: "Eu faço a lição de casa à noite." },
        { term: "class", pt: "aula", ipa: "/klæs/", definition: "A lesson with a teacher.", example: "I have two classes a week.", examplePt: "Eu tenho duas aulas por semana." },
        { term: "week", pt: "semana", ipa: "/wiːk/", definition: "Seven days.", example: "This week is busy.", examplePt: "Esta semana está cheia." },
        { term: "near", pt: "perto", ipa: "/nɪr/", definition: "Not far away.", example: "I live near the station.", examplePt: "Eu moro perto da estação." },
        { term: "station", pt: "estação", ipa: "/ˈsteɪʃn/", definition: "A place where trains or buses stop.", example: "The station is behind the building.", examplePt: "A estação fica atrás do prédio." },
        { term: "member", pt: "membro", ipa: "/ˈmembər/", definition: "A person who belongs to a group or place.", example: "He is a new member here.", examplePt: "Ele é um novo membro aqui." },
      ],
      expressions: [
        { en: "Nice to meet you.", pt: "Prazer em conhecer você." },
        { en: "Let me tell you about my week.", pt: "Deixa eu te contar sobre a minha semana." },
        { en: "And what about you?", pt: "E você?" },
        { en: "That is great.", pt: "Que ótimo." },
      ],
      grammar: [
        {
          title: { en: "Putting it together: to be and present simple", pt: "Juntando tudo: to be e present simple" },
          examples: [
            { en: "I am Bruno and I work here.", pt: "Eu sou o Bruno e trabalho aqui." },
            { en: "She is a teacher and she teaches at night.", pt: "Ela é professora e dá aula à noite." },
            { en: "They are colleagues and they live near the office.", pt: "Eles são colegas e moram perto do escritório." },
          ],
          rule: {
            en: "Use to be for identity and description, and the present simple for habits. Remember the -s for he, she and it.",
            pt: "Use to be para identidade e descrição, e o present simple para hábitos. Lembre do -s para he, she e it.",
          },
          mistakes: [
            { en: "I am work here. → I work here.", pt: "Não use to be antes de um verbo de ação no present simple." },
            { en: "She teach at night. → She teaches at night.", pt: "Terceira pessoa precisa de -s / -es." },
          ],
        },
        {
          title: { en: "Linking ideas with and, but, because and so", pt: "Ligando ideias com and, but, because e so" },
          examples: [
            { en: "I work here and I study at home.", pt: "Eu trabalho aqui e estudo em casa." },
            { en: "I like Monday, but I don't like Friday.", pt: "Eu gosto de segunda, mas não gosto de sexta." },
            { en: "I study English because I want a new job.", pt: "Eu estudo inglês porque quero um trabalho novo." },
          ],
          rule: {
            en: "Use and to add, but to contrast, because to give a reason and so to give a result. Each one joins two complete sentences.",
            pt: "Use and para somar, but para contrastar, because para dar um motivo e so para dar um resultado. Cada um liga duas frases completas.",
          },
          mistakes: [
            { en: "I study because of I want a job. → I study because I want a job.", pt: "because vem antes de uma frase completa." },
            { en: "I like coffee, but I like tea. → I like coffee, but I don't like tea.", pt: "but precisa de um contraste real." },
          ],
        },
      ],
      controlledPractice: [
        {
          id: "b11d-cp1",
          prompt: { en: "Complete: I ___ a student and I ___ every day.", pt: "Complete: I ___ a student and I ___ every day." },
          options: ["am / study", "am / am study", "study / am"],
          answer: "am / study",
          explanation: { en: "to be for identity, present simple for the habit.", pt: "to be para identidade, present simple para o hábito." },
        },
        {
          id: "b11d-cp2",
          prompt: { en: "Choose the correct linking word: I walk to work ___ I live near.", pt: "Escolha o conectivo: I walk to work ___ I live near." },
          options: ["but", "because", "so"],
          answer: "because",
          explanation: { en: "It gives the reason.", pt: "Dá o motivo." },
        },
        {
          id: "b11d-cp3",
          prompt: { en: "Complete: She ___ work on Sunday.", pt: "Complete: She ___ work on Sunday." },
          options: ["doesn't", "don't", "isn't"],
          answer: "doesn't",
          explanation: { en: "she + doesn't + base verb.", pt: "she + doesn't + verbo base." },
        },
        {
          id: "b11d-cp4",
          prompt: { en: "Complete: ___ you have a class today?", pt: "Complete: ___ you have a class today?" },
          options: ["Do", "Does", "Are"],
          answer: "Do",
          explanation: { en: "you + Do.", pt: "you + Do." },
        },
        {
          id: "b11d-cp5",
          prompt: { en: "Choose the correct order.", pt: "Escolha a ordem correta." },
          options: ["He always is on time.", "He is always on time.", "Always he is on time."],
          answer: "He is always on time.",
          explanation: { en: "The adverb comes after to be.", pt: "O advérbio vem depois do to be." },
        },
      ],
      input: {
        kind: "reading",
        title: { en: "Reading — A week in three lines", pt: "Reading — Uma semana em três linhas" },
        lines: [
          { en: "My name is Helena. I am a designer and I work in a coworking space near the station.", pt: "Meu nome é Helena. Sou designer e trabalho em um coworking perto da estação." },
          { en: "I start at nine and I usually finish at six, but on Friday I finish at four.", pt: "Eu começo às nove e geralmente termino às seis, mas na sexta termino às quatro." },
          { en: "I don't work at the weekend because I have two English classes and I always do my homework.", pt: "Eu não trabalho no fim de semana porque tenho duas aulas de inglês e sempre faço minha lição." },
        ],
        questions: [
          {
            id: "b11d-r1",
            prompt: { en: "What is Helena's job?", pt: "Qual é o trabalho da Helena?" },
            options: ["designer", "teacher", "doctor"],
            answer: "designer",
            explanation: { en: "I am a designer.", pt: "I am a designer." },
          },
          {
            id: "b11d-r2",
            prompt: { en: "When does she finish on Friday?", pt: "Quando ela termina na sexta?" },
            options: ["at four", "at six", "at nine"],
            answer: "at four",
            explanation: { en: "on Friday I finish at four.", pt: "on Friday I finish at four." },
          },
          {
            id: "b11d-r3",
            prompt: { en: "Why doesn't she work at the weekend?", pt: "Por que ela não trabalha no fim de semana?" },
            options: ["because she has English classes", "because she travels", "because she is tired"],
            answer: "because she has English classes",
            explanation: { en: "because I have two English classes.", pt: "because I have two English classes." },
          },
        ],
      },
      quickCheck: [
        {
          id: "b11d-qc1",
          prompt: { en: "Choose the sentence with NO mistake.", pt: "Escolha a frase sem erro." },
          options: ["I am live near here.", "I live near here.", "I lives near here."],
          answer: "I live near here.",
          explanation: { en: "Present simple with I.", pt: "Present simple com I." },
        },
        {
          id: "b11d-qc2",
          prompt: { en: "Complete: He works a lot, ___ he is never tired.", pt: "Complete: He works a lot, ___ he is never tired." },
          options: ["but", "because", "and so"],
          answer: "but",
          explanation: { en: "It shows contrast.", pt: "Mostra contraste." },
        },
        {
          id: "b11d-qc3",
          prompt: { en: "Which answer fits 'How often do you study?'", pt: "Qual resposta cabe em 'How often do you study?'" },
          options: ["At home.", "Four times a week.", "With my colleague."],
          answer: "Four times a week.",
          explanation: { en: "The question asks about frequency.", pt: "A pergunta é sobre frequência." },
        },
        {
          id: "b11d-qc4",
          prompt: { en: "Complete the introduction: ___ to meet you.", pt: "Complete a apresentação: ___ to meet you." },
          options: ["Nice", "Good", "Fine"],
          answer: "Nice",
          explanation: { en: "Nice to meet you.", pt: "Nice to meet you." },
        },
      ],
    },
    communicate: {
      id: "BEGINNER-U11-COMMUNICATE",
      review: [
        { en: "Identity: I am... / I work... / I live...", pt: "Identidade: I am... / I work... / I live..." },
        { en: "Routine and frequency: I usually... / twice a week.", pt: "Rotina e frequência: I usually... / twice a week." },
        { en: "Questions: Do you...? Does he...? How often...?", pt: "Perguntas: Do you...? Does he...? How often...?" },
        { en: "Linking: and, but, because, so.", pt: "Conectivos: and, but, because, so." },
      ],
      activities: [
        {
          id: "b11c-a1",
          title: { en: "Introduce yourself in five lines", pt: "Apresente-se em cinco linhas" },
          instruction: {
            en: "Say five sentences: name, job or studies, where you live, one habit and one frequency.",
            pt: "Diga cinco frases: nome, trabalho ou estudos, onde mora, um hábito e uma frequência.",
          },
          phrases: [
            { en: "My name is Ana and I am an assistant.", pt: "Meu nome é Ana e sou assistente." },
            { en: "I live near the centre and I usually take the bus.", pt: "Eu moro perto do centro e geralmente pego o ônibus." },
          ],
          check: [
            {
              id: "b11c-a1q1",
              prompt: { en: "Complete: I ___ an assistant and I ___ in the centre.", pt: "Complete: I ___ an assistant and I ___ in the centre." },
              options: ["am / work", "am / am work", "work / am"],
              answer: "am / work",
              explanation: { en: "to be + present simple.", pt: "to be + present simple." },
            },
          ],
        },
        {
          id: "b11c-a2",
          title: { en: "Ask about their week", pt: "Pergunte sobre a semana da pessoa" },
          instruction: {
            en: "Ask four questions about someone's week and react to each answer.",
            pt: "Faça quatro perguntas sobre a semana de alguém e reaja a cada resposta.",
          },
          phrases: [
            { en: "Do you work every day? And what about the weekend?", pt: "Você trabalha todo dia? E o fim de semana?" },
            { en: "How often does your team meet?", pt: "Com que frequência seu time se reúne?" },
          ],
          check: [
            {
              id: "b11c-a2q1",
              prompt: { en: "Choose the correct question.", pt: "Escolha a pergunta correta." },
              options: ["How often your team meets?", "How often does your team meet?", "How often do your team meets?"],
              answer: "How often does your team meet?",
              explanation: { en: "does + base verb.", pt: "does + verbo base." },
            },
          ],
        },
        {
          id: "b11c-a3",
          title: { en: "Correct the mistakes", pt: "Corrija os erros" },
          instruction: {
            en: "Listen to three sentences with mistakes from Units 1–10 and say the correct version.",
            pt: "Ouça três frases com erros das Unidades 1–10 e diga a versão correta.",
          },
          phrases: [
            { en: "She doesn't works here. → She doesn't work here.", pt: "She doesn't works here. → She doesn't work here." },
            { en: "I practice always at night. → I always practice at night.", pt: "I practice always at night. → I always practice at night." },
          ],
          check: [
            {
              id: "b11c-a3q1",
              prompt: { en: "Correct this: Do she like coffee?", pt: "Corrija: Do she like coffee?" },
              options: ["Does she like coffee?", "Does she likes coffee?", "Do she likes coffee?"],
              answer: "Does she like coffee?",
              explanation: { en: "she + Does + base verb.", pt: "she + Does + verbo base." },
            },
          ],
        },
      ],
      challenge: {
        id: "b11c-challenge",
        title: { en: "Communication Challenge — Two-minute conversation", pt: "Desafio de comunicação — Conversa de dois minutos" },
        instruction: {
          en: "Hold a guided conversation: introduce yourself, describe your week, ask two questions and close politely.",
          pt: "Mantenha uma conversa guiada: apresente-se, descreva sua semana, faça duas perguntas e encerre com educação.",
        },
        phrases: [
          { en: "Hi, my name is Marcos. Nice to meet you.", pt: "Oi, meu nome é Marcos. Prazer em conhecer você." },
          { en: "I work in a small office and I study English twice a week.", pt: "Eu trabalho em um escritório pequeno e estudo inglês duas vezes por semana." },
          { en: "I don't work on Sunday because I visit my family.", pt: "Eu não trabalho no domingo porque visito minha família." },
          { en: "And what about you? How often do you practice?", pt: "E você? Com que frequência você pratica?" },
        ],
        check: [
          {
            id: "b11c-ch1",
            prompt: { en: "Which sentence links two ideas correctly?", pt: "Qual frase liga duas ideias corretamente?" },
            options: [
              "I stay home because of it rains.",
              "I stay home because it rains.",
              "I stay home, because rains.",
            ],
            answer: "I stay home because it rains.",
            explanation: { en: "because + complete sentence.", pt: "because + frase completa." },
          },
          {
            id: "b11c-ch2",
            prompt: { en: "Choose a polite way to close a conversation.", pt: "Escolha uma forma educada de encerrar a conversa." },
            options: ["It was nice to meet you.", "Finish now.", "No more questions."],
            answer: "It was nice to meet you.",
            explanation: { en: "It closes politely.", pt: "Encerra com educação." },
          },
        ],
      },
      lessonReview: {
        summary: {
          en: "You brought Units 1–10 together in one real conversation about your everyday life.",
          pt: "Você juntou as Unidades 1–10 em uma conversa real sobre o seu dia a dia.",
        },
        canDo: [
          { en: "I can introduce myself and describe my week.", pt: "Consigo me apresentar e descrever minha semana." },
          { en: "I can ask and answer questions about routine and frequency.", pt: "Consigo perguntar e responder sobre rotina e frequência." },
          { en: "I can link ideas with and, but, because and so.", pt: "Consigo ligar ideias com and, but, because e so." },
        ],
        next: {
          en: "Next block: the world around me — places, weather and directions.",
          pt: "Próximo bloco: o mundo ao meu redor — lugares, clima e direções.",
        },
      },
    },
  },
];
