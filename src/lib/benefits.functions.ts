import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

/**
 * Preço do checkout para o aluno autenticado, já considerando um benefício
 * individual (se houver). Serve apenas para exibição — o valor cobrado é
 * recalculado no servidor no momento de criar a assinatura.
 */
export const getMyCheckoutPricing = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { MP_PLANS } = await import("@/lib/mercadopago.server");
    const { resolveCheckoutPricing } = await import("@/lib/benefits.server");

    const entries = await Promise.all(
      (Object.keys(MP_PLANS) as Array<keyof typeof MP_PLANS>).map(async (key) => {
        const pricing = await resolveCheckoutPricing(
          context.userId,
          key,
          MP_PLANS[key]!.amount,
        ).catch(() => null);
        return [
          key,
          {
            originalAmount: pricing?.originalAmount ?? MP_PLANS[key]!.amount,
            finalAmount: pricing?.finalAmount ?? MP_PLANS[key]!.amount,
            discountPercent: pricing?.discountPercent ?? 0,
            courtesy: pricing?.courtesy ?? false,
          },
        ] as const;
      }),
    );

    return { pricing: Object.fromEntries(entries) };
  });
