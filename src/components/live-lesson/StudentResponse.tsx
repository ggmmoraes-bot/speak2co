import { Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { VoiceRecorder } from "@/components/live-lesson/VoiceRecorder";
import type { StageInteraction } from "@/lib/live-lesson/script";

/** Resposta do aluno: fala (STT) e/ou texto, conforme o estágio. */
export function StudentResponse({
  value,
  onChange,
  onSubmit,
  interaction,
  busy,
  promptEn,
  promptPt,
}: {
  value: string;
  onChange: (v: string) => void;
  onSubmit: () => void;
  interaction: StageInteraction;
  busy: boolean;
  promptEn: string;
  promptPt?: string;
}) {
  return (
    <section className="space-y-3 rounded-2xl border border-gold/25 bg-secondary/25 p-5">
      <div>
        <p className="text-sm font-semibold text-foreground">{promptEn}</p>
        {promptPt ? <p className="text-xs italic text-muted-foreground">{promptPt}</p> : null}
      </div>

      {interaction !== "speak" && (
        <Textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Your answer in English…"
          className="min-h-24"
        />
      )}

      {interaction === "speak" && value ? (
        <p className="rounded-xl border border-border/60 bg-background/40 p-3 text-sm text-foreground">{value}</p>
      ) : null}

      <div className="flex flex-wrap gap-2">
        <VoiceRecorder onTranscript={(t) => onChange(value ? `${value} ${t}`.trim() : t)} />
        <Button
          size="sm"
          onClick={onSubmit}
          disabled={busy || !value.trim()}
          className="btn-gold gap-1 rounded-full text-xs font-semibold"
        >
          {busy ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Send className="h-3.5 w-3.5" />}
          Send to Gisele
        </Button>
      </div>
    </section>
  );
}
