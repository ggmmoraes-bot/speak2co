import { useCallback, useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, BookOpen, Download, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FeatureGate } from "@/components/FeatureGate";
import { PhrasePractice } from "@/components/PhrasePractice";
import { PronunciationLabSummary } from "@/components/PronunciationLabSummary";
import { PronunciationTraining } from "@/components/PronunciationTraining";
import type { PronunciationAttempt } from "@/lib/pronunciation-grade";
import {
  getTravelResource,
  TRAVEL_RESOURCE_CONTENT,
  type TravelResourceContent,
} from "@/lib/speak2travel-resources";
import { exportTravelMaterialToPdf } from "@/lib/travel-material-pdf";

export const Route = createFileRoute("/_authenticated/speak2travel/material/$resourceId")({
  loader: ({ params }) => {
    const resource = getTravelResource(params.resourceId);
    if (!resource) throw notFound();
    return { resource };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Material indisponível — Speak2Travel" }, { name: "robots", content: "noindex" }],
      };
    }
    const { resource } = loaderData;
    const description = `${resource.subtitle}. Ouça a pronúncia da IA, grave sua voz e receba a nota de precisão no Speak2Travel.`;
    return {
      meta: [
        { title: `${resource.title} — Speak2Travel` },
        { name: "description", content: description },
        { property: "og:title", content: `${resource.title} — Speak2Travel` },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: GatedMaterialPage,
});

function GatedMaterialPage() {
  return (
    <FeatureGate
      feature="premium_materials"
      title="Materiais complementares do Speak2Travel"
      benefit="Desbloqueie o Travel Vocabulary, Grammar, Pronunciation Lab, Survival English, Culture Tips e Pocket Dictionary com pronúncia da IA."
      requiredPlan="Essential"
    >
      <MaterialPage />
    </FeatureGate>
  );
}

function MaterialPage() {
  const { resource } = Route.useLoaderData() as { resource: TravelResourceContent };
  const total = resource.groups.reduce((sum, g) => sum + g.items.length, 0);
  const isLab = resource.id === "pronunciation-lab";
  const [attempts, setAttempts] = useState<PronunciationAttempt[]>([]);
  const [exporting, setExporting] = useState(false);
  const handleExport = useCallback(async () => {
    setExporting(true);
    try {
      await exportTravelMaterialToPdf(resource);
    } finally {
      setExporting(false);
    }
  }, [resource]);
  const handleAttempt = useCallback(
    (attempt: PronunciationAttempt) => setAttempts((prev) => [...prev, attempt]),
    [],
  );

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-6 py-12">
        <Button asChild variant="ghost" size="sm" className="mb-6 -ml-2 rounded-full">
          <Link to="/speak2travel">
            <ArrowLeft className="mr-1 h-4 w-4" /> Voltar ao Speak2Travel
          </Link>
        </Button>

        <header>
          <p className="text-xs tracking-widest text-muted-foreground uppercase">
            Material complementar
          </p>
          <h1 className="mt-1 text-3xl font-semibold text-gold">{resource.title}</h1>
          <p className="mt-1 text-sm text-muted-foreground">{resource.subtitle}</p>
          <p className="mt-4 max-w-2xl text-sm text-foreground/80">{resource.description}</p>
          <Button
            onClick={handleExport}
            disabled={exporting}
            className="mt-5 rounded-full"
            variant="secondary"
          >
            {exporting ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Download className="mr-2 h-4 w-4" />
            )}
            Baixar PDF para estudo
          </Button>
        </header>

        {isLab && (
          <>
            <PronunciationLabSummary attempts={attempts} />
            <PronunciationTraining attempts={attempts} />
          </>
        )}

        <section className="mt-6 rounded-2xl border border-border bg-card/60 p-5 backdrop-blur">
          <p className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <BookOpen className="h-4 w-4 text-gold" /> Como praticar ({total} itens)
          </p>
          <ol className="mt-3 space-y-1 text-sm text-muted-foreground">
            {resource.howTo.map((step, i) => (
              <li key={step}>
                {i + 1}. {step}
              </li>
            ))}
          </ol>
        </section>

        {resource.groups.map((group) => (
          <section key={group.id} className="mt-10">
            <h2 className="text-lg font-semibold text-gold">{group.title}</h2>
            {group.subtitle && (
              <p className="text-xs tracking-wide text-muted-foreground uppercase">
                {group.subtitle}
              </p>
            )}
            {group.intro && <p className="mt-2 text-sm text-foreground/80">{group.intro}</p>}
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {group.items.map((item) => (
                <PhrasePractice
                  key={item.en}
                  en={item.en}
                  pt={item.pt}
                  note={item.note}
                  onAttempt={isLab ? handleAttempt : undefined}
                />
              ))}
            </div>
          </section>
        ))}

        <section className="mt-12">
          <h2 className="text-lg font-semibold text-gold">Outras seções</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {TRAVEL_RESOURCE_CONTENT.filter((r) => r.id !== resource.id).map((r) => (
              <Link
                key={r.id}
                to="/speak2travel/material/$resourceId"
                params={{ resourceId: r.id }}
                className="rounded-full border border-primary/40 px-4 py-1.5 text-xs text-foreground/80 hover:border-gold/60"
              >
                {r.title}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
