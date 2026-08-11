import type { SupabaseClient } from "@supabase/supabase-js";
import { streamText, Output } from "ai";
import { z } from "zod";
import type { Database } from "@/integrations/supabase/types";
import { createLovableAiGatewayProvider } from "@/lib/ai-gateway.server";
import { withGiselePersona } from "@/lib/gisele-ai-persona";
import { buildStudentSnapshot, describeSnapshot } from "@/lib/gisele-context.server";
import { fluencyModuleRoute } from "@/lib/gisele-fluency-link";

type Client = SupabaseClient<Database>;

export type WeeklyPoint = { date: string; minutes: number; sessions: number };

export type ProgressDashboard = {
  sessions: number;
  minutes: number;
  corrections: number;
  feedbackCount: number;
  openRecommendations: number;
  byFocus: { focus: string; sessions: number; minutes: number }[];
  week: { minutes: number; sessions: number; days: WeeklyPoint[] };
  streakDays: number;
  missionsCompleted: number;
  skills: { skill: string; count: number }[];
  priorities: { category: string; observation: string; priority: number }[];
  history: { id: string; focus: string; minutes: number; score: number | null; created_at: string }[];
  nextModule: { id: string; titleEn: string; objectiveEn: string; minutes: number; route: string } | null;
};

const dayKey = (value: string) => value.slice(0, 10);

/** Dashboard "Meu Progresso": semana, streak, habilidades, prioridades e histórico. */
export async function buildProgressDashboard(
  supabase: Client,
  userId: string,
): Promise<ProgressDashboard> {
  const snapshot = await buildStudentSnapshot(supabase, userId);

  const [{ data: sessions }, { data: feedback }, { data: recs }, { data: missions }] =
    await Promise.all([
      supabase
        .from("gisele_sessions")
        .select("id, focus, minutes, corrections, score, session_date, created_at")
        .eq("user_id", userId)
        .order("created_at", { ascending: false }),
      supabase
        .from("ai_feedback")
        .select("category, observation, priority")
        .eq("user_id", userId)
        .order("priority", { ascending: true })
        .limit(20),
      supabase
        .from("ai_recommendations")
        .select("id")
        .eq("user_id", userId)
        .eq("status", "pending"),
      supabase
        .from("fluency_missions")
        .select("id")
        .eq("user_id", userId)
        .eq("completed", true),
    ]);

  const rows = sessions ?? [];
  const focusMap = new Map<string, { focus: string; sessions: number; minutes: number }>();
  for (const row of rows) {
    const current = focusMap.get(row.focus) ?? { focus: row.focus, sessions: 0, minutes: 0 };
    current.sessions += 1;
    current.minutes += row.minutes ?? 0;
    focusMap.set(row.focus, current);
  }

  const days: WeeklyPoint[] = [];
  for (let i = 6; i >= 0; i--) {
    const date = new Date(Date.now() - i * 86_400_000).toISOString().slice(0, 10);
    const dayRows = rows.filter(
      (r) => (r.session_date ?? dayKey(String(r.created_at))) === date,
    );
    days.push({
      date,
      minutes: dayRows.reduce((sum, r) => sum + (r.minutes ?? 0), 0),
      sessions: dayRows.length,
    });
  }

  const skillCounts = new Map<string, number>();
  for (const item of feedback ?? []) {
    skillCounts.set(item.category, (skillCounts.get(item.category) ?? 0) + 1);
  }
  for (const row of rows) {
    skillCounts.set(row.focus, (skillCounts.get(row.focus) ?? 0) + 1);
  }

  const next = snapshot.fluency.nextModule;

  return {
    sessions: rows.length,
    minutes: rows.reduce((sum, r) => sum + (r.minutes ?? 0), 0),
    corrections: rows.reduce(
      (sum, r) => sum + (Array.isArray(r.corrections) ? r.corrections.length : 0),
      0,
    ),
    feedbackCount: (feedback ?? []).length,
    openRecommendations: (recs ?? []).length,
    byFocus: [...focusMap.values()].sort((a, b) => b.sessions - a.sessions),
    week: {
      minutes: days.reduce((sum, d) => sum + d.minutes, 0),
      sessions: days.reduce((sum, d) => sum + d.sessions, 0),
      days,
    },
    streakDays: snapshot.activity.streakDays,
    missionsCompleted: (missions ?? []).length,
    skills: [...skillCounts.entries()]
      .map(([skill, count]) => ({ skill, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 6),
    priorities: (feedback ?? []).slice(0, 3).map((f) => ({
      category: f.category,
      observation: f.observation,
      priority: f.priority ?? 3,
    })),
    history: rows.slice(0, 10).map((r) => ({
      id: r.id,
      focus: r.focus,
      minutes: r.minutes ?? 0,
      score: r.score,
      created_at: String(r.created_at),
    })),
    nextModule: next ? { ...next, route: fluencyModuleRoute(next.id) } : null,
  };
}

export const ReportSchema = z.object({
  improved: z.string(),
  workingOn: z.string(),
  nextMission: z.object({
    title: z.string(),
    description: z.string(),
    minutes: z.number().int().min(3).max(60),
    route: z.string().nullable(),
  }),
});

export type ProgressReport = z.infer<typeof ReportSchema>;

/** Relatório periódico em 3 blocos, baseado no progresso real do aluno. */
export async function generateProgressReport(
  supabase: Client,
  userId: string,
): Promise<ProgressReport> {
  const apiKey = process.env["LOVABLE_API_KEY"];
  if (!apiKey) throw new Error("IA indisponível no momento.");

  const snapshot = await buildStudentSnapshot(supabase, userId);
  const dashboard = await buildProgressDashboard(supabase, userId);

  const gateway = createLovableAiGatewayProvider(apiKey);
  const result = streamText({
    model: gateway("google/gemini-3.6-flash"),
    system: withGiselePersona(
      `Gere o RELATÓRIO PERIÓDICO da mentoria em exatamente 3 blocos:
1. "improved" — O que você melhorou (baseado apenas nos dados reais abaixo).
2. "workingOn" — O que vamos trabalhar agora (uma prioridade clara).
3. "nextMission" — Sua próxima missão: título curto em inglês, descrição prática, duração em minutos compatível com o tempo disponível do aluno e, se fizer sentido, a rota interna da Speak2Co.
Rotas válidas: /speak2fluency, /speak2fluency/modulo/<id>, /speak2travel, /speak2hire, /curso-beginner, /curso-intermediate, /gisele/voice-room. Não invente conteúdo, notas ou certificados.
Inglês em destaque com tradução curta em português quando ajudar.`,
    ),
    prompt: `${describeSnapshot(snapshot)}

MÉTRICAS:
- Semana: ${dashboard.week.sessions} sessões, ${dashboard.week.minutes} minutos
- Streak: ${dashboard.streakDays} dias
- Missões concluídas: ${dashboard.missionsCompleted}
- Habilidades trabalhadas: ${dashboard.skills.map((s) => `${s.skill} (${s.count})`).join(", ") || "nenhuma ainda"}
- Prioridades atuais: ${dashboard.priorities.map((p) => `${p.category}: ${p.observation}`).join(" | ") || "nenhuma registrada"}`,
    output: Output.object({ schema: ReportSchema }),
  });

  return (await result.output) as ProgressReport;
}
