import { createFileRoute } from "@tanstack/react-router";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { LifetimeCatalog } from "@/components/LifetimeCatalog";
import { LifetimeCta } from "@/components/LifetimeCta";
import { startMercadoPagoCheckout } from "@/lib/subscriptions.functions";
import { getPaymentOptions } from "@/lib/payments.functions";
import { useAccess } from "@/lib/entitlements";
import { INDIVIDUAL_PRODUCTS, type LifetimeCheckoutKey } from "@/lib/subscription-plans";

export const Route = createFileRoute("/_authenticated/premium")({
  head: () => ({
    meta: [
      { title: "Acesso vitalício — Speak2Co" },
      {
        name: "description",
        content:
          "Speak2Co All Access por R$ 97,90 em até 10x no cartão de crédito e produtos individuais por R$ 19,90. Pagamento único e acesso vitalício.",
      },
      { property: "og:title", content: "Acesso vitalício — Speak2Co" },
      {
        property: "og:description",
        content: "Pagamento único, sem mensalidade: Speak2Co All Access e produtos individuais com acesso vitalício.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PremiumPage,
});

/** Planos antigos que já incluíam tudo do Complete. */
const COMPLETE_EQUIVALENT = new Set(["complete", "essential", "premium", "signature"]);

function PremiumPage() {
  const checkout = useServerFn(startMercadoPagoCheckout);
  const fetchOptions = useServerFn(getPaymentOptions);
  const { data: access } = useAccess();
  const { data: options } = useQuery({
    queryKey: ["payment-options"],
    queryFn: () => fetchOptions(),
    staleTime: 300_000,
  });

  const mutation = useMutation({
    mutationFn: (planKey: LifetimeCheckoutKey) =>
      checkout({ data: { planKey, origin: window.location.origin } }),
    onSuccess: (result) => {
      window.location.href = result.checkoutUrl;
    },
    onError: (error: Error) => toast.error(error.message),
  });

  const features = access?.features ?? {};
  const owned: Partial<Record<LifetimeCheckoutKey, boolean>> = {
    complete_lifetime: COMPLETE_EQUIVALENT.has(access?.planKey ?? "free"),
  };
  for (const p of INDIVIDUAL_PRODUCTS) {
    if (p.checkoutKey && p.featureKey && features[p.featureKey]) owned[p.checkoutKey] = true;
  }
  const disabled = options ? !options.mercadoPagoEnabled : false;

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-12 sm:px-6">
      <header className="mb-12 text-center">
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">Seu acesso vitalício à Speak2Co</h1>
        <p className="mt-3 text-muted-foreground">
          Pagamento único, sem mensalidade e sem renovação. Pix, boleto ou cartão pelo Mercado Pago.
        </p>
        {disabled && (
          <p className="mx-auto mt-4 max-w-xl rounded-xl border border-border bg-card p-3 text-sm text-muted-foreground">
            Os pagamentos estão temporariamente indisponíveis. Tente novamente em instantes.
          </p>
        )}
      </header>

      <LifetimeCatalog
        owned={owned}
        renderAction={(key, primary) => (
          <Button
            variant="default"
            disabled={disabled || mutation.isPending}
            onClick={() => mutation.mutate(key)}
            className={
              primary
                ? "btn-gold h-12 w-full rounded-full text-sm font-bold text-gold-ink uppercase"
                : "btn-gold h-11 w-full rounded-full text-sm font-semibold text-gold-ink"
            }
          >
            {mutation.isPending && mutation.variables === key ? (
              "Opening payment..."
            ) : (
              <LifetimeCta primary={primary} />
            )}
          </Button>
        )}
      />
    </main>
  );
}
