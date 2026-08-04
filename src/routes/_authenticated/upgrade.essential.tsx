import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { Check, Flag, History, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { startMercadoPagoCheckout } from "@/lib/subscriptions.functions";

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
  validateSearch: (search: Record<string, unknown>) => ({
    feature:
      search.feature === "marcos" || search.feature === "ajustes" || search.feature === "historico"
        ? (search.feature as UpgradeFeature)
        : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Upgrade para o Essential — Speak2Co" },
      {
        name: "description",
        content:
          "Libere marcos de evolução, ajustes do plano com IA e histórico de versões assinando o plano Essential do Speak2Co.",
      },
      { property: "og:title", content: "Upgrade para o Essential — Speak2Co" },
      {
        property: "og:description",
        content:
          "Assine o Essential e desbloqueie o plano de estudos completo com marcos, ajustes por IA e histórico.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: UpgradeEssentialPage,
});

function UpgradeEssentialPage() {
  const { feature } = Route.useSearch();
  const checkout = useServerFn(startMercadoPagoCheckout);
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  const mutation = useMutation({
    mutationFn: () =>
      checkout({
        data: {
          planKey: (billing === "yearly" ? "essential_yearly" : "essential_monthly") as never,
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
      <p className="text-sm uppercase tracking-[0.3em] text-gold">Plano Essential</p>
      <h1 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
        {focus ? `Libere ${focus.title.toLowerCase()}` : "Libere seu plano de estudos completo"}
      </h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        {focus
          ? focus.description
          : "O plano Gratuito é uma degustação. Com o Essential você recebe o plano inteiro, com marcos, ajustes por IA e histórico."}
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
        <div className="flex justify-center">
          <div className="inline-flex rounded-full border border-border bg-card p-1">
            <button
              type="button"
              onClick={() => setBilling("monthly")}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                billing === "monthly" ? "bg-gold text-primary-foreground" : "text-muted-foreground"
              }`}
            >
              Mensal · R$ 19,90
            </button>
            <button
              type="button"
              onClick={() => setBilling("yearly")}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                billing === "yearly" ? "bg-gold text-primary-foreground" : "text-muted-foreground"
              }`}
            >
              Anual · R$ 199,00
            </button>
          </div>
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
            {mutation.isPending ? "Abrindo checkout…" : "Assinar o Essential"}
          </Button>
          <Button asChild variant="outline" className="rounded-full">
            <Link to="/premium">Comparar todos os planos</Link>
          </Button>
        </div>
        <p className="mt-4 text-center text-xs text-muted-foreground">
          Pagamento em reais com Pix, boleto ou cartão pelo Mercado Pago.
        </p>
      </section>
    </main>
  );
}
