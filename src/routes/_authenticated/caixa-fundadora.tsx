import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { ArrowLeft, CheckCircle2, Loader2, Mail, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { AltHeading } from "@/components/AltHeading";
import { useIsAdmin } from "@/lib/entitlements";
import {
  listEscalatedMessages,
  replyAsFounder,
  resolveFounderMessage,
} from "@/lib/founder-admin.functions";

export const Route = createFileRoute("/_authenticated/caixa-fundadora")({
  head: () => {
    const title = "Founder Inbox — Speak2Co";
    const description =
      "Caixa de entrada da fundadora: mensagens de alunos que a IA da Speak2Co não conseguiu resolver.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: FounderAdminInbox,
});

function FounderAdminInbox() {
  const fetchItems = useServerFn(listEscalatedMessages);
  const reply = useServerFn(replyAsFounder);
  const resolve = useServerFn(resolveFounderMessage);
  const queryClient = useQueryClient();
  const isAdmin = useIsAdmin();
  const [onlyPending, setOnlyPending] = useState(true);
  const [drafts, setDrafts] = useState<Record<string, string>>({});

  const { data: items = [], isPending, error } = useQuery({
    queryKey: ["founder-escalations", onlyPending],
    queryFn: () => fetchItems({ data: { onlyPending } }),
    // O servidor também valida (403); aqui evitamos até a chamada para alunos.
    enabled: isAdmin,
  });


  function refresh() {
    void queryClient.invalidateQueries({ queryKey: ["founder-escalations"] });
    void queryClient.invalidateQueries({ queryKey: ["founder-pending-count"] });
  }

  const replyMutation = useMutation({
    mutationFn: (vars: { messageId: string; userId: string; content: string }) =>
      reply({ data: vars }),
    onSuccess: (_d, vars) => {
      setDrafts((prev) => ({ ...prev, [vars.messageId]: "" }));
      toast.success("Resposta enviada ao aluno.");
      refresh();
    },
    onError: (e) => toast.error(e instanceof Error ? e.message : "Não foi possível responder."),
  });

  const resolveMutation = useMutation({
    mutationFn: (messageId: string) => resolve({ data: { messageId } }),
    onSuccess: () => {
      toast.success("Mensagem marcada como resolvida.");
      refresh();
    },
    onError: (e) => toast.error(e instanceof Error ? e.message : "Não foi possível atualizar."),
  });

  if (error) {
    return (
      <main className="mx-auto w-full max-w-2xl flex-1 px-6 py-16 text-center">
        <h1 className="text-xl font-semibold text-foreground">Acesso restrito</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Esta caixa de entrada é exclusiva da fundadora.
        </p>
      </main>
    );
  }

  if (!isAdmin) {
    return (
      <main className="mx-auto w-full max-w-2xl flex-1 px-6 py-16 text-center">
        <AltHeading text="Área restrita" className="text-2xl" />
        <p className="mt-3 text-sm text-muted-foreground">
          Esta área é exclusiva da administração da Speak2Co.
        </p>
        <Button asChild className="mt-6">
          <Link to="/painel">Back to dashboard</Link>
        </Button>
      </main>
    );
  }

  return (

    <main className="mx-auto w-full max-w-3xl flex-1 space-y-6 px-6 py-10">
      <Link
        to="/painel"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> Dashboard
      </Link>

      <header className="space-y-1">
        <h1 className="flex items-center gap-2 text-2xl font-bold">
          <Mail className="h-6 w-6 text-gold" />
          <AltHeading text={"Founder Inbox"} />
        </h1>
        <p className="text-sm text-muted-foreground">
          Mensagens que a IA não resolveu e foram encaminhadas para você.
        </p>
      </header>

      <div className="flex gap-2">
        <Button
          size="sm"
          variant={onlyPending ? "default" : "outline"}
          onClick={() => setOnlyPending(true)}
        >
          Pendentes
        </Button>
        <Button
          size="sm"
          variant={onlyPending ? "outline" : "default"}
          onClick={() => setOnlyPending(false)}
        >
          Todas
        </Button>
      </div>

      {isPending && (
        <p className="flex items-center gap-2 text-sm text-muted-foreground">
          <Loader2 className="h-4 w-4 animate-spin" /> Carregando…
        </p>
      )}

      {!isPending && items.length === 0 && (
        <p className="rounded-3xl border border-border bg-card/60 p-6 text-sm text-muted-foreground">
          Nenhuma mensagem aguardando você. Tudo em dia.
        </p>
      )}

      <div className="space-y-4">
        {items.map((item) => (
          <article
            key={item.id}
            className="space-y-3 rounded-3xl border border-border bg-card/60 p-5"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-sm font-semibold text-foreground">
                {item.studentName}{" "}
                <span className="rounded-full border border-gold/40 bg-gold/10 px-2 py-0.5 text-[10px] font-semibold uppercase text-gold">
                  {item.plan}
                </span>
              </span>
              <span className="text-[11px] text-muted-foreground">
                {new Date(item.createdAt).toLocaleString("pt-BR")}
                {item.answered ? " · respondida" : " · pendente"}
              </span>
            </div>

            {item.question && (
              <div>
                <p className="text-[11px] font-semibold uppercase text-muted-foreground">
                  Dúvida do aluno
                </p>
                <p className="whitespace-pre-line text-sm text-foreground">{item.question}</p>
              </div>
            )}

            <div className="rounded-2xl bg-muted/40 p-3">
              <p className="text-[11px] font-semibold uppercase text-muted-foreground">
                Resposta da IA
              </p>
              <p className="whitespace-pre-line text-xs text-muted-foreground">{item.aiReply}</p>
            </div>

            <Textarea
              value={drafts[item.id] ?? ""}
              onChange={(e) => setDrafts((prev) => ({ ...prev, [item.id]: e.target.value }))}
              placeholder="Escreva sua resposta como Gisele Moraes…"
              rows={3}
            />

            <div className="flex flex-wrap gap-2">
              <Button
                size="sm"
                disabled={replyMutation.isPending || (drafts[item.id] ?? "").trim().length < 2}
                onClick={() =>
                  replyMutation.mutate({
                    messageId: item.id,
                    userId: item.userId,
                    content: (drafts[item.id] ?? "").trim(),
                  })
                }
              >
                <Send className="mr-2 h-4 w-4" /> Send reply
              </Button>
              {!item.answered && (
                <Button
                  size="sm"
                  variant="outline"
                  disabled={resolveMutation.isPending}
                  onClick={() => resolveMutation.mutate(item.id)}
                >
                  <CheckCircle2 className="mr-2 h-4 w-4" /> Mark as resolved
                </Button>
              )}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
