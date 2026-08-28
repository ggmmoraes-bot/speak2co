import { STAGE_LABEL, type LiveStageKey } from "@/lib/live-lesson/script";

/** Indicador de etapa da aula ao vivo. */
export function LessonProgress({
  stages,
  current,
}: {
  stages: LiveStageKey[];
  current: number;
}) {
  const pct = Math.round(((current + 1) / stages.length) * 100);
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span className="font-semibold text-foreground">
          {STAGE_LABEL[stages[current] ?? "welcome"].en}
          <span className="ml-2 font-normal italic">{STAGE_LABEL[stages[current] ?? "welcome"].pt}</span>
        </span>
        <span>
          Step {current + 1} of {stages.length}
        </span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary">
        <div className="h-full rounded-full bg-gold transition-all" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
