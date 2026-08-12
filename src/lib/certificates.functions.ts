import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { buildCertificates, type Certificate } from "./certificates.server";
import { BEGINNER_ASSESSMENT_ID, BEGINNER_PASS_SCORE } from "./beginner-assessment";
import { BEGINNER_COURSE_ID, BEGINNER_PARTS_TOTAL } from "./beginner-course";
import { INTERMEDIATE_COURSE_ID, INTERMEDIATE_PARTS_TOTAL } from "./intermediate-course";
import { INTERMEDIATE_ASSESSMENT_ID, INTERMEDIATE_PASS_SCORE } from "./intermediate-assessment";

export type { Certificate };

export const getCertificates = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }): Promise<{ studentName: string; certificates: Certificate[] }> => {
    const supabase = context.supabase as any;
    const userId = context.userId as string;

    const [
      profileRes,
      placementRes,
      interviewsRes,
      exercisesRes,
      chatRes,
      courseRes,
      intermediateRes,
    ] = await Promise.all([
      supabase.from("profiles").select("full_name, english_level").eq("id", userId).maybeSingle(),
      supabase
        .from("placement_tests")
        .select("level, score, completed_at")
        .eq("completed", true)
        .order("completed_at", { ascending: false }),
      supabase.from("interview_sessions").select("score, completed_at").eq("completed", true),
      supabase.from("daily_exercises").select("score, updated_at").eq("completed", true),
      supabase.from("chat_messages").select("id", { count: "exact", head: true }).eq("role", "user"),
      supabase
        .from("course_progress")
        .select("lesson_id, completed, quiz_score, completed_at, updated_at")
        .eq("user_id", userId)
        .eq("course_id", BEGINNER_COURSE_ID),
      supabase
        .from("course_progress")
        .select("lesson_id, completed, quiz_score, completed_at, updated_at")
        .eq("user_id", userId)
        .eq("course_id", INTERMEDIATE_COURSE_ID),
    ]);

    const courseRows = (courseRes.data ?? []) as {
      lesson_id: string;
      completed: boolean;
      quiz_score: number | null;
      completed_at: string | null;
      updated_at: string | null;
    }[];
    const intermediateRows = (intermediateRes.data ?? []) as {
      lesson_id: string;
      completed: boolean;
      quiz_score: number | null;
      completed_at: string | null;
      updated_at: string | null;
    }[];
    const intermediateAssessment =
      intermediateRows.find((row) => row.lesson_id === INTERMEDIATE_ASSESSMENT_ID) ?? null;
    const intermediateDone = intermediateRows.filter(
      (row) => row.completed && row.lesson_id !== INTERMEDIATE_ASSESSMENT_ID,
    ).length;
    const assessmentRow = courseRows.find((row) => row.lesson_id === BEGINNER_ASSESSMENT_ID) ?? null;
    const lessonsCompleted = courseRows.filter(
      (row) => row.completed && row.lesson_id !== BEGINNER_ASSESSMENT_ID,
    ).length;

    return {
      studentName: (profileRes.data?.full_name as string | null) ?? "Aluno Speak2Co",
      certificates: buildCertificates({
        userId,
        placements: placementRes.data ?? [],
        interviews: interviewsRes.data ?? [],
        exercises: exercisesRes.data ?? [],
        chatMessages: chatRes.count ?? 0,
        beginnerLessonsCompleted: lessonsCompleted,
        beginnerLessonsTotal: BEGINNER_PARTS_TOTAL,
        beginnerAssessmentScore: assessmentRow?.quiz_score ?? null,
        beginnerAssessmentAt: assessmentRow?.completed_at ?? assessmentRow?.updated_at ?? null,
        beginnerPassScore: BEGINNER_PASS_SCORE,
        intermediateLessonsCompleted: intermediateDone,
        intermediateLessonsTotal: INTERMEDIATE_PARTS_TOTAL,
        intermediateAssessmentScore: intermediateAssessment?.quiz_score ?? null,
        intermediateAssessmentAt:
          intermediateAssessment?.completed_at ?? intermediateAssessment?.updated_at ?? null,
        intermediatePassScore: INTERMEDIATE_PASS_SCORE,
      }),
    };
  });
