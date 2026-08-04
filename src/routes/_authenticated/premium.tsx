import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { getMySubscription, startMercadoPagoCheckout } from "@/lib/subscriptions.functions";

export const Route = createFileRoute("/_authenticated/premium")({
  head: () => ({
    meta: [
      { title: "Assinatura Premium — Speak2Co" },
      {
        name: "description",
        content:
          "Assine o Speak2Co Premium com Pix, boleto ou cartão pelo Mercado Pago e libere o professor de IA, o Speak2Hire e o Speak2Travel.",
      },
      { property: "og:title", content: "Assinatura Premium — Speak2Co" },
      {
        property: "og:description",
        content: "Planos mensal e anual do Speak2Co com pagamento em reais pelo Mercado Pago.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PremiumPage,
});

const TIERS = [
  {
    id: "essential",
    label: "Essential",
    tagline: "Comece a estudar todos os dias",
    monthly: { key: "essential_monthly" as const, price: "R$ 19,90" },
    yearly: { key: "essential_yearly" as const, price: "R$ 199,00" },
    perks: ["Aulas guiadas", "Exercícios diários", "Quizzes de vocabulário e gramática"],
    highlight: false,
  },
  {
    id: "premium",
    label: "Premium",
    tagline: "Tudo do Essential + trilhas completas",
    monthly: { key: "premium_monthly" as const, price: "R$ 49,90" },
    yearly: { key: "premium_yearly" as const, price: "R$ 499,00" },
    perks: [
      "Tudo do Essential",
      "Trilhas completas (Speak2Hire e Speak2Travel)",
      "Certificados de evolução",
      "Simulados e testes de nível",
    ],
    highlight: false,
  },
  {
    id: "signature",
    label: "Signature ⭐",
    tagline: "Exclusive access to GiseleAI by Speak2Co",
    monthly: { key: "signature_monthly" as const, price: "R$ 59,90" },
    yearly: { key: "signature_yearly" as const, price: "R$ 599,00" },
    perks: [
      "Tudo do Premium",
      "GiseleAI ilimitada",
      "Feedback personalizado",
      "Conversação 24/7",
    ],
    highlight: true,
  },
];

function PremiumPage() {
  const queryClient = useQueryClient();
  const fetchSubscription = useServerFn(getMySubscription);
  const checkout = useServerFn(startMercadoPagoCheckout);
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  const { data } = useQuery({
    queryKey: ["subscription"],
    queryFn: () => fetchSubscription(),
  });

  const mutation = useMutation({
    mutationFn: (planKey: string) =>
      checkout({ data: { planKey: planKey as never, origin: window.location.origin } }),
    onSuccess: (result) => {
      queryClient.invalidateQueries({ queryKey: ["subscription"] });
      window.location.href = result.checkoutUrl;
    },
    onError: (error: Error) => toast.error(error.message),
  });

  const planLabel = data?.subscription?.plan_label ?? "";
  const isActive = data?.plan === "premium";
  const currentTier = isActive
    ? planLabel.toLowerCase().includes("signature")
      ? "signature"
      : planLabel.toLowerCase().includes("essential")
        ? "essential"
        : "premium"
    : null;

  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-14">
      <header className="text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-accent">Speak2Co Premium</p>
        <h1 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
          English for Every Opportunity
        </h1>
        <p className="mt-3 text-muted-foreground">
          Pagamento em reais com Pix, boleto ou cartão pelo Mercado Pago.
        </p>
      </header>

      <div className="mt-8 flex justify-center">
        <div className="inline-flex rounded-full border border-border bg-card p-1">
          <button
            type="button"
            onClick={() => setBilling("monthly")}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
              billing === "monthly" ? "bg-accent text-accent-foreground" : "text-muted-foreground"
            }`}
          >
            Mensal
          </button>
          <button
            type="button"
            onClick={() => setBilling("yearly")}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
              billing === "yearly" ? "bg-accent text-accent-foreground" : "text-muted-foreground"
            }`}
          >
            Anual · 2 meses grátis
          </button>
        </div>
      </div>

      {currentTier === "premium" && (
        <section className="mt-8 rounded-2xl border-2 border-accent/60 bg-accent/10 p-6 text-center">
          <p className="text-lg font-bold text-foreground">🔒 Unlock GiseleAI</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Upgrade to Signature for only R$ 10,00 more. GiseleAI ilimitada, feedback personalizado e
            conversação 24/7.
          </p>
          <Button
            className="mt-4 rounded-full font-semibold"
            disabled={mutation.isPending}
            onClick={() =>
              mutation.mutate(billing === "yearly" ? "signature_yearly" : "signature_monthly")
            }
          >
            Fazer upgrade para Signature
          </Button>
        </section>
      )}

      {!isActive && data?.subscription?.status === "pending" && (
        <div className="mt-8 rounded-xl border border-border bg-card p-4 text-center text-muted-foreground">
          Encontramos uma assinatura aguardando pagamento.
          {data.subscription.init_point && (
            <a
              className="ml-1 font-semibold text-accent underline"
              href={data.subscription.init_point}
            >
              Concluir pagamento
            </a>
          )}
        </div>
      )}

      <section className="mt-10 grid gap-6 md:grid-cols-3">
        {TIERS.map((tier) => {
          const option = billing === "yearly" ? tier.yearly : tier.monthly;
          const isCurrent = currentTier === tier.id;
          return (
            <article
              key={tier.id}
              className={`flex flex-col rounded-2xl border bg-card p-8 shadow-lg ${
                tier.highlight ? "border-accent ring-1 ring-accent/40" : "border-border"
              }`}
            >
              <h2 className="text-xl font-semibold text-foreground">{tier.label}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{tier.tagline}</p>
              <p className="mt-4 text-4xl font-bold text-accent">{option.price}</p>
              <p className="text-sm text-muted-foreground">
                {billing === "yearly" ? "por ano — 2 meses grátis" : "por mês"}
              </p>
              <ul className="mt-6 flex-1 space-y-2 text-sm text-muted-foreground">
                {tier.perks.map((perk) => (
                  <li key={perk}>• {perk}</li>
                ))}
              </ul>
              <Button
                className="mt-8"
                variant={tier.highlight ? "default" : "outline"}
                disabled={isCurrent || mutation.isPending}
                onClick={() => mutation.mutate(option.key)}
              >
                {isCurrent
                  ? "Seu plano atual"
                  : mutation.isPending
                    ? "Abrindo checkout..."
                    : "Assinar com Mercado Pago"}
              </Button>
            </article>
          );
        })}
      </section>
    </main>
  );
}
