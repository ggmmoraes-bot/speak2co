import type { CourseUnit } from "./types";

/**
 * Intermediate — Unit 7 (Tech Trouble). Conteúdo autoral Speak2Co.
 * Foco: Past Perfect para narrar o que já tinha acontecido antes de outro
 * evento passado, vocabulário de tecnologia, e revisão do passado simples.
 * Personagens originais: Marina, Theo e Rafa, amigos que dividem apartamento.
 */
export const INTERMEDIATE_U07: CourseUnit = {
  code: "INTERMEDIATE-U07",
  number: 7,
  title: "Tech Trouble — What had happened before?",
  titlePt: "Problema Tecnológico — O que já tinha acontecido antes?",
  cefr: "B1",
  objective: {
    en: "Use the Past Perfect to describe what had already happened before another past event, and talk about technology problems.",
    pt: "Usar o Past Perfect para descrever o que já tinha acontecido antes de outro evento passado, e falar sobre problemas de tecnologia.",
  },
  communicationGoal: {
    en: "Tell a story about a tech problem, explaining the order of events: what had already happened before something else went wrong.",
    pt: "Contar uma história sobre um problema de tecnologia, explicando a ordem dos eventos: o que já tinha acontecido antes de outra coisa dar errado.",
  },
  prerequisites: {
    en: "Simple past (regular and irregular verbs) and 'be going to' for plans and predictions.",
    pt: "Passado simples (verbos regulares e irregulares) e 'be going to' para planos e previsões.",
  },
  newContent: {
    en: "Grammar: Past Perfect (affirmative, negative, questions) with 'already' and 'before' | Vocabulary: technology (12 items) | Expressions: reacting to tech problems",
    pt: "Gramática: Past Perfect (afirmativa, negativa, perguntas) com 'already' e 'before' | Vocabulário: tecnologia (12 itens) | Expressões: reagir a problemas de tecnologia",
  },
  reviewContent: {
    en: "Simple past of regular and irregular verbs to narrate a sequence of events.",
    pt: "Passado simples de verbos regulares e irregulares para narrar uma sequência de eventos.",
  },
  discover: {
    id: "INTERMEDIATE-U07-DISCOVER",
    warmUp: {
      prompt: {
        en: "Look at the picture. What happened to the computer? How do you think the person felt?",
        pt: "Observe a imagem. O que aconteceu com o computador? Como você acha que a pessoa se sentiu?",
      },
      phrases: [
        { en: "Have you ever lost an important file?", pt: "Você já perdeu um arquivo importante?" },
        { en: "Do you back up your files regularly?", pt: "Você faz backup dos seus arquivos regularmente?" },
        { en: "What do you do when your computer crashes?", pt: "O que você faz quando seu computador trava?" },
      ],
    },
    context: {
      situation: {
        en: "It's Monday morning. Marina, Theo and Rafa share an apartment. Marina had a big presentation at work, but something went wrong with her laptop the night before.",
        pt: "É segunda-feira de manhã. Marina, Theo e Rafa dividem um apartamento. Marina tinha uma grande apresentação no trabalho, mas algo deu errado com o laptop dela na noite anterior.",
      },
      dialogue: [
        { who: "Theo", en: "Marina, you look terrible! What happened?", pt: "Marina, você parece péssima! O que aconteceu?" },
        { who: "Marina", en: "My laptop crashed last night. I had already finished the presentation, but I hadn't saved it.", pt: "Meu laptop travou ontem à noite. Eu já tinha terminado a apresentação, mas não tinha salvado." },
        { who: "Rafa", en: "Oh no! Had you backed up the file before?", pt: "Ah não! Você tinha feito backup do arquivo antes?" },
        { who: "Marina", en: "No, I hadn't. I always forget to do that.", pt: "Não, eu não tinha. Sempre esqueço de fazer isso." },
        { who: "Theo", en: "Did you install the new update? Maybe that caused the problem.", pt: "Você instalou a atualização nova? Talvez isso tenha causado o problema." },
        { who: "Marina", en: "Yes, I had installed it right before the screen went black.", pt: "Sim, eu tinha instalado bem antes de a tela ficar preta." },
        { who: "Rafa", en: "Don't worry. I know a technician. He had already fixed my computer twice before.", pt: "Não se preocupe. Eu conheço um técnico. Ele já tinha consertado meu computador duas vezes antes." },
        { who: "Marina", en: "Thanks, Rafa. I'm going to call him right now. I need that file back!", pt: "Obrigada, Rafa. Vou ligar para ele agora mesmo. Preciso desse arquivo de volta!" },
      ],
    },
    vocabulary: [
      { term: "laptop", pt: "notebook", ipa: "/ˈlæptɑːp/", definition: "A small portable computer.", example: "My laptop crashed last night.", examplePt: "Meu laptop travou ontem à noite." },
      { term: "file", pt: "arquivo", ipa: "/faɪl/", definition: "A document or piece of data saved on a computer.", example: "I hadn't saved the file before the crash.", examplePt: "Eu não tinha salvado o arquivo antes de travar." },
      { term: "backup", pt: "cópia de segurança", ipa: "/ˈbækʌp/", definition: "A copy of files kept in case the original is lost.", example: "Always make a backup of important files.", examplePt: "Sempre faça um backup dos arquivos importantes." },
      { term: "crash", pt: "travar; falha", ipa: "/kræʃ/", definition: "When a computer suddenly stops working.", example: "The system crashed twice this week.", examplePt: "O sistema travou duas vezes esta semana." },
      { term: "update", pt: "atualização", ipa: "/ˈʌpdeɪt/", definition: "A new version of a program or system.", example: "I installed the update yesterday.", examplePt: "Eu instalei a atualização ontem." },
      { term: "virus", pt: "vírus", ipa: "/ˈvaɪrəs/", definition: "A harmful program that can damage a computer.", example: "The virus deleted several files.", examplePt: "O vírus apagou vários arquivos." },
      { term: "password", pt: "senha", ipa: "/ˈpæswɜːrd/", definition: "A secret word used to access an account or device.", example: "I forgot my password again.", examplePt: "Esqueci minha senha de novo." },
      { term: "storage", pt: "armazenamento", ipa: "/ˈstɔːrɪdʒ/", definition: "The space used to keep data on a device.", example: "This laptop doesn't have much storage.", examplePt: "Esse laptop não tem muito armazenamento." },
      { term: "device", pt: "dispositivo, aparelho", ipa: "/dɪˈvaɪs/", definition: "An electronic tool, like a phone or a computer.", example: "I have too many devices to charge.", examplePt: "Tenho muitos dispositivos para carregar." },
      { term: "network", pt: "rede", ipa: "/ˈnetwɜːrk/", definition: "A system of connected computers or devices.", example: "The network was down all morning.", examplePt: "A rede ficou fora do ar a manhã toda." },
      { term: "screen", pt: "tela", ipa: "/skriːn/", definition: "The part of a device that shows images and text.", example: "The screen went black suddenly.", examplePt: "A tela ficou preta de repente." },
      { term: "technician", pt: "técnico", ipa: "/tekˈnɪʃən/", definition: "A person who repairs machines or equipment.", example: "The technician fixed my computer twice.", examplePt: "O técnico consertou meu computador duas vezes." },
    ],
    expressions: [
      { en: "You look terrible!", pt: "Você parece péssimo(a)!" },
      { en: "Oh no!", pt: "Ah não!" },
      { en: "I always forget to do that.", pt: "Sempre esqueço de fazer isso." },
      { en: "Maybe that caused the problem.", pt: "Talvez isso tenha causado o problema." },
      { en: "Right before...", pt: "Bem antes de..." },
      { en: "I need that back!", pt: "Preciso disso de volta!" },
    ],
    grammar: [
      {
        title: { en: "Past Perfect — actions before another past action", pt: "Past Perfect — ações antes de outra ação no passado" },
        examples: [
          { en: "I had already finished the presentation before the laptop crashed.", pt: "Eu já tinha terminado a apresentação antes de o laptop travar." },
          { en: "She hadn't saved the file when the screen went black.", pt: "Ela não tinha salvado o arquivo quando a tela ficou preta." },
          { en: "Had you backed up the file before the crash?", pt: "Você tinha feito backup do arquivo antes do travamento?" },
          { en: "He had already fixed my computer twice before.", pt: "Ele já tinha consertado meu computador duas vezes antes." },
        ],
        rule: {
          en: "Use 'had + past participle' for an action that happened before another action or time in the past. Negative: hadn't + past participle. Questions: invert 'had' and the subject (Had you...?). Words like 'already' and 'before' often signal the Past Perfect.",
          pt: "Use 'had + particípio passado' para uma ação que aconteceu antes de outra ação ou momento no passado. Negativa: hadn't + particípio. Perguntas: inverta 'had' e o sujeito (Had you...?). Palavras como 'already' e 'before' costumam indicar o Past Perfect.",
        },
        mistakes: [
          { en: "✗ I had finish it. → ✓ I had finished it. (use the past participle)", pt: "✗ I had finish it. → ✓ I had finished it. (use o particípio passado)" },
          { en: "✗ Did you had saved it? → ✓ Had you saved it? (don't use 'did' with Past Perfect)", pt: "✗ Did you had saved it? → ✓ Had you saved it? (não use 'did' com Past Perfect)" },
          { en: "✗ She hadn't save the file. → ✓ She hadn't saved the file.", pt: "✗ She hadn't save the file. → ✓ She hadn't saved the file." },
        ],
      },
      {
        title: { en: "Simple past vs. Past Perfect", pt: "Simple past vs. Past Perfect" },
        examples: [
          { en: "The laptop crashed after I had installed the update.", pt: "O laptop travou depois que eu tinha instalado a atualização." },
          { en: "By the time the technician arrived, Rafa had already restarted the computer.", pt: "Quando o técnico chegou, o Rafa já tinha reiniciado o computador." },
        ],
        rule: {
          en: "Use the Simple Past for the most recent past action, and the Past Perfect for the action that happened earlier. Time expressions like 'by the time', 'after' and 'before' help show the order of events.",
          pt: "Use o Simple Past para a ação passada mais recente e o Past Perfect para a ação que aconteceu antes. Expressões de tempo como 'by the time', 'after' e 'before' ajudam a mostrar a ordem dos eventos.",
        },
        mistakes: [
          { en: "✗ The laptop crashed after I installed the update (both simple past — order unclear). → ✓ The laptop crashed after I had installed the update.", pt: "✗ The laptop crashed after I installed the update (ambos no simple past — ordem confusa). → ✓ The laptop crashed after I had installed the update." },
        ],
      },
      {
        title: { en: "Review: simple past narration", pt: "Revisão: narrar no passado simples" },
        examples: [
          { en: "Marina called the technician. He came in the afternoon.", pt: "A Marina ligou para o técnico. Ele veio à tarde." },
          { en: "Rafa didn't know the password, so he asked Theo.", pt: "O Rafa não sabia a senha, então perguntou ao Theo." },
        ],
        rule: {
          en: "Use the simple past for a simple sequence of finished actions: subject + past verb (regular -ed or irregular form). Negative and questions use did/didn't + base verb.",
          pt: "Use o passado simples para uma sequência simples de ações concluídas: sujeito + verbo no passado (regular -ed ou forma irregular). Negativa e pergunta usam did/didn't + verbo base.",
        },
        mistakes: [
          { en: "✗ He comed in the afternoon. → ✓ He came in the afternoon.", pt: "✗ He comed in the afternoon. → ✓ He came in the afternoon." },
        ],
      },
    ],
    controlledPractice: [
      { id: "i7d-cp1", prompt: { en: "Complete: 'I ___ already finished the presentation when the laptop crashed.'", pt: "Complete: 'I ___ already finished the presentation when the laptop crashed.'" }, options: ["have", "had", "has"], answer: "had", explanation: { en: "Past Perfect uses 'had' for all subjects.", pt: "O Past Perfect usa 'had' para todos os sujeitos." } },
      { id: "i7d-cp2", prompt: { en: "Choose the correct negative: 'She ___ saved the file.'", pt: "Escolha a negativa correta: 'She ___ saved the file.'" }, options: ["didn't", "hadn't", "hasn't"], answer: "hadn't", explanation: { en: "Past Perfect negative: hadn't + past participle.", pt: "Negativa do Past Perfect: hadn't + particípio." } },
      { id: "i7d-cp3", prompt: { en: "Make it a question: 'You had backed up the file.'", pt: "Transforme em pergunta: 'You had backed up the file.'" }, options: ["Did you had backed up the file?", "You had backed up the file?", "Had you backed up the file?"], answer: "Had you backed up the file?", explanation: { en: "Invert 'had' and the subject.", pt: "Inverta 'had' e o sujeito." } },
      { id: "i7d-cp4", prompt: { en: "Choose the past participle of 'fix'.", pt: "Escolha o particípio passado de 'fix'." }, options: ["fixed", "fixt", "fixen"], answer: "fixed", explanation: { en: "'Fix' is regular: fix - fixed - fixed.", pt: "'Fix' é regular: fix - fixed - fixed." } },
      { id: "i7d-cp5", prompt: { en: "Which sentence shows the correct order of events?", pt: "Qual frase mostra a ordem correta dos eventos?" }, options: ["The screen went black after I had installed the update.", "The screen went black after I install the update.", "The screen went black after I have install the update."], answer: "The screen went black after I had installed the update.", explanation: { en: "The earlier action uses Past Perfect.", pt: "A ação mais antiga usa o Past Perfect." } },
    ],
    input: {
      kind: "reading",
      title: { en: "A blog post: My worst tech day", pt: "Um post de blog: Meu pior dia com tecnologia" },
      lines: [
        { en: "Last Monday was a disaster. I had already prepared everything for my presentation the night before.", pt: "Segunda-feira passada foi um desastre. Eu já tinha preparado tudo para minha apresentação na noite anterior." },
        { en: "But I hadn't saved the file on a backup device, only on my laptop.", pt: "Mas eu não tinha salvado o arquivo em um dispositivo de backup, só no meu laptop." },
        { en: "When I turned on my computer in the morning, the screen was completely black.", pt: "Quando liguei o computador de manhã, a tela estava totalmente preta." },
        { en: "I had installed an update the night before, and I think that caused the crash.", pt: "Eu tinha instalado uma atualização na noite anterior, e acho que isso causou o travamento." },
        { en: "Luckily, a technician had helped me before with a similar problem, so I called him immediately.", pt: "Felizmente, um técnico já tinha me ajudado antes com um problema parecido, então eu liguei para ele imediatamente." },
        { en: "He recovered my file in less than an hour. Now I always make a backup before I install any update!", pt: "Ele recuperou meu arquivo em menos de uma hora. Agora eu sempre faço um backup antes de instalar qualquer atualização!" },
      ],
      questions: [
        { id: "i7d-iq1", prompt: { en: "Had the writer saved the file on a backup device?", pt: "O autor tinha salvado o arquivo em um dispositivo de backup?" }, options: ["Yes, always.", "No, only on the laptop.", "Yes, on a phone."], answer: "No, only on the laptop.", explanation: { en: "'I hadn't saved the file on a backup device, only on my laptop.'", pt: "'Eu não tinha salvado o arquivo em um dispositivo de backup, só no meu laptop.'" } },
        { id: "i7d-iq2", prompt: { en: "What had probably caused the crash?", pt: "O que provavelmente causou o travamento?" }, options: ["A virus", "An update", "A weak password"], answer: "An update", explanation: { en: "'I had installed an update the night before, and I think that caused the crash.'", pt: "'Eu tinha instalado uma atualização na noite anterior, e acho que isso causou o travamento.'" } },
        { id: "i7d-iq3", prompt: { en: "What did the writer decide to do from now on?", pt: "O que o autor decidiu fazer daqui para frente?" }, options: ["Change the password every week", "Always back up before an update", "Buy a new laptop"], answer: "Always back up before an update", explanation: { en: "'Now I always make a backup before I install any update!'", pt: "'Agora eu sempre faço um backup antes de instalar qualquer atualização!'" } },
      ],
    },
    quickCheck: [
      { id: "i7d-qc1", prompt: { en: "What does 'backup' mean?", pt: "O que significa 'backup'?" }, options: ["A copy of files", "A new password", "A broken screen"], answer: "A copy of files", explanation: { en: "A backup is a saved copy of your files.", pt: "Um backup é uma cópia salva dos seus arquivos." } },
      { id: "i7d-qc2", prompt: { en: "Choose the correct Past Perfect negative.", pt: "Escolha a negativa correta do Past Perfect." }, options: ["She didn't had saved it.", "She hadn't saved it.", "She hasn't saved it."], answer: "She hadn't saved it.", explanation: { en: "Negative: hadn't + past participle.", pt: "Negativa: hadn't + particípio." } },
      { id: "i7d-qc3", prompt: { en: "Which word often signals the Past Perfect?", pt: "Qual palavra costuma indicar o Past Perfect?" }, options: ["tomorrow", "already", "now"], answer: "already", explanation: { en: "'Already' shows something happened before a past moment.", pt: "'Already' mostra algo que aconteceu antes de um momento passado." } },
      { id: "i7d-qc4", prompt: { en: "'___ you backed up the file before the crash?'", pt: "'___ you backed up the file before the crash?'" }, options: ["Did", "Have", "Had"], answer: "Had", explanation: { en: "Past Perfect questions start with 'Had'.", pt: "Perguntas no Past Perfect começam com 'Had'." } },
    ],
  },
  communicate: {
    id: "INTERMEDIATE-U07-COMMUNICATE",
    review: [
      { en: "I had already finished the presentation before the laptop crashed. — Past Perfect.", pt: "Eu já tinha terminado a apresentação antes de o laptop travar. — Past Perfect." },
      { en: "Had you backed up the file? — No, I hadn't.", pt: "Você tinha feito backup do arquivo? — Não, eu não tinha." },
      { en: "Technology vocabulary: laptop, file, backup, crash, update, virus, password, storage, device, network, screen, technician.", pt: "Vocabulário de tecnologia: laptop, arquivo, backup, travamento, atualização, vírus, senha, armazenamento, dispositivo, rede, tela, técnico." },
      { en: "Maybe that caused the problem. / I always forget to do that.", pt: "Talvez isso tenha causado o problema. / Sempre esqueço de fazer isso." },
    ],
    activities: [
      {
        id: "i7c-a1",
        title: { en: "Before the Problem", pt: "Antes do problema" },
        instruction: { en: "Say three things you had already done before something went wrong (with your phone, computer, or another device).", pt: "Diga três coisas que você já tinha feito antes de algo dar errado (com seu celular, computador ou outro dispositivo)." },
        phrases: [
          { en: "I had already downloaded the app before it stopped working.", pt: "Eu já tinha baixado o aplicativo antes de ele parar de funcionar." },
          { en: "I hadn't updated my phone before the screen froze.", pt: "Eu não tinha atualizado meu celular antes de a tela travar." },
          { en: "Had you saved your work before the network went down?", pt: "Você tinha salvado seu trabalho antes de a rede cair?" },
        ],
        check: [
          { id: "i7c-a1q1", prompt: { en: "Which sentence uses the Past Perfect correctly?", pt: "Qual frase usa o Past Perfect corretamente?" }, options: ["I had already saved it.", "I already saved it had.", "I have already had saved it."], answer: "I had already saved it.", explanation: { en: "Subject + had + already + past participle.", pt: "Sujeito + had + already + particípio." } },
          { id: "i7c-a1q2", prompt: { en: "Complete: 'They ___ backed up the files before the crash.' (negative)", pt: "Complete: 'They ___ backed up the files before the crash.' (negativa)" }, options: ["hadn't", "didn't", "haven't"], answer: "hadn't", explanation: { en: "Negative Past Perfect: hadn't + past participle.", pt: "Past Perfect negativo: hadn't + particípio." } },
        ],
      },
      {
        id: "i7c-a2",
        title: { en: "Tech Support Call", pt: "Chamada para o suporte técnico" },
        instruction: { en: "Role-play a call to tech support. Explain what had happened before the problem started.", pt: "Faça um role-play de uma chamada para o suporte técnico. Explique o que tinha acontecido antes de o problema começar." },
        phrases: [
          { en: "My computer crashed. I had installed an update right before.", pt: "Meu computador travou. Eu tinha instalado uma atualização bem antes." },
          { en: "I hadn't backed up my files, so I lost everything.", pt: "Eu não tinha feito backup dos meus arquivos, então perdi tudo." },
          { en: "Had anyone touched the computer before it stopped working?", pt: "Alguém tinha mexido no computador antes de ele parar de funcionar?" },
        ],
        check: [
          { id: "i7c-a2q1", prompt: { en: "Which question uses the Past Perfect?", pt: "Qual pergunta usa o Past Perfect?" }, options: ["Did you install an update?", "Had you installed an update?", "Do you install an update?"], answer: "Had you installed an update?", explanation: { en: "Invert 'had' for Past Perfect questions.", pt: "Inverta 'had' nas perguntas do Past Perfect." } },
          { id: "i7c-a2q2", prompt: { en: "'Virus' most likely...", pt: "'Virus' provavelmente..." }, options: ["Damages files on a device", "Charges your phone", "Fixes a network"], answer: "Damages files on a device", explanation: { en: "A virus can delete or damage files.", pt: "Um vírus pode apagar ou danificar arquivos." } },
        ],
      },
      {
        id: "i7c-a3",
        title: { en: "The Sequence of Events", pt: "A sequência de eventos" },
        instruction: { en: "Tell a short story about a tech problem, using both the simple past and the Past Perfect to show the order of events.", pt: "Conte uma pequena história sobre um problema de tecnologia, usando o passado simples e o Past Perfect para mostrar a ordem dos eventos." },
        phrases: [
          { en: "The screen went black after I had installed the update.", pt: "A tela ficou preta depois que eu tinha instalado a atualização." },
          { en: "By the time the technician arrived, I had already restarted the laptop twice.", pt: "Quando o técnico chegou, eu já tinha reiniciado o laptop duas vezes." },
          { en: "I called Rafa because he had fixed a similar problem before.", pt: "Liguei para o Rafa porque ele já tinha consertado um problema parecido antes." },
        ],
        check: [
          { id: "i7c-a3q1", prompt: { en: "Which action happened first?", pt: "Qual ação aconteceu primeiro?" }, options: ["'had installed' (Past Perfect)", "'went black' (Simple Past)", "Both at the same time"], answer: "'had installed' (Past Perfect)", explanation: { en: "The Past Perfect shows the earlier action.", pt: "O Past Perfect mostra a ação mais antiga." } },
          { id: "i7c-a3q2", prompt: { en: "Complete: 'By the time the technician arrived, I ___ the laptop twice.'", pt: "Complete: 'By the time the technician arrived, I ___ the laptop twice.'" }, options: ["restarted", "had restarted", "restart"], answer: "had restarted", explanation: { en: "Use Past Perfect for the action before the technician arrived.", pt: "Use o Past Perfect para a ação antes de o técnico chegar." } },
        ],
      },
    ],
    challenge: {
      id: "i7c-cc1",
      title: { en: "My Worst Tech Day", pt: "Meu pior dia com tecnologia" },
      instruction: {
        en: "Tell a short story out loud about a real or imaginary tech problem. Say what had already happened before the problem, what happened next, and how you solved it.",
        pt: "Conte em voz alta uma pequena história sobre um problema de tecnologia real ou imaginário. Diga o que já tinha acontecido antes do problema, o que aconteceu depois e como você resolveu.",
      },
      phrases: [
        { en: "I had already finished my work when my laptop crashed.", pt: "Eu já tinha terminado meu trabalho quando meu laptop travou." },
        { en: "I hadn't saved the file, so I lost two hours of work.", pt: "Eu não tinha salvado o arquivo, então perdi duas horas de trabalho." },
        { en: "Luckily, a friend had gone through the same problem before.", pt: "Felizmente, um amigo já tinha passado pelo mesmo problema antes." },
        { en: "I called a technician, and he recovered the file in the end.", pt: "Liguei para um técnico, e ele recuperou o arquivo no final." },
      ],
      check: [
        { id: "i7c-cc1q1", prompt: { en: "Did you use the Past Perfect for the action that happened before the problem?", pt: "Você usou o Past Perfect para a ação que aconteceu antes do problema?" }, options: ["Yes", "No", "Partially"], answer: "Yes", explanation: { en: "Self-check: had + past participle for the earlier action.", pt: "Autoavaliação: had + particípio para a ação mais antiga." } },
        { id: "i7c-cc1q2", prompt: { en: "Did you use at least two technology words?", pt: "Você usou pelo menos duas palavras de tecnologia?" }, options: ["Yes", "No", "Partially"], answer: "Yes", explanation: { en: "Self-check: laptop, file, backup, crash, update, etc.", pt: "Autoavaliação: laptop, arquivo, backup, travamento, atualização, etc." } },
      ],
    },
    lessonReview: {
      summary: {
        en: "You used the Past Perfect to explain what had already happened before a tech problem, learned technology vocabulary, and reviewed the simple past for narrating a sequence of events.",
        pt: "Você usou o Past Perfect para explicar o que já tinha acontecido antes de um problema de tecnologia, aprendeu vocabulário de tecnologia e revisou o passado simples para narrar uma sequência de eventos.",
      },
      canDo: [
        { en: "I can use the Past Perfect to say what had already happened before another past action.", pt: "Consigo usar o Past Perfect para dizer o que já tinha acontecido antes de outra ação passada." },
        { en: "I can ask and answer questions with 'Had you...?'.", pt: "Consigo perguntar e responder com 'Had you...?'." },
        { en: "I can talk about common technology problems and devices.", pt: "Consigo falar sobre problemas comuns de tecnologia e dispositivos." },
        { en: "I can tell a story combining the simple past and the Past Perfect.", pt: "Consigo contar uma história combinando o passado simples e o Past Perfect." },
      ],
      next: { en: "Next unit: new skills — talking about when and how you learned to do things.", pt: "Próxima unidade: novas habilidades — falar sobre quando e como você aprendeu a fazer coisas." },
    },
  },
};
