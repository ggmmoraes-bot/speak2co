import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowLeft, Check, RefreshCw, RotateCcw, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getTravelTrack, type TravelTrack } from "@/lib/speak2travel-content";

export const Route = createFileRoute("/_authenticated/speak2travel/revisao/$moduleId")({
  loader: ({ params }) => {
    const track = getTravelTrack(params.moduleId);
    if (!track) throw notFound();
    return { track };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Revisão indisponível — Speak2Travel" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { track } = loaderData;
    const title = `Revisão: ${track.title} — Speak2Travel`;
    const description = `Cartões de vocabulário e exercícios de revisão do módulo ${track.module} (${track.title}) do Speak2Travel.`;
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
  component: ReviewPage,
});

function ReviewPage() {
  const { track } = Route.useLoaderData();
  return <Review key={track.id} track={track} />;
}

type Mode = "cards" | "quiz";

function Review({ track }: { track: TravelTrack }) {
  const [mode, setMode] = useState<Mode>("cards");

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-6 py-12">
        <Button asChild variant="ghost" size="sm" className="mb-6 -ml-2 rounded-full">
          <Link to="/speak2travel/modulo/$moduleId" params={{ moduleId: track.id }}>
            <ArrowLeft className="mr-1 h-4 w-4" /> Voltar ao módulo
          </Link>
        </Button>

        <header>
          <p className="text-xs tracking-widest text-muted-foreground uppercase">
            Revisão · Módulo {track.module}
          </p>
          <h1 className="mt-1 text-3xl font-semibold text-gold">{track.title}</h1>
          <p className="text-sm text-muted-foreground">
            {track.vocabulary.length} palavras · {track.phrases.length} frases-modelo
          </p>
        </header>

        <div className="mt-8 flex flex-wrap gap-2">
          <Button
            variant={mode === "cards" ? "default" : "outline"}
            className={
              mode === "cards"
                ? "rounded-full bg-gold font-semibold text-primary-foreground hover:opacity-90"
                : "rounded-full"
            }
            onClick={() => setMode("cards")}
          >
            Cartões
          </Button>
          <Button
            variant={mode === "quiz" ? "default" : "outline"}
            className={
              mode === "quiz"
                ? "rounded-full bg-gold font-semibold text-primary-foreground hover:opacity-90"
                : "rounded-full"
            }
            onClick={() => setMode("quiz")}
          >
            Exercícios
          </Button>
        </div>

        {mode === "cards" ? <Flashcards track={track} /> : <VocabularyQuiz track={track} />}
      </div>
    </main>
  );
}

