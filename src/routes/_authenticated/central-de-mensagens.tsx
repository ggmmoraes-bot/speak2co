import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { ArrowLeft, Loader2, Mail, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  listFounderMessages,
  sendFounderMessage,
  type FounderMessage,
} from "@/lib/founder.functions";
import founderPhoto from "@/assets/gisele-moraes.jpeg.asset.json";

export const Route = createFileRoute("/_authenticated/central-de-mensagens")({
  head: () => ({
    meta: [
      { title: "Talk to the Founder — Speak2Co" },
      {
        name: "description",
        content:
          "Central de mensagens da Speak2Co: envie dúvidas, sugestões e feedback direto para Gisele Moraes, Founder | English Mentor.",
      },
      { property: "og:title", content: "Talk to the Founder — Speak2Co" },
      {
        property: "og:description",
        content: "Fale com a fundadora da Speak2Co e tire dúvidas sobre a plataforma.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FounderInbox,
});

const SUGGESTIONS = [
  "Como acesso os cursos de inglês?",
  "Como funciona a pronúncia com IA?",
  "Como troco o meu plano?",
  "Onde encontro meus certificados?",
];

function FounderInbox() {
  const fetchMessages = useServerFn(listFounderMessages);
  const send = useServerFn(sendFounderMessage);
  const queryClient = useQueryClient();
  const [text, setText] = useState("");
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const { data: messages = [], isPending } = useQuery({
    queryKey: ["founder-messages"],
    queryFn: () => fetchMessages(),
  });

  const mutation = useMutation({
    mutationFn: (content: string) => send({ data: { content } }),
    onSuccess: (data) => {
      queryClient.setQueryData(["founder-messages"], data);
      inputRef.current?.focus();
    },
    onError: (error: Error) => toast.error(error.message),
  });

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, mutation.isPending]);

  function submit() {
    const content = text.trim();
    if (content.length < 2 || mutation.isPending) return;
    setText("");
    mutation.mutate(content);
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-6 py-12">
        <Button asChild variant="ghost" size="sm" className="-ml-2 mb-6 rounded-full">
          <Link to="/painel">
            <ArrowLeft className="mr-1 h-4 w-4" /> Home
          </Link>
        </Button>

        <header className="flex flex-wrap items-center gap-5 rounded-3xl border border-border bg-card/70 p-6 backdrop-blur">
          <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-2xl font-semibold text-gold">
            GM
          </span>
          <div>
            <h1 className="text-2xl font-semibold text-foreground">Talk to the Founder</h1>
            <p className="text-xs text-muted-foreground">Fale com a fundadora</p>
            <p className="mt-2 text-sm font-medium text-gold">
              Gisele Moraes, Founder | English Mentor
            </p>
            <p className="mt-1 max-w-md text-sm text-muted-foreground">
              Envie sugestões, dúvidas, feedback ou problemas encontrados. A IA responde na hora as
              dúvidas sobre a plataforma; o restante chega direto para a Gisele.
            </p>
          </div>
        </header>

        <section className="mt-8 space-y-4">
          {isPending && <p className="text-sm text-muted-foreground">Carregando mensagens...</p>}

          {!isPending && messages.length === 0 && (
            <div className="rounded-3xl border border-dashed border-border p-8 text-center">
              <Mail className="mx-auto h-6 w-6 text-gold" />
              <p className="mt-3 text-sm text-muted-foreground">
                Nenhuma mensagem ainda. Comece por uma destas perguntas:
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => mutation.mutate(s)}
                    className="rounded-full border border-primary/40 px-3 py-1.5 text-xs text-foreground/80 transition hover:border-gold/60"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {messages.map((message: FounderMessage) => (
            <div
              key={message.id}
              className={message.role === "student" ? "flex justify-end" : "flex justify-start"}
            >
              <div
                className={
                  message.role === "student"
                    ? "max-w-[85%] rounded-2xl bg-primary px-4 py-3 text-sm text-primary-foreground"
                    : "max-w-[85%] rounded-2xl border border-border bg-card/60 px-4 py-3 text-sm text-foreground/90"
                }
              >
                {message.role !== "student" && (
                  <p className="mb-1 text-[11px] font-semibold tracking-wide text-gold uppercase">
                    {message.role === "founder" ? "Gisele Moraes" : "Speak2Co Assistant"}
                  </p>
                )}
                <p className="whitespace-pre-wrap">{message.content}</p>
                {message.needs_founder && message.role === "ai" && (
                  <p className="mt-2 text-[11px] text-muted-foreground">
                    Encaminhado para a Gisele responder pessoalmente.
                  </p>
                )}
              </div>
            </div>
          ))}

          {mutation.isPending && (
            <p className="flex items-center gap-2 text-sm text-muted-foreground">
              <Loader2 className="h-4 w-4 animate-spin" /> Escrevendo resposta...
            </p>
          )}
          <div ref={bottomRef} />
        </section>

        <div className="sticky bottom-4 mt-6 rounded-2xl border border-border bg-card/80 p-3 backdrop-blur">
          <Textarea
            ref={inputRef}
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                submit();
              }
            }}
            placeholder="Escreva sua mensagem para a Gisele..."
            className="min-h-20 resize-none border-0 bg-transparent focus-visible:ring-0"
          />
          <div className="flex justify-end">
            <Button
              onClick={submit}
              disabled={mutation.isPending || text.trim().length < 2}
              className="rounded-full bg-gold font-semibold text-primary-foreground hover:opacity-90"
            >
              {mutation.isPending ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Send className="mr-2 h-4 w-4" />
              )}
              Enviar
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
