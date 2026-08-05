import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { BrandText } from "@/components/BrandText";
import { Button } from "@/components/ui/button";
import { getMySubscription, startMercadoPagoCheckout } from "@/lib/subscriptions.functions";
import { getPlanCatalog } from "@/lib/entitlements.functions";
import { changePaddlePlan } from "@/lib/payments.functions";
import { usePaddleCheckout } from "@/hooks/usePaddleCheckout";
import { PaymentTestModeBanner } from "@/components/PaymentTestModeBanner";
import { PlanUnlockedDialog } from "@/components/PlanUnlockedDialog";

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
    monthly: { key: "essential_monthly" as const, price: "R$ 37,90" },
    yearly: { key: "essential_yearly" as const, price: "R$ 379,00" },
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

type CellValue = boolean | string;

const COMPARISON_ROWS: { feature: string; essential: CellValue; premium: CellValue; signature: CellValue }[] = [
  { feature: "Aulas guiadas", essential: true, premium: true, signature: true },
  { feature: "Exercícios diários", essential: true, premium: true, signature: true },
  { feature: "Quizzes de vocabulário e gramática", essential: true, premium: true, signature: true },
  { feature: "Plano de estudos personalizado", essential: true, premium: true, signature: true },
  { feature: "Teste de nivelamento (CEFR)", essential: true, premium: true, signature: true },
  { feature: "Trilhas completas — Speak2Hire", essential: false, premium: true, signature: true },
  { feature: "Trilhas completas — Speak2Travel (10 módulos)", essential: false, premium: true, signature: true },
  { feature: "Simulador de entrevista com IA", essential: false, premium: true, signature: true },
  { feature: "Role play de viagem com IA", essential: false, premium: true, signature: true },
  { feature: "Certificados de evolução", essential: false, premium: true, signature: true },
  { feature: "Ranking de fluência", essential: false, premium: true, signature: true },
  { feature: "Professor IA (chat)", essential: "Limitado", premium: true, signature: true },
  { feature: "GiseleAI ilimitada", essential: false, premium: false, signature: true },
  { feature: "Feedback personalizado", essential: false, premium: false, signature: true },
  { feature: "Conversação 24/7", essential: false, premium: false, signature: true },
];

function cell(value: CellValue) {
  if (value === true) return <span className="font-bold text-accent">✓</span>;
  if (value === false) return <span className="text-muted-foreground/40">—</span>;
  return <span className="text-foreground">{value}</span>;
}

const MOBILE_TIERS: {
  id: string;
  label: string;
  price: string;
  highlight: boolean;
  rows: { feature: string; value: CellValue }[];
}[] = [
  {
    id: "essential",
    label: "Essential",
    price: "R$ 37,90/mês",
    highlight: false,
    rows: COMPARISON_ROWS.map((r) => ({ feature: r.feature, value: r.essential })),
  },
  {
    id: "premium",
    label: "Premium",
    price: "R$ 49,90/mês",
    highlight: false,
    rows: COMPARISON_ROWS.map((r) => ({ feature: r.feature, value: r.premium })),
  },
  {
    id: "signature",
    label: "Signature ⭐",
    price: "R$ 59,90/mês",
    highlight: true,
    rows: COMPARISON_ROWS.map((r) => ({ feature: r.feature, value: r.signature })),
  },
];

