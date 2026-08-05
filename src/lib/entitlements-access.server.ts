import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";

type Client = SupabaseClient<Database>;

export type AccessSnapshot = {
  planKey: string;
  isAdmin: boolean;
  allowed: boolean;
  aiDailyMinutes: number | null;
  aiUsedSeconds: number;
};

/**
 * Plano efetivo do aluno: calculado pela validade da assinatura, nunca apenas
 * pelo valor gravado em `profiles.plan` (que pode estar vencido).
 */
export async function resolvePlanKey(supabase: Client, userId: string): Promise<string> {
  const { syncUserPlan } = await import("@/lib/plan-sync.server");
  try {
    return await syncUserPlan(userId);
  } catch (error) {
    console.error("[entitlements] fallback to profiles.plan", error);
    const { data } = await supabase.from("profiles").select("plan").eq("id", userId).maybeSingle();
    return (data?.plan as string | undefined) ?? "free";
  }
}

/**
 * Verificação de plano no SERVIDOR (fonte da verdade).
 * O FeatureGate/AiUsageGuard do cliente é apenas UX — quem realmente bloqueia é isto.
 */
export async function checkFeatureAccess(
  supabase: Client,
  userId: string,
  featureKey: string,
): Promise<AccessSnapshot> {
  const [planKey, adminRes] = await Promise.all([
    resolvePlanKey(supabase, userId),
    supabase.rpc("has_role", { _user_id: userId, _role: "admin" }),
  ]);

  const isAdmin = adminRes.data === true;

  const [featRes, planRes, usageRes] = await Promise.all([
    supabase
      .from("plan_features")
      .select("enabled")
      .eq("plan_key", planKey)
      .eq("feature_key", featureKey)
      .maybeSingle(),
    supabase.from("plans").select("ai_daily_minutes").eq("key", planKey).maybeSingle(),
    supabase
      .from("ai_usage_daily")
      .select("seconds_used")
      .eq("user_id", userId)
      .eq("feature_key", "ai_teacher")
      .eq("usage_date", new Date().toISOString().slice(0, 10))
      .maybeSingle(),
  ]);

  return {
    planKey,
    isAdmin,
    allowed: isAdmin || featRes.data?.enabled === true,
    aiDailyMinutes: isAdmin ? null : (planRes.data?.ai_daily_minutes ?? null),
    aiUsedSeconds: usageRes.data?.seconds_used ?? 0,
  };
}

/** Lança erro quando o plano do aluno não inclui o recurso. */
export async function assertFeatureAccess(
  supabase: Client,
  userId: string,
  featureKey: string,
): Promise<AccessSnapshot> {
  const access = await checkFeatureAccess(supabase, userId, featureKey);
  if (!access.allowed) {
    throw new Error("Este recurso não está incluído no seu plano. Faça upgrade para liberar.");
  }
  return access;
}

/** Lança erro quando o limite diário de minutos de IA já foi consumido. */
export async function assertAiQuota(
  supabase: Client,
  userId: string,
  featureKey = "ai_teacher",
): Promise<AccessSnapshot> {
  const access = await assertFeatureAccess(supabase, userId, featureKey);
  if (access.aiDailyMinutes != null && access.aiUsedSeconds >= access.aiDailyMinutes * 60) {
    throw new Error(
      `Você já usou os ${access.aiDailyMinutes} minutos diários de IA do seu plano. Faça upgrade para uso ilimitado.`,
    );
  }
  return access;
}
