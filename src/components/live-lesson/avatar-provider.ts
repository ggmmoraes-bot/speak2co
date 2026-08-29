import giseleArt from "@/assets/gisele-ai-art.png.asset.json";
import { ANY, type LiveLessonMedia } from "@/lib/live-lesson/shared";
import type { LiveStageKey } from "@/lib/live-lesson/script";

/**
 * Adaptador híbrido de avatar da instrutora.
 *
 * Ordem de prioridade:
 * 1. vídeo específico da etapa daquela aula;
 * 2. vídeo da aula inteira (stage = "*");
 * 3. vídeo global reutilizável (ex.: Global Gisele Intro / Closing);
 * 4. retrato oficial + voz clonada + roteiro gerado (sempre funciona).
 */
export type AvatarSource =
  | { kind: "video"; videoUrl: string; posterUrl: string | null; caption: string | null }
  | { kind: "portrait"; posterUrl: string };

export const GISELE_PORTRAIT = giseleArt.url;

const hasVideo = (m: LiveLessonMedia | undefined): m is LiveLessonMedia => Boolean(m?.videoUrl?.trim());

export function resolveAvatar(media: LiveLessonMedia[], stage: LiveStageKey): AvatarSource {
  const lessonScoped = media.filter((m) => m.unitCode !== ANY);
  const globals = media.filter((m) => m.unitCode === ANY);

  const match =
    lessonScoped.find((m) => m.stage === stage) ??
    lessonScoped.find((m) => m.stage === ANY) ??
    globals.find((m) => m.stage === stage) ??
    globals.find((m) => m.stage === ANY);

  if (hasVideo(match)) {
    return { kind: "video", videoUrl: match.videoUrl, posterUrl: match.posterUrl, caption: match.caption };
  }
  const poster = match?.posterUrl?.trim();
  return { kind: "portrait", posterUrl: poster || GISELE_PORTRAIT };
}
