import { createFileRoute } from "@tanstack/react-router";
import { GiseleActivityScreen } from "@/components/gisele/GiseleActivityScreen";

export const Route = createFileRoute("/_authenticated/gisele/writing")({
  head: () => ({
    meta: [
      {"title": "Writing Practice | GiseleAI | Speak2Co"},
      {"name": "description", "content": "Writing Practice on Speak2Co: personalized English learning and practice."},
      {"property": "og:title", "content": "Writing Practice | GiseleAI | Speak2Co"},
      {"property": "og:description", "content": "Writing Practice on Speak2Co: personalized English learning and practice."},
      {"property": "og:type", "content": "website"},
      {"name": "twitter:card", "content": "summary_large_image"},
    ],
  }),
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
