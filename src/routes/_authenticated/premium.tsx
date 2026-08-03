import { createFileRoute } from "@tanstack/react-router";
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

const PLANS = [
  {
    key: "monthly" as const,
    label: "Premium Mensal",
    price: "R$ 49,90",
    period: "por mês",
    perks: ["Professor de IA ilimitado", "Speak2Hire e Speak2Travel", "Plano de estudos adaptativo"],
  },
  {
    key: "yearly" as const,
    label: "Premium Anual",
    price: "R$ 479,00",
    period: "por ano — 2 meses grátis",
    perks: ["Tudo do plano mensal", "Certificados de evolução", "Prioridade em novos recursos"],
  },
];

function PremiumPage() {
  const queryClient = useQueryClient();
  const fetchSubscription = useServerFn(getMySubscription);
  const checkout = useServerFn(startMercadoPagoCheckout);

  const { data } = useQuery({
    queryKey: ["subscription"],
    queryFn: () => fetchSubscription(),
  });

  const mutation = useMutation({
    mutationFn: (planKey: "monthly" | "yearly") =>
      checkout({ data: { planKey, origin: window.location.origin } }),
    onSuccess: (result) => {
      queryClient.invalidateQueries({ queryKey: ["subscription"] });
      window.location.href = result.checkoutUrl;
    },
    onError: (error: Error) => toast.error(error.message),
  });

  const isPremium = data?.plan === "premium";

  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-14">
      <header className="text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-accent">Speak2Co Premium</p>
        <h1 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
          English for Every Opportunity
        </h1>
        <p className="mt-3 text-muted-foreground">
          Pagamento em reais com Pix, boleto ou cartão pelo Mercado Pago.
        </p>
      </header>

      {isPremium && (
        <div className="mt-8 rounded-xl border border-accent/40 bg-accent/10 p-4 text-center text-foreground">
          Sua assinatura Premium está ativa. Obrigado por estudar com a Speak2Co!
        </div>
      )}

      {!isPremium && data?.subscription?.status === "pending" && (
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

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        {PLANS.map((plan) => (
          <article
            key={plan.key}
            className="flex flex-col rounded-2xl border border-border bg-card p-8 shadow-lg"
          >
            <h2 className="text-xl font-semibold text-foreground">{plan.label}</h2>
            <p className="mt-4 text-4xl font-bold text-accent">{plan.price}</p>
            <p className="text-sm text-muted-foreground">{plan.period}</p>
            <ul className="mt-6 flex-1 space-y-2 text-sm text-muted-foreground">
              {plan.perks.map((perk) => (
                <li key={perk}>• {perk}</li>
              ))}
            </ul>
            <Button
              className="mt-8"
              disabled={isPremium || mutation.isPending}
              onClick={() => mutation.mutate(plan.key)}
            >
              {mutation.isPending ? "Abrindo checkout..." : "Assinar com Mercado Pago"}
            </Button>
          </article>
        ))}
      </section>
    </main>
  );
}
