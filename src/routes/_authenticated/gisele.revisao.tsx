import { createFileRoute } from "@tanstack/react-router";
import { GiseleActivityScreen } from "@/components/gisele/GiseleActivityScreen";

export const Route = createFileRoute("/_authenticated/gisele/revisao")({
  component: () => (
    <GiseleActivityScreen
      kind="review"
      titleEn="Review something I learned"
      titlePt="Revisar algo que aprendi"
      intro="Spaced repetition is what makes it stick. Let's bring back what you practiced with me."
      ctaLabel="Review with me"
    />
  ),
});
