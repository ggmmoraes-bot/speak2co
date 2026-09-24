import type { CourseUnit } from "./types";

/**
 * Intermediate — Unit 24 (Psychology Mindset — Linking words). Conteúdo autoral Speak2Co.
 * Foco: linking words (however, although, therefore, in addition) para conectar ideias,
 * vocabulário de mindset (resilience, motivation, self-awareness) e expressões de conselho
 * ("I'd recommend...", "You could try...", "It might be a good idea to...").
 * Personagens originais: Carlos e Maria, colegas que conversam sobre como lidar com estresse.
 */
export const INTERMEDIATE_U24: CourseUnit = {
  code: "INTERMEDIATE-U24",
  number: 24,
  title: "Mindset Matters — What could you try to feel better?",
  titlePt: "A Mentalidade Importa — O que você poderia tentar para se sentir melhor?",
  cefr: "B1",
  objective: {
    en: "Connect ideas with linking words (however, although, therefore, in addition) and give advice about mindset and stress management.",
    pt: "Conectar ideias com linking words (however, although, therefore, in addition) e dar conselhos sobre mentalidade e controle do estresse.",
  },
  communicationGoal: {
    en: "Talk about resilience, motivation and stress, connecting ideas clearly and offering advice to a friend or colleague.",
    pt: "Falar sobre resiliência, motivação e estresse, conectando ideias com clareza e oferecendo conselhos a um amigo ou colega.",
  },
  prerequisites: {
    en: "Intermediate: modal verbs (should, could, might), present simple and continuous.",
    pt: "Intermediate: verbos modais (should, could, might), presente simples e contínuo.",
  },
  newContent: {
    en: "Grammar: linking words 'however', 'although', 'therefore', 'in addition' | Vocabulary: mindset and psychology (resilience, motivation, self-awareness, growth mindset, 12 items) | Expressions: giving advice (I'd recommend, You could try, It might be a good idea to)",
    pt: "Gramática: linking words 'however', 'although', 'therefore', 'in addition' | Vocabulário: mentalidade e psicologia (resilience, motivation, self-awareness, growth mindset, 12 itens) | Expressões: dar conselhos (I'd recommend, You could try, It might be a good idea to)",
  },
  reviewContent: {
    en: "Modal verbs for advice (should, could, might).",
    pt: "Verbos modais para conselhos (should, could, might).",
  },
  discover: {
    id: "INTERMEDIATE-U24-DISCOVER",
    warmUp: {
      prompt: {
        en: "Look at the picture. How do you think this person is feeling? What could help someone manage stress?",
        pt: "Observe a imagem. Como você acha que essa pessoa está se sentindo? O que poderia ajudar alguém a controlar o estresse?",
      },
      phrases: [
        { en: "How do you usually deal with stress?", pt: "Como você costuma lidar com o estresse?" },
        { en: "What helps you stay positive?", pt: "O que te ajuda a ficar positivo?" },
        { en: "Have you ever felt a lot of pressure at work?", pt: "Você já sentiu muita pressão no trabalho?" },
      ],
    },
    context: {
      situation: {
        en: "Carlos feels a lot of pressure at work and talks to his colleague Maria, who studies psychology and gives him some advice about mindset.",
        pt: "Carlos sente muita pressão no trabalho e conversa com sua colega Maria, que estuda psicologia e lhe dá alguns conselhos sobre mentalidade.",
      },
      dialogue: [
        { who: "Carlos", en: "I probably need to manage my stress better. I feel a lot of pressure lately.", pt: "Eu provavelmente preciso controlar melhor meu estresse. Tenho sentido muita pressão ultimamente." },
        { who: "Maria", en: "I understand. However, a positive mindset can change a lot. Have you tried reflecting on your achievements?", pt: "Eu entendo. No entanto, uma mentalidade positiva pode mudar muito. Você já tentou refletir sobre suas conquistas?" },
        { who: "Carlos", en: "Not really. Although I finish my tasks, I never feel satisfied.", pt: "Não muito. Embora eu termine minhas tarefas, nunca me sinto satisfeito." },
        { who: "Maria", en: "I'd recommend building your resilience. You could try acknowledging your small victories every day.", pt: "Eu recomendaria construir sua resiliência. Você poderia tentar reconhecer suas pequenas vitórias todos os dias." },
        { who: "Carlos", en: "That's a good point. It might be a good idea to find a new hobby too, don't you think?", pt: "É um bom ponto. Pode ser uma boa ideia encontrar um novo hobby também, você não acha?" },
        { who: "Maria", en: "Definitely. In addition, having a growth mindset helps you see challenges as opportunities.", pt: "Com certeza. Além disso, ter uma mentalidade de crescimento ajuda você a ver desafios como oportunidades." },
        { who: "Carlos", en: "Thank you, Maria. Every step forward counts, right?", pt: "Obrigado, Maria. Cada passo à frente conta, certo?" },
        { who: "Maria", en: "Exactly. Therefore, be patient with yourself and keep practicing self-awareness.", pt: "Exatamente. Portanto, seja paciente consigo mesmo e continue praticando a autoconsciência." },
      ],
    },
    vocabulary: [
      { term: "resilience", pt: "resiliência", ipa: "/rɪˈzɪliəns/", definition: "The ability to recover quickly from difficulties.", example: "Her resilience helped her keep going.", examplePt: "Sua resiliência a ajudou a continuar." },
      { term: "motivation", pt: "motivação", ipa: "/ˌmoʊtɪˈveɪʃn/", definition: "A strong reason or desire to do something.", example: "His motivation is very low right now.", examplePt: "Sua motivação está muito baixa agora." },
      { term: "self-awareness", pt: "autoconsciência", ipa: "/ˌself əˈwɛrnəs/", definition: "Understanding your own feelings, thoughts and behavior.", example: "She developed greater self-awareness.", examplePt: "Ela desenvolveu maior autoconsciência." },
      { term: "growth mindset", pt: "mentalidade de crescimento", ipa: "/ɡroʊθ ˈmaɪndset/", definition: "The belief that abilities can be developed through effort.", example: "Having a growth mindset is important.", examplePt: "Ter uma mentalidade de crescimento é importante." },
      { term: "habit", pt: "hábito", ipa: "/ˈhæbɪt/", definition: "Something you do regularly, often without thinking.", example: "Exercising is a common habit.", examplePt: "Se exercitar é um hábito comum." },
      { term: "confidence", pt: "confiança", ipa: "/ˈkɑːnfɪdəns/", definition: "A feeling of trust in your own abilities.", example: "He gained confidence after practicing.", examplePt: "Ele ganhou confiança depois de praticar." },
      { term: "pressure", pt: "pressão", ipa: "/ˈprɛʃər/", definition: "The feeling of stress caused by problems or demands.", example: "Too much work can cause a lot of pressure.", examplePt: "Trabalhar demais pode causar muita pressão." },
      { term: "well-being", pt: "bem-estar", ipa: "/wɛl ˈbiːɪŋ/", definition: "A state of being comfortable, healthy and happy.", example: "Finding balance is essential for well-being.", examplePt: "Encontrar equilíbrio é essencial para o bem-estar." },
      { term: "achievement", pt: "conquista", ipa: "/əˈtʃiːvmənt/", definition: "Something you have succeeded in doing.", example: "The team showed significant achievement.", examplePt: "A equipe demonstrou uma conquista significativa." },
      { term: "reflection", pt: "reflexão", ipa: "/rɪˈflɛkʃn/", definition: "Careful thought about something.", example: "She spent time in deep reflection.", examplePt: "Ela passou um tempo em reflexão profunda." },
      { term: "mindset", pt: "mentalidade", ipa: "/ˈmaɪndset/", definition: "A person's usual way of thinking about things.", example: "A good mindset helps you in life.", examplePt: "Uma boa mentalidade ajuda você na vida." },
      { term: "boundary", pt: "limite", ipa: "/ˈbaʊndri/", definition: "A limit that shows what behavior is acceptable.", example: "We could try setting clearer boundaries.", examplePt: "Poderíamos tentar estabelecer limites mais claros." },
    ],
    expressions: [
      { en: "I'd recommend building your resilience.", pt: "Eu recomendaria construir sua resiliência." },
      { en: "You could try meditating every morning.", pt: "Você poderia tentar meditar toda manhã." },
      { en: "It might be a good idea to rest.", pt: "Pode ser uma boa ideia descansar." },
      { en: "That's a good point.", pt: "É um bom ponto." },
      { en: "Every step forward counts.", pt: "Cada passo à frente conta." },
      { en: "I probably need to manage my stress better.", pt: "Provavelmente preciso controlar melhor meu estresse." },
    ],
    grammar: [
      {
        title: { en: "Linking words: however / although", pt: "Linking words: however / although" },
        examples: [
          { en: "The project was late; however, the results were excellent.", pt: "O projeto estava atrasado; no entanto, os resultados foram excelentes." },
          { en: "Although it was difficult, we finished on time.", pt: "Embora tenha sido difícil, terminamos no prazo." },
          { en: "I understand. However, a positive mindset can change a lot.", pt: "Eu entendo. No entanto, uma mentalidade positiva pode mudar muito." },
          { en: "Although it feels small, every step counts.", pt: "Embora pareça pequeno, cada passo conta." },
        ],
        rule: {
          en: "'However' connects two contrasting ideas, usually as a new sentence or after a semicolon: [idea]; however, [contrasting idea]. 'Although' introduces a subordinate clause and can start the sentence: Although + [clause], + [main clause]. Both show contrast, but 'although' joins the clauses directly, while 'however' separates them.",
          pt: "'However' conecta duas ideias contrastantes, geralmente como nova frase ou após ponto e vírgula: [ideia]; however, [ideia contrastante]. 'Although' introduz uma oração subordinada e pode começar a frase: Although + [oração], + [oração principal]. Ambos mostram contraste, mas 'although' une as orações diretamente, enquanto 'however' as separa.",
        },
        mistakes: [
          { en: "✗ It was difficult, however we finished. → ✓ It was difficult; however, we finished. (use ; or a new sentence with 'however')", pt: "✗ It was difficult, however we finished. → ✓ It was difficult; however, we finished. (use ; ou nova frase com 'however')" },
          { en: "✗ Although it was difficult, but we finished. → ✓ Although it was difficult, we finished. (don't use 'but' with 'although')", pt: "✗ Although it was difficult, but we finished. → ✓ Although it was difficult, we finished. (não use 'but' com 'although')" },
        ],
      },
      {
        title: { en: "Linking words: therefore / in addition", pt: "Linking words: therefore / in addition" },
        examples: [
          { en: "She studied hard; therefore, she passed the exam.", pt: "Ela estudou muito; portanto, passou no exame." },
          { en: "In addition, I need to manage my stress better.", pt: "Além disso, preciso controlar melhor meu estresse." },
          { en: "He is intelligent. In addition, he is very kind.", pt: "Ele é inteligente. Além disso, ele é muito gentil." },
          { en: "It's hard to stay positive; however, it's possible.", pt: "É difícil ficar positivo; no entanto, é possível." },
        ],
        rule: {
          en: "'Therefore' shows a result or consequence: [reason]; therefore, [result]. 'In addition' adds extra information to what was already said, usually starting a new sentence: In addition, [new idea]. Both are followed by a comma when they begin a sentence.",
          pt: "'Therefore' mostra um resultado ou consequência: [motivo]; therefore, [resultado]. 'In addition' acrescenta informação extra ao que já foi dito, geralmente iniciando uma nova frase: In addition, [nova ideia]. Ambos são seguidos de vírgula quando iniciam uma frase.",
        },
        mistakes: [
          { en: "✗ Therefore she passed. → ✓ Therefore, she passed. (add the comma after 'therefore')", pt: "✗ Therefore she passed. → ✓ Therefore, she passed. (adicione a vírgula depois de 'therefore')" },
          { en: "✗ In addition he is kind. → ✓ In addition, he is kind. (add the comma after 'in addition')", pt: "✗ In addition he is kind. → ✓ In addition, he is kind. (adicione a vírgula depois de 'in addition')" },
        ],
      },
      {
        title: { en: "Giving advice: I'd recommend / You could try / It might be a good idea to", pt: "Dar conselhos: I'd recommend / You could try / It might be a good idea to" },
        examples: [
          { en: "I'd recommend building your resilience.", pt: "Eu recomendaria construir sua resiliência." },
          { en: "You could try meditating every morning.", pt: "Você poderia tentar meditar toda manhã." },
          { en: "It might be a good idea to rest.", pt: "Pode ser uma boa ideia descansar." },
          { en: "You might want to focus on your growth.", pt: "Você talvez queira focar no seu crescimento." },
        ],
        rule: {
          en: "Use 'I'd recommend + verb-ing' or 'I'd recommend + noun' to give a strong suggestion. Use 'You could try + verb-ing' for a softer, optional suggestion. Use 'It might be a good idea to + verb (base form)' for a gentle, indirect suggestion.",
          pt: "Use 'I'd recommend + verb-ing' ou 'I'd recommend + substantivo' para dar uma sugestão forte. Use 'You could try + verb-ing' para uma sugestão mais suave e opcional. Use 'It might be a good idea to + verbo (forma base)' para uma sugestão gentil e indireta.",
        },
        mistakes: [
          { en: "✗ I'd recommend to build resilience. → ✓ I'd recommend building resilience. (use verb-ing after 'recommend')", pt: "✗ I'd recommend to build resilience. → ✓ I'd recommend building resilience. (use verb-ing depois de 'recommend')" },
          { en: "✗ It might be a good idea rest. → ✓ It might be a good idea to rest. (don't forget 'to')", pt: "✗ It might be a good idea rest. → ✓ It might be a good idea to rest. (não esqueça o 'to')" },
        ],
      },
    ],
    controlledPractice: [
      { id: "i24d-cp1", prompt: { en: "Complete: 'The project was late; ___, the results were excellent.'", pt: "Complete: 'The project was late; ___, the results were excellent.'" }, options: ["although", "however", "therefore"], answer: "however", explanation: { en: "'However' shows a contrast between two ideas.", pt: "'However' mostra um contraste entre duas ideias." } },
      { id: "i24d-cp2", prompt: { en: "Complete: '___ it was difficult, we finished on time.'", pt: "Complete: '___ it was difficult, we finished on time.'" }, options: ["Although", "Therefore", "In addition"], answer: "Although", explanation: { en: "'Although' introduces a contrasting clause at the start of the sentence.", pt: "'Although' introduz uma oração contrastante no início da frase." } },
      { id: "i24d-cp3", prompt: { en: "Complete: 'She studied hard; ___, she passed the exam.'", pt: "Complete: 'She studied hard; ___, she passed the exam.'" }, options: ["however", "although", "therefore"], answer: "therefore", explanation: { en: "'Therefore' shows a result or consequence.", pt: "'Therefore' mostra um resultado ou consequência." } },
      { id: "i24d-cp4", prompt: { en: "Choose the correct advice form: 'I'd recommend ___ your resilience.'", pt: "Escolha a forma correta: 'I'd recommend ___ your resilience.'" }, options: ["to build", "building", "build"], answer: "building", explanation: { en: "Use verb-ing after 'I'd recommend'.", pt: "Use verb-ing depois de 'I'd recommend'." } },
      { id: "i24d-cp5", prompt: { en: "Choose the correct sentence.", pt: "Escolha a frase correta." }, options: ["It might be a good idea rest.", "It might be a good idea to rest.", "It might be good idea to rest."], answer: "It might be a good idea to rest.", explanation: { en: "The structure is 'It might be a good idea to + verb'.", pt: "A estrutura é 'It might be a good idea to + verbo'." } },
    ],
    input: {
      kind: "reading",
      title: { en: "A blog post: Building a growth mindset", pt: "Um post de blog: Construindo uma mentalidade de crescimento" },
      lines: [
        { en: "Many people feel a lot of pressure at work. However, a positive mindset can make a big difference.", pt: "Muitas pessoas sentem muita pressão no trabalho. No entanto, uma mentalidade positiva pode fazer uma grande diferença." },
        { en: "Although change takes time, small habits can improve your well-being every day.", pt: "Embora a mudança leve tempo, pequenos hábitos podem melhorar seu bem-estar todos os dias." },
        { en: "I'd recommend starting with self-awareness: notice how you feel and why.", pt: "Eu recomendaria começar com autoconsciência: perceba como você se sente e por quê." },
        { en: "You could try writing down your achievements. In addition, celebrate your small victories.", pt: "Você poderia tentar anotar suas conquistas. Além disso, comemore suas pequenas vitórias." },
        { en: "Therefore, building resilience and a growth mindset is a process, not a single decision.", pt: "Portanto, construir resiliência e uma mentalidade de crescimento é um processo, não uma decisão única." },
      ],
      questions: [
        { id: "i24d-iq1", prompt: { en: "According to the text, what can make a big difference at work?", pt: "Segundo o texto, o que pode fazer uma grande diferença no trabalho?" }, options: ["More pressure", "A positive mindset", "Working longer hours"], answer: "A positive mindset", explanation: { en: "'A positive mindset can make a big difference.'", pt: "'Uma mentalidade positiva pode fazer uma grande diferença.'" } },
        { id: "i24d-iq2", prompt: { en: "What does the author recommend starting with?", pt: "Com o que o autor recomenda começar?" }, options: ["Self-awareness", "A new job", "More meetings"], answer: "Self-awareness", explanation: { en: "'I'd recommend starting with self-awareness.'", pt: "'Eu recomendaria começar com autoconsciência.'" } },
        { id: "i24d-iq3", prompt: { en: "What kind of process is building resilience, according to the text?", pt: "Segundo o texto, que tipo de processo é construir resiliência?" }, options: ["A single decision", "A process, not a single decision", "An easy task"], answer: "A process, not a single decision", explanation: { en: "'Building resilience... is a process, not a single decision.'", pt: "'Construir resiliência... é um processo, não uma decisão única.'" } },
      ],
    },
    quickCheck: [
      { id: "i24d-qc1", prompt: { en: "What does 'resilience' mean?", pt: "O que significa 'resilience'?" }, options: ["The ability to recover from difficulties", "A type of exercise", "A feeling of stress"], answer: "The ability to recover from difficulties", explanation: { en: "'Resilience' is the ability to recover quickly from difficulties.", pt: "'Resilience' é a capacidade de se recuperar rapidamente de dificuldades." } },
      { id: "i24d-qc2", prompt: { en: "Choose the correct linking word: 'It was tired; ___, he continued.'", pt: "Escolha a linking word correta: 'He felt tired; ___, he continued.'" }, options: ["however", "although", "in addition"], answer: "however", explanation: { en: "'However' shows contrast between two sentences.", pt: "'However' mostra contraste entre duas frases." } },
      { id: "i24d-qc3", prompt: { en: "What does 'self-awareness' mean?", pt: "O que significa 'self-awareness'?" }, options: ["Understanding your own feelings and thoughts", "A type of medicine", "A place to relax"], answer: "Understanding your own feelings and thoughts", explanation: { en: "'Self-awareness' means understanding your own feelings, thoughts and behavior.", pt: "'Self-awareness' significa entender seus próprios sentimentos, pensamentos e comportamento." } },
      { id: "i24d-qc4", prompt: { en: "Which sentence gives advice correctly?", pt: "Qual frase dá um conselho corretamente?" }, options: ["You could try meditation.", "You could to try meditation.", "You try could meditation."], answer: "You could try meditation.", explanation: { en: "The structure is 'You could try + noun/verb-ing'.", pt: "A estrutura é 'You could try + substantivo/verb-ing'." } },
    ],
  },
  communicate: {
    id: "INTERMEDIATE-U24-COMMUNICATE",
    review: [
      { en: "I understand. However, a positive mindset can change a lot.", pt: "Eu entendo. No entanto, uma mentalidade positiva pode mudar muito." },
      { en: "Although it was difficult, we finished on time.", pt: "Embora tenha sido difícil, terminamos no prazo." },
      { en: "She studied hard; therefore, she passed the exam. In addition, she felt more confident.", pt: "Ela estudou muito; portanto, passou no exame. Além disso, ela se sentiu mais confiante." },
      { en: "I'd recommend building resilience. You could try acknowledging your small victories.", pt: "Eu recomendaria construir resiliência. Você poderia tentar reconhecer suas pequenas vitórias." },
    ],
    activities: [
      {
        id: "i24c-a1",
        title: { en: "Connect the Ideas", pt: "Conecte as ideias" },
        instruction: { en: "Talk about a challenge you faced, using 'although' and 'however' to connect contrasting ideas.", pt: "Fale sobre um desafio que você enfrentou, usando 'although' e 'however' para conectar ideias contrastantes." },
        phrases: [
          { en: "Although it was difficult, I finished the project.", pt: "Embora tenha sido difícil, terminei o projeto." },
          { en: "I felt nervous; however, I gave a great presentation.", pt: "Eu me senti nervoso; no entanto, fiz uma ótima apresentação." },
          { en: "Although the weather was bad, we still enjoyed the trip.", pt: "Embora o tempo estivesse ruim, ainda aproveitamos a viagem." },
        ],
        check: [
          { id: "i24c-a1q1", prompt: { en: "Which sentence correctly uses 'although'?", pt: "Qual frase usa 'although' corretamente?" }, options: ["Although it was difficult, but I finished.", "Although it was difficult, I finished.", "It was difficult, although I finished."], answer: "Although it was difficult, I finished.", explanation: { en: "Don't use 'but' together with 'although' in the same sentence.", pt: "Não use 'but' junto com 'although' na mesma frase." } },
          { id: "i24c-a1q2", prompt: { en: "Complete: 'I felt nervous; ___, I gave a great presentation.'", pt: "Complete: 'I felt nervous; ___, I gave a great presentation.'" }, options: ["however", "although", "therefore"], answer: "however", explanation: { en: "'However' connects two contrasting sentences.", pt: "'However' conecta duas frases contrastantes." } },
        ],
      },
      {
        id: "i24c-a2",
        title: { en: "Give Some Advice", pt: "Dê um conselho" },
        instruction: { en: "Give a friend advice about managing stress, using 'I'd recommend', 'You could try', and 'It might be a good idea to'.", pt: "Dê a um amigo um conselho sobre como controlar o estresse, usando 'I'd recommend', 'You could try' e 'It might be a good idea to'." },
        phrases: [
          { en: "I'd recommend focusing on your self-awareness.", pt: "Eu recomendaria focar na sua autoconsciência." },
          { en: "You could try improving your habits.", pt: "Você poderia tentar melhorar seus hábitos." },
          { en: "It might be a good idea to ask for help.", pt: "Pode ser uma boa ideia pedir ajuda." },
        ],
        check: [
          { id: "i24c-a2q1", prompt: { en: "Complete: 'I'd recommend ___ on your self-awareness.'", pt: "Complete: 'I'd recommend ___ on your self-awareness.'" }, options: ["focus", "to focus", "focusing"], answer: "focusing", explanation: { en: "Use verb-ing after 'recommend'.", pt: "Use verb-ing depois de 'recommend'." } },
          { id: "i24c-a2q2", prompt: { en: "Which is a softer, more indirect suggestion?", pt: "Qual é uma sugestão mais suave e indireta?" }, options: ["I'd recommend resting.", "It might be a good idea to rest.", "You must rest."], answer: "It might be a good idea to rest.", explanation: { en: "'It might be a good idea to' is a gentle, indirect suggestion.", pt: "'It might be a good idea to' é uma sugestão gentil e indireta." } },
        ],
      },
      {
        id: "i24c-a3",
        title: { en: "Add More Information", pt: "Acrescente mais informações" },
        instruction: { en: "Talk about a positive change in your life, using 'therefore' and 'in addition' to add ideas.", pt: "Fale sobre uma mudança positiva na sua vida, usando 'therefore' e 'in addition' para acrescentar ideias." },
        phrases: [
          { en: "I started exercising; therefore, I feel more confident.", pt: "Comecei a me exercitar; portanto, me sinto mais confiante." },
          { en: "In addition, I sleep better now.", pt: "Além disso, durmo melhor agora." },
          { en: "She built resilience; therefore, she manages stress better.", pt: "Ela construiu resiliência; portanto, ela controla melhor o estresse." },
        ],
        check: [
          { id: "i24c-a3q1", prompt: { en: "Complete: 'I started exercising; ___, I feel more confident.'", pt: "Complete: 'I started exercising; ___, I feel more confident.'" }, options: ["although", "however", "therefore"], answer: "therefore", explanation: { en: "'Therefore' shows a result.", pt: "'Therefore' mostra um resultado." } },
          { id: "i24c-a3q2", prompt: { en: "Complete: '___, I sleep better now.'", pt: "Complete: '___, I sleep better now.'" }, options: ["In addition", "Although", "Despite"], answer: "In addition", explanation: { en: "'In addition' adds new information to what was said.", pt: "'In addition' acrescenta nova informação ao que foi dito." } },
        ],
      },
    ],
    challenge: {
      id: "i24c-challenge",
      title: { en: "Mindset Coaching Session", pt: "Sessão de coaching de mentalidade" },
      instruction: { en: "Play the role of a mindset coach: listen to a partner's problem and give advice, connecting your ideas with linking words.", pt: "Interprete o papel de um coach de mentalidade: ouça o problema de um parceiro e dê conselhos, conectando suas ideias com linking words." },
      phrases: [
        { en: "I understand your pressure. However, every step forward counts.", pt: "Eu entendo sua pressão. No entanto, cada passo à frente conta." },
        { en: "I'd recommend building resilience, although it takes time.", pt: "Eu recomendaria construir resiliência, embora leve tempo." },
        { en: "You could try setting clearer boundaries. In addition, remember to rest.", pt: "Você poderia tentar estabelecer limites mais claros. Além disso, lembre-se de descansar." },
      ],
      check: [
        { id: "i24c-cq1", prompt: { en: "Complete: 'I'd recommend building resilience, ___ it takes time.'", pt: "Complete: 'I'd recommend building resilience, ___ it takes time.'" }, options: ["although", "however", "therefore"], answer: "although", explanation: { en: "'Although' introduces a contrasting idea within the same sentence.", pt: "'Although' introduz uma ideia contrastante na mesma frase." } },
        { id: "i24c-cq2", prompt: { en: "Complete: 'You could try setting clearer boundaries. ___, remember to rest.'", pt: "Complete: 'You could try setting clearer boundaries. ___, remember to rest.'" }, options: ["In addition", "Although", "Therefore"], answer: "In addition", explanation: { en: "'In addition' adds another piece of advice.", pt: "'In addition' acrescenta mais um conselho." } },
      ],
    },
    lessonReview: {
      summary: {
        en: "In this unit, you learned to connect ideas with 'however', 'although', 'therefore' and 'in addition', and to give advice about mindset and stress with 'I'd recommend', 'You could try' and 'It might be a good idea to'.",
        pt: "Nesta unidade, você aprendeu a conectar ideias com 'however', 'although', 'therefore' e 'in addition', e a dar conselhos sobre mentalidade e estresse com 'I'd recommend', 'You could try' e 'It might be a good idea to'.",
      },
      canDo: [
        { en: "I can connect contrasting ideas using 'however' and 'although'.", pt: "Eu consigo conectar ideias contrastantes usando 'however' e 'although'." },
        { en: "I can show results and add information using 'therefore' and 'in addition'.", pt: "Eu consigo mostrar resultados e acrescentar informações usando 'therefore' e 'in addition'." },
        { en: "I can give advice about mindset and stress management.", pt: "Eu consigo dar conselhos sobre mentalidade e controle do estresse." },
      ],
      next: {
        en: "Next, you're going to learn how to talk about hypothetical situations using the second conditional.", 
        pt: "A seguir, você vai aprender a falar sobre situações hipotéticas usando o second conditional.",
      },
    },
  },
};
