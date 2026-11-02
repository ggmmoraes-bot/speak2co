import { createFileRoute, Link } from "@tanstack/react-router";

import { useMutation, useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { Check, Flag, History, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { startMercadoPagoCheckout } from "@/lib/subscriptions.functions";
import { getMyCheckoutPricing } from "@/lib/benefits.functions";
import { PlanPrice } from "@/components/PlanPrice";
import { PLAN_META } from "@/lib/subscription-plans";

type UpgradeFeature = "marcos" | "ajustes" | "historico";

const FEATURE_COPY: Record<UpgradeFeature, { title: string; description: string }> = {
  marcos: {
    title: "Marcos de evolução",
    description:
      "Acompanhe cada conquista do seu plano e veja, semana a semana, o que já foi dominado.",
  },
  ajustes: {
    title: "Ajustes do plano com IA",
    description:
      "Peça à IA para reescrever semanas inteiras do seu plano com base no seu ritmo e nos seus resultados.",
  },
  historico: {
    title: "Histórico de versões",
    description:
      "Volte para qualquer versão anterior do seu plano de estudos e compare a evolução do roteiro.",
  },
};

export const Route = createFileRoute("/_authenticated/upgrade/essential")({
  validateSearch: (search: Record<string, unknown>): { feature?: UpgradeFeature } => {
    const value = search["feature"];
    return value === "marcos" || value === "ajustes" || value === "historico"
      ? { feature: value }
      : {};
  },
  head: () => ({
    meta: [
      { title: "Speak2Co All Access — acesso vitalício" },
      {
        name: "description",
        content:
          "Libere marcos de evolução, ajustes do plano com IA e histórico com o Speak2Co All Access: pagamento único e acesso vitalício.",
      },
      { property: "og:title", content: "Speak2Co All Access — acesso vitalício" },
      {
        property: "og:description",
        content:
          "Desbloqueie o plano de estudos completo com o Speak2Co All Access, pagamento único.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: UpgradeEssentialPage,
});

function UpgradeEssentialPage() {
  const feature = Route.useSearch().feature as UpgradeFeature | undefined;
  const checkout = useServerFn(startMercadoPagoCheckout);
  const fetchPricing = useServerFn(getMyCheckoutPricing);
  const { data: pricingData } = useQuery({
    queryKey: ["my-checkout-pricing"],
    queryFn: () => fetchPricing(),
  });
  const pricing = pricingData?.pricing?.["complete_lifetime" as never];

  const mutation = useMutation({
    mutationFn: () =>
      checkout({
        data: {
          planKey: "complete_lifetime" as const,
          origin: window.location.origin,
        },
      }),
    onSuccess: (result) => {
      window.location.href = result.checkoutUrl;
    },
    onError: (error: Error) => toast.error(error.message),
  });

  const focus = feature ? FEATURE_COPY[feature] : null;

  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-14">
      <p className="text-sm uppercase tracking-[0.3em] text-gold">Speak2Co All Access</p>
      <h1 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
        {focus ? `Libere ${focus.title.toLowerCase()}` : "Libere seu plano de estudos completo"}
      </h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        {focus
          ? focus.description
          : "O plano Gratuito é uma degustação. Com o Speak2Co All Access você recebe o plano inteiro, com marcos, ajustes por IA e histórico."}
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {(Object.keys(FEATURE_COPY) as UpgradeFeature[]).map((key) => {
          const item = FEATURE_COPY[key];
          const Icon = key === "marcos" ? Flag : key === "ajustes" ? Sparkles : History;
          return (
            <div
              key={key}
              className={`rounded-2xl border p-5 backdrop-blur ${
                feature === key ? "border-gold bg-gold/10" : "border-border bg-card/60"
              }`}
            >
              <Icon className="h-5 w-5 text-gold" />
              <p className="mt-3 font-semibold text-foreground">{item.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
            </div>
          );
        })}
      </div>

      <section className="mt-10 rounded-2xl border border-gold/40 bg-card/60 p-8 backdrop-blur">
        <div className="flex flex-col items-center text-center">
          <span className="rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold text-gold">
            Acesso vitalício
          </span>
          <div className="mt-4">
            <PlanPrice
              total={PLAN_META.complete.yearlyPrice}
              discountedTotal={pricing?.finalAmount ?? null}
              align="center"
            />
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            Pagamento único · sem mensalidade · sem renovação
          </p>
        </div>



        <ul className="mx-auto mt-6 grid max-w-md gap-2 text-sm text-muted-foreground">
          {[
            "Todas as semanas do plano de estudos",
            "Marcos de evolução completos",
            "Ajustes do plano com IA e travamento de semanas",
            "Histórico de versões do plano",
            "Exercícios diários e quizzes",
          ].map((perk) => (
            <li key={perk} className="flex items-start gap-2">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              {perk}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button
            disabled={mutation.isPending}
            onClick={() => mutation.mutate()}
            className="rounded-full bg-gold px-8 font-semibold text-primary-foreground hover:opacity-90"
          >
            {mutation.isPending ? (
              "Opening checkout…"
            ) : (
              <LifetimeCta primary />
            )}
          </Button>
          <Button asChild variant="outline" className="rounded-full">
            <Link to="/premium">View all options</Link>
          </Button>
        </div>
        <p className="mt-4 text-center text-xs text-muted-foreground">
          Pagamento em reais com Pix, boleto ou cartão pelo Mercado Pago.
        </p>
      </section>
    </main>
  );
}
