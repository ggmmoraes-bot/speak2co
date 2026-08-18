import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { CheckCircle2, ChevronDown, Search, X } from "lucide-react";
import { partStepTitles } from "@/lib/curriculum/lesson-steps";
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
            aria-label="Limpar busca"
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
            {f === "all" ? "Todas" : f === "done" ? "Concluídas" : "Pendentes"}
          </button>
        ))}
        <span className="text-xs text-muted-foreground">
          {filtered.length} de {units.length} unidades
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
                    UNIT {unit.number} — {unit.title}
                  </span>
                  <span className="block text-xs text-muted-foreground">
                    CEFR {unit.cefr} · {unit.titlePt}
                  </span>
                </span>
                {done && <CheckCircle2 className="h-4 w-4 shrink-0 text-gold" />}
              </button>

              {expanded && (
                <div className="space-y-4 border-t border-border px-4 py-4">
                  {(["discover", "communicate"] as UnitPartKey[]).map((part) => {
                    const partId = part === "discover" ? unit.discover.id : unit.communicate.id;
                    const steps = partStepTitles(unit, part);
                    return (
                      <div key={part}>
                        <p className="flex items-center gap-2 text-xs font-semibold text-gold">
                          {PART_LABEL[part].en}
                          {isDone(partId) && <CheckCircle2 className="h-3.5 w-3.5" />}
                        </p>
                        <ol className="mt-2 space-y-1">
                          {steps.map((step, i) => (
                            <li key={step.key}>
                              <Link
                                to={`${courseBase}/unidade/${unit.code}/${part}` as "/"}
                                hash={`step${i + 1}`}
                                className="flex items-center justify-between gap-3 rounded-xl border border-border/60 bg-background/40 px-3 py-2 text-sm transition hover:border-gold/60"
                              >
                                <span className="text-foreground/90">
                                  Lesson {i + 1} — {step.title.en}
                                </span>
                                <span className="text-[11px] text-muted-foreground italic">
                                  {step.title.pt}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ol>
                      </div>
                    );
                  })}
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
