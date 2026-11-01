import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

/**
 * Gestão de Benefícios, Cortesias e Descontos — EXCLUSIVO do administrador.
 * Toda função valida a role real no banco antes de tocar em qualquer dado,
 * e só então usa a credencial de serviço.
 */
async function assertAdmin(context: { supabase: any; userId: string }) {
  const { assertAdmin: guard } = await import("@/lib/admin-guard.server");
  await guard(context);
}

async function admin() {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  return supabaseAdmin as unknown as {
    from: (table: string) => any;
    auth: { admin: { listUsers: (p: { page?: number; perPage?: number }) => Promise<any> } };
  };
}

async function logEvent(action: string, grantId: string, actorId: string, payload: unknown) {
  const supabase = await admin();
  await supabase.from("benefit_grant_events").insert({
    grant_id: grantId,
    action,
    actor_id: actorId,
    payload: JSON.parse(JSON.stringify(payload ?? {})),
  });
}

/** Busca alunos por nome ou e-mail para conceder um benefício. */
export const searchBeneficiaries = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d) => z.object({ query: z.string().trim().min(2).max(120) }).parse(d))
  .handler(async ({ data, context }) => {
    await assertAdmin(context);
    const supabase = await admin();
    const term = data.query.toLowerCase();

    const { data: authUsers } = await supabase.auth.admin.listUsers({ page: 1, perPage: 1000 });
    const users: Array<{ id: string; email: string | null }> = (authUsers?.users ?? []).map(
      (u: any) => ({ id: u.id, email: u.email ?? null }),
    );

    const { data: profiles } = await supabase.from("profiles").select("id, full_name, plan");
    const nameById = new Map<string, { name: string | null; plan: string | null }>(
      (profiles ?? []).map((p: any) => [p.id, { name: p.full_name, plan: p.plan }]),
    );

    return {
      users: users
        .filter(
          (u) =>
            (u.email ?? "").toLowerCase().includes(term) ||
            (nameById.get(u.id)?.name ?? "").toLowerCase().includes(term),
        )
        .slice(0, 20)
        .map((u) => ({
          id: u.id,
          email: u.email,
          full_name: nameById.get(u.id)?.name ?? null,
          plan: nameById.get(u.id)?.plan ?? "free",
        })),
    };
  });

/** Lista todos os benefícios concedidos, com nome e e-mail do beneficiado. */
export const listBenefits = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    await assertAdmin(context);
    const supabase = await admin();
    const { data: grants } = await supabase
      .from("benefit_grants")
      .select("*")
      .order("created_at", { ascending: false });

    const rows = (grants ?? []) as any[];
    const { data: profiles } = await supabase.from("profiles").select("id, full_name, plan");
    const profileById = new Map<string, { full_name: string | null; plan: string | null }>(
      (profiles ?? []).map((p: any) => [p.id as string, { full_name: p.full_name, plan: p.plan }]),
    );

    return {
      benefits: rows.map((g) => ({
        ...g,
        full_name: profileById.get(g.user_id)?.full_name ?? null,
        current_plan: profileById.get(g.user_id)?.plan ?? "free",
      })),
    };
  });

const baseGrant = {
  userId: z.string().uuid(),
  email: z.string().email().max(200).nullable().optional(),
  planKey: z.enum(["complete", "signature", "premium", "essential"]).default("complete"),
  startsAt: z.string().min(4).max(40).nullable().optional(),
  endsAt: z.string().min(4).max(40).nullable().optional(),
  note: z.string().max(400).nullable().optional(),
};

function toIso(value: string | null | undefined, fallback?: string) {
  if (!value) return fallback ?? null;
  const date = new Date(value.length <= 10 ? `${value}T00:00:00` : value);
  return Number.isNaN(date.getTime()) ? (fallback ?? null) : date.toISOString();
}

/** Cortesia: plano liberado sem cobrança, permanente ou por período. */
export const grantCourtesy = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d) => z.object(baseGrant).parse(d))
  .handler(async ({ data, context }) => {
    await assertAdmin(context);
    const supabase = await admin();
    const payload = {
      user_id: data.userId,
      email_snapshot: data.email ?? null,
      kind: "courtesy",
      plan_key: data.planKey,
      discount_percent: 100,
      starts_at: toIso(data.startsAt, new Date().toISOString()),
      ends_at: toIso(data.endsAt),
      status: "active",
      granted_by: context.userId,
      note: data.note ?? null,
    };
    const { data: created, error } = await supabase
      .from("benefit_grants")
      .insert(payload)
      .select("id")
      .maybeSingle();
    if (error) throw new Error(error.message);

    await logEvent("granted", created!.id, context.userId, payload);
    const { syncUserPlan } = await import("@/lib/plan-sync.server");
    await syncUserPlan(data.userId).catch(() => undefined);
    return { ok: true, id: created!.id };
  });

/** Desconto individual (ex.: 10% no All Access), com validade e limite de uso. */
export const grantDiscount = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d) =>
    z
      .object({
        ...baseGrant,
        discountPercent: z.number().min(1).max(100),
        code: z.string().trim().max(40).nullable().optional(),
        usageLimit: z.number().int().min(1).max(999).nullable().optional(),
      })
      .parse(d),
  )
  .handler(async ({ data, context }) => {
    await assertAdmin(context);
    const supabase = await admin();
    const payload = {
      user_id: data.userId,
      email_snapshot: data.email ?? null,
      kind: "discount",
      plan_key: data.planKey,
      discount_percent: data.discountPercent,
      code: data.code?.trim() ? data.code.trim() : null,
      starts_at: toIso(data.startsAt, new Date().toISOString()),
      ends_at: toIso(data.endsAt),
      usage_limit: data.usageLimit ?? null,
      status: "active",
      granted_by: context.userId,
      note: data.note ?? null,
    };
    const { data: created, error } = await supabase
      .from("benefit_grants")
      .insert(payload)
      .select("id")
      .maybeSingle();
    if (error) throw new Error(error.message);
    await logEvent("granted", created!.id, context.userId, payload);
    return { ok: true, id: created!.id };
  });

/** Ativa/desativa ou revoga. Nada é apagado — o histórico permanece. */
export const setBenefitStatus = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d) =>
    z
      .object({
        id: z.string().uuid(),
        status: z.enum(["active", "inactive", "revoked"]),
      })
      .parse(d),
  )
  .handler(async ({ data, context }) => {
    await assertAdmin(context);
    const supabase = await admin();
    const { data: before } = await supabase
      .from("benefit_grants")
      .select("user_id, status")
      .eq("id", data.id)
      .maybeSingle();
    if (!before) throw new Error("Benefício não encontrado.");

    const { error } = await supabase
      .from("benefit_grants")
      .update({ status: data.status })
      .eq("id", data.id);
    if (error) throw new Error(error.message);

    await logEvent(data.status === "revoked" ? "revoked" : "status_changed", data.id, context.userId, {
      from: before.status,
      to: data.status,
    });

    const { syncUserPlan } = await import("@/lib/plan-sync.server");
    await syncUserPlan(before.user_id).catch(() => undefined);
    return { ok: true };
  });

/** Histórico de auditoria de um benefício. */
export const listBenefitHistory = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d) => z.object({ id: z.string().uuid() }).parse(d))
  .handler(async ({ data, context }) => {
    await assertAdmin(context);
    const supabase = await admin();
    const { data: events } = await supabase
      .from("benefit_grant_events")
      .select("id, action, payload, actor_id, created_at")
      .eq("grant_id", data.id)
      .order("created_at", { ascending: false })
      .limit(100);
    return { events: events ?? [] };
  });
