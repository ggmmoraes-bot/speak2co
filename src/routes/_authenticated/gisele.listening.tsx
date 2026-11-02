import { createFileRoute } from "@tanstack/react-router";
import { GiseleActivityScreen } from "@/components/gisele/GiseleActivityScreen";

export const Route = createFileRoute("/_authenticated/gisele/listening")({
  head: () => ({
    meta: [
      {"title": "Listening Practice | GiseleAI | Speak2Co"},
      {"name": "description", "content": "Listening Practice on Speak2Co: personalized English learning and practice."},
      {"property": "og:title", "content": "Listening Practice | GiseleAI | Speak2Co"},
      {"property": "og:description", "content": "Listening Practice on Speak2Co: personalized English learning and practice."},
      {"property": "og:type", "content": "website"},
      {"name": "twitter:card", "content": "summary_large_image"},
    ],
  }),
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
