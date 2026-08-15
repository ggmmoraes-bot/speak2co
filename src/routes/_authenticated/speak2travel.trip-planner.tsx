import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { ArrowLeft, Globe, Loader2, Sparkles, Volume2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { speakText } from "@/lib/voice-client";
import { generateTripPlan, type TripPlan } from "@/lib/trip-planner.functions";

/** Vozes distintas para cada personagem do diálogo. */
const TRAVELER_VOICE = "nova";
const LOCAL_VOICE = "onyx";

/** Botão de pronúncia da IA para um trecho em inglês. */
function SpeakButton({
  text,
  label = "Listen",
  voice,
}: {
  text: string;
  label?: string;
  voice?: string;
}) {
  const [playing, setPlaying] = useState(false);
  return (
    <button
      type="button"
      aria-label={`Ouvir pronúncia: ${text}`}
      onClick={async () => {
        try {
          setPlaying(true);
          await speakText(text, voice ? { voice, provider: "openai" } : {});
        } catch (e) {
          toast.error(e instanceof Error ? e.message : "Não foi possível tocar o áudio.");
        } finally {
          setPlaying(false);
        }
      }}
      disabled={playing}
      className="inline-flex shrink-0 items-center gap-1 rounded-full border border-primary/40 px-2 py-0.5 text-[11px] text-foreground/80 transition hover:border-gold/60 disabled:opacity-60"
    >
      {playing ? (
        <Loader2 className="h-3 w-3 animate-spin" />
      ) : (
        <Volume2 className="h-3 w-3" />
      )}
      {label}
    </button>
  );
}

export const Route = createFileRoute("/_authenticated/speak2travel/trip-planner")({
  head: () => ({
    meta: [
      { title: "Trip Planner — Speak2Travel" },
      {
        name: "description",
        content:
          "Informe destino e datas da viagem e receba um English Survival & Travel Plan com vocabulário, aeroporto, emergências, clima, comidas típicas e restaurante.",
      },
      { property: "og:title", content: "Trip Planner — Speak2Travel" },
      {
        property: "og:description",
        content: "Preparação de inglês sob medida para o seu destino, com IA da Speak2Co.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TripPlannerPage,
});

function TripPlannerPage() {
  const generate = useServerFn(generateTripPlan);
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState<TripPlan | null>(null);

  async function handleGenerate() {
    if (destination.trim().length < 2) {
      toast.error("Informe o destino da viagem.");
      return;
    }
    if (!startDate || !endDate) {
      toast.error("Informe as datas da viagem.");
      return;
    }
    try {
      setLoading(true);
      setPlan(null);
      const result = await generate({
        data: { destination: destination.trim(), startDate, endDate },
      });
      setPlan(result);
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Não foi possível gerar seu Trip Planner.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-6 py-12">
        <Button asChild variant="ghost" size="sm" className="mb-6 -ml-2 rounded-full">
          <Link to="/speak2travel">
            <ArrowLeft className="mr-1 h-4 w-4" /> Voltar ao Speak2Travel
          </Link>
        </Button>

        <h1 className="text-3xl font-semibold text-gold">Trip Planner</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Informe destino e datas: a IA monta seu English Survival &amp; Travel Plan personalizado,
          com pronúncia da IA em cada frase.
        </p>

        <div className="mt-6 flex items-start gap-3 rounded-2xl border border-gold/40 bg-card/50 p-4 backdrop-blur">
          <Globe className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
          <div>
            <p className="text-sm font-semibold text-foreground">
              Trip Planner is available for destinations in English-speaking countries.
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              O Trip Planner está disponível para destinos em países de língua inglesa.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="destination" className="text-xs tracking-widest uppercase">
              Where are you going?
            </Label>
            <Input
              id="destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="Destination — ex: New York, USA"
            />
          </div>

          <div className="grid gap-2">
            <Label className="text-xs tracking-widest uppercase">Travel dates</Label>
            <div className="grid gap-3 sm:grid-cols-2">
              <Input
                aria-label="Data de ida"
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
              <Input
                aria-label="Data de volta"
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
          </div>

          <Button
            onClick={handleGenerate}
            disabled={loading}
            className="w-full rounded-full bg-gold font-semibold text-primary-foreground hover:opacity-90 sm:w-auto sm:justify-self-start"
          >
            {loading ? (
              <Loader2 className="mr-1 h-4 w-4 animate-spin" />
            ) : (
              <Sparkles className="mr-1 h-4 w-4" />
            )}
            {loading ? "Generating..." : "Generate plan"}
          </Button>
        </div>

        {plan && (
          <section className="mt-10 space-y-6">
            <div className="rounded-2xl border border-gold/40 bg-card/60 p-6 backdrop-blur">
              <p className="text-xs tracking-widest text-muted-foreground uppercase">Destination</p>
              <p className="mt-1 text-2xl font-semibold text-gold">
                {plan.destination}
                {plan.country ? <span className="text-foreground"> · {plan.country}</span> : null}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">{plan.tripDates}</p>
              {plan.overview && (
                <p className="mt-3 text-sm text-foreground/80">{plan.overview}</p>
              )}
            </div>

            <Accordion type="multiple" className="grid gap-3">
              {plan.sections.map((section) => (
                <AccordionItem
                  key={section.id}
                  value={section.id}
                  className="rounded-2xl border border-border bg-card/60 px-5 backdrop-blur"
                >
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="flex flex-col">
                      <span className="text-sm font-semibold text-gold">{section.titleEn}</span>
                      <span className="text-xs text-muted-foreground">{section.titlePt}</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    {section.intro && (
                      <p className="mb-3 text-sm text-muted-foreground">{section.intro}</p>
                    )}
                    <ul className="grid gap-2">
                      {section.items.map((item, index) => (
                        <li
                          key={`${section.id}-${index}`}
                          className="flex items-start justify-between gap-3 rounded-xl border border-border/60 bg-background/40 px-3 py-2 text-sm"
                        >
                          <span className="min-w-0">
                            <span className="font-medium text-foreground">{item.en}</span>
                            {item.pt && (
                              <span className="block text-xs text-muted-foreground">{item.pt}</span>
                            )}
                          </span>
                          <SpeakButton text={item.en} />
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        )}
      </div>
    </main>
  );
}
