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
import { isBrandVoice, useVoiceSettings } from "@/lib/use-voice-settings";
import { AiVoiceDisclosure } from "@/components/AiVoiceDisclosure";
import { GiseleFeedbackCard } from "@/components/gisele/GiseleFeedbackCard";
import {
  requestSessionFeedback,
  saveVoiceTranscript,
  finalizeVoiceSession,
  type SessionFeedbackDTO,
} from "@/lib/gisele-data.functions";
import { AltHeading } from "@/components/AltHeading";


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
  const [voiceDegraded, setVoiceDegraded] = useState(false);
  const [lastTranscript, setLastTranscript] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<SessionFeedbackDTO | null>(null);
  const [feedbackLoading, setFeedbackLoading] = useState(false);
  const [savedSessionId, setSavedSessionId] = useState<string | null>(null);
  const [estimatedLevel, setEstimatedLevel] = useState<string | null>(null);
  /** Conversa contínua: a Gisele pergunta, escuta e responde sem cliques. */
  const [continuous, setContinuous] = useState(true);

  const recorderRef = useRef<MicRecorder | null>(null);
  const spokenRef = useRef<string | null>(null);
  const watcherRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const continuousRef = useRef(true);
  const openedRef = useRef(false);
  const stoppingRef = useRef(false);

  useEffect(() => {
    continuousRef.current = continuous;
  }, [continuous]);

  const transport = useMemo(
    () =>
      new DefaultChatTransport({
        api: "/api/gisele-chat",
        body: { threadId, supportLanguage: voice.supportLanguage, mode: "voice" },
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

  // Abertura automática: a Gisele começa a conversa com a primeira pergunta.
  useEffect(() => {
    if (openedRef.current || messages.length > 0) return;
    openedRef.current = true;
    sendMessage({
      text: "[Session start] Begin our voice conversation: greet me briefly and ask me your first question.",
    });
  }, [messages.length, sendMessage]);

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
      scope: "gisele",
    })
      // Degradação graciosa: se o áudio falhar, a sessão continua por texto.
      .catch(() => {
        setShowText(true);
        setVoiceDegraded(true);
        toast.warning(
          "Áudio indisponível agora — continuando por texto. Audio unavailable, switching to text.",
        );
      })
      .finally(() => {
        setPhase("idle");
        // Loop contínuo: terminou de falar, volta a escutar o aluno.
        if (continuousRef.current) void startRecording();
      });
  }, [streaming, lastAssistant, voice.voice, voice.volume, voice.rate, voice.ttsProvider]);

  // Encerra o loop ao sair da tela.
  useEffect(
    () => () => {
      if (watcherRef.current) clearInterval(watcherRef.current);
      recorderRef.current?.cancel();
      stopSpeaking();
    },
    [],
  );

  function clearWatcher() {
    if (watcherRef.current) clearInterval(watcherRef.current);
    watcherRef.current = null;
  }

  /** Detecta fim de fala por silêncio para enviar a resposta automaticamente. */
  function watchSilence() {
    clearWatcher();
    let spoke = false;
    let silenceSince = 0;
    watcherRef.current = setInterval(() => {
      const recorder = recorderRef.current;
      if (!recorder) return clearWatcher();
      const level = recorder.getLevel();
      const elapsed = recorder.elapsedMs();
      if (level > 0.02) {
        spoke = true;
        silenceSince = 0;
      } else if (spoke) {
        if (!silenceSince) silenceSince = Date.now();
        // ~1,6s de silêncio depois de falar = fim do turno.
        if (Date.now() - silenceSince > 1600) void stopRecording();
      } else if (elapsed > 15000) {
        // Ninguém falou: encerra a escuta sem enviar nada.
        clearWatcher();
        recorderRef.current?.cancel();
        recorderRef.current = null;
        setPhase("idle");
      }
      // Turno muito longo: envia mesmo assim.
      if (elapsed > 90000) void stopRecording();
    }, 150);
  }

  async function startRecording() {
    if (recorderRef.current) return;
    try {
      stopSpeaking();
      const recorder = new MicRecorder();
      await recorder.start();
      recorderRef.current = recorder;
      setPhase("recording");
      if (continuousRef.current) watchSilence();
    } catch {
      setContinuous(false);
      toast.error("Não consegui acessar o microfone. Permita o acesso no navegador e tente de novo.");
      setPhase("idle");
    }
  }

  async function stopRecording() {
    const recorder = recorderRef.current;
    if (!recorder || stoppingRef.current) return;
    stoppingRef.current = true;
    clearWatcher();
    recorderRef.current = null;
    setPhase("transcribing");
    try {
      const { blob } = await recorder.stop();
      const text = await transcribeAudio(blob, { provider: voice.sttProvider, scope: "gisele" });
      setLastTranscript(text);
      setPhase("thinking");
      sendMessage({ text });
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Não foi possível transcrever.");
      setPhase("idle");
      // No modo contínuo, volta a escutar em vez de travar a conversa.
      if (continuousRef.current) setTimeout(() => void startRecording(), 600);
    } finally {
      stoppingRef.current = false;
    }
  }

  /** Pausa o loop contínuo sem sair da sessão. */
  function stopLoop() {
    setContinuous(false);
    continuousRef.current = false;
    clearWatcher();
    recorderRef.current?.cancel();
    recorderRef.current = null;
    stopSpeaking();
    setPhase("idle");
  }

  function resumeLoop() {
    setContinuous(true);
    continuousRef.current = true;
    void startRecording();
  }


  function retry() {
    if (!lastTranscript) return;
    stopSpeaking();
    setPhase("thinking");
    sendMessage({ text: `Let me try that again: ${lastTranscript}` });
  }

  /** Transcrição da sessão no formato salvo no histórico. */
  const turns = useMemo(
    () =>
      messages
        .map((m) => ({
          role: (m.role === "user" ? "student" : "gisele") as "student" | "gisele",
          text: textOf(m),
          at: new Date().toISOString(),
        }))
        .filter((t) => t.text && !t.text.startsWith("[Session start]")),
    [messages],
  );

  // Autosave: guarda a transcrição a cada turno concluído, para o histórico
  // ficar completo mesmo se o aluno sair sem encerrar a sessão.
  const savedCountRef = useRef(0);
  useEffect(() => {
    if (streaming || turns.length === 0 || turns.length === savedCountRef.current) return;
    savedCountRef.current = turns.length;
    void saveVoiceTranscript({ data: { threadId, turns } }).catch(() => {});
  }, [streaming, turns, threadId]);

  async function getFeedback() {
    try {
      setFeedbackLoading(true);
      // Arquiva a sessão completa: transcript + correções suaves + nível estimado.
      const saved = await finalizeVoiceSession({ data: { threadId, turns } }).catch(() => null);
      const result = await requestSessionFeedback({ data: { threadId } });
      setFeedback(result);
      setSavedSessionId(saved?.sessionId ?? null);
      setEstimatedLevel(saved?.estimatedLevel ?? null);
      toast.success("Session saved to your history.");
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
        <h1 className="text-2xl font-bold"><AltHeading text={"Voice Room"} /></h1>
        <p className="text-sm italic text-muted-foreground">
          Fale em inglês, ouça a Gisele e continue a conversa. A voz é gerada por IA.
        </p>
      </header>

      <AiVoiceDisclosure />
      {isBrandVoice(voice.voice) ? (
        <p className="text-[11px] text-muted-foreground">
          GiseleAI voice active · Voz oficial da GiseleAI (áudio gerado por IA).
        </p>
      ) : null}

      {voiceDegraded && (
        <p className="rounded-lg border border-gold/40 bg-gold/5 px-4 py-2 text-xs text-muted-foreground">
          Voice playback is unavailable right now — the session continues in text.
          <span className="block italic">
            O áudio falhou, mas a conversa segue normalmente por texto.
          </span>
        </p>
      )}


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
          <p className="text-sm font-semibold text-foreground">
            {continuous && phase === "idle" ? "Your turn — just speak" : label.en}
          </p>
          <p className="text-xs italic text-muted-foreground">
            {continuous && phase === "idle" ? "Sua vez — pode falar" : label.pt}
          </p>
        </div>


        <p className="rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-[11px] text-muted-foreground">
          {continuous
            ? "Continuous conversation is ON — just talk, I listen and reply."
            : "Continuous conversation is OFF — tap the mic for each turn."}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-2">
          {continuous ? (
            <Button variant="outline" className="gap-2 rounded-full" onClick={stopLoop}>
              <Square className="h-4 w-4" /> Pause conversation
            </Button>
          ) : (
            <Button
              onClick={resumeLoop}
              disabled={busy}
              className="gap-2 rounded-full bg-gold font-semibold text-primary-foreground hover:opacity-90"
            >
              <Mic className="h-4 w-4" /> Resume conversation
            </Button>
          )}
          {phase === "recording" ? (
            <Button
              onClick={stopRecording}
              className="gap-2 rounded-full bg-gold font-semibold text-primary-foreground hover:opacity-90"
            >
              <Square className="h-4 w-4" /> Send now
            </Button>
          ) : (
            <Button
              onClick={startRecording}
              disabled={busy || phase === "speaking"}
              variant={continuous ? "outline" : "default"}
              className={`gap-2 rounded-full ${continuous ? "" : "bg-gold font-semibold text-primary-foreground hover:opacity-90"}`}
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

      {feedback && <GiseleFeedbackCard feedback={feedback} />}
    </main>
  );
}
