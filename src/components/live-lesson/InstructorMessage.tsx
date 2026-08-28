import { useState } from "react";
import { Lightbulb, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

/** Fala da instrutora: inglês em destaque, apoio em português e dica opcional. */
export function InstructorMessage({
  en,
  pt,
  hint,
  examples,
  onListen,
  speaking,
}: {
  en: string;
  pt?: string;
  hint?: string;
  examples?: string[];
  onListen: (text: string) => void;
  speaking: boolean;
}) {
  const [showHint, setShowHint] = useState(false);

  return (
    <section className="space-y-3 rounded-2xl border border-border/60 bg-background/40 p-5">
      <p className="text-base leading-relaxed text-foreground">{en}</p>
      {pt ? <p className="text-sm italic text-muted-foreground">{pt}</p> : null}

      {examples && examples.length > 0 && (
        <ul className="space-y-1 rounded-xl border border-gold/20 bg-secondary/30 p-3 text-sm text-foreground">
          {examples.map((e) => (
            <li key={e} className="flex items-center justify-between gap-2">
              <span>{e}</span>
              <button
                type="button"
                onClick={() => onListen(e)}
                className="text-xs text-gold hover:underline"
                aria-label={`Listen: ${e}`}
              >
                Listen
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="flex flex-wrap gap-2">
        <Button size="sm" variant="outline" onClick={() => onListen(en)} className="gap-1 rounded-full text-xs">
          <Play className="h-3.5 w-3.5" /> {speaking ? "Playing…" : "Listen to Gisele"}
        </Button>
        {hint ? (
          <Button
            size="sm"
            variant="ghost"
            onClick={() => setShowHint((v) => !v)}
            className="gap-1 rounded-full text-xs"
          >
            <Lightbulb className="h-3.5 w-3.5" /> Hint
          </Button>
        ) : null}
      </div>

      {showHint && hint ? (
        <p className="rounded-xl border border-gold/25 bg-gold/5 p-3 text-sm text-foreground">{hint}</p>
      ) : null}
    </section>
  );
}
