import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

const envSchema = z.enum(["sandbox", "live"]);

export const resolvePaddlePrice = createServerFn({ method: "GET" })
  .inputValidator((data) =>
    z.object({ priceId: z.string().max(120), environment: envSchema }).parse(data),
  )
  .handler(async ({ data }) => {
    const { gatewayFetch } = await import("@/lib/paddle.server");
    const response = await gatewayFetch(
      data.environment,
      `/prices?external_id=${encodeURIComponent(data.priceId)}`,
    );
    const result = (await response.json()) as { data?: Array<{ id: string }> };
    if (!result.data?.length) throw new Error("Preço não encontrado no provedor de pagamentos.");
    return result.data[0]!.id;
  });

/** Abre o portal do cliente (cancelar, trocar cartão, ver faturas). */
export const createPaddlePortalSession = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data: sub } = await context.supabase
      .from("subscriptions")
      .select("paddle_subscription_id, paddle_customer_id, environment")
      .eq("user_id", context.userId)
      .eq("provider", "paddle")
      .order("created_at", { ascending: false })
      .limit(1)
      .maybeSingle();

    if (!sub?.paddle_customer_id) {
      throw new Error("Nenhuma assinatura internacional encontrada para esta conta.");
    }

    const { getPaddleClient } = await import("@/lib/paddle.server");
    const paddle = getPaddleClient((sub.environment ?? "live") === "sandbox" ? "sandbox" : "live");
    const session = await paddle.customerPortalSessions.create(
      sub.paddle_customer_id,
      sub.paddle_subscription_id ? [sub.paddle_subscription_id] : [],
    );
    return { url: session.urls.general.overview };
  });

const priceIdSchema = z.object({ priceId: z.string().min(2).max(120) });

/**
 * Troca de plano do assinante internacional.
 * Upgrade cobra a diferença na hora; downgrade só entra em vigor no próximo ciclo.
 */
export const changePaddlePlan = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data) => priceIdSchema.parse(data))
  .handler(async ({ data, context }) => {
    const { data: sub } = await context.supabase
      .from("subscriptions")
      .select("paddle_subscription_id, plan_key, environment, status")
      .eq("user_id", context.userId)
      .eq("provider", "paddle")
      .order("created_at", { ascending: false })
      .limit(1)
      .maybeSingle();

    if (!sub?.paddle_subscription_id) {
      throw new Error("Nenhuma assinatura ativa para trocar de plano.");
    }

    const { data: plans } = await context.supabase
      .from("plans")
      .select("access_level, monthly_checkout_key, yearly_checkout_key");
    const levelOf = (key: string | null) =>
      (key
        ? plans?.find((p) => p.monthly_checkout_key === key || p.yearly_checkout_key === key)
            ?.access_level
        : 0) ?? 0;

    const isUpgrade = levelOf(data.priceId) > levelOf(sub.plan_key);

    const { getPaddleClient } = await import("@/lib/paddle.server");
    const { gatewayFetch } = await import("@/lib/paddle.server");
    const env = (sub.environment ?? "live") === "sandbox" ? "sandbox" : "live";

    const priceLookup = await gatewayFetch(
      env,
      `/prices?external_id=${encodeURIComponent(data.priceId)}`,
    );
    const priceResult = (await priceLookup.json()) as { data?: Array<{ id: string }> };
    const paddlePriceId = priceResult.data?.[0]?.id;
    if (!paddlePriceId) throw new Error("Plano não encontrado no provedor de pagamentos.");

    const paddle = getPaddleClient(env);
    await paddle.subscriptions.update(sub.paddle_subscription_id, {
      items: [{ priceId: paddlePriceId, quantity: 1 }],
      prorationBillingMode: isUpgrade ? "prorated_immediately" : "do_not_bill",
    });

    return {
      applied: isUpgrade ? ("immediate" as const) : ("next_cycle" as const),
    };
  });

/** Cancela a assinatura internacional mantendo o acesso até o fim do período pago. */
export const cancelPaddleSubscription = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data: sub } = await context.supabase
      .from("subscriptions")
      .select("paddle_subscription_id, environment")
      .eq("user_id", context.userId)
      .eq("provider", "paddle")
      .order("created_at", { ascending: false })
      .limit(1)
      .maybeSingle();

    if (!sub?.paddle_subscription_id) throw new Error("Nenhuma assinatura ativa para cancelar.");

    const { getPaddleClient } = await import("@/lib/paddle.server");
    const paddle = getPaddleClient((sub.environment ?? "live") === "sandbox" ? "sandbox" : "live");
    await paddle.subscriptions.cancel(sub.paddle_subscription_id, {
      effectiveFrom: "next_billing_period",
    });
    return { ok: true };
  });
