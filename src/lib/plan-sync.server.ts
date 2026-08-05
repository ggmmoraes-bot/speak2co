import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";

export type PlanTier = Database["public"]["Enums"]["plan_tier"];

/**
 * Plano efetivo do aluno, calculado pela validade real da assinatura
 * (`public.current_plan_tier`). Assinaturas em modo de teste só valem para
 * administradores; assinaturas canceladas valem até o fim do período pago.
 */
export async function computePlanTier(
  admin: SupabaseClient<Database>,
  userId: string,
): Promise<PlanTier> {
  const { data, error } = await admin.rpc("current_plan_tier", { user_uuid: userId });
  if (error) {
    console.error("[plan-sync] current_plan_tier failed", error.message);
    return "free";
  }
  return ((data as string | null) ?? "free") as PlanTier;
}

/** Recalcula e grava o plano do aluno em `profiles.plan`. Devolve o plano final. */
export async function syncUserPlan(userId: string): Promise<PlanTier> {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  const admin = supabaseAdmin as unknown as SupabaseClient<Database>;
  const plan = await computePlanTier(admin, userId);
  const { error } = await admin.from("profiles").update({ plan }).eq("id", userId);
  if (error) console.error("[plan-sync] failed to persist plan", error.message);
  return plan;
}
