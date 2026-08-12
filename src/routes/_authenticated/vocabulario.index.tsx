import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { BookMarked, Download, Loader2, Search, Volume2, X } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { AltHeading } from "@/components/AltHeading";
import { BEGINNER_UNITS } from "@/lib/curriculum/beginner-units";
import { INTERMEDIATE_UNITS } from "@/lib/curriculum/intermediate-units";
import type { CourseUnit } from "@/lib/curriculum/types";
import { exportVocabularyToPdf } from "@/lib/vocabulary-pdf";

export const Route = createFileRoute("/_authenticated/vocabulario/")({
  head: () => {
    const title = "Vocabulário dos cursos | Speak2Co";
    const description =
      "Revise o vocabulário de cada unidade dos cursos Speak2Co: termo, IPA, tradução, definição em inglês e exemplo — com exportação em PDF.";
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
  component: VocabularyPage,
});

const COURSES = {
  beginner: {
    label: "Beginner (A1–A2)",
    title: "Beginner English Course",
    subtitle: "Método Speak2Co · CEFR A1–A2",
    file: "speak2co-beginner-vocabulary.pdf",
    units: BEGINNER_UNITS,
    to: "/curso-beginner/unidade/$unitCode/$part" as const,
  },
  intermediate: {
    label: "Intermediate (B1)",
    title: "Intermediate English Course",
    subtitle: "Método Speak2Co · CEFR B1",
    file: "speak2co-intermediate-vocabulary.pdf",
    units: INTERMEDIATE_UNITS,
    to: "/curso-intermediate/unidade/$unitCode/$part" as const,
  },
} satisfies Record<
  string,
  {
    label: string;
    title: string;
    subtitle: string;
    file: string;
    units: CourseUnit[];
    to: string;
  }
>;

type CourseKey = keyof typeof COURSES;

function speak(term: string) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  const utterance = new SpeechSynthesisUtterance(term);
  utterance.lang = "en-US";
  utterance.rate = 0.92;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

function VocabularyPage() {
  const [course, setCourse] = useState<CourseKey>("beginner");
  const [query, setQuery] = useState("");
  const [exporting, setExporting] = useState(false);

  const active = COURSES[course];

  const units = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return active.units;
    return active.units
      .map((unit) => ({
        ...unit,
        discover: {
          ...unit.discover,
          vocabulary: unit.discover.vocabulary.filter(
            (v) =>
              v.term.toLowerCase().includes(q) ||
              v.pt.toLowerCase().includes(q) ||
              v.definition.toLowerCase().includes(q) ||
              unit.title.toLowerCase().includes(q) ||
              unit.code.toLowerCase().includes(q) ||
              String(unit.number) === q,
          ),
        },
      }))
      .filter((unit) => unit.discover.vocabulary.length > 0);
  }, [active, query]);

  const totalTerms = useMemo(
    () => active.units.reduce((sum, u) => sum + u.discover.vocabulary.length, 0),
    [active],
  );

  async function handleExport() {
    setExporting(true);
    try {
      await exportVocabularyToPdf({
        units: active.units,
        courseTitle: active.title,
        subtitle: active.subtitle,
        fileName: active.file,
      });
      toast.success("Vocabulary book gerado", {
        description: "O PDF com todas as unidades foi baixado.",
      });
    } catch {
      toast.error("Não foi possível gerar o PDF. Tente novamente.");
    } finally {
      setExporting(false);
    }
  }

  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-10">
      <header className="rounded-3xl border border-border bg-card/60 p-6 backdrop-blur">
        <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
          <BookMarked className="h-3.5 w-3.5" /> Vocabulary Book
        </span>
        <h1 className="mt-4 text-3xl font-bold">
          <AltHeading text="Vocabulary by Unit" />
        </h1>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Review every word of each unit — term, IPA, translation, English definition and example.
          <span className="block text-sm">
            Revise o vocabulário de cada unidade com tradução, definição em inglês e exemplo de uso.
          </span>
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-2">
          {(Object.keys(COURSES) as CourseKey[]).map((key) => (
            <button
              key={key}
              onClick={() => setCourse(key)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                course === key
                  ? "border-gold bg-gold/15 text-gold"
                  : "border-border text-muted-foreground hover:border-gold/40 hover:text-foreground"
              }`}
            >
              {COURSES[key].label}
            </button>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <Button onClick={handleExport} disabled={exporting} className="gap-2">
            {exporting ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Download className="h-4 w-4" />
            )}
            Baixar vocabulário em PDF
          </Button>
          <span className="text-xs text-muted-foreground">
            {active.units.length} unidades · {totalTerms} palavras.
          </span>
        </div>
      </header>

      <div className="relative mt-8">
        <Search className="pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search a word · Buscar palavra, tradução, definição ou unidade…"
          className="w-full rounded-full border border-border bg-card/60 py-3 pr-10 pl-12 text-sm text-foreground transition outline-none focus:border-gold/60"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="absolute top-1/2 right-3 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            aria-label="Limpar busca"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {units.length === 0 && (
        <p className="mt-10 text-center text-sm text-muted-foreground">
          Nenhuma palavra encontrada para “{query}”.
        </p>
      )}

      <div className="mt-6 space-y-6">
        {units.map((unit) => (
          <section
            key={unit.code}
            className="overflow-hidden rounded-3xl border border-border bg-card/60"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border bg-navy/40 px-6 py-4">
              <div>
                <p className="text-xs font-semibold tracking-wide text-gold uppercase">
                  Unit {unit.number} · {unit.code}
                </p>
                <h2 className="text-lg font-semibold text-foreground">{unit.title}</h2>
              </div>
              <Button asChild variant="outline" size="sm" className="rounded-full">
                <Link to={active.to} params={{ unitCode: unit.code, part: "discover" }}>
                  Abrir unidade
                </Link>
              </Button>
            </div>

            <ul className="divide-y divide-border">
              {unit.discover.vocabulary.map((v) => (
                <li key={`${unit.code}-${v.term}`} className="px-6 py-4">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="text-base font-bold text-foreground">{v.term}</span>
                    <span className="text-xs text-muted-foreground">{v.ipa}</span>
                    <span className="text-sm font-semibold text-gold">{v.pt}</span>
                    <button
                      onClick={() => speak(v.term)}
                      className="ml-auto inline-flex items-center gap-1 rounded-full border border-gold/40 px-3 py-1 text-xs font-semibold text-gold transition hover:bg-gold/10"
                      aria-label={`Ouvir ${v.term}`}
                    >
                      <Volume2 className="h-3.5 w-3.5" /> Listen
                    </button>
                  </div>
                  <p className="mt-1 text-sm text-foreground/90">{v.definition}</p>
                  <p className="mt-1 text-sm text-muted-foreground italic">“{v.example}”</p>
                  <p className="text-xs text-muted-foreground">{v.examplePt}</p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}
