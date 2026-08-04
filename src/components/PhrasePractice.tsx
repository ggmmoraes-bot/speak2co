import { useRef, useState } from "react";
import { Loader2, Mic, RefreshCw, Square, Volume2 } from "lucide-react";
import { toast } from "sonner";
import { Progress } from "@/components/ui/progress";
import { MicRecorder } from "@/lib/audio-recorder";
import { checkPronunciation, speakText, type PronunciationResult } from "@/lib/voice-client";
import { SpeechComparison } from "@/components/SpeechComparison";
import {
  GRADE_TONE_CLASS,
  gradePronunciation,
  type PronunciationAttempt,
} from "@/lib/pronunciation-grade";

/**
 * Item praticável do material complementar: ouvir a pronúncia da IA e gravar
 * a fala do aluno para checagem com nota e dicas de som.
 */
export function PhrasePractice({
  en,
  pt,
  note,
  onAttempt,
}: {
  en: string;
  pt: string;
  note?: string | undefined;
  onAttempt?: ((attempt: PronunciationAttempt) => void) | undefined;
}) {
  const [playing, setPlaying] = useState(false);
  const [recording, setRecording] = useState(false);
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<PronunciationResult | null>(null);
  const [history, setHistory] = useState<number[]>([]);
  const recorderRef = useRef<MicRecorder | null>(null);

  async function playModel() {
    try {
      setPlaying(true);
      await speakText(en);
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Não foi possível tocar o áudio.");
    } finally {
      setPlaying(false);
    }
  }

  async function toggleRecording() {
    if (recording) {
      setRecording(false);
      const rec = recorderRef.current;
      recorderRef.current = null;
      if (!rec) return;
      try {
        setBusy(true);
        const { blob } = await rec.stop();
        const res = await checkPronunciation(blob, en);
        setResult(res);
        setHistory((h) => [...h, res.score]);
        onAttempt?.({
          id: `${en}-${Date.now()}`,
          phrase: en,
          score: res.score,
          transcript: res.transcript,
          issues: res.issues,
          at: Date.now(),
        });
      } catch (e) {
        toast.error(e instanceof Error ? e.message : "Não foi possível avaliar a pronúncia.");
      } finally {
        setBusy(false);
      }
      return;
    }
    try {
      const rec = new MicRecorder();
      await rec.start();
      recorderRef.current = rec;
      setResult(null);
      setRecording(true);
    } catch {
      toast.error("Preciso de acesso ao microfone para ouvir sua pronúncia.");
    }
  }

  return (
    <div className="rounded-2xl border border-border bg-card/60 p-4 backdrop-blur">
      <p className="text-base font-medium text-foreground">{en}</p>
      <p className="mt-1 text-sm text-muted-foreground">{pt}</p>
      {note && <p className="mt-2 text-xs text-gold">{note}</p>}

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={playModel}
          disabled={playing}
          className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 px-3 py-1.5 text-xs text-foreground/80 transition hover:border-gold/60 disabled:opacity-60"
        >
          {playing ? (
            <Loader2 className="h-3.5 w-3.5 animate-spin" />
          ) : (
            <Volume2 className="h-3.5 w-3.5" />
          )}
          Ouvir a IA
        </button>
        <button
          type="button"
          onClick={toggleRecording}
          disabled={busy}
          className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition disabled:opacity-60 ${
            recording
              ? "bg-destructive text-destructive-foreground"
              : "bg-gold text-primary-foreground hover:opacity-90"
          }`}
        >
          {busy ? (
            <Loader2 className="h-3.5 w-3.5 animate-spin" />
          ) : recording ? (
            <Square className="h-3.5 w-3.5" />
          ) : (
            <Mic className="h-3.5 w-3.5" />
          )}
          {busy ? "Avaliando…" : recording ? "Parar e avaliar" : "Falar e checar"}
        </button>
        {result && (
          <button
            type="button"
            onClick={() => setResult(null)}
            className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-xs text-muted-foreground hover:text-foreground"
          >
            <RefreshCw className="h-3.5 w-3.5" /> Tentar de novo
          </button>
        )}
      </div>

      {result && (
        <div className="mt-3 space-y-2 rounded-xl border border-border p-3">
          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold">
              Nota automática · tentativa {history.length}
            </span>
            <span className="flex items-center gap-2">
              <span
                className={`rounded-full border px-2 py-0.5 text-[11px] font-bold ${GRADE_TONE_CLASS[gradePronunciation(result.score).tone]}`}
              >
                {gradePronunciation(result.score).letter} ·{" "}
                {gradePronunciation(result.score).score10}/10
              </span>
              <span className="font-bold text-gold">{result.score}%</span>
            </span>
          </div>
          <Progress value={result.score} />
          <p className="text-xs text-muted-foreground">
            {gradePronunciation(result.score).label}
            {history.length > 1 ? ` · tentativas: ${history.join("% · ")}%` : ""}
          </p>
          <SpeechComparison
            target={en}
            transcript={result.transcript}
            onPlayModel={playModel}
          />
          <p className="text-xs">{result.verdict}</p>
          {result.issues.length > 0 && (
            <p className="text-xs font-semibold text-foreground">
              Erros comuns nesta tentativa ({result.issues.length})
            </p>
          )}
          {result.issues.length > 0 && (
            <ul className="space-y-1 text-xs">
              {result.issues.map((issue, i) => (
                <li key={i}>
                  <span className="font-semibold text-gold">{issue.sound}</span> — {issue.tip}
                </li>
              ))}
            </ul>
          )}
          <p className="text-xs text-muted-foreground">{result.praise}</p>
        </div>
      )}
    </div>
  );
}
