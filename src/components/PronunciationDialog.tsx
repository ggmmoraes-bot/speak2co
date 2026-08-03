import { useRef, useState } from "react";
import { Mic, Square, Volume2, Loader2, RefreshCw } from "lucide-react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { MicRecorder } from "@/lib/audio-recorder";
import { checkPronunciation, speakText, type PronunciationResult } from "@/lib/voice-client";

const SUGGESTIONS = [
  "I would like to schedule a meeting for next Thursday.",
  "Could you tell me where the boarding gate is?",
  "I'm responsible for managing the team's daily routines.",
  "The weather is really thirsty work, isn't it?",
];

export function PronunciationDialog({
  open,
  onOpenChange,
  initialPhrase,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialPhrase?: string;
}) {
  const [phrase, setPhrase] = useState(initialPhrase || SUGGESTIONS[0]!);
  const [recording, setRecording] = useState(false);
  const [busy, setBusy] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [result, setResult] = useState<PronunciationResult | null>(null);
  const recorderRef = useRef<MicRecorder | null>(null);

  async function playModel() {
    if (!phrase.trim()) return;
    try {
      setPlaying(true);
      await speakText(phrase.trim());
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
        setResult(await checkPronunciation(blob, phrase.trim()));
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
    <Dialog
      open={open}
      onOpenChange={(next) => {
        if (!next) {
          recorderRef.current?.cancel();
          recorderRef.current = null;
          setRecording(false);
        }
        onOpenChange(next);
      }}
    >
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Checagem de pronúncia</DialogTitle>
          <DialogDescription>
            Ouça o modelo, grave sua voz e receba a nota com dicas dos sons a corrigir.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <Textarea
            value={phrase}
            onChange={(e) => setPhrase(e.target.value)}
            rows={2}
            placeholder="Digite a frase em inglês que você quer treinar"
          />

          <div className="flex flex-wrap gap-2">
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => {
                  setPhrase(s);
                  setResult(null);
                }}
                className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                {s.slice(0, 28)}…
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <Button variant="secondary" onClick={playModel} disabled={playing || busy}>
              {playing ? <Loader2 className="h-4 w-4 animate-spin" /> : <Volume2 className="h-4 w-4" />}
              Ouvir modelo
            </Button>
            <Button
              onClick={toggleRecording}
              disabled={busy || !phrase.trim()}
              className={recording ? "bg-destructive text-destructive-foreground" : "bg-gold text-primary-foreground"}
            >
              {busy ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : recording ? (
                <Square className="h-4 w-4" />
              ) : (
                <Mic className="h-4 w-4" />
              )}
              {recording ? "Parar e avaliar" : busy ? "Avaliando…" : "Gravar minha voz"}
            </Button>
            {result && (
              <Button variant="ghost" onClick={() => setResult(null)}>
                <RefreshCw className="h-4 w-4" /> Tentar de novo
              </Button>
            )}
          </div>

          {result && (
            <div className="space-y-3 rounded-xl border border-border p-4">
              <div className="flex items-center justify-between text-sm">
                <span className="font-semibold">Precisão</span>
                <span className="font-bold text-gold">{result.score}%</span>
              </div>
              <Progress value={result.score} />
              <p className="text-sm text-muted-foreground">
                Entendi: <span className="italic text-foreground">“{result.transcript}”</span>
              </p>
              <p className="text-sm">{result.verdict}</p>
              {result.issues.length > 0 && (
                <ul className="space-y-1 text-sm">
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
      </DialogContent>
    </Dialog>
  );
}
