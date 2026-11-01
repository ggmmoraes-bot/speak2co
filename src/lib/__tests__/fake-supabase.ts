/**
 * Cliente Supabase falso para testar as verificações de plano no servidor.
 * Reproduz apenas o que `entitlements-access.server.ts` usa:
 * from(...).select(...).eq(...).maybeSingle() e rpc("has_role").
 */

export type FakeState = {
  /** plano do usuário na tabela profiles */
  plan: string | null;
  /** o usuário é admin? */
  isAdmin?: boolean;
  /** matriz plan_features: { [planKey]: { [featureKey]: enabled } } */
  planFeatures: Record<string, Record<string, boolean>>;
  /** minutos diários de IA por plano (null = ilimitado) */
  aiDailyMinutes: Record<string, number | null>;
  /** segundos de IA já usados hoje */
  usedSeconds?: number;
  /** consentimento da voz autorizada da marca (ai_voice_settings) */
  consentStatus?: string | null;
  /** recursos liberados por produtos individuais vitalícios */
  ownedProducts?: string[];
};

type Filters = Record<string, unknown>;

function rowFor(table: string, filters: Filters, state: FakeState): unknown {
  switch (table) {
    case "profiles":
      return state.plan == null ? null : { plan: state.plan };
    case "plan_features": {
      const planKey = String(filters["plan_key"]);
      const featureKey = String(filters["feature_key"]);
      const enabled = state.planFeatures[planKey]?.[featureKey];
      return enabled === undefined ? null : { enabled };
    }
    case "plans": {
      const key = String(filters["key"]);
      if (!(key in state.aiDailyMinutes)) return null;
      return { ai_daily_minutes: state.aiDailyMinutes[key] };
    }
    case "ai_voice_settings":
      return state.consentStatus == null ? null : { consent_status: state.consentStatus };
    case "ai_usage_daily":
      return state.usedSeconds == null ? null : { seconds_used: state.usedSeconds };
    default:
      return null;
  }
}

export function createFakeSupabase(state: FakeState) {
  const calls: { table: string; filters: Filters }[] = [];

  const builder = (table: string) => {
    const filters: Filters = {};
    const chain = {
      select: () => chain,
      eq: (column: string, value: unknown) => {
        filters[column] = value;
        return chain;
      },
      maybeSingle: async () => {
        calls.push({ table, filters: { ...filters } });
        return { data: rowFor(table, filters, state), error: null };
      },
    };
    return chain;
  };

  const client = {
    from: (table: string) => builder(table),
    rpc: async (fn: string) => {
      if (fn === "owned_product_features") return { data: state.ownedProducts ?? [], error: null };
      if (fn !== "has_role") throw new Error(`rpc inesperado: ${fn}`);
      return { data: state.isAdmin === true, error: null };
    },
    __calls: calls,
  };

  // O código de produção é tipado com SupabaseClient<Database>; o fake cobre
  // apenas a superfície usada nas verificações de plano.
  return client as unknown as Parameters<
    typeof import("@/lib/entitlements-access.server").checkFeatureAccess
  >[0] & { __calls: typeof calls };
}

/** Matriz de planos equivalente à cadastrada no banco. */
export const PLAN_MATRIX: Record<string, Record<string, boolean>> = {
  free: {
    ai_teacher: true,
    placement_test: true,
    study_plan: true,
    pronunciation_checker: false,
    product_line_travel: false,
    product_line_hire: false,
    premium_materials: false,
    gisele_ai: false,
  },
  essential: {
    ai_teacher: true,
    placement_test: true,
    study_plan: true,
    pronunciation_checker: true,
    product_line_travel: false,
    product_line_hire: false,
    premium_materials: false,
    gisele_ai: false,
  },
  premium: {
    ai_teacher: true,
    placement_test: true,
    study_plan: true,
    pronunciation_checker: true,
    product_line_travel: true,
    product_line_hire: true,
    premium_materials: true,
    gisele_ai: false,
  },
  signature: {
    ai_teacher: true,
    placement_test: true,
    study_plan: true,
    pronunciation_checker: true,
    product_line_travel: true,
    product_line_hire: true,
    premium_materials: true,
    gisele_ai: true,
  },
};

PLAN_MATRIX["complete"] = {
  ...PLAN_MATRIX["essential"],
  premium_materials: true,
  courses_upper_intermediate: true,
};

export const AI_MINUTES: Record<string, number | null> = {
  complete: 20,
  free: 20,
  essential: 20,
  premium: null,
  signature: null,
};

export function stateFor(plan: string | null, overrides: Partial<FakeState> = {}): FakeState {
  return {
    plan,
    planFeatures: PLAN_MATRIX,
    aiDailyMinutes: AI_MINUTES,
    ...overrides,
  };
}
