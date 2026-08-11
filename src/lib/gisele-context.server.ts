import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";

type Client = SupabaseClient<Database>;

export type GiseleMemoryItem = {
  id: string;
  kind: "strength" | "weakness" | "goal" | "review";
  content: string;
  review_at: string | null;
  source: string | null;
};

export type StudentSnapshot = {
  name: string;
  planKey: string;
  level: string | null;
  goal: string | null;
  targetLevel: string | null;
  placement: { score: number | null; level: string | null } | null;
  courses: { beginnerDone: number; intermediateDone: number };
  fluency: { completedModules: number; lastMissionDate: string | null };
  travel: { completedTracks: number };
  hire: { sessions: number; lastScore: number | null };
  studyPlanSummary: string | null;
  memory: GiseleMemoryItem[];
};

/**
 * Retrato compacto do aluno lido SEMPRE com o cliente autenticado do próprio
 * usuário (RLS). Nunca usar credencial administrativa aqui.
 */
export async function buildStudentSnapshot(
  supabase: Client,
  userId: string,
): Promise<StudentSnapshot> {
  const [profileRes, placementRes, courseRes, fluencyRes, missionRes, travelRes, hireRes, planRes, memoryRes] =
    await Promise.all([
      supabase
        .from("profiles")
        .select("full_name, plan, english_level, goal, target_level")
        .eq("id", userId)
        .maybeSingle(),
      supabase
        .from("placement_tests")
        .select("score, level")
        .eq("user_id", userId)
        .eq("completed", true)
        .order("completed_at", { ascending: false })
        .limit(1)
        .maybeSingle(),
      supabase
        .from("course_progress")
        .select("course_id, completed")
        .eq("user_id", userId)
        .eq("completed", true),
      supabase
        .from("fluency_progress")
        .select("module_id")
        .eq("user_id", userId)
        .eq("completed", true),
      supabase
        .from("fluency_missions")
        .select("mission_date")
        .eq("user_id", userId)
        .order("mission_date", { ascending: false })
        .limit(1)
        .maybeSingle(),
      supabase
        .from("travel_progress")
        .select("track_id")
        .eq("user_id", userId)
        .eq("completed", true),
      supabase
        .from("interview_sessions")
        .select("score")
        .eq("user_id", userId)
        .eq("completed", true)
        .order("completed_at", { ascending: false }),
      supabase.from("study_plans").select("summary").eq("user_id", userId).maybeSingle(),
      supabase
        .from("gisele_memory")
        .select("id, kind, content, review_at, source")
        .eq("user_id", userId)
        .order("created_at", { ascending: false })
        .limit(30),
    ]);

  const courses = courseRes.data ?? [];
  const hire = hireRes.data ?? [];

  return {
    name: profileRes.data?.full_name?.split(" ")[0] || "aluno",
    planKey: (profileRes.data?.plan as string | undefined) ?? "free",
    level: profileRes.data?.english_level ?? null,
    goal: profileRes.data?.goal ?? null,
    targetLevel: profileRes.data?.target_level ?? null,
    placement: placementRes.data
      ? { score: placementRes.data.score ?? null, level: placementRes.data.level ?? null }
      : null,
    courses: {
      beginnerDone: courses.filter((c) => c.course_id === "beginner").length,
      intermediateDone: courses.filter((c) => c.course_id === "intermediate").length,
    },
    fluency: {
      completedModules: (fluencyRes.data ?? []).length,
      lastMissionDate: missionRes.data?.mission_date ?? null,
    },
    travel: { completedTracks: (travelRes.data ?? []).length },
    hire: { sessions: hire.length, lastScore: hire[0]?.score ?? null },
    studyPlanSummary: planRes.data?.summary ?? null,
    memory: (memoryRes.data ?? []) as GiseleMemoryItem[],
  };
}

const bullet = (items: string[]) => (items.length ? items.map((i) => `- ${i}`).join("\n") : "- (nada registrado ainda)");

/** Resumo compacto do aluno para o system prompt (nunca histórico bruto). */
export function describeSnapshot(s: StudentSnapshot): string {
  const strengths = s.memory.filter((m) => m.kind === "strength").map((m) => m.content);
  const weaknesses = s.memory.filter((m) => m.kind === "weakness").map((m) => m.content);
  const goals = s.memory.filter((m) => m.kind === "goal").map((m) => m.content);
  const review = s.memory.filter((m) => m.kind === "review").map((m) => m.content);

  return `PERFIL DO ALUNO (fonte de verdade — não invente nada além disto):
- Nome: ${s.name}
- Plano: ${s.planKey} (Signature: acesso completo à mentoria Gisele AI)
- Nível atual: ${s.level ?? "não definido"}${s.placement?.level ? ` (teste de nivelamento: ${s.placement.level}, ${s.placement.score ?? "?"} pontos)` : ""}
- Objetivo declarado: ${s.goal ?? "não informado"} | Nível desejado: ${s.targetLevel ?? "não informado"}
- Plano de estudos: ${s.studyPlanSummary ?? "ainda não gerado"}

PROGRESSO REAL:
- Curso Beginner: ${s.courses.beginnerDone}/20 lições concluídas
- Curso Intermediate: ${s.courses.intermediateDone}/20 lições concluídas
- Speak2Fluency: ${s.fluency.completedModules} módulos concluídos${s.fluency.lastMissionDate ? ` | última missão diária: ${s.fluency.lastMissionDate}` : ""}
- Speak2Travel: ${s.travel.completedTracks} trilhas concluídas
- Speak2Hire: ${s.hire.sessions} entrevistas concluídas${s.hire.lastScore != null ? ` | última nota: ${s.hire.lastScore}` : ""}

MEMÓRIA DE MENTORIA:
Pontos fortes:
${bullet(strengths)}
Pontos a melhorar:
${bullet(weaknesses)}
Metas do aluno:
${bullet(goals)}
Itens para revisão espaçada:
${bullet(review)}`;
}
