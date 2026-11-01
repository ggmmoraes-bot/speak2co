import { describe, expect, it } from "vitest";
import { checkFeatureAccess } from "@/lib/entitlements-access.server";
import { COMPLETE_PRODUCT, INDIVIDUAL_PRODUCTS } from "@/lib/subscription-plans";
import { createFakeSupabase, stateFor } from "./fake-supabase";

const USER = "00000000-0000-0000-0000-000000000001";

describe("modelo vitalício", () => {
  it("Complete custa R$ 97,90 em até 10x", () => {
    expect(COMPLETE_PRODUCT.price).toBe(97.9);
    expect(COMPLETE_PRODUCT.installments).toBe(10);
  });

  it("produtos individuais custam R$ 19,90 e Business/Kids não podem ser comprados", () => {
    for (const p of INDIVIDUAL_PRODUCTS) expect(p.price).toBe(19.9);
    const soon = INDIVIDUAL_PRODUCTS.filter((p) => p.checkoutKey === null).map((p) => p.id);
    expect(soon.sort()).toEqual(["business", "kids"]);
  });

  it("comprar Speak2Travel libera só o Speak2Travel", async () => {
    const sb = createFakeSupabase(stateFor("free", { ownedProducts: ["product_line_travel"] }));
    expect((await checkFeatureAccess(sb, USER, "product_line_travel")).allowed).toBe(true);
    expect((await checkFeatureAccess(sb, USER, "product_line_hire")).allowed).toBe(false);
  });

  it("Complete libera os cursos mas não os produtos individuais", async () => {
    const sb = createFakeSupabase(stateFor("complete"));
    expect((await checkFeatureAccess(sb, USER, "courses_upper_intermediate")).allowed).toBe(true);
    expect((await checkFeatureAccess(sb, USER, "product_line_hire")).allowed).toBe(false);
  });
});
