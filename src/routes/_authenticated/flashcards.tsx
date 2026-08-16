import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { Layers, Volume2, RotateCcw } from "lucide-react";
import { AltHeading } from "@/components/AltHeading";
import { FeatureGate } from "@/components/FeatureGate";
import { FEATURE_KEYS } from "@/lib/entitlements";
import {
  FLASHCARD_CATEGORIES,
  FLASHCARD_DECK,
  dueCards,
  loadStates,
  newCardState,
  saveStates,
  schedule,
  type CardState,
  type FlashcardGrade,
} from "@/lib/flashcards";

export const Route = createFileRoute("/_authenticated/flashcards")({
  head: () => {
    const title = "Flashcards | Speak2Co";
    const description =
      "Revisão espaçada do vocabulário Speak2Co: sistema Again, Hard, Good e Easy com áudio e IPA.";
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
  component: FlashcardsPage,
});

const GRADES: { key: FlashcardGrade; label: string; hint: string; tone: string }[] = [
  { key: "again", label: "Again", hint: "10 min", tone: "border-destructive/60 text-destructive" },
  { key: "hard", label: "Hard", hint: "short", tone: "border-border text-foreground" },
  { key: "good", label: "Good", hint: "normal", tone: "border-gold/60 text-gold" },
  { key: "easy", label: "Easy", hint: "longer", tone: "border-gold bg-gold/15 text-gold" },
];

function speak(term: string) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  const utterance = new SpeechSynthesisUtterance(term);
  utterance.lang = "en-US";
  utterance.rate = 0.92;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

function FlashcardsPage() {
  const [states, setStates] = useState<Record<string, CardState>>({});
  const [ready, setReady] = useState(false);
  const [category, setCategory] = useState("all");
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [reviewed, setReviewed] = useState(0);

  useEffect(() => {
    setStates(loadStates());
    setReady(true);
  }, []);

  const queue = useMemo(
    () => (ready ? dueCards(states, category) : []),
    [ready, states, category, reviewed],
  );

  const card = queue[index] ?? queue[0];

  function grade(g: FlashcardGrade) {
    if (!card) return;
    const next = { ...states, [card.id]: schedule(states[card.id] ?? newCardState(), g) };
    setStates(next);
    saveStates(next);
    setFlipped(false);
    setIndex(0);
    setReviewed((r) => r + 1);
  }

  function resetProgress() {
    setStates({});
    saveStates({});
    setReviewed(0);
    setIndex(0);
    setFlipped(false);
  }

  const total = category === "all"
    ? FLASHCARD_DECK.length
    : FLASHCARD_DECK.filter((c) => c.categoryId === category).length;

  return (
    <FeatureGate
      feature={FEATURE_KEYS.learningTools}
      title="Flashcards"
      benefit="Revisão espaçada do seu vocabulário com o sistema Again, Hard, Good e Easy."
      requiredPlan="Essential"
    >
      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-10">
        <header>
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1 text-xs font-semibold text-gold">
            <Layers className="h-3.5 w-3.5" /> Learning Tools
          </span>
          <AltHeading text="Flashcards" className="mt-4 text-3xl font-bold sm:text-4xl" />
          <p className="mt-2 text-sm text-muted-foreground">
            Spaced repetition powered by your Vocabulary with IPA bank.
            <span className="block">
              Revisão espaçada usando o banco do Vocabulary with IPA.
            </span>
          </p>
        </header>

        <div className="mt-6 flex flex-wrap gap-2">
          <button
            onClick={() => {
              setCategory("all");
              setIndex(0);
              setFlipped(false);
            }}
            className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${
              category === "all"
                ? "border-gold bg-gold/15 text-gold"
                : "border-border text-muted-foreground hover:border-gold/40"
            }`}
          >
            All categories
          </button>
          {FLASHCARD_CATEGORIES.map((c) => (
            <button
              key={c.id}
              onClick={() => {
                setCategory(c.id);
                setIndex(0);
                setFlipped(false);
              }}
              className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${
                category === c.id
                  ? "border-gold bg-gold/15 text-gold"
                  : "border-border text-muted-foreground hover:border-gold/40"
              }`}
            >
              {c.title}
            </button>
          ))}
        </div>

        <p className="mt-4 text-xs text-muted-foreground">
          {queue.length} cards due now · {total} cards in this deck · {reviewed} reviewed in this
          session
        </p>

        {card ? (
          <section className="mt-6 rounded-3xl border border-border bg-card/60 p-8 text-center">
            <p className="text-xs font-semibold tracking-wide text-gold uppercase">
              {card.category}
            </p>
            <h2 className="mt-3 text-3xl font-bold text-foreground">{card.term}</h2>
            <button
              type="button"
              onClick={() => speak(card.term)}
              className="mt-2 inline-flex items-center gap-2 rounded-full border border-gold/40 px-4 py-1 text-xs font-semibold text-gold"
            >
              <Volume2 className="h-3.5 w-3.5" /> {card.ipa}
            </button>

            {flipped ? (
              <div className="mt-6 space-y-2 text-sm">
                <p className="text-lg font-semibold text-gold">{card.pt}</p>
                <p className="text-foreground/85">{card.definition}</p>
                <p className="text-foreground/70 italic">“{card.example}”</p>
                <p className="text-xs text-muted-foreground">{card.examplePt}</p>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setFlipped(true)}
                className="mt-8 rounded-full bg-gold px-6 py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
              >
                Show answer
              </button>
            )}

            {flipped && (
              <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {GRADES.map((g) => (
                  <button
                    key={g.key}
                    type="button"
                    onClick={() => grade(g.key)}
                    className={`rounded-2xl border px-3 py-3 text-xs font-semibold transition hover:opacity-90 ${g.tone}`}
                  >
                    {g.label}
                    <span className="block text-[10px] font-normal opacity-70">{g.hint}</span>
                  </button>
                ))}
              </div>
            )}
          </section>
        ) : (
          <section className="mt-6 rounded-3xl border border-border bg-card/60 p-10 text-center">
            <h2 className="text-lg font-semibold text-foreground">All caught up!</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Você revisou tudo o que estava programado para agora. Volte mais tarde ou escolha
              outra categoria.
            </p>
          </section>
        )}

        <button
          type="button"
          onClick={resetProgress}
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-semibold text-muted-foreground transition hover:border-gold/40"
        >
          <RotateCcw className="h-3.5 w-3.5" /> Reset review schedule
        </button>
      </main>
    </FeatureGate>
  );
}
