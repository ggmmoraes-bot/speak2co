import type { CourseUnit } from "./types";

/**
 * Intermediate — Unit 22 (Job Interviews). Conteúdo autoral Speak2Co.
 * Foco: reported speech (statements e perguntas) com say/tell, e vocabulário
 * de entrevistas de emprego. Personagens: Bia e Diego, agora em novas fases
 * de carreira.
 */
export const INTERMEDIATE_U22: CourseUnit = {
  code: "INTERMEDIATE-U22",
  number: 22,
  title: "Job Interviews — What did she say?",
  titlePt: "Entrevistas de Emprego — O que ela disse?",
  cefr: "B1",
  objective: {
    en: "Report what people said and asked using reported speech, and talk about job interviews.",
    pt: "Relatar o que as pessoas disseram e perguntaram usando reported speech, e falar sobre entrevistas de emprego.",
  },
  communicationGoal: {
    en: "Tell a friend what happened in a job interview: what the interviewer said, asked and offered.",
    pt: "Contar para um amigo o que aconteceu em uma entrevista de emprego: o que o entrevistador disse, perguntou e ofereceu.",
  },
  prerequisites: {
    en: "Intermediate units 1–21: past simple and continuous, must/mustn't, have to, there is/are.",
    pt: "Unidades 1–21 do Intermediate: passado simples e contínuo, must/mustn't, have to, there is/are.",
  },
  newContent: {
    en: "Grammar: reported speech for statements and questions (say/tell, tense backshift) | Vocabulary: job interviews (12 items) | Expressions: reporting news",
    pt: "Gramática: reported speech para afirmações e perguntas (say/tell, mudança de tempo verbal) | Vocabulário: entrevistas de emprego (12 itens) | Expressões: relatar novidades",
  },
  reviewContent: {
    en: "Past simple and past continuous, used for the original words being reported.",
    pt: "Passado simples e passado contínuo, usados nas falas originais que estão sendo relatadas.",
  },
  discover: {
    id: "INTERMEDIATE-U22-DISCOVER",
    warmUp: {
      prompt: {
        en: "Look at the picture. What questions do interviewers usually ask in a job interview?",
        pt: "Observe a imagem. Que perguntas os entrevistadores costumam fazer em uma entrevista de emprego?",
      },
      phrases: [
        { en: "What was your last job interview like?", pt: "Como foi sua última entrevista de emprego?" },
        { en: "What questions do you find difficult in an interview?", pt: "Que perguntas você acha difíceis em uma entrevista?" },
        { en: "How do you usually prepare for an interview?", pt: "Como você costuma se preparar para uma entrevista?" },
      ],
    },
    context: {
      situation: {
        en: "Bia just had a job interview for a marketing position. She's telling Diego everything the interviewer said and asked.",
        pt: "Bia acabou de fazer uma entrevista de emprego para uma vaga de marketing. Ela está contando ao Diego tudo o que o entrevistador disse e perguntou.",
      },
      dialogue: [
        { who: "Diego", en: "How did the interview go? Tell me everything!", pt: "Como foi a entrevista? Me conta tudo!" },
        { who: "Bia", en: "It was intense! The interviewer said the position required a lot of experience.", pt: "Foi intensa! O entrevistador disse que a vaga exigia muita experiência." },
        { who: "Diego", en: "What did she ask you?", pt: "O que ela te perguntou?" },
        { who: "Bia", en: "She asked me if I had worked in a team before, and she asked why I wanted to change jobs.", pt: "Ela me perguntou se eu já tinha trabalhado em equipe antes, e perguntou por que eu queria mudar de emprego." },
        { who: "Diego", en: "Nice. Did she mention the salary?", pt: "Legal. Ela mencionou o salário?" },
        { who: "Bia", en: "Yes, she told me the company offered a good salary and flexible hours.", pt: "Sim, ela me disse que a empresa oferecia um bom salário e horários flexíveis." },
        { who: "Diego", en: "That sounds great! Did they give you any feedback?", pt: "Isso parece ótimo! Eles te deram algum feedback?" },
        { who: "Bia", en: "She said she would call me next week with the result. I'm so nervous!", pt: "Ela disse que ligaria para mim na próxima semana com o resultado. Estou tão nervosa!" },
      ],
    },
    vocabulary: [
      { term: "interviewer", pt: "entrevistador(a)", ipa: "/ˈɪntərvjuːər/", definition: "A person who asks questions in an interview.", example: "The interviewer asked about my previous experience.", examplePt: "O entrevistador perguntou sobre minha experiência anterior." },
      { term: "candidate", pt: "candidato(a)", ipa: "/ˈkændɪdət/", definition: "A person who applies for a job.", example: "There were ten candidates for the position.", examplePt: "Havia dez candidatos para a vaga." },
      { term: "résumé", pt: "currículo", ipa: "/ˈrezjʊmeɪ/", definition: "A document listing a person's education and work experience.", example: "Send your résumé before Friday.", examplePt: "Envie seu currículo antes de sexta." },
      { term: "position", pt: "cargo/vaga", ipa: "/pəˈzɪʃən/", definition: "A job or role in a company.", example: "The position requires strong communication skills.", examplePt: "O cargo exige boas habilidades de comunicação." },
      { term: "requirement", pt: "requisito", ipa: "/rɪˈkwaɪərmənt/", definition: "Something that is necessary or asked for.", example: "Experience with software is a requirement.", examplePt: "Experiência com software é um requisito." },
      { term: "salary", pt: "salário", ipa: "/ˈsæləri/", definition: "The fixed amount of money paid regularly for work.", example: "The company offered a good salary.", examplePt: "A empresa ofereceu um bom salário." },
      { term: "benefits", pt: "benefícios", ipa: "/ˈbenɪfɪts/", definition: "Extra things a company gives employees besides salary.", example: "The job includes health benefits.", examplePt: "O emprego inclui benefícios de saúde." },
      { term: "strength", pt: "ponto forte", ipa: "/streŋθ/", definition: "A good quality or skill a person has.", example: "My biggest strength is teamwork.", examplePt: "Meu maior ponto forte é o trabalho em equipe." },
      { term: "weakness", pt: "ponto fraco", ipa: "/ˈwiːknəs/", definition: "An area where a person needs improvement.", example: "My weakness is public speaking.", examplePt: "Meu ponto fraco é falar em público." },
      { term: "hire", pt: "contratar", ipa: "/ˈhaɪər/", definition: "To give someone a job.", example: "The company decided to hire her.", examplePt: "A empresa decidiu contratá-la." },
      { term: "flexible hours", pt: "horário flexível", ipa: "/ˈfleksəbl ˈaʊərz/", definition: "A work schedule that can change.", example: "The company offers flexible hours.", examplePt: "A empresa oferece horário flexível." },
      { term: "feedback", pt: "retorno/feedback", ipa: "/ˈfiːdbæk/", definition: "Information about how someone did.", example: "She gave me useful feedback after the interview.", examplePt: "Ela me deu um feedback útil depois da entrevista." },
    ],
    expressions: [
      { en: "Tell me everything!", pt: "Me conta tudo!" },
      { en: "That sounds great!", pt: "Isso parece ótimo!" },
      { en: "How did it go?", pt: "Como foi?" },
      { en: "I'm so nervous.", pt: "Estou tão nervoso(a)." },
      { en: "It was intense.", pt: "Foi intenso." },
      { en: "with the result", pt: "com o resultado" },
    ],
    grammar: [
      {
        title: { en: "Reported speech — statements", pt: "Reported speech — afirmações" },
        examples: [
          { en: "\"The position requires experience.\" → She said the position required experience.", pt: "\"The position requires experience.\" → She said the position required experience." },
          { en: "\"I will call you.\" → She said she would call me.", pt: "\"I will call you.\" → She said she would call me." },
          { en: "\"The company offers a good salary.\" → She told me the company offered a good salary.", pt: "\"The company offers a good salary.\" → She told me the company offered a good salary." },
        ],
        rule: {
          en: "When we report what someone said, the verb tense usually moves back one step into the past (backshift): present simple → past simple; will → would. Use 'say' without an object (say that...) and 'tell' with an object (tell someone that...).",
          pt: "Ao relatar o que alguém disse, o tempo verbal geralmente 'recua' um passo para o passado (backshift): presente simples → passado simples; will → would. Use 'say' sem objeto (say that...) e 'tell' com objeto (tell someone that...).",
        },
        mistakes: [
          { en: "✗ She said me the salary was good. → ✓ She told me the salary was good.", pt: "✗ She said me the salary was good. → ✓ She told me the salary was good." },
          { en: "✗ She told the position requires experience. → ✓ She told me the position required experience.", pt: "✗ She told the position requires experience. → ✓ She told me the position required experience." },
        ],
      },
      {
        title: { en: "Reported speech — questions", pt: "Reported speech — perguntas" },
        examples: [
          { en: "\"Have you worked in a team?\" → She asked if I had worked in a team.", pt: "\"Have you worked in a team?\" → She asked if I had worked in a team." },
          { en: "\"Why do you want to change jobs?\" → She asked why I wanted to change jobs.", pt: "\"Why do you want to change jobs?\" → She asked why I wanted to change jobs." },
          { en: "\"Did they call you?\" → He asked if they had called me.", pt: "\"Did they call you?\" → He asked if they had called me." },
        ],
        rule: {
          en: "For yes/no questions, use 'if' or 'whether' and normal word order (no auxiliary do/does/did). For wh-questions, keep the question word and use normal word order. The verb tense also moves back one step.",
          pt: "Para perguntas de sim/não, use 'if' ou 'whether' e ordem normal das palavras (sem o auxiliar do/does/did). Para perguntas com wh-, mantenha a palavra interrogativa e use ordem normal. O tempo verbal também recua um passo.",
        },
        mistakes: [
          { en: "✗ She asked did I have worked in a team. → ✓ She asked if I had worked in a team.", pt: "✗ She asked did I have worked in a team. → ✓ She asked if I had worked in a team." },
          { en: "✗ She asked why did I want to change jobs. → ✓ She asked why I wanted to change jobs.", pt: "✗ She asked why did I want to change jobs. → ✓ She asked why I wanted to change jobs." },
        ],
      },
    ],
    controlledPractice: [
      { id: "i22d-cp1", prompt: { en: "Report: \"I will call you.\" She said...", pt: "Relate: \"I will call you.\" She said..." }, options: ["she will call me", "she would call me", "she calls me"], answer: "she would call me", explanation: { en: "'Will' becomes 'would' in reported speech.", pt: "'Will' vira 'would' em reported speech." } },
      { id: "i22d-cp2", prompt: { en: "Report the question: \"Do you have experience?\" She asked...", pt: "Relate a pergunta: \"Do you have experience?\" She asked..." }, options: ["if I had experience", "do I have experience", "if I have experience"], answer: "if I had experience", explanation: { en: "Yes/no questions use 'if' and the tense moves back.", pt: "Perguntas de sim/não usam 'if' e o tempo verbal recua." } },
      { id: "i22d-cp3", prompt: { en: "Choose the correct verb: She ___ me the salary was good.", pt: "Escolha o verbo correto: She ___ me the salary was good." }, options: ["said", "told", "spoke"], answer: "told", explanation: { en: "'Tell' is used with an object (told me).", pt: "'Tell' é usado com objeto (told me)." } },
      { id: "i22d-cp4", prompt: { en: "Report: \"Why do you want this job?\" She asked...", pt: "Relate: \"Why do you want this job?\" She asked..." }, options: ["why did I want this job", "why I wanted this job", "why I want this job"], answer: "why I wanted this job", explanation: { en: "Wh-questions keep normal word order; the tense moves back.", pt: "Perguntas wh- mantêm ordem normal; o tempo verbal recua." } },
      { id: "i22d-cp5", prompt: { en: "Complete: 'The document listing your education and experience' = ?", pt: "Complete: 'The document listing your education and experience' = ?" }, options: ["résumé", "requirement", "feedback"], answer: "résumé", explanation: { en: "A résumé lists education and experience.", pt: "O currículo lista educação e experiência." } },
    ],
    input: {
      kind: "reading",
      title: { en: "Preparing for a job interview", pt: "Se preparando para uma entrevista de emprego" },
      lines: [
        { en: "Job interviews can be stressful, but preparation helps a lot.", pt: "Entrevistas de emprego podem ser estressantes, mas a preparação ajuda muito." },
        { en: "The interviewer usually asks about your strengths and weaknesses.", pt: "O entrevistador geralmente pergunta sobre seus pontos fortes e fracos." },
        { en: "Candidates should also ask questions about the position, the salary and the benefits.", pt: "Os candidatos também devem fazer perguntas sobre a vaga, o salário e os benefícios." },
        { en: "Later, when you tell a friend about the interview, remember to use reported speech: 'She asked if I had experience' or 'He said the company offered flexible hours.'", pt: "Depois, ao contar para um amigo sobre a entrevista, lembre-se de usar reported speech: 'She asked if I had experience' ou 'He said the company offered flexible hours.'" },
      ],
      questions: [
        { id: "i22d-iq1", prompt: { en: "What does the interviewer usually ask about?", pt: "Sobre o que o entrevistador geralmente pergunta?" }, options: ["Strengths and weaknesses", "Only the salary", "Only the résumé"], answer: "Strengths and weaknesses", explanation: { en: "'The interviewer usually asks about your strengths and weaknesses.'", pt: "'O entrevistador geralmente pergunta sobre seus pontos fortes e fracos.'" } },
        { id: "i22d-iq2", prompt: { en: "What should candidates ask about?", pt: "Sobre o que os candidatos devem perguntar?" }, options: ["The position, the salary and the benefits", "Only the position", "Nothing"], answer: "The position, the salary and the benefits", explanation: { en: "'Candidates should also ask questions about the position, the salary and the benefits.'", pt: "'Os candidatos também devem fazer perguntas sobre a vaga, o salário e os benefícios.'" } },
      ],
    },
    quickCheck: [
      { id: "i22d-qc1", prompt: { en: "What is a 'candidate'?", pt: "O que é 'candidate'?" }, options: ["A person who applies for a job", "A company benefit", "An interview question"], answer: "A person who applies for a job", explanation: { en: "A candidate applies for a job.", pt: "O candidato se candidata a uma vaga." } },
      { id: "i22d-qc2", prompt: { en: "Report: \"I am tired.\" She said...", pt: "Relate: \"I am tired.\" She said..." }, options: ["she is tired", "she was tired", "she has been tired"], answer: "she was tired", explanation: { en: "Present simple 'am' becomes past simple 'was'.", pt: "Presente 'am' vira passado 'was'." } },
      { id: "i22d-qc3", prompt: { en: "'Extra things a company gives besides salary' = ?", pt: "'Extra things a company gives besides salary' = ?" }, options: ["benefits", "requirement", "feedback"], answer: "benefits", explanation: { en: "Benefits are extras besides salary.", pt: "Benefícios são extras além do salário." } },
      { id: "i22d-qc4", prompt: { en: "Choose the correct reported question: \"Did you call them?\"", pt: "Escolha a pergunta relatada correta: \"Did you call them?\"" }, options: ["He asked if I had called them.", "He asked did I call them.", "He asked if I call them."], answer: "He asked if I had called them.", explanation: { en: "Past simple question backshifts to past perfect.", pt: "Pergunta no passado simples recua para o past perfect." } },
    ],
  },
  communicate: {
    id: "INTERMEDIATE-U22-COMMUNICATE",
    review: [
      { en: "She said the position required experience. — reporting a statement.", pt: "Ela disse que a vaga exigia experiência. — relatando uma afirmação." },
      { en: "She asked if I had worked in a team. — reporting a yes/no question.", pt: "Ela perguntou se eu já tinha trabalhado em equipe. — relatando uma pergunta de sim/não." },
      { en: "She asked why I wanted to change jobs. — reporting a wh-question.", pt: "Ela perguntou por que eu queria mudar de emprego. — relatando uma pergunta com wh-." },
      { en: "She told me the company offered a good salary. — say vs. tell.", pt: "Ela me disse que a empresa oferecia um bom salário. — say x tell." },
    ],
    activities: [
      {
        id: "i22c-a1",
        title: { en: "Report the Interview", pt: "Relate a Entrevista" },
        instruction: { en: "Imagine you just had an interview. Report three things the interviewer said.", pt: "Imagine que você acabou de fazer uma entrevista. Relate três coisas que o entrevistador disse." },
        phrases: [
          { en: "She said the company was growing fast.", pt: "Ela disse que a empresa estava crescendo rápido." },
          { en: "He told me the team was very friendly.", pt: "Ele me disse que a equipe era muito amigável." },
          { en: "She said she would send an email with more details.", pt: "Ela disse que enviaria um e-mail com mais detalhes." },
        ],
        check: [
          { id: "i22c-a1q1", prompt: { en: "Which sentence correctly uses 'tell'?", pt: "Qual frase usa 'tell' corretamente?" }, options: ["He told me the team was friendly.", "He told the team was friendly.", "He said me the team was friendly."], answer: "He told me the team was friendly.", explanation: { en: "'Tell' needs an object.", pt: "'Tell' precisa de um objeto." } },
          { id: "i22c-a1q2", prompt: { en: "Complete: 'She said she ___ send an email.' (will → reported)", pt: "Complete: 'She said she ___ send an email.' (will → relatado)" }, options: ["will", "would", "was"], answer: "would", explanation: { en: "'Will' becomes 'would'.", pt: "'Will' vira 'would'." } },
        ],
      },
      {
        id: "i22c-a2",
        title: { en: "What Did They Ask?", pt: "O que eles perguntaram?" },
        instruction: { en: "Report two questions an interviewer typically asks.", pt: "Relate duas perguntas que um entrevistador costuma fazer." },
        phrases: [
          { en: "She asked if I had any questions.", pt: "Ela perguntou se eu tinha alguma pergunta." },
          { en: "He asked why I left my last job.", pt: "Ele perguntou por que eu saí do meu último emprego." },
          { en: "She asked if I was available to start soon.", pt: "Ela perguntou se eu estava disponível para começar logo." },
        ],
        check: [
          { id: "i22c-a2q1", prompt: { en: "Report: \"Are you available?\" She asked...", pt: "Relate: \"Are you available?\" She asked..." }, options: ["if I was available", "am I available", "if I am available"], answer: "if I was available", explanation: { en: "Yes/no question with 'if' and backshift.", pt: "Pergunta de sim/não com 'if' e backshift." } },
          { id: "i22c-a2q2", prompt: { en: "Report: \"Why did you leave?\" He asked...", pt: "Relate: \"Why did you leave?\" He asked..." }, options: ["why did I leave", "why I had left", "why I leave"], answer: "why I had left", explanation: { en: "Past simple question backshifts to past perfect.", pt: "Pergunta no passado simples recua para past perfect." } },
        ],
      },
      {
        id: "i22c-a3",
        title: { en: "Strengths and Weaknesses", pt: "Pontos Fortes e Fracos" },
        instruction: { en: "Talk about your own strengths and weaknesses for a job interview.", pt: "Fale sobre seus próprios pontos fortes e fracos para uma entrevista de emprego." },
        phrases: [
          { en: "My biggest strength is teamwork.", pt: "Meu maior ponto forte é o trabalho em equipe." },
          { en: "My weakness is that I talk too fast.", pt: "Meu ponto fraco é que eu falo rápido demais." },
          { en: "I'm working on improving my public speaking.", pt: "Estou trabalhando para melhorar minha fala em público." },
        ],
        check: [
          { id: "i22c-a3q1", prompt: { en: "'A good quality or skill a person has' = ?", pt: "'A good quality or skill a person has' = ?" }, options: ["strength", "weakness", "requirement"], answer: "strength", explanation: { en: "A strength is a good quality.", pt: "Um ponto forte é uma boa qualidade." } },
          { id: "i22c-a3q2", prompt: { en: "'An area where a person needs improvement' = ?", pt: "'An area where a person needs improvement' = ?" }, options: ["weakness", "benefit", "candidate"], answer: "weakness", explanation: { en: "A weakness needs improvement.", pt: "Um ponto fraco precisa de melhoria." } },
        ],
      },
    ],
    challenge: {
      id: "i22c-cc1",
      title: { en: "Tell a Friend About Your Interview", pt: "Conte a um Amigo Sobre Sua Entrevista" },
      instruction: {
        en: "Tell a friend out loud about a job interview. Report what the interviewer said and asked, and describe your strengths and weaknesses.",
        pt: "Conte em voz alta para um amigo sobre uma entrevista de emprego. Relate o que o entrevistador disse e perguntou, e descreva seus pontos fortes e fracos.",
      },
      phrases: [
        { en: "She said the position required a lot of experience.", pt: "Ela disse que a vaga exigia muita experiência." },
        { en: "She asked if I had worked in a team before.", pt: "Ela perguntou se eu já tinha trabalhado em equipe antes." },
        { en: "She told me the company offered a good salary and flexible hours.", pt: "Ela me disse que a empresa oferecia um bom salário e horário flexível." },
        { en: "My biggest strength is teamwork, but I'm working on my weaknesses too.", pt: "Meu maior ponto forte é o trabalho em equipe, mas também estou trabalhando nos meus pontos fracos." },
      ],
      check: [
        { id: "i22c-cc1q1", prompt: { en: "Which sentence correctly reports a statement?", pt: "Qual frase relata corretamente uma afirmação?" }, options: ["She said the position required experience.", "She said the position requires experience.", "She said me the position required experience."], answer: "She said the position required experience.", explanation: { en: "Backshift + 'say' without an object.", pt: "Backshift + 'say' sem objeto." } },
        { id: "i22c-cc1q2", prompt: { en: "Which sentence correctly reports a question?", pt: "Qual frase relata corretamente uma pergunta?" }, options: ["She asked if I had worked in a team.", "She asked did I work in a team.", "She asked if I work in a team."], answer: "She asked if I had worked in a team.", explanation: { en: "'If' + backshift, no auxiliary.", pt: "'If' + backshift, sem auxiliar." } },
      ],
    },
    lessonReview: {
      summary: {
        en: "In this unit, you learned to report statements and questions using say/tell and tense backshift, and talked about job interviews.",
        pt: "Nesta unidade, você aprendeu a relatar afirmações e perguntas usando say/tell e backshift, e falou sobre entrevistas de emprego.",
      },
      canDo: [
        { en: "I can report what someone said using 'say' and 'tell'.", pt: "Eu consigo relatar o que alguém disse usando 'say' e 'tell'." },
        { en: "I can report yes/no and wh-questions.", pt: "Eu consigo relatar perguntas de sim/não e com wh-." },
        { en: "I can talk about job interviews, strengths and weaknesses.", pt: "Eu consigo falar sobre entrevistas de emprego, pontos fortes e fracos." },
      ],
      next: {
        en: "Next unit: more advanced comparison structures in business contexts.",
        pt: "Próxima unidade: estruturas de comparação mais avançadas em contextos de negócios.",
      },
    },
  },
};
