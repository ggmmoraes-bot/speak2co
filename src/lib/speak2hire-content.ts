/**
 * Speak2Hire — conteúdo de porta de entrada do módulo.
 * Baseado nos materiais: The Interview Blueprint, STAR Method Mastery,
 * Mock Interview Blueprint e S.O.S. The Pocket Guide (Gisele Gomes de Moraes).
 */

export type InterviewQuestion = {
  id: string;
  prompt: string;
  /** O que o entrevistador está realmente avaliando. */
  evaluates: string;
  /** Estrutura sugerida de resposta. */
  structure: string;
  /** Dica do coach (em português). */
  tip: string;
  /** Segundos recomendados para a resposta. */
  seconds: number;
};

export type InterviewTrack = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  source: string;
  questions: InterviewQuestion[];
};

const q = (
  id: string,
  prompt: string,
  evaluates: string,
  structure: string,
  tip: string,
  seconds = 90,
): InterviewQuestion => ({ id, prompt, evaluates, structure, tip, seconds });

const FULL_QUESTIONS: InterviewQuestion[] = [
  q(
    "tell-me-about-yourself",
    "Tell me about yourself.",
    "Quem você é profissionalmente, sua experiência mais relevante e por que você serve para a vaga.",
    "Present → Past → Future",
    "Não conte sua história de vida. Termine no futuro, não no passado.",
  ),
  q(
    "walk-me-through-resume",
    "Walk me through your resume.",
    "Se sua carreira tem uma narrativa lógica, não uma lista de cargos.",
    "Cargo → o que aprendeu → como preparou para o próximo",
    'Use pontes: "I then moved into...", "That experience gave me the opportunity to...".',
  ),
  q(
    "greatest-strengths",
    "What are your greatest strengths?",
    "Se você prova qualidades com evidência real, não com adjetivos soltos.",
    "Strength → Evidence → Business Impact",
    'Ex.: "One of my key strengths is stakeholder management" + resultado concreto.',
  ),
  q(
    "area-improving",
    "What's an area you're currently improving?",
    "Autoconsciência e capacidade de evoluir — nada de fraqueza falsa.",
    "Improvement → Action → Progress",
    'Evite "I\'m a perfectionist". Mostre a ação em andamento e o progresso já obtido.',
  ),
  q(
    "challenge-star",
    "Tell me about a challenge you faced and how you handled it.",
    "Sua capacidade de estruturar uma história com resultado mensurável.",
    "STAR: Situation → Task → Action → Result",
    'Fale mais da Action do que do problema. Use "I", não "we". Termine com número.',
  ),
  q(
    "why-this-role",
    "Why are you interested in this role?",
    "Se você pesquisou a empresa antes da entrevista.",
    "The Company → The Position → Your Experience",
    'Ancore em um fato específico: "I admire how the company approaches [X]".',
  ),
  q(
    "why-leave",
    "Why did you leave your last position?",
    "Maturidade profissional — o teste é não criticar ninguém.",
    "Foco no futuro, nunca no passado",
    'Nunca critique gestor, empresa ou colegas. "I\'m looking for new professional challenges."',
  ),
  q(
    "teamwork",
    "Describe a time you worked in a team.",
    "Colaboração, não heroísmo individual.",
    "STAR com foco em comunicação e alinhamento",
    "Mostre comunicação, alinhamento, liderança e sucesso compartilhado.",
  ),
  q(
    "salary",
    "What are your salary expectations?",
    "Preparo e profissionalismo na negociação.",
    "Faixa pesquisada + compensation package",
    '"Based on my research, I\'d expect something in the range of X to Y, but I\'m open to discussing the full compensation package."',
    75,
  ),
  q(
    "your-questions",
    "Do you have any questions for us?",
    "Interesse genuíno e visão estratégica.",
    "2 perguntas preparadas + frase de encerramento",
    'Nunca diga "no". Ex.: "What does success look like in this role in the first six months?"',
    75,
  ),
];

