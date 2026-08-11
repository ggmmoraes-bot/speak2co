import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, CheckCircle2, Loader2, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { PhrasePractice } from "@/components/PhrasePractice";
import { BilingualLine } from "@/components/BilingualLine";
import {
  FLUENCY_STEPS,
  getFluencyModule,
  type FluencyStepId,
} from "@/lib/speak2fluency-content";
import {
  evaluateFluencyChallenge,
  getFluencyModuleProgress,
  saveFluencyProgress,
  type FluencyFeedback,
} from "@/lib/speak2fluency.functions";
import { siteUrl } from "@/lib/site";

export const Route = createFileRoute("/_authenticated/speak2fluency/modulo/$moduleId")({
  head: ({ params }) => {
    const module = getFluencyModule(params.moduleId);
    const title = module ? `${module.titleEn} — Speak2Fluency` : "Módulo — Speak2Fluency";
    const description = module
      ? `${module.objective} ${module.application} Prática guiada com feedback da IA da Speak2Co.`
      : "Módulo de fluência da Speak2Co com prática guiada e feedback da IA.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: siteUrl(`/speak2fluency/modulo/${params.moduleId}`) },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: siteUrl(`/speak2fluency/modulo/${params.moduleId}`) }],
    };
  },
  component: FluencyModulePage,
});

