import type { CourseUnit } from "./types";
import { BEGINNER_UNITS_1_3 } from "./beginner-units-1";
import { BEGINNER_UNITS_4_10 } from "./beginner-units-2";
import { BEGINNER_UNITS_11_20 } from "./beginner-units-3";
import { BEGINNER_UNITS_12_16 } from "./beginner-units-12-16";
import { BEGINNER_UNITS_17_21 } from "./beginner-units-17-21";
import { BEGINNER_UNITS_22_26 } from "./beginner-units-22-26";
import { BEGINNER_UNITS_27_30 } from "./beginner-units-27-30";

/**
 * Speak2Co — Beginner English Course (30 unidades, CEFR A1).
 * Currículo oficial: cada unidade tem Part 1 — Discover e Part 2 — Communicate,
 * com identificadores estáveis (ex.: BEGINNER-U01-DISCOVER).
 */
export const BEGINNER_UNITS: CourseUnit[] = [
  ...BEGINNER_UNITS_1_3,
  ...BEGINNER_UNITS_4_10,
  ...BEGINNER_UNITS_11_20,
  ...BEGINNER_UNITS_12_16,
  ...BEGINNER_UNITS_17_21,
  ...BEGINNER_UNITS_22_26,
  ...BEGINNER_UNITS_27_30,
];

export const BEGINNER_UNITS_TOTAL = BEGINNER_UNITS.length;
export const BEGINNER_PARTS_TOTAL = BEGINNER_UNITS.length * 2;

export function getBeginnerUnit(code: string) {
  return BEGINNER_UNITS.find((u) => u.code === code.toUpperCase());
}
