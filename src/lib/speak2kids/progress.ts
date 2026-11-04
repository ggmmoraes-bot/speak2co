export type KidsProgressRow = {
  unit_number: number;
  part: number;
  completed: boolean;
  quick_check_score: number | null;
  activities_done: string[];
};

export type PartStatus = "locked" | "available" | "in_progress" | "completed";

const find = (rows: KidsProgressRow[], unit: number, part: number) =>
  rows.find((r) => r.unit_number === unit && r.part === part);

/** Part 1 abre quando a Part 2 da unidade anterior termina; Part 2 abre só após Part 1 (Quick Check aprovado). */
export function partStatus(rows: KidsProgressRow[], unit: number, part: 1 | 2): PartStatus {
  const row = find(rows, unit, part);
  if (row?.completed) return "completed";
  const unlocked =
    part === 1 ? unit === 1 || !!find(rows, unit - 1, 2)?.completed : !!find(rows, unit, 1)?.completed;
  if (!unlocked) return "locked";
  return row ? "in_progress" : "available";
}

export function unitStatus(rows: KidsProgressRow[], unit: number): PartStatus {
  const p1 = partStatus(rows, unit, 1);
  const p2 = partStatus(rows, unit, 2);
  if (p2 === "completed") return "completed";
  if (p1 === "locked") return "locked";
  if (p1 === "completed" || p1 === "in_progress") return "in_progress";
  return "available";
}

/** Próxima parte a fazer (para o botão Continue). */
export function nextPart(rows: KidsProgressRow[], total = 20): { unit: number; part: 1 | 2 } | null {
  for (let u = 1; u <= total; u++) {
    for (const p of [1, 2] as const) {
      const s = partStatus(rows, u, p);
      if (s === "available" || s === "in_progress") return { unit: u, part: p };
    }
  }
  return null;
}

export const QUICK_CHECK_PASS = 0.75;
export const passedQuickCheck = (correct: number, total: number) => total > 0 && correct / total >= QUICK_CHECK_PASS;
