/**
 * Configuração comercial dos planos usada nas telas de planos e de "Minha assinatura".
 * Tudo aqui é editável pela administração da Speak2Co sem mexer nas telas:
 * preços de fallback, benefícios exibidos e textos dos termos da assinatura.
 */

export type PlanKey = "free" | "complete" | "essential" | "premium" | "signature";

/**
 * Essential, Premium e Signature não são mais vendidos. Continuam aqui só para
 * reconhecer alunas que já os contrataram (acesso preservado).
 */
export const PLAN_ORDER: PlanKey[] = ["free", "complete", "essential", "premium", "signature"];

export const PLAN_META: Record<
  PlanKey,
  { name: string; level: number; yearlyPrice: number | null; checkoutKey: string | null }
> = {
  free: { name: "Free", level: 0, yearlyPrice: null, checkoutKey: null },
  complete: { name: "Speak2Co All Access", level: 15, yearlyPrice: 97.9, checkoutKey: "complete_lifetime" },
  essential: { name: "Essential", level: 1, yearlyPrice: 430.8, checkoutKey: "essential_yearly" },
  premium: { name: "Premium", level: 2, yearlyPrice: 479.0, checkoutKey: "premium_yearly" },
  signature: { name: "Signature", level: 3, yearlyPrice: 579.0, checkoutKey: "signature_yearly" },
};

export const INSTALLMENTS = 10;

export const BRL = (value: number) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export const installmentOf = (total: number) => total / INSTALLMENTS;

export const isPlanKey = (value: unknown): value is PlanKey =>
  typeof value === "string" && (PLAN_ORDER as string[]).includes(value);

/** Benefícios exibidos em "Minha assinatura" para o plano contratado. */
export const PLAN_BENEFITS: Record<PlanKey, string[]> = {
  free: [
    "Teste de nivelamento CEFR",
    "Amostra do plano de estudos",
    "Exercícios diários limitados",
    "AI Teacher — 20 minutos por dia",
  ],
  complete: [
    "Curso Beginner, Intermediate e Upper-Intermediate (Advanced quando disponível)",
    "Vocabulário com IPA, Listening, Grammar, Reading, Writing e Flashcards",
    "Study Path, Study Goals, Progress Tracking e Milestones",
    "AI Teacher — 20 minutos por dia",
    "GiseleAI by Speak2Co — mentoria, Voice Room e missões diárias",
    "Certificados dos cursos concluídos",
    "Pagamento único — acesso vitalício",
  ],
  essential: [
    "Curso Beginner (A1–A2) e Curso Intermediate (B1) completos",
    "Plano de estudos personalizado completo",
    "Exercícios diários e quizzes ilimitados",
    "AI Teacher — 20 minutos por dia",
    "AI Pronunciation com feedback de IA",
    "Certificados dos cursos concluídos",
  ],
  premium: [
    "Tudo do Essential",
    "Curso Upper-Intermediate (B2) — comunicação profissional e situações complexas",
    "Speak2Hire — simulador de entrevistas com IA",
    "Speak2Travel — 10 módulos e Trip Planner",
    "Speak2Fluency — 8 módulos e rotina diária de fluência",
    "Speak2Business e Speak2Kids — Coming Soon, inclusos a partir do Premium",
    "AI Teacher — uso ilimitado",
    "Feedback de IA em pronunciation, stress, intonation e fluency",
    "Ranking de fluência e certificados de evolução",
  ],
  signature: [
    "Tudo do Premium",
    "Guided Lesson — exclusivo do Signature",
    "GiseleAI by Speak2Co ilimitada",
    "Voice Room com a voz autorizada da fundadora",
    "Memória contextual, missão do dia e recomendações",
    "Relatórios de progresso escritos pela mentora",
  ],
};

export type TermsContext = {
  planName: string;
  startLabel: string;
  totalLabel: string;
  installmentLabel: string;
  paymentMethod: string;
};

export type TermsSection = { title: string; items: string[] };

