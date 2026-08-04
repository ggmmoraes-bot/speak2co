import { useEffect, useRef, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Loader2, Mic, Send, Square, Volume2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { MicRecorder } from "@/lib/audio-recorder";
import { speakText, transcribeAudio } from "@/lib/voice-client";
import { useVoiceSettings } from "@/lib/use-voice-settings";
import {
  chatTravelRolePlay,
  type TravelCoachTurn,
} from "@/lib/speak2travel.functions";
import type { TravelPrompt } from "@/lib/speak2travel-content";

type Turn = {
  id: string;
  role: "student" | "coach";
  text: string;
  feedback?: TravelCoachTurn;
};

/** Conversa ao vivo com a IA dentro do role play, com correção e dica de pronúncia. */
export function RolePlayCoach({
  trackId,
  prompt,
  onUseAnswer,
}: {
  trackId: string;
  prompt: TravelPrompt;
  onUseAnswer?: (text: string) => void;
}) {
  const [turns, setTurns] = useState<Turn[]>([]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [recording, setRecording] = useState(false);
  const [transcribing, setTranscribing] = useState(false);
  const recorderRef = useRef<MicRecorder | null>(null);
  const sendTurn = useServerFn(chatTravelRolePlay);
  const { settings } = useVoiceSettings();

  useEffect(() => {
    setTurns([]);
    setInput("");
  }, [prompt.id]);

  async function play(text: string) {
    try {
      await speakText(text, { volume: settings.volume, rate: settings.rate });
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Não foi possível tocar o áudio.");
    }
  }

  async function send(message: string) {
    const text = message.trim();
    if (!text || sending) return;
    setInput("");
    const history = turns.map((t) => ({ role: t.role, text: t.text }));
    setTurns((prev) => [...prev, { id: crypto.randomUUID(), role: "student", text }]);
    setSending(true);
    try {
      const result = await sendTurn({
        data: { trackId, promptId: prompt.id, message: text, history },
      });
      setTurns((prev) => [
        ...prev,
        { id: crypto.randomUUID(), role: "coach", text: result.reply, feedback: result },
      ]);
      if (settings.autoSpeak) void play(result.reply);
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Não foi possível falar com a IA.");
    } finally {
      setSending(false);
    }
  }

  async function toggleRecording() {
    if (recording) {
      setRecording(false);
      const rec = recorderRef.current;
      recorderRef.current = null;
      if (!rec) return;
      try {
        setTranscribing(true);
        const { blob } = await rec.stop();
        const text = await transcribeAudio(blob);
        await send(text);
      } catch (e) {
        toast.error(e instanceof Error ? e.message : "Não foi possível transcrever o áudio.");
      } finally {
        setTranscribing(false);
      }
      return;
    }
    try {
      const rec = new MicRecorder();
      await rec.start();
      recorderRef.current = rec;
      setRecording(true);
    } catch {
      toast.error("Não foi possível acessar o microfone.");
    }
  }

  const busy = sending || transcribing;

  return (
    <div className="rounded-2xl border border-gold/40 bg-card/60 p-6 backdrop-blur">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="text-xs tracking-widest text-muted-foreground uppercase">
            Conversar com a IA nesta cena
          </h3>
          <p className="mt-1 text-sm text-foreground/80">
            Fale ou escreva em inglês e receba resposta no personagem, correção e dica de
            pronúncia.
          </p>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="rounded-full"
          onClick={() => void play(prompt.cue)}
        >
          <Volume2 className="mr-1 h-4 w-4" /> Ouvir a fala inicial
        </Button>
      </div>

      <div className="mt-5 space-y-4">
        {turns.length === 0 && (
          <p className="text-sm text-muted-foreground">
            Comece respondendo: “{prompt.cue}”
          </p>
        )}
        {turns.map((turn) =>
          turn.role === "student" ? (
            <div key={turn.id} className="flex justify-end">
              <p className="max-w-[85%] rounded-2xl bg-primary px-4 py-2 text-sm text-primary-foreground">
                {turn.text}
              </p>
            </div>
          ) : (
            <div key={turn.id} className="space-y-3">
              <div className="flex items-start gap-2">
                <p className="text-sm text-foreground">{turn.text}</p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="rounded-full"
                  onClick={() => void play(turn.text)}
                >
                  <Volume2 className="h-4 w-4" />
                </Button>
              </div>
              {turn.feedback && (
                <div className="space-y-2 rounded-xl border border-border p-4 text-sm">
                  <p className="text-foreground/80">
                    <span className="text-xs tracking-widest text-muted-foreground uppercase">
                      Correção ·{" "}
                    </span>
                    {turn.feedback.correction}
                  </p>
                  <p className="text-foreground/80">
                    <span className="text-xs tracking-widest text-muted-foreground uppercase">
                      Pronúncia ·{" "}
                    </span>
                    {turn.feedback.pronunciation}
                  </p>
                  <p className="text-foreground/80">
                    <span className="text-xs tracking-widest text-muted-foreground uppercase">
                      Próximo passo ·{" "}
                    </span>
                    {turn.feedback.nextTip}
                  </p>
                  {onUseAnswer && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="rounded-full px-0 text-gold"
                      onClick={() => onUseAnswer(turn.text)}
                    >
                      Usar esta conversa na minha resposta
                    </Button>
                  )}
                </div>
              )}
            </div>
          ),
        )}
        {sending && (
          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            <Loader2 className="h-4 w-4 animate-spin" /> A IA está respondendo...
          </p>
        )}
      </div>

      <div className="mt-5 space-y-3">
        <Textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              void send(input);
            }
          }}
          placeholder="Speak or type your line in English..."
          className="min-h-20"
          disabled={busy}
        />
        <div className="flex flex-wrap gap-3">
          <Button
            variant={recording ? "destructive" : "outline"}
            className="rounded-full"
            disabled={transcribing || sending}
            onClick={() => void toggleRecording()}
          >
            {recording ? (
              <>
                <Square className="mr-1 h-4 w-4" /> Parar e enviar
              </>
            ) : transcribing ? (
              <>
                <Loader2 className="mr-1 h-4 w-4 animate-spin" /> Transcrevendo...
              </>
            ) : (
              <>
                <Mic className="mr-1 h-4 w-4" /> Falar
              </>
            )}
          </Button>
          <Button
            className="rounded-full bg-gold font-semibold text-primary-foreground hover:opacity-90"
            disabled={busy || !input.trim()}
            onClick={() => void send(input)}
          >
            <Send className="mr-1 h-4 w-4" /> Enviar
          </Button>
        </div>
      </div>
    </div>
  );
}
