import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  CheckCircle2,
  Compass,
  Lightbulb,
  Plane,
  Play,
  Sparkles,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import logo from "@/assets/speak2travel.asset.json";
import { TRAVEL_BRIEFING, TRAVEL_TRACKS } from "@/lib/speak2travel-content";
import {
  evaluateTravelPractice,
  type TravelFeedback,
} from "@/lib/speak2travel.functions";
import {
  getTravelProgress,
  resetTravelProgress,
  saveTravelProgress,
} from "@/lib/speak2travel-progress.functions";

export const Route = createFileRoute("/_authenticated/speak2travel/")({
  head: () => ({
    meta: [
      { title: "Speak2Travel — Inglês para viagens na prática" },
      {
        name: "description",
        content:
          "Briefing e primeira prática do Speak2Travel: aeroporto, imigração e embarque em inglês, com feedback da IA da Speak2Co.",
      },
      { property: "og:title", content: "Speak2Travel — Your passport to confidence" },
      {
        property: "og:description",
        content:
          "Treine situações reais de viagem em inglês e receba correções da IA da Speak2Co.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Speak2TravelBriefing,
});

const track = TRAVEL_TRACKS[0]!;

function Speak2TravelBriefing() {
  const evaluate = useServerFn(evaluateTravelPractice);
  const loadProgress = useServerFn(getTravelProgress);
  const persistProgress = useServerFn(saveTravelProgress);
  const clearProgress = useServerFn(resetTravelProgress);

  const [started, setStarted] = useState(false);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [feedback, setFeedback] = useState<TravelFeedback | null>(null);
  const [loading, setLoading] = useState(false);
  const [restoring, setRestoring] = useState(true);
  const [resumed, setResumed] = useState(false);
  const [savedAt, setSavedAt] = useState<string | null>(null);
  const hydrated = useRef(false);

  const prompt = track.prompts[index]!;
  const isLast = index === track.prompts.length - 1;

  useEffect(() => {
    let active = true;
    loadProgress({ data: { trackId: track.id } })
      .then((saved) => {
        if (!active || !saved) return;
        setStarted(saved.briefingCompleted);
        setIndex(Math.min(saved.currentIndex, track.prompts.length - 1));
        setAnswers(saved.answers ?? {});
        setFeedback(saved.feedback ?? null);
        setSavedAt(saved.updatedAt);
        if (saved.briefingCompleted) setResumed(true);
      })
      .catch(() => undefined)
      .finally(() => {
        if (!active) return;
        hydrated.current = true;
        setRestoring(false);
      });
    return () => {
      active = false;
    };
  }, [loadProgress]);

  const save = useCallback(
    (patch: {
      briefingCompleted: boolean;
      currentIndex: number;
      answers: Record<string, string>;
      feedback?: TravelFeedback | null;
      completed?: boolean;
    }) => {
      persistProgress({ data: { trackId: track.id, ...patch } })
        .then(() => setSavedAt(new Date().toISOString()))
        .catch(() => undefined);
    },
    [persistProgress],
  );

  // Autosalva respostas e posição atual (debounce curto).
  useEffect(() => {
    if (!hydrated.current || !started || feedback) return;
    const timer = setTimeout(() => {
      save({ briefingCompleted: true, currentIndex: index, answers });
    }, 800);
    return () => clearTimeout(timer);
  }, [answers, index, started, feedback, save]);

  async function handleFinish() {
    try {
      setLoading(true);
      const result = await evaluate({ data: { trackId: track.id, answers } });
      setFeedback(result);
      save({
        briefingCompleted: true,
        currentIndex: index,
        answers,
        feedback: result,
        completed: true,
      });
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Não foi possível avaliar sua prática.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-6 py-12">
        <Button asChild variant="ghost" size="sm" className="mb-6 -ml-2 rounded-full">
          <Link to="/painel">
            <ArrowLeft className="mr-1 h-4 w-4" /> Voltar ao painel
          </Link>
        </Button>

        <header className="flex flex-wrap items-center gap-5">
          <img
            src={logo.url}
            alt="Speak2Travel"
            className="h-20 w-20 rounded-2xl object-cover"
          />
          <div>
            <h1 className="text-3xl font-semibold text-gold">Speak2Travel</h1>
            <p className="text-sm text-muted-foreground">
              Your passport to confidence. Anywhere in the world.
            </p>
          </div>
        </header>

        {restoring && (
          <p className="mt-10 text-sm text-muted-foreground">Carregando seu progresso...</p>
        )}

        {!restoring && resumed && (
          <div className="mt-8 rounded-2xl border border-gold/40 bg-card/60 p-4 text-sm text-foreground/80 backdrop-blur">
            Retomamos de onde você parou{savedAt ? ` (salvo em ${formatSaved(savedAt)})` : ""}.
          </div>
        )}

        {!restoring && !started && (
          <section className="mt-10 space-y-8">
            <div className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur">
              <h2 className="flex items-center gap-2 text-lg font-semibold text-gold">
                <Compass className="h-5 w-5" /> {TRAVEL_BRIEFING.title}
              </h2>
              <p className="mt-3 text-sm text-foreground/80">{TRAVEL_BRIEFING.intro}</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {TRAVEL_BRIEFING.steps.map((step) => (
                <div
                  key={step.title}
                  className="rounded-2xl border border-border bg-card/60 p-5 backdrop-blur"
                >
                  <p className="font-semibold text-foreground">{step.title}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{step.text}</p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur">
              <h3 className="flex items-center gap-2 text-xs tracking-widest text-muted-foreground uppercase">
                <Lightbulb className="h-4 w-4" /> Regras da prática
              </h3>
              <ul className="mt-3 space-y-2">
                {TRAVEL_BRIEFING.rules.map((rule) => (
                  <li key={rule} className="flex gap-2 text-sm text-foreground/80">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {rule}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-gold/40 bg-card/60 p-6 backdrop-blur">
              <p className="flex items-center gap-2 font-semibold text-gold">
                <Plane className="h-4 w-4" /> Primeira trilha: {track.title}
              </p>
              <p className="mt-1 text-xs tracking-wide text-muted-foreground uppercase">
                {track.subtitle} · {track.prompts.length} situações
              </p>
              <p className="mt-3 text-sm text-foreground/80">{track.description}</p>
              <Button
                onClick={() => {
                  setStarted(true);
                  save({ briefingCompleted: true, currentIndex: index, answers });
                }}
                className="mt-5 rounded-full bg-gold font-semibold text-primary-foreground hover:opacity-90"
              >
                <Play className="mr-1 h-4 w-4" />
                {Object.keys(answers).length > 0
                  ? "Continuar de onde parei"
                  : "Iniciar primeira prática"}
              </Button>
            </div>
          </section>
        )}

        {!restoring && started && !feedback && (
          <section className="mt-10 space-y-6">
            <p className="text-xs tracking-widest text-muted-foreground uppercase">
              Situação {index + 1} de {track.prompts.length} · {prompt.seconds}s sugeridos
            </p>

            <div className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur">
              <p className="text-sm font-semibold text-gold">{prompt.situation}</p>
              <p className="mt-3 text-base text-foreground">“{prompt.cue}”</p>
              <p className="mt-4 text-sm text-muted-foreground">{prompt.task}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {prompt.keyPhrases.map((phrase) => (
                  <li
                    key={phrase}
                    className="rounded-full border border-primary/40 px-3 py-1 text-xs text-foreground/80"
                  >
                    {phrase}
                  </li>
                ))}
              </ul>
              <p className="mt-4 flex gap-2 text-xs text-muted-foreground">
                <Lightbulb className="h-4 w-4 shrink-0 text-primary" />
                {prompt.tip}
              </p>
            </div>

            <Textarea
              value={answers[prompt.id] ?? ""}
              onChange={(e) =>
                setAnswers((prev) => ({ ...prev, [prompt.id]: e.target.value }))
              }
              placeholder="Write your answer in English..."
              className="min-h-36"
            />

            <div className="flex flex-wrap gap-3">
              {index > 0 && (
                <Button
                  variant="outline"
                  className="rounded-full"
                  onClick={() => setIndex((i) => i - 1)}
                >
                  Anterior
                </Button>
              )}
              {!isLast ? (
                <Button
                  className="rounded-full bg-gold font-semibold text-primary-foreground hover:opacity-90"
                  onClick={() => setIndex((i) => i + 1)}
                >
                  Próxima situação
                </Button>
              ) : (
                <Button
                  disabled={loading}
                  className="rounded-full bg-gold font-semibold text-primary-foreground hover:opacity-90"
                  onClick={handleFinish}
                >
                  <Sparkles className="mr-1 h-4 w-4" />
                  {loading ? "Avaliando..." : "Finalizar e receber feedback"}
                </Button>
              )}
            </div>
          </section>
        )}

        {!restoring && feedback && (
          <section className="mt-10 space-y-6">
            <div className="rounded-2xl border border-gold/40 bg-card/60 p-6 backdrop-blur">
              <p className="text-xs tracking-widest text-muted-foreground uppercase">
                Sua pontuação
              </p>
              <p className="mt-1 text-4xl font-semibold text-gold">{feedback.score}/100</p>
              <p className="mt-3 text-sm text-foreground/80">{feedback.summary}</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <FeedbackList title="Pontos fortes" items={feedback.highlights} />
              <FeedbackList title="Prioridades" items={feedback.focus} />
            </div>

            {feedback.items.map((item) => {
              const source = track.prompts.find((p) => p.id === item.promptId);
              return (
                <div
                  key={item.promptId}
                  className="rounded-2xl border border-border bg-card/60 p-5 backdrop-blur"
                >
                  <p className="font-semibold text-gold">
                    {source?.situation ?? item.promptId}
                  </p>
                  <p className="mt-3 text-sm text-foreground/80">
                    <span className="text-muted-foreground">Acertos: </span>
                    {item.strengths}
                  </p>
                  <p className="mt-2 text-sm text-foreground/80">
                    <span className="text-muted-foreground">Melhorar: </span>
                    {item.improvements}
                  </p>
                  <p className="mt-3 rounded-xl border border-primary/30 p-3 text-sm text-foreground">
                    {item.rewrite}
                  </p>
                </div>
              );
            })}

            <Button
              variant="outline"
              className="rounded-full"
              onClick={() => {
                setFeedback(null);
                setAnswers({});
                setIndex(0);
                setStarted(false);
                setResumed(false);
                setSavedAt(null);
                clearProgress({ data: { trackId: track.id } }).catch(() => undefined);
              }}
            >
              Refazer a prática
            </Button>
          </section>
        )}
      </div>
    </main>
  );
}

function formatSaved(iso: string) {
  return new Date(iso).toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function FeedbackList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-border bg-card/60 p-5 backdrop-blur">
      <p className="text-xs tracking-widest text-muted-foreground uppercase">{title}</p>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex gap-2 text-sm text-foreground/80">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
