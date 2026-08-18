import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { BookMarked, ChevronDown, Download, Loader2, Search, Volume2, X } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { AltHeading } from "@/components/AltHeading";
import { BEGINNER_UNITS } from "@/lib/curriculum/beginner-units";
import { INTERMEDIATE_UNITS } from "@/lib/curriculum/intermediate-units";
import { UPPER_UNITS } from "@/lib/curriculum/upper-units";
import type { CourseUnit } from "@/lib/curriculum/types";
import { exportVocabularyToPdf } from "@/lib/vocabulary-pdf";

export const Route = createFileRoute("/_authenticated/vocabulario/")({
  head: () => {
    const title = "Vocabulary Book — vocabulário por unidade | Speak2Co";
    const description =
      "Consulte o vocabulário dos cursos Speak2Co por curso e unidade: termo, IPA, tradução, definição em inglês e exemplo — com busca e exportação em PDF.";
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
    label: "Beginner English Course",
    hint: "CEFR A1–A2",
    title: "Beginner English Course",
    subtitle: "Método Speak2Co · CEFR A1–A2",
    file: "speak2co-beginner-vocabulary.pdf",
    units: BEGINNER_UNITS,
    base: "/curso-beginner",
  },
  intermediate: {
    label: "Intermediate English Course",
    hint: "CEFR B1",
    title: "Intermediate English Course",
    subtitle: "Método Speak2Co · CEFR B1",
    file: "speak2co-intermediate-vocabulary.pdf",
    units: INTERMEDIATE_UNITS,
    base: "/curso-intermediate",
  },
  upper: {
    label: "Upper-Intermediate English Course",
    hint: "CEFR B2",
    title: "Upper-Intermediate English Course",
    subtitle: "Método Speak2Co · CEFR B2",
    file: "speak2co-upper-intermediate-vocabulary.pdf",
    units: UPPER_UNITS,
    base: "/curso-upper",
  },
} satisfies Record<
  string,
  {
    label: string;
    hint: string;
    title: string;
    subtitle: string;
    file: string;
    units: CourseUnit[];
    base: string;
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
  const [openCourse, setOpenCourse] = useState<CourseKey | null>(null);
  const [openUnit, setOpenUnit] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [exporting, setExporting] = useState<CourseKey | null>(null);

  const q = query.trim().toLowerCase();

  const unitsFor = useMemo(
    () => (key: CourseKey) => {
      const units = COURSES[key].units;
      if (!q) return units;
      return units
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
    },
    [q],
  );

  async function handleExport(key: CourseKey) {
    const course = COURSES[key];
    setExporting(key);
    try {
      await exportVocabularyToPdf({
        units: course.units,
        courseTitle: course.title,
        subtitle: course.subtitle,
        fileName: course.file,
      });
      toast.success("Vocabulary book gerado", {
        description: "O PDF com todas as unidades foi baixado.",
      });
    } catch {
      toast.error("Não foi possível gerar o PDF. Tente novamente.");
    } finally {
      setExporting(null);
    }
  }

  return (
    <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-8 sm:px-6 sm:py-10">
      <header className="rounded-3xl border border-border bg-card/60 p-6 backdrop-blur">
        <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
          <BookMarked className="h-3.5 w-3.5" /> Vocabulary Book
        </span>
        <h1 className="mt-4 text-3xl font-bold">
          <AltHeading text="Vocabulary by Course and Unit" />
        </h1>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Open a course, then a unit to review its words — term, IPA, definition and example.
          <span className="block text-sm">
            Abra o curso e depois a unidade para revisar as palavras com tradução, definição em
            inglês e exemplo.
          </span>
        </p>
      </header>

      <div className="relative mt-6">
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

      <ul className="mt-6 space-y-3">
        {(Object.keys(COURSES) as CourseKey[]).map((key) => {
          const course = COURSES[key];
          const expanded = openCourse === key;
          const units = expanded ? unitsFor(key) : [];
          const total = course.units.reduce((sum, u) => sum + u.discover.vocabulary.length, 0);
          return (
            <li key={key} className="overflow-hidden rounded-2xl border border-border bg-card/60">
              <button
                type="button"
                onClick={() => {
                  setOpenCourse(expanded ? null : key);
                  setOpenUnit(null);
                }}
                aria-expanded={expanded}
                className="flex w-full items-center gap-3 px-5 py-4 text-left transition hover:bg-gold/5"
              >
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-gold transition-transform ${expanded ? "rotate-180" : ""}`}
                />
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-semibold text-foreground">
                    {course.label}
                  </span>
                  <span className="block text-xs text-muted-foreground">
                    {course.hint} · {course.units.length} unidades · {total} palavras
                  </span>
                </span>
              </button>

              {expanded && (
                <div className="border-t border-border px-4 py-4">
                  <Button
                    onClick={() => void handleExport(key)}
                    disabled={exporting === key}
                    variant="outline"
                    size="sm"
                    className="mb-4 gap-2 rounded-full"
                  >
                    {exporting === key ? (
                      <Loader2 className="h-3.5 w-3.5 animate-spin" />
                    ) : (
                      <Download className="h-3.5 w-3.5" />
                    )}
                    Baixar vocabulário em PDF
                  </Button>

                  {units.length === 0 && (
                    <p className="py-4 text-center text-sm text-muted-foreground">
                      Nenhuma palavra encontrada para “{query}”.
                    </p>
                  )}

                  <ul className="space-y-2">
                    {units.map((unit) => {
                      const unitOpen = openUnit === `${key}:${unit.code}`;
                      return (
                        <li
                          key={unit.code}
                          className="overflow-hidden rounded-xl border border-border/70 bg-background/40"
                        >
                          <button
                            type="button"
                            onClick={() => setOpenUnit(unitOpen ? null : `${key}:${unit.code}`)}
                            aria-expanded={unitOpen}
                            className="flex w-full items-center gap-2 px-4 py-3 text-left text-sm transition hover:bg-gold/5"
                          >
                            <ChevronDown
                              className={`h-3.5 w-3.5 shrink-0 text-gold transition-transform ${unitOpen ? "rotate-180" : ""}`}
                            />
                            <span className="min-w-0 flex-1">
                              <span className="block font-semibold text-foreground">
                                Unit {unit.number} — {unit.title}
                              </span>
                              <span className="block text-xs text-muted-foreground">
                                {unit.discover.vocabulary.length} palavras
                              </span>
                            </span>
                          </button>

                          {unitOpen && (
                            <div className="border-t border-border/70">
                              <ul className="divide-y divide-border/60">
                                {unit.discover.vocabulary.map((v) => (
                                  <li key={`${unit.code}-${v.term}`} className="px-4 py-3">
                                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                                      <span className="text-base font-bold text-foreground">
                                        {v.term}
                                      </span>
                                      <span className="text-xs text-muted-foreground">{v.ipa}</span>
                                      <span className="text-sm font-semibold text-gold">
                                        {v.pt}
                                      </span>
                                      <button
                                        onClick={() => speak(v.term)}
                                        className="ml-auto inline-flex items-center gap-1 rounded-full border border-gold/40 px-3 py-1 text-xs font-semibold text-gold transition hover:bg-gold/10"
                                        aria-label={`Ouvir ${v.term}`}
                                      >
                                        <Volume2 className="h-3.5 w-3.5" /> Listen
                                      </button>
                                    </div>
                                    <p className="mt-1 text-sm text-foreground/90">
                                      {v.definition}
                                    </p>
                                    <p className="mt-1 text-sm text-muted-foreground italic">
                                      “{v.example}”
                                    </p>
                                    <p className="text-xs text-muted-foreground">{v.examplePt}</p>
                                  </li>
                                ))}
                              </ul>
                              <div className="px-4 py-3">
                                <Button asChild variant="outline" size="sm" className="rounded-full">
                                  <Link
                                    to={`${course.base}/unidade/${unit.code}/discover` as "/"}
                                  >
                                    Abrir unidade
                                  </Link>
                                </Button>
                              </div>
                            </div>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </main>
  );
}
