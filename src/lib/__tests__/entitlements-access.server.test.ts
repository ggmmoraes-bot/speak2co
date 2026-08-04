import { describe, expect, it } from "vitest";
import {
  assertAiQuota,
  assertFeatureAccess,
  checkFeatureAccess,
} from "@/lib/entitlements-access.server";
import { AI_MINUTES, PLAN_MATRIX, createFakeSupabase, stateFor } from "./fake-supabase";

const USER = "11111111-1111-1111-1111-111111111111";

const PAID_FEATURES = [
  "pronunciation_checker",
  "product_line_travel",
  "product_line_hire",
  "premium_materials",
  "gisele_ai",
] as const;

describe("checkFeatureAccess — matriz de planos", () => {
  for (const plan of Object.keys(PLAN_MATRIX)) {
    for (const [feature, expected] of Object.entries(PLAN_MATRIX[plan]!)) {
      it(`${plan} → ${feature} = ${expected ? "liberado" : "bloqueado"}`, async () => {
        const supabase = createFakeSupabase(stateFor(plan));
        const access = await checkFeatureAccess(supabase, USER, feature);
        expect(access.planKey).toBe(plan);
        expect(access.allowed).toBe(expected);
      });
    }
  }

  it("usuário sem profile cai no plano free", async () => {
    const supabase = createFakeSupabase(stateFor(null));
    const access = await checkFeatureAccess(supabase, USER, "product_line_travel");
    expect(access.planKey).toBe("free");
    expect(access.allowed).toBe(false);
  });

  it("recurso desconhecido é sempre bloqueado", async () => {
    for (const plan of Object.keys(PLAN_MATRIX)) {
      const supabase = createFakeSupabase(stateFor(plan));
      const access = await checkFeatureAccess(supabase, USER, "recurso_inexistente");
      expect(access.allowed).toBe(false);
    }
  });

  it("admin recebe acesso total e sem limite de minutos", async () => {
    const supabase = createFakeSupabase(stateFor("free", { isAdmin: true }));
    const access = await checkFeatureAccess(supabase, USER, "gisele_ai");
    expect(access.isAdmin).toBe(true);
    expect(access.allowed).toBe(true);
    expect(access.aiDailyMinutes).toBeNull();
  });

  it("expõe os minutos diários do plano e o consumo do dia", async () => {
    for (const plan of Object.keys(AI_MINUTES)) {
      const supabase = createFakeSupabase(stateFor(plan, { usedSeconds: 300 }));
      const access = await checkFeatureAccess(supabase, USER, "ai_teacher");
      expect(access.aiDailyMinutes).toBe(AI_MINUTES[plan]);
      expect(access.aiUsedSeconds).toBe(300);
    }
  });
});

describe("assertFeatureAccess", () => {
  it("lança erro para recurso pago em plano free", async () => {
    for (const feature of PAID_FEATURES) {
      const supabase = createFakeSupabase(stateFor("free"));
      await expect(assertFeatureAccess(supabase, USER, feature)).rejects.toThrow(/plano/i);
    }
  });

  it("libera recursos das product lines no premium", async () => {
    for (const feature of ["product_line_travel", "product_line_hire", "premium_materials"]) {
      const supabase = createFakeSupabase(stateFor("premium"));
      await expect(assertFeatureAccess(supabase, USER, feature)).resolves.toMatchObject({
        allowed: true,
      });
    }
  });

  it("bloqueia gisele_ai fora do signature", async () => {
    for (const plan of ["free", "essential", "premium"]) {
      const supabase = createFakeSupabase(stateFor(plan));
      await expect(assertFeatureAccess(supabase, USER, "gisele_ai")).rejects.toThrow();
    }
    const supabase = createFakeSupabase(stateFor("signature"));
    await expect(assertFeatureAccess(supabase, USER, "gisele_ai")).resolves.toMatchObject({
      allowed: true,
    });
  });
});

describe("assertAiQuota", () => {
  it("permite quando ainda há minutos no dia (free)", async () => {
    const supabase = createFakeSupabase(stateFor("free", { usedSeconds: 19 * 60 }));
    await expect(assertAiQuota(supabase, USER)).resolves.toMatchObject({ allowed: true });
  });

  it("bloqueia exatamente ao atingir o limite diário", async () => {
    const supabase = createFakeSupabase(stateFor("free", { usedSeconds: 20 * 60 }));
    await expect(assertAiQuota(supabase, USER)).rejects.toThrow(/20 minutos/);
  });

  it("bloqueia o essential ao estourar o limite", async () => {
    const supabase = createFakeSupabase(stateFor("essential", { usedSeconds: 25 * 60 }));
    await expect(assertAiQuota(supabase, USER)).rejects.toThrow(/minutos/);
  });

  it("premium e signature são ilimitados", async () => {
    for (const plan of ["premium", "signature"]) {
      const supabase = createFakeSupabase(stateFor(plan, { usedSeconds: 10_000 }));
      await expect(assertAiQuota(supabase, USER)).resolves.toMatchObject({ allowed: true });
    }
  });

  it("recurso de IA ausente no plano falha antes da quota", async () => {
    const supabase = createFakeSupabase(
      stateFor("free", {
        planFeatures: { free: { ai_teacher: false } },
        usedSeconds: 0,
      }),
    );
    await expect(assertAiQuota(supabase, USER)).rejects.toThrow(/plano/i);
  });
});
