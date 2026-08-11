import { createFileRoute } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, type UIMessage } from "ai";
import { useEffect, useMemo, useRef, useState } from "react";
import { toast } from "sonner";
import { AudioLines, CheckCircle2, Loader2, Mic, Square, Volume2 } from "lucide-react";
import {
  Conversation,
  ConversationContent,
  ConversationEmptyState,
  ConversationScrollButton,
} from "@/components/ai-elements/conversation";
import { Message, MessageContent, MessageResponse } from "@/components/ai-elements/message";
import {
  PromptInput,
  PromptInputTextarea,
  PromptInputFooter,
  PromptInputSubmit,
} from "@/components/ai-elements/prompt-input";
import { Shimmer } from "@/components/ai-elements/shimmer";
import { Button } from "@/components/ui/button";
import { PronunciationDialog } from "@/components/PronunciationDialog";
import { MicRecorder } from "@/lib/audio-recorder";
import { transcribeAudio, speakText, stopSpeaking } from "@/lib/voice-client";
import { useVoiceSettings } from "@/lib/use-voice-settings";
import { supabase } from "@/integrations/supabase/client";
import { FOCUS_LABEL } from "@/lib/gisele-focus";
import {
  closeGiseleSession,
  getGiseleSession,
  getGiseleThreadMessages,
  type GiseleFocus,
} from "@/lib/gisele.functions";

export const Route = createFileRoute("/_authenticated/gisele/$threadId")({
  component: GiseleThreadPage,
});

function GiseleThreadPage() {
  const { threadId } = Route.useParams();
  const fetchMessages = useServerFn(getGiseleThreadMessages);
  const fetchSession = useServerFn(getGiseleSession);

  const { data: initialMessages, isLoading } = useQuery({
    queryKey: ["gisele-messages", threadId],
    queryFn: () => fetchMessages({ data: { threadId } }),
  });
  const { data: session } = useQuery({
    queryKey: ["gisele-session", threadId],
    queryFn: () => fetchSession({ data: { threadId } }),
  });

  if (isLoading || initialMessages === undefined) {
    return (
      <div className="flex flex-1 items-center justify-center p-8">
        <Shimmer>Loading session…</Shimmer>
      </div>
    );
  }

  return (
    <GiseleChat
      key={threadId}
      threadId={threadId}
      initialMessages={initialMessages as unknown as UIMessage[]}
      focus={(session?.focus as GiseleFocus | undefined) ?? "conversation"}
    />
  );
}

