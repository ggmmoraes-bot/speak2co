import type { CourseUnit } from "./types";
import { INTERMEDIATE_UNITS_1_10 } from "./intermediate-units-1";
import { INTERMEDIATE_UNITS_11_20 } from "./intermediate-units-2";
import { INTERMEDIATE_UNITS_21_30 } from "./intermediate-units-3";
import { INTERMEDIATE_UNITS_31_40 } from "./intermediate-units-4";

/**
 * Speak2Co — Intermediate English Course (40 unidades, CEFR B1).
 * Currículo oficial: cada unidade tem Part 1 — Discover e Part 2 — Communicate,
 * com identificadores estáveis (ex.: INTERMEDIATE-U01-DISCOVER).
 */
export const INTERMEDIATE_UNITS: CourseUnit[] = [
  ...INTERMEDIATE_UNITS_1_10,
  ...INTERMEDIATE_UNITS_11_20,
  ...INTERMEDIATE_UNITS_21_30,
  ...INTERMEDIATE_UNITS_31_40,
];

export function getIntermediateUnit(code: string) {
  return INTERMEDIATE_UNITS.find((unit) => unit.code === code.toUpperCase());
}
