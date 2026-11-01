import { createFileRoute } from "@tanstack/react-router";
import { createHmac, timingSafeEqual } from "crypto";

function safeEqual(a: string, b: string) {
  const x = Buffer.from(a);
  const y = Buffer.from(b);
  return x.length === y.length && timingSafeEqual(x, y);
}

/**
 * Validação HMAC do painel de webhooks (quando existe "Assinatura secreta").
 * Para a API de Assinaturas o Mercado Pago normalmente notifica pela
 * `notification_url` informada na criação da preapproval e não envia
 * `x-signature` — nesse caso validamos pelo token da query string.
 */
function verifySignature(params: {
  secret: string;
  signatureHeader: string | null;
  requestId: string | null;
  dataId: string | null;
}) {
  if (!params.signatureHeader) return false;
  const parts = Object.fromEntries(
    params.signatureHeader.split(",").map((p) => {
      const [k, ...rest] = p.split("=");
      return [(k ?? "").trim(), rest.join("=").trim()];
    }),
  ) as { ts?: string; v1?: string };
  if (!parts.ts || !parts.v1) return false;

  const manifest = `id:${(params.dataId ?? "").toLowerCase()};request-id:${params.requestId ?? ""};ts:${parts.ts};`;
  const expected = createHmac("sha256", params.secret).update(manifest).digest("hex");
  return safeEqual(expected, parts.v1);
}

/** Aplica o status atual da assinatura no banco e recalcula o plano do aluno. */
async function syncPreapproval(preapprovalId: string, note: string) {
  const { getPreapproval } = await import("@/lib/mercadopago.server");
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  const { logSubscriptionEvent, eventTypeFromStatus } = await import(
    "@/lib/subscription-events.server"
  );

  const preapproval = await getPreapproval(preapprovalId);
  const userId = (preapproval.external_reference ?? "").split(":")[0] || null;
  const rawPreapproval = JSON.parse(JSON.stringify(preapproval));

  const { data: existing } = await supabaseAdmin
    .from("subscriptions")
    .select("id, status, next_payment_date, amount, currency")
    .eq("preapproval_id", preapproval.id)
    .maybeSingle();

  await supabaseAdmin
    .from("subscriptions")
    .update({
      status: preapproval.status,
      next_payment_date: preapproval.next_payment_date ?? null,
      raw: rawPreapproval,
    })
    .eq("preapproval_id", preapproval.id);

  const renewed =
    existing?.status === "authorized" &&
    preapproval.status === "authorized" &&
    !!preapproval.next_payment_date &&
    preapproval.next_payment_date !== existing.next_payment_date;

  await logSubscriptionEvent({
    user_id: userId,
    subscription_id: existing?.id ?? null,
    preapproval_id: preapproval.id,
    event_type: renewed ? "subscription_renewed" : eventTypeFromStatus(preapproval.status),
    status: preapproval.status ?? null,
    amount: existing?.amount ?? null,
    currency: existing?.currency ?? "BRL",
    next_payment_date: preapproval.next_payment_date ?? null,
    message: renewed ? "Renovação confirmada pelo Mercado Pago." : note,
    raw: rawPreapproval,
  });

  if (userId) {
    const { syncUserPlan } = await import("@/lib/plan-sync.server");
    const plan = await syncUserPlan(userId);
    await logSubscriptionEvent({
      user_id: userId,
      subscription_id: existing?.id ?? null,
      preapproval_id: preapproval.id,
      event_type: "plan_updated",
      status: preapproval.status ?? null,
      message:
        plan === "free"
          ? "Plano do aluno voltou para Gratuito."
          : `Plano ${plan} liberado para o aluno.`,
      raw: { plan },
    });
  }
}

/**
 * Cobrança anual avulsa (Checkout Pro / preference, com parcelamento em 12x).
 * A assinatura é encontrada pelo `external_reference` gravado na criação.
 */
