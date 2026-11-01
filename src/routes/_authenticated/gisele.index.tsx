import { BrandText } from "@/components/BrandText";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import {
  ArrowRight,
  Briefcase,
  Compass,
  Flame,
  GraduationCap,
  Headphones,
  PenLine,
  Users,

  MessageSquare,
  Mic,
  Plane,
  RefreshCw,
  Sparkles,
  SpellCheck,
  Target,
  Trophy,
  User,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shimmer } from "@/components/ai-elements/shimmer";
import giseleBrand from "@/assets/giseleai-brand.jpg.asset.json";
import { FOCUS_LABEL } from "@/lib/gisele-focus";
import {
  completeReviewItem,
  createGiseleThread,
  getGiseleOverview,
  getGiseleThreads,
  type GiseleFocus,
  type GiseleThread,
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

/** Menu principal da GiseleAI — todas as experiências vivem dentro dela. */
const GISELE_MENU = [
  { to: "/gisele/voice-room", icon: Mic, en: "Speak with GiseleAI", pt: "Falar com a GiseleAI" },
  { to: "/gisele/listening", icon: Headphones, en: "Improve my listening", pt: "Melhorar minha compreensão" },
  { to: "/gisele/writing", icon: PenLine, en: "Improve my writing", pt: "Melhorar minha escrita" },
  { to: "/gisele/revisao", icon: RefreshCw, en: "Review what I learned", pt: "Revisar o que aprendi" },
  { to: "/gisele/real-life", icon: Users, en: "Practice a real-life situation", pt: "Praticar situação real" },
  { to: "/gisele/pontos-fracos", icon: Target, en: "Work on my weak points", pt: "Trabalhar pontos fracos" },
  { to: "/gisele/desafio", icon: Flame, en: "Today's Challenge", pt: "O desafio de hoje" },
  { to: "/gisele/como-dizer", icon: Sparkles, en: "Ask GiseleAI anything", pt: "Perguntar qualquer coisa" },
] as const;


/** Cartão premium padrão da GiseleAI (visual distinto do AI Teacher). */
function GiseleCard({
  title,
  subtitle,
  children,
  action,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  action?: React.ReactNode;
}) {
  return (
    <Card className="relative overflow-hidden border-gold/20 bg-secondary/20 p-6 backdrop-blur-sm">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: "var(--gradient-gold)" }}
      />
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-foreground">{title}</h2>
          {subtitle && <p className="text-xs italic text-muted-foreground">{subtitle}</p>}
        </div>
        {action}
      </div>
      {children}
    </Card>
  );
}

function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rounded-xl border border-gold/20 bg-secondary/30 px-4 py-3">
      <p className="text-2xl font-semibold text-gold">{value}</p>
      <p className="text-xs uppercase tracking-wide text-muted-foreground">{label}</p>
    </div>
  );
}

