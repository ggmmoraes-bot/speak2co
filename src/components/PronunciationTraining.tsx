import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { ChevronLeft, ChevronRight, CheckCircle2, Dumbbell, Loader2, RotateCcw } from "lucide-react";
import { toast } from "sonner";
import { PhrasePractice } from "@/components/PhrasePractice";
import {
  generatePronunciationDrills,
  type PronunciationDrills,
} from "@/lib/pronunciation-drills.functions";
import {
  averageScore,
  summarizeCommonIssues,
  type PronunciationAttempt,
} from "@/lib/pronunciation-grade";

const MASTERY = 80;

/** Modo de treino: exercícios de repetição gerados a partir dos erros mais frequentes do aluno. */
export function PronunciationTraining({ attempts }: { attempts: PronunciationAttempt[] }) {
  const generate = useServerFn(generatePronunciationDrills);
  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState<PronunciationDrills | null>(null);
  const [index, setIndex] = useState(0);
  const [scores, setScores] = useState<Record<number, number>>({});

  const issues = summarizeCommonIssues(attempts);
  const canGenerate = issues.length > 0;

  async function handleGenerate() {
    try {
      setLoading(true);
      const result = await generate({
        data: {
          averageScore: averageScore(attempts),
          issues: issues.slice(0, 8).map((i) => ({ sound: i.sound, tip: i.tip, count: i.count })),
          attempts: attempts.slice(-12).map((a) => ({
            phrase: a.phrase,
            transcript: a.transcript,
            score: a.score,
          })),
        },
      });
      setPlan(result);
      setIndex(0);
      setScores({});
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Não foi possível gerar o treino.");
    } finally {
      setLoading(false);
    }
  }

  const drill = plan?.drills[index];
  const mastered = Object.values(scores).filter((s) => s >= MASTERY).length;

  return (
    <section className="mt-4 rounded-2xl border border-border bg-card/60 p-5 backdrop-blur">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="flex items-center gap-2 text-sm font-semibold text-foreground">
          <Dumbbell className="h-4 w-4 text-gold" /> Modo de treino direcionado
        </p>
        <button
          type="button"
          onClick={handleGenerate}
          disabled={loading || !canGenerate}
          className="inline-flex items-center gap-1.5 rounded-full bg-gold px-4 py-1.5 text-xs font-semibold text-primary-foreground transition hover:opacity-90 disabled:opacity-50"
        >
          {loading ? (
            <Loader2 className="h-3.5 w-3.5 animate-spin" />
          ) : plan ? (
            <RotateCcw className="h-3.5 w-3.5" />
          ) : (
            <Dumbbell className="h-3.5 w-3.5" />
          )}
          {loading ? "Generating…" : plan ? "Generate new practice" : "Practice my mistakes"}
        </button>
      </div>

      {!canGenerate && (
        <p className="mt-3 text-sm text-muted-foreground">
          Faça algumas tentativas acima: a IA usa os seus sons mais errados para montar frases de
          repetição sob medida.
        </p>
      )}

      {plan && drill && (
        <div className="mt-4 space-y-3">
          <p className="text-sm text-foreground/80">{plan.focus}</p>
          <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
            <span>
              Exercício {index + 1} de {plan.drills.length}
            </span>
            <span className="inline-flex items-center gap-1 text-gold">
              <CheckCircle2 className="h-3.5 w-3.5" /> {mastered} dominado
              {mastered === 1 ? "" : "s"} (≥ {MASTERY}%)
            </span>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {plan.drills.map((d, i) => {
              const s = scores[i];
              return (
                <button
                  key={d.en}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`h-7 w-7 rounded-full border text-[11px] font-semibold transition ${
                    i === index
                      ? "border-gold bg-gold/20 text-gold"
                      : s !== undefined && s >= MASTERY
                        ? "border-gold/40 bg-gold/10 text-gold"
                        : "border-border text-muted-foreground hover:border-gold/40"
                  }`}
                >
                  {i + 1}
                </button>
              );
            })}
          </div>

          <div className="rounded-xl border border-gold/25 p-3">
            <p className="text-xs tracking-wide text-gold uppercase">Som alvo: {drill.sound}</p>
            <p className="mt-1 text-xs text-muted-foreground">{drill.tip}</p>
            {drill.focusWords.length > 0 && (
              <p className="mt-1 text-xs text-foreground/80">
                Foque em: {drill.focusWords.join(" · ")}
              </p>
            )}
            <div className="mt-3">
              <PhrasePractice
                key={drill.en}
                en={drill.en}
                pt={drill.pt}
                onAttempt={(attempt) =>
                  setScores((prev) => ({
                    ...prev,
                    [index]: Math.max(prev[index] ?? 0, attempt.score),
                  }))
                }
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => setIndex((i) => Math.max(0, i - 1))}
              disabled={index === 0}
              className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-1.5 text-xs text-foreground/80 disabled:opacity-40"
            >
              <ChevronLeft className="h-3.5 w-3.5" /> Previous
            </button>
            <button
              type="button"
              onClick={() => setIndex((i) => Math.min(plan.drills.length - 1, i + 1))}
              disabled={index === plan.drills.length - 1}
              className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-1.5 text-xs text-foreground/80 disabled:opacity-40"
            >
              Next <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
