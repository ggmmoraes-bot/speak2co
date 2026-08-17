import { describe, expect, it } from "vitest";
import {
  checkBrandVoiceAccess,
  assertGiseleScope,
  isBrandVoiceId,
  BRAND_VOICE_ID,
} from "@/lib/brand-voice.server";
import { createFakeSupabase, stateFor } from "./fake-supabase";

const USER = "11111111-1111-1111-1111-111111111111";

describe("escopo completo da GiseleAI", () => {
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

describe("voz da GiseleAI", () => {
  it("identifica o voice id oficial", () => {
    expect(isBrandVoiceId(BRAND_VOICE_ID)).toBe(true);
    expect(isBrandVoiceId("alloy")).toBe(false);
  });

  it("bloqueia fora do signature", async () => {
    const supabase = createFakeSupabase(stateFor("premium"));
    const res = await checkBrandVoiceAccess(supabase, USER);
    expect(res.allowed).toBe(false);
    expect(res.planAllowed).toBe(false);
  });

  it("libera no signature sem nenhuma etapa de autorização", async () => {
    const supabase = createFakeSupabase(stateFor("signature"));
    await expect(checkBrandVoiceAccess(supabase, USER)).resolves.toMatchObject({
      allowed: true,
      planAllowed: true,
    });
  });
});
