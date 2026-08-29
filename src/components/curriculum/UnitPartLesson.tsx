import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { ArrowLeft, ArrowRight, CheckCircle2, Mic } from "lucide-react";
import { toast } from "sonner";
import { BilingualLine } from "@/components/BilingualLine";
import { PhrasePractice } from "@/components/PhrasePractice";
import { AltHeading } from "@/components/AltHeading";
import { CheckQuiz } from "@/components/curriculum/CheckQuiz";
import { DialoguePlayer } from "@/components/curriculum/DialoguePlayer";
import { LessonPlayer, type LessonStep } from "@/components/curriculum/LessonPlayer";
import { EnterLiveLesson } from "@/components/live-lesson/EnterLiveLesson";
import { Speak2Drill } from "@/components/curriculum/Speak2Drill";

import { partStepTitles } from "@/lib/curriculum/lesson-steps";
import { warmUpImageFor, warmUpNeedsImage } from "@/lib/curriculum/warmup-images";
import { PART_LABEL, partChecks, type CourseUnit, type UnitPartKey } from "@/lib/curriculum/types";
import { saveCourseProgress } from "@/lib/course-progress.functions";
import { averageScore, type PronunciationAttempt } from "@/lib/pronunciation-grade";

/**
 * Tela de aula (parte da unidade) em experiência single-screen: uma etapa por
 * vez, com Previous/Next e indicador de progresso. Todo o conteúdo pedagógico
 * original é preservado — apenas distribuído por etapas.
 */
