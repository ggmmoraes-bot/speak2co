import giseleArt from "@/assets/gisele-ai-art.png.asset.json";
import type { LiveLessonMedia } from "@/lib/live-lesson/shared";
import type { LiveStageKey } from "@/lib/live-lesson/script";

/**
 * Adaptador de avatar: hoje resolve os vídeos reais gravados pela Gisele
 * (cadastrados na administração). Quando não há vídeo para o estágio, cai no
 * retrato oficial + voz clonada — sem quebrar a aula.
 */
export type AvatarSource =
  | { kind: "video"; videoUrl: string; posterUrl: string | null; caption: string | null }
  | { kind: "portrait"; posterUrl: string };

export const GISELE_PORTRAIT = giseleArt.url;

export function resolveAvatar(media: LiveLessonMedia[], stage: LiveStageKey): AvatarSource {
  const match = media.find((m) => m.stage === stage);
  if (match) {
    return { kind: "video", videoUrl: match.videoUrl, posterUrl: match.posterUrl, caption: match.caption };
  }
  return { kind: "portrait", posterUrl: GISELE_PORTRAIT };
}