/**
 * Termos comerciais do acesso vitalício. Textos genéricos e neutros: nenhuma
 * multa, taxa ou regra jurídica é inventada aqui — a Speak2Co substitui estes
 * textos pelos termos definitivos quando forem publicados.
 */
export function buildSubscriptionTerms(ctx: TermsContext): TermsSection[] {
  return [
    {
      title: "Validade do acesso",
      items: [
        `Produto adquirido: ${ctx.planName} — pagamento único com acesso vitalício.`,
        `Início do acesso: ${ctx.startLabel}, logo após a confirmação do pagamento.`,
        "O acesso não expira: não há mensalidade, renovação automática ou cobrança recorrente.",
      ],
    },
    {
      title: "Forma de pagamento",
      items: [
        `Forma de pagamento registrada: ${ctx.paymentMethod}.`,
        `Valor total da compra: ${ctx.totalLabel}.`,
        `Parcelamento em até ${INSTALLMENTS}x no cartão de crédito, ou pagamento à vista por Pix ou boleto.`,
        "Quando há desconto individual concedido pela Speak2Co, ele é aplicado sobre o valor total antes do parcelamento.",
      ],
    },
    {
      title: "Novos produtos",
      items: [
        "Novos produtos podem ser adquiridos a qualquer momento em Meu Acesso.",
        "Após a confirmação do pagamento, o acesso ao produto é liberado automaticamente.",
        "Cada produto individual libera somente os conteúdos e funcionalidades do produto adquirido.",
      ],
    },
    {
      title: "Pagamento não aprovado",
      items: [
        "Se um pagamento não for aprovado, nenhuma cobrança é concluída e uma nova tentativa pode ser feita pelo provedor de pagamento.",
        "O acesso ao produto é liberado somente após a confirmação do pagamento.",
      ],
    },
  ];
}


/* ------------------------------------------------------------------ */
/* Modelo comercial vigente: pagamento único com acesso vitalício       */
/* ------------------------------------------------------------------ */

export type LifetimeCheckoutKey =
  | "complete_lifetime"
  | "speak2hire_lifetime"
  | "speak2fluency_lifetime"
  | "speak2travel_lifetime";

export const COMPLETE_PRODUCT = {
  checkoutKey: "complete_lifetime" as const,
  name: "Speak2Co All Access",
  price: 97.9,
  installments: 10,
  benefits: PLAN_BENEFITS.complete,
};

export type IndividualProduct = {
  id: "hire" | "fluency" | "travel" | "business" | "kids";
  name: string;
  description: string;
  price: number;
  /** null = em construção, não pode ser comprado. */
  checkoutKey: LifetimeCheckoutKey | null;
  featureKey: string | null;
};

export const INDIVIDUAL_PRODUCTS: IndividualProduct[] = [
  {
    id: "hire",
    name: "Speak2Hire",
    description: "Inglês para entrevistas de emprego, processos seletivos e oportunidades profissionais.",
    price: 19.9,
    checkoutKey: "speak2hire_lifetime",
    featureKey: "product_line_hire",
  },
  {
    id: "fluency",
    name: "Speak2Fluency",
    description: "Inglês para desenvolver fluência, comunicação e confiança no idioma.",
    price: 19.9,
    checkoutKey: "speak2fluency_lifetime",
    featureKey: "product_line_fluency",
  },
  {
    id: "travel",
    name: "Speak2Travel",
    description: "Inglês para viagens, situações práticas e comunicação internacional.",
    price: 19.9,
    checkoutKey: "speak2travel_lifetime",
    featureKey: "product_line_travel",
  },
  {
    id: "business",
    name: "Speak2Business",
    description: "Inglês para negócios, comunicação corporativa e ambiente profissional.",
    price: 19.9,
    checkoutKey: null,
    featureKey: null,
  },
  {
    id: "kids",
    name: "Speak2Kids",
    description: "Inglês para crianças.",
    price: 19.9,
    checkoutKey: null,
    featureKey: null,
  },
];
