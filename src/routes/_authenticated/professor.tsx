import { createFileRoute, Link, Outlet, useNavigate, useRouter } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { Plus, MessageSquare, Trash2, ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import logo from "@/assets/speak2co-logo.asset.json";
import { AiUsageGuard } from "@/components/AiUsageGuard";
import { FeatureGate } from "@/components/FeatureGate";
import {
  getThreads,
  createThread,
  deleteThread,
  type ChatThread,
} from "@/lib/chat.functions";

export const Route = createFileRoute("/_authenticated/professor")({
  head: () => ({
    meta: [
      { title: "AI Teacher — Speak2Co" },
      {
        name: "description",
        content:
          "Pratique inglês com o AI Teacher da Speak2Co: conversas personalizadas com correções de gramática e pronúncia.",
      },
      { property: "og:title", content: "AI Teacher — Speak2Co" },
      { property: "og:description", content: "Converse em inglês com seu AI Teacher pessoal." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <FeatureGate
      feature="ai_teacher"
      title="AI Teacher está disponível em todos os acessos"
      benefit="Converse em inglês 24h por dia com correções de gramática, vocabulário e pronúncia geradas por IA."
      requiredPlan="Speak2Co All Access"
    >
      <ProfessorLayout />
    </FeatureGate>
  ),
});

function ProfessorLayout() {
  const navigate = useNavigate();
  const router = useRouter();
  const queryClient = useQueryClient();
  const fetchThreads = useServerFn(getThreads);
  const createThreadFn = useServerFn(createThread);
  const deleteThreadFn = useServerFn(deleteThread);

  const { data: threads } = useQuery<ChatThread[]>({
    queryKey: ["chat-threads"],
    queryFn: () => fetchThreads(),
  });

  const [creating, setCreating] = useState(false);

  // Active thread id is derived from the current URL.
  const pathname = router.state.location.pathname;
  const activeThreadId = pathname.startsWith("/professor/")
    ? decodeURIComponent(pathname.replace("/professor/", ""))
    : undefined;

  async function handleNewThread() {
    try {
      setCreating(true);
      const thread = await createThreadFn({ data: {} });
      await queryClient.invalidateQueries({ queryKey: ["chat-threads"] });
      navigate({ to: "/professor/$threadId", search: { prompt: undefined }, params: { threadId: thread.id } });
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Não foi possível criar a conversa.");
    } finally {
      setCreating(false);
    }
  }

  async function handleDelete(threadId: string) {
    try {
      await deleteThreadFn({ data: { threadId } });
      await queryClient.invalidateQueries({ queryKey: ["chat-threads"] });
      if (activeThreadId === threadId) {
        navigate({ to: "/professor" });
      }
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Não foi possível excluir a conversa.");
    }
  }

  return (
    <div className="surface-navy flex h-screen flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="flex w-full shrink-0 flex-col border-b border-border md:h-screen md:w-72 md:border-r md:border-b-0">
        <div className="flex items-center justify-between gap-2 p-4">
          <Link to="/painel" className="flex items-center gap-2">
            <img src={logo.url} alt="Speak2Co" className="h-9 w-9 rounded-full" />
            <span className="text-sm font-semibold text-gold">AI Teacher</span>
          </Link>
          <Link
            to="/painel"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Voltar ao painel"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </div>

        <div className="px-3">
          <Button
            onClick={handleNewThread}
            disabled={creating}
            className="w-full justify-start gap-2 rounded-full bg-gold text-primary-foreground font-semibold hover:opacity-90"
          >
            <Plus className="h-4 w-4" /> Nova conversa
          </Button>
        </div>

        <nav className="mt-2 flex-1 space-y-1 overflow-y-auto p-3">
          {threads && threads.length === 0 && (
            <p className="px-2 py-6 text-center text-xs text-muted-foreground">
              Nenhuma conversa ainda. Comece uma nova!
            </p>
          )}
          {threads?.map((t) => (
            <div
              key={t.id}
              className={`group flex items-center gap-2 rounded-lg px-2 py-2 text-sm transition-colors ${
                activeThreadId === t.id
                  ? "bg-secondary text-foreground"
                  : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground"
              }`}
            >
              <button
                type="button"
                onClick={() =>
                  navigate({ to: "/professor/$threadId", search: { prompt: undefined }, params: { threadId: t.id } })
                }
                className="flex flex-1 items-center gap-2 truncate text-left"
              >
                <MessageSquare className="h-4 w-4 shrink-0" />
                <span className="truncate">{t.title}</span>
              </button>
              <button
                type="button"
                onClick={() => handleDelete(t.id)}
                aria-label="Excluir conversa"
                className="opacity-0 transition-opacity hover:text-destructive group-hover:opacity-100"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          ))}
        </nav>
      </aside>

      {/* Chat area */}
      <div className="flex min-h-0 flex-1 flex-col">
        <AiUsageGuard>
          <Outlet />
        </AiUsageGuard>
      </div>
    </div>
  );
}
