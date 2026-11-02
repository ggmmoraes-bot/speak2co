import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { COURSE_LEVELS, listUnits } from "@/lib/live-lesson/units";
import type { CourseLevel } from "@/lib/live-lesson/script";

const COURSE_LABEL: Record<CourseLevel, string> = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  upper: "Upper-Intermediate",
};

const PARTS = [
  { value: "discover", label: "Discover" },
  { value: "communicate", label: "Communicate" },
] as const;

const selectClass =
  "h-10 w-full rounded-md border border-border bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50";

/** Atalho administrativo: abre a Live Lesson em modo preview sem digitar a URL. */
export function LiveLessonPreviewPicker() {
  const [course, setCourse] = useState<CourseLevel>("beginner");
  const units = useMemo(() => listUnits(course), [course]);
  const [unitCode, setUnitCode] = useState(units[0]?.code ?? "");
  const [part, setPart] = useState<(typeof PARTS)[number]["value"]>("discover");

  const currentUnit = units.some((u) => u.code === unitCode) ? unitCode : (units[0]?.code ?? "");

  return (
    <section id="live-lesson-preview" className="mt-6 rounded-2xl border border-border bg-card p-6">
      <h2 className="text-xl font-semibold text-foreground">
        <span className="text-foreground">Guided Lesson</span>{" "}
        <span className="text-gold">— preview</span>
      </h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Escolha o curso, a unidade e a etapa para abrir a tela da Guided Lesson with Gisele em modo preview.
      </p>

      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        <div>
          <Label htmlFor="ll-course">Curso</Label>
          <select
            id="ll-course"
            className={selectClass}
            value={course}
            onChange={(e) => {
              const next = e.target.value as CourseLevel;
              setCourse(next);
              setUnitCode(listUnits(next)[0]?.code ?? "");
            }}
          >
            {COURSE_LEVELS.map((c) => (
              <option key={c} value={c}>
                {COURSE_LABEL[c]}
              </option>
            ))}
          </select>
        </div>

        <div>
          <Label htmlFor="ll-unit">Unidade</Label>
          <select
            id="ll-unit"
            className={selectClass}
            value={currentUnit}
            onChange={(e) => setUnitCode(e.target.value)}
          >
            {units.map((u) => (
              <option key={u.code} value={u.code}>
                {u.number}. {u.title}
              </option>
            ))}
          </select>
        </div>

        <div>
          <Label htmlFor="ll-part">Etapa</Label>
          <select
            id="ll-part"
            className={selectClass}
            value={part}
            onChange={(e) => setPart(e.target.value as (typeof PARTS)[number]["value"])}
          >
            {PARTS.map((p) => (
              <option key={p.value} value={p.value}>
                {p.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <Button
          asChild
          className="glow-gold rounded-full bg-gold font-semibold text-primary-foreground hover:opacity-90"
          disabled={!currentUnit}
        >
          <Link
            to="/live-lesson/$course/$unitCode/$part"
            params={{ course, unitCode: currentUnit, part }}
          >
            <PlayCircle className="mr-2 h-4 w-4" />
            Open Guided Lesson
          </Link>
        </Button>
        <Button asChild variant="outline" className="rounded-full font-semibold">
          <Link to="/admin-live-lesson">Manage videos</Link>
        </Button>
      </div>
    </section>
  );
}
