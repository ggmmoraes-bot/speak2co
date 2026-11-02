import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { toast } from "sonner";
import { Award, CheckCircle2, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { BEGINNER_COURSE_ID, BEGINNER_PARTS_TOTAL } from "@/lib/beginner-course";
import {
  BEGINNER_ASSESSMENT,
  BEGINNER_ASSESSMENT_ID,
  BEGINNER_PASS_SCORE,
} from "@/lib/beginner-assessment";
import { getCourseProgress, saveCourseProgress } from "@/lib/course-progress.functions";

export const Route = createFileRoute("/_authenticated/curso-beginner/assessment")({
  head: () => {
    const title = "Assessment final do Beginner | Speak2Co";
    const description =
      "Faça o assessment final do Beginner English Course e emita automaticamente seu certificado Speak2Co.";
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
  component: BeginnerAssessmentPage,
});

function BeginnerAssessmentPage() {
  const router = useRouter();
  const load = useServerFn(getCourseProgress);
  const save = useServerFn(saveCourseProgress);
  const { data: progress, refetch } = useQuery({
    queryKey: ["course-progress", BEGINNER_COURSE_ID],
    queryFn: () => load({ data: { courseId: BEGINNER_COURSE_ID } }),
  });

  const rows = progress ?? [];
  const lessonsDone = rows.filter(
    (p) => p.completed && p.lessonId !== BEGINNER_ASSESSMENT_ID,
  ).length;
  const previous = rows.find((p) => p.lessonId === BEGINNER_ASSESSMENT_ID) ?? null;
  const eligible = lessonsDone >= BEGINNER_PARTS_TOTAL;

  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [saving, setSaving] = useState(false);

  const score = useMemo(() => {
    const hits = BEGINNER_ASSESSMENT.filter((q, i) => answers[i] === q.answer).length;
    return Math.round((hits / BEGINNER_ASSESSMENT.length) * 100);
  }, [answers]);

  const answered = Object.keys(answers).length;
  const passed = submitted && score >= BEGINNER_PASS_SCORE;

  async function handleSubmit() {
    if (answered < BEGINNER_ASSESSMENT.length) {
      toast.error("Responda todas as questões antes de finalizar.");
      return;
    }
    setSaving(true);
    try {
      const finalScore = score;
      await save({
        data: {
          courseId: BEGINNER_COURSE_ID,
          lessonId: BEGINNER_ASSESSMENT_ID,
          completed: finalScore >= BEGINNER_PASS_SCORE,
          quizScore: finalScore,
          grammarMastered: finalScore >= BEGINNER_PASS_SCORE,
          sectionsDone: ["assessment"],
        },
      });
      setSubmitted(true);
      await refetch();
      router.invalidate();
      if (finalScore >= BEGINNER_PASS_SCORE) {
        toast.success(`Aprovado com ${finalScore}%! Seu certificado foi emitido.`);
      } else {
        toast.error(`Nota ${finalScore}%. Você precisa de ${BEGINNER_PASS_SCORE}% para aprovar.`);
      }
    } catch {
      toast.error("Não foi possível salvar o resultado.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-10">
      <Button asChild variant="outline" size="sm" className="rounded-full">
        <Link to="/curso-beginner">Voltar ao curso</Link>
      </Button>

      <header className="mt-4 rounded-3xl border border-border bg-card/60 p-6 backdrop-blur">
        <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
          <Award className="h-3.5 w-3.5" /> Assessment final
        </span>
        <h1 className="mt-4 text-3xl font-bold text-foreground">
          Beginner English Course — Final Assessment
        </h1>
        <p className="mt-2 text-muted-foreground">
          {BEGINNER_ASSESSMENT.length} questões cobrindo todas as unidades. Nota mínima de{" "}
          {BEGINNER_PASS_SCORE}% para aprovação. Ao ser aprovado com as{" "}
          {BEGINNER_PARTS_TOTAL} partes concluídas, o certificado é emitido automaticamente.
        </p>
        <div className="mt-4 space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">
              {lessonsDone} de {BEGINNER_PARTS_TOTAL} partes concluídas
            </span>
            {previous?.quizScore != null && (
              <span className="font-semibold text-gold">
                Melhor tentativa: {previous.quizScore}%
              </span>
            )}
          </div>
          <Progress value={(lessonsDone / BEGINNER_PARTS_TOTAL) * 100} />
        </div>
      </header>

      {!eligible ? (
        <section className="mt-6 rounded-2xl border border-border bg-card/60 p-6 text-center">
          <Lock className="mx-auto h-6 w-6 text-muted-foreground" />
          <h2 className="mt-3 text-lg font-semibold text-foreground">Assessment bloqueado</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Conclua as {BEGINNER_PARTS_TOTAL} partes do curso para liberar o assessment final.
          </p>
          <Button asChild className="mt-4 rounded-full">
            <Link to="/curso-beginner">Continue course</Link>
          </Button>
        </section>
      ) : (
        <>
          <section className="mt-6 space-y-4">
            {BEGINNER_ASSESSMENT.map((q, i) => (
              <div key={`${q.question}-${i}`} className="rounded-2xl border border-border bg-card/60 p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Questão {i + 1} · Lesson {q.lessonNumber}
                </p>
                <p className="mt-2 font-medium text-foreground">{q.question}</p>
                <div className="mt-3 grid gap-2">
                  {q.options.map((option) => {
                    const selected = answers[i] === option;
                    const right = submitted && option === q.answer;
                    const wrong = submitted && selected && option !== q.answer;
                    return (
                      <button
                        key={option}
                        type="button"
                        disabled={submitted}
                        onClick={() => setAnswers((prev) => ({ ...prev, [i]: option }))}
                        className={`rounded-xl border px-4 py-2 text-left text-sm transition ${
                          right
                            ? "border-gold bg-gold/10 text-gold"
                            : wrong
                              ? "border-destructive/60 bg-destructive/10 text-destructive"
                              : selected
                                ? "border-gold/60 text-foreground"
                                : "border-border text-muted-foreground hover:border-gold/40"
                        }`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </section>

          <div className="mt-6 rounded-2xl border border-border bg-card/60 p-5">
            {!submitted ? (
              <>
                <p className="text-sm text-muted-foreground">
                  {answered} de {BEGINNER_ASSESSMENT.length} respondidas
                </p>
                <Button
                  className="mt-3 w-full rounded-full"
                  onClick={handleSubmit}
                  disabled={saving}
                >
                  {saving ? "Corrigindo..." : "Finalizar assessment"}
                </Button>
              </>
            ) : (
              <div className="space-y-3 text-center">
                <p className="text-2xl font-bold text-gold">{score}%</p>
                <Progress value={score} />
                {passed ? (
                  <>
                    <p className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                      <CheckCircle2 className="h-4 w-4 text-gold" /> Aprovado! Certificado emitido
                      automaticamente.
                    </p>
                    <Button asChild className="w-full rounded-full">
                      <Link to="/certificados">Ver e baixar meu certificado</Link>
                    </Button>
                  </>
                ) : (
                  <>
                    <p className="text-sm text-muted-foreground">
                      Você precisa de {BEGINNER_PASS_SCORE}% para aprovar. Revise as lições e tente
                      novamente.
                    </p>
                    <Button
                      variant="outline"
                      className="w-full rounded-full"
                      onClick={() => {
                        setAnswers({});
                        setSubmitted(false);
                      }}
                    >
                      Refazer assessment
                    </Button>
                  </>
                )}
              </div>
            )}
          </div>
        </>
      )}
    </main>
  );
}