async function syncPreferencePayment(payment: {
  id: number | string;
  status?: string;
  status_detail?: string;
  transaction_amount?: number;
  currency_id?: string;
  external_reference?: string;
}) {
  const reference = payment.external_reference?.trim();
  if (!reference) return false;

  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  const { logSubscriptionEvent } = await import("@/lib/subscription-events.server");

  const { data: existing } = await supabaseAdmin
    .from("subscriptions")
    .select("id, user_id, status, amount, currency, current_period_end, plan_key")
    .eq("external_reference", reference)
    .maybeSingle();
  if (!existing) return false;

  const approved = payment.status === "approved";
  const status = approved
    ? "authorized"
    : payment.status === "rejected" || payment.status === "cancelled"
      ? "cancelled"
      : "pending";

  // Produtos de pagamento único (`*_lifetime`) não expiram: sem data final.
  const lifetime = (existing.plan_key ?? "").endsWith("_lifetime");
  const periodEnd = new Date();
  periodEnd.setFullYear(periodEnd.getFullYear() + 1);

  await supabaseAdmin
    .from("subscriptions")
    .update({
      status,
      ...(approved ? { current_period_end: lifetime ? null : periodEnd.toISOString() } : {}),
      raw: JSON.parse(JSON.stringify(payment)),
      updated_at: new Date().toISOString(),
    })
    .eq("id", existing.id);

  await logSubscriptionEvent({
    user_id: existing.user_id,
    subscription_id: existing.id,
    event_type: approved ? "payment_approved" : "webhook_received",
    status: payment.status ?? null,
    amount: payment.transaction_amount ?? existing.amount ?? null,
    currency: payment.currency_id ?? "BRL",
    message: approved
      ? lifetime ? "Pagamento único aprovado — acesso vitalício liberado." : "Pagamento anual aprovado — acesso liberado por 12 meses."
      : `Pagamento ${payment.status ?? "desconhecido"} (${payment.status_detail ?? "sem detalhe"}).`,
    raw: JSON.parse(JSON.stringify(payment)),
  });

  const { syncUserPlan } = await import("@/lib/plan-sync.server");
  const plan = await syncUserPlan(existing.user_id);
  await logSubscriptionEvent({
    user_id: existing.user_id,
    subscription_id: existing.id,
    event_type: "plan_updated",
    status,
    message:
      plan === "free"
        ? "Plano do aluno voltou para Gratuito."
        : `Plano ${plan} liberado para o aluno.`,
    raw: { plan },
  });

  if (approved && existing.status !== "authorized") {
    try {
      const PRODUCT_NAMES: Record<string, string> = {
        complete_lifetime: "Speak2Co All Access",
        speak2hire_lifetime: "Speak2Hire",
        speak2fluency_lifetime: "Speak2Fluency",
        speak2travel_lifetime: "Speak2Travel",
      };
      const { data: u } = await supabaseAdmin.auth.admin.getUserById(existing.user_id);
      const email = u?.user?.email;
      if (email) {
        const amt = payment.transaction_amount ?? existing.amount;
        const { sendTemplateEmail } = await import("@/lib/email-templates/send-email");
        await sendTemplateEmail("purchase-confirmed", email, {
          templateData: {
            name: (u?.user?.user_metadata?.['full_name'] as string | undefined)?.split(" ")[0],
            productName: PRODUCT_NAMES[existing.plan_key ?? ""] ?? "Speak2Co",
            amount: amt != null ? `R$ ${Number(amt).toFixed(2).replace(".", ",")}` : undefined,
          },
          idempotencyKey: `purchase-confirmed-${existing.id}`,
        });
      }
    } catch (e) {
      console.error("[purchase-confirmed email]", e);
    }
  }

  return true;
}

