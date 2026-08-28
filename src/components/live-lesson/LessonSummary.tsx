import { Link } from "@tanstack/react-router";
import { CheckCircle2, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { CourseLevel } from "@/lib/live-lesson/script";
import { COURSE_ROUTE } from "@/lib/live-lesson/units";

/** Fechamento da aula: o que foi praticado, confiança e próximos passos. */
export function LessonSummary({
  course,
  practiced,
  toReview,
  encouragement,
  confidence,
  onConfidence,
  onRestart,
}: {
  course: CourseLevel;
  practiced: string[];
  toReview: string[];
  encouragement: string;
  confidence: number | null;
  onConfidence: (value: number) => void;
  onRestart: () => void;
}) {
  return (
    <section className="space-y-4 rounded-2xl border border-gold/30 bg-secondary/30 p-6">
      <p className="flex items-center gap-2 text-lg font-semibold text-foreground">
        <CheckCircle2 className="h-5 w-5 text-gold" /> Lesson complete
      </p>
      <p className="text-sm text-foreground">{encouragement}</p>

      <div className="grid gap-3 md:grid-cols-2">
        <div className="rounded-xl border border-border/60 bg-background/40 p-4">
          <p className="text-sm font-semibold text-foreground">What you practiced</p>
          <ul className="mt-1 list-inside list-disc text-sm text-muted-foreground">
            {practiced.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-border/60 bg-background/40 p-4">
          <p className="text-sm font-semibold text-foreground">To review</p>
          <ul className="mt-1 list-inside list-disc text-sm text-muted-foreground">
            {toReview.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <p className="text-sm font-semibold text-foreground">How confident do you feel?</p>
        <p className="text-xs italic text-muted-foreground">Como você se sente com este conteúdo?</p>
        <div className="mt-2 flex gap-2">
          {[1, 2, 3, 4, 5].map((n) => (
            <Button
              key={n}
              size="sm"
              variant={confidence === n ? "default" : "outline"}
              onClick={() => onConfidence(n)}
              className="h-9 w-9 rounded-full p-0 text-xs"
            >
              {n}
            </Button>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <Button size="sm" variant="outline" onClick={onRestart} className="gap-1 rounded-full text-xs">
          <RotateCcw className="h-3.5 w-3.5" /> Repeat the lesson
        </Button>
        <Button asChild size="sm" className="btn-gold rounded-full text-xs font-semibold">
          <Link to={COURSE_ROUTE[course]}>Back to the course</Link>
        </Button>
      </div>
    </section>
  );
}
