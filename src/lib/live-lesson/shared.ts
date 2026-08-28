import type { CourseLevel } from "@/lib/live-lesson/script";

export const COURSE_LEVELS = ["beginner", "intermediate", "upper"] as const;
export const LIVE_PARTS = ["discover", "communicate"] as const;

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

export type LiveLessonProgress = {
  stagesDone: string[];
  speakingAttempts: number;
  pronunciationScore: number | null;
  confidence: number | null;
  completed: boolean;
};
