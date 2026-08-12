import type { CourseUnit } from "./types";
import { UPPER_UNITS_1_10 } from "./upper-units-1";
import { UPPER_UNITS_11_20 } from "./upper-units-2";
import { UPPER_UNITS_21_30 } from "./upper-units-3";
import { UPPER_UNITS_31_40 } from "./upper-units-4";
import { UPPER_UNITS_41_50 } from "./upper-units-5";

/**
 * Speak2Co — Upper-Intermediate English Course (50 unidades, CEFR B2).
 * Currículo oficial: cada unidade tem Part 1 — Discover e Part 2 — Communicate,
 * com identificadores estáveis (ex.: UPPER-INTERMEDIATE-U01-DISCOVER).
 */
export const UPPER_UNITS: CourseUnit[] = [
  ...UPPER_UNITS_1_10,
  ...UPPER_UNITS_11_20,
  ...UPPER_UNITS_21_30,
  ...UPPER_UNITS_31_40,
  ...UPPER_UNITS_41_50,
];

export function getUpperUnit(code: string) {
  return UPPER_UNITS.find((unit) => unit.code === code.toUpperCase());
}
