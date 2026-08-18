import { useEffect, useState, type ReactNode } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { AltHeading } from "@/components/AltHeading";

export type LessonStep = {
  key: string;
  title: string;
  subtitle?: string;
  content: ReactNode;
};

/**
 * Experiência de aula em tela única: uma etapa por vez, com Previous/Next,
 * indicador de progresso e botão final de conclusão.
 * Componente genérico — reutilizável por qualquer curso ou Product Line.
 */
export function LessonPlayer({
  lessonTitle,
  lessonSubtitle,
  steps,
  finishLabel = "Complete Lesson",
  onFinish,
  finishExtra,
}: {
  lessonTitle: string;
  lessonSubtitle?: string;
  steps: LessonStep[];
  finishLabel?: string;
  onFinish: () => void | Promise<void>;
  finishExtra?: ReactNode;
}) {
  const [index, setIndex] = useState(0);

  // Abertura direta em uma etapa específica: #step3 (1-based).
  useEffect(() => {
    if (typeof window === "undefined") return;
    const match = /^#step(\d+)$/.exec(window.location.hash);
    if (!match) return;
    const wanted = Number(match[1]) - 1;
    if (wanted >= 0 && wanted < steps.length) setIndex(wanted);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const step = steps[Math.min(index, steps.length - 1)]!;
  const isFirst = index === 0;
  const isLast = index === steps.length - 1;
  const percent = Math.round(((index + 1) / steps.length) * 100);

  function go(next: number) {
    setIndex(next);
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", `#step${next + 1}`);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <div className="rounded-3xl border border-border bg-card/60 p-5 backdrop-blur sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <p className="text-xs font-semibold tracking-wide text-gold uppercase">{lessonTitle}</p>
          {lessonSubtitle && (
            <p className="text-[11px] text-muted-foreground italic">{lessonSubtitle}</p>
          )}
        </div>
        <span className="rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-bold text-gold tabular-nums">
          Step {index + 1} of {steps.length}
        </span>
      </div>
      <Progress className="mt-3" value={percent} />

      <div className="mt-5">
        <h2 className="text-xl font-semibold sm:text-2xl">
          <AltHeading text={step.title} />
        </h2>
        {step.subtitle && (
          <p className="mt-0.5 text-xs text-muted-foreground italic">{step.subtitle}</p>
        )}
        <div className="mt-4 space-y-4">{step.content}</div>
      </div>

      <nav className="mt-8 flex items-center justify-between gap-3 border-t border-border pt-5">
        <button
          type="button"
          onClick={() => go(index - 1)}
          disabled={isFirst}
          className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold text-foreground/80 transition hover:border-gold/60 disabled:invisible"
        >
          <ArrowLeft className="h-4 w-4" /> Previous
        </button>
        {isLast ? (
          <button
            type="button"
            onClick={() => void onFinish()}
            className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2 text-sm font-bold text-primary-foreground transition hover:opacity-90"
          >
            <CheckCircle2 className="h-4 w-4" /> {finishLabel}
          </button>
        ) : (
          <button
            type="button"
            onClick={() => go(index + 1)}
            className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2 text-sm font-bold text-primary-foreground transition hover:opacity-90"
          >
            Next <ArrowRight className="h-4 w-4" />
          </button>
        )}
      </nav>

      {isLast && finishExtra && <div className="mt-4">{finishExtra}</div>}
    </div>
  );
}
