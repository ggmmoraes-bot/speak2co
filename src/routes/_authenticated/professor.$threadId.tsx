import { createFileRoute } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, type UIMessage } from "ai";
import { useEffect, useMemo, useRef, useState } from "react";
import { toast } from "sonner";
import { Mic, Square, Volume2, Loader2, AudioLines } from "lucide-react";
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
import { getThreadMessages } from "@/lib/chat.functions";
import { supabase } from "@/integrations/supabase/client";


export const Route = createFileRoute("/_authenticated/professor/$threadId")({
  component: ProfessorThread,
});

function ProfessorThread() {
  const { threadId } = Route.useParams();
  const fetchMessages = useServerFn(getThreadMessages);

  const { data: initialMessages, isLoading } = useQuery({
    queryKey: ["chat-messages", threadId],
    queryFn: () => fetchMessages({ data: { threadId } }),
  });

  if (isLoading || initialMessages === undefined) {
    return (
      <div className="flex flex-1 items-center justify-center p-8">
        <Shimmer>Carregando conversa…</Shimmer>
      </div>
    );
  }

  return <ChatWindow key={threadId} threadId={threadId} initialMessages={initialMessages as UIMessage[]} />;
}

function ChatWindow({
  threadId,
  initialMessages,
}: {
  threadId: string;
  initialMessages: UIMessage[];
}) {
  const queryClient = useQueryClient();
  const promptRef = useRef<HTMLDivElement | null>(null);

  const transport = useMemo(
    () =>
      new DefaultChatTransport({
        api: "/api/chat",
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

  const { messages, sendMessage, status, stop, error } = useChat({
    id: threadId,
    messages: initialMessages,
    transport,
    onError: (err) => toast.error(err.message || "Algo deu errado na conversa."),
  });

  // Focus the textarea on mount.
  const focusTextarea = () => promptRef.current?.querySelector("textarea")?.focus();
  useEffect(() => {
    focusTextarea();
  }, []);

  const isBusy = status === "submitted" || status === "streaming";

  // ---- Voz -----------------------------------------------------------------
  const [recording, setRecording] = useState(false);
  const [transcribing, setTranscribing] = useState(false);
  const [speakingId, setSpeakingId] = useState<string | null>(null);
  const [autoSpeak, setAutoSpeak] = useState(false);
  const [pronOpen, setPronOpen] = useState(false);
  const recorderRef = useRef<MicRecorder | null>(null);
  const lastSpokenRef = useRef<string | null>(null);

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
      await speakText(text);
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Não foi possível gerar o áudio.");
    } finally {
      setSpeakingId((current) => (current === m.id ? null : current));
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
        await handleSubmit({ text });
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

  async function handleSubmit({ text }: { text: string }) {
    const value = text.trim();
    if (!value || isBusy) return;
    try {
      await sendMessage({ text: value });
      // Refresh the sidebar so the new title / ordering shows up.
      await queryClient.invalidateQueries({ queryKey: ["chat-threads"] });
    } catch {
      // onError already toasts
    } finally {
      focusTextarea();
    }
  }

  // Leitura automática da última resposta do professor.
  useEffect(() => {
    if (!autoSpeak || status !== "ready") return;
    const last = messages.at(-1);
    if (!last || last.role !== "assistant") return;
    if (lastSpokenRef.current === last.id) return;
    lastSpokenRef.current = last.id;
    void playMessage(last);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoSpeak, status, messages]);

  useEffect(() => () => {
    recorderRef.current?.cancel();
    stopSpeaking();
  }, []);

  return (
    <div className="flex h-full min-h-0 flex-1 flex-col">
      <Conversation className="flex-1">
        <ConversationContent className="mx-auto w-full max-w-3xl">
          {messages.length === 0 && (
            <ConversationEmptyState
              title="Converse com seu Professor IA"
              description="Fale ou digite em inglês. Peça correções, ouça a resposta em voz nativa ou treine sua pronúncia."
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
                    {speakingId === m.id ? "Tocando…" : "Ouvir"}
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
            <AudioLines className="h-4 w-4" /> Checar pronúncia
          </Button>
          <Button
            type="button"
            size="sm"
            variant={autoSpeak ? "secondary" : "ghost"}
            onClick={() => {
              if (autoSpeak) stopSpeaking();
              setAutoSpeak((v) => !v);
            }}
            className="gap-1 text-xs"
          >
            <Volume2 className="h-4 w-4" /> Voz automática {autoSpeak ? "ligada" : "desligada"}
          </Button>
        </div>

        <PromptInput onSubmit={handleSubmit} className="mx-auto max-w-3xl">
          <PromptInputTextarea
            placeholder={recording ? "Gravando… fale em inglês" : "Type or speak in English…"}
            disabled={isBusy || transcribing}
          />
          <PromptInputFooter className="justify-between">
            <Button
              type="button"
              size="sm"
              onClick={toggleRecording}
              disabled={isBusy || transcribing}
              variant={recording ? "destructive" : "secondary"}
              className="gap-1 rounded-full text-xs"
            >
              {transcribing ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : recording ? (
                <Square className="h-4 w-4" />
              ) : (
                <Mic className="h-4 w-4" />
              )}
              {transcribing ? "Transcrevendo…" : recording ? "Parar e enviar" : "Falar"}
            </Button>
            <PromptInputSubmit status={status} onStop={stop} disabled={isBusy} />
          </PromptInputFooter>
        </PromptInput>
      </div>

      <PronunciationDialog open={pronOpen} onOpenChange={setPronOpen} />
    </div>
  );

}
