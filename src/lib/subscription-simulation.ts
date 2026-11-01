/**
 * Modo de simulação da tela /assinatura.
 * Apenas visual: nada é gravado no banco e nenhum plano é alterado de verdade.
 * Ative com ?simulacao=anual | pendente | cancelada
 */

export type SubscriptionEventView = {
  id: string;
  event_type: string;
  status?: string | null;
  amount?: number | string | null;
  currency?: string | null;
  next_payment_date?: string | null;
  message?: string | null;
  preapproval_id?: string | null;
  created_at: string;
};

export type SimulationMode = "anual" | "pendente" | "cancelada";

export const SIMULATION_MODES: { value: SimulationMode; label: string }[] = [
  { value: "anual", label: "All Access vitalício" },
  { value: "pendente", label: "Pagamento pendente" },
  { value: "cancelada", label: "Assinatura cancelada" },
];

export function isSimulationMode(value: unknown): value is SimulationMode {
  return SIMULATION_MODES.some((mode) => mode.value === value);
}

type SimulatedSubscription = {
  plan_label: string | null;
  status: string;
  amount: number | null;
  currency: string;
  next_payment_date: string | null;
  init_point: string | null;
  provider?: string;
  current_period_end?: string | null;
  cancel_at_period_end?: boolean;
  created_at?: string | null;
};

export type SimulationData = {
  mode: SimulationMode;
  isPremium: boolean;
  subscription: SimulatedSubscription;
  events: SubscriptionEventView[];
};

function daysFromNow(days: number) {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date.toISOString();
}

export function buildSimulation(mode: SimulationMode): SimulationData {
  const preapprovalId = "SIMULACAO-2c93808493-DEMO";

  if (mode === "pendente") {
    return {
      mode,
      isPremium: false,
      subscription: {
        plan_label: "All Access vitalício",
        status: "pending",
        amount: 479.0,
        currency: "BRL",
        next_payment_date: null,
        init_point: null,
      },
      events: [
        {
          id: "sim-1",
          event_type: "checkout_created",
          status: "pending",
          amount: 479.0,
          currency: "BRL",
          message: "Checkout de simulação criado — nenhuma cobrança real foi feita.",
          preapproval_id: preapprovalId,
          created_at: daysFromNow(-1),
        },
        {
          id: "sim-2",
          event_type: "subscription_pending",
          status: "pending",
          message: "Aguardando confirmação do meio de pagamento.",
          preapproval_id: preapprovalId,
          created_at: daysFromNow(-1),
        },
      ],
    };
  }

  if (mode === "cancelada") {
    return {
      mode,
      isPremium: false,
      subscription: {
        plan_label: "All Access vitalício",
        status: "cancelled",
        amount: 479.0,
        currency: "BRL",
        next_payment_date: null,
        init_point: null,
      },
      events: [
        {
          id: "sim-1",
          event_type: "subscription_authorized",
          status: "authorized",
          amount: 479.0,
          currency: "BRL",
          next_payment_date: daysFromNow(-35),
          message: "Premium liberado (simulação).",
          preapproval_id: preapprovalId,
          created_at: daysFromNow(-65),
        },
        {
          id: "sim-2",
          event_type: "subscription_renewed",
          status: "authorized",
          amount: 479.0,
          currency: "BRL",
          next_payment_date: daysFromNow(-5),
          message: "Renovação confirmada (simulação).",
          preapproval_id: preapprovalId,
          created_at: daysFromNow(-35),
        },
        {
          id: "sim-3",
          event_type: "subscription_cancelled",
          status: "cancelled",
          message: "Assinatura cancelada pelo aluno (simulação).",
          preapproval_id: preapprovalId,
          created_at: daysFromNow(-2),
        },
      ],
    };
  }

  const amount = 479.0;
  const cycleDays = 365;

  return {
    mode,
    isPremium: true,
    subscription: {
      plan_label: "All Access vitalício",
      status: "authorized",
      amount,
      currency: "BRL",
      next_payment_date: daysFromNow(300),
      init_point: null,
    },
    events: [
      {
        id: "sim-1",
        event_type: "checkout_created",
        status: "pending",
        amount,
        currency: "BRL",
        message: "Checkout de simulação criado.",
        preapproval_id: preapprovalId,
        created_at: daysFromNow(-cycleDays - 3),
      },
      {
        id: "sim-2",
        event_type: "subscription_authorized",
        status: "authorized",
        amount,
        currency: "BRL",
        next_payment_date: daysFromNow(-3),
        message: "Pagamento aprovado — Premium liberado (simulação).",
        preapproval_id: preapprovalId,
        created_at: daysFromNow(-cycleDays - 3),
      },
      {
        id: "sim-3",
        event_type: "subscription_renewed",
        status: "authorized",
        amount,
        currency: "BRL",
        next_payment_date: daysFromNow(300),
        message: "Renovação confirmada (simulação).",
        preapproval_id: preapprovalId,
        created_at: daysFromNow(-3),
      },
    ],
  };
}

/**
 * Trava de ambiente: a simulação só roda em desenvolvimento e nos previews
 * (localhost, *.lovable.dev e URLs de preview id-preview--* / --dev.lovable.app).
 * Em produção (domínio publicado ou domínio próprio) ela fica sempre desligada.
 */
export function isSimulationAllowedForHost(hostname: string | null | undefined): boolean {
  if (!hostname) return false;
  const host = hostname.toLowerCase();

  if (host === "localhost" || host === "127.0.0.1" || host.endsWith(".localhost")) return true;
  if (host.endsWith(".lovable.dev") || host.endsWith(".lovableproject.com")) return true;

  if (host.endsWith(".lovable.app")) {
    const sub = host.slice(0, -".lovable.app".length);
    return sub.includes("-preview--") || sub.endsWith("-dev") || sub.startsWith("preview--");
  }

  return false;
}

export function isSimulationAllowedHere(): boolean {
  if (import.meta.env.DEV) return true;
  if (typeof window === "undefined") return false;
  return isSimulationAllowedForHost(window.location.hostname);
}
