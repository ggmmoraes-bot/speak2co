import { useMemo, useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { AltHeading } from "@/components/AltHeading";
import { BilingualLine } from "@/components/BilingualLine";
import { PhrasePractice } from "@/components/PhrasePractice";
import { CheckQuiz } from "@/components/curriculum/CheckQuiz";
import {
  UPPER_COURSE_ID,
  UPPER_UNITS,
  UPPER_UNITS_TOTAL,
  getUpperUnit,
} from "@/lib/upper-course";
import { PART_LABEL, partChecks, type CourseUnit, type UnitPartKey } from "@/lib/curriculum/types";
import { saveCourseProgress } from "@/lib/course-progress.functions";
import { averageScore, type PronunciationAttempt } from "@/lib/pronunciation-grade";

export const Route = createFileRoute("/_authenticated/curso-upper/unidade/$unitCode/$part")({
  loader: ({ params }) => {
    const unit = getUpperUnit(params.unitCode);
    const part = params.part === "communicate" ? "communicate" : "discover";
    if (!unit || (params.part !== "discover" && params.part !== "communicate")) throw notFound();
    return { unit, part: part as UnitPartKey };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Unidade indisponível — Speak2Co" }] };
    const { unit, part } = loaderData;
    const title = `Unit ${unit.number} · ${PART_LABEL[part].en} — ${unit.title} | Speak2Co`;
    const description = unit.objective.en;
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
  component: () => {
    const { unit, part } = Route.useLoaderData();
    return <UnitPartPage key={`${unit.code}-${part}`} unit={unit} part={part} />;
  },
});

function Section({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-3xl border border-border bg-card/60 p-5 backdrop-blur">
      <h2 className="text-lg font-semibold">
        <AltHeading text={title} />
      </h2>
      {subtitle && <p className="mt-0.5 text-xs text-muted-foreground italic">{subtitle}</p>}
      <div className="mt-4 space-y-4">{children}</div>
    </section>
  );
}

function UnitPartPage({ unit, part }: { unit: CourseUnit; part: UnitPartKey }) {
  const [attempts, setAttempts] = useState<PronunciationAttempt[]>([]);
  const [scores, setScores] = useState<Record<string, { correct: number; total: number }>>({});
  const save = useServerFn(saveCourseProgress);
  const partId = part === "discover" ? unit.discover.id : unit.communicate.id;
  const totalChecks = useMemo(() => partChecks(unit, part).length, [unit, part]);

  const answered = Object.values(scores).reduce((sum, s) => sum + s.total, 0);
  const correct = Object.values(scores).reduce((sum, s) => sum + s.correct, 0);
  const checkScore = answered ? Math.round((correct / answered) * 100) : null;
  const pronScore = attempts.length ? averageScore(attempts) : null;
  const nextUnit = UPPER_UNITS.find((u) => u.number === unit.number + 1);

  const onScore = (key: string) => (c: number, t: number) =>
    setScores((prev) => ({ ...prev, [key]: { correct: c, total: t } }));

  const onAttempt = (attempt: PronunciationAttempt) => setAttempts((prev) => [...prev, attempt]);

  async function finish() {
    try {
      await save({
        data: {
          courseId: UPPER_COURSE_ID,
          lessonId: partId,
          completed: true,
          quizScore: checkScore,
          pronunciationScore: pronScore,
          vocabularyMastered: part === "discover" ? unit.discover.vocabulary.length : 0,
          grammarMastered: (checkScore ?? 0) >= 70,
          sectionsDone: [part],
        },
      });
      toast.success("Progress saved · Progresso salvo!");
    } catch {
      toast.error("Não foi possível salvar seu progresso.");
    }
  }

  return (
    <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-8">
      <Link
        to="/curso-upper"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> Back to course · Voltar ao curso
      </Link>

      <header className="mt-4 rounded-3xl border border-gold/30 bg-gold/5 p-6">
        <span className="text-xs font-semibold tracking-wide text-gold uppercase">
          Unit {unit.number} of {UPPER_UNITS_TOTAL} · CEFR {unit.cefr} · {partId}
        </span>
        <h1 className="mt-2 text-3xl font-bold">
          <AltHeading text={unit.title} />
        </h1>
        <p className="text-sm text-muted-foreground italic">{unit.titlePt}</p>
        <p className="mt-3 text-sm font-semibold text-gold">{PART_LABEL[part].en}</p>
        <p className="text-xs text-muted-foreground italic">{PART_LABEL[part].pt}</p>
        <div className="mt-4">
          <BilingualLine value={unit.objective} className="text-sm text-foreground/85" />
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link
            to="/curso-upper/unidade/$unitCode/$part"
            params={{ unitCode: unit.code, part: "discover" }}
            className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${part === "discover" ? "bg-gold text-primary-foreground" : "border border-border text-muted-foreground hover:text-foreground"}`}
          >
            Part 1 — Discover
          </Link>
          <Link
            to="/curso-upper/unidade/$unitCode/$part"
            params={{ unitCode: unit.code, part: "communicate" }}
            className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${part === "communicate" ? "bg-gold text-primary-foreground" : "border border-border text-muted-foreground hover:text-foreground"}`}
          >
            Part 2 — Communicate
          </Link>
        </div>
      </header>

      <div className="mt-6 space-y-5">
        {part === "discover" ? (
          <>
            <Section title="Warm-up" subtitle="Aquecimento">
              <BilingualLine
                value={unit.discover.warmUp.prompt}
                className="text-sm text-foreground/85"
              />
              {unit.discover.warmUp.phrases.map((p) => (
                <PhrasePractice key={p.en} en={p.en} pt={p.pt} onAttempt={onAttempt} />
              ))}
            </Section>

            <Section title="Context in Real Life" subtitle="Contexto em situação real">
              <BilingualLine
                value={unit.discover.context.situation}
                className="text-sm text-foreground/85"
              />
              {unit.discover.context.dialogue.map((line, i) => (
                <div key={i} className="space-y-1">
                  <p className="text-xs font-semibold text-gold">{line.who}</p>
                  <PhrasePractice en={line.en} pt={line.pt} onAttempt={onAttempt} />
                </div>
              ))}
            </Section>

            <Section title="New Vocabulary" subtitle="Vocabulário novo — tradução, definição e exemplo">
              {unit.discover.vocabulary.map((v) => (
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
              ))}
            </Section>

            <Section title="Useful Expressions" subtitle="Expressões úteis">
              {unit.discover.expressions.map((e) => (
                <PhrasePractice key={e.en} en={e.en} pt={e.pt} onAttempt={onAttempt} />
              ))}
            </Section>

            <Section title="Grammar in Use" subtitle="Gramática em uso — exemplos antes da regra">
              {unit.discover.grammar.map((g) => (
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
              ))}
            </Section>

            <Section title="Controlled Practice" subtitle="Prática controlada com checagem">
              <CheckQuiz questions={unit.discover.controlledPractice} onScore={onScore("cp")} />
            </Section>

            <Section
              title={unit.discover.input.kind === "reading" ? "Reading" : "Listening"}
              subtitle={unit.discover.input.title.pt}
            >
              {unit.discover.input.lines.map((line) => (
                <PhrasePractice key={line.en} en={line.en} pt={line.pt} onAttempt={onAttempt} />
              ))}
              <CheckQuiz questions={unit.discover.input.questions} onScore={onScore("input")} />
            </Section>

            <Section title="Quick Check" subtitle="Checagem rápida antes da Part 2">
              <CheckQuiz questions={unit.discover.quickCheck} onScore={onScore("qc")} />
            </Section>
          </>
        ) : (
          <>
            <Section title="Review" subtitle="Retomada da Part 1">
              {unit.communicate.review.map((r) => (
                <BilingualLine key={r.en} value={r} className="text-sm text-foreground/85" />
              ))}
            </Section>

            {unit.communicate.activities.map((a) => (
              <Section key={a.id} title={a.title.en} subtitle={a.title.pt}>
                <BilingualLine value={a.instruction} className="text-sm text-foreground/85" />
                {a.phrases.map((p) => (
                  <PhrasePractice key={p.en} en={p.en} pt={p.pt} onAttempt={onAttempt} />
                ))}
                <CheckQuiz questions={a.check} onScore={onScore(a.id)} />
              </Section>
            ))}

            <Section
              title={unit.communicate.challenge.title.en}
              subtitle={unit.communicate.challenge.title.pt}
            >
              <BilingualLine
                value={unit.communicate.challenge.instruction}
                className="text-sm text-foreground/85"
              />
              {unit.communicate.challenge.phrases.map((p) => (
                <PhrasePractice key={p.en} en={p.en} pt={p.pt} onAttempt={onAttempt} />
              ))}
              <CheckQuiz questions={unit.communicate.challenge.check} onScore={onScore("challenge")} />
            </Section>

            <Section title="Lesson Review" subtitle="Resumo da unidade">
              <BilingualLine
                value={unit.communicate.lessonReview.summary}
                className="text-sm text-foreground/85"
              />
              <ul className="space-y-1">
                {unit.communicate.lessonReview.canDo.map((c) => (
                  <li key={c.en} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    <BilingualLine value={c} className="text-sm text-foreground/85" />
                  </li>
                ))}
              </ul>
              <BilingualLine value={unit.communicate.lessonReview.next} className="text-sm text-gold" />
            </Section>
          </>
        )}
      </div>

      <footer className="mt-8 rounded-3xl border border-border bg-card/60 p-5">
        <div className="flex items-center justify-between text-sm">
          <span className="font-semibold">
            Checks · {answered} of {totalChecks} answered
          </span>
          <span className="font-bold text-gold">{checkScore ?? 0}%</span>
        </div>
        <Progress className="mt-2" value={checkScore ?? 0} />
        {pronScore != null && (
          <p className="mt-2 text-xs text-muted-foreground">
            AI pronunciation average · média de pronúncia com IA:{" "}
            <span className="font-bold text-gold">{pronScore}%</span>
          </p>
        )}
        <div className="mt-4 flex flex-wrap gap-3">
          <Button onClick={finish} className="rounded-full">
            Finish this part · Concluir esta parte
          </Button>
          {part === "discover" ? (
            <Button asChild variant="outline" className="gap-2 rounded-full">
              <Link
                to="/curso-upper/unidade/$unitCode/$part"
                params={{ unitCode: unit.code, part: "communicate" }}
              >
                Go to Part 2 <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          ) : nextUnit ? (
            <Button asChild variant="outline" className="gap-2 rounded-full">
              <Link
                to="/curso-upper/unidade/$unitCode/$part"
                params={{ unitCode: nextUnit.code, part: "discover" }}
              >
                Next unit <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          ) : null}
        </div>
      </footer>
    </main>
  );
}
