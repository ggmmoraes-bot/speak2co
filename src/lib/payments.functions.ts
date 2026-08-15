import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

const envSchema = z.enum(["sandbox", "live"]);

/**
 * Resolve a chave legível do preço (ex.: `premium_yearly`) para o ID interno do
 * provedor. O catálogo pode conter preços antigos com a mesma chave (histórico
 * de reajuste), então usamos apenas preços ativos e escolhemos sempre o mais
 * recente — que é o valor vigente na tabela de planos.
 */
export const resolvePaddlePrice = createServerFn({ method: "GET" })
  .inputValidator((data) =>
    z.object({ priceId: z.string().max(120), environment: envSchema }).parse(data),
  )
  .handler(async ({ data }) => {
    const { gatewayFetch } = await import("@/lib/paddle.server");
    const response = await gatewayFetch(
      data.environment,
      `/prices?external_id=${encodeURIComponent(data.priceId)}&status=active&per_page=100`,
    );
    const result = (await response.json()) as {
      data?: Array<{ id: string; status?: string; created_at?: string }>;
    };
    const active = (result.data ?? [])
      .filter((price) => (price.status ?? "active") === "active")
      .sort((a, b) => (b.created_at ?? "").localeCompare(a.created_at ?? ""));
    if (!active.length) throw new Error("Preço não encontrado no provedor de pagamentos.");
    return active[0]!.id;
  });

/**
 * Diz à interface quais formas de pagamento estão realmente operacionais.
 * O Mercado Pago só é oferecido quando o segredo do webhook está configurado —
 * sem ele o pagamento é aprovado mas o plano nunca é liberado.
 */
export const getPaymentOptions = createServerFn({ method: "GET" }).handler(async () => ({
  mercadoPagoEnabled: Boolean(
    process.env["MERCADOPAGO_ACCESS_TOKEN"] && process.env["MERCADOPAGO_WEBHOOK_SECRET"],
  ),
  cardEnabled: true,
}));


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