function GiseleChat({
  threadId,
  initialMessages,
  focus,
}: {
  threadId: string;
  initialMessages: UIMessage[];
  focus: GiseleFocus;
}) {
  const queryClient = useQueryClient();
  const closeFn = useServerFn(closeGiseleSession);
  const promptRef = useRef<HTMLDivElement | null>(null);
  const label = FOCUS_LABEL[focus] ?? FOCUS_LABEL.conversation;

  const transport = useMemo(
    () =>
      new DefaultChatTransport({
        api: "/api/gisele-chat",
        body: { threadId },
        fetch: async (input, init) => {
          const { data } = await supabase.auth.getSession();
          const token = data.session?.access_token;
          const headers = new Headers(init?.headers);
          if (token) headers.set("Authorization", `Bearer ${token}`);
          return fetch(input, { ...init, headers });
        },
      }),
    [threadId],
  );

  const { messages, sendMessage, status, error } = useChat({
    id: threadId,
    messages: initialMessages,
    transport,
    onError: (err) => toast.error(err.message || "Algo deu errado na sessão."),
  });

  const isBusy = status === "submitted" || status === "streaming";
  const focusTextarea = () => promptRef.current?.querySelector("textarea")?.focus();
  useEffect(() => {
    focusTextarea();
  }, [threadId]);

  const [recording, setRecording] = useState(false);
  const [transcribing, setTranscribing] = useState(false);
  const [speakingId, setSpeakingId] = useState<string | null>(null);
  const [pronOpen, setPronOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const recorderRef = useRef<MicRecorder | null>(null);
  const { settings: voice } = useVoiceSettings();

  const messageText = (m: UIMessage) =>
    m.parts.map((p) => (p.type === "text" ? p.text : "")).join(" ").trim();

  async function playMessage(m: UIMessage) {
    const text = messageText(m);
    if (!text) return;
    if (speakingId === m.id) {
      stopSpeaking();
      setSpeakingId(null);
      return;
    }
    try {
      setSpeakingId(m.id);
      await speakText(text, { volume: voice.volume, rate: voice.rate });
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Não foi possível gerar o áudio.");
    } finally {
      setSpeakingId((current) => (current === m.id ? null : current));
    }
  }

  async function submit(text: string) {
    const value = text.trim();
    if (!value || isBusy) return;
    try {
      await sendMessage({ text: value });
      await queryClient.invalidateQueries({ queryKey: ["gisele-threads"] });
    } catch {
      // onError já avisa
    } finally {
      focusTextarea();
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
        await submit(text);
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
      toast.error("Preciso de acesso ao microfone para ouvir você.");
    }
  }

  async function endSession() {
    try {
      setClosing(true);
      const result = await closeFn({ data: { threadId } });
      await queryClient.invalidateQueries({ queryKey: ["gisele-overview"] });
      toast.success(result.summary, { duration: 8000 });
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Não foi possível encerrar a sessão.");
    } finally {
      setClosing(false);
    }
  }

  useEffect(
    () => () => {
      recorderRef.current?.cancel();
      stopSpeaking();
    },
    [],
  );

  return (
    <div className="flex h-full min-h-0 flex-1 flex-col">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-3">
        <div>
          <p className="text-sm font-semibold text-foreground">{label.en}</p>
          <p className="text-xs italic text-muted-foreground">{label.pt}</p>
        </div>
        <Button
          size="sm"
          variant="outline"
          onClick={endSession}
          disabled={closing}
          className="gap-1 rounded-full text-xs"
        >
          {closing ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <CheckCircle2 className="h-3.5 w-3.5" />}
          End session
        </Button>
      </div>

      <Conversation className="flex-1">
        <ConversationContent className="mx-auto w-full max-w-3xl">
          {messages.length === 0 && (
            <ConversationEmptyState
              title={`${label.en} with GiseleAI`}
              description="Speak or type in English. I adapt to your level, correct what matters most and save what you should review later."
            />
          )}

          {messages.map((m) => (
            <Message key={m.id} from={m.role}>
              <MessageContent>
                {m.parts.map((part, i) =>
                  part.type === "text" && part.text ? (
                    m.role === "assistant" ? (
                      <MessageResponse key={i}>{part.text}</MessageResponse>
                    ) : (
                      <p key={i} className="whitespace-pre-wrap">
                        {part.text}
                      </p>
                    )
                  ) : null,
                )}
                {m.role === "assistant" && messageText(m) && (
                  <button
                    type="button"
                    onClick={() => playMessage(m)}
                    aria-label="Ouvir a resposta"
                    className="flex w-fit items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-gold"
                  >
                    {speakingId === m.id ? (
                      <Loader2 className="h-3.5 w-3.5 animate-spin" />
                    ) : (
                      <Volume2 className="h-3.5 w-3.5" />
                    )}
                    {speakingId === m.id ? "Playing…" : "Listen"}
                  </button>
                )}
              </MessageContent>
            </Message>
          ))}

          {status === "submitted" && (
            <Message from="assistant">
              <MessageContent>
                <Shimmer>Thinking…</Shimmer>
              </MessageContent>
            </Message>
          )}

          {error && (
            <p className="text-center text-sm text-destructive">
              Não foi possível responder. Tente novamente.
            </p>
          )}
        </ConversationContent>
        <ConversationScrollButton />
      </Conversation>

      <div ref={promptRef} className="border-t border-border bg-background/80 p-4 backdrop-blur">
        <div className="mx-auto mb-2 flex max-w-3xl flex-wrap items-center gap-2">
          <Button
            type="button"
            size="sm"
            variant="ghost"
            onClick={() => setPronOpen(true)}
            className="gap-1 text-xs"
          >
            <AudioLines className="h-4 w-4" /> Pronunciation check
          </Button>
          <Button
            type="button"
            size="sm"
            variant={recording ? "secondary" : "ghost"}
            onClick={toggleRecording}
            disabled={transcribing}
            className="gap-1 text-xs"
          >
            {transcribing ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : recording ? (
              <Square className="h-4 w-4" />
            ) : (
              <Mic className="h-4 w-4" />
            )}
            {recording ? "Stop and send" : "Speak"}
          </Button>
          <span className="text-[11px] text-muted-foreground">
            Voz gerada por IA · você pode encerrar a sessão quando quiser.
          </span>
        </div>

        <PromptInput
          className="mx-auto max-w-3xl"
          onSubmit={(message) => void submit(message.text ?? "")}
        >
          <PromptInputTextarea
            placeholder={recording ? "Recording… speak in English" : "Type or speak in English…"}
            disabled={isBusy || transcribing}
          />
          <PromptInputFooter className="justify-end">
            <PromptInputSubmit status={status} disabled={isBusy} />
          </PromptInputFooter>
        </PromptInput>
      </div>

      <PronunciationDialog open={pronOpen} onOpenChange={setPronOpen} />
    </div>
  );
}
