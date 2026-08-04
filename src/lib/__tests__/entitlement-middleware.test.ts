import { describe, expect, it, vi } from "vitest";
import { requireAiQuota, requireFeature } from "@/lib/entitlement-middleware";
import { createFakeSupabase, stateFor } from "./fake-supabase";

const USER = "22222222-2222-2222-2222-222222222222";

type ServerFn = (opts: {
  next: (arg?: unknown) => Promise<unknown>;
  context: { supabase: unknown; userId: string };
}) => Promise<unknown>;

/** Executa apenas a fase `.server()` do middleware, como faz o TanStack Start. */
async function runMiddleware(
  middleware: unknown,
  plan: string | null,
  usedSeconds?: number,
): Promise<{ passed: boolean }> {
  const options = (middleware as { options: { server: ServerFn } }).options;
  const supabase = createFakeSupabase(stateFor(plan, usedSeconds == null ? {} : { usedSeconds }));
  const next = vi.fn(async () => ({ ok: true }));
  await options.server({ next, context: { supabase, userId: USER } });
  return { passed: next.mock.calls.length === 1 };
}

describe("requireFeature", () => {
  const cases: { feature: string; allowed: string[]; blocked: string[] }[] = [
    {
      feature: "product_line_travel",
      allowed: ["premium", "signature"],
      blocked: ["free", "essential"],
    },
    {
      feature: "product_line_hire",
      allowed: ["premium", "signature"],
      blocked: ["free", "essential"],
    },
    {
      feature: "pronunciation_checker",
      allowed: ["essential", "premium", "signature"],
      blocked: ["free"],
    },
    {
      feature: "premium_materials",
      allowed: ["premium", "signature"],
      blocked: ["free", "essential"],
    },
  ];

  for (const { feature, allowed, blocked } of cases) {
    for (const plan of allowed) {
      it(`${feature}: deixa passar no plano ${plan}`, async () => {
        await expect(runMiddleware(requireFeature(feature), plan)).resolves.toEqual({
          passed: true,
        });
      });
    }
    for (const plan of blocked) {
      it(`${feature}: bloqueia no plano ${plan}`, async () => {
        await expect(runMiddleware(requireFeature(feature), plan)).rejects.toThrow(/plano/i);
      });
    }
  }

  it("bloqueia usuário sem plano cadastrado", async () => {
    await expect(runMiddleware(requireFeature("product_line_hire"), null)).rejects.toThrow();
  });
});

describe("requireAiQuota", () => {
  it("deixa passar dentro do limite diário", async () => {
    await expect(runMiddleware(requireAiQuota(), "free", 5 * 60)).resolves.toEqual({
      passed: true,
    });
  });

  it("bloqueia após consumir os minutos do dia", async () => {
    await expect(runMiddleware(requireAiQuota(), "free", 20 * 60)).rejects.toThrow(/minutos/);
  });

  it("não limita premium", async () => {
    await expect(runMiddleware(requireAiQuota(), "premium", 60 * 60)).resolves.toEqual({
      passed: true,
    });
  });
});
