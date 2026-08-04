import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { z } from "zod";
import type { TravelFeedback } from "./speak2travel.functions";

export type TravelProgress = {
  trackId: string;
  briefingCompleted: boolean;
  currentIndex: number;
  answers: Record<string, string>;
  feedback: TravelFeedback | null;
  completed: boolean;
  updatedAt: string | null;
};

const saveSchema = z.object({
  trackId: z.string(),
  briefingCompleted: z.boolean(),
  currentIndex: z.number().int().min(0),
  answers: z.record(z.string(), z.string()),
  feedback: z.any().nullable().optional(),
  completed: z.boolean().optional(),
});

export const getTravelProgress = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) => z.object({ trackId: z.string() }).parse(input))
  .handler(async ({ context, data }): Promise<TravelProgress | null> => {
    const { data: row, error } = await context.supabase
      .from("travel_progress")
      .select("*")
      .eq("user_id", context.userId)
      .eq("track_id", data.trackId)
      .maybeSingle();
    if (error) throw new Error(error.message);
    if (!row) return null;
    return {
      trackId: row.track_id,
      briefingCompleted: row.briefing_completed,
      currentIndex: row.current_index,
      answers: (row.answers ?? {}) as Record<string, string>,
      feedback: (row.feedback ?? null) as TravelFeedback | null,
      completed: row.completed,
      updatedAt: row.updated_at,
    };
  });

export const saveTravelProgress = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) => saveSchema.parse(input))
  .handler(async ({ context, data }) => {
    const completed = data.completed ?? false;
    const { error } = await context.supabase.from("travel_progress").upsert(
      {
        user_id: context.userId,
        track_id: data.trackId,
        briefing_completed: data.briefingCompleted,
        current_index: data.currentIndex,
        answers: data.answers,
        feedback: (data.feedback ?? null) as never,
        completed,
        completed_at: completed ? new Date().toISOString() : null,
      },
      { onConflict: "user_id,track_id" },
    );
    if (error) throw new Error(error.message);
    return { ok: true };
  });

export const resetTravelProgress = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) => z.object({ trackId: z.string() }).parse(input))
  .handler(async ({ context, data }) => {
    const { error } = await context.supabase
      .from("travel_progress")
      .delete()
      .eq("user_id", context.userId)
      .eq("track_id", data.trackId);
    if (error) throw new Error(error.message);
    return { ok: true };
  });
