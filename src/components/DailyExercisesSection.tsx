import { useEffect, useRef, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  getTodayExercise,
  generateTodayExercise,
  submitTodayExercise,
  type DailyExercise,
  type ExerciseItem,
} from "@/lib/daily-exercises.functions";

export function DailyExercisesSection({ hasPlan }: { hasPlan: boolean }) {
  const fetchExercise = useServerFn(getTodayExercise);
  const generate = useServerFn(generateTodayExercise);
  const submit = useServerFn(submitTodayExercise);
  const queryClient = useQueryClient();
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const { data: exercise, isLoading } = useQuery({
    queryKey: ["daily-exercise"],
    queryFn: () => fetchExercise(),
  });

  const generation = useMutation({
    mutationFn: () => generate(),
    onSuccess: (data) => {
      queryClient.setQueryData(["daily-exercise"], data);
      setAnswers({});
      toast.success("Exercícios de hoje prontos!");
    },
    onError: (error: Error) => toast.error(error.message),
  });

  const submission = useMutation({
    mutationFn: (payload: { id: string; answers: Record<string, string> }) => submit({ data: payload }),
    onSuccess: (data) => {
      queryClient.setQueryData(["daily-exercise"], data);
      toast.success(`Você acertou ${data.score} de ${(data.items ?? []).length}!`);
    },
    onError: (error: Error) => toast.error(error.message),
  });

  const autoRan = useRef(false);
  useEffect(() => {
    if (autoRan.current) return;
    if (isLoading || exercise || !hasPlan || generation.isPending) return;
    autoRan.current = true;
    generation.mutate();
  }, [isLoading, exercise, hasPlan, generation]);

  const current = exercise as DailyExercise | null | undefined;
  const items = (current?.items ?? []) as ExerciseItem[];
  const savedAnswers = (current?.answers ?? {}) as Record<string, string>;
  const shown = current?.completed ? savedAnswers : answers;
  const allAnswered = items.length > 0 && items.every((_, i) => shown[String(i)]);

  return (
    <section className="mt-14">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-2xl font-semibold">
          Exercícios <span className="text-gold">de hoje</span>
        </h2>
        {hasPlan && (
          <Button
            variant="outline"
            disabled={generation.isPending}
            onClick={() => generation.mutate()}
            className="rounded-full border-primary/40 bg-transparent text-foreground hover:bg-secondary"
          >
            {generation.isPending ? "Gerando…" : current ? "Novos exercícios" : "Gerar exercícios"}
          </Button>
        )}
      </div>

      {!hasPlan ? (
        <p className="mt-4 text-sm text-muted-foreground">
          Gere seu plano de estudos para receber exercícios diários personalizados.
        </p>
      ) : generation.isPending || isLoading ? (
        <p className="mt-4 text-sm text-muted-foreground">
          Preparando seus exercícios com o professor de IA…
        </p>
      ) : current ? (
        <div className="mt-6 grid gap-4">
          <div className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur">
            {current.week_number != null && (
              <p className="text-xs tracking-widest text-muted-foreground uppercase">
                Semana {current.week_number}
              </p>
            )}
            <p className="mt-1 font-semibold text-gold">{current.title}</p>
            {current.instructions && (
              <p className="mt-2 text-sm text-muted-foreground">{current.instructions}</p>
            )}
            {current.completed && (
              <p className="mt-3 text-sm font-semibold text-foreground">
                Resultado: {current.score} / {items.length}
              </p>
            )}
          </div>

          {items.map((item, index) => {
            const key = String(index);
            const selected = shown[key];
            return (
              <div
                key={key}
                className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur"
              >
                <p className="text-sm font-medium text-foreground">
                  {index + 1}. {item.question}
                </p>
                <div className="mt-3 grid gap-2">
                  {item.options.map((option) => {
                    const isSelected = selected === option;
                    const isCorrect = current.completed && option === item.answer;
                    const isWrong = current.completed && isSelected && option !== item.answer;
                    return (
                      <button
                        key={option}
                        type="button"
                        disabled={current.completed || submission.isPending}
                        onClick={() => setAnswers((prev) => ({ ...prev, [key]: option }))}
                        className={`rounded-xl border px-4 py-2 text-left text-sm transition ${
                          isCorrect
                            ? "border-gold bg-secondary text-gold"
                            : isWrong
                              ? "border-destructive text-destructive"
                              : isSelected
                                ? "border-primary/60 bg-secondary text-foreground"
                                : "border-border text-muted-foreground hover:bg-secondary"
                        }`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
                {current.completed && (
                  <p className="mt-3 text-sm text-muted-foreground">{item.explanation}</p>
                )}
              </div>
            );
          })}

          {!current.completed && (
            <Button
              disabled={!allAnswered || submission.isPending}
              onClick={() => submission.mutate({ id: current.id, answers })}
              className="bg-gold text-primary-foreground glow-gold w-fit rounded-full font-semibold hover:opacity-90"
            >
              {submission.isPending ? "Corrigindo…" : "Corrigir exercícios"}
            </Button>
          )}
        </div>
      ) : (
        <p className="mt-4 text-sm text-muted-foreground">
          Nenhum exercício por enquanto. Clique em “Gerar exercícios”.
        </p>
      )}
    </section>
  );
}
