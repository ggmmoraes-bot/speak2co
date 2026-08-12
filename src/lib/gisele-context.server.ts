import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";
import {
  FLUENCY_LINKS,
  findFluencyLink,
  recommendFluencyModule,
} from "@/lib/gisele-fluency-link";

type Client = SupabaseClient<Database>;

export type GiseleMemoryItem = {
  id: string;
  kind: "strength" | "weakness" | "goal" | "review";
  content: string;
  review_at: string | null;
  source: string | null;
};

/** Preferências declaradas pelo aluno (objetivo, tempo, formato). */
export type LearnerPreferences = {
  objective: string | null;
  level: string | null;
  /** Minutos disponíveis por dia. */
  minutesPerDay: number;
  /** Formato preferido de interação. */
  format: "text" | "audio" | "voice";
};

export type StudentSnapshot = {
  name: string;
  planKey: string;
  level: string | null;
  goal: string | null;
  targetLevel: string | null;
  placement: { score: number | null; level: string | null } | null;
  courses: { beginnerDone: number; intermediateDone: number };
  fluency: {
    completedModules: number;
    completedIds: string[];
    lastMissionDate: string | null;
    nextModule: { id: string; titleEn: string; objectiveEn: string; minutes: number } | null;
  };
  travel: { completedTracks: number };
  hire: { sessions: number; lastScore: number | null };
  studyPlanSummary: string | null;
  memory: GiseleMemoryItem[];
  preferences: LearnerPreferences;
  /** Erros recorrentes observados pela IA nas últimas sessões. */
  recurringIssues: { category: string; observation: string; priority: number }[];
  activity: { sessionsLast7Days: number; minutesLast7Days: number; streakDays: number };
};

function computeStreak(dates: string[]): number {
  const unique = [...new Set(dates)].sort().reverse();
  if (unique.length === 0) return 0;
  const day = 86_400_000;
  const today = new Date().toISOString().slice(0, 10);
  const yesterday = new Date(Date.now() - day).toISOString().slice(0, 10);
  if (unique[0] !== today && unique[0] !== yesterday) return 0;
  let streak = 1;
  for (let i = 1; i < unique.length; i++) {
    const prev = new Date(`${unique[i - 1]}T00:00:00Z`).getTime();
    const current = new Date(`${unique[i]}T00:00:00Z`).getTime();
    if (prev - current === day) streak += 1;
    else break;
  }
  return streak;
}

/**
 * Retrato compacto do aluno lido SEMPRE com o cliente autenticado do próprio
 * usuário (RLS). Nunca usar credencial administrativa aqui.
 */
export async function buildStudentSnapshot(
  supabase: Client,
  userId: string,
): Promise<StudentSnapshot> {
  const since = new Date(Date.now() - 7 * 86_400_000).toISOString();

  const [
    profileRes,
    placementRes,
    courseRes,
    fluencyRes,
    missionRes,
    travelRes,
    hireRes,
    planRes,
    memoryRes,
    aiProfileRes,
    feedbackRes,
    recentSessionsRes,
  ] = await Promise.all([
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
    supabase
      .from("ai_profiles")
      .select("objective, level, preferences")
      .eq("user_id", userId)
      .maybeSingle(),
    supabase
      .from("ai_feedback")
      .select("category, observation, priority")
      .eq("user_id", userId)
      .order("created_at", { ascending: false })
      .limit(10),
    supabase
      .from("gisele_sessions")
      .select("minutes, session_date, created_at")
      .eq("user_id", userId)
      .gte("created_at", since),
  ]);

  const courses = courseRes.data ?? [];
  const hire = hireRes.data ?? [];
  const memory = (memoryRes.data ?? []) as GiseleMemoryItem[];
  const completedIds = (fluencyRes.data ?? []).map((f) => f.module_id);
  const feedback = feedbackRes.data ?? [];
  const recent = recentSessionsRes.data ?? [];

  const rawPrefs = (aiProfileRes.data?.preferences ?? {}) as Record<string, unknown>;
  const minutesPerDay = Number(rawPrefs["minutesPerDay"]);
  const rawFormat = String(rawPrefs["format"] ?? "");
  const preferences: LearnerPreferences = {
    objective: aiProfileRes.data?.objective ?? profileRes.data?.goal ?? null,
    level: aiProfileRes.data?.level ?? profileRes.data?.english_level ?? null,
    minutesPerDay: Number.isFinite(minutesPerDay) && minutesPerDay > 0 ? minutesPerDay : 15,
    format: rawFormat === "text" || rawFormat === "audio" || rawFormat === "voice" ? rawFormat : "voice",
  };

  const weaknessTexts = [
    ...memory.filter((m) => m.kind === "weakness").map((m) => m.content),
    ...feedback.map((f) => `${f.category} ${f.observation}`),
  ];

  const next = recommendFluencyModule({ completedIds, weaknesses: weaknessTexts });

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
      completedModules: completedIds.length,
      completedIds,
      lastMissionDate: missionRes.data?.mission_date ?? null,
      nextModule: next
        ? {
            id: next.id,
            titleEn: next.titleEn,
            objectiveEn: next.objectiveEn,
            minutes: next.minutes,
          }
        : null,
    },
    travel: { completedTracks: (travelRes.data ?? []).length },
    hire: { sessions: hire.length, lastScore: hire[0]?.score ?? null },
    studyPlanSummary: planRes.data?.summary ?? null,
    memory,
    preferences,
    recurringIssues: feedback.map((f) => ({
      category: f.category,
      observation: f.observation,
      priority: f.priority ?? 3,
    })),
    activity: {
      sessionsLast7Days: recent.length,
      minutesLast7Days: recent.reduce((sum, r) => sum + (r.minutes ?? 0), 0),
      streakDays: computeStreak(
        recent.map((r) => r.session_date ?? String(r.created_at).slice(0, 10)),
      ),
    },
  };
}