function GiseleHub() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const fetchOverview = useServerFn(getGiseleOverview);
  const createFn = useServerFn(createGiseleThread);
  const completeFn = useServerFn(completeReviewItem);
  const fetchThreads = useServerFn(getGiseleThreads);

  const { data, isPending } = useQuery({
    queryKey: ["gisele-overview"],
    queryFn: () => fetchOverview(),
  });
  const { data: threads, isPending: threadsPending } = useQuery<GiseleThread[]>({
    queryKey: ["gisele-threads"],
    queryFn: () => fetchThreads(),
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

  if (isPending || threadsPending || !data) {
    return (
      <div className="flex flex-1 items-center justify-center p-12">
        <Shimmer>Preparando sua mentoria…</Shimmer>
      </div>
    );
  }

  const { snapshot, nextSteps, review, stats } = data;
  const firstAccess = stats.sessions === 0 && (threads?.length ?? 0) === 0;

  if (firstAccess) {
    return (
      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center gap-6 px-6 py-16 text-center">
        <img
          src={giseleBrand.url}
          alt="GiseleAI by speak2co — AI English Coach"
          className="w-44 rounded-2xl object-contain ring-1 ring-gold/40"
        />
        <div className="space-y-3">
          <h1 className="text-3xl font-bold">
            Welcome to <BrandText text="GiseleAI" />
          </h1>
          <p className="text-lg text-foreground">
            I&apos;m your personal English mentor. Let&apos;s start your journey.
          </p>
          <p className="text-sm text-gold">Practice. Speak. Learn. Improve.</p>
        </div>
        <Button
          size="lg"
          onClick={() => startSession("conversation")}
          className="btn-gold rounded-full px-8 font-semibold"
        >
          <Sparkles className="mr-2 h-4 w-4" /> Start your first session
        </Button>
        <p className="text-xs text-muted-foreground">
          As respostas e o áudio da GiseleAI são gerados por inteligência artificial.
        </p>
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 space-y-8 px-6 py-10">
      {/* Hero de posicionamento */}
      <section className="relative overflow-hidden rounded-3xl border border-gold/25 bg-secondary/20 p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center">
          <img
            src={giseleBrand.url}
            alt="GiseleAI by speak2co — AI English Coach"
            className="w-40 rounded-2xl object-contain ring-1 ring-gold/40"
            loading="lazy"
          />
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">
              <BrandText text="GiseleAI" />
            </h1>
            <p className="text-lg text-foreground">Your Personal English Mentor</p>
            <p className="text-sm text-gold">Powered by AI. Guided by Gisele.</p>
            <p className="text-sm text-muted-foreground">
              Your English journey, personalized around you.
            </p>
            <div className="flex flex-wrap gap-2 pt-2 text-xs">
              <span className="badge-gold rounded-full px-3 py-1 font-semibold text-gold">
                {snapshot.level ?? "Level to be defined"}
              </span>
              <span className="rounded-full border border-border px-3 py-1 text-muted-foreground">
                All Access experience
              </span>
            </div>
          </div>
          <Button
            onClick={() => startSession("conversation")}
            className="btn-gold ml-auto rounded-full px-6 font-semibold"
          >
            <Sparkles className="mr-2 h-4 w-4" /> Start a session
          </Button>
        </div>
      </section>

      {/* Overview / indicadores */}
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Stat label="Sessions" value={stats.sessions} />
        <Stat label="Minutes practiced" value={stats.minutes} />
        <Stat label="Corrections" value={stats.corrections} />
        <Stat label="To review" value={review.length} />
      </section>

      {/* Menu principal — tudo acontece dentro da GiseleAI */}
      <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {GISELE_MENU.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="group flex flex-col gap-1 rounded-2xl border border-gold/20 bg-secondary/25 p-4 transition-colors hover:border-gold/50 hover:bg-secondary/50"
          >
            <item.icon className="h-5 w-5 icon-gold" />
            <span className="text-sm font-semibold text-foreground">{item.en}</span>
            <span className="text-xs italic text-muted-foreground">{item.pt}</span>
          </Link>
        ))}
      </section>



      <div className="grid gap-6 lg:grid-cols-3">
        {/* Conversation area */}
        <div className="space-y-6 lg:col-span-2">
          <GiseleCard
            title="Conversation"
            subtitle="Fale com a GiseleAI por texto ou voz — tudo acontece aqui dentro."
            action={
              <Link
                to="/gisele/voice-room"
                className="link-gold inline-flex items-center gap-1 text-xs font-semibold"
              >
                <Mic className="h-3.5 w-3.5" /> Voice Room
              </Link>
            }
          >
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {(Object.keys(FOCUS_LABEL) as GiseleFocus[]).map((focus) => {
                const Icon = FOCUS_ICON[focus];
                return (
                  <button
                    key={focus}
                    type="button"
                    onClick={() => startSession(focus)}
                    className="group flex flex-col items-start gap-1 rounded-xl border border-border/60 bg-background/40 p-4 text-left transition-colors hover:border-gold/50 hover:bg-secondary/50"
                  >
                    <Icon className="h-5 w-5 icon-gold" />
                    <span className="text-sm font-semibold text-foreground">
                      {FOCUS_LABEL[focus].en}
                    </span>
                    <span className="text-xs italic text-muted-foreground">
                      {FOCUS_LABEL[focus].pt}
                    </span>
                    <span className="mt-1 flex items-center gap-1 text-xs text-gold opacity-0 transition-opacity group-hover:opacity-100">
                      Start <ArrowRight className="h-3 w-3" />
                    </span>
                  </button>
                );
              })}
            </div>
          </GiseleCard>

          {/* Goals / next steps */}
          <GiseleCard
            title="Your goals"
            subtitle="O que faz mais diferença agora, com base no seu progresso real."
            action={
              <Link to="/gisele/meu-plano" className="link-gold text-xs font-semibold">
                My plan
              </Link>
            }
          >
            <div className="grid gap-3 md:grid-cols-3">
              {nextSteps.map((step) => (
                <div
                  key={step.id}
                  className="flex flex-col justify-between gap-3 rounded-xl border border-border/60 bg-background/40 p-4"
                >
                  <div className="space-y-1">
                    <Target className="h-5 w-5 icon-gold" />
                    <p className="text-sm font-semibold text-foreground">{step.titleEn}</p>
                    <p className="text-xs italic text-muted-foreground">{step.titlePt}</p>
                  </div>
                  <Button
                    size="sm"
                    onClick={() => startSession(step.focus ?? "conversation", step.titleEn)}
                    className="btn-gold w-fit rounded-full font-semibold"
                  >
                    Practice now
                  </Button>
                </div>
              ))}
            </div>
          </GiseleCard>

          {/* Challenges */}
          <GiseleCard
            title="Challenges"
            subtitle="Desafios curtos para manter o ritmo — em breve, novos formatos."
          >
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                { icon: Flame, en: "5-minute speaking streak", pt: "Fale 5 minutos hoje" },
                { icon: Trophy, en: "Zero-hesitation answer", pt: "Responda sem hesitar" },
                { icon: Mic, en: "Pronunciation sprint", pt: "Sprint de pronúncia" },
              ].map((c) => (
                <div
                  key={c.en}
                  className="rounded-xl border border-dashed border-gold/30 bg-background/30 p-4"
                >
                  <c.icon className="mb-2 h-5 w-5 icon-gold" />
                  <p className="text-sm font-semibold text-foreground">{c.en}</p>
                  <p className="text-xs italic text-muted-foreground">{c.pt}</p>
                </div>
              ))}
            </div>
          </GiseleCard>
        </div>

        {/* Coluna lateral: perfil, progresso, feedback, histórico, revisão */}
        <div className="space-y-6">
          <GiseleCard
            title="Your profile"
            subtitle="Nível, objetivo e preferências da sua mentoria."
          >
            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2 text-foreground">
                <User className="h-4 w-4 icon-gold" /> {snapshot.level ?? "Level to be defined"}
              </p>
              <Link to="/gisele/onboarding" className="link-gold text-xs font-semibold">
                Update goal &amp; level
              </Link>
            </div>
          </GiseleCard>

          <GiseleCard title="Progress" subtitle="Sua evolução dentro da GiseleAI.">
            <div className="space-y-3">
              <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${Math.min(100, stats.sessions * 10)}%`,
                    background: "var(--gradient-gold)",
                  }}
                />
              </div>
              <p className="text-xs text-muted-foreground">
                {stats.sessions} sessions · {stats.minutes} min practiced
              </p>
              <Link to="/gisele/meu-progresso" className="link-gold text-xs font-semibold">
                See full progress
              </Link>
            </div>
          </GiseleCard>

          <GiseleCard title="Feedback" subtitle="Correções priorizadas — no máximo duas por vez.">
            <p className="text-sm text-muted-foreground">
              {stats.corrections > 0
                ? `${stats.corrections} corrections saved from your sessions.`
                : "Finish a session and your priority corrections appear here."}
            </p>
            <Link
              to="/gisele/feedback"
              className="link-gold mt-3 inline-block text-xs font-semibold"
            >
              Open feedback
            </Link>
          </GiseleCard>

          <GiseleCard
            title="History"
            subtitle="Suas conversas recentes com a GiseleAI."
            action={
              <Link to="/gisele/historico" className="link-gold text-xs font-semibold">
                All
              </Link>
            }
          >
            {threads && threads.length > 0 ? (
              <ul className="space-y-1">
                {threads.slice(0, 5).map((t) => (
                  <li key={t.id}>
                    <button
                      type="button"
                      onClick={() =>
                        navigate({ to: "/gisele/$threadId", params: { threadId: t.id } })
                      }
                      className="flex w-full items-center gap-2 truncate rounded-lg px-2 py-2 text-left text-sm text-muted-foreground transition-colors hover:bg-secondary/60 hover:text-foreground"
                    >
                      <MessageSquare className="h-4 w-4 shrink-0" />
                      <span className="truncate">{t.title}</span>
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-muted-foreground">No sessions yet.</p>
            )}
          </GiseleCard>

          <GiseleCard title="Consolidation" subtitle="Repetição espaçada é o que fixa.">
            {review.length === 0 ? (
              <p className="flex items-start gap-2 text-sm text-muted-foreground">
                <Compass className="h-5 w-5 icon-gold" /> Nothing to review yet.
              </p>
            ) : (
              <ul className="space-y-2">
                {review.map((item) => (
                  <li
                    key={item.id}
                    className="rounded-lg border border-border/60 bg-background/40 px-3 py-2"
                  >
                    <p className="text-sm text-foreground">{item.content}</p>
                    {item.review_at && (
                      <p className="text-xs text-muted-foreground">
                        Review by {new Date(item.review_at).toLocaleDateString("pt-BR")}
                      </p>
                    )}
                    <div className="mt-2 flex gap-2">
                      <Button
                        size="sm"
                        onClick={() => startSession("vocabulary", `Review item: ${item.content}`)}
                        className="btn-gold rounded-full text-xs font-semibold"
                      >
                        Practice
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
          </GiseleCard>
        </div>
      </div>

      <p className="rounded-lg border border-border/60 bg-secondary/30 px-4 py-2 text-xs text-muted-foreground">
        As respostas e o áudio da GiseleAI são gerados por inteligência artificial.
      </p>
    </main>
  );
}
