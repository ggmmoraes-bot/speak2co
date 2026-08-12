import { useState } from "react";
import { Check, X } from "lucide-react";
import { BilingualLine } from "@/components/BilingualLine";
import type { CheckQuestion } from "@/lib/curriculum/types";

/**
 * Checagem obrigatória de todas as sessões de prática do novo currículo:
 * o aluno responde e recebe correção imediata com explicação bilíngue.
 */
export function CheckQuiz({
  questions,
  onScore,
}: {
  questions: CheckQuestion[];
  onScore?: ((correct: number, total: number) => void) | undefined;
}) {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  function pick(q: CheckQuestion, option: string) {
    if (answers[q.id]) return;
    const next = { ...answers, [q.id]: option };
    setAnswers(next);
    const correct = questions.filter((item) => next[item.id] === item.answer).length;
    onScore?.(correct, questions.length);
  }

  return (
    <div className="space-y-4">
      {questions.map((q) => {
        const chosen = answers[q.id];
        const isRight = chosen === q.answer;
        return (
          <div key={q.id} className="rounded-2xl border border-border bg-card/60 p-4">
            <BilingualLine value={q.prompt} className="text-sm font-medium text-foreground" />
            <div className="mt-3 flex flex-wrap gap-2">
              {q.options.map((option) => {
                const selected = chosen === option;
                const tone = !chosen
                  ? "border-border text-foreground/80 hover:border-gold/60"
                  : option === q.answer
                    ? "border-gold bg-gold/15 text-gold"
                    : selected
                      ? "border-destructive/60 bg-destructive/10 text-destructive"
                      : "border-border text-muted-foreground";
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => pick(q, option)}
                    className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${tone}`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
            {chosen && (
              <div className="mt-3 flex items-start gap-2 text-xs">
                {isRight ? (
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" />
                ) : (
                  <X className="mt-0.5 h-3.5 w-3.5 shrink-0 text-destructive" />
                )}
                <BilingualLine value={q.explanation} className="text-foreground/80" />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
