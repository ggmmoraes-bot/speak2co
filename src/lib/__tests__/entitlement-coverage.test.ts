import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const read = (p: string) => readFileSync(resolve(process.cwd(), p), "utf8");

/**
 * Garante que os módulos de recursos pagos continuem protegidos no servidor.
 * Se alguém adicionar uma nova server function sem middleware de plano,
 * ou remover um `requireFeature`, estes testes falham.
 */
const GUARDED_MODULES: { file: string; feature: string }[] = [
  { file: "src/lib/speak2travel.functions.ts", feature: "product_line_travel" },
  { file: "src/lib/speak2travel-progress.functions.ts", feature: "product_line_travel" },
  { file: "src/lib/trip-planner.functions.ts", feature: "product_line_travel" },
  { file: "src/lib/speak2hire.functions.ts", feature: "product_line_hire" },
  { file: "src/lib/pronunciation-drills.functions.ts", feature: "pronunciation_checker" },
];

describe("cobertura de requireFeature nas server functions pagas", () => {
  for (const { file, feature } of GUARDED_MODULES) {
    it(`${file} protege todas as server functions com ${feature}`, () => {
      const source = read(file);
      const serverFns = source.match(/createServerFn\(/g)?.length ?? 0;
      const guards = source.match(
        new RegExp(`requireFeature\\("${feature}"\\)`, "g"),
      )?.length ?? 0;

      expect(serverFns).toBeGreaterThan(0);
      expect(guards).toBe(serverFns);
    });
  }
});

describe("rotas de API validam plano no servidor", () => {
  it("/api/chat valida recurso ai_teacher, retorna 403 e aplica quota com 429", () => {
    const source = read("src/routes/api/chat.ts");
    expect(source).toContain('checkFeatureAccess(supabase, userId, "ai_teacher")');
    expect(source).toContain("status: 403");
    expect(source).toContain("status: 429");
    expect(source).toContain("access.aiDailyMinutes != null");
  });

  it("/api/voice/pronunciation valida pronunciation_checker e retorna 403", () => {
    const source = read("src/routes/api/voice/pronunciation.ts");
    expect(source).toContain('"pronunciation_checker"');
    expect(source).toContain("status: 403");
  });
});

describe("o gate do servidor não confia no cliente", () => {
  it("checkFeatureAccess lê o plano da tabela profiles, não de input", () => {
    const source = read("src/lib/entitlements-access.server.ts");
    expect(source).toContain('from("profiles")');
    expect(source).toContain('from("plan_features")');
    expect(source).not.toMatch(/data\.plan|input\.plan/);
  });
});
