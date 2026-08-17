import { BrandText } from "@/components/BrandText";
import { createFileRoute, Link, Outlet, useNavigate, useRouter } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { ArrowLeft, MessageSquare, Plus, Settings, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { FeatureGate } from "@/components/FeatureGate";
import giseleLogo from "@/assets/gisele-ai.png.asset.json";
import {
  getGiseleThreads,
  createGiseleThread,
  deleteGiseleThread,
  type GiseleThread,
} from "@/lib/gisele.functions";

export const Route = createFileRoute("/_authenticated/gisele")({
  head: () => ({
    meta: [
      { title: "GiseleAI by Speak2Co — Mentoria Signature" },
      {
        name: "description",
        content:
          "Sua mentora de inglês com IA: prática diária, feedback claro e recomendações baseadas no seu progresso real. Exclusivo do plano Signature.",
      },
      { property: "og:title", content: "GiseleAI by Speak2Co — Mentoria Signature" },
      {
        property: "og:description",
        content: "Your Personal English Mentor powered by AI — exclusivo do plano Signature.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <FeatureGate
      feature="gisele_ai"
      title="GiseleAI é exclusiva do Signature"
      benefit="Mentoria contínua com IA que conhece seu nível, seu progresso e seus objetivos em todo o ecossistema Speak2Co: prática diária, correções priorizadas e revisão espaçada."
      requiredPlan="Signature"
    >
      <GiseleLayout />
    </FeatureGate>
  ),
});

const GISELE_NAV = [
  { to: "/gisele/onboarding", label: "My goal & level" },
  { to: "/gisele/missao-do-dia", label: "Mission of the day" },
  { to: "/gisele/voice-room", label: "Voice Room" },
  { to: "/gisele/meu-plano", label: "My plan" },
  { to: "/gisele/meu-progresso", label: "My progress" },
  { to: "/gisele/feedback", label: "Feedback" },
  { to: "/gisele/recomendacoes", label: "Recommendations" },
  { to: "/gisele/historico", label: "History" },
  { to: "/gisele/preferencias", label: "Preferences" },
  { to: "/gisele/privacidade", label: "Privacy" },
] as const;


function GiseleLayout() {
  const navigate = useNavigate();
  const router = useRouter();
  const queryClient = useQueryClient();
  const fetchThreads = useServerFn(getGiseleThreads);
  const createFn = useServerFn(createGiseleThread);
  const deleteFn = useServerFn(deleteGiseleThread);

  const { data: threads } = useQuery<GiseleThread[]>({
    queryKey: ["gisele-threads"],
    queryFn: () => fetchThreads(),
  });

  const pathname = router.state.location.pathname;
  const activeThreadId = pathname.startsWith("/gisele/")
    ? decodeURIComponent(pathname.replace("/gisele/", ""))
    : undefined;

  async function handleNew() {
    try {
      const thread = await createFn({ data: { focus: "conversation" } });
      await queryClient.invalidateQueries({ queryKey: ["gisele-threads"] });
      navigate({ to: "/gisele/$threadId", params: { threadId: thread.id } });
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Não foi possível abrir a sessão.");
    }
  }

  async function handleDelete(threadId: string) {
    try {
      await deleteFn({ data: { threadId } });
      await queryClient.invalidateQueries({ queryKey: ["gisele-threads"] });
      if (activeThreadId === threadId) navigate({ to: "/gisele" });
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Não foi possível excluir a sessão.");
    }
  }

  return (
    <div className="surface-navy flex min-h-screen flex-col md:flex-row">
      <aside className="flex w-full shrink-0 flex-col border-b border-border md:h-screen md:w-72 md:border-r md:border-b-0">
        <div className="flex items-center justify-between gap-2 p-4">
          <Link to="/painel" className="flex items-center gap-2">
            <img src={giseleLogo.url} alt="GiseleAI by Speak2Co" className="h-9 w-9 rounded-full object-cover" />
            <BrandText text="GiseleAI" className="text-sm font-semibold" />
          </Link>
          <Link
            to="/painel"
            aria-label="Voltar ao painel"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </div>

        <div className="px-3">
          <Button
            onClick={handleNew}
            className="w-full justify-start gap-2 rounded-full bg-gold font-semibold text-primary-foreground hover:opacity-90"
          >
            <Plus className="h-4 w-4" /> New session
          </Button>
          <Link
            to="/gisele"
            className="mt-2 block rounded-lg px-2 py-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            Mentorship hub
          </Link>
          {GISELE_NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="block rounded-lg px-2 py-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/gisele/configuracoes"
            className="flex items-center gap-2 rounded-lg px-2 py-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            <Settings className="h-3.5 w-3.5" /> Voice &amp; language
          </Link>
        </div>


        <nav className="mt-2 flex-1 space-y-1 overflow-y-auto p-3">
          {threads && threads.length === 0 && (
            <p className="px-2 py-6 text-center text-xs text-muted-foreground">
              No sessions yet. Start one from the hub.
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
                onClick={() => navigate({ to: "/gisele/$threadId", params: { threadId: t.id } })}
                className="flex flex-1 items-center gap-2 truncate text-left"
              >
                <MessageSquare className="h-4 w-4 shrink-0" />
                <span className="truncate">{t.title}</span>
              </button>
              <button
                type="button"
                onClick={() => handleDelete(t.id)}
                aria-label="Excluir sessão"
                className="opacity-0 transition-opacity hover:text-destructive group-hover:opacity-100"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          ))}
        </nav>
      </aside>

      <div className="flex min-h-0 flex-1 flex-col">
        <Outlet />
      </div>
    </div>
  );
}
