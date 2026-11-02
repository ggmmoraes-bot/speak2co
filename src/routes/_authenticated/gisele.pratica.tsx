import { createFileRoute } from "@tanstack/react-router";
import { GiseleActivityScreen } from "@/components/gisele/GiseleActivityScreen";

export const Route = createFileRoute("/_authenticated/gisele/pratica")({
  head: () => ({
    meta: [
      {"title": "Personalized Practice | GiseleAI | Speak2Co"},
      {"name": "description", "content": "Personalized Practice on Speak2Co: personalized English learning and practice."},
      {"property": "og:title", "content": "Personalized Practice | GiseleAI | Speak2Co"},
      {"property": "og:description", "content": "Personalized Practice on Speak2Co: personalized English learning and practice."},
      {"property": "og:type", "content": "website"},
      {"name": "twitter:card", "content": "summary_large_image"},
    ],
  }),
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
