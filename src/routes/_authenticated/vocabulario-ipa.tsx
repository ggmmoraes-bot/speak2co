import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SpellCheck, Search, Volume2, X } from "lucide-react";
import { AltHeading } from "@/components/AltHeading";
import { GENERAL_VOCABULARY, GENERAL_VOCABULARY_TOTAL } from "@/lib/general-vocabulary";

export const Route = createFileRoute("/_authenticated/vocabulario-ipa")({
  head: () => {
    const title = "Vocabulary with IPA | Speak2Co";
    const description =
      "Banco geral de vocabulário em inglês com IPA, tradução, definição, exemplo e áudio — organizado por categorias do cotidiano.";
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
  component: GeneralVocabularyPage,
});

function speak(term: string) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  const utterance = new SpeechSynthesisUtterance(term);
  utterance.lang = "en-US";
  utterance.rate = 0.92;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

function GeneralVocabularyPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("all");

  const categories = useMemo(() => {
    const base =
      category === "all"
        ? GENERAL_VOCABULARY
        : GENERAL_VOCABULARY.filter((c) => c.id === category);
    const q = query.trim().toLowerCase();
    if (!q) return base;
    return base
      .map((c) => ({
        ...c,
        words: c.words.filter(
          (w) =>
            w.term.toLowerCase().includes(q) ||
            w.pt.toLowerCase().includes(q) ||
            w.definition.toLowerCase().includes(q) ||
            w.example.toLowerCase().includes(q) ||
            c.title.toLowerCase().includes(q),
        ),
      }))
      .filter((c) => c.words.length > 0);
  }, [category, query]);

  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-10">
      <header className="rounded-3xl border border-border bg-card/60 p-6 backdrop-blur">
        <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
          <SpellCheck className="h-3.5 w-3.5" /> Learning Tools
        </span>
        <h1 className="mt-4 text-3xl font-bold">
          <AltHeading text="Vocabulary with IPA" />
        </h1>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          A general English vocabulary bank — word, IPA, meaning, definition and example.
          <span className="block text-sm">
            Ferramenta geral de vocabulário, independente dos Product Lines. Para vocabulário de
            viagem, use Speak2Travel → Vocabulary with IPA.
          </span>
        </p>
        <p className="mt-4 text-xs text-muted-foreground">
          {GENERAL_VOCABULARY.length} categorias · {GENERAL_VOCABULARY_TOTAL} palavras.
        </p>
      </header>

      <div className="mt-6 flex flex-wrap gap-2">
        {[{ id: "all", title: "All categories" }, ...GENERAL_VOCABULARY].map((c) => (
          <button
            key={c.id}
            onClick={() => setCategory(c.id)}
            className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${
              category === c.id
                ? "border-gold bg-gold/15 text-gold"
                : "border-border text-muted-foreground hover:border-gold/40 hover:text-foreground"
            }`}
          >
            {c.title}
          </button>
        ))}
      </div>

      <div className="relative mt-6">
        <Search className="pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search a word · Buscar palavra, tradução, definição ou categoria…"
          className="w-full rounded-full border border-border bg-card/60 py-3 pr-10 pl-12 text-sm text-foreground transition outline-none focus:border-gold/60"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="absolute top-1/2 right-3 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {categories.length === 0 && (
        <p className="mt-10 text-center text-sm text-muted-foreground">
          Nenhuma palavra encontrada para “{query}”.
        </p>
      )}

      <div className="mt-6 space-y-6">
        {categories.map((cat) => (
          <section
            key={cat.id}
            className="overflow-hidden rounded-3xl border border-border bg-card/60"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border bg-muted/30 px-6 py-4">
              <div>
                <p className="text-xs font-semibold tracking-wide text-gold uppercase">Category</p>
                <h2 className="text-lg font-semibold text-foreground">
                  {cat.title}{" "}
                  <span className="text-sm font-normal text-muted-foreground">({cat.titlePt})</span>
                </h2>
              </div>
              <span className="text-xs text-muted-foreground">{cat.words.length} palavras</span>
            </div>

            <ul className="divide-y divide-border">
              {cat.words.map((w) => (
                <li key={`${cat.id}-${w.term}`} className="px-6 py-4">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="text-base font-bold text-foreground">{w.term}</span>
                    <span className="text-xs text-muted-foreground">{w.ipa}</span>
                    <span className="text-sm font-semibold text-gold">{w.pt}</span>
                    <button
                      onClick={() => speak(w.term)}
                      className="ml-auto inline-flex items-center gap-1 rounded-full border border-gold/40 px-3 py-1 text-xs font-semibold text-gold transition hover:bg-gold/10"
                      aria-label={`Listen to ${w.term}`}
                    >
                      <Volume2 className="h-3.5 w-3.5" /> Listen
                    </button>
                  </div>
                  <p className="mt-1 text-sm text-foreground/90">{w.definition}</p>
                  <p className="mt-1 text-sm text-muted-foreground italic">“{w.example}”</p>
                  <p className="text-xs text-muted-foreground">{w.examplePt}</p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}
