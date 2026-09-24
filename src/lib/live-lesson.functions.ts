import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireFeature } from "@/lib/entitlement-middleware";
import type { GiseleFeedback } from "@/lib/gisele-feedback-types";
import type { LiveLessonScript } from "@/lib/live-lesson/script";
import { ANY, COURSE_LEVELS, LIVE_PARTS, type LiveLessonMedia, type LiveLessonProgress } from "@/lib/live-lesson/shared";

const target = z.object({
  course: z.enum(COURSE_LEVELS),
  unitCode: z.string().min(3).max(60),
  part: z.enum(LIVE_PARTS),
});

export const getLiveLesson = createServerFn({ method: "POST" })
  .middleware([requireFeature("gisele_ai")])
  .inputValidator((input: unknown) => target.parse(input))
  .handler(async ({ context, data }): Promise<{ script: LiveLessonScript; media: LiveLessonMedia[]; progress: LiveLessonProgress | null }> => {
    const { loadLiveLesson } = await import("@/lib/live-lesson-data.server");
    return loadLiveLesson(context.supabase, context.userId, data.course, data.unitCode, data.part);
  });

export const evaluateLiveLessonAnswer = createServerFn({ method: "POST" })
  .middleware([requireFeature("gisele_ai")])
  .inputValidator((input: unknown) =>
    z
      .object({
        course: z.enum(COURSE_LEVELS),
        unitTitle: z.string().max(200),
        stageLabel: z.string().max(80),
        question: z.string().max(2000),
        answer: z.string().min(1).max(4000),
        spoken: z.boolean(),
      })
      .parse(input),
  )
  .handler(async ({ data }): Promise<GiseleFeedback> => {
    const { evaluateLiveAnswer } = await import("@/lib/live-lesson.server");
    return evaluateLiveAnswer({ ...data, level: data.course });
  });

export const saveLiveLessonProgress = createServerFn({ method: "POST" })
  .middleware([requireFeature("gisele_ai")])
  .inputValidator((input: unknown) =>
    target
      .extend({
        stagesDone: z.array(z.string().max(30)).max(20),
        speakingAttempts: z.number().int().min(0).max(500),
        vocabulary: z.array(z.string().transform((s) => s.slice(0, 200))).max(60),
        grammar: z.array(z.string().transform((s) => s.slice(0, 300))).max(20),
        pronunciationScore: z.number().int().min(0).max(100).nullable(),
        fluencyNote: z.string().max(600).nullable(),
        challengeResult: z.record(z.string(), z.unknown()).nullable(),
        confidence: z.number().int().min(1).max(5).nullable(),
        summary: z.record(z.string(), z.unknown()).nullable(),
        completed: z.boolean(),
      })
      .parse(input),
  )
  .handler(async ({ context, data }): Promise<LiveLessonProgress> => {
    const { persistLiveLessonProgress } = await import("@/lib/live-lesson-data.server");
    return persistLiveLessonProgress(context.supabase, context.userId, data);
  });

export const listLiveLessonMedia = createServerFn({ method: "POST" })
  .middleware([requireFeature("gisele_ai")])
  .inputValidator((input: unknown) => z.object({}).parse(input ?? {}))
  .handler(async ({ context }): Promise<LiveLessonMedia[]> => {
    const { listAllMedia } = await import("@/lib/live-lesson-data.server");
    return listAllMedia(context.supabase, context.userId);
  });

export const upsertLiveLessonMedia = createServerFn({ method: "POST" })
  .middleware([requireFeature("gisele_ai")])
  .inputValidator((input: unknown) =>
    z
      .object({
        course: z.enum(COURSE_LEVELS),
        // "*" = vídeo global reutilizável em qualquer aula
        unitCode: z.union([z.literal(ANY), z.string().min(3).max(60)]),
        part: z.union([z.literal(ANY), z.enum(LIVE_PARTS)]),
        // "*" = vale para todas as etapas da aula
        stage: z.union([z.literal(ANY), z.string().min(3).max(30)]),
        // vazio = etapa em modo retrato + voz clonada (upload é opcional)
        videoUrl: z.union([z.literal(""), z.string().url().max(600)]),
        posterUrl: z.string().url().max(600).nullable(),
        caption: z.string().max(300).nullable(),
      })
      .parse(input),
  )
  .handler(async ({ context, data }): Promise<LiveLessonMedia> => {
    const { saveMedia } = await import("@/lib/live-lesson-data.server");
    return saveMedia(context.supabase, context.userId, data);
  });

export const deleteLiveLessonMedia = createServerFn({ method: "POST" })
  .middleware([requireFeature("gisele_ai")])
  .inputValidator((input: unknown) => z.object({ id: z.string().uuid() }).parse(input))
  .handler(async ({ context, data }): Promise<{ ok: true }> => {
    const { removeMedia } = await import("@/lib/live-lesson-data.server");
    return removeMedia(context.supabase, context.userId, data.id);
  });
