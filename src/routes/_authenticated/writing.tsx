import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { PenLine, Search, Loader2, Sparkles, Check } from "lucide-react";
import { toast } from "sonner";
import { AltHeading } from "@/components/AltHeading";
import { FeatureGate } from "@/components/FeatureGate";
import { FEATURE_KEYS } from "@/lib/entitlements";
import { reviewWriting, type WritingFeedback } from "@/lib/writing.functions";
import {
  GENERAL_WRITING,
  GENERAL_WRITING_TOTAL,
  WRITING_LEVELS,
  type WritingTask,
} from "@/lib/general-writing";

export const Route = createFileRoute("/_authenticated/writing")({
  head: () => {
    const title = "Writing | Speak2Co";
    const description =
      "Produção escrita em inglês por nível: propostas, checklist, texto modelo e correção detalhada da IA.";
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
  component: WritingPage,
});

function TaskCard({ task, onDone }: { task: WritingTask; onDone: () => void }) {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [showModel, setShowModel] = useState(false);
  const [feedback, setFeedback] = useState<WritingFeedback | null>(null);
  const review = useServerFn(reviewWriting);

  const words = text.trim() ? text.trim().split(/\s+/).length : 0;

  const mutation = useMutation({
    mutationFn: () =>
      review({
        data: {
          taskTitle: task.title,
          prompt: task.prompt,
          level: task.level,
          text: text.trim(),
        },
      }),
    onSuccess: (result) => {
      setFeedback(result);
      onDone();
    },
    onError: (e: unknown) =>
      toast.error(e instanceof Error ? e.message : "Não foi possível corrigir seu texto."),
  });

  return (
    <article className="overflow-hidden rounded-3xl border border-border bg-card/60">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full flex-wrap items-start justify-between gap-3 border-b border-border bg-muted/30 px-6 py-4 text-left"
      >
        <div>
          <p className="text-xs font-semibold tracking-wide text-gold uppercase">
            {task.level} · {task.theme}
          </p>
          <h2 className="text-lg font-semibold text-foreground">
            {task.title}{" "}
            <span className="text-sm font-normal text-muted-foreground">({task.titlePt})</span>
          </h2>
        </div>
        <span className="text-xs font-semibold text-gold">{open ? "Close" : "Write"}</span>
      </button>

      {open && (
        <div className="space-y-5 px-6 py-5">
          <div className="rounded-2xl border border-gold/30 bg-gold/5 p-4">
            <p className="text-sm font-medium text-foreground">{task.prompt}</p>
            <p className="mt-1 text-xs text-muted-foreground">{task.promptPt}</p>
            <p className="mt-2 text-xs font-semibold text-gold">
              Minimum: {task.minWords} words
            </p>
          </div>

          <section className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-background/40 p-4">
              <h3 className="text-sm font-semibold text-foreground">Checklist</h3>
              <ul className="mt-2 space-y-1">
                {task.checklist.map((c) => (
                  <li key={c} className="flex gap-2 text-xs text-muted-foreground">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" /> {c}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-background/40 p-4">
              <h3 className="text-sm font-semibold text-foreground">Useful language</h3>
              <ul className="mt-2 space-y-1">
                {task.usefulLanguage.map((c) => (
                  <li key={c} className="text-xs text-muted-foreground">
                    · {c}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <div>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={10}
              placeholder="Write your text here in English…"
              className="w-full rounded-2xl border border-border bg-background/60 p-4 text-sm text-foreground outline-none transition focus:border-gold/60"
            />
            <div className="mt-2 flex flex-wrap items-center gap-3">
              <span className="text-xs text-muted-foreground">
                {words} / {task.minWords} words
              </span>
              <button
                type="button"
                disabled={words < 20 || mutation.isPending}
                onClick={() => mutation.mutate()}
                className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-90 disabled:opacity-50"
              >
                {mutation.isPending ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Sparkles className="h-4 w-4" />
                )}
                Get AI feedback
              </button>
              <button
                type="button"
                onClick={() => setShowModel((v) => !v)}
                className="rounded-full border border-border px-4 py-2 text-xs font-semibold text-muted-foreground transition hover:border-gold/40"
              >
                {showModel ? "Hide model answer" : "Show model answer"}
              </button>
            </div>
          </div>

          {showModel && (
            <div className="rounded-2xl border border-border bg-background/40 p-4">
              <h3 className="text-sm font-semibold text-foreground">Model answer</h3>
              <p className="mt-2 text-sm whitespace-pre-line text-foreground/85">{task.model}</p>
            </div>
          )}

          {feedback && (
            <div className="space-y-4 rounded-2xl border border-gold/30 bg-gold/5 p-5">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-gold">{feedback.score}</span>
                <p className="text-sm text-foreground/85">{feedback.summary}</p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <h4 className="text-xs font-semibold tracking-wide text-gold uppercase">
                    Strengths
                  </h4>
                  <ul className="mt-1 space-y-1 text-xs text-foreground/85">
                    {feedback.strengths.map((s) => (
                      <li key={s}>· {s}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-semibold tracking-wide text-gold uppercase">
                    Improvements
                  </h4>
                  <ul className="mt-1 space-y-1 text-xs text-foreground/85">
                    {feedback.improvements.map((s) => (
                      <li key={s}>· {s}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {feedback.corrections.length > 0 && (
                <div>
                  <h4 className="text-xs font-semibold tracking-wide text-gold uppercase">
                    Corrections
                  </h4>
                  <div className="mt-2 space-y-2">
                    {feedback.corrections.map((c, i) => (
                      <div key={i} className="rounded-xl border border-border bg-background/50 p-3">
                        <p className="text-xs text-destructive line-through">{c.original}</p>
                        <p className="text-xs font-semibold text-foreground">{c.corrected}</p>
                        <p className="mt-1 text-[11px] text-muted-foreground">{c.why}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h4 className="text-xs font-semibold tracking-wide text-gold uppercase">
                  Corrected text
                </h4>
                <p className="mt-1 text-sm whitespace-pre-line text-foreground/85">
                  {feedback.correctedText}
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </article>
  );
}

function WritingPage() {
  const [level, setLevel] = useState<string>("all");
  const [query, setQuery] = useState("");
  const [completed, setCompleted] = useState<string[]>([]);

  const tasks = useMemo(() => {
    const q = query.trim().toLowerCase();
    return GENERAL_WRITING.filter(
      (t) =>
        (level === "all" || t.level === level) &&
        (!q ||
          t.title.toLowerCase().includes(q) ||
          t.titlePt.toLowerCase().includes(q) ||
          t.theme.toLowerCase().includes(q)),
    );
  }, [level, query]);

  const progress = Math.round((completed.length / GENERAL_WRITING_TOTAL) * 100);

  return (
    <FeatureGate
      feature={FEATURE_KEYS.learningTools}
      title="Writing"
      benefit="Escreva textos em inglês e receba correção detalhada da IA, com versão corrigida."
      requiredPlan="Speak2Co Complete"
    >
      <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-10">
        <header>
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1 text-xs font-semibold text-gold">
            <PenLine className="h-3.5 w-3.5" /> Learning Tools
          </span>
          <AltHeading text="Writing" className="mt-4 text-3xl font-bold sm:text-4xl" />
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            Write, submit and receive AI corrections with a rewritten version of your text.
            <span className="block">
              Escreva, envie e receba correções da IA com uma versão reescrita do seu texto.
            </span>
          </p>
          <div className="mt-5 flex items-center gap-3">
            <div className="h-2 w-40 overflow-hidden rounded-full bg-muted">
              <div className="h-full bg-gold" style={{ width: `${progress}%` }} />
            </div>
            <span className="text-xs text-muted-foreground">
              {completed.length}/{GENERAL_WRITING_TOTAL} tasks submitted
            </span>
          </div>
        </header>

        <div className="relative mt-6">
          <Search className="pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search a task · Buscar tarefa…"
            className="w-full rounded-full border border-border bg-card/60 py-3 pr-4 pl-12 text-sm text-foreground outline-none transition focus:border-gold/60"
          />
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {["all", ...WRITING_LEVELS].map((lv) => (
            <button
              key={lv}
              onClick={() => setLevel(lv)}
              className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${
                level === lv
                  ? "border-gold bg-gold/15 text-gold"
                  : "border-border text-muted-foreground hover:border-gold/40 hover:text-foreground"
              }`}
            >
              {lv === "all" ? "All levels" : lv}
            </button>
          ))}
        </div>

        <div className="mt-6 space-y-5">
          {tasks.map((t) => (
            <TaskCard
              key={t.id}
              task={t}
              onDone={() => setCompleted((c) => (c.includes(t.id) ? c : [...c, t.id]))}
            />
          ))}
        </div>
      </main>
    </FeatureGate>
  );
}
