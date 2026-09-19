import type { CourseUnit } from "./types";

/**
 * Unidades 17–21 (Bloco D — Preferences & needs) do currículo Beginner
 * Speak2Co. Conteúdo 100% autoral, seguindo o padrão de
 * src/lib/curriculum/beginner-units-2.ts (Unidade 5) como modelo de forma.
 */
export const BEGINNER_UNITS_17_21: CourseUnit[] = [
  {
    code: "BEGINNER-U17",
    number: 17,
    title: "I Like, I Prefer — Like and prefer",
    titlePt: "Eu gosto, eu prefiro — Like e prefer",
    cefr: "A1",
    objective: {
      en: "Use like and prefer with -ing and with infinitive forms to talk about free-time activities.",
      pt: "Usar like e prefer com -ing e com infinitivo para falar de atividades de lazer.",
    },
    communicationGoal: {
      en: "You can use eight sentences about your likes and preferences.",
      pt: "Você consegue usar oito frases sobre seus gostos e preferências.",
    },
    prerequisites: {
      en: "Unit 16 — closing of Block C, places and abilities with can/can't.",
      pt: "Unidade 16 — fechamento do Bloco C, lugares e habilidades com can/can't.",
    },
    newContent: {
      en: "Grammar: like/prefer + -ing; prefer X to Y. Vocabulary: leisure activities. Expressions: What about you?",
      pt: "Gramática: like/prefer + -ing; prefer X to Y. Vocabulário: atividades de lazer. Expressões: What about you?",
    },
    reviewContent: {
      en: "Review from Units 12–16: there is/are, can/can't, prepositions of place.",
      pt: "Revisão das Unidades 12–16: there is/are, can/can't, preposições de lugar.",
    },
    discover: {
      id: "BEGINNER-U17-DISCOVER",
      warmUp: {
        prompt: {
          en: "Look at the picture. People are doing different things in their free time. What do you like doing?",
          pt: "Observe a imagem. As pessoas fazem coisas diferentes no tempo livre. O que você gosta de fazer?",
        },
        phrases: [
          { en: "I like watching movies.", pt: "Eu gosto de assistir a filmes." },
          { en: "I prefer reading books.", pt: "Eu prefiro ler livros." },
          { en: "We like playing soccer on weekends.", pt: "Nós gostamos de jogar futebol nos fins de semana." },
        ],
      },
      context: {
        situation: {
          en: "Bruno and Ivan talk about what they like doing on weekends.",
          pt: "Bruno e Ivan conversam sobre o que gostam de fazer nos fins de semana.",
        },
        dialogue: [
          { who: "Bruno", en: "What do you like doing on weekends, Ivan?", pt: "O que você gosta de fazer nos fins de semana, Ivan?" },
          { who: "Ivan", en: "I like playing soccer with friends. And you?", pt: "Eu gosto de jogar futebol com amigos. E você?" },
          { who: "Bruno", en: "I prefer watching movies at home.", pt: "Eu prefiro assistir a filmes em casa." },
          { who: "Ivan", en: "Do you like cooking too?", pt: "Você também gosta de cozinhar?" },
          { who: "Bruno", en: "Yes, I love cooking on Sundays.", pt: "Sim, eu adoro cozinhar aos domingos." },
          { who: "Ivan", en: "What about Helena? Does she like dancing?", pt: "E a Helena? Ela gosta de dançar?" },
          { who: "Bruno", en: "She prefers listening to music and reading books.", pt: "Ela prefere ouvir música e ler livros." },
          { who: "Ivan", en: "Sounds like a relaxed weekend!", pt: "Parece um fim de semana relaxante!" },
        ],
      },
      vocabulary: [
        { term: "play soccer", pt: "jogar futebol", ipa: "/pleɪ ˈsoʊkər/", definition: "To play a sport with a ball and two teams.", example: "Ivan likes playing soccer.", examplePt: "Ivan gosta de jogar futebol." },
        { term: "watch movies", pt: "assistir a filmes", ipa: "/wɑːtʃ ˈmuːviz/", definition: "To watch films for entertainment.", example: "I prefer watching movies at home.", examplePt: "Eu prefiro assistir a filmes em casa." },
        { term: "listen to music", pt: "ouvir música", ipa: "/ˈlɪsən tuː ˈmjuːzɪk/", definition: "To pay attention to songs or sounds.", example: "Helena likes listening to music.", examplePt: "Helena gosta de ouvir música." },
        { term: "read books", pt: "ler livros", ipa: "/riːd bʊks/", definition: "To read for pleasure.", example: "She prefers reading books.", examplePt: "Ela prefere ler livros." },
        { term: "cook", pt: "cozinhar", ipa: "/kʊk/", definition: "To prepare food.", example: "Bruno loves cooking on Sundays.", examplePt: "Bruno adora cozinhar aos domingos." },
        { term: "dance", pt: "dançar", ipa: "/dæns/", definition: "To move your body to music.", example: "Do you like dancing?", examplePt: "Você gosta de dançar?" },
        { term: "travel", pt: "viajar", ipa: "/ˈtrævəl/", definition: "To go to other places.", example: "We like traveling in July.", examplePt: "Nós gostamos de viajar em julho." },
        { term: "take photos", pt: "tirar fotos", ipa: "/teɪk ˈfoʊtoʊz/", definition: "To make pictures with a camera or phone.", example: "I like taking photos on trips.", examplePt: "Eu gosto de tirar fotos em viagens." },
        { term: "go shopping", pt: "ir às compras", ipa: "/ɡoʊ ˈʃɑːpɪŋ/", definition: "To go to stores to buy things.", example: "They prefer going shopping on Saturdays.", examplePt: "Eles preferem ir às compras aos sábados." },
        { term: "play video games", pt: "jogar videogame", ipa: "/pleɪ ˈvɪdioʊ ɡeɪmz/", definition: "To play games on a computer or console.", example: "He likes playing video games at night.", examplePt: "Ele gosta de jogar videogame à noite." },
      ],
      expressions: [
        { en: "I like watching movies.", pt: "Eu gosto de assistir a filmes." },
        { en: "I prefer reading books.", pt: "Eu prefiro ler livros." },
        { en: "What about you?", pt: "E você?" },
        { en: "I don't really like that.", pt: "Eu não gosto muito disso." },
        { en: "Me too!", pt: "Eu também!" },
        { en: "Sounds fun!", pt: "Parece divertido!" },
      ],
      grammar: [
        {
          title: { en: "like / prefer + -ing", pt: "like / prefer + -ing" },
          examples: [
            { en: "I like watching movies.", pt: "Eu gosto de assistir a filmes." },
            { en: "She prefers reading books.", pt: "Ela prefere ler livros." },
            { en: "They like playing soccer.", pt: "Eles gostam de jogar futebol." },
          ],
          rule: {
            en: "After like and prefer, use the -ing form of the verb to talk about a general activity: like/prefer + verb-ing.",
            pt: "Depois de like e prefer, use o verbo com -ing para falar de uma atividade em geral: like/prefer + verbo-ing.",
          },
          mistakes: [
            { en: "I like watch movies. → I like watching movies.", pt: "Depois de like/prefer, o verbo vai para -ing." },
            { en: "She prefer reading. → She prefers reading.", pt: "Com she, prefer recebe -s: prefers." },
          ],
        },
        {
          title: { en: "prefer X to Y / would prefer to + verb", pt: "prefer X to Y / would prefer to + verbo" },
          examples: [
            { en: "I prefer tea to coffee.", pt: "Eu prefiro chá a café." },
            { en: "I prefer dancing to singing.", pt: "Eu prefiro dançar a cantar." },
            { en: "I'd prefer to stay home tonight.", pt: "Eu preferiria ficar em casa hoje à noite." },
          ],
          rule: {
            en: "Use prefer + noun/-ing + to + noun/-ing to compare two things. Use would prefer to + base verb for one specific choice.",
            pt: "Use prefer + substantivo/-ing + to + substantivo/-ing para comparar duas coisas. Use would prefer to + verbo base para uma escolha específica.",
          },
          mistakes: [
            { en: "I prefer tea than coffee. → I prefer tea to coffee.", pt: "Prefer usa to, não than, para comparar." },
            { en: "I'd prefer stay home. → I'd prefer to stay home.", pt: "Would prefer precisa de to antes do verbo." },
          ],
        },
      ],
      controlledPractice: [
        {
          id: "b17d-cp1",
          prompt: { en: "Complete: I like ___ movies.", pt: "Complete: I like ___ movies." },
          options: ["watch", "watching", "watches"],
          answer: "watching",
          explanation: { en: "like + verb-ing.", pt: "like + verbo-ing." },
        },
        {
          id: "b17d-cp2",
          prompt: { en: "Complete: She ___ reading books.", pt: "Complete: She ___ reading books." },
          options: ["prefer", "prefers", "preferring"],
          answer: "prefers",
          explanation: { en: "she + prefers.", pt: "she + prefers." },
        },
        {
          id: "b17d-cp3",
          prompt: { en: "Complete: I prefer tea ___ coffee.", pt: "Complete: I prefer tea ___ coffee." },
          options: ["than", "to", "for"],
          answer: "to",
          explanation: { en: "prefer X to Y.", pt: "prefer X to Y." },
        },
        {
          id: "b17d-cp4",
          prompt: { en: "Choose the correct sentence.", pt: "Escolha a frase correta." },
          options: ["I'd prefer stay home.", "I'd prefer to stay home.", "I'd prefer staying home to."],
          answer: "I'd prefer to stay home.",
          explanation: { en: "would prefer to + base verb.", pt: "would prefer to + verbo base." },
        },
        {
          id: "b17d-cp5",
          prompt: { en: "Complete: They like ___ soccer.", pt: "Complete: They like ___ soccer." },
          options: ["play", "playing", "plays"],
          answer: "playing",
          explanation: { en: "like + verb-ing.", pt: "like + verbo-ing." },
        },
        {
          id: "b17d-cp6",
          prompt: { en: "Complete: We ___ traveling in July.", pt: "Complete: We ___ traveling in July." },
          options: ["like", "likes", "liking"],
          answer: "like",
          explanation: { en: "we + like.", pt: "we + like." },
        },
      ],
      input: {
        kind: "reading",
        title: { en: "Reading — Weekend habits", pt: "Reading — Hábitos de fim de semana" },
        lines: [
          { en: "Helena likes listening to music, but she prefers reading books at night.", pt: "Helena gosta de ouvir música, mas prefere ler livros à noite." },
          { en: "Ivan likes playing soccer on Saturday mornings.", pt: "Ivan gosta de jogar futebol nas manhãs de sábado." },
          { en: "Bruno prefers cooking to going shopping.", pt: "Bruno prefere cozinhar a ir às compras." },
          { en: "They all like taking photos when they travel.", pt: "Todos eles gostam de tirar fotos quando viajam." },
          { en: "On Sundays, Bruno and Helena like watching movies together.", pt: "Aos domingos, Bruno e Helena gostam de assistir a filmes juntos." },
        ],
        questions: [
          {
            id: "b17d-r1",
            prompt: { en: "What does Helena prefer at night?", pt: "O que Helena prefere à noite?" },
            options: ["reading books", "playing soccer", "going shopping"],
            answer: "reading books",
            explanation: { en: "she prefers reading books at night.", pt: "she prefers reading books at night." },
          },
          {
            id: "b17d-r2",
            prompt: { en: "When does Ivan like playing soccer?", pt: "Quando Ivan gosta de jogar futebol?" },
            options: ["Saturday mornings", "Sunday nights", "every day"],
            answer: "Saturday mornings",
            explanation: { en: "on Saturday mornings.", pt: "on Saturday mornings." },
          },
          {
            id: "b17d-r3",
            prompt: { en: "What does Bruno prefer to going shopping?", pt: "O que Bruno prefere a ir às compras?" },
            options: ["cooking", "dancing", "reading"],
            answer: "cooking",
            explanation: { en: "Bruno prefers cooking to going shopping.", pt: "Bruno prefers cooking to going shopping." },
          },
          {
            id: "b17d-r4",
            prompt: { en: "What do they all like when they travel?", pt: "O que todos gostam quando viajam?" },
            options: ["taking photos", "watching movies", "playing video games"],
            answer: "taking photos",
            explanation: { en: "they all like taking photos when they travel.", pt: "they all like taking photos when they travel." },
          },
        ],
      },
      quickCheck: [
        {
          id: "b17d-qc1",
          prompt: { en: "Choose the correct sentence.", pt: "Escolha a frase correta." },
          options: ["I like dance.", "I like dancing.", "I liking dance."],
          answer: "I like dancing.",
          explanation: { en: "like + verb-ing.", pt: "like + verbo-ing." },
        },
        {
          id: "b17d-qc2",
          prompt: { en: "Complete: He ___ playing video games.", pt: "Complete: He ___ playing video games." },
          options: ["like", "likes", "liking"],
          answer: "likes",
          explanation: { en: "he + likes.", pt: "he + likes." },
        },
        {
          id: "b17d-qc3",
          prompt: { en: "Complete: I prefer coffee ___ tea.", pt: "Complete: I prefer coffee ___ tea." },
          options: ["to", "than", "of"],
          answer: "to",
          explanation: { en: "prefer X to Y.", pt: "prefer X to Y." },
        },
        {
          id: "b17d-qc4",
          prompt: { en: "Which phrase means 'E você?'", pt: "Qual frase significa 'E você?'" },
          options: ["Me too!", "What about you?", "Sounds fun!"],
          answer: "What about you?",
          explanation: { en: "What about you? asks the same question back.", pt: "What about you? devolve a pergunta." },
        },
      ],
    },
    communicate: {
      id: "BEGINNER-U17-COMMUNICATE",
      review: [
        { en: "like / prefer + verb-ing for general activities.", pt: "like / prefer + verbo-ing para atividades em geral." },
        { en: "prefer X to Y to compare two things.", pt: "prefer X to Y para comparar duas coisas." },
        { en: "would prefer to + base verb for a specific choice.", pt: "would prefer to + verbo base para uma escolha específica." },
      ],
      activities: [
        {
          id: "b17c-a1",
          title: { en: "My favorite free-time activities", pt: "Minhas atividades de lazer favoritas" },
          instruction: {
            en: "Say three things you like doing in your free time.",
            pt: "Diga três coisas que você gosta de fazer no tempo livre.",
          },
          phrases: [
            { en: "I like listening to music and taking photos.", pt: "Eu gosto de ouvir música e tirar fotos." },
            { en: "I prefer cooking to going shopping.", pt: "Eu prefiro cozinhar a ir às compras." },
          ],
          check: [
            {
              id: "b17c-a1q1",
              prompt: { en: "Complete: I like ___ photos.", pt: "Complete: I like ___ photos." },
              options: ["take", "taking", "takes"],
              answer: "taking",
              explanation: { en: "like + verb-ing.", pt: "like + verbo-ing." },
            },
          ],
        },
        {
          id: "b17c-a2",
          title: { en: "Comparing two activities", pt: "Comparando duas atividades" },
          instruction: {
            en: "Compare two activities using prefer ... to ...",
            pt: "Compare duas atividades usando prefer ... to ...",
          },
          phrases: [
            { en: "I prefer watching movies to playing video games.", pt: "Eu prefiro assistir a filmes a jogar videogame." },
            { en: "She prefers dancing to reading books.", pt: "Ela prefere dançar a ler livros." },
          ],
          check: [
            {
              id: "b17c-a2q1",
              prompt: { en: "Complete: I prefer dancing ___ singing.", pt: "Complete: I prefer dancing ___ singing." },
              options: ["than", "to", "for"],
              answer: "to",
              explanation: { en: "prefer X to Y.", pt: "prefer X to Y." },
            },
          ],
        },
        {
          id: "b17c-a3",
          title: { en: "What about...?", pt: "E que tal...?" },
          instruction: {
            en: "Suggest a weekend plan with a friend, using What about...?",
            pt: "Sugira um plano de fim de semana com um amigo, usando What about...?",
          },
          phrases: [
            { en: "What about watching a movie tonight?", pt: "Que tal assistir a um filme hoje à noite?" },
            { en: "I'd prefer to go for a walk.", pt: "Eu preferiria dar uma caminhada." },
          ],
          check: [
            {
              id: "b17c-a3q1",
              prompt: { en: "Choose the natural suggestion.", pt: "Escolha a sugestão natural." },
              options: ["What about watch movie?", "What about watching a movie?", "What about to watch a movie?"],
              answer: "What about watching a movie?",
              explanation: { en: "What about + verb-ing.", pt: "What about + verbo-ing." },
            },
          ],
        },
      ],
      challenge: {
        id: "b17c-challenge",
        title: { en: "Communication Challenge — Plan a weekend", pt: "Desafio de comunicação — Planeje um fim de semana" },
        instruction: {
          en: "Talk with a friend, suggest two activities, compare them with prefer, and agree on one plan.",
          pt: "Converse com um amigo, sugira duas atividades, compare-as com prefer e combinem um plano.",
        },
        phrases: [
          { en: "What about going shopping on Saturday?", pt: "Que tal ir às compras no sábado?" },
          { en: "I prefer watching a movie to going shopping.", pt: "Eu prefiro assistir a um filme a ir às compras." },
          { en: "Okay, let's watch a movie together.", pt: "Ok, vamos assistir a um filme juntos." },
        ],
        check: [
          {
            id: "b17c-ch1",
            prompt: { en: "Which sentence has NO mistake?", pt: "Qual frase NÃO tem erro?" },
            options: ["I prefer dancing than singing.", "I prefer dancing to singing.", "I prefer to dancing singing."],
            answer: "I prefer dancing to singing.",
            explanation: { en: "prefer X to Y.", pt: "prefer X to Y." },
          },
          {
            id: "b17c-ch2",
            prompt: { en: "Which is a correct suggestion?", pt: "Qual é uma sugestão correta?" },
            options: ["What about cook tonight?", "What about cooking tonight?", "What about to cook tonight?"],
            answer: "What about cooking tonight?",
            explanation: { en: "What about + verb-ing.", pt: "What about + verbo-ing." },
          },
        ],
      },
      lessonReview: {
        summary: {
          en: "You talked about your likes and preferences, compared activities and closed a weekend plan.",
          pt: "Você falou sobre seus gostos e preferências, comparou atividades e fechou um plano de fim de semana.",
        },
        canDo: [
          { en: "I can say what I like doing in my free time.", pt: "Consigo dizer o que gosto de fazer no tempo livre." },
          { en: "I can compare two activities with prefer ... to ...", pt: "Consigo comparar duas atividades com prefer ... to ..." },
          { en: "I can suggest a plan with What about...?", pt: "Consigo sugerir um plano com What about...?" },
        ],
        next: {
          en: "Next: express wants and needs with want to and need to.",
          pt: "Próximo: expressar desejos e necessidades com want to e need to.",
        },
      },
    },
  },
  {
    code: "BEGINNER-U18",
    number: 18,
    title: "I Want, I Need",
    titlePt: "Eu quero, eu preciso",
    cefr: "A1",
    objective: {
      en: "Use want and need with a noun object and with the infinitive to express desires and necessities.",
      pt: "Usar want e need com objeto e com infinitivo para expressar desejos e necessidades.",
    },
    communicationGoal: {
      en: "You can solve one everyday situation by asking for help.",
      pt: "Você consegue resolver uma situação do dia a dia pedindo ajuda."
    },
    prerequisites: {
      en: "Unit 17 — like and prefer for free-time activities.",
      pt: "Unidade 17 — like e prefer para atividades de lazer.",
    },
    newContent: {
      en: "Grammar: want/need + noun; want/need + to + verb. Vocabulary: everyday needs. Expressions: I need help with...",
      pt: "Gramática: want/need + substantivo; want/need + to + verbo. Vocabulário: necessidades do dia a dia. Expressões: I need help with...",
    },
    reviewContent: {
      en: "Review from Unit 14 — asking politely with Can I...? please.",
      pt: "Revisão da Unidade 14 — pedir com educação com Can I...? please.",
    },
    discover: {
      id: "BEGINNER-U18-DISCOVER",
      warmUp: {
        prompt: {
          en: "Look at the picture. A person is organizing what to do before leaving the house. What does this person need?",
          pt: "Observe a imagem. Uma pessoa está organizando o que fazer antes de sair de casa. Do que essa pessoa precisa?",
        },
        phrases: [
          { en: "I need to charge my phone.", pt: "Eu preciso carregar meu celular." },
          { en: "I want a coffee before I leave.", pt: "Eu quero um café antes de sair." },
          { en: "I need to call my sister.", pt: "Eu preciso ligar para minha irmã." },
        ],
      },
      context: {
        situation: {
          en: "Helena asks Marina, at the coworking front desk, for help finding a printer.",
          pt: "Helena pede ajuda a Marina, na recepção do coworking, para encontrar uma impressora.",
        },
        dialogue: [
          { who: "Helena", en: "Excuse me, I need some help.", pt: "Com licença, eu preciso de ajuda." },
          { who: "Marina", en: "Sure! What do you need?", pt: "Claro! Do que você precisa?" },
          { who: "Helena", en: "I need to print a document, but I can't find the printer.", pt: "Eu preciso imprimir um documento, mas não acho a impressora." },
          { who: "Marina", en: "It's next to the kitchen. Do you want a coffee too?", pt: "Fica perto da cozinha. Você quer um café também?" },
          { who: "Helena", en: "Yes, please! I want a coffee with milk.", pt: "Sim, por favor! Eu quero um café com leite." },
          { who: "Marina", en: "No problem. Do you need anything else?", pt: "Sem problema. Precisa de mais alguma coisa?" },
          { who: "Helena", en: "Just one thing — I need to charge my phone.", pt: "Só mais uma coisa — eu preciso carregar meu celular." },
          { who: "Marina", en: "There's a charger at the front desk.", pt: "Tem um carregador na recepção." },
        ],
      },
      vocabulary: [
        { term: "need help", pt: "precisar de ajuda", ipa: "/niːd help/", definition: "To require assistance.", example: "I need help with this document.", examplePt: "Eu preciso de ajuda com este documento." },
        { term: "want to buy", pt: "querer comprar", ipa: "/wɑːnt tuː baɪ/", definition: "To wish to purchase something.", example: "I want to buy a new bag.", examplePt: "Eu quero comprar uma bolsa nova." },
        { term: "need a doctor", pt: "precisar de um médico", ipa: "/niːd ə ˈdɑːktər/", definition: "To require medical attention.", example: "He needs a doctor today.", examplePt: "Ele precisa de um médico hoje." },
        { term: "want information", pt: "querer informação", ipa: "/wɑːnt ˌɪnfərˈmeɪʃən/", definition: "To wish to know something.", example: "I want information about the course.", examplePt: "Eu quero informação sobre o curso." },
        { term: "need directions", pt: "precisar de direções", ipa: "/niːd dəˈrekʃənz/", definition: "To require help finding a place.", example: "We need directions to the station.", examplePt: "Nós precisamos de direções até a estação." },
        { term: "want a coffee", pt: "querer um café", ipa: "/wɑːnt ə ˈkɔːfi/", definition: "To wish to have a coffee.", example: "I want a coffee with milk.", examplePt: "Eu quero um café com leite." },
        { term: "need a break", pt: "precisar de uma pausa", ipa: "/niːd ə breɪk/", definition: "To require a rest.", example: "She needs a break after work.", examplePt: "Ela precisa de uma pausa depois do trabalho." },
        { term: "want to rest", pt: "querer descansar", ipa: "/wɑːnt tuː rest/", definition: "To wish to relax or sleep.", example: "I want to rest this weekend.", examplePt: "Eu quero descansar neste fim de semana." },
        { term: "need to call", pt: "precisar ligar", ipa: "/niːd tuː kɔːl/", definition: "To have to phone someone.", example: "I need to call my sister.", examplePt: "Eu preciso ligar para minha irmã." },
        { term: "charge my phone", pt: "carregar meu celular", ipa: "/tʃɑːrdʒ maɪ foʊn/", definition: "To put energy into a phone battery.", example: "I need to charge my phone.", examplePt: "Eu preciso carregar meu celular." },
      ],
      expressions: [
        { en: "I need help with...", pt: "Eu preciso de ajuda com..." },
        { en: "I need to...", pt: "Eu preciso..." },
        { en: "I want a...", pt: "Eu quero um/uma..." },
        { en: "Do you need anything else?", pt: "Precisa de mais alguma coisa?" },
        { en: "No problem.", pt: "Sem problema." },
      ],
      grammar: [
        {
          title: { en: "want / need + noun", pt: "want / need + substantivo" },
          examples: [
            { en: "I want a coffee.", pt: "Eu quero um café." },
            { en: "I need some help.", pt: "Eu preciso de ajuda." },
            { en: "She needs a doctor.", pt: "Ela precisa de um médico." },
          ],
          rule: {
            en: "Use want/need directly with a noun to say what you desire or require: want/need + noun.",
            pt: "Use want/need diretamente com um substantivo para dizer o que você deseja ou precisa: want/need + substantivo.",
          },
          mistakes: [
            { en: "I want of a coffee. → I want a coffee.", pt: "Want não usa 'of' antes do substantivo." },
            { en: "She need a doctor. → She needs a doctor.", pt: "Com she/he/it, need recebe -s: needs." },
          ],
        },
        {
          title: { en: "want / need + to + verb", pt: "want / need + to + verbo" },
          examples: [
            { en: "I want to rest.", pt: "Eu quero descansar." },
            { en: "I need to call my sister.", pt: "Eu preciso ligar para minha irmã." },
            { en: "He needs to buy tickets.", pt: "Ele precisa comprar ingressos." },
          ],
          rule: {
            en: "To talk about an action, use want/need + to + base verb: want to rest, need to call.",
            pt: "Para falar de uma ação, use want/need + to + verbo base: want to rest, need to call.",
          },
          mistakes: [
            { en: "I want going home. → I want to go home.", pt: "Want/need + to + verbo base, não -ing." },
            { en: "I need helping. → I need help. / I need to get help.", pt: "Need + substantivo (help) ou need + to + verbo." },
          ],
        },
      ],
      controlledPractice: [
        {
          id: "b18d-cp1",
          prompt: { en: "Complete: I ___ a coffee, please.", pt: "Complete: I ___ a coffee, please." },
          options: ["want", "wants", "wanting"],
          answer: "want",
          explanation: { en: "I + want.", pt: "I + want." },
        },
        {
          id: "b18d-cp2",
          prompt: { en: "Complete: He ___ a doctor today.", pt: "Complete: He ___ a doctor today." },
          options: ["need", "needs", "needing"],
          answer: "needs",
          explanation: { en: "he/she/it + needs.", pt: "he/she/it + needs." },
        },
        {
          id: "b18d-cp3",
          prompt: { en: "Complete: I need ___ my sister.", pt: "Complete: I need ___ my sister." },
          options: ["call", "to call", "calling"],
          answer: "to call",
          explanation: { en: "need + to + base verb.", pt: "need + to + verbo base." },
        },
        {
          id: "b18d-cp4",
          prompt: { en: "Complete: We want ___ home early.", pt: "Complete: We want ___ home early." },
          options: ["go", "to go", "going"],
          answer: "to go",
          explanation: { en: "want + to + base verb.", pt: "want + to + verbo base." },
        },
        {
          id: "b18d-cp5",
          prompt: { en: "Choose the correct sentence.", pt: "Escolha a frase correta." },
          options: ["I need helping.", "I need to help.", "I need of help."],
          answer: "I need to help.",
          explanation: { en: "need + to + base verb.", pt: "need + to + verbo base." },
        },
        {
          id: "b18d-cp6",
          prompt: { en: "Complete: They need ___ directions.", pt: "Complete: They need ___ directions." },
          options: ["", "to", "for"],
          answer: "",
          explanation: { en: "need + noun directly, with no preposition.", pt: "need + substantivo diretamente, sem preposição." },
        },
      ],
      input: {
        kind: "listening",
        title: { en: "Listening — At the front desk", pt: "Listening — Na recepção" },
        lines: [
          { en: "Good morning. I need some information about the coworking.", pt: "Bom dia. Eu preciso de informação sobre o coworking." },
          { en: "I want to book a room for a meeting tomorrow.", pt: "Eu quero reservar uma sala para uma reunião amanhã." },
          { en: "I also need to print two documents before ten.", pt: "Eu também preciso imprimir dois documentos antes das dez." },
          { en: "Do I need to pay now, or later?", pt: "Eu preciso pagar agora, ou depois?" },
          { en: "You can pay later. Do you need anything else?", pt: "Você pode pagar depois. Precisa de mais alguma coisa?" },
        ],
        questions: [
          {
            id: "b18d-r1",
            prompt: { en: "What does the person want to book?", pt: "O que a pessoa quer reservar?" },
            options: ["a room for a meeting", "a printer", "a coffee"],
            answer: "a room for a meeting",
            explanation: { en: "I want to book a room for a meeting.", pt: "I want to book a room for a meeting." },
          },
          {
            id: "b18d-r2",
            prompt: { en: "What does the person need before ten?", pt: "Do que a pessoa precisa antes das dez?" },
            options: ["to print two documents", "to call a doctor", "to buy tickets"],
            answer: "to print two documents",
            explanation: { en: "I need to print two documents before ten.", pt: "I need to print two documents before ten." },
          },
          {
            id: "b18d-r3",
            prompt: { en: "When can the person pay?", pt: "Quando a pessoa pode pagar?" },
            options: ["later", "now", "tomorrow morning"],
            answer: "later",
            explanation: { en: "You can pay later.", pt: "You can pay later." },
          },
        ],
      },
      quickCheck: [
        {
          id: "b18d-qc1",
          prompt: { en: "Choose the correct sentence.", pt: "Escolha a frase correta." },
          options: ["I want a coffee.", "I want of coffee.", "I wants coffee."],
          answer: "I want a coffee.",
          explanation: { en: "want + noun directly.", pt: "want + substantivo diretamente." },
        },
        {
          id: "b18d-qc2",
          prompt: { en: "Complete: She ___ to rest today.", pt: "Complete: She ___ to rest today." },
          options: ["want", "wants", "wanting"],
          answer: "wants",
          explanation: { en: "she + wants.", pt: "she + wants." },
        },
        {
          id: "b18d-qc3",
          prompt: { en: "Complete: I need ___ my phone.", pt: "Complete: I need ___ my phone." },
          options: ["charge", "to charge", "charging"],
          answer: "to charge",
          explanation: { en: "need + to + base verb.", pt: "need + to + verbo base." },
        },
        {
          id: "b18d-qc4",
          prompt: { en: "Which phrase means 'Precisa de mais alguma coisa?'", pt: "Qual frase significa 'Precisa de mais alguma coisa?'" },
          options: ["No problem.", "Do you need anything else?", "I need help with..."],
          answer: "Do you need anything else?",
          explanation: { en: "Do you need anything else? asks about more needs.", pt: "Do you need anything else? pergunta sobre mais necessidades." },
        },
      ],
    },
    communicate: {
      id: "BEGINNER-U18-COMMUNICATE",
      review: [
        { en: "want / need + noun for things you desire or require.", pt: "want / need + substantivo para coisas que você deseja ou precisa." },
        { en: "want / need + to + base verb for actions.", pt: "want / need + to + verbo base para ações." },
        { en: "I need help with... to ask for assistance.", pt: "I need help with... para pedir ajuda." },
      ],
      activities: [
        {
          id: "b18c-a1",
          title: { en: "What I want and need today", pt: "O que eu quero e preciso hoje" },
          instruction: {
            en: "Say two things you want and two things you need today.",
            pt: "Diga duas coisas que você quer e duas coisas de que precisa hoje.",
          },
          phrases: [
            { en: "I want a coffee and I need to call a friend.", pt: "Eu quero um café e preciso ligar para um amigo." },
            { en: "I need to buy some food for dinner.", pt: "Eu preciso comprar comida para o jantar." },
          ],
          check: [
            {
              id: "b18c-a1q1",
              prompt: { en: "Complete: I need ___ some food.", pt: "Complete: I need ___ some food." },
              options: ["buy", "to buy", "buying"],
              answer: "to buy",
              explanation: { en: "need + to + base verb.", pt: "need + to + verbo base." },
            },
          ],
        },
        {
          id: "b18c-a2",
          title: { en: "Asking for help", pt: "Pedindo ajuda" },
          instruction: {
            en: "Ask someone for help with a task, using I need help with...",
            pt: "Peça ajuda a alguém com uma tarefa, usando I need help with...",
          },
          phrases: [
            { en: "I need help with this document.", pt: "Eu preciso de ajuda com este documento." },
            { en: "Can you help me find the printer?", pt: "Você pode me ajudar a encontrar a impressora?" },
          ],
          check: [
            {
              id: "b18c-a2q1",
              prompt: { en: "Choose the natural request for help.", pt: "Escolha o pedido de ajuda natural." },
              options: ["I need help with this.", "I need helping this.", "I need of help this."],
              answer: "I need help with this.",
              explanation: { en: "I need help with + noun.", pt: "I need help with + substantivo." },
            },
          ],
        },
        {
          id: "b18c-a3",
          title: { en: "At the service desk", pt: "No balcão de atendimento" },
          instruction: {
            en: "Role-play a short service situation: ask for one thing and one action.",
            pt: "Faça um role-play curto de atendimento: peça uma coisa e uma ação.",
          },
          phrases: [
            { en: "I want a coffee and I need to charge my phone.", pt: "Eu quero um café e preciso carregar meu celular." },
            { en: "Do you need anything else? Just one thing.", pt: "Precisa de mais alguma coisa? Só mais uma coisa." },
          ],
          check: [
            {
              id: "b18c-a3q1",
              prompt: { en: "Complete: Do you ___ anything else?", pt: "Complete: Do you ___ anything else?" },
              options: ["need", "needs", "needing"],
              answer: "need",
              explanation: { en: "Do you + base verb.", pt: "Do you + verbo base." },
            },
          ],
        },
      ],
      challenge: {
        id: "b18c-challenge",
        title: { en: "Communication Challenge — Solve a situation", pt: "Desafio de comunicação — Resolva uma situação" },
        instruction: {
          en: "Act out a service situation: ask for help, say what you want and what you need, and thank the person.",
          pt: "Encene uma situação de atendimento: peça ajuda, diga o que você quer e do que precisa, e agradeça.",
        },
        phrases: [
          { en: "Excuse me, I need some help.", pt: "Com licença, eu preciso de ajuda." },
          { en: "I want to print a document and I need a coffee.", pt: "Eu quero imprimir um documento e preciso de um café." },
          { en: "Thank you, that's everything I need.", pt: "Obrigado, isso é tudo de que preciso." },
        ],
        check: [
          {
            id: "b18c-ch1",
            prompt: { en: "Which sentence has NO mistake?", pt: "Qual frase NÃO tem erro?" },
            options: ["I need to buy tickets.", "I need buying tickets.", "I needs to buy tickets."],
            answer: "I need to buy tickets.",
            explanation: { en: "need + to + base verb.", pt: "need + to + verbo base." },
          },
          {
            id: "b18c-ch2",
            prompt: { en: "Which is the best way to ask for help?", pt: "Qual é a melhor forma de pedir ajuda?" },
            options: ["I need help with this, please.", "I need of help this.", "I helping need this."],
            answer: "I need help with this, please.",
            explanation: { en: "I need help with + noun, please.", pt: "I need help with + substantivo, please." },
          },
        ],
      },
      lessonReview: {
        summary: {
          en: "You expressed wants and needs, asked for help and solved a service situation.",
          pt: "Você expressou desejos e necessidades, pediu ajuda e resolveu uma situação de atendimento.",
        },
        canDo: [
          { en: "I can say what I want and what I need.", pt: "Consigo dizer o que eu quero e do que preciso." },
          { en: "I can ask for help with a task.", pt: "Consigo pedir ajuda com uma tarefa." },
          { en: "I can solve a simple service situation.", pt: "Consigo resolver uma situação simples de atendimento." },
        ],
        next: {
          en: "Next: describe people's appearance and personality with adjectives.",
          pt: "Próximo: descrever a aparência e a personalidade de pessoas com adjetivos.",
        },
      },
    },
  },
  {
    code: "BEGINNER-U19",
    number: 19,
    title: "Describing People",
    titlePt: "Descrevendo pessoas",
    cefr: "A1",
    objective: {
      en: "Use adjectives in the correct order before nouns to describe people's appearance and personality.",
      pt: "Usar adjetivos na ordem correta antes de substantivos para descrever aparência e personalidade.",
    },
    communicationGoal: {
      en: "You can describe three people so someone else can recognize them.",
      pt: "Você consegue descrever três pessoas para que alguém as reconheça.",
    },
    prerequisites: {
      en: "Unit 18 — want and need for everyday situations.",
      pt: "Unidade 18 — want e need para situações do dia a dia.",
    },
    newContent: {
      en: "Grammar: adjective + noun order; look/looks + adjective. Vocabulary: appearance and personality adjectives. Expressions: The one with...",
      pt: "Gramática: ordem adjetivo + substantivo; look/looks + adjetivo. Vocabulário: adjetivos de aparência e personalidade. Expressões: The one with...",
    },
    reviewContent: {
      en: "Review from Unit 2 — possessives my/your/his/her.",
      pt: "Revisão da Unidade 2 — possessivos my/your/his/her.",
    },
    discover: {
      id: "BEGINNER-U19-DISCOVER",
      warmUp: {
        prompt: {
          en: "Look at the picture. A diverse group of people is standing together. How would you describe each one?",
          pt: "Observe a imagem. Um grupo diverso de pessoas está reunido. Como você descreveria cada uma?",
        },
        phrases: [
          { en: "She has long, curly hair.", pt: "Ela tem cabelo longo e cacheado." },
          { en: "He is a tall, friendly man.", pt: "Ele é um homem alto e simpático." },
          { en: "They look very happy today.", pt: "Eles parecem muito felizes hoje." },
        ],
      },
      context: {
        situation: {
          en: "Bruno describes his friend Marina so Ivan can recognize her at the airport.",
          pt: "Bruno descreve a amiga Marina para que Ivan a reconheça no aeroporto.",
        },
        dialogue: [
          { who: "Bruno", en: "Can you see her? She's tall, with curly hair.", pt: "Você consegue vê-la? Ela é alta, com cabelo cacheado." },
          { who: "Ivan", en: "Is she the one with the red jacket?", pt: "É aquela com a jaqueta vermelha?" },
          { who: "Bruno", en: "Yes! And she's usually very friendly and funny.", pt: "Sim! E ela normalmente é muito simpática e engraçada." },
          { who: "Ivan", en: "What about her bag?", pt: "E a bolsa dela?" },
          { who: "Bruno", en: "She has a small, blue bag.", pt: "Ela tem uma bolsa pequena e azul." },
          { who: "Ivan", en: "I think I see her now. She looks happy.", pt: "Acho que estou vendo ela agora. Ela parece feliz." },
          { who: "Bruno", en: "That's her! Let's go say hi.", pt: "É ela! Vamos dizer oi." },
        ],
      },
      vocabulary: [
        { term: "tall", pt: "alto(a)", ipa: "/tɔːl/", definition: "Having a great height.", example: "He is a tall man.", examplePt: "Ele é um homem alto." },
        { term: "short", pt: "baixo(a)", ipa: "/ʃɔːrt/", definition: "Having a small height.", example: "She is short and friendly.", examplePt: "Ela é baixa e simpática." },
        { term: "young", pt: "jovem", ipa: "/jʌŋ/", definition: "Not old.", example: "They are young students.", examplePt: "Eles são estudantes jovens." },
        { term: "old", pt: "velho(a) / idoso(a)", ipa: "/oʊld/", definition: "Having lived many years.", example: "My grandfather is old and wise.", examplePt: "Meu avô é idoso e sábio." },
        { term: "friendly", pt: "simpático(a)", ipa: "/ˈfrendli/", definition: "Kind and pleasant with others.", example: "She is very friendly.", examplePt: "Ela é muito simpática." },
        { term: "funny", pt: "engraçado(a)", ipa: "/ˈfʌni/", definition: "Making people laugh.", example: "He is a funny person.", examplePt: "Ele é uma pessoa engraçada." },
        { term: "quiet", pt: "quieto(a)", ipa: "/ˈkwaɪət/", definition: "Not talking much.", example: "My brother is quiet at parties.", examplePt: "Meu irmão é quieto em festas." },
        { term: "serious", pt: "sério(a)", ipa: "/ˈsɪriəs/", definition: "Not joking, thoughtful.", example: "She looks serious today.", examplePt: "Ela parece séria hoje." },
        { term: "curly hair", pt: "cabelo cacheado", ipa: "/ˈkɜːrli her/", definition: "Hair with curls.", example: "Marina has curly hair.", examplePt: "Marina tem cabelo cacheado." },
        { term: "straight hair", pt: "cabelo liso", ipa: "/streɪt her/", definition: "Hair with no curls.", example: "Helena has straight hair.", examplePt: "Helena tem cabelo liso." },
      ],
      expressions: [
        { en: "He looks...", pt: "Ele parece..." },
        { en: "She has...", pt: "Ela tem..." },
        { en: "The one with...", pt: "Aquele(a) com..." },
        { en: "What does he look like?", pt: "Como ele é (fisicamente)?" },
        { en: "That's her!", pt: "É ela!" },
      ],
      grammar: [
        {
          title: { en: "Adjective + noun order", pt: "Ordem adjetivo + substantivo" },
          examples: [
            { en: "She has long hair.", pt: "Ela tem cabelo longo." },
            { en: "He is a tall man.", pt: "Ele é um homem alto." },
            { en: "They are friendly people.", pt: "Eles são pessoas simpáticas." },
          ],
          rule: {
            en: "In English, adjectives go before the noun and never change for plural: a tall man, tall men.",
            pt: "Em inglês, o adjetivo vem antes do substantivo e nunca muda no plural: a tall man, tall men.",
          },
          mistakes: [
            { en: "a man tall → a tall man.", pt: "O adjetivo vem antes do substantivo em inglês." },
            { en: "friendlies people → friendly people.", pt: "Adjetivos não recebem -s no plural." },
          ],
        },
        {
          title: { en: "look / looks + adjective", pt: "look / looks + adjetivo" },
          examples: [
            { en: "He looks tired.", pt: "Ele parece cansado." },
            { en: "She looks happy today.", pt: "Ela parece feliz hoje." },
            { en: "They look busy.", pt: "Eles parecem ocupados." },
          ],
          rule: {
            en: "Use look/looks + adjective to describe how someone appears: he looks + adjective (no like before an adjective).",
            pt: "Use look/looks + adjetivo para descrever a aparência de alguém: he looks + adjetivo (sem like antes de um adjetivo).",
          },
          mistakes: [
            { en: "He looks like tired. → He looks tired.", pt: "Não use like antes de um adjetivo depois de look." },
            { en: "She look happy. → She looks happy.", pt: "Com she/he/it, look recebe -s: looks." },
          ],
        },
      ],
      controlledPractice: [
        {
          id: "b19d-cp1",
          prompt: { en: "Choose the correct order.", pt: "Escolha a ordem correta." },
          options: ["a man tall", "a tall man", "man a tall"],
          answer: "a tall man",
          explanation: { en: "adjective + noun.", pt: "adjetivo + substantivo." },
        },
        {
          id: "b19d-cp2",
          prompt: { en: "Complete: She has ___ hair.", pt: "Complete: She has ___ hair." },
          options: ["curlies", "curly", "curlys"],
          answer: "curly",
          explanation: { en: "Adjectives don't change form.", pt: "Adjetivos não mudam de forma." },
        },
        {
          id: "b19d-cp3",
          prompt: { en: "Complete: He ___ tired today.", pt: "Complete: He ___ tired today." },
          options: ["look", "looks", "looking"],
          answer: "looks",
          explanation: { en: "he + looks.", pt: "he + looks." },
        },
        {
          id: "b19d-cp4",
          prompt: { en: "Choose the correct sentence.", pt: "Escolha a frase correta." },
          options: ["She looks like happy.", "She looks happy.", "She look happy."],
          answer: "She looks happy.",
          explanation: { en: "looks + adjective, no like.", pt: "looks + adjetivo, sem like." },
        },
        {
          id: "b19d-cp5",
          prompt: { en: "Complete: They are ___ people.", pt: "Complete: They are ___ people." },
          options: ["friendly", "friendlies", "friendlys"],
          answer: "friendly",
          explanation: { en: "Adjectives have one form for singular and plural.", pt: "Adjetivos têm uma única forma para singular e plural." },
        },
        {
          id: "b19d-cp6",
          prompt: { en: "Complete: Is she ___ one with the red jacket?", pt: "Complete: Is she ___ one with the red jacket?" },
          options: ["a", "the", "this"],
          answer: "the",
          explanation: { en: "the one with... identifies a specific person.", pt: "the one with... identifica uma pessoa específica." },
        },
      ],
      input: {
        kind: "reading",
        title: { en: "Reading — Who is who?", pt: "Reading — Quem é quem?" },
        lines: [
          { en: "Marina is tall, with curly hair, and she is very friendly.", pt: "Marina é alta, com cabelo cacheado, e é muito simpática." },
          { en: "Ivan is short and quiet, but he is funny with close friends.", pt: "Ivan é baixo e quieto, mas é engraçado com amigos próximos." },
          { en: "Helena has straight hair and she looks serious, but she is kind.", pt: "Helena tem cabelo liso e parece séria, mas é gentil." },
          { en: "Bruno is a young, tall man, and he always looks happy.", pt: "Bruno é um homem jovem e alto, e sempre parece feliz." },
        ],
        questions: [
          {
            id: "b19d-r1",
            prompt: { en: "How is Marina's hair?", pt: "Como é o cabelo de Marina?" },
            options: ["curly", "straight", "short"],
            answer: "curly",
            explanation: { en: "Marina has curly hair.", pt: "Marina tem cabelo cacheado." },
          },
          {
            id: "b19d-r2",
            prompt: { en: "What is Ivan like with close friends?", pt: "Como Ivan é com amigos próximos?" },
            options: ["funny", "serious", "tall"],
            answer: "funny",
            explanation: { en: "he is funny with close friends.", pt: "he is funny with close friends." },
          },
          {
            id: "b19d-r3",
            prompt: { en: "How does Helena look, even though she is kind?", pt: "Como Helena parece, mesmo sendo gentil?" },
            options: ["serious", "funny", "young"],
            answer: "serious",
            explanation: { en: "she looks serious, but she is kind.", pt: "she looks serious, but she is kind." },
          },
        ],
      },
      quickCheck: [
        {
          id: "b19d-qc1",
          prompt: { en: "Choose the correct sentence.", pt: "Escolha a frase correta." },
          options: ["a tall man", "a man tall", "tall a man"],
          answer: "a tall man",
          explanation: { en: "adjective + noun.", pt: "adjetivo + substantivo." },
        },
        {
          id: "b19d-qc2",
          prompt: { en: "Complete: She ___ tired.", pt: "Complete: She ___ tired." },
          options: ["look", "looks", "looking"],
          answer: "looks",
          explanation: { en: "she + looks.", pt: "she + looks." },
        },
        {
          id: "b19d-qc3",
          prompt: { en: "Opposite of 'tall':", pt: "Oposto de 'tall':" },
          options: ["short", "young", "quiet"],
          answer: "short",
          explanation: { en: "tall ↔ short.", pt: "tall ↔ short." },
        },
        {
          id: "b19d-qc4",
          prompt: { en: "Which phrase identifies a specific person in a group?", pt: "Qual frase identifica uma pessoa específica no grupo?" },
          options: ["That's her!", "The one with the red jacket.", "He looks happy."],
          answer: "The one with the red jacket.",
          explanation: { en: "the one with + a feature identifies someone.", pt: "the one with + uma característica identifica alguém." },
        },
      ],
    },
    communicate: {
      id: "BEGINNER-U19-COMMUNICATE",
      review: [
        { en: "Adjectives go before the noun and don't change in the plural.", pt: "Adjetivos vêm antes do substantivo e não mudam no plural." },
        { en: "look / looks + adjective describes appearance.", pt: "look / looks + adjetivo descreve a aparência." },
        { en: "the one with... identifies a specific person.", pt: "the one with... identifica uma pessoa específica." },
      ],
      activities: [
        {
          id: "b19c-a1",
          title: { en: "Describe a friend", pt: "Descreva um amigo" },
          instruction: {
            en: "Describe a friend's appearance and personality in three sentences.",
            pt: "Descreva a aparência e a personalidade de um amigo em três frases.",
          },
          phrases: [
            { en: "My friend is tall, with short hair.", pt: "Meu amigo é alto, com cabelo curto." },
            { en: "She is friendly and very funny.", pt: "Ela é simpática e muito engraçada." },
          ],
          check: [
            {
              id: "b19c-a1q1",
              prompt: { en: "Complete: My friend is a ___ person.", pt: "Complete: My friend is a ___ person." },
              options: ["friendly", "friendlies", "friend"],
              answer: "friendly",
              explanation: { en: "adjective + noun.", pt: "adjetivo + substantivo." },
            },
          ],
        },
        {
          id: "b19c-a2",
          title: { en: "How do they look today?", pt: "Como eles parecem hoje?" },
          instruction: {
            en: "Say how three people around you look today, using look/looks.",
            pt: "Diga como três pessoas ao seu redor parecem hoje, usando look/looks.",
          },
          phrases: [
            { en: "He looks tired today.", pt: "Ele parece cansado hoje." },
            { en: "They look busy this morning.", pt: "Eles parecem ocupados nesta manhã." },
          ],
          check: [
            {
              id: "b19c-a2q1",
              prompt: { en: "Complete: They ___ busy today.", pt: "Complete: They ___ busy today." },
              options: ["look", "looks", "looking"],
              answer: "look",
              explanation: { en: "they + look.", pt: "they + look." },
            },
          ],
        },
        {
          id: "b19c-a3",
          title: { en: "Find the person", pt: "Encontre a pessoa" },
          instruction: {
            en: "Describe someone in a group so a partner can identify them with 'the one with...'",
            pt: "Descreva alguém em um grupo para que um parceiro identifique com 'the one with...'",
          },
          phrases: [
            { en: "She's the one with the blue bag.", pt: "É aquela com a bolsa azul." },
            { en: "He's the one with curly hair.", pt: "É aquele com cabelo cacheado." },
          ],
          check: [
            {
              id: "b19c-a3q1",
              prompt: { en: "Choose the natural identification.", pt: "Escolha a identificação natural." },
              options: ["He's one with curly hair.", "He's the one with curly hair.", "He's the with curly hair one."],
              answer: "He's the one with curly hair.",
              explanation: { en: "the one with + feature.", pt: "the one with + característica." },
            },
          ],
        },
      ],
      challenge: {
        id: "b19c-challenge",
        title: { en: "Communication Challenge — Recognize a person", pt: "Desafio de comunicação — Reconheça uma pessoa" },
        instruction: {
          en: "Describe a person you are meeting at a busy place, with appearance, personality and one detail, so your partner can find them.",
          pt: "Descreva uma pessoa que você vai encontrar em um lugar cheio, com aparência, personalidade e um detalhe, para que seu parceiro a encontre.",
        },
        phrases: [
          { en: "She's tall, with straight hair, and she's very friendly.", pt: "Ela é alta, com cabelo liso, e é muito simpática." },
          { en: "She's the one with a small blue bag.", pt: "É aquela com uma bolsa pequena e azul." },
          { en: "She looks happy, so it will be easy to find her.", pt: "Ela parece feliz, então será fácil encontrá-la." },
        ],
        check: [
          {
            id: "b19c-ch1",
            prompt: { en: "Which sentence has NO mistake?", pt: "Qual frase NÃO tem erro?" },
            options: ["She is a tall friendly woman.", "She is a woman friendly tall.", "She is friendlies and tall."],
            answer: "She is a tall friendly woman.",
            explanation: { en: "adjectives + noun order.", pt: "ordem adjetivos + substantivo." },
          },
          {
            id: "b19c-ch2",
            prompt: { en: "Which describes appearance correctly?", pt: "Qual descreve a aparência corretamente?" },
            options: ["He looks like tired.", "He looks tired.", "He look tired."],
            answer: "He looks tired.",
            explanation: { en: "looks + adjective.", pt: "looks + adjetivo." },
          },
        ],
      },
      lessonReview: {
        summary: {
          en: "You described people's appearance and personality and helped someone identify a person in a group.",
          pt: "Você descreveu a aparência e a personalidade de pessoas e ajudou alguém a identificar uma pessoa em um grupo.",
        },
        canDo: [
          { en: "I can describe a person with adjectives in the right order.", pt: "Consigo descrever uma pessoa com adjetivos na ordem certa." },
          { en: "I can say how someone looks with look/looks.", pt: "Consigo dizer como alguém parece com look/looks." },
          { en: "I can help someone identify a person with 'the one with...'", pt: "Consigo ajudar alguém a identificar uma pessoa com 'the one with...'" },
        ],
        next: {
          en: "Next: talk about weather and seasons and start small talk with a stranger.",
          pt: "Próximo: falar do clima e das estações e puxar conversa com um desconhecido.",
        },
      },
    },
  },
  {
    code: "BEGINNER-U20",
    number: 20,
    title: "Weather and Seasons",
    titlePt: "Clima e estações",
    cefr: "A1",
    objective: {
      en: "Use it is + adjective and in + season to talk about the weather and the seasons of the year.",
      pt: "Usar it is + adjetivo e in + estação para falar do clima e das estações do ano.",
    },
    communicationGoal: {
      en: "You can start two small-talk conversations about the weather.",
      pt: "Você consegue iniciar duas conversas de small talk sobre o clima.",
    },
    prerequisites: {
      en: "Unit 19 — describing people with adjectives.",
      pt: "Unidade 19 — descrever pessoas com adjetivos.",
    },
    newContent: {
      en: "Grammar: it is + adjective for weather; in + season. Vocabulary: weather and seasons. Expressions: Nice day, isn't it?",
      pt: "Gramática: it is + adjetivo para clima; in + estação. Vocabulário: clima e estações. Expressões: Nice day, isn't it?",
    },
    reviewContent: {
      en: "Review from Unit 17 — like/prefer to talk about seasonal preferences.",
      pt: "Revisão da Unidade 17 — like/prefer para falar de preferências sazonais.",
    },
    discover: {
      id: "BEGINNER-U20-DISCOVER",
      warmUp: {
        prompt: {
          en: "Look at the picture. It shows the four seasons of the year. What is the weather like in each one?",
          pt: "Observe a imagem. Ela mostra as quatro estações do ano. Como é o clima em cada uma?",
        },
        phrases: [
          { en: "It's cold today.", pt: "Está frio hoje." },
          { en: "It's sunny and warm in spring.", pt: "Está ensolarado e ameno na primavera." },
          { en: "It's snowy in winter.", pt: "Está nevando no inverno." },
        ],
      },
      context: {
        situation: {
          en: "Ivan starts small talk with Marina at a bus stop, talking about the weather.",
          pt: "Ivan puxa conversa com Marina em um ponto de ônibus, falando sobre o clima.",
        },
        dialogue: [
          { who: "Ivan", en: "Nice day, isn't it?", pt: "Belo dia, não é?" },
          { who: "Marina", en: "Yes, it's sunny and warm today.", pt: "Sim, está ensolarado e ameno hoje." },
          { who: "Ivan", en: "I like this weather. Winter here is too cold for me.", pt: "Eu gosto desse clima. O inverno aqui é muito frio para mim." },
          { who: "Marina", en: "Really? I love winter! I like the snow.", pt: "Sério? Eu adoro o inverno! Eu gosto da neve." },
          { who: "Ivan", en: "It doesn't snow much in my city.", pt: "Não neva muito na minha cidade." },
          { who: "Marina", en: "What's the weather like there in summer?", pt: "Como é o clima aí no verão?" },
          { who: "Ivan", en: "It's very hot and sunny, almost every day.", pt: "É muito quente e ensolarado, quase todo dia." },
          { who: "Marina", en: "Sounds nice! The bus is here.", pt: "Parece ótimo! O ônibus chegou." },
        ],
      },
      vocabulary: [
        { term: "sunny", pt: "ensolarado(a)", ipa: "/ˈsʌni/", definition: "With a lot of sun.", example: "It's sunny today.", examplePt: "Está ensolarado hoje." },
        { term: "rainy", pt: "chuvoso(a)", ipa: "/ˈreɪni/", definition: "With rain.", example: "It's rainy in April.", examplePt: "Está chuvoso em abril." },
        { term: "cloudy", pt: "nublado(a)", ipa: "/ˈklaʊdi/", definition: "With many clouds.", example: "It's cloudy this morning.", examplePt: "Está nublado esta manhã." },
        { term: "windy", pt: "ventoso(a)", ipa: "/ˈwɪndi/", definition: "With strong wind.", example: "It's windy near the beach.", examplePt: "Está ventoso perto da praia." },
        { term: "hot", pt: "quente", ipa: "/hɑːt/", definition: "With a high temperature.", example: "It's hot in summer.", examplePt: "Está quente no verão." },
        { term: "cold", pt: "frio", ipa: "/koʊld/", definition: "With a low temperature.", example: "It's cold in winter.", examplePt: "Está frio no inverno." },
        { term: "warm", pt: "ameno / morno", ipa: "/wɔːrm/", definition: "Pleasantly not cold.", example: "It's warm in spring.", examplePt: "Está ameno na primavera." },
        { term: "snow", pt: "neve / nevar", ipa: "/snoʊ/", definition: "Soft white ice that falls in winter.", example: "It doesn't snow much here.", examplePt: "Não neva muito aqui." },
        { term: "spring / summer / autumn / winter", pt: "primavera / verão / outono / inverno", ipa: "/sprɪŋ ˈsʌmər ˈɔːtəm ˈwɪntər/", definition: "The four seasons of the year.", example: "It's cold in winter and hot in summer.", examplePt: "É frio no inverno e quente no verão." },
      ],
      expressions: [
        { en: "Nice day, isn't it?", pt: "Belo dia, não é?" },
        { en: "What's the weather like today?", pt: "Como está o clima hoje?" },
        { en: "It's freezing!", pt: "Está congelando!" },
        { en: "I love this weather.", pt: "Eu adoro esse clima." },
        { en: "Sounds nice!", pt: "Parece ótimo!" },
      ],
      grammar: [
        {
          title: { en: "It is + adjective (weather)", pt: "It is + adjetivo (clima)" },
          examples: [
            { en: "It's sunny today.", pt: "Está ensolarado hoje." },
            { en: "It's very cold in winter.", pt: "Está muito frio no inverno." },
            { en: "It's cloudy this afternoon.", pt: "Está nublado esta tarde." },
          ],
          rule: {
            en: "To talk about the weather, use it is (it's) + adjective. It has no real meaning here — it is just the subject.",
            pt: "Para falar do clima, use it is (it's) + adjetivo. O it não tem significado real aqui — é apenas o sujeito da frase.",
          },
          mistakes: [
            { en: "Is cold today. → It's cold today.", pt: "A frase precisa do sujeito it." },
            { en: "The weather is cold today, is very good. → It's cold today, but it's nice.", pt: "Repita it, não the weather, na segunda parte da frase." },
          ],
        },
        {
          title: { en: "in + season", pt: "in + estação" },
          examples: [
            { en: "In summer, it's hot.", pt: "No verão, está quente." },
            { en: "In winter, it's cold and snowy.", pt: "No inverno, está frio e neva." },
            { en: "In spring, it's warm and sunny.", pt: "Na primavera, está ameno e ensolarado." },
          ],
          rule: {
            en: "Use in + season to say what the weather is usually like: in spring/summer/autumn/winter.",
            pt: "Use in + estação para dizer como o clima costuma ser: in spring/summer/autumn/winter.",
          },
          mistakes: [
            { en: "At winter, it's cold. → In winter, it's cold.", pt: "Estações usam in, não at." },
            { en: "In winter is cold. → In winter, it's cold.", pt: "A frase ainda precisa do it antes de is." },
          ],
        },
      ],
      controlledPractice: [
        {
          id: "b20d-cp1",
          prompt: { en: "Complete: ___ sunny today.", pt: "Complete: ___ sunny today." },
          options: ["Is", "It's", "Are"],
          answer: "It's",
          explanation: { en: "it's + adjective for weather.", pt: "it's + adjetivo para clima." },
        },
        {
          id: "b20d-cp2",
          prompt: { en: "Complete: ___ winter, it's cold.", pt: "Complete: ___ winter, it's cold." },
          options: ["At", "On", "In"],
          answer: "In",
          explanation: { en: "in + season.", pt: "in + estação." },
        },
        {
          id: "b20d-cp3",
          prompt: { en: "Choose the correct sentence.", pt: "Escolha a frase correta." },
          options: ["Is cold today.", "It's cold today.", "It cold today."],
          answer: "It's cold today.",
          explanation: { en: "It's + adjective.", pt: "It's + adjetivo." },
        },
        {
          id: "b20d-cp4",
          prompt: { en: "Complete: It's very ___ in summer.", pt: "Complete: It's very ___ in summer." },
          options: ["hot", "hotter", "hotly"],
          answer: "hot",
          explanation: { en: "it's + adjective (base form).", pt: "it's + adjetivo (forma base)." },
        },
        {
          id: "b20d-cp5",
          prompt: { en: "Opposite of 'hot':", pt: "Oposto de 'hot':" },
          options: ["cold", "windy", "sunny"],
          answer: "cold",
          explanation: { en: "hot ↔ cold.", pt: "hot ↔ cold." },
        },
        {
          id: "b20d-cp6",
          prompt: { en: "Complete: It doesn't ___ much in my city.", pt: "Complete: It doesn't ___ much in my city." },
          options: ["snow", "snows", "snowing"],
          answer: "snow",
          explanation: { en: "doesn't + base verb.", pt: "doesn't + verbo base." },
        },
      ],
      input: {
        kind: "listening",
        title: { en: "Listening — Weather report", pt: "Listening — Previsão do tempo" },
        lines: [
          { en: "Good morning! Today it's sunny and warm in the city center.", pt: "Bom dia! Hoje está ensolarado e ameno no centro da cidade." },
          { en: "In the north, it's cloudy and a little windy this afternoon.", pt: "No norte, está nublado e um pouco ventoso esta tarde." },
          { en: "It's cold in the mountains, and it may snow tonight.", pt: "Está frio nas montanhas, e pode nevar hoje à noite." },
          { en: "Tomorrow it will be rainy in the morning.", pt: "Amanhã vai estar chuvoso pela manhã." },
          { en: "In summer, this city is usually hot and sunny every day.", pt: "No verão, esta cidade costuma ser quente e ensolarada todos os dias." },
        ],
        questions: [
          {
            id: "b20d-r1",
            prompt: { en: "What is the weather like in the city center today?", pt: "Como está o clima no centro da cidade hoje?" },
            options: ["sunny and warm", "cold and snowy", "rainy"],
            answer: "sunny and warm",
            explanation: { en: "today it's sunny and warm.", pt: "today it's sunny and warm." },
          },
          {
            id: "b20d-r2",
            prompt: { en: "What may happen tonight in the mountains?", pt: "O que pode acontecer hoje à noite nas montanhas?" },
            options: ["snow", "rain", "wind"],
            answer: "snow",
            explanation: { en: "it may snow tonight.", pt: "it may snow tonight." },
          },
          {
            id: "b20d-r3",
            prompt: { en: "What is the weather usually like in summer?", pt: "Como costuma ser o clima no verão?" },
            options: ["hot and sunny", "cold and windy", "cloudy"],
            answer: "hot and sunny",
            explanation: { en: "this city is usually hot and sunny.", pt: "this city is usually hot and sunny." },
          },
        ],
      },
      quickCheck: [
        {
          id: "b20d-qc1",
          prompt: { en: "Choose the correct sentence.", pt: "Escolha a frase correta." },
          options: ["It's rainy today.", "Is rainy today.", "It rainy today."],
          answer: "It's rainy today.",
          explanation: { en: "it's + adjective.", pt: "it's + adjetivo." },
        },
        {
          id: "b20d-qc2",
          prompt: { en: "Complete: ___ spring, it's warm.", pt: "Complete: ___ spring, it's warm." },
          options: ["At", "In", "On"],
          answer: "In",
          explanation: { en: "in + season.", pt: "in + estação." },
        },
        {
          id: "b20d-qc3",
          prompt: { en: "Which phrase starts small talk about the weather?", pt: "Qual frase inicia small talk sobre o clima?" },
          options: ["Nice day, isn't it?", "I need help with this.", "What about you?"],
          answer: "Nice day, isn't it?",
          explanation: { en: "Nice day, isn't it? is common small talk.", pt: "Nice day, isn't it? é um small talk comum." },
        },
        {
          id: "b20d-qc4",
          prompt: { en: "Opposite of 'sunny':", pt: "Oposto de 'sunny':" },
          options: ["cloudy", "warm", "hot"],
          answer: "cloudy",
          explanation: { en: "sunny ↔ cloudy (contextually opposite).", pt: "sunny ↔ cloudy (opostos no contexto)." },
        },
      ],
    },
    communicate: {
      id: "BEGINNER-U20-COMMUNICATE",
      review: [
        { en: "it's + adjective to talk about the weather.", pt: "it's + adjetivo para falar do clima." },
        { en: "in + season for typical weather.", pt: "in + estação para o clima típico." },
        { en: "Nice day, isn't it? to start small talk.", pt: "Nice day, isn't it? para puxar conversa." },
      ],
      activities: [
        {
          id: "b20c-a1",
          title: { en: "Today's weather", pt: "O clima hoje" },
          instruction: {
            en: "Describe today's weather in two sentences.",
            pt: "Descreva o clima de hoje em duas frases.",
          },
          phrases: [
            { en: "It's sunny and warm today.", pt: "Está ensolarado e ameno hoje." },
            { en: "It's a little windy this afternoon.", pt: "Está um pouco ventoso esta tarde." },
          ],
          check: [
            {
              id: "b20c-a1q1",
              prompt: { en: "Complete: ___ cold this morning.", pt: "Complete: ___ cold this morning." },
              options: ["Is", "It's", "Are"],
              answer: "It's",
              explanation: { en: "it's + adjective.", pt: "it's + adjetivo." },
            },
          ],
        },
        {
          id: "b20c-a2",
          title: { en: "My favorite season", pt: "Minha estação favorita" },
          instruction: {
            en: "Say your favorite season and why, using like/prefer and weather adjectives.",
            pt: "Diga sua estação favorita e por quê, usando like/prefer e adjetivos de clima.",
          },
          phrases: [
            { en: "I like summer because it's hot and sunny.", pt: "Eu gosto do verão porque é quente e ensolarado." },
            { en: "I prefer winter to summer.", pt: "Eu prefiro o inverno ao verão." },
          ],
          check: [
            {
              id: "b20c-a2q1",
              prompt: { en: "Complete: I like summer ___ it's sunny.", pt: "Complete: I like summer ___ it's sunny." },
              options: ["because", "but", "so"],
              answer: "because",
              explanation: { en: "because gives a reason.", pt: "because dá uma razão." },
            },
          ],
        },
        {
          id: "b20c-a3",
          title: { en: "Start a conversation", pt: "Puxe uma conversa" },
          instruction: {
            en: "Start small talk about the weather with a stranger, using Nice day, isn't it?",
            pt: "Puxe conversa sobre o clima com um desconhecido, usando Nice day, isn't it?",
          },
          phrases: [
            { en: "Nice day, isn't it?", pt: "Belo dia, não é?" },
            { en: "Yes, it's warm for this time of year.", pt: "Sim, está ameno para esta época do ano." },
          ],
          check: [
            {
              id: "b20c-a3q1",
              prompt: { en: "Choose the natural reply to small talk.", pt: "Escolha a resposta natural ao small talk." },
              options: ["Yes, it's very warm today.", "Yes, is warm today.", "Yes, it warm today."],
              answer: "Yes, it's very warm today.",
              explanation: { en: "it's + adjective.", pt: "it's + adjetivo." },
            },
          ],
        },
      ],
      challenge: {
        id: "b20c-challenge",
        title: { en: "Communication Challenge — Small talk at a bus stop", pt: "Desafio de comunicação — Small talk no ponto de ônibus" },
        instruction: {
          en: "Start a conversation with a stranger about the weather, compare seasons in two cities, and close politely.",
          pt: "Puxe conversa com um desconhecido sobre o clima, compare estações em duas cidades e encerre educadamente.",
        },
        phrases: [
          { en: "Nice day, isn't it?", pt: "Belo dia, não é?" },
          { en: "In my city, it's very hot in summer and cold in winter.", pt: "Na minha cidade, é muito quente no verão e frio no inverno." },
          { en: "It was nice talking to you. Have a good day!", pt: "Foi bom conversar com você. Tenha um bom dia!" },
        ],
        check: [
          {
            id: "b20c-ch1",
            prompt: { en: "Which sentence has NO mistake?", pt: "Qual frase NÃO tem erro?" },
            options: ["It's cold in winter.", "Is cold at winter.", "It cold in winter."],
            answer: "It's cold in winter.",
            explanation: { en: "it's + adjective + in + season.", pt: "it's + adjetivo + in + estação." },
          },
          {
            id: "b20c-ch2",
            prompt: { en: "Which sentence starts small talk naturally?", pt: "Qual frase puxa conversa naturalmente?" },
            options: ["Nice day, isn't it?", "I need to charge my phone.", "Do you need anything else?"],
            answer: "Nice day, isn't it?",
            explanation: { en: "small talk opener about weather.", pt: "abertura de small talk sobre o clima." },
          },
        ],
      },
      lessonReview: {
        summary: {
          en: "You talked about the weather and seasons and started small talk with a stranger.",
          pt: "Você falou sobre o clima e as estações e puxou conversa com um desconhecido.",
        },
        canDo: [
          { en: "I can describe today's weather.", pt: "Consigo descrever o clima de hoje." },
          { en: "I can talk about the weather in different seasons.", pt: "Consigo falar do clima em diferentes estações." },
          { en: "I can start small talk with a stranger.", pt: "Consigo puxar conversa com um desconhecido." },
        ],
        next: {
          en: "Next: Checkpoint — review Units 12–20 and describe your world.",
          pt: "Próximo: Checkpoint — revisar as Unidades 12–20 e descrever seu mundo.",
        },
      },
    },
  },
  {
    code: "BEGINNER-U21",
    number: 21,
    title: "Checkpoint — My World",
    titlePt: "Checkpoint — Meu mundo",
    cefr: "A1",
    objective: {
      en: "Consolidate Blocks C and D: there is/are, can/can't, imperatives, prepositions of place, like/want/need, adjectives and weather.",
      pt: "Consolidar os Blocos C e D: there is/are, can/can't, imperativo, preposições de lugar, like/want/need, adjetivos e clima.",
    },
    communicationGoal: {
      en: "You can describe your world — places, abilities, preferences and needs — and score 80% on the checkpoint.",
      pt: "Você consegue descrever seu mundo — lugares, habilidades, preferências e necessidades — e alcançar 80% no checkpoint.",
    },
    prerequisites: {
      en: "Unit 20 — weather and seasons, and all of Units 12–19.",
      pt: "Unidade 20 — clima e estações, e todas as Unidades 12–19.",
    },
    newContent: {
      en: "No new grammar. Mixed review activities and a longer guided conversation.",
      pt: "Sem gramática nova. Atividades mistas de revisão e uma conversa guiada mais longa.",
    },
    reviewContent: {
      en: "Review of Units 12–20: there is/are, can/can't, imperative, prepositions of place, like/prefer, want/need, adjectives, weather.",
      pt: "Revisão das Unidades 12–20: there is/are, can/can't, imperativo, preposições de lugar, like/prefer, want/need, adjetivos, clima.",
    },
    discover: {
      id: "BEGINNER-U21-DISCOVER",
      warmUp: {
        prompt: {
          en: "Look at the picture. It is a mosaic of places and people from your world. What can you say about each part?",
          pt: "Observe a imagem. É um mosaico de lugares e pessoas do seu mundo. O que você consegue dizer sobre cada parte?",
        },
        phrases: [
          { en: "There is a park near my house.", pt: "Há um parque perto da minha casa." },
          { en: "I like reading books, but I prefer watching movies.", pt: "Eu gosto de ler livros, mas prefiro assistir a filmes." },
          { en: "It's sunny today, and I need a coffee.", pt: "Está ensolarado hoje, e eu preciso de um café." },
        ],
      },
      context: {
        situation: {
          en: "Bruno, Helena and Ivan meet at the coworking and talk about their week, mixing places, likes and the weather.",
          pt: "Bruno, Helena e Ivan se encontram no coworking e falam sobre a semana, misturando lugares, gostos e clima.",
        },
        dialogue: [
          { who: "Helena", en: "Nice day, isn't it? It's warm for October.", pt: "Belo dia, não é? Está ameno para outubro." },
          { who: "Bruno", en: "Yes! There's a new café next to the coworking. Can we go there?", pt: "Sim! Tem um café novo do lado do coworking. Podemos ir lá?" },
          { who: "Ivan", en: "Sure. I need a coffee, and I want to sit outside.", pt: "Claro. Eu preciso de um café, e quero sentar do lado de fora." },
          { who: "Helena", en: "Turn left at the corner, and the café is on your right.", pt: "Vire à esquerda na esquina, e o café fica à sua direita." },
          { who: "Bruno", en: "Can you see it? It's the one with the blue door.", pt: "Você está vendo? É aquele com a porta azul." },
          { who: "Ivan", en: "Yes! I like this place. It looks quiet and friendly.", pt: "Sim! Eu gosto deste lugar. Parece tranquilo e simpático." },
          { who: "Helena", en: "I prefer this café to the one downtown. There are more tables here.", pt: "Eu prefiro este café ao do centro. Tem mais mesas aqui." },
          { who: "Bruno", en: "Great, let's sit here. It's a perfect day for it.", pt: "Ótimo, vamos sentar aqui. É um dia perfeito para isso." },
        ],
      },
      vocabulary: [
        { term: "there is / there are", pt: "há / existe(m)", ipa: "/ðer ɪz ðer ɑːr/", definition: "Used to say something exists.", example: "There is a park near my house.", examplePt: "Há um parque perto da minha casa." },
        { term: "can / can't", pt: "poder / não poder, saber / não saber", ipa: "/kæn kænt/", definition: "Used to talk about ability or permission.", example: "Can we go there?", examplePt: "Podemos ir lá?" },
        { term: "turn left / right", pt: "virar à esquerda / à direita", ipa: "/tɜːrn left raɪt/", definition: "To change direction while walking or driving.", example: "Turn left at the corner.", examplePt: "Vire à esquerda na esquina." },
        { term: "next to", pt: "do lado de", ipa: "/nekst tuː/", definition: "Right beside something.", example: "The café is next to the coworking.", examplePt: "O café fica do lado do coworking." },
        { term: "like / prefer", pt: "gostar / preferir", ipa: "/laɪk prɪˈfɜːr/", definition: "To enjoy or to choose one thing over another.", example: "I prefer this café to the one downtown.", examplePt: "Eu prefiro este café ao do centro." },
        { term: "want / need", pt: "querer / precisar", ipa: "/wɑːnt niːd/", definition: "To desire or to require something.", example: "I need a coffee.", examplePt: "Eu preciso de um café." },
        { term: "friendly / quiet", pt: "simpático / tranquilo", ipa: "/ˈfrendli ˈkwaɪət/", definition: "Adjectives to describe a place or a person.", example: "It looks quiet and friendly.", examplePt: "Parece tranquilo e simpático." },
        { term: "warm / sunny", pt: "ameno / ensolarado", ipa: "/wɔːrm ˈsʌni/", definition: "Adjectives to describe the weather.", example: "It's warm for October.", examplePt: "Está ameno para outubro." },
        { term: "the one with...", pt: "aquele(a) com...", ipa: "/ðə wʌn wɪð/", definition: "Used to identify something or someone by a feature.", example: "It's the one with the blue door.", examplePt: "É aquele com a porta azul." },
        { term: "sit outside", pt: "sentar do lado de fora", ipa: "/sɪt ˌaʊtˈsaɪd/", definition: "To sit in an outdoor area.", example: "I want to sit outside.", examplePt: "Eu quero sentar do lado de fora." },
      ],
      expressions: [
        { en: "Nice day, isn't it?", pt: "Belo dia, não é?" },
        { en: "Can we go there?", pt: "Podemos ir lá?" },
        { en: "It's the one with...", pt: "É aquele(a) com..." },
        { en: "I prefer this to that.", pt: "Eu prefiro isso a aquilo." },
        { en: "I need... and I want...", pt: "Eu preciso... e eu quero..." },
        { en: "It's a perfect day for it.", pt: "É um dia perfeito para isso." },
      ],
      grammar: [
        {
          title: { en: "Review: there is/are, can/can't and prepositions of place", pt: "Revisão: there is/are, can/can't e preposições de lugar" },
          examples: [
            { en: "There is a new café next to the coworking.", pt: "Tem um café novo do lado do coworking." },
            { en: "Can we go there? Yes, we can.", pt: "Podemos ir lá? Sim, podemos." },
            { en: "Turn left, and the café is on your right.", pt: "Vire à esquerda, e o café fica à sua direita." },
          ],
          rule: {
            en: "There is/are describes what exists; can/can't talks about ability or permission; prepositions like next to, on the right/left give location.",
            pt: "There is/are descreve o que existe; can/can't fala de habilidade ou permissão; preposições como next to, on the right/left dão a localização.",
          },
          mistakes: [
            { en: "Is a café next to the coworking. → There is a café next to the coworking.", pt: "A frase precisa de there antes de is/are." },
            { en: "We can to go there. → We can go there.", pt: "Depois de can, o verbo não leva to." },
          ],
        },
        {
          title: { en: "Review: like/prefer, want/need and adjectives", pt: "Revisão: like/prefer, want/need e adjetivos" },
          examples: [
            { en: "I prefer this café to the one downtown.", pt: "Eu prefiro este café ao do centro." },
            { en: "I need a coffee, and I want to sit outside.", pt: "Eu preciso de um café, e quero sentar do lado de fora." },
            { en: "It looks quiet and friendly.", pt: "Parece tranquilo e simpático." },
          ],
          rule: {
            en: "Use like/prefer + noun or -ing for preferences, want/need + noun or to + verb for desires and necessities, and adjectives before nouns or after look/looks.",
            pt: "Use like/prefer + substantivo ou -ing para preferências, want/need + substantivo ou to + verbo para desejos e necessidades, e adjetivos antes de substantivos ou depois de look/looks.",
          },
          mistakes: [
            { en: "I prefer this than that. → I prefer this to that.", pt: "Prefer usa to, não than." },
            { en: "It looks like quiet. → It looks quiet.", pt: "Look/looks + adjetivo, sem like." },
          ],
        },
      ],
      controlledPractice: [
        {
          id: "b21d-cp1",
          prompt: { en: "Complete: ___ a park near my house.", pt: "Complete: ___ a park near my house." },
          options: ["There is", "Is", "There are"],
          answer: "There is",
          explanation: { en: "there is + singular noun.", pt: "there is + substantivo singular." },
        },
        {
          id: "b21d-cp2",
          prompt: { en: "Complete: We ___ go there tomorrow.", pt: "Complete: We ___ go there tomorrow." },
          options: ["can", "can to", "cans"],
          answer: "can",
          explanation: { en: "can + base verb, no to.", pt: "can + verbo base, sem to." },
        },
        {
          id: "b21d-cp3",
          prompt: { en: "Complete: The café is ___ the coworking.", pt: "Complete: The café is ___ the coworking." },
          options: ["next to", "next at", "next in"],
          answer: "next to",
          explanation: { en: "next to = right beside.", pt: "next to = do lado de." },
        },
        {
          id: "b21d-cp4",
          prompt: { en: "Complete: I prefer coffee ___ tea.", pt: "Complete: I prefer coffee ___ tea." },
          options: ["than", "to", "for"],
          answer: "to",
          explanation: { en: "prefer X to Y.", pt: "prefer X to Y." },
        },
        {
          id: "b21d-cp5",
          prompt: { en: "Complete: I need ___ a coffee.", pt: "Complete: I need ___ a coffee." },
          options: ["", "to", "for"],
          answer: "",
          explanation: { en: "need + noun directly.", pt: "need + substantivo diretamente." },
        },
        {
          id: "b21d-cp6",
          prompt: { en: "Choose the correct sentence.", pt: "Escolha a frase correta." },
          options: ["It looks like friendly.", "It looks friendly.", "It look friendly."],
          answer: "It looks friendly.",
          explanation: { en: "It + looks + adjective.", pt: "It + looks + adjetivo." },
        },
        {
          id: "b21d-cp7",
          prompt: { en: "Complete: ___ warm today.", pt: "Complete: ___ warm today." },
          options: ["It's", "Is", "There's"],
          answer: "It's",
          explanation: { en: "it's + adjective for weather.", pt: "it's + adjetivo para clima." },
        },
        {
          id: "b21d-cp8",
          prompt: { en: "Complete: She's the one ___ the blue jacket.", pt: "Complete: She's the one ___ the blue jacket." },
          options: ["with", "of", "in"],
          answer: "with",
          explanation: { en: "the one with + feature.", pt: "the one with + característica." },
        },
      ],
      input: {
        kind: "listening",
        title: { en: "Listening — A mixed conversation", pt: "Listening — Uma conversa mista" },
        lines: [
          { en: "There is a new bookstore on Main Street, next to the bank.", pt: "Tem uma livraria nova na Main Street, do lado do banco." },
          { en: "Can you go there this weekend? I need a new book.", pt: "Você pode ir lá neste fim de semana? Eu preciso de um livro novo." },
          { en: "I prefer reading to watching movies, so yes, let's go.", pt: "Eu prefiro ler a assistir a filmes, então sim, vamos." },
          { en: "It's cloudy today, but it's not cold.", pt: "Está nublado hoje, mas não está frio." },
          { en: "The bookstore is the one with the yellow sign.", pt: "A livraria é aquela com a placa amarela." },
        ],
        questions: [
          {
            id: "b21d-r1",
            prompt: { en: "Where is the new bookstore?", pt: "Onde fica a livraria nova?" },
            options: ["next to the bank", "next to the café", "next to the park"],
            answer: "next to the bank",
            explanation: { en: "on Main Street, next to the bank.", pt: "on Main Street, next to the bank." },
          },
          {
            id: "b21d-r2",
            prompt: { en: "Why does the speaker want to go?", pt: "Por que a pessoa quer ir?" },
            options: ["needs a new book", "needs a coffee", "needs directions"],
            answer: "needs a new book",
            explanation: { en: "I need a new book.", pt: "I need a new book." },
          },
          {
            id: "b21d-r3",
            prompt: { en: "What does the speaker prefer to watching movies?", pt: "O que a pessoa prefere a assistir a filmes?" },
            options: ["reading", "cooking", "dancing"],
            answer: "reading",
            explanation: { en: "I prefer reading to watching movies.", pt: "I prefer reading to watching movies." },
          },
          {
            id: "b21d-r4",
            prompt: { en: "How is the weather today?", pt: "Como está o clima hoje?" },
            options: ["cloudy, not cold", "sunny and hot", "rainy and cold"],
            answer: "cloudy, not cold",
            explanation: { en: "it's cloudy today, but it's not cold.", pt: "it's cloudy today, but it's not cold." },
          },
        ],
      },
      quickCheck: [
        {
          id: "b21d-qc1",
          prompt: { en: "Choose the correct sentence.", pt: "Escolha a frase correta." },
          options: ["There is a park near here.", "Is a park near here.", "There a park near here."],
          answer: "There is a park near here.",
          explanation: { en: "there is + noun.", pt: "there is + substantivo." },
        },
        {
          id: "b21d-qc2",
          prompt: { en: "Complete: I ___ swim, but I can't cook.", pt: "Complete: I ___ swim, but I can't cook." },
          options: ["can", "can to", "cans"],
          answer: "can",
          explanation: { en: "can + base verb.", pt: "can + verbo base." },
        },
        {
          id: "b21d-qc3",
          prompt: { en: "Complete: I prefer tea ___ coffee.", pt: "Complete: I prefer tea ___ coffee." },
          options: ["to", "than", "for"],
          answer: "to",
          explanation: { en: "prefer X to Y.", pt: "prefer X to Y." },
        },
        {
          id: "b21d-qc4",
          prompt: { en: "Complete: ___ cold today.", pt: "Complete: ___ cold today." },
          options: ["It's", "Is", "There's"],
          answer: "It's",
          explanation: { en: "it's + adjective for weather.", pt: "it's + adjetivo para clima." },
        },
        {
          id: "b21d-qc5",
          prompt: { en: "Complete: I ___ some help with this.", pt: "Complete: I ___ some help with this." },
          options: ["need", "needs", "needing"],
          answer: "need",
          explanation: { en: "I + need.", pt: "I + need." },
        },
      ],
    },
    communicate: {
      id: "BEGINNER-U21-COMMUNICATE",
      review: [
        { en: "there is/are + prepositions of place to describe locations.", pt: "there is/are + preposições de lugar para descrever locais." },
        { en: "can/can't for ability and permission; imperatives for directions.", pt: "can/can't para habilidade e permissão; imperativo para direções." },
        { en: "like/prefer and want/need to talk about preferences and necessities.", pt: "like/prefer e want/need para falar de preferências e necessidades." },
        { en: "adjectives to describe people, places and the weather.", pt: "adjetivos para descrever pessoas, lugares e o clima." },
      ],
      activities: [
        {
          id: "b21c-a1",
          title: { en: "My neighborhood", pt: "Meu bairro" },
          instruction: {
            en: "Describe your neighborhood: what there is, where things are, and give one direction with an imperative.",
            pt: "Descreva seu bairro: o que há, onde ficam as coisas, e dê uma direção com o imperativo.",
          },
          phrases: [
            { en: "There is a supermarket next to my house.", pt: "Tem um supermercado do lado da minha casa." },
            { en: "Turn right at the corner to find the park.", pt: "Vire à direita na esquina para encontrar o parque." },
          ],
          check: [
            {
              id: "b21c-a1q1",
              prompt: { en: "Complete: ___ a supermarket near my house.", pt: "Complete: ___ a supermarket near my house." },
              options: ["There is", "Is", "It is"],
              answer: "There is",
              explanation: { en: "there is + singular noun.", pt: "there is + substantivo singular." },
            },
          ],
        },
        {
          id: "b21c-a2",
          title: { en: "What I like, want and need", pt: "O que eu gosto, quero e preciso" },
          instruction: {
            en: "Say one preference with prefer, one want and one need.",
            pt: "Diga uma preferência com prefer, um want e um need.",
          },
          phrases: [
            { en: "I prefer walking to driving.", pt: "Eu prefiro caminhar a dirigir." },
            { en: "I want to travel this year, and I need to save money.", pt: "Eu quero viajar este ano, e preciso economizar dinheiro." },
          ],
          check: [
            {
              id: "b21c-a2q1",
              prompt: { en: "Complete: I need ___ money for the trip.", pt: "Complete: I need ___ money for the trip." },
              options: ["save", "to save", "saving"],
              answer: "to save",
              explanation: { en: "need + to + base verb.", pt: "need + to + verbo base." },
            },
          ],
        },
        {
          id: "b21c-a3",
          title: { en: "People and weather", pt: "Pessoas e clima" },
          instruction: {
            en: "Describe a person and today's weather in the same short turn.",
            pt: "Descreva uma pessoa e o clima de hoje na mesma fala curta.",
          },
          phrases: [
            { en: "My friend is tall and friendly, and today it's sunny.", pt: "Meu amigo é alto e simpático, e hoje está ensolarado." },
            { en: "She looks happy because it's warm outside.", pt: "Ela parece feliz porque está ameno lá fora." },
          ],
          check: [
            {
              id: "b21c-a3q1",
              prompt: { en: "Complete: She ___ happy today.", pt: "Complete: She ___ happy today." },
              options: ["look", "looks", "looking"],
              answer: "looks",
              explanation: { en: "she + looks.", pt: "she + looks." },
            },
          ],
        },
      ],
      challenge: {
        id: "b21c-challenge",
        title: { en: "Communication Challenge — 3-minute conversation", pt: "Desafio de comunicação — Conversa de 3 minutos" },
        instruction: {
          en: "Have a guided conversation about your world: describe a place, give directions, talk about your preferences and needs, describe a person, and comment on the weather.",
          pt: "Tenha uma conversa guiada sobre o seu mundo: descreva um lugar, dê direções, fale de preferências e necessidades, descreva uma pessoa e comente o clima.",
        },
        phrases: [
          { en: "There is a nice café near my house, next to the park.", pt: "Tem um café legal perto da minha casa, do lado do parque." },
          { en: "Turn left at the corner, and you can see it on your right.", pt: "Vire à esquerda na esquina, e você pode vê-lo à sua direita." },
          { en: "I prefer this café to the one downtown, and I need a coffee now.", pt: "Eu prefiro este café ao do centro, e preciso de um café agora." },
          { en: "My friend is the one with curly hair, and she looks very happy today.", pt: "Minha amiga é aquela com cabelo cacheado, e ela parece muito feliz hoje." },
          { en: "It's sunny and warm, a perfect day for a walk.", pt: "Está ensolarado e ameno, um dia perfeito para uma caminhada." },
        ],
        check: [
          {
            id: "b21c-ch1",
            prompt: { en: "Which sentence has NO mistake?", pt: "Qual frase NÃO tem erro?" },
            options: ["There is a park next to my house.", "Is a park next my house.", "There a park next to house."],
            answer: "There is a park next to my house.",
            explanation: { en: "there is + noun + next to + place.", pt: "there is + substantivo + next to + lugar." },
          },
          {
            id: "b21c-ch2",
            prompt: { en: "Which sentence has NO mistake?", pt: "Qual frase NÃO tem erro?" },
            options: ["I prefer this to that.", "I prefer this than that.", "I prefer to this that."],
            answer: "I prefer this to that.",
            explanation: { en: "prefer X to Y.", pt: "prefer X to Y." },
          },
          {
            id: "b21c-ch3",
            prompt: { en: "Which sentence has NO mistake?", pt: "Qual frase NÃO tem erro?" },
            options: ["It's warm today.", "Is warm today.", "It warm today."],
            answer: "It's warm today.",
            explanation: { en: "it's + adjective.", pt: "it's + adjetivo." },
          },
        ],
      },
      lessonReview: {
        summary: {
          en: "You reviewed Units 12–20 and sustained a longer conversation describing places, abilities, preferences, needs, people and the weather.",
          pt: "Você revisou as Unidades 12–20 e sustentou uma conversa mais longa descrevendo lugares, habilidades, preferências, necessidades, pessoas e clima.",
        },
        canDo: [
          { en: "I can describe places with there is/are and prepositions of place.", pt: "Consigo descrever lugares com there is/are e preposições de lugar." },
          { en: "I can talk about my preferences, wants and needs.", pt: "Consigo falar das minhas preferências, desejos e necessidades." },
          { en: "I can describe people and the weather in the same conversation.", pt: "Consigo descrever pessoas e o clima na mesma conversa." },
          { en: "I can sustain a three-minute guided conversation about my world.", pt: "Consigo sustentar uma conversa guiada de três minutos sobre o meu mundo." },
        ],
        next: {
          en: "Next: Block E — talk about what is happening now and what happened in the past.",
          pt: "Próximo: Bloco E — falar sobre o que está acontecendo agora e o que aconteceu no passado.",
        },
      },
    },
  },
];
