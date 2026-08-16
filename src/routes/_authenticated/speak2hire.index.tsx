import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import {
  ArrowLeft,
  BookOpen,
  Briefcase,
  Clock,
  Play,
  Trash2,
  Trophy,
} from "lucide-react";
import { toast } from "sonner";
import { BrandText } from "@/components/BrandText";
import { Button } from "@/components/ui/button";
import logo from "@/assets/speak2hire.asset.json";
import { INTERVIEW_TRACKS, MATERIALS } from "@/lib/speak2hire-content";
import {
  listInterviewSessions,
  startInterviewSession,
  deleteInterviewSession,
  type InterviewSession,
} from "@/lib/speak2hire.functions";
import { useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/speak2hire/")({
  head: () => ({
    meta: [
      { title: "Speak2Hire — Simulador de entrevistas em inglês" },
      {
        name: "description",
        content:
          "Treine entrevistas de emprego em inglês com perguntas reais, temporizador, feedback da IA e histórico das suas sessões.",
      },
      { property: "og:title", content: "Speak2Hire — Ace your Interview" },
      {
        property: "og:description",
        content:
          "Simulador de entrevistas em inglês com método STAR, temporizador e avaliação da IA.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Speak2HireHub,
});

function formatDate(value: string) {
  return new Date(value).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function formatDuration(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const rest = seconds % 60;
  return `${minutes}min ${String(rest).padStart(2, "0")}s`;
}

function Speak2HireHub() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const fetchSessions = useServerFn(listInterviewSessions);
  const startSession = useServerFn(startInterviewSession);
  const removeSession = useServerFn(deleteInterviewSession);
  const [startingTrack, setStartingTrack] = useState<string | null>(null);

  const { data: sessions } = useQuery<InterviewSession[]>({
    queryKey: ["interview-sessions"],
    queryFn: () => fetchSessions(),
  });

  async function handleStart(trackId: string) {
    try {
      setStartingTrack(trackId);
      const session = await startSession({ data: { trackId } });
      await queryClient.invalidateQueries({ queryKey: ["interview-sessions"] });
      navigate({
        to: "/speak2hire/sessao/$sessionId",
        params: { sessionId: session.id },
      });
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Não foi possível iniciar a sessão.");
    } finally {
      setStartingTrack(null);
    }
  }

  async function handleDelete(sessionId: string) {
    try {
      await removeSession({ data: { sessionId } });
      await queryClient.invalidateQueries({ queryKey: ["interview-sessions"] });
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Não foi possível excluir a sessão.");
    }
  }

  const completed = (sessions ?? []).filter((s) => s.completed);
  const bestScore = completed.reduce((best, s) => Math.max(best, s.score ?? 0), 0);

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <Button asChild variant="ghost" size="sm" className="mb-6 -ml-2 rounded-full">
          <Link to="/painel">
            <ArrowLeft className="mr-1 h-4 w-4" /> Voltar ao painel
          </Link>
        </Button>

        <header className="flex flex-wrap items-center gap-5">
          <img src={logo.url} alt="Speak2Hire" className="h-20 w-20 rounded-2xl object-contain" />
          <div>
            <h1 className="text-3xl font-semibold"><BrandText text="Speak2Hire" /></h1>
            <p className="text-sm text-muted-foreground">
              Ace your Interview — English for Global Careers. Frameworks, not just vocabulary.
            </p>
          </div>
        </header>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <StatCard label="Sessões concluídas" value={String(completed.length)} icon={<Trophy className="h-4 w-4" />} />
          <StatCard label="Melhor pontuação" value={completed.length ? `${bestScore}/100` : "—"} icon={<Trophy className="h-4 w-4" />} />
          <StatCard
            label="Tempo total de prática"
            value={formatDuration((sessions ?? []).reduce((sum, s) => sum + (s.total_seconds ?? 0), 0))}
            icon={<Clock className="h-4 w-4" />}
          />
        </div>

        <section className="mt-12">
          <h2 className="text-xs tracking-widest text-muted-foreground uppercase">
            Material de porta de entrada
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Estude os frameworks antes de simular. Confiança não se constrói lendo — se constrói ensaiando.
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {MATERIALS.map((material) => (
              <Link
                key={material.id}
                to="/speak2hire/material/$materialId"
                params={{ materialId: material.id }}
                className="group rounded-2xl border border-border bg-card/60 p-5 backdrop-blur transition hover:border-gold/60"
              >
                <div className="flex items-center gap-2 text-gold">
                  <BookOpen className="h-4 w-4" />
                  <span className="font-semibold">{material.title}</span>
                </div>
                <p className="mt-1 text-xs tracking-wide text-muted-foreground uppercase">
                  {material.subtitle}
                </p>
                <p className="mt-3 text-sm text-foreground/80">{material.summary}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-xs tracking-widest text-muted-foreground uppercase">
            Simulador de entrevistas
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {INTERVIEW_TRACKS.map((track) => (
              <div
                key={track.id}
                className="flex flex-col rounded-2xl border border-border bg-card/60 p-5 backdrop-blur"
              >
                <div className="flex items-center gap-2 text-gold">
                  <Briefcase className="h-4 w-4" />
                  <span className="font-semibold">{track.title}</span>
                </div>
                <p className="mt-1 text-xs tracking-wide text-muted-foreground uppercase">
                  {track.subtitle}
                </p>
                <p className="mt-3 flex-1 text-sm text-foreground/80">{track.description}</p>
                <p className="mt-3 text-xs text-muted-foreground">Fonte: {track.source}</p>
                <Button
                  onClick={() => handleStart(track.id)}
                  disabled={startingTrack !== null}
                  className="mt-4 rounded-full bg-gold font-semibold text-primary-foreground hover:opacity-90"
                >
                  <Play className="mr-1 h-4 w-4" />
                  {startingTrack === track.id ? "Preparando..." : "Iniciar simulação"}
                </Button>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-xs tracking-widest text-muted-foreground uppercase">
            Histórico das sessões
          </h2>
          {(sessions ?? []).length === 0 ? (
            <p className="mt-4 text-sm text-muted-foreground">
              Você ainda não fez nenhuma simulação. Comece pela trilha Full Mock Interview.
            </p>
          ) : (
            <ul className="mt-4 space-y-3">
              {(sessions ?? []).map((session) => (
                <li
                  key={session.id}
                  className="flex flex-wrap items-center gap-3 rounded-2xl border border-border bg-card/60 p-4 backdrop-blur"
                >
                  <div className="min-w-40 flex-1">
                    <p className="font-medium text-foreground">{session.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {formatDate(session.created_at)} · {formatDuration(session.total_seconds ?? 0)} ·{" "}
                      {session.completed ? "Concluída" : "Em andamento"}
                    </p>
                  </div>
                  {session.completed && (
                    <span className="rounded-full border border-gold/40 px-3 py-1 text-sm font-semibold text-gold">
                      {session.score ?? 0}/100
                    </span>
                  )}
                  <Button asChild variant="outline" size="sm" className="rounded-full">
                    <Link
                      to="/speak2hire/sessao/$sessionId"
                      params={{ sessionId: session.id }}
                    >
                      {session.completed ? "Ver feedback" : "Continuar"}
                    </Link>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full"
                    aria-label="Excluir sessão"
                    onClick={() => handleDelete(session.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
}

function StatCard({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card/60 p-5 backdrop-blur">
      <p className="flex items-center gap-2 text-xs tracking-widest text-muted-foreground uppercase">
        {icon} {label}
      </p>
      <p className="mt-2 text-xl font-semibold text-gold">{value}</p>
    </div>
  );
}