const bullet = (items: string[]) => (items.length ? items.map((i) => `- ${i}`).join("\n") : "- (nada registrado ainda)");

const FORMAT_RULE: Record<LearnerPreferences["format"], string> = {
  text: "O aluno prefere praticar por TEXTO: escreva prompts curtos e peça respostas escritas.",
  audio: "O aluno prefere ÁUDIO: proponha frases para ele ouvir e repetir, e sugira o botão de escuta.",
  voice: "O aluno prefere VOZ: conduza como conversa falada, com turnos curtos e perguntas diretas.",
};

/** Resumo compacto do aluno para o system prompt (nunca histórico bruto). */
export function describeSnapshot(s: StudentSnapshot): string {
  const strengths = s.memory.filter((m) => m.kind === "strength").map((m) => m.content);
  const weaknesses = s.memory.filter((m) => m.kind === "weakness").map((m) => m.content);
  const goals = s.memory.filter((m) => m.kind === "goal").map((m) => m.content);
  const review = s.memory.filter((m) => m.kind === "review").map((m) => m.content);

  const fluencyDone = s.fluency.completedIds
    .map((id) => findFluencyLink(id)?.titleEn ?? id)
    .join(", ");
  const fluencyPending = FLUENCY_LINKS.filter((m) => !s.fluency.completedIds.includes(m.id))
    .map((m) => `${m.order}. ${m.titleEn} — ${m.objectiveEn}`)
    .join("\n");

  return `PERFIL DO ALUNO (fonte de verdade — não invente nada além disto):
- Nome: ${s.name}
- Plano: ${s.planKey} (Signature: acesso completo à mentoria Gisele AI)
- Nível atual: ${s.level ?? "não definido"}${s.placement?.level ? ` (teste de nivelamento: ${s.placement.level}, ${s.placement.score ?? "?"} pontos)` : ""}
- Objetivo declarado: ${s.preferences.objective ?? s.goal ?? "não informado"} | Nível desejado: ${s.targetLevel ?? "não informado"}
- Tempo disponível por dia: ${s.preferences.minutesPerDay} minutos — dimensione a prática para caber neste tempo.
- Formato preferido: ${s.preferences.format}. ${FORMAT_RULE[s.preferences.format]}
- Plano de estudos: ${s.studyPlanSummary ?? "ainda não gerado"}

RITMO RECENTE:
- Últimos 7 dias: ${s.activity.sessionsLast7Days} sessões e ${s.activity.minutesLast7Days} minutos | streak: ${s.activity.streakDays} dia(s)

PROGRESSO REAL:
- Curso Beginner: ${s.courses.beginnerDone} partes concluídas
- Curso Intermediate: ${s.courses.intermediateDone} partes concluídas
- Speak2Fluency: ${s.fluency.completedModules}/8 módulos concluídos${fluencyDone ? ` (${fluencyDone})` : ""}${s.fluency.lastMissionDate ? ` | última missão diária: ${s.fluency.lastMissionDate}` : ""}
- Speak2Travel: ${s.travel.completedTracks} trilhas concluídas
- Speak2Hire: ${s.hire.sessions} entrevistas concluídas${s.hire.lastScore != null ? ` | última nota: ${s.hire.lastScore}` : ""}

SPEAK2FLUENCY — MÓDULOS AINDA ABERTOS (recomende sempre por este nome exato):
${fluencyPending || "- (todos os módulos concluídos)"}
Próximo módulo recomendado: ${s.fluency.nextModule ? `${s.fluency.nextModule.titleEn} (${s.fluency.nextModule.minutes} min) — ${s.fluency.nextModule.objectiveEn}` : "nenhum pendente"}
Quando identificar dificuldade ligada a um módulo (ex.: storytelling), recomende esse módulo pelo nome, explique por quê e conduza imediatamente uma microatividade de 2-3 minutos sobre essa habilidade.

ERROS RECORRENTES OBSERVADOS (prioridade 1 = mais urgente):
${bullet(s.recurringIssues.map((i) => `[${i.category}] ${i.observation} (prioridade ${i.priority})`))}

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
