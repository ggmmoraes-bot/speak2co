import type { CourseLevel } from "@/lib/live-lesson/script";

export const COURSE_LEVELS = ["beginner", "intermediate", "upper"] as const;
export const LIVE_PARTS = ["discover", "communicate"] as const;

/** Curinga usado para vídeos reutilizáveis (globais ou da aula inteira). */
export const ANY = "*";

export type LiveLessonMedia = {
  id: string;
  courseId: CourseLevel | string;
  unitCode: string;
  part: string;
  stage: string;
  videoUrl: string;
  posterUrl: string | null;
  caption: string | null;
};

/** Abrangência do vídeo cadastrado. */
export type MediaScope = "global" | "lesson" | "stage";

export function mediaScope(m: Pick<LiveLessonMedia, "unitCode" | "stage">): MediaScope {
  if (m.unitCode === ANY) return "global";
  return m.stage === ANY ? "lesson" : "stage";
}

export const MEDIA_SCOPE_LABEL: Record<MediaScope, string> = {
  global: "Vídeo global (reutilizável)",
  lesson: "Vídeo da aula (todas as etapas)",
  stage: "Vídeo da etapa",
};

/** Estado de configuração exibido na administração. */
export type MediaStatus = "video" | "portrait" | "missing";

export const MEDIA_STATUS_LABEL: Record<MediaStatus, string> = {
  video: "VIDEO AVAILABLE",
  portrait: "VOICE + PORTRAIT MODE",
  missing: "NOT CONFIGURED",
};

export function mediaStatus(m?: Pick<LiveLessonMedia, "videoUrl"> | null): MediaStatus {
  if (!m) return "missing";
  return m.videoUrl.trim() ? "video" : "portrait";
}

export type LiveLessonProgress = {
  stagesDone: string[];
  speakingAttempts: number;
  pronunciationScore: number | null;
  confidence: number | null;
  completed: boolean;
};
