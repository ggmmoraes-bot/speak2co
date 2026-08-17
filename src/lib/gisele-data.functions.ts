import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireFeature } from "@/lib/entitlement-middleware";

/* ------------------------------ AIProfile ------------------------------ */

export type AIProfile = {
  objective: string | null;
  level: string | null;
  preferences: Record<string, string | number | boolean | null>;
  preferred_voice: string | null;
  onboarding_completed: boolean;
};

export const getAIProfile = createServerFn({ method: "GET" })
  .middleware([requireFeature("gisele_ai")])
  .handler(async ({ context }): Promise<AIProfile | null> => {
    const { data } = await context.supabase
      .from("ai_profiles")
      .select("objective, level, preferences, preferred_voice, onboarding_completed")
      .eq("user_id", context.userId)
      .maybeSingle();
    if (!data) return null;
    return {
      objective: data.objective,
      level: data.level,
      preferences: (data.preferences ?? {}) as Record<string, string | number | boolean | null>,
      preferred_voice: data.preferred_voice,
      onboarding_completed: data.onboarding_completed,
    };
  });

export const saveAIProfile = createServerFn({ method: "POST" })
  .middleware([requireFeature("gisele_ai")])
  .inputValidator((input: unknown) =>
    z
      .object({
        objective: z.string().max(300).optional(),
        level: z.string().max(20).optional(),
        preferences: z.record(z.string(), z.union([z.string(), z.number(), z.boolean(), z.null()])).optional(),
        preferred_voice: z.string().max(60).optional(),
        onboarding_completed: z.boolean().optional(),
      })
      .parse(input ?? {}),
  )
  .handler(async ({ context, data }) => {
    const { error } = await context.supabase.from("ai_profiles").upsert(
      {
        user_id: context.userId,
        ...(data.objective !== undefined ? { objective: data.objective } : {}),
        ...(data.level !== undefined ? { level: data.level } : {}),
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ...(data.preferences !== undefined ? { preferences: data.preferences as any } : {}),
        ...(data.preferred_voice !== undefined ? { preferred_voice: data.preferred_voice } : {}),
        ...(data.onboarding_completed !== undefined
          ? { onboarding_completed: data.onboarding_completed }
          : {}),
      },
      { onConflict: "user_id" },
    );
    if (error) throw new Error(error.message);
    return { ok: true };
  });

/* --------------------------- VoiceSettings ----------------------------- */

export type RemoteVoiceSettings = {
  provider: string;
  voice_id: string;
  consent_status: string;
  support_language: string;
  rate: number;
  volume: number;
  auto_speak: boolean;
};

export const getVoiceSettings = createServerFn({ method: "GET" })
  .middleware([requireFeature("gisele_ai")])
  .handler(async ({ context }): Promise<RemoteVoiceSettings | null> => {
    const { data } = await context.supabase
      .from("ai_voice_settings")
      .select("provider, voice_id, consent_status, support_language, rate, volume, auto_speak")
      .eq("user_id", context.userId)
      .maybeSingle();
    return (data as RemoteVoiceSettings | null) ?? null;
  });

export const saveVoiceSettings = createServerFn({ method: "POST" })
  .middleware([requireFeature("gisele_ai")])
  .inputValidator((input: unknown) =>
    z
      .object({
        provider: z.enum(["openai", "elevenlabs"]).optional(),
        voice_id: z.string().max(60).optional(),
        consent_status: z.enum(["pending", "granted", "revoked"]).optional(),
        support_language: z.enum(["en", "bilingual", "pt"]).optional(),
        rate: z.number().min(0.5).max(2).optional(),
        volume: z.number().min(0).max(1).optional(),
        auto_speak: z.boolean().optional(),
      })
      .parse(input ?? {}),
  )
  .handler(async ({ context, data }) => {
    const { error } = await context.supabase
      .from("ai_voice_settings")
      .upsert(
        { user_id: context.userId, ...JSON.parse(JSON.stringify(data)) },
        { onConflict: "user_id" },
      );
    if (error) throw new Error(error.message);
    return { ok: true };
  });

/* ------------------------------ Missions ------------------------------- */

export type Mission = {
  id: string;
  key: string;
  title: string;
  context: string;
  objective: string;
  level: string;
  criteria: string[];
  focus: string;
  minutes: number;
};