function FluencyModulePage() {
  const { moduleId } = Route.useParams();
  const module = useMemo(() => getFluencyModule(moduleId), [moduleId]);
  if (!module) throw notFound();

  const loadProgress = useServerFn(getFluencyModuleProgress);
  const persist = useServerFn(saveFluencyProgress);
  const evaluate = useServerFn(evaluateFluencyChallenge);

  const [done, setDone] = useState<FluencyStepId[]>([]);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [transcript, setTranscript] = useState("");
  const [feedback, setFeedback] = useState<FluencyFeedback | null>(null);
  const [score, setScore] = useState<number | null>(null);
  const [attempt, setAttempt] = useState(1);
  const [busy, setBusy] = useState(false);
  const [checkpoint, setCheckpoint] = useState<Record<number, string>>({});

  useEffect(() => {
    let active = true;
    loadProgress({ data: { moduleId } })
      .then((row) => {
        if (!active || !row) return;
        setDone(row.sectionsDone as FluencyStepId[]);
        setAnswers(row.answers);
        setTranscript(row.answers["challenge"] ?? "");
        setFeedback(row.feedback);
        setScore(row.score);
      })
      .catch(() => undefined);
    return () => {
      active = false;
    };
  }, [loadProgress, moduleId]);

  function markStep(step: FluencyStepId, extra?: Partial<{ completed: boolean }>) {
    const next = done.includes(step) ? done : [...done, step];
    setDone(next);
    void persist({
      data: {
        moduleId,
        sectionsDone: next,
        answers: { ...answers, challenge: transcript },
        feedback,
        score,
        completed: extra?.completed ?? next.length >= FLUENCY_STEPS.length,
      },
    }).catch(() => undefined);
  }

  async function runFeedback() {
    if (transcript.trim().length < 5) {
      toast.error("Escreva ou transcreva sua fala antes de pedir o feedback.");
      return;
    }
    setBusy(true);
    try {
      const result = await evaluate({ data: { moduleId, transcript, attempt } });
      setFeedback(result);
      setScore(result.score);
      setAttempt((a) => Math.min(a + 1, 10));
      const next = done.includes("challenge")
        ? [...done, "feedback" as FluencyStepId]
        : [...done, "challenge" as FluencyStepId, "feedback" as FluencyStepId];
      const unique = Array.from(new Set(next));
      setDone(unique);
      await persist({
        data: {
          moduleId,
          sectionsDone: unique,
          answers: { ...answers, challenge: transcript },
          feedback: result,
          score: result.score,
          completed: false,
        },
      });
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Não foi possível avaliar sua fala.");
    } finally {
      setBusy(false);
    }
  }

  const checkpointCorrect = module.checkpoint.filter(
    (q, i) => checkpoint[i] === q.answer,
  ).length;

  const total = module.checkpoint.length;
  const badge = module.passportBadge;

  function finishModule() {
    if (checkpointCorrect < total) {
      toast.error("Acerte todas as questões do checkpoint para concluir o módulo.");
      return;
    }
    const all = FLUENCY_STEPS.map((s) => s.id as FluencyStepId);
    setDone(all);
    void persist({
      data: {
        moduleId,
        sectionsDone: all,
        answers: { ...answers, challenge: transcript },
        feedback,
        score,
        completed: true,
      },
    })
      .then(() => toast.success(`Módulo concluído! Selo: ${badge}`))
      .catch(() => undefined);
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-6 py-12">
        <Button asChild variant="ghost" size="sm" className="mb-6 -ml-2 rounded-full">
          <Link to="/speak2fluency">
            <ArrowLeft className="mr-1 h-4 w-4" /> Voltar ao Speak2Fluency
          </Link>
        </Button>

        <p className="text-xs tracking-widest text-muted-foreground uppercase">
          Module {module.order} · {module.minutes} min
        </p>
        <h1 className="mt-1 text-3xl font-semibold text-gold">{module.titleEn}</h1>
        <p className="text-sm text-muted-foreground">{module.titlePt}</p>
        <div className="mt-4 text-sm text-foreground/80">
          <BilingualLine value={module.opening} />
        </div>

        <ol className="mt-6 flex flex-wrap gap-2">
          {FLUENCY_STEPS.map((step) => (
            <li
              key={step.id}
              className={`rounded-full border px-3 py-1 text-xs ${
                done.includes(step.id)
                  ? "border-gold/70 bg-gold/10 text-gold"
                  : "border-primary/30 text-muted-foreground"
              }`}
            >
              {step.labelEn}
            </li>
          ))}
        </ol>

        <Section title="Warm-up" subtitle="Aquecimento" onDone={() => markStep("warmup")}>
          <ul className="space-y-3 text-sm text-foreground/80">
            {module.warmUp.map((item) => (
              <li key={item.en}>
                <BilingualLine value={item} />
              </li>
            ))}
          </ul>
        </Section>

        <Section
          title="Listening & Reading"
          subtitle="Escuta e leitura"
          onDone={() => markStep("input")}
        >
          <BilingualLine value={module.input.context} className="text-sm text-muted-foreground" />
          <div className="mt-4 space-y-3">
            {module.input.dialogue.map((line, i) => (
              <div key={`${line.who}-${i}`} className="rounded-xl border border-border bg-card/60 p-3">
                <p className="text-xs tracking-widest text-muted-foreground uppercase">{line.who}</p>
                <PhrasePractice en={line.line} pt="" />
              </div>
            ))}
          </div>
        </Section>

        <Section
          title="Notice the Patterns"
          subtitle="Padrões observados"
          onDone={() => markStep("notice")}
        >
          <ul className="space-y-3 text-sm text-foreground/80">
            {module.notice.map((item) => (
              <li key={item.en}>
                <BilingualLine value={item} />
              </li>
            ))}
          </ul>
          <h3 className="mt-6 text-sm font-semibold text-gold">
            Key chunks <span className="text-muted-foreground">· Chunks do módulo</span>
          </h3>
          <div className="mt-3 space-y-3">
            {module.chunks.map((chunk) => (
              <div key={chunk.en} className="rounded-xl border border-border bg-card/60 p-3">
                <PhrasePractice en={chunk.en} pt={chunk.pt} />
              </div>
            ))}
          </div>
        </Section>

        <Section title="Guided Practice" subtitle="Prática guiada" onDone={() => markStep("practice")}>
          <div className="space-y-4">
            {module.practice.map((item, i) => (
              <div key={item.prompt.en} className="rounded-xl border border-border bg-card/60 p-4">
                <BilingualLine value={item.prompt} className="text-sm font-semibold text-foreground" />
                <BilingualLine value={item.hint} className="text-xs text-muted-foreground" />
                <Textarea
                  className="mt-3"
                  rows={2}
                  placeholder="Type your answer in English…"
                  value={answers[`practice-${i}`] ?? ""}
                  onChange={(e) =>
                    setAnswers((prev) => ({ ...prev, [`practice-${i}`]: e.target.value }))
                  }
                />
              </div>
            ))}
          </div>
        </Section>

        <Section
          title="Speaking Challenge"
          subtitle={`Desafio de fala · ${module.challenge.seconds}s`}
          onDone={() => markStep("challenge")}
        >
          <BilingualLine value={module.challenge.context} className="text-sm text-muted-foreground" />
          <div className="mt-2">
            <BilingualLine value={module.challenge.goal} className="text-sm text-foreground/80" />
          </div>
          <Textarea
            className="mt-4"
            rows={5}
            placeholder="Write or transcribe what you said…"
            value={transcript}
            onChange={(e) => setTranscript(e.target.value)}
          />
          <Button
            onClick={runFeedback}
            disabled={busy}
            className="mt-4 rounded-full bg-gold font-semibold text-primary-foreground hover:opacity-90"
          >
            {busy ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Sparkles className="mr-2 h-4 w-4" />
            )}
            Get AI feedback
          </Button>
        </Section>


        {feedback && (
          <section className="mt-8 rounded-2xl border border-gold/50 bg-gold/5 p-5">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-gold">AI Feedback</h2>
                <p className="text-xs tracking-widest text-muted-foreground uppercase">
                  Feedback da IA
                </p>
              </div>
              <span className="rounded-full bg-gold px-3 py-1 text-xs font-semibold text-primary-foreground">
                {feedback.score}/100
              </span>
            </div>
            <p className="mt-3 text-sm text-foreground/80">{feedback.summary}</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <Metric label="Pronunciation" value={feedback.pronunciation} />
              <Metric label="Stress" value={feedback.stress} />
              <Metric label="Intonation" value={feedback.intonation} />
              <Metric label="Fluency" value={feedback.fluency} />
            </div>
            <h3 className="mt-5 text-sm font-semibold text-gold">What worked well</h3>
            <ul className="mt-2 space-y-1 text-sm text-foreground/80">
              {feedback.highlights.map((h) => (
                <li key={h}>• {h}</li>
              ))}
            </ul>
            <h3 className="mt-4 text-sm font-semibold text-gold">Priorities</h3>
            <ul className="mt-2 space-y-1 text-sm text-foreground/80">
              {feedback.focus.map((f) => (
                <li key={f}>• {f}</li>
              ))}
            </ul>
            <div className="mt-5 rounded-xl border border-border bg-card/60 p-3">
              <p className="text-xs tracking-widest text-muted-foreground uppercase">
                Model answer
              </p>
              <PhrasePractice en={feedback.rewrite} pt="" />
            </div>
            <p className="mt-4 text-sm text-foreground/80">
              <span className="text-gold">Next step:</span> {feedback.nextStep}
            </p>
          </section>
        )}

        <Section title="Reflection" subtitle="Reflexão" onDone={() => markStep("reflection")}>
          <ul className="space-y-3 text-sm text-foreground/80">
            {module.reflection.map((item) => (
              <li key={item.en}>
                <BilingualLine value={item} />
              </li>
            ))}
          </ul>
        </Section>

        <section className="mt-10">
          <h2 className="text-lg font-semibold text-gold">Checkpoint</h2>
          <p className="text-xs tracking-widest text-muted-foreground uppercase">
            Choose the correct option
          </p>
          <div className="mt-4 space-y-4">
            {module.checkpoint.map((q, i) => (
              <div key={q.question} className="rounded-xl border border-border bg-card/60 p-4">
                <p className="text-sm font-semibold text-foreground">{q.question}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {q.options.map((option) => {
                    const selected = checkpoint[i] === option;
                    const correct = selected && option === q.answer;
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setCheckpoint((prev) => ({ ...prev, [i]: option }))}
                        className={`rounded-full border px-3 py-1 text-xs transition ${
                          selected
                            ? correct
                              ? "border-gold bg-gold/15 text-gold"
                              : "border-destructive text-destructive"
                            : "border-primary/30 text-foreground/80 hover:border-gold/60"
                        }`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            {checkpointCorrect} / {module.checkpoint.length} correct
          </p>
          <Button
            onClick={finishModule}
            className="mt-4 rounded-full bg-gold font-semibold text-primary-foreground hover:opacity-90"
          >
            <CheckCircle2 className="mr-2 h-4 w-4" /> Complete module
          </Button>
        </section>

      </div>
    </main>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-card/60 p-3">
      <p className="text-xs tracking-widest text-muted-foreground uppercase">{label}</p>
      <p className="mt-1 text-sm text-foreground/80">{value}</p>
    </div>
  );
}

function Section({
  title,
  subtitle,
  onDone,
  children,
}: {
  title: string;
  subtitle: string;
  onDone: () => void;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-gold">{title}</h2>
          <p className="text-xs tracking-widest text-muted-foreground uppercase">{subtitle}</p>
        </div>
        <Button variant="outline" size="sm" className="rounded-full" onClick={onDone}>
          Marcar como concluído
        </Button>
      </div>
      <div className="mt-4">{children}</div>
    </section>
  );
}
