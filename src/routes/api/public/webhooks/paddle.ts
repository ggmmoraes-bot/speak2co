import { createFileRoute } from "@tanstack/react-router";

type PaddleEnv = "sandbox" | "live";

/** Deriva o tier (essential/premium/signature) a partir da chave de checkout. */
function tierFromPriceKey(priceKey: string | null): string | null {
  if (!priceKey) return null;
  const base = priceKey.replace(/_(monthly|yearly)$/, "");
  return ["essential", "premium", "signature"].includes(base) ? base : null;
}

export const Route = createFileRoute("/api/public/webhooks/paddle")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const url = new URL(request.url);
        const env: PaddleEnv = url.searchParams.get("env") === "live" ? "live" : "sandbox";

        const { verifyWebhook } = await import("@/lib/paddle.server");
        const { logSubscriptionEvent } = await import("@/lib/subscription-events.server");

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let event: any;
        try {
          event = await verifyWebhook(request, env);
        } catch (error) {
          await logSubscriptionEvent({
            event_type: "webhook_rejected",
            message: `Notificação de pagamento internacional descartada: ${(error as Error).message}`,
            raw: {},
          });
          return new Response("Invalid signature", { status: 401 });
        }
        if (!event) return new Response("Invalid signature", { status: 401 });

        const type: string = event.eventType ?? "";
        if (!type.startsWith("subscription.")) return new Response("ignored");

        const data = event.data ?? {};
        const raw = JSON.parse(JSON.stringify(data));
        const userId: string | null = data.customData?.userId ?? null;
        const item = data.items?.[0] ?? {};
        const priceKey: string | null = item.price?.importMeta?.externalId ?? null;
        const productKey: string | null = item.price?.productId ?? null;
        const tier = tierFromPriceKey(priceKey);

        if (!userId || !priceKey) {
          await logSubscriptionEvent({
            event_type: "webhook_ignored",
            message: `Assinatura sem vínculo de aluno ou preço (${type}).`,
            raw,
          });
          return new Response("ignored");
        }

        const status: string = data.status ?? "active";
        const periodEnd: string | null = data.currentBillingPeriod?.endsAt ?? null;
        const cancelAtPeriodEnd = Boolean(data.scheduledChange?.action === "cancel");
        const amount = item.price?.unitPrice?.amount
          ? Number(item.price.unitPrice.amount) / 100
          : null;

        const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

        const { data: saved, error } = await supabaseAdmin
          .from("subscriptions")
          .upsert(
            {
              user_id: userId,
              provider: "paddle",
              paddle_subscription_id: data.id,
              paddle_customer_id: data.customerId ?? null,
              plan_key: priceKey,
              external_reference: productKey,
              status,
              plan_label: priceKey,
              amount,
              currency: item.price?.unitPrice?.currencyCode ?? "BRL",
              environment: env,
              current_period_end: periodEnd,
              next_payment_date: data.nextBilledAt ?? null,
              cancel_at_period_end: cancelAtPeriodEnd,
              raw,
              updated_at: new Date().toISOString(),
            },
            { onConflict: "paddle_subscription_id" },
          )
          .select("id")
          .maybeSingle();
        if (error) console.error(`Falha ao salvar assinatura: ${error.message}`);

        // Acesso mantido até o fim do período já pago (cancelamento) e liberado
        // imediatamente na compra/upgrade.
        const hasAccess =
          ["active", "trialing", "past_due"].includes(status) ||
          (status === "canceled" && !!periodEnd && new Date(periodEnd) > new Date());
        const plan = hasAccess && tier ? tier : "free";

        const { error: planError } = await supabaseAdmin
          .from("profiles")
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          .update({ plan: plan as any })
          .eq("id", userId);
        if (planError) console.error(`Falha ao atualizar plano do aluno: ${planError.message}`);

        await logSubscriptionEvent({
          user_id: userId,
          subscription_id: saved?.id ?? null,
          preapproval_id: data.id ?? null,
          event_type: type.replace("subscription.", "subscription_"),
          status,
          amount,
          currency: item.price?.unitPrice?.currencyCode ?? "BRL",
          next_payment_date: data.nextBilledAt ?? null,
          message:
            plan === "free"
              ? "Assinatura encerrada — plano do aluno voltou para Gratuito."
              : `Plano ${plan} liberado para o aluno (${priceKey}).`,
          raw,
        });

        return new Response("ok");
      },
    },
  },
});
