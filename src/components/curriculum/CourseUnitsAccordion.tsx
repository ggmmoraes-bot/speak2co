import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { CheckCircle2, ChevronDown, Mic, Search, X } from "lucide-react";
import { partLessonEntries } from "@/lib/curriculum/lesson-steps";
import { PART_LABEL, type CourseUnit, type UnitPartKey } from "@/lib/curriculum/types";

export type UnitProgressLookup = (lessonId: string) => boolean;

/**
 * Unidades recolhidas (accordion): todas fechadas por padrão. Ao abrir uma
 * unidade, o aluno vê apenas as aulas (etapas) daquela unidade.
 * Estrutura genérica — reutilizável em outros produtos no futuro.
 */
export function CourseUnitsAccordion({
  units,
  courseBase,
  isDone,
}: {
  units: CourseUnit[];
  /** Ex.: "/curso-beginner" */
  courseBase: string;
  isDone: UnitProgressLookup;
}) {
  const [open, setOpen] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<"all" | "done" | "pending">("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return units.filter((unit) => {
      const done = isDone(unit.discover.id) && isDone(unit.communicate.id);
      if (filter === "done" && !done) return false;
      if (filter === "pending" && done) return false;
      if (!q) return true;
      return (
        unit.title.toLowerCase().includes(q) ||
        unit.titlePt.toLowerCase().includes(q) ||
        unit.code.toLowerCase().includes(q) ||
        String(unit.number).includes(q)
      );
    });
  }, [units, query, filter, isDone]);

  return (
    <div>
      <div className="relative">
        <Search className="pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search a unit · Buscar unidade por título, número ou código…"
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

      <div className="mt-3 flex flex-wrap items-center gap-2">
        {(["all", "done", "pending"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={
              "rounded-full border px-4 py-1.5 text-xs font-semibold transition " +
              (filter === f
                ? "border-gold bg-gold/15 text-gold"
                : "border-border bg-card/40 text-muted-foreground hover:border-gold/40 hover:text-foreground")
            }
          >
            {f === "all" ? "All" : f === "done" ? "Completed" : "Pending"}
          </button>
        ))}
        <span className="text-xs text-muted-foreground">
          {filtered.length} of {units.length} units
        </span>
      </div>


      <ul className="mt-4 space-y-2">
        {filtered.map((unit) => {
          const expanded = open === unit.code;
          const done = isDone(unit.discover.id) && isDone(unit.communicate.id);
          return (
            <li
              key={unit.code}
              className="overflow-hidden rounded-2xl border border-border bg-card/60"
            >
              <button
                type="button"
                onClick={() => setOpen(expanded ? null : unit.code)}
                aria-expanded={expanded}
                className="flex w-full items-center gap-3 px-4 py-4 text-left transition hover:bg-gold/5"
              >
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-gold transition-transform ${expanded ? "rotate-180" : ""}`}
                />
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-semibold text-foreground">
                    <span className="text-gold">UNIT {unit.number}</span> — {unit.title}
                  </span>
                  <span className="block text-xs text-muted-foreground">
                    CEFR {unit.cefr} · {unit.titlePt}
                  </span>
                </span>
                {done && <CheckCircle2 className="h-4 w-4 shrink-0 text-gold" />}
              </button>

              {expanded && (
                <div className="space-y-4 border-t border-border px-4 py-4">
                  {(["discover", "communicate"] as UnitPartKey[]).map((part, partIndex) => {
                    const partId = part === "discover" ? unit.discover.id : unit.communicate.id;
                    const lessons = partLessonEntries(unit, part);
                    return (
                      <div key={part}>
                        <p className="flex items-center gap-2 text-xs font-semibold tracking-wide text-gold uppercase">
                          Part {partIndex + 1} — {PART_LABEL[part].en}
                          {isDone(partId) && <CheckCircle2 className="h-3.5 w-3.5" />}
                        </p>
                        <ol className="mt-2 space-y-1">
                          {lessons.map((lesson) => (
                            <li key={lesson.key}>
                              <Link
                                to={`${courseBase}/unidade/${unit.code}/${part}` as "/"}
                                hash={`step${lesson.stepIndex}`}
                                className="flex items-center justify-between gap-3 rounded-xl border border-border/60 bg-background/40 px-3 py-2 text-sm transition hover:border-gold/60"
                              >
                                <span className="text-foreground/90">
                                  Lesson {lesson.number} — {lesson.title.en}
                                </span>
                                <span className="text-[11px] text-muted-foreground italic">
                                  {lesson.title.pt}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ol>
                      </div>
                    );
                  })}

                  <div className="rounded-2xl border-2 border-gold/50 bg-gradient-to-b from-gold/10 to-transparent p-4">
                    <span className="inline-flex items-center gap-2 rounded-full bg-gold/15 px-3 py-1 text-[10px] font-semibold tracking-wide text-gold uppercase">
                      <Mic className="h-3 w-3" /> Speaking Practice Session
                    </span>
                    <h3 className="mt-2 text-base font-bold text-foreground">Speak2Drill</h3>
                    <p className="mt-1 text-xs text-foreground/85">
                      Final speaking practice for this unit — rebuild each phrase out loud three
                      times using only what you studied here.
                    </p>
                    <Link
                      to={`${courseBase}/unidade/${unit.code}/communicate` as "/"}
                      hash="speak2drill"
                      className="btn-gold mt-3 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold"
                    >
                      <Mic className="h-3.5 w-3.5" /> Start Speak2Drill
                    </Link>
                  </div>
                </div>
              )}

            </li>
          );
        })}
        {filtered.length === 0 && (
          <li className="rounded-2xl border border-border bg-card/40 p-8 text-center text-sm text-muted-foreground">
            Nenhuma unidade encontrada com esses filtros.
          </li>
        )}
      </ul>
    </div>
  );
}
