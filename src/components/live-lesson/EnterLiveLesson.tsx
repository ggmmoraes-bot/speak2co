import { Link } from "@tanstack/react-router";
import { Lock, Sparkles } from "lucide-react";
import { hasFeature, useAccess } from "@/lib/entitlements";
import type { UnitPartKey } from "@/lib/curriculum/types";
import type { CourseLevel } from "@/lib/live-lesson/script";

/** Mapeia a base da rota do curso para o nível da Live Lesson. */
export const COURSE_LEVEL_BY_BASE: Record<string, CourseLevel> = {
  "/curso-beginner": "beginner",
  "/curso-intermediate": "intermediate",
  "/curso-upper": "upper",
};

/**
 * Entrada para a aula ao vivo com a Gisele (exclusiva do Signature).
 * Nos demais planos exibe cadeado com convite ao upgrade — sem alterar
 * o conteúdo da aula tradicional.
 */
export function EnterLiveLesson({
  courseBase,
  unitCode,
  part,
}: {
  courseBase: string;
  unitCode: string;
  part: UnitPartKey;
}) {
  const { data: access } = useAccess();
  const course = COURSE_LEVEL_BY_BASE[courseBase];
  if (!course) return null;

  const unlocked = hasFeature(access, "gisele_ai");
  const href = `/live-lesson/${course}/${unitCode}/${part}`;

  if (!unlocked) {
    return (
      <Link
        to="/premium"
        className="mt-3 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-secondary/40 px-4 py-2 text-xs font-semibold text-muted-foreground transition hover:text-foreground"
      >
        <Lock className="h-3.5 w-3.5 text-gold" />
        Live Lesson — Signature
      </Link>
    );
  }

  return (
    <Link
      to={href as "/"}
      className="btn-gold mt-3 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold"
    >
      <Sparkles className="h-3.5 w-3.5" />
      Enter Live Lesson
    </Link>
  );
}
