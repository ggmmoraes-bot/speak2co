import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { GiseleActivityScreen } from "@/components/gisele/GiseleActivityScreen";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/_authenticated/gisele/real-life")({
  head: () => ({
    meta: [
      {"title": "Real-Life Practice | GiseleAI | Speak2Co"},
      {"name": "description", "content": "Real-Life Practice on Speak2Co: personalized English learning and practice."},
      {"property": "og:title", "content": "Real-Life Practice | GiseleAI | Speak2Co"},
      {"property": "og:description", "content": "Real-Life Practice on Speak2Co: personalized English learning and practice."},
      {"property": "og:type", "content": "website"},
      {"name": "twitter:card", "content": "summary_large_image"},
    ],
  }),
  component: RealLifePage,
});

const SITUATIONS = [
  { en: "Job interview", pt: "Entrevista de emprego" },
  { en: "Meeting", pt: "Reunião" },
  { en: "Presentation", pt: "Apresentação" },
  { en: "Small talk", pt: "Conversa informal" },
  { en: "Restaurant", pt: "Restaurante" },
  { en: "Hotel", pt: "Hotel" },
  { en: "Airport", pt: "Aeroporto" },
  { en: "Shopping", pt: "Compras" },
  { en: "Networking", pt: "Networking" },
  { en: "Business conversation", pt: "Conversa de negócios" },
  { en: "Social situations", pt: "Situações sociais" },
];

function RealLifePage() {
  const [situation, setSituation] = useState<string | null>(null);

  if (situation) {
    return (
      <div className="flex-1">
        <div className="mx-auto w-full max-w-3xl px-6 pt-8">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSituation(null)}
            className="rounded-full text-xs"
          >
            ← Choose another situation
          </Button>
        </div>
        <GiseleActivityScreen
          key={situation}
          kind="reallife"
          titleEn={`Real-Life Practice · ${situation}`}
          titlePt="Prática de situação real com a GiseleAI"
          intro="I'll play the other person in this situation. Answer as yourself, then I'll show your performance report."
          topic={situation}
          ctaLabel="Start the simulation"
        />
      </div>
    );
  }

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 space-y-6 px-6 py-10">
      <header className="space-y-1">
        <h1 className="text-2xl font-bold text-foreground">Practice a real-life situation</h1>
        <p className="text-sm italic text-muted-foreground">
          Escolha a situação — eu interpreto a outra pessoa, aqui mesmo na GiseleAI.
        </p>
      </header>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {SITUATIONS.map((s) => (
          <button
            key={s.en}
            type="button"
            onClick={() => setSituation(s.en)}
            className="rounded-xl border border-border/60 bg-secondary/25 p-4 text-left transition-colors hover:border-gold/50 hover:bg-secondary/50"
          >
            <p className="text-sm font-semibold text-foreground">{s.en}</p>
            <p className="text-xs italic text-muted-foreground">{s.pt}</p>
          </button>
        ))}
      </div>
    </main>
  );
}
