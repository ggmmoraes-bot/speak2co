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
