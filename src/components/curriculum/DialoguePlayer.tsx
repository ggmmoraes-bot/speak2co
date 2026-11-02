import { useRef, useState } from "react";
import { Loader2, Pause, Play, RotateCcw, Volume2 } from "lucide-react";
import { toast } from "sonner";
import { speakText, stopSpeaking } from "@/lib/voice-client";
import { voiceIdFor, voiceMapForDialogue } from "@/lib/curriculum/dialogue-voices";

export type DialoguePlayerLine = { who: string; en: string; pt: string };

/**
 * Reprodução do diálogo com duas vozes distintas (feminina/masculina),
 * destacando visualmente o personagem que está falando.
 */
export function DialoguePlayer({ lines }: { lines: DialoguePlayerLine[] }) {
  const [current, setCurrent] = useState<number | null>(null);
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const stopped = useRef(false);
  const voices = voiceMapForDialogue(lines.map((l) => l.who));

  async function playFrom(start: number) {
    stopped.current = false;
    setPlaying(true);
    for (let i = start; i < lines.length; i++) {
      if (stopped.current) break;
      const line = lines[i]!;
      setCurrent(i);
      try {
        setLoading(true);
        await speakText(line.en, { voice: voiceIdFor(voices[line.who] ?? "female") });
      } catch (e) {
        toast.error(e instanceof Error ? e.message : "Não foi possível tocar o áudio.");
        break;
      } finally {
        setLoading(false);
      }
    }
    if (!stopped.current) setCurrent(null);
    setPlaying(false);
  }

  function pause() {
    stopped.current = true;
    stopSpeaking();
    setPlaying(false);
  }

  return (
    <div className="rounded-2xl border border-gold/30 bg-gold/5 p-4">
      <div className="flex flex-wrap items-center gap-2">
        {playing ? (
          <button
            type="button"
            onClick={pause}
            className="inline-flex items-center gap-1.5 rounded-full bg-gold px-3 py-1.5 text-xs font-semibold text-primary-foreground"
          >
            {loading ? (
              <Loader2 className="h-3.5 w-3.5 animate-spin" />
            ) : (
              <Pause className="h-3.5 w-3.5" />
            )}
            Pause
          </button>
        ) : (
          <button
            type="button"
            onClick={() => playFrom(current ?? 0)}
            className="inline-flex items-center gap-1.5 rounded-full bg-gold px-3 py-1.5 text-xs font-semibold text-primary-foreground"
          >
            <Play className="h-3.5 w-3.5" />
            {current == null ? "Play dialogue" : "Resume"}
          </button>
        )}
        <button
          type="button"
          onClick={() => {
            stopped.current = true;
            stopSpeaking();
            setTimeout(() => void playFrom(0), 60);
          }}
          className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-semibold text-foreground/80 transition hover:border-gold/60"
        >
          <RotateCcw className="h-3.5 w-3.5" /> Restart
        </button>
        <span className="text-[11px] text-muted-foreground">
          Two AI voices · duas vozes distintas por personagem
        </span>
      </div>

      <ul className="mt-4 space-y-2">
        {lines.map((line, i) => {
          const active = current === i;
          return (
            <li
              key={`${line.who}-${i}`}
              className={`rounded-xl border p-3 transition ${
                active ? "border-gold bg-gold/10" : "border-border/60 bg-background/40"
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-gold">{line.who}</span>
                <span className="text-[10px] tracking-wide text-muted-foreground uppercase">
                  {voices[line.who] === "male" ? "male voice" : "female voice"}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    stopped.current = true;
                    stopSpeaking();
                    setTimeout(() => void playFrom(i), 60);
                  }}
                  className="ml-auto text-muted-foreground transition hover:text-gold"
                  aria-label={`Listen to ${line.who}`}
                >
                  <Volume2 className="h-3.5 w-3.5" />
                </button>
              </div>
              <p className="mt-1 text-sm text-foreground">{line.en}</p>
              <p className="text-xs text-muted-foreground italic">{line.pt}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
