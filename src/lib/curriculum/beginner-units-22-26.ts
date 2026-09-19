import type { CourseUnit } from "./types";

/** Speak2Co — Beginner English Course (A1). Units 22–26 do currículo oficial. */
export const BEGINNER_UNITS_22_26: CourseUnit[] = [
  {
    code: "BEGINNER-U22",
    number: 22,
    title: "Right Now — Present continuous",
    titlePt: "Agora mesmo — Present continuous",
    cefr: "A1",
    objective: {
      en: "Use the present continuous (am/is/are + -ing) to describe actions happening right now.",
      pt: "Usar o present continuous (am/is/are + -ing) para descrever ações que acontecem agora.",
    },
    communicationGoal: {
      en: "You can describe eight actions that are happening at this moment.",
      pt: "Você consegue descrever oito ações que estão acontecendo neste momento.",
    },
    prerequisites: {
      en: "Unit 21 — Checkpoint reviewing units 12 to 20.",
      pt: "Unidade 21 — Checkpoint revisando as unidades 12 a 20.",
    },
    newContent: {
      en: "Grammar: present continuous affirmative, negative and questions. Vocabulary: actions in progress. Expressions: Right now I'm... / Look, they're...",
      pt: "Gramática: present continuous afirmativo, negativo e perguntas. Vocabulário: ações em curso. Expressões: Right now I'm... / Look, they're...",
    },
    reviewContent: {
      en: "Review from earlier units: present simple and everyday verbs.",
      pt: "Revisão de unidades anteriores: present simple e verbos do cotidiano.",
    },
    discover: {
      id: "BEGINNER-U22-DISCOVER",
      warmUp: {
        prompt: {
          en: "Look at the picture. A busy street is full of people. What is each person doing right now?",
          pt: "Observe a imagem. Uma rua movimentada está cheia de pessoas. O que cada pessoa está fazendo agora?",
        },
        phrases: [
          { en: "Right now, a man is crossing the street.", pt: "Agora mesmo, um homem está atravessando a rua." },
          { en: "A woman is talking on the phone.", pt: "Uma mulher está falando ao telefone." },
          { en: "Two friends are having a video call.", pt: "Dois amigos estão em uma videochamada." },
        ],
      },
      context: {
        situation: {
          en: "Helena calls Bruno on a video call while she is walking downtown.",
          pt: "Helena liga para Bruno em uma videochamada enquanto caminha pelo centro.",
        },
        dialogue: [
          { who: "Bruno", en: "Hi, Helena! Where are you? It's noisy.", pt: "Oi, Helena! Onde você está? Está barulhento." },
          { who: "Helena", en: "I'm walking downtown. A lot of people are shopping today.", pt: "Estou andando pelo centro. Muitas pessoas estão fazendo compras hoje." },
          { who: "Bruno", en: "What are you doing right now, exactly?", pt: "O que você está fazendo agora, exatamente?" },
          { who: "Helena", en: "I'm looking for a birthday present for Ivan.", pt: "Estou procurando um presente de aniversário para o Ivan." },
          { who: "Bruno", en: "Nice! I'm sitting in a café. I'm drinking coffee and reading the news.", pt: "Legal! Estou sentado num café. Estou tomando café e lendo as notícias." },
          { who: "Helena", en: "Look, it's starting to rain here!", pt: "Olha, está começando a chover aqui!" },
          { who: "Bruno", en: "Are you carrying an umbrella?", pt: "Você está carregando um guarda-chuva?" },
          { who: "Helena", en: "No, I'm not. I'm running to the bus stop now!", pt: "Não, não estou. Estou correndo para o ponto de ônibus agora!" },
        ],
      },
      vocabulary: [
        { term: "walk", pt: "andar, caminhar", ipa: "/wɔːk/", definition: "To move on foot.", example: "I'm walking downtown.", examplePt: "Estou andando pelo centro." },
        { term: "carry", pt: "carregar", ipa: "/ˈkæri/", definition: "To hold and move something.", example: "She isn't carrying an umbrella.", examplePt: "Ela não está carregando um guarda-chuva." },
        { term: "shop (v.)", pt: "fazer compras", ipa: "/ʃɑːp/", definition: "To buy things in stores.", example: "They are shopping today.", examplePt: "Eles estão fazendo compras hoje." },
        { term: "wait", pt: "esperar", ipa: "/weɪt/", definition: "To stay until something happens.", example: "He is waiting for the bus.", examplePt: "Ele está esperando o ônibus." },
        { term: "cross", pt: "atravessar", ipa: "/krɔːs/", definition: "To go from one side to the other.", example: "A man is crossing the street.", examplePt: "Um homem está atravessando a rua." },
        { term: "run", pt: "correr", ipa: "/rʌn/", definition: "To move fast on foot.", example: "I'm running to the bus stop.", examplePt: "Estou correndo para o ponto de ônibus." },
        { term: "rain (v.)", pt: "chover", ipa: "/reɪn/", definition: "Water falls from the sky.", example: "It's starting to rain.", examplePt: "Está começando a chover." },
        { term: "look for", pt: "procurar", ipa: "/lʊk fɔːr/", definition: "To try to find something.", example: "I'm looking for a present.", examplePt: "Estou procurando um presente." },
        { term: "present (n.)", pt: "presente", ipa: "/ˈprezənt/", definition: "A gift for someone.", example: "It's a birthday present for Ivan.", examplePt: "É um presente de aniversário para o Ivan." },
        { term: "umbrella", pt: "guarda-chuva", ipa: "/ʌmˈbrelə/", definition: "You use it in the rain.", example: "Take an umbrella with you.", examplePt: "Leve um guarda-chuva com você." },
      ],
      expressions: [
        { en: "Right now I'm...", pt: "Agora mesmo eu estou..." },
        { en: "What are you doing?", pt: "O que você está fazendo?" },
        { en: "Look, they're...", pt: "Olha, eles estão..." },
        { en: "I'm not doing anything special.", pt: "Não estou fazendo nada de especial." },
        { en: "Hold on a second!", pt: "Espera um segundo!" },
      ],
      grammar: [
        {
          title: { en: "Present continuous: affirmative and negative", pt: "Present continuous: afirmativo e negativo" },
          examples: [
            { en: "I am walking downtown.", pt: "Estou andando pelo centro." },
            { en: "She is drinking coffee.", pt: "Ela está tomando café." },
            { en: "They are not carrying an umbrella.", pt: "Eles não estão carregando um guarda-chuva." },
          ],
          rule: {
            en: "Use am / is / are + verb-ing for actions in progress now. Negative: am/is/are + not + verb-ing.",
            pt: "Use am / is / are + verbo-ing para ações em andamento agora. Negativo: am/is/are + not + verbo-ing.",
          },
          mistakes: [
            { en: "I am walk. → I am walking.", pt: "Precisa do -ing no verbo." },
            { en: "She drinking coffee. → She is drinking coffee.", pt: "Não pode faltar o verbo to be." },
          ],
        },
        {
          title: { en: "Present continuous: questions", pt: "Present continuous: perguntas" },
          examples: [
            { en: "What are you doing right now?", pt: "O que você está fazendo agora?" },
            { en: "Are you carrying an umbrella?", pt: "Você está carregando um guarda-chuva?" },
            { en: "Is it raining there?", pt: "Está chovendo aí?" },
          ],
          rule: {
            en: "Invert: Am/Is/Are + subject + verb-ing? Use wh- words before the auxiliary for information questions.",
            pt: "Inverta: Am/Is/Are + sujeito + verbo-ing? Use palavras wh- antes do auxiliar para perguntas de informação.",
          },
          mistakes: [
            { en: "You are doing what? → What are you doing?", pt: "A palavra wh- vem no início." },
            { en: "Is raining? → Is it raining?", pt: "Não pode faltar o sujeito it." },
          ],
        },
      ],
      controlledPractice: [
        {
          id: "b22d-cp1",
          prompt: { en: "Complete: I ___ walking downtown.", pt: "Complete: I ___ walking downtown." },
          options: ["am", "is", "are"],
          answer: "am",
          explanation: { en: "I + am.", pt: "I + am." },
        },
        {
          id: "b22d-cp2",
          prompt: { en: "Complete: She ___ drinking coffee.", pt: "Complete: She ___ drinking coffee." },
          options: ["am", "is", "are"],
          answer: "is",
          explanation: { en: "She + is.", pt: "She + is." },
        },
        {
          id: "b22d-cp3",
          prompt: { en: "Negative form: They are carrying bags.", pt: "Forma negativa: They are carrying bags." },
          options: ["They aren't carrying bags.", "They don't carrying bags.", "They no carrying bags."],
          answer: "They aren't carrying bags.",
          explanation: { en: "are + not = aren't.", pt: "are + not = aren't." },
        },
        {
          id: "b22d-cp4",
          prompt: { en: "Question: ___ it raining?", pt: "Pergunta: ___ it raining?" },
          options: ["Is", "Does", "Do"],
          answer: "Is",
          explanation: { en: "it + is → Is it raining?", pt: "it + is → Is it raining?" },
        },
        {
          id: "b22d-cp5",
          prompt: { en: "Correct -ing form of 'run':", pt: "Forma -ing correta de 'run':" },
          options: ["runing", "runing g", "running"],
          answer: "running",
          explanation: { en: "Double the last consonant: run → running.", pt: "Dobre a última consoante: run → running." },
        },
        {
          id: "b22d-cp6",
          prompt: { en: "Correct -ing form of 'shop':", pt: "Forma -ing correta de 'shop':" },
          options: ["shopping", "shoping", "shopeing"],
          answer: "shopping",
          explanation: { en: "Double the last consonant: shop → shopping.", pt: "Dobre a última consoante: shop → shopping." },
        },
        {
          id: "b22d-cp7",
          prompt: { en: "Complete: What ___ you doing?", pt: "Complete: What ___ you doing?" },
          options: ["are", "is", "am"],
          answer: "are",
          explanation: { en: "you + are.", pt: "you + are." },
        },
      ],
      input: {
        kind: "listening",
        title: { en: "Listening — A busy afternoon", pt: "Listening — Uma tarde movimentada" },
        lines: [
          { en: "Right now, Helena is walking downtown and looking for a present.", pt: "Agora mesmo, Helena está andando pelo centro e procurando um presente." },
          { en: "Bruno is sitting in a café. He's drinking coffee and reading the news.", pt: "Bruno está sentado num café. Ele está tomando café e lendo as notícias." },
          { en: "It's starting to rain, and Helena isn't carrying an umbrella.", pt: "Está começando a chover, e Helena não está carregando um guarda-chuva." },
          { en: "She is running to the bus stop now.", pt: "Ela está correndo para o ponto de ônibus agora." },
          { en: "Many people are shopping in the street.", pt: "Muitas pessoas estão fazendo compras na rua." },
        ],
        questions: [
          {
            id: "b22d-r1",
            prompt: { en: "What is Helena doing?", pt: "O que Helena está fazendo?" },
            options: ["Looking for a present", "Drinking coffee", "Reading the news"],
            answer: "Looking for a present",
            explanation: { en: "She is walking downtown and looking for a present.", pt: "Ela está andando pelo centro e procurando um presente." },
          },
          {
            id: "b22d-r2",
            prompt: { en: "What is Bruno doing?", pt: "O que Bruno está fazendo?" },
            options: ["Running to the bus stop", "Drinking coffee and reading the news", "Shopping downtown"],
            answer: "Drinking coffee and reading the news",
            explanation: { en: "He's sitting in a café.", pt: "Ele está sentado num café." },
          },
          {
            id: "b22d-r3",
            prompt: { en: "Is Helena carrying an umbrella?", pt: "Helena está carregando um guarda-chuva?" },
            options: ["Yes, she is.", "No, she isn't.", "We don't know."],
            answer: "No, she isn't.",
            explanation: { en: "She isn't carrying an umbrella.", pt: "Ela não está carregando um guarda-chuva." },
          },
          {
            id: "b22d-r4",
            prompt: { en: "Why is she running?", pt: "Por que ela está correndo?" },
            options: ["Because it's raining", "Because she is late for work", "Because she likes running"],
            answer: "Because it's raining",
            explanation: { en: "It's starting to rain and she has no umbrella.", pt: "Está começando a chover e ela não tem guarda-chuva." },
          },
        ],
      },
      quickCheck: [
        {
          id: "b22d-qc1",
          prompt: { en: "Complete: We ___ having a video call.", pt: "Complete: We ___ having a video call." },
          options: ["am", "is", "are"],
          answer: "are",
          explanation: { en: "We + are.", pt: "We + are." },
        },
        {
          id: "b22d-qc2",
          prompt: { en: "Negative: He is waiting for the bus.", pt: "Negativa: He is waiting for the bus." },
          options: ["He isn't waiting for the bus.", "He not waiting for the bus.", "He doesn't waiting for the bus."],
          answer: "He isn't waiting for the bus.",
          explanation: { en: "is + not = isn't.", pt: "is + not = isn't." },
        },
        {
          id: "b22d-qc3",
          prompt: { en: "Complete: ___ they crossing the street?", pt: "Complete: ___ they crossing the street?" },
          options: ["Are", "Is", "Do"],
          answer: "Are",
          explanation: { en: "they + are → Are they...?", pt: "they + are → Are they...?" },
        },
        {
          id: "b22d-qc4",
          prompt: { en: "You want to describe an action happening now. You say:", pt: "Você quer descrever uma ação acontecendo agora. Você diz:" },
          options: ["Right now I'm looking for a present.", "Every day I look for presents.", "I looked for a present."],
          answer: "Right now I'm looking for a present.",
          explanation: { en: "Present continuous describes now.", pt: "Present continuous descreve o agora." },
        },
      ],
    },
    communicate: {
      id: "BEGINNER-U22-COMMUNICATE",
      review: [
        { en: "Present continuous: am/is/are + verb-ing for now.", pt: "Present continuous: am/is/are + verbo-ing para agora." },
        { en: "Negative: am/is/are + not + verb-ing.", pt: "Negativo: am/is/are + not + verbo-ing." },
        { en: "Questions: Am/Is/Are + subject + verb-ing?", pt: "Perguntas: Am/Is/Are + sujeito + verbo-ing?" },
      ],
      activities: [
        {
          id: "b22c-a1",
          title: { en: "Describe the scene", pt: "Descreva a cena" },
          instruction: {
            en: "Look at a picture (real or imagined) of a busy place and describe eight actions happening right now.",
            pt: "Observe uma imagem (real ou imaginada) de um lugar movimentado e descreva oito ações acontecendo agora.",
          },
          phrases: [
            { en: "A woman is talking on the phone near the corner.", pt: "Uma mulher está falando ao telefone perto da esquina." },
            { en: "Two men are waiting for the bus.", pt: "Dois homens estão esperando o ônibus." },
          ],
          check: [
            {
              id: "b22c-a1q1",
              prompt: { en: "Complete: A woman ___ talking on the phone.", pt: "Complete: A woman ___ talking on the phone." },
              options: ["am", "is", "are"],
              answer: "is",
              explanation: { en: "A woman = she → is.", pt: "A woman = she → is." },
            },
          ],
        },
        {
          id: "b22c-a2",
          title: { en: "Video call with a friend", pt: "Videochamada com um amigo" },
          instruction: {
            en: "Call a friend and ask what they are doing right now. Answer with two actions in progress.",
            pt: "Ligue para um amigo e pergunte o que ele está fazendo agora. Responda com duas ações em andamento.",
          },
          phrases: [
            { en: "What are you doing right now?", pt: "O que você está fazendo agora?" },
            { en: "I'm sitting in a café and drinking coffee.", pt: "Estou sentado num café e tomando café." },
          ],
          check: [
            {
              id: "b22c-a2q1",
              prompt: { en: "Which question asks about now?", pt: "Qual pergunta é sobre agora?" },
              options: ["What do you do?", "What are you doing?", "What did you do?"],
              answer: "What are you doing?",
              explanation: { en: "Present continuous asks about now.", pt: "Present continuous pergunta sobre agora." },
            },
          ],
        },
        {
          id: "b22c-a3",
          title: { en: "The weather is changing", pt: "O tempo está mudando" },
          instruction: {
            en: "Tell your friend it's starting to rain and say if you are carrying an umbrella.",
            pt: "Diga ao seu amigo que está começando a chover e diga se você está carregando um guarda-chuva.",
          },
          phrases: [
            { en: "Look, it's starting to rain here!", pt: "Olha, está começando a chover aqui!" },
            { en: "I'm not carrying an umbrella today.", pt: "Não estou carregando um guarda-chuva hoje." },
          ],
          check: [
            {
              id: "b22c-a3q1",
              prompt: { en: "Complete: It ___ raining.", pt: "Complete: It ___ raining." },
              options: ["is", "are", "am"],
              answer: "is",
              explanation: { en: "it → is.", pt: "it → is." },
            },
          ],
        },
      ],
      challenge: {
        id: "b22c-challenge",
        title: { en: "Communication Challenge — Live report", pt: "Desafio de comunicação — Relato ao vivo" },
        instruction: {
          en: "Imagine you are outside. Describe the scene around you, say what you are doing, ask what a friend is doing, and react to the weather.",
          pt: "Imagine que você está na rua. Descreva a cena ao seu redor, diga o que está fazendo, pergunte o que um amigo está fazendo e reaja ao clima.",
        },
        phrases: [
          { en: "Right now, a lot of people are shopping downtown.", pt: "Agora mesmo, muitas pessoas estão fazendo compras no centro." },
          { en: "I'm looking for a present for a friend.", pt: "Estou procurando um presente para um amigo." },
          { en: "What are you doing right now?", pt: "O que você está fazendo agora?" },
          { en: "Look, it's starting to rain!", pt: "Olha, está começando a chover!" },
        ],
        check: [
          {
            id: "b22c-ch1",
            prompt: { en: "Which sentence has NO mistake?", pt: "Qual frase NÃO tem erro?" },
            options: ["She is walk downtown.", "She is walking downtown.", "She walking downtown."],
            answer: "She is walking downtown.",
            explanation: { en: "Present continuous needs to be + -ing.", pt: "Present continuous precisa de to be + -ing." },
          },
          {
            id: "b22c-ch2",
            prompt: { en: "Negative form of: They are running.", pt: "Forma negativa de: They are running." },
            options: ["They aren't running.", "They don't running.", "They no running."],
            answer: "They aren't running.",
            explanation: { en: "are + not = aren't.", pt: "are + not = aren't." },
          },
        ],
      },
      lessonReview: {
        summary: {
          en: "You described actions happening right now using the present continuous.",
          pt: "Você descreveu ações que acontecem agora usando o present continuous.",
        },
        canDo: [
          { en: "I can form present continuous affirmative and negative sentences.", pt: "Consigo formar frases afirmativas e negativas no present continuous." },
          { en: "I can ask and answer questions about now.", pt: "Consigo perguntar e responder sobre o agora." },
          { en: "I can describe a scene with eight actions in progress.", pt: "Consigo descrever uma cena com oito ações em andamento." },
        ],
        next: {
          en: "Next: contrast routine (present simple) with the present moment (present continuous).",
          pt: "Próximo: contrastar a rotina (present simple) com o momento presente (present continuous).",
        },
      },
    },
  },
  {
    code: "BEGINNER-U23",
    number: 23,
    title: "Usually vs. Now — Simple and continuous",
    titlePt: "Usually vs. Now — Simple e continuous",
    cefr: "A1",
    objective: {
      en: "Contrast present simple (habits) and present continuous (now) to explain exceptions to routine.",
      pt: "Contrastar present simple (hábitos) e present continuous (agora) para explicar exceções à rotina.",
    },
    communicationGoal: {
      en: "You can contrast six pairs of habit vs. now and justify a change.",
      pt: "Você consegue contrastar seis pares de hábito vs. agora e justificar uma mudança.",
    },
    prerequisites: {
      en: "Unit 22 — present continuous for actions right now.",
      pt: "Unidade 22 — present continuous para ações no momento presente.",
    },
    newContent: {
      en: "Grammar: contrast present simple vs. present continuous. Vocabulary: routine + exceptions. Expressions: Usually..., but today... / That's why...",
      pt: "Gramática: contraste present simple vs. present continuous. Vocabulário: rotina + exceções. Expressões: Usually..., but today... / That's why...",
    },
    reviewContent: {
      en: "Review from Unit 10: adverbs of frequency (always, usually, never).",
      pt: "Revisão da Unidade 10: advérbios de frequência (always, usually, never).",
    },
    discover: {
      id: "BEGINNER-U23-DISCOVER",
      warmUp: {
        prompt: {
          en: "Look at the picture. The same person is calm in the morning and stressed in the afternoon. What's different today?",
          pt: "Observe a imagem. A mesma pessoa está calma de manhã e estressada à tarde. O que está diferente hoje?",
        },
        phrases: [
          { en: "Ivan usually starts work at nine.", pt: "Ivan normalmente começa a trabalhar às nove." },
          { en: "Today he is working late.", pt: "Hoje ele está trabalhando até tarde." },
          { en: "He usually eats lunch at home, but today he isn't.", pt: "Ele normalmente almoça em casa, mas hoje não está." },
        ],
      },
      context: {
        situation: {
          en: "Bruno visits Ivan's office and notices something different about his routine today.",
          pt: "Bruno visita o escritório de Ivan e percebe algo diferente na rotina dele hoje.",
        },
        dialogue: [
          { who: "Bruno", en: "Hi, Ivan! You usually finish work at five. Why are you still here?", pt: "Oi, Ivan! Você normalmente termina o trabalho às cinco. Por que ainda está aqui?" },
          { who: "Ivan", en: "I'm working on a big project this week. That's why I'm staying late.", pt: "Estou trabalhando num projeto grande esta semana. É por isso que estou ficando até mais tarde." },
          { who: "Bruno", en: "I see. You usually have lunch at noon, right?", pt: "Entendi. Você normalmente almoça ao meio-dia, certo?" },
          { who: "Ivan", en: "Yes, but today I'm not having lunch. I'm too busy!", pt: "Sim, mas hoje não estou almoçando. Estou muito ocupado!" },
          { who: "Bruno", en: "You usually look relaxed, but today you look tired.", pt: "Você normalmente parece relaxado, mas hoje você parece cansado." },
          { who: "Ivan", en: "That's true. I'm not sleeping well this week.", pt: "É verdade. Não estou dormindo bem esta semana." },
          { who: "Bruno", en: "Do you want a coffee? I'm buying one for myself now.", pt: "Você quer um café? Estou comprando um para mim agora." },
          { who: "Ivan", en: "Yes, please! That would help a lot today.", pt: "Sim, por favor! Isso ajudaria muito hoje." },
        ],
      },
      vocabulary: [
        { term: "usually", pt: "normalmente", ipa: "/ˈjuːʒuəli/", definition: "Most of the time; a habit.", example: "I usually finish at five.", examplePt: "Eu normalmente termino às cinco." },
        { term: "today", pt: "hoje", ipa: "/təˈdeɪ/", definition: "This day, now.", example: "Today I'm staying late.", examplePt: "Hoje estou ficando até mais tarde." },
        { term: "project", pt: "projeto", ipa: "/ˈprɑːdʒekt/", definition: "A planned piece of work.", example: "I'm working on a big project.", examplePt: "Estou trabalhando num projeto grande." },
        { term: "busy", pt: "ocupado", ipa: "/ˈbɪzi/", definition: "Having a lot to do.", example: "I'm too busy today.", examplePt: "Estou muito ocupado hoje." },
        { term: "relaxed", pt: "relaxado", ipa: "/rɪˈlækst/", definition: "Calm, not worried.", example: "You usually look relaxed.", examplePt: "Você normalmente parece relaxado." },
        { term: "tired", pt: "cansado", ipa: "/ˈtaɪərd/", definition: "Needing rest.", example: "Today you look tired.", examplePt: "Hoje você parece cansado." },
        { term: "sleep (v.)", pt: "dormir", ipa: "/sliːp/", definition: "To rest at night.", example: "I'm not sleeping well this week.", examplePt: "Não estou dormindo bem esta semana." },
        { term: "stay late", pt: "ficar até mais tarde", ipa: "/steɪ leɪt/", definition: "To remain somewhere longer than usual.", example: "I'm staying late this week.", examplePt: "Estou ficando até mais tarde esta semana." },
        { term: "deadline", pt: "prazo", ipa: "/ˈdedlaɪn/", definition: "The time something must be finished.", example: "The deadline is on Friday.", examplePt: "O prazo é na sexta-feira." },
        { term: "exception", pt: "exceção", ipa: "/ɪkˈsepʃn̩/", definition: "Something different from the usual.", example: "Today is an exception.", examplePt: "Hoje é uma exceção." },
      ],
      expressions: [
        { en: "Usually..., but today...", pt: "Normalmente..., mas hoje..." },
        { en: "That's why...", pt: "É por isso que..." },
        { en: "That's true.", pt: "É verdade." },
        { en: "I'm too busy today.", pt: "Estou muito ocupado hoje." },
        { en: "That would help a lot.", pt: "Isso ajudaria muito." },
      ],
      grammar: [
        {
          title: { en: "Present simple for habits", pt: "Present simple para hábitos" },
          examples: [
            { en: "I usually finish work at five.", pt: "Eu normalmente termino o trabalho às cinco." },
            { en: "He usually has lunch at noon.", pt: "Ele normalmente almoça ao meio-dia." },
            { en: "They usually sleep well.", pt: "Eles normalmente dormem bem." },
          ],
          rule: {
            en: "Use present simple with usually / always / every day for routines and habits.",
            pt: "Use o present simple com usually / always / every day para rotinas e hábitos.",
          },
          mistakes: [
            { en: "I usually am finishing at five. → I usually finish at five.", pt: "Hábito usa present simple, não continuous." },
            { en: "He usually have lunch. → He usually has lunch.", pt: "3ª pessoa precisa de -s: has." },
          ],
        },
        {
          title: { en: "Present continuous for exceptions", pt: "Present continuous para exceções" },
          examples: [
            { en: "Today I'm staying late.", pt: "Hoje estou ficando até mais tarde." },
            { en: "Today he isn't having lunch.", pt: "Hoje ele não está almoçando." },
            { en: "This week I'm not sleeping well.", pt: "Esta semana não estou dormindo bem." },
          ],
          rule: {
            en: "Use present continuous with today / this week / right now to show something different from the usual habit.",
            pt: "Use o present continuous com today / this week / right now para mostrar algo diferente do hábito de costume.",
          },
          mistakes: [
            { en: "Today I stay late. → Today I'm staying late.", pt: "Exceção temporária usa continuous." },
            { en: "This week he don't sleep well. → This week he isn't sleeping well.", pt: "Negativa do continuous usa isn't/aren't." },
          ],
        },
      ],
      controlledPractice: [
        {
          id: "b23d-cp1",
          prompt: { en: "Complete: Ivan usually ___ work at five.", pt: "Complete: Ivan usually ___ work at five." },
          options: ["finish", "finishes", "is finishing"],
          answer: "finishes",
          explanation: { en: "Habit + he → present simple with -s.", pt: "Hábito + he → present simple com -s." },
        },
        {
          id: "b23d-cp2",
          prompt: { en: "Complete: Today he ___ late.", pt: "Complete: Today he ___ late." },
          options: ["stays", "is staying", "stay"],
          answer: "is staying",
          explanation: { en: "Today = exception → present continuous.", pt: "Today = exceção → present continuous." },
        },
        {
          id: "b23d-cp3",
          prompt: { en: "Choose the habit sentence:", pt: "Escolha a frase de hábito:" },
          options: ["I'm having lunch now.", "I usually have lunch at noon.", "I'm not having lunch today."],
          answer: "I usually have lunch at noon.",
          explanation: { en: "usually = habit → present simple.", pt: "usually = hábito → present simple." },
        },
        {
          id: "b23d-cp4",
          prompt: { en: "Choose the exception sentence:", pt: "Escolha a frase de exceção:" },
          options: ["He usually sleeps well.", "He is not sleeping well this week.", "He sleeps well every day."],
          answer: "He is not sleeping well this week.",
          explanation: { en: "this week = exception → present continuous.", pt: "this week = exceção → present continuous." },
        },
        {
          id: "b23d-cp5",
          prompt: { en: "Complete: I ___ too busy today.", pt: "Complete: I ___ too busy today." },
          options: ["am", "is", "usually am"],
          answer: "am",
          explanation: { en: "I + am.", pt: "I + am." },
        },
        {
          id: "b23d-cp6",
          prompt: { en: "Connector for contrast:", pt: "Conector de contraste:" },
          options: ["and", "but", "so"],
          answer: "but",
          explanation: { en: "Usually..., but today... shows contrast.", pt: "Usually..., but today... mostra contraste." },
        },
      ],
      input: {
        kind: "reading",
        title: { en: "Reading — A different week", pt: "Reading — Uma semana diferente" },
        lines: [
          { en: "Ivan usually finishes work at five, but this week he is working late every day.", pt: "Ivan normalmente termina o trabalho às cinco, mas esta semana ele está trabalhando até tarde todos os dias." },
          { en: "He usually has lunch at noon, but today he isn't having lunch at all.", pt: "Ele normalmente almoça ao meio-dia, mas hoje ele não está almoçando de jeito nenhum." },
          { en: "He usually sleeps eight hours, but this week he isn't sleeping well.", pt: "Ele normalmente dorme oito horas, mas esta semana não está dormindo bem." },
          { en: "That's why he looks tired today.", pt: "É por isso que ele parece cansado hoje." },
          { en: "Next week the project finishes, and his routine goes back to normal.", pt: "Na próxima semana o projeto termina, e a rotina dele volta ao normal." },
        ],
        questions: [
          {
            id: "b23d-r1",
            prompt: { en: "What time does Ivan usually finish work?", pt: "A que horas Ivan normalmente termina o trabalho?" },
            options: ["At five", "At noon", "At nine"],
            answer: "At five",
            explanation: { en: "He usually finishes at five.", pt: "Ele normalmente termina às cinco." },
          },
          {
            id: "b23d-r2",
            prompt: { en: "What is different this week?", pt: "O que está diferente esta semana?" },
            options: ["He is working late and sleeping badly", "He is on vacation", "He is having lunch at noon"],
            answer: "He is working late and sleeping badly",
            explanation: { en: "He is working late and not sleeping well.", pt: "Ele está trabalhando até tarde e não dormindo bem." },
          },
          {
            id: "b23d-r3",
            prompt: { en: "Why does he look tired?", pt: "Por que ele parece cansado?" },
            options: ["Because he isn't sleeping well", "Because he is on vacation", "Because he finished the project"],
            answer: "Because he isn't sleeping well",
            explanation: { en: "That's why he looks tired today.", pt: "É por isso que ele parece cansado hoje." },
          },
          {
            id: "b23d-r4",
            prompt: { en: "When does his routine go back to normal?", pt: "Quando a rotina dele volta ao normal?" },
            options: ["Next week", "Today", "Every day"],
            answer: "Next week",
            explanation: { en: "Next week the project finishes.", pt: "Na próxima semana o projeto termina." },
          },
        ],
      },
      quickCheck: [
        {
          id: "b23d-qc1",
          prompt: { en: "Complete: I usually ___ home, but today I'm at the office.", pt: "Complete: I usually ___ home, but today I'm at the office." },
          options: ["work at", "am working at", "worked at"],
          answer: "work at",
          explanation: { en: "usually → present simple.", pt: "usually → present simple." },
        },
        {
          id: "b23d-qc2",
          prompt: { en: "Complete: Today I ___ at the office.", pt: "Complete: Today I ___ at the office." },
          options: ["work", "am working", "worked"],
          answer: "am working",
          explanation: { en: "today → present continuous.", pt: "today → present continuous." },
        },
        {
          id: "b23d-qc3",
          prompt: { en: "Choose the correct contrast sentence:", pt: "Escolha a frase de contraste correta:" },
          options: ["Usually I walk to work, but today I'm driving.", "Usually I walking to work.", "Today I drive to work always."],
          answer: "Usually I walk to work, but today I'm driving.",
          explanation: { en: "Habit + but + exception.", pt: "Hábito + but + exceção." },
        },
        {
          id: "b23d-qc4",
          prompt: { en: "You want to justify a change. You say:", pt: "Você quer justificar uma mudança. Você diz:" },
          options: ["That's why I'm staying late.", "I usually stay late.", "I stayed late."],
          answer: "That's why I'm staying late.",
          explanation: { en: "That's why introduces a reason.", pt: "That's why introduz um motivo." },
        },
      ],
    },
    communicate: {
      id: "BEGINNER-U23-COMMUNICATE",
      review: [
        { en: "Present simple for habits: usually, always, every day.", pt: "Present simple para hábitos: usually, always, every day." },
        { en: "Present continuous for exceptions: today, this week, right now.", pt: "Present continuous para exceções: today, this week, right now." },
        { en: "Contrast connector: usually..., but today...", pt: "Conector de contraste: usually..., but today..." },
      ],
      activities: [
        {
          id: "b23c-a1",
          title: { en: "My usual day vs. today", pt: "Meu dia normal vs. hoje" },
          instruction: {
            en: "Say three habits and contrast each one with something different that is happening today.",
            pt: "Diga três hábitos e contraste cada um com algo diferente que está acontecendo hoje.",
          },
          phrases: [
            { en: "I usually wake up at seven, but today I'm waking up at nine.", pt: "Eu normalmente acordo às sete, mas hoje estou acordando às nove." },
            { en: "I usually walk to work, but today I'm taking the bus.", pt: "Eu normalmente vou a pé para o trabalho, mas hoje estou pegando o ônibus." },
          ],
          check: [
            {
              id: "b23c-a1q1",
              prompt: { en: "Complete: I usually ___ at seven.", pt: "Complete: I usually ___ at seven." },
              options: ["wake up", "am waking up", "woke up"],
              answer: "wake up",
              explanation: { en: "usually → present simple.", pt: "usually → present simple." },
            },
          ],
        },
        {
          id: "b23c-a2",
          title: { en: "Notice a change", pt: "Perceba uma mudança" },
          instruction: {
            en: "Tell a colleague something different you notice about their routine today, using 'usually... but today...'.",
            pt: "Diga a um colega algo diferente que você percebe na rotina dele hoje, usando 'usually... but today...'.",
          },
          phrases: [
            { en: "You usually look relaxed, but today you look tired.", pt: "Você normalmente parece relaxado, mas hoje você parece cansado." },
            { en: "You usually have lunch at noon, but today you aren't.", pt: "Você normalmente almoça ao meio-dia, mas hoje não está." },
          ],
          check: [
            {
              id: "b23c-a2q1",
              prompt: { en: "Complete: You usually ___ relaxed.", pt: "Complete: You usually ___ relaxed." },
              options: ["look", "are looking", "looked"],
              answer: "look",
              explanation: { en: "usually → present simple.", pt: "usually → present simple." },
            },
          ],
        },
        {
          id: "b23c-a3",
          title: { en: "Justify the exception", pt: "Justifique a exceção" },
          instruction: {
            en: "Explain why your routine is different today, using 'That's why...'.",
            pt: "Explique por que sua rotina está diferente hoje, usando 'That's why...'.",
          },
          phrases: [
            { en: "I'm working on a big project. That's why I'm staying late.", pt: "Estou trabalhando num projeto grande. É por isso que estou ficando até mais tarde." },
            { en: "I'm not sleeping well. That's why I look tired.", pt: "Não estou dormindo bem. É por isso que pareço cansado." },
          ],
          check: [
            {
              id: "b23c-a3q1",
              prompt: { en: "Which phrase introduces a reason?", pt: "Qual expressão introduz um motivo?" },
              options: ["That's why", "Right now", "Usually"],
              answer: "That's why",
              explanation: { en: "That's why explains a cause.", pt: "That's why explica uma causa." },
            },
          ],
        },
      ],
      challenge: {
        id: "b23c-challenge",
        title: { en: "Communication Challenge — What's different today?", pt: "Desafio de comunicação — O que está diferente hoje?" },
        instruction: {
          en: "Talk to a colleague. Contrast three habits with today's exceptions and justify one change.",
          pt: "Converse com um colega. Contraste três hábitos com as exceções de hoje e justifique uma mudança.",
        },
        phrases: [
          { en: "I usually finish work at five, but today I'm staying late.", pt: "Eu normalmente termino o trabalho às cinco, mas hoje estou ficando até mais tarde." },
          { en: "I usually have lunch at noon, but today I'm not.", pt: "Eu normalmente almoço ao meio-dia, mas hoje não estou." },
          { en: "I'm working on a big project. That's why I'm so busy.", pt: "Estou trabalhando num projeto grande. É por isso que estou tão ocupado." },
        ],
        check: [
          {
            id: "b23c-ch1",
            prompt: { en: "Which sentence has NO mistake?", pt: "Qual frase NÃO tem erro?" },
            options: ["I usually am finishing at five.", "I usually finish at five.", "I usually finishes at five."],
            answer: "I usually finish at five.",
            explanation: { en: "I + present simple base form.", pt: "I + present simple na forma base." },
          },
          {
            id: "b23c-ch2",
            prompt: { en: "Which sentence shows an exception today?", pt: "Qual frase mostra uma exceção hoje?" },
            options: ["I always work at home.", "Today I'm working at the office.", "I work at home every day."],
            answer: "Today I'm working at the office.",
            explanation: { en: "Today + present continuous = exception.", pt: "Today + present continuous = exceção." },
          },
        ],
      },
      lessonReview: {
        summary: {
          en: "You contrasted routines with today's exceptions and justified a change.",
          pt: "Você contrastou rotinas com as exceções de hoje e justificou uma mudança.",
        },
        canDo: [
          { en: "I can use present simple for habits.", pt: "Consigo usar o present simple para hábitos." },
          { en: "I can use present continuous for today's exceptions.", pt: "Consigo usar o present continuous para exceções de hoje." },
          { en: "I can justify a change with 'That's why...'.", pt: "Consigo justificar uma mudança com 'That's why...'." },
        ],
        next: {
          en: "Next: talk about the past with was and were.",
          pt: "Próximo: falar do passado com was e were.",
        },
      },
    },
  },
  {
    code: "BEGINNER-U24",
    number: 24,
    title: "Yesterday I Was — Past simple of to be",
    titlePt: "Ontem eu estava — Past simple de to be",
    cefr: "A1",
    objective: {
      en: "Use was / were in affirmative, negative and question forms to talk about the recent past.",
      pt: "Usar was / were nas formas afirmativa, negativa e interrogativa para falar do passado recente.",
    },
    communicationGoal: {
      en: "You can use eight sentences with was / were to talk about yesterday.",
      pt: "Você consegue usar oito frases com was / were para falar de ontem.",
    },
    prerequisites: {
      en: "Unit 23 — contrast between present simple and present continuous.",
      pt: "Unidade 23 — contraste entre present simple e present continuous.",
    },
    newContent: {
      en: "Grammar: was / were affirmative, negative and questions. Vocabulary: time expressions in the past. Expressions: Yesterday I was... / How was it?",
      pt: "Gramática: was / were afirmativo, negativo e perguntas. Vocabulário: expressões de tempo no passado. Expressões: Yesterday I was... / How was it?",
    },
    reviewContent: {
      en: "Review from Unit 1: to be in the present (am / is / are).",
      pt: "Revisão da Unidade 1: to be no presente (am / is / are).",
    },
    discover: {
      id: "BEGINNER-U24-DISCOVER",
      warmUp: {
        prompt: {
          en: "Look at the picture. An old photo album is open on the table. Where were these people, and how were they feeling?",
          pt: "Observe a imagem. Um álbum de fotos antigo está aberto na mesa. Onde essas pessoas estavam, e como estavam se sentindo?",
        },
        phrases: [
          { en: "Yesterday I was at a family party.", pt: "Ontem eu estava numa festa de família." },
          { en: "We were very happy.", pt: "Estávamos muito felizes." },
          { en: "The weather wasn't good, but the party was great.", pt: "O tempo não estava bom, mas a festa estava ótima." },
        ],
      },
      context: {
        situation: {
          en: "Helena and Ivan look at old photos and talk about a family party from last weekend.",
          pt: "Helena e Ivan olham fotos antigas e falam sobre uma festa de família do fim de semana passado.",
        },
        dialogue: [
          { who: "Helena", en: "Look at this photo! We were at Bruno's birthday party.", pt: "Olha essa foto! Estávamos na festa de aniversário do Bruno." },
          { who: "Ivan", en: "Oh, right! Where was this party?", pt: "Ah, é verdade! Onde foi essa festa?" },
          { who: "Helena", en: "It was at his house. There were about thirty people there.", pt: "Foi na casa dele. Havia umas trinta pessoas lá." },
          { who: "Ivan", en: "Was the food good?", pt: "A comida estava boa?" },
          { who: "Helena", en: "Yes, it was delicious! But the music wasn't very loud.", pt: "Sim, estava deliciosa! Mas a música não estava muito alta." },
          { who: "Ivan", en: "Were you tired after the party?", pt: "Você estava cansada depois da festa?" },
          { who: "Helena", en: "A little, but I was very happy. It was a great night.", pt: "Um pouco, mas eu estava muito feliz. Foi uma noite ótima." },
          { who: "Ivan", en: "I'm sorry I wasn't there!", pt: "Sinto muito por não ter estado lá!" },
        ],
      },
      vocabulary: [
        { term: "yesterday", pt: "ontem", ipa: "/ˈjestərdeɪ/", definition: "The day before today.", example: "Yesterday I was at a party.", examplePt: "Ontem eu estava numa festa." },
        { term: "last night", pt: "ontem à noite", ipa: "/læst naɪt/", definition: "The evening/night before today.", example: "Last night was a great night.", examplePt: "Ontem à noite foi uma noite ótima." },
        { term: "last week", pt: "semana passada", ipa: "/læst wiːk/", definition: "The week before this one.", example: "The party was last week.", examplePt: "A festa foi na semana passada." },
        { term: "party", pt: "festa", ipa: "/ˈpɑːrti/", definition: "A social event, often with music and food.", example: "It was a birthday party.", examplePt: "Foi uma festa de aniversário." },
        { term: "delicious", pt: "delicioso", ipa: "/dɪˈlɪʃəs/", definition: "Very good to eat.", example: "The food was delicious.", examplePt: "A comida estava deliciosa." },
        { term: "loud", pt: "alto (som)", ipa: "/laʊd/", definition: "Making a lot of noise.", example: "The music wasn't loud.", examplePt: "A música não estava alta." },
        { term: "guest", pt: "convidado", ipa: "/ɡest/", definition: "A person invited to an event.", example: "There were thirty guests.", examplePt: "Havia trinta convidados." },
        { term: "happy", pt: "feliz", ipa: "/ˈhæpi/", definition: "Feeling good.", example: "I was very happy.", examplePt: "Eu estava muito feliz." },
        { term: "weekend", pt: "fim de semana", ipa: "/ˈwiːkend/", definition: "Saturday and Sunday.", example: "It happened last weekend.", examplePt: "Aconteceu no fim de semana passado." },
        { term: "great", pt: "ótimo", ipa: "/ɡreɪt/", definition: "Very good.", example: "It was a great night.", examplePt: "Foi uma noite ótima." },
      ],
      expressions: [
        { en: "Yesterday I was...", pt: "Ontem eu estava..." },
        { en: "How was it?", pt: "Como foi?" },
        { en: "It was a great night.", pt: "Foi uma noite ótima." },
        { en: "I'm sorry I wasn't there.", pt: "Sinto muito por não ter estado lá." },
        { en: "There were about thirty people.", pt: "Havia umas trinta pessoas." },
      ],
      grammar: [
        {
          title: { en: "Was / were: affirmative and negative", pt: "Was / were: afirmativo e negativo" },
          examples: [
            { en: "I was at the party. We were very happy.", pt: "Eu estava na festa. Estávamos muito felizes." },
            { en: "The music wasn't very loud.", pt: "A música não estava muito alta." },
            { en: "The guests weren't tired.", pt: "Os convidados não estavam cansados." },
          ],
          rule: {
            en: "Use was with I / he / she / it, and were with you / we / they. Negative: wasn't / weren't.",
            pt: "Use was com I / he / she / it, e were com you / we / they. Negativo: wasn't / weren't.",
          },
          mistakes: [
            { en: "I were at the party. → I was at the party.", pt: "I usa was, não were." },
            { en: "They was tired. → They were tired.", pt: "They usa were, não was." },
          ],
        },
        {
          title: { en: "Was / were: questions with there was / there were", pt: "Was / were: perguntas com there was / there were" },
          examples: [
            { en: "Was the food good?", pt: "A comida estava boa?" },
            { en: "Were you tired after the party?", pt: "Você estava cansada depois da festa?" },
            { en: "There were about thirty people at the party.", pt: "Havia umas trinta pessoas na festa." },
          ],
          rule: {
            en: "Invert: Was/Were + subject...? Use there was (singular) / there were (plural) for past existence.",
            pt: "Inverta: Was/Were + sujeito...? Use there was (singular) / there were (plural) para existência no passado.",
          },
          mistakes: [
            { en: "The food was good? → Was the food good?", pt: "Coloque was/were antes do sujeito." },
            { en: "There was thirty people. → There were thirty people.", pt: "Sujeito plural pede there were." },
          ],
        },
      ],
      controlledPractice: [
        {
          id: "b24d-cp1",
          prompt: { en: "Complete: I ___ at the party yesterday.", pt: "Complete: I ___ at the party yesterday." },
          options: ["was", "were", "am"],
          answer: "was",
          explanation: { en: "I → was.", pt: "I → was." },
        },
        {
          id: "b24d-cp2",
          prompt: { en: "Complete: We ___ very happy.", pt: "Complete: We ___ very happy." },
          options: ["was", "were", "is"],
          answer: "were",
          explanation: { en: "We → were.", pt: "We → were." },
        },
        {
          id: "b24d-cp3",
          prompt: { en: "Negative form: The music was loud.", pt: "Forma negativa: The music was loud." },
          options: ["The music wasn't loud.", "The music weren't loud.", "The music not was loud."],
          answer: "The music wasn't loud.",
          explanation: { en: "was + not = wasn't.", pt: "was + not = wasn't." },
        },
        {
          id: "b24d-cp4",
          prompt: { en: "Question: ___ the food good?", pt: "Pergunta: ___ the food good?" },
          options: ["Was", "Were", "Is"],
          answer: "Was",
          explanation: { en: "the food = it → Was.", pt: "the food = it → Was." },
        },
        {
          id: "b24d-cp5",
          prompt: { en: "Complete: There ___ thirty guests.", pt: "Complete: There ___ thirty guests." },
          options: ["was", "were", "is"],
          answer: "were",
          explanation: { en: "Plural guests → there were.", pt: "Guests plural → there were." },
        },
        {
          id: "b24d-cp6",
          prompt: { en: "Complete: ___ you tired after the party?", pt: "Complete: ___ you tired after the party?" },
          options: ["Was", "Were", "Are"],
          answer: "Were",
          explanation: { en: "you → were.", pt: "you → were." },
        },
        {
          id: "b24d-cp7",
          prompt: { en: "Choose the correct past time expression:", pt: "Escolha a expressão de tempo passado correta:" },
          options: ["every day", "last night", "right now"],
          answer: "last night",
          explanation: { en: "last night refers to the past.", pt: "last night se refere ao passado." },
        },
      ],
      input: {
        kind: "listening",
        title: { en: "Listening — Bruno's birthday party", pt: "Listening — A festa de aniversário do Bruno" },
        lines: [
          { en: "Last weekend was Bruno's birthday party at his house.", pt: "No fim de semana passado foi a festa de aniversário do Bruno na casa dele." },
          { en: "There were about thirty guests, and the food was delicious.", pt: "Havia umas trinta convidados, e a comida estava deliciosa." },
          { en: "The music wasn't very loud, so everyone could talk.", pt: "A música não estava muito alta, então todos podiam conversar." },
          { en: "Helena was very happy, but she was a little tired at the end.", pt: "Helena estava muito feliz, mas ela estava um pouco cansada no final." },
          { en: "Ivan wasn't there, and he was sorry about that.", pt: "Ivan não estava lá, e ele sentiu muito por isso." },
        ],
        questions: [
          {
            id: "b24d-r1",
            prompt: { en: "Whose birthday party was it?", pt: "De quem era a festa de aniversário?" },
            options: ["Bruno's", "Ivan's", "Helena's"],
            answer: "Bruno's",
            explanation: { en: "It was Bruno's birthday party.", pt: "Era a festa de aniversário do Bruno." },
          },
          {
            id: "b24d-r2",
            prompt: { en: "How many guests were there?", pt: "Quantos convidados havia?" },
            options: ["About thirty", "About thirteen", "About three"],
            answer: "About thirty",
            explanation: { en: "There were about thirty guests.", pt: "Havia umas trinta convidados." },
          },
          {
            id: "b24d-r3",
            prompt: { en: "Was the music loud?", pt: "A música estava alta?" },
            options: ["No, it wasn't.", "Yes, it was.", "We don't know."],
            answer: "No, it wasn't.",
            explanation: { en: "The music wasn't very loud.", pt: "A música não estava muito alta." },
          },
          {
            id: "b24d-r4",
            prompt: { en: "Why was Ivan sorry?", pt: "Por que Ivan sentiu muito?" },
            options: ["Because he wasn't at the party", "Because the food wasn't good", "Because he was tired"],
            answer: "Because he wasn't at the party",
            explanation: { en: "Ivan wasn't there.", pt: "Ivan não estava lá." },
          },
        ],
      },
      quickCheck: [
        {
          id: "b24d-qc1",
          prompt: { en: "Complete: She ___ at home yesterday.", pt: "Complete: She ___ at home yesterday." },
          options: ["was", "were", "is"],
          answer: "was",
          explanation: { en: "She → was.", pt: "She → was." },
        },
        {
          id: "b24d-qc2",
          prompt: { en: "Negative: They were at the party.", pt: "Negativa: They were at the party." },
          options: ["They weren't at the party.", "They wasn't at the party.", "They not were at the party."],
          answer: "They weren't at the party.",
          explanation: { en: "were + not = weren't.", pt: "were + not = weren't." },
        },
        {
          id: "b24d-qc3",
          prompt: { en: "Complete: ___ the party fun?", pt: "Complete: ___ the party fun?" },
          options: ["Was", "Were", "Did"],
          answer: "Was",
          explanation: { en: "the party = it → Was.", pt: "the party = it → Was." },
        },
        {
          id: "b24d-qc4",
          prompt: { en: "You ask about a past event. You say:", pt: "Você pergunta sobre um evento passado. Você diz:" },
          options: ["How was it?", "How is it?", "How does it?"],
          answer: "How was it?",
          explanation: { en: "Past question uses was.", pt: "Pergunta no passado usa was." },
        },
      ],
    },
    communicate: {
      id: "BEGINNER-U24-COMMUNICATE",
      review: [
        { en: "Was (I/he/she/it) and were (you/we/they) for the past.", pt: "Was (I/he/she/it) e were (you/we/they) para o passado." },
        { en: "Negative: wasn't / weren't.", pt: "Negativo: wasn't / weren't." },
        { en: "There was / there were for past existence.", pt: "There was / there were para existência no passado." },
      ],
      activities: [
        {
          id: "b24c-a1",
          title: { en: "Yesterday's story", pt: "A história de ontem" },
          instruction: {
            en: "Say where you were yesterday and how you were feeling, in two sentences.",
            pt: "Diga onde você estava ontem e como estava se sentindo, em duas frases.",
          },
          phrases: [
            { en: "Yesterday I was at work all day.", pt: "Ontem eu estava no trabalho o dia todo." },
            { en: "I was a little tired in the evening.", pt: "Eu estava um pouco cansado à noite." },
          ],
          check: [
            {
              id: "b24c-a1q1",
              prompt: { en: "Complete: Yesterday I ___ at work.", pt: "Complete: Yesterday I ___ at work." },
              options: ["was", "were", "am"],
              answer: "was",
              explanation: { en: "I → was.", pt: "I → was." },
            },
          ],
        },
        {
          id: "b24c-a2",
          title: { en: "How was the weekend?", pt: "Como foi o fim de semana?" },
          instruction: {
            en: "Ask a friend how their weekend was, and answer with two details.",
            pt: "Pergunte a um amigo como foi o fim de semana dele, e responda com dois detalhes.",
          },
          phrases: [
            { en: "How was your weekend?", pt: "Como foi seu fim de semana?" },
            { en: "It was great! The weather was sunny.", pt: "Foi ótimo! O tempo estava ensolarado." },
          ],
          check: [
            {
              id: "b24c-a2q1",
              prompt: { en: "Complete: How ___ your weekend?", pt: "Complete: How ___ your weekend?" },
              options: ["was", "were", "is"],
              answer: "was",
              explanation: { en: "weekend = it → was.", pt: "weekend = it → was." },
            },
          ],
        },
        {
          id: "b24c-a3",
          title: { en: "Was it good?", pt: "Foi bom?" },
          instruction: {
            en: "Talk about a party or trip. Say if the food, music and people were good.",
            pt: "Fale sobre uma festa ou viagem. Diga se a comida, a música e as pessoas eram boas.",
          },
          phrases: [
            { en: "The food was delicious, but the music wasn't very good.", pt: "A comida estava deliciosa, mas a música não estava muito boa." },
            { en: "There were a lot of people there.", pt: "Havia muitas pessoas lá." },
          ],
          check: [
            {
              id: "b24c-a3q1",
              prompt: { en: "Complete: There ___ a lot of people.", pt: "Complete: There ___ a lot of people." },
              options: ["was", "were", "is"],
              answer: "were",
              explanation: { en: "Plural people → there were.", pt: "People plural → there were." },
            },
          ],
        },
      ],
      challenge: {
        id: "b24c-challenge",
        title: { en: "Communication Challenge — Talking about yesterday", pt: "Desafio de comunicação — Falando de ontem" },
        instruction: {
          en: "Tell a friend about yesterday: where you were, how you felt, and ask how their day was.",
          pt: "Conte a um amigo sobre ontem: onde você estava, como se sentiu, e pergunte como foi o dia dele.",
        },
        phrases: [
          { en: "Yesterday I was at a family party.", pt: "Ontem eu estava numa festa de família." },
          { en: "I was very happy, but I was tired at the end.", pt: "Eu estava muito feliz, mas estava cansado no final." },
          { en: "How was your day yesterday?", pt: "Como foi seu dia ontem?" },
        ],
        check: [
          {
            id: "b24c-ch1",
            prompt: { en: "Which sentence has NO mistake?", pt: "Qual frase NÃO tem erro?" },
            options: ["We was at the party.", "We were at the party.", "We is at the party."],
            answer: "We were at the party.",
            explanation: { en: "We → were.", pt: "We → were." },
          },
          {
            id: "b24c-ch2",
            prompt: { en: "Negative of: The music was loud.", pt: "Negativa de: The music was loud." },
            options: ["The music wasn't loud.", "The music weren't loud.", "The music didn't loud."],
            answer: "The music wasn't loud.",
            explanation: { en: "was + not = wasn't.", pt: "was + not = wasn't." },
          },
        ],
      },
      lessonReview: {
        summary: {
          en: "You talked about the recent past using was and were.",
          pt: "Você falou do passado recente usando was e were.",
        },
        canDo: [
          { en: "I can use was / were in affirmative and negative sentences.", pt: "Consigo usar was / were em frases afirmativas e negativas." },
          { en: "I can ask questions about the past with was / were.", pt: "Consigo fazer perguntas sobre o passado com was / were." },
          { en: "I can tell a short story about yesterday.", pt: "Consigo contar uma pequena história sobre ontem." },
        ],
        next: {
          en: "Next: narrate past actions with regular verbs ending in -ed.",
          pt: "Próximo: narrar ações passadas com verbos regulares terminados em -ed.",
        },
      },
    },
  },
  {
    code: "BEGINNER-U25",
    number: 25,
    title: "Regular Past — Past simple with -ed",
    titlePt: "Passado regular — Past simple com -ed",
    cefr: "A1",
    objective: {
      en: "Use regular verbs in the past simple (-ed) to narrate completed actions.",
      pt: "Usar verbos regulares no past simple (-ed) para narrar ações concluídas.",
    },
    communicationGoal: {
      en: "You can narrate a short experience with five sentences in the past.",
      pt: "Você consegue narrar uma experiência curta com cinco frases no passado.",
    },
    prerequisites: {
      en: "Unit 24 — past simple of to be (was / were).",
      pt: "Unidade 24 — past simple de to be (was / were).",
    },
    newContent: {
      en: "Grammar: regular past simple affirmative (verb + -ed). Vocabulary: everyday regular verbs. Expressions: Last week I... / And then...",
      pt: "Gramática: past simple regular afirmativo (verbo + -ed). Vocabulário: verbos regulares do cotidiano. Expressões: Last week I... / And then...",
    },
    reviewContent: {
      en: "Review from Unit 24: was / were to set the scene of a story.",
      pt: "Revisão da Unidade 24: was / were para ambientar uma história.",
    },
    discover: {
      id: "BEGINNER-U25-DISCOVER",
      warmUp: {
        prompt: {
          en: "Look at the picture. A person is writing in a diary. What did they do today?",
          pt: "Observe a imagem. Uma pessoa está escrevendo em um diário. O que ela fez hoje?",
        },
        phrases: [
          { en: "Last week I visited my grandmother.", pt: "Semana passada eu visitei minha avó." },
          { en: "I cooked dinner and then I watched a movie.", pt: "Eu cozinhei o jantar e depois assisti a um filme." },
          { en: "She called me in the morning.", pt: "Ela me ligou de manhã." },
        ],
      },
      context: {
        situation: {
          en: "Helena writes in her diary about a busy but nice day last week.",
          pt: "Helena escreve em seu diário sobre um dia agitado mas agradável na semana passada.",
        },
        dialogue: [
          { who: "Helena (diary)", en: "Last Monday I worked from home in the morning.", pt: "Na última segunda-feira eu trabalhei de casa de manhã." },
          { who: "Helena (diary)", en: "I finished my report and then I called Ivan.", pt: "Terminei meu relatório e depois liguei para o Ivan." },
          { who: "Helena (diary)", en: "We talked for thirty minutes about the new project.", pt: "Conversamos por trinta minutos sobre o novo projeto." },
          { who: "Helena (diary)", en: "In the afternoon, I walked to the market and I bought some fruit.", pt: "À tarde, caminhei até o mercado e comprei algumas frutas." },
          { who: "Helena (diary)", en: "Later, I cooked dinner for my family.", pt: "Mais tarde, cozinhei o jantar para minha família." },
          { who: "Helena (diary)", en: "After that, I cleaned the kitchen and I watched a movie.", pt: "Depois disso, limpei a cozinha e assisti a um filme." },
          { who: "Helena (diary)", en: "I studied English for twenty minutes before bed.", pt: "Estudei inglês por vinte minutos antes de dormir." },
        ],
      },
      vocabulary: [
        { term: "work (v.)", pt: "trabalhar", ipa: "/wɜːrk/", definition: "To do a job or task.", example: "I worked from home.", examplePt: "Eu trabalhei de casa." },
        { term: "finish", pt: "terminar", ipa: "/ˈfɪnɪʃ/", definition: "To complete something.", example: "I finished my report.", examplePt: "Terminei meu relatório." },
        { term: "call (v.)", pt: "ligar", ipa: "/kɔːl/", definition: "To phone someone.", example: "I called Ivan.", examplePt: "Liguei para o Ivan." },
        { term: "talk", pt: "conversar", ipa: "/tɔːk/", definition: "To speak with someone.", example: "We talked for thirty minutes.", examplePt: "Conversamos por trinta minutos." },
        { term: "walk (v.)", pt: "caminhar", ipa: "/wɔːk/", definition: "To go on foot.", example: "I walked to the market.", examplePt: "Caminhei até o mercado." },
        { term: "cook (v.)", pt: "cozinhar", ipa: "/kʊk/", definition: "To prepare food.", example: "I cooked dinner.", examplePt: "Cozinhei o jantar." },
        { term: "clean (v.)", pt: "limpar", ipa: "/kliːn/", definition: "To make something tidy.", example: "I cleaned the kitchen.", examplePt: "Limpei a cozinha." },
        { term: "watch (v.)", pt: "assistir", ipa: "/wɑːtʃ/", definition: "To look at something for a while.", example: "I watched a movie.", examplePt: "Assisti a um filme." },
        { term: "study (v.)", pt: "estudar", ipa: "/ˈstʌdi/", definition: "To learn about something.", example: "I studied English.", examplePt: "Estudei inglês." },
        { term: "visit", pt: "visitar", ipa: "/ˈvɪzɪt/", definition: "To go and see someone or a place.", example: "I visited my grandmother.", examplePt: "Visitei minha avó." },
      ],
      expressions: [
        { en: "Last week I...", pt: "Semana passada eu..." },
        { en: "And then...", pt: "E depois..." },
        { en: "After that...", pt: "Depois disso..." },
        { en: "It was a busy day.", pt: "Foi um dia agitado." },
        { en: "Before bed, I...", pt: "Antes de dormir, eu..." },
      ],
      grammar: [
        {
          title: { en: "Regular past simple: -ed", pt: "Past simple regular: -ed" },
          examples: [
            { en: "I worked from home.", pt: "Eu trabalhei de casa." },
            { en: "I finished my report.", pt: "Terminei meu relatório." },
            { en: "I studied English before bed.", pt: "Estudei inglês antes de dormir." },
          ],
          rule: {
            en: "Add -ed to regular verbs. Verbs ending in -e add only -d. Verbs ending in consonant + y change y to ied.",
            pt: "Acrescente -ed aos verbos regulares. Verbos terminados em -e recebem só -d. Verbos terminados em consoante + y trocam y por ied.",
          },
          mistakes: [
            { en: "I studyed English. → I studied English.", pt: "Consoante + y vira ied." },
            { en: "I liveed here. → I lived here.", pt: "Verbo terminado em -e recebe só -d." },
          ],
        },
        {
          title: { en: "Sequencing a story", pt: "Sequenciando uma história" },
          examples: [
            { en: "First, I finished my report. Then, I called Ivan.", pt: "Primeiro, terminei meu relatório. Depois, liguei para o Ivan." },
            { en: "After that, I cleaned the kitchen.", pt: "Depois disso, limpei a cozinha." },
            { en: "Later, I studied English.", pt: "Mais tarde, estudei inglês." },
          ],
          rule: {
            en: "Use first / then / after that / later to organize actions in the order they happened.",
            pt: "Use first / then / after that / later para organizar as ações na ordem em que aconteceram.",
          },
          mistakes: [
            { en: "I called Ivan, first I finished my report. → First, I finished my report. Then, I called Ivan.", pt: "Mantenha a ordem cronológica dos conectores." },
          ],
        },
      ],
      controlledPractice: [
        {
          id: "b25d-cp1",
          prompt: { en: "Past of 'work':", pt: "Passado de 'work':" },
          options: ["worked", "workied", "workd"],
          answer: "worked",
          explanation: { en: "work → worked.", pt: "work → worked." },
        },
        {
          id: "b25d-cp2",
          prompt: { en: "Past of 'study':", pt: "Passado de 'study':" },
          options: ["studyed", "studied", "studed"],
          answer: "studied",
          explanation: { en: "Consonant + y → ied.", pt: "Consoante + y → ied." },
        },
        {
          id: "b25d-cp3",
          prompt: { en: "Past of 'live':", pt: "Passado de 'live':" },
          options: ["liveed", "lived", "livd"],
          answer: "lived",
          explanation: { en: "Verb ending in -e adds only -d.", pt: "Verbo terminado em -e recebe só -d." },
        },
        {
          id: "b25d-cp4",
          prompt: { en: "Complete: I ___ my report yesterday.", pt: "Complete: I ___ my report yesterday." },
          options: ["finish", "finished", "finishes"],
          answer: "finished",
          explanation: { en: "yesterday → past simple.", pt: "yesterday → past simple." },
        },
        {
          id: "b25d-cp5",
          prompt: { en: "Complete: We ___ for thirty minutes.", pt: "Complete: We ___ for thirty minutes." },
          options: ["talk", "talked", "talks"],
          answer: "talked",
          explanation: { en: "Completed action in the past.", pt: "Ação concluída no passado." },
        },
        {
          id: "b25d-cp6",
          prompt: { en: "Which connector introduces the first action?", pt: "Qual conector introduz a primeira ação?" },
          options: ["First", "Later", "After that"],
          answer: "First",
          explanation: { en: "First starts the sequence.", pt: "First inicia a sequência." },
        },
        {
          id: "b25d-cp7",
          prompt: { en: "Past of 'clean':", pt: "Passado de 'clean':" },
          options: ["cleaned", "cleanned", "cleand"],
          answer: "cleaned",
          explanation: { en: "clean → cleaned.", pt: "clean → cleaned." },
        },
        {
          id: "b25d-cp8",
          prompt: { en: "Past of 'walk':", pt: "Passado de 'walk':" },
          options: ["walkied", "walked", "walkd"],
          answer: "walked",
          explanation: { en: "walk → walked.", pt: "walk → walked." },
        },
      ],
      input: {
        kind: "reading",
        title: { en: "Reading — Helena's diary", pt: "Reading — O diário da Helena" },
        lines: [
          { en: "Last Monday, Helena worked from home in the morning.", pt: "Na última segunda-feira, Helena trabalhou de casa de manhã." },
          { en: "She finished her report and then she called Ivan.", pt: "Ela terminou o relatório e depois ligou para o Ivan." },
          { en: "In the afternoon, she walked to the market and bought some fruit.", pt: "À tarde, ela caminhou até o mercado e comprou algumas frutas." },
          { en: "Later, she cooked dinner and cleaned the kitchen.", pt: "Mais tarde, ela cozinhou o jantar e limpou a cozinha." },
          { en: "Before bed, she studied English for twenty minutes.", pt: "Antes de dormir, ela estudou inglês por vinte minutos." },
        ],
        questions: [
          {
            id: "b25d-r1",
            prompt: { en: "What did Helena do first?", pt: "O que Helena fez primeiro?" },
            options: ["She worked from home", "She cooked dinner", "She studied English"],
            answer: "She worked from home",
            explanation: { en: "In the morning she worked from home.", pt: "De manhã ela trabalhou de casa." },
          },
          {
            id: "b25d-r2",
            prompt: { en: "Who did she call?", pt: "Para quem ela ligou?" },
            options: ["Ivan", "Bruno", "Her grandmother"],
            answer: "Ivan",
            explanation: { en: "She called Ivan.", pt: "Ela ligou para o Ivan." },
          },
          {
            id: "b25d-r3",
            prompt: { en: "What did she buy at the market?", pt: "O que ela comprou no mercado?" },
            options: ["Fruit", "Bread", "Vegetables"],
            answer: "Fruit",
            explanation: { en: "She bought some fruit.", pt: "Ela comprou algumas frutas." },
          },
          {
            id: "b25d-r4",
            prompt: { en: "What did she do before bed?", pt: "O que ela fez antes de dormir?" },
            options: ["She studied English", "She cleaned the kitchen", "She called Ivan"],
            answer: "She studied English",
            explanation: { en: "Before bed, she studied English.", pt: "Antes de dormir, ela estudou inglês." },
          },
        ],
      },
      quickCheck: [
        {
          id: "b25d-qc1",
          prompt: { en: "Past of 'visit':", pt: "Passado de 'visit':" },
          options: ["visited", "visitted", "visitied"],
          answer: "visited",
          explanation: { en: "visit → visited.", pt: "visit → visited." },
        },
        {
          id: "b25d-qc2",
          prompt: { en: "Complete: She ___ dinner last night.", pt: "Complete: She ___ dinner last night." },
          options: ["cook", "cooked", "cooks"],
          answer: "cooked",
          explanation: { en: "last night → past simple.", pt: "last night → past simple." },
        },
        {
          id: "b25d-qc3",
          prompt: { en: "Complete: ___ that, I cleaned the kitchen.", pt: "Complete: ___ that, I cleaned the kitchen." },
          options: ["After", "First", "Before"],
          answer: "After",
          explanation: { en: "After that = next in sequence.", pt: "After that = próximo na sequência." },
        },
        {
          id: "b25d-qc4",
          prompt: { en: "You want to narrate a past action. You say:", pt: "Você quer narrar uma ação passada. Você diz:" },
          options: ["Last week I visited my grandmother.", "Every week I visit my grandmother.", "I'm visiting my grandmother."],
          answer: "Last week I visited my grandmother.",
          explanation: { en: "Last week + past simple.", pt: "Last week + past simple." },
        },
      ],
    },
    communicate: {
      id: "BEGINNER-U25-COMMUNICATE",
      review: [
        { en: "Regular past simple: verb + -ed.", pt: "Past simple regular: verbo + -ed." },
        { en: "Spelling: -e + d, consonant + y → ied.", pt: "Ortografia: -e + d, consoante + y → ied." },
        { en: "Sequencing words: first, then, after that, later.", pt: "Palavras de sequência: first, then, after that, later." },
      ],
      activities: [
        {
          id: "b25c-a1",
          title: { en: "My last weekend", pt: "Meu último fim de semana" },
          instruction: {
            en: "Say three things you did last weekend, in the order they happened.",
            pt: "Diga três coisas que você fez no último fim de semana, na ordem em que aconteceram.",
          },
          phrases: [
            { en: "Last weekend I cleaned my house and cooked lunch.", pt: "No último fim de semana limpei minha casa e cozinhei o almoço." },
            { en: "Then I called my grandmother.", pt: "Depois liguei para minha avó." },
          ],
          check: [
            {
              id: "b25c-a1q1",
              prompt: { en: "Complete: Last weekend I ___ my house.", pt: "Complete: Last weekend I ___ my house." },
              options: ["clean", "cleaned", "cleans"],
              answer: "cleaned",
              explanation: { en: "Last weekend → past simple.", pt: "Last weekend → past simple." },
            },
          ],
        },
        {
          id: "b25c-a2",
          title: { en: "A busy day", pt: "Um dia agitado" },
          instruction: {
            en: "Narrate five actions from a busy day using first, then, after that and later.",
            pt: "Narre cinco ações de um dia agitado usando first, then, after that e later.",
          },
          phrases: [
            { en: "First, I worked from home.", pt: "Primeiro, trabalhei de casa." },
            { en: "After that, I walked to the market.", pt: "Depois disso, caminhei até o mercado." },
          ],
          check: [
            {
              id: "b25c-a2q1",
              prompt: { en: "Which word starts a sequence?", pt: "Qual palavra inicia uma sequência?" },
              options: ["First", "Later", "After that"],
              answer: "First",
              explanation: { en: "First = the beginning.", pt: "First = o início." },
            },
          ],
        },
        {
          id: "b25c-a3",
          title: { en: "Tell a friend's story", pt: "Conte a história de um amigo" },
          instruction: {
            en: "Retell what a friend did yesterday, using at least three regular past verbs.",
            pt: "Reconte o que um amigo fez ontem, usando pelo menos três verbos regulares no passado.",
          },
          phrases: [
            { en: "She studied English and then she watched a movie.", pt: "Ela estudou inglês e depois assistiu a um filme." },
            { en: "She called her mother in the evening.", pt: "Ela ligou para a mãe dela à noite." },
          ],
          check: [
            {
              id: "b25c-a3q1",
              prompt: { en: "Complete: She ___ a movie.", pt: "Complete: She ___ a movie." },
              options: ["watch", "watched", "watches"],
              answer: "watched",
              explanation: { en: "Past simple regular.", pt: "Past simple regular." },
            },
          ],
        },
      ],
      challenge: {
        id: "b25c-challenge",
        title: { en: "Communication Challenge — Yesterday's story", pt: "Desafio de comunicação — A história de ontem" },
        instruction: {
          en: "Narrate five things you did yesterday, in order, using first, then, after that and later.",
          pt: "Narre cinco coisas que você fez ontem, em ordem, usando first, then, after that e later.",
        },
        phrases: [
          { en: "First, I worked from home.", pt: "Primeiro, trabalhei de casa." },
          { en: "Then, I called a friend and we talked for thirty minutes.", pt: "Depois, liguei para um amigo e conversamos por trinta minutos." },
          { en: "After that, I cooked dinner and cleaned the kitchen.", pt: "Depois disso, cozinhei o jantar e limpei a cozinha." },
          { en: "Later, I studied English before bed.", pt: "Mais tarde, estudei inglês antes de dormir." },
        ],
        check: [
          {
            id: "b25c-ch1",
            prompt: { en: "Which sentence has NO mistake?", pt: "Qual frase NÃO tem erro?" },
            options: ["I studyed English.", "I studied English.", "I studies English."],
            answer: "I studied English.",
            explanation: { en: "Consonant + y → ied.", pt: "Consoante + y → ied." },
          },
          {
            id: "b25c-ch2",
            prompt: { en: "Which word means 'depois disso'?", pt: "Qual palavra significa 'depois disso'?" },
            options: ["First", "After that", "Yesterday"],
            answer: "After that",
            explanation: { en: "After that = depois disso.", pt: "After that = depois disso." },
          },
        ],
      },
      lessonReview: {
        summary: {
          en: "You narrated past actions using regular verbs ending in -ed.",
          pt: "Você narrou ações passadas usando verbos regulares terminados em -ed.",
        },
        canDo: [
          { en: "I can form regular past simple verbs correctly.", pt: "Consigo formar verbos regulares no past simple corretamente." },
          { en: "I can sequence a story with first, then, after that, later.", pt: "Consigo sequenciar uma história com first, then, after that, later." },
          { en: "I can narrate five actions from yesterday.", pt: "Consigo narrar cinco ações de ontem." },
        ],
        next: {
          en: "Next: ask and answer questions about the past with did / didn't.",
          pt: "Próximo: perguntar e responder sobre o passado com did / didn't.",
        },
      },
    },
  },
  {
    code: "BEGINNER-U26",
    number: 26,
    title: "Did You...? — Past questions and negatives",
    titlePt: "Did You...? — Perguntas e negativas no passado",
    cefr: "A1",
    objective: {
      en: "Form past simple questions and negatives with did / didn't and the base verb.",
      pt: "Formar perguntas e negativas no past simple com did / didn't e o verbo na forma base.",
    },
    communicationGoal: {
      en: "You can ask eight questions to interview someone about their weekend.",
      pt: "Você consegue fazer oito perguntas para entrevistar alguém sobre o fim de semana.",
    },
    prerequisites: {
      en: "Unit 25 — regular past simple affirmative.",
      pt: "Unidade 25 — past simple regular afirmativo.",
    },
    newContent: {
      en: "Grammar: did / didn't + base verb for questions and negatives. Vocabulary: weekend activities. Expressions: Did you go...? / What happened?",
      pt: "Gramática: did / didn't + verbo na forma base para perguntas e negativas. Vocabulário: atividades de fim de semana. Expressões: Did you go...? / What happened?",
    },
    reviewContent: {
      en: "Sequence review: units 22 to 25, present continuous and past simple.",
      pt: "Revisão de sequência: unidades 22 a 25, present continuous e past simple.",
    },
    discover: {
      id: "BEGINNER-U26-DISCOVER",
      warmUp: {
        prompt: {
          en: "Look at the picture. Two friends are talking at a café on Monday morning. What do you think they are asking each other?",
          pt: "Observe a imagem. Dois amigos conversam em um café na manhã de segunda-feira. O que você acha que eles estão perguntando um ao outro?",
        },
        phrases: [
          { en: "Did you go out this weekend?", pt: "Você saiu neste fim de semana?" },
          { en: "I didn't go out. I stayed home.", pt: "Eu não saí. Fiquei em casa." },
          { en: "What happened at the party?", pt: "O que aconteceu na festa?" },
        ],
      },
      context: {
        situation: {
          en: "Bruno meets Helena at a café on Monday morning and asks about her weekend.",
          pt: "Bruno encontra Helena num café na manhã de segunda-feira e pergunta sobre o fim de semana dela.",
        },
        dialogue: [
          { who: "Bruno", en: "Hi, Helena! Did you have a good weekend?", pt: "Oi, Helena! Você teve um bom fim de semana?" },
          { who: "Helena", en: "Yes, I did! I visited my parents in the countryside.", pt: "Sim, tive! Visitei meus pais no interior." },
          { who: "Bruno", en: "Nice! Did you travel by car or by bus?", pt: "Legal! Você viajou de carro ou de ônibus?" },
          { who: "Helena", en: "I traveled by car with my sister. What about you?", pt: "Eu viajei de carro com minha irmã. E você?" },
          { who: "Bruno", en: "I didn't travel. I stayed in the city and I played football with friends.", pt: "Eu não viajei. Fiquei na cidade e joguei futebol com amigos." },
          { who: "Helena", en: "Did your team win?", pt: "Seu time ganhou?" },
          { who: "Bruno", en: "No, we didn't win. We played for two hours, but we lost.", pt: "Não, não ganhamos. Jogamos por duas horas, mas perdemos." },
          { who: "Helena", en: "That's too bad! What happened after the game?", pt: "Que pena! O que aconteceu depois do jogo?" },
        ],
      },
      vocabulary: [
        { term: "weekend", pt: "fim de semana", ipa: "/ˈwiːkend/", definition: "Saturday and Sunday.", example: "Did you have a good weekend?", examplePt: "Você teve um bom fim de semana?" },
        { term: "countryside", pt: "interior, campo", ipa: "/ˈkʌntrisaɪd/", definition: "Land away from the city.", example: "I visited my parents in the countryside.", examplePt: "Visitei meus pais no interior." },
        { term: "travel (v.)", pt: "viajar", ipa: "/ˈtrævl̩/", definition: "To go from one place to another.", example: "I traveled by car.", examplePt: "Eu viajei de carro." },
        { term: "stay", pt: "ficar", ipa: "/steɪ/", definition: "To remain in a place.", example: "I stayed in the city.", examplePt: "Fiquei na cidade." },
        { term: "play (v.)", pt: "jogar", ipa: "/pleɪ/", definition: "To take part in a game or sport.", example: "I played football with friends.", examplePt: "Joguei futebol com amigos." },
        { term: "win (v.)", pt: "ganhar", ipa: "/wɪn/", definition: "To succeed in a game.", example: "Did your team win?", examplePt: "Seu time ganhou?" },
        { term: "lose (v.)", pt: "perder", ipa: "/luːz/", definition: "To not win.", example: "We lost the game.", examplePt: "Perdemos o jogo." },
        { term: "happen", pt: "acontecer", ipa: "/ˈhæpən/", definition: "To take place; to occur.", example: "What happened after the game?", examplePt: "O que aconteceu depois do jogo?" },
        { term: "team", pt: "time", ipa: "/tiːm/", definition: "A group that plays together.", example: "My team lost.", examplePt: "Meu time perdeu." },
        { term: "go out", pt: "sair", ipa: "/ɡoʊ aʊt/", definition: "To leave home for fun.", example: "Did you go out this weekend?", examplePt: "Você saiu neste fim de semana?" },
      ],
      expressions: [
        { en: "Did you go...?", pt: "Você foi/saiu...?" },
        { en: "What happened?", pt: "O que aconteceu?" },
        { en: "That's too bad!", pt: "Que pena!" },
        { en: "I didn't...", pt: "Eu não..." },
        { en: "What about you?", pt: "E você?" },
      ],
      grammar: [
        {
          title: { en: "Past simple negative: didn't + base verb", pt: "Past simple negativo: didn't + verbo base" },
          examples: [
            { en: "I didn't travel this weekend.", pt: "Eu não viajei neste fim de semana." },
            { en: "We didn't win the game.", pt: "Não ganhamos o jogo." },
            { en: "She didn't call me yesterday.", pt: "Ela não me ligou ontem." },
          ],
          rule: {
            en: "Use didn't (did not) + base verb for all subjects. Never add -ed after didn't.",
            pt: "Use didn't (did not) + verbo na forma base para todos os sujeitos. Nunca acrescente -ed depois de didn't.",
          },
          mistakes: [
            { en: "I didn't traveled. → I didn't travel.", pt: "Depois de didn't, o verbo volta à forma base." },
            { en: "She don't called. → She didn't call.", pt: "No passado, use didn't, não don't." },
          ],
        },
        {
          title: { en: "Past simple questions: Did + subject + base verb?", pt: "Perguntas no past simple: Did + sujeito + verbo base?" },
          examples: [
            { en: "Did you have a good weekend?", pt: "Você teve um bom fim de semana?" },
            { en: "Did your team win?", pt: "Seu time ganhou?" },
            { en: "What happened after the game?", pt: "O que aconteceu depois do jogo?" },
          ],
          rule: {
            en: "Use Did + subject + base verb for yes/no questions. Use a wh- word before did for information questions.",
            pt: "Use Did + sujeito + verbo base para perguntas de sim/não. Use uma palavra wh- antes de did para perguntas de informação.",
          },
          mistakes: [
            { en: "Did you traveled? → Did you travel?", pt: "Depois de did, o verbo fica na forma base." },
            { en: "You did travel? → Did you travel?", pt: "Did vem antes do sujeito." },
          ],
        },
      ],
      controlledPractice: [
        {
          id: "b26d-cp1",
          prompt: { en: "Complete: ___ you have a good weekend?", pt: "Complete: ___ you have a good weekend?" },
          options: ["Do", "Did", "Are"],
          answer: "Did",
          explanation: { en: "Past question → Did.", pt: "Pergunta no passado → Did." },
        },
        {
          id: "b26d-cp2",
          prompt: { en: "Complete: I ___ travel this weekend.", pt: "Complete: I ___ travel this weekend." },
          options: ["don't", "didn't", "not"],
          answer: "didn't",
          explanation: { en: "Past negative → didn't.", pt: "Negativa no passado → didn't." },
        },
        {
          id: "b26d-cp3",
          prompt: { en: "Correct question: Did you ___ football?", pt: "Pergunta correta: Did you ___ football?" },
          options: ["played", "play", "plays"],
          answer: "play",
          explanation: { en: "After did, use the base verb.", pt: "Depois de did, use o verbo na forma base." },
        },
        {
          id: "b26d-cp4",
          prompt: { en: "Correct negative: We ___ win the game.", pt: "Negativa correta: We ___ win the game." },
          options: ["didn't", "don't", "doesn't"],
          answer: "didn't",
          explanation: { en: "Past negative → didn't.", pt: "Negativa no passado → didn't." },
        },
        {
          id: "b26d-cp5",
          prompt: { en: "Which question asks about an event?", pt: "Qual pergunta é sobre um evento?" },
          options: ["What happened?", "What happens?", "What is happening?"],
          answer: "What happened?",
          explanation: { en: "Past event → What happened?", pt: "Evento passado → What happened?" },
        },
        {
          id: "b26d-cp6",
          prompt: { en: "Complete: Did your team ___?", pt: "Complete: Did your team ___?" },
          options: ["won", "win", "wins"],
          answer: "win",
          explanation: { en: "Base verb after did.", pt: "Verbo base depois de did." },
        },
        {
          id: "b26d-cp7",
          prompt: { en: "Short answer for 'Did you go out?': Yes, I ___.", pt: "Resposta curta para 'Did you go out?': Yes, I ___." },
          options: ["do", "did", "went"],
          answer: "did",
          explanation: { en: "Short answers use did / didn't.", pt: "Respostas curtas usam did / didn't." },
        },
      ],
      input: {
        kind: "listening",
        title: { en: "Listening — Monday morning at the café", pt: "Listening — Segunda-feira de manhã no café" },
        lines: [
          { en: "Helena visited her parents in the countryside this weekend.", pt: "Helena visitou os pais dela no interior neste fim de semana." },
          { en: "She traveled by car with her sister.", pt: "Ela viajou de carro com a irmã." },
          { en: "Bruno didn't travel. He stayed in the city.", pt: "Bruno não viajou. Ele ficou na cidade." },
          { en: "He played football with friends for two hours, but his team lost.", pt: "Ele jogou futebol com amigos por duas horas, mas o time dele perdeu." },
          { en: "Helena asked him what happened after the game.", pt: "Helena perguntou a ele o que aconteceu depois do jogo." },
        ],
        questions: [
          {
            id: "b26d-r1",
            prompt: { en: "Where did Helena go?", pt: "Aonde Helena foi?" },
            options: ["To the countryside", "To a football game", "To the city center"],
            answer: "To the countryside",
            explanation: { en: "She visited her parents in the countryside.", pt: "Ela visitou os pais no interior." },
          },
          {
            id: "b26d-r2",
            prompt: { en: "How did she travel?", pt: "Como ela viajou?" },
            options: ["By car", "By bus", "By plane"],
            answer: "By car",
            explanation: { en: "She traveled by car.", pt: "Ela viajou de carro." },
          },
          {
            id: "b26d-r3",
            prompt: { en: "Did Bruno travel this weekend?", pt: "Bruno viajou neste fim de semana?" },
            options: ["No, he didn't.", "Yes, he did.", "We don't know."],
            answer: "No, he didn't.",
            explanation: { en: "Bruno didn't travel; he stayed in the city.", pt: "Bruno não viajou; ele ficou na cidade." },
          },
          {
            id: "b26d-r4",
            prompt: { en: "Did Bruno's team win?", pt: "O time do Bruno ganhou?" },
            options: ["No, they lost.", "Yes, they won.", "The game didn't happen."],
            answer: "No, they lost.",
            explanation: { en: "His team lost.", pt: "O time dele perdeu." },
          },
        ],
      },
      quickCheck: [
        {
          id: "b26d-qc1",
          prompt: { en: "Complete: ___ she call you yesterday?", pt: "Complete: ___ she call you yesterday?" },
          options: ["Did", "Does", "Is"],
          answer: "Did",
          explanation: { en: "Past question → Did.", pt: "Pergunta no passado → Did." },
        },
        {
          id: "b26d-qc2",
          prompt: { en: "Complete: He ___ stay home. He went out.", pt: "Complete: He ___ stay home. He went out." },
          options: ["doesn't", "didn't", "isn't"],
          answer: "didn't",
          explanation: { en: "Past negative → didn't.", pt: "Negativa no passado → didn't." },
        },
        {
          id: "b26d-qc3",
          prompt: { en: "Correct form: Did you ___ the game?", pt: "Forma correta: Did you ___ the game?" },
          options: ["watched", "watch", "watches"],
          answer: "watch",
          explanation: { en: "Base verb after did.", pt: "Verbo base depois de did." },
        },
        {
          id: "b26d-qc4",
          prompt: { en: "You want to know about a past event. You ask:", pt: "Você quer saber sobre um evento passado. Você pergunta:" },
          options: ["What happened?", "What happens?", "What is happening?"],
          answer: "What happened?",
          explanation: { en: "Past event → What happened?", pt: "Evento passado → What happened?" },
        },
      ],
    },
    communicate: {
      id: "BEGINNER-U26-COMMUNICATE",
      review: [
        { en: "Did + subject + base verb for past questions.", pt: "Did + sujeito + verbo base para perguntas no passado." },
        { en: "Didn't + base verb for past negatives.", pt: "Didn't + verbo base para negativas no passado." },
        { en: "Short answers: Yes, I did. / No, I didn't.", pt: "Respostas curtas: Yes, I did. / No, I didn't." },
      ],
      activities: [
        {
          id: "b26c-a1",
          title: { en: "Weekend interview", pt: "Entrevista sobre o fim de semana" },
          instruction: {
            en: "Ask a partner three questions about their weekend using did.",
            pt: "Faça a um parceiro três perguntas sobre o fim de semana dele usando did.",
          },
          phrases: [
            { en: "Did you go out this weekend?", pt: "Você saiu neste fim de semana?" },
            { en: "Did you travel anywhere?", pt: "Você viajou para algum lugar?" },
          ],
          check: [
            {
              id: "b26c-a1q1",
              prompt: { en: "Complete: ___ you go out?", pt: "Complete: ___ you go out?" },
              options: ["Did", "Do", "Are"],
              answer: "Did",
              explanation: { en: "Past question → Did.", pt: "Pergunta no passado → Did." },
            },
          ],
        },
        {
          id: "b26c-a2",
          title: { en: "What you didn't do", pt: "O que você não fez" },
          instruction: {
            en: "Say two things you didn't do last weekend.",
            pt: "Diga duas coisas que você não fez no fim de semana passado.",
          },
          phrases: [
            { en: "I didn't study on Saturday.", pt: "Eu não estudei no sábado." },
            { en: "I didn't watch TV.", pt: "Eu não assisti TV." },
          ],
          check: [
            {
              id: "b26c-a2q1",
              prompt: { en: "Complete: I ___ study on Saturday.", pt: "Complete: I ___ study on Saturday." },
              options: ["don't", "didn't", "not"],
              answer: "didn't",
              explanation: { en: "Past negative → didn't.", pt: "Negativa no passado → didn't." },
            },
          ],
        },
        {
          id: "b26c-a3",
          title: { en: "What happened?", pt: "O que aconteceu?" },
          instruction: {
            en: "Ask about an event and react with 'That's too bad!' or 'That's great!'.",
            pt: "Pergunte sobre um evento e reaja com 'That's too bad!' ou 'That's great!'.",
          },
          phrases: [
            { en: "What happened at the game?", pt: "O que aconteceu no jogo?" },
            { en: "We lost. — That's too bad!", pt: "Perdemos. — Que pena!" },
          ],
          check: [
            {
              id: "b26c-a3q1",
              prompt: { en: "Which question asks about a past event?", pt: "Qual pergunta é sobre um evento passado?" },
              options: ["What happened?", "What happens?", "What will happen?"],
              answer: "What happened?",
              explanation: { en: "Past simple question.", pt: "Pergunta no past simple." },
            },
          ],
        },
      ],
      challenge: {
        id: "b26c-challenge",
        title: { en: "Communication Challenge — Monday morning catch-up", pt: "Desafio de comunicação — Conversa de segunda-feira" },
        instruction: {
          en: "Interview a friend about the weekend: ask six questions with did, react to the answers, and share one thing you didn't do.",
          pt: "Entreviste um amigo sobre o fim de semana: faça seis perguntas com did, reaja às respostas e compartilhe uma coisa que você não fez.",
        },
        phrases: [
          { en: "Did you have a good weekend?", pt: "Você teve um bom fim de semana?" },
          { en: "Did you travel or stay in the city?", pt: "Você viajou ou ficou na cidade?" },
          { en: "What happened at the party?", pt: "O que aconteceu na festa?" },
          { en: "I didn't go out. I stayed home and studied.", pt: "Eu não saí. Fiquei em casa e estudei." },
        ],
        check: [
          {
            id: "b26c-ch1",
            prompt: { en: "Which sentence has NO mistake?", pt: "Qual frase NÃO tem erro?" },
            options: ["Did you traveled?", "Did you travel?", "You did travel?"],
            answer: "Did you travel?",
            explanation: { en: "Did + subject + base verb.", pt: "Did + sujeito + verbo base." },
          },
          {
            id: "b26c-ch2",
            prompt: { en: "Correct negative form:", pt: "Forma negativa correta:" },
            options: ["I didn't went out.", "I didn't go out.", "I don't went out."],
            answer: "I didn't go out.",
            explanation: { en: "didn't + base verb.", pt: "didn't + verbo base." },
          },
        ],
      },
      lessonReview: {
        summary: {
          en: "You asked and answered questions about the past with did and didn't.",
          pt: "Você perguntou e respondeu sobre o passado com did e didn't.",
        },
        canDo: [
          { en: "I can form past simple questions with did.", pt: "Consigo formar perguntas no past simple com did." },
          { en: "I can form past simple negatives with didn't.", pt: "Consigo formar negativas no past simple com didn't." },
          { en: "I can interview someone about their weekend.", pt: "Consigo entrevistar alguém sobre o fim de semana." },
        ],
        next: {
          en: "Next: talk about future plans with going to.",
          pt: "Próximo: falar de planos futuros com going to.",
        },
      },
    },
  },
];
