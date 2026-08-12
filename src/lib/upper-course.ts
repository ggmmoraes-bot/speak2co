/**
 * Speak2Co Method™ — Upper-Intermediate English Course (Premium plan).
 * Currículo oficial: 50 unidades B2, cada uma com Part 1 — Discover e
 * Part 2 — Communicate (100 partes pedagógicas, identificadores estáveis).
 */
import { UPPER_UNITS, getUpperUnit } from "./curriculum/upper-units";
import type { CourseUnit } from "./curriculum/types";

export const UPPER_COURSE_ID = "upper";

export { UPPER_UNITS, getUpperUnit };

export const UPPER_UNITS_TOTAL = UPPER_UNITS.length;

export const UPPER_PARTS_TOTAL = UPPER_UNITS.length * 2;

export function upperPartIds(): string[] {
  return UPPER_UNITS.flatMap((unit: CourseUnit) => [unit.discover.id, unit.communicate.id]);
}
