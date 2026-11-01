import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { getMyAccess, getPlanCatalog, type MyAccess } from "@/lib/entitlements.functions";

export const FEATURE_KEYS = {
  placementTest: "placement_test",
  cefrCertificate: "cefr_certificate",
  studyPlan: "study_plan",
  studyPlanFull: "study_plan_full",
  pronunciationChecker: "pronunciation_checker",
  progressDashboard: "progress_dashboard",
  aiTeacher: "ai_teacher",
  coursesBeginner: "courses_beginner",
  coursesIntermediate: "courses_intermediate",
  coursesUpperIntermediate: "courses_upper_intermediate",
  premiumMaterials: "premium_materials",
  productLineTravel: "product_line_travel",
  productLineHire: "product_line_hire",
  productLineFluency: "product_line_fluency",
  giseleAi: "gisele_ai",
  learningTools: "learning_tools",
} as const;

export type FeatureKey = (typeof FEATURE_KEYS)[keyof typeof FEATURE_KEYS] | (string & {});

/** Recurso liberado? Admin sempre tem acesso total. */
export function hasFeature(access: MyAccess | undefined, feature: FeatureKey) {
  if (!access) return false;
  if (access.isAdmin) return true;
  return access.features[feature] === true;
}

export function aiMinutesLeft(access: MyAccess | undefined) {
  if (!access || access.aiDailyMinutes == null) return null; // ilimitado
  return Math.max(0, access.aiDailyMinutes - Math.floor(access.aiUsedSeconds / 60));
}

/* ------------------------------------------------------------------ */
/* Pré-visualização de plano (somente admin) — para conferir os bloqueios */
/* ------------------------------------------------------------------ */

const PREVIEW_KEY = "speak2co:preview-plan";
const PREVIEW_EVENT = "speak2co:preview-plan-change";

export function getPreviewPlan(): string | null {
  if (typeof window === "undefined") return null;
  return window.localStorage.getItem(PREVIEW_KEY);
}

export function setPreviewPlan(planKey: string | null) {
  if (typeof window === "undefined") return;
  if (planKey) window.localStorage.setItem(PREVIEW_KEY, planKey);
  else window.localStorage.removeItem(PREVIEW_KEY);
  window.dispatchEvent(new Event(PREVIEW_EVENT));
}

/**
 * Estado bruto do seletor (localStorage). NÃO usar direto na interface:
 * qualquer pessoa pode gravar essa chave no navegador. Use `useAdminPreviewPlan`.
 */
export function usePreviewPlan() {
  const [plan, setPlan] = useState<string | null>(null);
  useEffect(() => {
    const sync = () => setPlan(getPreviewPlan());
    sync();
    window.addEventListener(PREVIEW_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(PREVIEW_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);
  return plan;
}

/**
 * Verdadeira role administrativa, confirmada pelo servidor (`has_role`).
 * Nenhum plano ou produto (inclusive o All Access) concede privilégio de admin.
 * Também limpa o modo "Ver como" de quem não é administrador.
 */
export function useIsAdmin(): boolean {
  const fetchAccess = useServerFn(getMyAccess);
  const { data } = useQuery({
    queryKey: ["my-access"],
    queryFn: () => fetchAccess(),
    staleTime: 60_000,
  });
  const isAdmin = data?.isAdmin === true;
  useEffect(() => {
    if (data && !isAdmin && getPreviewPlan()) setPreviewPlan(null);
  }, [data, isAdmin]);
  return isAdmin;
}

/** Plano em pré-visualização — só existe para administradores reais. */
export function useAdminPreviewPlan(): string | null {
  const isAdmin = useIsAdmin();
  const preview = usePreviewPlan();
  return isAdmin ? preview : null;
}


export function useAccess() {
  const fetchAccess = useServerFn(getMyAccess);
  const fetchCatalog = useServerFn(getPlanCatalog);
  const preview = usePreviewPlan();

  const base = useQuery({
    queryKey: ["my-access"],
    queryFn: () => fetchAccess(),
    staleTime: 60_000,
  });

  const previewActive = Boolean(preview) && base.data?.isAdmin === true;

  const catalog = useQuery({
    queryKey: ["plan-catalog"],
    queryFn: () => fetchCatalog(),
    staleTime: 300_000,
    enabled: previewActive,
  });

  if (previewActive && preview && catalog.data && base.data) {
    const features: Record<string, boolean> = {};
    for (const row of catalog.data.planFeatures) {
      if (row.plan_key === preview) features[row.feature_key] = row.enabled;
    }
    const plan = catalog.data.plans.find((p) => p.key === preview) ?? null;
    return {
      ...base,
      data: {
        ...base.data,
        planKey: preview,
        plan,
        isAdmin: false,
        features,
        aiDailyMinutes: plan?.ai_daily_minutes ?? null,
      } satisfies MyAccess,
    } as typeof base;
  }

  return base;
}
