import { createFileRoute } from "@tanstack/react-router";

type PaddleEnv = "sandbox" | "live";

export const Route = createFileRoute("/api/public/payments/webhook")({
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

        // Downgrade só vale no fim do ciclo já pago: o plano atual é mantido e o
        // novo fica agendado. Upgrade entra em vigor imediatamente.
        const { data: existing } = await supabaseAdmin
          .from("subscriptions")
          .select("plan_key")
          .eq("paddle_subscription_id", data.id)
          .maybeSingle();

        let effectivePlanKey = priceKey;
        let scheduledPlanKey: string | null = null;
        const stillPaid = !!periodEnd && new Date(periodEnd) > new Date();

        if (existing?.plan_key && existing.plan_key !== priceKey && stillPaid) {
          const { data: levels } = await supabaseAdmin
            .from("plans")
            .select("key, access_level, monthly_checkout_key, yearly_checkout_key");
          const levelOf = (key: string) =>
            levels?.find((p) => p.monthly_checkout_key === key || p.yearly_checkout_key === key)
              ?.access_level ?? 0;
          if (levelOf(priceKey) < levelOf(existing.plan_key)) {
            effectivePlanKey = existing.plan_key;
            scheduledPlanKey = priceKey;
          }
        }

        // Rótulo legível do produto (ex.: "All Access") para o aluno ver em
        // Minha assinatura, em vez da chave técnica do preço.
        const { data: planRow } = await supabaseAdmin
          .from("plans")
          .select("name")
          .or(
            `monthly_checkout_key.eq.${effectivePlanKey},yearly_checkout_key.eq.${effectivePlanKey}`,
          )
          .maybeSingle();
        const planLabel = planRow?.name
          ? `${planRow.name}${effectivePlanKey.endsWith("_yearly") ? " Anual" : ""}`
          : effectivePlanKey;

        const { data: saved, error } = await supabaseAdmin
          .from("subscriptions")
          .upsert(
            {
              user_id: userId,
              provider: "paddle",
              paddle_subscription_id: data.id,
              paddle_customer_id: data.customerId ?? null,
              plan_key: effectivePlanKey,
              scheduled_plan_key: scheduledPlanKey,
              external_reference: productKey,
              status,
              plan_label: planLabel,

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

        // O plano efetivo é recalculado pela validade real da assinatura
        // (assinaturas de teste só valem para administradores).
        const { syncUserPlan } = await import("@/lib/plan-sync.server");
        const plan = await syncUserPlan(userId);

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
