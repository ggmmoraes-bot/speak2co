import type { CourseUnit } from "./types";

/**
 * Intermediate — Unit 33 (Who Are You Talking To?). Conteúdo autoral Speak2Co.
 * Foco: discurso relatado (reported speech) para afirmações e perguntas,
 * verbos de comunicação e expressões para relatar conversas.
 * Personagens: Marina, Theo e Rafa.
 */
export const INTERMEDIATE_U33: CourseUnit = {
  code: "INTERMEDIATE-U33",
  number: 33,
  title: "Who Are You Talking To? — Reported Speech",
  titlePt: "Com Quem Você Está Falando? — Discurso Relatado",
  cefr: "B1+",
  objective: {
    en: "Report what other people said, using reported statements and questions, and use verbs like mention, admit and complain to describe how people communicate.",
    pt: "Relatar o que outras pessoas disseram, usando afirmações e perguntas no discurso relatado, e usar verbos como mention, admit e complain para descrever como as pessoas se comunicam.",
  },
  communicationGoal: {
    en: "Tell a friend about a phone call or conversation you had, reporting what was said and asked.",
    pt: "Contar a um amigo sobre uma ligação ou conversa que você teve, relatando o que foi dito e perguntado.",
  },
  prerequisites: {
    en: "Simple past, simple present, and basic question formation.",
    pt: "Passado simples, presente simples e formação básica de perguntas.",
  },
  newContent: {
    en: "Grammar: Reported speech (statements and questions, backshift of tenses) | Vocabulary: communication verbs (mention, admit, complain, explain, warn, promise, apologize, argue, whisper, shout, deny, suggest) | Expressions: introducing reported speech (She said that..., He told me..., She asked if...)",
    pt: "Gramática: discurso relatado (afirmações e perguntas, mudança de tempo verbal) | Vocabulário: verbos de comunicação (mention, admit, complain, explain, warn, promise, apologize, argue, whisper, shout, deny, suggest) | Expressões: introduzir discurso relatado (She said that..., He told me..., She asked if...)",
  },
  reviewContent: {
    en: "Review: simple past and simple present forms used before switching to reported speech.",
    pt: "Revisão: formas do passado simples e presente simples usadas antes de mudar para o discurso relatado.",
  },
  discover: {
    id: "INTERMEDIATE-U33-DISCOVER",
    warmUp: {
      prompt: {
        en: "Look at the picture. Who is talking to whom? What do you think they are saying?",
        pt: "Observe a imagem. Quem está falando com quem? O que você acha que estão dizendo?",
      },
      phrases: [
        { en: "Who are you talking to?", pt: "Com quem você está falando?" },
        { en: "What did he say to you?", pt: "O que ele disse a você?" },
        { en: "Did she ask you a question?", pt: "Ela te fez uma pergunta?" },
      ],
    },
    context: {
      situation: {
        en: "Marina just finished a phone call with her boss. Theo and Rafa want to know everything that was said.",
        pt: "Marina acabou de terminar uma ligação com o chefe dela. Theo e Rafa querem saber tudo o que foi dito.",
      },
      dialogue: [
        { who: "Theo", en: "Who were you talking to? You looked so serious.", pt: "Com quem você estava falando? Você parecia tão séria." },
        { who: "Marina", en: "My boss. He said that the project deadline changed.", pt: "Meu chefe. Ele disse que o prazo do projeto mudou." },
        { who: "Rafa", en: "Really? What did he say exactly?", pt: "Sério? O que ele disse exatamente?" },
        { who: "Marina", en: "He told me that the client wanted the report by Friday.", pt: "Ele me disse que o cliente queria o relatório até sexta." },
        { who: "Theo", en: "Did he explain why?", pt: "Ele explicou por quê?" },
        { who: "Marina", en: "He admitted that he had forgotten to send the first email.", pt: "Ele admitiu que tinha esquecido de enviar o primeiro e-mail." },
        { who: "Rafa", en: "So he apologized?", pt: "Então ele se desculpou?" },
        { who: "Marina", en: "Yes, and he asked if we could finish it faster. I said we would try.", pt: "Sim, e ele perguntou se podíamos terminar mais rápido. Eu disse que a gente ia tentar." },
        { who: "Theo", en: "Don't worry. We won't complain — we'll just get it done!", pt: "Não se preocupe. A gente não vai reclamar — vamos apenas fazer isso!" },
      ],
    },
    vocabulary: [
      { term: "mention", pt: "mencionar", ipa: "/ˈmenʃən/", definition: "To talk about something briefly.", example: "She mentioned that she was tired.", examplePt: "Ela mencionou que estava cansada." },
      { term: "admit", pt: "admitir", ipa: "/ədˈmɪt/", definition: "To agree that something is true, often something bad.", example: "He admitted that he made a mistake.", examplePt: "Ele admitiu que cometeu um erro." },
      { term: "complain", pt: "reclamar", ipa: "/kəmˈpleɪn/", definition: "To say you are unhappy about something.", example: "They complained that the room was too noisy.", examplePt: "Eles reclamaram que o quarto era muito barulhento." },
      { term: "explain", pt: "explicar", ipa: "/ɪkˈspleɪn/", definition: "To give reasons or details about something.", example: "She explained why she was late.", examplePt: "Ela explicou por que estava atrasada." },
      { term: "warn", pt: "avisar, alertar", ipa: "/wɔːrn/", definition: "To tell someone about a possible danger or problem.", example: "He warned me that the roads were icy.", examplePt: "Ele me avisou que as estradas estavam com gelo." },
      { term: "promise", pt: "prometer", ipa: "/ˈprɑːmɪs/", definition: "To say you will definitely do something.", example: "She promised that she would call.", examplePt: "Ela prometeu que ligaria." },
      { term: "apologize", pt: "se desculpar", ipa: "/əˈpɑːləˌdʒaɪz/", definition: "To say sorry.", example: "He apologized for being rude.", examplePt: "Ele se desculpou por ser rude." },
      { term: "argue", pt: "discutir", ipa: "/ˈɑːrɡjuː/", definition: "To disagree with someone, sometimes angrily.", example: "They argued about the schedule.", examplePt: "Eles discutiram sobre a agenda." },
      { term: "whisper", pt: "sussurrar", ipa: "/ˈwɪspər/", definition: "To speak very quietly.", example: "She whispered the answer to me.", examplePt: "Ela sussurrou a resposta para mim." },
      { term: "shout", pt: "gritar", ipa: "/ʃaʊt/", definition: "To speak very loudly.", example: "He shouted my name across the street.", examplePt: "Ele gritou meu nome do outro lado da rua." },
      { term: "deny", pt: "negar", ipa: "/dɪˈnaɪ/", definition: "To say that something is not true.", example: "She denied that she was late.", examplePt: "Ela negou que estava atrasada." },
      { term: "suggest", pt: "sugerir", ipa: "/səˈdʒest/", definition: "To offer an idea or a plan.", example: "He suggested that we take a break.", examplePt: "Ele sugeriu que fizéssemos uma pausa." },
    ],
    expressions: [
      { en: "She said that...", pt: "Ela disse que..." },
      { en: "He told me that...", pt: "Ele me disse que..." },
      { en: "She asked if...", pt: "Ela perguntou se..." },
      { en: "He asked what/where/when...", pt: "Ele perguntou o quê/onde/quando..." },
      { en: "According to him/her...", pt: "Segundo ele/ela..." },
      { en: "As far as I remember, she said...", pt: "Pelo que eu me lembro, ela disse..." },
    ],
    grammar: [
      {
        title: { en: "Reported statements", pt: "Afirmações no discurso relatado" },
        examples: [
          { en: "\"I'm tired.\" → She said (that) she was tired.", pt: "\"Estou cansada.\" → Ela disse que estava cansada." },
          { en: "\"I work here.\" → He said (that) he worked there.", pt: "\"Eu trabalho aqui.\" → Ele disse que trabalhava lá." },
          { en: "\"I will call you.\" → She said (that) she would call me.", pt: "\"Eu vou te ligar.\" → Ela disse que me ligaria." },
          { en: "\"I have finished.\" → He said (that) he had finished.", pt: "\"Eu terminei.\" → Ele disse que tinha terminado." },
        ],
        rule: {
          en: "When reporting a statement, the tense usually moves back one step: present → past, past → past perfect, will → would. Pronouns and time/place words also change (here → there, tomorrow → the next day). 'That' is optional after 'say' and 'tell'.",
          pt: "Ao relatar uma afirmação, o tempo verbal normalmente 'volta' um passo: presente → passado, passado → past perfect, will → would. Pronomes e palavras de tempo/lugar também mudam (here → there, tomorrow → the next day). 'That' é opcional depois de 'say' e 'tell'.",
        },
        mistakes: [
          { en: "✗ She said me that... → ✓ She told me that... (use 'tell' with an object)", pt: "✗ She said me that... → ✓ She told me that... (use 'tell' com objeto)" },
          { en: "✗ He said that he is tired. → ✓ He said that he was tired. (backshift the tense)", pt: "✗ He said that he is tired. → ✓ He said that he was tired. (mude o tempo verbal)" },
        ],
      },
      {
        title: { en: "Reported questions", pt: "Perguntas no discurso relatado" },
        examples: [
          { en: "\"Are you okay?\" → She asked if I was okay.", pt: "\"Você está bem?\" → Ela perguntou se eu estava bem." },
          { en: "\"Do you live here?\" → He asked if I lived there.", pt: "\"Você mora aqui?\" → Ele perguntou se eu morava lá." },
          { en: "\"Where do you work?\" → She asked where I worked.", pt: "\"Onde você trabalha?\" → Ela perguntou onde eu trabalhava." },
          { en: "\"What time is it?\" → He asked what time it was.", pt: "\"Que horas são?\" → Ele perguntou que horas eram." },
        ],
        rule: {
          en: "For yes/no questions, use 'if' or 'whether' + subject + verb (no auxiliary do/does/did). For wh-questions, keep the question word and use normal word order (subject before verb), with the tense backshifted.",
          pt: "Para perguntas de sim/não, use 'if' ou 'whether' + sujeito + verbo (sem auxiliar do/does/did). Para perguntas com wh-, mantenha a palavra interrogativa e use a ordem normal (sujeito antes do verbo), com o tempo verbal mudado.",
        },
        mistakes: [
          { en: "✗ She asked did I like it. → ✓ She asked if I liked it. (no auxiliary, no question order)", pt: "✗ She asked did I like it. → ✓ She asked if I liked it. (sem auxiliar, sem ordem de pergunta)" },
          { en: "✗ He asked where did I live. → ✓ He asked where I lived. (statement word order)", pt: "✗ He asked where did I live. → ✓ He asked where I lived. (ordem de afirmação)" },
        ],
      },
      {
        title: { en: "Reporting verbs: say, tell, ask, and others", pt: "Verbos de relato: say, tell, ask e outros" },
        examples: [
          { en: "He admitted that he had forgotten to send the email.", pt: "Ele admitiu que tinha esquecido de enviar o e-mail." },
          { en: "She complained that the room was too noisy.", pt: "Ela reclamou que o quarto era muito barulhento." },
          { en: "He warned me that the roads were icy.", pt: "Ele me avisou que as estradas estavam com gelo." },
          { en: "She promised that she would call.", pt: "Ela prometeu que ligaria." },
        ],
        rule: {
          en: "Different reporting verbs give extra meaning: admit (confess something), complain (express unhappiness), warn (alert to danger), promise (commit to do something), suggest (offer an idea), deny (say it's not true). Use them + that + reported clause.",
          pt: "Verbos de relato diferentes dão significado extra: admit (confessar algo), complain (expressar insatisfação), warn (alertar sobre perigo), promise (se comprometer), suggest (oferecer uma ideia), deny (dizer que não é verdade). Use-os + that + oração relatada.",
        },
        mistakes: [
          { en: "✗ He suggested to go home. → ✓ He suggested (that) we go home. / He suggested going home.", pt: "✗ He suggested to go home. → ✓ He suggested (that) we go home. / He suggested going home." },
          { en: "✗ She denied to be late. → ✓ She denied being late. (deny + verb-ing)", pt: "✗ She denied to be late. → ✓ She denied being late. (deny + verbo-ing)" },
        ],
      },
    ],
    controlledPractice: [
      { id: "i33d-cp1", prompt: { en: "\"I'm tired,\" she said. → She said (that) she ___ tired.", pt: "\"I'm tired,\" she said. → She said (that) she ___ tired." }, options: ["is", "was", "were"], answer: "was", explanation: { en: "Present becomes past in reported speech.", pt: "O presente vira passado no discurso relatado." } },
      { id: "i33d-cp2", prompt: { en: "\"Are you coming?\" he asked. → He asked ___ I was coming.", pt: "\"Are you coming?\" he asked. → He asked ___ I was coming." }, options: ["that", "if", "what"], answer: "if", explanation: { en: "Yes/no questions are reported with 'if' or 'whether'.", pt: "Perguntas de sim/não são relatadas com 'if' ou 'whether'." } },
      { id: "i33d-cp3", prompt: { en: "Choose the correct reported question for \"Where do you live?\"", pt: "Escolha a pergunta relatada correta para \"Where do you live?\"" }, options: ["She asked where did I live.", "She asked where I lived.", "She asked where I live."], answer: "She asked where I lived.", explanation: { en: "Wh-questions keep normal word order and backshift the tense.", pt: "Perguntas com wh- mantêm a ordem normal e o tempo verbal muda." } },
      { id: "i33d-cp4", prompt: { en: "He ___ that he had forgotten to send the email.", pt: "He ___ that he had forgotten to send the email." }, options: ["admitted", "warned", "suggested"], answer: "admitted", explanation: { en: "'Admit' is used to confess something, often a mistake.", pt: "'Admit' é usado para confessar algo, geralmente um erro." } },
      { id: "i33d-cp5", prompt: { en: "\"I will call you,\" she said. → She said (that) she ___ call me.", pt: "\"I will call you,\" she said. → She said (that) she ___ call me." }, options: ["will", "would", "can"], answer: "would", explanation: { en: "'Will' becomes 'would' in reported speech.", pt: "'Will' vira 'would' no discurso relatado." } },
    ],
    input: {
      kind: "listening",
      title: { en: "A message from the office", pt: "Um recado do escritório" },
      lines: [
        { en: "Hi, this is Ana from the office. I'm calling about tomorrow's meeting.", pt: "Oi, aqui é a Ana do escritório. Estou ligando sobre a reunião de amanhã." },
        { en: "The manager said that the meeting was moved to 10 a.m.", pt: "O gerente disse que a reunião foi remarcada para as 10h." },
        { en: "She also mentioned that we needed to bring the final report.", pt: "Ela também mencionou que precisávamos trazer o relatório final." },
        { en: "She asked if everyone could confirm by email today.", pt: "Ela perguntou se todo mundo podia confirmar por e-mail hoje." },
        { en: "Finally, she warned us that the client might join the call late.", pt: "Por fim, ela nos avisou que o cliente talvez entrasse na ligação atrasado." },
      ],
      questions: [
        { id: "i33d-iq1", prompt: { en: "What time was the meeting moved to?", pt: "Para que horas a reunião foi remarcada?" }, options: ["9 a.m.", "10 a.m.", "11 a.m."], answer: "10 a.m.", explanation: { en: "'The meeting was moved to 10 a.m.'", pt: "'A reunião foi remarcada para as 10h.'" } },
        { id: "i33d-iq2", prompt: { en: "What did she ask everyone to do?", pt: "O que ela pediu que todos fizessem?" }, options: ["Call her back", "Confirm by email", "Bring coffee"], answer: "Confirm by email", explanation: { en: "'She asked if everyone could confirm by email.'", pt: "'Ela perguntou se todos podiam confirmar por e-mail.'" } },
        { id: "i33d-iq3", prompt: { en: "What did she warn about?", pt: "Sobre o que ela avisou?" }, options: ["The client might be late", "The room is small", "The report is missing"], answer: "The client might be late", explanation: { en: "'She warned us that the client might join the call late.'", pt: "'Ela nos avisou que o cliente talvez entrasse atrasado.'" } },
      ],
    },
    quickCheck: [
      { id: "i33d-qc1", prompt: { en: "What does 'complain' mean?", pt: "O que significa 'complain'?" }, options: ["To say you are unhappy", "To agree", "To whisper"], answer: "To say you are unhappy", explanation: { en: "Complain = express dissatisfaction.", pt: "Complain = expressar insatisfação." } },
      { id: "i33d-qc2", prompt: { en: "Choose the correct reported form of \"I have finished.\"", pt: "Escolha a forma relatada correta de \"I have finished.\"" }, options: ["He said he has finished.", "He said he had finished.", "He said he finished."], answer: "He said he had finished.", explanation: { en: "Present perfect backshifts to past perfect.", pt: "O present perfect vira past perfect." } },
      { id: "i33d-qc3", prompt: { en: "'Deny' is followed by...", pt: "'Deny' é seguido de..." }, options: ["verb-ing", "to + verb", "base verb"], answer: "verb-ing", explanation: { en: "Deny + verb-ing: She denied being late.", pt: "Deny + verbo-ing: She denied being late." } },
      { id: "i33d-qc4", prompt: { en: "\"What time is it?\" → He asked...", pt: "\"What time is it?\" → He asked..." }, options: ["what time was it", "what time it was", "what time is it"], answer: "what time it was", explanation: { en: "Keep the wh-word, use statement order, backshift the verb.", pt: "Mantenha o wh-, use ordem de afirmação e mude o verbo." } },
    ],
  },
  communicate: {
    id: "INTERMEDIATE-U33-COMMUNICATE",
    review: [
      { en: "She said that she was tired. — reported statements.", pt: "Ela disse que estava cansada. — afirmações relatadas." },
      { en: "He asked if I was coming. / She asked where I worked. — reported questions.", pt: "Ele perguntou se eu estava indo. / Ela perguntou onde eu trabalhava. — perguntas relatadas." },
      { en: "He admitted, complained, warned, promised, suggested, denied.", pt: "Ele admitiu, reclamou, avisou, prometeu, sugeriu, negou." },
      { en: "According to him, the deadline changed.", pt: "Segundo ele, o prazo mudou." },
    ],
    activities: [
      {
        id: "i33c-a1",
        title: { en: "The Phone Call", pt: "A ligação telefônica" },
        instruction: { en: "Imagine you just had a phone call with a friend. Report three things they said.", pt: "Imagine que você acabou de fazer uma ligação com um amigo. Relate três coisas que ele(a) disse." },
        phrases: [
          { en: "She said that she was going to move to another city.", pt: "Ela disse que ia se mudar para outra cidade." },
          { en: "He told me that he had gotten a new job.", pt: "Ele me disse que tinha conseguido um novo emprego." },
          { en: "She mentioned that she would visit us next month.", pt: "Ela mencionou que nos visitaria no mês que vem." },
        ],
        check: [
          { id: "i33c-a1q1", prompt: { en: "Which sentence correctly reports \"I got a new job\"?", pt: "Qual frase relata corretamente \"I got a new job\"?" }, options: ["He said he gets a new job.", "He said he had gotten a new job.", "He said he get a new job."], answer: "He said he had gotten a new job.", explanation: { en: "Simple past backshifts to past perfect.", pt: "O passado simples vira past perfect." } },
          { id: "i33c-a1q2", prompt: { en: "Complete: \"She ___ that she would visit us.\"", pt: "Complete: \"She ___ that she would visit us.\"" }, options: ["mentioned", "asked", "denied"], answer: "mentioned", explanation: { en: "'Mention' introduces information given casually.", pt: "'Mention' introduz informação dada de forma casual." } },
        ],
      },
      {
        id: "i33c-a2",
        title: { en: "Who Asked What?", pt: "Quem perguntou o quê?" },
        instruction: { en: "Report three questions someone asked you recently — at work, at home, or with friends.", pt: "Relate três perguntas que alguém te fez recentemente — no trabalho, em casa ou com amigos." },
        phrases: [
          { en: "My boss asked if I could finish the report by Friday.", pt: "Meu chefe perguntou se eu podia terminar o relatório até sexta." },
          { en: "My mom asked what time I was coming home.", pt: "Minha mãe perguntou a que horas eu ia chegar em casa." },
          { en: "My friend asked why I hadn't answered her message.", pt: "Minha amiga perguntou por que eu não tinha respondido a mensagem dela." },
        ],
        check: [
          { id: "i33c-a2q1", prompt: { en: "\"Can you help me?\" → She asked...", pt: "\"Can you help me?\" → She asked..." }, options: ["if I could help her", "if I can help her", "could I help her"], answer: "if I could help her", explanation: { en: "'Can' backshifts to 'could' in reported questions.", pt: "'Can' vira 'could' em perguntas relatadas." } },
          { id: "i33c-a2q2", prompt: { en: "\"Why are you late?\" → He asked...", pt: "\"Why are you late?\" → He asked..." }, options: ["why I was late", "why was I late", "why I am late"], answer: "why I was late", explanation: { en: "Keep the wh-word, use statement order, backshift the tense.", pt: "Mantenha o wh-, use ordem de afirmação e mude o tempo verbal." } },
        ],
      },
      {
        id: "i33c-a3",
        title: { en: "Gossip Chain", pt: "Corrente de fofoca" },
        instruction: { en: "Practice reporting what different people said, using verbs like admit, complain, warn and promise.", pt: "Pratique relatar o que diferentes pessoas disseram, usando verbos como admit, complain, warn e promise." },
        phrases: [
          { en: "Theo admitted that he had lost the keys.", pt: "O Theo admitiu que tinha perdido as chaves." },
          { en: "Rafa complained that the internet was too slow.", pt: "O Rafa reclamou que a internet estava muito lenta." },
          { en: "Marina promised that she would fix it tonight.", pt: "A Marina prometeu que consertaria isso hoje à noite." },
        ],
        check: [
          { id: "i33c-a3q1", prompt: { en: "Which verb fits: \"He ___ that he wouldn't be late again.\"", pt: "Qual verbo cabe: \"He ___ that he wouldn't be late again.\"" }, options: ["promised", "denied", "whispered"], answer: "promised", explanation: { en: "'Promise' means commit to doing something.", pt: "'Promise' significa se comprometer a fazer algo." } },
          { id: "i33c-a3q2", prompt: { en: "Which verb fits: \"She ___ that the food was cold.\"", pt: "Qual verbo cabe: \"She ___ that the food was cold.\"" }, options: ["complained", "suggested", "promised"], answer: "complained", explanation: { en: "'Complain' expresses dissatisfaction.", pt: "'Complain' expressa insatisfação." } },
        ],
      },
    ],
    challenge: {
      id: "i33c-cc1",
      title: { en: "Report a Real Conversation", pt: "Relate uma conversa real" },
      instruction: {
        en: "Speak out loud about a real conversation you had recently. Report at least two statements and one question using reported speech, and use at least one verb like admit, complain, warn or promise.",
        pt: "Fale em voz alta sobre uma conversa real que você teve recentemente. Relate pelo menos duas afirmações e uma pergunta usando discurso relatado, e use pelo menos um verbo como admit, complain, warn ou promise.",
      },
      phrases: [
        { en: "My coworker told me that the meeting was canceled.", pt: "Meu colega me disse que a reunião foi cancelada." },
        { en: "She asked if I could send the file today.", pt: "Ela perguntou se eu podia mandar o arquivo hoje." },
        { en: "He admitted that he had forgotten to reply.", pt: "Ele admitiu que tinha esquecido de responder." },
        { en: "I promised that I would send it right away.", pt: "Eu prometi que mandaria imediatamente." },
      ],
      check: [
        { id: "i33c-cc1q1", prompt: { en: "Did you use at least two reported statements?", pt: "Você usou pelo menos duas afirmações relatadas?" }, options: ["Yes", "No", "Partially"], answer: "Yes", explanation: { en: "Self-check: statements with said/told + backshifted tense.", pt: "Autoavaliação: afirmações com said/told + tempo verbal mudado." } },
        { id: "i33c-cc1q2", prompt: { en: "Did you use one reported question and one communication verb (admit, complain, warn, promise)?", pt: "Você usou uma pergunta relatada e um verbo de comunicação (admit, complain, warn, promise)?" }, options: ["Yes", "No", "Partially"], answer: "Yes", explanation: { en: "Self-check: reported question with if/wh-word + communication verb.", pt: "Autoavaliação: pergunta relatada com if/wh- + verbo de comunicação." } },
      ],
    },
    lessonReview: {
      summary: {
        en: "In this unit, we learned to report what people say and ask using reported speech, with the right tense backshift, and practiced communication verbs like admit, complain, warn and promise.",
        pt: "Nesta unidade, aprendemos a relatar o que as pessoas dizem e perguntam usando o discurso relatado, com a mudança correta de tempo verbal, e praticamos verbos de comunicação como admit, complain, warn e promise.",
      },
      canDo: [
        { en: "I can report statements using said and told, with the correct tense backshift.", pt: "Consigo relatar afirmações usando said e told, com a mudança correta de tempo verbal." },
        { en: "I can report yes/no and wh- questions correctly.", pt: "Consigo relatar perguntas de sim/não e com wh- corretamente." },
        { en: "I can use communication verbs (admit, complain, warn, promise, suggest, deny) to add meaning.", pt: "Consigo usar verbos de comunicação (admit, complain, warn, promise, suggest, deny) para acrescentar significado." },
      ],
      next: { en: "Next, we will explore Unit 34: Health & Wellness — Conditional Sentences (Type 1 & 2).", pt: "Em seguida, exploraremos a Unidade 34: Saúde e Bem-estar — Frases Condicionais (Tipo 1 e 2)." },
    },
  },
};
