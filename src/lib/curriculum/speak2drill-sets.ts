import type { CourseUnit } from "./types";
import { buildUnitDrills } from "./speak2drill";
import { BEGINNER_U01_DRILLS } from "./speak2drill-beginner-01";
import { INTERMEDIATE_U01_DRILLS } from "./speak2drill-intermediate-01";
import { INTERMEDIATE_U04_DRILLS } from "./speak2drill-intermediate-04";
import { INTERMEDIATE_U02_DRILLS } from "./speak2drill-intermediate-02";
import * as D0205 from "./speak2drill-beginner-02-05";
import * as D0610 from "./speak2drill-beginner-06-10";
import * as D1115 from "./speak2drill-beginner-11-15";
import * as D1620 from "./speak2drill-beginner-16-20";
import * as D2125 from "./speak2drill-beginner-21-25";
import * as D2630 from "./speak2drill-beginner-26-30";

/**
 * Speak2Drill — consolidação oral da unidade.
 *
 * Cada unidade tem um conjunto autoral de frases-base divididas em quatro
 * grupos (verbs, vocabulary, expressions, grammar). Nenhum conteúdo novo:
 * tudo vem do que o aluno acabou de estudar na própria unidade.
 *
 * Unidades ainda sem conjunto autoral usam o gerador antigo como fallback,
 * apresentado na mesma experiência por grupos.
 */

export type DrillGroupKey = "verbs" | "vocabulary" | "expressions" | "grammar";

export const DRILL_GROUPS: { key: DrillGroupKey; label: string }[] = [
  { key: "verbs", label: "Verbs" },
  { key: "vocabulary", label: "Vocabulary" },
  { key: "expressions", label: "Expressions" },
  { key: "grammar", label: "Grammar" },
];

export type AuthoredDrill = {
  id: string;
  /** Frase-base, sempre visível durante o exercício. */
  base: string;
  basePt: string;
  /** Instrução de transformação, em inglês. */
  instruction: string;
  /** Frase completa esperada. */
  answer: string;
};

export type DrillSet = Record<DrillGroupKey, AuthoredDrill[]>;

const BATCHES: Record<string, DrillSet>[] = [D0205, D0610, D1115, D1620, D2125, D2630].map(
  (mod) => mod as unknown as Record<string, DrillSet>,
);

const AUTHORED: Record<string, DrillSet> = (() => {
  const map: Record<string, DrillSet> = {
    "BEGINNER-U01": BEGINNER_U01_DRILLS,
    "INTERMEDIATE-U01": INTERMEDIATE_U01_DRILLS,
    "INTERMEDIATE-U04": INTERMEDIATE_U04_DRILLS,
    "INTERMEDIATE-U02": INTERMEDIATE_U02_DRILLS,
  };
  for (const mod of BATCHES) {
    for (const [name, set] of Object.entries(mod)) {
      const m = /^BEGINNER_U(\d{2})_DRILLS$/.exec(name);
      if (m) map[`BEGINNER-U${m[1]}`] = set;
    }
  }
  return map;
})();

/**
 * Mostra apenas o drill proposto, sem a fórmula "Change X to Y":
 * as substituições viram pistas curtas (I → She).
 */
export function drillCue(instruction: string): string {
  const Q = `["“][^"”]+["”]`;
  const LIST = `${Q}(?:\\s*(?:,|and)\\s*${Q})*`;
  const m = new RegExp(`^change\\s+(?:the\\s+\\w+\\s+)?(${LIST})\\s+to\\s+(${LIST})(.*)$`, "i").exec(
    instruction.trim(),
  );
  if (!m) return instruction;
  const pick = (s: string) => [...s.matchAll(/["“]([^"”]+)["”]/g)].map((x) => x[1]!);
  const from = pick(m[1]!);
  const to = pick(m[2]!);
  if (from.length !== to.length) return instruction;
  const pairs = from.map((f, i) => `${f} → ${to[i]}`).join("   ·   ");
  // Mantém qualquer passo extra (ex.: "and use the plural") visível ao aluno.
  const rest = m[3]!.replace(/^[\s,;]*(and\s+)?/i, "").replace(/\.\s*$/, "").trim();
  return rest ? `${pairs}   ·   ${rest.charAt(0).toUpperCase()}${rest.slice(1)}` : pairs;
}

/** Conjunto de drills da unidade — autoral quando existir, senão gerado. */
export function getDrillSet(unit: CourseUnit): DrillSet {
  const authored = AUTHORED[unit.code];
  if (authored) return authored;
  return legacySet(unit);
}

export function hasAuthoredDrills(unit: CourseUnit): boolean {
  return Boolean(AUTHORED[unit.code]);
}

/** Sequência linear dos drills, na ordem dos grupos. */
export function flattenSet(set: DrillSet): { group: DrillGroupKey; drill: AuthoredDrill }[] {
  return DRILL_GROUPS.flatMap((g) => set[g.key].map((drill) => ({ group: g.key, drill })));
}

function legacySet(unit: CourseUnit): DrillSet {
  const flat = buildUnitDrills(unit).flatMap((item) =>
    item.drills.map((d) => ({
      id: `${item.id}-${d.level}`,
      base: item.base,
      basePt: item.basePt,
      instruction: /form$/.test(d.cue)
        ? `Say the sentence in the ${d.cue}.`
        : `Change the sentence to use “${d.cue}”.`,
      answer: d.answer,
    })),
  );
  const size = Math.ceil(flat.length / 4) || 1;
  return {
    verbs: flat.slice(0, size),
    vocabulary: flat.slice(size, size * 2),
    expressions: flat.slice(size * 2, size * 3),
    grammar: flat.slice(size * 3),
  };
}