export const INTERVIEW_TRACKS: InterviewTrack[] = [
  {
    id: "full",
    title: "Full Mock Interview",
    subtitle: "10 perguntas · ensaio completo",
    description:
      "A sequência real de uma entrevista, do 'Tell me about yourself' ao 'Do you have any questions for us?'.",
    source: "Mock Interview Blueprint · S.O.S. Pocket Guide (Seção 9)",
    questions: FULL_QUESTIONS,
  },
  {
    id: "pitch",
    title: "Your Pitch",
    subtitle: "3 perguntas · abertura da entrevista",
    description:
      "Treine o Elevator Pitch: identidade, experiência relevante e objetivo futuro em 60–90 segundos.",
    source: "The Interview Blueprint · S.O.S. Pocket Guide (Seção 2)",
    questions: [
      FULL_QUESTIONS[0]!,
      FULL_QUESTIONS[1]!,
      q(
        "future-vision",
        "Where do you see yourself in 5 years?",
        "Se suas metas têm direção estratégica, não apenas um cargo.",
        "Crescimento estrutural, não título específico",
        '"In five years, I see myself in a role where I\'ve grown into more strategic responsibilities."',
        75,
      ),
    ],
  },
  {
    id: "star",
    title: "STAR Stories",
    subtitle: "4 perguntas comportamentais",
    description:
      "Perguntas 'Tell me about a time when…' respondidas com Situation, Task, Action e Result quantificado.",
    source: "STAR Method Mastery",
    questions: [
      FULL_QUESTIONS[4]!,
      q(
        "star-resources",
        "Tell me about a time you led a project with limited resources.",
        "Liderança sob restrição e priorização.",
        "STAR com Action detalhada (3 a 5 ações concretas)",
        "Use verbos fortes: mapped, negotiated, implemented, prioritized.",
      ),
      q(
        "star-efficiency",
        "Describe a situation where you improved efficiency in your team.",
        "Pensamento analítico e impacto mensurável.",
        "STAR terminando em número",
        '"Report time dropped from 12 hours to 3 — a 75% reduction."',
      ),
      q(
        "star-conflict",
        "Tell me about a time you disagreed with a colleague.",
        "Habilidade interpessoal e resolução de conflito.",
        "STAR sem culpar ninguém",
        "Mostre que você buscou entender o outro lado antes de propor a solução.",
      ),
    ],
  },
  {
    id: "hard",
    title: "The Hard Questions",
    subtitle: "4 perguntas difíceis",
    description:
      "As armadilhas clássicas: fraquezas, saída do último emprego, salário e perguntas ao entrevistador.",
    source: "The Interview Blueprint · S.O.S. Pocket Guide (Seções 5, 8, 10)",
    questions: [FULL_QUESTIONS[3]!, FULL_QUESTIONS[6]!, FULL_QUESTIONS[8]!, FULL_QUESTIONS[9]!],
  },
];

export function getTrack(id: string): InterviewTrack | undefined {
  return INTERVIEW_TRACKS.find((t) => t.id === id);
}

/* ------------------------------------------------------------------ */
/* Materiais de porta de entrada                                       */
/* ------------------------------------------------------------------ */

export type MaterialSection = {
  heading: string;
  body?: string;
  bullets?: string[];
  pairs?: { left: string; right: string }[];
};

export type Material = {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  sections: MaterialSection[];
};

