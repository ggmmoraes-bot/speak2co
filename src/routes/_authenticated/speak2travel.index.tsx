import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  CheckCircle2,
  Compass,
  LifeBuoy,
  Lightbulb,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/speak2travel.asset.json";
import {
  SURVIVAL_PHRASES,
  TRAVEL_BRIEFING,
  TRAVEL_RESOURCES,
  TRAVEL_TOOLS,
  TRAVEL_TRACKS,
} from "@/lib/speak2travel-content";
import { listTravelProgress } from "@/lib/speak2travel-progress.functions";
import { BrandText } from "@/components/BrandText";

export const Route = createFileRoute("/_authenticated/speak2travel/")({
  head: () => ({
    meta: [
      { title: "Speak2Travel — 10 módulos de inglês para viagens" },
      {
        name: "description",
        content:
          "Do planejamento ao retorno: aeroporto, avião, imigração, hotel, transporte, restaurante, compras, passeios e emergências em inglês, com IA da Speak2Co.",
      },
      { property: "og:title", content: "Speak2Travel — Your passport to confidence" },
      {
        property: "og:description",
        content:
          "10 módulos de situações reais de viagem em inglês, material complementar e Trip Planner com IA.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Speak2TravelHub,
});

function Speak2TravelHub() {
  const loadProgress = useServerFn(listTravelProgress);
  const [progress, setProgress] = useState<Record<string, { completed: boolean; answered: number }>>(
    {},
  );

  useEffect(() => {
    let active = true;
    loadProgress()
      .then((rows) => {
        if (!active) return;
        const map: Record<string, { completed: boolean; answered: number }> = {};
        for (const row of rows) {
          map[row.trackId] = {
            completed: row.completed,
            answered: Object.values(row.answers ?? {}).filter((a) => a.trim().length > 0).length,
          };
        }
        setProgress(map);
      })
      .catch(() => undefined);
    return () => {
      active = false;
    };
  }, [loadProgress]);

  const completedCount = TRAVEL_TRACKS.filter((t) => progress[t.id]?.completed).length;

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <Button asChild variant="ghost" size="sm" className="mb-6 -ml-2 rounded-full">
          <Link to="/painel">
            <ArrowLeft className="mr-1 h-4 w-4" /> Back to dashboard
          </Link>
        </Button>

        <header className="flex flex-wrap items-center gap-5">
          <img
            src={logo.url}
            alt="Speak2Travel"
            className="h-20 w-20 rounded-2xl object-cover"
          />
          <div>
            <h1 className="text-3xl font-semibold"><BrandText text="Speak2Travel" /></h1>
            <p className="text-sm text-muted-foreground">
              Your passport to confidence. Anywhere in the world.
            </p>
          </div>
        </header>

        <p className="mt-6 max-w-2xl text-sm text-foreground/80">
          {TRAVEL_BRIEFING.intro}
          <span className="mt-1 block text-xs text-muted-foreground italic">
            {TRAVEL_BRIEFING.introPt}
          </span>
        </p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {TRAVEL_TOOLS.map((tool) => (
            <li
              key={tool}
              className="rounded-full border border-primary/40 px-3 py-1 text-xs text-foreground/80"
            >
              {tool}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button
            asChild
            className="rounded-full bg-gold font-semibold text-primary-foreground hover:opacity-90"
          >
            <Link to="/speak2travel/trip-planner">
              <Sparkles className="mr-1 h-4 w-4" /> Open Trip Planner
            </Link>
          </Button>
          <p className="text-xs tracking-widest text-muted-foreground uppercase">
            {completedCount} de {TRAVEL_TRACKS.length} módulos concluídos
          </p>
        </div>

        <section className="mt-12">
          <h2 className="flex items-center gap-2 text-lg font-semibold text-gold">
            <Compass className="h-5 w-5" /> Os 10 módulos
          </h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {TRAVEL_TRACKS.map((track) => {
              const state = progress[track.id];
              return (
                <div
                  key={track.id}
                  className="rounded-2xl border border-border bg-card/60 p-5 backdrop-blur transition hover:border-gold/60"
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-xs tracking-widest text-muted-foreground uppercase">
                      Módulo {track.module}
                    </p>
                    {state?.completed ? (
                      <span className="flex items-center gap-1 text-xs text-primary">
                        <CheckCircle2 className="h-4 w-4" /> Concluído
                      </span>
                    ) : state?.answered ? (
                      <span className="text-xs text-muted-foreground">Em andamento</span>
                    ) : null}
                  </div>
                  <Link
                    to="/speak2travel/modulo/$moduleId"
                    params={{ moduleId: track.id }}
                    className="mt-2 block text-lg font-semibold text-gold"
                  >
                    {track.title}
                  </Link>
                  <p className="text-xs tracking-wide text-muted-foreground uppercase">
                    {track.subtitle} · {track.prompts.length} situações
                  </p>
                  <p className="mt-3 text-sm text-foreground/80">{track.description}</p>
                  {track.priority && (
                    <p className="mt-3 inline-flex items-center gap-1 rounded-full border border-gold/40 px-3 py-1 text-xs text-gold">
                      <LifeBuoy className="h-3.5 w-3.5" /> Módulo prioritário
                    </p>
                  )}
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Link
                      to="/speak2travel/modulo/$moduleId"
                      params={{ moduleId: track.id }}
                      className="rounded-full bg-gold px-4 py-1.5 text-xs font-semibold text-primary-foreground hover:opacity-90"
                    >
                      Practice
                    </Link>
                    <Link
                      to="/speak2travel/revisao/$moduleId"
                      params={{ moduleId: track.id }}
                      className="rounded-full border border-primary/40 px-4 py-1.5 text-xs text-foreground/80 hover:border-gold/60"
                    >
                      Review ({track.vocabulary.length} cards)
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="flex items-center gap-2 text-lg font-semibold text-gold">
            <Lightbulb className="h-5 w-5" /> Material complementar
          </h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {TRAVEL_RESOURCES.map((resource) => (
              <Link
                key={resource.id}
                to="/speak2travel/material/$resourceId"
                params={{ resourceId: resource.id }}
                className="block rounded-2xl border border-border bg-card/60 p-5 backdrop-blur transition hover:border-gold/60"
              >
                <p className="font-semibold text-foreground">{resource.title}</p>
                <p className="text-xs tracking-wide text-muted-foreground uppercase">
                  {resource.subtitle}
                </p>
                <p className="mt-3 text-sm text-foreground/80">{resource.description}</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {resource.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-primary/30 px-2.5 py-0.5 text-xs text-muted-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 inline-flex rounded-full bg-gold px-4 py-1.5 text-xs font-semibold text-primary-foreground">
                  Practice with AI audio
                </p>
              </Link>
            ))}
          </div>

        </section>

        <section className="mt-12">
          <h2 className="flex items-center gap-2 text-lg font-semibold text-gold">
            <LifeBuoy className="h-5 w-5" /> Preciso de ajuda — frases rápidas
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Mostre a frase ao atendente ou leia em voz alta. Salve esta página nos favoritos antes
            de viajar.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {SURVIVAL_PHRASES.map((phrase) => (
              <div
                key={phrase.en}
                className="rounded-2xl border border-border bg-card/60 p-4 backdrop-blur"
              >
                <p className="text-base text-foreground">{phrase.en}</p>
                <p className="mt-1 text-xs text-muted-foreground">{phrase.pt}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
