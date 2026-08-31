import { useEffect, useRef, useState } from "react";
import { Loader2, Square, Volume2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { speakText, stopSpeaking } from "@/lib/voice-client";
import { useVoiceSettings } from "@/lib/use-voice-settings";

/**
 * Botão oficial de áudio da GiseleAI.
 * Padrão global: TEXTO DA GISELE AI → "Listen to Gisele AI".
 * Reutiliza a infraestrutura de TTS existente (voz oficial da GiseleAI).
 */
export function ListenToGiseleButton({
  text,
  size = "default",
  className,
}: {
  text: string;
  size?: "sm" | "default";
  className?: string;
}) {
  const { settings: voice } = useVoiceSettings();
  const [state, setState] = useState<"idle" | "loading" | "playing">("idle");
  const alive = useRef(true);

  useEffect(() => {
    alive.current = true;
    return () => {
      alive.current = false;
    };
  }, []);

  async function play() {
    if (state !== "idle") {
      stopSpeaking();
      setState("idle");
      return;
    }
    const value = text.trim();
    if (!value) return;
    try {
      setState("loading");
      stopSpeaking();
      const promise = speakText(value, {
        voice: voice.voice,
        provider: voice.ttsProvider,
        rate: voice.rate,
        volume: voice.volume,
        scope: "gisele",
      });
      if (alive.current) setState("playing");
      await promise;
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Não foi possível reproduzir o áudio.");
    } finally {
      if (alive.current) setState("idle");
    }
  }

  const label =
    state === "loading" ? "Loading…" : state === "playing" ? "Playing…" : "Listen to Gisele AI";

  return (
    <Button
      type="button"
      onClick={play}
      aria-label={`Listen to Gisele AI: ${text}`}
      className={cn(
        "btn-gold group inline-flex min-h-11 items-center gap-2 rounded-full px-4 font-semibold shadow-md shadow-gold/20 transition-transform active:scale-[0.98]",
        size === "sm" ? "text-xs" : "text-sm",
        state === "playing" && "ring-2 ring-gold/60",
        className,
      )}
    >
      {state === "loading" ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : state === "playing" ? (
        <Square className="h-4 w-4 fill-current" />
      ) : (
        <Volume2 className="h-4 w-4" />
      )}
      <span>{label}</span>
      {state === "playing" && (
        <span className="flex items-end gap-[2px]" aria-hidden>
          <span className="h-2 w-[3px] animate-pulse rounded-full bg-current" />
          <span className="h-3 w-[3px] animate-pulse rounded-full bg-current [animation-delay:150ms]" />
          <span className="h-1.5 w-[3px] animate-pulse rounded-full bg-current [animation-delay:300ms]" />
        </span>
      )}
    </Button>
  );
}
