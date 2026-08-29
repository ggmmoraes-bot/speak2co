import { useMemo, useRef, useState } from "react";
import { Check, Loader2, Mic, RotateCcw, Square, Volume2, X } from "lucide-react";
import { toast } from "sonner";
import { AltHeading } from "@/components/AltHeading";
import { MicRecorder } from "@/lib/audio-recorder";
import { checkPronunciation, speakText } from "@/lib/voice-client";
import {
  buildUnitDrills,
  SPEAK2DRILL_TOTAL,
  type DrillItem,
} from "@/lib/curriculum/speak2drill";
import type { CourseUnit } from "@/lib/curriculum/types";

/**
 * Speak2Drill — fluência por substituição estruturada, gerada automaticamente
 * a partir do conteúdo da própria unidade (Part 2 — Communicate).
 */
export function Speak2Drill({ unit }: { unit: CourseUnit }) {
  const items = useMemo(() => buildUnitDrills(unit), [unit]);
  const [started, setStarted] = useState(false);
  const [index, setIndex] = useState(0);
  // 0 = frase completa · 1..3 = drills · 4 = respostas
  const [stage, setStage] = useState(0);
  const [hits, setHits] = useState(0);
  const [tries, setTries] = useState(0);
  const [done, setDone] = useState(false);
  const [busy, setBusy] = useState(false);
  const [recording, setRecording] = useState(false);
  const [feedback, setFeedback] = useState<{ score: number; transcript: string } | null>(null);
  const recorderRef = useRef<MicRecorder | null>(null);

  const item: DrillItem | undefined = items[index];

  async function play(text: string) {
    try {
      await speakText(text);
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Audio unavailable right now.");
    }
  }

  async function toggleRecording(target: string) {
    if (recording) {
      setRecording(false);
      const rec = recorderRef.current;
      recorderRef.current = null;
      if (!rec) return;
      try {
        setBusy(true);
        const { blob, durationMs } = await rec.stop();
        const res = await checkPronunciation(blob, target, durationMs);
        setFeedback({ score: res.score, transcript: res.transcript });
        setTries((t) => t + 1);
        if (res.score >= 70) setHits((h) => h + 1);
      } catch (e) {
        toast.error(e instanceof Error ? e.message : "Não foi possível avaliar sua fala.");
      } finally {
        setBusy(false);
      }
      return;
    }
    try {
      const rec = new MicRecorder();
      await rec.start();
      recorderRef.current = rec;
      setFeedback(null);
      setRecording(true);
    } catch {
      toast.error("Permita o acesso ao microfone para praticar.");
    }
  }

  function selfReport(correct: boolean) {
    setTries((t) => t + 1);
    if (correct) setHits((h) => h + 1);
    advance();
  }

  function advance() {
    setFeedback(null);
    if (stage < 4) {
      setStage(stage + 1);
      return;
    }
    if (index + 1 >= items.length) {
      setDone(true);
      return;
    }
    setIndex(index + 1);
    setStage(0);
  }

  function restart() {
    setIndex(0);
    setStage(0);
    setHits(0);
    setTries(0);
    setDone(false);
    setFeedback(null);
    setStarted(true);
  }

  if (items.length === 0) return null;

  if (!started) {
    return (
      <div className="rounded-2xl border border-gold/30 bg-gold/5 p-5">
        <h3 className="text-base font-semibold">
          <AltHeading text="Speak2Drill" />
        </h3>
        <p className="mt-1 text-sm text-foreground/85">
          Structured substitution drills built only from this unit&apos;s vocabulary, verbs,
          expressions, grammar and dialogue.
        </p>
        <p className="mt-0.5 text-xs text-muted-foreground italic">
          Treino de fluência por substituição, usando somente o conteúdo desta unidade.
        </p>
        <button
          type="button"
          onClick={() => setStarted(true)}
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2 text-sm font-semibold text-navy transition hover:bg-gold/90"
        >
          Start Speak2Drill
        </button>
        <p className="mt-2 text-xs text-muted-foreground">
          {SPEAK2DRILL_TOTAL} base sentences · 3 drills each
        </p>
      </div>
    );
  }

  if (done) {
    const pct = tries ? Math.round((hits / tries) * 100) : 0;
    return (
      <div className="rounded-2xl border border-gold/40 bg-gold/5 p-6 text-center">
        <h3 className="text-lg font-semibold">
          <AltHeading text="Completed!" />
        </h3>
        <p className="mt-1 text-sm text-muted-foreground italic">Concluído</p>
        <p className="mt-4 text-3xl font-bold text-gold">{pct}%</p>
        <p className="text-xs text-muted-foreground">
          Accuracy · {hits} of {tries} responses
        </p>
        <button
          type="button"
          onClick={restart}
          className="mt-5 inline-flex items-center gap-2 rounded-full border border-gold/50 px-5 py-2 text-sm font-semibold text-gold transition hover:bg-gold/10"
        >
          <RotateCcw className="h-4 w-4" /> Repeat
        </button>
      </div>
    );
  }

  if (!item) return null;
  const currentDrill = stage >= 1 && stage <= 3 ? item.drills[stage - 1] : undefined;

  return (
    <div className="rounded-2xl border border-gold/30 bg-background/40 p-5">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold tracking-wide text-gold uppercase">
          Exercise {index + 1} of {items.length}
        </span>
        <span className="text-xs text-muted-foreground capitalize">{item.kind}</span>
      </div>
      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-border/60">
        <div
          className="h-full rounded-full bg-gold transition-all"
          style={{ width: `${((index + (stage + 1) / 5) / items.length) * 100}%` }}
        />
      </div>

      {stage === 0 && (
        <div className="mt-5 space-y-3">
          <p className="text-xs font-semibold text-gold">Listen and repeat</p>
          <p className="text-lg font-semibold text-foreground">{item.base}</p>
          {item.basePt && <p className="text-xs text-muted-foreground italic">{item.basePt}</p>}
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => play(item.base)}
              className="inline-flex items-center gap-2 rounded-full border border-gold/50 px-4 py-2 text-xs font-semibold text-gold transition hover:bg-gold/10"
            >
              <Volume2 className="h-4 w-4" /> Play audio
            </button>
            <button
              type="button"
              onClick={() => toggleRecording(item.base)}
              disabled={busy}
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-semibold transition hover:bg-muted/40"
            >
              {busy ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : recording ? (
                <Square className="h-4 w-4 text-destructive" />
              ) : (
                <Mic className="h-4 w-4" />
              )}
              {recording ? "Stop" : "Repeat and check"}
            </button>
            <button
              type="button"
              onClick={advance}
              className="inline-flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-xs font-semibold text-navy transition hover:bg-gold/90"
            >
              Start drills
            </button>
          </div>
          {feedback && (
            <p className="text-xs text-muted-foreground">
              Score {feedback.score}% · You said: “{feedback.transcript}”
            </p>
          )}
        </div>
      )}

      {currentDrill && (
        <div className="mt-5 space-y-3">
          <p className="text-xs font-semibold text-gold">
            Drill {currentDrill.level} of 3 · Rebuild the full sentence
          </p>
          <p className="text-xs text-muted-foreground italic">
            Reconstrua a frase inteira em voz alta com esta substituição.
          </p>
          <p className="rounded-xl border border-gold/40 bg-gold/10 px-4 py-3 text-center text-xl font-bold text-gold">
            {currentDrill.cue}
          </p>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => toggleRecording(currentDrill.answer)}
              disabled={busy}
              className="inline-flex items-center gap-2 rounded-full border border-gold/50 px-4 py-2 text-xs font-semibold text-gold transition hover:bg-gold/10"
            >
              {busy ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : recording ? (
                <Square className="h-4 w-4 text-destructive" />
              ) : (
                <Mic className="h-4 w-4" />
              )}
              {recording ? "Stop and check" : "Speak and check"}
            </button>
            <button
              type="button"
              onClick={() => selfReport(true)}
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-semibold transition hover:bg-muted/40"
            >
              <Check className="h-4 w-4 text-gold" /> I got it
            </button>
            <button
              type="button"
              onClick={() => selfReport(false)}
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-semibold transition hover:bg-muted/40"
            >
              <X className="h-4 w-4 text-destructive" /> I missed it
            </button>
          </div>
          {feedback && (
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground">
                Score {feedback.score}% · You said: “{feedback.transcript}”
              </p>
              <button
                type="button"
                onClick={advance}
                className="inline-flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-xs font-semibold text-navy transition hover:bg-gold/90"
              >
                Next
              </button>
            </div>
          )}
        </div>
      )}

      {stage === 4 && (
        <div className="mt-5 space-y-3">
          <p className="text-xs font-semibold text-gold">Correct answers · Listen to each version</p>
          {[
            { label: "Base sentence", text: item.base },
            ...item.drills.map((d) => ({ label: `Drill ${d.level} · ${d.cue}`, text: d.answer })),
          ].map((row) => (
            <div
              key={`${row.label}-${row.text}`}
              className="flex items-start justify-between gap-3 rounded-xl border border-border/70 bg-background/60 p-3"
            >
              <div>
                <p className="text-[11px] font-semibold text-gold uppercase">{row.label}</p>
                <p className="text-sm text-foreground">{row.text}</p>
              </div>
              <button
                type="button"
                onClick={() => play(row.text)}
                aria-label={`Play ${row.label}`}
                className="shrink-0 rounded-full border border-gold/50 p-2 text-gold transition hover:bg-gold/10"
              >
                <Volume2 className="h-4 w-4" />
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={advance}
            className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2 text-sm font-semibold text-navy transition hover:bg-gold/90"
          >
            {index + 1 >= items.length ? "Finish" : "Next exercise"}
          </button>
        </div>
      )}
    </div>
  );
}
