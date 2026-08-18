import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useQuery } from "@tanstack/react-query";
import { Award, BookMarked, Download, GraduationCap, Loader2, Lock } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { AltHeading } from "@/components/AltHeading";
import { CourseUnitsAccordion } from "@/components/curriculum/CourseUnitsAccordion";
import type { CourseUnit } from "@/lib/curriculum/types";
import { getCourseProgress } from "@/lib/course-progress.functions";

/**
 * Tela inicial de um English Course na ordem pedagógica:
 * Header → Progress → Units (accordion) → Vocabulary Book → Final Assessment.
 */
export function CourseHome({
  courseId,
  courseBase,
  title,
  planLabel,
  units,
  partsTotal,
  assessmentId,
  passScore,
  assessmentHref,
  certificateName,
  onExportPdf,
}: {
  courseId: string;
  /** Ex.: "/curso-beginner" */
  courseBase: string;
  title: string;
  planLabel: string;
  units: CourseUnit[];
  partsTotal: number;
  assessmentId: string;
  passScore: number;
  /** Ex.: "/curso-beginner/assessment" */
  assessmentHref: string;
  certificateName: string;
  onExportPdf: () => Promise<void>;
}) {
  const load = useServerFn(getCourseProgress);
  const [exporting, setExporting] = useState(false);
  const { data: progress } = useQuery({
    queryKey: ["course-progress", courseId],
    queryFn: () => load({ data: { courseId } }),
  });

  const rows = progress ?? [];
  const byPart = useMemo(() => new Map(rows.map((p) => [p.lessonId, p])), [rows]);
  const done = rows.filter((p) => p.completed && p.lessonId !== assessmentId).length;
  const assessment = rows.find((p) => p.lessonId === assessmentId) ?? null;
  const eligible = done >= partsTotal;
  const certified = eligible && (assessment?.quizScore ?? 0) >= passScore;
  const percent = Math.round((done / partsTotal) * 100);

  const handleExport = async () => {
    setExporting(true);
    try {
      await onExportPdf();
      toast.success("PDF completo do curso gerado.");
    } catch {
      toast.error("Não foi possível gerar o PDF. Tente novamente.");
    } finally {
      setExporting(false);
    }
  };

  return (
    <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-8 sm:px-6 sm:py-10">
      {/* 1 — Course header */}
      <header className="rounded-3xl border border-border bg-card/60 p-6 backdrop-blur">
        <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
          <GraduationCap className="h-3.5 w-3.5" /> {planLabel}
        </span>
        <h1 className="mt-4 text-3xl font-bold">
          <AltHeading text={title} />
        </h1>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          {units.length} unidades do currículo oficial Speak2Co · {partsTotal} partes pedagógicas
          (Discover + Communicate), com checagem obrigatória e prática de pronúncia com IA.
        </p>

        {/* 2 — Progress */}
        <div className="mt-5 space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="font-semibold text-foreground">
              {done} de {partsTotal} partes concluídas
            </span>
            <span className="font-bold text-gold">{percent}%</span>
          </div>
          <Progress value={percent} />
        </div>

        <div className="mt-5">
          <Button onClick={handleExport} disabled={exporting} className="gap-2">
            {exporting ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Download className="h-4 w-4" />
            )}
            Baixar curso completo em PDF
          </Button>
        </div>
      </header>

      {/* 3 — Units */}
      <section className="mt-8">
        <h2 className="mb-3 text-lg font-semibold">
          <AltHeading text="Units" />
        </h2>
        <CourseUnitsAccordion
          units={units}
          courseBase={courseBase}
          isDone={(lessonId) => Boolean(byPart.get(lessonId)?.completed)}
        />
      </section>

      {/* 4 — Vocabulary Book */}
      <section className="mt-8 rounded-3xl border border-border bg-card/60 p-6">
        <h2 className="text-lg font-semibold">
          <AltHeading text="Vocabulary Book" />
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Consulte e revise o vocabulário por unidade — palavra, IPA, definição e exemplo.
        </p>
        <Button asChild variant="outline" className="mt-4 gap-2 rounded-full">
          <Link to="/vocabulario">
            <BookMarked className="h-4 w-4" /> Abrir Vocabulary Book
          </Link>
        </Button>
      </section>

      {/* 5 — Final Assessment */}
      <section className="mt-8 rounded-3xl border border-gold/40 bg-gold/5 p-6">
        <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-gold uppercase">
          {eligible ? <Award className="h-4 w-4" /> : <Lock className="h-4 w-4" />} Final Assessment
        </span>
        <h2 className="mt-2 text-xl font-semibold text-foreground">
          {certified ? "Curso concluído — certificado emitido" : "Assessment final"}
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          {certified
            ? `Você foi aprovado com ${assessment?.quizScore}%. Seu certificado ${certificateName} já está disponível.`
            : eligible
              ? `Todas as partes concluídas! Faça o assessment final (mínimo ${passScore}%) e o certificado é emitido automaticamente.`
              : `Conclua as ${partsTotal} partes para liberar o assessment final e emitir seu certificado automaticamente.`}
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Button asChild className="rounded-full" disabled={!eligible}>
            <Link to={assessmentHref as "/"}>
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
    </main>
  );
}
