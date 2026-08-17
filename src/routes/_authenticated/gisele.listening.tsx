import { createFileRoute } from "@tanstack/react-router";
import { GiseleActivityScreen } from "@/components/gisele/GiseleActivityScreen";

export const Route = createFileRoute("/_authenticated/gisele/listening")({
  component: () => (
    <GiseleActivityScreen
      kind="listening"
      titleEn="Improve my listening"
      titlePt="Melhorar minha compreensão oral"
      intro="I'll speak a short passage. Listen as many times as you need, then answer in English."
      ctaLabel="Play a listening practice"
    />
  ),
});
