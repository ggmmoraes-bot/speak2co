import { AlertTriangle, Sparkles, Trophy } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import {
  averageScore,
  GRADE_TONE_CLASS,
  gradePronunciation,
  summarizeCommonIssues,
  type PronunciationAttempt,
} from "@/lib/pronunciation-grade";

/** Painel do Pronunciation Lab: nota média automática + erros mais comuns da sessão. */
export function PronunciationLabSummary({ attempts }: { attempts: PronunciationAttempt[] }) {
  const avg = averageScore(attempts);
  const grade = gradePronunciation(avg);
  const issues = summarizeCommonIssues(attempts);
  const best = attempts.reduce<PronunciationAttempt | null>(
    (top, a) => (!top || a.score > top.score ? a : top),
    null,
  );

  return (
    <section className="mt-6 rounded-2xl border border-gold/30 bg-card/70 p-5 backdrop-blur">
      <p className="flex items-center gap-2 text-sm font-semibold text-foreground">
        <Sparkles className="h-4 w-4 text-gold" /> Nota automática da sessão
      </p>

      {attempts.length === 0 ? (
        <p className="mt-3 text-sm text-muted-foreground">
          Grave sua primeira tentativa para receber a nota automática e o resumo dos erros mais
          comuns.
        </p>
      ) : (
        <>
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <span
              className={`flex h-16 w-16 flex-col items-center justify-center rounded-2xl border text-2xl font-bold ${GRADE_TONE_CLASS[grade.tone]}`}
            >
              {grade.letter}
            </span>
            <div className="min-w-[180px] flex-1">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold">
                  {grade.label} · {grade.score10}/10
                </span>
                <span className="font-bold text-gold">{avg}%</span>
              </div>
              <Progress value={avg} className="mt-2" />
              <p className="mt-2 text-xs text-muted-foreground">
                {attempts.length} tentativa{attempts.length > 1 ? "s" : ""} avaliada
                {attempts.length > 1 ? "s" : ""}
                {best ? ` · melhor: ${best.score}% em “${best.phrase}”` : ""}
              </p>
            </div>
          </div>

          <div className="mt-5">
            <p className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <AlertTriangle className="h-4 w-4 text-gold" /> Erros mais comuns
            </p>
            {issues.length === 0 ? (
              <p className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                <Trophy className="h-3.5 w-3.5 text-gold" /> Nenhum som problemático detectado até
                agora. Continue assim!
              </p>
            ) : (
              <ul className="mt-3 space-y-2">
                {issues.slice(0, 5).map((issue) => (
                  <li key={issue.sound} className="rounded-xl border border-border p-3 text-xs">
                    <span className="font-semibold text-gold">{issue.sound}</span>
                    <span className="ml-2 rounded-full border border-border px-2 py-0.5 text-[10px] text-muted-foreground">
                      {issue.count}x
                    </span>
                    <p className="mt-1 text-foreground/80">{issue.tip}</p>
                    <p className="mt-1 text-muted-foreground">Em: {issue.phrases.join(" · ")}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </>
      )}
    </section>
  );
}
