import { createFileRoute } from "@tanstack/react-router";
import { GiseleActivityScreen } from "@/components/gisele/GiseleActivityScreen";

export const Route = createFileRoute("/_authenticated/gisele/desafio")({
  head: () => ({
    meta: [
      {"title": "Today’s Challenge | GiseleAI | Speak2Co"},
      {"name": "description", "content": "Today’s Challenge on Speak2Co: personalized English learning and practice."},
      {"property": "og:title", "content": "Today’s Challenge | GiseleAI | Speak2Co"},
      {"property": "og:description", "content": "Today’s Challenge on Speak2Co: personalized English learning and practice."},
      {"property": "og:type", "content": "website"},
      {"name": "twitter:card", "content": "summary_large_image"},
    ],
  }),
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
