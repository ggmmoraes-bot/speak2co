import { useMemo, useRef, useState } from "react";
import { Loader2, Mic, RotateCcw, Square, Volume2 } from "lucide-react";
import { toast } from "sonner";
import { AltHeading } from "@/components/AltHeading";
import { MicRecorder } from "@/lib/audio-recorder";
import { checkPronunciation, speakText } from "@/lib/voice-client";
import {
  DRILL_GROUPS,
  flattenSet,
  getDrillSet,
  type DrillGroupKey,
} from "@/lib/curriculum/speak2drill-sets";
import type { CourseUnit } from "@/lib/curriculum/types";

/**
 * Speak2Drill — consolidação oral da unidade.
 * O aluno vê a frase-base (sempre visível), a instrução de transformação,
 * fala e recebe correção da IA. Sem contagem de exercícios na tela.
 */
export function Speak2Drill({ unit }: { unit: CourseUnit }) {
  const queue = useMemo(() => flattenSet(getDrillSet(unit)), [unit]);
  const [started, setStarted] = useState(false);
  const [index, setIndex] = useState(0);
  const [hits, setHits] = useState(0);
  const [tries, setTries] = useState(0);
  const [done, setDone] = useState(false);
  const [busy, setBusy] = useState(false);
  const [recording, setRecording] = useState(false);
  const [feedback, setFeedback] = useState<{ score: number; transcript: string } | null>(null);
  const recorderRef = useRef<MicRecorder | null>(null);

  const current = queue[index];

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

  function next() {
    setFeedback(null);
    if (index + 1 >= queue.length) {
      setDone(true);
      return;
    }
    setIndex(index + 1);
  }

  function restart() {
    setIndex(0);
    setHits(0);
    setTries(0);
    setDone(false);
    setFeedback(null);
    setStarted(true);
  }

  if (queue.length === 0) return null;

  if (!started) {
    return (
      <div className="rounded-2xl border border-gold/30 bg-gold/5 p-5">
        <h3 className="text-base font-semibold">
          <AltHeading text="Speak2Drill" />
        </h3>
        <p className="mt-1 text-sm text-foreground/85">
          Practice what you learned. Speak it. Get feedback. Improve it.
        </p>
        <p className="mt-1 text-xs font-semibold tracking-wide text-gold uppercase">
          Listen → Change → Speak → Check
        </p>
        <p className="mt-2 text-sm text-foreground/80">
          Use the sentence on the screen as your starting point. Follow the drill instruction,
          change what is requested, and say the complete sentence aloud. Then click Speak &amp;
          Check to get AI feedback.
        </p>
        <p className="mt-0.5 text-xs text-muted-foreground italic">
          Consolidação oral da unidade: leia a frase-base, faça a mudança pedida e fale em voz alta.
        </p>
        <button
          type="button"
          onClick={() => setStarted(true)}
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2 text-sm font-semibold text-navy transition hover:bg-gold/90"
        >
          Start Speak2Drill
        </button>
      </div>
    );
  }

  if (done) {
    const pct = tries ? Math.round((hits / tries) * 100) : 0;
    return (
      <div className="rounded-2xl border border-gold/40 bg-gold/5 p-6 text-center">
        <h3 className="text-lg font-semibold">
          <AltHeading text="Session complete!" />
        </h3>
        <p className="mt-1 text-sm text-muted-foreground italic">Sessão concluída</p>
        <p className="mt-4 text-3xl font-bold text-gold">{pct}%</p>
        <p className="text-xs text-muted-foreground">Accuracy on your spoken answers</p>
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

  if (!current) return null;
  const { group, drill } = current;
  const groupIndex = DRILL_GROUPS.findIndex((g) => g.key === group);
  const nextGroup = DRILL_GROUPS[groupIndex + 1];
  const success = feedback ? feedback.score >= 70 : false;

  return (
    <div className="rounded-2xl border border-gold/30 bg-background/40 p-5">
      {/* Grupos — apenas o foco atual, sem contagem de exercícios */}
      <div className="flex flex-wrap items-center gap-1.5">
        {DRILL_GROUPS.map((g) => (
          <span
            key={g.key}
            className={
              g.key === group
                ? "rounded-full bg-gold px-3 py-1 text-[11px] font-bold tracking-wide text-navy uppercase"
                : "rounded-full border border-border/70 px-3 py-1 text-[11px] font-semibold tracking-wide text-muted-foreground uppercase"
            }
          >
            {g.label}
          </span>
        ))}
      </div>
      <p className="mt-2 text-[11px] tracking-wide text-muted-foreground uppercase">
        Current focus:{" "}
        <span className="font-semibold text-gold">{DRILL_GROUPS[groupIndex]?.label}</span>
        {nextGroup && <span className="normal-case"> · Next: {nextGroup.label}</span>}
      </p>

      {/* Frase-base sempre visível */}
      <div className="mt-4 rounded-xl border border-border/70 bg-background/60 p-4">
        <p className="text-[11px] font-semibold tracking-wide text-gold uppercase">Base sentence</p>
        <p className="mt-1 text-lg font-semibold text-foreground">{drill.base}</p>
        {drill.basePt && <p className="text-xs text-muted-foreground italic">{drill.basePt}</p>}
        <button
          type="button"
          onClick={() => play(drill.base)}
          className="mt-3 inline-flex items-center gap-2 rounded-full border border-gold/50 px-4 py-2 text-xs font-semibold text-gold transition hover:bg-gold/10"
        >
          <Volume2 className="h-4 w-4" /> Listen
        </button>
      </div>

      {/* Instrução do drill */}
      <div className="mt-3 rounded-xl border border-gold/40 bg-gold/10 p-4">
        <p className="text-[11px] font-semibold tracking-wide text-gold uppercase">Drill</p>
        <p className="mt-1 text-base font-semibold text-foreground">{drill.instruction}</p>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => toggleRecording(drill.answer)}
          disabled={busy}
          className="inline-flex min-h-11 items-center gap-2 rounded-full bg-gold px-5 py-2 text-sm font-semibold text-navy transition hover:bg-gold/90 disabled:opacity-60"
        >
          {busy ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : recording ? (
            <Square className="h-4 w-4" />
          ) : (
            <Mic className="h-4 w-4" />
          )}
          {recording ? "Stop & Check" : "Speak & Check"}
        </button>
        {feedback && !success && (
          <button
            type="button"
            onClick={() => setFeedback(null)}
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border px-5 py-2 text-sm font-semibold transition hover:bg-muted/40"
          >
            Try Again
          </button>
        )}
        <button
          type="button"
          onClick={next}
          className="inline-flex min-h-11 items-center gap-2 rounded-full border border-gold/50 px-5 py-2 text-sm font-semibold text-gold transition hover:bg-gold/10"
        >
          Next
        </button>
      </div>

      {feedback && (
        <div className="mt-3 rounded-xl border border-border/70 bg-background/60 p-4">
          <p className="text-[11px] font-semibold tracking-wide text-gold uppercase">AI feedback</p>
          <p className="mt-1 text-sm font-semibold text-foreground">
            {success
              ? "Great! Your sentence is correct."
              : feedback.score >= 45
                ? "Almost there. Check the words in the drill and say the full sentence again."
                : "Try again. Say the complete sentence with the change requested."}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">You said: “{feedback.transcript}”</p>
          {!success && (
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <p className="text-xs text-foreground/80">
                Expected: <span className="font-semibold">{drill.answer}</span>
              </p>
              <button
                type="button"
                onClick={() => play(drill.answer)}
                aria-label="Replay the correct sentence"
                className="rounded-full border border-gold/50 p-2 text-gold transition hover:bg-gold/10"
              >
                <Volume2 className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