function PremiumPage() {
  const queryClient = useQueryClient();
  const fetchSubscription = useServerFn(getMySubscription);
  const checkout = useServerFn(startMercadoPagoCheckout);
  const paddle = usePaddleCheckout();
  const fetchCatalog = useServerFn(getPlanCatalog);
  const changePlan = useServerFn(changePaddlePlan);
  const { data: catalog } = useQuery({ queryKey: ["plan-catalog"], queryFn: () => fetchCatalog() });
  const priceOf = (tierId: string, cycle: "monthly" | "yearly", fallback: string) => {
    const row = catalog?.plans.find((p) => p.key === tierId);
    const value = cycle === "yearly" ? row?.yearly_price : row?.monthly_price;
    if (value == null) return fallback;
    return Number(value).toLocaleString("pt-BR", {
      style: "currency",
      currency: row?.currency ?? "BRL",
    });
  };
  const levelOf = (tierId: string | null) =>
    (tierId ? catalog?.plans.find((p) => p.key === tierId)?.access_level : 0) ?? 0;
  const changeMutation = useMutation({
    mutationFn: (priceId: string) => changePlan({ data: { priceId } }),
    onSuccess: (result) => {
      queryClient.invalidateQueries({ queryKey: ["subscription"] });
      queryClient.invalidateQueries({ queryKey: ["my-access"] });
      toast.success(
        result.applied === "immediate"
          ? "Upgrade aplicado! Seus novos recursos já estão liberados."
          : "Downgrade agendado — seu plano atual continua até o fim do período já pago.",
      );
    },
    onError: (error: Error) => toast.error(error.message),
  });
  const startPaddle = (priceId: string) => {
    paddle.openCheckout(priceId).catch((error: Error) => toast.error(error.message));
  };
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

  
  const plan = data?.plan ?? "free";
  const isActive = plan === "essential" || plan === "premium" || plan === "signature";
  const currentTier = isActive ? plan : null;
  const isPaddleSubscriber = data?.subscription?.provider === "paddle";
  // Só mostramos o aviso de pagamento pendente se a tentativa for recente (24h)
  // e não estivermos na pré-visualização de plano do admin.
  const pending = data?.subscription;
  const pendingAgeMs = pending?.created_at
    ? Date.now() - new Date(pending.created_at).getTime()
    : Number.POSITIVE_INFINITY;
  const showPending =
    pending?.status === "pending" && Boolean(pending.init_point) && pendingAgeMs < 86_400_000;

  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-14">
      <PlanUnlockedDialog />
      <PaymentTestModeBanner />
      <header className="mt-6 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-accent">Speak2Co Premium</p>
        <h1 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
          English for Every Opportunity
        </h1>
        <p className="mt-3 text-muted-foreground">
          Cartão internacional no checkout global, ou Pix, boleto e cartão em reais pelo Mercado Pago.
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
          <p className="text-lg font-bold text-foreground">🔒 Unlock <BrandText text="GiseleAI" /></p>
          <p className="mt-2 text-sm text-muted-foreground">
            Upgrade to Signature for only R$ 10,00 more. GiseleAI ilimitada, feedback personalizado e
            conversação 24/7.
          </p>
          <Button
            className="mt-4 rounded-full font-semibold"
            disabled={paddle.loading}
            onClick={() =>
              startPaddle(billing === "yearly" ? "signature_yearly" : "signature_monthly")
            }
          >
            Fazer upgrade para Signature
          </Button>
        </section>
      )}

      {!previewPlan && !isActive && showPending && (
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
              <p className="mt-4 text-4xl font-bold text-accent">
                {priceOf(tier.id, billing, option.price)}
              </p>
              <p className="text-sm text-muted-foreground">
                {billing === "yearly" ? "por ano — 2 meses grátis" : "por mês"}
              </p>
              <ul className="mt-6 flex-1 space-y-2 text-sm text-muted-foreground">
                {tier.perks.map((perk) => (
                  <li key={perk}>• {perk}</li>
                ))}
              </ul>
              <div className="mt-8 space-y-2">
                {isCurrent ? (
                  <Button className="w-full" variant="outline" disabled>
                    Seu plano atual
                  </Button>
                ) : isActive && isPaddleSubscriber ? (
                  <Button
                    className="w-full"
                    variant={levelOf(tier.id) > levelOf(currentTier) ? "default" : "outline"}
                    disabled={changeMutation.isPending}
                    onClick={() => changeMutation.mutate(option.key)}
                  >
                    {changeMutation.isPending
                      ? "Atualizando..."
                      : levelOf(tier.id) > levelOf(currentTier)
                        ? "Fazer upgrade agora"
                        : "Agendar downgrade para o fim do ciclo"}
                  </Button>
                ) : (
                  <>
                    <Button
                      className="w-full"
                      variant={tier.highlight ? "default" : "outline"}
                      disabled={paddle.loading}
                      onClick={() => startPaddle(option.key)}
                    >
                      {paddle.loading ? "Abrindo checkout..." : "Assinar com cartão (internacional)"}
                    </Button>
                    <Button
                      className="w-full"
                      variant="ghost"
                      disabled={mutation.isPending}
                      onClick={() => mutation.mutate(option.key)}
                    >
                      {mutation.isPending
                        ? "Abrindo checkout..."
                        : "Assinar com Mercado Pago (Pix/boleto)"}
                    </Button>
                  </>
                )}
              </div>
            </article>
          );
        })}
      </section>

      <section className="mt-14">
        <h2 className="text-center text-2xl font-bold text-foreground">
          Compare os planos
        </h2>
        <p className="mt-2 text-center text-sm text-muted-foreground">
          Veja exatamente o que cada nível libera e por quanto tempo.
        </p>

        {/* Mobile: collapsible cards per tier */}
        <div className="mt-8 space-y-4 md:hidden">
          {MOBILE_TIERS.map((tier) => (
            <details
              key={tier.id}
              className="group rounded-2xl border border-border bg-card shadow-lg"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 rounded-2xl px-5 py-4">
                <span
                  className={`text-lg font-semibold ${
                    tier.highlight ? "text-accent" : "text-foreground"
                  }`}
                >
                  {tier.label}
                </span>
                <span className="text-sm font-medium text-muted-foreground">
                  {tier.price}
                </span>
                <span className="ml-auto text-muted-foreground transition group-open:rotate-180">
                  ▾
                </span>
              </summary>
              <div className="divide-y divide-border border-t border-border px-5 pb-4">
                {tier.rows.map((row) => (
                  <div
                    key={row.feature}
                    className="flex items-center justify-between gap-3 py-2.5"
                  >
                    <span className="min-w-0 text-sm text-muted-foreground">
                      {row.feature}
                    </span>
                    <span className="shrink-0 text-sm">{cell(row.value)}</span>
                  </div>
                ))}
              </div>
            </details>
          ))}
          <p className="text-center text-xs text-muted-foreground">
            Os valores anuais equivalem a 10 meses de pagamento — 2 meses são cortesia.
          </p>
        </div>

        {/* Desktop: comparison table */}
        <div className="mt-8 hidden overflow-x-auto rounded-2xl border border-border bg-card shadow-lg md:block">
          <table className="w-full min-w-[680px] text-left text-sm">
            <thead>
              <tr className="border-b border-border bg-accent/5">
                <th className="px-6 py-4 font-semibold text-foreground">Recurso</th>
                <th className="px-6 py-4 text-center font-semibold text-foreground">
                  Essential
                </th>
                <th className="px-6 py-4 text-center font-semibold text-foreground">
                  Premium
                </th>
                <th className="px-6 py-4 text-center font-semibold text-accent">
                  Signature ⭐
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {COMPARISON_ROWS.map((row) => (
                <tr key={row.feature} className="hover:bg-accent/5">
                  <td className="px-6 py-3 text-muted-foreground">{row.feature}</td>
                  <td className="px-6 py-3 text-center">{cell(row.essential)}</td>
                  <td className="px-6 py-3 text-center">{cell(row.premium)}</td>
                  <td className="px-6 py-3 text-center">{cell(row.signature)}</td>
                </tr>
              ))}
              <tr className="border-t-2 border-border bg-accent/5 font-semibold">
                <td className="px-6 py-4 text-foreground">Duração do acesso</td>
                <td className="px-6 py-4 text-center text-foreground">30 dias (mensal) / 12 meses (anual)</td>
                <td className="px-6 py-4 text-center text-foreground">30 dias (mensal) / 12 meses (anual)</td>
                <td className="px-6 py-4 text-center text-accent">30 dias (mensal) / 12 meses (anual)</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-muted-foreground">Preço mensal</td>
                <td className="px-6 py-4 text-center text-foreground">R$ 37,90</td>
                <td className="px-6 py-4 text-center text-foreground">R$ 49,90</td>
                <td className="px-6 py-4 text-center text-accent">R$ 59,90</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-muted-foreground">Preço anual (2 meses grátis)</td>
                <td className="px-6 py-4 text-center text-foreground">R$ 379,00</td>
                <td className="px-6 py-4 text-center text-foreground">R$ 499,00</td>
                <td className="px-6 py-4 text-center text-accent">R$ 599,00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 hidden text-center text-xs text-muted-foreground md:block">
          Os valores anuais equivalem a 10 meses de pagamento — 2 meses são cortesia.
        </p>
      </section>
    </main>
  );
}
