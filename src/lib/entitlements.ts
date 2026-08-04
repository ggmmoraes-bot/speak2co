import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { getMyAccess, type MyAccess } from "@/lib/entitlements.functions";

export const FEATURE_KEYS = {
  placementTest: "placement_test",
  cefrCertificate: "cefr_certificate",
  studyPlan: "study_plan",
  pronunciationChecker: "pronunciation_checker",
  progressDashboard: "progress_dashboard",
  aiTeacher: "ai_teacher",
  coursesBeginner: "courses_beginner",
  coursesIntermediate: "courses_intermediate",
  premiumMaterials: "premium_materials",
  productLineTravel: "product_line_travel",
  productLineHire: "product_line_hire",
  giseleAi: "gisele_ai",
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

export function useAccess() {
  const fetchAccess = useServerFn(getMyAccess);
  return useQuery({
    queryKey: ["my-access"],
    queryFn: () => fetchAccess(),
    staleTime: 60_000,
  });
}
