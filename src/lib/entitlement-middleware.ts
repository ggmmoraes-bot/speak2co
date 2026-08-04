import { createMiddleware } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

/**
 * Exige que o plano do aluno inclua o recurso informado.
 * Use em toda server function de um recurso pago — o bloqueio da interface
 * (FeatureGate) não protege chamadas diretas.
 */
export function requireFeature(featureKey: string) {
  return createMiddleware({ type: "function" })
    .middleware([requireSupabaseAuth])
    .server(async ({ next, context }) => {
      const { assertFeatureAccess } = await import("@/lib/entitlements-access.server");
      const access = await assertFeatureAccess(context.supabase, context.userId, featureKey);
      return next({ context: { access } });
    });
}

/** Exige o recurso de IA e ainda valida o limite diário de minutos do plano. */
export function requireAiQuota(featureKey = "ai_teacher") {
  return createMiddleware({ type: "function" })
    .middleware([requireSupabaseAuth])
    .server(async ({ next, context }) => {
      const { assertAiQuota } = await import("@/lib/entitlements-access.server");
      const access = await assertAiQuota(context.supabase, context.userId, featureKey);
      return next({ context: { access } });
    });
}
