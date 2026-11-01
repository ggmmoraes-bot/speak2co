import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock,
  Lightbulb,
  Pause,
  Play,
  RotateCcw,
  Sparkles,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { PhrasePractice } from "@/components/PhrasePractice";
import {
  getInterviewSession,
  saveInterviewAnswer,
  finishInterviewSession,
  type InterviewSession,
} from "@/lib/speak2hire.functions";

export const Route = createFileRoute("/_authenticated/speak2hire/sessao/$sessionId")({
  head: () => ({
    meta: [
      { title: "Simulação de entrevista — Speak2Hire" },
      {
        name: "description",
        content:
          "Responda as perguntas da entrevista em inglês com temporizador e receba a avaliação do coach de IA.",
      },
      { property: "og:title", content: "Simulação de entrevista — Speak2Hire" },
      {
        property: "og:description",
        content: "Perguntas reais, temporizador de 60 a 90 segundos e feedback estruturado.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SessionPage,
  errorComponent: ({ error }) => (
    <div role="alert" className="p-8 text-sm text-destructive">
      {error instanceof Error ? error.message : String(error)}
    </div>
  ),
  notFoundComponent: () => (
    <div className="p-8 text-sm text-muted-foreground">Sessão não encontrada.</div>
  ),
});

function mmss(total: number) {
  const minutes = Math.floor(Math.abs(total) / 60);
  const seconds = Math.abs(total) % 60;
  return `${total < 0 ? "-" : ""}${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function SessionPage() {
  const { sessionId } = Route.useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const fetchSession = useServerFn(getInterviewSession);
  const saveAnswer = useServerFn(saveInterviewAnswer);
  const finishSession = useServerFn(finishInterviewSession);

  const { data: session, isLoading } = useQuery<InterviewSession | null>({
    queryKey: ["interview-session", sessionId],
    queryFn: () => fetchSession({ data: { sessionId } }),
  });

  const questions = useMemo(() => session?.questions ?? [], [session]);
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [elapsed, setElapsed] = useState(0);
  const [running, setRunning] = useState(false);
  const [saving, setSaving] = useState(false);
  const [finishing, setFinishing] = useState(false);
  const hydratedFor = useRef<string | null>(null);

  const question = questions[index];

  // Load stored answer/duration when moving between questions.
  useEffect(() => {
    if (!session || !question) return;
    const key = `${session.id}:${question.id}`;
    if (hydratedFor.current === key) return;
    hydratedFor.current = key;
    setAnswer(session.answers?.[question.id] ?? "");
    setElapsed(session.durations?.[question.id] ?? 0);
    setRunning(false);
  }, [session, question]);

  useEffect(() => {
    if (!running) return;
    const id = window.setInterval(() => setElapsed((value) => value + 1), 1000);
    return () => window.clearInterval(id);
  }, [running]);

  if (isLoading) {
    return <div className="p-8 text-sm text-muted-foreground">Carregando sessão...</div>;
  }
  if (!session) {
    return <div className="p-8 text-sm text-muted-foreground">Sessão não encontrada.</div>;
  }

  if (session.completed && session.feedback) {
    return <FeedbackView session={session} />;
  }

  async function persist() {
    if (!question || !session) return;
    setSaving(true);
    try {
      const updated = await saveAnswer({
        data: {
          sessionId: session.id,
          questionId: question.id,
          answer,
          seconds: elapsed,
        },
      });
      queryClient.setQueryData(["interview-session", sessionId], updated);
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Não foi possível salvar sua resposta.");
    } finally {
      setSaving(false);
    }
  }

  async function goTo(next: number) {
    await persist();
    setRunning(false);
    setIndex(next);
  }

  async function handleFinish() {
    await persist();
    setRunning(false);
    setFinishing(true);
    try {
      const updated = await finishSession({ data: { sessionId } });
      queryClient.setQueryData(["interview-session", sessionId], updated);
      await queryClient.invalidateQueries({ queryKey: ["interview-sessions"] });
      toast.success("Entrevista avaliada pelo coach de IA.");
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Não foi possível avaliar a entrevista.");
    } finally {
      setFinishing(false);
    }
  }

  const limit = question?.seconds ?? 90;
  const remaining = limit - elapsed;
  const overtime = remaining < 0;
  const progress = Math.min(100, Math.round((elapsed / limit) * 100));

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-6 py-10">
        <div className="flex items-center justify-between">
          <Button asChild variant="ghost" size="sm" className="-ml-2 rounded-full">
            <Link to="/speak2hire">
              <ArrowLeft className="mr-1 h-4 w-4" /> Speak2Hire
            </Link>
          </Button>
          <p className="text-xs tracking-widest text-muted-foreground uppercase">
            {session.title} · {index + 1}/{questions.length}
          </p>
        </div>

        <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-secondary">
          <div
            className="h-full bg-gold transition-all"
            style={{ width: `${((index + 1) / Math.max(1, questions.length)) * 100}%` }}
          />
        </div>

        <section className="mt-8 rounded-2xl border border-border bg-card/60 p-6 backdrop-blur">
          <h1 className="text-2xl font-semibold text-foreground">{question?.prompt}</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            <span className="font-medium text-gold">O que avaliam:</span> {question?.evaluates}
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            <span className="font-medium text-gold">Estrutura:</span> {question?.structure}
          </p>
          <p className="mt-3 flex gap-2 rounded-xl border border-gold/30 bg-background/40 p-3 text-sm text-foreground/85">
            <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
            {question?.tip}
          </p>
          {question?.prompt && (
            <div className="mt-4">
              <p className="text-xs tracking-widest text-muted-foreground uppercase">
                AI Pronunciation{" "}
                <span className="normal-case tracking-normal">(pronúncia com IA)</span>
              </p>
              <div className="mt-3">
                <PhrasePractice
                  en={question.prompt}
                  pt="Ouça a pergunta com voz nativa e treine sua entonação antes de responder."
                />
              </div>
            </div>
          )}
        </section>

        <section className="mt-6 rounded-2xl border border-border bg-card/60 p-6 backdrop-blur">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <Clock className={overtime ? "h-5 w-5 text-destructive" : "h-5 w-5 text-gold"} />
              <span
                className={`font-mono text-2xl font-semibold ${overtime ? "text-destructive" : "text-foreground"}`}
              >
                {mmss(remaining)}
              </span>
              <span className="text-xs text-muted-foreground">de {mmss(limit)} recomendados</span>
            </div>
            <div className="ml-auto flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="rounded-full"
                onClick={() => setRunning((value) => !value)}
              >
                {running ? (
                  <>
                    <Pause className="mr-1 h-4 w-4" /> Pausar
                  </>
                ) : (
                  <>
                    <Play className="mr-1 h-4 w-4" /> {elapsed > 0 ? "Retomar" : "Começar"}
                  </>
                )}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="rounded-full"
                onClick={() => {
                  setRunning(false);
                  setElapsed(0);
                }}
              >
                <RotateCcw className="mr-1 h-4 w-4" /> Zerar
              </Button>
            </div>
          </div>
          <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-secondary">
            <div
              className={`h-full transition-all ${overtime ? "bg-destructive" : "bg-gold"}`}
              style={{ width: `${progress}%` }}
            />
          </div>

          <Textarea
            value={answer}
            onChange={(event) => setAnswer(event.target.value)}
            placeholder="Fale em voz alta e registre aqui sua resposta em inglês..."
            className="mt-4 min-h-40 resize-y"
          />
          <p className="mt-2 text-xs text-muted-foreground">
            Dica do material: grave-se em vídeo enquanto responde. O texto aqui é o que o coach de
            IA vai avaliar.
          </p>
        </section>

        <div className="mt-6 flex flex-wrap gap-3">
          <Button
            variant="outline"
            className="rounded-full"
            disabled={index === 0 || saving}
            onClick={() => goTo(index - 1)}
          >
            <ArrowLeft className="mr-1 h-4 w-4" /> Anterior
          </Button>
          {index < questions.length - 1 ? (
            <Button
              className="rounded-full bg-gold font-semibold text-primary-foreground hover:opacity-90"
              disabled={saving}
              onClick={() => goTo(index + 1)}
            >
              {saving ? "Salvando..." : "Próxima pergunta"} <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          ) : (
            <Button
              className="rounded-full bg-gold font-semibold text-primary-foreground hover:opacity-90"
              disabled={finishing || saving}
              onClick={handleFinish}
            >
              <Sparkles className="mr-1 h-4 w-4" />
              {finishing ? "Avaliando..." : "Finalizar e receber feedback"}
            </Button>
          )}
          <Button
            variant="ghost"
            className="rounded-full"
            disabled={finishing || saving}
            onClick={async () => {
              await persist();
              navigate({ to: "/speak2hire" });
            }}
          >
            Salvar e sair
          </Button>
        </div>
      </div>
    </main>
  );
}

function FeedbackView({ session }: { session: InterviewSession }) {
  const feedback = session.feedback!;
  const questions = session.questions ?? [];

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-6 py-12">
        <Button asChild variant="ghost" size="sm" className="mb-6 -ml-2 rounded-full">
          <Link to="/speak2hire">
            <ArrowLeft className="mr-1 h-4 w-4" /> Speak2Hire
          </Link>
        </Button>

        <p className="text-xs tracking-widest text-muted-foreground uppercase">
          {session.title} · feedback do coach
        </p>
        <div className="mt-3 flex items-center gap-4">
          <span className="rounded-2xl border border-gold/40 px-5 py-3 text-3xl font-semibold text-gold">
            {session.score ?? 0}
            <span className="text-base text-muted-foreground">/100</span>
          </span>
          <p className="flex-1 text-sm text-foreground/85">{feedback.summary}</p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card/60 p-5 backdrop-blur">
            <h2 className="text-sm font-semibold text-gold">Pontos fortes</h2>
            <ul className="mt-3 space-y-2 text-sm text-foreground/85">
              {feedback.highlights.map((item) => (
                <li key={item} className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-card/60 p-5 backdrop-blur">
            <h2 className="text-sm font-semibold text-gold">Prioridades de melhoria</h2>
            <ul className="mt-3 space-y-2 text-sm text-foreground/85">
              {feedback.focus.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 space-y-6">
          {feedback.items.map((item) => {
            const question = questions.find((entry) => entry.id === item.questionId);
            return (
              <section
                key={item.questionId}
                className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur"
              >
                <h3 className="font-semibold text-foreground">
                  {question?.prompt ?? item.questionId}
                </h3>
                <p className="mt-2 text-xs text-muted-foreground">
                  Tempo usado: {mmss(session.durations?.[item.questionId] ?? 0)}
                </p>
                <p className="mt-3 text-sm text-foreground/80">
                  <span className="font-medium text-gold">Sua resposta:</span>{" "}
                  {session.answers?.[item.questionId] ?? "—"}
                </p>
                <p className="mt-3 text-sm text-foreground/85">
                  <span className="font-medium text-gold">Pontos fortes:</span> {item.strengths}
                </p>
                <p className="mt-2 text-sm text-foreground/85">
                  <span className="font-medium text-gold">Melhorar:</span> {item.improvements}
                </p>
                <p className="mt-3 rounded-xl border border-gold/30 bg-background/40 p-3 text-sm text-foreground">
                  <span className="font-medium text-gold">Modelo em inglês:</span> {item.rewrite}
                </p>
              </section>
            );
          })}
        </div>

        <Button
          asChild
          className="mt-10 rounded-full bg-gold font-semibold text-primary-foreground hover:opacity-90"
        >
          <Link to="/speak2hire">Praticar outra trilha</Link>
        </Button>
      </div>
    </main>
  );
}