export const getDailyMission = createServerFn({ method: "GET" })
  .middleware([requireFeature("gisele_ai")])
  .handler(async ({ context }): Promise<{ mission: Mission | null; all: Mission[] }> => {
    const { data } = await context.supabase
      .from("ai_missions")
      .select("id, key, title, context, objective, level, criteria, focus, minutes")
      .eq("is_active", true)
      .order("sort_order", { ascending: true });

    const all = (data ?? []).map((m) => ({
      ...m,
      criteria: Array.isArray(m.criteria) ? (m.criteria as string[]) : [],
    })) as Mission[];
    if (all.length === 0) return { mission: null, all };

    const dayIndex = Math.floor(Date.now() / 86_400_000) % all.length;
    return { mission: all[dayIndex] ?? null, all };
  });

/* ------------------------------- History ------------------------------- */

export type SessionHistoryItem = {
  id: string;
  thread_id: string | null;
  focus: string;
  session_type: string;
  summary: string | null;
  minutes: number;
  score: number | null;
  corrections: number;
  created_at: string;
};

export const getSessionHistory = createServerFn({ method: "GET" })
  .middleware([requireFeature("gisele_ai")])
  .handler(async ({ context }): Promise<SessionHistoryItem[]> => {
    const { data, error } = await context.supabase
      .from("gisele_sessions")
      .select("id, thread_id, focus, session_type, summary, minutes, score, corrections, created_at")
      .eq("user_id", context.userId)
      .order("created_at", { ascending: false })
      .limit(50);
    if (error) throw new Error(error.message);
    return (data ?? []).map((s) => ({
      id: s.id,
      thread_id: s.thread_id,
      focus: s.focus,
      session_type: s.session_type,
      summary: s.summary,
      minutes: s.minutes ?? 0,
      score: s.score,
      corrections: Array.isArray(s.corrections) ? s.corrections.length : 0,
      created_at: s.created_at,
    }));
  });

/* ------------------------------ Feedback ------------------------------- */

export type FeedbackItem = {
  id: string;
  category: string;
  observation: string;
  priority: number;
  created_at: string;
};

export const getFeedbackList = createServerFn({ method: "GET" })
  .middleware([requireFeature("gisele_ai")])
  .handler(async ({ context }): Promise<FeedbackItem[]> => {
    const { data, error } = await context.supabase
      .from("ai_feedback")
      .select("id, category, observation, priority, created_at")
      .eq("user_id", context.userId)
      .order("created_at", { ascending: false })
      .limit(50);
    if (error) throw new Error(error.message);
    return (data ?? []) as FeedbackItem[];
  });

export type SessionFeedbackDTO = import("@/lib/gisele-feedback-types").GiseleFeedback;

/** Gera o feedback estruturado da sessão atual (4 blocos + recomendações). */
export const requestSessionFeedback = createServerFn({ method: "POST" })
  .middleware([requireFeature("gisele_ai")])
  .inputValidator((input: unknown) => z.object({ threadId: z.string().uuid() }).parse(input))
  .handler(async ({ context, data }) => {
    const { generateSessionFeedback } = await import("@/lib/gisele-feedback.server");
    const result = await generateSessionFeedback(context.supabase, context.userId, data.threadId);
    return result as SessionFeedbackDTO;
  });

/* --------------------------- Recommendations --------------------------- */

export type RecommendationItem = {
  id: string;
  type: string;
  content: string;
  route: string | null;
  priority: number;
  status: string;
  created_at: string;
};

export const getRecommendations = createServerFn({ method: "GET" })
  .middleware([requireFeature("gisele_ai")])
  .handler(async ({ context }): Promise<RecommendationItem[]> => {
    const { data, error } = await context.supabase
      .from("ai_recommendations")
      .select("id, type, content, route, priority, status, created_at")
      .eq("user_id", context.userId)
      .order("created_at", { ascending: false })
      .limit(50);
    if (error) throw new Error(error.message);
    return (data ?? []) as RecommendationItem[];
  });

