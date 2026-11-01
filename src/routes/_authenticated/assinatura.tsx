import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Infinity as InfinityIcon, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AltHeading } from "@/components/AltHeading";
import { SubscriptionEventsSection } from "@/components/SubscriptionEventsSection";
import { isSimulationMode } from "@/lib/subscription-simulation";
import { useAccess } from "@/lib/entitlements";
import {
  BRL,
  COMPLETE_PRODUCT,
  INDIVIDUAL_PRODUCTS,
  PLAN_BENEFITS,
  PLAN_META,
  isPlanKey,
} from "@/lib/subscription-plans";

export const Route = createFileRoute("/_authenticated/assinatura")({
  validateSearch: (search: Record<string, unknown>) => ({
    simulacao: isSimulationMode(search["simulacao"]) ? search["simulacao"] : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Meu acesso — Speak2Co" },
      {
        name: "description",
        content: "Veja os produtos Speak2Co que você possui com acesso vitalício e o histórico dos seus pagamentos.",
      },
      { property: "og:title", content: "Meu acesso — Speak2Co" },
      { property: "og:description", content: "Seus acessos vitalícios Speak2Co em um só lugar." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MyAccessPage,
});

/** Planos antigos (já não vendidos) seguem valendo para quem os contratou. */
const LEGACY = new Set(["essential", "premium", "signature"]);

function MyAccessPage() {
  const { data: access, isLoading } = useAccess();
  const planKey = isPlanKey(access?.planKey) ? access.planKey : "free";
  const features = access?.features ?? {};
  const hasComplete = planKey === "complete";
  const legacy = LEGACY.has(planKey);

  const owned = INDIVIDUAL_PRODUCTS.filter((p) => p.featureKey && features[p.featureKey]);
  const hasAnything = hasComplete || legacy || owned.length > 0;

  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-14">
      <header>
        <p className="text-sm tracking-[0.3em] text-accent uppercase">Speak2Co</p>
        <h1 className="mt-3 text-3xl font-bold md:text-4xl">
          <AltHeading text="Meu Acesso" />
        </h1>
        <p className="mt-3 text-muted-foreground">
          Seus produtos com acesso vitalício. Pagamento único: não há mensalidade nem renovação.
        </p>
      </header>

      <section className="mt-8 rounded-3xl border border-accent/40 bg-gradient-to-br from-accent/10 via-card to-card p-6 md:p-8">
        <h2 className="text-xl font-semibold text-foreground">Plataforma</h2>
        {isLoading ? (
          <p className="mt-3 text-muted-foreground">Carregando...</p>
        ) : hasComplete || legacy ? (
          <>
            <p className="mt-3 flex items-center gap-2 text-lg font-bold text-gold">
              <InfinityIcon className="h-5 w-5" />
              {hasComplete ? COMPLETE_PRODUCT.name : `Plano ${PLAN_META[planKey].name}`} — ativo
            </p>
            {legacy && (
              <p className="mt-1 text-sm text-muted-foreground">
                Você contratou este plano antes da mudança para acesso vitalício. Seus benefícios
                continuam garantidos.
              </p>
            )}
            <ul className="mt-4 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
              {PLAN_BENEFITS[planKey].map((b) => (
                <li key={b} className="flex gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> {b}
                </li>
              ))}
            </ul>
          </>
        ) : (
          <div className="mt-3">
            <p className="text-muted-foreground">
              Você está no acesso gratuito. Com o {COMPLETE_PRODUCT.name} você libera todos os cursos e
              recursos gerais por {BRL(COMPLETE_PRODUCT.price)}, em pagamento único.
            </p>
            <Button asChild className="btn-gold mt-5 rounded-full font-bold text-gold-ink uppercase">
              <Link to="/premium">Adquirir acesso vitalício</Link>
            </Button>
          </div>
        )}
      </section>

      <section className="mt-8 rounded-3xl border border-border bg-card p-6 md:p-8">
        <h2 className="text-xl font-semibold text-foreground">Produtos individuais</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {INDIVIDUAL_PRODUCTS.map((p) => {
            const has = Boolean(p.featureKey && features[p.featureKey]);
            const soon = p.checkoutKey === null;
            return (
              <li
                key={p.id}
                className={`flex items-center justify-between gap-3 rounded-2xl border p-4 ${
                  has ? "border-gold/50 bg-gold/5" : "border-border"
                }`}
              >
                <span className="font-semibold text-foreground">{p.name}</span>
                <span className={`flex items-center gap-1 text-xs font-semibold ${has ? "text-gold" : "text-muted-foreground"}`}>
                  {has ? (
                    <>
                      <InfinityIcon className="h-4 w-4" /> Vitalício
                    </>
                  ) : soon ? (
                    "Em breve"
                  ) : (
                    <>
                      <Lock className="h-3.5 w-3.5" /> {BRL(p.price)}
                    </>
                  )}
                </span>
              </li>
            );
          })}
        </ul>
        <Button asChild variant="outline" className="btn-gold-outline mt-6 rounded-full">
          <Link to="/premium">{hasAnything ? "Ver outros produtos" : "Ver produtos"}</Link>
        </Button>
      </section>

      <div className="mt-8">
        <SubscriptionEventsSection />
      </div>
    </main>
  );
}
