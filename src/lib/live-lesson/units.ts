import { BEGINNER_UNITS } from "@/lib/curriculum/beginner-units";
import { INTERMEDIATE_UNITS } from "@/lib/curriculum/intermediate-units";
import { UPPER_UNITS } from "@/lib/curriculum/upper-units";
import type { CourseUnit, UnitPartKey } from "@/lib/curriculum/types";
import type { CourseLevel } from "@/lib/live-lesson/script";

export const COURSE_LEVELS = ["beginner", "intermediate", "upper"] as const;

const UNITS: Record<CourseLevel, CourseUnit[]> = {
  beginner: BEGINNER_UNITS,
  intermediate: INTERMEDIATE_UNITS,
  upper: UPPER_UNITS,
};

/** Rotas de volta para a aula tradicional (conteúdo original preservado). */
export const COURSE_ROUTE: Record<CourseLevel, string> = {
  beginner: "/curso-beginner",
  intermediate: "/curso-intermediate",
  upper: "/curso-upper",
};

export function isCourseLevel(value: string): value is CourseLevel {
  return (COURSE_LEVELS as readonly string[]).includes(value);
}

export function isUnitPart(value: string): value is UnitPartKey {
  return value === "discover" || value === "communicate";
}

export function findUnit(course: CourseLevel, unitCode: string): CourseUnit | undefined {
  return UNITS[course].find((u) => u.code === unitCode.toUpperCase());
}

/** Lista as unidades de um curso (usada no seletor de preview do admin). */
export function listUnits(course: CourseLevel): CourseUnit[] {
  return UNITS[course];
}
