import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";
import { assertAdmin } from "@/lib/admin-guard.server";
import type { UnitPartKey } from "@/lib/curriculum/types";
import { getLiveLessonScript } from "@/lib/live-lesson.server";
import type { CourseLevel, LiveLessonScript } from "@/lib/live-lesson/script";
import { findUnit } from "@/lib/live-lesson/units";
import { ANY, type LiveLessonMedia, type LiveLessonProgress } from "@/lib/live-lesson/shared";

type Client = SupabaseClient<Database>;
type MediaRow = Database["public"]["Tables"]["live_lesson_media"]["Row"];

const toMedia = (row: MediaRow): LiveLessonMedia => ({
  id: row.id,
  courseId: row.course_id,
  unitCode: row.unit_code,
  part: row.part,
  stage: row.stage,
  videoUrl: row.video_url,
  posterUrl: row.poster_url,
  caption: row.caption,
});

/** Carrega roteiro, vídeos da instrutora e progresso do aluno nesta parte. */
export async function loadLiveLesson(
  supabase: Client,
  userId: string,
  course: CourseLevel,
  unitCode: string,
  part: UnitPartKey,
): Promise<{ script: LiveLessonScript; media: LiveLessonMedia[]; progress: LiveLessonProgress | null }> {
  const unit = findUnit(course, unitCode);
  if (!unit) throw new Response("Unidade não encontrada.", { status: 404 });

  const [script, mediaRes, progressRes] = await Promise.all([
    getLiveLessonScript(supabase, course, unit, part),
    supabase
      .from("live_lesson_media")
      .select("*")
      .or(
        `and(course_id.eq.${course},unit_code.eq.${unit.code},part.eq.${part}),unit_code.eq.${ANY}`,
      ),
    supabase
      .from("live_lesson_progress")
      .select("stages_done, speaking_attempts, pronunciation_score, confidence, completed")
      .eq("user_id", userId)
      .eq("course_id", course)
      .eq("unit_code", unit.code)
      .eq("part", part)
      .maybeSingle(),
  ]);

  const p = progressRes.data;
  return {
    script,
    media: (mediaRes.data ?? []).map(toMedia),
    progress: p
      ? {
          stagesDone: p.stages_done ?? [],
          speakingAttempts: p.speaking_attempts ?? 0,
          pronunciationScore: p.pronunciation_score,
          confidence: p.confidence,
          completed: p.completed,
        }
      : null,
  };
}

export async function persistLiveLessonProgress(
  supabase: Client,
  userId: string,
  data: {
    course: CourseLevel;
    unitCode: string;
    part: UnitPartKey;
    stagesDone: string[];
    speakingAttempts: number;
    vocabulary: string[];
    grammar: string[];
    pronunciationScore: number | null;
    fluencyNote: string | null;
    challengeResult: Record<string, unknown> | null;
    confidence: number | null;
    summary: Record<string, unknown> | null;
    completed: boolean;
  },
): Promise<LiveLessonProgress> {
  const { error } = await supabase.from("live_lesson_progress").upsert(
    {
      user_id: userId,
      course_id: data.course,
      unit_code: data.unitCode.toUpperCase(),
      part: data.part,
      stages_done: data.stagesDone,
      speaking_attempts: data.speakingAttempts,
      vocabulary_practiced: data.vocabulary,
      grammar_practiced: data.grammar,
      pronunciation_score: data.pronunciationScore,
      fluency_note: data.fluencyNote,
      challenge_result: data.challengeResult as never,
      confidence: data.confidence,
      summary: data.summary as never,
      completed: data.completed,
      completed_at: data.completed ? new Date().toISOString() : null,
    },
    { onConflict: "user_id,course_id,unit_code,part" },
  );
  if (error) throw new Error("Não foi possível salvar o progresso da aula.");

  return {
    stagesDone: data.stagesDone,
    speakingAttempts: data.speakingAttempts,
    pronunciationScore: data.pronunciationScore,
    confidence: data.confidence,
    completed: data.completed,
  };
}

/* --------------------------- Administração --------------------------- */

const requireAdmin = (supabase: Client, userId: string) =>
  assertAdmin({ supabase: supabase as unknown as Parameters<typeof assertAdmin>[0]["supabase"], userId });

export async function listAllMedia(supabase: Client, userId: string): Promise<LiveLessonMedia[]> {
  await requireAdmin(supabase, userId);
  const { data } = await supabase
    .from("live_lesson_media")
    .select("*")
    .order("course_id")
    .order("unit_code")
    .order("part");
  return (data ?? []).map(toMedia);
}

export async function saveMedia(
  supabase: Client,
  userId: string,
  data: {
    course: CourseLevel;
    unitCode: string;
    part: UnitPartKey | typeof ANY;
    stage: string;
    /** Opcional: vazio mantém a etapa em modo retrato + voz clonada. */
    videoUrl: string;
    posterUrl: string | null;
    caption: string | null;
  },
): Promise<LiveLessonMedia> {
  await requireAdmin(supabase, userId);
  const isGlobal = data.unitCode === ANY;
  const { data: row, error } = await supabase
    .from("live_lesson_media")
    .upsert(
      {
        course_id: isGlobal ? ANY : data.course,
        unit_code: isGlobal ? ANY : data.unitCode.toUpperCase(),
        part: isGlobal ? ANY : data.part,
        stage: data.stage,
        video_url: data.videoUrl.trim(),
        poster_url: data.posterUrl,
        caption: data.caption,
      },
      { onConflict: "course_id,unit_code,part,stage" },
    )
    .select("*")
    .single();
  if (error || !row) throw new Error("Não foi possível salvar o vídeo da aula.");
  return toMedia(row);
}

export async function removeMedia(supabase: Client, userId: string, id: string): Promise<{ ok: true }> {
  await requireAdmin(supabase, userId);
  const { error } = await supabase.from("live_lesson_media").delete().eq("id", id);
  if (error) throw new Error("Não foi possível remover o vídeo.");
  return { ok: true };
}
