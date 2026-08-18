/**
 * Benefícios individuais (cortesia e desconto) — regras canônicas do SERVIDOR.
 *
 * Nada aqui pode ser influenciado pelo cliente: o preço final é sempre
 * recalculado a partir do `user_id` autenticado. As tabelas `benefit_grants` e
 * `benefit_grant_events` só são acessíveis pela credencial de serviço.
 */

export type BenefitKind = "courtesy" | "discount";

export type BenefitGrant = {
  id: string;
  user_id: string;
  email_snapshot: string | null;
  kind: BenefitKind;
  plan_key: string;
  discount_percent: number;
  code: string | null;
  starts_at: string;
  ends_at: string | null;
  usage_limit: number | null;
  usage_count: number;
  status: "active" | "inactive" | "revoked" | "expired";
  granted_by: string | null;
  note: string | null;
  created_at: string;
  updated_at: string;
};

export type CheckoutPricing = {
  originalAmount: number;
  finalAmount: number;
  discountPercent: number;
  grantId: string | null;
  courtesy: boolean;
};

/** `signature_yearly` → `signature` */
export function planTierOfCheckoutKey(planKey: string): string {
  return planKey.replace(/_(yearly|monthly)$/, "");
}

async function adminClient() {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  // As tabelas de benefícios não existem nos tipos gerados ainda.
  return supabaseAdmin as unknown as {
    from: (table: string) => any;
  };
}

function withinWindow(grant: BenefitGrant, now = Date.now()) {
  const start = new Date(grant.starts_at).getTime();
  if (Number.isFinite(start) && start > now) return false;
  if (grant.ends_at && new Date(grant.ends_at).getTime() <= now) return false;
  return true;
}

function usageAvailable(grant: BenefitGrant) {
  return grant.usage_limit == null || grant.usage_count < grant.usage_limit;
}

/** Benefícios ativos e válidos do aluno para um plano específico. */
export async function findValidGrant(
  userId: string,
  planTier: string,
  kind: BenefitKind,
): Promise<BenefitGrant | null> {
  const supabase = await adminClient();
  const { data } = await supabase
    .from("benefit_grants")
    .select("*")
    .eq("user_id", userId)
    .eq("kind", kind)
    .eq("plan_key", planTier)
    .eq("status", "active")
    .order("created_at", { ascending: false });

  const grants = (data ?? []) as BenefitGrant[];
  const valid = grants.filter((g) => withinWindow(g) && (kind === "courtesy" || usageAvailable(g)));
  if (!valid.length) return null;
  // Maior desconto vence.
  return valid.sort((a, b) => Number(b.discount_percent) - Number(a.discount_percent))[0]!;
}

/** Cortesia válida do aluno (plano liberado sem cobrança). */
export async function findCourtesy(userId: string, planTier: string) {
  return findValidGrant(userId, planTier, "courtesy");
}

function round2(value: number) {
  return Math.round(value * 100) / 100;
}

/**
 * Preço final do checkout para este aluno. Sempre calculado no servidor a
 * partir do preço oficial do plano — o cliente nunca envia valores.
 */
export async function resolveCheckoutPricing(
  userId: string,
  checkoutKey: string,
  baseAmount: number,
  options?: { code?: string | null },
): Promise<CheckoutPricing> {
  const planTier = planTierOfCheckoutKey(checkoutKey);

  const courtesy = await findCourtesy(userId, planTier);
  if (courtesy) {
    return {
      originalAmount: baseAmount,
      finalAmount: 0,
      discountPercent: 100,
      grantId: courtesy.id,
      courtesy: true,
    };
  }

  const discount = await findValidGrant(userId, planTier, "discount");
  if (!discount) {
    return {
      originalAmount: baseAmount,
      finalAmount: baseAmount,
      discountPercent: 0,
      grantId: null,
      courtesy: false,
    };
  }

  // Quando há código, ele precisa bater com o benefício concedido a este aluno.
  const informed = options?.code?.trim();
  if (informed && discount.code && informed.toLowerCase() !== discount.code.toLowerCase()) {
    return {
      originalAmount: baseAmount,
      finalAmount: baseAmount,
      discountPercent: 0,
      grantId: null,
      courtesy: false,
    };
  }

  const percent = Number(discount.discount_percent) || 0;
  return {
    originalAmount: baseAmount,
    finalAmount: round2(baseAmount * (1 - percent / 100)),
    discountPercent: percent,
    grantId: discount.id,
    courtesy: false,
  };
}

/** Registra o uso do benefício após a criação do checkout. */
export async function registerBenefitUsage(grantId: string, actorId: string, detail: unknown) {
  const supabase = await adminClient();
  const { data } = await supabase
    .from("benefit_grants")
    .select("usage_count")
    .eq("id", grantId)
    .maybeSingle();
  const next = Number(data?.usage_count ?? 0) + 1;
  await supabase.from("benefit_grants").update({ usage_count: next }).eq("id", grantId);
  await supabase.from("benefit_grant_events").insert({
    grant_id: grantId,
    action: "used",
    actor_id: actorId,
    payload: JSON.parse(JSON.stringify(detail ?? {})),
  });
}