export const Route = createFileRoute("/api/public/webhooks/mercadopago")({

  server: {
    handlers: {
      // O Mercado Pago valida a URL com um GET antes de enviar notificações.
      GET: async () => new Response("ok"),

      POST: async ({ request }) => {
        const hmacSecret = process.env["MERCADOPAGO_WEBHOOK_SECRET"]?.trim();
        const urlToken = process.env["MERCADOPAGO_WEBHOOK_TOKEN"]?.trim();
        if (!hmacSecret && !urlToken) return new Response("Not configured", { status: 503 });

        const url = new URL(request.url);
        const body = await request.text();
        let payload: {
          type?: string;
          topic?: string;
          action?: string;
          data?: { id?: string };
          id?: string | number;
        } = {};
        try {
          payload = body ? (JSON.parse(body) as typeof payload) : {};
        } catch {
          return new Response("Invalid body", { status: 400 });
        }

        const dataId =
          payload.data?.id ??
          (payload.id != null ? String(payload.id) : null) ??
          url.searchParams.get("data.id") ??
          url.searchParams.get("id");

        const { logSubscriptionEvent } = await import("@/lib/subscription-events.server");

        const providedToken = url.searchParams.get("token");
        const tokenOk = Boolean(urlToken && providedToken && safeEqual(urlToken, providedToken));
        const hmacOk = Boolean(
          hmacSecret &&
            verifySignature({
              secret: hmacSecret,
              signatureHeader: request.headers.get("x-signature"),
              requestId: request.headers.get("x-request-id"),
              dataId,
            }),
        );

        if (!tokenOk && !hmacOk) {
          await logSubscriptionEvent({
            event_type: "webhook_rejected",
            preapproval_id: dataId ?? null,
            message: "Origem não autenticada (token/HMAC inválidos) — notificação descartada.",
            raw: JSON.parse(JSON.stringify(payload)),
          });
          return new Response("Invalid signature", { status: 401 });
        }

        const topic = (
          payload.type ??
          payload.topic ??
          payload.action ??
          url.searchParams.get("type") ??
          url.searchParams.get("topic") ??
          ""
        ).toString();

        if (!dataId) return new Response("ignored");

        try {
          // 1. Assinatura criada / atualizada / cancelada / pausada
          if (topic.includes("preapproval") && !topic.includes("authorized_payment")) {
            await syncPreapproval(dataId, `Notificação recebida (${topic}).`);
            return new Response("ok");
          }

          // 2. Cobrança recorrente da assinatura (aprovada, recusada ou em retentativa)
          if (topic.includes("authorized_payment")) {
            const { getAuthorizedPayment } = await import("@/lib/mercadopago.server");
            const authorized = await getAuthorizedPayment(dataId);
            const paymentStatus = authorized.payment?.status ?? authorized.status ?? "unknown";
            await logSubscriptionEvent({
              preapproval_id: authorized.preapproval_id ?? null,
              event_type: "webhook_received",
              status: paymentStatus,
              amount: authorized.transaction_amount ?? null,
              currency: authorized.currency_id ?? "BRL",
              message:
                paymentStatus === "approved"
                  ? "Cobrança da assinatura aprovada pelo Mercado Pago."
                  : `Cobrança da assinatura com situação "${paymentStatus}".`,
              raw: JSON.parse(JSON.stringify(authorized)),
            });
            if (authorized.preapproval_id) {
              await syncPreapproval(
                authorized.preapproval_id,
                `Situação da assinatura revalidada após cobrança (${paymentStatus}).`,
              );
            }
            return new Response("ok");
          }

          // 3. Pagamento avulso: cobrança anual parcelada ou pagamento de assinatura
          if (topic.includes("payment")) {
            const { getPayment } = await import("@/lib/mercadopago.server");
            const payment = await getPayment(dataId);

            // Cobrança anual parcelada (preference): casa pelo external_reference.
            if (await syncPreferencePayment(payment)) return new Response("ok");

            const preapprovalId =
              (payment.metadata?.preapproval_id as string | undefined) ?? undefined;

            await logSubscriptionEvent({
              preapproval_id: preapprovalId ?? null,
              event_type: "webhook_received",
              status: payment.status ?? null,
              amount: payment.transaction_amount ?? null,
              currency: payment.currency_id ?? "BRL",
              message: `Pagamento ${payment.status ?? "desconhecido"} (${payment.status_detail ?? "sem detalhe"}).`,
              raw: JSON.parse(JSON.stringify(payment)),
            });
            if (preapprovalId) {
              await syncPreapproval(
                preapprovalId,
                `Assinatura revalidada após pagamento ${payment.status ?? ""}.`,
              );
            }
            return new Response("ok");
          }

          await logSubscriptionEvent({
            event_type: "webhook_ignored",
            preapproval_id: dataId,
            message: `Notificação ignorada (tópico: ${topic || "desconhecido"}).`,
            raw: JSON.parse(JSON.stringify(payload)),
          });
          return new Response("ignored");
        } catch (error) {
          console.error("[mercadopago-webhook] failed", error);
          // 500 faz o Mercado Pago tentar novamente mais tarde.
          return new Response("error", { status: 500 });
        }
      },
    },
  },
});
