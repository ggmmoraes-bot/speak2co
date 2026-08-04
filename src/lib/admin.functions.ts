import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

function clean<T extends Record<string, unknown>>(obj: T) {
  return Object.fromEntries(Object.entries(obj).filter(([, v]) => v !== undefined)) as T;
}

async function assertAdmin(context: { supabase: any; userId: string }) {
  const { data } = await context.supabase.rpc("has_role", {
    _user_id: context.userId,
    _role: "admin",
  });
  if (data !== true) throw new Error("Acesso restrito ao administrador.");
}

const planSchema = z.object({
  key: z
    .string()
    .min(2)
    .max(40)
    .regex(/^[a-z0-9_]+$/, "Use apenas letras minúsculas, números e _"),
  name: z.string().min(1).max(80),
  tagline: z.string().max(160).nullable().optional(),
  description: z.string().max(600).nullable().optional(),
  access_level: z.number().int().min(0).max(1000),
  monthly_price: z.number().min(0).nullable().optional(),
  yearly_price: z.number().min(0).nullable().optional(),
  monthly_checkout_key: z.string().max(60).nullable().optional(),
  yearly_checkout_key: z.string().max(60).nullable().optional(),
  ai_daily_minutes: z.number().int().min(0).max(1440).nullable().optional(),
  highlight: z.boolean().optional(),
  is_active: z.boolean().optional(),
  sort_order: z.number().int().min(0).max(999).optional(),
});

const featureSchema = z.object({
  key: z
    .string()
    .min(2)
    .max(60)
    .regex(/^[a-z0-9_]+$/, "Use apenas letras minúsculas, números e _"),
  name: z.string().min(1).max(120),
  description: z.string().max(400).nullable().optional(),
  category: z.string().min(1).max(40),
  route: z.string().max(120).nullable().optional(),
  is_active: z.boolean().optional(),
  sort_order: z.number().int().min(0).max(999).optional(),
});

export const getAdminCatalog = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    await assertAdmin(context);
    const [plans, features, planFeatures] = await Promise.all([
      context.supabase.from("plans").select("*").order("sort_order"),
      context.supabase.from("features").select("*").order("category").order("sort_order"),
      context.supabase.from("plan_features").select("plan_key, feature_key, enabled"),
    ]);
    return {
      plans: plans.data ?? [],
      features: features.data ?? [],
      planFeatures: planFeatures.data ?? [],
    };
  });

export const upsertPlan = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d) => planSchema.parse(d))
  .handler(async ({ data, context }) => {
    await assertAdmin(context);
    const { error } = await context.supabase.from("plans").upsert(clean(data) as never, { onConflict: "key" });
    if (error) throw new Error(error.message);
    return { ok: true };
  });

export const deletePlan = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d) => z.object({ key: z.string().min(2).max(40) }).parse(d))
  .handler(async ({ data, context }) => {
    await assertAdmin(context);
    if (data.key === "free") throw new Error("O plano Free não pode ser removido.");
    const { error } = await context.supabase.from("plans").delete().eq("key", data.key);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

export const upsertFeature = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d) => featureSchema.parse(d))
  .handler(async ({ data, context }) => {
    await assertAdmin(context);
    const { error } = await context.supabase.from("features").upsert(clean(data) as never, { onConflict: "key" });
    if (error) throw new Error(error.message);
    return { ok: true };
  });

export const setPlanFeature = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d) =>
    z
      .object({
        plan_key: z.string().min(2).max(40),
        feature_key: z.string().min(2).max(60),
        enabled: z.boolean(),
      })
      .parse(d),
  )
  .handler(async ({ data, context }) => {
    await assertAdmin(context);
    const { error } = await context.supabase
      .from("plan_features")
      .upsert(data, { onConflict: "plan_key,feature_key" });
    if (error) throw new Error(error.message);
    return { ok: true };
  });
