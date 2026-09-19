import type { CourseUnit } from "./types";
import { buildUnitDrills } from "./speak2drill";
import { BEGINNER_U01_DRILLS } from "./speak2drill-beginner-01";

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

const AUTHORED: Record<string, DrillSet> = {
  "BEGINNER-U01": BEGINNER_U01_DRILLS,
};

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
