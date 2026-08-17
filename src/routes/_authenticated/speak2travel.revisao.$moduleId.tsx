import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  ArrowLeft,
  Check,
  MessageSquare,
  Mic,
  RefreshCw,
  RotateCcw,
  Sparkles,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { getTravelTrack, type TravelTrack } from "@/lib/speak2travel-content";
import {
  getModuleContent,
  type ModuleFlashcard,
  type ModuleQuizQuestion,
  type TravelModuleContent,
} from "@/lib/speak2travel-modules";

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
    const description = `Flashcards, diálogo-modelo, dicas de pronúncia e quiz de vocabulário do módulo ${track.module} (${track.title}) do Speak2Travel.`;
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

type Mode = "cards" | "dialogo" | "quiz";

function buildDeck(track: TravelTrack, content: TravelModuleContent | undefined): ModuleFlashcard[] {
  const fromDoc = content?.flashcards ?? [];
  const fromVocab = (content?.vocabulary ?? []).map((v) => ({ front: v.en, back: v.pt }));
  const fallback = track.vocabulary.map((v) => ({ front: v.term, back: v.meaning }));
  const all = [...fromDoc, ...fromVocab, ...fallback];
  const seen = new Set<string>();
  return all.filter((c) => {
    const key = c.front.toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function Review({ track }: { track: TravelTrack }) {
  const [mode, setMode] = useState<Mode>("cards");
  const content = getModuleContent(track.id);
  const deck = useMemo(() => buildDeck(track, content), [track, content]);

  const tabs: { id: Mode; label: string }[] = [
    { id: "cards", label: "Flashcards" },
    { id: "dialogo", label: "Dialogue & pronunciation" },
    { id: "quiz", label: "Exercises" },
  ];

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-6 py-12">
        <Button asChild variant="ghost" size="sm" className="mb-6 -ml-2 rounded-full">
          <Link to="/speak2travel/modulo/$moduleId" params={{ moduleId: track.id }}>
            <ArrowLeft className="mr-1 h-4 w-4" /> Back to module
          </Link>
        </Button>

        <header>
          <p className="text-xs tracking-widest text-muted-foreground uppercase">
            Review · Module {track.module}
            {content ? ` · ${content.label}` : ""}
          </p>
          <h1 className="mt-1 text-3xl font-semibold text-gold">{track.title}</h1>
          <p className="text-sm text-muted-foreground">
            {deck.length} flashcards · {content?.quiz.length ?? 0} questions ·{" "}
            {content?.dialogue.length ?? 0} model dialogue lines
          </p>
        </header>

        <div className="mt-8 flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              variant={mode === tab.id ? "default" : "outline"}
              className={
                mode === tab.id
                  ? "rounded-full bg-gold font-semibold text-primary-foreground hover:opacity-90"
                  : "rounded-full"
              }
              onClick={() => setMode(tab.id)}
            >
              {tab.label}
            </Button>
          ))}
        </div>

        {mode === "cards" && <Flashcards deck={deck} track={track} content={content} />}
        {mode === "dialogo" && <DialogueSection track={track} content={content} />}
        {mode === "quiz" && <VocabularyQuiz track={track} content={content} />}
      </div>
    </main>
  );
}

