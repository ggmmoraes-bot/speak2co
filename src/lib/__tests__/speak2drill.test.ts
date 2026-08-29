import { describe, it, expect } from "vitest";
import { BEGINNER_UNITS } from "@/lib/curriculum/beginner-units";
import { INTERMEDIATE_UNITS } from "@/lib/curriculum/intermediate-units";
import { UPPER_UNITS } from "@/lib/curriculum/upper-units";
import { buildUnitDrills } from "@/lib/curriculum/speak2drill";
describe("speak2drill", () => {
  it("20x3 for every unit", () => {
    const all = [...BEGINNER_UNITS, ...INTERMEDIATE_UNITS, ...UPPER_UNITS];
    expect(all.length).toBeGreaterThan(100);
    for (const u of all) {
      const items = buildUnitDrills(u);
      expect(items.length, u.code).toBe(20);
      for (const it2 of items) {
        expect(it2.drills.length).toBe(3);
        for (const d of it2.drills) expect(d.answer.trim().length).toBeGreaterThan(2);
      }
    }
  });
});
