import { createFileRoute } from "@tanstack/react-router";
import { GiseleActivityScreen } from "@/components/gisele/GiseleActivityScreen";

export const Route = createFileRoute("/_authenticated/gisele/writing")({
  component: () => (
    <GiseleActivityScreen
      kind="writing"
      titleEn="Improve my writing"
      titlePt="Melhorar minha escrita"
      intro="Write your answer and I'll show you how to make it clearer and more natural."
      ctaLabel="Give me a writing prompt"
    />
  ),
});