function Flashcards({
  deck,
  track,
  content,
}: {
  deck: ModuleFlashcard[];
  track: TravelTrack;
  content: TravelModuleContent | undefined;
}) {
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [known, setKnown] = useState<string[]>([]);

  const card = deck[index]!;
  const isLast = index === deck.length - 1;

  function next(markKnown: boolean) {
    setKnown((prev) =>
      markKnown && !prev.includes(card.front) ? [...prev, card.front] : prev,
    );
    setRevealed(false);
    setIndex((i) => (isLast ? i : i + 1));
  }

  return (
    <section className="mt-8 space-y-6">
      <p className="text-xs tracking-widest text-muted-foreground uppercase">
        Card {index + 1} of {deck.length} · {known.length} marked as known
      </p>

      <button
        type="button"
        onClick={() => setRevealed((r) => !r)}
        className="flex min-h-48 w-full flex-col items-center justify-center rounded-2xl border border-gold/40 bg-card/60 p-8 text-center backdrop-blur transition hover:border-gold"
      >
        <p className="text-2xl font-semibold text-gold">{card.front}</p>
        {revealed ? (
          <p className="mt-4 text-base text-foreground/80">{card.back}</p>
        ) : (
          <p className="mt-4 text-xs tracking-widest text-muted-foreground uppercase">
            Tap to see the meaning
          </p>
        )}
      </button>

      <div className="flex flex-wrap gap-3">
        <Button variant="outline" className="rounded-full" onClick={() => next(false)}>
          <RefreshCw className="mr-1 h-4 w-4" /> Review later
        </Button>
        <Button
          className="rounded-full bg-gold font-semibold text-primary-foreground hover:opacity-90"
          onClick={() => next(true)}
        >
          <Check className="mr-1 h-4 w-4" /> I know it
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
            Previous
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
          <RotateCcw className="mr-1 h-4 w-4" /> Restart
        </Button>
      </div>

      <div className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur">
        <h2 className="text-xs tracking-widest text-muted-foreground uppercase">
          Key expressions to repeat out loud
        </h2>
        <ul className="mt-3 space-y-3">
          {(content?.expressions ?? []).map((e) => (
            <li key={e.en} className="text-sm text-foreground/80">
              <span className="text-foreground">“{e.en}”</span>
              <span className="block text-muted-foreground">{e.pt}</span>
            </li>
          ))}
          {!content &&
            track.phrases.map((phrase) => (
              <li key={phrase} className="text-sm text-foreground/80">
                “{phrase}”
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
}

function DialogueSection({
  track,
  content,
}: {
  track: TravelTrack;
  content: TravelModuleContent | undefined;
}) {
  if (!content) {
    return (
      <section className="mt-8 rounded-2xl border border-border bg-card/60 p-6 text-sm text-foreground/80 backdrop-blur">
        This module has no model dialogue yet. Use the model phrases from module{" "}
        {track.title} to practice out loud.
      </section>
    );
  }

  return (
    <section className="mt-8 space-y-6">
      <div className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur">
        <h2 className="flex items-center gap-2 text-lg font-semibold text-gold">
          <MessageSquare className="h-5 w-5" /> Model dialogue
        </h2>
        <ul className="mt-4 space-y-3">
          {content.dialogue.map((line, i) => (
            <li key={`${line.who}-${i}`} className="text-sm">
              <span className="font-semibold text-gold">{line.who}: </span>
              <span className="text-foreground/80">{line.line}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur">
        <h2 className="flex items-center gap-2 text-lg font-semibold text-gold">
          <Mic className="h-5 w-5" /> Pronunciation tips
        </h2>
        <ul className="mt-4 space-y-2">
          {content.pronunciation.map((tip) => (
            <li key={tip} className="text-sm text-foreground/80">
              {tip}
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-2xl border border-gold/40 bg-card/60 p-6 backdrop-blur">
        <h2 className="text-xs tracking-widest text-muted-foreground uppercase">
          Role play com IA
        </h2>
        <p className="mt-3 text-sm text-foreground/80">{content.rolePlay}</p>
        <Button
          asChild
          className="mt-4 rounded-full bg-gold font-semibold text-primary-foreground hover:opacity-90"
        >
          <Link to="/speak2travel/modulo/$moduleId" params={{ moduleId: track.id }}>
            <Sparkles className="mr-1 h-4 w-4" /> Começar o role play
          </Link>
        </Button>
      </div>
    </section>
  );
}

type QuizItem = {
  key: string;
  question: string;
  answer: string;
  options: string[];
};

function buildQuiz(track: TravelTrack, content: TravelModuleContent | undefined): QuizItem[] {
  const docQuiz: QuizItem[] = (content?.quiz ?? []).map((q: ModuleQuizQuestion, i) => ({
    key: `doc-${i}`,
    question: q.question,
    answer: q.answer,
    options: [...q.options].sort(() => Math.random() - 0.5),
  }));

  const vocab = content
    ? content.vocabulary.map((v) => ({ term: v.en, meaning: v.pt }))
    : track.vocabulary.map((v) => ({ term: v.term, meaning: v.meaning }));

  const vocabQuiz: QuizItem[] = [...vocab]
    .sort(() => Math.random() - 0.5)
    .slice(0, 5)
    .map((item) => {
      const distractors = vocab
        .filter((v) => v.term !== item.term)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map((v) => v.meaning);
      return {
        key: `vocab-${item.term}`,
        question: `O que significa “${item.term}”?`,
        answer: item.meaning,
        options: [item.meaning, ...distractors].sort(() => Math.random() - 0.5),
      };
    });

  return [...docQuiz, ...vocabQuiz];
}

function VocabularyQuiz({
  track,
  content,
}: {
  track: TravelTrack;
  content: TravelModuleContent | undefined;
}) {
  const [round, setRound] = useState(0);
  const questions = useMemo(() => buildQuiz(track, content), [track, content, round]);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const answeredCount = Object.keys(answers).length;
  const correct = questions.filter((q) => answers[q.key] === q.answer).length;
  const done = answeredCount === questions.length;

  return (
    <section className="mt-8 space-y-6">
      <p className="text-xs tracking-widest text-muted-foreground uppercase">
        {answeredCount} de {questions.length} respondidas · {correct} corretas
      </p>

      {questions.map((q, i) => {
        const chosen = answers[q.key];
        return (
          <div
            key={q.key}
            className="rounded-2xl border border-border bg-card/60 p-5 backdrop-blur"
          >
            <p className="text-xs tracking-widest text-muted-foreground uppercase">
              Questão {i + 1}
            </p>
            <p className="mt-2 text-lg font-semibold text-gold">{q.question}</p>
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
                    onClick={() => setAnswers((prev) => ({ ...prev, [q.key]: option }))}
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
          <p className="text-xs tracking-widest text-muted-foreground uppercase">Result</p>
          <p className="mt-1 text-4xl font-semibold text-gold">
            {correct}/{questions.length}
          </p>
          <p className="mt-3 text-sm text-foreground/80">
            {correct === questions.length
              ? "Vocabulary mastered. Time to practice the module role play."
              : "Review the cards you missed and try again."}
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
          <RotateCcw className="mr-1 h-4 w-4" /> Shuffle again
        </Button>
        <Button
          asChild
          className="rounded-full bg-gold font-semibold text-primary-foreground hover:opacity-90"
        >
          <Link to="/speak2travel/modulo/$moduleId" params={{ moduleId: track.id }}>
            <Sparkles className="mr-1 h-4 w-4" /> Go to role play
          </Link>
        </Button>
      </div>
    </section>
  );
}
