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
  {
    "code": "BEGINNER-U12",
    "number": 12,
    "title": "Abilities and Present Continuous",
    "titlePt": "Habilidades e Present Continuous",
    "cefr": "A1",
    "objective": {
      "en": "Teach abilities and Present Continuous — negative/interrogative, and contrast with Simple Present in context.",
      "pt": "Ensinar habilidades e o Present Continuous — negativo/interrogativo, e contrastar com o Simple Present de forma contextualizada."
    },
    "communicationGoal": {
      "en": "Students will be able to use 'past experiences' and 'abilities' vocabulary to communicate in real situations.",
      "pt": "O aluno será capaz de usar 'experiências passadas' e o vocabulário de habilidades para se comunicar em situações reais."
    },
    "prerequisites": {
      "en": "Structure: Present Continuous (affirmative) for actions happening now. Vocabulary: Weather, Seasons.",
      "pt": "Estrutura: Present Continuous (afirmativo) para ações acontecendo agora. Vocabulário: Clima, Estações."
    },
    "newContent": {
      "en": "Grammar: Present Continuous — negative/interrogative, and contrast with Simple Present. | Vocabulary: Abilities (10 lexical items) | Expressions: Past Experiences",
      "pt": "Gramática: Present Continuous — negativo/interrogativo, e contraste com o Simple Present. | Vocabulário: Habilidades (10 itens lexicais) | Expressões: Experiências Passadas"
    },
    "reviewContent": {
      "en": "Spiral review: Simple Present — negative (don't/doesn't) and interrogative (do/does) forms (Unit 7). Vocabulary review: Family (Unit 2).",
      "pt": "Revisão em espiral: Simple Present — negativo (don't/doesn't) e interrogativo (do/does) (Unidade 7). Revisão de vocabulário: Família (Unidade 2)."
    },
    "discover": {
      "id": "BEGINNER-U12-DISCOVER",
      "warmUp": {
        "prompt": {
          "en": "Look at the pictures. What can these people do? What are you doing now?",
          "pt": "Olhe as fotos. O que essas pessoas podem fazer? O que você está fazendo agora?"
        },
        "phrases": [
          {
            "en": "She is singing.",
            "pt": "Ela está cantando."
          },
          {
            "en": "He is playing soccer.",
            "pt": "Ele está jogando futebol."
          },
          {
            "en": "They are dancing.",
            "pt": "Eles estão dançando."
          },
          {
            "en": "What are you doing now?",
            "pt": "O que você está fazendo agora?"
          }
        ]
      },
      "context": {
        "situation": {
          "en": "Julia is talking to her friend, Lucas, about their day and their abilities.",
          "pt": "Julia está conversando com seu amigo, Lucas, sobre o dia deles e suas habilidades."
        },
        "dialogue": [
          {
            "who": "Lucas",
            "en": "Hi Julia! What are you doing?",
            "pt": "Oi Julia! O que você está fazendo?"
          },
          {
            "who": "Julia",
            "en": "Hi Lucas! I'm studying English. I visited Rio last year, and I want to speak better.",
            "pt": "Oi Lucas! Estou estudando inglês. Eu visitei o Rio ano passado, e quero falar melhor."
          },
          {
            "who": "Lucas",
            "en": "That's great! Do you like to speak English?",
            "pt": "Que ótimo! Você gosta de falar inglês?"
          },
          {
            "who": "Julia",
            "en": "Yes, I do! And you? What are you doing these days?",
            "pt": "Sim, eu gosto! E você? O que você está fazendo ultimamente?"
          },
          {
            "who": "Lucas",
            "en": "I'm learning to code! It's difficult, but I like it. I'm not playing guitar now.",
            "pt": "Estou aprendendo a programar! É difícil, mas eu gosto. Eu não estou tocando violão agora."
          },
          {
            "who": "Julia",
            "en": "Oh, you can code? That's cool! Can you drive a car?",
            "pt": "Ah, você sabe programar? Que legal! Você sabe dirigir?"
          },
          {
            "who": "Lucas",
            "en": "Yes, I can drive! I drive to work every day. But I can't swim very well. And you, Julia, can you cook?",
            "pt": "Sim, eu sei dirigir! Eu dirijo para o trabalho todos os dias. Mas eu não sei nadar muito bem. E você, Julia, sabe cozinhar?"
          },
          {
            "who": "Julia",
            "en": "No, I can't cook well. But I can paint! I saw a great movie last week about a painter.",
            "pt": "Não, eu não sei cozinhar bem. Mas eu sei pintar! Eu vi um ótimo filme semana passada sobre um pintor."
          },
          {
            "who": "Lucas",
            "en": "Nice! My sister is dancing now. She loves it. We met my best friend in school.",
            "pt": "Legal! Minha irmã está dançando agora. Ela adora. Nós conhecemos meu melhor amigo na escola."
          }
        ]
      },
      "vocabulary": [
        {
          "term": "swim",
          "pt": "nadar",
          "ipa": "/swɪm/",
          "definition": "To move through water by moving your body.",
          "example": "Can you swim?",
          "examplePt": "Você sabe nadar?"
        },
        {
          "term": "drive",
          "pt": "dirigir",
          "ipa": "/draɪv/",
          "definition": "To operate a car, bus, or other vehicle.",
          "example": "He can drive a car.",
          "examplePt": "Ele sabe dirigir um carro."
        },
        {
          "term": "cook",
          "pt": "cozinhar",
          "ipa": "/kʊk/",
          "definition": "To prepare food by heating it.",
          "example": "My mom loves to cook dinner.",
          "examplePt": "Minha mãe adora cozinhar o jantar."
        },
        {
          "term": "play an instrument",
          "pt": "tocar um instrumento",
          "ipa": "/pleɪ ən ˈɪnstrəmənt/",
          "definition": "To make music using a musical instrument.",
          "example": "She can play the guitar.",
          "examplePt": "Ela sabe tocar violão."
        },
        {
          "term": "speak a language",
          "pt": "falar um idioma",
          "ipa": "/spiːk ə ˈlæŋɡwɪdʒ/",
          "definition": "To communicate using words in a specific language.",
          "example": "I can speak Portuguese and English.",
          "examplePt": "Eu sei falar português e inglês."
        },
        {
          "term": "dance",
          "pt": "dançar",
          "ipa": "/dæns/",
          "definition": "To move your body rhythmically to music.",
          "example": "They are dancing now.",
          "examplePt": "Eles estão dançando agora."
        },
        {
          "term": "paint",
          "pt": "pintar",
          "ipa": "/peɪnt/",
          "definition": "To create pictures with paint.",
          "example": "My friend can paint beautiful pictures.",
          "examplePt": "Meu amigo sabe pintar lindas figuras."
        },
        {
          "term": "code",
          "pt": "programar",
          "ipa": "/koʊd/",
          "definition": "To write computer programs.",
          "example": "He is learning to code.",
          "examplePt": "Ele está aprendendo a programar."
        },
        {
          "term": "sing",
          "pt": "cantar",
          "ipa": "/sɪŋ/",
          "definition": "To make musical sounds with your voice.",
          "example": "She loves to sing in the shower.",
          "examplePt": "Ela adora cantar no chuveiro."
        },
        {
          "term": "ride a bike",
          "pt": "andar de bicicleta",
          "ipa": "/raɪd ə baɪk/",
          "definition": "To travel on a bicycle.",
          "example": "Can you ride a bike?",
          "examplePt": "Você sabe andar de bicicleta?"
        }
      ],
      "expressions": [
        {
          "en": "I visited Rio last year.",
          "pt": "Eu visitei o Rio ano passado."
        },
        {
          "en": "I saw a great movie last week.",
          "pt": "Eu vi um ótimo filme semana passada."
        },
        {
          "en": "I met my best friend in school.",
          "pt": "Eu conheci meu melhor amigo na escola."
        }
      ],
      "grammar": [
        {
          "title": {
            "en": "Present Continuous: Negative and Interrogative",
            "pt": "Present Continuous: Negativo e Interrogativo"
          },
          "examples": [
            {
              "en": "I'm not working today.",
              "pt": "Eu não estou trabalhando hoje."
            },
            {
              "en": "What are you doing this weekend?",
              "pt": "O que você está fazendo neste fim de semana?"
            },
            {
              "en": "Is she playing an instrument right now? No, she isn't.",
              "pt": "Ela está tocando um instrumento agora? Não, ela não está."
            }
          ],
          "rule": {
            "en": "Use 'subject + am/is/are + not + verb-ing' for negative sentences. Use 'Am/Is/Are + subject + verb-ing + ?' for questions.",
            "pt": "Use 'sujeito + am/is/are + not + verbo-ing' para frases negativas. Use 'Am/Is/Are + sujeito + verbo-ing + ?' para perguntas."
          },
          "mistakes": [
            {
              "en": "Incorrect: He no is playing. Correct: He isn't playing.",
              "pt": "Incorreto: Ele não está jogando. Correto: Ele não está jogando."
            },
            {
              "en": "Incorrect: What you are doing? Correct: What are you doing?",
              "pt": "Incorreto: O que você está fazendo? Correto: O que você está fazendo?"
            }
          ]
        },
        {
          "title": {
            "en": "Present Continuous vs. Simple Present",
            "pt": "Present Continuous vs. Simple Present"
          },
          "examples": [
            {
              "en": "I am studying English now. (Present Continuous - action happening now)",
              "pt": "Eu estou estudando inglês agora. (Present Continuous - ação acontecendo agora)"
            },
            {
              "en": "I study English every day. (Simple Present - routine/habit)",
              "pt": "Eu estudo inglês todos os dias. (Simple Present - rotina/hábito)"
            },
            {
              "en": "She isn't cooking today. She cooks on weekends. (Contrast)",
              "pt": "Ela não está cozinhando hoje. Ela cozinha nos fins de semana. (Contraste)"
            }
          ],
          "rule": {
            "en": "Use Present Continuous for actions happening at the moment of speaking or temporary actions. Use Simple Present for habits, routines, or facts.",
            "pt": "Use Present Continuous para ações que estão acontecendo no momento da fala ou ações temporárias. Use Simple Present para hábitos, rotinas ou fatos."
          },
          "mistakes": [
            {
              "en": "Incorrect: I am going to school every day. Correct: I go to school every day.",
              "pt": "Incorreto: Eu estou indo para a escola todos os dias. Correto: Eu vou para a escola todos os dias."
            },
            {
              "en": "Incorrect: She cooks now. Correct: She is cooking now.",
              "pt": "Incorreto: Ela cozinha agora. Correto: Ela está cozinhando agora."
            }
          ]
        }
      ],
      "controlledPractice": [
        {
          "id": "b12d-cp-1",
          "prompt": {
            "en": "Choose the correct negative sentence.",
            "pt": "Escolha a frase negativa correta."
          },
          "options": [
            "He not is driving.",
            "He isn't driving.",
            "He doesn't driving."
          ],
          "answer": "He isn't driving.",
          "explanation": {
            "en": "Use 'is + not' for negative Present Continuous with 'he/she/it'.",
            "pt": "Use 'is + not' para o Present Continuous negativo com 'he/she/it'."
          }
        },
        {
          "id": "b12d-cp-2",
          "prompt": {
            "en": "Make a question: 'You / sing / now'.",
            "pt": "Faça uma pergunta: 'Você / cantar / agora'."
          },
          "options": [
            "You are singing now?",
            "Are you singing now?",
            "Do you singing now?"
          ],
          "answer": "Are you singing now?",
          "explanation": {
            "en": "For Present Continuous questions, start with 'Am/Is/Are'.",
            "pt": "Para perguntas no Present Continuous, comece com 'Am/Is/Are'."
          }
        },
        {
          "id": "b12d-cp-3",
          "prompt": {
            "en": "Choose the correct sentence: 'I (play) tennis every Sunday. I (not play) tennis today.'",
            "pt": "Escolha a frase correta: 'Eu (jogar) tênis todo domingo. Eu (não jogar) tênis hoje.'"
          },
          "options": [
            "I play tennis every Sunday. I am not playing tennis today.",
            "I am playing tennis every Sunday. I don't play tennis today.",
            "I play tennis every Sunday. I don't playing tennis today."
          ],
          "answer": "I play tennis every Sunday. I am not playing tennis today.",
          "explanation": {
            "en": "'Every Sunday' uses Simple Present. 'Today' uses Present Continuous.",
            "pt": "'Todo domingo' usa Simple Present. 'Hoje' usa Present Continuous."
          }
        },
        {
          "id": "b12d-cp-4",
          "prompt": {
            "en": "Complete: 'What ___ your sister ___ (do) right now?'",
            "pt": "Complete: 'O que ___ sua irmã ___ (fazer) agora?'"
          },
          "options": [
            "is / doing",
            "do / does",
            "are / doing"
          ],
          "answer": "is / doing",
          "explanation": {
            "en": "For 'your sister' (she), use 'is' and 'verb-ing' for Present Continuous.",
            "pt": "Para 'sua irmã' (ela), use 'is' e 'verbo-ing' para o Present Continuous."
          }
        }
      ],
      "input": {
        "kind": "listening",
        "title": {
          "en": "A conversation about weekend plans and skills.",
          "pt": "Uma conversa sobre planos de fim de semana e habilidades."
        },
        "lines": [
          {
            "en": "Maria: Hey Tom, what are you doing this weekend?",
            "pt": "Maria: Ei Tom, o que você vai fazer neste fim de semana?"
          },
          {
            "en": "Tom: Hi Maria! I'm not doing much. Maybe I'm just relaxing. Why?",
            "pt": "Tom: Oi Maria! Não vou fazer muita coisa. Talvez eu só relaxe. Por quê?"
          },
          {
            "en": "Maria: My family is having a party. My cousin is coming. She can sing very well!",
            "pt": "Maria: Minha família vai dar uma festa. Minha prima está vindo. Ela sabe cantar muito bem!"
          },
          {
            "en": "Tom: Oh, that's nice! Can she play an instrument?",
            "pt": "Tom: Ah, que legal! Ela sabe tocar um instrumento?"
          },
          {
            "en": "Maria: No, she can't play an instrument, but she can dance! She visited Brazil last month.",
            "pt": "Maria: Não, ela não sabe tocar um instrumento, mas ela sabe dançar! Ela visitou o Brasil no mês passado."
          },
          {
            "en": "Tom: Cool! Are you cooking for the party?",
            "pt": "Tom: Legal! Você está cozinhando para a festa?"
          },
          {
            "en": "Maria: Yes, I am! My mom and I are cooking a lot. My dad usually cooks on Sundays, but not today.",
            "pt": "Maria: Sim, estou! Minha mãe e eu estamos cozinhando muito. Meu pai geralmente cozinha aos domingos, mas não hoje."
          }
        ],
        "questions": [
          {
            "id": "b12d-in-1",
            "prompt": {
              "en": "What is Tom doing this weekend?",
              "pt": "O que Tom vai fazer neste fim de semana?"
            },
            "options": [
              "He is cooking.",
              "He is relaxing.",
              "He is singing."
            ],
            "answer": "He is relaxing.",
            "explanation": {
              "en": "Tom says, 'Maybe I'm just relaxing.'",
              "pt": "Tom diz: 'Talvez eu só relaxe.'"
            }
          },
          {
            "id": "b12d-in-2",
            "prompt": {
              "en": "What can Maria's cousin do?",
              "pt": "O que a prima da Maria sabe fazer?"
            },
            "options": [
              "She can cook and sing.",
              "She can sing and dance.",
              "She can play an instrument and dance."
            ],
            "answer": "She can sing and dance.",
            "explanation": {
              "en": "Maria says, 'She can sing very well!' and 'she can dance!'.",
              "pt": "Maria diz: 'Ela sabe cantar muito bem!' e 'ela sabe dançar!'."
            }
          },
          {
            "id": "b12d-in-3",
            "prompt": {
              "en": "Who is cooking for the party today?",
              "pt": "Quem está cozinhando para a festa hoje?"
            },
            "options": [
              "Maria and her dad.",
              "Maria and her mom.",
              "Only Maria."
            ],
            "answer": "Maria and her mom.",
            "explanation": {
              "en": "Maria says, 'My mom and I are cooking a lot.'",
              "pt": "Maria diz: 'Minha mãe e eu estamos cozinhando muito.'"
            }
          }
        ]
      },
      "quickCheck": [
        {
          "id": "b12d-qc-1",
          "prompt": {
            "en": "Choose the correct negative: 'They are dancing.'",
            "pt": "Escolha a negativa correta: 'Eles estão dançando.'"
          },
          "options": [
            "They not dancing.",
            "They don't dancing.",
            "They aren't dancing."
          ],
          "answer": "They aren't dancing.",
          "explanation": {
            "en": "For 'they', use 'are not' or 'aren't' for Present Continuous negative.",
            "pt": "Para 'eles', use 'are not' ou 'aren't' para o Present Continuous negativo."
          }
        },
        {
          "id": "b12d-qc-2",
          "prompt": {
            "en": "Make a question: 'He is coding.'",
            "pt": "Faça uma pergunta: 'Ele está programando.'"
          },
          "options": [
            "Is he coding?",
            "He is coding?",
            "Does he coding?"
          ],
          "answer": "Is he coding?",
          "explanation": {
            "en": "To make a question in Present Continuous, invert the subject and 'to be' verb.",
            "pt": "Para fazer uma pergunta no Present Continuous, inverta o sujeito e o verbo 'to be'."
          }
        },
        {
          "id": "b12d-qc-3",
          "prompt": {
            "en": "When do we use Simple Present?",
            "pt": "Quando usamos o Simple Present?"
          },
          "options": [
            "For actions happening now.",
            "For habits and routines.",
            "For future plans."
          ],
          "answer": "For habits and routines.",
          "explanation": {
            "en": "Simple Present describes habits, routines, and general facts.",
            "pt": "O Simple Present descreve hábitos, rotinas e fatos gerais."
          }
        },
        {
          "id": "b12d-qc-4",
          "prompt": {
            "en": "Complete the sentence: 'I ____ to ride a bike last summer.'",
            "pt": "Complete a frase: 'Eu ____ andar de bicicleta no verão passado.'"
          },
          "options": [
            "learned",
            "am learning",
            "learn"
          ],
          "answer": "learned",
          "explanation": {
            "en": "'Last summer' indicates a past action, so use the Simple Past verb 'learned'.",
            "pt": "'Last summer' indica uma ação passada, então use o verbo no Simple Past 'learned'."
          }
        }
      ]
    },
    "communicate": {
      "id": "BEGINNER-U12-COMMUNICATE",
      "review": [
        {
          "en": "Remember the vocabulary for abilities: swim, drive, cook, play an instrument, speak a language, dance, paint, code, sing, ride a bike.",
          "pt": "Lembre-se do vocabulário de habilidades: nadar, dirigir, cozinhar, tocar um instrumento, falar um idioma, dançar, pintar, programar, cantar, andar de bicicleta."
        },
        {
          "en": "We use Present Continuous for actions happening now (e.g., 'What are you doing?') and Simple Present for habits (e.g., 'What do you do every day?').",
          "pt": "Usamos o Present Continuous para ações acontecendo agora (ex: 'O que você está fazendo?') e o Simple Present para hábitos (ex: 'O que você faz todos os dias?')."
        },
        {
          "en": "Past experiences expressions: I visited Rio last year. I saw a great movie last week. I met my best friend in school.",
          "pt": "Expressões de experiências passadas: Eu visitei o Rio ano passado. Eu vi um ótimo filme semana passada. Eu conheci meu melhor amigo na escola."
        }
      ],
      "activities": [
        {
          "id": "b12c-act-1",
          "title": {
            "en": "Make Questions",
            "pt": "Faça Perguntas"
          },
          "instruction": {
            "en": "Form questions using the given words. Pay attention to Present Continuous or Simple Present.",
            "pt": "Forme perguntas usando as palavras dadas. Preste atenção ao Present Continuous ou Simple Present."
          },
          "phrases": [
            {
              "en": "she / swim / now?",
              "pt": "ela / nadar / agora?"
            },
            {
              "en": "you / cook / every day?",
              "pt": "você / cozinhar / todo dia?"
            },
            {
              "en": "they / ride a bike / this afternoon?",
              "pt": "eles / andar de bicicleta / esta tarde?"
            }
          ],
          "check": [
            {
              "id": "b12c-act1-chk-1",
              "prompt": {
                "en": "Make a question: 'she / swim / now?'",
                "pt": "Faça uma pergunta: 'ela / nadar / agora?'"
              },
              "options": [
                "Is she swimming now?",
                "Does she swim now?",
                "She is swimming now?"
              ],
              "answer": "Is she swimming now?",
              "explanation": {
                "en": "'Now' indicates Present Continuous. The structure is 'Is + subject + verb-ing'.",
                "pt": "'Now' indica Present Continuous. A estrutura é 'Is + sujeito + verbo-ing'."
              }
            },
            {
              "id": "b12c-act1-chk-2",
              "prompt": {
                "en": "Make a question: 'you / cook / every day?'",
                "pt": "Faça uma pergunta: 'você / cozinhar / todo dia?'"
              },
              "options": [
                "Are you cooking every day?",
                "Do you cook every day?",
                "You cook every day?"
              ],
              "answer": "Do you cook every day?",
              "explanation": {
                "en": "'Every day' indicates Simple Present. The structure is 'Do + subject + verb'.",
                "pt": "'Every day' indica Simple Present. A estrutura é 'Do + sujeito + verbo'."
              }
            }
          ]
        },
        {
          "id": "b12c-act-2",
          "title": {
            "en": "Build Sentences",
            "pt": "Construa Frases"
          },
          "instruction": {
            "en": "Create full sentences using the words, adding 'not' if indicated. Use the correct tense.",
            "pt": "Crie frases completas usando as palavras, adicionando 'not' se indicado. Use o tempo verbal correto."
          },
          "phrases": [
            {
              "en": "My brother / not / play an instrument / now.",
              "pt": "Meu irmão / não / tocar um instrumento / agora."
            },
            {
              "en": "I / paint / beautiful pictures / sometimes.",
              "pt": "Eu / pintar / belas figuras / às vezes."
            },
            {
              "en": "They / not / speak English / very well / usually.",
              "pt": "Eles / não / falar inglês / muito bem / geralmente."
            }
          ],
          "check": [
            {
              "id": "b12c-act2-chk-1",
              "prompt": {
                "en": "Build a sentence: 'My brother / not / play an instrument / now.'",
                "pt": "Construa uma frase: 'Meu irmão / não / tocar um instrumento / agora.'"
              },
              "options": [
                "My brother doesn't play an instrument now.",
                "My brother isn't playing an instrument now.",
                "My brother not play an instrument now."
              ],
              "answer": "My brother isn't playing an instrument now.",
              "explanation": {
                "en": "'Now' indicates Present Continuous. 'My brother' is 'he', so 'isn't playing'.",
                "pt": "'Now' indica Present Continuous. 'My brother' é 'he', então 'isn't playing'."
              }
            },
            {
              "id": "b12c-act2-chk-2",
              "prompt": {
                "en": "Build a sentence: 'I / paint / beautiful pictures / sometimes.'",
                "pt": "Construa uma frase: 'Eu / pintar / belas figuras / às vezes.'"
              },
              "options": [
                "I am painting beautiful pictures sometimes.",
                "I paint beautiful pictures sometimes.",
                "I do paint beautiful pictures sometimes."
              ],
              "answer": "I paint beautiful pictures sometimes.",
              "explanation": {
                "en": "'Sometimes' indicates Simple Present for a habit. 'I paint'.",
                "pt": "'Sometimes' indica Simple Present para um hábito. 'I paint'."
              }
            }
          ]
        },
        {
          "id": "b12c-act-3",
          "title": {
            "en": "Role-play: Interview",
            "pt": "Role-play: Entrevista"
          },
          "instruction": {
            "en": "Work with a partner. Imagine one of you is a manager and the other is a job candidate. Ask about abilities and past experiences.",
            "pt": "Trabalhe com um parceiro. Imagine que um de vocês é um gerente e o outro é um candidato a emprego. Pergunte sobre habilidades e experiências passadas."
          },
          "phrases": [
            {
              "en": "Can you speak English?",
              "pt": "Você sabe falar inglês?"
            },
            {
              "en": "What are you doing to improve your skills?",
              "pt": "O que você está fazendo para melhorar suas habilidades?"
            },
            {
              "en": "Did you work on a project last year?",
              "pt": "Você trabalhou em um projeto ano passado?"
            }
          ],
          "check": [
            {
              "id": "b12c-act3-chk-1",
              "prompt": {
                "en": "Which question asks about a current action?",
                "pt": "Qual pergunta pergunta sobre uma ação atual?"
              },
              "options": [
                "Can you drive?",
                "What are you doing now?",
                "Did you visit Paris?"
              ],
              "answer": "What are you doing now?",
              "explanation": {
                "en": "This is Present Continuous, asking about an action happening at the moment.",
                "pt": "Esta é Present Continuous, perguntando sobre uma ação que está acontecendo no momento."
              }
            },
            {
              "id": "b12c-act3-chk-2",
              "prompt": {
                "en": "Which sentence describes a past experience?",
                "pt": "Qual frase descreve uma experiência passada?"
              },
              "options": [
                "I am learning to code.",
                "I code every day.",
                "I coded a website last month."
              ],
              "answer": "I coded a website last month.",
              "explanation": {
                "en": "'Last month' indicates a past experience using Simple Past.",
                "pt": "'Last month' indica uma experiência passada usando Simple Past."
              }
            }
          ]
        },
        {
          "id": "b12c-act-4",
          "title": {
            "en": "Talk to Your Partner: Plans and Skills",
            "pt": "Converse com seu Parceiro: Planos e Habilidades"
          },
          "instruction": {
            "en": "Discuss your current activities and what you can or cannot do. Share a past experience.",
            "pt": "Discuta suas atividades atuais e o que você pode ou não pode fazer. Compartilhe uma experiência passada."
          },
          "phrases": [
            {
              "en": "What are you studying these days?",
              "pt": "O que você está estudando ultimamente?"
            },
            {
              "en": "Can you drive a car?",
              "pt": "Você sabe dirigir um carro?"
            },
            {
              "en": "I traveled last year.",
              "pt": "Eu viajei ano passado."
            }
          ],
          "check": [
            {
              "id": "b12c-act4-chk-1",
              "prompt": {
                "en": "Which question asks about an ability?",
                "pt": "Qual pergunta pergunta sobre uma habilidade?"
              },
              "options": [
                "Are you watching TV?",
                "Can you cook?",
                "Do you like music?"
              ],
              "answer": "Can you cook?",
              "explanation": {
                "en": "'Can you...?' is used to ask about abilities.",
                "pt": "'Can you...?' é usado para perguntar sobre habilidades."
              }
            },
            {
              "id": "b12c-act4-chk-2",
              "prompt": {
                "en": "How do you form a negative sentence for 'I am singing'?",
                "pt": "Como você forma uma frase negativa para 'Eu estou cantando'?"
              },
              "options": [
                "I not singing.",
                "I don't singing.",
                "I am not singing."
              ],
              "answer": "I am not singing.",
              "explanation": {
                "en": "For Present Continuous negative, use 'subject + am/is/are + not + verb-ing'.",
                "pt": "Para o Present Continuous negativo, use 'sujeito + am/is/are + not + verbo-ing'."
              }
            }
          ]
        },
        {
          "id": "b12c-act-5",
          "title": {
            "en": "Ask and Answer: Your Abilities",
            "pt": "Pergunte e Responda: Suas Habilidades"
          },
          "instruction": {
            "en": "Ask your partner about their abilities using 'Can you...?'. Your partner answers 'Yes, I can.' or 'No, I can't.'.",
            "pt": "Pergunte ao seu parceiro sobre as habilidades dele usando 'Você sabe...?'. Seu parceiro responde 'Sim, eu sei.' ou 'Não, eu não sei.'."
          },
          "phrases": [
            {
              "en": "Can you ride a bike?",
              "pt": "Você sabe andar de bicicleta?"
            },
            {
              "en": "Can you speak Spanish?",
              "pt": "Você sabe falar espanhol?"
            },
            {
              "en": "Can you paint?",
              "pt": "Você sabe pintar?"
            }
          ],
          "check": [
            {
              "id": "b12c-act5-chk-1",
              "prompt": {
                "en": "What is the correct way to ask about someone's ability to dance?",
                "pt": "Qual é a forma correta de perguntar sobre a habilidade de alguém para dançar?"
              },
              "options": [
                "Are you dancing?",
                "Do you dance?",
                "Can you dance?"
              ],
              "answer": "Can you dance?",
              "explanation": {
                "en": "'Can you...?' is the correct form to ask about abilities.",
                "pt": "'Can you...?' é a forma correta de perguntar sobre habilidades."
              }
            },
            {
              "id": "b12c-act5-chk-2",
              "prompt": {
                "en": "How do you answer negatively if someone asks 'Can you cook?'",
                "pt": "Como você responde negativamente se alguém pergunta 'Você sabe cozinhar?'"
              },
              "options": [
                "No, I don't.",
                "No, I am not.",
                "No, I can't."
              ],
              "answer": "No, I can't.",
              "explanation": {
                "en": "Use 'can't' to form negative answers to 'Can you...?' questions.",
                "pt": "Use 'can't' para formar respostas negativas para perguntas com 'Can you...?'."
              }
            }
          ]
        }
      ],
      "challenge": {
        "id": "b12c-challenge-1",
        "title": {
          "en": "My Dream Job",
          "pt": "Meu Emprego dos Sonhos"
        },
        "instruction": {
          "en": "Imagine your dream job. What abilities do you need for it? What are you doing now to get closer to this job? What did you do in the past that helps you?",
          "pt": "Imagine o seu emprego dos sonhos. Que habilidades você precisa para ele? O que você está fazendo agora para se aproximar desse emprego? O que você fez no passado que te ajuda?"
        },
        "phrases": [
          {
            "en": "For my dream job, I need to speak three languages.",
            "pt": "Para o meu emprego dos sonhos, preciso falar três idiomas."
          },
          {
            "en": "I am studying English every day to improve.",
            "pt": "Estou estudando inglês todos os dias para melhorar."
          },
          {
            "en": "Last year, I visited Germany and practiced my German.",
            "pt": "Ano passado, visitei a Alemanha e pratiquei meu alemão."
          }
        ],
        "check": [
          {
            "id": "b12c-chal-chk-1",
            "prompt": {
              "en": "Which sentence correctly uses Present Continuous for a temporary action?",
              "pt": "Qual frase usa corretamente o Present Continuous para uma ação temporária?"
            },
            "options": [
              "I learn English.",
              "I am learning English this month.",
              "I learned English last year."
            ],
            "answer": "I am learning English this month.",
            "explanation": {
              "en": "'This month' implies a temporary action, suited for Present Continuous.",
              "pt": "'This month' implica uma ação temporária, adequada para o Present Continuous."
            }
          },
          {
            "id": "b12c-chal-chk-2",
            "prompt": {
              "en": "Which sentence describes an ability you possess?",
              "pt": "Qual frase descreve uma habilidade que você possui?"
            },
            "options": [
              "I am reading a book.",
              "I like to cook.",
              "I can cook very well."
            ],
            "answer": "I can cook very well.",
            "explanation": {
              "en": "'Can' expresses ability. 'I can cook' means you possess the skill.",
              "pt": "'Can' expressa habilidade. 'Eu sei cozinhar' significa que você possui a habilidade."
            }
          }
        ]
      },
      "lessonReview": {
        "summary": {
          "en": "In this unit, you learned to talk about abilities using 'can' and 'can't'. You also learned to use Present Continuous in negative and interrogative forms, and how to contrast it with Simple Present.",
          "pt": "Nesta unidade, você aprendeu a falar sobre habilidades usando 'can' e 'can't'. Você também aprendeu a usar o Present Continuous nas formas negativa e interrogativa, e como contrastá-lo com o Simple Present."
        },
        "canDo": [
          {
            "en": "Ask and answer about abilities.",
            "pt": "Perguntar e responder sobre habilidades."
          },
          {
            "en": "Talk about actions happening now.",
            "pt": "Falar sobre ações acontecendo agora."
          },
          {
            "en": "Describe past experiences.",
            "pt": "Descrever experiências passadas."
          },
          {
            "en": "Contrast routine actions with temporary actions.",
            "pt": "Contrastar ações de rotina com ações temporárias."
          }
        ],
        "next": {
          "en": "Next, we will explore future plans and intentions.",
          "pt": "Em seguida, exploraremos planos e intenções futuras."
        }
      }
    }
  },
  {
    "code": "BEGINNER-U13",
    "number": 13,
    "title": "Food Drinks — Can / Can't",
    "titlePt": "Comida e Bebidas — Posso / Não posso",
    "cefr": "A1",
    "objective": {
      "en": "To teach food and drinks vocabulary and 'can / can't' for ability and permission in a contextualized way.",
      "pt": "Ensinar vocabulário de comida e bebidas e 'can / can't' para habilidade e permissão de forma contextualizada."
    },
    "communicationGoal": {
      "en": "The student will be able to use 'plans' and food/drinks vocabulary to communicate in real situations.",
      "pt": "O aluno será capaz de usar 'planos' e o vocabulário de comida e bebidas para se comunicar em situações reais."
    },
    "prerequisites": {
      "en": "Grammar: Present Continuous — negative/interrogative, and contrast with Simple Present. Vocabulary: Abilities.",
      "pt": "Estrutura: Present Continuous — negativo/interrogativo, e contraste com Simple Present. Vocabulário: Habilidades."
    },
    "newContent": {
      "en": "Grammar: Can / Can't for ability and permission. Vocabulary: Food Drinks (10 lexical items). Expressions: Plans.",
      "pt": "Gramática: Can / Can't para habilidade e permissão. Vocabulário: Comida e Bebidas (10 itens lexicais). Expressões: Planos."
    },
    "reviewContent": {
      "en": "Spiral review: Adverbs of frequency (always, usually, often, sometimes, never) and their position in the sentence (Unit 8). Vocabulary review: Home Objects (Unit 3).",
      "pt": "Revisão em espiral: Advérbios de frequência (always, usually, often, sometimes, never) e sua posição na frase (Unidade 8). Revisão de vocabulário: Objetos de Casa (Unidade 3)."
    },
    "discover": {
      "id": "BEGINNER-U13-DISCOVER",
      "warmUp": {
        "prompt": {
          "en": "Look at the pictures. What foods and drinks can you see?",
          "pt": "Olhe as imagens. Que comidas e bebidas você consegue ver?"
        },
        "phrases": [
          {
            "en": "I see an apple.",
            "pt": "Eu vejo uma maçã."
          },
          {
            "en": "I see water.",
            "pt": "Eu vejo água."
          },
          {
            "en": "Do you like coffee?",
            "pt": "Você gosta de café?"
          }
        ]
      },
      "context": {
        "situation": {
          "en": "Maria and Tom are planning a small party for their friends. They are talking about what food and drinks to prepare.",
          "pt": "Maria e Tom estão planejando uma pequena festa para seus amigos. Eles estão conversando sobre quais comidas e bebidas preparar."
        },
        "dialogue": [
          {
            "who": "Tom",
            "en": "Hi, Maria! What are we going to buy for the party?",
            "pt": "Oi, Maria! O que nós vamos comprar para a festa?"
          },
          {
            "who": "Maria",
            "en": "Hi, Tom! I'm planning to make some snacks. We need bread and cheese.",
            "pt": "Oi, Tom! Eu estou planejando fazer alguns lanches. Nós precisamos de pão e queijo."
          },
          {
            "who": "Tom",
            "en": "Good idea! Can I help you with the shopping?",
            "pt": "Boa ideia! Eu posso te ajudar com as compras?"
          },
          {
            "who": "Maria",
            "en": "Yes, please! We also need fruit and vegetables. And drinks! Do we have juice?",
            "pt": "Sim, por favor! Nós também precisamos de frutas e vegetais. E bebidas! Nós temos suco?"
          },
          {
            "who": "Tom",
            "en": "No, we don't have juice. I'll buy juice and some water.",
            "pt": "Não, nós não temos suco. Eu vou comprar suco e um pouco de água."
          },
          {
            "who": "Maria",
            "en": "Perfect! And for dinner, I can make rice and chicken.",
            "pt": "Perfeito! E para o jantar, eu posso fazer arroz e frango."
          },
          {
            "who": "Tom",
            "en": "That sounds delicious! I can't cook rice very well. But I can help clean.",
            "pt": "Isso parece delicioso! Eu não consigo cozinhar arroz muito bem. Mas eu posso ajudar a limpar."
          },
          {
            "who": "Maria",
            "en": "Great! And for dessert, I'm going to buy ice cream. Everyone loves dessert!",
            "pt": "Ótimo! E para a sobremesa, eu vou comprar sorvete. Todo mundo ama sobremesa!"
          }
        ]
      },
      "vocabulary": [
        {
          "term": "bread",
          "pt": "pão",
          "ipa": "/brɛd/",
          "definition": "A common food made from flour, water, and yeast, baked.",
          "example": "I eat bread for breakfast.",
          "examplePt": "Eu como pão no café da manhã."
        },
        {
          "term": "rice",
          "pt": "arroz",
          "ipa": "/raɪs/",
          "definition": "Small grains used as food, especially in Asian countries.",
          "example": "We eat rice with chicken for dinner.",
          "examplePt": "Nós comemos arroz com frango no jantar."
        },
        {
          "term": "chicken",
          "pt": "frango",
          "ipa": "/ˈʧɪkɪn/",
          "definition": "A common bird kept for its meat and eggs. Also, the meat of this bird.",
          "example": "She likes grilled chicken.",
          "examplePt": "Ela gosta de frango grelhado."
        },
        {
          "term": "vegetables",
          "pt": "vegetais",
          "ipa": "/ˈvɛʤtəbəlz/",
          "definition": "Plants or parts of plants used as food.",
          "example": "My mother grows vegetables in her garden.",
          "examplePt": "Minha mãe cultiva vegetais no jardim dela."
        },
        {
          "term": "fruit",
          "pt": "fruta",
          "ipa": "/fruːt/",
          "definition": "The sweet and fleshy product of a tree or other plant that contains seed and can be eaten as food.",
          "example": "An apple is a type of fruit.",
          "examplePt": "Uma maçã é um tipo de fruta."
        },
        {
          "term": "water",
          "pt": "água",
          "ipa": "/ˈwɔtər/",
          "definition": "A clear, tasteless, odorless liquid that is essential for life.",
          "example": "Please, can I have a glass of water?",
          "examplePt": "Por favor, posso beber um copo de água?"
        },
        {
          "term": "coffee",
          "pt": "café",
          "ipa": "/ˈkɑːfi/",
          "definition": "A dark, bitter drink made from roasted coffee beans.",
          "example": "I drink coffee every morning.",
          "examplePt": "Eu bebo café toda manhã."
        },
        {
          "term": "juice",
          "pt": "suco",
          "ipa": "/ʤuːs/",
          "definition": "The liquid that comes from fruit or vegetables.",
          "example": "Orange juice is my favorite.",
          "examplePt": "Suco de laranja é o meu favorito."
        },
        {
          "term": "cheese",
          "pt": "queijo",
          "ipa": "/ʧiːz/",
          "definition": "A food made from milk, typically solid.",
          "example": "I like cheese on my sandwich.",
          "examplePt": "Eu gosto de queijo no meu sanduíche."
        },
        {
          "term": "dessert",
          "pt": "sobremesa",
          "ipa": "/dɪˈzɜːrt/",
          "definition": "Sweet food eaten at the end of a meal.",
          "example": "Ice cream is a popular dessert.",
          "examplePt": "Sorvete é uma sobremesa popular."
        }
      ],
      "expressions": [
        {
          "en": "I'm going to travel next month.",
          "pt": "Eu vou viajar no próximo mês."
        },
        {
          "en": "I'm planning to study more.",
          "pt": "Eu estou planejando estudar mais."
        },
        {
          "en": "I'll call you tomorrow.",
          "pt": "Eu ligo para você amanhã."
        }
      ],
      "grammar": [
        {
          "title": {
            "en": "Can / Can't for ability and permission",
            "pt": "Can / Can't para habilidade e permissão"
          },
          "examples": [
            {
              "en": "She can speak two languages.",
              "pt": "Ela pode falar duas línguas."
            },
            {
              "en": "Can I open the window?",
              "pt": "Posso abrir a janela?"
            },
            {
              "en": "I can't cook rice very well.",
              "pt": "Eu não consigo cozinhar arroz muito bem."
            },
            {
              "en": "Can you help me with this box?",
              "pt": "Você pode me ajudar com esta caixa?"
            },
            {
              "en": "He can play the guitar.",
              "pt": "Ele sabe tocar violão."
            },
            {
              "en": "We can't go to the party tonight.",
              "pt": "Nós não podemos ir à festa hoje à noite."
            }
          ],
          "rule": {
            "en": "'Can' shows ability or permission. 'Can't' (cannot) shows lack of ability or prohibition. Use 'can' + base form of the verb.",
            "pt": "'Can' mostra habilidade ou permissão. 'Can't' (cannot) mostra falta de habilidade ou proibição. Use 'can' + forma base do verbo."
          },
          "mistakes": [
            {
              "en": "Incorrect: She can to speak two languages. Correct: She can speak two languages.",
              "pt": "Incorreto: She can to speak two languages. Correto: She can speak two languages."
            },
            {
              "en": "Incorrect: Can he plays tennis? Correct: Can he play tennis?",
              "pt": "Incorreto: Can he plays tennis? Correto: Can he play tennis?"
            }
          ]
        }
      ],
      "controlledPractice": [
        {
          "id": "b13d-cp1",
          "prompt": {
            "en": "Choose the correct word: I like to eat (bread / coffee) for breakfast.",
            "pt": "Escolha a palavra correta: Eu gosto de comer (pão / café) no café da manhã."
          },
          "options": [
            "bread",
            "coffee",
            "juice"
          ],
          "answer": "bread",
          "explanation": {
            "en": "Bread is a common food for breakfast.",
            "pt": "Pão é uma comida comum para o café da manhã."
          }
        },
        {
          "id": "b13d-cp2",
          "prompt": {
            "en": "Complete the sentence: He ______ cook very well. (ability)",
            "pt": "Complete a frase: Ele ______ cozinhar muito bem. (habilidade)"
          },
          "options": [
            "can",
            "can't",
            "is"
          ],
          "answer": "can",
          "explanation": {
            "en": "'Can' shows ability.",
            "pt": "'Can' mostra habilidade."
          }
        },
        {
          "id": "b13d-cp3",
          "prompt": {
            "en": "Form a question: you / help / me / ?",
            "pt": "Forme uma pergunta: você / ajudar / eu / ?"
          },
          "options": [
            "Can you help me?",
            "You can help me?",
            "Help you can me?"
          ],
          "answer": "Can you help me?",
          "explanation": {
            "en": "For questions with 'can', 'can' comes first.",
            "pt": "Para perguntas com 'can', 'can' vem primeiro."
          }
        },
        {
          "id": "b13d-cp4",
          "prompt": {
            "en": "Match the food: Rice and (chicken / fruit) often go together.",
            "pt": "Associe a comida: Arroz e (frango / fruta) geralmente combinam."
          },
          "options": [
            "chicken",
            "fruit",
            "dessert"
          ],
          "answer": "chicken",
          "explanation": {
            "en": "Rice and chicken is a common meal.",
            "pt": "Arroz e frango é uma refeição comum."
          }
        }
      ],
      "input": {
        "kind": "reading",
        "title": {
          "en": "A Healthy Meal",
          "pt": "Uma Refeição Saudável"
        },
        "lines": [
          {
            "en": "My name is Julia. I like to eat healthy food. For breakfast, I always have fruit and sometimes I drink juice.",
            "pt": "Meu nome é Julia. Eu gosto de comer comida saudável. No café da manhã, eu sempre como fruta e às vezes eu bebo suco."
          },
          {
            "en": "For lunch, I usually eat rice and chicken with many vegetables. I often drink water.",
            "pt": "No almoço, eu geralmente como arroz e frango com muitos vegetais. Eu frequentemente bebo água."
          },
          {
            "en": "I can cook well, so I prepare my meals. My friend, Mark, can't cook. He always eats out.",
            "pt": "Eu sei cozinhar bem, então eu preparo minhas refeições. Meu amigo, Mark, não sabe cozinhar. Ele sempre come fora."
          },
          {
            "en": "Sometimes I make dessert, like a fruit salad with cheese. It's delicious!",
            "pt": "Às vezes eu faço sobremesa, como uma salada de frutas com queijo. É delicioso!"
          }
        ],
        "questions": [
          {
            "id": "b13d-rq1",
            "prompt": {
              "en": "What does Julia have for breakfast?",
              "pt": "O que Julia come no café da manhã?"
            },
            "options": [
              "Rice and chicken",
              "Fruit and juice",
              "Bread and cheese"
            ],
            "answer": "Fruit and juice",
            "explanation": {
              "en": "Julia always has fruit and sometimes drinks juice for breakfast.",
              "pt": "Julia sempre come fruta e às vezes bebe suco no café da manhã."
            }
          },
          {
            "id": "b13d-rq2",
            "prompt": {
              "en": "Can Mark cook?",
              "pt": "Mark sabe cozinhar?"
            },
            "options": [
              "Yes, he can.",
              "No, he can't.",
              "He likes cooking."
            ],
            "answer": "No, he can't.",
            "explanation": {
              "en": "The text says: 'My friend, Mark, can't cook.'",
              "pt": "O texto diz: 'Meu amigo, Mark, não sabe cozinhar.'"
            }
          },
          {
            "id": "b13d-rq3",
            "prompt": {
              "en": "What does Julia often drink for lunch?",
              "pt": "O que Julia frequentemente bebe no almoço?"
            },
            "options": [
              "Juice",
              "Coffee",
              "Water"
            ],
            "answer": "Water",
            "explanation": {
              "en": "Julia often drinks water for lunch.",
              "pt": "Julia frequentemente bebe água no almoço."
            }
          }
        ]
      },
      "quickCheck": [
        {
          "id": "b13d-qc1",
          "prompt": {
            "en": "Fill in the blank: My sister ______ play the piano. (She knows how to)",
            "pt": "Preencha a lacuna: Minha irmã ______ tocar piano. (Ela sabe)"
          },
          "options": [
            "can",
            "can't",
            "is"
          ],
          "answer": "can",
          "explanation": {
            "en": "'Can' is used for ability.",
            "pt": "'Can' é usado para habilidade."
          }
        },
        {
          "id": "b13d-qc2",
          "prompt": {
            "en": "Which of these is a drink?",
            "pt": "Qual destes é uma bebida?"
          },
          "options": [
            "Bread",
            "Coffee",
            "Rice"
          ],
          "answer": "Coffee",
          "explanation": {
            "en": "Coffee is a common drink.",
            "pt": "Café é uma bebida comum."
          }
        },
        {
          "id": "b13d-qc3",
          "prompt": {
            "en": "Can I leave now? (Yes / No)",
            "pt": "Posso sair agora? (Sim / Não)"
          },
          "options": [
            "Yes, you can.",
            "No, you can't.",
            "Maybe later."
          ],
          "answer": "Yes, you can.",
          "explanation": {
            "en": "This is a question asking for permission.",
            "pt": "Esta é uma pergunta pedindo permissão."
          }
        },
        {
          "id": "b13d-qc4",
          "prompt": {
            "en": "What food item is often served with chicken?",
            "pt": "Qual item de comida é frequentemente servido com frango?"
          },
          "options": [
            "Dessert",
            "Rice",
            "Juice"
          ],
          "answer": "Rice",
          "explanation": {
            "en": "Rice and chicken is a very common combination.",
            "pt": "Arroz e frango é uma combinação muito comum."
          }
        }
      ]
    },
    "communicate": {
      "id": "BEGINNER-U13-COMMUNICATE",
      "review": [
        {
          "en": "Today we learned food and drinks vocabulary: bread, rice, chicken, vegetables, fruit, water, coffee, juice, cheese, dessert.",
          "pt": "Hoje aprendemos vocabulário de comida e bebidas: pão, arroz, frango, vegetais, fruta, água, café, suco, queijo, sobremesa."
        },
        {
          "en": "We also learned how to use 'can' and 'can't' for ability and permission. Remember: 'Can I go?' 'Yes, you can.' 'I can play.'",
          "pt": "Também aprendemos como usar 'can' e 'can't' para habilidade e permissão. Lembre-se: 'Posso ir?' 'Sim, você pode.' 'Eu sei jogar.'"
        },
        {
          "en": "We practiced expressions for plans: I'm going to travel, I'm planning to study, I'll call you.",
          "pt": "Nós praticamos expressões para planos: Eu vou viajar, Eu estou planejando estudar, Eu ligo para você."
        }
      ],
      "activities": [
        {
          "id": "b13c-act1-dialogue",
          "title": {
            "en": "Dialogue: Planning a Picnic",
            "pt": "Diálogo: Planejando um Piquenique"
          },
          "instruction": {
            "en": "Work with a partner. Plan a picnic together. Use 'can' and 'can't' and the new vocabulary.",
            "pt": "Trabalhe com um parceiro. Planeje um piquenique juntos. Use 'can' e 'can't' e o novo vocabulário."
          },
          "phrases": [
            {
              "en": "What food can we bring?",
              "pt": "Que comida podemos trazer?"
            },
            {
              "en": "I can make sandwiches with bread and cheese.",
              "pt": "Eu posso fazer sanduíches com pão e queijo."
            },
            {
              "en": "I can't bring juice, but I can bring water.",
              "pt": "Eu não consigo trazer suco, mas eu consigo trazer água."
            }
          ],
          "check": [
            {
              "id": "b13c-ac1-1",
              "prompt": {
                "en": "Partner A asks: 'What can you bring?' Partner B answers:",
                "pt": "Parceiro A pergunta: 'O que você pode trazer?' Parceiro B responde:"
              },
              "options": [
                "I can bring fruit and coffee.",
                "I'm going to bring.",
                "I bring bread."
              ],
              "answer": "I can bring fruit and coffee.",
              "explanation": {
                "en": "This answer uses 'can' and new vocabulary.",
                "pt": "Esta resposta usa 'can' e vocabulário novo."
              }
            },
            {
              "id": "b13c-ac1-2",
              "prompt": {
                "en": "Partner A says: 'I can't bring dessert.' Partner B asks:",
                "pt": "Parceiro A diz: 'Eu não posso trazer sobremesa.' Parceiro B pergunta:"
              },
              "options": [
                "Can I bring dessert?",
                "Do you like dessert?",
                "What is dessert?"
              ],
              "answer": "Can I bring dessert?",
              "explanation": {
                "en": "This asks for permission or offers help using 'can'.",
                "pt": "Esta pergunta pede permissão ou oferece ajuda usando 'can'."
              }
            }
          ]
        },
        {
          "id": "b13c-act2-talk",
          "title": {
            "en": "Talk About Yourself: My Favorite Foods",
            "pt": "Fale Sobre Você: Minhas Comidas Favoritas"
          },
          "instruction": {
            "en": "Tell your partner about your favorite foods and drinks. What can you cook? What can't you cook?",
            "pt": "Conte ao seu parceiro sobre suas comidas e bebidas favoritas. O que você sabe cozinhar? O que você não sabe cozinhar?"
          },
          "phrases": [
            {
              "en": "My favorite food is chicken and rice.",
              "pt": "Minha comida favorita é frango e arroz."
            },
            {
              "en": "I can cook rice, but I can't cook chicken well.",
              "pt": "Eu sei cozinhar arroz, mas não sei cozinhar frango muito bem."
            },
            {
              "en": "I love juice and water.",
              "pt": "Eu amo suco e água."
            }
          ],
          "check": [
            {
              "id": "b13c-ac2-1",
              "prompt": {
                "en": "Choose the best sentence about your cooking ability:",
                "pt": "Escolha a melhor frase sobre sua habilidade de cozinhar:"
              },
              "options": [
                "I can cook vegetables.",
                "I am cook vegetables.",
                "I cooking vegetables."
              ],
              "answer": "I can cook vegetables.",
              "explanation": {
                "en": "Uses 'can' for ability.",
                "pt": "Usa 'can' para habilidade."
              }
            },
            {
              "id": "b13c-ac2-2",
              "prompt": {
                "en": "Which statement uses vocabulary correctly?",
                "pt": "Qual afirmação usa o vocabulário corretamente?"
              },
              "options": [
                "I like bread and juice for dessert.",
                "I like fruit and cheese for dessert.",
                "I like chicken and coffee for dessert."
              ],
              "answer": "I like fruit and cheese for dessert.",
              "explanation": {
                "en": "Fruit and cheese can be a dessert.",
                "pt": "Fruta e queijo podem ser uma sobremesa."
              }
            }
          ]
        },
        {
          "id": "b13c-act3-describe",
          "title": {
            "en": "Describe: My Meal",
            "pt": "Descreva: Minha Refeição"
          },
          "instruction": {
            "en": "Describe a meal you like or a meal you can prepare. Use food and drinks vocabulary.",
            "pt": "Descreva uma refeição que você gosta ou que você pode preparar. Use vocabulário de comidas e bebidas."
          },
          "phrases": [
            {
              "en": "For lunch, I can make rice with chicken.",
              "pt": "Para o almoço, eu posso fazer arroz com frango."
            },
            {
              "en": "I also add some vegetables.",
              "pt": "Eu também adiciono alguns vegetais."
            },
            {
              "en": "I always drink water with my meal.",
              "pt": "Eu sempre bebo água com a minha refeição."
            }
          ],
          "check": [
            {
              "id": "b13c-ac3-1",
              "prompt": {
                "en": "Which sentence describes a meal well?",
                "pt": "Qual frase descreve bem uma refeição?"
              },
              "options": [
                "I eat dessert for bread.",
                "I can make chicken and rice for dinner.",
                "I drink bread for lunch."
              ],
              "answer": "I can make chicken and rice for dinner.",
              "explanation": {
                "en": "This sentence uses 'can' and relevant food vocabulary for a meal.",
                "pt": "Esta frase usa 'can' e vocabulário relevante de comida para uma refeição."
              }
            },
            {
              "id": "b13c-ac3-2",
              "prompt": {
                "en": "Choose the best description for a drink with a meal:",
                "pt": "Escolha a melhor descrição para uma bebida com uma refeição:"
              },
              "options": [
                "I usually drink coffee with rice.",
                "I sometimes drink juice with my vegetables.",
                "I never drink water."
              ],
              "answer": "I sometimes drink juice with my vegetables.",
              "explanation": {
                "en": "This is a common drink choice with food.",
                "pt": "Esta é uma escolha comum de bebida com comida."
              }
            }
          ]
        },
        {
          "id": "b13c-act4-opinion",
          "title": {
            "en": "Give Your Opinion: Restaurant Review",
            "pt": "Dê Sua Opinião: Avaliação de Restaurante"
          },
          "instruction": {
            "en": "Imagine you are at a restaurant. What food can you order? What do you like or dislike? Give your opinion.",
            "pt": "Imagine que você está em um restaurante. Que comida você pode pedir? Do que você gosta ou não gosta? Dê sua opinião."
          },
          "phrases": [
            {
              "en": "I can order chicken with vegetables.",
              "pt": "Eu posso pedir frango com vegetais."
            },
            {
              "en": "I like this dessert. It's delicious!",
              "pt": "Eu gosto desta sobremesa. É deliciosa!"
            },
            {
              "en": "I can't drink coffee after dinner.",
              "pt": "Eu não consigo beber café depois do jantar."
            }
          ],
          "check": [
            {
              "id": "b13c-ac4-1",
              "prompt": {
                "en": "You want to order something. What do you say?",
                "pt": "Você quer pedir algo. O que você diz?"
              },
              "options": [
                "Can I have the bread?",
                "I have bread.",
                "Bread is good."
              ],
              "answer": "Can I have the bread?",
              "explanation": {
                "en": "This is a polite way to ask for an item in a restaurant.",
                "pt": "Esta é uma forma educada de pedir um item em um restaurante."
              }
            },
            {
              "id": "b13c-ac4-2",
              "prompt": {
                "en": "Your friend asks if you like the food. You answer:",
                "pt": "Seu amigo pergunta se você gosta da comida. Você responde:"
              },
              "options": [
                "I don't like coffee and chicken.",
                "I can't like rice.",
                "I like the rice and chicken. It's good!"
              ],
              "answer": "I like the rice and chicken. It's good!",
              "explanation": {
                "en": "This expresses a positive opinion using food vocabulary.",
                "pt": "Isso expressa uma opinião positiva usando vocabulário de comida."
              }
            }
          ]
        },
        {
          "id": "b13c-act5-writing",
          "title": {
            "en": "Writing Task: My Shopping List",
            "pt": "Tarefa de Escrita: Minha Lista de Compras"
          },
          "instruction": {
            "en": "Write a shopping list for a week. Include food and drinks you need. Use 'I'm going to buy...' or 'I need...'.",
            "pt": "Escreva uma lista de compras para uma semana. Inclua comidas e bebidas que você precisa. Use 'Eu vou comprar...' ou 'Eu preciso...'"
          },
          "phrases": [
            {
              "en": "I'm going to buy bread and cheese.",
              "pt": "Eu vou comprar pão e queijo."
            },
            {
              "en": "I need fruit and vegetables.",
              "pt": "Eu preciso de frutas e vegetais."
            },
            {
              "en": "I'll buy water and juice.",
              "pt": "Eu comprarei água e suco."
            }
          ],
          "check": [
            {
              "id": "b13c-ac5-1",
              "prompt": {
                "en": "Which item from the list is a drink?",
                "pt": "Qual item da lista é uma bebida?"
              },
              "options": [
                "Chicken",
                "Coffee",
                "Bread"
              ],
              "answer": "Coffee",
              "explanation": {
                "en": "Coffee is a drink.",
                "pt": "Café é uma bebida."
              }
            },
            {
              "id": "b13c-ac5-2",
              "prompt": {
                "en": "Which sentence describes a plan to buy food?",
                "pt": "Qual frase descreve um plano para comprar comida?"
              },
              "options": [
                "I'm planning to buy rice.",
                "I buy rice.",
                "I can rice."
              ],
              "answer": "I'm planning to buy rice.",
              "explanation": {
                "en": "This uses the 'planning' expression for future action.",
                "pt": "Esta usa a expressão 'planejando' para ação futura."
              }
            }
          ]
        }
      ],
      "challenge": {
        "id": "b13c-challenge",
        "title": {
          "en": "Weekend Plans with Friends",
          "pt": "Planos de Fim de Semana com Amigos"
        },
        "instruction": {
          "en": "You are making plans with friends for the weekend. Discuss what food and drinks you can prepare or buy. Use 'can/can't' and expressions for plans. Who can bring what?",
          "pt": "Você está fazendo planos com amigos para o fim de semana. Discuta quais comidas e bebidas vocês podem preparar ou comprar. Use 'can/can't' e expressões para planos. Quem pode trazer o quê?"
        },
        "phrases": [
          {
            "en": "I'm going to make some chicken.",
            "pt": "Eu vou fazer um pouco de frango."
          },
          {
            "en": "Can you bring some juice or water?",
            "pt": "Você pode trazer um pouco de suco ou água?"
          },
          {
            "en": "I can't cook dessert, but I can buy fruit.",
            "pt": "Eu não consigo cozinhar sobremesa, mas eu posso comprar fruta."
          }
        ],
        "check": [
          {
            "id": "b13c-ch1",
            "prompt": {
              "en": "Your friend asks: 'What can I bring?' You want them to bring drinks. What do you say?",
              "pt": "Seu amigo pergunta: 'O que eu posso trazer?' Você quer que ele traga bebidas. O que você diz?"
            },
            "options": [
              "Can you bring coffee and juice?",
              "You bring coffee and juice.",
              "Coffee and juice are good."
            ],
            "answer": "Can you bring coffee and juice?",
            "explanation": {
              "en": "This uses 'can' to ask for help/suggestion.",
              "pt": "Isso usa 'can' para pedir ajuda/sugestão."
            }
          },
          {
            "id": "b13c-ch2",
            "prompt": {
              "en": "Your friend says: 'I can make rice.' What do you say next about another food item?",
              "pt": "Seu amigo diz: 'Eu sei fazer arroz.' O que você diz em seguida sobre outro item de comida?"
            },
            "options": [
              "Great! I'm planning to buy chicken.",
              "I'm buying rice.",
              "Can rice and chicken?"
            ],
            "answer": "Great! I'm planning to buy chicken.",
            "explanation": {
              "en": "This uses a 'plan' expression and related food vocabulary.",
              "pt": "Isso usa uma expressão de 'plano' e vocabulário de comida relacionado."
            }
          }
        ]
      },
      "lessonReview": {
        "summary": {
          "en": "In this unit, we explored food and drinks vocabulary and learned to use 'can' and 'can't' to talk about abilities and permissions. We also practiced expressions for plans.",
          "pt": "Nesta unidade, exploramos vocabulário de comidas e bebidas e aprendemos a usar 'can' e 'can't' para falar sobre habilidades e permissões. Também praticamos expressões para planos."
        },
        "canDo": [
          {
            "en": "I can name common food items like bread, rice, and chicken.",
            "pt": "Eu consigo nomear itens de comida comuns como pão, arroz e frango."
          },
          {
            "en": "I can talk about drinks like water, coffee, and juice.",
            "pt": "Eu consigo falar sobre bebidas como água, café e suco."
          },
          {
            "en": "I can use 'can' to express what I am able to do (e.g., 'I can cook').",
            "pt": "Eu consigo usar 'can' para expressar o que sou capaz de fazer (ex: 'Eu sei cozinhar')."
          },
          {
            "en": "I can use 'can' to ask for or give permission (e.g., 'Can I open the door?').",
            "pt": "Eu consigo usar 'can' para pedir ou dar permissão (ex: 'Posso abrir a porta?')."
          },
          {
            "en": "I can use 'can't' to express lack of ability or prohibition.",
            "pt": "Eu consigo usar 'can't' para expressar falta de habilidade ou proibição."
          },
          {
            "en": "I can use expressions to talk about future plans (e.g., 'I'm going to travel').",
            "pt": "Eu consigo usar expressões para falar sobre planos futuros (ex: 'Eu vou viajar')."
          }
        ],
        "next": {
          "en": "In the next unit, we will continue to build on communication skills by learning more about daily routines and time expressions.",
          "pt": "Na próxima unidade, continuaremos a desenvolver habilidades de comunicação aprendendo mais sobre rotinas diárias e expressões de tempo."
        }
      }
    }
  },
  {
    "code": "BEGINNER-U14",
    "number": 14,
    "title": "Shopping - Countable and Uncountable Nouns",
    "titlePt": "Compras - Substantivos Contáveis e Incontáveis",
    "cefr": "A1",
    "objective": {
      "en": "To teach shopping and countable and uncountable nouns in context.",
      "pt": "Ensinar compras e substantivos contáveis e incontáveis de forma contextualizada."
    },
    "communicationGoal": {
      "en": "Students will be able to use 'greeting' and shopping vocabulary to communicate in real situations.",
      "pt": "O aluno será capaz de usar 'greeting' e o vocabulário de shopping para se comunicar em situações reais."
    },
    "prerequisites": {
      "en": "Structure: Can / Can't for ability and permission. Vocabulary: Food Drinks.",
      "pt": "Estrutura: Can / Can't para habilidade e permissão. Vocabulário: Comidas e Bebidas."
    },
    "newContent": {
      "en": "Grammar: Countable and uncountable nouns. Vocabulary: Shopping (10 items). Expressions: Greeting.",
      "pt": "Gramática: Substantivos contáveis e incontáveis. Vocabulário: Compras (10 itens). Expressões: Saudações."
    },
    "reviewContent": {
      "en": "Spiral review: Question words (what, where, when, who, why, how) + object pronouns (me, him, her, us, them) (Unit 9). Vocabulary review: Home Rooms (Unit 4).",
      "pt": "Revisão em espiral: Question words (what, where, when, who, why, how) + object pronouns (me, him, her, us, them) (Unidade 9). Revisão de vocabulário: Cômodos da Casa (Unidade 4)."
    },
    "discover": {
      "id": "BEGINNER-U14-DISCOVER",
      "warmUp": {
        "prompt": {
          "en": "Look at the pictures. What do you see? Do you like shopping?",
          "pt": "Olhe as imagens. O que você vê? Você gosta de fazer compras?"
        },
        "phrases": [
          {
            "en": "I see a store.",
            "pt": "Eu vejo uma loja."
          },
          {
            "en": "I see clothes.",
            "pt": "Eu vejo roupas."
          },
          {
            "en": "Yes, I like shopping.",
            "pt": "Sim, eu gosto de fazer compras."
          },
          {
            "en": "No, I don't like shopping.",
            "pt": "Não, eu não gosto de fazer compras."
          }
        ]
      },
      "context": {
        "situation": {
          "en": "Maria wants to buy a new shirt. She is at a clothing store.",
          "pt": "Maria quer comprar uma camisa nova. Ela está em uma loja de roupas."
        },
        "dialogue": [
          {
            "who": "Maria",
            "en": "Good morning!",
            "pt": "Bom dia!"
          },
          {
            "who": "Cashier",
            "en": "Good morning! How can I help you?",
            "pt": "Bom dia! Como posso te ajudar?"
          },
          {
            "who": "Maria",
            "en": "Hi, how are you? I'm looking for a shirt.",
            "pt": "Oi, como vai? Estou procurando uma camisa."
          },
          {
            "who": "Cashier",
            "en": "Nice to meet you. We have many shirts. What size do you need?",
            "pt": "Prazer em te conhecer. Temos muitas camisas. Que tamanho você precisa?"
          },
          {
            "who": "Maria",
            "en": "I need a medium size.",
            "pt": "Preciso de um tamanho médio."
          }
        ]
      },
      "vocabulary": [
        {
          "term": "store",
          "pt": "loja",
          "ipa": "/stɔːr/",
          "definition": "A place where you can buy things.",
          "example": "I like to buy clothes at this store.",
          "examplePt": "Eu gosto de comprar roupas nesta loja."
        },
        {
          "term": "price",
          "pt": "preço",
          "ipa": "/praɪs/",
          "definition": "The amount of money you pay for something.",
          "example": "What is the price of this bag?",
          "examplePt": "Qual é o preço desta bolsa?"
        },
        {
          "term": "receipt",
          "pt": "recibo",
          "ipa": "/rɪˈsiːt/",
          "definition": "A paper showing what you bought and how much you paid.",
          "example": "Can I have the receipt, please?",
          "examplePt": "Posso ter o recibo, por favor?"
        },
        {
          "term": "cash",
          "pt": "dinheiro (em espécie)",
          "ipa": "/kæʃ/",
          "definition": "Money in the form of bills or coins.",
          "example": "I want to pay with cash.",
          "examplePt": "Eu quero pagar com dinheiro em espécie."
        },
        {
          "term": "card",
          "pt": "cartão",
          "ipa": "/kɑːrd/",
          "definition": "A plastic card used to pay for things.",
          "example": "Do you accept credit card?",
          "examplePt": "Vocês aceitam cartão de crédito?"
        },
        {
          "term": "discount",
          "pt": "desconto",
          "ipa": "/ˈdɪskaʊnt/",
          "definition": "A reduction in the usual price of something.",
          "example": "This store has a big discount today.",
          "examplePt": "Esta loja tem um grande desconto hoje."
        },
        {
          "term": "size",
          "pt": "tamanho",
          "ipa": "/saɪz/",
          "definition": "How big or small something is.",
          "example": "What size shoe do you wear?",
          "examplePt": "Que tamanho de sapato você usa?"
        },
        {
          "term": "fitting room",
          "pt": "provador",
          "ipa": "/ˈfɪtɪŋ ruːm/",
          "definition": "A room in a store where you can try on clothes.",
          "example": "The fitting room is over there.",
          "examplePt": "O provador é logo ali."
        },
        {
          "term": "cashier",
          "pt": "caixa",
          "ipa": "/kæˈʃɪər/",
          "definition": "The person in a store who takes your money.",
          "example": "The cashier is very friendly.",
          "examplePt": "O caixa é muito simpático."
        },
        {
          "term": "bag",
          "pt": "sacola",
          "ipa": "/bæɡ/",
          "definition": "A container made of paper or plastic, used for carrying things.",
          "example": "Can I have a bag for my purchase?",
          "examplePt": "Posso ter uma sacola para a minha compra?"
        }
      ],
      "expressions": [
        {
          "en": "Hi, how are you?",
          "pt": "Oi, como você está?"
        },
        {
          "en": "Nice to meet you.",
          "pt": "Prazer em te conhecer."
        },
        {
          "en": "Good morning!",
          "pt": "Bom dia!"
        }
      ],
      "grammar": [
        {
          "title": {
            "en": "Countable and Uncountable Nouns",
            "pt": "Substantivos Contáveis e Incontáveis"
          },
          "examples": [
            {
              "en": "I need an apple.",
              "pt": "Eu preciso de uma maçã."
            },
            {
              "en": "I need some water.",
              "pt": "Eu preciso de um pouco de água."
            },
            {
              "en": "She wants two bananas.",
              "pt": "Ela quer duas bananas."
            },
            {
              "en": "He drinks a lot of coffee.",
              "pt": "Ele bebe muito café."
            },
            {
              "en": "There is a chair in the room.",
              "pt": "Há uma cadeira na sala."
            },
            {
              "en": "There is some furniture in the room.",
              "pt": "Há alguns móveis na sala."
            }
          ],
          "rule": {
            "en": "Countable nouns are things we can count (one apple, two apples). We use 'a/an' or numbers with them. Uncountable nouns are things we cannot count individually (water, coffee). We use 'some' or quantity expressions with them. Uncountable nouns do not have a plural form.",
            "pt": "Substantivos contáveis são coisas que podemos contar (uma maçã, duas maçãs). Usamos 'a/an' ou números com eles. Substantivos incontáveis são coisas que não podemos contar individualmente (água, café). Usamos 'some' ou expressões de quantidade com eles. Substantivos incontáveis não possuem forma plural."
          },
          "mistakes": [
            {
              "en": "Using 'a/an' with uncountable nouns: 'a water' (Incorrect) -> 'some water' (Correct)",
              "pt": "Usar 'a/an' com substantivos incontáveis: 'a water' (Incorreto) -> 'some water' (Correto)"
            },
            {
              "en": "Using plural for uncountable nouns: 'coffees' (Incorrect) -> 'coffee' (Correct, unless referring to types)",
              "pt": "Usar plural para substantivos incontáveis: 'coffees' (Incorreto) -> 'coffee' (Correto, a menos que se refira a tipos)"
            }
          ]
        }
      ],
      "controlledPractice": [
        {
          "id": "b14d-cp1",
          "prompt": {
            "en": "Choose the correct word: I need (a/some) apple.",
            "pt": "Escolha a palavra correta: Eu preciso de (a/some) maçã."
          },
          "options": [
            "a",
            "some"
          ],
          "answer": "a",
          "explanation": {
            "en": "Apple is a countable noun, starting with a vowel sound, so we use 'an' or 'a'. 'an' is not an option, so we choose 'a' here as an example.",
            "pt": "Maçã é um substantivo contável, começando com som de vogal. Usamos 'an' ou 'a'. 'an' não é uma opção, então escolhemos 'a' aqui como exemplo."
          }
        },
        {
          "id": "b14d-cp2",
          "prompt": {
            "en": "Choose the correct word: Can I have (a/some) water?",
            "pt": "Escolha a palavra correta: Posso ter (a/some) água?"
          },
          "options": [
            "a",
            "some"
          ],
          "answer": "some",
          "explanation": {
            "en": "Water is an uncountable noun, so we use 'some'.",
            "pt": "Água é um substantivo incontável, então usamos 'some'."
          }
        },
        {
          "id": "b14d-cp3",
          "prompt": {
            "en": "Is 'money' countable or uncountable?",
            "pt": "É 'dinheiro' contável ou incontável?"
          },
          "options": [
            "Countable",
            "Uncountable"
          ],
          "answer": "Uncountable",
          "explanation": {
            "en": "Money is uncountable in English.",
            "pt": "Dinheiro é incontável em inglês."
          }
        },
        {
          "id": "b14d-cp4",
          "prompt": {
            "en": "Which word is countable: 'information' or 'book'?",
            "pt": "Qual palavra é contável: 'informação' ou 'livro'?"
          },
          "options": [
            "information",
            "book"
          ],
          "answer": "book",
          "explanation": {
            "en": "'Book' is countable (one book, two books). 'Information' is uncountable.",
            "pt": "'Livro' é contável (um livro, dois livros). 'Informação' é incontável."
          }
        }
      ],
      "input": {
        "kind": "listening",
        "title": {
          "en": "Shopping for a Gift",
          "pt": "Comprando um Presente"
        },
        "lines": [
          {
            "en": "Customer: Good morning! I need a gift for my friend.",
            "pt": "Cliente: Bom dia! Eu preciso de um presente para meu amigo."
          },
          {
            "en": "Shop Assistant: Good morning! Nice to meet you. What kind of gift are you looking for?",
            "pt": "Vendedor: Bom dia! Prazer em te conhecer. Que tipo de presente você está procurando?"
          },
          {
            "en": "Customer: I need a new watch. Do you have some nice watches?",
            "pt": "Cliente: Eu preciso de um relógio novo. Vocês têm alguns relógios legais?"
          },
          {
            "en": "Shop Assistant: Yes, we have many watches. This one is $50. It's a good price.",
            "pt": "Vendedor: Sim, temos muitos relógios. Este custa $50. É um bom preço."
          },
          {
            "en": "Customer: Great! I will take it. Can I pay with card?",
            "pt": "Cliente: Ótimo! Vou levar. Posso pagar com cartão?"
          },
          {
            "en": "Shop Assistant: Yes, you can. Here is your receipt and your bag.",
            "pt": "Vendedor: Sim, pode. Aqui está seu recibo e sua sacola."
          }
        ],
        "questions": [
          {
            "id": "b14d-lq1",
            "prompt": {
              "en": "What does the customer want to buy?",
              "pt": "O que o cliente quer comprar?"
            },
            "options": [
              "A shirt",
              "A watch",
              "A bag"
            ],
            "answer": "A watch",
            "explanation": {
              "en": "The customer says: 'I need a new watch.'",
              "pt": "O cliente diz: 'Eu preciso de um relógio novo.'"
            }
          },
          {
            "id": "b14d-lq2",
            "prompt": {
              "en": "How does the customer want to pay?",
              "pt": "Como o cliente quer pagar?"
            },
            "options": [
              "With cash",
              "With card",
              "With a discount"
            ],
            "answer": "With card",
            "explanation": {
              "en": "The customer asks: 'Can I pay with card?'",
              "pt": "O cliente pergunta: 'Posso pagar com cartão?'"
            }
          },
          {
            "id": "b14d-lq3",
            "prompt": {
              "en": "What is the price of the watch?",
              "pt": "Qual é o preço do relógio?"
            },
            "options": [
              "$15",
              "$50",
              "$5"
            ],
            "answer": "$50",
            "explanation": {
              "en": "The shop assistant says: 'This one is $50.'",
              "pt": "O vendedor diz: 'Este custa $50.'"
            }
          }
        ]
      },
      "quickCheck": [
        {
          "id": "b14d-qc1",
          "prompt": {
            "en": "Which word is countable: 'rice' or 'banana'?",
            "pt": "Qual palavra é contável: 'arroz' ou 'banana'?"
          },
          "options": [
            "rice",
            "banana"
          ],
          "answer": "banana",
          "explanation": {
            "en": "You can count bananas (one banana, two bananas). Rice is uncountable.",
            "pt": "Você pode contar bananas (uma banana, duas bananas). Arroz é incontável."
          }
        },
        {
          "id": "b14d-qc2",
          "prompt": {
            "en": "What do you say when you meet someone for the first time?",
            "pt": "O que você diz quando encontra alguém pela primeira vez?"
          },
          "options": [
            "Good morning!",
            "Nice to meet you.",
            "Hi, how are you?"
          ],
          "answer": "Nice to meet you.",
          "explanation": {
            "en": "'Nice to meet you' is a common greeting for a first meeting.",
            "pt": "'Prazer em te conhecer' é uma saudação comum para o primeiro encontro."
          }
        },
        {
          "id": "b14d-qc3",
          "prompt": {
            "en": "Where do you try on clothes in a store?",
            "pt": "Onde você experimenta roupas em uma loja?"
          },
          "options": [
            "cashier",
            "fitting room",
            "store"
          ],
          "answer": "fitting room",
          "explanation": {
            "en": "You try on clothes in a fitting room.",
            "pt": "Você experimenta roupas em um provador."
          }
        },
        {
          "id": "b14d-qc4",
          "prompt": {
            "en": "Complete the sentence: I need (a/some) information.",
            "pt": "Complete a frase: Eu preciso de (a/some) informação."
          },
          "options": [
            "a",
            "some"
          ],
          "answer": "some",
          "explanation": {
            "en": "Information is an uncountable noun, so we use 'some'.",
            "pt": "Informação é um substantivo incontável, então usamos 'some'."
          }
        }
      ]
    },
    "communicate": {
      "id": "BEGINNER-U14-COMMUNICATE",
      "review": [
        {
          "en": "Remember countable and uncountable nouns: 'a shirt' but 'some water'.",
          "pt": "Lembre-se dos substantivos contáveis e incontáveis: 'uma camisa' mas 'um pouco de água'."
        },
        {
          "en": "We learned new shopping words: store, price, receipt, cash, card, discount, size, fitting room, cashier, bag.",
          "pt": "Aprendemos novas palavras de compras: loja, preço, recibo, dinheiro (em espécie), cartão, desconto, tamanho, provador, caixa, sacola."
        },
        {
          "en": "We also practiced greetings: 'Hi, how are you?', 'Nice to meet you.', 'Good morning!'.",
          "pt": "Também praticamos saudações: 'Oi, como você está?', 'Prazer em te conhecer.', 'Bom dia!'."
        }
      ],
      "activities": [
        {
          "id": "b14c-act1",
          "title": {
            "en": "Talk to Your Partner: Shopping Preferences",
            "pt": "Converse com seu Parceiro: Preferências de Compras"
          },
          "instruction": {
            "en": "Ask your partner about their shopping habits and preferences. Use the new vocabulary and greetings.",
            "pt": "Pergunte ao seu parceiro sobre seus hábitos e preferências de compras. Use o novo vocabulário e saudações."
          },
          "phrases": [
            {
              "en": "Do you like shopping for clothes?",
              "pt": "Você gosta de comprar roupas?"
            },
            {
              "en": "Do you prefer to pay with cash or card?",
              "pt": "Você prefere pagar com dinheiro ou cartão?"
            },
            {
              "en": "What is your favorite store?",
              "pt": "Qual é a sua loja favorita?"
            }
          ],
          "check": [
            {
              "id": "b14c-act1-chk1",
              "prompt": {
                "en": "My partner prefers to pay with...",
                "pt": "Meu parceiro prefere pagar com..."
              },
              "options": [
                "cash",
                "card",
                "I don't know"
              ],
              "answer": "cash",
              "explanation": {
                "en": "This checks if you understood your partner's answer.",
                "pt": "Isso verifica se você entendeu a resposta do seu parceiro."
              }
            },
            {
              "id": "b14c-act1-chk2",
              "prompt": {
                "en": "My partner's favorite store is...",
                "pt": "A loja favorita do meu parceiro é..."
              },
              "options": [
                "the supermarket",
                "a clothing store",
                "a book store"
              ],
              "answer": "a clothing store",
              "explanation": {
                "en": "This checks if you remember what your partner said.",
                "pt": "Isso verifica se você se lembra do que seu parceiro disse."
              }
            }
          ]
        },
        {
          "id": "b14c-act2",
          "title": {
            "en": "Ask and Answer: Shopping Scenarios",
            "pt": "Pergunte e Responda: Cenários de Compras"
          },
          "instruction": {
            "en": "Work with a partner. One person asks a question about a shopping scenario, the other answers using new vocabulary.",
            "pt": "Trabalhe com um parceiro. Uma pessoa faz uma pergunta sobre um cenário de compras, a outra responde usando o novo vocabulário."
          },
          "phrases": [
            {
              "en": "I need a new T-shirt. What size do I need?",
              "pt": "Preciso de uma camiseta nova. Que tamanho eu preciso?"
            },
            {
              "en": "I want to buy some food. Where can I go?",
              "pt": "Quero comprar comida. Onde posso ir?"
            },
            {
              "en": "I have some money. How can I pay?",
              "pt": "Tenho algum dinheiro. Como posso pagar?"
            }
          ],
          "check": [
            {
              "id": "b14c-act2-chk1",
              "prompt": {
                "en": "If you want to try on clothes, you go to the...",
                "pt": "Se você quer experimentar roupas, você vai para o(a)..."
              },
              "options": [
                "cashier",
                "fitting room",
                "store"
              ],
              "answer": "fitting room",
              "explanation": {
                "en": "The fitting room is where you try on clothes.",
                "pt": "O provador é onde você experimenta roupas."
              }
            },
            {
              "id": "b14c-act2-chk2",
              "prompt": {
                "en": "After paying, the cashier gives you a...",
                "pt": "Depois de pagar, o caixa te dá um..."
              },
              "options": [
                "size",
                "discount",
                "receipt"
              ],
              "answer": "receipt",
              "explanation": {
                "en": "The receipt shows what you bought.",
                "pt": "O recibo mostra o que você comprou."
              }
            }
          ]
        },
        {
          "id": "b14c-act3",
          "title": {
            "en": "Short Speaking Tasks: Mini Role-plays",
            "pt": "Tarefas Curtas de Fala: Mini Encenações"
          },
          "instruction": {
            "en": "Choose a role (customer or cashier) and act out a short shopping conversation. Use at least two new vocabulary words and one greeting.",
            "pt": "Escolha um papel (cliente ou caixa) e encene uma curta conversa de compras. Use pelo menos duas palavras do novo vocabulário e uma saudação."
          },
          "phrases": [
            {
              "en": "A customer asks for a discount on a bag.",
              "pt": "Um cliente pede um desconto em uma sacola."
            },
            {
              "en": "A customer needs to know the price of a shirt.",
              "pt": "Um cliente precisa saber o preço de uma camisa."
            },
            {
              "en": "A cashier greets a customer and asks how they want to pay.",
              "pt": "Um caixa cumprimenta um cliente e pergunta como ele quer pagar."
            }
          ],
          "check": [
            {
              "id": "b14c-act3-chk1",
              "prompt": {
                "en": "In your role-play, did the customer use a greeting?",
                "pt": "Em sua encenação, o cliente usou uma saudação?"
              },
              "options": [
                "Yes",
                "No"
              ],
              "answer": "Yes",
              "explanation": {
                "en": "Greetings are important for starting conversations.",
                "pt": "Saudações são importantes para iniciar conversas."
              }
            },
            {
              "id": "b14c-act3-chk2",
              "prompt": {
                "en": "Did you use at least two new vocabulary words?",
                "pt": "Você usou pelo menos duas palavras do novo vocabulário?"
              },
              "options": [
                "Yes",
                "No"
              ],
              "answer": "Yes",
              "explanation": {
                "en": "Using new vocabulary helps you practice.",
                "pt": "Usar o novo vocabulário ajuda você a praticar."
              }
            }
          ]
        },
        {
          "id": "b14c-act4",
          "title": {
            "en": "Listening Tasks: Understand the Request",
            "pt": "Tarefas de Escuta: Entender o Pedido"
          },
          "instruction": {
            "en": "Listen to short audio clips of people in a store. Identify what they want or what the situation is.",
            "pt": "Ouça pequenos clipes de áudio de pessoas em uma loja. Identifique o que elas querem ou qual é a situação."
          },
          "phrases": [
            {
              "en": "Audio: 'Good morning! I need a new pair of shoes, size 38.'",
              "pt": "Áudio: 'Bom dia! Eu preciso de um novo par de sapatos, tamanho 38.'"
            },
            {
              "en": "Audio: 'Hi, how much is this jacket? I only have cash.'",
              "pt": "Áudio: 'Oi, quanto custa esta jaqueta? Eu só tenho dinheiro em espécie.'"
            },
            {
              "en": "Audio: 'Excuse me, where is the fitting room? I want to try this dress.'",
              "pt": "Áudio: 'Com licença, onde é o provador? Eu quero experimentar este vestido.'"
            }
          ],
          "check": [
            {
              "id": "b14c-act4-chk1",
              "prompt": {
                "en": "In the first audio, what size shoes does the person need?",
                "pt": "No primeiro áudio, qual o tamanho de sapato que a pessoa precisa?"
              },
              "options": [
                "36",
                "38",
                "40"
              ],
              "answer": "38",
              "explanation": {
                "en": "The person specifically asks for 'size 38'.",
                "pt": "A pessoa pede especificamente 'tamanho 38'."
              }
            },
            {
              "id": "b14c-act4-chk2",
              "prompt": {
                "en": "In the second audio, how does the person plan to pay?",
                "pt": "No segundo áudio, como a pessoa planeja pagar?"
              },
              "options": [
                "With card",
                "With cash",
                "With a discount"
              ],
              "answer": "With cash",
              "explanation": {
                "en": "The person says: 'I only have cash.'",
                "pt": "A pessoa diz: 'Eu só tenho dinheiro em espécie.'"
              }
            }
          ]
        },
        {
          "id": "b14c-act5",
          "title": {
            "en": "Real-life Communication Activity: Plan a Shopping Trip",
            "pt": "Atividade de Comunicação da Vida Real: Planejar uma Viagem de Compras"
          },
          "instruction": {
            "en": "Imagine you and your partner are going shopping. Discuss what you want to buy, where to go, and how to pay. Plan your trip.",
            "pt": "Imagine que você e seu parceiro vão fazer compras. Discutam o que querem comprar, para onde ir e como pagar. Planejem sua viagem."
          },
          "phrases": [
            {
              "en": "Let's buy some fruit. We can go to the market.",
              "pt": "Vamos comprar algumas frutas. Podemos ir ao mercado."
            },
            {
              "en": "I need a new pair of jeans. I'll pay with my card.",
              "pt": "Preciso de uma nova calça jeans. Vou pagar com meu cartão."
            },
            {
              "en": "Good morning! We want to find a gift for our mom. Do you have any discounts?",
              "pt": "Bom dia! Queremos encontrar um presente para nossa mãe. Vocês têm algum desconto?"
            }
          ],
          "check": [
            {
              "id": "b14c-act5-chk1",
              "prompt": {
                "en": "Did you decide on at least one item to buy?",
                "pt": "Você decidiu sobre pelo menos um item para comprar?"
              },
              "options": [
                "Yes",
                "No"
              ],
              "answer": "Yes",
              "explanation": {
                "en": "The goal is to plan a shopping trip.",
                "pt": "O objetivo é planejar uma viagem de compras."
              }
            },
            {
              "id": "b14c-act5-chk2",
              "prompt": {
                "en": "Did you use new vocabulary for payment methods (cash/card)?",
                "pt": "Você usou vocabulário novo para métodos de pagamento (dinheiro/cartão)?"
              },
              "options": [
                "Yes",
                "No"
              ],
              "answer": "Yes",
              "explanation": {
                "en": "Using new vocabulary is important for this activity.",
                "pt": "Usar o vocabulário novo é importante para esta atividade."
              }
            }
          ]
        }
      ],
      "challenge": {
        "id": "b14c-challenge1",
        "title": {
          "en": "Shopping Role-play: Buying a Present",
          "pt": "Encenação de Compras: Comprando um Presente"
        },
        "instruction": {
          "en": "In pairs, imagine one of you is a customer and the other is a shop assistant. The customer needs to buy a specific gift (e.g., a book, a shirt, a small plant). They must ask about the price, check for discounts, and choose a payment method. The shop assistant must greet the customer, answer questions, and offer help. Remember to use greetings and the new shopping vocabulary, including countable/uncountable nouns.",
          "pt": "Em duplas, imagine que um de vocês é um cliente e o outro é um vendedor. O cliente precisa comprar um presente específico (por exemplo, um livro, uma camisa, uma pequena planta). Ele deve perguntar sobre o preço, verificar se há descontos e escolher um método de pagamento. O vendedor deve cumprimentar o cliente, responder perguntas e oferecer ajuda. Lembre-se de usar saudações e o novo vocabulário de compras, incluindo substantivos contáveis/incontáveis."
        },
        "phrases": [
          {
            "en": "Customer: Good morning! I need a nice shirt. What is the price of this one?",
            "pt": "Cliente: Bom dia! Eu preciso de uma camisa bonita. Qual é o preço desta?"
          },
          {
            "en": "Shop Assistant: Nice to meet you! This shirt is $30. We have some discounts today.",
            "pt": "Vendedor: Prazer em te conhecer! Esta camisa custa $30. Temos alguns descontos hoje."
          },
          {
            "en": "Customer: Can I try it in the fitting room? I will pay with card.",
            "pt": "Cliente: Posso experimentar no provador? Pagarei com cartão."
          }
        ],
        "check": [
          {
            "id": "b14c-ch-chk1",
            "prompt": {
              "en": "Did both partners use at least one greeting?",
              "pt": "Ambos os parceiros usaram pelo menos uma saudação?"
            },
            "options": [
              "Yes",
              "No"
            ],
            "answer": "Yes",
            "explanation": {
              "en": "Effective communication starts with proper greetings.",
              "pt": "Uma comunicação eficaz começa com saudações adequadas."
            }
          },
          {
            "id": "b14c-ch-chk2",
            "prompt": {
              "en": "Did the customer ask about the price or a discount?",
              "pt": "O cliente perguntou sobre o preço ou um desconto?"
            },
            "options": [
              "Yes",
              "No"
            ],
            "answer": "Yes",
            "explanation": {
              "en": "Asking about prices or discounts is a key shopping action.",
              "pt": "Perguntar sobre preços ou descontos é uma ação chave de compras."
            }
          }
        ]
      },
      "lessonReview": {
        "summary": {
          "en": "In this unit, we learned about shopping, new vocabulary, greetings, and important grammar: countable and uncountable nouns. You can now talk about things you want to buy and how to pay.",
          "pt": "Nesta unidade, aprendemos sobre compras, novo vocabulário, saudações e uma gramática importante: substantivos contáveis e incontáveis. Agora você pode falar sobre coisas que quer comprar e como pagar."
        },
        "canDo": [
          {
            "en": "Use greetings like 'Good morning!' and 'Nice to meet you.'",
            "pt": "Usar saudações como 'Bom dia!' e 'Prazer em te conhecer.'"
          },
          {
            "en": "Identify and use 10 shopping vocabulary items.",
            "pt": "Identificar e usar 10 itens de vocabulário de compras."
          },
          {
            "en": "Distinguish between countable and uncountable nouns and use them correctly.",
            "pt": "Distinguir entre substantivos contáveis e incontáveis e usá-los corretamente."
          },
          {
            "en": "Ask and answer simple questions in a shopping context.",
            "pt": "Fazer e responder perguntas simples em um contexto de compras."
          }
        ],
        "next": {
          "en": "Next, we will explore Unit 15: Ordering Food, focusing on modal verbs for requests.",
          "pt": "Em seguida, exploraremos a Unidade 15: Pedindo Comida, focando em verbos modais para fazer pedidos."
        }
      }
    }
  },
  {
    "code": "BEGINNER-U15",
    "number": 15,
    "title": "Quantities – Some and Any",
    "titlePt": "Quantidades – Some e Any",
    "cefr": "A1",
    "objective": {
      "en": "To teach quantities and the use of 'some' (affirmative) and 'any' (negative/questions) in context.",
      "pt": "Ensinar quantities e some (afirmativa) e any (negativa/perguntas) de forma contextualizada."
    },
    "communicationGoal": {
      "en": "The student will be able to use 'asking info' and quantity vocabulary to communicate in real situations.",
      "pt": "O aluno será capaz de usar 'pedir informações' e o vocabulário de quantities para se comunicar em situações reais."
    },
    "prerequisites": {
      "en": "Structure: Countable and uncountable nouns. Vocabulary: Shopping.",
      "pt": "Estrutura: Countable and uncountable nouns. Vocabulário: Shopping."
    },
    "newContent": {
      "en": "Grammar: Some (affirmative) and Any (negative/questions). Vocabulary: Quantities (10 lexical items). Expressions: Asking Info.",
      "pt": "Grammar: Some (afirmativa) e Any (negativa/perguntas). Vocabulário: Quantidades (10 itens lexicais). Expressões: Pedir Informações."
    },
    "reviewContent": {
      "en": "Spiral review: Prepositions of time and place (at, in, on, next to, between) (Unit 10). Vocabulary review: Possessions (Unit 5).",
      "pt": "Revisão em espiral: Preposições de tempo e lugar (at, in, on, next to, between) (Unidade 10). Revisão de vocabulário: Posses (Unidade 5)."
    },
    "discover": {
      "id": "BEGINNER-U15-DISCOVER",
      "warmUp": {
        "prompt": {
          "en": "Look at the images. What do you see? How much food is there? Talk to a classmate.",
          "pt": "Olhe as imagens. O que você vê? Quanta comida tem? Converse com um colega."
        },
        "phrases": [
          {
            "en": "I see a lot of apples.",
            "pt": "Eu vejo muitas maçãs."
          },
          {
            "en": "There is some bread.",
            "pt": "Tem um pouco de pão."
          },
          {
            "en": "There are a few eggs.",
            "pt": "Tem alguns ovos."
          }
        ]
      },
      "context": {
        "situation": {
          "en": "Maria and João are at the supermarket. They need to buy food for a party.",
          "pt": "Maria e João estão no supermercado. Eles precisam comprar comida para uma festa."
        },
        "dialogue": [
          {
            "who": "Maria",
            "en": "João, do we have some juice at home?",
            "pt": "João, nós temos um pouco de suco em casa?"
          },
          {
            "who": "João",
            "en": "No, we don't have any juice. We need to buy a lot.",
            "pt": "Não, nós não temos nenhum suco. Precisamos comprar muito."
          },
          {
            "who": "Maria",
            "en": "Okay. And what about bread? Is there any bread?",
            "pt": "Ok. E pão? Tem algum pão?"
          },
          {
            "who": "João",
            "en": "Yes, there is some bread. But not enough for the party.",
            "pt": "Sim, tem um pouco de pão. Mas não o suficiente para a festa."
          },
          {
            "who": "Maria",
            "en": "We need some fruit too. Maybe a few bananas and some oranges.",
            "pt": "Precisamos de algumas frutas também. Talvez algumas bananas e algumas laranjas."
          },
          {
            "who": "João",
            "en": "Good idea! We have plenty of snacks, so we don't need any more.",
            "pt": "Boa ideia! Nós temos muitos salgadinhos, então não precisamos de mais nenhum."
          }
        ]
      },
      "vocabulary": [
        {
          "term": "a little",
          "pt": "um pouco de",
          "ipa": "/ə ˈlɪtl/",
          "definition": "A small amount of an uncountable noun.",
          "example": "There is a little sugar in my coffee.",
          "examplePt": "Tem um pouco de açúcar no meu café."
        },
        {
          "term": "a lot of",
          "pt": "muito(s)/muita(s)",
          "ipa": "/ə lɒt ɒv/",
          "definition": "A large quantity of countable or uncountable nouns.",
          "example": "We have a lot of friends coming to the party.",
          "examplePt": "Nós temos muitos amigos vindo para a festa."
        },
        {
          "term": "some",
          "pt": "algum(ns)/alguma(s), um pouco de",
          "ipa": "/sʌm/",
          "definition": "An unspecified quantity, used in affirmative sentences for both countable and uncountable nouns.",
          "example": "I need some water.",
          "examplePt": "Eu preciso de um pouco de água."
        },
        {
          "term": "any",
          "pt": "algum(ns)/alguma(s), nenhum(a)",
          "ipa": "/ˈɛni/",
          "definition": "Used in negative sentences and questions for both countable and uncountable nouns.",
          "example": "Do you have any questions?",
          "examplePt": "Você tem alguma pergunta?"
        },
        {
          "term": "enough",
          "pt": "o suficiente",
          "ipa": "/ɪˈnʌf/",
          "definition": "As much as is necessary.",
          "example": "We have enough food for everyone.",
          "examplePt": "Nós temos comida o suficiente para todos."
        },
        {
          "term": "too much",
          "pt": "demais (quantidade)",
          "ipa": "/tuː mʌtʃ/",
          "definition": "More than is necessary, used with uncountable nouns.",
          "example": "There is too much salt in the soup.",
          "examplePt": "Tem sal demais na sopa."
        },
        {
          "term": "a few",
          "pt": "alguns/algumas (poucos/poucas)",
          "ipa": "/ə fjuː/",
          "definition": "A small number of countable nouns.",
          "example": "I have a few books on my shelf.",
          "examplePt": "Eu tenho alguns livros na minha estante."
        },
        {
          "term": "several",
          "pt": "vários/várias",
          "ipa": "/ˈsɛvrəl/",
          "definition": "More than two but not many, used with countable nouns.",
          "example": "Several students are waiting outside.",
          "examplePt": "Vários alunos estão esperando lá fora."
        },
        {
          "term": "plenty of",
          "pt": "muito(s)/muita(s), bastante",
          "ipa": "/ˈplɛnti ɒv/",
          "definition": "A large quantity that is enough or more than enough, used with countable and uncountable nouns.",
          "example": "We have plenty of time to finish.",
          "examplePt": "Nós temos bastante tempo para terminar."
        },
        {
          "term": "none",
          "pt": "nenhum/nenhuma",
          "ipa": "/nʌn/",
          "definition": "Not any; no one or no amount.",
          "example": "There is none left.",
          "examplePt": "Não sobrou nenhum."
        }
      ],
      "expressions": [
        {
          "en": "What's your name?",
          "pt": "Qual é o seu nome?"
        },
        {
          "en": "Where are you from?",
          "pt": "De onde você é?"
        },
        {
          "en": "What do you do?",
          "pt": "O que você faz? (qual a sua profissão/ocupação?)"
        },
        {
          "en": "How much...?",
          "pt": "Quanto...?"
        },
        {
          "en": "How many...?",
          "pt": "Quantos/Quantas...?"
        }
      ],
      "grammar": [
        {
          "title": {
            "en": "Some (affirmative) and Any (negative/questions)",
            "pt": "Some (afirmativa) e Any (negativa/perguntas)"
          },
          "examples": [
            {
              "en": "There is some milk in the fridge.",
              "pt": "Tem um pouco de leite na geladeira."
            },
            {
              "en": "Is there any bread?",
              "pt": "Tem algum pão?"
            },
            {
              "en": "We don't have any apples.",
              "pt": "Nós não temos maçãs."
            }
          ],
          "rule": {
            "en": "Use 'some' in affirmative sentences for both countable and uncountable nouns. Use 'any' in negative sentences and questions for both countable and uncountable nouns.",
            "pt": "Use 'some' em frases afirmativas para substantivos contáveis e incontáveis. Use 'any' em frases negativas e perguntas para substantivos contáveis e incontáveis."
          },
          "mistakes": [
            {
              "en": "Incorrect: I don't have some money.",
              "pt": "Incorreto: Eu não tenho algum dinheiro."
            },
            {
              "en": "Correct: I don't have any money.",
              "pt": "Correto: Eu não tenho nenhum dinheiro."
            }
          ]
        },
        {
          "title": {
            "en": "Pronunciation focus: Intonation in questions",
            "pt": "Foco na pronúncia: Entonação em perguntas"
          },
          "examples": [
            {
              "en": "Is there any milk? (rising intonation)",
              "pt": "Tem leite? (entonacão ascendente)"
            },
            {
              "en": "Do you need any help? (rising intonation)",
              "pt": "Você precisa de ajuda? (entonação ascendente)"
            },
            {
              "en": "What do you want? (falling intonation)",
              "pt": "O que você quer? (entonação descendente)"
            }
          ],
          "rule": {
            "en": "Yes/No questions usually have a rising intonation at the end. Wh-questions usually have a falling intonation.",
            "pt": "Perguntas de Sim/Não geralmente têm entonação ascendente no final. Perguntas com Wh- (What, Where, etc.) geralmente têm entonação descendente."
          },
          "mistakes": [
            {
              "en": "Incorrect: 'Is there any milk?' with falling intonation.",
              "pt": "Incorreto: 'Tem leite?' com entonação descendente."
            },
            {
              "en": "Incorrect: 'What's your name?' with rising intonation.",
              "pt": "Incorreto: 'Qual é o seu nome?' com entonação ascendente."
            }
          ]
        }
      ],
      "controlledPractice": [
        {
          "id": "b15d-cp-1",
          "prompt": {
            "en": "Choose the correct word: 'We need ___ apples for the cake.'",
            "pt": "Escolha a palavra correta: 'Nós precisamos ___ maçãs para o bolo.'"
          },
          "options": [
            "any",
            "some",
            "a little"
          ],
          "answer": "some",
          "explanation": {
            "en": "'Some' is used in affirmative sentences with countable nouns.",
            "pt": "'Some' é usado em frases afirmativas com substantivos contáveis."
          }
        },
        {
          "id": "b15d-cp-2",
          "prompt": {
            "en": "Choose the correct word: 'Is there ___ coffee left?'",
            "pt": "Escolha a palavra correta: 'Sobrou ___ café?'"
          },
          "options": [
            "some",
            "any",
            "a lot of"
          ],
          "answer": "any",
          "explanation": {
            "en": "'Any' is used in questions with uncountable nouns.",
            "pt": "'Any' é usado em perguntas com substantivos incontáveis."
          }
        },
        {
          "id": "b15d-cp-3",
          "prompt": {
            "en": "Complete the sentence: 'I don't have ___ time today.'",
            "pt": "Complete a frase: 'Eu não tenho ___ tempo hoje.'"
          },
          "options": [
            "some",
            "a few",
            "any"
          ],
          "answer": "any",
          "explanation": {
            "en": "'Any' is used in negative sentences with uncountable nouns.",
            "pt": "'Any' é usado em frases negativas com substantivos incontáveis."
          }
        },
        {
          "id": "b15d-cp-4",
          "prompt": {
            "en": "Complete the sentence: 'There are ___ students in the classroom.'",
            "pt": "Complete a frase: 'Tem ___ alunos na sala de aula.'"
          },
          "options": [
            "a little",
            "several",
            "too much"
          ],
          "answer": "several",
          "explanation": {
            "en": "'Several' is used with countable nouns to mean more than a few.",
            "pt": "'Several' é usado com substantivos contáveis para significar mais do que alguns."
          }
        }
      ],
      "input": {
        "kind": "reading",
        "title": {
          "en": "Shopping List",
          "pt": "Lista de Compras"
        },
        "lines": [
          {
            "en": "Hi Ana,",
            "pt": "Oi Ana,"
          },
          {
            "en": "I'm going to the supermarket. Do we need anything?",
            "pt": "Estou indo ao supermercado. Precisamos de alguma coisa?"
          },
          {
            "en": "I remember we have some milk, but not a lot. Maybe enough for breakfast.",
            "pt": "Lembro que temos um pouco de leite, mas não muito. Talvez o suficiente para o café da manhã."
          },
          {
            "en": "We don't have any juice, so please buy some.",
            "pt": "Nós não temos nenhum suco, então por favor compre um pouco."
          },
          {
            "en": "And there are a few apples, but no oranges. So, let's get some oranges.",
            "pt": "E tem algumas maçãs, mas nenhuma laranja. Então, vamos pegar algumas laranjas."
          },
          {
            "en": "Also, we have plenty of bread. We don't need any more.",
            "pt": "Além disso, temos muito pão. Não precisamos de mais nenhum."
          },
          {
            "en": "Do we need any sugar? I think we have enough.",
            "pt": "Precisamos de açúcar? Acho que temos o suficiente."
          },
          {
            "en": "Thanks! See you later.",
            "pt": "Obrigado! Até mais."
          }
        ],
        "questions": [
          {
            "id": "b15d-in-1",
            "prompt": {
              "en": "Does Ana need to buy milk?",
              "pt": "Ana precisa comprar leite?"
            },
            "options": [
              "Yes, a lot.",
              "No, they have some.",
              "Yes, not enough for breakfast."
            ],
            "answer": "No, they have some.",
            "explanation": {
              "en": "The text says 'we have some milk'.",
              "pt": "O texto diz 'nós temos um pouco de leite'."
            }
          },
          {
            "id": "b15d-in-2",
            "prompt": {
              "en": "What fruit do they need to buy?",
              "pt": "Qual fruta eles precisam comprar?"
            },
            "options": [
              "Apples",
              "Oranges",
              "Both apples and oranges"
            ],
            "answer": "Oranges",
            "explanation": {
              "en": "The text says 'there are a few apples, but no oranges. So, let's get some oranges.'",
              "pt": "O texto diz 'tem algumas maçãs, mas nenhuma laranja. Então, vamos pegar algumas laranjas'."
            }
          },
          {
            "id": "b15d-in-3",
            "prompt": {
              "en": "Do they need more bread?",
              "pt": "Eles precisam de mais pão?"
            },
            "options": [
              "Yes, a lot.",
              "No, they have plenty of bread.",
              "Yes, a little."
            ],
            "answer": "No, they have plenty of bread.",
            "explanation": {
              "en": "The text says 'we have plenty of bread. We don't need any more.'",
              "pt": "O texto diz 'nós temos muito pão. Não precisamos de mais nenhum'."
            }
          }
        ]
      },
      "quickCheck": [
        {
          "id": "b15d-qc-1",
          "prompt": {
            "en": "Choose the correct option: 'I need ___ help with this exercise.'",
            "pt": "Escolha a opção correta: 'Eu preciso ___ ajuda com este exercício.'"
          },
          "options": [
            "any",
            "some",
            "a few"
          ],
          "answer": "some",
          "explanation": {
            "en": "'Some' is used in affirmative sentences.",
            "pt": "'Some' é usado em frases afirmativas."
          }
        },
        {
          "id": "b15d-qc-2",
          "prompt": {
            "en": "Choose the correct option: 'Are there ___ new students in your class?'",
            "pt": "Escolha a opção correta: 'Tem ___ alunos novos na sua turma?'"
          },
          "options": [
            "some",
            "a little",
            "any"
          ],
          "answer": "any",
          "explanation": {
            "en": "'Any' is used in questions.",
            "pt": "'Any' é usado em perguntas."
          }
        },
        {
          "id": "b15d-qc-3",
          "prompt": {
            "en": "Complete the sentence: 'We have ___ water, but not much.'",
            "pt": "Complete a frase: 'Nós temos ___ água, mas não muita.'"
          },
          "options": [
            "a lot of",
            "a little",
            "several"
          ],
          "answer": "a little",
          "explanation": {
            "en": "'A little' is used for a small amount of an uncountable noun.",
            "pt": "'A little' é usado para uma pequena quantidade de um substantivo incontável."
          }
        },
        {
          "id": "b15d-qc-4",
          "prompt": {
            "en": "Which sentence is negative?",
            "pt": "Qual frase é negativa?"
          },
          "options": [
            "I have some friends.",
            "She doesn't have any pets.",
            "There is a lot of noise."
          ],
          "answer": "She doesn't have any pets.",
          "explanation": {
            "en": "The verb 'doesn't have' makes the sentence negative.",
            "pt": "O verbo 'doesn't have' torna a frase negativa."
          }
        }
      ]
    },
    "communicate": {
      "id": "BEGINNER-U15-COMMUNICATE",
      "review": [
        {
          "en": "We learned to use 'some' for affirmative sentences and 'any' for negative sentences and questions.",
          "pt": "Aprendemos a usar 'some' para frases afirmativas e 'any' para frases negativas e perguntas."
        },
        {
          "en": "We also learned new words for quantities like 'a little', 'a lot of', 'enough', 'too much', 'a few', 'several', 'plenty of', and 'none'.",
          "pt": "Também aprendemos novas palavras para quantidades como 'a little', 'a lot of', 'enough', 'too much', 'a few', 'several', 'plenty of', e 'none'."
        },
        {
          "en": "Remember the intonation for questions: rising for Yes/No questions and falling for Wh-questions.",
          "pt": "Lembre-se da entonação para perguntas: ascendente para perguntas de Sim/Não e descendente para perguntas com Wh-."
        }
      ],
      "activities": [
        {
          "id": "b15c-act-1",
          "title": {
            "en": "Give Your Opinion",
            "pt": "Dê Sua Opinião"
          },
          "instruction": {
            "en": "Read the statements and say if you agree or disagree, explaining why using quantity words.",
            "pt": "Leia as afirmações e diga se você concorda ou discorda, explicando o porquê usando palavras de quantidade."
          },
          "phrases": [
            {
              "en": "Our city has too much traffic.",
              "pt": "Nossa cidade tem trânsito demais."
            },
            {
              "en": "There is enough clean water for everyone in the world.",
              "pt": "Tem água limpa o suficiente para todos no mundo."
            },
            {
              "en": "People spend a lot of time on their phones.",
              "pt": "As pessoas gastam muito tempo em seus celulares."
            }
          ],
          "check": [
            {
              "id": "b15c-act-1-1",
              "prompt": {
                "en": "Do you think there is enough public transport in your city?",
                "pt": "Você acha que tem transporte público suficiente na sua cidade?"
              },
              "options": [
                "Yes, there is enough.",
                "No, there isn't enough.",
                "I don't know."
              ],
              "answer": "No, there isn't enough.",
              "explanation": {
                "en": "The answer should reflect an opinion about the quantity of public transport.",
                "pt": "A resposta deve refletir uma opinião sobre a quantidade de transporte público."
              }
            },
            {
              "id": "b15c-act-1-2",
              "prompt": {
                "en": "Do you think we have too much homework?",
                "pt": "Você acha que temos tarefa de casa demais?"
              },
              "options": [
                "Yes, too much.",
                "No, it's enough.",
                "No, we have a little."
              ],
              "answer": "Yes, too much.",
              "explanation": {
                "en": "The answer should reflect an opinion about the quantity of homework.",
                "pt": "A resposta deve refletir uma opinião sobre a quantidade de tarefa de casa."
              }
            }
          ]
        },
        {
          "id": "b15c-act-2",
          "title": {
            "en": "Writing Tasks",
            "pt": "Tarefas de Escrita"
          },
          "instruction": {
            "en": "Write short sentences about your home and what you have/don't have, using 'some' and 'any' and quantity words.",
            "pt": "Escreva frases curtas sobre sua casa e o que você tem/não tem, usando 'some' e 'any' e palavras de quantidade."
          },
          "phrases": [
            {
              "en": "In my fridge, there is some cheese.",
              "pt": "Na minha geladeira, tem um pouco de queijo."
            },
            {
              "en": "I don't have any pets.",
              "pt": "Eu não tenho nenhum animal de estimação."
            },
            {
              "en": "There are a few books on my table.",
              "pt": "Tem alguns livros na minha mesa."
            }
          ],
          "check": [
            {
              "id": "b15c-act-2-1",
              "prompt": {
                "en": "Which sentence correctly uses 'some'?",
                "pt": "Qual frase usa 'some' corretamente?"
              },
              "options": [
                "Do you have some questions?",
                "I need some water.",
                "We don't have some milk."
              ],
              "answer": "I need some water.",
              "explanation": {
                "en": "'Some' is used in affirmative sentences.",
                "pt": "'Some' é usado em frases afirmativas."
              }
            },
            {
              "id": "b15c-act-2-2",
              "prompt": {
                "en": "Which sentence correctly uses 'any'?",
                "pt": "Qual frase usa 'any' corretamente?"
              },
              "options": [
                "I have any brothers.",
                "Is there any sugar?",
                "There is any fruit."
              ],
              "answer": "Is there any sugar?",
              "explanation": {
                "en": "'Any' is used in questions.",
                "pt": "'Any' é usado em perguntas."
              }
            }
          ]
        },
        {
          "id": "b15c-act-3",
          "title": {
            "en": "Reading Comprehension",
            "pt": "Compreensão de Leitura"
          },
          "instruction": {
            "en": "Read the text about a person's routine and answer the questions.",
            "pt": "Leia o texto sobre a rotina de uma pessoa e responda às perguntas."
          },
          "phrases": [
            {
              "en": "Every morning, I drink some coffee. I don't eat any bread, just a few crackers. For lunch, I usually have plenty of vegetables. In the evening, I sometimes read several books.",
              "pt": "Todas as manhãs, eu tomo um pouco de café. Não como pão, apenas alguns biscoitos. Para o almoço, geralmente como muitos vegetais. À noite, às vezes leio vários livros."
            }
          ],
          "check": [
            {
              "id": "b15c-act-3-1",
              "prompt": {
                "en": "Does the person eat bread for breakfast?",
                "pt": "A pessoa come pão no café da manhã?"
              },
              "options": [
                "Yes, some bread.",
                "No, not any bread.",
                "Yes, a lot of bread."
              ],
              "answer": "No, not any bread.",
              "explanation": {
                "en": "The text says 'I don't eat any bread'.",
                "pt": "O texto diz 'Eu não como pão'."
              }
            },
            {
              "id": "b15c-act-3-2",
              "prompt": {
                "en": "What does the person have for lunch?",
                "pt": "O que a pessoa come no almoço?"
              },
              "options": [
                "A little vegetables.",
                "Plenty of vegetables.",
                "Some fruit."
              ],
              "answer": "Plenty of vegetables.",
              "explanation": {
                "en": "The text says 'I usually have plenty of vegetables'.",
                "pt": "O texto diz 'geralmente como muitos vegetais'."
              }
            }
          ]
        },
        {
          "id": "b15c-act-4",
          "title": {
            "en": "Answer the Questions",
            "pt": "Responda às Perguntas"
          },
          "instruction": {
            "en": "Answer the following questions about your daily life using quantity words.",
            "pt": "Responda às seguintes perguntas sobre sua vida diária usando palavras de quantidade."
          },
          "phrases": [
            {
              "en": "Do you drink a lot of coffee?",
              "pt": "Você toma muito café?"
            },
            {
              "en": "Are there any parks near your house?",
              "pt": "Tem parques perto da sua casa?"
            },
            {
              "en": "Do you have enough time for hobbies?",
              "pt": "Você tem tempo suficiente para hobbies?"
            }
          ],
          "check": [
            {
              "id": "b15c-act-4-1",
              "prompt": {
                "en": "Do you have any brothers or sisters?",
                "pt": "Você tem irmãos ou irmãs?"
              },
              "options": [
                "Yes, I have some.",
                "No, I don't have some.",
                "No, I don't have any."
              ],
              "answer": "No, I don't have any.",
              "explanation": {
                "en": "'Any' is used in negative sentences.",
                "pt": "'Any' é usado em frases negativas."
              }
            },
            {
              "id": "b15c-act-4-2",
              "prompt": {
                "en": "Do you eat a lot of fruit?",
                "pt": "Você come muita fruta?"
              },
              "options": [
                "Yes, I eat a lot of fruit.",
                "No, I don't eat some fruit.",
                "Yes, I eat any fruit."
              ],
              "answer": "Yes, I eat a lot of fruit.",
              "explanation": {
                "en": "This is a natural way to express a large quantity of fruit.",
                "pt": "Esta é uma forma natural de expressar uma grande quantidade de fruta."
              }
            }
          ]
        },
        {
          "id": "b15c-act-5",
          "title": {
            "en": "Complete the Conversation",
            "pt": "Complete a Conversa"
          },
          "instruction": {
            "en": "Complete the dialogue with the correct quantity words.",
            "pt": "Complete o diálogo com as palavras de quantidade corretas."
          },
          "phrases": [
            {
              "en": "A: Do we have ___ eggs?",
              "pt": "A: Nós temos ___ ovos?"
            },
            {
              "en": "B: Yes, there are ___ eggs in the fridge, but not many.",
              "pt": "B: Sim, tem ___ ovos na geladeira, mas não muitos."
            },
            {
              "en": "A: Okay. And do we need ___ milk?",
              "pt": "A: Ok. E precisamos de ___ leite?"
            },
            {
              "en": "B: No, we have ___ milk. Plenty of it!",
              "pt": "B: Não, nós temos ___ leite. Bastante!"
            }
          ],
          "check": [
            {
              "id": "b15c-act-5-1",
              "prompt": {
                "en": "Complete the first sentence: 'Do we have ___ apples?'",
                "pt": "Complete a primeira frase: 'Nós temos ___ maçãs?'"
              },
              "options": [
                "some",
                "any",
                "a little"
              ],
              "answer": "any",
              "explanation": {
                "en": "'Any' is used in questions.",
                "pt": "'Any' é usado em perguntas."
              }
            },
            {
              "id": "b15c-act-5-2",
              "prompt": {
                "en": "Complete the sentence: 'I want ___ sugar in my tea, please.'",
                "pt": "Complete a frase: 'Eu quero ___ açúcar no meu chá, por favor.'"
              },
              "options": [
                "any",
                "a few",
                "some"
              ],
              "answer": "some",
              "explanation": {
                "en": "'Some' is used in affirmative sentences for a desired quantity.",
                "pt": "'Some' é usado em frases afirmativas para uma quantidade desejada."
              }
            }
          ]
        }
      ],
      "challenge": {
        "id": "b15c-challenge",
        "title": {
          "en": "Plan a Party!",
          "pt": "Planeje uma Festa!"
        },
        "instruction": {
          "en": "Imagine you are planning a small party for 5 friends. Discuss with a partner what food and drinks you need. Ask and answer questions about quantities. Use 'some', 'any', 'a lot of', 'enough', etc.",
          "pt": "Imagine que você está planejando uma pequena festa para 5 amigos. Discuta com um parceiro quais comidas e bebidas vocês precisam. Faça e responda perguntas sobre quantidades. Use 'some', 'any', 'a lot of', 'enough', etc."
        },
        "phrases": [
          {
            "en": "Do we need any snacks?",
            "pt": "Precisamos de salgadinhos?"
          },
          {
            "en": "Yes, let's get some chips and a lot of soda.",
            "pt": "Sim, vamos pegar algumas batatinhas e muito refrigerante."
          },
          {
            "en": "Is there enough juice for everyone?",
            "pt": "Tem suco suficiente para todos?"
          },
          {
            "en": "No, we don't have any juice. We need to buy several bottles.",
            "pt": "Não, nós não temos nenhum suco. Precisamos comprar várias garrafas."
          }
        ],
        "check": [
          {
            "id": "b15c-chall-1",
            "prompt": {
              "en": "What would you say if you need a specific number of items for the party?",
              "pt": "O que você diria se precisasse de um número específico de itens para a festa?"
            },
            "options": [
              "We need some chairs.",
              "We need five chairs.",
              "We need any chairs."
            ],
            "answer": "We need five chairs.",
            "explanation": {
              "en": "For a specific number, use the number. 'Some' is for unspecified quantities.",
              "pt": "Para um número específico, use o número. 'Some' é para quantidades não especificadas."
            }
          },
          {
            "id": "b15c-chall-2",
            "prompt": {
              "en": "Your friend asks: 'Do we have enough plates?' How would you answer if you don't have enough?",
              "pt": "Seu amigo pergunta: 'Temos pratos suficientes?' Como você responderia se não tivesse o suficiente?"
            },
            "options": [
              "Yes, we have enough.",
              "No, we don't have any.",
              "No, we have too much."
            ],
            "answer": "No, we don't have any.",
            "explanation": {
              "en": "If you don't have enough, you can say you don't have any, meaning zero or not sufficient.",
              "pt": "Se você não tem o suficiente, pode dizer que não tem nenhum, significando zero ou não suficiente."
            }
          }
        ]
      },
      "lessonReview": {
        "summary": {
          "en": "In this unit, we learned about quantities and how to use 'some' and 'any'. 'Some' is for affirmative sentences and 'any' is for negatives and questions. We also practiced other quantity words and asking for information.",
          "pt": "Nesta unidade, aprendemos sobre quantidades e como usar 'some' e 'any'. 'Some' é para frases afirmativas e 'any' é para negativas e perguntas. Também praticamos outras palavras de quantidade e como pedir informações."
        },
        "canDo": [
          {
            "en": "I can use 'some' and 'any' correctly in sentences.",
            "pt": "Eu consigo usar 'some' e 'any' corretamente em frases."
          },
          {
            "en": "I can ask about quantities (e.g., 'Is there any milk?').",
            "pt": "Eu consigo perguntar sobre quantidades (por exemplo, 'Tem leite?')."
          },
          {
            "en": "I can use quantity words like 'a lot of', 'enough', 'a few'.",
            "pt": "Eu consigo usar palavras de quantidade como 'a lot of', 'enough', 'a few'."
          }
        ],
        "next": {
          "en": "Next, we will learn about comparisons (adjectives).",
          "pt": "Em seguida, aprenderemos sobre comparações (adjetivos)."
        }
      }
    }
  },
  {
    "code": "BEGINNER-U16",
    "number": 16,
    "title": "Comparisons Places - Much",
    "titlePt": "Comparações de Lugares - Much",
    "cefr": "A1",
    "objective": {
      "en": "To teach comparisons of places and 'much' (uncountable) / 'many' (countable) / 'a lot of' (both) in a contextualized way.",
      "pt": "Ensinar comparações de lugares e 'much' (incontáveis) / 'many' (contáveis) / 'a lot of' (ambos) de forma contextualizada."
    },
    "communicationGoal": {
      "en": "The student will be able to use 'clarification' and vocabulary for 'comparisons places' to communicate in real situations.",
      "pt": "O aluno será capaz de usar 'clarification' e o vocabulário de 'comparisons places' para se comunicar em situações reais."
    },
    "prerequisites": {
      "en": "Structure: Some (affirmative) and Any (negative/questions). Vocabulary: Quantities.",
      "pt": "Estrutura: Some (afirmativo) e Any (negativo/perguntas). Vocabulário: Quantidades."
    },
    "newContent": {
      "en": "Grammar: Much (uncountable) / Many (countable) / A lot of (both). | Vocabulary: Comparisons Places (10 lexical items) | Expressions: Clarification",
      "pt": "Gramática: Much (incontáveis) / Many (contáveis) / A lot of (ambos). | Vocabulário: Comparações de Lugares (10 itens lexicais) | Expressões: Clarificação"
    },
    "reviewContent": {
      "en": "Spiral review: Present Continuous (affirmative) for actions happening now (Unit 11). Vocabulary review: Daily Routine (Unit 6).",
      "pt": "Revisão em espiral: Present Continuous (afirmativo) para ações acontecendo agora (Unidade 11). Revisão de vocabulário: Rotina Diária (Unidade 6)."
    },
    "discover": {
      "id": "BEGINNER-U16-DISCOVER",
      "warmUp": {
        "prompt": {
          "en": "Look at the pictures. Which city do you like more? Why? What do you think about these places?",
          "pt": "Observe as imagens. De qual cidade você gosta mais? Por quê? O que você pensa sobre esses lugares?"
        },
        "phrases": [
          {
            "en": "City A is beautiful.",
            "pt": "A Cidade A é linda."
          },
          {
            "en": "City B has many parks.",
            "pt": "A Cidade B tem muitos parques."
          },
          {
            "en": "I like quiet places.",
            "pt": "Eu gosto de lugares tranquilos."
          }
        ]
      },
      "context": {
        "situation": {
          "en": "Two friends, Leo and Maria, are talking about their cities. Leo lives in São Paulo, and Maria lives in a smaller town.",
          "pt": "Dois amigos, Leo e Maria, estão conversando sobre suas cidades. Leo mora em São Paulo, e Maria mora em uma cidade menor."
        },
        "dialogue": [
          {
            "who": "Leo",
            "en": "São Paulo is a very big city. It has many tall buildings.",
            "pt": "São Paulo é uma cidade muito grande. Tem muitos prédios altos."
          },
          {
            "who": "Maria",
            "en": "Oh, really? My town is smaller.",
            "pt": "Ah, sério? Minha cidade é menor."
          },
          {
            "who": "Leo",
            "en": "And it is very busy. There is much traffic.",
            "pt": "E é muito movimentada. Há muito trânsito."
          },
          {
            "who": "Maria",
            "en": "Much traffic? What does that mean?",
            "pt": "Muito trânsito? O que isso significa?"
          },
          {
            "who": "Leo",
            "en": "It means many cars on the streets, all the time.",
            "pt": "Significa muitos carros nas ruas, o tempo todo."
          },
          {
            "who": "Maria",
            "en": "Ah, I see. My town is quieter, and the air is cleaner.",
            "pt": "Ah, entendi. Minha cidade é mais tranquila, e o ar é mais limpo."
          },
          {
            "who": "Leo",
            "en": "Yes, São Paulo is not very clean. And things are more expensive here.",
            "pt": "Sim, São Paulo não é muito limpa. E as coisas são mais caras aqui."
          },
          {
            "who": "Maria",
            "en": "More expensive? Can you repeat that?",
            "pt": "Mais caras? Você pode repetir?"
          },
          {
            "who": "Leo",
            "en": "Food, rent... they are more expensive.",
            "pt": "Comida, aluguel... são mais caros."
          },
          {
            "who": "Maria",
            "en": "I think my town is safer too. You can walk at night.",
            "pt": "Eu acho que minha cidade é mais segura também. Você pode andar à noite."
          },
          {
            "who": "Leo",
            "en": "That's good. São Paulo is farther from the beach, too.",
            "pt": "Isso é bom. São Paulo fica mais longe da praia, também."
          },
          {
            "who": "Maria",
            "en": "My town is closer to the mountains. It's beautiful.",
            "pt": "Minha cidade é mais perto das montanhas. É linda."
          }
        ]
      },
      "vocabulary": [
        {
          "term": "bigger",
          "pt": "maior",
          "ipa": "/ˈbɪɡər/",
          "definition": "Larger in size than something else.",
          "example": "New York is bigger than Boston.",
          "examplePt": "Nova York é maior que Boston."
        },
        {
          "term": "smaller",
          "pt": "menor",
          "ipa": "/ˈsmɔːlər/",
          "definition": "Less in size than something else.",
          "example": "My apartment is smaller than yours.",
          "examplePt": "Meu apartamento é menor que o seu."
        },
        {
          "term": "safer",
          "pt": "mais seguro(a)",
          "ipa": "/ˈseɪfər/",
          "definition": "Less dangerous or risky.",
          "example": "This neighborhood is safer at night.",
          "examplePt": "Este bairro é mais seguro à noite."
        },
        {
          "term": "more expensive",
          "pt": "mais caro(a)",
          "ipa": "/mɔːr ɪkˈspɛnsɪv/",
          "definition": "Costing a lot of money.",
          "example": "Shopping in the city center is more expensive.",
          "examplePt": "Fazer compras no centro da cidade é mais caro."
        },
        {
          "term": "cheaper",
          "pt": "mais barato(a)",
          "ipa": "/ˈtʃiːpər/",
          "definition": "Costing less money.",
          "example": "The bus ticket is cheaper than the train ticket.",
          "examplePt": "A passagem de ônibus é mais barata que a de trem."
        },
        {
          "term": "quieter",
          "pt": "mais tranquilo(a)",
          "ipa": "/ˈkwaɪətər/",
          "definition": "Making less noise; more peaceful.",
          "example": "The library is much quieter than the classroom.",
          "examplePt": "A biblioteca é muito mais tranquila que a sala de aula."
        },
        {
          "term": "busier",
          "pt": "mais movimentado(a)",
          "ipa": "/ˈbɪziər/",
          "definition": "Having a lot of activity or people.",
          "example": "The market is busier on Saturdays.",
          "examplePt": "O mercado é mais movimentado aos sábados."
        },
        {
          "term": "cleaner",
          "pt": "mais limpo(a)",
          "ipa": "/ˈkliːnər/",
          "definition": "More free from dirt or pollution.",
          "example": "The air in the mountains is cleaner.",
          "examplePt": "O ar nas montanhas é mais limpo."
        },
        {
          "term": "farther",
          "pt": "mais longe",
          "ipa": "/ˈfɑːrðər/",
          "definition": "At or to a greater distance.",
          "example": "The park is farther from my house now.",
          "examplePt": "O parque fica mais longe da minha casa agora."
        },
        {
          "term": "closer",
          "pt": "mais perto",
          "ipa": "/ˈkloʊsər/",
          "definition": "At or to a shorter distance.",
          "example": "The new supermarket is closer to my office.",
          "examplePt": "O novo supermercado é mais perto do meu escritório."
        }
      ],
      "expressions": [
        {
          "en": "Sorry, can you repeat that?",
          "pt": "Desculpe, você pode repetir isso?"
        },
        {
          "en": "What does that mean?",
          "pt": "O que isso significa?"
        },
        {
          "en": "Can you speak more slowly, please?",
          "pt": "Você pode falar mais devagar, por favor?"
        }
      ],
      "grammar": [
        {
          "title": {
            "en": "Much / Many / A lot of",
            "pt": "Much / Many / A lot of"
          },
          "examples": [
            {
              "en": "How much time do you have?",
              "pt": "Quanto tempo você tem?"
            },
            {
              "en": "How many people are coming?",
              "pt": "Quantas pessoas estão vindo?"
            },
            {
              "en": "There are a lot of books on the shelf.",
              "pt": "Há muitos livros na prateleira."
            }
          ],
          "rule": {
            "en": "'Much' is used with uncountable nouns (e.g., water, time, money). 'Many' is used with countable nouns (e.g., apples, cars, friends). 'A lot of' can be used with both uncountable and countable nouns, and is common in affirmative sentences.",
            "pt": "'Much' é usado com substantivos incontáveis (por exemplo, água, tempo, dinheiro). 'Many' é usado com substantivos contáveis (por exemplo, maçãs, carros, amigos). 'A lot of' pode ser usado com substantivos contáveis e incontáveis, e é comum em frases afirmativas."
          },
          "mistakes": [
            {
              "en": "I have many money. (Incorrect)",
              "pt": "Eu tenho muitas dinheiros. (Incorreto)"
            },
            {
              "en": "There is much cars. (Incorrect)",
              "pt": "Há muitos carros. (Incorreto)"
            }
          ]
        }
      ],
      "controlledPractice": [
        {
          "id": "b16d-cp1",
          "prompt": {
            "en": "Choose the correct word: Is there ___ water in the bottle?",
            "pt": "Escolha a palavra correta: Tem ___ água na garrafa?"
          },
          "options": [
            "many",
            "much",
            "a lot of"
          ],
          "answer": "much",
          "explanation": {
            "en": "'Water' is an uncountable noun, so we use 'much' or 'a lot of'. In questions, 'much' is very common.",
            "pt": "'Água' é um substantivo incontável, então usamos 'much' ou 'a lot of'. Em perguntas, 'much' é muito comum."
          }
        },
        {
          "id": "b16d-cp2",
          "prompt": {
            "en": "Choose the correct word: She has ___ friends.",
            "pt": "Escolha a palavra correta: Ela tem ___ amigos."
          },
          "options": [
            "much",
            "many",
            "a lot of"
          ],
          "answer": "a lot of",
          "explanation": {
            "en": "'Friends' are countable. 'A lot of' is suitable for affirmative sentences with countable nouns.",
            "pt": "'Amigos' são contáveis. 'A lot of' é adequado para frases afirmativas com substantivos contáveis."
          }
        },
        {
          "id": "b16d-cp3",
          "prompt": {
            "en": "Complete the sentence: This city is ____ (big).",
            "pt": "Complete a frase: Esta cidade é ____ (grande)."
          },
          "options": [
            "big",
            "bigger",
            "biggest"
          ],
          "answer": "bigger",
          "explanation": {
            "en": "We use 'bigger' for comparisons between two places.",
            "pt": "Usamos 'bigger' para comparações entre dois lugares."
          }
        },
        {
          "id": "b16d-cp4",
          "prompt": {
            "en": "How do you ask for clarification? 'Sorry, can you ___ that?'",
            "pt": "Como você pede um esclarecimento? 'Desculpe, você pode ___ isso?'"
          },
          "options": [
            "say",
            "repeat",
            "explain"
          ],
          "answer": "repeat",
          "explanation": {
            "en": "'Can you repeat that?' is a common way to ask for repetition.",
            "pt": "'Can you repeat that?' é uma forma comum de pedir repetição."
          }
        }
      ],
      "input": {
        "kind": "listening",
        "title": {
          "en": "A Trip to the Beach",
          "pt": "Uma Viagem à Praia"
        },
        "lines": [
          {
            "en": "Hi Ana, how was your trip to Florianópolis?",
            "pt": "Oi Ana, como foi sua viagem para Florianópolis?"
          },
          {
            "en": "It was great, Tom! The beaches are beautiful.",
            "pt": "Foi ótimo, Tom! As praias são lindas."
          },
          {
            "en": "Is it very far from São Paulo?",
            "pt": "É muito longe de São Paulo?"
          },
          {
            "en": "Yes, it is farther. The flight was long. But the water is cleaner there.",
            "pt": "Sim, é mais longe. O voo foi longo. Mas a água é mais limpa lá."
          },
          {
            "en": "Cleaner? What does that mean?",
            "pt": "Mais limpa? O que isso significa?"
          },
          {
            "en": "Less pollution, very clear. And the city is quieter than São Paulo.",
            "pt": "Menos poluição, muito clara. E a cidade é mais tranquila que São Paulo."
          },
          {
            "en": "Sounds nice! Is it more expensive than here?",
            "pt": "Parece bom! É mais caro que aqui?"
          },
          {
            "en": "Some things are. Restaurants are a little more expensive.",
            "pt": "Algumas coisas são. Restaurantes são um pouco mais caros."
          },
          {
            "en": "I want to visit a safer place for my next vacation. Is Florianópolis safer?",
            "pt": "Eu quero visitar um lugar mais seguro para minhas próximas férias. Florianópolis é mais segura?"
          },
          {
            "en": "Yes, I think it is safer. Not as many people, not as busy.",
            "pt": "Sim, eu acho que é mais segura. Não tem tanta gente, não é tão movimentada."
          }
        ],
        "questions": [
          {
            "id": "b16d-inputq1",
            "prompt": {
              "en": "What is Ana talking about?",
              "pt": "Sobre o que Ana está falando?"
            },
            "options": [
              "Her job",
              "Her trip to Florianópolis",
              "Her new car"
            ],
            "answer": "Her trip to Florianópolis",
            "explanation": {
              "en": "Ana talks about her trip and the beaches in Florianópolis.",
              "pt": "Ana fala sobre sua viagem e as praias em Florianópolis."
            }
          },
          {
            "id": "b16d-inputq2",
            "prompt": {
              "en": "According to Ana, is Florianópolis busier or quieter than São Paulo?",
              "pt": "De acordo com Ana, Florianópolis é mais movimentada ou mais tranquila que São Paulo?"
            },
            "options": [
              "Busier",
              "Quieter",
              "The same"
            ],
            "answer": "Quieter",
            "explanation": {
              "en": "Ana says, 'the city is quieter than São Paulo.'",
              "pt": "Ana diz, 'a cidade é mais tranquila que São Paulo.'"
            }
          },
          {
            "id": "b16d-inputq3",
            "prompt": {
              "en": "What does 'cleaner' mean in the conversation?",
              "pt": "O que 'cleaner' significa na conversa?"
            },
            "options": [
              "Less pollution",
              "More expensive",
              "Farther away"
            ],
            "answer": "Less pollution",
            "explanation": {
              "en": "Ana clarifies 'cleaner' as 'Less pollution, very clear.'",
              "pt": "Ana esclarece 'cleaner' como 'Menos poluição, muito clara'."
            }
          }
        ]
      },
      "quickCheck": [
        {
          "id": "b16d-qc1",
          "prompt": {
            "en": "Which word is for uncountable nouns?",
            "pt": "Qual palavra é para substantivos incontáveis?"
          },
          "options": [
            "Many",
            "Much",
            "A lot of"
          ],
          "answer": "Much",
          "explanation": {
            "en": "'Much' is specifically used with uncountable nouns in questions and negative sentences.",
            "pt": "'Much' é usado especificamente com substantivos incontáveis em perguntas e frases negativas."
          }
        },
        {
          "id": "b16d-qc2",
          "prompt": {
            "en": "Complete: 'Rio de Janeiro is ___ (beautiful) than my city.'",
            "pt": "Complete: 'O Rio de Janeiro é ___ (bonito) que minha cidade.'"
          },
          "options": [
            "beautifuler",
            "more beautiful",
            "most beautiful"
          ],
          "answer": "more beautiful",
          "explanation": {
            "en": "For longer adjectives like 'beautiful', we use 'more' for comparisons.",
            "pt": "Para adjetivos mais longos como 'beautiful', usamos 'more' para comparações."
          }
        },
        {
          "id": "b16d-qc3",
          "prompt": {
            "en": "What is a good phrase to ask someone to speak slower?",
            "pt": "Qual é uma boa frase para pedir a alguém para falar mais devagar?"
          },
          "options": [
            "Speak slow!",
            "Can you speak more slowly, please?",
            "Talk slow, please."
          ],
          "answer": "Can you speak more slowly, please?",
          "explanation": {
            "en": "This is the polite and correct expression from the lesson.",
            "pt": "Esta é a expressão educada e correta da lição."
          }
        },
        {
          "id": "b16d-qc4",
          "prompt": {
            "en": "Which place is 'safer'?",
            "pt": "Qual lugar é 'mais seguro'?"
          },
          "options": [
            "A city with high crime rates",
            "A quiet town with low crime",
            "A busy highway"
          ],
          "answer": "A quiet town with low crime",
          "explanation": {
            "en": "'Safer' means less dangerous.",
            "pt": "'Mais seguro' significa menos perigoso."
          }
        }
      ]
    },
    "communicate": {
      "id": "BEGINNER-U16-COMMUNICATE",
      "review": [
        {
          "en": "We learned about comparing places using adjectives like 'bigger', 'safer', 'more expensive'.",
          "pt": "Aprendemos sobre como comparar lugares usando adjetivos como 'bigger', 'safer', 'more expensive'."
        },
        {
          "en": "We also practiced using 'much', 'many', and 'a lot of' for quantities.",
          "pt": "Também praticamos o uso de 'much', 'many' e 'a lot of' para quantidades."
        },
        {
          "en": "And we learned expressions for clarification, like 'What does that mean?'",
          "pt": "E aprendemos expressões para esclarecimento, como 'What does that mean?'"
        }
      ],
      "activities": [
        {
          "id": "b16c-act1",
          "title": {
            "en": "Listening Task: Compare Two Cities",
            "pt": "Tarefa de Escuta: Compare Duas Cidades"
          },
          "instruction": {
            "en": "Listen to the description of two cities. Choose the correct comparison.",
            "pt": "Ouça a descrição de duas cidades. Escolha a comparação correta."
          },
          "phrases": [
            {
              "en": "City A has many parks. City B has fewer parks.",
              "pt": "A Cidade A tem muitos parques. A Cidade B tem menos parques."
            },
            {
              "en": "City A is smaller and quieter. City B is bigger and busier.",
              "pt": "A Cidade A é menor e mais tranquila. A Cidade B é maior e mais movimentada."
            },
            {
              "en": "City B has much traffic. City A has less traffic.",
              "pt": "A Cidade B tem muito trânsito. A Cidade A tem menos trânsito."
            }
          ],
          "check": [
            {
              "id": "b16c-act1-1",
              "prompt": {
                "en": "City A is ___ City B.",
                "pt": "A Cidade A é ___ a Cidade B."
              },
              "options": [
                "bigger than",
                "smaller than",
                "busier than"
              ],
              "answer": "smaller than",
              "explanation": {
                "en": "Based on the description, City A is smaller and quieter.",
                "pt": "Com base na descrição, a Cidade A é menor e mais tranquila."
              }
            },
            {
              "id": "b16c-act1-2",
              "prompt": {
                "en": "City B has ___ City A.",
                "pt": "A Cidade B tem ___ a Cidade A."
              },
              "options": [
                "less traffic than",
                "quieter streets than",
                "more traffic than"
              ],
              "answer": "more traffic than",
              "explanation": {
                "en": "City B has much traffic, and City A has less.",
                "pt": "A Cidade B tem muito trânsito, e a Cidade A tem menos."
              }
            }
          ]
        },
        {
          "id": "b16c-act2",
          "title": {
            "en": "Real-life Communication: Your City vs. Another City",
            "pt": "Comunicação Real: Sua Cidade vs. Outra Cidade"
          },
          "instruction": {
            "en": "Think about your city and a city you know. Compare them using the new vocabulary and grammar.",
            "pt": "Pense na sua cidade e em uma cidade que você conhece. Compare-as usando o novo vocabulário e gramática."
          },
          "phrases": [
            {
              "en": "My city is smaller but cleaner.",
              "pt": "Minha cidade é menor, mas mais limpa."
            },
            {
              "en": "There is much traffic in São Paulo.",
              "pt": "Há muito trânsito em São Paulo."
            },
            {
              "en": "Belo Horizonte is farther from the beach than Rio.",
              "pt": "Belo Horizonte é mais longe da praia que o Rio."
            }
          ],
          "check": [
            {
              "id": "b16c-act2-1",
              "prompt": {
                "en": "Which city is generally 'safer'?",
                "pt": "Qual cidade é geralmente 'mais segura'?"
              },
              "options": [
                "A very busy capital",
                "A small town with few people",
                "A city with many factories"
              ],
              "answer": "A small town with few people",
              "explanation": {
                "en": "Small towns are often perceived as safer.",
                "pt": "Cidades pequenas são frequentemente percebidas como mais seguras."
              }
            },
            {
              "id": "b16c-act2-2",
              "prompt": {
                "en": "If something is 'more expensive', what does it mean?",
                "pt": "Se algo é 'mais caro', o que significa?"
              },
              "options": [
                "It costs a lot of money.",
                "It is very cheap.",
                "It is difficult to find."
              ],
              "answer": "It costs a lot of money.",
              "explanation": {
                "en": "'More expensive' means it has a high price.",
                "pt": "'Mais caro' significa que tem um preço alto."
              }
            }
          ]
        },
        {
          "id": "b16c-act3",
          "title": {
            "en": "Make Questions: Ask about comparisons",
            "pt": "Forme Perguntas: Pergunte sobre comparações"
          },
          "instruction": {
            "en": "Form a question using the given words. Use 'How much/many' or comparative adjectives.",
            "pt": "Forme uma pergunta usando as palavras dadas. Use 'How much/many' ou adjetivos comparativos."
          },
          "phrases": [
            {
              "en": "money / you / have?",
              "pt": "dinheiro / você / tem?"
            },
            {
              "en": "Rio / beautiful / São Paulo?",
              "pt": "Rio / bonito / São Paulo?"
            },
            {
              "en": "people / come / party?",
              "pt": "pessoas / vir / festa?"
            }
          ],
          "check": [
            {
              "id": "b16c-act3-1",
              "prompt": {
                "en": "Make a question: 'How much ___ do you have?'",
                "pt": "Forme uma pergunta: 'Quanto ___ você tem?'"
              },
              "options": [
                "time",
                "books",
                "friends"
              ],
              "answer": "time",
              "explanation": {
                "en": "'Time' is an uncountable noun.",
                "pt": "'Tempo' é um substantivo incontável."
              }
            },
            {
              "id": "b16c-act3-2",
              "prompt": {
                "en": "Make a question: 'Is city A ___ than city B?'",
                "pt": "Forme uma pergunta: 'A cidade A é ___ que a cidade B?'"
              },
              "options": [
                "more quiet",
                "more quieter",
                "quieter"
              ],
              "answer": "quieter",
              "explanation": {
                "en": "'Quieter' is the correct comparative form of 'quiet'.",
                "pt": "'Quieter' é a forma comparativa correta de 'quiet'."
              }
            }
          ]
        },
        {
          "id": "b16c-act4",
          "title": {
            "en": "Build Sentences: Describe differences",
            "pt": "Construa Frases: Descreva diferenças"
          },
          "instruction": {
            "en": "Build sentences to compare two places. Use vocabulary and grammar from the unit.",
            "pt": "Construa frases para comparar dois lugares. Use o vocabulário e a gramática da unidade."
          },
          "phrases": [
            {
              "en": "My neighborhood / safer / than / downtown.",
              "pt": "Meu bairro / mais seguro / que / o centro da cidade."
            },
            {
              "en": "The countryside / quieter / than / the city.",
              "pt": "O campo / mais tranquilo / que / a cidade."
            },
            {
              "en": "Clothes / cheaper / online / than / in stores.",
              "pt": "Roupas / mais baratas / online / que / nas lojas."
            }
          ],
          "check": [
            {
              "id": "b16c-act4-1",
              "prompt": {
                "en": "Complete the sentence: 'The small café is ___ than the big restaurant.'",
                "pt": "Complete a frase: 'O pequeno café é ___ que o grande restaurante.'"
              },
              "options": [
                "busier",
                "quieter",
                "more busy"
              ],
              "answer": "quieter",
              "explanation": {
                "en": "Cafés are often quieter than big restaurants. 'Quieter' is the correct comparative.",
                "pt": "Cafés são frequentemente mais tranquilos que grandes restaurantes. 'Quieter' é o comparativo correto."
              }
            },
            {
              "id": "b16c-act4-2",
              "prompt": {
                "en": "Complete the sentence: 'São Paulo has ___ than my town.'",
                "pt": "Complete a frase: 'São Paulo tem ___ que minha cidade.'"
              },
              "options": [
                "many pollution",
                "much pollution",
                "a lot of pollutions"
              ],
              "answer": "much pollution",
              "explanation": {
                "en": "'Pollution' is uncountable, so 'much' is appropriate here.",
                "pt": "'Poluição' é incontável, então 'much' é apropriado aqui."
              }
            }
          ]
        },
        {
          "id": "b16c-act5",
          "title": {
            "en": "Role-play: Tourist asking for information",
            "pt": "Role-play: Turista pedindo informações"
          },
          "instruction": {
            "en": "You are a tourist. Ask a local about two places, comparing them. The local answers, and you use clarification expressions.",
            "pt": "Você é um turista. Pergunte a um local sobre dois lugares, comparando-os. O local responde, e você usa expressões de esclarecimento."
          },
          "phrases": [
            {
              "en": "Excuse me, is this market more expensive than that one?",
              "pt": "Com licença, este mercado é mais caro que aquele?"
            },
            {
              "en": "Is the beach closer or farther from here?",
              "pt": "A praia é mais perto ou mais longe daqui?"
            },
            {
              "en": "What does 'safer' mean for this area?",
              "pt": "O que 'mais seguro' significa para esta área?"
            }
          ],
          "check": [
            {
              "id": "b16c-act5-1",
              "prompt": {
                "en": "A tourist asks: 'Is the museum open now?' How can you ask for repetition?",
                "pt": "Um turista pergunta: 'O museu está aberto agora?' Como você pode pedir para repetir?"
              },
              "options": [
                "Repeat!",
                "Can you repeat that?",
                "Say again?"
              ],
              "answer": "Can you repeat that?",
              "explanation": {
                "en": "This is the polite expression for repetition.",
                "pt": "Esta é a expressão educada para pedir repetição."
              }
            },
            {
              "id": "b16c-act5-2",
              "prompt": {
                "en": "If someone says 'It's a busier street,' and you don't understand 'busier,' what do you ask?",
                "pt": "Se alguém diz 'É uma rua mais movimentada', e você não entende 'busier', o que você pergunta?"
              },
              "options": [
                "What does that mean?",
                "How much is that?",
                "Why busy?"
              ],
              "answer": "What does that mean?",
              "explanation": {
                "en": "'What does that mean?' is used to ask for the meaning of a word or phrase.",
                "pt": "'What does that mean?' é usado para perguntar o significado de uma palavra ou frase."
              }
            }
          ]
        }
      ],
      "challenge": {
        "id": "b16c-challenge",
        "title": {
          "en": "My Dream Place",
          "pt": "Meu Lugar dos Sonhos"
        },
        "instruction": {
          "en": "Describe your dream place. Compare it to where you live now. Use at least 3 comparison adjectives and 'much', 'many', or 'a lot of'. Be ready to clarify your statements.",
          "pt": "Descreva o seu lugar dos sonhos. Compare-o com onde você mora agora. Use pelo menos 3 adjetivos de comparação e 'much', 'many' ou 'a lot of'. Esteja pronto para esclarecer suas declarações."
        },
        "phrases": [
          {
            "en": "My dream city is cleaner and safer than my current city.",
            "pt": "Minha cidade dos sonhos é mais limpa e mais segura que minha cidade atual."
          },
          {
            "en": "It has many beautiful parks and much less traffic.",
            "pt": "Ela tem muitos parques bonitos e muito menos trânsito."
          },
          {
            "en": "Life there is cheaper, and the beaches are closer.",
            "pt": "A vida lá é mais barata, e as praias são mais perto."
          }
        ],
        "check": [
          {
            "id": "b16c-challenge-1",
            "prompt": {
              "en": "Which sentence correctly uses a comparative?",
              "pt": "Qual frase usa corretamente um comparativo?"
            },
            "options": [
              "My house is more bigger.",
              "This street is more cleaner.",
              "The new store is cheaper."
            ],
            "answer": "The new store is cheaper.",
            "explanation": {
              "en": "'Cheaper' is the correct comparative form. 'More bigger' and 'more cleaner' are incorrect.",
              "pt": "'Cheaper' é a forma comparativa correta. 'More bigger' e 'more cleaner' estão incorretos."
            }
          },
          {
            "id": "b16c-challenge-2",
            "prompt": {
              "en": "What is the best way to say you don't understand a word?",
              "pt": "Qual é a melhor maneira de dizer que você não entende uma palavra?"
            },
            "options": [
              "I don't know this word.",
              "What does that mean?",
              "Explain it!"
            ],
            "answer": "What does that mean?",
            "explanation": {
              "en": "'What does that mean?' is a polite and effective way to ask for a definition.",
              "pt": "'What does that mean?' é uma forma educada e eficaz de pedir uma definição."
            }
          }
        ]
      },
      "lessonReview": {
        "summary": {
          "en": "In this unit, we learned to compare places using adjectives like 'bigger', 'safer', and 'more expensive'. We also practiced using 'much', 'many', and 'a lot of' for quantities and learned important expressions for clarification.",
          "pt": "Nesta unidade, aprendemos a comparar lugares usando adjetivos como 'bigger', 'safer' e 'more expensive'. Também praticamos o uso de 'much', 'many' e 'a lot of' para quantidades e aprendemos expressões importantes para esclarecimento."
        },
        "canDo": [
          {
            "en": "Compare two places using adjectives like 'bigger', 'cleaner', 'more expensive'.",
            "pt": "Comparar dois lugares usando adjetivos como 'bigger', 'cleaner', 'more expensive'."
          },
          {
            "en": "Use 'much' for uncountable nouns and 'many' for countable nouns, and 'a lot of' for both.",
            "pt": "Usar 'much' para substantivos incontáveis e 'many' para substantivos contáveis, e 'a lot of' para ambos."
          },
          {
            "en": "Ask for clarification using phrases like 'What does that mean?' and 'Can you repeat that?'",
            "pt": "Pedir esclarecimentos usando frases como 'What does that mean?' e 'Can you repeat that?'"
          }
        ],
        "next": {
          "en": "In the next unit, we will continue comparing, but focusing on superlatives (e.g., 'the biggest', 'the best').",
          "pt": "Na próxima unidade, continuaremos comparando, mas focando em superlativos (por exemplo, 'the biggest', 'the best')."
        }
      }
    }
  },
  {
    "code": "BEGINNER-U17",
    "number": 17,
    "title": "Travel - Comparative adjectives",
    "titlePt": "Viagem - Adjetivos comparativos",
    "cefr": "A1",
    "objective": {
      "en": "To teach travel vocabulary and comparative adjectives (-er / more + adjective) in context.",
      "pt": "Ensinar vocabulário de viagem e adjetivos comparativos (-er / more + adjective) de forma contextualizada."
    },
    "communicationGoal": {
      "en": "Students will be able to use 'likes dislikes' and travel vocabulary to communicate in real situations.",
      "pt": "O aluno será capaz de usar 'gostos e desgostos' e o vocabulário de viagem para se comunicar em situações reais."
    },
    "prerequisites": {
      "en": "Structure: Much (uncountable) / Many (countable) / A lot of (both). Vocabulary: Comparisons, Places.",
      "pt": "Estrutura: Much (incontáveis) / Many (contáveis) / A lot of (ambos). Vocabulário: Comparações, Lugares."
    },
    "newContent": {
      "en": "Grammar: Comparative adjectives (-er / more + adjective). Vocabulary: Travel (10 lexical items). Expressions: Likes Dislikes.",
      "pt": "Gramática: Adjetivos comparativos (-er / more + adjective). Vocabulário: Viagem (10 itens lexicais). Expressões: Gostos e desgostos."
    },
    "reviewContent": {
      "en": "Spiral review: Present Continuous — negative/interrogative, and contrast with Simple Present (Unit 12). Vocabulary review: School Work (Unit 7).",
      "pt": "Revisão em espiral: Present Continuous — negativo/interrogativo, e contraste com Simple Present (Unidade 12). Revisão de vocabulário: School Work (Unidade 7)."
    },
    "discover": {
      "id": "BEGINNER-U17-DISCOVER",
      "warmUp": {
        "prompt": {
          "en": "Look at the pictures. What do you see? What do you like about traveling?",
          "pt": "Olhe as imagens. O que você vê? O que você gosta em viajar?"
        },
        "phrases": [
          {
            "en": "Picture 1: A beach with clear water.",
            "pt": "Imagem 1: Uma praia com água cristalina."
          },
          {
            "en": "Picture 2: A big city skyline.",
            "pt": "Imagem 2: Um horizonte de uma cidade grande."
          },
          {
            "en": "Picture 3: Mountains with snow.",
            "pt": "Imagem 3: Montanhas com neve."
          }
        ]
      },
      "context": {
        "situation": {
          "en": "Anna and Ben are planning a trip. They are talking about their preferences.",
          "pt": "Anna e Ben estão planejando uma viagem. Eles estão conversando sobre suas preferências."
        },
        "dialogue": [
          {
            "who": "Anna",
            "en": "I love traveling! I like warm places.",
            "pt": "Eu adoro viajar! Eu gosto de lugares quentes."
          },
          {
            "who": "Ben",
            "en": "Me too! But I don't like very crowded cities. I prefer quiet places.",
            "pt": "Eu também! Mas eu não gosto de cidades muito lotadas. Eu prefiro lugares tranquilos."
          },
          {
            "who": "Anna",
            "en": "Yes, quiet places are better. This beach looks nicer than that city.",
            "pt": "Sim, lugares tranquilos são melhores. Esta praia parece mais agradável que aquela cidade."
          },
          {
            "who": "Ben",
            "en": "I agree. Beaches are more relaxing than cities for me. The flight is longer to the beach, but it's worth it.",
            "pt": "Concordo. Praias são mais relaxantes que cidades para mim. O voo é mais longo para a praia, mas vale a pena."
          }
        ]
      },
      "vocabulary": [
        {
          "term": "ticket",
          "pt": "passagem/bilhete",
          "ipa": "/ˈtɪkɪt/",
          "definition": "A piece of paper or card that gives you the right to enter a place or to use a form of transport.",
          "example": "I bought a train ticket to Rio.",
          "examplePt": "Eu comprei uma passagem de trem para o Rio."
        },
        {
          "term": "passport",
          "pt": "passaporte",
          "ipa": "/ˈpæspɔːrt/",
          "definition": "An official document, often a small book, that you need to enter or leave most foreign countries.",
          "example": "Do you have your passport for the international flight?",
          "examplePt": "Você tem seu passaporte para o voo internacional?"
        },
        {
          "term": "luggage",
          "pt": "bagagem",
          "ipa": "/ˈlʌɡɪdʒ/",
          "definition": "The bags, suitcases, etc., that contain your possessions and that you take with you when you are traveling.",
          "example": "My luggage is too heavy for the plane.",
          "examplePt": "Minha bagagem está muito pesada para o avião."
        },
        {
          "term": "flight",
          "pt": "voo",
          "ipa": "/flaɪt/",
          "definition": "A journey made by flying, usually in an aircraft.",
          "example": "Our flight to New York is at 10 AM.",
          "examplePt": "Nosso voo para Nova York é às 10h da manhã."
        },
        {
          "term": "hotel",
          "pt": "hotel",
          "ipa": "/hoʊˈtɛl/",
          "definition": "A building where you pay to stay and eat meals.",
          "example": "We booked a nice hotel by the beach.",
          "examplePt": "Nós reservamos um hotel agradável perto da praia."
        },
        {
          "term": "reservation",
          "pt": "reserva",
          "ipa": "/ˌrɛzərˈveɪʃən/",
          "definition": "An arrangement to have something (such as a room in a hotel or a table in a restaurant) held for your use at a later time.",
          "example": "Do you have a reservation for the hotel?",
          "examplePt": "Você tem uma reserva para o hotel?"
        },
        {
          "term": "destination",
          "pt": "destino",
          "ipa": "/ˌdɛstəˈneɪʃən/",
          "definition": "The place to which someone or something is going or being sent.",
          "example": "Our final destination is Paris.",
          "examplePt": "Nosso destino final é Paris."
        },
        {
          "term": "tour",
          "pt": "passeio/excursão",
          "ipa": "/tʊr/",
          "definition": "A trip or journey in which one visits a number of places in an area.",
          "example": "We took a tour of the city center.",
          "examplePt": "Nós fizemos um passeio pelo centro da cidade."
        },
        {
          "term": "map",
          "pt": "mapa",
          "ipa": "/mæp/",
          "definition": "A drawing or plan of the Earth's surface or part of it, showing countries, towns, rivers, etc.",
          "example": "Let's check the map to find the museum.",
          "examplePt": "Vamos checar o mapa para encontrar o museu."
        },
        {
          "term": "itinerary",
          "pt": "itinerário",
          "ipa": "/aɪˈtɪnərɛri/",
          "definition": "A planned route or journey.",
          "example": "I prepared a detailed itinerary for our trip.",
          "examplePt": "Eu preparei um itinerário detalhado para nossa viagem."
        }
      ],
      "expressions": [
        {
          "en": "I like coffee.",
          "pt": "Eu gosto de café."
        },
        {
          "en": "I don't like loud music.",
          "pt": "Eu não gosto de música alta."
        },
        {
          "en": "I love traveling.",
          "pt": "Eu adoro viajar."
        },
        {
          "en": "I hate waiting.",
          "pt": "Eu odeio esperar."
        },
        {
          "en": "I prefer quiet places.",
          "pt": "Eu prefiro lugares tranquilos."
        }
      ],
      "grammar": [
        {
          "title": {
            "en": "Comparative Adjectives (-er / more + adjective)",
            "pt": "Adjetivos Comparativos (-er / more + adjetivo)"
          },
          "examples": [
            {
              "en": "This city is bigger than mine.",
              "pt": "Esta cidade é maior que a minha."
            },
            {
              "en": "Life here is more expensive.",
              "pt": "A vida aqui é mais cara."
            },
            {
              "en": "The mountain is colder than the beach.",
              "pt": "A montanha é mais fria que a praia."
            }
          ],
          "rule": {
            "en": "We use comparative adjectives to compare two things or people. For short adjectives (1-2 syllables), add '-er'. For longer adjectives (3+ syllables), use 'more' before the adjective. Always use 'than' after the comparative adjective.",
            "pt": "Usamos adjetivos comparativos para comparar duas coisas ou pessoas. Para adjetivos curtos (1-2 sílabas), adicione '-er'. Para adjetivos mais longos (3+ sílabas), use 'more' antes do adjetivo. Sempre use 'than' depois do adjetivo comparativo."
          },
          "mistakes": [
            {
              "en": "Incorrect: This city is more big than mine.",
              "pt": "Incorreto: This city is more big than mine. (O correto é 'bigger')"
            },
            {
              "en": "Incorrect: The city is crowdeder than the village.",
              "pt": "Incorreto: The city is crowdeder than the village. (O correto é 'more crowded')"
            }
          ]
        }
      ],
      "controlledPractice": [
        {
          "id": "b17d-cp1",
          "prompt": {
            "en": "Complete the sentence: My new phone is _______ (fast) than my old one.",
            "pt": "Complete a frase: Meu novo telefone é _______ (rápido) que o antigo."
          },
          "options": [
            "faster",
            "more fast",
            "fastest",
            "fastly"
          ],
          "answer": "faster",
          "explanation": {
            "en": "Fast is a short adjective, so we add -er.",
            "pt": "Fast é um adjetivo curto, então adicionamos -er."
          }
        },
        {
          "id": "b17d-cp2",
          "prompt": {
            "en": "Complete the sentence: This book is _______ (interesting) than that movie.",
            "pt": "Complete a frase: Este livro é _______ (interessante) que aquele filme."
          },
          "options": [
            "interestinger",
            "more interesting",
            "most interesting",
            "interesting than"
          ],
          "answer": "more interesting",
          "explanation": {
            "en": "Interesting is a long adjective, so we use 'more' before it.",
            "pt": "Interesting é um adjetivo longo, então usamos 'more' antes dele."
          }
        },
        {
          "id": "b17d-cp3",
          "prompt": {
            "en": "Choose the correct sentence:",
            "pt": "Escolha a frase correta:"
          },
          "options": [
            "London is expensiver than Rome.",
            "London is more expensive than Rome.",
            "London is expensive than Rome.",
            "London is most expensive than Rome."
          ],
          "answer": "London is more expensive than Rome.",
          "explanation": {
            "en": "Expensive is a long adjective, so we use 'more' and 'than'.",
            "pt": "Expensive é um adjetivo longo, então usamos 'more' e 'than'."
          }
        },
        {
          "id": "b17d-cp4",
          "prompt": {
            "en": "Choose the correct comparative form for 'good'.",
            "pt": "Escolha a forma comparativa correta para 'good'."
          },
          "options": [
            "gooder",
            "better",
            "more good",
            "goodest"
          ],
          "answer": "better",
          "explanation": {
            "en": "Good is an irregular adjective; its comparative form is 'better'.",
            "pt": "Good é um adjetivo irregular; sua forma comparativa é 'better'."
          }
        }
      ],
      "input": {
        "kind": "reading",
        "title": {
          "en": "A Trip to the Mountains",
          "pt": "Uma Viagem para as Montanhas"
        },
        "lines": [
          {
            "en": "My name is Julia. I love traveling. This year, my family and I are going to the mountains. It's a long flight, but the destination is beautiful. We have our passports and tickets.",
            "pt": "Meu nome é Julia. Eu adoro viajar. Este ano, minha família e eu vamos para as montanhas. É um voo longo, mas o destino é lindo. Nós temos nossos passaportes e passagens."
          },
          {
            "en": "I like the mountains because they are quieter than the city. The air is fresher. My brother likes the beach more, but I prefer the cold. We booked a small hotel near the slopes. It's smaller than the hotel we stayed in last year, but it's more comfortable.",
            "pt": "Eu gosto das montanhas porque elas são mais tranquilas que a cidade. O ar é mais fresco. Meu irmão gosta mais da praia, mas eu prefiro o frio. Nós reservamos um hotel pequeno perto das pistas de esqui. É menor que o hotel que ficamos no ano passado, mas é mais confortável."
          },
          {
            "en": "We have an itinerary with many activities. I don't like waiting, so a good itinerary is important. We have a map to explore the area. This trip will be more exciting than staying home!",
            "pt": "Nós temos um itinerário com muitas atividades. Eu não gosto de esperar, então um bom itinerário é importante. Nós temos um mapa para explorar a área. Esta viagem será mais emocionante do que ficar em casa!"
          }
        ],
        "questions": [
          {
            "id": "b17d-rq1",
            "prompt": {
              "en": "What is Julia's destination this year?",
              "pt": "Qual é o destino de Julia este ano?"
            },
            "options": [
              "The beach",
              "The city",
              "The mountains",
              "Home"
            ],
            "answer": "The mountains",
            "explanation": {
              "en": "Julia and her family are going to the mountains.",
              "pt": "Julia e sua família estão indo para as montanhas."
            }
          },
          {
            "id": "b17d-rq2",
            "prompt": {
              "en": "Why does Julia like the mountains?",
              "pt": "Por que Julia gosta das montanhas?"
            },
            "options": [
              "They are more crowded.",
              "They are quieter than the city.",
              "They are warmer.",
              "They have big hotels."
            ],
            "answer": "They are quieter than the city.",
            "explanation": {
              "en": "Julia likes the mountains because they are quieter than the city.",
              "pt": "Julia gosta das montanhas porque elas são mais tranquilas que a cidade."
            }
          },
          {
            "id": "b17d-rq3",
            "prompt": {
              "en": "What does Julia say about the hotel this year?",
              "pt": "O que Julia diz sobre o hotel este ano?"
            },
            "options": [
              "It's bigger than last year's hotel.",
              "It's more expensive.",
              "It's smaller but more comfortable.",
              "It's not comfortable."
            ],
            "answer": "It's smaller but more comfortable.",
            "explanation": {
              "en": "She says, 'It's smaller than the hotel we stayed in last year, but it's more comfortable.'",
              "pt": "Ela diz: 'É menor que o hotel que ficamos no ano passado, mas é mais confortável.'"
            }
          }
        ]
      },
      "quickCheck": [
        {
          "id": "b17d-qc1",
          "prompt": {
            "en": "Choose the correct word: You need a _______ to travel to another country.",
            "pt": "Escolha a palavra correta: Você precisa de um _______ para viajar para outro país."
          },
          "options": [
            "ticket",
            "passport",
            "map",
            "luggage"
          ],
          "answer": "passport",
          "explanation": {
            "en": "A passport is an official document for international travel.",
            "pt": "Um passaporte é um documento oficial para viagens internacionais."
          }
        },
        {
          "id": "b17d-qc2",
          "prompt": {
            "en": "Which sentence uses the comparative adjective correctly?",
            "pt": "Qual frase usa o adjetivo comparativo corretamente?"
          },
          "options": [
            "The train is slow than the plane.",
            "The train is slowwer than the plane.",
            "The train is slower than the plane.",
            "The train is more slow than the plane."
          ],
          "answer": "The train is slower than the plane.",
          "explanation": {
            "en": "Slow is a short adjective, so we add -er.",
            "pt": "Slow é um adjetivo curto, então adicionamos -er."
          }
        },
        {
          "id": "b17d-qc3",
          "prompt": {
            "en": "Complete the phrase: 'I don't _______ loud music.'",
            "pt": "Complete a frase: 'Eu não _______ música alta.'"
          },
          "options": [
            "love",
            "like",
            "prefer",
            "hate"
          ],
          "answer": "like",
          "explanation": {
            "en": "The expression for dislike is 'I don't like'.",
            "pt": "A expressão para desgostar é 'I don't like'."
          }
        },
        {
          "id": "b17d-qc4",
          "prompt": {
            "en": "What do you call the bags you take when traveling?",
            "pt": "Como você chama as malas que você leva ao viajar?"
          },
          "options": [
            "Tickets",
            "Maps",
            "Luggage",
            "Itinerary"
          ],
          "answer": "Luggage",
          "explanation": {
            "en": "Luggage refers to all your bags and suitcases for a trip.",
            "pt": "Luggage se refere a todas as suas malas e bagagens para uma viagem."
          }
        }
      ]
    },
    "communicate": {
      "id": "BEGINNER-U17-COMMUNICATE",
      "review": [
        {
          "en": "Remember the new vocabulary for 'travel' (ticket, passport, etc.).",
          "pt": "Lembre-se do novo vocabulário para 'viagem' (passagem, passaporte, etc.)."
        },
        {
          "en": "Recall how to use 'I like', 'I don't like', 'I love', 'I prefer' to express preferences.",
          "pt": "Recorde como usar 'I like', 'I don't like', 'I love', 'I prefer' para expressar preferências."
        },
        {
          "en": "Review comparative adjectives: '-er' for short words, 'more' for long words, and 'than' to compare.",
          "pt": "Revise os adjetivos comparativos: '-er' para palavras curtas, 'more' para palavras longas, e 'than' para comparar."
        }
      ],
      "activities": [
        {
          "id": "b17c-act1",
          "title": {
            "en": "Answer the Questions",
            "pt": "Responda às Perguntas"
          },
          "instruction": {
            "en": "Answer the following questions about your travel preferences, using comparative adjectives and expressions of likes/dislikes.",
            "pt": "Responda às seguintes perguntas sobre suas preferências de viagem, usando adjetivos comparativos e expressões de gostos/desgostos."
          },
          "phrases": [
            {
              "en": "Do you like beaches or mountains more? Why?",
              "pt": "Você gosta mais de praias ou montanhas? Por quê?"
            },
            {
              "en": "Is traveling by plane faster than by bus for you?",
              "pt": "Viajar de avião é mais rápido que de ônibus para você?"
            },
            {
              "en": "What is more interesting, a city tour or a nature tour?",
              "pt": "O que é mais interessante, um passeio pela cidade ou um passeio pela natureza?"
            }
          ],
          "check": [
            {
              "id": "b17c-act1-q1",
              "prompt": {
                "en": "Which one do you prefer?",
                "pt": "Qual você prefere?"
              },
              "options": [
                "I like beaches.",
                "I prefer mountains.",
                "I don't like to travel.",
                "I like both equally."
              ],
              "answer": "I prefer mountains.",
              "explanation": {
                "en": "This is an example of expressing a preference.",
                "pt": "Este é um exemplo de expressão de preferência."
              }
            },
            {
              "id": "b17c-act1-q2",
              "prompt": {
                "en": "Complete: 'A car is ______ (slow) than a motorcycle.'",
                "pt": "Complete: 'Um carro é ______ (lento) que uma motocicleta.'"
              },
              "options": [
                "slower",
                "more slow",
                "slowwer",
                "slowest"
              ],
              "answer": "slower",
              "explanation": {
                "en": "Slow is a short adjective, so we add -er.",
                "pt": "Slow é um adjetivo curto, então adicionamos -er."
              }
            }
          ]
        },
        {
          "id": "b17c-act2",
          "title": {
            "en": "Complete the Conversation",
            "pt": "Complete a Conversa"
          },
          "instruction": {
            "en": "Complete the dialogues using the new vocabulary and grammar.",
            "pt": "Complete os diálogos usando o novo vocabulário e a gramática."
          },
          "phrases": [
            {
              "en": "A: Do you have your _______ for the trip?\nB: Yes, and my _______ too.",
              "pt": "A: Você tem seu _______ para a viagem?\nB: Sim, e minha _______ também."
            },
            {
              "en": "A: Is this restaurant _______ (good) than the other one?\nB: Yes, it's _______ (cheap) too.",
              "pt": "A: Este restaurante é _______ (bom) que o outro?\nB: Sim, é _______ (barato) também."
            },
            {
              "en": "A: I don't like big cities. They are _______ (noisy).\nB: I agree. I prefer quiet places. They are _______ (relaxing).",
              "pt": "A: Eu não gosto de cidades grandes. Elas são _______ (barulhentas).\nB: Concordo. Eu prefiro lugares tranquilos. Eles são _______ (relaxantes)."
            }
          ],
          "check": [
            {
              "id": "b17c-act2-q1",
              "prompt": {
                "en": "What words complete the first dialogue?",
                "pt": "Quais palavras completam o primeiro diálogo?"
              },
              "options": [
                "passport / ticket",
                "luggage / map",
                "reservation / hotel",
                "tour / itinerary"
              ],
              "answer": "passport / ticket",
              "explanation": {
                "en": "Passport and ticket are common items for a trip.",
                "pt": "Passaporte e passagem são itens comuns para uma viagem."
              }
            },
            {
              "id": "b17c-act2-q2",
              "prompt": {
                "en": "What words complete the second dialogue?",
                "pt": "Quais palavras completam o segundo diálogo?"
              },
              "options": [
                "gooder / cheapper",
                "better / cheaper",
                "more good / more cheap",
                "best / cheapest"
              ],
              "answer": "better / cheaper",
              "explanation": {
                "en": "The correct comparatives are 'better' and 'cheaper'.",
                "pt": "Os comparativos corretos são 'better' e 'cheaper'."
              }
            }
          ]
        },
        {
          "id": "b17c-act3",
          "title": {
            "en": "Dialogue",
            "pt": "Diálogo"
          },
          "instruction": {
            "en": "Create a short dialogue with a partner about planning a trip. Discuss your likes and dislikes and compare destinations.",
            "pt": "Crie um diálogo curto com um parceiro sobre o planejamento de uma viagem. Discuta seus gostos e desgostos e compare destinos."
          },
          "phrases": [
            {
              "en": "Do you prefer a big city or a small town for vacation?",
              "pt": "Você prefere uma cidade grande ou uma cidade pequena para férias?"
            },
            {
              "en": "I like history tours, but my friend prefers nature tours.",
              "pt": "Eu gosto de passeios históricos, mas meu amigo prefere passeios na natureza."
            },
            {
              "en": "Traveling by train is slower than flying, but it's more relaxing.",
              "pt": "Viajar de trem é mais lento que voar, mas é mais relaxante."
            }
          ],
          "check": [
            {
              "id": "b17c-act3-q1",
              "prompt": {
                "en": "Which sentence expresses a dislike?",
                "pt": "Qual frase expressa um desgosto?"
              },
              "options": [
                "I love sunny days.",
                "I like walking.",
                "I don't like cold weather.",
                "I prefer coffee."
              ],
              "answer": "I don't like cold weather.",
              "explanation": {
                "en": "'I don't like' is used to express dislike.",
                "pt": "'I don't like' é usado para expressar desgosto."
              }
            },
            {
              "id": "b17c-act3-q2",
              "prompt": {
                "en": "Which comparative adjective is correct for 'dangerous'?",
                "pt": "Qual adjetivo comparativo está correto para 'dangerous'?"
              },
              "options": [
                "dangerouser",
                "more dangerous",
                "dangerousest",
                "dangerously"
              ],
              "answer": "more dangerous",
              "explanation": {
                "en": "Dangerous is a long adjective, so we use 'more dangerous'.",
                "pt": "Dangerous é um adjetivo longo, então usamos 'more dangerous'."
              }
            }
          ]
        },
        {
          "id": "b17c-act4",
          "title": {
            "en": "Talk About Yourself",
            "pt": "Fale Sobre Você"
          },
          "instruction": {
            "en": "Describe your ideal vacation. Use comparative adjectives to compare places or activities, and expressions of likes/dislikes.",
            "pt": "Descreva suas férias ideais. Use adjetivos comparativos para comparar lugares ou atividades, e expressões de gostos/desgostos."
          },
          "phrases": [
            {
              "en": "I love tropical destinations. They are warmer than my city.",
              "pt": "Eu adoro destinos tropicais. Eles são mais quentes que minha cidade."
            },
            {
              "en": "I don't like long flights, but a good destination makes it better.",
              "pt": "Eu não gosto de voos longos, mas um bom destino o torna melhor."
            },
            {
              "en": "I prefer hotels with a pool; they are more fun than hotels without one.",
              "pt": "Eu prefiro hotéis com piscina; eles são mais divertidos do que hotéis sem."
            }
          ],
          "check": [
            {
              "id": "b17c-act4-q1",
              "prompt": {
                "en": "Which statement correctly compares two things?",
                "pt": "Qual afirmação compara corretamente duas coisas?"
              },
              "options": [
                "My home is biger than your home.",
                "My home is more bigger than your home.",
                "My home is bigger than your home.",
                "My home is biggest than your home."
              ],
              "answer": "My home is bigger than your home.",
              "explanation": {
                "en": "Big is a short adjective, so we double the 'g' and add -er.",
                "pt": "Big é um adjetivo curto, então dobramos o 'g' e adicionamos -er."
              }
            },
            {
              "id": "b17c-act4-q2",
              "prompt": {
                "en": "Choose the expression of preference:",
                "pt": "Escolha a expressão de preferência:"
              },
              "options": [
                "I like",
                "I dislike",
                "I don't like",
                "I hate"
              ],
              "answer": "I like",
              "explanation": {
                "en": "'I like' expresses a positive preference.",
                "pt": "'I like' expressa uma preferência positiva."
              }
            }
          ]
        },
        {
          "id": "b17c-act5",
          "title": {
            "en": "Describe",
            "pt": "Descreva"
          },
          "instruction": {
            "en": "Describe two different travel destinations to a friend. Compare them using adjectives and your preferences.",
            "pt": "Descreva dois destinos de viagem diferentes para um amigo. Compare-os usando adjetivos e suas preferências."
          },
          "phrases": [
            {
              "en": "City A is more exciting than City B, but City B is safer.",
              "pt": "A Cidade A é mais emocionante que a Cidade B, mas a Cidade B é mais segura."
            },
            {
              "en": "The hotel in the mountains is cheaper than the beach hotel, and the views are more beautiful.",
              "pt": "O hotel nas montanhas é mais barato que o hotel na praia, e as vistas são mais bonitas."
            },
            {
              "en": "I prefer the island. It's sunnier and the water is clearer than the lake.",
              "pt": "Eu prefiro a ilha. É mais ensolarado e a água é mais clara que a do lago."
            }
          ],
          "check": [
            {
              "id": "b17c-act5-q1",
              "prompt": {
                "en": "What is the comparative form of 'crowded'?",
                "pt": "Qual é a forma comparativa de 'crowded'?"
              },
              "options": [
                "crowdedder",
                "more crowded",
                "crowdedest",
                "most crowded"
              ],
              "answer": "more crowded",
              "explanation": {
                "en": "Crowded is a long adjective, so we use 'more crowded'.",
                "pt": "Crowded é um adjetivo longo, então usamos 'more crowded'."
              }
            },
            {
              "id": "b17c-act5-q2",
              "prompt": {
                "en": "Which sentence expresses a strong positive feeling?",
                "pt": "Qual frase expressa um sentimento positivo forte?"
              },
              "options": [
                "I don't like",
                "I prefer",
                "I love",
                "I hate"
              ],
              "answer": "I love",
              "explanation": {
                "en": "'I love' expresses a very strong positive feeling.",
                "pt": "'I love' expressa um sentimento positivo muito forte."
              }
            }
          ]
        }
      ],
      "challenge": {
        "id": "b17c-chal1",
        "title": {
          "en": "Plan Your Dream Trip",
          "pt": "Planeje a Viagem dos Seus Sonhos"
        },
        "instruction": {
          "en": "Imagine you are planning your dream trip with a friend. Discuss two possible destinations. Compare them using at least three comparative adjectives and express your likes/dislikes about each. Decide which destination is better for your trip and explain why.",
          "pt": "Imagine que você está planejando a viagem dos seus sonhos com um amigo. Discuta dois possíveis destinos. Compare-os usando pelo menos três adjetivos comparativos e expresse seus gostos/desgostos sobre cada um. Decida qual destino é melhor para sua viagem e explique o porquê."
        },
        "phrases": [
          {
            "en": "Destination A is sunnier than Destination B, but B has more interesting history.",
            "pt": "O Destino A é mais ensolarado que o Destino B, mas o B tem uma história mais interessante."
          },
          {
            "en": "I love swimming, so the beach is better for me.",
            "pt": "Eu adoro nadar, então a praia é melhor para mim."
          },
          {
            "en": "A flight to Destination A is cheaper, but the hotel is more expensive.",
            "pt": "Um voo para o Destino A é mais barato, mas o hotel é mais caro."
          }
        ],
        "check": [
          {
            "id": "b17c-chal1-q1",
            "prompt": {
              "en": "Which sentence correctly compares the cost of two places?",
              "pt": "Qual frase compara corretamente o custo de dois lugares?"
            },
            "options": [
              "Place X is much expensive than Place Y.",
              "Place X is expensiver than Place Y.",
              "Place X is more expensive than Place Y.",
              "Place X is the most expensive than Place Y."
            ],
            "answer": "Place X is more expensive than Place Y.",
            "explanation": {
              "en": "Expensive is a long adjective, so 'more expensive than' is correct.",
              "pt": "Expensive é um adjetivo longo, então 'more expensive than' está correto."
            }
          },
          {
            "id": "b17c-chal1-q2",
            "prompt": {
              "en": "What expression shows a strong preference for one option over another?",
              "pt": "Qual expressão mostra uma forte preferência por uma opção em relação a outra?"
            },
            "options": [
              "I don't like",
              "I prefer",
              "It's okay",
              "I am indifferent"
            ],
            "answer": "I prefer",
            "explanation": {
              "en": "'I prefer' indicates a stronger choice over alternatives.",
              "pt": "'I prefer' indica uma escolha mais forte sobre alternativas."
            }
          }
        ]
      },
      "lessonReview": {
        "summary": {
          "en": "In this unit, you learned about travel vocabulary and how to use comparative adjectives to compare things. You also practiced expressing your likes, dislikes, and preferences.",
          "pt": "Nesta unidade, você aprendeu vocabulário de viagem e como usar adjetivos comparativos para comparar coisas. Você também praticou como expressar seus gostos, desgostos e preferências."
        },
        "canDo": [
          {
            "en": "Talk about travel plans and destinations.",
            "pt": "Falar sobre planos e destinos de viagem."
          },
          {
            "en": "Compare two places or experiences using comparative adjectives.",
            "pt": "Comparar dois lugares ou experiências usando adjetivos comparativos."
          },
          {
            "en": "Express personal preferences using 'like', 'don't like', 'love', 'prefer'.",
            "pt": "Expressar preferências pessoais usando 'like', 'don't like', 'love', 'prefer'."
          }
        ],
        "next": {
          "en": "In the next unit, we will explore more about daily routines and time expressions.",
          "pt": "Na próxima unidade, exploraremos mais sobre rotinas diárias e expressões de tempo."
        }
      }
    }
  },
  {
    "code": "BEGINNER-U18",
    "number": 18,
    "title": "Travel - Superlative Adjectives",
    "titlePt": "Viagem - Adjetivos Superlativos",
    "cefr": "A1",
    "objective": {
      "en": "To teach 'travel' vocabulary and 'superlative adjectives' (-est / the most + adjective) in a contextualized way.",
      "pt": "Ensinar o vocabulário de 'viagem' e 'adjetivos superlativos' (-est / the most + adjective) de forma contextualizada."
    },
    "communicationGoal": {
      "en": "Students will be able to use 'requests' and 'travel' vocabulary to communicate in real situations.",
      "pt": "O aluno será capaz de usar 'requests' e o vocabulário de 'travel' para se comunicar em situações reais."
    },
    "prerequisites": {
      "en": "Grammar: Comparative adjectives (-er / more + adjective). Vocabulary: Travel.",
      "pt": "Estrutura: Comparative adjectives (-er / more + adjective). Vocabulário: Travel."
    },
    "newContent": {
      "en": "Grammar: Superlative adjectives (-est / the most + adjective). Vocabulary: Travel (10 lexical items). Expressions: Requests.",
      "pt": "Grammar: Superlative adjectives (-est / the most + adjective). Vocabulário: Travel (10 itens lexicais). Expressões: Requests."
    },
    "reviewContent": {
      "en": "Spiral review: Can / Can't for ability and permission (Unit 13). Vocabulary review: Free Time (Unit 8).",
      "pt": "Revisão em espiral: Can / Can't para habilidade e permissão (Unit 13). Revisão de vocabulário: Free Time (Unit 8)."
    },
    "discover": {
      "id": "BEGINNER-U18-DISCOVER",
      "warmUp": {
        "prompt": {
          "en": "Look at the pictures. What do you see? Do you like to travel?",
          "pt": "Olhe as imagens. O que você vê? Você gosta de viajar?"
        },
        "phrases": [
          {
            "en": "I see an airplane and a beach.",
            "pt": "Eu vejo um avião e uma praia."
          },
          {
            "en": "Yes, I like to travel a lot!",
            "pt": "Sim, eu gosto muito de viajar!"
          },
          {
            "en": "My favorite place to travel is...",
            "pt": "Meu lugar favorito para viajar é..."
          }
        ]
      },
      "context": {
        "situation": {
          "en": "Maria is at the airport, preparing for her trip to New York. She needs some help.",
          "pt": "Maria está no aeroporto, se preparando para sua viagem a Nova York. Ela precisa de ajuda."
        },
        "dialogue": [
          {
            "who": "Maria",
            "en": "Excuse me, can you help me, please?",
            "pt": "Com licença, você pode me ajudar, por favor?"
          },
          {
            "who": "Clerk",
            "en": "Yes, how can I help you?",
            "pt": "Sim, como posso ajudar?"
          },
          {
            "who": "Maria",
            "en": "I need to check my flight. Is this the right gate?",
            "pt": "Preciso verificar meu voo. Este é o portão certo?"
          },
          {
            "who": "Clerk",
            "en": "Let me see. Yes, flight BA201 to New York is at gate 7. It's the biggest gate.",
            "pt": "Deixe-me ver. Sim, o voo BA201 para Nova York é no portão 7. É o maior portão."
          },
          {
            "who": "Maria",
            "en": "Thank you! Oh, and can I have a map of the airport, please?",
            "pt": "Obrigada! Ah, e posso pegar um mapa do aeroporto, por favor?"
          },
          {
            "who": "Clerk",
            "en": "Of course. Here is the most recent map. Have a safe trip!",
            "pt": "Claro. Aqui está o mapa mais recente. Tenha uma boa viagem!"
          },
          {
            "who": "Maria",
            "en": "Thanks! This is the most exciting trip!",
            "pt": "Obrigada! Esta é a viagem mais emocionante!"
          }
        ]
      },
      "vocabulary": [
        {
          "term": "ticket",
          "pt": "passagem/bilhete",
          "ipa": "/ˈtɪkɪt/",
          "definition": "A piece of paper or card that gives you the right to enter a place or to travel on a bus, train, etc.",
          "example": "I need my ticket to enter the airport.",
          "examplePt": "Eu preciso da minha passagem para entrar no aeroporto."
        },
        {
          "term": "passport",
          "pt": "passaporte",
          "ipa": "/ˈpæspɔːrt/",
          "definition": "An official document containing your photograph and personal details that you need to show when you enter or leave a country.",
          "example": "Do you have your passport for international travel?",
          "examplePt": "Você tem seu passaporte para viagens internacionais?"
        },
        {
          "term": "luggage",
          "pt": "bagagem",
          "ipa": "/ˈlʌɡɪdʒ/",
          "definition": "The bags, cases, etc. that contain your possessions and that you take with you when you are traveling.",
          "example": "My luggage is very heavy.",
          "examplePt": "Minha bagagem está muito pesada."
        },
        {
          "term": "flight",
          "pt": "voo",
          "ipa": "/flaɪt/",
          "definition": "A journey made by air, especially in a plane.",
          "example": "Our flight to Brazil is at 9 AM.",
          "examplePt": "Nosso voo para o Brasil é às 9h."
        },
        {
          "term": "hotel",
          "pt": "hotel",
          "ipa": "/hoʊˈtɛl/",
          "definition": "A building where people stay, usually for a short time, paying for their rooms and meals.",
          "example": "We booked a nice hotel for our vacation.",
          "examplePt": "Nós reservamos um hotel legal para nossas férias."
        },
        {
          "term": "reservation",
          "pt": "reserva",
          "ipa": "/ˌrɛzərˈveɪʃən/",
          "definition": "An arrangement to have a seat, room, or table at a particular time in the future.",
          "example": "I have a dinner reservation at 7 PM.",
          "examplePt": "Eu tenho uma reserva para o jantar às 19h."
        },
        {
          "term": "destination",
          "pt": "destino",
          "ipa": "/ˌdɛstɪˈneɪʃən/",
          "definition": "The place to which someone or something is going or being sent.",
          "example": "Paris is a popular travel destination.",
          "examplePt": "Paris é um destino de viagem popular."
        },
        {
          "term": "tour",
          "pt": "excursão/passeio",
          "ipa": "/tʊər/",
          "definition": "A journey during which several places are visited, especially for pleasure or education.",
          "example": "We took a tour of the city center.",
          "examplePt": "Nós fizemos uma excursão pelo centro da cidade."
        },
        {
          "term": "map",
          "pt": "mapa",
          "ipa": "/mæp/",
          "definition": "A drawing or plan of the earth's surface or part of it, showing countries, cities, rivers, etc.",
          "example": "Can you show me the museum on the map?",
          "examplePt": "Você pode me mostrar o museu no mapa?"
        },
        {
          "term": "itinerary",
          "pt": "roteiro",
          "ipa": "/aɪˈtɪnərɛri/",
          "definition": "A detailed plan for a journey, especially a list of places to visit and times.",
          "example": "Our itinerary includes Rome, Florence, and Venice.",
          "examplePt": "Nosso roteiro inclui Roma, Florença e Veneza."
        }
      ],
      "expressions": [
        {
          "en": "Can you help me, please?",
          "pt": "Você pode me ajudar, por favor?"
        },
        {
          "en": "Could you open the window?",
          "pt": "Você poderia abrir a janela?"
        },
        {
          "en": "Can I have the menu, please?",
          "pt": "Posso ter o cardápio, por favor?"
        }
      ],
      "grammar": [
        {
          "title": {
            "en": "Superlative Adjectives (-est / the most + adjective)",
            "pt": "Adjetivos Superlativos (-est / the most + adjective)"
          },
          "examples": [
            {
              "en": "This is the biggest city in the country.",
              "pt": "Esta é a maior cidade do país."
            },
            {
              "en": "It's the most beautiful park I know.",
              "pt": "É o parque mais bonito que conheço."
            },
            {
              "en": "She is the happiest person in our family.",
              "pt": "Ela é a pessoa mais feliz da nossa família."
            }
          ],
          "rule": {
            "en": "We use superlative adjectives to describe something that is at the limit of a quality (the highest, the lowest, the fastest, etc.).\n\nFor short adjectives (1 syllable or 2 syllables ending in -y), we add '-est'. Remember to add 'the' before the adjective.\n- big → the biggest\n- happy → the happiest (change y to i)\n\nFor long adjectives (2 or more syllables not ending in -y), we use 'the most' before the adjective.\n- beautiful → the most beautiful\n- expensive → the most expensive",
            "pt": "Usamos adjetivos superlativos para descrever algo que está no limite de uma qualidade (o mais alto, o mais baixo, o mais rápido, etc.).\n\nPara adjetivos curtos (1 sílaba ou 2 sílabas terminando em -y), adicionamos '-est'. Lembre-se de adicionar 'the' antes do adjetivo.\n- big → o maior\n- happy → o mais feliz (mude y para i)\n\nPara adjetivos longos (2 ou mais sílabas que não terminam em -y), usamos 'the most' antes do adjetivo.\n- beautiful → o mais bonito\n- expensive → o mais caro"
          },
          "mistakes": [
            {
              "en": "Incorrect: This is most big city. Correct: This is the biggest city.",
              "pt": "Incorreto: This is most big city. Correto: This is the biggest city."
            },
            {
              "en": "Incorrect: It's the beautifulest park. Correct: It's the most beautiful park.",
              "pt": "Incorreto: It's the beautifulest park. Correto: It's the most beautiful park."
            }
          ]
        }
      ],
      "controlledPractice": [
        {
          "id": "b18d-cp-1",
          "prompt": {
            "en": "Choose the correct superlative adjective: Brazil is _____ country in South America. (large)",
            "pt": "Escolha o adjetivo superlativo correto: O Brasil é _____ país da América do Sul. (grande)"
          },
          "options": [
            "the larger",
            "the largest",
            "the most large",
            "the more large"
          ],
          "answer": "the largest",
          "explanation": {
            "en": "'Large' is a one-syllable adjective, so we add '-est' and 'the'.",
            "pt": "'Large' é um adjetivo de uma sílaba, então adicionamos '-est' e 'the'."
          }
        },
        {
          "id": "b18d-cp-2",
          "prompt": {
            "en": "Complete the sentence: Mount Everest is _____ mountain in the world. (high)",
            "pt": "Complete a frase: O Monte Everest é _____ montanha do mundo. (alto)"
          },
          "options": [
            "the higher",
            "the highest",
            "the most high",
            "the more high"
          ],
          "answer": "the highest",
          "explanation": {
            "en": "'High' is a short adjective. We use 'the highest'.",
            "pt": "'High' é um adjetivo curto. Usamos 'the highest'."
          }
        },
        {
          "id": "b18d-cp-3",
          "prompt": {
            "en": "Which option completes the sentence correctly? This is _____ movie I've ever seen. (exciting)",
            "pt": "Qual opção completa a frase corretamente? Este é _____ filme que eu já vi. (emocionante)"
          },
          "options": [
            "the excitingest",
            "the more exciting",
            "the most exciting",
            "the excitinger"
          ],
          "answer": "the most exciting",
          "explanation": {
            "en": "'Exciting' has three syllables, so we use 'the most'.",
            "pt": "'Exciting' tem três sílabas, então usamos 'the most'."
          }
        },
        {
          "id": "b18d-cp-4",
          "prompt": {
            "en": "Choose the best option: She is _____ student in the class. (intelligent)",
            "pt": "Escolha a melhor opção: Ela é _____ aluna da turma. (inteligente)"
          },
          "options": [
            "the intelligentest",
            "the most intelligent",
            "the intelligenter",
            "the more intelligent"
          ],
          "answer": "the most intelligent",
          "explanation": {
            "en": "'Intelligent' is a long adjective. We use 'the most intelligent'.",
            "pt": "'Intelligent' é um adjetivo longo. Usamos 'the most intelligent'."
          }
        }
      ],
      "input": {
        "kind": "listening",
        "title": {
          "en": "A Trip to Paris",
          "pt": "Uma Viagem a Paris"
        },
        "lines": [
          {
            "en": "Hey, Tom! I'm so excited for our trip to Paris next month!",
            "pt": "Ei, Tom! Estou tão animada para nossa viagem a Paris no próximo mês!"
          },
          {
            "en": "Me too, Maria! It's going to be the best trip ever. Do you have our tickets and passports ready?",
            "pt": "Eu também, Maria! Vai ser a melhor viagem de todas. Você tem nossas passagens e passaportes prontos?"
          },
          {
            "en": "Yes, I have them! And I made a reservation for a hotel near the Eiffel Tower. It's the most famous landmark!",
            "pt": "Sim, eu tenho! E fiz uma reserva para um hotel perto da Torre Eiffel. É o ponto turístico mais famoso!"
          },
          {
            "en": "Great! Could you send me the itinerary? I want to see our destinations.",
            "pt": "Ótimo! Você poderia me enviar o roteiro? Quero ver nossos destinos."
          },
          {
            "en": "Sure, I can send it. We'll take a tour of the Louvre, it's the biggest museum.",
            "pt": "Claro, posso enviar. Faremos um passeio pelo Louvre, é o maior museu."
          },
          {
            "en": "Fantastic! This is the most amazing vacation plan!",
            "pt": "Fantástico! Este é o plano de férias mais incrível!"
          }
        ],
        "questions": [
          {
            "id": "b18d-in-1",
            "prompt": {
              "en": "What are Maria and Tom excited about?",
              "pt": "Sobre o que Maria e Tom estão animados?"
            },
            "options": [
              "Their new car",
              "Their trip to Paris",
              "A new movie",
              "Their new house"
            ],
            "answer": "Their trip to Paris",
            "explanation": {
              "en": "Maria says, 'I'm so excited for our trip to Paris next month!'",
              "pt": "Maria diz: 'Estou tão animada para nossa viagem a Paris no próximo mês!'"
            }
          },
          {
            "id": "b18d-in-2",
            "prompt": {
              "en": "Where is the hotel reservation?",
              "pt": "Onde é a reserva do hotel?"
            },
            "options": [
              "Near the airport",
              "Near the Louvre",
              "Near the Eiffel Tower",
              "In the city center"
            ],
            "answer": "Near the Eiffel Tower",
            "explanation": {
              "en": "Maria says, 'I made a reservation for a hotel near the Eiffel Tower.'",
              "pt": "Maria diz: 'Eu fiz uma reserva para um hotel perto da Torre Eiffel.'"
            }
          },
          {
            "id": "b18d-in-3",
            "prompt": {
              "en": "What do they plan to visit that is 'the biggest museum'?",
              "pt": "O que eles planejam visitar que é 'o maior museu'?"
            },
            "options": [
              "The Eiffel Tower",
              "The Louvre",
              "Notre Dame",
              "A local market"
            ],
            "answer": "The Louvre",
            "explanation": {
              "en": "Maria says, 'We'll take a tour of the Louvre, it's the biggest museum.'",
              "pt": "Maria diz: 'Faremos um passeio pelo Louvre, é o maior museu.'"
            }
          }
        ]
      },
      "quickCheck": [
        {
          "id": "b18d-qc-1",
          "prompt": {
            "en": "Choose the correct superlative: This is _____ building in the city. (tall)",
            "pt": "Escolha o superlativo correto: Este é _____ edifício da cidade. (alto)"
          },
          "options": [
            "the taller",
            "the tallest",
            "the most tall",
            "the more tall"
          ],
          "answer": "the tallest",
          "explanation": {
            "en": "'Tall' is a short adjective, so we add '-est'.",
            "pt": "'Tall' é um adjetivo curto, então adicionamos '-est'."
          }
        },
        {
          "id": "b18d-qc-2",
          "prompt": {
            "en": "Complete the request: _____ help me find my gate, please?",
            "pt": "Complete o pedido: _____ me ajudar a encontrar meu portão, por favor?"
          },
          "options": [
            "You can",
            "Can you",
            "Could you to",
            "You could"
          ],
          "answer": "Can you",
          "explanation": {
            "en": "'Can you help me, please?' is a common request.",
            "pt": "'Can you help me, please?' é um pedido comum."
          }
        },
        {
          "id": "b18d-qc-3",
          "prompt": {
            "en": "Which word means 'bagagem'?",
            "pt": "Qual palavra significa 'bagagem'?"
          },
          "options": [
            "Ticket",
            "Passport",
            "Luggage",
            "Flight"
          ],
          "answer": "Luggage",
          "explanation": {
            "en": "'Luggage' is the English word for 'bagagem'.",
            "pt": "'Luggage' é a palavra em inglês para 'bagagem'."
          }
        },
        {
          "id": "b18d-qc-4",
          "prompt": {
            "en": "This is _____ trip of my life! (fantastic)",
            "pt": "Esta é _____ viagem da minha vida! (fantástica)"
          },
          "options": [
            "the fantasticest",
            "the most fantastic",
            "the fantastics",
            "the more fantastic"
          ],
          "answer": "the most fantastic",
          "explanation": {
            "en": "'Fantastic' is a long adjective. We use 'the most fantastic'.",
            "pt": "'Fantastic' é um adjetivo longo. Usamos 'the most fantastic'."
          }
        }
      ]
    },
    "communicate": {
      "id": "BEGINNER-U18-COMMUNICATE",
      "review": [
        {
          "en": "Today we learned about 'travel' vocabulary: ticket, passport, luggage, flight, hotel, reservation, destination, tour, map, itinerary.",
          "pt": "Hoje aprendemos sobre o vocabulário de 'viagem': ticket, passport, luggage, flight, hotel, reservation, destination, tour, map, itinerary."
        },
        {
          "en": "We also practiced making 'requests' using 'Can you help me, please?', 'Could you open the window?', and 'Can I have the menu, please?'.",
          "pt": "Também praticamos fazer 'pedidos' usando 'Can you help me, please?', 'Could you open the window?' e 'Can I have the menu, please?'."
        },
        {
          "en": "And we learned about 'superlative adjectives' to say something is the 'biggest' or 'most beautiful'.",
          "pt": "E aprendemos sobre 'adjetivos superlativos' para dizer que algo é o 'maior' ou 'mais bonito'."
        }
      ],
      "activities": [
        {
          "id": "b18c-act-1",
          "title": {
            "en": "Build Sentences",
            "pt": "Construa Frases"
          },
          "instruction": {
            "en": "Use the words to build a complete sentence with a superlative adjective or a request.",
            "pt": "Use as palavras para construir uma frase completa com um adjetivo superlativo ou um pedido."
          },
          "phrases": [
            {
              "en": "This / be / the / happy / day",
              "pt": "Este / ser / o / feliz / dia"
            },
            {
              "en": "Can / you / help / me / find / my / luggage?",
              "pt": "Você / pode / me / ajudar / a / encontrar / minha / bagagem?"
            },
            {
              "en": "New York / be / the / big / city / I know",
              "pt": "Nova York / ser / a / grande / cidade / que eu conheço"
            }
          ],
          "check": [
            {
              "id": "b18c-act1-chk-1",
              "prompt": {
                "en": "The correct sentence for 'This / be / the / happy / day' is:",
                "pt": "A frase correta para 'This / be / the / happy / day' é:"
              },
              "options": [
                "This is the happyest day.",
                "This is the most happy day.",
                "This is the happier day.",
                "This is the happiest day."
              ],
              "answer": "This is the happiest day.",
              "explanation": {
                "en": "'Happy' is a two-syllable adjective ending in -y, so we change 'y' to 'i' and add '-est'.",
                "pt": "'Happy' é um adjetivo de duas sílabas terminando em -y, então mudamos 'y' para 'i' e adicionamos '-est'."
              }
            },
            {
              "id": "b18c-act1-chk-2",
              "prompt": {
                "en": "The correct sentence for 'Can / you / help / me / find / my / luggage?' is:",
                "pt": "A frase correta para 'Can / you / help / me / find / my / luggage?' é:"
              },
              "options": [
                "Can you help me find my luggage?",
                "You can help me find my luggage?",
                "Help me can you find my luggage?",
                "Can help you me find my luggage?"
              ],
              "answer": "Can you help me find my luggage?",
              "explanation": {
                "en": "This is the correct structure for a 'Can you...?' request.",
                "pt": "Esta é a estrutura correta para um pedido 'Can you...?'."
              }
            }
          ]
        },
        {
          "id": "b18c-act-2",
          "title": {
            "en": "Role-play",
            "pt": "Dramatização"
          },
          "instruction": {
            "en": "Work with a partner. Imagine you are at the airport. One person needs help, the other works there. Use requests and travel vocabulary.",
            "pt": "Trabalhe com um parceiro. Imagine que vocês estão no aeroporto. Uma pessoa precisa de ajuda, a outra trabalha lá. Use pedidos e vocabulário de viagem."
          },
          "phrases": [
            {
              "en": "Ask for your flight information.",
              "pt": "Pergunte sobre as informações do seu voo."
            },
            {
              "en": "Ask for a map of the city.",
              "pt": "Peça um mapa da cidade."
            },
            {
              "en": "Describe your destination using a superlative adjective.",
              "pt": "Descreva seu destino usando um adjetivo superlativo."
            }
          ],
          "check": [
            {
              "id": "b18c-act2-chk-1",
              "prompt": {
                "en": "What is a good way to ask for a flight number?",
                "pt": "Qual é uma boa forma de perguntar o número de um voo?"
              },
              "options": [
                "My flight number is?",
                "Can I have my flight number?",
                "What is my flight number, please?",
                "Give me my flight number."
              ],
              "answer": "What is my flight number, please?",
              "explanation": {
                "en": "This is a polite and direct way to ask for information.",
                "pt": "Esta é uma forma educada e direta de pedir informações."
              }
            },
            {
              "id": "b18c-act2-chk-2",
              "prompt": {
                "en": "Which sentence uses a superlative correctly to describe a destination?",
                "pt": "Qual frase usa um superlativo corretamente para descrever um destino?"
              },
              "options": [
                "It's the most wonderful destination.",
                "It's the wonderfullest destination.",
                "It's the more wonderful destination.",
                "It's the wonderfuller destination."
              ],
              "answer": "It's the most wonderful destination.",
              "explanation": {
                "en": "'Wonderful' is a long adjective, so we use 'the most wonderful'.",
                "pt": "'Wonderful' é um adjetivo longo, então usamos 'the most wonderful'."
              }
            }
          ]
        },
        {
          "id": "b18c-act-3",
          "title": {
            "en": "Talk to Your Partner",
            "pt": "Converse com Seu Parceiro"
          },
          "instruction": {
            "en": "Discuss your dream travel destination. Use superlative adjectives to describe it.",
            "pt": "Discuta seu destino de viagem dos sonhos. Use adjetivos superlativos para descrevê-lo."
          },
          "phrases": [
            {
              "en": "My dream destination is...",
              "pt": "Meu destino dos sonhos é..."
            },
            {
              "en": "It's the most beautiful place.",
              "pt": "É o lugar mais bonito."
            },
            {
              "en": "The food there is the best!",
              "pt": "A comida lá é a melhor!"
            }
          ],
          "check": [
            {
              "id": "b18c-act3-chk-1",
              "prompt": {
                "en": "How would you describe the coldest place?",
                "pt": "Como você descreveria o lugar mais frio?"
              },
              "options": [
                "It's the colder place.",
                "It's the most cold place.",
                "It's the coldest place.",
                "It's the more cold place."
              ],
              "answer": "It's the coldest place.",
              "explanation": {
                "en": "'Cold' is a short adjective, so we add '-est'.",
                "pt": "'Cold' é um adjetivo curto, então adicionamos '-est'."
              }
            },
            {
              "id": "b18c-act3-chk-2",
              "prompt": {
                "en": "Your partner talks about a city with 'the most interesting museums'. What kind of city is it?",
                "pt": "Seu parceiro fala sobre uma cidade com 'os museus mais interessantes'. Que tipo de cidade é?"
              },
              "options": [
                "A boring city",
                "An old city",
                "A city with many interesting museums",
                "A small city"
              ],
              "answer": "A city with many interesting museums",
              "explanation": {
                "en": "'The most interesting museums' means there are many interesting museums, more than other places.",
                "pt": "'Os museus mais interessantes' significa que há muitos museus interessantes, mais do que em outros lugares."
              }
            }
          ]
        },
        {
          "id": "b18c-act-4",
          "title": {
            "en": "Ask and Answer",
            "pt": "Pergunte e Responda"
          },
          "instruction": {
            "en": "Ask your partner questions about travel. Use requests and superlative adjectives in your answers.",
            "pt": "Faça perguntas ao seu parceiro sobre viagens. Use pedidos e adjetivos superlativos em suas respostas."
          },
          "phrases": [
            {
              "en": "What is the most beautiful city you know?",
              "pt": "Qual é a cidade mais bonita que você conhece?"
            },
            {
              "en": "Can I ask you about your favorite hotel?",
              "pt": "Posso te perguntar sobre seu hotel favorito?"
            },
            {
              "en": "Which is the busiest airport you've been to?",
              "pt": "Qual é o aeroporto mais movimentado em que você esteve?"
            }
          ],
          "check": [
            {
              "id": "b18c-act4-chk-1",
              "prompt": {
                "en": "If someone asks 'What is the most relaxing destination?', what kind of answer would be appropriate?",
                "pt": "Se alguém pergunta 'Qual é o destino mais relaxante?', que tipo de resposta seria apropriada?"
              },
              "options": [
                "I like adventurous trips.",
                "My flight is long.",
                "A beach with no people is the most relaxing.",
                "I don't like to travel."
              ],
              "answer": "A beach with no people is the most relaxing.",
              "explanation": {
                "en": "The answer should describe a destination using a superlative adjective.",
                "pt": "A resposta deve descrever um destino usando um adjetivo superlativo."
              }
            },
            {
              "id": "b18c-act4-chk-2",
              "prompt": {
                "en": "To politely ask for information about a train ticket, you could say:",
                "pt": "Para pedir informações sobre uma passagem de trem educadamente, você poderia dizer:"
              },
              "options": [
                "Where is my ticket?",
                "Give me the ticket information.",
                "Could you tell me about the train ticket, please?",
                "I want train ticket info."
              ],
              "answer": "Could you tell me about the train ticket, please?",
              "explanation": {
                "en": "'Could you tell me...?' is a polite way to make a request.",
                "pt": "'Could you tell me...?' é uma forma educada de fazer um pedido."
              }
            }
          ]
        },
        {
          "id": "b18c-act-5",
          "title": {
            "en": "Short Speaking Tasks",
            "pt": "Tarefas Curtas de Fala"
          },
          "instruction": {
            "en": "Describe your last trip using one superlative adjective. Make a request related to travel.",
            "pt": "Descreva sua última viagem usando um adjetivo superlativo. Faça um pedido relacionado a viagens."
          },
          "phrases": [
            {
              "en": "My last trip was to the mountains. It was the most peaceful trip.",
              "pt": "Minha última viagem foi para as montanhas. Foi a viagem mais tranquila."
            },
            {
              "en": "Could you tell me where the passport control is?",
              "pt": "Você poderia me dizer onde fica o controle de passaportes?"
            },
            {
              "en": "I need a flight to London. What is the cheapest ticket?",
              "pt": "Preciso de um voo para Londres. Qual é a passagem mais barata?"
            }
          ],
          "check": [
            {
              "id": "b18c-act5-chk-1",
              "prompt": {
                "en": "Which sentence uses a superlative correctly?",
                "pt": "Qual frase usa um superlativo corretamente?"
              },
              "options": [
                "This is the longuest journey.",
                "This is the most long journey.",
                "This is the longest journey.",
                "This is the more long journey."
              ],
              "answer": "This is the longest journey.",
              "explanation": {
                "en": "'Long' is a short adjective, so we add '-est'.",
                "pt": "'Long' é um adjetivo curto, então adicionamos '-est'."
              }
            },
            {
              "id": "b18c-act5-chk-2",
              "prompt": {
                "en": "Your friend wants to find the gate for their flight. What is a polite request they can make?",
                "pt": "Seu amigo quer encontrar o portão para seu voo. Qual é um pedido educado que ele pode fazer?"
              },
              "options": [
                "Where is my gate?",
                "Tell me my gate.",
                "Can you show me my gate, please?",
                "My gate now!"
              ],
              "answer": "Can you show me my gate, please?",
              "explanation": {
                "en": "'Can you show me..., please?' is a very polite and clear request.",
                "pt": "'Can you show me..., please?' é um pedido muito educado e claro."
              }
            }
          ]
        }
      ],
      "challenge": {
        "id": "b18c-challenge-1",
        "title": {
          "en": "Plan Your Dream Trip",
          "pt": "Planeje a Viagem dos Seus Sonhos"
        },
        "instruction": {
          "en": "Imagine you are planning your dream trip. Describe your destination, why it's the best, and make three requests for things you need for your trip.",
          "pt": "Imagine que você está planejando a viagem dos seus sonhos. Descreva seu destino, por que ele é o melhor, e faça três pedidos de coisas que você precisa para sua viagem."
        },
        "phrases": [
          {
            "en": "My dream destination is Japan. It's the most interesting country.",
            "pt": "Meu destino dos sonhos é o Japão. É o país mais interessante."
          },
          {
            "en": "Could you help me find the best flight deals?",
            "pt": "Você poderia me ajudar a encontrar as melhores ofertas de voos?"
          },
          {
            "en": "Can I have a map of Tokyo, please?",
            "pt": "Posso pegar um mapa de Tóquio, por favor?"
          },
          {
            "en": "I need the fastest train ticket.",
            "pt": "Eu preciso da passagem de trem mais rápida."
          }
        ],
        "check": [
          {
            "id": "b18c-chal-chk-1",
            "prompt": {
              "en": "Which sentence correctly describes a destination using a superlative?",
              "pt": "Qual frase descreve corretamente um destino usando um superlativo?"
            },
            "options": [
              "It's the beautifulest island.",
              "It's the most beautiful island.",
              "It's the more beautiful island.",
              "It's the beautifuler island."
            ],
            "answer": "It's the most beautiful island.",
            "explanation": {
              "en": "'Beautiful' is a long adjective, so 'the most beautiful' is correct.",
              "pt": "'Beautiful' é um adjetivo longo, então 'the most beautiful' está correto."
            }
          },
          {
            "id": "b18c-chal-chk-2",
            "prompt": {
              "en": "If you need a hotel reservation, what is a polite way to ask for help?",
              "pt": "Se você precisa de uma reserva de hotel, qual é uma forma educada de pedir ajuda?"
            },
            "options": [
              "Get me a hotel reservation!",
              "I want a hotel reservation.",
              "Can you help me with a hotel reservation, please?",
              "Hotel reservation, quick!"
            ],
            "answer": "Can you help me with a hotel reservation, please?",
            "explanation": {
              "en": "'Can you help me with..., please?' is a common and polite request.",
              "pt": "'Can you help me with..., please?' é um pedido comum e educado."
            }
          }
        ]
      },
      "lessonReview": {
        "summary": {
          "en": "In this unit, you learned new travel vocabulary, how to make polite requests, and how to use superlative adjectives to describe things as the 'most' or 'biggest'.",
          "pt": "Nesta unidade, você aprendeu um novo vocabulário de viagem, como fazer pedidos educados e como usar adjetivos superlativos para descrever coisas como as 'mais' ou 'maiores'."
        },
        "canDo": [
          {
            "en": "I can use travel vocabulary like 'ticket' and 'passport'.",
            "pt": "Consigo usar vocabulário de viagem como 'ticket' e 'passport'."
          },
          {
            "en": "I can make requests using 'Can you...?' and 'Could you...?'",
            "pt": "Consigo fazer pedidos usando 'Can you...?' e 'Could you...?'"
          },
          {
            "en": "I can describe things using superlative adjectives, for example, 'the biggest' or 'the most interesting'.",
            "pt": "Consigo descrever coisas usando adjetivos superlativos, por exemplo, 'the biggest' ou 'the most interesting'."
          }
        ],
        "next": {
          "en": "Next, we will practice planning a trip in more detail and review past tense verbs.",
          "pt": "Em seguida, praticaremos planejar uma viagem com mais detalhes e revisaremos verbos no passado."
        }
      }
    }
  },
  {
    "code": "BEGINNER-U19",
    "number": 19,
    "title": "Life Events - Simple Past",
    "titlePt": "Eventos da Vida - Passado Simples",
    "cefr": "A1",
    "objective": {
      "en": "To teach life events and Simple Past — verb 'to be' and regular verbs (affirmative), -ed ending in context.",
      "pt": "Ensinar eventos da vida e o Passado Simples — verbo 'to be' e verbos regulares (afirmativo), terminação -ed de forma contextualizada."
    },
    "communicationGoal": {
      "en": "The student will be able to use 'offering help' and life events vocabulary to communicate in real situations.",
      "pt": "O aluno será capaz de usar 'oferecer ajuda' e o vocabulário de eventos da vida para se comunicar em situações reais."
    },
    "prerequisites": {
      "en": "Structure: Superlative adjectives (-est / the most + adjective). Vocabulary: Travel.",
      "pt": "Estrutura: Adjetivos superlativos (-est / the most + adjective). Vocabulário: Viagem."
    },
    "newContent": {
      "en": "Grammar: Simple Past — verb to be and regular verbs (affirmative), -ed ending. | Vocabulary: Life Events (10 lexical items) | Expressions: Offering Help",
      "pt": "Gramática: Passado Simples — verbo to be e verbos regulares (afirmativo), terminação -ed. | Vocabulário: Eventos da Vida (10 itens lexicais) | Expressões: Oferecer Ajuda"
    },
    "reviewContent": {
      "en": "Spiral review: Countable and uncountable nouns (Unit 14). Vocabulary review: City Places (Unit 9).",
      "pt": "Revisão em espiral: Substantivos contáveis e incontáveis (Unidade 14). Revisão de vocabulário: Lugares na Cidade (Unidade 9)."
    },
    "discover": {
      "id": "BEGINNER-U19-DISCOVER",
      "warmUp": {
        "prompt": {
          "en": "Look at the pictures. What important things happen in a person's life?",
          "pt": "Observe as imagens. Que coisas importantes acontecem na vida de uma pessoa?"
        },
        "phrases": [
          {
            "en": "Starting school.",
            "pt": "Começar a escola."
          },
          {
            "en": "Getting a job.",
            "pt": "Conseguir um emprego."
          },
          {
            "en": "Getting married.",
            "pt": "Casar."
          },
          {
            "en": "Having children.",
            "pt": "Ter filhos."
          }
        ]
      },
      "context": {
        "situation": {
          "en": "Maria and John are talking about recent life events and offering help.",
          "pt": "Maria e John estão conversando sobre eventos recentes da vida e oferecendo ajuda."
        },
        "dialogue": [
          {
            "who": "Maria",
            "en": "Hi John! You look tired. What happened?",
            "pt": "Oi John! Você parece cansado. O que aconteceu?"
          },
          {
            "who": "John",
            "en": "Hi Maria. I moved house last weekend. It was a lot of work!",
            "pt": "Oi Maria. Eu me mudei de casa no fim de semana passado. Foi muito trabalho!"
          },
          {
            "who": "Maria",
            "en": "Oh, really? That's a big event! My sister graduated last month, and we celebrated a lot.",
            "pt": "Ah, sério? Que evento grande! Minha irmã se formou no mês passado, e nós comemoramos muito."
          },
          {
            "who": "John",
            "en": "That’s great news! I started a new job last year, it was challenging.",
            "pt": "Que ótima notícia! Eu comecei um emprego novo no ano passado, foi desafiador."
          },
          {
            "who": "Maria",
            "en": "Wow, a new job and a new house! Do you need anything? Can I help you with something?",
            "pt": "Uau, um emprego novo e uma casa nova! Você precisa de alguma coisa? Posso te ajudar com algo?"
          },
          {
            "who": "John",
            "en": "Thanks, Maria. I need to unpack many boxes. Let me help you with that.",
            "pt": "Obrigado, Maria. Preciso desempacotar muitas caixas. Deixe-me ajudar com isso."
          },
          {
            "who": "Maria",
            "en": "No problem! I can bring some food too. Moving is hard work.",
            "pt": "Sem problemas! Posso trazer comida também. Mudar é um trabalho duro."
          },
          {
            "who": "John",
            "en": "You're the best! Thanks a lot.",
            "pt": "Você é a melhor! Muito obrigado."
          }
        ]
      },
      "vocabulary": [
        {
          "term": "graduate",
          "pt": "formar-se",
          "ipa": "/ˈɡrædʒuˌeɪt/",
          "definition": "To complete a course of study at a college or university.",
          "example": "My brother graduated from college last year.",
          "examplePt": "Meu irmão se formou na faculdade no ano passado."
        },
        {
          "term": "get married",
          "pt": "casar-se",
          "ipa": "/ɡɛt ˈmærid/",
          "definition": "To become husband and wife; to enter into a legal union with someone.",
          "example": "They got married in a beautiful ceremony.",
          "examplePt": "Eles se casaram em uma linda cerimônia."
        },
        {
          "term": "move house",
          "pt": "mudar de casa",
          "ipa": "/muv haʊs/",
          "definition": "To leave your home in order to live in a new one.",
          "example": "We moved house last month. It was tiring.",
          "examplePt": "Nós nos mudamos de casa no mês passado. Foi cansativo."
        },
        {
          "term": "start a job",
          "pt": "começar um emprego",
          "ipa": "/stɑrt ə dʒɑb/",
          "definition": "To begin working in a new position.",
          "example": "He started a new job last week.",
          "examplePt": "Ele começou um emprego novo na semana passada."
        },
        {
          "term": "travel abroad",
          "pt": "viajar para o exterior",
          "ipa": "/ˈtrævəl əˈbrɔd/",
          "definition": "To go to another country.",
          "example": "They traveled abroad for their honeymoon.",
          "examplePt": "Eles viajaram para o exterior na lua de mel."
        },
        {
          "term": "have a baby",
          "pt": "ter um bebê",
          "ipa": "/hæv ə ˈbeɪbi/",
          "definition": "To give birth to a child.",
          "example": "My sister had a baby last year.",
          "examplePt": "Minha irmã teve um bebê no ano passado."
        },
        {
          "term": "retire",
          "pt": "aposentar-se",
          "ipa": "/rɪˈtaɪər/",
          "definition": "To stop working because you have reached a certain age.",
          "example": "My grandparents retired five years ago.",
          "examplePt": "Meus avós se aposentaram há cinco anos."
        },
        {
          "term": "buy a house",
          "pt": "comprar uma casa",
          "ipa": "/baɪ ə haʊs/",
          "definition": "To purchase a home.",
          "example": "They want to buy a house in the city.",
          "examplePt": "Eles querem comprar uma casa na cidade."
        },
        {
          "term": "change careers",
          "pt": "mudar de carreira",
          "ipa": "/tʃeɪndʒ kəˈrɪərz/",
          "definition": "To start a new type of job or profession.",
          "example": "She changed careers to become a teacher.",
          "examplePt": "Ela mudou de carreira para se tornar professora."
        },
        {
          "term": "learn a skill",
          "pt": "aprender uma habilidade",
          "ipa": "/lɜrn ə skɪl/",
          "definition": "To acquire knowledge or ability to do something well.",
          "example": "He learned a new skill: coding.",
          "examplePt": "Ele aprendeu uma nova habilidade: programação."
        }
      ],
      "expressions": [
        {
          "en": "Can I help you?",
          "pt": "Posso ajudar você?"
        },
        {
          "en": "Do you need anything?",
          "pt": "Você precisa de algo?"
        },
        {
          "en": "Let me help you with that.",
          "pt": "Deixe-me ajudar você com isso."
        }
      ],
      "grammar": [
        {
          "title": {
            "en": "Simple Past: Verb 'to be' (affirmative)",
            "pt": "Passado Simples: Verbo 'to be' (afirmativo)"
          },
          "examples": [
            {
              "en": "I was at home yesterday.",
              "pt": "Eu estava em casa ontem."
            },
            {
              "en": "She was happy last night.",
              "pt": "Ela estava feliz ontem à noite."
            },
            {
              "en": "We were friends in school.",
              "pt": "Nós éramos amigos na escola."
            }
          ],
          "rule": {
            "en": "Use 'was' for singular subjects (I, he, she, it) and 'were' for plural subjects (we, you, they) to talk about states or conditions in the past.",
            "pt": "Use 'was' para sujeitos no singular (I, he, she, it) e 'were' para sujeitos no plural (we, you, they) para falar sobre estados ou condições no passado."
          },
          "mistakes": [
            {
              "en": "Incorrect: I were happy.",
              "pt": "Incorreto: Eu estavam feliz."
            },
            {
              "en": "Incorrect: They was busy.",
              "pt": "Incorreto: Eles estava ocupado."
            }
          ]
        },
        {
          "title": {
            "en": "Simple Past: Regular Verbs (affirmative) -ed ending",
            "pt": "Passado Simples: Verbos Regulares (afirmativo) - terminação -ed"
          },
          "examples": [
            {
              "en": "She worked late last night.",
              "pt": "Ela trabalhou até tarde ontem à noite."
            },
            {
              "en": "We lived in Brazil for five years.",
              "pt": "Nós moramos no Brasil por cinco anos."
            },
            {
              "en": "They traveled to Europe last summer.",
              "pt": "Eles viajaram para a Europa no verão passado."
            }
          ],
          "rule": {
            "en": "To form the simple past of regular verbs, add '-ed' to the base form of the verb. If the verb ends in 'e', just add 'd'. If it ends in consonant + y, change 'y' to 'i' and add 'ed'.",
            "pt": "Para formar o passado simples de verbos regulares, adicione '-ed' à forma base do verbo. Se o verbo termina em 'e', adicione apenas 'd'. Se termina em consoante + y, troque o 'y' por 'i' e adicione 'ed'."
          },
          "mistakes": [
            {
              "en": "Incorrect: I work yesterday.",
              "pt": "Incorreto: Eu trabalhar ontem."
            },
            {
              "en": "Incorrect: She live in Paris last year.",
              "pt": "Incorreto: Ela morar em Paris ano passado."
            }
          ]
        }
      ],
      "controlledPractice": [
        {
          "id": "b19d-cp-1",
          "prompt": {
            "en": "Choose the correct past form for 'be': I ___ at the party.",
            "pt": "Escolha a forma correta do passado para 'be': Eu ___ na festa."
          },
          "options": [
            "was",
            "were",
            "is",
            "am"
          ],
          "answer": "was",
          "explanation": {
            "en": "'Was' is the correct past form for 'I'.",
            "pt": "'Was' é a forma correta do passado para 'I'."
          }
        },
        {
          "id": "b19d-cp-2",
          "prompt": {
            "en": "Complete the sentence with the past simple of 'live': They ___ in that house.",
            "pt": "Complete a frase com o passado simples de 'live': Eles ___ naquela casa."
          },
          "options": [
            "live",
            "lived",
            "lives",
            "living"
          ],
          "answer": "lived",
          "explanation": {
            "en": "For regular verbs ending in 'e', add 'd' for the simple past.",
            "pt": "Para verbos regulares terminados em 'e', adicione 'd' para o passado simples."
          }
        },
        {
          "id": "b19d-cp-3",
          "prompt": {
            "en": "Which sentence uses the Simple Past correctly?",
            "pt": "Qual frase usa o Passado Simples corretamente?"
          },
          "options": [
            "She study yesterday.",
            "She studied yesterday.",
            "She studies yesterday.",
            "She studying yesterday."
          ],
          "answer": "She studied yesterday.",
          "explanation": {
            "en": "'Study' changes to 'studied' in the simple past.",
            "pt": "'Study' muda para 'studied' no passado simples."
          }
        },
        {
          "id": "b19d-cp-4",
          "prompt": {
            "en": "Fill in the blank: We ___ tired after the trip.",
            "pt": "Preencha a lacuna: Nós ___ cansados depois da viagem."
          },
          "options": [
            "was",
            "were",
            "is",
            "am"
          ],
          "answer": "were",
          "explanation": {
            "en": "'Were' is the correct past form for 'we'.",
            "pt": "'Were' é a forma correta do passado para 'we'."
          }
        }
      ],
      "input": {
        "kind": "reading",
        "title": {
          "en": "A Busy Year",
          "pt": "Um Ano Ocupado"
        },
        "lines": [
          {
            "en": "Last year was very busy for my family. My brother, Tom, graduated from university in May. He was very happy and proud. After that, he traveled abroad for a month. He visited many countries in Europe.",
            "pt": "O ano passado foi muito ocupado para minha família. Meu irmão, Tom, se formou na universidade em maio. Ele estava muito feliz e orgulhoso. Depois disso, ele viajou para o exterior por um mês. Ele visitou muitos países na Europa."
          },
          {
            "en": "In August, my parents bought a house. It was a beautiful old house. We all helped them move house in September. It was hard work, but we finished on time. In October, my cousin had a baby. She was a cute girl! We visited her often.",
            "pt": "Em agosto, meus pais compraram uma casa. Era uma linda casa antiga. Todos nós os ajudamos a se mudar em setembro. Foi um trabalho duro, mas terminamos a tempo. Em outubro, minha prima teve um bebê. Ela era uma menina fofa! Nós a visitamos frequentemente."
          },
          {
            "en": "Finally, in December, my aunt retired from her job. She worked for 30 years! Now she plans to learn a new skill: painting. It was a year full of big life events!",
            "pt": "Finalmente, em dezembro, minha tia se aposentou do trabalho. Ela trabalhou por 30 anos! Agora ela planeja aprender uma nova habilidade: pintura. Foi um ano cheio de grandes eventos da vida!"
          }
        ],
        "questions": [
          {
            "id": "b19d-input-1",
            "prompt": {
              "en": "When did Tom graduate from university?",
              "pt": "Quando Tom se formou na universidade?"
            },
            "options": [
              "In April",
              "In May",
              "In June",
              "In August"
            ],
            "answer": "In May",
            "explanation": {
              "en": "The text says: 'My brother, Tom, graduated from university in May.'",
              "pt": "O texto diz: 'Meu irmão, Tom, se formou na universidade em maio.'"
            }
          },
          {
            "id": "b19d-input-2",
            "prompt": {
              "en": "What did Tom do after he graduated?",
              "pt": "O que Tom fez depois de se formar?"
            },
            "options": [
              "He started a new job.",
              "He bought a house.",
              "He traveled abroad.",
              "He had a baby."
            ],
            "answer": "He traveled abroad.",
            "explanation": {
              "en": "The text says: 'After that, he traveled abroad for a month.'",
              "pt": "O texto diz: 'Depois disso, ele viajou para o exterior por um mês.'"
            }
          },
          {
            "id": "b19d-input-3",
            "prompt": {
              "en": "What new skill does the aunt want to learn?",
              "pt": "Que nova habilidade a tia quer aprender?"
            },
            "options": [
              "Cooking",
              "Dancing",
              "Painting",
              "Singing"
            ],
            "answer": "Painting",
            "explanation": {
              "en": "The text says: 'Now she plans to learn a new skill: painting.'",
              "pt": "O texto diz: 'Agora ela planeja aprender uma nova habilidade: pintura.'"
            }
          }
        ]
      },
      "quickCheck": [
        {
          "id": "b19d-qc-1",
          "prompt": {
            "en": "Choose the past form of 'be' for 'They': They ___ busy.",
            "pt": "Escolha a forma passada de 'be' para 'They': Eles ___ ocupados."
          },
          "options": [
            "was",
            "were",
            "is",
            "am"
          ],
          "answer": "were",
          "explanation": {
            "en": "'Were' is used with 'they'.",
            "pt": "'Were' é usado com 'they'."
          }
        },
        {
          "id": "b19d-qc-2",
          "prompt": {
            "en": "What is the past simple of 'travel'?",
            "pt": "Qual é o passado simples de 'travel'?"
          },
          "options": [
            "travel",
            "traveled",
            "travels",
            "traveling"
          ],
          "answer": "traveled",
          "explanation": {
            "en": "Add '-ed' to 'travel' for the simple past.",
            "pt": "Adicione '-ed' a 'travel' para o passado simples."
          }
        },
        {
          "id": "b19d-qc-3",
          "prompt": {
            "en": "Which expression is used to offer help?",
            "pt": "Qual expressão é usada para oferecer ajuda?"
          },
          "options": [
            "How are you?",
            "What is your name?",
            "Can I help you?",
            "Thank you."
          ],
          "answer": "Can I help you?",
          "explanation": {
            "en": "'Can I help you?' is a common expression for offering help.",
            "pt": "'Can I help you?' é uma expressão comum para oferecer ajuda."
          }
        },
        {
          "id": "b19d-qc-4",
          "prompt": {
            "en": "Which life event means to stop working?",
            "pt": "Qual evento da vida significa parar de trabalhar?"
          },
          "options": [
            "graduate",
            "retire",
            "get married",
            "start a job"
          ],
          "answer": "retire",
          "explanation": {
            "en": "'Retire' means to stop working, usually because of age.",
            "pt": "'Retire' significa parar de trabalhar, geralmente por causa da idade."
          }
        }
      ]
    },
    "communicate": {
      "id": "BEGINNER-U19-COMMUNICATE",
      "review": [
        {
          "en": "We learned about life events like 'graduate' and 'move house'.",
          "pt": "Aprendemos sobre eventos da vida como 'formar-se' e 'mudar de casa'."
        },
        {
          "en": "We practiced Simple Past with 'was/were' and '-ed' verbs.",
          "pt": "Praticamos o Passado Simples com 'was/were' e verbos com '-ed'."
        },
        {
          "en": "We also learned how to offer help using phrases like 'Can I help you?'.",
          "pt": "Também aprendemos a oferecer ajuda usando frases como 'Posso ajudar você?'."
        }
      ],
      "activities": [
        {
          "id": "b19c-act-1",
          "title": {
            "en": "Talk About Yourself: Past Events",
            "pt": "Fale Sobre Você: Eventos Passados"
          },
          "instruction": {
            "en": "Tell your partner about two important life events that happened to you or someone you know. Use the Simple Past.",
            "pt": "Conte ao seu parceiro sobre dois eventos importantes da vida que aconteceram com você ou alguém que você conhece. Use o Passado Simples."
          },
          "phrases": [
            {
              "en": "I started a new job last year. It was exciting.",
              "pt": "Comecei um emprego novo no ano passado. Foi emocionante."
            },
            {
              "en": "My sister graduated two years ago. She was very happy.",
              "pt": "Minha irmã se formou há dois anos. Ela estava muito feliz."
            },
            {
              "en": "We moved house when I was a child. It was a big change.",
              "pt": "Nós nos mudamos de casa quando eu era criança. Foi uma grande mudança."
            }
          ],
          "check": [
            {
              "id": "b19c-act-1-chk-1",
              "prompt": {
                "en": "Which sentence describes a past event?",
                "pt": "Qual frase descreve um evento passado?"
              },
              "options": [
                "I work today.",
                "I am working now.",
                "I worked yesterday.",
                "I will work tomorrow."
              ],
              "answer": "I worked yesterday.",
              "explanation": {
                "en": "'Worked' is in the simple past.",
                "pt": "'Worked' está no passado simples."
              }
            },
            {
              "id": "b19c-act-1-chk-2",
              "prompt": {
                "en": "What is a life event?",
                "pt": "O que é um evento da vida?"
              },
              "options": [
                "Eating breakfast.",
                "Watching TV.",
                "Getting married.",
                "Sleeping well."
              ],
              "answer": "Getting married.",
              "explanation": {
                "en": "Getting married is a significant life event.",
                "pt": "Casar é um evento significativo da vida."
              }
            }
          ]
        },
        {
          "id": "b19c-act-2",
          "title": {
            "en": "Describe: Pictures of Life Events",
            "pt": "Descreva: Imagens de Eventos da Vida"
          },
          "instruction": {
            "en": "Look at the pictures of different life events. Describe what happened in each picture using the Simple Past.",
            "pt": "Observe as imagens de diferentes eventos da vida. Descreva o que aconteceu em cada imagem usando o Passado Simples."
          },
          "phrases": [
            {
              "en": "They got married last year.",
              "pt": "Eles se casaram no ano passado."
            },
            {
              "en": "The woman had a baby in the hospital.",
              "pt": "A mulher teve um bebê no hospital."
            },
            {
              "en": "He graduated from university with his friends.",
              "pt": "Ele se formou na universidade com seus amigos."
            }
          ],
          "check": [
            {
              "id": "b19c-act-2-chk-1",
              "prompt": {
                "en": "Which verb form correctly completes 'She ___ a skill last year.'?",
                "pt": "Qual forma verbal completa corretamente 'Ela ___ uma habilidade no ano passado.'?"
              },
              "options": [
                "learn",
                "learns",
                "learned",
                "learning"
              ],
              "answer": "learned",
              "explanation": {
                "en": "'Learned' is the simple past of 'learn'.",
                "pt": "'Learned' é o passado simples de 'learn'."
              }
            },
            {
              "id": "b19c-act-2-chk-2",
              "prompt": {
                "en": "Which word is a life event?",
                "pt": "Qual palavra é um evento da vida?"
              },
              "options": [
                "book",
                "car",
                "retire",
                "tree"
              ],
              "answer": "retire",
              "explanation": {
                "en": "Retire is a significant event in one's life.",
                "pt": "Aposentar-se é um evento significativo na vida de uma pessoa."
              }
            }
          ]
        },
        {
          "id": "b19c-act-3",
          "title": {
            "en": "Give Your Opinion: Helping Friends",
            "pt": "Dê Sua Opinião: Ajudando Amigos"
          },
          "instruction": {
            "en": "A friend just moved house. What would you say to offer help?",
            "pt": "Um amigo acabou de se mudar de casa. O que você diria para oferecer ajuda?"
          },
          "phrases": [
            {
              "en": "Do you need anything for your new house?",
              "pt": "Você precisa de algo para sua casa nova?"
            },
            {
              "en": "Let me help you with those boxes.",
              "pt": "Deixe-me ajudar você com essas caixas."
            },
            {
              "en": "Can I bring you some food tonight?",
              "pt": "Posso trazer comida para você hoje à noite?"
            }
          ],
          "check": [
            {
              "id": "b19c-act-3-chk-1",
              "prompt": {
                "en": "Which phrase is NOT an offer of help?",
                "pt": "Qual frase NÃO é uma oferta de ajuda?"
              },
              "options": [
                "Can I help you?",
                "Do you need anything?",
                "Let me help you with that.",
                "What is your name?"
              ],
              "answer": "What is your name?",
              "explanation": {
                "en": "'What is your name?' asks for information, not offers help.",
                "pt": "'What is your name?' pede informações, não oferece ajuda."
              }
            },
            {
              "id": "b19c-act-3-chk-2",
              "prompt": {
                "en": "Your friend is tired. How can you offer help?",
                "pt": "Seu amigo está cansado. Como você pode oferecer ajuda?"
              },
              "options": [
                "Are you hungry?",
                "Let me carry that bag.",
                "Where are you going?",
                "Did you sleep well?"
              ],
              "answer": "Let me carry that bag.",
              "explanation": {
                "en": "Offering to carry a bag is a direct offer of help.",
                "pt": "Oferecer-se para carregar uma bolsa é uma oferta direta de ajuda."
              }
            }
          ]
        },
        {
          "id": "b19c-act-4",
          "title": {
            "en": "Writing Tasks: My Last Big Event",
            "pt": "Tarefas de Escrita: Meu Último Grande Evento"
          },
          "instruction": {
            "en": "Write 3-4 sentences about the last important life event you experienced or witnessed. Use Simple Past verbs and new vocabulary.",
            "pt": "Escreva 3-4 frases sobre o último evento importante da vida que você vivenciou ou testemunhou. Use verbos no Passado Simples e vocabulário novo."
          },
          "phrases": [
            {
              "en": "Last year, my parents bought a house. It was very big.",
              "pt": "No ano passado, meus pais compraram uma casa. Era muito grande."
            },
            {
              "en": "My friend traveled abroad for vacation. He visited Rome.",
              "pt": "Meu amigo viajou para o exterior nas férias. Ele visitou Roma."
            },
            {
              "en": "I started a new hobby last month. I learned to play guitar.",
              "pt": "Comecei um novo hobby no mês passado. Aprendi a tocar violão."
            }
          ],
          "check": [
            {
              "id": "b19c-act-4-chk-1",
              "prompt": {
                "en": "Which verb is NOT in the Simple Past?",
                "pt": "Qual verbo NÃO está no Passado Simples?"
              },
              "options": [
                "played",
                "studied",
                "go",
                "visited"
              ],
              "answer": "go",
              "explanation": {
                "en": "'Go' is the base form, not the simple past.",
                "pt": "'Go' é a forma base, não o passado simples."
              }
            },
            {
              "id": "b19c-act-4-chk-2",
              "prompt": {
                "en": "Which sentence correctly uses 'was'?",
                "pt": "Qual frase usa 'was' corretamente?"
              },
              "options": [
                "We was happy.",
                "They was sad.",
                "She was tired.",
                "You was busy."
              ],
              "answer": "She was tired.",
              "explanation": {
                "en": "'Was' is used with singular subjects like 'she'.",
                "pt": "'Was' é usado com sujeitos no singular como 'she'."
              }
            }
          ]
        },
        {
          "id": "b19c-act-5",
          "title": {
            "en": "Reading Comprehension: Friend's Big News",
            "pt": "Compreensão de Leitura: Notícias Importantes de um Amigo"
          },
          "instruction": {
            "en": "Read a short message from a friend describing a life event. Answer the questions.",
            "pt": "Leia uma mensagem curta de um amigo descrevendo um evento da vida. Responda às perguntas."
          },
          "phrases": [
            {
              "en": "Hi! Guess what? I started a new job last week! It's very different from my old one. I am very happy, but also a little tired.",
              "pt": "Oi! Adivinhe? Comecei um emprego novo na semana passada! É muito diferente do meu antigo. Estou muito feliz, mas também um pouco cansado."
            },
            {
              "en": "My cousin got married last month. The wedding was beautiful. We danced all night! It was a very special day for our family.",
              "pt": "Minha prima se casou no mês passado. O casamento foi lindo. Dançamos a noite toda! Foi um dia muito especial para nossa família."
            },
            {
              "en": "My parents decided to retire. They worked for many years. Now they plan to travel abroad every year!",
              "pt": "Meus pais decidiram se aposentar. Eles trabalharam por muitos anos. Agora eles planejam viajar para o exterior todos os anos!"
            }
          ],
          "check": [
            {
              "id": "b19c-act-5-chk-1",
              "prompt": {
                "en": "In the first message, what happened last week?",
                "pt": "Na primeira mensagem, o que aconteceu na semana passada?"
              },
              "options": [
                "The friend moved house.",
                "The friend started a new job.",
                "The friend traveled abroad.",
                "The friend bought a house."
              ],
              "answer": "The friend started a new job.",
              "explanation": {
                "en": "The message says: 'I started a new job last week!'",
                "pt": "A mensagem diz: 'Comecei um emprego novo na semana passada!'"
              }
            },
            {
              "id": "b19c-act-5-chk-2",
              "prompt": {
                "en": "What did the parents in the third message decide to do?",
                "pt": "O que os pais na terceira mensagem decidiram fazer?"
              },
              "options": [
                "Have a baby.",
                "Change careers.",
                "Retire.",
                "Graduate."
              ],
              "answer": "Retire.",
              "explanation": {
                "en": "The message says: 'My parents decided to retire.'",
                "pt": "A mensagem diz: 'Meus pais decidiram se aposentar.'"
              }
            }
          ]
        }
      ],
      "challenge": {
        "id": "b19c-challenge",
        "title": {
          "en": "Role-play: Your friend needs help!",
          "pt": "Role-play: Seu amigo precisa de ajuda!"
        },
        "instruction": {
          "en": "Imagine your friend just moved house. You meet them and talk about it. Offer help. Your friend should accept or decline and say thank you.",
          "pt": "Imagine que seu amigo acabou de se mudar de casa. Vocês se encontram e conversam sobre isso. Ofereça ajuda. Seu amigo deve aceitar ou recusar e agradecer."
        },
        "phrases": [
          {
            "en": "You moved house? That's a lot of work!",
            "pt": "Você se mudou? Isso é muito trabalho!"
          },
          {
            "en": "Do you need anything for your new place?",
            "pt": "Você precisa de algo para sua casa nova?"
          },
          {
            "en": "I can help you unpack boxes tomorrow.",
            "pt": "Posso ajudar você a desempacotar caixas amanhã."
          },
          {
            "en": "Oh, thank you! That's very kind of you.",
            "pt": "Ah, obrigado! Isso é muito gentil da sua parte."
          }
        ],
        "check": [
          {
            "id": "b19c-challenge-chk-1",
            "prompt": {
              "en": "In the role-play, what did your friend just do?",
              "pt": "No role-play, o que seu amigo acabou de fazer?"
            },
            "options": [
              "Traveled abroad.",
              "Graduated.",
              "Moved house.",
              "Got married."
            ],
            "answer": "Moved house.",
            "explanation": {
              "en": "The instruction says: 'Imagine your friend just moved house.'",
              "pt": "A instrução diz: 'Imagine que seu amigo acabou de se mudar de casa.'"
            }
          },
          {
            "id": "b19c-challenge-chk-2",
            "prompt": {
              "en": "When offering help, which question is appropriate?",
              "pt": "Ao oferecer ajuda, qual pergunta é apropriada?"
            },
            "options": [
              "Where did you go?",
              "What did you eat?",
              "Can I help you?",
              "When is your birthday?"
            ],
            "answer": "Can I help you?",
            "explanation": {
              "en": "'Can I help you?' is a direct way to offer assistance.",
              "pt": "'Posso ajudar você?' é uma forma direta de oferecer assistência."
            }
          }
        ]
      },
      "lessonReview": {
        "summary": {
          "en": "In this unit, we learned about common life events and how to talk about past actions using the Simple Past for 'to be' and regular verbs. We also practiced offering help to others.",
          "pt": "Nesta unidade, aprendemos sobre eventos comuns da vida e como falar sobre ações passadas usando o Passado Simples para 'to be' e verbos regulares. Também praticamos como oferecer ajuda aos outros."
        },
        "canDo": [
          {
            "en": "I can identify and use vocabulary for life events.",
            "pt": "Consigo identificar e usar vocabulário para eventos da vida."
          },
          {
            "en": "I can use 'was' and 'were' correctly to talk about the past.",
            "pt": "Consigo usar 'was' e 'were' corretamente para falar sobre o passado."
          },
          {
            "en": "I can use regular verbs with '-ed' ending to describe past actions.",
            "pt": "Consigo usar verbos regulares com terminação '-ed' para descrever ações passadas."
          },
          {
            "en": "I can offer help using appropriate expressions.",
            "pt": "Consigo oferecer ajuda usando expressões apropriadas."
          }
        ],
        "next": {
          "en": "In the next unit, we will continue with Simple Past, learning about negative forms and irregular verbs.",
          "pt": "Na próxima unidade, continuaremos com o Passado Simples, aprendendo sobre formas negativas e verbos irregulares."
        }
      }
    }
  },
  {
    "code": "BEGINNER-U20",
    "number": 20,
    "title": "Life Events - Simple Past",
    "titlePt": "Eventos da Vida - Passado Simples",
    "cefr": "A1",
    "objective": {
      "en": "To teach life events and Simple Past — common irregular verbs (affirmative) in a contextualized way.",
      "pt": "Ensinar life events e Simple Past — common irregular verbs (affirmative) de forma contextualizada."
    },
    "communicationGoal": {
      "en": "The student will be able to use 'accept refuse' and life events vocabulary to communicate in real situations.",
      "pt": "O aluno será capaz de usar 'accept refuse' e o vocabulário de life events para se comunicar em situações reais."
    },
    "prerequisites": {
      "en": "Structure: Simple Past — verb to be and regular verbs (affirmative), -ed ending. Vocabulary: Life Events.",
      "pt": "Estrutura: Simple Past — verb to be and regular verbs (affirmative), -ed ending. Vocabulário: Life Events."
    },
    "newContent": {
      "en": "Grammar: Simple Past — common irregular verbs (affirmative). Vocabulary: Life Events (10 lexical items). Expressions: Accept Refuse.",
      "pt": "Gramática: Simple Past — common irregular verbs (affirmative). Vocabulário: Life Events (10 itens lexicais). Expressões: Aceitar/Recusar."
    },
    "reviewContent": {
      "en": "Spiral review: Some (affirmative) and Any (negative/questions) (Unit 15). Vocabulary review: Activities Now (Unit 10).",
      "pt": "Revisão em espiral: Some (affirmative) and Any (negative/questions) (Unit 15). Revisão de vocabulário: Activities Now (Unit 10)."
    },
    "discover": {
      "id": "BEGINNER-U20-DISCOVER",
      "warmUp": {
        "prompt": {
          "en": "Look at the pictures. What important things happened in these people's lives?",
          "pt": "Observe as imagens. Que coisas importantes aconteceram na vida dessas pessoas?"
        },
        "phrases": [
          {
            "en": "Picture 1: A graduation ceremony.",
            "pt": "Imagem 1: Uma cerimônia de formatura."
          },
          {
            "en": "Picture 2: A wedding day.",
            "pt": "Imagem 2: Um dia de casamento."
          },
          {
            "en": "Picture 3: People moving boxes into a new house.",
            "pt": "Imagem 3: Pessoas carregando caixas para uma casa nova."
          }
        ]
      },
      "context": {
        "situation": {
          "en": "Listen to a conversation between two friends, Ana and Bruno, talking about life events and making plans.",
          "pt": "Ouça uma conversa entre dois amigos, Ana e Bruno, falando sobre eventos da vida e fazendo planos."
        },
        "dialogue": [
          {
            "who": "Ana",
            "en": "Hi Bruno! How are you?",
            "pt": "Oi Bruno! Como você está?"
          },
          {
            "who": "Bruno",
            "en": "Hi Ana! I'm good, thanks. And you?",
            "pt": "Oi Ana! Estou bem, obrigado. E você?"
          },
          {
            "who": "Ana",
            "en": "I'm great! I just moved house last month. It was a lot of work!",
            "pt": "Estou ótima! Eu acabei de me mudar no mês passado. Deu muito trabalho!"
          },
          {
            "who": "Bruno",
            "en": "Oh, really? That's nice! I started a new job last year. It's challenging but good.",
            "pt": "Ah, sério? Que legal! Eu comecei um trabalho novo no ano passado. É desafiador, mas bom."
          },
          {
            "who": "Ana",
            "en": "That's wonderful! Hey, my sister got married two weeks ago. We had a big party. Did you go?",
            "pt": "Que maravilha! Ei, minha irmã se casou duas semanas atrás. Fizemos uma festa grande. Você foi?"
          },
          {
            "who": "Bruno",
            "en": "Oh, I'd love to, but I can't. I traveled abroad for work that week. I saw your pictures though, it looked amazing!",
            "pt": "Ah, eu adoraria, mas não pude. Eu viajei para o exterior a trabalho naquela semana. Mas vi suas fotos, parecia incrível!"
          },
          {
            "who": "Ana",
            "en": "No problem! Maybe next time. Do you want to have coffee tomorrow?",
            "pt": "Sem problemas! Talvez na próxima. Você quer tomar um café amanhã?"
          },
          {
            "who": "Bruno",
            "en": "Yes, sure! What time?",
            "pt": "Sim, claro! Que horas?"
          },
          {
            "who": "Ana",
            "en": "Around 3 PM?",
            "pt": "Por volta das 15h?"
          },
          {
            "who": "Bruno",
            "en": "Perfect! See you then!",
            "pt": "Perfeito! Até lá!"
          }
        ]
      },
      "vocabulary": [
        {
          "term": "graduate",
          "pt": "formar-se",
          "ipa": "/ˈɡrædʒuət/",
          "definition": "To complete a degree or course at a school, college, or university.",
          "example": "She graduated from university last year.",
          "examplePt": "Ela se formou na universidade no ano passado."
        },
        {
          "term": "get married",
          "pt": "casar-se",
          "ipa": "/ɡɛt ˈmærid/",
          "definition": "To become husband and wife, or partners in a formal ceremony.",
          "example": "My friends got married in May.",
          "examplePt": "Meus amigos se casaram em maio."
        },
        {
          "term": "move house",
          "pt": "mudar de casa",
          "ipa": "/muːv haʊs/",
          "definition": "To change the place where you live.",
          "example": "We moved house last month. It was a big change.",
          "examplePt": "Nós mudamos de casa no mês passado. Foi uma grande mudança."
        },
        {
          "term": "start a job",
          "pt": "começar um trabalho",
          "ipa": "/stɑːrt ə dʒɒb/",
          "definition": "To begin working in a new position or company.",
          "example": "He started a new job yesterday.",
          "examplePt": "Ele começou um trabalho novo ontem."
        },
        {
          "term": "travel abroad",
          "pt": "viajar para o exterior",
          "ipa": "/ˈtrævl əˈbrɔːd/",
          "definition": "To go to another country for a vacation or work.",
          "example": "They traveled abroad for their honeymoon.",
          "examplePt": "Eles viajaram para o exterior para a lua de mel."
        },
        {
          "term": "have a baby",
          "pt": "ter um bebê",
          "ipa": "/hæv ə ˈbeɪbi/",
          "definition": "To give birth to a child.",
          "example": "My sister had a baby last year. It was a girl!",
          "examplePt": "Minha irmã teve um bebê no ano passado. Foi uma menina!"
        },
        {
          "term": "retire",
          "pt": "aposentar-se",
          "ipa": "/rɪˈtaɪər/",
          "definition": "To stop working because you have reached a certain age.",
          "example": "My grandfather retired after 40 years of work.",
          "examplePt": "Meu avô se aposentou depois de 40 anos de trabalho."
        },
        {
          "term": "buy a house",
          "pt": "comprar uma casa",
          "ipa": "/baɪ ə haʊs/",
          "definition": "To purchase a new home.",
          "example": "They bought a house in the city center.",
          "examplePt": "Eles compraram uma casa no centro da cidade."
        },
        {
          "term": "change careers",
          "pt": "mudar de carreira",
          "ipa": "/tʃeɪndʒ kəˈrɪərz/",
          "definition": "To move from one profession or job field to another.",
          "example": "She changed careers to become a teacher.",
          "examplePt": "Ela mudou de carreira para se tornar professora."
        },
        {
          "term": "learn a skill",
          "pt": "aprender uma habilidade",
          "ipa": "/lɜːrn ə skɪl/",
          "definition": "To acquire knowledge or ability to do something well.",
          "example": "I learned a new skill last month: coding.",
          "examplePt": "Eu aprendi uma nova habilidade no mês passado: programação."
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
            "en": "Simple Past — Common Irregular Verbs (Affirmative)",
            "pt": "Passado Simples — Verbos Irregulares Comuns (Afirmativo)"
          },
          "examples": [
            {
              "en": "I went to the beach.",
              "pt": "Eu fui à praia."
            },
            {
              "en": "We saw a great movie.",
              "pt": "Nós vimos um ótimo filme."
            },
            {
              "en": "She had a baby last year.",
              "pt": "Ela teve um bebê no ano passado."
            }
          ],
          "rule": {
            "en": "Many common verbs in English are irregular in the Simple Past. This means they do not follow the '-ed' rule. You need to learn their specific past forms. For affirmative sentences, we use the past form of the verb directly.",
            "pt": "Muitos verbos comuns em inglês são irregulares no Passado Simples. Isso significa que eles não seguem a regra do '-ed'. Você precisa aprender suas formas passadas específicas. Para frases afirmativas, usamos a forma passada do verbo diretamente."
          },
          "mistakes": [
            {
              "en": "Incorrect: I go-ed to the party.",
              "pt": "Incorreto: Eu fui-ed à festa."
            },
            {
              "en": "Correct: I went to the party.",
              "pt": "Correto: Eu fui à festa."
            }
          ]
        }
      ],
      "controlledPractice": [
        {
          "id": "b20d-cp-1",
          "prompt": {
            "en": "Choose the correct past form: My brother _______ (go) to college.",
            "pt": "Escolha a forma passada correta: Meu irmão _______ (ir) para a faculdade."
          },
          "options": [
            "go",
            "goed",
            "went",
            "gone"
          ],
          "answer": "went",
          "explanation": {
            "en": "'Go' is an irregular verb. Its Simple Past form is 'went'.",
            "pt": "'Go' é um verbo irregular. Sua forma no Passado Simples é 'went'."
          }
        },
        {
          "id": "b20d-cp-2",
          "prompt": {
            "en": "Complete the sentence: They _______ (have) a big party for their anniversary.",
            "pt": "Complete a frase: Eles _______ (ter) uma grande festa de aniversário."
          },
          "options": [
            "has",
            "had",
            "have",
            "haves"
          ],
          "answer": "had",
          "explanation": {
            "en": "'Have' is an irregular verb. Its Simple Past form is 'had'.",
            "pt": "'Have' é um verbo irregular. Sua forma no Passado Simples é 'had'."
          }
        },
        {
          "id": "b20d-cp-3",
          "prompt": {
            "en": "Which sentence uses the correct Simple Past irregular verb?",
            "pt": "Qual frase usa o verbo irregular no Passado Simples correto?"
          },
          "options": [
            "She saw a new film.",
            "She seed a new film.",
            "She see a new film.",
            "She sees a new film."
          ],
          "answer": "She saw a new film.",
          "explanation": {
            "en": "'See' is an irregular verb. Its Simple Past form is 'saw'.",
            "pt": "'See' é um verbo irregular. Sua forma no Passado Simples é 'saw'."
          }
        },
        {
          "id": "b20d-cp-4",
          "prompt": {
            "en": "Fill in the blank: Last year, I _______ (start) a new hobby.",
            "pt": "Preencha a lacuna: No ano passado, eu _______ (começar) um novo hobby."
          },
          "options": [
            "started",
            "start",
            "startted",
            "begin"
          ],
          "answer": "started",
          "explanation": {
            "en": "'Start' is a regular verb, so we add '-ed' for the Simple Past.",
            "pt": "'Start' é um verbo regular, então adicionamos '-ed' para o Passado Simples."
          }
        }
      ],
      "input": {
        "kind": "listening",
        "title": {
          "en": "A busy year",
          "pt": "Um ano agitado"
        },
        "lines": [
          {
            "en": "Hi Marco! How was your last year?",
            "pt": "Oi Marco! Como foi seu ano passado?"
          },
          {
            "en": "Oh, very busy! I graduated from college in June. Then I traveled abroad for a month.",
            "pt": "Ah, muito agitado! Eu me formei na faculdade em junho. Depois viajei para o exterior por um mês."
          },
          {
            "en": "Wow! That sounds amazing. And after that?",
            "pt": "Uau! Isso parece incrível. E depois disso?"
          },
          {
            "en": "I started a new job in August! It's difficult, but I like it. My brother also bought a house in October.",
            "pt": "Eu comecei um trabalho novo em agosto! É difícil, mas eu gosto. Meu irmão também comprou uma casa em outubro."
          },
          {
            "en": "So many things! And you, Clara?",
            "pt": "Tantas coisas! E você, Clara?"
          },
          {
            "en": "Well, my sister had a baby in April. We were all very happy. And I learned a new skill: cooking!",
            "pt": "Bem, minha irmã teve um bebê em abril. Todos ficamos muito felizes. E eu aprendi uma nova habilidade: cozinhar!"
          }
        ],
        "questions": [
          {
            "id": "b20d-lq-1",
            "prompt": {
              "en": "When did Marco graduate from college?",
              "pt": "Quando Marco se formou na faculdade?"
            },
            "options": [
              "In April",
              "In June",
              "In August",
              "In October"
            ],
            "answer": "In June",
            "explanation": {
              "en": "Marco said: 'I graduated from college in June.'",
              "pt": "Marco disse: 'Eu me formei na faculdade em junho.'"
            }
          },
          {
            "id": "b20d-lq-2",
            "prompt": {
              "en": "What did Marco do after he graduated?",
              "pt": "O que Marco fez depois de se formar?"
            },
            "options": [
              "He started a job.",
              "He bought a house.",
              "He traveled abroad.",
              "He had a baby."
            ],
            "answer": "He traveled abroad.",
            "explanation": {
              "en": "Marco said: 'Then I traveled abroad for a month.'",
              "pt": "Marco disse: 'Depois viajei para o exterior por um mês.'"
            }
          },
          {
            "id": "b20d-lq-3",
            "prompt": {
              "en": "What new skill did Clara learn?",
              "pt": "Que nova habilidade Clara aprendeu?"
            },
            "options": [
              "Driving",
              "Painting",
              "Cooking",
              "Singing"
            ],
            "answer": "Cooking",
            "explanation": {
              "en": "Clara said: 'And I learned a new skill: cooking!'",
              "pt": "Clara disse: 'E eu aprendi uma nova habilidade: cozinhar!'"
            }
          }
        ]
      },
      "quickCheck": [
        {
          "id": "b20d-qc-1",
          "prompt": {
            "en": "Which phrase means 'casar-se'?",
            "pt": "Qual frase significa 'casar-se'?"
          },
          "options": [
            "move house",
            "get married",
            "have a baby",
            "retire"
          ],
          "answer": "get married",
          "explanation": {
            "en": "'Get married' means to become husband and wife.",
            "pt": "'Get married' significa tornar-se marido e mulher."
          }
        },
        {
          "id": "b20d-qc-2",
          "prompt": {
            "en": "Choose the correct past form of 'see'.",
            "pt": "Escolha a forma passada correta de 'see'."
          },
          "options": [
            "seed",
            "saw",
            "seen",
            "sees"
          ],
          "answer": "saw",
          "explanation": {
            "en": "'Saw' is the Simple Past of 'see'.",
            "pt": "'Saw' é o Passado Simples de 'see'."
          }
        },
        {
          "id": "b20d-qc-3",
          "prompt": {
            "en": "How do you say 'Eu adoraria, mas não posso.' in English?",
            "pt": "Como se diz 'Eu adoraria, mas não posso.' em inglês?"
          },
          "options": [
            "Yes, sure!",
            "No, thank you.",
            "I'd love to, but I can't.",
            "I can't love."
          ],
          "answer": "I'd love to, but I can't.",
          "explanation": {
            "en": "This expression is used to politely refuse an offer.",
            "pt": "Esta expressão é usada para recusar uma oferta educadamente."
          }
        },
        {
          "id": "b20d-qc-4",
          "prompt": {
            "en": "Complete with the correct word: My parents _______ (buy) a new car last year.",
            "pt": "Complete com a palavra correta: Meus pais _______ (comprar) um carro novo no ano passado."
          },
          "options": [
            "buyed",
            "bought",
            "buy",
            "buys"
          ],
          "answer": "bought",
          "explanation": {
            "en": "'Buy' is an irregular verb. Its Simple Past form is 'bought'.",
            "pt": "'Buy' é um verbo irregular. Sua forma no Passado Simples é 'bought'."
          }
        }
      ]
    },
    "communicate": {
      "id": "BEGINNER-U20-COMMUNICATE",
      "review": [
        {
          "en": "Remember the new vocabulary for life events: graduate, get married, move house, start a job, travel abroad, have a baby, retire, buy a house, change careers, learn a skill.",
          "pt": "Lembre-se do novo vocabulário para eventos da vida: graduate, get married, move house, start a job, travel abroad, have a baby, retire, buy a house, change careers, learn a skill."
        },
        {
          "en": "Review the Simple Past for irregular verbs (affirmative): went, saw, had, bought, etc.",
          "pt": "Revise o Passado Simples para verbos irregulares (afirmativo): went, saw, had, bought, etc."
        },
        {
          "en": "Practice the expressions to accept or refuse: Yes, sure! / No, thank you. / I'd love to, but I can't.",
          "pt": "Pratique as expressões para aceitar ou recusar: Yes, sure! / No, thank you. / I'd love to, but I can't."
        }
      ],
      "activities": [
        {
          "id": "b20c-act-1",
          "title": {
            "en": "Ask and Answer: Past Events",
            "pt": "Pergunte e Responda: Eventos Passados"
          },
          "instruction": {
            "en": "Work with a partner. Ask and answer questions about past life events using the vocabulary and Simple Past.",
            "pt": "Trabalhe com um parceiro. Pergunte e responda perguntas sobre eventos da vida passados usando o vocabulário e o Passado Simples."
          },
          "phrases": [
            {
              "en": "When did you graduate?",
              "pt": "Quando você se formou?"
            },
            {
              "en": "Did you travel abroad last year?",
              "pt": "Você viajou para o exterior no ano passado?"
            },
            {
              "en": "What new skill did you learn recently?",
              "pt": "Que nova habilidade você aprendeu recentemente?"
            }
          ],
          "check": [
            {
              "id": "b20c-ch-1",
              "prompt": {
                "en": "Which question asks about a past event?",
                "pt": "Qual pergunta faz referência a um evento passado?"
              },
              "options": [
                "Do you like to travel?",
                "When did you buy your house?",
                "Are you working now?",
                "What will you do tomorrow?"
              ],
              "answer": "When did you buy your house?",
              "explanation": {
                "en": "'Did you buy' indicates Simple Past.",
                "pt": "'Did you buy' indica Passado Simples."
              }
            },
            {
              "id": "b20c-ch-2",
              "prompt": {
                "en": "Choose the best answer for 'Did you start a new job last month?'",
                "pt": "Escolha a melhor resposta para 'Você começou um emprego novo no mês passado?'"
              },
              "options": [
                "Yes, I do.",
                "Yes, I did.",
                "Yes, I start.",
                "No, I don't."
              ],
              "answer": "Yes, I did.",
              "explanation": {
                "en": "Use 'did' to answer questions in the Simple Past.",
                "pt": "Use 'did' para responder perguntas no Passado Simples."
              }
            }
          ]
        },
        {
          "id": "b20c-act-2",
          "title": {
            "en": "Short Speaking Tasks: Sharing Experiences",
            "pt": "Tarefas Curtas de Fala: Compartilhando Experiências"
          },
          "instruction": {
            "en": "Tell your partner about one important life event from your past using the Simple Past and new vocabulary.",
            "pt": "Conte ao seu parceiro sobre um evento importante da sua vida no passado usando o Passado Simples e o novo vocabulário."
          },
          "phrases": [
            {
              "en": "Last year, I moved house. It was great!",
              "pt": "No ano passado, eu mudei de casa. Foi ótimo!"
            },
            {
              "en": "My cousin got married two years ago.",
              "pt": "Meu primo se casou há dois anos."
            },
            {
              "en": "I started a new job in 2022.",
              "pt": "Eu comecei um trabalho novo em 2022."
            }
          ],
          "check": [
            {
              "id": "b20c-ch-3",
              "prompt": {
                "en": "Which sentence describes a past event?",
                "pt": "Qual frase descreve um evento passado?"
              },
              "options": [
                "I am graduating next year.",
                "I want to travel abroad.",
                "I had a baby in 2021.",
                "I buy a house every year."
              ],
              "answer": "I had a baby in 2021.",
              "explanation": {
                "en": "'Had' is the Simple Past of 'have'.",
                "pt": "'Had' é o Passado Simples de 'have'."
              }
            },
            {
              "id": "b20c-ch-4",
              "prompt": {
                "en": "What is the correct way to say 'Eu viajei para o exterior'?",
                "pt": "Qual a forma correta de dizer 'Eu viajei para o exterior'?"
              },
              "options": [
                "I travel abroad.",
                "I traveled abroad.",
                "I will travel abroad.",
                "I traveling abroad."
              ],
              "answer": "I traveled abroad.",
              "explanation": {
                "en": "'Traveled' is the Simple Past of 'travel'.",
                "pt": "'Traveled' é o Passado Simples de 'travel'."
              }
            }
          ]
        },
        {
          "id": "b20c-act-3",
          "title": {
            "en": "Listening Tasks: Understanding Invitations",
            "pt": "Tarefas de Audição: Compreendendo Convites"
          },
          "instruction": {
            "en": "Listen to a short invitation. Decide if the person accepts or refuses, and why.",
            "pt": "Ouça um convite curto. Decida se a pessoa aceita ou recusa, e por quê."
          },
          "phrases": [
            {
              "en": "A: Do you want to go to the park on Saturday? B: Yes, sure!",
              "pt": "A: Você quer ir ao parque no sábado? B: Sim, claro!"
            },
            {
              "en": "A: Would you like to have dinner tonight? B: I'd love to, but I can't. I have to work.",
              "pt": "A: Você gostaria de jantar hoje à noite? B: Eu adoraria, mas não posso. Tenho que trabalhar."
            },
            {
              "en": "A: How about a coffee tomorrow morning? B: No, thank you. I'm busy.",
              "pt": "A: Que tal um café amanhã de manhã? B: Não, obrigado. Estou ocupado(a)."
            }
          ],
          "check": [
            {
              "id": "b20c-ch-5",
              "prompt": {
                "en": "If someone says 'Yes, sure!', what does it mean?",
                "pt": "Se alguém diz 'Yes, sure!', o que significa?"
              },
              "options": [
                "They refuse.",
                "They accept.",
                "They don't know.",
                "They are angry."
              ],
              "answer": "They accept.",
              "explanation": {
                "en": "'Yes, sure!' is a way to accept an invitation.",
                "pt": "'Yes, sure!' é uma forma de aceitar um convite."
              }
            },
            {
              "id": "b20c-ch-6",
              "prompt": {
                "en": "If someone says 'I'd love to, but I can't.', what are they doing?",
                "pt": "Se alguém diz 'I'd love to, but I can't.', o que ele(a) está fazendo?"
              },
              "options": [
                "Accepting happily.",
                "Refusing politely.",
                "Asking for more information.",
                "Making a new invitation."
              ],
              "answer": "Refusing politely.",
              "explanation": {
                "en": "This expression is for a polite refusal.",
                "pt": "Esta expressão é para uma recusa educada."
              }
            }
          ]
        },
        {
          "id": "b20c-act-4",
          "title": {
            "en": "Real-life Communication Activity: Planning a Party",
            "pt": "Atividade de Comunicação Real: Planejando uma Festa"
          },
          "instruction": {
            "en": "Imagine you are planning a party for a friend who just had a baby. Invite your partner and respond using 'accept refuse' expressions. Talk about what happened to your friend.",
            "pt": "Imagine que você está planejando uma festa para um(a) amigo(a) que acabou de ter um bebê. Convide seu parceiro e responda usando as expressões de aceitar/recusar. Fale sobre o que aconteceu com seu amigo(a)."
          },
          "phrases": [
            {
              "en": "My friend just had a baby. Let's have a party for her! Are you free on Saturday?",
              "pt": "Minha amiga acabou de ter um bebê. Vamos fazer uma festa para ela! Você está livre no sábado?"
            },
            {
              "en": "I'd love to, but I can't. I traveled abroad last month and I'm very busy now.",
              "pt": "Eu adoraria, mas não posso. Eu viajei para o exterior no mês passado e estou muito ocupado(a) agora."
            },
            {
              "en": "Yes, sure! My cousin also just bought a house. We can celebrate both!",
              "pt": "Sim, claro! Meu primo também acabou de comprar uma casa. Podemos celebrar os dois!"
            }
          ],
          "check": [
            {
              "id": "b20c-ch-7",
              "prompt": {
                "en": "If you are free, how can you accept the invitation?",
                "pt": "Se você está livre, como pode aceitar o convite?"
              },
              "options": [
                "No, thank you.",
                "I'd love to, but I can't.",
                "Yes, sure!",
                "I am not free."
              ],
              "answer": "Yes, sure!",
              "explanation": {
                "en": "'Yes, sure!' is a direct acceptance.",
                "pt": "'Yes, sure!' é uma aceitação direta."
              }
            },
            {
              "id": "b20c-ch-8",
              "prompt": {
                "en": "Your friend says, 'My sister got married last week. Do you want to see the photos?' What is a polite refusal?",
                "pt": "Seu amigo diz: 'Minha irmã se casou na semana passada. Você quer ver as fotos?' Qual é uma recusa educada?"
              },
              "options": [
                "No.",
                "I don't like photos.",
                "I'd love to, but I can't. I'm busy now.",
                "Yes, I want."
              ],
              "answer": "I'd love to, but I can't. I'm busy now.",
              "explanation": {
                "en": "This phrase allows you to refuse while showing willingness.",
                "pt": "Esta frase permite recusar enquanto demonstra boa vontade."
              }
            }
          ]
        },
        {
          "id": "b20c-act-5",
          "title": {
            "en": "Make Questions: About Life Events",
            "pt": "Faça Perguntas: Sobre Eventos da Vida"
          },
          "instruction": {
            "en": "Create questions about life events for your partner. Use 'When did...?' or 'Did you...?'",
            "pt": "Crie perguntas sobre eventos da vida para seu parceiro. Use 'When did...?' ou 'Did you...?'"
          },
          "phrases": [
            {
              "en": "When did you learn a new skill?",
              "pt": "Quando você aprendeu uma nova habilidade?"
            },
            {
              "en": "Did your parents buy a house recently?",
              "pt": "Seus pais compraram uma casa recentemente?"
            },
            {
              "en": "When did you graduate?",
              "pt": "Quando você se formou?"
            }
          ],
          "check": [
            {
              "id": "b20c-ch-9",
              "prompt": {
                "en": "Which is a correct question about a past event?",
                "pt": "Qual é uma pergunta correta sobre um evento passado?"
              },
              "options": [
                "You travel abroad?",
                "Did you travel abroad?",
                "You did travel abroad?",
                "Do you traveled abroad?"
              ],
              "answer": "Did you travel abroad?",
              "explanation": {
                "en": "For Simple Past questions, use 'Did' + subject + base verb form.",
                "pt": "Para perguntas no Passado Simples, use 'Did' + sujeito + forma base do verbo."
              }
            },
            {
              "id": "b20c-ch-10",
              "prompt": {
                "en": "Which question uses the correct past form of 'have'?",
                "pt": "Qual pergunta usa a forma passada correta de 'have'?"
              },
              "options": [
                "When you had a baby?",
                "When did you had a baby?",
                "When did you have a baby?",
                "When you have a baby?"
              ],
              "answer": "When did you have a baby?",
              "explanation": {
                "en": "After 'did', use the base form of the verb ('have').",
                "pt": "Após 'did', use a forma base do verbo ('have')."
              }
            }
          ]
        }
      ],
      "challenge": {
        "id": "b20c-challenge-1",
        "title": {
          "en": "Tell Your Story",
          "pt": "Conte Sua História"
        },
        "instruction": {
          "en": "Prepare a short presentation about three important life events that happened to you or someone you know. Use Simple Past irregular verbs and life event vocabulary. Then, present it to a partner or small group. Your partner will ask you one question about your story, and you need to answer.",
          "pt": "Prepare uma breve apresentação sobre três eventos importantes da vida que aconteceram com você ou alguém que você conhece. Use o Passado Simples com verbos irregulares e vocabulário de eventos da vida. Em seguida, apresente para um parceiro ou pequeno grupo. Seu parceiro fará uma pergunta sobre sua história, e você precisa responder."
        },
        "phrases": [
          {
            "en": "In 2020, I graduated from high school. It was a happy day.",
            "pt": "Em 2020, eu me formei no ensino médio. Foi um dia feliz."
          },
          {
            "en": "My aunt had a baby last month. She's a beautiful girl.",
            "pt": "Minha tia teve um bebê no mês passado. É uma linda menina."
          },
          {
            "en": "I moved house two years ago. My new apartment is bigger.",
            "pt": "Eu mudei de casa há dois anos. Meu novo apartamento é maior."
          }
        ],
        "check": [
          {
            "id": "b20c-ch-11",
            "prompt": {
              "en": "Which verb is used correctly in the Simple Past?",
              "pt": "Qual verbo é usado corretamente no Passado Simples?"
            },
            "options": [
              "I beginned a new job.",
              "She made a new friend.",
              "We goed to the cinema.",
              "They sended an email."
            ],
            "answer": "She made a new friend.",
            "explanation": {
              "en": "'Made' is the correct Simple Past of 'make'. 'Beginned', 'goed', 'sended' are incorrect.",
              "pt": "'Made' é o Passado Simples correto de 'make'. 'Beginned', 'goed', 'sended' estão incorretos."
            }
          },
          {
            "id": "b20c-ch-12",
            "prompt": {
              "en": "If you want to invite someone to celebrate your friend who just changed careers, what would you say?",
              "pt": "Se você quer convidar alguém para celebrar seu amigo que acabou de mudar de carreira, o que você diria?"
            },
            "options": [
              "Let's change careers!",
              "Did your friend change careers?",
              "My friend changed careers. Let's have a party! Can you come?",
              "I want to change careers."
            ],
            "answer": "My friend changed careers. Let's have a party! Can you come?",
            "explanation": {
              "en": "This option combines the event with an invitation.",
              "pt": "Esta opção combina o evento com um convite."
            }
          }
        ]
      },
      "lessonReview": {
        "summary": {
          "en": "In this unit, we learned about important life events and practiced using the Simple Past with common irregular verbs in affirmative sentences. We also learned how to accept and refuse invitations and offers.",
          "pt": "Nesta unidade, aprendemos sobre eventos importantes da vida e praticamos o uso do Passado Simples com verbos irregulares comuns em frases afirmativas. Também aprendemos a aceitar e recusar convites e ofertas."
        },
        "canDo": [
          {
            "en": "Talk about past life events using irregular verbs.",
            "pt": "Falar sobre eventos passados da vida usando verbos irregulares."
          },
          {
            "en": "Understand and use vocabulary for life events.",
            "pt": "Compreender e usar vocabulário para eventos da vida."
          },
          {
            "en": "Accept and refuse invitations politely.",
            "pt": "Aceitar e recusar convites educadamente."
          }
        ],
        "next": {
          "en": "Next, we will practice Simple Past negative and questions with irregular verbs.",
          "pt": "Em seguida, praticaremos o Passado Simples negativo e perguntas com verbos irregulares."
        }
      }
    }
  }
];
