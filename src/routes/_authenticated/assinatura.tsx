import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { Button } from "@/components/ui/button";
import { getMySubscription } from "@/lib/subscriptions.functions";
import { SubscriptionEventsSection } from "@/components/SubscriptionEventsSection";

export const Route = createFileRoute("/_authenticated/assinatura")({
  head: () => ({
    meta: [
      { title: "Minha assinatura — Speak2Co" },
      {
        name: "description",
        content:
          "Veja os recursos Premium desbloqueados na Speak2Co, a situação da sua assinatura e a data da próxima renovação.",
      },
      { property: "og:title", content: "Minha assinatura — Speak2Co" },
      {
        property: "og:description",
        content: "Detalhes do seu plano Speak2Co Premium: recursos liberados e data de renovação.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AssinaturaPage,
});

const PREMIUM_FEATURES = [
  { title: "Professor de IA ilimitado", description: "Converse em inglês sem limite diário e receba correções de gramática." },
  { title: "Speak2Hire", description: "Simulador de entrevistas em inglês com feedback por competência." },
  { title: "Speak2Travel", description: "Situações reais de viagem: aeroporto, hotel, restaurante e passeios." },
  { title: "Plano de estudos adaptativo", description: "Ajustes por feedback, travar semanas e histórico de versões." },
  { title: "Exercícios diários ilimitados", description: "Novas atividades todos os dias com explicações detalhadas." },
  { title: "Certificados de evolução", description: "Emita certificados a cada marco alcançado no seu plano." },
];

const STATUS_LABEL: Record<string, string> = {
  authorized: "Ativa",
  pending: "Aguardando pagamento",
  paused: "Pausada",
  cancelled: "Cancelada",
};

function formatDate(value: string | null | undefined) {
  if (!value) return null;
  return new Date(value).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function AssinaturaPage() {
  const fetchSubscription = useServerFn(getMySubscription);
  const { data, isPending } = useQuery({
    queryKey: ["subscription"],
    queryFn: () => fetchSubscription(),
  });

  const isPremium = data?.plan === "premium";
  const subscription = data?.subscription ?? null;
  const renewal = formatDate(subscription?.next_payment_date);

  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-14">
      <header>
        <p className="text-sm uppercase tracking-[0.3em] text-accent">Minha assinatura</p>
        <h1 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
          {isPremium ? "Speak2Co Premium ativo" : "Detalhes do Premium"}
        </h1>
        <p className="mt-3 text-muted-foreground">
          {isPremium
            ? "Todos os recursos abaixo estão liberados na sua conta."
            : "Veja tudo o que é desbloqueado ao assinar o Speak2Co Premium."}
        </p>
      </header>

      <section className="mt-8 grid gap-4 rounded-2xl border border-border bg-card p-6 md:grid-cols-3">
        <div>
          <p className="text-xs uppercase tracking-wider text-muted-foreground">Plano</p>
          <p className="mt-1 font-semibold text-foreground">
            {subscription?.plan_label ?? (isPremium ? "Premium" : "Gratuito")}
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wider text-muted-foreground">Situação</p>
          <p className="mt-1 font-semibold text-foreground">
            {isPending
              ? "Carregando..."
              : subscription
                ? (STATUS_LABEL[subscription.status] ?? subscription.status)
                : "Sem assinatura"}
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wider text-muted-foreground">Próxima renovação</p>
          <p className="mt-1 font-semibold text-foreground">
            {renewal ?? (isPremium ? "Aguardando confirmação do Mercado Pago" : "—")}
          </p>
        </div>
      </section>

      {subscription?.amount != null && (
        <p className="mt-3 text-sm text-muted-foreground">
          Valor da renovação:{" "}
          {Number(subscription.amount).toLocaleString("pt-BR", {
            style: "currency",
            currency: subscription.currency ?? "BRL",
          })}
          {renewal ? ` em ${renewal}.` : "."}
        </p>
      )}

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-foreground">Recursos desbloqueados</h2>
        <ul className="mt-5 grid gap-4 md:grid-cols-2">
          {PREMIUM_FEATURES.map((feature) => (
            <li
              key={feature.title}
              className={`rounded-xl border p-5 ${
                isPremium ? "border-accent/40 bg-accent/5" : "border-border bg-card opacity-80"
              }`}
            >
              <p className="flex items-center gap-2 font-semibold text-foreground">
                <span aria-hidden="true">{isPremium ? "✓" : "🔒"}</span>
                {feature.title}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{feature.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-10 flex flex-wrap gap-3">
        {!isPremium && (
          <Button asChild className="rounded-full font-semibold">
            <Link to="/premium">Assinar Premium</Link>
          </Button>
        )}
        {!isPremium && subscription?.status === "pending" && subscription.init_point && (
          <Button asChild variant="outline" className="rounded-full font-semibold">
            <a href={subscription.init_point}>Concluir pagamento</a>
          </Button>
        )}
        <Button asChild variant="outline" className="rounded-full font-semibold">
          <Link to="/painel">Voltar ao painel</Link>
        </Button>
      </div>
    </main>
  );
}
