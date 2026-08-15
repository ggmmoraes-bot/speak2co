import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { z } from "zod";

const planKeySchema = z.object({
  planKey: z.enum(["essential_yearly", "premium_yearly", "signature_yearly"]),
  origin: z.string().url().max(300),
});

export const getMySubscription = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data, error } = await context.supabase
      .from("subscriptions")
      .select(
        "id, provider, environment, status, plan_key, plan_label, amount, currency, init_point, next_payment_date, current_period_end, cancel_at_period_end, paddle_subscription_id, created_at, updated_at",
      )
      .eq("user_id", context.userId)
      .order("created_at", { ascending: false })
      .limit(1)
      .maybeSingle();
    if (error) throw new Error(error.message);

    const { syncUserPlan } = await import("@/lib/plan-sync.server");
    await syncUserPlan(context.userId).catch(() => undefined);
    const { resolvePlanKey } = await import("@/lib/entitlements-access.server");
    const plan = await resolvePlanKey(context.supabase, context.userId);

    return { subscription: data, plan };
  });

export const startMercadoPagoCheckout = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data) => planKeySchema.parse(data))
  .handler(async ({ data, context }) => {
    const { createPreapproval, MP_PLANS } = await import("@/lib/mercadopago.server");
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const email = (context.claims as { email?: string } | null)?.email;
    if (!email) throw new Error("Não foi possível identificar seu e-mail de cobrança.");

    const externalReference = `${context.userId}:${crypto.randomUUID()}`;
    const preapproval = await createPreapproval({
      planKey: data.planKey,
      payerEmail: email,
      externalReference,
      backUrl: `${data.origin}/checkout-sucesso`,
    });

    const plan = MP_PLANS[data.planKey];
    const { data: created, error } = await supabaseAdmin
      .from("subscriptions")
      .insert({
        user_id: context.userId,
        provider: "mercadopago",
        environment: "live",
        preapproval_id: preapproval.id,
        plan_key: data.planKey,
        external_reference: externalReference,
        status: preapproval.status ?? "pending",
        plan_label: plan.label,
        amount: plan.amount,
        currency: "BRL",
        init_point: preapproval.init_point ?? null,
        raw: JSON.parse(JSON.stringify(preapproval)),
      })
      .select("id")
      .maybeSingle();
    if (error) throw new Error(error.message);

    const { logSubscriptionEvent } = await import("@/lib/subscription-events.server");
    await logSubscriptionEvent({
      user_id: context.userId,
      subscription_id: created?.id ?? null,
      preapproval_id: preapproval.id,
      event_type: "checkout_created",
      status: preapproval.status ?? "pending",
      amount: plan.amount,
      currency: "BRL",
      message: `Checkout criado para o plano ${plan.label}.`,
      raw: JSON.parse(JSON.stringify(preapproval)),
    });

    if (!preapproval.init_point) throw new Error("O Mercado Pago não retornou o link de pagamento.");
    return { checkoutUrl: preapproval.init_point };
  });

export const getMySubscriptionEvents = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data, error } = await context.supabase
      .from("subscription_events")
      .select(
        "id, event_type, status, amount, currency, next_payment_date, message, preapproval_id, created_at",
      )
      .eq("user_id", context.userId)
      .order("created_at", { ascending: false })
      .limit(50);
    if (error) throw new Error(error.message);
    return { events: data ?? [] };
  });
