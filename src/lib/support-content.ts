/**
 * Support & Community — conteúdo do Help Center, FAQ e Community.
 */

export type HelpArticle = {
  id: string;
  title: string;
  titlePt: string;
  steps: string[];
};

export const HELP_GUIDE: HelpArticle[] = [
  {
    id: "getting-started",
    title: "Getting started",
    titlePt: "Primeiros passos",
    steps: [
      "Faça o Study Goals (teste de nível) para descobrir seu nível CEFR (A1–C2).",
      "Abra o Study Path e siga a trilha semanal sugerida para o seu objetivo.",
      "Estude uma unidade por dia no curso do seu nível (Beginner, Intermediate ou Upper).",
      "Feche o dia com 10 minutos de Learning Tools: Listening, Speaking ou Flashcards.",
    ],
  },
  {
    id: "courses",
    title: "Using the courses",
    titlePt: "Usando os cursos",
    steps: [
      "Cada unidade tem duas partes: Discover (vocabulário e gramática) e Communicate (prática).",
      "Use a busca e os filtros na página do curso para retomar de onde parou.",
      "Ao concluir todas as unidades e passar no assessment final, o certificado é emitido automaticamente.",
      "Você pode baixar o PDF completo do curso na página inicial de cada curso.",
    ],
  },
  {
    id: "ai",
    title: "Practising with AI",
    titlePt: "Praticando com IA",
    steps: [
      "AI Teacher: conversa livre em inglês com correção. Free e Essential têm 20 minutos por dia.",
      "AI Pronunciation: grave sua voz e receba nota de Pronunciation, Stress, Intonation e Fluency.",
      "GiseleAI (Signature): mentoria contínua, missões diárias, Voice Room e plano personalizado.",
      "Permita o uso do microfone no navegador na primeira vez que gravar.",
    ],
  },
  {
    id: "technical",
    title: "Technical support",
    titlePt: "Suporte técnico",
    steps: [
      "Áudio não toca: verifique o volume do sistema e desative o modo silencioso no celular.",
      "Microfone não grava: confirme a permissão do navegador em Configurações → Site → Microfone.",
      "Página em branco ou desatualizada: atualize a página (Ctrl+F5) para carregar a versão mais recente.",
      "Problemas de pagamento ou acesso: abra Minha assinatura e use Falar com a fundadora.",
    ],
  },
];

export type FaqItem = { q: string; a: string; group: string };

export const FAQ_ITEMS: FaqItem[] = [
  {
    group: "Plans",
    q: "Quais planos existem e como funciona a cobrança?",
    a: "São quatro planos: Free, Essential, Premium e Signature. Todas as assinaturas são anuais, com opção de parcelamento no cartão.",
  },
  {
    group: "Plans",
    q: "Posso fazer upgrade a qualquer momento?",
    a: "Sim. Em Minha assinatura você faz upgrade na hora; os recursos do novo plano são liberados imediatamente após a confirmação do pagamento.",
  },
  {
    group: "Plans",
    q: "O que está incluso no plano Free?",
    a: "Progress Tracking, Certificates, Study Path, Study Goals, Milestones e o AI Teacher com 20 minutos por dia.",
  },
  {
    group: "Courses",
    q: "Quantas unidades tem cada curso?",
    a: "Beginner (A1–A2), Intermediate (B1) e Upper-Intermediate (B2), cada um com trilha completa dividida em Discover e Communicate.",
  },
  {
    group: "Courses",
    q: "Perco o progresso se trocar de dispositivo?",
    a: "Não. Todo o progresso fica salvo na sua conta e sincroniza automaticamente.",
  },
  {
    group: "Certificates",
    q: "Como recebo meu certificado?",
    a: "Conclua todas as unidades do curso e seja aprovado no assessment final. O certificado em PDF aparece em Certificates.",
  },
  {
    group: "Certificates",
    q: "O certificado tem validade profissional?",
    a: "É um certificado de conclusão emitido pela Speak2Co, com nível CEFR de referência e assinatura da Academic Team.",
  },
  {
    group: "AI",
    q: "O limite de 20 minutos por dia vale para quais planos?",
    a: "Free e Essential. Premium e Signature têm uso ilimitado do AI Teacher.",
  },
  {
    group: "AI",
    q: "A GiseleAI está em qual plano?",
    a: "GiseleAI by Speak2Co é exclusiva do plano Signature, com voz, memória de longo prazo e mentoria personalizada.",
  },
  {
    group: "Product Lines",
    q: "O que é Speak2Hire, Speak2Travel e Speak2Fluency?",
    a: "São linhas de produto temáticas: entrevistas de emprego, inglês de viagem e fluência no dia a dia. Disponíveis a partir do plano Premium.",
  },
  {
    group: "Product Lines",
    q: "O Trip Planner funciona para qualquer destino?",
    a: "Ele é otimizado para destinos de língua inglesa, gerando vocabulário, diálogos e dicas reais do local escolhido.",
  },
];

