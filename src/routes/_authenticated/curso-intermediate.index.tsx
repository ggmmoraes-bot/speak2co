import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import {
  Award,
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
import { INTERMEDIATE_COURSE_ID, INTERMEDIATE_LESSONS } from "@/lib/intermediate-course";
import {
  INTERMEDIATE_ASSESSMENT_ID,
  INTERMEDIATE_PASS_SCORE,
} from "@/lib/intermediate-assessment";
import { getCourseProgress } from "@/lib/course-progress.functions";

export const Route = createFileRoute("/_authenticated/curso-intermediate/")({
  head: () => {
    const title = "Curso Intermediate — 20 lições | Speak2Co";
    const description =
      "Curso Intermediate B1→B2 do Método Speak2Co: 20 lições com gramática avançada, phrasal verbs, conversação, exercícios e pronúncia com IA.";
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
  const { data: progress } = useQuery({
    queryKey: ["course-progress", INTERMEDIATE_COURSE_ID],
    queryFn: () => load({ data: { courseId: INTERMEDIATE_COURSE_ID } }),
  });

  const rows = progress ?? [];
  const byLesson = new Map(rows.map((p) => [p.lessonId, p]));
  const done = rows.filter(
    (p) => p.completed && p.lessonId !== INTERMEDIATE_ASSESSMENT_ID,
  ).length;
  const assessment = rows.find((p) => p.lessonId === INTERMEDIATE_ASSESSMENT_ID) ?? null;
  const eligible = done >= INTERMEDIATE_LESSONS.length;
  const certified = eligible && (assessment?.quizScore ?? 0) >= INTERMEDIATE_PASS_SCORE;
  const percent = Math.round((done / INTERMEDIATE_LESSONS.length) * 100);

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
          <GraduationCap className="h-3.5 w-3.5" /> Plano Essential
        </span>
        <h1 className="mt-4 text-3xl font-bold text-foreground">
          Intermediate English Course — Método Speak2Co
        </h1>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          20 lições B1 → B2 com gramática em contexto, phrasal verbs, collocations, diálogos
          longos, escrita, fala e checagem de pronúncia com IA.
        </p>
        <div className="mt-5 space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="font-semibold text-foreground">
              {done} de {INTERMEDIATE_LESSONS.length} lições concluídas
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
          <span className="text-xs text-muted-foreground">
            Arquivo único com as {INTERMEDIATE_LESSONS.length} lições, exercícios, quizzes e
            revisões.
          </span>
        </div>
      </header>

      <section className="mt-6 rounded-3xl border border-gold/40 bg-gold/5 p-6">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-gold">
          {eligible ? <Award className="h-4 w-4" /> : <Lock className="h-4 w-4" />} Assessment final
        </span>
        <h2 className="mt-2 text-xl font-semibold text-foreground">
          {certified ? "Curso concluído — certificado emitido" : "Assessment final do Intermediate"}
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          {certified
            ? `Você foi aprovado com ${assessment?.quizScore}%. Seu certificado Intermediate já está disponível.`
            : eligible
              ? `Todas as lições concluídas! Faça o assessment final (mínimo ${INTERMEDIATE_PASS_SCORE}%) e o certificado é emitido automaticamente.`
              : `Conclua as ${INTERMEDIATE_LESSONS.length} lições para liberar o assessment final e emitir seu certificado automaticamente.`}
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

      <section className="mt-8 grid gap-4 sm:grid-cols-2">
        {INTERMEDIATE_LESSONS.map((lesson) => {
          const p = byLesson.get(lesson.id);
          return (
            <Link
              key={lesson.id}
              to="/curso-intermediate/licao/$lessonId"
              params={{ lessonId: lesson.id }}
              className="group rounded-2xl border border-border bg-card/60 p-5 transition hover:border-gold/60"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Lesson {lesson.number}
                </span>
                {p?.completed && <CheckCircle2 className="h-4 w-4 text-gold" />}
              </div>
              <h2 className="mt-2 text-lg font-semibold text-foreground">{lesson.title}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{lesson.titlePt}</p>
              <div className="mt-3 flex flex-wrap gap-3 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  <BookOpen className="h-3.5 w-3.5" /> {lesson.vocabulary.length} palavras
                </span>
                <span className="inline-flex items-center gap-1">
                  <Mic className="h-3.5 w-3.5" /> pronúncia com IA
                </span>
                {p?.quizScore != null && (
                  <span className="font-semibold text-gold">Quiz {p.quizScore}%</span>
                )}
              </div>
            </Link>
          );
        })}
      </section>
    </main>
  );
}
