import { GiseleFeedbackCard } from "@/components/gisele/GiseleFeedbackCard";
import type { GiseleFeedback } from "@/lib/gisele-feedback-types";

/** Feedback da Live Lesson — reaproveita o cartão estruturado já existente. */
export function FeedbackCard({ feedback }: { feedback: GiseleFeedback }) {
  return <GiseleFeedbackCard feedback={feedback} />;
}
