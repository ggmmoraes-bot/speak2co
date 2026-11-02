import { createFileRoute } from "@tanstack/react-router";
import { GiseleActivityScreen } from "@/components/gisele/GiseleActivityScreen";

export const Route = createFileRoute("/_authenticated/gisele/revisao")({
  head: () => ({
    meta: [
      {"title": "Review | GiseleAI | Speak2Co"},
      {"name": "description", "content": "Review on Speak2Co: personalized English learning and practice."},
      {"property": "og:title", "content": "Review | GiseleAI | Speak2Co"},
      {"property": "og:description", "content": "Review on Speak2Co: personalized English learning and practice."},
      {"property": "og:type", "content": "website"},
      {"name": "twitter:card", "content": "summary_large_image"},
    ],
  }),
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
