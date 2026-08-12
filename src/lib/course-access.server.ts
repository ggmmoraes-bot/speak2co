import { assertFeatureAccess } from "@/lib/entitlements-access.server";

/** Cada curso é liberado por um recurso do plano. */
const COURSE_FEATURE: Record<string, string> = {
  beginner: "courses_beginner",
  intermediate: "courses_intermediate",
  upper: "courses_upper_intermediate",
};

/** Valida no servidor se o plano do aluno inclui o curso informado. */
export async function assertCourseAccess(
  supabase: Parameters<typeof assertFeatureAccess>[0],
  userId: string,
  courseId: string,
) {
  const feature = COURSE_FEATURE[courseId];
  if (!feature) throw new Error("Curso inválido.");
  return assertFeatureAccess(supabase, userId, feature);
}
