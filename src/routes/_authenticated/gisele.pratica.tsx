import { createFileRoute } from "@tanstack/react-router";
import { GiseleActivityScreen } from "@/components/gisele/GiseleActivityScreen";

export const Route = createFileRoute("/_authenticated/gisele/pratica")({
  component: () => (
    <GiseleActivityScreen
      kind="practice"
      titleEn="Practice for Me"
      titlePt="Prática personalizada"
      intro="I'll choose the activity based on your recent practice — and tell you why."
      ctaLabel="Practice for me"
    />
  ),
});
