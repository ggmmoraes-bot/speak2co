import type { CourseUnit } from "./types";

/**
 * Intermediate — Unit 9 (Education — Future forms review). Conteúdo autoral Speak2Co.
 * Foco: revisão dos futuros will, going to e present continuous para
 * combinados/arranjos, no contexto de educação e resumo de notícias.
 * Personagens originais: Marina, Theo e Rafa, colegas de curso online.
 */
export const INTERMEDIATE_U09: CourseUnit = {
  code: "INTERMEDIATE-U09",
  number: 9,
  title: "Education — Which Future Fits?",
  titlePt: "Educação — Qual Futuro Combina?",
  cefr: "B1",
  objective: {
    en: "Review and choose between 'will', 'going to' and the present continuous to talk about the future, using education vocabulary and summarizing news.",
    pt: "Revisar e escolher entre 'will', 'going to' e o presente contínuo para falar do futuro, usando vocabulário de educação e resumindo notícias.",
  },
  communicationGoal: {
    en: "Summarize a report about education, talk about study plans, and make on-the-spot decisions and predictions.",
    pt: "Resumir um relatório sobre educação, falar sobre planos de estudo, e tomar decisões e previsões na hora.",
  },
  prerequisites: {
    en: "Intermediate units 1-8: 'be going to', past tenses, present perfect and past continuous.",
    pt: "Unidades intermediárias 1-8: 'be going to', tempos passados, present perfect e past continuous.",
  },
  newContent: {
    en: "Grammar: future forms review — will (decisions/predictions), going to (plans/evidence), present continuous (fixed arrangements) | Vocabulary: curriculum, assignment, lecture, research, degree, scholarship, assessment, skill, qualification, mentor | Expressions: reporting and summarizing",
    pt: "Gramática: revisão de futuros — will (decisões/previsões), going to (planos/evidência), presente contínuo (compromissos marcados) | Vocabulário: curriculum, assignment, lecture, research, degree, scholarship, assessment, skill, qualification, mentor | Expressões: relatar e resumir",
  },
  reviewContent: {
    en: "Review of 'be going to' for plans and predictions from earlier units, now contrasted with 'will' and the present continuous.",
    pt: "Revisão de 'be going to' para planos e previsões de unidades anteriores, agora em contraste com 'will' e o presente contínuo.",
  },
  discover: {
    id: "INTERMEDIATE-U09-DISCOVER",
    warmUp: {
      prompt: {
        en: "Look at the picture. What do you think these students are studying? What are their plans after the course?",
        pt: "Observe a imagem. O que você acha que esses estudantes estão estudando? Quais são os planos deles depois do curso?",
      },
      phrases: [
        { en: "Are you studying for a degree or a certificate?", pt: "Você está estudando para um diploma ou um certificado?" },
        { en: "What skill do you want to develop this year?", pt: "Que habilidade você quer desenvolver este ano?" },
        { en: "Do you have a mentor at school or at work?", pt: "Você tem um mentor na escola ou no trabalho?" },
      ],
    },
    context: {
      situation: {
        en: "Marina, Theo and Rafa are finishing an online course together. Tonight they are reading a report about education and talking about their next steps.",
        pt: "Marina, Theo e Rafa estão terminando um curso online juntos. Hoje à noite, eles leem um relatório sobre educação e conversam sobre os próximos passos.",
      },
      dialogue: [
        { who: "Marina", en: "According to the report, more students will study online in the next five years.", pt: "De acordo com o relatório, mais estudantes vão estudar online nos próximos cinco anos." },
        { who: "Theo", en: "That doesn't surprise me. Look, I'm having a meeting with my mentor at 9 tomorrow to plan my final assignment.", pt: "Isso não me surpreende. Olha, vou ter uma reunião com meu mentor às 9h amanhã para planejar meu trabalho final." },
        { who: "Rafa", en: "Nice. I think I'll ask for feedback on my research too. I still don't understand the assessment rules.", pt: "Legal. Acho que também vou pedir feedback sobre minha pesquisa. Ainda não entendo as regras da avaliação." },
        { who: "Marina", en: "The main issue is time. I'm going to finish my curriculum project this weekend, no matter what.", pt: "O principal problema é o tempo. Vou terminar meu projeto de currículo neste fim de semana, custe o que custar." },
        { who: "Theo", en: "Good plan. And after the degree, what will you do?", pt: "Bom plano. E depois do diploma, o que você vai fazer?" },
        { who: "Marina", en: "I'll apply for a scholarship for a master's program. I've already started the paperwork.", pt: "Vou me candidatar a uma bolsa para um mestrado. Já comecei a papelada." },
        { who: "Rafa", en: "To sum up: Theo has a meeting tomorrow, Marina is finishing her project, and I will ask for help this week.", pt: "Resumindo: Theo tem uma reunião amanhã, Marina está terminando o projeto dela, e eu vou pedir ajuda esta semana." },
        { who: "Theo", en: "Perfect summary! Let's get back to the lecture now, it's starting in two minutes.", pt: "Resumo perfeito! Vamos voltar para a aula agora, ela começa em dois minutos." },
      ],
    },
    vocabulary: [
      { term: "curriculum", pt: "currículo (de estudos)", ipa: "/kəˈrɪkjələm/", definition: "The subjects and content taught in a course or school.", example: "The new curriculum includes more practical projects.", examplePt: "O novo currículo inclui mais projetos práticos." },
      { term: "assignment", pt: "trabalho, tarefa", ipa: "/əˈsaɪnmənt/", definition: "A piece of work given to a student to complete.", example: "I'm going to finish my final assignment this weekend.", examplePt: "Vou terminar meu trabalho final neste fim de semana." },
      { term: "lecture", pt: "aula expositiva, palestra", ipa: "/ˈlektʃər/", definition: "A talk given to teach students about a subject.", example: "The lecture is starting in two minutes.", examplePt: "A aula começa em dois minutos." },
      { term: "research", pt: "pesquisa", ipa: "/rɪˈsɜːrtʃ/", definition: "Careful study of a subject to discover new information.", example: "I'll ask for feedback on my research.", examplePt: "Vou pedir feedback sobre minha pesquisa." },
      { term: "degree", pt: "diploma, grau acadêmico", ipa: "/dɪˈɡriː/", definition: "A qualification given by a university after a course.", example: "She's going to get her degree next year.", examplePt: "Ela vai receber o diploma dela ano que vem." },
      { term: "scholarship", pt: "bolsa de estudos", ipa: "/ˈskɑːlərʃɪp/", definition: "Money given to a student to pay for their studies.", example: "I'll apply for a scholarship for a master's program.", examplePt: "Vou me candidatar a uma bolsa para um mestrado." },
      { term: "assessment", pt: "avaliação", ipa: "/əˈsesmənt/", definition: "The process of judging a student's work or progress.", example: "I still don't understand the assessment rules.", examplePt: "Ainda não entendo as regras da avaliação." },
      { term: "skill", pt: "habilidade", ipa: "/skɪl/", definition: "The ability to do something well, usually learned.", example: "What skill do you want to develop this year?", examplePt: "Que habilidade você quer desenvolver este ano?" },
      { term: "qualification", pt: "qualificação", ipa: "/ˌkwɑːlɪfɪˈkeɪʃn/", definition: "A skill, certificate or degree that shows you can do something.", example: "This course gives you a useful qualification.", examplePt: "Esse curso te dá uma qualificação útil." },
      { term: "mentor", pt: "mentor", ipa: "/ˈmentɔːr/", definition: "An experienced person who advises and guides someone.", example: "I'm having a meeting with my mentor at 9 tomorrow.", examplePt: "Vou ter uma reunião com meu mentor às 9h amanhã." },
    ],
    expressions: [
      { en: "According to the report…", pt: "De acordo com o relatório…" },
      { en: "The main issue is…", pt: "O principal problema é…" },
      { en: "To sum up…", pt: "Resumindo…" },
      { en: "No matter what.", pt: "Custe o que custar." },
      { en: "Let's get back to…", pt: "Vamos voltar para…" },
      { en: "That doesn't surprise me.", pt: "Isso não me surpreende." },
    ],
    grammar: [
      {
        title: { en: "Future review: will vs. going to vs. present continuous", pt: "Revisão de futuro: will vs. going to vs. presente contínuo" },
        examples: [
          { en: "I'll apply for a scholarship. (decision made now)", pt: "Vou me candidatar a uma bolsa. (decisão tomada agora)" },
          { en: "More students will study online in five years. (prediction, opinion)", pt: "Mais estudantes vão estudar online em cinco anos. (previsão, opinião)" },
          { en: "I'm going to finish my project this weekend. (plan already decided)", pt: "Vou terminar meu projeto neste fim de semana. (plano já decidido)" },
          { en: "Look at those dark clouds — it's going to rain. (prediction with evidence)", pt: "Olha essas nuvens escuras — vai chover. (previsão com evidência)" },
          { en: "I'm meeting my mentor at 9 tomorrow. (fixed arrangement, time and place set)", pt: "Vou me encontrar com meu mentor às 9h amanhã. (compromisso marcado, hora e lugar definidos)" },
        ],
        rule: {
          en: "Use 'will' for decisions made at the moment of speaking and for predictions/opinions without strong evidence. Use 'be going to' for plans already decided before speaking and for predictions with visible evidence. Use the present continuous for fixed arrangements with a specific time and place, usually already confirmed with someone else.",
          pt: "Use 'will' para decisões tomadas no momento da fala e previsões/opiniões sem evidência forte. Use 'be going to' para planos já decididos antes de falar e previsões com evidência visível. Use o presente contínuo para compromissos marcados com hora e lugar específicos, geralmente já combinados com outra pessoa.",
        },
        mistakes: [
          { en: "✗ I'm going to think it will rain. → ✓ I think it will rain. (opinion = will)", pt: "✗ I'm going to think it will rain. → ✓ I think it will rain. (opinião = will)" },
          { en: "✗ I will meet my mentor tomorrow at 9. (if it's already scheduled) → ✓ I'm meeting my mentor tomorrow at 9.", pt: "✗ I will meet my mentor tomorrow at 9. (se já está marcado) → ✓ I'm meeting my mentor tomorrow at 9." },
          { en: "✗ Look at those clouds, I will rain. → ✓ Look at those clouds, it's going to rain.", pt: "✗ Look at those clouds, I will rain. → ✓ Look at those clouds, it's going to rain." },
        ],
      },
      {
        title: { en: "Spontaneous decisions with will", pt: "Decisões espontâneas com will" },
        examples: [
          { en: "I still don't understand this. — I'll ask the mentor.", pt: "Ainda não entendo isso. — Vou perguntar ao mentor." },
          { en: "The lecture is starting. — I'll close my email now.", pt: "A aula está começando. — Vou fechar meu e-mail agora." },
          { en: "Will you help me with this assignment?", pt: "Você vai me ajudar com esse trabalho?" },
        ],
        rule: {
          en: "'Will' + base verb is the natural choice when you decide something right at the moment you speak, often as an offer, promise or reaction to new information.",
          pt: "'Will' + verbo base é a escolha natural quando você decide algo no momento em que fala, geralmente como oferta, promessa ou reação a uma nova informação.",
        },
        mistakes: [
          { en: "✗ I go to ask the mentor. → ✓ I'll ask the mentor.", pt: "✗ I go to ask the mentor. → ✓ I'll ask the mentor." },
          { en: "✗ Will you to help me? → ✓ Will you help me? (no 'to' after will)", pt: "✗ Will you to help me? → ✓ Will you help me? (sem 'to' depois de will)" },
        ],
      },
    ],
    controlledPractice: [
      { id: "i9d-cp1", prompt: { en: "Choose the correct sentence for a fixed arrangement.", pt: "Escolha a frase correta para um compromisso já marcado." }, options: ["I will meet my mentor at 9 tomorrow.", "I'm meeting my mentor at 9 tomorrow.", "I meet my mentor at 9 tomorrow."], answer: "I'm meeting my mentor at 9 tomorrow.", explanation: { en: "Present continuous is used for scheduled arrangements.", pt: "O presente contínuo é usado para compromissos marcados." } },
      { id: "i9d-cp2", prompt: { en: "Complete the spontaneous offer: 'I still don't get it.' — '___ ask the teacher.'", pt: "Complete a oferta espontânea: 'I still don't get it.' — '___ ask the teacher.'" }, options: ["I'm going to", "I'll", "I'm"], answer: "I'll", explanation: { en: "Spontaneous decisions use will.", pt: "Decisões espontâneas usam will." } },
      { id: "i9d-cp3", prompt: { en: "Choose the prediction with evidence: dark clouds in the sky.", pt: "Escolha a previsão com evidência: nuvens escuras no céu." }, options: ["It will rain.", "It's going to rain.", "It's meeting to rain."], answer: "It's going to rain.", explanation: { en: "Predictions based on visible evidence use 'going to'.", pt: "Previsões com evidência visível usam 'going to'." } },
      { id: "i9d-cp4", prompt: { en: "Complete the opinion: 'I think education ___ change a lot.'", pt: "Complete a opinião: 'I think education ___ change a lot.'" }, options: ["will", "is going to", "is meeting"], answer: "will", explanation: { en: "Opinions about the future without strong evidence use 'will'.", pt: "Opiniões sobre o futuro sem evidência forte usam 'will'." } },
      { id: "i9d-cp5", prompt: { en: "Which word means 'money given to a student to study'?", pt: "Qual palavra significa 'dinheiro dado a um estudante para estudar'?" }, options: ["assignment", "scholarship", "assessment"], answer: "scholarship", explanation: { en: "A scholarship pays for a student's studies.", pt: "Uma bolsa paga os estudos de um estudante." } },
    ],
    input: {
      kind: "reading",
      title: { en: "Report: The Future of Education", pt: "Relatório: O Futuro da Educação" },
      lines: [
        { en: "According to a new report, education will change a lot in the next ten years.", pt: "De acordo com um novo relatório, a educação vai mudar muito nos próximos dez anos." },
        { en: "More universities are going to offer flexible online degrees, and many students will combine work and study.", pt: "Mais universidades vão oferecer diplomas online flexíveis, e muitos estudantes vão combinar trabalho e estudo." },
        { en: "The main issue is access: not every student has a computer or a good internet connection.", pt: "O principal problema é o acesso: nem todo estudante tem computador ou uma boa conexão de internet." },
        { en: "Some schools are already testing new assessment methods, like projects instead of traditional exams.", pt: "Algumas escolas já estão testando novos métodos de avaliação, como projetos em vez de provas tradicionais." },
        { en: "To sum up, the report says skills and qualifications will matter more than the name of the university.", pt: "Resumindo, o relatório diz que habilidades e qualificações vão importar mais do que o nome da universidade." },
      ],
      questions: [
        { id: "i9d-iq1", prompt: { en: "What will many students do, according to the report?", pt: "O que muitos estudantes vão fazer, segundo o relatório?" }, options: ["Stop studying", "Combine work and study", "Only study online"], answer: "Combine work and study", explanation: { en: "'Many students will combine work and study.'", pt: "'Muitos estudantes vão combinar trabalho e estudo.'" } },
        { id: "i9d-iq2", prompt: { en: "What is the main issue mentioned in the report?", pt: "Qual é o principal problema mencionado no relatório?" }, options: ["Access to computers and internet", "The price of books", "The length of lectures"], answer: "Access to computers and internet", explanation: { en: "'The main issue is access…'", pt: "'O principal problema é o acesso…'" } },
        { id: "i9d-iq3", prompt: { en: "What will matter more than the university's name?", pt: "O que vai importar mais do que o nome da universidade?" }, options: ["Skills and qualifications", "The size of the campus", "The price of the degree"], answer: "Skills and qualifications", explanation: { en: "'Skills and qualifications will matter more…'", pt: "'Habilidades e qualificações vão importar mais…'" } },
      ],
    },
    quickCheck: [
      { id: "i9d-qc1", prompt: { en: "What does 'mentor' mean?", pt: "O que significa 'mentor'?" }, options: ["An experienced guide", "A final exam", "A university building"], answer: "An experienced guide", explanation: { en: "A mentor advises and guides someone.", pt: "Um mentor orienta e guia alguém." } },
      { id: "i9d-qc2", prompt: { en: "Choose the correct form for a scheduled meeting tomorrow.", pt: "Escolha a forma correta para uma reunião marcada amanhã." }, options: ["I will have a meeting.", "I'm having a meeting.", "I have a meeting will."], answer: "I'm having a meeting.", explanation: { en: "Present continuous for fixed arrangements.", pt: "Presente contínuo para compromissos marcados." } },
      { id: "i9d-qc3", prompt: { en: "'To sum up' means…", pt: "'To sum up' significa…" }, options: ["To summarize", "To disagree", "To ask a question"], answer: "To summarize", explanation: { en: "'To sum up' introduces a summary.", pt: "'To sum up' introduz um resumo." } },
      { id: "i9d-qc4", prompt: { en: "Complete: 'I don't know the answer. I ___ ask my mentor.'", pt: "Complete: 'I don't know the answer. I ___ ask my mentor.'" }, options: ["'ll", "'m going to", "am"], answer: "'ll", explanation: { en: "Spontaneous decision made now.", pt: "Decisão espontânea tomada agora." } },
    ],
  },
  communicate: {
    id: "INTERMEDIATE-U09-COMMUNICATE",
    review: [
      { en: "I'll apply for a scholarship. — spontaneous decision.", pt: "Vou me candidatar a uma bolsa. — decisão espontânea." },
      { en: "I'm going to finish my project this weekend. — planned in advance.", pt: "Vou terminar meu projeto neste fim de semana. — planejado com antecedência." },
      { en: "I'm meeting my mentor at 9 tomorrow. — fixed arrangement.", pt: "Vou me encontrar com meu mentor às 9h amanhã. — compromisso marcado." },
      { en: "According to the report, skills will matter more. To sum up, education is changing.", pt: "De acordo com o relatório, habilidades vão importar mais. Resumindo, a educação está mudando." },
    ],
    activities: [
      {
        id: "i9c-a1",
        title: { en: "Solve a Problem", pt: "Resolva um problema" },
        instruction: { en: "You missed an important lecture and don't understand the assignment. Say two things you will do to solve this problem.", pt: "Você perdeu uma aula importante e não entende o trabalho. Diga duas coisas que você vai fazer para resolver esse problema." },
        phrases: [
          { en: "I'll watch the recorded lecture tonight.", pt: "Vou assistir à gravação da aula hoje à noite." },
          { en: "I'll ask my mentor for feedback on the assignment.", pt: "Vou pedir feedback do meu mentor sobre o trabalho." },
          { en: "I'm going to organize a study group with my classmates.", pt: "Vou organizar um grupo de estudo com meus colegas." },
        ],
        check: [
          { id: "i9c-a1q1", prompt: { en: "Which sentence shows a spontaneous decision?", pt: "Qual frase mostra uma decisão espontânea?" }, options: ["I'll watch the recorded lecture tonight.", "I watch lectures every day.", "I watched the lecture yesterday."], answer: "I'll watch the recorded lecture tonight.", explanation: { en: "'Will' expresses a decision made now.", pt: "'Will' expressa uma decisão tomada agora." } },
          { id: "i9c-a1q2", prompt: { en: "What is an 'assignment'?", pt: "O que é um 'assignment'?" }, options: ["A piece of work for students", "A type of exam room", "A university degree"], answer: "A piece of work for students", explanation: { en: "An assignment is a task given to a student.", pt: "Um assignment é uma tarefa dada a um estudante." } },
        ],
      },
      {
        id: "i9c-a2",
        title: { en: "Interpret a Listening", pt: "Interprete uma escuta" },
        instruction: { en: "Listen to a classmate talk about their study plans and report what will happen, using 'will', 'going to' or the present continuous correctly.", pt: "Ouça um colega falar sobre os planos de estudo e relate o que vai acontecer, usando 'will', 'going to' ou o presente contínuo corretamente." },
        phrases: [
          { en: "She's going to apply for a scholarship next month.", pt: "Ela vai se candidatar a uma bolsa mês que vem." },
          { en: "He's having an assessment meeting on Friday.", pt: "Ele vai ter uma reunião de avaliação na sexta." },
          { en: "I think more people will study part-time in the future.", pt: "Acho que mais pessoas vão estudar meio período no futuro." },
        ],
        check: [
          { id: "i9c-a2q1", prompt: { en: "Choose the correct report for a scheduled event on Friday.", pt: "Escolha o relato correto para um evento marcado na sexta." }, options: ["He will have a meeting on Friday.", "He's having a meeting on Friday.", "He has a meeting will Friday."], answer: "He's having a meeting on Friday.", explanation: { en: "Present continuous reports fixed arrangements.", pt: "O presente contínuo relata compromissos marcados." } },
          { id: "i9c-a2q2", prompt: { en: "What does 'assessment' mean?", pt: "O que significa 'assessment'?" }, options: ["Evaluation of work or progress", "A university degree", "A scholarship"], answer: "Evaluation of work or progress", explanation: { en: "An assessment judges a student's work.", pt: "Uma avaliação julga o trabalho de um estudante." } },
        ],
      },
      {
        id: "i9c-a3",
        title: { en: "Write a Short Text", pt: "Escreva um texto curto" },
        instruction: { en: "Write 3-4 sentences summarizing your study or career plans for next year, using 'will' and 'going to' correctly.", pt: "Escreva 3-4 frases resumindo seus planos de estudo ou carreira para o ano que vem, usando 'will' e 'going to' corretamente." },
        phrases: [
          { en: "Next year, I'm going to finish my degree.", pt: "Ano que vem, vou terminar meu diploma." },
          { en: "I'll probably apply for a new qualification too.", pt: "Provavelmente vou me candidatar a uma nova qualificação também." },
          { en: "I think I will find a mentor to help me.", pt: "Acho que vou encontrar um mentor para me ajudar." },
        ],
        check: [
          { id: "i9c-a3q1", prompt: { en: "Did you use both 'will' and 'going to' correctly?", pt: "Você usou 'will' e 'going to' corretamente?" }, options: ["Yes", "No", "Partially"], answer: "Yes", explanation: { en: "Self-check: plans vs. predictions/decisions.", pt: "Autoavaliação: planos vs. previsões/decisões." } },
          { id: "i9c-a3q2", prompt: { en: "Did you include at least one unit vocabulary word?", pt: "Você incluiu pelo menos uma palavra do vocabulário da unidade?" }, options: ["Yes", "No", "Partially"], answer: "Yes", explanation: { en: "Self-check: curriculum, degree, mentor, scholarship, etc.", pt: "Autoavaliação: curriculum, degree, mentor, scholarship, etc." } },
        ],
      },
    ],
    challenge: {
      id: "i9c-cc1",
      title: { en: "Summarize the Education Report", pt: "Resuma o relatório de educação" },
      instruction: {
        en: "Summarize the report you read out loud. Use 'According to the report…' and 'To sum up…', and mention one thing that will happen, one plan and one arrangement.",
        pt: "Resuma em voz alta o relatório que você leu. Use 'According to the report…' e 'To sum up…', e mencione algo que vai acontecer, um plano e um compromisso.",
      },
      phrases: [
        { en: "According to the report, education will change a lot in the next ten years.", pt: "De acordo com o relatório, a educação vai mudar muito nos próximos dez anos." },
        { en: "The main issue is access to computers and the internet.", pt: "O principal problema é o acesso a computadores e à internet." },
        { en: "I'm going to research this topic more this week.", pt: "Vou pesquisar mais sobre esse tema esta semana." },
        { en: "To sum up, skills and qualifications will matter more than the university's name.", pt: "Resumindo, habilidades e qualificações vão importar mais do que o nome da universidade." },
      ],
      check: [
        { id: "i9c-cc1q1", prompt: { en: "Did you use 'According to the report…'?", pt: "Você usou 'According to the report…'?" }, options: ["Yes", "No", "Partially"], answer: "Yes", explanation: { en: "Self-check: reporting expression.", pt: "Autoavaliação: expressão de relatar." } },
        { id: "i9c-cc1q2", prompt: { en: "Did you use all three future forms correctly?", pt: "Você usou as três formas de futuro corretamente?" }, options: ["Yes", "No", "Partially"], answer: "Yes", explanation: { en: "Self-check: will, going to, present continuous.", pt: "Autoavaliação: will, going to, presente contínuo." } },
      ],
    },
    lessonReview: {
      summary: {
        en: "You reviewed and contrasted 'will', 'going to' and the present continuous for the future, and practiced education vocabulary and summarizing expressions.",
        pt: "Você revisou e comparou 'will', 'going to' e o presente contínuo para o futuro, e praticou vocabulário de educação e expressões para resumir.",
      },
      canDo: [
        { en: "I can choose between 'will', 'going to' and the present continuous correctly.", pt: "Consigo escolher entre 'will', 'going to' e o presente contínuo corretamente." },
        { en: "I can talk about study plans, degrees and scholarships.", pt: "Consigo falar sobre planos de estudo, diplomas e bolsas." },
        { en: "I can summarize a report using 'According to…' and 'To sum up…'.", pt: "Consigo resumir um relatório usando 'According to…' e 'To sum up…'." },
        { en: "I can make spontaneous offers and decisions with 'will'.", pt: "Consigo fazer ofertas e decisões espontâneas com 'will'." },
      ],
      next: { en: "Next unit: culture and society — functional language for meetings and professional exchanges.", pt: "Próxima unidade: cultura e sociedade — linguagem funcional para reuniões e trocas profissionais." },
    },
  },
};