export const updateRecommendationStatus = createServerFn({ method: "POST" })
  .middleware([requireFeature("gisele_ai")])
  .inputValidator((input: unknown) =>
    z
      .object({
        id: z.string().uuid(),
        status: z.enum(["pending", "done", "dismissed"]),
      })
      .parse(input),
  )
  .handler(async ({ context, data }) => {
    const { error } = await context.supabase
      .from("ai_recommendations")
      .update({ status: data.status })
      .eq("id", data.id)
      .eq("user_id", context.userId);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

/* ------------------------------- Progress ------------------------------ */

export type GiseleProgress = import("@/lib/gisele-progress.server").ProgressDashboard;
export type GiseleReport = import("@/lib/gisele-progress.server").ProgressReport;

export const getGiseleProgress = createServerFn({ method: "GET" })
  .middleware([requireFeature("gisele_ai")])
  .handler(async ({ context }): Promise<GiseleProgress> => {
    const { buildProgressDashboard } = await import("@/lib/gisele-progress.server");
    return buildProgressDashboard(context.supabase, context.userId);
  });

/** Relatório periódico em 3 blocos: melhorou / vamos trabalhar / próxima missão. */
export const getGiseleReport = createServerFn({ method: "POST" })
  .middleware([requireFeature("gisele_ai")])
  .handler(async ({ context }): Promise<GiseleReport> => {
    const { generateProgressReport } = await import("@/lib/gisele-progress.server");
    return generateProgressReport(context.supabase, context.userId);
  });


/* --------------------- Histórico de sessões de voz --------------------- */

export type VoiceTurn = { role: "student" | "gisele"; text: string; at: string };
export type SoftCorrectionDTO = { original: string; better: string; why: string };

const TurnSchema = z.object({
  role: z.enum(["student", "gisele"]),
  text: z.string().max(4000),
  at: z.string(),
});

/** Autosave da transcrição a cada turno da conversa por voz. */
export const saveVoiceTranscript = createServerFn({ method: "POST" })
  .middleware([requireFeature("gisele_ai")])
  .inputValidator((input: unknown) =>
    z.object({ threadId: z.string().uuid(), turns: z.array(TurnSchema).max(400) }).parse(input),
  )
  .handler(async ({ context, data }) => {
    const { saveVoiceTranscript: save } = await import("@/lib/gisele-voice-history.server");
    return save(context.supabase, context.userId, data.threadId, data.turns);
  });

/** Encerra a sessão de voz gravando transcript, correções suaves e nível estimado. */
export const finalizeVoiceSession = createServerFn({ method: "POST" })
  .middleware([requireFeature("gisele_ai")])
  .inputValidator((input: unknown) =>
    z.object({ threadId: z.string().uuid(), turns: z.array(TurnSchema).max(400) }).parse(input),
  )
  .handler(async ({ context, data }) => {
    const { finalizeVoiceSession: finalize } = await import("@/lib/gisele-voice-history.server");
    return finalize(context.supabase, context.userId, data.threadId, data.turns);
  });

export type SessionDetail = {
  id: string;
  thread_id: string | null;
  focus: string;
  session_type: string;
  summary: string | null;
  minutes: number;
  estimated_level: string | null;
  transcript: VoiceTurn[];
  soft_corrections: SoftCorrectionDTO[];
  created_at: string;
};

/** Detalhe de uma sessão para revisão posterior. */
export const getSessionDetail = createServerFn({ method: "GET" })
  .middleware([requireFeature("gisele_ai")])
  .inputValidator((input: unknown) => z.object({ sessionId: z.string().uuid() }).parse(input))
  .handler(async ({ context, data }): Promise<SessionDetail | null> => {
    const { data: s, error } = await context.supabase
      .from("gisele_sessions")
      .select(
        "id, thread_id, focus, session_type, summary, minutes, estimated_level, transcript, soft_corrections, created_at",
      )
      .eq("id", data.sessionId)
      .eq("user_id", context.userId)
      .maybeSingle();
    if (error) throw new Error(error.message);
    if (!s) return null;
    return {
      id: s.id,
      thread_id: s.thread_id,
      focus: s.focus,
      session_type: s.session_type,
      summary: s.summary,
      minutes: s.minutes ?? 0,
      estimated_level: s.estimated_level,
      transcript: (Array.isArray(s.transcript) ? s.transcript : []) as unknown as VoiceTurn[],
      soft_corrections: (Array.isArray(s.soft_corrections)
        ? s.soft_corrections
        : []) as unknown as SoftCorrectionDTO[],
      created_at: s.created_at,
    };
  });
