import { createFileRoute } from "@tanstack/react-router";
import { GiseleActivityScreen } from "@/components/gisele/GiseleActivityScreen";

export const Route = createFileRoute("/_authenticated/gisele/desafio")({
  component: () => (
    <GiseleActivityScreen
      kind="challenge"
      titleEn="Today's Challenge"
      titlePt="O desafio de hoje"
      intro="A short, personalized challenge. Speak or write your answer and I'll give you feedback."
      ctaLabel="Challenge me"
    />
  ),
});