export function UnitPartLesson({
  unit,
  part,
  courseId,
  courseBase,
  unitsTotal,
  nextUnit,
  twoVoiceDialogue = false,
}: {
  unit: CourseUnit;
  part: UnitPartKey;
  courseId: string;
  /** Ex.: "/curso-beginner" */
  courseBase: string;
  unitsTotal: number;
  nextUnit?: CourseUnit | undefined;
  twoVoiceDialogue?: boolean;
}) {
  const [attempts, setAttempts] = useState<PronunciationAttempt[]>([]);
  const [scores, setScores] = useState<Record<string, { correct: number; total: number }>>({});
  const save = useServerFn(saveCourseProgress);
  const partId = part === "discover" ? unit.discover.id : unit.communicate.id;
  const totalChecks = useMemo(() => partChecks(unit, part).length, [unit, part]);

  const answered = Object.values(scores).reduce((sum, s) => sum + s.total, 0);
  const correct = Object.values(scores).reduce((sum, s) => sum + s.correct, 0);
  const checkScore = answered ? Math.round((correct / answered) * 100) : null;
  const pronScore = attempts.length ? averageScore(attempts) : null;

  const onScore = (key: string) => (c: number, t: number) =>
    setScores((prev) => ({ ...prev, [key]: { correct: c, total: t } }));
  const onAttempt = (attempt: PronunciationAttempt) => setAttempts((prev) => [...prev, attempt]);

  async function finish() {
    try {
      await save({
        data: {
          courseId,
          lessonId: partId,
          completed: true,
          quizScore: checkScore,
          pronunciationScore: pronScore,
          vocabularyMastered: part === "discover" ? unit.discover.vocabulary.length : 0,
          grammarMastered: (checkScore ?? 0) >= 70,
          sectionsDone: [part],
        },
      });
      toast.success("Lesson completed · Progresso salvo!");
    } catch {
      toast.error("Não foi possível salvar seu progresso.");
    }
  }

  const meta = partStepTitles(unit, part);
  const contentFor = (key: string): React.ReactNode => {
    if (part === "discover") {
      const d = unit.discover;
      switch (key) {
        case "warmup":
          return (
            <>
              {warmUpNeedsImage(d.warmUp.prompt.en) && (
                <figure className="overflow-hidden rounded-2xl border border-gold/30">
                  <img
                    src={warmUpImageFor(unit.title).src}
                    alt={warmUpImageFor(unit.title).alt}
                    width={1024}
                    height={576}
                    loading="lazy"
                    className="w-full object-cover"
                  />
                </figure>
              )}
              <BilingualLine value={d.warmUp.prompt} className="text-sm text-foreground/85" />
              {d.warmUp.phrases.map((p) => (
                <PhrasePractice key={p.en} en={p.en} pt={p.pt} onAttempt={onAttempt} />
              ))}
            </>
          );
        case "context":
          return (
            <>
              <BilingualLine value={d.context.situation} className="text-sm text-foreground/85" />
              {twoVoiceDialogue && <DialoguePlayer lines={d.context.dialogue} />}
              {d.context.dialogue.map((line, i) => (
                <div key={`${line.who}-${i}`} className="space-y-1">
                  <p className="text-xs font-semibold text-gold">{line.who}</p>
                  <PhrasePractice en={line.en} pt={line.pt} onAttempt={onAttempt} />
                </div>
              ))}
            </>
          );
        case "vocabulary":
          return d.vocabulary.map((v) => (
            <div key={v.term} className="rounded-2xl border border-border/70 bg-background/40 p-4">
              <div className="flex flex-wrap items-baseline gap-x-2">
                <span className="text-sm font-semibold text-gold">{v.term}</span>
                <span className="text-xs text-muted-foreground">{v.ipa}</span>
                <span className="text-xs text-muted-foreground italic">{v.pt}</span>
              </div>
              <p className="mt-1 text-sm text-foreground/85">{v.definition}</p>
              <div className="mt-3">
                <PhrasePractice en={v.example} pt={v.examplePt} onAttempt={onAttempt} />
              </div>
            </div>
          ));
        case "expressions":
          return d.expressions.map((e) => (
            <PhrasePractice key={e.en} en={e.en} pt={e.pt} onAttempt={onAttempt} />
          ));
        case "grammar":
          return d.grammar.map((g) => (
            <div
              key={g.title.en}
              className="rounded-2xl border border-border/70 bg-background/40 p-4"
            >
              <h3 className="text-sm font-semibold">
                <AltHeading text={g.title.en} />
              </h3>
              <p className="text-xs text-muted-foreground italic">{g.title.pt}</p>
              <ul className="mt-3 space-y-2">
                {g.examples.map((ex) => (
                  <li key={ex.en}>
                    <BilingualLine value={ex} className="text-sm text-foreground/85" />
                  </li>
                ))}
              </ul>
              <div className="mt-3 rounded-xl border border-gold/30 bg-gold/5 p-3">
                <BilingualLine value={g.rule} className="text-sm text-foreground" />
              </div>
              <ul className="mt-3 space-y-1">
                {g.mistakes.map((m) => (
                  <li key={m.en} className="text-xs">
                    <span className="font-semibold text-destructive">Common mistake: </span>
                    <BilingualLine value={m} className="text-foreground/80" />
                  </li>
                ))}
              </ul>
            </div>
          ));
        case "practice":
          return <CheckQuiz questions={d.controlledPractice} onScore={onScore("cp")} />;
        case "input":
          return (
            <>
              {twoVoiceDialogue && d.input.kind === "listening" && (
                <DialoguePlayer
                  lines={d.input.lines.map((l, i) => ({
                    who: i % 2 === 0 ? "Speaker A" : "Speaker B",
                    en: l.en,
                    pt: l.pt,
                  }))}
                />
              )}
              {d.input.lines.map((line) => (
                <PhrasePractice key={line.en} en={line.en} pt={line.pt} onAttempt={onAttempt} />
              ))}
              <CheckQuiz questions={d.input.questions} onScore={onScore("input")} />
            </>
          );
        case "quickcheck":
          return <CheckQuiz questions={d.quickCheck} onScore={onScore("qc")} />;
        default:
          return null;
      }
    }

    const c = unit.communicate;
    if (key === "review")
      return c.review.map((r) => (
        <BilingualLine key={r.en} value={r} className="text-sm text-foreground/85" />
      ));
    if (key.startsWith("act:")) {
      const a = c.activities.find((x) => `act:${x.id}` === key);
      if (!a) return null;
      return (
        <>
          <BilingualLine value={a.instruction} className="text-sm text-foreground/85" />
          {a.phrases.map((p) => (
            <PhrasePractice key={p.en} en={p.en} pt={p.pt} onAttempt={onAttempt} />
          ))}
          <CheckQuiz questions={a.check} onScore={onScore(a.id)} />
        </>
      );
    }
    if (key === "challenge")
      return (
        <>
          <BilingualLine value={c.challenge.instruction} className="text-sm text-foreground/85" />
          {c.challenge.phrases.map((p) => (
            <PhrasePractice key={p.en} en={p.en} pt={p.pt} onAttempt={onAttempt} />
          ))}
          <CheckQuiz questions={c.challenge.check} onScore={onScore("challenge")} />
        </>
      );
    return (
      <>
        <BilingualLine value={c.lessonReview.summary} className="text-sm text-foreground/85" />
        <ul className="space-y-1">
          {c.lessonReview.canDo.map((x) => (
            <li key={x.en} className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <BilingualLine value={x} className="text-sm text-foreground/85" />
            </li>
          ))}
        </ul>
        <BilingualLine value={c.lessonReview.next} className="text-sm text-gold" />
        <p className="text-xs text-muted-foreground">
          Checks · {answered} of {totalChecks} answered · {checkScore ?? 0}%
          {pronScore != null && ` · AI pronunciation ${pronScore}%`}
        </p>
      </>
    );
  };

  const steps: LessonStep[] = meta.map((m) => ({
    key: m.key,
    title: m.title.en,
    subtitle: m.title.pt,
    content: contentFor(m.key),
  }));

  const otherPart: UnitPartKey = part === "discover" ? "communicate" : "discover";
  const partHref = (code: string, p: UnitPartKey) => `${courseBase}/unidade/${code}/${p}`;

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-6 sm:px-6 sm:py-8">
      <Link
        to={courseBase as "/"}
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> Back to course · Voltar ao curso
      </Link>

      <header className="mt-4 rounded-3xl border border-gold/30 bg-gold/5 p-5">
        <span className="text-xs font-semibold tracking-wide text-gold uppercase">
          Unit {unit.number} of {unitsTotal} · CEFR {unit.cefr}
        </span>
        <h1 className="mt-1 text-2xl font-bold sm:text-3xl">
          <AltHeading text={unit.title} />
        </h1>
        <p className="text-sm text-muted-foreground italic">{unit.titlePt}</p>
        <p className="mt-2 text-sm font-semibold text-gold">{PART_LABEL[part].en}</p>
        <EnterLiveLesson courseBase={courseBase} unitCode={unit.code} part={part} />

      </header>

      <div className="mt-5">
        <LessonPlayer
          lessonTitle={`Unit ${unit.number} — ${unit.title}`}
          lessonSubtitle={PART_LABEL[part].en}
          steps={steps}
          onFinish={finish}
          finishExtra={
            <div className="flex flex-wrap gap-2">
              {part === "discover" ? (
                <Link
                  to={partHref(unit.code, otherPart) as "/"}
                  className="inline-flex items-center gap-2 rounded-full border border-gold/50 px-4 py-2 text-xs font-semibold text-gold transition hover:bg-gold/10"
                >
                  Go to Part 2 — Communicate <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              ) : nextUnit ? (
                <Link
                  to={partHref(nextUnit.code, "discover") as "/"}
                  className="inline-flex items-center gap-2 rounded-full border border-gold/50 px-4 py-2 text-xs font-semibold text-gold transition hover:bg-gold/10"
                >
                  Next unit <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              ) : null}
            </div>
          }
        />
      </div>

      {part === "communicate" && (
        <section
          aria-label="Speak2Drill speaking practice"
          className="mt-8 rounded-3xl border-2 border-gold/50 bg-gradient-to-b from-gold/10 to-transparent p-5 sm:p-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-gold/15 px-3 py-1 text-[11px] font-semibold tracking-wide text-gold uppercase">
            <Mic className="h-3.5 w-3.5" /> Speaking Practice Session
          </span>
          <h2 className="mt-3 text-xl font-bold sm:text-2xl">
            <AltHeading text="Speak2Drill" />
          </h2>
          <p className="mt-2 text-sm text-foreground/85">
            You have finished Discover and Communicate. Now you enter a speaking practice
            session: say each phrase from this unit out loud and rebuild it three times,
            following the drills. This is practice, not a new lesson.
          </p>
          <p className="mt-1 text-xs text-muted-foreground italic">
            Sessão de prática oral: repita cada frase da unidade três vezes, seguindo os drills.
            Ao final, você vê seu progresso.
          </p>
          <div className="mt-5">
            <Speak2Drill unit={unit} />
          </div>
        </section>
      )}
    </main>
  );
}
