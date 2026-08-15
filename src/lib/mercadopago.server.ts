const MP_API = "https://api.mercadopago.com";

/** A Speak2Co opera exclusivamente com assinaturas anuais. */
export type PlanKey = "essential_yearly" | "premium_yearly" | "signature_yearly";

export const MP_PLANS: Record<PlanKey, { label: string; amount: number; frequency: number; frequency_type: "months" }> = {
  essential_yearly: { label: "Essential Anual", amount: 430.8, frequency: 12, frequency_type: "months" },
  premium_yearly: { label: "Premium Anual", amount: 479.0, frequency: 12, frequency_type: "months" },
  signature_yearly: { label: "Signature Anual", amount: 579.0, frequency: 12, frequency_type: "months" },
};

function getToken() {
  const token = process.env["MERCADOPAGO_ACCESS_TOKEN"]?.trim();
  if (!token) throw new Error("Pagamento indisponível: credencial do Mercado Pago não configurada.");
  const segments = token.split("-");
  // Access Token de produção tem o formato APP_USR-<app_id>-<data>-<hash 32>-<user_id>
  if (token.length < 60 || segments.length < 5) {
    throw new Error(
      "Pagamento indisponível: o Access Token do Mercado Pago salvo está incompleto. Copie o Access Token completo de produção (formato APP_USR-...-...-...-..., com cerca de 70 caracteres) e salve novamente.",
    );
  }
  return token;
}


export async function mpRequest<T>(path: string, init?: { method?: string; body?: unknown }): Promise<T> {
  const response = await fetch(`${MP_API}${path}`, {
    method: init?.method ?? "GET",
    headers: {
      Authorization: `Bearer ${getToken()}`,
      "Content-Type": "application/json",
    },
    ...(init?.body ? { body: JSON.stringify(init.body) } : {}),
  });

  if (!response.ok) {
    const text = await response.text();
    console.error(`Mercado Pago request failed [${response.status}] ${path}: ${text}`);
    throw new Error(`Falha na comunicação com o Mercado Pago (${response.status}).`);
  }
  return (await response.json()) as T;
}

export type Preapproval = {
  id: string;
  status: string;
  external_reference?: string;
  init_point?: string;
  next_payment_date?: string;
  date_created?: string;
  auto_recurring?: { transaction_amount?: number; currency_id?: string; frequency?: number; frequency_type?: string };
};

/**
 * URL de notificação enviada na própria criação da assinatura.
 * É assim que a API de Assinaturas (preapproval) do Mercado Pago registra o
 * webhook hoje — o painel "Suas integrações → Webhooks" não cobre assinaturas.
 * O token na query string permite validar a origem quando o Mercado Pago não
 * envia a assinatura HMAC (caso das notificações por notification_url).
 */
export function notificationUrl() {
  const SITE_URL = "https://speak2co.lovable.app";
  const token = process.env["MERCADOPAGO_WEBHOOK_TOKEN"]?.trim();
  const base = `${SITE_URL}/api/public/webhooks/mercadopago`;
  return token ? `${base}?token=${encodeURIComponent(token)}` : base;
}

export async function createPreapproval(params: {
  planKey: PlanKey;
  payerEmail: string;
  externalReference: string;
  backUrl: string;
}): Promise<Preapproval> {
  const plan = MP_PLANS[params.planKey];
  return mpRequest<Preapproval>("/preapproval", {
    method: "POST",
    body: {
      reason: `Speak2Co ${plan.label}`,
      external_reference: params.externalReference,
      payer_email: params.payerEmail,
      back_url: params.backUrl,
      notification_url: notificationUrl(),
      auto_recurring: {
        frequency: plan.frequency,
        frequency_type: plan.frequency_type,
        transaction_amount: plan.amount,
        currency_id: "BRL",
      },
      status: "pending",
    },
  });
}

export async function getPreapproval(id: string): Promise<Preapproval> {
  return mpRequest<Preapproval>(`/preapproval/${encodeURIComponent(id)}`);
}

export type AuthorizedPayment = {
  id: number | string;
  preapproval_id?: string;
  status?: string;
  payment?: { id?: number; status?: string; status_detail?: string };
  transaction_amount?: number;
  currency_id?: string;
  next_retry_date?: string;
  debit_date?: string;
};

/** Cobrança recorrente gerada por uma assinatura (tópico subscription_authorized_payment). */
export async function getAuthorizedPayment(id: string): Promise<AuthorizedPayment> {
  return mpRequest<AuthorizedPayment>(`/authorized_payments/${encodeURIComponent(id)}`);
}

export type MpPayment = {
  id: number | string;
  status?: string;
  status_detail?: string;
  transaction_amount?: number;
  currency_id?: string;
  external_reference?: string;
  metadata?: Record<string, unknown> & { preapproval_id?: string };
};

/** Pagamento avulso/recorrente (tópico payment). */
export async function getPayment(id: string): Promise<MpPayment> {
  return mpRequest<MpPayment>(`/v1/payments/${encodeURIComponent(id)}`);
}

