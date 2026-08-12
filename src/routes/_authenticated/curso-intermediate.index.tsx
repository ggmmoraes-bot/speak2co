import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import {
  Award,
  BookMarked,
  BookOpen,
  CheckCircle2,
  Download,
  GraduationCap,
  Loader2,
  Lock,
  Mic,
  Search,
  X,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { AltHeading } from "@/components/AltHeading";
import { BilingualLine } from "@/components/BilingualLine";
import {
  INTERMEDIATE_COURSE_ID,
  INTERMEDIATE_PARTS_TOTAL,
  INTERMEDIATE_UNITS,
  INTERMEDIATE_UNITS_TOTAL,
} from "@/lib/intermediate-course";
import {
  INTERMEDIATE_ASSESSMENT_ID,
  INTERMEDIATE_PASS_SCORE,
} from "@/lib/intermediate-assessment";
import { getCourseProgress } from "@/lib/course-progress.functions";

export const Route = createFileRoute("/_authenticated/curso-intermediate/")({
  head: () => {
    const title = "Curso Intermediate — 40 unidades | Speak2Co";
    const description =
      "Currículo oficial Intermediate (B1) do Método Speak2Co: 40 unidades com Part 1 — Discover e Part 2 — Communicate, checagem obrigatória e pronúncia com IA.";
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
  component: IntermediateCourseIndex,
});

function IntermediateCourseIndex() {
  const load = useServerFn(getCourseProgress);
  const [exporting, setExporting] = useState(false);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<"all" | "done" | "pending">("all");
  const { data: progress } = useQuery({
    queryKey: ["course-progress", INTERMEDIATE_COURSE_ID],
    queryFn: () => load({ data: { courseId: INTERMEDIATE_COURSE_ID } }),
  });

  const rows = progress ?? [];
  const byPart = useMemo(() => new Map(rows.map((p) => [p.lessonId, p])), [rows]);
  const done = rows.filter(
    (p) => p.completed && p.lessonId !== INTERMEDIATE_ASSESSMENT_ID,
  ).length;
  const assessment = rows.find((p) => p.lessonId === INTERMEDIATE_ASSESSMENT_ID) ?? null;
  const eligible = done >= INTERMEDIATE_PARTS_TOTAL;
  const certified = eligible && (assessment?.quizScore ?? 0) >= INTERMEDIATE_PASS_SCORE;
  const percent = Math.round((done / INTERMEDIATE_PARTS_TOTAL) * 100);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return INTERMEDIATE_UNITS.filter((unit) => {
      const isDone =
        Boolean(byPart.get(unit.discover.id)?.completed) &&
        Boolean(byPart.get(unit.communicate.id)?.completed);
      if (filter === "done" && !isDone) return false;
      if (filter === "pending" && isDone) return false;
      if (!q) return true;
      return (
        unit.title.toLowerCase().includes(q) ||
        unit.titlePt.toLowerCase().includes(q) ||
        unit.code.toLowerCase().includes(q) ||
        String(unit.number).includes(q)
      );
    });
  }, [query, filter, byPart]);

  const handleExport = async () => {
    setExporting(true);
    try {
      const { exportIntermediateCourseToPdf } = await import("@/lib/intermediate-course-pdf");
      await exportIntermediateCourseToPdf();
      toast.success("PDF completo do curso gerado.");
    } catch {
      toast.error("Não foi possível gerar o PDF. Tente novamente.");
    } finally {
      setExporting(false);
    }
  };

  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-10">
      <header className="rounded-3xl border border-border bg-card/60 p-6 backdrop-blur">
        <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
          <GraduationCap className="h-3.5 w-3.5" /> Plano Essential · CEFR B1
        </span>
        <h1 className="mt-4 text-3xl font-bold">
          <AltHeading text="Intermediate English Course" />
        </h1>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          {INTERMEDIATE_UNITS_TOTAL} unidades do currículo oficial Speak2Co ·{" "}
          {INTERMEDIATE_PARTS_TOTAL} partes pedagógicas (Discover + Communicate), com checagem
          obrigatória e prática de pronúncia com IA em todas as sessões.
        </p>
        <div className="mt-5 space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="font-semibold text-foreground">
              {done} de {INTERMEDIATE_PARTS_TOTAL} partes concluídas
            </span>
            <span className="font-bold text-gold">{percent}%</span>
          </div>
          <Progress value={percent} />
        </div>
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <Button onClick={handleExport} disabled={exporting} className="gap-2">
            {exporting ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Download className="h-4 w-4" />
            )}
            Baixar curso completo em PDF
          </Button>
          <Button asChild variant="outline" className="gap-2">
            <Link to="/vocabulario">
              <BookMarked className="h-4 w-4" />
              Vocabulário das unidades
            </Link>
          </Button>
          <span className="text-xs text-muted-foreground">
            Arquivo único com as {INTERMEDIATE_UNITS_TOTAL} unidades, vocabulário, gramática,
            exercícios e revisões.
          </span>
        </div>
      </header>

      <section className="mt-6 rounded-3xl border border-gold/40 bg-gold/5 p-6">
        <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-gold uppercase">
          {eligible ? <Award className="h-4 w-4" /> : <Lock className="h-4 w-4" />} Assessment final
        </span>
        <h2 className="mt-2 text-xl font-semibold text-foreground">
          {certified ? "Curso concluído — certificado emitido" : "Assessment final do Intermediate"}
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          {certified
            ? `Você foi aprovado com ${assessment?.quizScore}%. Seu certificado Intermediate já está disponível.`
            : eligible
              ? `Todas as partes concluídas! Faça o assessment final (mínimo ${INTERMEDIATE_PASS_SCORE}%) e o certificado é emitido automaticamente.`
              : `Conclua as ${INTERMEDIATE_PARTS_TOTAL} partes para liberar o assessment final e emitir seu certificado automaticamente.`}
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Button asChild className="rounded-full" disabled={!eligible}>
            <Link to="/curso-intermediate/assessment">
              {certified ? "Refazer assessment" : "Ir para o assessment"}
            </Link>
          </Button>
          {certified && (
            <Button asChild variant="outline" className="rounded-full">
              <Link to="/certificados">Ver certificado</Link>
            </Button>
          )}
        </div>
      </section>

      {/* Busca e filtros */}
      <div className="mt-8 space-y-4">
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
        <div className="flex flex-wrap items-center gap-2">
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
            {filtered.length} de {INTERMEDIATE_UNITS_TOTAL} unidades
          </span>
        </div>
      </div>

      <section className="mt-4 grid gap-4 sm:grid-cols-2">
        {filtered.map((unit) => {
          const d = byPart.get(unit.discover.id);
          const c = byPart.get(unit.communicate.id);
          return (
            <article
              key={unit.code}
              className="rounded-2xl border border-border bg-card/60 p-5 transition hover:border-gold/60"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                  Unit {unit.number} · CEFR {unit.cefr}
                </span>
                {d?.completed && c?.completed && <CheckCircle2 className="h-4 w-4 text-gold" />}
              </div>
              <h2 className="mt-2 text-lg font-semibold">
                <AltHeading text={unit.title} />
              </h2>
              <p className="mt-1 text-sm text-muted-foreground italic">{unit.titlePt}</p>
              <div className="mt-3">
                <BilingualLine value={unit.communicationGoal} className="text-xs text-foreground/80" />
              </div>
              <div className="mt-3 flex flex-wrap gap-3 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  <BookOpen className="h-3.5 w-3.5" /> {unit.discover.vocabulary.length} palavras
                </span>
                <span className="inline-flex items-center gap-1">
                  <Mic className="h-3.5 w-3.5" /> pronúncia com IA
                </span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <Link
                  to="/curso-intermediate/unidade/$unitCode/$part"
                  params={{ unitCode: unit.code, part: "discover" }}
                  className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${d?.completed ? "border-gold bg-gold/15 text-gold" : "border-border text-foreground/80 hover:border-gold/60"}`}
                >
                  Part 1 — Discover
                </Link>
                <Link
                  to="/curso-intermediate/unidade/$unitCode/$part"
                  params={{ unitCode: unit.code, part: "communicate" }}
                  className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${c?.completed ? "border-gold bg-gold/15 text-gold" : "border-border text-foreground/80 hover:border-gold/60"}`}
                >
                  Part 2 — Communicate
                </Link>
              </div>
            </article>
          );
        })}
        {filtered.length === 0 && (
          <div className="col-span-full rounded-2xl border border-border bg-card/40 p-8 text-center text-sm text-muted-foreground">
            Nenhuma unidade encontrada com esses filtros.
          </div>
        )}
      </section>
    </main>
  );
}
