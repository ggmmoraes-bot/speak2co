import type { CourseUnit } from "./types";

/** Speak2Co — Beginner English Course (A1). Units 12–16 do currículo oficial. */
export const BEGINNER_UNITS_12_16: CourseUnit[] = [
  {
    code: "BEGINNER-U12",
    number: 12,
    title: "There Is a Place — There is / there are",
    titlePt: "Existe um lugar — There is / there are",
    cefr: "A1",
    objective: {
      en: "Use there is / there are (affirmative and negative) to describe rooms and furniture.",
      pt: "Usar there is / there are (afirmativo e negativo) para descrever cômodos e móveis.",
    },
    communicationGoal: {
      en: "You can describe one room of your home and give a short spoken tour.",
      pt: "Você consegue descrever um cômodo da sua casa e fazer um pequeno tour falado.",
    },
    prerequisites: {
      en: "Unit 11 — checkpoint of blocks A and B (identity and routine).",
      pt: "Unidade 11 — checkpoint dos blocos A e B (identidade e rotina).",
    },
    newContent: {
      en: "Grammar: there is / there are, negative forms. Vocabulary: rooms and furniture. Expressions: There's a...",
      pt: "Gramática: there is / there are, formas negativas. Vocabulário: cômodos e móveis. Expressões: There's a...",
    },
    reviewContent: {
      en: "Review from Units 1–11: to be, plurals and articles.",
      pt: "Revisão das Unidades 1–11: to be, plurais e artigos.",
    },
    discover: {
      id: "BEGINNER-U12-DISCOVER",
      warmUp: {
        prompt: {
          en: "Look at the picture. It shows a tidy living room. What can you find in it?",
          pt: "Observe a imagem. Ela mostra uma sala de estar organizada. O que você encontra nela?",
        },
        phrases: [
          { en: "There is a sofa in the living room.", pt: "Há um sofá na sala de estar." },
          { en: "There are two lamps near the window.", pt: "Há duas luminárias perto da janela." },
          { en: "There isn't a television on the wall.", pt: "Não há uma televisão na parede." },
        ],
      },
      context: {
        situation: {
          en: "Helena is showing her new apartment to Bruno for the first time.",
          pt: "Helena está mostrando seu novo apartamento a Bruno pela primeira vez.",
        },
        dialogue: [
          { who: "Bruno", en: "Wow, Helena, your apartment is nice. What's in this room?", pt: "Uau, Helena, seu apartamento é bonito. O que tem nesse cômodo?" },
          { who: "Helena", en: "This is the living room. There is a sofa, a table and a bookshelf.", pt: "Esta é a sala de estar. Há um sofá, uma mesa e uma estante." },
          { who: "Bruno", en: "Is there a television?", pt: "Tem uma televisão?" },
          { who: "Helena", en: "No, there isn't a television, but there is a nice lamp next to the sofa.", pt: "Não, não tem televisão, mas tem uma luminária bonita perto do sofá." },
          { who: "Bruno", en: "And how many windows are there?", pt: "E quantas janelas tem?" },
          { who: "Helena", en: "There are two windows, and there is a small plant between them.", pt: "Há duas janelas, e há uma plantinha entre elas." },
          { who: "Bruno", en: "It's cozy. Are there chairs in the kitchen too?", pt: "É aconchegante. Tem cadeiras na cozinha também?" },
          { who: "Helena", en: "Yes, there are three chairs and a small table.", pt: "Sim, há três cadeiras e uma mesa pequena." },
        ],
      },
      vocabulary: [
        { term: "living room", pt: "sala de estar", ipa: "/ˈlɪvɪŋ ruːm/", definition: "The room where people relax and talk.", example: "There is a sofa in the living room.", examplePt: "Há um sofá na sala de estar." },
        { term: "bedroom", pt: "quarto", ipa: "/ˈbedruːm/", definition: "The room where you sleep.", example: "There is a bed in the bedroom.", examplePt: "Há uma cama no quarto." },
        { term: "kitchen", pt: "cozinha", ipa: "/ˈkɪtʃɪn/", definition: "The room where you cook.", example: "There are three chairs in the kitchen.", examplePt: "Há três cadeiras na cozinha." },
        { term: "bathroom", pt: "banheiro", ipa: "/ˈbæθruːm/", definition: "The room with a shower and a sink.", example: "There is a mirror in the bathroom.", examplePt: "Há um espelho no banheiro." },
        { term: "sofa", pt: "sofá", ipa: "/ˈsoʊfə/", definition: "A long, soft seat for two or more people.", example: "There is a big sofa near the window.", examplePt: "Há um sofá grande perto da janela." },
        { term: "table", pt: "mesa", ipa: "/ˈteɪbl̩/", definition: "A flat piece of furniture with legs.", example: "There is a table in the kitchen.", examplePt: "Há uma mesa na cozinha." },
        { term: "bookshelf", pt: "estante de livros", ipa: "/ˈbʊkʃelf/", definition: "Furniture where you keep books.", example: "There is a bookshelf in the living room.", examplePt: "Há uma estante de livros na sala." },
        { term: "lamp", pt: "luminária, abajur", ipa: "/læmp/", definition: "An object that gives light.", example: "There is a lamp next to the sofa.", examplePt: "Há uma luminária perto do sofá." },
        { term: "window", pt: "janela", ipa: "/ˈwɪndoʊ/", definition: "An opening in a wall with glass.", example: "There are two windows in this room.", examplePt: "Há duas janelas nesse cômodo." },
        { term: "plant", pt: "planta", ipa: "/plænt/", definition: "A living thing that grows, often kept indoors.", example: "There is a small plant on the table.", examplePt: "Há uma plantinha na mesa." },
      ],
      expressions: [
        { en: "There's a... / There are...", pt: "Há um(a)... / Há...(plural)" },
        { en: "There isn't a... / There aren't any...", pt: "Não há um(a)... / Não há nenhum(a)..." },
        { en: "Is there a...? / Are there any...?", pt: "Tem um(a)...? / Tem algum(a)...?" },
        { en: "How many rooms are there?", pt: "Quantos cômodos tem?" },
        { en: "It's cozy.", pt: "É aconchegante." },
      ],
      grammar: [
        {
          title: { en: "There is / there are — affirmative", pt: "There is / there are — afirmativo" },
          examples: [
            { en: "There is a sofa in the living room.", pt: "Há um sofá na sala." },
            { en: "There are two windows here.", pt: "Há duas janelas aqui." },
            { en: "There's a lamp next to the table.", pt: "Há uma luminária perto da mesa." },
          ],
          rule: {
            en: "Use there is (there's) with singular / uncountable nouns and there are with plural nouns to say something exists.",
            pt: "Use there is (there's) com substantivos singulares / incontáveis e there are com substantivos plurais para dizer que algo existe.",
          },
          mistakes: [
            { en: "There is two windows → There are two windows.", pt: "Substantivo plural pede there are." },
            { en: "There a sofa → There is a sofa.", pt: "Não esqueça o verbo is." },
          ],
        },
        {
          title: { en: "There isn't / there aren't — negative", pt: "There isn't / there aren't — negativo" },
          examples: [
            { en: "There isn't a television in this room.", pt: "Não há uma televisão nesse cômodo." },
            { en: "There aren't any chairs in the bedroom.", pt: "Não há cadeiras no quarto." },
            { en: "Is there a mirror? Yes, there is.", pt: "Tem um espelho? Sim, tem." },
          ],
          rule: {
            en: "Negative: there isn't + singular noun, there aren't any + plural noun. Question: Is there / Are there...? Short answers: Yes, there is / No, there isn't.",
            pt: "Negativo: there isn't + substantivo singular, there aren't any + substantivo plural. Pergunta: Is there / Are there...? Resposta curta: Yes, there is / No, there isn't.",
          },
          mistakes: [
            { en: "There not a television → There isn't a television.", pt: "Use isn't, não apenas not." },
            { en: "There isn't chairs → There aren't any chairs.", pt: "Plural negativo usa aren't any." },
          ],
        },
      ],
      controlledPractice: [
        {
          id: "b12d-cp1",
          prompt: { en: "Complete: ___ a sofa in the living room.", pt: "Complete: ___ a sofa in the living room." },
          options: ["There is", "There are", "There am"],
          answer: "There is",
          explanation: { en: "Singular noun 'sofa' → there is.", pt: "Substantivo singular 'sofa' → there is." },
        },
        {
          id: "b12d-cp2",
          prompt: { en: "Complete: ___ two windows in this room.", pt: "Complete: ___ two windows in this room." },
          options: ["There is", "There are", "There's"],
          answer: "There are",
          explanation: { en: "Plural noun 'windows' → there are.", pt: "Substantivo plural 'windows' → there are." },
        },
        {
          id: "b12d-cp3",
          prompt: { en: "Choose the negative form: ___ a television here.", pt: "Escolha a forma negativa: ___ a television here." },
          options: ["There isn't", "There aren't", "There not"],
          answer: "There isn't",
          explanation: { en: "Singular negative → there isn't.", pt: "Negativo singular → there isn't." },
        },
        {
          id: "b12d-cp4",
          prompt: { en: "Choose the question: ___ any chairs in the kitchen?", pt: "Escolha a pergunta: ___ any chairs in the kitchen?" },
          options: ["Is there", "Are there", "Do there"],
          answer: "Are there",
          explanation: { en: "Plural question → Are there...?", pt: "Pergunta no plural → Are there...?" },
        },
        {
          id: "b12d-cp5",
          prompt: { en: "Which word names a room?", pt: "Qual palavra nomeia um cômodo?" },
          options: ["bookshelf", "bedroom", "lamp"],
          answer: "bedroom",
          explanation: { en: "bedroom is a room; bookshelf and lamp are furniture/objects.", pt: "bedroom é um cômodo; bookshelf e lamp são móveis/objetos." },
        },
        {
          id: "b12d-cp6",
          prompt: { en: "Complete the short answer: Is there a mirror? Yes, ___.", pt: "Complete a resposta curta: Is there a mirror? Yes, ___." },
          options: ["there is", "it is", "there are"],
          answer: "there is",
          explanation: { en: "Short answer keeps the same subject: there is.", pt: "Resposta curta mantém o mesmo sujeito: there is." },
        },
      ],
      input: {
        kind: "listening",
        title: { en: "Listening — A house tour", pt: "Listening — Um tour pela casa" },
        lines: [
          { en: "This is a small but cozy apartment.", pt: "Este é um apartamento pequeno mas aconchegante." },
          { en: "There is a living room with a sofa and a bookshelf.", pt: "Há uma sala de estar com sofá e estante." },
          { en: "There are two bedrooms and one bathroom.", pt: "Há dois quartos e um banheiro." },
          { en: "There isn't a big kitchen, but there is a nice table for two.", pt: "Não há uma cozinha grande, mas há uma mesa boa para duas pessoas." },
          { en: "There are three windows with plants near them.", pt: "Há três janelas com plantas perto delas." },
        ],
        questions: [
          {
            id: "b12d-r1",
            prompt: { en: "How many bedrooms are there?", pt: "Quantos quartos tem?" },
            options: ["one", "two", "three"],
            answer: "two",
            explanation: { en: "There are two bedrooms.", pt: "There are two bedrooms." },
          },
          {
            id: "b12d-r2",
            prompt: { en: "Is the kitchen big?", pt: "A cozinha é grande?" },
            options: ["Yes, it is.", "No, it isn't.", "There isn't a kitchen."],
            answer: "No, it isn't.",
            explanation: { en: "There isn't a big kitchen.", pt: "There isn't a big kitchen." },
          },
          {
            id: "b12d-r3",
            prompt: { en: "What is near the windows?", pt: "O que fica perto das janelas?" },
            options: ["lamps", "plants", "chairs"],
            answer: "plants",
            explanation: { en: "There are plants near the windows.", pt: "There are plants near the windows." },
          },
        ],
      },
      quickCheck: [
        {
          id: "b12d-qc1",
          prompt: { en: "Complete: ___ a bathroom in this apartment.", pt: "Complete: ___ a bathroom in this apartment." },
          options: ["There is", "There are", "There isn't"],
          answer: "There is",
          explanation: { en: "Singular affirmative.", pt: "Afirmativo singular." },
        },
        {
          id: "b12d-qc2",
          prompt: { en: "Complete: ___ three chairs in the kitchen.", pt: "Complete: ___ three chairs in the kitchen." },
          options: ["There is", "There are", "There isn't"],
          answer: "There are",
          explanation: { en: "Plural affirmative.", pt: "Afirmativo plural." },
        },
        {
          id: "b12d-qc3",
          prompt: { en: "Ask about a television politely:", pt: "Pergunte sobre uma televisão educadamente:" },
          options: ["Is there a television?", "There television?", "Have television?"],
          answer: "Is there a television?",
          explanation: { en: "Questions start with Is there / Are there.", pt: "Perguntas começam com Is there / Are there." },
        },
        {
          id: "b12d-qc4",
          prompt: { en: "Choose the room where you sleep:", pt: "Escolha o cômodo onde você dorme:" },
          options: ["bedroom", "kitchen", "living room"],
          answer: "bedroom",
          explanation: { en: "bedroom = quarto.", pt: "bedroom = quarto." },
        },
      ],
    },
    communicate: {
      id: "BEGINNER-U12-COMMUNICATE",
      review: [
        { en: "There is / there are for things that exist, singular and plural.", pt: "There is / there are para coisas que existem, singular e plural." },
        { en: "Negative: there isn't / there aren't any.", pt: "Negativo: there isn't / there aren't any." },
        { en: "Questions: Is there...? / Are there...?", pt: "Perguntas: Is there...? / Are there...?" },
      ],
      activities: [
        {
          id: "b12c-a1",
          title: { en: "Describe your home", pt: "Descreva sua casa" },
          instruction: {
            en: "Say what rooms your home has and one piece of furniture in each.",
            pt: "Diga que cômodos sua casa tem e um móvel em cada um.",
          },
          phrases: [
            { en: "There is a living room and two bedrooms in my house.", pt: "Há uma sala e dois quartos na minha casa." },
            { en: "There is a big table in the kitchen.", pt: "Há uma mesa grande na cozinha." },
          ],
          check: [
            {
              id: "b12c-a1q1",
              prompt: { en: "Complete: There ___ a table in the kitchen.", pt: "Complete: There ___ a table in the kitchen." },
              options: ["is", "are", "am"],
              answer: "is",
              explanation: { en: "Singular noun → is.", pt: "Substantivo singular → is." },
            },
          ],
        },
        {
          id: "b12c-a2",
          title: { en: "Welcome a visitor", pt: "Receba uma visita" },
          instruction: {
            en: "Invite someone in and show them your living room, saying two things there are and one thing there isn't.",
            pt: "Convide alguém para entrar e mostre a sala, dizendo duas coisas que há e uma que não há.",
          },
          phrases: [
            { en: "Come in! This is the living room.", pt: "Entre! Esta é a sala de estar." },
            { en: "There is a sofa and a bookshelf, but there isn't a television.", pt: "Há um sofá e uma estante, mas não há televisão." },
          ],
          check: [
            {
              id: "b12c-a2q1",
              prompt: { en: "Complete: There ___ a television here.", pt: "Complete: There ___ a television here." },
              options: ["isn't", "aren't", "not"],
              answer: "isn't",
              explanation: { en: "Singular negative → isn't.", pt: "Negativo singular → isn't." },
            },
          ],
        },
        {
          id: "b12c-a3",
          title: { en: "Ask about a place", pt: "Pergunte sobre um lugar" },
          instruction: {
            en: "Ask a partner three questions with Is there / Are there about their home.",
            pt: "Pergunte a um colega três perguntas com Is there / Are there sobre a casa dele.",
          },
          phrases: [
            { en: "Is there a garden in your house?", pt: "Tem um jardim na sua casa?" },
            { en: "Are there any plants in your living room?", pt: "Tem alguma planta na sua sala?" },
          ],
          check: [
            {
              id: "b12c-a3q1",
              prompt: { en: "Complete: ___ any plants in your kitchen?", pt: "Complete: ___ any plants in your kitchen?" },
              options: ["Is there", "Are there", "There are"],
              answer: "Are there",
              explanation: { en: "Plural question → Are there.", pt: "Pergunta plural → Are there." },
            },
          ],
        },
      ],
      challenge: {
        id: "b12c-challenge",
        title: { en: "Communication Challenge — House tour", pt: "Desafio de comunicação — Tour pela casa" },
        instruction: {
          en: "Give a short spoken tour of your home. Describe each room, say what there is and isn't, and answer one question about it.",
          pt: "Faça um pequeno tour falado pela sua casa. Descreva cada cômodo, diga o que há e o que não há, e responda a uma pergunta sobre ela.",
        },
        phrases: [
          { en: "Welcome! This is my apartment.", pt: "Bem-vindo! Este é o meu apartamento." },
          { en: "There is a living room, a kitchen and one bedroom.", pt: "Há uma sala, uma cozinha e um quarto." },
          { en: "There isn't a bathtub, but there is a nice shower.", pt: "Não há banheira, mas há um chuveiro bom." },
          { en: "Is there anything you'd like to see?", pt: "Tem algo que você gostaria de ver?" },
        ],
        check: [
          {
            id: "b12c-ch1",
            prompt: { en: "Which sentence is correct?", pt: "Qual frase está correta?" },
            options: ["There is two bedrooms.", "There are two bedrooms.", "There bedrooms are two."],
            answer: "There are two bedrooms.",
            explanation: { en: "Plural noun → there are.", pt: "Substantivo plural → there are." },
          },
          {
            id: "b12c-ch2",
            prompt: { en: "Which is a polite question about a place?", pt: "Qual é uma pergunta educada sobre um lugar?" },
            options: ["Is there a garden?", "There garden is?", "Garden is there?"],
            answer: "Is there a garden?",
            explanation: { en: "Is there + singular noun forms the question.", pt: "Is there + substantivo singular forma a pergunta." },
          },
        ],
      },
      lessonReview: {
        summary: {
          en: "You described a place using there is / there are and gave a short house tour.",
          pt: "Você descreveu um lugar usando there is / there are e fez um pequeno tour pela casa.",
        },
        canDo: [
          { en: "I can say there is / there are with singular and plural nouns.", pt: "Consigo usar there is / there are com substantivos singulares e plurais." },
          { en: "I can ask and answer Is there / Are there questions.", pt: "Consigo perguntar e responder com Is there / Are there." },
          { en: "I can describe a room and give a short tour.", pt: "Consigo descrever um cômodo e fazer um pequeno tour." },
        ],
        next: {
          en: "Next: locate objects and give directions with prepositions of place.",
          pt: "Próximo: localizar objetos e dar direções com preposições de lugar.",
        },
      },
    },
  },
  {
    code: "BEGINNER-U13",
    number: 13,
    title: "Where Exactly? — Prepositions of place",
    titlePt: "Onde exatamente? — Preposições de lugar",
    cefr: "A1",
    objective: {
      en: "Use prepositions of place (in, on, under, next to) and the imperative to locate objects and give directions.",
      pt: "Usar preposições de lugar (in, on, under, next to) e o imperativo para localizar objetos e dar direções.",
    },
    communicationGoal: {
      en: "You can locate eight items and guide someone through a short route.",
      pt: "Você consegue localizar oito itens e guiar alguém por um trajeto curto.",
    },
    prerequisites: {
      en: "Unit 12 — there is / there are to describe places.",
      pt: "Unidade 12 — there is / there are para descrever lugares.",
    },
    newContent: {
      en: "Grammar: in / on / under / next to, imperative forms. Vocabulary: places in the city. Expressions: Go straight, turn left.",
      pt: "Gramática: in / on / under / next to, formas do imperativo. Vocabulário: lugares na cidade. Expressões: Go straight, turn left.",
    },
    reviewContent: {
      en: "Review from Unit 12: there is / there are with rooms and furniture.",
      pt: "Revisão da Unidade 12: there is / there are com cômodos e móveis.",
    },
    discover: {
      id: "BEGINNER-U13-DISCOVER",
      warmUp: {
        prompt: {
          en: "Look at the picture. A person is checking a map on a city street. What places can you see nearby?",
          pt: "Observe a imagem. Uma pessoa está olhando um mapa em uma rua da cidade. Que lugares você vê por perto?",
        },
        phrases: [
          { en: "The bank is next to the bakery.", pt: "O banco fica perto da padaria." },
          { en: "The keys are on the table.", pt: "As chaves estão em cima da mesa." },
          { en: "Turn left at the corner.", pt: "Vire à esquerda na esquina." },
        ],
      },
      context: {
        situation: {
          en: "Ivan is lost in a new neighborhood and asks Helena for directions.",
          pt: "Ivan está perdido em um bairro novo e pede informações a Helena.",
        },
        dialogue: [
          { who: "Ivan", en: "Excuse me, where is the pharmacy?", pt: "Com licença, onde fica a farmácia?" },
          { who: "Helena", en: "It's easy. Go straight and turn right at the corner.", pt: "É fácil. Siga em frente e vire à direita na esquina." },
          { who: "Ivan", en: "Turn right, okay. Is it next to the bank?", pt: "Virar à direita, certo. Fica perto do banco?" },
          { who: "Helena", en: "Yes, it's next to the bank and in front of the park.", pt: "Sim, fica perto do banco e em frente ao parque." },
          { who: "Ivan", en: "And is there a bus stop near there?", pt: "E tem um ponto de ônibus perto dali?" },
          { who: "Helena", en: "Yes, the bus stop is between the pharmacy and the supermarket.", pt: "Sim, o ponto de ônibus fica entre a farmácia e o supermercado." },
          { who: "Ivan", en: "Great, thank you very much!", pt: "Ótimo, muito obrigado!" },
          { who: "Helena", en: "You're welcome. Don't turn left, or you'll get lost again!", pt: "De nada. Não vire à esquerda, ou você vai se perder de novo!" },
        ],
      },
      vocabulary: [
        { term: "bank", pt: "banco", ipa: "/bæŋk/", definition: "A place where you keep and manage money.", example: "The bank is next to the bakery.", examplePt: "O banco fica perto da padaria." },
        { term: "pharmacy", pt: "farmácia", ipa: "/ˈfɑːrməsi/", definition: "A shop that sells medicine.", example: "The pharmacy is in front of the park.", examplePt: "A farmácia fica em frente ao parque." },
        { term: "supermarket", pt: "supermercado", ipa: "/ˈsuːpərmɑːrkɪt/", definition: "A large shop that sells food.", example: "The supermarket is on the corner.", examplePt: "O supermercado fica na esquina." },
        { term: "bus stop", pt: "ponto de ônibus", ipa: "/bʌs stɑːp/", definition: "A place where you wait for a bus.", example: "The bus stop is between two shops.", examplePt: "O ponto de ônibus fica entre duas lojas." },
        { term: "corner", pt: "esquina", ipa: "/ˈkɔːrnər/", definition: "Where two streets meet.", example: "Turn right at the corner.", examplePt: "Vire à direita na esquina." },
        { term: "park", pt: "parque", ipa: "/pɑːrk/", definition: "A green public space with trees.", example: "The park is next to the pharmacy.", examplePt: "O parque fica perto da farmácia." },
        { term: "bakery", pt: "padaria", ipa: "/ˈbeɪkəri/", definition: "A shop that sells bread.", example: "The bakery is on the left.", examplePt: "A padaria fica à esquerda." },
        { term: "street", pt: "rua", ipa: "/striːt/", definition: "A road in a town or city.", example: "This street has three shops.", examplePt: "Esta rua tem três lojas." },
        { term: "map", pt: "mapa", ipa: "/mæp/", definition: "A drawing that shows a place.", example: "Look at the map, please.", examplePt: "Olhe o mapa, por favor." },
        { term: "corner store", pt: "mercadinho de esquina", ipa: "/ˈkɔːrnər stɔːr/", definition: "A small shop near your house.", example: "There's a corner store next to my building.", examplePt: "Tem um mercadinho perto do meu prédio." },
      ],
      expressions: [
        { en: "It's next to...", pt: "Fica perto de... / ao lado de..." },
        { en: "Go straight.", pt: "Siga em frente." },
        { en: "Turn left / turn right.", pt: "Vire à esquerda / vire à direita." },
        { en: "It's between... and...", pt: "Fica entre... e..." },
        { en: "It's in front of...", pt: "Fica em frente a..." },
        { en: "Excuse me, where is...?", pt: "Com licença, onde fica...?" },
      ],
      grammar: [
        {
          title: { en: "Prepositions of place", pt: "Preposições de lugar" },
          examples: [
            { en: "The keys are on the table.", pt: "As chaves estão em cima da mesa." },
            { en: "The cat is under the chair.", pt: "O gato está embaixo da cadeira." },
            { en: "The bank is next to the bakery.", pt: "O banco fica perto da padaria." },
          ],
          rule: {
            en: "Use in for enclosed spaces, on for surfaces, under for below, and next to / between / in front of for relative position.",
            pt: "Use in para espaços fechados, on para superfícies, under para embaixo, e next to / between / in front of para posição relativa.",
          },
          mistakes: [
            { en: "The bank is next the bakery → The bank is next to the bakery.", pt: "next to precisa do to." },
            { en: "The pen is in the table → The pen is on the table.", pt: "Superfície usa on, não in." },
          ],
        },
        {
          title: { en: "Imperative for directions", pt: "Imperativo para direções" },
          examples: [
            { en: "Go straight and turn left.", pt: "Siga em frente e vire à esquerda." },
            { en: "Don't turn right here.", pt: "Não vire à direita aqui." },
            { en: "Cross the street and stop at the corner.", pt: "Atravesse a rua e pare na esquina." },
          ],
          rule: {
            en: "The imperative uses the base verb without a subject. For the negative, add Don't before the verb.",
            pt: "O imperativo usa o verbo na forma base sem sujeito. No negativo, acrescente Don't antes do verbo.",
          },
          mistakes: [
            { en: "You go straight → Go straight.", pt: "Imperativo não usa sujeito." },
            { en: "Not turn left → Don't turn left.", pt: "Negativo do imperativo é Don't + verbo." },
          ],
        },
      ],
      controlledPractice: [
        {
          id: "b13d-cp1",
          prompt: { en: "The keys are ___ the table.", pt: "The keys are ___ the table." },
          options: ["in", "on", "under"],
          answer: "on",
          explanation: { en: "Surface → on.", pt: "Superfície → on." },
        },
        {
          id: "b13d-cp2",
          prompt: { en: "The bank is ___ the bakery.", pt: "The bank is ___ the bakery." },
          options: ["next to", "under", "in"],
          answer: "next to",
          explanation: { en: "Relative position → next to.", pt: "Posição relativa → next to." },
        },
        {
          id: "b13d-cp3",
          prompt: { en: "Give a direction: ___ straight.", pt: "Dê uma direção: ___ straight." },
          options: ["Go", "Goes", "Going"],
          answer: "Go",
          explanation: { en: "Imperative uses the base verb.", pt: "Imperativo usa o verbo na forma base." },
        },
        {
          id: "b13d-cp4",
          prompt: { en: "Negative imperative: ___ turn left here.", pt: "Imperativo negativo: ___ turn left here." },
          options: ["Not", "Don't", "No"],
          answer: "Don't",
          explanation: { en: "Negative imperative uses Don't + verb.", pt: "Imperativo negativo usa Don't + verbo." },
        },
        {
          id: "b13d-cp5",
          prompt: { en: "The bus stop is ___ the pharmacy and the supermarket.", pt: "The bus stop is ___ the pharmacy and the supermarket." },
          options: ["between", "under", "on"],
          answer: "between",
          explanation: { en: "Two references → between.", pt: "Duas referências → between." },
        },
        {
          id: "b13d-cp6",
          prompt: { en: "The cat is ___ the chair.", pt: "The cat is ___ the chair." },
          options: ["on", "under", "next"],
          answer: "under",
          explanation: { en: "Below the object → under.", pt: "Embaixo do objeto → under." },
        },
      ],
      input: {
        kind: "listening",
        title: { en: "Listening — Directions in the neighborhood", pt: "Listening — Direções no bairro" },
        lines: [
          { en: "The supermarket is on the corner of this street.", pt: "O supermercado fica na esquina desta rua." },
          { en: "Go straight and the pharmacy is next to the park.", pt: "Siga em frente e a farmácia fica perto do parque." },
          { en: "The bus stop is in front of the bank.", pt: "O ponto de ônibus fica em frente ao banco." },
          { en: "Don't turn right, or you will miss the bakery.", pt: "Não vire à direita, ou você vai perder a padaria." },
        ],
        questions: [
          {
            id: "b13d-r1",
            prompt: { en: "Where is the supermarket?", pt: "Onde fica o supermercado?" },
            options: ["on the corner", "next to the park", "in front of the bank"],
            answer: "on the corner",
            explanation: { en: "The supermarket is on the corner.", pt: "The supermarket is on the corner." },
          },
          {
            id: "b13d-r2",
            prompt: { en: "The pharmacy is next to the...", pt: "A farmácia fica perto de qual lugar?" },
            options: ["bank", "park", "bakery"],
            answer: "park",
            explanation: { en: "The pharmacy is next to the park.", pt: "The pharmacy is next to the park." },
          },
          {
            id: "b13d-r3",
            prompt: { en: "What should you NOT do?", pt: "O que você NÃO deve fazer?" },
            options: ["go straight", "turn right", "turn left"],
            answer: "turn right",
            explanation: { en: "Don't turn right, or you will miss the bakery.", pt: "Don't turn right, or you will miss the bakery." },
          },
        ],
      },
      quickCheck: [
        {
          id: "b13d-qc1",
          prompt: { en: "The book is ___ the bag.", pt: "The book is ___ the bag." },
          options: ["in", "on", "next to"],
          answer: "in",
          explanation: { en: "Enclosed space → in.", pt: "Espaço fechado → in." },
        },
        {
          id: "b13d-qc2",
          prompt: { en: "Complete: ___ left at the corner.", pt: "Complete: ___ left at the corner." },
          options: ["Turn", "Turns", "Turning"],
          answer: "Turn",
          explanation: { en: "Imperative → base verb.", pt: "Imperativo → verbo base." },
        },
        {
          id: "b13d-qc3",
          prompt: { en: "Ask politely for directions:", pt: "Peça informações educadamente:" },
          options: ["Excuse me, where is the bank?", "Bank where is?", "You tell bank."],
          answer: "Excuse me, where is the bank?",
          explanation: { en: "Polite request pattern.", pt: "Padrão de pedido educado." },
        },
        {
          id: "b13d-qc4",
          prompt: { en: "The park is ___ the pharmacy and the bank.", pt: "The park is ___ the pharmacy and the bank." },
          options: ["between", "on", "under"],
          answer: "between",
          explanation: { en: "Two points of reference → between.", pt: "Dois pontos de referência → between." },
        },
      ],
    },
    communicate: {
      id: "BEGINNER-U13-COMMUNICATE",
      review: [
        { en: "Prepositions of place: in, on, under, next to, between, in front of.", pt: "Preposições de lugar: in, on, under, next to, between, in front of." },
        { en: "Imperative for directions: Go straight, turn left / right, don't...", pt: "Imperativo para direções: Go straight, turn left / right, don't..." },
        { en: "Asking politely: Excuse me, where is...?", pt: "Perguntando educadamente: Excuse me, where is...?" },
      ],
      activities: [
        {
          id: "b13c-a1",
          title: { en: "Locate objects around you", pt: "Localize objetos ao seu redor" },
          instruction: {
            en: "Look around and describe the position of four objects using prepositions of place.",
            pt: "Olhe ao redor e descreva a posição de quatro objetos usando preposições de lugar.",
          },
          phrases: [
            { en: "My phone is on the table, next to my notebook.", pt: "Meu celular está na mesa, perto do meu caderno." },
            { en: "My bag is under the chair.", pt: "Minha mochila está embaixo da cadeira." },
          ],
          check: [
            {
              id: "b13c-a1q1",
              prompt: { en: "Complete: My keys are ___ the bag.", pt: "Complete: My keys are ___ the bag." },
              options: ["in", "on", "under"],
              answer: "in",
              explanation: { en: "Inside a bag → in.", pt: "Dentro de uma bolsa → in." },
            },
          ],
        },
        {
          id: "b13c-a2",
          title: { en: "Guide a route", pt: "Guie um trajeto" },
          instruction: {
            en: "Give directions from your home to a nearby place using the imperative.",
            pt: "Dê direções da sua casa até um lugar próximo usando o imperativo.",
          },
          phrases: [
            { en: "Go straight, then turn left at the corner.", pt: "Siga em frente, depois vire à esquerda na esquina." },
            { en: "Don't cross the street; the shop is on this side.", pt: "Não atravesse a rua; a loja fica deste lado." },
          ],
          check: [
            {
              id: "b13c-a2q1",
              prompt: { en: "Complete: ___ cross the street here.", pt: "Complete: ___ cross the street here." },
              options: ["Don't", "Not", "No"],
              answer: "Don't",
              explanation: { en: "Negative imperative → Don't + verb.", pt: "Imperativo negativo → Don't + verbo." },
            },
          ],
        },
        {
          id: "b13c-a3",
          title: { en: "Ask for a place", pt: "Pergunte por um lugar" },
          instruction: {
            en: "Ask a partner where three places are and listen to their directions.",
            pt: "Pergunte a um colega onde ficam três lugares e ouça as direções dele.",
          },
          phrases: [
            { en: "Excuse me, where is the nearest pharmacy?", pt: "Com licença, onde fica a farmácia mais próxima?" },
            { en: "Is it next to the bank or in front of the park?", pt: "Fica perto do banco ou em frente ao parque?" },
          ],
          check: [
            {
              id: "b13c-a3q1",
              prompt: { en: "Complete: Excuse me, ___ is the bank?", pt: "Complete: Excuse me, ___ is the bank?" },
              options: ["where", "what", "who"],
              answer: "where",
              explanation: { en: "Asking about location → where.", pt: "Perguntar sobre localização → where." },
            },
          ],
        },
      ],
      challenge: {
        id: "b13c-challenge",
        title: { en: "Communication Challenge — Guide a stranger", pt: "Desafio de comunicação — Oriente um estranho" },
        instruction: {
          en: "A stranger asks you for directions to a place. Explain the route step by step with the imperative and prepositions of place.",
          pt: "Um estranho pede a você informações para chegar a um lugar. Explique o trajeto passo a passo com o imperativo e preposições de lugar.",
        },
        phrases: [
          { en: "Excuse me, where is the supermarket?", pt: "Com licença, onde fica o supermercado?" },
          { en: "Go straight for two blocks and turn right.", pt: "Siga em frente por dois quarteirões e vire à direita." },
          { en: "It's next to the bakery, in front of the park.", pt: "Fica perto da padaria, em frente ao parque." },
          { en: "Don't turn left, or you will get lost.", pt: "Não vire à esquerda, ou você vai se perder." },
        ],
        check: [
          {
            id: "b13c-ch1",
            prompt: { en: "Which sentence gives a correct direction?", pt: "Qual frase dá uma direção correta?" },
            options: ["You turn left please.", "Turn left, please.", "Turning left please."],
            answer: "Turn left, please.",
            explanation: { en: "Imperative + please is the polite direction form.", pt: "Imperativo + please é a forma educada de dar direções." },
          },
          {
            id: "b13c-ch2",
            prompt: { en: "Which preposition fits: The park is ___ the bank and the school.", pt: "Qual preposição cabe: The park is ___ the bank and the school." },
            options: ["between", "on", "under"],
            answer: "between",
            explanation: { en: "Two references → between.", pt: "Duas referências → between." },
          },
        ],
      },
      lessonReview: {
        summary: {
          en: "You located objects and guided someone through a short route using prepositions and the imperative.",
          pt: "Você localizou objetos e guiou alguém por um trajeto curto usando preposições e o imperativo.",
        },
        canDo: [
          { en: "I can use in, on, under and next to correctly.", pt: "Consigo usar in, on, under e next to corretamente." },
          { en: "I can give simple directions with the imperative.", pt: "Consigo dar direções simples com o imperativo." },
          { en: "I can ask politely where a place is.", pt: "Consigo perguntar educadamente onde fica um lugar." },
        ],
        next: {
          en: "Next: talk about abilities with can and can't.",
          pt: "Próximo: falar sobre habilidades com can e can't.",
        },
      },
    },
  },
  {
    code: "BEGINNER-U14",
    number: 14,
    title: "I Can, I Can't — Abilities",
    titlePt: "Eu consigo, eu não consigo — Habilidades",
    cefr: "A1",
    objective: {
      en: "Use can / can't to talk about abilities and use can to ask for and offer help.",
      pt: "Usar can / can't para falar de habilidades e usar can para pedir e oferecer ajuda.",
    },
    communicationGoal: {
      en: "You can say what you can and can't do and ask someone for help politely.",
      pt: "Você consegue dizer o que sabe e não sabe fazer e pedir ajuda a alguém educadamente.",
    },
    prerequisites: {
      en: "Unit 13 — prepositions of place and the imperative.",
      pt: "Unidade 13 — preposições de lugar e o imperativo.",
    },
    newContent: {
      en: "Grammar: can / can't + base verb, can for requests. Vocabulary: abilities. Expressions: Can you help me?",
      pt: "Gramática: can / can't + verbo base, can para pedidos. Vocabulário: habilidades. Expressões: Can you help me?",
    },
    reviewContent: {
      en: "Review from Unit 13: prepositions of place used in real situations.",
      pt: "Revisão da Unidade 13: preposições de lugar usadas em situações reais.",
    },
    discover: {
      id: "BEGINNER-U14-DISCOVER",
      warmUp: {
        prompt: {
          en: "Look at the picture. People are practicing different skills. What can you do well?",
          pt: "Observe a imagem. As pessoas estão praticando habilidades diferentes. O que você sabe fazer bem?",
        },
        phrases: [
          { en: "I can swim very well.", pt: "Eu sei nadar muito bem." },
          { en: "I can't play the guitar.", pt: "Eu não sei tocar violão." },
          { en: "Can you help me with this box?", pt: "Você pode me ajudar com essa caixa?" },
        ],
      },
      context: {
        situation: {
          en: "Bruno is moving to a new apartment and asks Ivan for help.",
          pt: "Bruno está se mudando para um apartamento novo e pede ajuda a Ivan.",
        },
        dialogue: [
          { who: "Bruno", en: "Ivan, can you help me with these boxes?", pt: "Ivan, você pode me ajudar com essas caixas?" },
          { who: "Ivan", en: "Sure! I can carry the big boxes, but I can't lift the sofa alone.", pt: "Claro! Eu consigo carregar as caixas grandes, mas não consigo levantar o sofá sozinho." },
          { who: "Bruno", en: "No problem, my brother can help with the sofa. Can you drive a truck?", pt: "Sem problema, meu irmão pode ajudar com o sofá. Você sabe dirigir um caminhão?" },
          { who: "Ivan", en: "Yes, I can! I can also fix the shelves quickly.", pt: "Sim, eu sei! Eu também sei consertar as prateleiras rápido." },
          { who: "Bruno", en: "Great, that's very useful. I can't fix anything at all!", pt: "Ótimo, isso é muito útil. Eu não consigo consertar nada!" },
          { who: "Ivan", en: "Don't worry, we can do this together.", pt: "Não se preocupe, a gente consegue fazer isso juntos." },
        ],
      },
      vocabulary: [
        { term: "swim", pt: "nadar", ipa: "/swɪm/", definition: "To move through water using your body.", example: "I can swim in the sea.", examplePt: "Eu sei nadar no mar." },
        { term: "drive", pt: "dirigir", ipa: "/draɪv/", definition: "To control a car or truck.", example: "He can drive a truck.", examplePt: "Ele sabe dirigir um caminhão." },
        { term: "cook", pt: "cozinhar", ipa: "/kʊk/", definition: "To prepare food.", example: "She can cook Italian food.", examplePt: "Ela sabe cozinhar comida italiana." },
        { term: "fix", pt: "consertar", ipa: "/fɪks/", definition: "To repair something.", example: "Ivan can fix the shelves.", examplePt: "Ivan sabe consertar as prateleiras." },
        { term: "carry", pt: "carregar", ipa: "/ˈkæri/", definition: "To hold and move something.", example: "I can carry the small boxes.", examplePt: "Eu consigo carregar as caixas pequenas." },
        { term: "lift", pt: "levantar", ipa: "/lɪft/", definition: "To raise something up.", example: "He can't lift the sofa alone.", examplePt: "Ele não consegue levantar o sofá sozinho." },
        { term: "play an instrument", pt: "tocar um instrumento", ipa: "/pleɪ ən ˈɪnstrəmənt/", definition: "To make music with an instrument.", example: "I can't play the guitar.", examplePt: "Eu não sei tocar violão." },
        { term: "ride a bike", pt: "andar de bicicleta", ipa: "/raɪd ə baɪk/", definition: "To use a bicycle.", example: "My daughter can ride a bike.", examplePt: "Minha filha sabe andar de bicicleta." },
        { term: "speak a language", pt: "falar um idioma", ipa: "/spiːk ə ˈlæŋɡwɪdʒ/", definition: "To communicate in a language.", example: "She can speak two languages.", examplePt: "Ela sabe falar dois idiomas." },
        { term: "paint", pt: "pintar", ipa: "/peɪnt/", definition: "To make a picture or cover a wall with color.", example: "He can paint really well.", examplePt: "Ele sabe pintar muito bem." },
      ],
      expressions: [
        { en: "Can you help me?", pt: "Você pode me ajudar?" },
        { en: "I can... / I can't...", pt: "Eu consigo... / Eu não consigo..." },
        { en: "Sure, no problem.", pt: "Claro, sem problema." },
        { en: "We can do this together.", pt: "A gente consegue fazer isso juntos." },
        { en: "Don't worry.", pt: "Não se preocupe." },
      ],
      grammar: [
        {
          title: { en: "Can / can't for abilities", pt: "Can / can't para habilidades" },
          examples: [
            { en: "I can swim very well.", pt: "Eu sei nadar muito bem." },
            { en: "She can speak two languages.", pt: "Ela sabe falar dois idiomas." },
            { en: "He can't fix anything.", pt: "Ele não sabe consertar nada." },
          ],
          rule: {
            en: "Can / can't + base verb, the same for all subjects (I, you, he, she, we, they). No -s in third person.",
            pt: "Can / can't + verbo base, igual para todos os sujeitos (I, you, he, she, we, they). Sem -s na terceira pessoa.",
          },
          mistakes: [
            { en: "She cans swim → She can swim.", pt: "Can nunca leva -s." },
            { en: "I can to swim → I can swim.", pt: "Depois de can, sem to." },
          ],
        },
        {
          title: { en: "Can for requests and offers", pt: "Can para pedidos e ofertas" },
          examples: [
            { en: "Can you help me with these boxes?", pt: "Você pode me ajudar com essas caixas?" },
            { en: "Can I carry that for you?", pt: "Posso carregar isso para você?" },
            { en: "Yes, I can. / Sorry, I can't.", pt: "Sim, posso. / Desculpe, não posso." },
          ],
          rule: {
            en: "Can you...? asks someone for help politely. Can I...? offers help or asks permission. Short answers use I can / I can't.",
            pt: "Can you...? pede ajuda educadamente. Can I...? oferece ajuda ou pede permissão. Respostas curtas usam I can / I can't.",
          },
          mistakes: [
            { en: "You can help me? → Can you help me?", pt: "A pergunta começa com can." },
            { en: "Can you to help me? → Can you help me?", pt: "Sem to depois de can." },
          ],
        },
      ],
      controlledPractice: [
        {
          id: "b14d-cp1",
          prompt: { en: "Complete: She ___ speak two languages.", pt: "Complete: She ___ speak two languages." },
          options: ["cans", "can", "canning"],
          answer: "can",
          explanation: { en: "Can never takes -s.", pt: "Can nunca leva -s." },
        },
        {
          id: "b14d-cp2",
          prompt: { en: "Complete: I ___ lift the sofa alone.", pt: "Complete: I ___ lift the sofa alone." },
          options: ["can't", "not can", "don't can"],
          answer: "can't",
          explanation: { en: "Negative of can is can't.", pt: "Negativo de can é can't." },
        },
        {
          id: "b14d-cp3",
          prompt: { en: "Ask for help politely:", pt: "Peça ajuda educadamente:" },
          options: ["You help me?", "Can you help me?", "Help me can you?"],
          answer: "Can you help me?",
          explanation: { en: "Can you...? is the polite request pattern.", pt: "Can you...? é o padrão de pedido educado." },
        },
        {
          id: "b14d-cp4",
          prompt: { en: "Complete: Can I ___ that for you?", pt: "Complete: Can I ___ that for you?" },
          options: ["carrying", "carry", "carries"],
          answer: "carry",
          explanation: { en: "After can, use the base verb.", pt: "Depois de can, use o verbo base." },
        },
        {
          id: "b14d-cp5",
          prompt: { en: "Short answer: Can you drive? Sorry, ___.", pt: "Resposta curta: Can you drive? Sorry, ___." },
          options: ["I can't", "I don't", "I amn't"],
          answer: "I can't",
          explanation: { en: "Short negative answer with can't.", pt: "Resposta curta negativa com can't." },
        },
        {
          id: "b14d-cp6",
          prompt: { en: "Which sentence describes an ability?", pt: "Qual frase descreve uma habilidade?" },
          options: ["He is a doctor.", "He can fix shelves.", "He has a car."],
          answer: "He can fix shelves.",
          explanation: { en: "Can + verb = ability.", pt: "Can + verbo = habilidade." },
        },
      ],
      input: {
        kind: "listening",
        title: { en: "Listening — Moving day", pt: "Listening — Dia da mudança" },
        lines: [
          { en: "My brother can carry heavy boxes easily.", pt: "Meu irmão consegue carregar caixas pesadas facilmente." },
          { en: "I can't drive a truck, but I can organize the kitchen.", pt: "Eu não sei dirigir um caminhão, mas sei organizar a cozinha." },
          { en: "Can you help me fix this shelf, please?", pt: "Você pode me ajudar a consertar essa prateleira, por favor?" },
          { en: "Sure, I can. It's not difficult.", pt: "Claro que posso. Não é difícil." },
        ],
        questions: [
          {
            id: "b14d-r1",
            prompt: { en: "What can the brother do?", pt: "O que o irmão sabe fazer?" },
            options: ["fix shelves", "carry heavy boxes", "drive a truck"],
            answer: "carry heavy boxes",
            explanation: { en: "My brother can carry heavy boxes easily.", pt: "My brother can carry heavy boxes easily." },
          },
          {
            id: "b14d-r2",
            prompt: { en: "What can't the speaker do?", pt: "O que a pessoa não sabe fazer?" },
            options: ["organize the kitchen", "drive a truck", "fix the shelf"],
            answer: "drive a truck",
            explanation: { en: "I can't drive a truck.", pt: "I can't drive a truck." },
          },
          {
            id: "b14d-r3",
            prompt: { en: "What does the speaker ask for?", pt: "O que a pessoa pede?" },
            options: ["help fixing a shelf", "a ride", "a box"],
            answer: "help fixing a shelf",
            explanation: { en: "Can you help me fix this shelf, please?", pt: "Can you help me fix this shelf, please?" },
          },
        ],
      },
      quickCheck: [
        {
          id: "b14d-qc1",
          prompt: { en: "Complete: They ___ swim very well.", pt: "Complete: They ___ swim very well." },
          options: ["can", "cans", "canning"],
          answer: "can",
          explanation: { en: "Can is the same for all subjects.", pt: "Can é igual para todos os sujeitos." },
        },
        {
          id: "b14d-qc2",
          prompt: { en: "Offer help: ___ I help you?", pt: "Ofereça ajuda: ___ I help you?" },
          options: ["Can", "Do", "Am"],
          answer: "Can",
          explanation: { en: "Can I...? offers help.", pt: "Can I...? oferece ajuda." },
        },
        {
          id: "b14d-qc3",
          prompt: { en: "Negative: He ___ paint.", pt: "Negativo: He ___ paint." },
          options: ["can't", "isn't", "doesn't can"],
          answer: "can't",
          explanation: { en: "can't = cannot.", pt: "can't = cannot." },
        },
        {
          id: "b14d-qc4",
          prompt: { en: "Which is an ability, not an object?", pt: "Qual é uma habilidade, não um objeto?" },
          options: ["a bike", "ride a bike", "the bike"],
          answer: "ride a bike",
          explanation: { en: "ride a bike is an activity/ability.", pt: "ride a bike é uma atividade/habilidade." },
        },
      ],
    },
    communicate: {
      id: "BEGINNER-U14-COMMUNICATE",
      review: [
        { en: "Can / can't + base verb for abilities, same form for all subjects.", pt: "Can / can't + verbo base para habilidades, mesma forma para todos os sujeitos." },
        { en: "Can you...? to ask for help; Can I...? to offer help.", pt: "Can you...? para pedir ajuda; Can I...? para oferecer ajuda." },
        { en: "Short answers: I can / I can't.", pt: "Respostas curtas: I can / I can't." },
      ],
      activities: [
        {
          id: "b14c-a1",
          title: { en: "Say your abilities", pt: "Diga suas habilidades" },
          instruction: {
            en: "Say three things you can do and one thing you can't do.",
            pt: "Diga três coisas que você sabe fazer e uma que você não sabe fazer.",
          },
          phrases: [
            { en: "I can cook, and I can ride a bike.", pt: "Eu sei cozinhar, e sei andar de bicicleta." },
            { en: "I can't play the guitar.", pt: "Eu não sei tocar violão." },
          ],
          check: [
            {
              id: "b14c-a1q1",
              prompt: { en: "Complete: I ___ speak French.", pt: "Complete: I ___ speak French." },
              options: ["can't", "not can", "amn't"],
              answer: "can't",
              explanation: { en: "Negative form is can't.", pt: "Forma negativa é can't." },
            },
          ],
        },
        {
          id: "b14c-a2",
          title: { en: "Ask for help", pt: "Peça ajuda" },
          instruction: {
            en: "Ask a partner for help with three different tasks.",
            pt: "Peça ajuda a um colega com três tarefas diferentes.",
          },
          phrases: [
            { en: "Can you help me with this box?", pt: "Você pode me ajudar com essa caixa?" },
            { en: "Can you fix this shelf, please?", pt: "Você pode consertar essa prateleira, por favor?" },
          ],
          check: [
            {
              id: "b14c-a2q1",
              prompt: { en: "Complete: ___ you help me, please?", pt: "Complete: ___ you help me, please?" },
              options: ["Can", "Do", "Are"],
              answer: "Can",
              explanation: { en: "Can you...? is a polite request.", pt: "Can you...? é um pedido educado." },
            },
          ],
        },
        {
          id: "b14c-a3",
          title: { en: "Offer your help", pt: "Ofereça sua ajuda" },
          instruction: {
            en: "Offer to help someone with two things, using Can I...?",
            pt: "Ofereça ajuda a alguém com duas coisas, usando Can I...?",
          },
          phrases: [
            { en: "Can I carry that bag for you?", pt: "Posso carregar essa bolsa para você?" },
            { en: "Can I help you cook dinner?", pt: "Posso ajudar você a cozinhar o jantar?" },
          ],
          check: [
            {
              id: "b14c-a3q1",
              prompt: { en: "Complete: Can I ___ you?", pt: "Complete: Can I ___ you?" },
              options: ["help", "helps", "helping"],
              answer: "help",
              explanation: { en: "After can, use the base verb.", pt: "Depois de can, use o verbo base." },
            },
          ],
        },
      ],
      challenge: {
        id: "b14c-challenge",
        title: { en: "Communication Challenge — Solving a problem", pt: "Desafio de comunicação — Resolvendo um problema" },
        instruction: {
          en: "You need help moving furniture. Ask a friend for help, say what you can and can't do, and thank them.",
          pt: "Você precisa de ajuda para mover móveis. Peça ajuda a um amigo, diga o que você sabe e não sabe fazer, e agradeça.",
        },
        phrases: [
          { en: "Can you help me move this table?", pt: "Você pode me ajudar a mover essa mesa?" },
          { en: "I can carry small things, but I can't lift heavy furniture.", pt: "Eu consigo carregar coisas pequenas, mas não consigo levantar móveis pesados." },
          { en: "Sure, I can help you with that.", pt: "Claro, posso te ajudar com isso." },
          { en: "Thank you so much for your help.", pt: "Muito obrigado pela sua ajuda." },
        ],
        check: [
          {
            id: "b14c-ch1",
            prompt: { en: "Which sentence correctly asks for help?", pt: "Qual frase pede ajuda corretamente?" },
            options: ["You can help me?", "Can you help me?", "Help you me can?"],
            answer: "Can you help me?",
            explanation: { en: "Can you...? is the correct request form.", pt: "Can you...? é a forma correta de pedido." },
          },
          {
            id: "b14c-ch2",
            prompt: { en: "Complete: She ___ lift heavy things.", pt: "Complete: She ___ lift heavy things." },
            options: ["can't", "not can", "doesn't can"],
            answer: "can't",
            explanation: { en: "can't = negative of can.", pt: "can't = negativo de can." },
          },
        ],
      },
      lessonReview: {
        summary: {
          en: "You talked about abilities and asked for and offered help using can / can't.",
          pt: "Você falou sobre habilidades e pediu e ofereceu ajuda usando can / can't.",
        },
        canDo: [
          { en: "I can say what I can and can't do.", pt: "Consigo dizer o que sei e não sei fazer." },
          { en: "I can ask for help with Can you...?", pt: "Consigo pedir ajuda com Can you...?" },
          { en: "I can offer help with Can I...?", pt: "Consigo oferecer ajuda com Can I...?" },
        ],
        next: {
          en: "Next: talk about food using countable and uncountable nouns.",
          pt: "Próximo: falar de comida usando substantivos contáveis e incontáveis.",
        },
      },
    },
  },
  {
    code: "BEGINNER-U15",
    number: 15,
    title: "Food on the Table — Countable and uncountable nouns",
    titlePt: "Comida na mesa — Substantivos contáveis e incontáveis",
    cefr: "A1",
    objective: {
      en: "Distinguish countable and uncountable nouns and use some / any correctly.",
      pt: "Distinguir substantivos contáveis e incontáveis e usar some / any corretamente.",
    },
    communicationGoal: {
      en: "You can talk about food and place a complete order in a restaurant.",
      pt: "Você consegue falar de comida e fazer um pedido completo em um restaurante.",
    },
    prerequisites: {
      en: "Unit 14 — can / can't for abilities and requests.",
      pt: "Unidade 14 — can / can't para habilidades e pedidos.",
    },
    newContent: {
      en: "Grammar: some / any with countable and uncountable nouns, would like. Vocabulary: food. Expressions: I'd like..., please.",
      pt: "Gramática: some / any com substantivos contáveis e incontáveis, would like. Vocabulário: comida. Expressões: I'd like..., please.",
    },
    reviewContent: {
      en: "Review from Unit 14: can for polite requests.",
      pt: "Revisão da Unidade 14: can para pedidos educados.",
    },
    discover: {
      id: "BEGINNER-U15-DISCOVER",
      warmUp: {
        prompt: {
          en: "Look at the picture. It's a breakfast table. What food and drinks can you name?",
          pt: "Observe a imagem. É uma mesa de café da manhã. Que comidas e bebidas você consegue nomear?",
        },
        phrases: [
          { en: "There is some bread on the table.", pt: "Há um pouco de pão na mesa." },
          { en: "There are some eggs in the bowl.", pt: "Há alguns ovos na tigela." },
          { en: "Is there any juice?", pt: "Tem suco?" },
        ],
      },
      context: {
        situation: {
          en: "Helena is having breakfast at home and asks Ivan to pass some food.",
          pt: "Helena está tomando café da manhã em casa e pede a Ivan para passar comida.",
        },
        dialogue: [
          { who: "Helena", en: "Ivan, is there any bread left?", pt: "Ivan, ainda tem pão?" },
          { who: "Ivan", en: "Yes, there's some bread here, and there are some eggs too.", pt: "Sim, tem um pouco de pão aqui, e também tem alguns ovos." },
          { who: "Helena", en: "Great. Can you pass me some butter, please?", pt: "Ótimo. Você pode me passar um pouco de manteiga, por favor?" },
          { who: "Ivan", en: "Sure. Do we have any juice?", pt: "Claro. A gente tem suco?" },
          { who: "Helena", en: "No, there isn't any juice, but there is some coffee.", pt: "Não, não tem suco, mas tem um pouco de café." },
          { who: "Ivan", en: "Perfect, I'd like some coffee and a little sugar.", pt: "Perfeito, eu quero um pouco de café e um pouquinho de açúcar." },
        ],
      },
      vocabulary: [
        { term: "bread", pt: "pão", ipa: "/bred/", definition: "Food made from flour, uncountable.", example: "There's some bread on the table.", examplePt: "Tem um pouco de pão na mesa." },
        { term: "egg", pt: "ovo", ipa: "/eɡ/", definition: "A countable food item from a chicken.", example: "There are some eggs in the bowl.", examplePt: "Há alguns ovos na tigela." },
        { term: "juice", pt: "suco", ipa: "/dʒuːs/", definition: "A drink made from fruit, uncountable.", example: "There isn't any juice today.", examplePt: "Hoje não tem suco." },
        { term: "coffee", pt: "café", ipa: "/ˈkɒfi/", definition: "A hot drink, uncountable.", example: "I'd like some coffee, please.", examplePt: "Eu quero um pouco de café, por favor." },
        { term: "sugar", pt: "açúcar", ipa: "/ˈʃʊɡər/", definition: "A sweet substance, uncountable.", example: "I need a little sugar.", examplePt: "Eu preciso de um pouquinho de açúcar." },
        { term: "butter", pt: "manteiga", ipa: "/ˈbʌtər/", definition: "A fat food made from milk, uncountable.", example: "Can you pass me some butter?", examplePt: "Você pode me passar um pouco de manteiga?" },
        { term: "fruit", pt: "fruta", ipa: "/fruːt/", definition: "Sweet food from plants, usually uncountable.", example: "There is some fruit in the bowl.", examplePt: "Há um pouco de fruta na tigela." },
        { term: "cheese", pt: "queijo", ipa: "/tʃiːz/", definition: "A food made from milk, uncountable.", example: "There isn't any cheese left.", examplePt: "Não sobrou queijo." },
        { term: "water", pt: "água", ipa: "/ˈwɔːtər/", definition: "A basic drink, uncountable.", example: "Can I have some water, please?", examplePt: "Posso ter um pouco de água, por favor?" },
        { term: "apple", pt: "maçã", ipa: "/ˈæpl̩/", definition: "A round, countable fruit.", example: "There are three apples here.", examplePt: "Há três maçãs aqui." },
      ],
      expressions: [
        { en: "There's some... / There isn't any...", pt: "Tem um pouco de... / Não tem nenhum(a)..." },
        { en: "Is there any...?", pt: "Tem algum(a)...?" },
        { en: "Can you pass me some...?", pt: "Você pode me passar um pouco de...?" },
        { en: "I'd like some..., please.", pt: "Eu gostaria de um pouco de..., por favor." },
      ],
      grammar: [
        {
          title: { en: "Countable and uncountable nouns", pt: "Substantivos contáveis e incontáveis" },
          examples: [
            { en: "There are three eggs. (countable)", pt: "Há três ovos. (contável)" },
            { en: "There is some bread. (uncountable)", pt: "Há um pouco de pão. (incontável)" },
            { en: "I'd like an apple, please. (countable, singular)", pt: "Eu quero uma maçã, por favor. (contável, singular)" },
          ],
          rule: {
            en: "Countable nouns can be counted (one egg, two eggs) and use a / an in the singular. Uncountable nouns (bread, water, sugar) have no plural and don't use a / an.",
            pt: "Substantivos contáveis podem ser contados (one egg, two eggs) e usam a / an no singular. Substantivos incontáveis (bread, water, sugar) não têm plural e não usam a / an.",
          },
          mistakes: [
            { en: "a bread → some bread", pt: "bread é incontável, não use a." },
            { en: "two breads → some bread", pt: "bread não tem plural." },
          ],
        },
        {
          title: { en: "Some / any", pt: "Some / any" },
          examples: [
            { en: "There's some coffee in the kitchen.", pt: "Tem um pouco de café na cozinha." },
            { en: "There isn't any juice today.", pt: "Hoje não tem suco." },
            { en: "Is there any cheese left?", pt: "Ainda tem queijo?" },
          ],
          rule: {
            en: "Use some in affirmative sentences and any in negative sentences and questions, with both countable and uncountable nouns.",
            pt: "Use some em frases afirmativas e any em frases negativas e perguntas, com substantivos contáveis e incontáveis.",
          },
          mistakes: [
            { en: "There is any bread → There is some bread.", pt: "Frases afirmativas usam some." },
            { en: "Is there some juice? → Is there any juice?", pt: "Perguntas normalmente usam any." },
          ],
        },
      ],
      controlledPractice: [
        {
          id: "b15d-cp1",
          prompt: { en: "Complete: There is ___ bread on the table.", pt: "Complete: There is ___ bread on the table." },
          options: ["some", "any", "a"],
          answer: "some",
          explanation: { en: "Affirmative → some.", pt: "Afirmativo → some." },
        },
        {
          id: "b15d-cp2",
          prompt: { en: "Complete: Is there ___ juice?", pt: "Complete: Is there ___ juice?" },
          options: ["some", "any", "a"],
          answer: "any",
          explanation: { en: "Question → any.", pt: "Pergunta → any." },
        },
        {
          id: "b15d-cp3",
          prompt: { en: "Which is countable?", pt: "Qual é contável?" },
          options: ["bread", "egg", "sugar"],
          answer: "egg",
          explanation: { en: "egg → eggs (has plural).", pt: "egg → eggs (tem plural)." },
        },
        {
          id: "b15d-cp4",
          prompt: { en: "Complete: There isn't ___ cheese left.", pt: "Complete: There isn't ___ cheese left." },
          options: ["some", "any", "a"],
          answer: "any",
          explanation: { en: "Negative → any.", pt: "Negativo → any." },
        },
        {
          id: "b15d-cp5",
          prompt: { en: "Choose the correct sentence:", pt: "Escolha a frase correta:" },
          options: ["I'd like a water.", "I'd like some water.", "I'd like waters."],
          answer: "I'd like some water.",
          explanation: { en: "water is uncountable → some water.", pt: "water é incontável → some water." },
        },
        {
          id: "b15d-cp6",
          prompt: { en: "Complete: There are three ___ in the bowl.", pt: "Complete: There are three ___ in the bowl." },
          options: ["apple", "apples", "any apple"],
          answer: "apples",
          explanation: { en: "Countable noun with a number takes the plural.", pt: "Substantivo contável com número vai para o plural." },
        },
      ],
      input: {
        kind: "listening",
        title: { en: "Listening — Breakfast at home", pt: "Listening — Café da manhã em casa" },
        lines: [
          { en: "There is some bread and some butter on the table.", pt: "Tem pão e manteiga na mesa." },
          { en: "There are two eggs and some fruit too.", pt: "Tem dois ovos e também um pouco de fruta." },
          { en: "There isn't any juice, but there is some coffee.", pt: "Não tem suco, mas tem café." },
          { en: "Can you pass me some sugar, please?", pt: "Você pode me passar um pouco de açúcar, por favor?" },
        ],
        questions: [
          {
            id: "b15d-r1",
            prompt: { en: "How many eggs are there?", pt: "Quantos ovos tem?" },
            options: ["one", "two", "three"],
            answer: "two",
            explanation: { en: "There are two eggs.", pt: "There are two eggs." },
          },
          {
            id: "b15d-r2",
            prompt: { en: "Is there any juice?", pt: "Tem suco?" },
            options: ["Yes, there is.", "No, there isn't.", "There is some juice."],
            answer: "No, there isn't.",
            explanation: { en: "There isn't any juice.", pt: "There isn't any juice." },
          },
          {
            id: "b15d-r3",
            prompt: { en: "What does the speaker ask for?", pt: "O que a pessoa pede?" },
            options: ["some sugar", "some bread", "some fruit"],
            answer: "some sugar",
            explanation: { en: "Can you pass me some sugar, please?", pt: "Can you pass me some sugar, please?" },
          },
        ],
      },
      quickCheck: [
        {
          id: "b15d-qc1",
          prompt: { en: "Which noun is uncountable?", pt: "Qual substantivo é incontável?" },
          options: ["apple", "water", "egg"],
          answer: "water",
          explanation: { en: "water has no plural.", pt: "water não tem plural." },
        },
        {
          id: "b15d-qc2",
          prompt: { en: "Complete: I'd like ___ coffee, please.", pt: "Complete: I'd like ___ coffee, please." },
          options: ["a", "an", "some"],
          answer: "some",
          explanation: { en: "coffee is uncountable → some.", pt: "coffee é incontável → some." },
        },
        {
          id: "b15d-qc3",
          prompt: { en: "Complete: There aren't ___ apples today.", pt: "Complete: There aren't ___ apples today." },
          options: ["some", "any", "a"],
          answer: "any",
          explanation: { en: "Negative → any.", pt: "Negativo → any." },
        },
        {
          id: "b15d-qc4",
          prompt: { en: "Polite request for food:", pt: "Pedido educado de comida:" },
          options: ["Give me bread.", "Can you pass me some bread, please?", "Bread now."],
          answer: "Can you pass me some bread, please?",
          explanation: { en: "Polite request pattern with can and please.", pt: "Padrão de pedido educado com can e please." },
        },
      ],
    },
    communicate: {
      id: "BEGINNER-U15-COMMUNICATE",
      review: [
        { en: "Countable nouns have a plural; uncountable nouns don't.", pt: "Substantivos contáveis têm plural; incontáveis não têm." },
        { en: "Some in affirmative sentences, any in negative and questions.", pt: "Some em frases afirmativas, any em negativas e perguntas." },
        { en: "I'd like... for polite requests and orders.", pt: "I'd like... para pedidos educados." },
      ],
      activities: [
        {
          id: "b15c-a1",
          title: { en: "Classify food", pt: "Classifique alimentos" },
          instruction: {
            en: "Say four foods and classify each one as countable or uncountable.",
            pt: "Diga quatro alimentos e classifique cada um como contável ou incontável.",
          },
          phrases: [
            { en: "Apples are countable, but rice is uncountable.", pt: "Maçãs são contáveis, mas arroz é incontável." },
            { en: "There are some apples and some rice on the table.", pt: "Há maçãs e arroz na mesa." },
          ],
          check: [
            {
              id: "b15c-a1q1",
              prompt: { en: "Which is uncountable?", pt: "Qual é incontável?" },
              options: ["apple", "rice", "egg"],
              answer: "rice",
              explanation: { en: "rice has no plural.", pt: "rice não tem plural." },
            },
          ],
        },
        {
          id: "b15c-a2",
          title: { en: "Ask what there is", pt: "Pergunte o que tem" },
          instruction: {
            en: "Ask if there is any of three items in the kitchen.",
            pt: "Pergunte se tem algum(a) de três itens na cozinha.",
          },
          phrases: [
            { en: "Is there any milk in the fridge?", pt: "Tem leite na geladeira?" },
            { en: "Is there any fruit left?", pt: "Ainda tem fruta?" },
          ],
          check: [
            {
              id: "b15c-a2q1",
              prompt: { en: "Complete: Is there ___ milk?", pt: "Complete: Is there ___ milk?" },
              options: ["some", "any", "a"],
              answer: "any",
              explanation: { en: "Question → any.", pt: "Pergunta → any." },
            },
          ],
        },
        {
          id: "b15c-a3",
          title: { en: "Order at a restaurant", pt: "Peça em um restaurante" },
          instruction: {
            en: "Order two dishes and one drink politely with I'd like.",
            pt: "Peça dois pratos e uma bebida educadamente com I'd like.",
          },
          phrases: [
            { en: "I'd like some rice and some chicken, please.", pt: "Eu quero um pouco de arroz e frango, por favor." },
            { en: "I'd like some water too, please.", pt: "Eu quero um pouco de água também, por favor." },
          ],
          check: [
            {
              id: "b15c-a3q1",
              prompt: { en: "Complete: I'd like ___ water, please.", pt: "Complete: I'd like ___ water, please." },
              options: ["some", "any", "a"],
              answer: "some",
              explanation: { en: "Affirmative order → some.", pt: "Pedido afirmativo → some." },
            },
          ],
        },
      ],
      challenge: {
        id: "b15c-challenge",
        title: { en: "Communication Challenge — At the restaurant", pt: "Desafio de comunicação — No restaurante" },
        instruction: {
          en: "Order a full meal in a restaurant: a starter, a main dish and a drink, using I'd like and some / any.",
          pt: "Faça um pedido completo em um restaurante: entrada, prato principal e bebida, usando I'd like e some / any.",
        },
        phrases: [
          { en: "I'd like some soup to start, please.", pt: "Eu quero uma sopa para começar, por favor." },
          { en: "For the main course, I'd like some chicken and rice.", pt: "Como prato principal, eu quero frango com arroz." },
          { en: "Is there any fresh juice today?", pt: "Tem suco natural hoje?" },
          { en: "I'd like some water too, please.", pt: "Eu quero um pouco de água também, por favor." },
        ],
        check: [
          {
            id: "b15c-ch1",
            prompt: { en: "Which sentence is a correct order?", pt: "Qual frase é um pedido correto?" },
            options: ["I'd like a rice.", "I'd like some rice.", "I'd like rices."],
            answer: "I'd like some rice.",
            explanation: { en: "rice is uncountable → some rice.", pt: "rice é incontável → some rice." },
          },
          {
            id: "b15c-ch2",
            prompt: { en: "Complete: Is there ___ soup today?", pt: "Complete: Is there ___ soup today?" },
            options: ["some", "any", "a"],
            answer: "any",
            explanation: { en: "Question → any.", pt: "Pergunta → any." },
          },
        ],
      },
      lessonReview: {
        summary: {
          en: "You talked about food and made a full order in a restaurant using some / any and I'd like.",
          pt: "Você falou sobre comida e fez um pedido completo em um restaurante usando some / any e I'd like.",
        },
        canDo: [
          { en: "I can tell countable and uncountable nouns apart.", pt: "Consigo diferenciar substantivos contáveis e incontáveis." },
          { en: "I can use some and any correctly.", pt: "Consigo usar some e any corretamente." },
          { en: "I can order food politely with I'd like.", pt: "Consigo pedir comida educadamente com I'd like." },
        ],
        next: {
          en: "Next: ask about quantity and price with how much and how many.",
          pt: "Próximo: perguntar quantidade e preço com how much e how many.",
        },
      },
    },
  },
  {
    code: "BEGINNER-U16",
    number: 16,
    title: "How Much, How Many — Quantifiers and prices",
    titlePt: "Quanto, quantos — Quantificadores e preços",
    cefr: "A1",
    objective: {
      en: "Use how much and how many to ask about quantity and price and negotiate a small purchase.",
      pt: "Usar how much e how many para perguntar quantidade e preço e negociar uma pequena compra.",
    },
    communicationGoal: {
      en: "You can ask prices and quantities and complete a purchase at a small shop.",
      pt: "Você consegue perguntar preços e quantidades e fechar uma compra em uma pequena loja.",
    },
    prerequisites: {
      en: "Unit 15 — countable and uncountable nouns with some / any.",
      pt: "Unidade 15 — substantivos contáveis e incontáveis com some / any.",
    },
    newContent: {
      en: "Grammar: How much / how many, quantifiers a lot of, a little, a few. Vocabulary: money and measures. Expressions: How much is it?",
      pt: "Gramática: How much / how many, quantificadores a lot of, a little, a few. Vocabulário: dinheiro e medidas. Expressões: How much is it?",
    },
    reviewContent: {
      en: "Review from Unit 15: countable and uncountable nouns.",
      pt: "Revisão da Unidade 15: substantivos contáveis e incontáveis.",
    },
    discover: {
      id: "BEGINNER-U16-DISCOVER",
      warmUp: {
        prompt: {
          en: "Look at the picture. It's a small street market. What would you like to buy, and how much do you think it costs?",
          pt: "Observe a imagem. É uma pequena feira de rua. O que você gostaria de comprar, e quanto acha que custa?",
        },
        phrases: [
          { en: "How much are the tomatoes?", pt: "Quanto custam os tomates?" },
          { en: "How many apples do you want?", pt: "Quantas maçãs você quer?" },
          { en: "That's a lot of money!", pt: "Isso é muito dinheiro!" },
        ],
      },
      context: {
        situation: {
          en: "Bruno is buying fruit and vegetables at a street market.",
          pt: "Bruno está comprando frutas e verduras em uma feira de rua.",
        },
        dialogue: [
          { who: "Bruno", en: "Good morning! How much are these tomatoes?", pt: "Bom dia! Quanto custam esses tomates?" },
          { who: "Vendor", en: "They are five reais a kilo. How many kilos would you like?", pt: "São cinco reais o quilo. Quantos quilos você quer?" },
          { who: "Bruno", en: "I'd like two kilos, please. And how much is the cheese?", pt: "Eu quero dois quilos, por favor. E quanto custa o queijo?" },
          { who: "Vendor", en: "It's twenty reais a piece. It's not cheap, but it's very good.", pt: "É vinte reais a peça. Não é barato, mas é muito bom." },
          { who: "Bruno", en: "That's a bit expensive for me today. I'll take just a little cheese.", pt: "Está um pouco caro pra mim hoje. Vou levar só um pouquinho de queijo." },
          { who: "Vendor", en: "No problem. Here you are: two kilos of tomatoes and a little cheese.", pt: "Sem problema. Aqui está: dois quilos de tomate e um pouquinho de queijo." },
        ],
      },
      vocabulary: [
        { term: "price", pt: "preço", ipa: "/praɪs/", definition: "How much something costs.", example: "What's the price of the cheese?", examplePt: "Qual é o preço do queijo?" },
        { term: "money", pt: "dinheiro", ipa: "/ˈmʌni/", definition: "What you use to buy things.", example: "I don't have much money today.", examplePt: "Eu não tenho muito dinheiro hoje." },
        { term: "kilo", pt: "quilo", ipa: "/ˈkiːloʊ/", definition: "A unit of weight.", example: "Two kilos of tomatoes, please.", examplePt: "Dois quilos de tomate, por favor." },
        { term: "cheap", pt: "barato", ipa: "/tʃiːp/", definition: "Low in price.", example: "The tomatoes are cheap today.", examplePt: "Os tomates estão baratos hoje." },
        { term: "expensive", pt: "caro", ipa: "/ɪkˈspensɪv/", definition: "High in price.", example: "The cheese is a bit expensive.", examplePt: "O queijo está um pouco caro." },
        { term: "market", pt: "feira, mercado", ipa: "/ˈmɑːrkɪt/", definition: "A place where people sell food and goods.", example: "There's a market near my house.", examplePt: "Tem uma feira perto da minha casa." },
        { term: "a lot of", pt: "muito(s), muita(s)", ipa: "/ə lɒt əv/", definition: "A large quantity.", example: "There is a lot of fruit here.", examplePt: "Tem muita fruta aqui." },
        { term: "a little", pt: "um pouco de", ipa: "/ə ˈlɪtl̩/", definition: "A small amount of an uncountable noun.", example: "I'll take a little cheese.", examplePt: "Vou levar um pouquinho de queijo." },
        { term: "a few", pt: "alguns, poucos", ipa: "/ə fjuː/", definition: "A small number of a countable noun.", example: "I need a few tomatoes.", examplePt: "Preciso de alguns tomates." },
        { term: "vendor", pt: "vendedor, vendedora", ipa: "/ˈvendər/", definition: "A person who sells things.", example: "The vendor is very friendly.", examplePt: "O vendedor é muito simpático." },
      ],
      expressions: [
        { en: "How much is it? / How much are they?", pt: "Quanto custa? / Quanto custam?" },
        { en: "How many... would you like?", pt: "Quantos(as)... você quer?" },
        { en: "That's too expensive.", pt: "Está muito caro." },
        { en: "I'll take...", pt: "Eu vou levar..." },
        { en: "Here you are.", pt: "Aqui está." },
      ],
      grammar: [
        {
          title: { en: "How much / how many", pt: "How much / how many" },
          examples: [
            { en: "How much is the cheese?", pt: "Quanto custa o queijo?" },
            { en: "How many kilos would you like?", pt: "Quantos quilos você quer?" },
            { en: "How much money do you have?", pt: "Quanto dinheiro você tem?" },
          ],
          rule: {
            en: "Use how much with uncountable nouns and prices, and how many with countable plural nouns.",
            pt: "Use how much com substantivos incontáveis e preços, e how many com substantivos contáveis no plural.",
          },
          mistakes: [
            { en: "How many is it? → How much is it?", pt: "Preço usa how much." },
            { en: "How much tomatoes? → How many tomatoes?", pt: "Substantivo contável no plural usa how many." },
          ],
        },
        {
          title: { en: "A lot of, a little, a few", pt: "A lot of, a little, a few" },
          examples: [
            { en: "There is a lot of fruit at the market.", pt: "Tem muita fruta na feira." },
            { en: "I'll take a little cheese.", pt: "Vou levar um pouquinho de queijo." },
            { en: "I need a few tomatoes.", pt: "Preciso de alguns tomates." },
          ],
          rule: {
            en: "A lot of works with both countable and uncountable nouns. A little goes with uncountable nouns; a few goes with countable plural nouns.",
            pt: "A lot of funciona com contáveis e incontáveis. A little acompanha incontáveis; a few acompanha contáveis no plural.",
          },
          mistakes: [
            { en: "a few cheese → a little cheese", pt: "cheese é incontável, use a little." },
            { en: "a little tomatoes → a few tomatoes", pt: "tomatoes é contável no plural, use a few." },
          ],
        },
      ],
      controlledPractice: [
        {
          id: "b16d-cp1",
          prompt: { en: "Complete: ___ is the cheese?", pt: "Complete: ___ is the cheese?" },
          options: ["How much", "How many", "How"],
          answer: "How much",
          explanation: { en: "Price → How much.", pt: "Preço → How much." },
        },
        {
          id: "b16d-cp2",
          prompt: { en: "Complete: ___ kilos would you like?", pt: "Complete: ___ kilos would you like?" },
          options: ["How much", "How many", "How"],
          answer: "How many",
          explanation: { en: "Countable plural → How many.", pt: "Contável plural → How many." },
        },
        {
          id: "b16d-cp3",
          prompt: { en: "Complete: I'll take ___ cheese.", pt: "Complete: I'll take ___ cheese." },
          options: ["a few", "a little", "many"],
          answer: "a little",
          explanation: { en: "cheese is uncountable → a little.", pt: "cheese é incontável → a little." },
        },
        {
          id: "b16d-cp4",
          prompt: { en: "Complete: I need ___ tomatoes.", pt: "Complete: I need ___ tomatoes." },
          options: ["a little", "a few", "much"],
          answer: "a few",
          explanation: { en: "tomatoes is countable plural → a few.", pt: "tomatoes é contável plural → a few." },
        },
        {
          id: "b16d-cp5",
          prompt: { en: "Complete: There is ___ fruit at the market.", pt: "Complete: There is ___ fruit at the market." },
          options: ["a lot of", "a many", "how much"],
          answer: "a lot of",
          explanation: { en: "a lot of works with uncountable nouns.", pt: "a lot of funciona com substantivos incontáveis." },
        },
        {
          id: "b16d-cp6",
          prompt: { en: "Which sentence is about price?", pt: "Qual frase é sobre preço?" },
          options: ["How many apples?", "How much is it?", "How is it?"],
          answer: "How much is it?",
          explanation: { en: "Price question → How much is it?", pt: "Pergunta de preço → How much is it?" },
        },
      ],
      input: {
        kind: "listening",
        title: { en: "Listening — At the market", pt: "Listening — Na feira" },
        lines: [
          { en: "The tomatoes are five reais a kilo today.", pt: "Os tomates estão a cinco reais o quilo hoje." },
          { en: "How many kilos of apples would you like?", pt: "Quantos quilos de maçã você quer?" },
          { en: "The cheese is a bit expensive, twenty reais a piece.", pt: "O queijo está um pouco caro, vinte reais a peça." },
          { en: "I'll take a few tomatoes and a little cheese.", pt: "Vou levar alguns tomates e um pouquinho de queijo." },
        ],
        questions: [
          {
            id: "b16d-r1",
            prompt: { en: "How much are the tomatoes?", pt: "Quanto custam os tomates?" },
            options: ["five reais a kilo", "twenty reais a kilo", "ten reais a kilo"],
            answer: "five reais a kilo",
            explanation: { en: "The tomatoes are five reais a kilo.", pt: "The tomatoes are five reais a kilo." },
          },
          {
            id: "b16d-r2",
            prompt: { en: "Is the cheese cheap or expensive?", pt: "O queijo está barato ou caro?" },
            options: ["cheap", "expensive", "free"],
            answer: "expensive",
            explanation: { en: "The cheese is a bit expensive.", pt: "The cheese is a bit expensive." },
          },
          {
            id: "b16d-r3",
            prompt: { en: "What does the customer buy?", pt: "O que o cliente compra?" },
            options: ["a few tomatoes and a little cheese", "a lot of cheese", "only apples"],
            answer: "a few tomatoes and a little cheese",
            explanation: { en: "I'll take a few tomatoes and a little cheese.", pt: "I'll take a few tomatoes and a little cheese." },
          },
        ],
      },
      quickCheck: [
        {
          id: "b16d-qc1",
          prompt: { en: "Complete: ___ apples do you want?", pt: "Complete: ___ apples do you want?" },
          options: ["How much", "How many", "How"],
          answer: "How many",
          explanation: { en: "Countable plural → How many.", pt: "Contável plural → How many." },
        },
        {
          id: "b16d-qc2",
          prompt: { en: "Something costs too much. You say:", pt: "Algo custa muito. Você diz:" },
          options: ["That's too expensive.", "That's too many.", "That's a few."],
          answer: "That's too expensive.",
          explanation: { en: "expensive = high price.", pt: "expensive = preço alto." },
        },
        {
          id: "b16d-qc3",
          prompt: { en: "Complete: I need ___ money for this.", pt: "Complete: I need ___ money for this." },
          options: ["a few", "a little", "many"],
          answer: "a little",
          explanation: { en: "money is uncountable → a little.", pt: "money é incontável → a little." },
        },
        {
          id: "b16d-qc4",
          prompt: { en: "Complete a purchase: I'll ___ two kilos, please.", pt: "Complete uma compra: I'll ___ two kilos, please." },
          options: ["take", "takes", "taking"],
          answer: "take",
          explanation: { en: "I'll + base verb.", pt: "I'll + verbo base." },
        },
      ],
    },
    communicate: {
      id: "BEGINNER-U16-COMMUNICATE",
      review: [
        { en: "How much for price/uncountable nouns; how many for countable plural nouns.", pt: "How much para preço/incontáveis; how many para contáveis no plural." },
        { en: "A lot of, a little, a few for quantities.", pt: "A lot of, a little, a few para quantidades." },
        { en: "Negotiating: That's too expensive. / I'll take...", pt: "Negociando: That's too expensive. / I'll take..." },
      ],
      activities: [
        {
          id: "b16c-a1",
          title: { en: "Ask prices", pt: "Pergunte preços" },
          instruction: {
            en: "Ask the price of three items using how much or how many.",
            pt: "Pergunte o preço de três itens usando how much ou how many.",
          },
          phrases: [
            { en: "How much is a kilo of apples?", pt: "Quanto custa um quilo de maçã?" },
            { en: "How many eggs are there in this box?", pt: "Quantos ovos tem nessa caixa?" },
          ],
          check: [
            {
              id: "b16c-a1q1",
              prompt: { en: "Complete: ___ is a kilo of apples?", pt: "Complete: ___ is a kilo of apples?" },
              options: ["How much", "How many", "How"],
              answer: "How much",
              explanation: { en: "Price → How much.", pt: "Preço → How much." },
            },
          ],
        },
        {
          id: "b16c-a2",
          title: { en: "Talk about quantities", pt: "Fale sobre quantidades" },
          instruction: {
            en: "Describe how much or how many of three things you have at home.",
            pt: "Descreva quanto ou quantos de três coisas você tem em casa.",
          },
          phrases: [
            { en: "I have a lot of rice, but only a little sugar.", pt: "Eu tenho muito arroz, mas pouco açúcar." },
            { en: "I have a few apples in the fridge.", pt: "Eu tenho algumas maçãs na geladeira." },
          ],
          check: [
            {
              id: "b16c-a2q1",
              prompt: { en: "Complete: I have a ___ apples.", pt: "Complete: I have a ___ apples." },
              options: ["little", "few", "much"],
              answer: "few",
              explanation: { en: "apples is countable plural → a few.", pt: "apples é contável plural → a few." },
            },
          ],
        },
        {
          id: "b16c-a3",
          title: { en: "Negotiate a price", pt: "Negocie um preço" },
          instruction: {
            en: "React to a price with too expensive or okay, and decide what to buy.",
            pt: "Reaja a um preço com too expensive ou okay, e decida o que comprar.",
          },
          phrases: [
            { en: "That's a bit expensive. Do you have a cheaper one?", pt: "Está um pouco caro. Você tem um mais barato?" },
            { en: "Okay, I'll take it then.", pt: "Ok, eu vou levar então." },
          ],
          check: [
            {
              id: "b16c-a3q1",
              prompt: { en: "Complete: That's too ___.", pt: "Complete: That's too ___." },
              options: ["expensive", "cheaply", "money"],
              answer: "expensive",
              explanation: { en: "expensive = adjective for high price.", pt: "expensive = adjetivo para preço alto." },
            },
          ],
        },
      ],
      challenge: {
        id: "b16c-challenge",
        title: { en: "Communication Challenge — Closing a purchase", pt: "Desafio de comunicação — Fechando uma compra" },
        instruction: {
          en: "You are at a small shop. Ask the price and quantity of two items, react to the price, and close the purchase.",
          pt: "Você está em uma pequena loja. Pergunte o preço e a quantidade de dois itens, reaja ao preço e feche a compra.",
        },
        phrases: [
          { en: "How much are the tomatoes today?", pt: "Quanto estão os tomates hoje?" },
          { en: "How many kilos of apples do you have?", pt: "Quantos quilos de maçã você tem?" },
          { en: "That's a bit expensive, but okay.", pt: "Está um pouco caro, mas tudo bem." },
          { en: "I'll take two kilos of tomatoes and a few apples, please.", pt: "Vou levar dois quilos de tomate e algumas maçãs, por favor." },
        ],
        check: [
          {
            id: "b16c-ch1",
            prompt: { en: "Which question asks about price?", pt: "Qual pergunta é sobre preço?" },
            options: ["How much is it?", "How many is it?", "How is it much?"],
            answer: "How much is it?",
            explanation: { en: "Price question uses How much.", pt: "Pergunta de preço usa How much." },
          },
          {
            id: "b16c-ch2",
            prompt: { en: "Complete: I'll take a ___ apples, please.", pt: "Complete: I'll take a ___ apples, please." },
            options: ["little", "few", "much"],
            answer: "few",
            explanation: { en: "apples is countable plural → a few.", pt: "apples é contável plural → a few." },
          },
        ],
      },
      lessonReview: {
        summary: {
          en: "You asked about quantity and price and closed a small purchase at a shop.",
          pt: "Você perguntou sobre quantidade e preço e fechou uma pequena compra em uma loja.",
        },
        canDo: [
          { en: "I can use how much and how many correctly.", pt: "Consigo usar how much e how many corretamente." },
          { en: "I can use a lot of, a little and a few.", pt: "Consigo usar a lot of, a little e a few." },
          { en: "I can ask a price and close a purchase.", pt: "Consigo perguntar um preço e fechar uma compra." },
        ],
        next: {
          en: "Next: talk about likes and preferences with like and prefer.",
          pt: "Próximo: falar de gostos e preferências com like e prefer.",
        },
      },
    },
  },
];
