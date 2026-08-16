import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { BookOpen, Search, Check, RotateCcw } from "lucide-react";
import { AltHeading } from "@/components/AltHeading";
import { FeatureGate } from "@/components/FeatureGate";
import { FEATURE_KEYS } from "@/lib/entitlements";
import {
  GENERAL_READING,
  GENERAL_READING_TOTAL,
  READING_LEVELS,
  type ReadingText,
} from "@/lib/general-reading";

export const Route = createFileRoute("/_authenticated/reading")({
  head: () => {
    const title = "Reading | Speak2Co";
    const description =
      "Biblioteca geral de leitura em inglês: textos progressivos com vocabulário guiado e perguntas de compreensão.";
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
  component: ReadingPage,
});

function TextCard({
  text,
  done,
  onComplete,
}: {
  text: ReadingText;
  done: boolean;
  onComplete: () => void;
}) {
  const [open, setOpen] = useState(false);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [checked, setChecked] = useState(false);
  const correct = text.questions.filter((q, i) => answers[i] === q.answer).length;

  return (
    <article className="overflow-hidden rounded-3xl border border-border bg-card/60">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full flex-wrap items-start justify-between gap-3 border-b border-border bg-muted/30 px-6 py-4 text-left"
      >
        <div>
          <p className="text-xs font-semibold tracking-wide text-gold uppercase">
            {text.level} · {text.theme}
          </p>
          <h2 className="text-lg font-semibold text-foreground">
            {text.title}{" "}
            <span className="text-sm font-normal text-muted-foreground">({text.titlePt})</span>
          </h2>
        </div>
        <div className="flex items-center gap-2">
          {done && (
            <span className="inline-flex items-center gap-1 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
              <Check className="h-3.5 w-3.5" /> Completed
            </span>
          )}
          <span className="text-xs font-semibold text-gold">{open ? "Close" : "Read"}</span>
        </div>
      </button>

      {open && (
        <div className="space-y-6 px-6 py-5">
          <p className="text-sm text-muted-foreground">{text.intro}</p>

          <div className="space-y-3 rounded-2xl border border-border bg-background/40 p-5">
            {text.paragraphs.map((p, i) => (
              <p key={i} className="text-sm leading-relaxed text-foreground/90">
                {p}
              </p>
            ))}
          </div>

          <section>
            <h3 className="text-sm font-semibold text-foreground">Key vocabulary</h3>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {text.vocabulary.map((w) => (
                <div key={w.term} className="rounded-2xl border border-border bg-background/40 p-3">
                  <p className="text-sm font-semibold text-foreground">
                    {w.term} <span className="text-xs font-normal text-gold">· {w.pt}</span>
                  </p>
                  <p className="text-xs text-muted-foreground">{w.definition}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-sm font-semibold text-foreground">Comprehension</h3>
            <div className="mt-3 space-y-4">
              {text.questions.map((q, qi) => (
                <div key={q.question} className="rounded-2xl border border-border bg-background/40 p-4">
                  <p className="text-sm font-medium text-foreground">{q.question}</p>
                  <div className="mt-2 space-y-2">
                    {q.options.map((opt, oi) => {
                      const selected = answers[qi] === oi;
                      const isRight = checked && oi === q.answer;
                      const isWrong = checked && selected && oi !== q.answer;
                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => !checked && setAnswers((a) => ({ ...a, [qi]: oi }))}
                          className={`block w-full rounded-xl border px-4 py-2 text-left text-sm transition ${
                            isRight
                              ? "border-gold bg-gold/15 text-gold"
                              : isWrong
                                ? "border-destructive/60 bg-destructive/10 text-destructive"
                                : selected
                                  ? "border-gold/60 text-foreground"
                                  : "border-border text-muted-foreground hover:border-gold/40"
                          }`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                  {checked && (
                    <p className="mt-2 text-xs text-muted-foreground">{q.explanation}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              {!checked ? (
                <button
                  type="button"
                  onClick={() => {
                    setChecked(true);
                    onComplete();
                  }}
                  className="rounded-full bg-gold px-5 py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
                >
                  Check answers
                </button>
              ) : (
                <>
                  <span className="text-sm font-semibold text-foreground">
                    {correct}/{text.questions.length} correct
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      setChecked(false);
                      setAnswers({});
                    }}
                    className="inline-flex items-center gap-1 rounded-full border border-border px-4 py-2 text-xs font-semibold text-muted-foreground transition hover:border-gold/40"
                  >
                    <RotateCcw className="h-3.5 w-3.5" /> Try again
                  </button>
                </>
              )}
            </div>
          </section>
        </div>
      )}
    </article>
  );
}

function ReadingPage() {
  const [level, setLevel] = useState<string>("all");
  const [query, setQuery] = useState("");
  const [completed, setCompleted] = useState<string[]>([]);

  const texts = useMemo(() => {
    const q = query.trim().toLowerCase();
    return GENERAL_READING.filter(
      (t) =>
        (level === "all" || t.level === level) &&
        (!q ||
          t.title.toLowerCase().includes(q) ||
          t.titlePt.toLowerCase().includes(q) ||
          t.theme.toLowerCase().includes(q)),
    );
  }, [level, query]);

  const progress = Math.round((completed.length / GENERAL_READING_TOTAL) * 100);

  return (
    <FeatureGate
      feature={FEATURE_KEYS.learningTools}
      title="Reading"
      benefit="Leia textos progressivos com vocabulário guiado e perguntas de compreensão."
      requiredPlan="Essential"
    >
      <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-10">
        <header>
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1 text-xs font-semibold text-gold">
            <BookOpen className="h-3.5 w-3.5" /> Learning Tools
          </span>
          <AltHeading text="Reading" className="mt-4 text-3xl font-bold sm:text-4xl" />
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            Progressive texts with guided vocabulary and comprehension questions.
            <span className="block">
              Textos progressivos com vocabulário guiado e perguntas de compreensão.
            </span>
          </p>
          <div className="mt-5 flex items-center gap-3">
            <div className="h-2 w-40 overflow-hidden rounded-full bg-muted">
              <div className="h-full bg-gold" style={{ width: `${progress}%` }} />
            </div>
            <span className="text-xs text-muted-foreground">
              {completed.length}/{GENERAL_READING_TOTAL} texts completed
            </span>
          </div>
        </header>

        <div className="relative mt-6">
          <Search className="pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search a text · Buscar texto…"
            className="w-full rounded-full border border-border bg-card/60 py-3 pr-4 pl-12 text-sm text-foreground outline-none transition focus:border-gold/60"
          />
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {["all", ...READING_LEVELS].map((lv) => (
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
          {texts.map((t) => (
            <TextCard
              key={t.id}
              text={t}
              done={completed.includes(t.id)}
              onComplete={() => setCompleted((c) => (c.includes(t.id) ? c : [...c, t.id]))}
            />
          ))}
        </div>
      </main>
    </FeatureGate>
  );
}
