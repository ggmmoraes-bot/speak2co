import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Mic, Search, Target, Check } from "lucide-react";
import { AltHeading } from "@/components/AltHeading";
import { FeatureGate } from "@/components/FeatureGate";
import { FEATURE_KEYS } from "@/lib/entitlements";
import { PhrasePractice } from "@/components/PhrasePractice";
import {
  GENERAL_SPEAKING,
  GENERAL_SPEAKING_TOTAL,
  SPEAKING_LEVELS,
  type SpeakingScenario,
} from "@/lib/general-speaking";

export const Route = createFileRoute("/_authenticated/speaking")({
  head: () => {
    const title = "Speaking Practice | Speak2Co";
    const description =
      "Biblioteca geral de speaking: cenários do dia a dia, frases úteis com pronúncia da IA e feedback da sua fala por nível.";
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
  component: SpeakingPage,
});

function ScenarioCard({
  scenario,
  done,
  onComplete,
}: {
  scenario: SpeakingScenario;
  done: boolean;
  onComplete: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <article className="overflow-hidden rounded-3xl border border-border bg-card/60">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full flex-wrap items-start justify-between gap-3 border-b border-border bg-muted/30 px-6 py-4 text-left"
      >
        <div>
          <p className="text-xs font-semibold tracking-wide text-gold uppercase">
            {scenario.level} · {scenario.theme}
          </p>
          <h2 className="text-lg font-semibold text-foreground">
            {scenario.title}{" "}
            <span className="text-sm font-normal text-muted-foreground">({scenario.titlePt})</span>
          </h2>
        </div>
        <div className="flex items-center gap-2">
          {done && (
            <span className="inline-flex items-center gap-1 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
              <Check className="h-3.5 w-3.5" /> Completed
            </span>
          )}
          <span className="text-xs font-semibold text-gold">{open ? "Close" : "Practice"}</span>
        </div>
      </button>

      {open && (
        <div className="space-y-6 px-6 py-5">
          <div className="rounded-2xl border border-gold/30 bg-gold/5 p-4">
            <p className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <Target className="h-4 w-4 text-gold" /> {scenario.goal}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">{scenario.goalPt}</p>
          </div>

          <section>
            <h3 className="text-sm font-semibold text-foreground">
              Useful phrases{" "}
              <span className="font-normal text-muted-foreground">
                — listen to the AI and record your voice
              </span>
            </h3>
            <div className="mt-3 space-y-3">
              {scenario.usefulPhrases.map((p) => (
                <PhrasePractice key={p.en} en={p.en} pt={p.pt} note={p.note} />
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-sm font-semibold text-foreground">
              Free talk <span className="font-normal text-muted-foreground">— speak freely</span>
            </h3>
            <ul className="mt-3 space-y-2">
              {scenario.freeTalk.map((t) => (
                <li key={t.en} className="rounded-2xl border border-border bg-background/40 p-4">
                  <p className="text-sm font-medium text-foreground">{t.en}</p>
                  <p className="text-xs text-muted-foreground">{t.pt}</p>
                </li>
              ))}
            </ul>
          </section>

          {!done && (
            <button
              type="button"
              onClick={onComplete}
              className="rounded-full bg-gold px-5 py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
            >
              Mark as completed
            </button>
          )}
        </div>
      )}
    </article>
  );
}

function SpeakingPage() {
  const [level, setLevel] = useState<string>("all");
  const [query, setQuery] = useState("");
  const [completed, setCompleted] = useState<string[]>([]);

  const scenarios = useMemo(() => {
    const q = query.trim().toLowerCase();
    return GENERAL_SPEAKING.filter(
      (s) =>
        (level === "all" || s.level === level) &&
        (!q ||
          s.title.toLowerCase().includes(q) ||
          s.titlePt.toLowerCase().includes(q) ||
          s.theme.toLowerCase().includes(q)),
    );
  }, [level, query]);

  const progress = Math.round((completed.length / GENERAL_SPEAKING_TOTAL) * 100);

  return (
    <FeatureGate
      feature={FEATURE_KEYS.learningTools}
      title="Speaking Practice"
      benefit="Pratique fala com cenários do dia a dia, pronúncia da IA e feedback da sua gravação."
      requiredPlan="Speak2Co All Access"
    >
      <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-10">
        <header>
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1 text-xs font-semibold text-gold">
            <Mic className="h-3.5 w-3.5" /> Learning Tools
          </span>
          <AltHeading
            text="Speaking Practice"
            className="mt-4 text-3xl font-bold sm:text-4xl"
          />
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            Everyday conversations with model pronunciation and AI feedback on your own voice.
            <span className="block">
              Conversas do dia a dia com pronúncia modelo e feedback da IA sobre a sua fala.
            </span>
          </p>
          <div className="mt-5 flex items-center gap-3">
            <div className="h-2 w-40 overflow-hidden rounded-full bg-muted">
              <div className="h-full bg-gold" style={{ width: `${progress}%` }} />
            </div>
            <span className="text-xs text-muted-foreground">
              {completed.length}/{GENERAL_SPEAKING_TOTAL} scenarios completed
            </span>
          </div>
        </header>

        <div className="relative mt-6">
          <Search className="pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search a scenario · Buscar cenário…"
            className="w-full rounded-full border border-border bg-card/60 py-3 pr-4 pl-12 text-sm text-foreground outline-none transition focus:border-gold/60"
          />
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {["all", ...SPEAKING_LEVELS].map((lv) => (
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
          {scenarios.map((s) => (
            <ScenarioCard
              key={s.id}
              scenario={s}
              done={completed.includes(s.id)}
              onComplete={() => setCompleted((c) => (c.includes(s.id) ? c : [...c, s.id]))}
            />
          ))}
        </div>
      </main>
    </FeatureGate>
  );
}
