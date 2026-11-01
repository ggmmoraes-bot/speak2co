import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { BookMarked, Check, X, RotateCcw, Search } from "lucide-react";
import { AltHeading } from "@/components/AltHeading";
import { FeatureGate } from "@/components/FeatureGate";
import { FEATURE_KEYS } from "@/lib/entitlements";
import {
  GENERAL_GRAMMAR,
  GENERAL_GRAMMAR_TOTAL,
  GRAMMAR_LEVELS,
  type GrammarTopic,
} from "@/lib/general-grammar";

export const Route = createFileRoute("/_authenticated/gramatica")({
  head: () => {
    const title = "Grammar | Speak2Co";
    const description =
      "Ferramenta geral de gramática inglesa: explicação, exemplos e exercícios progressivos do Beginner ao Advanced.";
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
  component: GrammarPage,
});

function normalize(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[.!?]/g, "")
    .replace(/\s+/g, " ")
    .replace(/’/g, "'");
}

function TopicCard({
  topic,
  done,
  onComplete,
}: {
  topic: GrammarTopic;
  done: boolean;
  onComplete: () => void;
}) {
  const [open, setOpen] = useState(false);
  const [answers, setAnswers] = useState<Record<number, string | number>>({});
  const [checked, setChecked] = useState(false);

  const correctCount = topic.exercises.filter((ex, i) => {
    const given = answers[i];
    if (ex.kind === "choice") return given === ex.answer;
    return typeof given === "string" && normalize(given) === normalize(ex.answer);
  }).length;

  const answeredAll = topic.exercises.every((_, i) => {
    const v = answers[i];
    return typeof v === "number" || (typeof v === "string" && v.trim().length > 0);
  });

  return (
    <article className="overflow-hidden rounded-3xl border border-border bg-card/60">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full flex-wrap items-center justify-between gap-3 border-b border-border bg-muted/30 px-6 py-4 text-left"
      >
        <div>
          <p className="text-xs font-semibold tracking-wide text-gold uppercase">{topic.level}</p>
          <h2 className="text-lg font-semibold text-foreground">
            {topic.title}{" "}
            <span className="text-sm font-normal text-muted-foreground">({topic.titlePt})</span>
          </h2>
        </div>
        <span className="flex items-center gap-3 text-xs text-muted-foreground">
          {done && (
            <span className="inline-flex items-center gap-1 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 font-semibold text-gold">
              <Check className="h-3.5 w-3.5" /> Reviewed
            </span>
          )}
          {open ? "Fechar" : "Abrir"}
        </span>
      </button>

      {open && (
        <div className="space-y-5 px-6 py-5">
          <div>
            <p className="text-xs font-semibold tracking-wide text-gold uppercase">Explanation</p>
            <p className="mt-1 text-sm text-foreground/90">{topic.explanation}</p>
            <p className="mt-1 text-sm text-muted-foreground">{topic.explanationPt}</p>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-wide text-gold uppercase">Examples</p>
            <ul className="mt-2 space-y-1">
              {topic.examples.map((ex) => (
                <li key={ex} className="text-sm text-foreground/90 italic">
                  “{ex}”
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <p className="text-xs font-semibold tracking-wide text-gold uppercase">Practice</p>
            {topic.exercises.map((ex, i) => {
              const given = answers[i];
              const isCorrect =
                ex.kind === "choice"
                  ? given === ex.answer
                  : typeof given === "string" && normalize(given) === normalize(ex.answer);
              return (
                <div key={i} className="rounded-2xl border border-border p-4">
                  <p className="text-sm font-medium text-foreground">
                    {i + 1}. {ex.prompt}
                  </p>
                  {ex.kind === "choice" ? (
                    <div className="mt-3 flex flex-col gap-2">
                      {ex.options.map((opt, oi) => {
                        const selected = given === oi;
                        const right = checked && oi === ex.answer;
                        const wrong = checked && selected && oi !== ex.answer;
                        return (
                          <button
                            key={oi}
                            onClick={() => !checked && setAnswers((a) => ({ ...a, [i]: oi }))}
                            className={`flex items-center gap-2 rounded-xl border px-3 py-2 text-left text-sm transition ${
                              right
                                ? "border-gold bg-gold/10 text-gold"
                                : wrong
                                  ? "border-destructive/60 text-destructive"
                                  : selected
                                    ? "border-gold/60 text-foreground"
                                    : "border-border text-muted-foreground hover:border-gold/40 hover:text-foreground"
                            }`}
                          >
                            {right && <Check className="h-3.5 w-3.5" />}
                            {wrong && <X className="h-3.5 w-3.5" />}
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="mt-3">
                      <input
                        type="text"
                        value={typeof given === "string" ? given : ""}
                        disabled={checked}
                        onChange={(e) => setAnswers((a) => ({ ...a, [i]: e.target.value }))}
                        placeholder={ex.hint ? `Dica: ${ex.hint}` : "Type your answer…"
                        }
                        className="w-full rounded-xl border border-border bg-card/60 px-4 py-2 text-sm text-foreground outline-none transition focus:border-gold/60"
                      />
                      {checked && (
                        <p
                          className={`mt-2 text-xs ${isCorrect ? "text-gold" : "text-destructive"}`}
                        >
                          {isCorrect ? "Correct!" : `Answer: ${ex.answer}`}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              );
            })}

            <div className="flex flex-wrap items-center gap-3">
              {!checked ? (
                <button
                  onClick={() => {
                    setChecked(true);
                    onComplete();
                  }}
                  disabled={!answeredAll}
                  className="rounded-full bg-gold px-5 py-2 text-xs font-semibold text-navy transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Check answers
                </button>
              ) : (
                <>
                  <span className="text-sm font-semibold text-gold">
                    {correctCount}/{topic.exercises.length} correct
                  </span>
                  <button
                    onClick={() => {
                      setAnswers({});
                      setChecked(false);
                    }}
                    className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-semibold text-muted-foreground transition hover:border-gold/40 hover:text-foreground"
                  >
                    <RotateCcw className="h-3.5 w-3.5" /> Review again
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </article>
  );
}

function GrammarPageInner() {
  const [level, setLevel] = useState<string>("all");
  const [query, setQuery] = useState("");
  const [completed, setCompleted] = useState<string[]>([]);

  const topics = useMemo(() => {
    const q = query.trim().toLowerCase();
    return GENERAL_GRAMMAR.filter(
      (t) =>
        (level === "all" || t.level === level) &&
        (!q ||
          t.title.toLowerCase().includes(q) ||
          t.titlePt.toLowerCase().includes(q) ||
          t.explanation.toLowerCase().includes(q)),
    );
  }, [level, query]);

  const progress = Math.round((completed.length / GENERAL_GRAMMAR_TOTAL) * 100);

  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-10">
      <header className="rounded-3xl border border-border bg-card/60 p-6 backdrop-blur">
        <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
          <BookMarked className="h-3.5 w-3.5" /> Learning Tools
        </span>
        <h1 className="mt-4 text-3xl font-bold">
          <AltHeading text="Grammar" />
        </h1>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          A general English grammar tool — explanation, examples and progressive practice.
          <span className="block text-sm">
            Conteúdo próprio e independente. A gramática aplicada do Speak2Fluency continua dentro
            do produto.
          </span>
        </p>
        <div className="mt-4 flex items-center gap-3">
          <div className="h-2 w-40 overflow-hidden rounded-full bg-muted">
            <div className="h-full bg-gold" style={{ width: `${progress}%` }} />
          </div>
          <span className="text-xs text-muted-foreground">
            {completed.length}/{GENERAL_GRAMMAR_TOTAL} tópicos revisados
          </span>
        </div>
      </header>

      <div className="mt-6 flex flex-wrap gap-2">
        {["all", ...GRAMMAR_LEVELS].map((lv) => (
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

      <div className="relative mt-6">
        <Search className="pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search a grammar topic · Buscar tópico gramatical…"
          className="w-full rounded-full border border-border bg-card/60 py-3 pr-4 pl-12 text-sm text-foreground outline-none transition focus:border-gold/60"
        />
      </div>

      <div className="mt-6 space-y-4">
        {topics.map((t) => (
          <TopicCard
            key={t.id}
            topic={t}
            done={completed.includes(t.id)}
            onComplete={() => setCompleted((c) => (c.includes(t.id) ? c : [...c, t.id]))}
          />
        ))}
        {topics.length === 0 && (
          <p className="mt-10 text-center text-sm text-muted-foreground">
            Nenhum tópico encontrado.
          </p>
        )}
      </div>
    </main>
  );
}

function GrammarPage() {
  return (
    <FeatureGate
      feature={FEATURE_KEYS.learningTools}
      title="Grammar"
      benefit="Estude gramática do Beginner ao Advanced com explicações bilíngues e exercícios."
      requiredPlan="Speak2Co All Access"
    >
      <GrammarPageInner />
    </FeatureGate>
  );
}
