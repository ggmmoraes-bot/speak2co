import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { BookOpen, CheckCircle2, Download, GraduationCap, Loader2, Mic } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { BEGINNER_COURSE_ID, BEGINNER_LESSONS } from "@/lib/beginner-course";
import {
  BEGINNER_ASSESSMENT_ID,
  BEGINNER_PASS_SCORE,
} from "@/lib/beginner-assessment";
import { Button } from "@/components/ui/button";
import { Award, Lock } from "lucide-react";
import { getCourseProgress } from "@/lib/course-progress.functions";

export const Route = createFileRoute("/_authenticated/curso-beginner/")({
  head: () => {
    const title = "Curso Beginner — 20 lições | Speak2Co";
    const description =
      "Curso Beginner completo do Método Speak2Co: 20 lições com vocabulário, gramática, conversação, exercícios e checagem de pronúncia com IA.";
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
  component: BeginnerCourseIndex,
});

function BeginnerCourseIndex() {
  const load = useServerFn(getCourseProgress);
  const [exporting, setExporting] = useState(false);
  const { data: progress } = useQuery({
    queryKey: ["course-progress", BEGINNER_COURSE_ID],
    queryFn: () => load({ data: { courseId: BEGINNER_COURSE_ID } }),
  });

  const byLesson = new Map((progress ?? []).map((p) => [p.lessonId, p]));
  const rows = progress ?? [];
  const done = rows.filter((p) => p.completed && p.lessonId !== BEGINNER_ASSESSMENT_ID).length;
  const assessment = rows.find((p) => p.lessonId === BEGINNER_ASSESSMENT_ID) ?? null;
  const eligible = done >= BEGINNER_LESSONS.length;
  const certified = eligible && (assessment?.quizScore ?? 0) >= BEGINNER_PASS_SCORE;
  const percent = Math.round((done / BEGINNER_LESSONS.length) * 100);

  const handleExport = async () => {
    setExporting(true);
    try {
      const { exportBeginnerCourseToPdf } = await import("@/lib/beginner-course-pdf");
      await exportBeginnerCourseToPdf();
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
          Beginner English Course — Método Speak2Co
        </h1>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          20 lições progressivas com listening, speaking, reading, writing e pronúncia com IA.
          Contexto antes da gramática, prática intensiva e revisão contínua.
        </p>
        <div className="mt-5 space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="font-semibold text-foreground">
              {done} de {BEGINNER_LESSONS.length} lições concluídas
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
            Arquivo único com as {BEGINNER_LESSONS.length} lições, exercícios, quizzes e revisões.
          </span>
        </div>
      </header>


      <section className="mt-6 rounded-3xl border border-gold/40 bg-gold/5 p-6">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-gold">
          {eligible ? <Award className="h-4 w-4" /> : <Lock className="h-4 w-4" />} Assessment final
        </span>
        <h2 className="mt-2 text-xl font-semibold text-foreground">
          {certified
            ? "Curso concluído — certificado emitido"
            : "Assessment final do Beginner"}
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          {certified
            ? `Você foi aprovado com ${assessment?.quizScore}%. Seu certificado Beginner já está disponível.`
            : eligible
              ? `Todas as lições concluídas! Faça o assessment final (mínimo ${BEGINNER_PASS_SCORE}%) e o certificado é emitido automaticamente.`
              : `Conclua as ${BEGINNER_LESSONS.length} lições para liberar o assessment final e emitir seu certificado automaticamente.`}
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Button asChild className="rounded-full" disabled={!eligible}>
            <Link to="/curso-beginner/assessment">
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
        {BEGINNER_LESSONS.map((lesson) => {
          const p = byLesson.get(lesson.id);
          return (
            <Link
              key={lesson.id}
              to="/curso-beginner/licao/$lessonId"
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
