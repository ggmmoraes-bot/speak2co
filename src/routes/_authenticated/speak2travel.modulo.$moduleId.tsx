import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  Compass,
  Lightbulb,
  MessageSquare,
  Play,
  Sparkles,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { RolePlayCoach } from "@/components/RolePlayCoach";
import { TravelDrills } from "@/components/TravelDrills";
import { PhrasePractice } from "@/components/PhrasePractice";
import { TRAVEL_BRIEFING, getTravelTrack, type TravelTrack } from "@/lib/speak2travel-content";
import { getModuleContent } from "@/lib/speak2travel-modules";
import { evaluateTravelPractice, type TravelFeedback } from "@/lib/speak2travel.functions";
import {
  getTravelProgress,
  resetTravelProgress,
  saveTravelProgress,
} from "@/lib/speak2travel-progress.functions";

export const Route = createFileRoute("/_authenticated/speak2travel/modulo/$moduleId")({
  loader: ({ params }) => {
    const track = getTravelTrack(params.moduleId);
    if (!track) throw notFound();
    return { track };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Módulo indisponível — Speak2Travel" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { track } = loaderData;
    const title = `${track.title} — Speak2Travel`;
    const description = track.description;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: TravelModulePage,
});

function TravelModulePage() {
  const { track } = Route.useLoaderData();
  return <TravelModule key={track.id} track={track} />;
}

function TravelModule({ track }: { track: TravelTrack }) {
  const moduleContent = getModuleContent(track.id);
  const evaluate = useServerFn(evaluateTravelPractice);
  const loadProgress = useServerFn(getTravelProgress);
  const persistProgress = useServerFn(saveTravelProgress);
  const clearProgress = useServerFn(resetTravelProgress);

  const [started, setStarted] = useState(false);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [coachTranscript, setCoachTranscript] = useState<
    { role: "student" | "coach"; text: string }[]
  >([]);
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
  }, [loadProgress, track]);

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
    [persistProgress, track],
  );

  // Autosalva respostas e posição atual (debounce curto).
  useEffect(() => {
    if (!hydrated.current || !started || feedback) return;
    const timer = setTimeout(() => {
      save({ briefingCompleted: true, currentIndex: index, answers });
    }, 800);
    return () => clearTimeout(timer);
  }, [answers, index, started, feedback, save]);

  const hasAnswers = Object.values(answers).some((a) => (a ?? "").trim().length > 0);

  async function handleFinish() {
    if (!hasAnswers) {
      toast.error("Answer at least one situation before finishing.");
      return;
    }
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
        <div className="mb-6 flex flex-wrap items-center justify-between gap-2">
          <Button asChild variant="ghost" size="sm" className="-ml-2 rounded-full">
            <Link to="/speak2travel">
              <ArrowLeft className="mr-1 h-4 w-4" /> All modules
            </Link>
          </Button>
          <Button asChild variant="outline" size="sm" className="rounded-full">
            <Link to="/speak2travel/revisao/$moduleId" params={{ moduleId: track.id }}>
              <BookOpen className="mr-1 h-4 w-4" /> Review mode
            </Link>
          </Button>
        </div>

        <header>
          <p className="text-xs tracking-widest text-muted-foreground uppercase">
            Module {track.module} · Speak2Travel
          </p>
          <h1 className="mt-1 text-3xl font-semibold text-gold">{track.title}</h1>
          <p className="text-sm text-muted-foreground">{track.subtitle}</p>
          <p className="mt-3 text-sm text-foreground/80">{track.description}</p>
        </header>

        {restoring && (
          <p className="mt-10 text-sm text-muted-foreground">
            Loading your progress...
            <span className="mt-0.5 block text-xs italic">Carregando seu progresso...</span>
          </p>
        )}

        {!restoring && resumed && (
          <div className="mt-8 rounded-2xl border border-gold/40 bg-card/60 p-4 text-sm text-foreground/80 backdrop-blur">
            We picked up where you left off{savedAt ? ` (saved at ${formatSaved(savedAt)})` : ""}.
            <span className="mt-0.5 block text-xs text-muted-foreground italic">
              Retomamos de onde você parou.
            </span>
          </div>
        )}

        {!restoring && !started && (
          <section className="mt-10 space-y-8">
            <div className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur">
              <h2 className="flex items-center gap-2 text-lg font-semibold text-gold">
                <BookOpen className="h-5 w-5" /> Essential Vocabulary
              </h2>
              <p className="mt-1 text-xs text-muted-foreground italic">
                Vocabulário essencial — listen to the AI and record your voice to get feedback.
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {(moduleContent
                  ? moduleContent.vocabulary.map((v) => ({ term: v.en, meaning: v.pt }))
                  : track.vocabulary
                ).map((word) => (
                  <PhrasePractice key={word.term} en={word.term} pt={word.meaning} />
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur">
              <h2 className="flex items-center gap-2 text-lg font-semibold text-gold">
                <Compass className="h-5 w-5" /> Key Expressions
              </h2>
              <p className="mt-1 text-xs text-muted-foreground italic">
                Expressões-chave — pronúncia com IA.
              </p>
              <div className="mt-4 grid gap-3">
                {moduleContent
                  ? moduleContent.expressions.map((e) => (
                      <PhrasePractice key={e.en} en={e.en} pt={e.pt} />
                    ))
                  : track.phrases.map((phrase) => (
                      <PhrasePractice key={phrase} en={phrase} pt="Pratique em voz alta." />
                    ))}
              </div>
            </div>

            {moduleContent && (
              <div className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur">
                <h2 className="flex items-center gap-2 text-lg font-semibold text-gold">
                  <MessageSquare className="h-5 w-5" /> Model Dialogue
                  <span className="text-xs font-normal text-muted-foreground italic">
                    Diálogo-modelo
                  </span>
                </h2>
                <div className="mt-4 space-y-3">
                  {moduleContent.dialogue.map((line, i) => (
                    <PhrasePractice key={`${line.who}-${i}`} en={line.line} pt={line.who} />
                  ))}
                </div>
                <h3 className="mt-6 flex items-center gap-2 text-xs tracking-widest text-muted-foreground uppercase">
                  <Lightbulb className="h-4 w-4" /> Pronunciation Tips
                </h3>
                <ul className="mt-3 space-y-2">
                  {moduleContent.pronunciation.map((tip) => (
                    <li key={tip} className="text-sm text-foreground/80">
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="grid gap-4 sm:grid-cols-2">
              {TRAVEL_BRIEFING.steps.map((step) => (
                <div
                  key={step.title}
                  className="rounded-2xl border border-border bg-card/60 p-5 backdrop-blur"
                >
                  <p className="font-semibold text-foreground">{step.title}</p>
                  <p className="text-xs text-muted-foreground italic">{step.titlePt}</p>
                  <p className="mt-2 text-sm text-foreground/80">{step.text}</p>
                  <p className="mt-1 text-xs text-muted-foreground italic">{step.textPt}</p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur">
              <h3 className="flex items-center gap-2 text-xs tracking-widest text-muted-foreground uppercase">
                <Lightbulb className="h-4 w-4" /> Practice Rules
              </h3>
              <ul className="mt-3 space-y-2">
                {TRAVEL_BRIEFING.rules.map((rule) => (
                  <li key={rule.en} className="flex gap-2 text-sm text-foreground/80">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>
                      {rule.en}
                      <span className="mt-0.5 block text-xs text-muted-foreground italic">
                        {rule.pt}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>


            <Button
              onClick={() => {
                setStarted(true);
                save({ briefingCompleted: true, currentIndex: index, answers });
              }}
              className="rounded-full bg-gold font-semibold text-primary-foreground hover:opacity-90"
            >
              <Play className="mr-1 h-4 w-4" />
              {Object.keys(answers).length > 0
                ? "Continue where I left off"
                : `Start role play (${track.prompts.length} situations)`}
            </Button>
          </section>
        )}

        {!restoring && started && !feedback && (
          <section className="mt-10 space-y-6">
            <p className="text-xs tracking-widest text-muted-foreground uppercase">
              Situation {index + 1} of {track.prompts.length} · {prompt.seconds}s suggested
            </p>

            <div className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur">
              <p className="text-sm font-semibold text-gold">
                {prompt.situationEn ?? prompt.situation}
                {prompt.situationEn && (
                  <span className="mt-0.5 block text-xs font-normal text-muted-foreground italic">
                    {prompt.situation}
                  </span>
                )}
              </p>
              <p className="mt-3 text-base text-foreground">“{prompt.cue}”</p>
              <p className="mt-4 text-sm text-foreground/80">
                {prompt.taskEn ?? prompt.task}
                {prompt.taskEn && (
                  <span className="mt-0.5 block text-xs text-muted-foreground italic">
                    {prompt.task}
                  </span>
                )}
              </p>
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
              <p className="mt-4 flex gap-2 text-sm text-foreground/80">
                <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>
                  {prompt.tipEn ?? prompt.tip}
                  {prompt.tipEn && (
                    <span className="mt-0.5 block text-xs text-muted-foreground italic">
                      {prompt.tip}
                    </span>
                  )}
                </span>
              </p>
            </div>


            <Textarea
              value={answers[prompt.id] ?? ""}
              onChange={(e) => setAnswers((prev) => ({ ...prev, [prompt.id]: e.target.value }))}
              placeholder="Write your answer in English..."
              className="min-h-36"
            />

            <RolePlayCoach
              trackId={track.id}
              prompt={prompt}
              onUseAnswer={(text) =>
                setAnswers((prev) => ({
                  ...prev,
                  [prompt.id]: `${(prev[prompt.id] ?? "").trim()}\n${text}`.trim(),
                }))
              }
              onTranscript={setCoachTranscript}
            />

            <div className="flex flex-wrap gap-3">
              {index > 0 && (
                <Button
                  variant="outline"
                  className="rounded-full"
                  onClick={() => setIndex((i) => i - 1)}
                >
                  Previous
                </Button>
              )}
              {!isLast ? (
                <Button
                  className="rounded-full bg-gold font-semibold text-primary-foreground hover:opacity-90"
                  onClick={() => setIndex((i) => i + 1)}
                >
                  Next situation
                </Button>
              ) : (
                <Button
                  disabled={loading || !hasAnswers}
                  title={
                    hasAnswers
                      ? undefined
                      : "Answer at least one situation before finishing."
                  }

                  className="rounded-full bg-gold font-semibold text-primary-foreground hover:opacity-90"
                  onClick={handleFinish}
                >
                  <Sparkles className="mr-1 h-4 w-4" />
                  {loading ? "Checking..." : "Finish and get feedback"}
                </Button>
              )}
            </div>
          </section>
        )}

        {!restoring && feedback && (
          <section className="mt-10 space-y-6">
            <div className="rounded-2xl border border-gold/40 bg-card/60 p-6 backdrop-blur">
              <p className="text-xs tracking-widest text-muted-foreground uppercase">
Your score
              </p>
              <p className="mt-1 text-4xl font-semibold text-gold">{feedback.score}/100</p>
              <p className="mt-3 text-sm text-foreground/80">{feedback.summary}</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <FeedbackList title="Strengths" items={feedback.highlights} />
              <FeedbackList title="Priorities" items={feedback.focus} />
            </div>

            {feedback.items.map((item) => {
              const source = track.prompts.find((p) => p.id === item.promptId);
              return (
                <div
                  key={item.promptId}
                  className="rounded-2xl border border-border bg-card/60 p-5 backdrop-blur"
                >
                  <p className="font-semibold text-gold">{source?.situation ?? item.promptId}</p>
                  <p className="mt-3 text-sm text-foreground/80">
                    <span className="text-muted-foreground">What worked: </span>
                    {item.strengths}
                  </p>
                  <p className="mt-2 text-sm text-foreground/80">
                    <span className="text-muted-foreground">To improve: </span>
                    {item.improvements}
                  </p>
                  <p className="mt-3 rounded-xl border border-primary/30 p-3 text-sm text-foreground">
                    {item.rewrite}
                  </p>
                </div>
              );
            })}

            <TravelDrills trackId={track.id} answers={answers} conversation={coachTranscript} />

            <div className="flex flex-wrap gap-3">
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
                Restart practice
              </Button>
              <Button
                asChild
                className="rounded-full bg-gold font-semibold text-primary-foreground hover:opacity-90"
              >
                <Link to="/speak2travel">Choose next module</Link>
              </Button>
            </div>
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
