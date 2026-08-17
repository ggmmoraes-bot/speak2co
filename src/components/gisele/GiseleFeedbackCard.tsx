import { ArrowRight, CheckCircle2, Target } from "lucide-react";
import type { GiseleFeedback } from "@/lib/gisele-feedback-types";

/**
 * Cartão de feedback reutilizável da GiseleAI — usado depois de conversas,
 * simulações, desafios, listening e writing. Tudo permanece dentro da GiseleAI.
 */
export function GiseleFeedbackCard({ feedback }: { feedback: GiseleFeedback }) {
  const dimensions = [
    { label: "Pronunciation", value: feedback.pronunciation },
    { label: "Fluency", value: feedback.fluency },
    { label: "Grammar", value: feedback.grammar },
    { label: "Vocabulary", value: feedback.vocabulary },
    { label: "Naturalness", value: feedback.naturalness },
  ];

  return (
    <section className="relative overflow-hidden rounded-2xl border border-gold/30 bg-secondary/30 p-6">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: "var(--gradient-gold)" }}
      />
      <h3 className="text-lg font-semibold text-foreground">Your Feedback</h3>
      <p className="mb-4 text-xs italic text-muted-foreground">
        Feedback da GiseleAI — orientação, não nota.
      </p>

      <div className="grid gap-3 md:grid-cols-2">
        <div className="rounded-xl border border-border/60 bg-background/40 p-4">
          <p className="mb-1 flex items-center gap-2 text-sm font-semibold text-foreground">
            <CheckCircle2 className="h-4 w-4 icon-gold" /> What you did well
          </p>
          <p className="text-sm text-muted-foreground">{feedback.whatYouDidWell}</p>
        </div>
        <div className="rounded-xl border border-border/60 bg-background/40 p-4">
          <p className="mb-1 flex items-center gap-2 text-sm font-semibold text-foreground">
            <Target className="h-4 w-4 icon-gold" /> Let&apos;s improve
          </p>
          <p className="text-sm text-muted-foreground">{feedback.letsImprove}</p>
        </div>
      </div>

      <dl className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {dimensions.map((d) => (
          <div key={d.label} className="rounded-xl border border-border/50 bg-background/30 p-3">
            <dt className="text-xs font-semibold uppercase tracking-wide text-gold">{d.label}</dt>
            <dd className="text-sm text-muted-foreground">{d.value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-3 rounded-xl border border-gold/30 bg-gold/5 p-4">
        <p className="mb-1 flex items-center gap-2 text-sm font-semibold text-foreground">
          <ArrowRight className="h-4 w-4 icon-gold" /> Next Step
        </p>
        <p className="text-sm text-muted-foreground">{feedback.nextStep}</p>
      </div>
    </section>
  );
}
