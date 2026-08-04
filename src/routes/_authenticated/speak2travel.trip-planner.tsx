import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { ArrowLeft, Loader2, Sparkles, Volume2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { speakText } from "@/lib/voice-client";
import { generateTripPlan, type TripPlan } from "@/lib/trip-planner.functions";

/** Extrai o trecho em inglês (entre aspas) quando o texto vem em português. */
function englishPart(text: string) {
  const quoted = text.match(/["“'']([^"”'']{3,})["”'']/);
  return (quoted?.[1] ?? text).trim();
}

/** Botão de pronúncia da IA para um trecho em inglês. */
function SpeakButton({ text, label = "Ouvir a IA" }: { text: string; label?: string }) {
  const [playing, setPlaying] = useState(false);
  return (
    <button
      type="button"
      aria-label={`Ouvir pronúncia: ${text}`}
      onClick={async () => {
        try {
          setPlaying(true);
          await speakText(text);
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
          "Informe destino e dias de viagem e receba vocabulário, expressões, clima, o que levar e um roteiro de estudo em inglês.",
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
  const [days, setDays] = useState("7");
  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState<TripPlan | null>(null);

  async function handleGenerate() {
    if (destination.trim().length < 2) {
      toast.error("Informe o destino da viagem.");
      return;
    }
    try {
      setLoading(true);
      const result = await generate({
        data: { destination: destination.trim(), days: Number(days) || 7 },
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
          Informe destino e duração: a IA monta o vocabulário, as expressões, o clima, o que levar
          e um roteiro de estudo para os dias antes da viagem.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-[1fr_120px_auto]">
          <Input
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="Destino — ex: New York"
          />
          <Input
            value={days}
            onChange={(e) => setDays(e.target.value.replace(/\D/g, "").slice(0, 2))}
            placeholder="Dias"
            inputMode="numeric"
          />
          <Button
            onClick={handleGenerate}
            disabled={loading}
            className="rounded-full bg-gold font-semibold text-primary-foreground hover:opacity-90"
          >
            {loading ? (
              <Loader2 className="mr-1 h-4 w-4 animate-spin" />
            ) : (
              <Sparkles className="mr-1 h-4 w-4" />
            )}
            {loading ? "Montando..." : "Gerar plano"}
          </Button>
        </div>

        {plan && (
          <section className="mt-10 space-y-6">
            <div className="rounded-2xl border border-gold/40 bg-card/60 p-6 backdrop-blur">
              <p className="text-xs tracking-widest text-muted-foreground uppercase">Destino</p>
              <p className="mt-1 text-2xl font-semibold text-gold">{plan.destination}</p>
              <p className="mt-3 text-sm text-foreground/80">{plan.overview}</p>
              <p className="mt-3 text-sm text-foreground/80">
                <span className="text-muted-foreground">Clima: </span>
                {plan.weather}
              </p>
            </div>

            <ListCard title="O que levar" items={plan.packing} />

            <div className="rounded-2xl border border-border bg-card/60 p-5 backdrop-blur">
              <p className="text-xs tracking-widest text-muted-foreground uppercase">
                Vocabulário
              </p>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {plan.vocabulary.map((word) => (
                  <li
                    key={word.term}
                    className="flex items-start justify-between gap-2 text-sm text-foreground/80"
                  >
                    <span>
                      <span className="font-semibold text-foreground">{word.term}</span> —{" "}
                      {word.meaning}
                    </span>
                    <SpeakButton text={word.term} label="Ouvir" />
                  </li>
                ))}
              </ul>
            </div>

            <ListCard title="Expressões" items={plan.expressions} speak />
            <ListCard title="Situações prováveis" items={plan.likelySituations} speak />

            <div className="rounded-2xl border border-border bg-card/60 p-5 backdrop-blur">
              <p className="text-xs tracking-widest text-muted-foreground uppercase">
                Roteiro de estudo
              </p>
              <ul className="mt-3 space-y-3">
                {plan.studyPlan.map((item) => (
                  <li key={item.day} className="text-sm text-foreground/80">
                    <p className="font-semibold text-gold">{item.day}</p>
                    <p>{item.focus}</p>
                    <p className="text-muted-foreground">{item.task}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

function ListCard({
  title,
  items,
  speak = false,
}: {
  title: string;
  items: string[];
  speak?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card/60 p-5 backdrop-blur">
      <p className="text-xs tracking-widest text-muted-foreground uppercase">{title}</p>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start justify-between gap-2 text-sm text-foreground/80"
          >
            <span>{item}</span>
            {speak && <SpeakButton text={englishPart(item)} label="Ouvir" />}
          </li>
        ))}
      </ul>
    </div>
  );
}
