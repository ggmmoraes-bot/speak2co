import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { getMySubscription } from "@/lib/subscriptions.functions";
import { Button } from "@/components/ui/button";
import { AltHeading } from "@/components/AltHeading";
import { PLAN_BENEFITS, isPlanKey, type PlanKey } from "@/lib/subscription-plans";

export const Route = createFileRoute("/_authenticated/checkout-sucesso")({
  head: () => ({
    meta: [
      { title: "Pagamento confirmado | Speak2Co" },
      {
        name: "description",
        content:
          "Confirmação do seu pagamento único Speak2Co e liberação do acesso vitalício.",
      },
      { property: "og:title", content: "Pagamento confirmado | Speak2Co" },
      {
        property: "og:description",
        content: "Seu acesso vitalício Speak2Co foi confirmado.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CheckoutSuccessPage,
});

/**
 * Tela de retorno do checkout. O pagamento é confirmado por webhook, então
 * consultamos o plano em intervalos curtos até ele mudar (ou até dar tempo
 * limite) em vez de prometer liberação imediata que ainda não aconteceu.
 */
function CheckoutSuccessPage() {
  const fetchSubscription = useServerFn(getMySubscription);
  const queryClient = useQueryClient();
  const [elapsed, setElapsed] = useState(0);

  const { data } = useQuery({
    queryKey: ["subscription"],
    queryFn: () => fetchSubscription(),
    refetchInterval: 3000,
  });

  const plan = isPlanKey(data?.plan) ? (data.plan as PlanKey) : "free";
  const latest = data?.subscription;
  const confirmed = latest?.status === "authorized" || latest?.status === "active";
  const isComplete = latest?.plan_key === "complete_lifetime";

  useEffect(() => {
    if (confirmed) {
      queryClient.invalidateQueries({ queryKey: ["my-access"] });
      return;
    }
    const timer = setInterval(() => setElapsed((value) => value + 3), 3000);
    return () => clearInterval(timer);
  }, [confirmed, queryClient]);

  const tookTooLong = !confirmed && elapsed >= 60;

  return (
    <main className="mx-auto w-full max-w-2xl px-6 py-20 text-center">
      <p className="text-sm tracking-[0.3em] text-accent uppercase">Speak2Co</p>
      <h1 className="mt-3 text-3xl font-bold md:text-4xl">
        <AltHeading text={confirmed ? "Pagamento Confirmado" : "Confirmando Pagamento"} />
      </h1>

      {confirmed ? (
        <>
          <p className="mt-4 text-muted-foreground">
            Seu acesso vitalício a {latest?.plan_label?.split(" - ")[0] ?? "Speak2Co"} está liberado.
            Pagamento único — nada mais será cobrado.
          </p>
          {isComplete || plan !== "free" ? (
            <ul className="mx-auto mt-6 max-w-md space-y-2 text-left text-sm text-muted-foreground">
              {PLAN_BENEFITS[isComplete ? "complete" : plan].map((benefit) => (
                <li key={benefit}>• {benefit}</li>
              ))}
            </ul>
          ) : null}
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild>
              <Link to="/painel">Ir para o painel</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/assinatura" search={{ simulacao: undefined }}>Ver meu acesso</Link>
            </Button>
          </div>
        </>
      ) : (
        <>
          <p className="mt-4 text-muted-foreground">
            Recebemos seu pagamento e estamos aguardando a confirmação do provedor. Isso costuma
            levar poucos segundos — pode deixar esta tela aberta.
          </p>
          {tookTooLong ? (
            <p className="mt-4 text-sm text-muted-foreground">
              A confirmação está demorando mais que o normal. Nenhuma cobrança se perde: assim que o
              provedor confirmar, o acesso é liberado automaticamente. Você pode acompanhar em Meu acesso.
            </p>
          ) : null}
          <div className="mt-8 flex justify-center">
            <Button asChild variant="outline">
              <Link to="/assinatura" search={{ simulacao: undefined }}>Ver meu acesso</Link>
            </Button>
          </div>
        </>
      )}
    </main>
  );
}
