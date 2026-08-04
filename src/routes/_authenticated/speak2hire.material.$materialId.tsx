import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, BookOpen, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FeatureGate } from "@/components/FeatureGate";
import { getMaterial, MATERIALS } from "@/lib/speak2hire-content";

export const Route = createFileRoute("/_authenticated/speak2hire/material/$materialId")({
  head: () => ({
    meta: [
      { title: "Material Speak2Hire — Speak2Co" },
      {
        name: "description",
        content:
          "Frameworks de entrevista em inglês do Speak2Hire: elevator pitch, método STAR, power words e guia S.O.S.",
      },
      { property: "og:title", content: "Material Speak2Hire" },
      {
        property: "og:description",
        content: "Estude os frameworks antes de simular sua entrevista em inglês.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GatedMaterialPage,
  errorComponent: ({ error }) => (
    <div role="alert" className="p-8 text-sm text-destructive">
      {error.message}
    </div>
  ),
  notFoundComponent: () => (
    <div className="p-8 text-sm text-muted-foreground">Material não encontrado.</div>
  ),
});

function GatedMaterialPage() {
  return (
    <FeatureGate
      feature="premium_materials"
      title="Materiais de preparação do Speak2Hire"
      benefit="Desbloqueie os frameworks de entrevista: elevator pitch, método STAR, power words e o guia S.O.S."
      requiredPlan="Essential"
    >
      <MaterialPage />
    </FeatureGate>
  );
}

function MaterialPage() {
  const { materialId } = Route.useParams();
  const material = getMaterial(materialId);
  if (!material) throw notFound();

  const others = MATERIALS.filter((m) => m.id !== material.id);

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-6 py-12">
        <Button asChild variant="ghost" size="sm" className="mb-6 -ml-2 rounded-full">
          <Link to="/speak2hire">
            <ArrowLeft className="mr-1 h-4 w-4" /> Speak2Hire
          </Link>
        </Button>

        <p className="flex items-center gap-2 text-xs tracking-widest text-muted-foreground uppercase">
          <BookOpen className="h-4 w-4" /> Material de porta de entrada
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-gold">{material.title}</h1>
        <p className="mt-1 text-sm text-muted-foreground">{material.subtitle}</p>
        <p className="mt-4 text-foreground/85">{material.summary}</p>

        <div className="mt-10 space-y-8">
          {material.sections.map((section) => (
            <section
              key={section.heading}
              className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur"
            >
              <h2 className="text-lg font-semibold text-foreground">{section.heading}</h2>
              {section.body && (
                <p className="mt-3 text-sm leading-relaxed text-foreground/80">{section.body}</p>
              )}
              {section.bullets && (
                <ul className="mt-3 space-y-2 text-sm text-foreground/80">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
              {section.pairs && (
                <div className="mt-3 space-y-3">
                  {section.pairs.map((pair) => (
                    <div key={pair.left} className="grid gap-2 sm:grid-cols-2">
                      <p className="flex gap-2 rounded-xl border border-border/60 bg-background/40 p-3 text-sm text-muted-foreground">
                        <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                        {pair.left}
                      </p>
                      <p className="flex gap-2 rounded-xl border border-gold/30 bg-background/40 p-3 text-sm text-foreground">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                        {pair.right}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>

        <div className="mt-12">
          <h2 className="text-xs tracking-widest text-muted-foreground uppercase">
            Continue estudando
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {others.map((other) => (
              <Link
                key={other.id}
                to="/speak2hire/material/$materialId"
                params={{ materialId: other.id }}
                className="rounded-xl border border-border bg-card/60 p-4 text-sm font-medium text-foreground/85 transition hover:border-gold/60"
              >
                {other.title}
              </Link>
            ))}
          </div>
          <Button
            asChild
            className="mt-6 rounded-full bg-gold font-semibold text-primary-foreground hover:opacity-90"
          >
            <Link to="/speak2hire">Ir para o simulador</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
