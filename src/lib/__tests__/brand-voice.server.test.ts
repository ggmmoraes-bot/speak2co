import { describe, expect, it } from "vitest";
import { checkBrandVoiceAccess, assertGiseleScope, isBrandVoiceId, BRAND_VOICE_ID } from "@/lib/brand-voice.server";
import { createFakeSupabase, stateFor } from "./fake-supabase";

const USER = "11111111-1111-1111-1111-111111111111";

describe("escopo completo da Gisele AI", () => {
  for (const plan of ["free", "essential", "premium"]) {
    it(`${plan} não acessa o escopo completo`, async () => {
      const supabase = createFakeSupabase(stateFor(plan));
      await expect(assertGiseleScope(supabase, USER)).rejects.toThrow(/plano/i);
    });
  }

  it("signature acessa o escopo completo", async () => {
    const supabase = createFakeSupabase(stateFor("signature"));
    await expect(assertGiseleScope(supabase, USER)).resolves.toMatchObject({ allowed: true });
  });
});

describe("voz autorizada da marca", () => {
  it("identifica o voice id da marca", () => {
    expect(isBrandVoiceId(BRAND_VOICE_ID)).toBe(true);
    expect(isBrandVoiceId("alloy")).toBe(false);
  });

  it("bloqueia fora do signature mesmo com consentimento", async () => {
    const supabase = createFakeSupabase(stateFor("premium", { consentStatus: "granted" }));
    const res = await checkBrandVoiceAccess(supabase, USER);
    expect(res.allowed).toBe(false);
    expect(res.planAllowed).toBe(false);
  });

  it("bloqueia no signature sem consentimento registrado", async () => {
    const supabase = createFakeSupabase(stateFor("signature"));
    const res = await checkBrandVoiceAccess(supabase, USER);
    expect(res.allowed).toBe(false);
    expect(res.consentStatus).toBe("pending");
  });

  it("bloqueia quando a autorização foi revogada", async () => {
    const supabase = createFakeSupabase(stateFor("signature", { consentStatus: "revoked" }));
    await expect(checkBrandVoiceAccess(supabase, USER)).resolves.toMatchObject({ allowed: false });
  });

  it("libera no signature com consentimento concedido", async () => {
    const supabase = createFakeSupabase(stateFor("signature", { consentStatus: "granted" }));
    await expect(checkBrandVoiceAccess(supabase, USER)).resolves.toMatchObject({
      allowed: true,
      consentStatus: "granted",
    });
  });
});
