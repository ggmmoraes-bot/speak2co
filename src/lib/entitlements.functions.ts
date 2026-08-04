import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";

export type PlanRow = {
  key: string;
  name: string;
  tagline: string | null;
  description: string | null;
  access_level: number;
  monthly_price: number | null;
  yearly_price: number | null;
  currency: string;
  monthly_checkout_key: string | null;
  yearly_checkout_key: string | null;
  ai_daily_minutes: number | null;
  highlight: boolean;
  is_active: boolean;
  sort_order: number;
};

export type FeatureRow = {
  key: string;
  name: string;
  description: string | null;
  category: string;
  route: string | null;
  is_active: boolean;
  sort_order: number;
};

export type MyAccess = {
  planKey: string;
  plan: PlanRow | null;
  isAdmin: boolean;
  features: Record<string, boolean>;
  aiDailyMinutes: number | null;
  aiUsedSeconds: number;
};

const PLAN_COLUMNS =
  "key, name, tagline, description, access_level, monthly_price, yearly_price, currency, monthly_checkout_key, yearly_checkout_key, ai_daily_minutes, highlight, is_active, sort_order";
const FEATURE_COLUMNS = "key, name, description, category, route, is_active, sort_order";

function publicClient() {
  const key = process.env["SUPABASE_PUBLISHABLE_KEY"]!;
  return createClient<Database>(process.env["SUPABASE_URL"]!, key, {
    auth: { persistSession: false, autoRefreshToken: false },
    global: {
      fetch: (input, init) => {
        const h = new Headers(init?.headers);
        if (key.startsWith("sb_") && h.get("Authorization") === `Bearer ${key}`) {
          h.delete("Authorization");
        }
        h.set("apikey", key);
        return fetch(input, { ...init, headers: h });
      },
    },
  });
}

/** Catálogo público de planos e recursos — usado na página de assinatura. */
export const getPlanCatalog = createServerFn({ method: "GET" }).handler(async () => {
  const supabase = publicClient();
  const [plans, features, planFeatures] = await Promise.all([
    supabase.from("plans").select(PLAN_COLUMNS).eq("is_active", true).order("sort_order"),
    supabase.from("features").select(FEATURE_COLUMNS).eq("is_active", true).order("sort_order"),
    supabase.from("plan_features").select("plan_key, feature_key, enabled, note"),
  ]);

  return {
    plans: (plans.data ?? []) as PlanRow[],
    features: (features.data ?? []) as FeatureRow[],
    planFeatures: (planFeatures.data ?? []) as {
      plan_key: string;
      feature_key: string;
      enabled: boolean;
      note: string | null;
    }[],
  };
});

/** Permissões do aluno logado. */
export const getMyAccess = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }): Promise<MyAccess> => {
    const { supabase, userId } = context;

    const [profileRes, adminRes] = await Promise.all([
      supabase.from("profiles").select("plan").eq("id", userId).maybeSingle(),
      supabase.rpc("has_role", { _user_id: userId, _role: "admin" }),
    ]);

    const planKey = (profileRes.data?.plan as string | undefined) ?? "free";
    const isAdmin = adminRes.data === true;

    const [planRes, featRes, usageRes] = await Promise.all([
      supabase.from("plans").select(PLAN_COLUMNS).eq("key", planKey).maybeSingle(),
      supabase.from("plan_features").select("feature_key, enabled").eq("plan_key", planKey),
      supabase
        .from("ai_usage_daily")
        .select("seconds_used")
        .eq("user_id", userId)
        .eq("feature_key", "ai_teacher")
        .eq("usage_date", new Date().toISOString().slice(0, 10))
        .maybeSingle(),
    ]);

    const features: Record<string, boolean> = {};
    for (const row of featRes.data ?? []) features[row.feature_key] = row.enabled;

    const plan = (planRes.data as PlanRow | null) ?? null;

    return {
      planKey,
      plan,
      isAdmin,
      features: isAdmin
        ? new Proxy(features, { get: () => true, has: () => true })
        : features,
      aiDailyMinutes: isAdmin ? null : (plan?.ai_daily_minutes ?? null),
      aiUsedSeconds: usageRes.data?.seconds_used ?? 0,
    };
  });

/** Registra consumo do Professor IA e devolve o saldo do dia. */
export const consumeAiSeconds = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data) =>
    z
      .object({
        seconds: z.number().int().min(1).max(600),
        featureKey: z.string().max(60).default("ai_teacher"),
      })
      .parse(data),
  )
  .handler(async ({ data, context }) => {
    const { supabase, userId } = context;
    const today = new Date().toISOString().slice(0, 10);

    const { data: current } = await supabase
      .from("ai_usage_daily")
      .select("id, seconds_used")
      .eq("user_id", userId)
      .eq("feature_key", data.featureKey)
      .eq("usage_date", today)
      .maybeSingle();

    const total = (current?.seconds_used ?? 0) + data.seconds;

    if (current?.id) {
      await supabase.from("ai_usage_daily").update({ seconds_used: total }).eq("id", current.id);
    } else {
      await supabase.from("ai_usage_daily").insert({
        user_id: userId,
        feature_key: data.featureKey,
        usage_date: today,
        seconds_used: total,
      });
    }

    return { secondsUsed: total };
  });
