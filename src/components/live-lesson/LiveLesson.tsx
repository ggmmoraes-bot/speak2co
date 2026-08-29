import { useEffect, useMemo, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { InstructorStage } from "@/components/live-lesson/InstructorStage";
import { InstructorMessage } from "@/components/live-lesson/InstructorMessage";
import { StudentResponse } from "@/components/live-lesson/StudentResponse";
import { SpeakingChallenge } from "@/components/live-lesson/SpeakingChallenge";
import { FeedbackCard } from "@/components/live-lesson/FeedbackCard";
import { VocabularyCard } from "@/components/live-lesson/VocabularyCard";
import { GrammarCard } from "@/components/live-lesson/GrammarCard";
import { LessonProgress } from "@/components/live-lesson/LessonProgress";
import { LessonSummary } from "@/components/live-lesson/LessonSummary";
import type { CourseUnit, UnitPartKey } from "@/lib/curriculum/types";
import { PART_LABEL } from "@/lib/curriculum/types";
import { speakText } from "@/lib/voice-client";
import { useVoiceSettings } from "@/lib/use-voice-settings";
import type { GiseleFeedback } from "@/lib/gisele-feedback-types";
import {
  LIVE_STAGES,
  STAGE_INTERACTION,
  STAGE_LABEL,
  partFocus,
  type CourseLevel,
  type LiveStageKey,
} from "@/lib/live-lesson/script";
import {
  evaluateLiveLessonAnswer,
  getLiveLesson,
  saveLiveLessonProgress,
} from "@/lib/live-lesson.functions";

/**
 * Aula ao vivo com a Gisele: uma etapa por tela, sobre o conteúdo oficial da
 * unidade — nada do currículo é substituído ou duplicado.
 */
export function LiveLesson({
  course,
  unit,
  part,
}: {
  course: CourseLevel;
  unit: CourseUnit;
  part: UnitPartKey;
}) {
  const load = useServerFn(getLiveLesson);
  const evaluate = useServerFn(evaluateLiveLessonAnswer);
  const save = useServerFn(saveLiveLessonProgress);
  const { settings: voice } = useVoiceSettings();

  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [feedback, setFeedback] = useState<Record<string, GiseleFeedback>>({});
  const [busy, setBusy] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [confidence, setConfidence] = useState<number | null>(null);
  const spokenRef = useRef<string | null>(null);

  const { data, isPending, error } = useQuery({
    queryKey: ["live-lesson", course, unit.code, part],
    queryFn: () => load({ data: { course, unitCode: unit.code, part } }),
    staleTime: 5 * 60 * 1000,
  });

  const stages = useMemo(() => [...LIVE_STAGES] as LiveStageKey[], []);
  const stageKey = stages[index] ?? "welcome";
  const script = data?.script.stages.find((s) => s.key === stageKey);
  const focus = useMemo(() => partFocus(unit, part), [unit, part]);

  async function listen(text: string) {
    if (!text.trim()) return;
    try {
      setSpeaking(true);
      await speakText(text, {
        voice: voice.voice,
        provider: voice.ttsProvider,
        rate: voice.rate,
        volume: voice.volume,
        scope: "gisele",
      });
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Não foi possível reproduzir o áudio.");
    } finally {
      setSpeaking(false);
    }
  }

  // A Gisele fala automaticamente ao entrar no estágio.
  useEffect(() => {
    if (!script?.instructorEn || !voice.autoSpeak) return;
    const id = `${stageKey}:${script.instructorEn}`;
    if (spokenRef.current === id) return;
    spokenRef.current = id;
    void listen(script.instructorEn);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [script?.instructorEn, stageKey, voice.autoSpeak]);

  async function persist(done: string[], completed: boolean, nextConfidence: number | null) {
    try {
      await save({
        data: {
          course,
          unitCode: unit.code,
          part,
          stagesDone: done,
          speakingAttempts: attempts,
          vocabulary: focus.vocabulary,
          grammar: focus.grammar,
          pronunciationScore: null,
          fluencyNote: feedback["speaking"]?.fluency ?? null,
          challengeResult: feedback["challenge"] ? { feedback: feedback["challenge"] } : null,
          confidence: nextConfidence,
          summary: completed ? { unit: unit.code, part, stages: done.length } : null,
          completed,
        },
      });
    } catch {
      // progresso é complementar — não interrompe a aula
    }
  }

  async function submit() {
    const answer = (answers[stageKey] ?? "").trim();
    if (!script || !answer) return;
    try {
      setBusy(true);
      const result = await evaluate({
        data: {
          course,
          unitTitle: `Unit ${unit.number}: ${unit.title}`,
          stageLabel: STAGE_LABEL[stageKey].en,
          question: script.promptEn || script.instructorEn,
          answer,
          spoken: true,
        },
      });
      setFeedback((prev) => ({ ...prev, [stageKey]: result }));
      setAttempts((n) => n + 1);
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Não foi possível gerar o feedback.");
    } finally {
      setBusy(false);
    }
  }

  function goTo(next: number) {
    const bounded = Math.min(stages.length - 1, Math.max(0, next));
    setIndex(bounded);
    const done = stages.slice(0, bounded + 1);
    void persist(done, bounded === stages.length - 1, confidence);
  }

  if (isPending) {
    return (
      <div className="flex flex-1 items-center justify-center gap-2 p-16 text-sm text-muted-foreground">
        <Loader2 className="h-4 w-4 animate-spin" /> Gisele está preparando sua aula…
      </div>
    );
  }

  if (error || !data || !script) {
    return (
      <div className="p-16 text-center text-sm text-muted-foreground">
        Não foi possível abrir a Guided Lesson agora. Tente novamente em instantes.
      </div>
    );
  }

  const interaction = STAGE_INTERACTION[stageKey];
  const isLast = index === stages.length - 1;

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 space-y-5 px-6 py-8">
      <header className="space-y-1">
        <p className="text-xs uppercase tracking-wide text-gold">Guided Lesson with Gisele</p>
        <h1 className="text-2xl font-bold text-foreground">
          Unit {unit.number}: {unit.title}
        </h1>
        <p className="text-sm italic text-muted-foreground">
          {unit.titlePt} · {PART_LABEL[part].en}
        </p>
      </header>

      <LessonProgress stages={stages} current={index} />
      <InstructorStage media={data.media} stage={stageKey} speaking={speaking} />

      <InstructorMessage
        en={script.instructorEn}
        {...(script.instructorPt ? { pt: script.instructorPt } : {})}
        {...(script.hint ? { hint: script.hint } : {})}
        {...(script.examples.length ? { examples: script.examples } : {})}
        onListen={listen}
        speaking={speaking}
      />

      {stageKey === "discover" && (
        <>
          {part === "discover" && <VocabularyCard items={unit.discover.vocabulary} onListen={listen} />}
          {part === "discover" && <GrammarCard points={unit.discover.grammar} />}
        </>
      )}

      {interaction !== "none" &&
        (stageKey === "challenge" ? (
          <SpeakingChallenge
            promptEn={script.promptEn || script.instructorEn}
            {...(script.promptPt ? { promptPt: script.promptPt } : {})}
            value={answers[stageKey] ?? ""}
            onChange={(v) => setAnswers((prev) => ({ ...prev, [stageKey]: v }))}
            onSubmit={submit}
            busy={busy}
          />
        ) : (
          <StudentResponse
            interaction={interaction}
            value={answers[stageKey] ?? ""}
            onChange={(v) => setAnswers((prev) => ({ ...prev, [stageKey]: v }))}
            onSubmit={submit}
            busy={busy}
            promptEn={script.promptEn || script.instructorEn}
            {...(script.promptPt ? { promptPt: script.promptPt } : {})}
          />
        ))}

      {feedback[stageKey] && <FeedbackCard feedback={feedback[stageKey]!} />}

      {isLast && (
        <LessonSummary
          course={course}
          practiced={focus.vocabulary.slice(0, 6)}
          toReview={focus.grammar}
          encouragement={script.instructorEn}
          confidence={confidence}
          onConfidence={(n) => {
            setConfidence(n);
            void persist(stages, true, n);
          }}
          onRestart={() => {
            setIndex(0);
            setAnswers({});
            setFeedback({});
          }}
        />
      )}

      <div className="flex items-center justify-between pt-2">
        <Button
          variant="outline"
          size="sm"
          disabled={index === 0}
          onClick={() => goTo(index - 1)}
          className="gap-1 rounded-full text-xs"
        >
          <ChevronLeft className="h-3.5 w-3.5" /> Previous
        </Button>
        <Button
          size="sm"
          disabled={isLast}
          onClick={() => goTo(index + 1)}
          className="btn-gold gap-1 rounded-full text-xs font-semibold"
        >
          Next <ChevronRight className="h-3.5 w-3.5" />
        </Button>
      </div>

      <p className="text-[11px] text-muted-foreground">
        A voz e as respostas da Gisele nesta aula são geradas por inteligência artificial.
      </p>
    </main>
  );
}
