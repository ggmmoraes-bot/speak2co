import { createFileRoute, Link } from "@tanstack/react-router";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, type UIMessage } from "ai";
import { useEffect, useMemo, useRef, useState } from "react";
import { toast } from "sonner";
import { Loader2, Mic, MessageSquare, RotateCcw, Sparkles, Square, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { MicRecorder } from "@/lib/audio-recorder";
import { speakText, stopSpeaking, transcribeAudio } from "@/lib/voice-client";
import { useVoiceSettings } from "@/lib/use-voice-settings";
import { requestSessionFeedback, type SessionFeedbackDTO } from "@/lib/gisele-data.functions";

export const Route = createFileRoute("/_authenticated/gisele/voice-session/$threadId")({
  component: VoiceSessionPage,
});

type Phase = "idle" | "recording" | "transcribing" | "thinking" | "speaking";

const PHASE_LABEL: Record<Phase, { en: string; pt: string }> = {
  idle: { en: "Tap to speak", pt: "Toque para falar" },
  recording: { en: "Listening…", pt: "Gravando sua fala" },
  transcribing: { en: "Transcribing…", pt: "Convertendo sua fala em texto" },
  thinking: { en: "Gisele is thinking…", pt: "Gisele está preparando a resposta" },
  speaking: { en: "Gisele is speaking…", pt: "Ouça e responda em seguida" },
};

function textOf(message: UIMessage): string {
  return message.parts
    .map((p) => (p.type === "text" ? p.text : ""))
    .join(" ")
    .trim();
}

function VoiceSessionPage() {
  const { threadId } = Route.useParams();
  const { settings: voice } = useVoiceSettings();
  const [phase, setPhase] = useState<Phase>("idle");
  const [showText, setShowText] = useState(false);
  const [lastTranscript, setLastTranscript] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<SessionFeedbackDTO | null>(null);
  const [feedbackLoading, setFeedbackLoading] = useState(false);
  const recorderRef = useRef<MicRecorder | null>(null);
  const spokenRef = useRef<string | null>(null);

  const transport = useMemo(
    () =>
      new DefaultChatTransport({
        api: "/api/gisele-chat",
        body: { threadId, supportLanguage: voice.supportLanguage },
        fetch: async (input, init) => {
          const { data } = await supabase.auth.getSession();
          const token = data.session?.access_token;
          const headers = new Headers(init?.headers);
          if (token) headers.set("Authorization", `Bearer ${token}`);
          return fetch(input, { ...init, headers });
        },
      }),
    [threadId, voice.supportLanguage],
  );

  const { messages, sendMessage, status } = useChat({
    id: `voice-${threadId}`,
    transport,
    onError: (err) => {
      setPhase("idle");
      toast.error(err.message || "Algo deu errado na sala de voz.");
    },
  });

  const streaming = status === "submitted" || status === "streaming";
  useEffect(() => {
    if (streaming) setPhase("thinking");
  }, [streaming]);

  // Assim que a resposta termina, gera e reproduz o áudio da Gisele.
  const lastAssistant = [...messages].reverse().find((m) => m.role === "assistant");
  useEffect(() => {
    if (streaming || !lastAssistant) return;
    const text = textOf(lastAssistant);
    if (!text || spokenRef.current === lastAssistant.id) return;
    spokenRef.current = lastAssistant.id;
    setPhase("speaking");
    speakText(text, {
      voice: voice.voice,
      volume: voice.volume,
      rate: voice.rate,
      provider: voice.ttsProvider,
    })
      .catch((e) => toast.error(e instanceof Error ? e.message : "Não foi possível falar."))
      .finally(() => setPhase("idle"));
  }, [streaming, lastAssistant, voice.voice, voice.volume, voice.rate, voice.ttsProvider]);

  async function startRecording() {
    if (!voice.voiceConsent) {
      toast.error("Autorize o uso do microfone em Voice & language antes de começar.");
      return;
    }
    try {
      stopSpeaking();
      const recorder = new MicRecorder();
      await recorder.start();
      recorderRef.current = recorder;
      setPhase("recording");
    } catch {
      toast.error("Não consegui acessar o microfone.");
      setPhase("idle");
    }
  }

  async function stopRecording() {
    const recorder = recorderRef.current;
    if (!recorder) return;
    recorderRef.current = null;
    setPhase("transcribing");
    try {
      const { blob } = await recorder.stop();
      const text = await transcribeAudio(blob, { provider: voice.sttProvider });
      setLastTranscript(text);
      setPhase("thinking");
      sendMessage({ text });
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Não foi possível transcrever.");
      setPhase("idle");
    }
  }

  function retry() {
    if (!lastTranscript) return;
    stopSpeaking();
    setPhase("thinking");
    sendMessage({ text: `Let me try that again: ${lastTranscript}` });
  }

  async function getFeedback() {
    try {
      setFeedbackLoading(true);
      const result = await requestSessionFeedback({ data: { threadId } });
      setFeedback(result);
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Não foi possível gerar o feedback.");
    } finally {
      setFeedbackLoading(false);
    }
  }

  const busy = phase === "transcribing" || phase === "thinking";
  const label = PHASE_LABEL[phase];

  return (
    <main className="mx-auto w-full max-w-2xl flex-1 space-y-6 px-6 py-10">
      <header className="space-y-1">
        <h1 className="text-2xl font-bold text-foreground">Voice Room</h1>
        <p className="text-sm italic text-muted-foreground">
          Fale em inglês, ouça a Gisele e continue a conversa. A voz é gerada por IA.
        </p>
      </header>

      <Card className="flex flex-col items-center gap-4 p-8">
        <div
          className={`flex h-28 w-28 items-center justify-center rounded-full border-2 transition ${
            phase === "recording"
              ? "animate-pulse border-gold bg-gold/20"
              : "border-border bg-secondary"
          }`}
        >
          {busy ? (
            <Loader2 className="h-10 w-10 animate-spin text-gold" />
          ) : phase === "speaking" ? (
            <Volume2 className="h-10 w-10 text-gold" />
          ) : (
            <Mic className={`h-10 w-10 ${phase === "recording" ? "text-gold" : "text-muted-foreground"}`} />
          )}
        </div>

        <div className="text-center">
          <p className="text-sm font-semibold text-foreground">{label.en}</p>
          <p className="text-xs italic text-muted-foreground">{label.pt}</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2">
          {phase === "recording" ? (
            <Button
              onClick={stopRecording}
              className="gap-2 rounded-full bg-gold font-semibold text-primary-foreground hover:opacity-90"
            >
              <Square className="h-4 w-4" /> Stop and send
            </Button>
          ) : (
            <Button
              onClick={startRecording}
              disabled={busy}
              className="gap-2 rounded-full bg-gold font-semibold text-primary-foreground hover:opacity-90"
            >
              <Mic className="h-4 w-4" /> Start speaking
            </Button>
          )}
          {phase === "speaking" && (
            <Button variant="outline" className="gap-2 rounded-full" onClick={() => { stopSpeaking(); setPhase("idle"); }}>
              <VolumeX className="h-4 w-4" /> Stop audio
            </Button>
          )}
          <Button
            variant="outline"
            className="gap-2 rounded-full"
            onClick={retry}
            disabled={!lastTranscript || busy}
          >
            <RotateCcw className="h-4 w-4" /> Retry
          </Button>
          <Button
            variant="ghost"
            className="gap-2 rounded-full text-xs"
            onClick={() => setShowText((v) => !v)}
          >
            <MessageSquare className="h-4 w-4" /> {showText ? "Hide text" : "Show text"}
          </Button>
        </div>
      </Card>

      {showText && (
        <Card className="space-y-3 p-4">
          {messages.length === 0 && (
            <p className="text-sm text-muted-foreground">A transcrição aparecerá aqui.</p>
          )}
          {messages.map((m) => (
            <div key={m.id} className="space-y-1">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-gold">
                {m.role === "user" ? "You" : "Gisele"}
              </p>
              <p className="text-sm text-muted-foreground">{textOf(m)}</p>
            </div>
          ))}
        </Card>
      )}

      <div className="flex flex-wrap items-center gap-2">
        <Button
          variant="outline"
          className="gap-2 rounded-full"
          onClick={getFeedback}
          disabled={feedbackLoading || messages.length === 0}
        >
          {feedbackLoading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Sparkles className="h-4 w-4" />
          )}
          End session and get feedback
        </Button>
        <Link
          to="/gisele/$threadId"
          params={{ threadId }}
          className="text-sm font-semibold text-gold hover:underline"
        >
          Continue by text
        </Link>
      </div>

      {feedback && (
        <Card className="space-y-3 p-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-gold">What went well</p>
            <p className="text-sm text-muted-foreground">{feedback.whatWentWell}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-gold">
              Main point to improve
            </p>
            <p className="text-sm text-muted-foreground">{feedback.mainImprovement}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-gold">How to improve</p>
            <p className="text-sm text-muted-foreground">{feedback.howToImprove}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-gold">Try again</p>
            <p className="text-sm text-muted-foreground">{feedback.retryInvite}</p>
          </div>
        </Card>
      )}
    </main>
  );
}