export type Challenge = {
  id: string;
  title: string;
  titlePt: string;
  days: number;
  description: string;
  tasks: string[];
};

export const COMMUNITY_CHALLENGES: Challenge[] = [
  {
    id: "speaking-7",
    title: "7-Day Speaking Challenge",
    titlePt: "Desafio de 7 dias de fala",
    days: 7,
    description: "Fale em inglês todos os dias por 7 dias, mesmo que por 3 minutos.",
    tasks: [
      "Day 1 — Introduce yourself in 60 seconds.",
      "Day 2 — Describe your morning routine.",
      "Day 3 — Order food in a restaurant (role play).",
      "Day 4 — Give your opinion about remote work.",
      "Day 5 — Tell a story about a trip.",
      "Day 6 — Do a one-minute project update.",
      "Day 7 — Record the Day 1 task again and compare.",
    ],
  },
  {
    id: "vocabulary-14",
    title: "14-Day Vocabulary Challenge",
    titlePt: "Desafio de 14 dias de vocabulário",
    days: 14,
    description: "Aprenda 5 palavras novas por dia usando Vocabulary with IPA e Flashcards.",
    tasks: [
      "Escolha uma categoria por dia em Vocabulary with IPA.",
      "Revise as palavras do dia anterior em Flashcards.",
      "Escreva uma frase própria com cada palavra nova.",
      "No dia 14, faça uma revisão geral com o modo Flashcards.",
    ],
  },
  {
    id: "listening-21",
    title: "21-Day Listening Challenge",
    titlePt: "Desafio de 21 dias de escuta",
    days: 21,
    description: "21 dias de escuta ativa com transcrição e shadowing.",
    tasks: [
      "Ouça uma atividade de Listening Practice sem ler a transcrição.",
      "Ouça novamente lendo a transcrição.",
      "Repita em voz alta acompanhando o áudio (shadowing).",
      "Responda as perguntas de compreensão.",
    ],
  },
];

export const PRACTICE_MEETINGS = [
  {
    id: "conversation-club",
    title: "Conversation Club",
    titlePt: "Clube de conversação",
    when: "Toda quarta-feira, 20h (horário de Brasília)",
    description: "Encontro online guiado por tema, para praticar fala em grupo pequeno.",
  },
  {
    id: "pronunciation-lab-live",
    title: "Pronunciation Lab Live",
    titlePt: "Laboratório de pronúncia ao vivo",
    when: "Todo sábado, 10h (horário de Brasília)",
    description: "Treino coletivo de sons difíceis para falantes de português.",
  },
  {
    id: "career-english",
    title: "Career English Meetup",
    titlePt: "Encontro de inglês para carreira",
    when: "Último domingo do mês, 17h",
    description: "Simulações de entrevista e feedback entre alunos, com apoio da Academic Team.",
  },
];
