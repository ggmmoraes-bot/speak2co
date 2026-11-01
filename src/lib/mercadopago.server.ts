const MP_API = "https://api.mercadopago.com";

/** A Speak2Co vende apenas produtos de pagamento único com acesso vitalício. */
export type PlanKey =
  | "complete_lifetime"
  | "speak2hire_lifetime"
  | "speak2fluency_lifetime"
  | "speak2travel_lifetime";

export const MP_PLANS: Record<PlanKey, { label: string; amount: number; installments: number }> = {
  complete_lifetime: { label: "Complete - Acesso Vitalicio", amount: 97.9, installments: 10 },
  speak2hire_lifetime: { label: "Speak2Hire - Acesso Vitalicio", amount: 19.9, installments: 1 },
  speak2fluency_lifetime: { label: "Speak2Fluency - Acesso Vitalicio", amount: 19.9, installments: 1 },
  speak2travel_lifetime: { label: "Speak2Travel - Acesso Vitalicio", amount: 19.9, installments: 1 },
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

/**
 * A criação de assinaturas (preapproval) foi descontinuada: os planos anuais
 * usam Checkout Pro (preference) para permitir parcelamento em até 12x.
 * As funções de leitura/cancelamento de preapproval seguem abaixo apenas para
 * assinaturas antigas ainda ativas.
 */

export type Preference = {
  id: string;
  init_point?: string;
  sandbox_init_point?: string;
  external_reference?: string;
};

/** Só aceitamos URLs públicas em HTTPS — o Mercado Pago rejeita o resto com 400. */
function requireHttpsUrl(value: string, field: string) {
  let url: URL;
  try {
    url = new URL(value);
  } catch {
    throw new Error(`Pagamento indisponível: ${field} inválida.`);
  }
  if (url.protocol !== "https:" || !url.hostname.includes(".") || url.hostname === "localhost") {
    throw new Error(`Pagamento indisponível: ${field} precisa ser uma URL pública em HTTPS.`);
  }
  return url.toString();
}

/** Texto seguro para os campos de conteúdo (title/description): sem controle, emoji ou tags. */
export function sanitizeText(value: string, maxLength = 250) {
  const clean = value
    .normalize("NFKC")
    .replace(/[\u0000-\u001f\u007f<>]/g, " ")
    .replace(/[^\p{L}\p{N} .,:;!?()\-–—/&'+]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
  return clean.slice(0, maxLength);
}

/** external_reference: apenas caracteres seguros para uso como chave (uuid, ":", "-", "_"). */
export function sanitizeExternalReference(value: string) {
  const clean = value.replace(/[^A-Za-z0-9:_-]/g, "").slice(0, 250);
  if (clean.length < 8) throw new Error("Pagamento indisponível: referência do pedido inválida.");
  return clean;
}

function sanitizeEmail(value: string) {
  const email = value.trim().toLowerCase();
  if (!/^[^\s@<>]{1,64}@[^\s@<>.]+(\.[^\s@<>.]+)+$/.test(email) || email.length > 254) {
    throw new Error("Pagamento indisponível: e-mail de cobrança inválido.");
  }
  return email;
}

function sanitizeAmount(value: number) {
  if (!Number.isFinite(value) || value <= 0 || value > 100000) {
    throw new Error("Pagamento indisponível: valor da assinatura inválido.");
  }
  return Math.round(value * 100) / 100;
}

/**
 * Cobrança anual avulsa parcelada em até 12x no cartão (Checkout Pro).
 * A API de Assinaturas (preapproval) não oferece parcelamento — por isso os
 * planos anuais usam preference, com renovação avisada pela plataforma.
 */
export async function createPreference(params: {
  planKey: PlanKey;
  payerEmail: string;
  externalReference: string;
  backUrl: string;
  /** Valor final já calculado no servidor (benefício individual aplicado). */
  amount?: number;
}): Promise<Preference> {
  const plan = MP_PLANS[params.planKey];
  if (!plan) throw new Error("Pagamento indisponível: plano desconhecido.");
  const amount = sanitizeAmount(params.amount ?? plan.amount);
  const backUrl = requireHttpsUrl(params.backUrl, "URL de retorno");
  const notifyUrl = requireHttpsUrl(notificationUrl(), "URL de notificação");
  const externalReference = sanitizeExternalReference(params.externalReference);
  const payerEmail = sanitizeEmail(params.payerEmail);
  const title = sanitizeText(`Speak2Co ${plan.label}`, 120) || "Speak2Co";

  return mpRequest<Preference>("/checkout/preferences", {
    method: "POST",
    body: {
      items: [
        {
          id: params.planKey,
          title,
          description: sanitizeText("Acesso por 12 meses", 120),
          category_id: "learnings",
          quantity: 1,
          unit_price: amount,
          currency_id: "BRL",
        },
      ],
      payer: { email: payerEmail },
      external_reference: externalReference,
      back_urls: {
        success: backUrl,
        pending: backUrl,
        failure: backUrl,
      },
      auto_return: "approved",
      statement_descriptor: "SPEAK2CO",
      payment_methods: {
        installments: 12,
        default_installments: 12,
      },
      notification_url: notifyUrl,
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

