import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireFeature } from "@/lib/entitlement-middleware";

export type CourseLessonProgress = {
  lessonId: string;
  completed: boolean;
  quizScore: number | null;
  pronunciationScore: number | null;
  vocabularyMastered: number;
  grammarMastered: boolean;
  sectionsDone: string[];
  updatedAt: string | null;
};

const courseSchema = z.object({ courseId: z.string() });

const saveSchema = z.object({
  courseId: z.string(),
  lessonId: z.string(),
  completed: z.boolean().optional(),
  quizScore: z.number().int().min(0).max(100).nullable().optional(),
  pronunciationScore: z.number().int().min(0).max(100).nullable().optional(),
  vocabularyMastered: z.number().int().min(0).optional(),
  grammarMastered: z.boolean().optional(),
  sectionsDone: z.array(z.string()).optional(),
});

/** Progresso do aluno em todas as lições do curso. */
export const getCourseProgress = createServerFn({ method: "POST" })
  .middleware([requireFeature("courses_beginner")])
  .inputValidator((input: unknown) => courseSchema.parse(input))
  .handler(async ({ context, data }): Promise<CourseLessonProgress[]> => {
    const { data: rows, error } = await context.supabase
      .from("course_progress")
      .select("*")
      .eq("user_id", context.userId)
      .eq("course_id", data.courseId);
    if (error) throw new Error(error.message);
    return (rows ?? []).map((row) => ({
      lessonId: row.lesson_id,
      completed: row.completed,
      quizScore: row.quiz_score,
      pronunciationScore: row.pronunciation_score,
      vocabularyMastered: row.vocabulary_mastered,
      grammarMastered: row.grammar_mastered,
      sectionsDone: (row.sections_done ?? []) as string[],
      updatedAt: row.updated_at,
    }));
  });

/** Salva (upsert) o progresso de uma lição. */
export const saveCourseProgress = createServerFn({ method: "POST" })
  .middleware([requireFeature("courses_beginner")])
  .inputValidator((input: unknown) => saveSchema.parse(input))
  .handler(async ({ context, data }) => {
    const completed = data.completed ?? false;
    const { error } = await context.supabase.from("course_progress").upsert(
      {
        user_id: context.userId,
        course_id: data.courseId,
        lesson_id: data.lessonId,
        completed,
        quiz_score: data.quizScore ?? null,
        pronunciation_score: data.pronunciationScore ?? null,
        vocabulary_mastered: data.vocabularyMastered ?? 0,
        grammar_mastered: data.grammarMastered ?? false,
        sections_done: (data.sectionsDone ?? []) as never,
        completed_at: completed ? new Date().toISOString() : null,
      },
      { onConflict: "user_id,course_id,lesson_id" },
    );
    if (error) throw new Error(error.message);
    return { ok: true };
  });
