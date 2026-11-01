import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { z } from "zod";

const planKeySchema = z.object({
  planKey: z.enum(["complete_lifetime", "speak2hire_lifetime", "speak2fluency_lifetime", "speak2travel_lifetime"]),
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
    const { createPreference, MP_PLANS } = await import("@/lib/mercadopago.server");
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const email = (context.claims as { email?: string } | null)?.email;
    if (!email) throw new Error("Não foi possível identificar seu e-mail de cobrança.");

    const plan = MP_PLANS[data.planKey];

    // Preço final SEMPRE calculado no servidor a partir do usuário autenticado.
    // O cliente não envia valores e não consegue influenciar o desconto.
    const { resolveCheckoutPricing, registerBenefitUsage } = await import("@/lib/benefits.server");
    const pricing = await resolveCheckoutPricing(context.userId, data.planKey, plan.amount);

    if (pricing.courtesy) {
      const { syncUserPlan } = await import("@/lib/plan-sync.server");
      await syncUserPlan(context.userId).catch(() => undefined);
      throw new Error("Seu plano já está liberado nesta conta — não é necessário pagamento.");
    }

    // Impede comprar de novo um produto vitalício que a aluna já possui.
    const { data: owned } = await supabaseAdmin
      .from("subscriptions")
      .select("id")
      .eq("user_id", context.userId)
      .eq("plan_key", data.planKey)
      .in("status", ["active", "authorized"])
      .limit(1)
      .maybeSingle();
    if (owned) throw new Error("Você já possui este produto com acesso vitalício.");

    const externalReference = `${context.userId}:${crypto.randomUUID()}`;
    // Cobrança anual avulsa: permite parcelar em até 12x no cartão. O desconto
    // individual já está aplicado no valor enviado ao Mercado Pago.
    const preference = await createPreference({
      planKey: data.planKey,
      payerEmail: email,
      externalReference,
      // O Mercado Pago só aceita domínios públicos aprovados: usamos sempre a
      // URL oficial da Speak2Co (a origem do navegador pode ser um preview).
      backUrl: "https://speak2co.lovable.app/checkout-sucesso",
      amount: pricing.finalAmount,
    });

    const { data: created, error } = await supabaseAdmin
      .from("subscriptions")
      .insert({
        user_id: context.userId,
        provider: "mercadopago_preference",
        environment: "live",
        plan_key: data.planKey,
        external_reference: externalReference,
        status: "pending",
        plan_label: plan.label,
        amount: pricing.finalAmount,
        currency: "BRL",
        init_point: preference.init_point ?? null,
        current_period_end: null,
        // Pagamento único: nada é renovado nem cobrado de novo.
        cancel_at_period_end: true,
        raw: JSON.parse(JSON.stringify({ preference, pricing })),
      })
      .select("id")
      .maybeSingle();
    if (error) throw new Error(error.message);

    const { logSubscriptionEvent } = await import("@/lib/subscription-events.server");
    await logSubscriptionEvent({
      user_id: context.userId,
      subscription_id: created?.id ?? null,
      event_type: "checkout_created",
      status: "pending",
      amount: pricing.finalAmount,
      currency: "BRL",
      message: pricing.discountPercent
        ? `Checkout criado para o plano ${plan.label} com ${pricing.discountPercent}% de desconto (R$ ${pricing.finalAmount.toFixed(2)}) (pagamento único, acesso vitalício).`
        : `Checkout criado para o plano ${plan.label} (pagamento único, acesso vitalício).`,
      raw: JSON.parse(JSON.stringify({ preference, pricing })),
    });

    if (pricing.grantId) {
      await registerBenefitUsage(pricing.grantId, context.userId, {
        planKey: data.planKey,
        preference_id: preference.id,
        amount: pricing.finalAmount,
      }).catch(() => undefined);
    }

    if (!preference.init_point) throw new Error("O Mercado Pago não retornou o link de pagamento.");
    return { checkoutUrl: preference.init_point };
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
