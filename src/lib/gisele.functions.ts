import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireFeature } from "@/lib/entitlement-middleware";
import type { GiseleMemoryItem, StudentSnapshot } from "@/lib/gisele-context.server";

export const GISELE_FOCUSES = [
  "conversation",
  "pronunciation",
  "interview",
  "travel",
  "grammar",
  "vocabulary",
] as const;

export type GiseleFocus = (typeof GISELE_FOCUSES)[number];

export type GiseleThread = {
  id: string;
  title: string;
  created_at: string;
  updated_at: string;
};

export type NextStep = {
  id: string;
  titleEn: string;
  titlePt: string;
  to: string | null;
  focus: GiseleFocus | null;
};

export type GiseleOverview = {
  snapshot: StudentSnapshot;
  nextSteps: NextStep[];
  review: GiseleMemoryItem[];
  stats: { sessions: number; minutes: number; corrections: number };
};

/** Hub da mentoria: retrato do aluno, próximos passos e itens de revisão. */
export const getGiseleOverview = createServerFn({ method: "GET" })
  .middleware([requireFeature("gisele_ai")])
  .handler(async ({ context }): Promise<GiseleOverview> => {
    const { buildStudentSnapshot } = await import("@/lib/gisele-context.server");
    const { buildNextSteps } = await import("@/lib/gisele-next-steps.server");
    const snapshot = await buildStudentSnapshot(context.supabase, context.userId);

    const { data: sessions } = await context.supabase
      .from("gisele_sessions")
      .select("minutes, corrections")
      .eq("user_id", context.userId);

    const rows = sessions ?? [];
    return {
      snapshot,
      nextSteps: buildNextSteps(snapshot),
      review: snapshot.memory
        .filter((m) => m.kind === "review")
        .sort((a, b) => (a.review_at ?? "").localeCompare(b.review_at ?? ""))
        .slice(0, 8),
      stats: {
        sessions: rows.length,
        minutes: rows.reduce((sum, r) => sum + (r.minutes ?? 0), 0),
        corrections: rows.reduce(
          (sum, r) => sum + (Array.isArray(r.corrections) ? r.corrections.length : 0),
          0,
        ),
      },
    };
  });

export const getGiseleThreads = createServerFn({ method: "GET" })
  .middleware([requireFeature("gisele_ai")])
  .handler(async ({ context }) => {
    const { data, error } = await context.supabase
      .from("chat_threads")
      .select("id, title, created_at, updated_at")
      .eq("user_id", context.userId)
      .eq("product", "gisele")
      .order("updated_at", { ascending: false });
    if (error) throw new Error(error.message);
    return (data ?? []) as GiseleThread[];
  });

export const createGiseleThread = createServerFn({ method: "POST" })
  .middleware([requireFeature("gisele_ai")])
  .inputValidator((input: unknown) =>
    z
      .object({
        focus: z.enum(GISELE_FOCUSES).optional(),
        title: z.string().max(80).optional(),
        contextNote: z.string().max(400).optional(),
      })
      .parse(input ?? {}),
  )
  .handler(async ({ context, data }) => {
    const focus = data.focus ?? "conversation";
    const { FOCUS_LABEL } = await import("@/lib/gisele-focus");
    const { data: thread, error } = await context.supabase
      .from("chat_threads")
      .insert({
        user_id: context.userId,
        product: "gisele",
        title: data.title?.trim() || FOCUS_LABEL[focus].en,
      })
      .select("id, title, created_at, updated_at")
      .single();
    if (error) throw new Error(error.message);

    const { error: sessionError } = await context.supabase.from("gisele_sessions").insert({
      user_id: context.userId,
      thread_id: thread.id,
      focus,
      ...(data.contextNote ? { summary: data.contextNote } : {}),
    });
    if (sessionError) console.error("[gisele] session insert failed", sessionError.message);

    return thread as GiseleThread;
  });

export const deleteGiseleThread = createServerFn({ method: "POST" })
  .middleware([requireFeature("gisele_ai")])
  .inputValidator((input: unknown) => z.object({ threadId: z.string().uuid() }).parse(input))
  .handler(async ({ context, data }) => {
    const { error } = await context.supabase
      .from("chat_threads")
      .delete()
      .eq("id", data.threadId)
      .eq("user_id", context.userId)
      .eq("product", "gisele");
    if (error) throw new Error(error.message);
    return { ok: true };
  });

export const getGiseleThreadMessages = createServerFn({ method: "GET" })
  .middleware([requireFeature("gisele_ai")])
  .inputValidator((input: unknown) => z.object({ threadId: z.string().uuid() }).parse(input))
  .handler(async ({ context, data }) => {
    const { data: thread } = await context.supabase
      .from("chat_threads")
      .select("id")
      .eq("id", data.threadId)
      .eq("user_id", context.userId)
      .eq("product", "gisele")
      .maybeSingle();
    if (!thread) return [] as { id: string; role: string; parts: unknown[] }[];

    const { data: rows, error } = await context.supabase
      .from("chat_messages")
      .select("id, role, parts")
      .eq("thread_id", data.threadId)
      .order("created_at", { ascending: true });
    if (error) throw new Error(error.message);

    return (rows ?? []).map((row) => ({
      id: String(row.id),
      role: row.role,
      parts: Array.isArray(row.parts) ? (row.parts as unknown[]) : [{ type: "text", text: "" }],
    }));
  });

/** Sessão da thread atual (foco + resumo). */
export const getGiseleSession = createServerFn({ method: "GET" })
  .middleware([requireFeature("gisele_ai")])
  .inputValidator((input: unknown) => z.object({ threadId: z.string().uuid() }).parse(input))
  .handler(async ({ context, data }) => {
    const { data: session } = await context.supabase
      .from("gisele_sessions")
      .select("id, focus, summary, minutes, corrections")
      .eq("user_id", context.userId)
      .eq("thread_id", data.threadId)
      .maybeSingle();
    return session ?? null;
  });

/** Encerra a sessão: a Gisele resume o que foi praticado e grava a memória. */
export const closeGiseleSession = createServerFn({ method: "POST" })
  .middleware([requireFeature("gisele_ai")])
  .inputValidator((input: unknown) => z.object({ threadId: z.string().uuid() }).parse(input))
  .handler(async ({ context, data }) => {
    const { summarizeSession } = await import("@/lib/gisele-session.server");
    return summarizeSession(context.supabase, context.userId, data.threadId);
  });

/** Marca um item de revisão como praticado (revisão espaçada). */
export const completeReviewItem = createServerFn({ method: "POST" })
  .middleware([requireFeature("gisele_ai")])
  .inputValidator((input: unknown) => z.object({ id: z.string().uuid() }).parse(input))
  .handler(async ({ context, data }) => {
    const next = new Date();
    next.setDate(next.getDate() + 7);
    const { error } = await context.supabase
      .from("gisele_memory")
      .update({ review_at: next.toISOString() })
      .eq("id", data.id)
      .eq("user_id", context.userId);
    if (error) throw new Error(error.message);
    return { ok: true };
  });
