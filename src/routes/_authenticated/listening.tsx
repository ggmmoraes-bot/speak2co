import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Headphones, Play, Square, Check, X, RotateCcw } from "lucide-react";
import { AltHeading } from "@/components/AltHeading";
import {
  GENERAL_LISTENING,
  GENERAL_LISTENING_TOTAL,
  LISTENING_LEVELS,
  type ListeningActivity,
} from "@/lib/general-listening";

export const Route = createFileRoute("/_authenticated/listening")({
  head: () => {
    const title = "Listening Practice | Speak2Co";
    const description =
      "Biblioteca geral de listening em inglês: áudio, transcrição, vocabulário e perguntas de compreensão por nível.";
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
  component: ListeningPracticePage,
});

function speakLines(lines: string[], onEnd: () => void) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  lines.forEach((line, index) => {
    const utterance = new SpeechSynthesisUtterance(line);
    utterance.lang = "en-US";
    utterance.rate = 0.92;
    if (index === lines.length - 1) utterance.onend = onEnd;
    window.speechSynthesis.speak(utterance);
  });
}

function ActivityCard({
  activity,
  done,
  onComplete,
}: {
  activity: ListeningActivity;
  done: boolean;
  onComplete: () => void;
}) {
  const [playing, setPlaying] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [checked, setChecked] = useState(false);

  const correct = activity.questions.filter((q, i) => answers[i] === q.answer).length;

  return (
    <article className="overflow-hidden rounded-3xl border border-border bg-card/60">
      <div className="flex flex-wrap items-start justify-between gap-3 border-b border-border bg-muted/30 px-6 py-4">
        <div>
          <p className="text-xs font-semibold tracking-wide text-gold uppercase">
            {activity.level} · {activity.theme}
          </p>
          <h2 className="text-lg font-semibold text-foreground">
            {activity.title}{" "}
            <span className="text-sm font-normal text-muted-foreground">({activity.titlePt})</span>
          </h2>
        </div>
        {done && (
          <span className="inline-flex items-center gap-1 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
            <Check className="h-3.5 w-3.5" /> Completed
          </span>
        )}
      </div>

      <div className="space-y-5 px-6 py-5">
        <p className="text-sm text-muted-foreground">{activity.intro}</p>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => {
              if (playing) {
                window.speechSynthesis.cancel();
                setPlaying(false);
                return;
              }
              setPlaying(true);
              speakLines(
                activity.transcript.map((t) => t.line),
                () => setPlaying(false),
              );
            }}
            className="inline-flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-xs font-semibold text-navy transition hover:opacity-90"
          >
            {playing ? <Square className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
            {playing ? "Pause audio" : "Play audio"}
          </button>
          <button
            onClick={() => setShowTranscript((v) => !v)}
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-semibold text-muted-foreground transition hover:border-gold/40 hover:text-foreground"
          >
            {showTranscript ? "Hide transcript" : "Show transcript"}
          </button>
        </div>

        {showTranscript && (
          <ul className="space-y-2 rounded-2xl border border-border bg-muted/20 p-4">
            {activity.transcript.map((t, i) => (
              <li key={i} className="text-sm text-foreground/90">
                <span className="font-semibold text-gold">{t.speaker}:</span> {t.line}
              </li>
            ))}
          </ul>
        )}

        <div>
          <p className="text-xs font-semibold tracking-wide text-gold uppercase">Vocabulary</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {activity.vocabulary.map((w) => (
              <span
                key={w.term}
                className="rounded-full border border-border px-3 py-1 text-xs text-foreground/90"
              >
                {w.term} <span className="text-muted-foreground">· {w.pt}</span>
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-xs font-semibold tracking-wide text-gold uppercase">
            Comprehension questions
          </p>
          {activity.questions.map((q, qi) => (
            <div key={qi} className="rounded-2xl border border-border p-4">
              <p className="text-sm font-medium text-foreground">
                {qi + 1}. {q.question}
              </p>
              <div className="mt-3 flex flex-col gap-2">
                {q.options.map((opt, oi) => {
                  const selected = answers[qi] === oi;
                  const isRight = checked && oi === q.answer;
                  const isWrong = checked && selected && oi !== q.answer;
                  return (
                    <button
                      key={oi}
                      onClick={() => !checked && setAnswers((a) => ({ ...a, [qi]: oi }))}
                      className={`flex items-center gap-2 rounded-xl border px-3 py-2 text-left text-sm transition ${
                        isRight
                          ? "border-gold bg-gold/10 text-gold"
                          : isWrong
                            ? "border-destructive/60 text-destructive"
                            : selected
                              ? "border-gold/60 text-foreground"
                              : "border-border text-muted-foreground hover:border-gold/40 hover:text-foreground"
                      }`}
                    >
                      {isRight && <Check className="h-3.5 w-3.5" />}
                      {isWrong && <X className="h-3.5 w-3.5" />}
                      {opt}
                    </button>
                  );
                })}
              </div>
              {checked && (
                <p className="mt-2 text-xs text-muted-foreground">{q.explanation}</p>
              )}
            </div>
          ))}

          <div className="flex flex-wrap items-center gap-3">
            {!checked ? (
              <button
                onClick={() => {
                  setChecked(true);
                  onComplete();
                }}
                disabled={Object.keys(answers).length < activity.questions.length}
                className="rounded-full bg-gold px-5 py-2 text-xs font-semibold text-navy transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Check answers
              </button>
            ) : (
              <>
                <span className="text-sm font-semibold text-gold">
                  {correct}/{activity.questions.length} correct
                </span>
                <button
                  onClick={() => {
                    setAnswers({});
                    setChecked(false);
                  }}
                  className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-semibold text-muted-foreground transition hover:border-gold/40 hover:text-foreground"
                >
                  <RotateCcw className="h-3.5 w-3.5" /> Review again
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

function ListeningPracticePage() {
  const [level, setLevel] = useState<string>("all");
  const [completed, setCompleted] = useState<string[]>([]);

  const activities = useMemo(
    () =>
      level === "all"
        ? GENERAL_LISTENING
        : GENERAL_LISTENING.filter((a) => a.level === level),
    [level],
  );

  const progress = Math.round((completed.length / GENERAL_LISTENING_TOTAL) * 100);

  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-10">
      <header className="rounded-3xl border border-border bg-card/60 p-6 backdrop-blur">
        <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
          <Headphones className="h-3.5 w-3.5" /> Learning Tools
        </span>
        <h1 className="mt-4 text-3xl font-bold">
          <AltHeading text="Listening Practice" />
        </h1>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          General English listening: audio, transcript, vocabulary and comprehension questions.
          <span className="block text-sm">
            Biblioteca geral e independente. O listening de viagens continua em Speak2Travel.
          </span>
        </p>
        <div className="mt-4 flex items-center gap-3">
          <div className="h-2 w-40 overflow-hidden rounded-full bg-muted">
            <div className="h-full bg-gold" style={{ width: `${progress}%` }} />
          </div>
          <span className="text-xs text-muted-foreground">
            {completed.length}/{GENERAL_LISTENING_TOTAL} atividades concluídas
          </span>
        </div>
      </header>

      <div className="mt-6 flex flex-wrap gap-2">
        {["all", ...LISTENING_LEVELS].map((lv) => (
          <button
            key={lv}
            onClick={() => setLevel(lv)}
            className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${
              level === lv
                ? "border-gold bg-gold/15 text-gold"
                : "border-border text-muted-foreground hover:border-gold/40 hover:text-foreground"
            }`}
          >
            {lv === "all" ? "All levels" : lv}
          </button>
        ))}
      </div>

      <div className="mt-6 space-y-6">
        {activities.map((a) => (
          <ActivityCard
            key={a.id}
            activity={a}
            done={completed.includes(a.id)}
            onComplete={() =>
              setCompleted((c) => (c.includes(a.id) ? c : [...c, a.id]))
            }
          />
        ))}
      </div>
    </main>
  );
}
