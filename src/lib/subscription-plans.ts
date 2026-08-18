/**
 * Configuração comercial dos planos usada nas telas de planos e de "Minha assinatura".
 * Tudo aqui é editável pela administração da Speak2Co sem mexer nas telas:
 * preços de fallback, benefícios exibidos e textos dos termos da assinatura.
 */

export type PlanKey = "free" | "essential" | "premium" | "signature";

export const PLAN_ORDER: PlanKey[] = ["free", "essential", "premium", "signature"];

export const PLAN_META: Record<
  PlanKey,
  { name: string; level: number; yearlyPrice: number | null; checkoutKey: string | null }
> = {
  free: { name: "Free", level: 0, yearlyPrice: null, checkoutKey: null },
  essential: { name: "Essential", level: 1, yearlyPrice: 430.8, checkoutKey: "essential_yearly" },
  premium: { name: "Premium", level: 2, yearlyPrice: 479.0, checkoutKey: "premium_yearly" },
  signature: { name: "Signature", level: 3, yearlyPrice: 579.0, checkoutKey: "signature_yearly" },
};

export const INSTALLMENTS = 12;

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
    "AI Teacher — uso ilimitado",
    "Feedback de IA em pronunciation, stress, intonation e fluency",
    "Ranking de fluência e certificados de evolução",
  ],
  signature: [
    "Tudo do Premium",
    "GiseleAI by Speak2Co ilimitada",
    "Voice Room com a voz autorizada da fundadora",
    "Memória contextual, missão do dia e recomendações",
    "Relatórios de progresso escritos pela mentora",
  ],
};

export type TermsContext = {
  planName: string;
  startLabel: string;
  endLabel: string;
  totalLabel: string;
  installmentLabel: string;
  paymentMethod: string;
  autoRenew: boolean;
  nextChargeLabel: string;
};

export type TermsSection = { title: string; items: string[] };

/**
 * Termos comerciais da assinatura. Textos genéricos e neutros: nenhuma multa,
 * taxa ou regra jurídica é inventada aqui — a Speak2Co substitui estes textos
 * pelos termos definitivos quando forem publicados.
 */
export function buildSubscriptionTerms(ctx: TermsContext): TermsSection[] {
  return [
    {
      title: "Período de validade do acesso",
      items: [
        `Plano contratado: ${ctx.planName} — contratação anual com acesso por 12 meses.`,
        `Início do acesso: ${ctx.startLabel}.`,
        `Término do período contratado: ${ctx.endLabel}.`,
        "O acesso aos conteúdos liberados pelo plano permanece disponível durante todo o período contratado.",
      ],
    },
    {
      title: "Forma e periodicidade de cobrança",
      items: [
        `Forma de pagamento registrada: ${ctx.paymentMethod}.`,
        `Valor total da contratação: ${ctx.totalLabel}.`,
        `Parcelamento em até ${INSTALLMENTS}x de ${ctx.installmentLabel} sem juros no cartão, ou pagamento à vista por Pix ou boleto.`,
        "Quando há desconto individual concedido pela Speak2Co, ele é aplicado sobre o valor total antes do parcelamento.",
        "A contratação é anual. O parcelamento é apenas a forma de pagamento do período de 12 meses e não caracteriza assinatura mensal.",
      ],
    },
    {
      title: "Renovação",
      items: [
        ctx.autoRenew
          ? "A renovação automática está ativa para o próximo período anual."
          : "Não há débito automático: a Speak2Co avisa antes do vencimento e a renovação é feita por uma nova contratação.",
        `Fim do período contratado: ${ctx.nextChargeLabel}.`,
        "A renovação é feita pelo mesmo plano vigente, salvo alteração solicitada pelo aluno antes da data de renovação.",
      ],
    },

    {
      title: "Alteração de plano — upgrade",
      items: [
        "O upgrade para um plano superior pode ser solicitado a qualquer momento dentro de Minha Assinatura.",
        "Ao confirmar, os recursos do novo plano são liberados imediatamente.",
        "Quando aplicável, a cobrança é ajustada de forma proporcional ao tempo restante do período contratado.",
      ],
    },
    {
      title: "Alteração de plano — downgrade",
      items: [
        "O downgrade para um plano inferior passa a valer no próximo ciclo de renovação.",
        "Os benefícios do plano já contratado continuam disponíveis até o fim do período pago.",
        "Após a mudança, os recursos exclusivos do plano anterior deixam de ficar disponíveis.",
      ],
    },
    {
      title: "Cancelamento e expiração",
      items: [
        "O cancelamento pode ser solicitado a qualquer momento e sempre exige confirmação explícita do aluno.",
        "Ao cancelar, a renovação automática é desligada e o acesso continua até o fim do período já contratado.",
        "Quando a assinatura expira, a conta volta ao plano Free e os recursos pagos deixam de ficar disponíveis. O histórico de estudos é preservado.",
      ],
    },
    {
      title: "Pagamento não aprovado",
      items: [
        "Se um pagamento não for aprovado, a assinatura fica com status de pagamento pendente e novas tentativas podem ser feitas pelo provedor de pagamento.",
        "O acesso é mantido enquanto a regularização estiver em andamento, conforme as condições do provedor.",
        "Não havendo regularização, a assinatura é encerrada e a conta volta ao plano Free.",
      ],
    },
  ];
}
