import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireFeature } from "@/lib/entitlement-middleware";
import { ACTIVITY_KINDS } from "@/lib/gisele-activity-kinds";
import type { GiseleFeedback } from "@/lib/gisele-feedback-types";
import type {
  CorrectionResult,
  FocusAreasResult,
  GiseleActivity,
  GiseleLesson,
  LearningNote,
  RephraseResult,
} from "@/lib/gisele-activities.server";

export type {
  CorrectionResult,
  FocusAreasResult,
  GiseleActivity,
  GiseleLesson,
  LearningNote,
  RephraseResult,
};

export const generateGiseleActivity = createServerFn({ method: "POST" })
  .middleware([requireFeature("gisele_ai")])
  .inputValidator((input: unknown) =>
    z.object({ kind: z.enum(ACTIVITY_KINDS), topic: z.string().max(300).optional() }).parse(input),
  )
  .handler(async ({ context, data }): Promise<GiseleActivity> => {
    const { generateActivity } = await import("@/lib/gisele-activities.server");
    return generateActivity(context.supabase, context.userId, data.kind, data.topic);
  });

export const evaluateGiseleAnswer = createServerFn({ method: "POST" })
  .middleware([requireFeature("gisele_ai")])
  .inputValidator((input: unknown) =>
    z
      .object({
        activityTitle: z.string().max(200),
        question: z.string().max(2000),
        answer: z.string().min(1).max(6000),
        mode: z.string().max(40).optional(),
      })
      .parse(input),
  )
  .handler(async ({ context, data }): Promise<GiseleFeedback> => {
    const { evaluateAnswer } = await import("@/lib/gisele-activities.server");
    return evaluateAnswer(context.supabase, context.userId, data);
  });

export const giseleRephrase = createServerFn({ method: "POST" })
  .middleware([requireFeature("gisele_ai")])
  .inputValidator((input: unknown) => z.object({ text: z.string().min(1).max(1000) }).parse(input))
  .handler(async ({ data }): Promise<RephraseResult> => {
    const { rephrase } = await import("@/lib/gisele-activities.server");
    return rephrase(data.text);
  });

export const giseleCorrectMe = createServerFn({ method: "POST" })
  .middleware([requireFeature("gisele_ai")])
  .inputValidator((input: unknown) => z.object({ text: z.string().min(1).max(1000) }).parse(input))
  .handler(async ({ data }): Promise<CorrectionResult> => {
    const { correctMe } = await import("@/lib/gisele-activities.server");
    return correctMe(data.text);
  });

export const createGiseleLesson = createServerFn({ method: "POST" })
  .middleware([requireFeature("gisele_ai")])
  .inputValidator((input: unknown) =>
    z.object({ topic: z.string().max(300).optional() }).parse(input ?? {}),
  )
  .handler(async ({ context, data }): Promise<GiseleLesson> => {
    const { createLesson } = await import("@/lib/gisele-activities.server");
    return createLesson(context.supabase, context.userId, data.topic);
  });

export const getGiseleFocusAreas = createServerFn({ method: "GET" })
  .middleware([requireFeature("gisele_ai")])
  .handler(async ({ context }): Promise<FocusAreasResult> => {
    const { buildFocusAreas } = await import("@/lib/gisele-activities.server");
    return buildFocusAreas(context.supabase, context.userId);
  });

export const getGiseleNotes = createServerFn({ method: "GET" })
  .middleware([requireFeature("gisele_ai")])
  .handler(async ({ context }): Promise<LearningNote[]> => {
    const { listLearningNotes } = await import("@/lib/gisele-activities.server");
    return listLearningNotes(context.supabase, context.userId);
  });

export const addGiseleNote = createServerFn({ method: "POST" })
  .middleware([requireFeature("gisele_ai")])
  .handler(async ({ context }): Promise<LearningNote | null> => {
    const { writeLearningNote } = await import("@/lib/gisele-activities.server");
    return writeLearningNote(context.supabase, context.userId);
  });
