import { BrandText } from "@/components/BrandText";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import {
  ArrowRight,
  Briefcase,
  Compass,
  GraduationCap,
  Mic,
  Plane,
  RefreshCw,
  Sparkles,
  SpellCheck,
  Target,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shimmer } from "@/components/ai-elements/shimmer";
import giseleLogo from "@/assets/gisele-ai-art.png.asset.json";
import { FOCUS_LABEL } from "@/lib/gisele-focus";
import {
  completeReviewItem,
  createGiseleThread,
  getGiseleOverview,
  type GiseleFocus,
} from "@/lib/gisele.functions";

export const Route = createFileRoute("/_authenticated/gisele/")({
  component: GiseleHub,
});

const FOCUS_ICON: Record<GiseleFocus, typeof Mic> = {
  conversation: Sparkles,
  pronunciation: Mic,
  interview: Briefcase,
  travel: Plane,
  grammar: SpellCheck,
  vocabulary: GraduationCap,
};

function GiseleHub() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const fetchOverview = useServerFn(getGiseleOverview);
  const createFn = useServerFn(createGiseleThread);
  const completeFn = useServerFn(completeReviewItem);

  const { data, isPending } = useQuery({
    queryKey: ["gisele-overview"],
    queryFn: () => fetchOverview(),
  });

  async function startSession(focus: GiseleFocus, contextNote?: string) {
    try {
      const thread = await createFn({
        data: { focus, ...(contextNote ? { contextNote } : {}) },
      });
      await queryClient.invalidateQueries({ queryKey: ["gisele-threads"] });
      navigate({ to: "/gisele/$threadId", params: { threadId: thread.id } });
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Não foi possível iniciar a sessão.");
    }
  }

  async function markReviewed(id: string) {
    try {
      await completeFn({ data: { id } });
      await queryClient.invalidateQueries({ queryKey: ["gisele-overview"] });
      toast.success("Marcado para revisar de novo em 7 dias.");
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Não foi possível atualizar.");
    }
  }

  if (isPending || !data) {
    return (
      <div className="flex flex-1 items-center justify-center p-12">
        <Shimmer>Preparando sua mentoria…</Shimmer>
      </div>
    );
  }

  const { snapshot, nextSteps, review, stats } = data;

  return (
    <main className="mx-auto w-full max-w-5xl flex-1 space-y-10 px-6 py-10">
      {/* Cabeçalho de mentoria */}
      <header className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
        <img
          src={giseleLogo.url}
          alt="GiseleAI by Speak2Co"
          className="w-40 rounded-2xl object-contain ring-1 ring-gold/40 sm:w-52"
        />
        <div className="space-y-1">
          <h1 className="text-3xl font-bold">
            <BrandText text="GiseleAI" /> <span className="text-foreground">by</span>{" "}
            <BrandText text="Speak2Co" />
          </h1>
          <p className="text-sm text-muted-foreground">
            Your Personal English Mentor powered by AI.
            <span className="block italic">Mentoria exclusiva do plano Signature.</span>
          </p>
          <div className="flex flex-wrap gap-2 pt-2 text-xs">
            <span className="rounded-full border border-gold/40 bg-gold/10 px-3 py-1 font-semibold text-gold">
              {snapshot.level ?? "Nível a definir"}
            </span>
            <span className="rounded-full border border-border px-3 py-1 text-muted-foreground">
              {stats.sessions} sessions · {stats.minutes} min · {stats.corrections} corrections
            </span>
          </div>
        </div>
      </header>

      <p className="rounded-lg border border-border/60 bg-secondary/40 px-4 py-2 text-xs text-muted-foreground">
        As respostas e o áudio da GiseleAI são gerados por inteligência artificial.
      </p>

      {/* Próximos passos */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold text-foreground">Your next step</h2>
          <p className="text-sm italic text-muted-foreground">
            O que faz mais diferença agora, com base no seu progresso real.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {nextSteps.map((step) => (
            <Card key={step.id} className="flex flex-col justify-between gap-4 border-border/70 p-5">
              <div className="space-y-1">
                <Target className="h-5 w-5 text-gold" />
                <p className="font-semibold text-foreground">{step.titleEn}</p>
                <p className="text-xs italic text-muted-foreground">{step.titlePt}</p>
              </div>
              {step.to ? (
                <Button asChild size="sm" variant="outline" className="w-fit rounded-full">
                  <Link to={step.to}>
                    Open <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </Link>
                </Button>
              ) : (
                <Button
                  size="sm"
                  onClick={() => startSession(step.focus ?? "conversation", step.titleEn)}
                  className="w-fit rounded-full bg-gold font-semibold text-primary-foreground hover:opacity-90"
                >
                  Practice now
                </Button>
              )}
            </Card>
          ))}
        </div>
      </section>

      {/* Sessões guiadas */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold text-foreground">Guided sessions</h2>
          <p className="text-sm italic text-muted-foreground">
            Escolha um foco e comece a falar — você pode encerrar quando quiser.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {(Object.keys(FOCUS_LABEL) as GiseleFocus[]).map((focus) => {
            const Icon = FOCUS_ICON[focus];
            return (
              <button
                key={focus}
                type="button"
                onClick={() => startSession(focus)}
                className="group flex flex-col items-start gap-2 rounded-xl border border-border/70 bg-secondary/30 p-5 text-left transition-colors hover:border-gold/50 hover:bg-secondary/60"
              >
                <Icon className="h-5 w-5 text-gold" />
                <span className="font-semibold text-foreground">{FOCUS_LABEL[focus].en}</span>
                <span className="text-xs italic text-muted-foreground">{FOCUS_LABEL[focus].pt}</span>
                <span className="mt-1 flex items-center gap-1 text-xs text-gold opacity-0 transition-opacity group-hover:opacity-100">
                  Start <ArrowRight className="h-3 w-3" />
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Consolidação / revisão espaçada */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold text-foreground">Consolidation</h2>
          <p className="text-sm italic text-muted-foreground">
            Itens que eu separei para você revisar — repetição espaçada é o que fixa.
          </p>
        </div>
        {review.length === 0 ? (
          <Card className="border-dashed border-border/70 p-6 text-sm text-muted-foreground">
            <Compass className="mb-2 h-5 w-5 text-gold" />
            Nothing to review yet. Finish a session and I&apos;ll save what you should come back to.
          </Card>
        ) : (
          <ul className="space-y-2">
            {review.map((item) => (
              <li
                key={item.id}
                className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-border/70 bg-secondary/30 px-4 py-3"
              >
                <div>
                  <p className="text-sm text-foreground">{item.content}</p>
                  {item.review_at && (
                    <p className="text-xs text-muted-foreground">
                      Review by {new Date(item.review_at).toLocaleDateString("pt-BR")}
                    </p>
                  )}
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    onClick={() => startSession("vocabulary", `Review item: ${item.content}`)}
                    className="rounded-full bg-gold font-semibold text-primary-foreground hover:opacity-90"
                  >
                    Practice now
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => markReviewed(item.id)}
                    className="gap-1 rounded-full text-xs"
                  >
                    <RefreshCw className="h-3.5 w-3.5" /> Done
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
