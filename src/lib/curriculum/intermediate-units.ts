import type { CourseUnit } from "./types";
import { INTERMEDIATE_U01 } from "./intermediate-unit-01";
import { INTERMEDIATE_U02 } from "./intermediate-unit-02";
import { INTERMEDIATE_U03 } from "./intermediate-unit-03";
import { INTERMEDIATE_U04 } from "./intermediate-unit-04";
import { INTERMEDIATE_U05 } from "./intermediate-unit-05";
import { INTERMEDIATE_U06 } from "./intermediate-unit-06";
import { INTERMEDIATE_U07 } from "./intermediate-unit-07";
import { INTERMEDIATE_U08 } from "./intermediate-unit-08";
import { INTERMEDIATE_U09 } from "./intermediate-unit-09";
import { INTERMEDIATE_U10 } from "./intermediate-unit-10";
import { INTERMEDIATE_U11 } from "./intermediate-unit-11";
import { INTERMEDIATE_U12 } from "./intermediate-units-new-12-16";
import { INTERMEDIATE_U13 } from "./intermediate-units-new-12-16";
import { INTERMEDIATE_U14 } from "./intermediate-units-new-12-16";
import { INTERMEDIATE_U15 } from "./intermediate-units-new-12-16";
import { INTERMEDIATE_U16 } from "./intermediate-units-new-12-16";
import { INTERMEDIATE_U17 } from "./intermediate-units-new-17-21";
import { INTERMEDIATE_U18 } from "./intermediate-units-new-17-21";
import { INTERMEDIATE_U19 } from "./intermediate-unit-19";
import { INTERMEDIATE_U20 } from "./intermediate-unit-20";
import { INTERMEDIATE_U21 } from "./intermediate-unit-21";
import { INTERMEDIATE_U22 } from "./intermediate-unit-22";
import { INTERMEDIATE_U23 } from "./intermediate-unit-23";
import { INTERMEDIATE_U24 } from "./intermediate-unit-24";
import { INTERMEDIATE_U25 } from "./intermediate-unit-25";
import { INTERMEDIATE_U26 } from "./intermediate-unit-26";
import { INTERMEDIATE_U27 } from "./intermediate-units-new-27-31";
import { INTERMEDIATE_U28 } from "./intermediate-units-new-27-31";
import { INTERMEDIATE_U29 } from "./intermediate-unit-29";
import { INTERMEDIATE_U30 } from "./intermediate-unit-30";
import { INTERMEDIATE_U31 } from "./intermediate-unit-31";
import { INTERMEDIATE_U32 } from "./intermediate-unit-32";
import { INTERMEDIATE_U33 } from "./intermediate-unit-33";
import { INTERMEDIATE_U34 } from "./intermediate-unit-34";
import { INTERMEDIATE_U35 } from "./intermediate-unit-35";
import { INTERMEDIATE_U36 } from "./intermediate-unit-36";
import { INTERMEDIATE_U37 } from "./intermediate-units-new-37-40";
import { INTERMEDIATE_U38 } from "./intermediate-units-new-37-40";
import { INTERMEDIATE_U39 } from "./intermediate-units-new-37-40";
import { INTERMEDIATE_U40 } from "./intermediate-units-new-37-40";

/**
 * Speak2Co — Intermediate English Course (40 unidades, CEFR B1).
 * Conteúdo autoral Speak2Co; cada unidade tem Part 1 — Discover e Part 2 — Communicate.
 */
export const INTERMEDIATE_UNITS: CourseUnit[] = [
  INTERMEDIATE_U01,
  INTERMEDIATE_U02,
  INTERMEDIATE_U03,
  INTERMEDIATE_U04,
  INTERMEDIATE_U05,
  INTERMEDIATE_U06,
  INTERMEDIATE_U07,
  INTERMEDIATE_U08,
  INTERMEDIATE_U09,
  INTERMEDIATE_U10,
  INTERMEDIATE_U11,
  INTERMEDIATE_U12,
  INTERMEDIATE_U13,
  INTERMEDIATE_U14,
  INTERMEDIATE_U15,
  INTERMEDIATE_U16,
  INTERMEDIATE_U17,
  INTERMEDIATE_U18,
  INTERMEDIATE_U19,
  INTERMEDIATE_U20,
  INTERMEDIATE_U21,
  INTERMEDIATE_U22,
  INTERMEDIATE_U23,
  INTERMEDIATE_U24,
  INTERMEDIATE_U25,
  INTERMEDIATE_U26,
  INTERMEDIATE_U27,
  INTERMEDIATE_U28,
  INTERMEDIATE_U29,
  INTERMEDIATE_U30,
  INTERMEDIATE_U31,
  INTERMEDIATE_U32,
  INTERMEDIATE_U33,
  INTERMEDIATE_U34,
  INTERMEDIATE_U35,
  INTERMEDIATE_U36,
  INTERMEDIATE_U37,
  INTERMEDIATE_U38,
  INTERMEDIATE_U39,
  INTERMEDIATE_U40,
];

export function getIntermediateUnit(code: string) {
  return INTERMEDIATE_UNITS.find((unit) => unit.code === code.toUpperCase());
}