function Flashcards({ track }: { track: TravelTrack }) {
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [known, setKnown] = useState<string[]>([]);

  const card = track.vocabulary[index]!;
  const isLast = index === track.vocabulary.length - 1;

  function next(markKnown: boolean) {
    setKnown((prev) =>
      markKnown && !prev.includes(card.term) ? [...prev, card.term] : prev,
    );
    setRevealed(false);
    setIndex((i) => (isLast ? i : i + 1));
  }

  return (
    <section className="mt-8 space-y-6">
      <p className="text-xs tracking-widest text-muted-foreground uppercase">
        Cartão {index + 1} de {track.vocabulary.length} · {known.length} marcados como sabidos
      </p>

      <button
        type="button"
        onClick={() => setRevealed((r) => !r)}
        className="flex min-h-48 w-full flex-col items-center justify-center rounded-2xl border border-gold/40 bg-card/60 p-8 text-center backdrop-blur transition hover:border-gold"
      >
        <p className="text-2xl font-semibold text-gold">{card.term}</p>
        {revealed ? (
          <p className="mt-4 text-base text-foreground/80">{card.meaning}</p>
        ) : (
          <p className="mt-4 text-xs tracking-widest text-muted-foreground uppercase">
            Toque para ver a tradução
          </p>
        )}
      </button>

      <div className="flex flex-wrap gap-3">
        <Button variant="outline" className="rounded-full" onClick={() => next(false)}>
          <RefreshCw className="mr-1 h-4 w-4" /> Rever depois
        </Button>
        <Button
          className="rounded-full bg-gold font-semibold text-primary-foreground hover:opacity-90"
          onClick={() => next(true)}
        >
          <Check className="mr-1 h-4 w-4" /> Já sei
        </Button>
        {index > 0 && (
          <Button
            variant="ghost"
            className="rounded-full"
            onClick={() => {
              setRevealed(false);
              setIndex((i) => i - 1);
            }}
          >
            Anterior
          </Button>
        )}
        <Button
          variant="ghost"
          className="rounded-full"
          onClick={() => {
            setIndex(0);
            setRevealed(false);
            setKnown([]);
          }}
        >
          <RotateCcw className="mr-1 h-4 w-4" /> Recomeçar
        </Button>
      </div>

      <div className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur">
        <h2 className="text-xs tracking-widest text-muted-foreground uppercase">
          Frases-modelo para repetir em voz alta
        </h2>
        <ul className="mt-3 space-y-2">
          {track.phrases.map((phrase) => (
            <li key={phrase} className="text-sm text-foreground/80">
              “{phrase}”
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

type QuizQuestion = {
  term: string;
  answer: string;
  options: string[];
};

function buildQuiz(track: TravelTrack): QuizQuestion[] {
  const vocab = track.vocabulary;
  const shuffled = [...vocab].sort(() => Math.random() - 0.5);
  return shuffled.map((item) => {
    const distractors = vocab
      .filter((v) => v.term !== item.term)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map((v) => v.meaning);
    const options = [item.meaning, ...distractors].sort(() => Math.random() - 0.5);
    return { term: item.term, answer: item.meaning, options };
  });
}

function VocabularyQuiz({ track }: { track: TravelTrack }) {
  const [round, setRound] = useState(0);
  const questions = useMemo(() => buildQuiz(track), [track, round]);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const answeredCount = Object.keys(answers).length;
  const correct = questions.filter((q) => answers[q.term] === q.answer).length;
  const done = answeredCount === questions.length;

  return (
    <section className="mt-8 space-y-6">
      <p className="text-xs tracking-widest text-muted-foreground uppercase">
        {answeredCount} de {questions.length} respondidas · {correct} corretas
      </p>

      {questions.map((q, i) => {
        const chosen = answers[q.term];
        return (
          <div
            key={q.term}
            className="rounded-2xl border border-border bg-card/60 p-5 backdrop-blur"
          >
            <p className="text-xs tracking-widest text-muted-foreground uppercase">
              Questão {i + 1}
            </p>
            <p className="mt-2 text-lg font-semibold text-gold">{q.term}</p>
            <div className="mt-4 grid gap-2">
              {q.options.map((option) => {
                const isChosen = chosen === option;
                const isAnswer = option === q.answer;
                const state = !chosen
                  ? "border-border"
                  : isAnswer
                    ? "border-primary text-primary"
                    : isChosen
                      ? "border-destructive text-destructive"
                      : "border-border opacity-60";
                return (
                  <button
                    key={option}
                    type="button"
                    disabled={Boolean(chosen)}
                    onClick={() => setAnswers((prev) => ({ ...prev, [q.term]: option }))}
                    className={`flex items-center justify-between gap-3 rounded-xl border ${state} px-4 py-3 text-left text-sm transition hover:border-gold/60 disabled:cursor-default`}
                  >
                    <span>{option}</span>
                    {chosen && isAnswer && <Check className="h-4 w-4 shrink-0" />}
                    {chosen && isChosen && !isAnswer && <X className="h-4 w-4 shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}

      {done && (
        <div className="rounded-2xl border border-gold/40 bg-card/60 p-6 backdrop-blur">
          <p className="text-xs tracking-widest text-muted-foreground uppercase">Resultado</p>
          <p className="mt-1 text-4xl font-semibold text-gold">
            {correct}/{questions.length}
          </p>
          <p className="mt-3 text-sm text-foreground/80">
            {correct === questions.length
              ? "Vocabulário dominado. Hora de praticar o role play do módulo."
              : "Revise os cartões das palavras que você errou e tente de novo."}
          </p>
        </div>
      )}

      <div className="flex flex-wrap gap-3">
        <Button
          variant="outline"
          className="rounded-full"
          onClick={() => {
            setAnswers({});
            setRound((r) => r + 1);
          }}
        >
          <RotateCcw className="mr-1 h-4 w-4" /> Novo embaralhamento
        </Button>
        <Button
          asChild
          className="rounded-full bg-gold font-semibold text-primary-foreground hover:opacity-90"
        >
          <Link to="/speak2travel/modulo/$moduleId" params={{ moduleId: track.id }}>
            <Sparkles className="mr-1 h-4 w-4" /> Ir para o role play
          </Link>
        </Button>
      </div>
    </section>
  );
}
