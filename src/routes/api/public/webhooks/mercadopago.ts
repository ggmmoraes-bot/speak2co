import { createFileRoute } from "@tanstack/react-router";
import { createHmac, timingSafeEqual } from "crypto";

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
  const a = Buffer.from(expected);
  const b = Buffer.from(parts.v1);
  return a.length === b.length && timingSafeEqual(a, b);
}

export const Route = createFileRoute("/api/public/webhooks/mercadopago")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const secret = process.env["MERCADOPAGO_WEBHOOK_SECRET"];
        if (!secret) return new Response("Not configured", { status: 503 });

        const url = new URL(request.url);
        const body = await request.text();
        let payload: { type?: string; action?: string; data?: { id?: string } } = {};
        try {
          payload = JSON.parse(body) as typeof payload;
        } catch {
          return new Response("Invalid body", { status: 400 });
        }

        const dataId = payload.data?.id ?? url.searchParams.get("data.id") ?? url.searchParams.get("id");
        const { logSubscriptionEvent, eventTypeFromStatus } = await import(
          "@/lib/subscription-events.server"
        );

        const valid = verifySignature({
          secret,
          signatureHeader: request.headers.get("x-signature"),
          requestId: request.headers.get("x-request-id"),
          dataId,
        });
        if (!valid) {
          await logSubscriptionEvent({
            event_type: "webhook_rejected",
            preapproval_id: dataId ?? null,
            message: "Assinatura HMAC inválida — notificação descartada.",
            raw: JSON.parse(JSON.stringify(payload)),
          });
          return new Response("Invalid signature", { status: 401 });
        }

        const topic = payload.type ?? payload.action ?? url.searchParams.get("type") ?? "";
        if (!dataId || !topic.includes("preapproval")) {
          await logSubscriptionEvent({
            event_type: "webhook_ignored",
            preapproval_id: dataId ?? null,
            message: `Notificação ignorada (tópico: ${topic || "desconhecido"}).`,
            raw: JSON.parse(JSON.stringify(payload)),
          });
          return new Response("ignored");
        }

        const { getPreapproval } = await import("@/lib/mercadopago.server");
        const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

        const preapproval = await getPreapproval(dataId);
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
          message: renewed
            ? "Renovação confirmada pelo Mercado Pago."
            : `Notificação recebida (${topic}): situação ${preapproval.status}.`,
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

        return new Response("ok");
      },
    },
  },
});
