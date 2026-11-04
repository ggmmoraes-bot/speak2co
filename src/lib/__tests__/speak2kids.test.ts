import { describe, expect, it } from "vitest";
import { KIDS_UNITS, buildQuickCheck, getKidsUnit } from "@/lib/speak2kids/curriculum";
import { nextPart, partStatus, passedQuickCheck, type KidsProgressRow } from "@/lib/speak2kids/progress";

const row = (u: number, p: number, completed = true): KidsProgressRow => ({
  unit_number: u, part: p, completed, quick_check_score: null, activities_done: [],
});

describe("Speak2Kids curriculum", () => {
  it("tem 20 unidades e 40 partes, 10 palavras cada", () => {
    expect(KIDS_UNITS).toHaveLength(20);
    KIDS_UNITS.forEach((u, i) => {
      expect(u.n).toBe(i + 1);
      expect(u.vocab).toHaveLength(10);
    });
  });
  it("Quick Check tem 3–5 perguntas e a Unit 20 exatamente 5", () => {
    for (const u of KIDS_UNITS.slice(0, 19)) {
      const n = buildQuickCheck(u).length;
      expect(n).toBeGreaterThanOrEqual(3);
      expect(n).toBeLessThanOrEqual(5);
    }
    expect(buildQuickCheck(getKidsUnit(20)!)).toHaveLength(5);
  });
});

describe("Speak2Kids progression", () => {
  it("Communicate fica bloqueado até concluir Discover", () => {
    expect(partStatus([], 1, 2)).toBe("locked");
    expect(partStatus([row(1, 1)], 1, 2)).toBe("available");
  });
  it("a próxima unidade só abre após a Part 2 da anterior", () => {
    expect(partStatus([row(1, 1)], 2, 1)).toBe("locked");
    expect(partStatus([row(1, 1), row(1, 2)], 2, 1)).toBe("available");
    expect(nextPart([row(1, 1), row(1, 2)])).toEqual({ unit: 2, part: 1 });
  });
  it("Quick Check aprova com 75% ou mais", () => {
    expect(passedQuickCheck(3, 4)).toBe(true);
    expect(passedQuickCheck(2, 4)).toBe(false);
    expect(passedQuickCheck(3, 5)).toBe(false);
  });
});