export const MATERIALS: Material[] = [
  {
    id: "interview-blueprint",
    title: "The Interview Blueprint",
    subtitle: "Frameworks, not just vocabulary",
    summary:
      "O desafio não é capacidade, é tradução. Estruturas prontas para pitch, vocabulário e perguntas difíceis.",
    sections: [
      {
        heading: "The Elevator Pitch Equation",
        bullets: [
          "Identity & Area — I am a [Field] professional with [X] years of experience in [Industry].",
          "Relevant Experience — Most recently, I worked as [Title] at [Organization], where I [Major Achievement].",
          "The Future Goal — I'm currently looking for opportunities in [Desired Area], where I can bring my experience in [Key Skill].",
        ],
      },
      {
        heading: "The Fluency Illusion Matrix",
        pairs: [
          { left: "I was responsible to make reports.", right: "I was responsible for producing reports." },
          { left: "I have experience in the area of finance.", right: "I have experience in finance." },
          { left: "I did a project that helped the company.", right: "I led a project that benefited the company." },
        ],
      },
      {
        heading: "The Action Verb Arsenal",
        bullets: [
          "Spearheaded — pioneered a new initiative",
          "Led — guided a cross-functional team of five",
          "Oversaw — supervised the budget planning process",
          "Implemented — rolled out a new reporting process reducing errors by 40%",
          "Streamlined — optimized the monthly reporting workflow",
          "Negotiated — secured partnerships with three external organizations",
        ],
      },
      {
        heading: "Navigating the Minefield",
        bullets: [
          "Why did you leave? — nunca critique. \"I'm looking for new challenges where I can grow professionally.\"",
          "Salary expectations? — faixa pesquisada + \"open to discussing the full compensation package\".",
          "Where do you see yourself in 5 years? — responsabilidades estratégicas, não um cargo.",
        ],
      },
      {
        heading: "Pronúncia executiva",
        bullets: ["Leadership = LID-er-ship (não LI-der-ship)", "Accountable = a-COUN-ta-ble"],
      },
    ],
  },
  {
    id: "star-mastery",
    title: "STAR Method Mastery",
    subtitle: "Situation · Task · Action · Result",
    summary:
      "O framework para perguntas comportamentais: contexto breve, seu papel, suas ações e o resultado medido.",
    sections: [
      {
        heading: "Os quatro componentes",
        pairs: [
          { left: "S — Situation", right: "Onde você estava e o que estava acontecendo?" },
          { left: "T — Task", right: "Qual era seu papel e o que precisava ser feito?" },
          { left: "A — Action", right: "O que você pessoalmente fez, e como?" },
          { left: "R — Result", right: "O que mudou por causa das suas ações?" },
        ],
      },
      {
        heading: "Golden Rules",
        bullets: [
          'Use "I", não "we" — o recrutador quer sua contribuição.',
          'Quantifique sempre: "reduced errors by 40%", "served 500 families".',
          "Seja conciso: 60–90 segundos por resposta (150–200 palavras).",
          "Escolha histórias relevantes para a vaga.",
        ],
      },
      {
        heading: "Exemplo — liderança com recursos limitados",
        body:
          "Situation: \"Our department was tasked with launching a new public assistance program, but we had a very tight deadline and a reduced budget.\" Task: \"As project coordinator, I was responsible for ensuring the program launched on time.\" Action: \"I mapped internal resources, eliminated redundancies, negotiated a partnership with a local NGO, and implemented weekly 30-minute check-ins.\" Result: \"We launched two weeks ahead of schedule, 15% under budget, and served over 600 families in the first quarter.\"",
      },
      {
        heading: "Self-check antes da entrevista",
        bullets: [
          'Usei "I" em vez de "we".',
          "Meu resultado tem pelo menos um número.",
          "A história é relevante para a vaga.",
          "Consigo contar em menos de 90 segundos.",
          "Pratiquei em voz alta pelo menos três vezes.",
        ],
      },
    ],
  },
  {
    id: "mock-interview",
    title: "Mock Interview Blueprint",
    subtitle: "Você aprendeu as técnicas. Agora junte tudo.",
    summary:
      "O ensaio completo com as 10 perguntas na ordem real, mais o checklist de avaliação da sua performance.",
    sections: [
      {
        heading: "Como praticar",
        bullets: [
          "Responda todas as perguntas em voz alta.",
          "Limite cada resposta a 60–90 segundos.",
          "Grave-se em vídeo e reavalie pronúncia, ritmo e postura.",
          "Não busque perfeição. Busque consistência.",
        ],
      },
      {
        heading: "The Speak2Hire Interview Formula™",
        bullets: [
          "Listen → Think → Structure → Answer",
          "Support with an Example → Show Results → Connect Back to the Position",
        ],
      },
      {
        heading: "Checklist final",
        bullets: [
          "Pronúncia clara",
          "Ritmo natural",
          "Contato visual com a câmera",
          "Postura profissional",
          "Exemplos fortes",
          "Confiança",
          "Respostas concisas",
          "Vocabulário de negócios",
        ],
      },
    ],
  },
  {
    id: "sos-pocket-guide",
    title: "S.O.S. — The Pocket Guide",
    subtitle: "Consultas rápidas de emergência",
    summary:
      "12 seções na ordem real da entrevista, do quebra-gelo ao follow-up e à contraproposta.",
    sections: [
      {
        heading: "1. Breaking the Ice",
        bullets: [
          '"Thank you for having me today, it\'s a pleasure to meet you."',
          '"I\'m doing great, thank you! How about you?"',
          '"Sorry, could you repeat that? The connection cut out for a second."',
          "Teste câmera e som 10 minutos antes; olhe para a câmera, não para a tela.",
        ],
      },
      {
        heading: "3. Power Words",
        pairs: [
          { left: "Stakeholders", right: "I regularly communicated with stakeholders at different levels." },
          { left: "Track record", right: "I have a strong track record of delivering results under pressure." },
          { left: "Accountable for", right: "I was accountable for the entire budget planning process." },
          { left: "Cross-functional team", right: "I led a cross-functional team of five people." },
        ],
      },
      {
        heading: "5. Quando você travar",
        bullets: [
          '"That\'s a great question, let me think about that for a moment."',
          '"Let me take a moment to gather my thoughts on that."',
          'Pausar 2–3 segundos em silêncio é profissional — não preencha com "uhm".',
        ],
      },
      {
        heading: "10. Your Turn to Ask",
        bullets: [
          '"What does success look like in this role in the first six months?"',
          '"Can you tell me more about the team I\'d be working with?"',
          '"Thank you for your time today, I really enjoyed learning more about the role."',
        ],
      },
      {
        heading: "11. Seal the Deal — follow-up em 24h",
        bullets: [
          "Assunto: Thank you for the opportunity — [Seu Nome]",
          "Agradeça, cite um detalhe específico da conversa, reforce seu interesse e coloque-se à disposição.",
        ],
      },
      {
        heading: "12. The Counteroffer",
        bullets: [
          '"Thank you so much for the offer, I\'m really excited about this opportunity."',
          '"Could you tell me more about the compensation package and the benefits?"',
        ],
      },
    ],
  },
];

export function getMaterial(id: string): Material | undefined {
  return MATERIALS.find((m) => m.id === id);
}
