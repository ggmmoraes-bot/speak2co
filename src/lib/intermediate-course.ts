/**
 * Speak2Co Method™ — Intermediate English Course (Essential plan).
 * Currículo oficial: 40 unidades B1, cada uma com Part 1 — Discover e
 * Part 2 — Communicate (80 partes pedagógicas, identificadores estáveis).
 */
import { INTERMEDIATE_UNITS, getIntermediateUnit } from "./curriculum/intermediate-units";
import type { CourseUnit } from "./curriculum/types";

export const INTERMEDIATE_COURSE_ID = "intermediate";

export { INTERMEDIATE_UNITS, getIntermediateUnit };

/** Total de unidades do currículo oficial. */
export const INTERMEDIATE_UNITS_TOTAL = INTERMEDIATE_UNITS.length;

/** Cada unidade tem duas partes; o progresso é registrado por parte. */
export const INTERMEDIATE_PARTS_TOTAL = INTERMEDIATE_UNITS.length * 2;

/** Ids de progresso (uma entrada por parte). */
export function intermediatePartIds(): string[] {
  return INTERMEDIATE_UNITS.flatMap((unit: CourseUnit) => [unit.discover.id, unit.communicate.id]);
}
