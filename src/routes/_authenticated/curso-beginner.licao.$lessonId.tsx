import { useMemo, useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { PhrasePractice } from "@/components/PhrasePractice";
import {
  BEGINNER_COURSE_ID,
  LESSON_SECTIONS,
  SPEAKING_LABEL,
  WRITTEN_LABEL,
  getBeginnerLesson,
  type BeginnerLesson,
  type LessonSectionKey,
} from "@/lib/beginner-course";
import { saveCourseProgress } from "@/lib/course-progress.functions";
import { averageScore, type PronunciationAttempt } from "@/lib/pronunciation-grade";

export const Route = createFileRoute("/_authenticated/curso-beginner/licao/$lessonId")({
  loader: ({ params }) => {
    const lesson = getBeginnerLesson(params.lessonId);
    if (!lesson) throw notFound();
    return { lesson };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Lição indisponível — Speak2Co" }] };
    const { lesson } = loaderData;
    const title = `Lesson ${lesson.number}: ${lesson.title} — Curso Beginner Speak2Co`;
    const description = lesson.goal;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: () => <LessonPage lesson={Route.useLoaderData().lesson} />,
});

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border border-border bg-card/60 p-5 backdrop-blur">
      <h2 className="text-lg font-semibold text-foreground">{title}</h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}

function LessonPage({ lesson }: { lesson: BeginnerLesson }) {
  const [tab, setTab] = useState<LessonSectionKey>("warmup");
  const [attempts, setAttempts] = useState<PronunciationAttempt[]>([]);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [quizDone, setQuizDone] = useState(false);
  const save = useServerFn(saveCourseProgress);

  const quizScore = useMemo(() => {
    const hits = lesson.quiz.filter((q, i) => answers[i] === q.answer).length;
    return Math.round((hits / lesson.quiz.length) * 100);
  }, [answers, lesson.quiz]);

  const pronScore = attempts.length ? averageScore(attempts) : null;

  async function finish() {
    try {
      await save({
        data: {
          courseId: BEGINNER_COURSE_ID,
          lessonId: lesson.id,
          completed: true,
          quizScore: quizDone ? quizScore : null,
          pronunciationScore: pronScore,
          vocabularyMastered: lesson.vocabulary.length,
          grammarMastered: quizDone && quizScore >= 70,
          sectionsDone: LESSON_SECTIONS.map((s) => s.key),
        },
      });
      toast.success("Lição concluída! Progresso salvo.");
    } catch {
      toast.error("Não foi possível salvar seu progresso.");
    }
  }

  return (
    <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-8">
      <Link
        to="/curso-beginner"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> Voltar ao curso
      </Link>

      <header className="mt-4">
        <span className="text-xs font-semibold uppercase tracking-wide text-gold">
          Lesson {lesson.number} de 20
        </span>
        <h1 className="mt-1 text-3xl font-bold text-foreground">{lesson.title}</h1>
        <p className="text-muted-foreground">{lesson.titlePt}</p>
        <p className="mt-2 text-sm text-foreground/80">{lesson.goal}</p>
      </header>

      <nav className="mt-6 flex flex-wrap gap-2">
        {LESSON_SECTIONS.map((s) => (
          <button
            key={s.key}
            type="button"
            onClick={() => setTab(s.key)}
            className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
              tab === s.key
                ? "bg-gold text-primary-foreground"
                : "border border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            {s.label}
          </button>
        ))}
      </nav>

      <div className="mt-6 space-y-5">
        {tab === "warmup" && (
          <Card title="1. Warm-up">
            <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
              {lesson.warmUp.map((w, i) => (
                <li key={i}>{w}</li>
              ))}
            </ul>
          </Card>
        )}

        {tab === "vocabulary" && (
          <Card title={`2. New Vocabulary (${lesson.vocabulary.length})`}>
            {lesson.vocabulary.map((v) => (
              <div key={v.en} className="space-y-2">
                <p className="text-sm">
                  <span className="font-semibold text-foreground">{v.en}</span>{" "}
                  <span className="text-xs text-gold">{v.ipa}</span> —{" "}
                  <span className="text-muted-foreground">{v.pt}</span>
                </p>
                <PhrasePractice
                  en={v.example}
                  pt={v.examplePt}
                  onAttempt={(a) => setAttempts((prev) => [...prev, a])}
                />
              </div>
            ))}
          </Card>
        )}

        {tab === "verbs" && (
          <Card title="3. Verbs">
            {lesson.verbs.map((v) => (
              <div key={v.infinitive} className="rounded-xl border border-border p-4">
                <p className="font-semibold text-foreground">
                  {v.infinitive} <span className="text-xs text-gold">{v.ipa}</span>
                </p>
                <p className="text-sm text-muted-foreground">{v.pt} — {v.explanation}</p>
                <ul className="mt-2 space-y-1 text-sm">
                  {v.conjugation.map((c, i) => (
                    <li key={i}>• {c}</li>
                  ))}
                </ul>
              </div>
            ))}
          </Card>
        )}

        {tab === "grammar" && (
          <Card title="4. Grammar">
            {lesson.grammar.map((g) => (
              <div key={g.title} className="rounded-xl border border-border p-4">
                <p className="font-semibold text-foreground">{g.title}</p>
                <div className="mt-2 space-y-2">
                  {g.examples.map((ex) => (
                    <PhrasePractice
                      key={ex}
                      en={ex}
                      pt=""
                      onAttempt={(a) => setAttempts((prev) => [...prev, a])}
                    />
                  ))}
                </div>
                <p className="mt-3 text-sm"><span className="font-semibold">Quando usar:</span> {g.when}</p>
                <p className="text-sm"><span className="font-semibold">Estrutura:</span> {g.structure}</p>
                <ul className="mt-2 space-y-1 text-xs text-muted-foreground">
                  {g.mistakes.map((m, i) => (
                    <li key={i}>{m}</li>
                  ))}
                </ul>
              </div>
            ))}
          </Card>
        )}

        {tab === "expressions" && (
          <Card title="5. Expressions">
            {lesson.expressions.map((e) => (
              <PhrasePractice
                key={e.en}
                en={e.en}
                pt={e.pt}
                note={e.situation}
                onAttempt={(a) => setAttempts((prev) => [...prev, a])}
              />
            ))}
          </Card>
        )}

        {tab === "dialogue" && (
          <Card title="6. Conversation">
            {lesson.dialogue.map((d, i) => (
              <PhrasePractice
                key={i}
                en={d.en}
                pt={d.pt}
                note={d.who}
                onAttempt={(a) => setAttempts((prev) => [...prev, a])}
              />
            ))}
          </Card>
        )}

        {tab === "pronunciation" && (
          <Card title="7. Pronunciation Lab">
            {lesson.pronunciation.map((p) => (
              <div key={p.sound} className="space-y-2">
                <p className="text-sm">
                  <span className="font-semibold text-gold">{p.sound}</span> — {p.tip}
                </p>
                {p.words.map((w) => (
                  <PhrasePractice
                    key={w}
                    en={w}
                    pt=""
                    onAttempt={(a) => setAttempts((prev) => [...prev, a])}
                  />
                ))}
              </div>
            ))}
          </Card>
        )}

        {tab === "written" && (
          <Card title="8. Written Exercises">
            {lesson.written.map((w, i) => (
              <details key={i} className="rounded-xl border border-border p-4">
                <summary className="cursor-pointer text-sm font-semibold text-foreground">
                  {WRITTEN_LABEL[w.type]}: {w.prompt}
                </summary>
                <p className="mt-2 text-sm text-gold">{w.answer}</p>
              </details>
            ))}
          </Card>
        )}

        {tab === "speaking" && (
          <Card title="9. Speaking Exercises">
            {lesson.speaking.map((s, i) => (
              <div key={i} className="space-y-2">
                <p className="text-sm">
                  <span className="font-semibold text-gold">{SPEAKING_LABEL[s.type]}:</span> {s.prompt}
                </p>
                {s.phrase && (
                  <PhrasePractice
                    en={s.phrase}
                    pt=""
                    onAttempt={(a) => setAttempts((prev) => [...prev, a])}
                  />
                )}
                {s.type === "ai" && (
                  <Button asChild variant="outline" size="sm" className="rounded-full">
                    <Link to="/professor" search={{ prompt: s.prompt }}>
                      Praticar com a IA
                    </Link>
                  </Button>
                )}
              </div>
            ))}
          </Card>
        )}

        {tab === "quiz" && (
          <Card title={`10. Interactive Quiz (${lesson.quiz.length})`}>
            {lesson.quiz.map((q, i) => (
              <div key={i} className="rounded-xl border border-border p-4">
                <p className="text-sm font-semibold text-foreground">
                  {i + 1}. {q.question}
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {q.options.map((o) => {
                    const chosen = answers[i] === o;
                    const correct = o === q.answer;
                    return (
                      <button
                        key={o}
                        type="button"
                        onClick={() => setAnswers((prev) => ({ ...prev, [i]: o }))}
                        className={`rounded-full px-3 py-1.5 text-xs transition ${
                          chosen
                            ? correct
                              ? "bg-gold text-primary-foreground"
                              : "bg-destructive text-destructive-foreground"
                            : "border border-border text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {o}
                      </button>
                    );
                  })}
                </div>
                {answers[i] && answers[i] !== q.answer && (
                  <p className="mt-2 text-xs text-gold">Resposta correta: {q.answer}</p>
                )}
              </div>
            ))}
            <Button
              className="rounded-full bg-gold font-semibold text-primary-foreground"
              onClick={() => setQuizDone(true)}
            >
              Ver minha nota
            </Button>
            {quizDone && (
              <div className="space-y-2">
                <Progress value={quizScore} />
                <p className="text-sm font-semibold text-gold">Nota do quiz: {quizScore}%</p>
              </div>
            )}
          </Card>
        )}

        {tab === "review" && (
          <Card title="11. Lesson Review & 12. Progress">
            <p className="text-sm text-muted-foreground">{lesson.review.summary}</p>
            <p className="text-sm font-semibold text-foreground">Gramática-chave</p>
            <ul className="list-disc pl-5 text-sm text-muted-foreground">
              {lesson.review.grammar.map((g, i) => <li key={i}>{g}</li>)}
            </ul>
            <p className="text-sm font-semibold text-foreground">Vocabulário</p>
            <p className="text-sm text-muted-foreground">{lesson.review.vocabulary.join(" · ")}</p>
            <p className="text-sm font-semibold text-foreground">Erros mais comuns</p>
            <ul className="list-disc pl-5 text-sm text-muted-foreground">
              {lesson.review.mistakes.map((m, i) => <li key={i}>{m}</li>)}
            </ul>
            <div className="rounded-xl border border-border p-4 text-sm">
              <p>Quiz: <span className="font-semibold text-gold">{quizDone ? `${quizScore}%` : "—"}</span></p>
              <p>Pronúncia média: <span className="font-semibold text-gold">{pronScore != null ? `${pronScore}%` : "—"}</span></p>
              <p>Vocabulário praticado: <span className="font-semibold text-gold">{lesson.vocabulary.length}</span></p>
            </div>
            <Button
              onClick={finish}
              className="rounded-full bg-gold font-semibold text-primary-foreground"
            >
              <CheckCircle2 className="mr-2 h-4 w-4" /> Concluir lição
            </Button>
          </Card>
        )}
      </div>
    </main>
  );
}
