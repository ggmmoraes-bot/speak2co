import { Volume2 } from "lucide-react";
import { resolveAvatar } from "@/components/live-lesson/avatar-provider";
import type { LiveLessonMedia } from "@/lib/live-lesson/shared";
import type { LiveStageKey } from "@/lib/live-lesson/script";

/**
 * Palco da instrutora: vídeo real da Gisele quando cadastrado para o estágio,
 * ou o retrato oficial com indicação de fala gerada por IA.
 */
export function InstructorStage({
  media,
  stage,
  speaking,
}: {
  media: LiveLessonMedia[];
  stage: LiveStageKey;
  speaking: boolean;
}) {
  const avatar = resolveAvatar(media, stage);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-gold/30 bg-secondary/30">
      {avatar.kind === "video" ? (
        <video
          key={avatar.videoUrl}
          src={avatar.videoUrl}
          poster={avatar.posterUrl ?? undefined}
          controls
          playsInline
          className="aspect-video w-full bg-background object-cover"
        />
      ) : (
        <div className="flex items-center gap-4 p-5">
          <span className="relative flex h-20 w-20 shrink-0 items-center justify-center">
            <img
              src={avatar.posterUrl}
              alt="Gisele, fundadora e instrutora da Speak2Co"
              className="h-20 w-20 rounded-full border border-gold/40 object-cover"
            />
            {speaking && (
              <span className="absolute inset-0 animate-ping rounded-full border-2 border-gold/50" aria-hidden />
            )}
          </span>
          <div>
            <p className="text-sm font-semibold text-foreground">Gisele · Speak2Co</p>
            <p className="text-xs text-muted-foreground">Founder &amp; Instructor</p>
            <p className="mt-1 flex items-center gap-1 text-[11px] text-gold">
              <Volume2 className="h-3 w-3" /> {speaking ? "Speaking…" : "Ready"}
            </p>
          </div>
        </div>
      )}
      {avatar.kind === "video" && avatar.caption && (
        <p className="px-4 py-2 text-xs text-muted-foreground">{avatar.caption}</p>
      )}
    </div>
  );
}
