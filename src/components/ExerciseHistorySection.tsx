import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import {
  getExerciseHistory,
  setExplanationFeedback,
  type DailyExercise,
  type ExerciseItem,
} from "@/lib/daily-exercises.functions";

type FeedbackValue = "helpful" | "not_helpful";

function formatDate(value: string) {
  const [year, month, day] = value.split("-");
  return `${day}/${month}/${year}`;
}

export function ExerciseHistorySection() {
  const fetchHistory = useServerFn(getExerciseHistory);
  const saveFeedback = useServerFn(setExplanationFeedback);
  const queryClient = useQueryClient();
  const [openId, setOpenId] = useState<string | null>(null);

  const feedbackMutation = useMutation({
    mutationFn: (vars: { id: string; itemIndex: number; value: FeedbackValue | null }) =>
      saveFeedback({ data: vars }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["exercise-history"] });
      toast.success("Obrigado! Vamos ajustar suas recomendações.");
    },
    onError: (error) =>
      toast.error(error instanceof Error ? error.message : "Não foi possível salvar seu feedback."),
  });

  const { data, isLoading } = useQuery({
    queryKey: ["exercise-history"],
    queryFn: () => fetchHistory(),
  });

  const history = (data ?? []) as DailyExercise[];
  const totalQuestions = history.reduce((sum, e) => sum + ((e.items ?? []) as ExerciseItem[]).length, 0);
  const totalCorrect = history.reduce((sum, e) => sum + (e.score ?? 0), 0);
  const accuracy = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;

  return (
    <section className="mt-14">
      <h2 className="text-2xl font-semibold">
        Histórico de <span className="text-gold">exercícios</span>
      </h2>

      {isLoading ? (
        <p className="mt-4 text-sm text-muted-foreground">Carregando seu histórico…</p>
      ) : history.length === 0 ? (
        <p className="mt-4 text-sm text-muted-foreground">
          Assim que você corrigir seus exercícios, o histórico com acertos, erros e explicações aparece
          aqui.
        </p>
      ) : (
        <div className="mt-6 grid gap-4">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur">
              <p className="text-xs tracking-widest text-muted-foreground uppercase">Dias concluídos</p>
              <p className="mt-2 text-xl font-semibold text-gold">{history.length}</p>
            </div>
            <div className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur">
              <p className="text-xs tracking-widest text-muted-foreground uppercase">Acertos totais</p>
              <p className="mt-2 text-xl font-semibold text-gold">
                {totalCorrect} / {totalQuestions}
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur">
              <p className="text-xs tracking-widest text-muted-foreground uppercase">Aproveitamento</p>
              <p className="mt-2 text-xl font-semibold text-gold">{accuracy}%</p>
            </div>
          </div>

          {history.map((entry) => {
            const items = (entry.items ?? []) as ExerciseItem[];
            const answers = (entry.answers ?? {}) as Record<string, string>;
            const feedback = (entry.explanation_feedback ?? {}) as Record<string, FeedbackValue>;
            const isOpen = openId === entry.id;
            return (
              <div
                key={entry.id}
                className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur"
              >
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : entry.id)}
                  className="flex w-full flex-wrap items-center justify-between gap-3 text-left"
                >
                  <span>
                    <span className="block text-xs tracking-widest text-muted-foreground uppercase">
                      {formatDate(entry.exercise_date)}
                      {entry.week_number != null ? ` • Semana ${entry.week_number}` : ""}
                    </span>
                    <span className="mt-1 block font-semibold text-gold">{entry.title}</span>
                  </span>
                  <span className="text-sm text-foreground">
                    {entry.score} / {items.length} acertos {isOpen ? "▲" : "▼"}
                  </span>
                </button>

                {isOpen && (
                  <div className="mt-4 grid gap-4 border-t border-border pt-4">
                    {items.map((item, index) => {
                      const given = answers[String(index)];
                      const correct = given === item.answer;
                      return (
                        <div key={index}>
                          <p className="text-sm font-medium text-foreground">
                            {index + 1}. {item.question}
                          </p>
                          <p className={`mt-1 text-sm ${correct ? "text-gold" : "text-destructive"}`}>
                            {correct ? "✓" : "✕"} Sua resposta: {given ?? "—"}
                          </p>
                          {!correct && (
                            <p className="mt-1 text-sm text-foreground">
                              Resposta correta: {item.answer}
                            </p>
                          )}
                          <p className="mt-1 text-sm text-muted-foreground">{item.explanation}</p>
                          <div className="mt-2 flex flex-wrap items-center gap-2">
                            <span className="text-xs text-muted-foreground">
                              A explicação ajudou?
                            </span>
                            {(
                              [
                                { value: "helpful" as const, label: "👍 Sim" },
                                { value: "not_helpful" as const, label: "👎 Não" },
                              ]
                            ).map((option) => {
                              const active = feedback[String(index)] === option.value;
                              return (
                                <button
                                  key={option.value}
                                  type="button"
                                  disabled={feedbackMutation.isPending}
                                  onClick={() =>
                                    feedbackMutation.mutate({
                                      id: entry.id,
                                      itemIndex: index,
                                      value: active ? null : option.value,
                                    })
                                  }
                                  className={`rounded-full border px-3 py-1 text-xs transition disabled:opacity-60 ${
                                    active
                                      ? "border-gold bg-gold/15 text-gold"
                                      : "border-border text-muted-foreground hover:text-foreground"
                                  }`}
                                >
                                  {option.label}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
