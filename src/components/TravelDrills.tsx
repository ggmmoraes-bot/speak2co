import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Check, Dumbbell, Loader2, RefreshCw, X } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  generateTravelDrills,
  type TravelDrills as TravelDrillsData,
} from "@/lib/speak2travel.functions";

/** Exercícios de vocabulário e gramática gerados a partir das respostas do aluno. */
export function TravelDrills({
  trackId,
  answers,
  conversation = [],
}: {
  trackId: string;
  answers: Record<string, string>;
  conversation?: { role: "student" | "coach"; text: string }[];
}) {
  const generate = useServerFn(generateTravelDrills);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<TravelDrillsData | null>(null);
  const [picked, setPicked] = useState<Record<number, string>>({});

  async function run() {
    setLoading(true);
    try {
      const result = await generate({ data: { trackId, answers, conversation } });
      setData(result);
      setPicked({});
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Não foi possível gerar os exercícios.");
    } finally {
      setLoading(false);
    }
  }

  const answered = data ? Object.keys(picked).length : 0;
  const correct = data
    ? data.drills.filter((d, i) => picked[i] === d.answer).length
    : 0;

  return (
    <section className="rounded-2xl border border-gold/40 bg-card/60 p-6 backdrop-blur">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="flex items-center gap-2 font-semibold text-gold">
            <Dumbbell className="h-4 w-4" />
            Personalized Practice
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Vocabulary and grammar created from your answers in this module.
            <span className="mt-0.5 block text-xs italic">
              Vocabulário e gramática criados a partir das suas respostas neste módulo.
            </span>
          </p>
        </div>
        <Button
          disabled={loading}
          onClick={run}
          className="rounded-full bg-gold font-semibold text-primary-foreground hover:opacity-90"
        >
          {loading ? (
            <Loader2 className="mr-1 h-4 w-4 animate-spin" />
          ) : (
            <RefreshCw className="mr-1 h-4 w-4" />
          )}
          {data ? "Generate new ones" : "Generate exercises"}
        </Button>
      </div>

      {data && (
        <div className="mt-6 space-y-4">
          <p className="text-sm text-foreground/80">{data.focus}</p>
          {data.drills.map((drill, i) => {
            const choice = picked[i];
            return (
              <div key={i} className="rounded-xl border border-border p-4">
                <p className="text-xs tracking-widest text-muted-foreground uppercase">
                  {drill.type === "grammar" ? "Grammar" : "Vocabulary"}
                </p>
                <p className="mt-1 font-medium text-foreground">{drill.question}</p>
                <div className="mt-3 grid gap-2">
                  {drill.options.map((option) => {
                    const isPicked = choice === option;
                    const isAnswer = option === drill.answer;
                    const state = !choice
                      ? "border-border"
                      : isAnswer
                        ? "border-emerald-500/60 bg-emerald-500/10"
                        : isPicked
                          ? "border-destructive/60 bg-destructive/10"
                          : "border-border opacity-60";
                    return (
                      <button
                        key={option}
                        type="button"
                        disabled={Boolean(choice)}
                        onClick={() => setPicked((prev) => ({ ...prev, [i]: option }))}
                        className={`flex items-center justify-between rounded-lg border px-3 py-2 text-left text-sm transition ${state}`}
                      >
                        <span>{option}</span>
                        {choice && isAnswer && <Check className="h-4 w-4 text-emerald-500" />}
                        {choice && isPicked && !isAnswer && (
                          <X className="h-4 w-4 text-destructive" />
                        )}
                      </button>
                    );
                  })}
                </div>
                {choice && (
                  <div className="mt-3 space-y-1 text-sm">
                    <p className="text-foreground/80">{drill.explanation}</p>
                    <p className="text-xs text-muted-foreground">{drill.sourceHint}</p>
                  </div>
                )}
              </div>
            );
          })}
          {answered > 0 && (
            <p className="text-sm text-muted-foreground">
              Correct: <span className="font-semibold text-gold">{correct}</span> of{" "}
              {answered} answered ({data.drills.length} total).
            </p>
          )}
        </div>
      )}
    </section>
  );
}
