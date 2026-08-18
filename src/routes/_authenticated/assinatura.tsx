import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useServerFn } from "@tanstack/react-start";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { AltHeading } from "@/components/AltHeading";
import { PlanPrice } from "@/components/PlanPrice";
import { getMySubscription } from "@/lib/subscriptions.functions";
import { getPlanCatalog } from "@/lib/entitlements.functions";
import {
  cancelPaddleSubscription,
  cancelMercadoPagoSubscription,
  createPaddlePortalSession,
  changePaddlePlan,
} from "@/lib/payments.functions";
import { SubscriptionEventsSection } from "@/components/SubscriptionEventsSection";
import {
  SIMULATION_MODES,
  buildSimulation,
  isSimulationAllowedHere,
  isSimulationMode,
} from "@/lib/subscription-simulation";
import {
  BRL,
  INSTALLMENTS,
  PLAN_BENEFITS,
  PLAN_META,
  PLAN_ORDER,
  buildSubscriptionTerms,
  installmentOf,
  isPlanKey,
  type PlanKey,
} from "@/lib/subscription-plans";

export const Route = createFileRoute("/_authenticated/assinatura")({
  validateSearch: (search: Record<string, unknown>) => ({
    simulacao: isSimulationMode(search["simulacao"]) ? search["simulacao"] : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Minha assinatura — Speak2Co" },
      {
        name: "description",
        content:
          "Veja o plano contratado, condições de pagamento, termos, renovação e histórico da sua assinatura Speak2Co.",
      },
      { property: "og:title", content: "Minha assinatura — Speak2Co" },
      {
        property: "og:description",
        content: "Plano atual, condições da contratação anual, upgrade, downgrade e renovação.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AssinaturaPage,
});

const STATUS_META: Record<string, { label: string; tone: string; dot: string }> = {
  authorized: { label: "Ativa", tone: "text-accent", dot: "●" },
  active: { label: "Ativa", tone: "text-accent", dot: "●" },
  trialing: { label: "Em período de teste", tone: "text-accent", dot: "●" },
  pending: { label: "Pagamento pendente", tone: "text-muted-foreground", dot: "●" },
  past_due: { label: "Pagamento pendente", tone: "text-muted-foreground", dot: "●" },
  paused: { label: "Pausada", tone: "text-muted-foreground", dot: "●" },
  cancelled: { label: "Cancelada", tone: "text-destructive", dot: "●" },
  canceled: { label: "Cancelada", tone: "text-destructive", dot: "●" },
  expired: { label: "Expirada", tone: "text-destructive", dot: "●" },
};

const PROVIDER_LABEL: Record<string, string> = {
  paddle: "Cartão internacional",
  mercadopago: "Mercado Pago (Pix, boleto ou cartão)",
  mercadopago_preference: "Mercado Pago — anual em até 12x no cartão, Pix ou boleto",
};


function formatDate(value: string | null | undefined) {
  if (!value) return null;
  return new Date(value).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function addYear(value: string | null | undefined) {
  if (!value) return null;
  const date = new Date(value);
  date.setFullYear(date.getFullYear() + 1);
  return date.toISOString();
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <p className="text-xs tracking-wider text-muted-foreground uppercase">{label}</p>
      <p className="mt-1 text-sm font-semibold text-foreground">{value}</p>
    </div>
  );
}

function AssinaturaPage() {
  const { simulacao } = Route.useSearch();
  const [simulationAllowed, setSimulationAllowed] = useState(false);
  useEffect(() => {
    setSimulationAllowed(isSimulationAllowedHere());
  }, []);

  const blockedInProduction = Boolean(simulacao) && !simulationAllowed;
  const simulation = simulacao && simulationAllowed ? buildSimulation(simulacao) : null;

  const queryClient = useQueryClient();
  const fetchSubscription = useServerFn(getMySubscription);
  const fetchCatalog = useServerFn(getPlanCatalog);
  const openPortal = useServerFn(createPaddlePortalSession);
  const cancelSubscription = useServerFn(cancelPaddleSubscription);
  const cancelMercadoPago = useServerFn(cancelMercadoPagoSubscription);
  const changePlan = useServerFn(changePaddlePlan);

  const { data, isPending: isLoading } = useQuery({
    queryKey: ["subscription"],
    queryFn: () => fetchSubscription(),
    enabled: !simulation,
  });
  const { data: catalog } = useQuery({ queryKey: ["plan-catalog"], queryFn: () => fetchCatalog() });

  const [targetPlan, setTargetPlan] = useState<PlanKey | null>(null);
  const [confirmCancel, setConfirmCancel] = useState(false);

  const isPending = !simulation && isLoading;
  const rawSubscription = simulation ? simulation.subscription : (data?.subscription ?? null);
  const planKey: PlanKey = simulation
    ? simulation.isPremium
      ? "premium"
      : "free"
    : isPlanKey(data?.plan)
      ? data.plan
      : "free";
  const isPaid = planKey !== "free";
  // Assinaturas antigas/expiradas não devem aparecer como contratação vigente.
  const subscription =
    isPaid || rawSubscription?.status === "pending" ? rawSubscription : null;
  const isPaddle = subscription?.provider === "paddle";

  const priceOf = (key: PlanKey) => {
    const fromDb = catalog?.plans.find((p) => p.key === key)?.yearly_price;
    return fromDb == null ? PLAN_META[key].yearlyPrice : Number(fromDb);
  };
  const nameOf = (key: PlanKey) => catalog?.plans.find((p) => p.key === key)?.name ?? PLAN_META[key].name;

  const total = subscription?.amount != null ? Number(subscription.amount) : priceOf(planKey);
  const startIso = subscription?.created_at ?? null;
  const endIso = subscription?.current_period_end ?? subscription?.next_payment_date ?? addYear(startIso);
  const nextChargeIso = subscription?.cancel_at_period_end ? null : endIso;

  const statusKey = subscription?.status ?? (isPaid ? "active" : "free");
  const status = STATUS_META[statusKey] ?? {
    label: subscription?.status ?? "Sem assinatura",
    tone: "text-muted-foreground",
    dot: "●",
  };
  const autoRenew = Boolean(subscription) && !subscription?.cancel_at_period_end;
  // Contratação anual avulsa (parcelada em até 12x): não há débito automático.
  const isPreference = subscription?.provider === "mercadopago_preference";
  const renewalSoon = (() => {
    if (!isPreference || !endIso) return false;
    const diff = new Date(endIso).getTime() - Date.now();
    return diff > 0 && diff <= 30 * 24 * 60 * 60 * 1000;
  })();


  const terms = useMemo(
    () =>
      buildSubscriptionTerms({
        planName: nameOf(planKey),
        startLabel: formatDate(startIso) ?? "—",
        endLabel: formatDate(endIso) ?? "—",
        totalLabel: total != null ? BRL(total) : "—",
        installmentLabel: total != null ? BRL(installmentOf(total)) : "—",
        paymentMethod: subscription?.provider
          ? (PROVIDER_LABEL[subscription.provider] ?? subscription.provider)
          : "—",
        autoRenew,
        nextChargeLabel: formatDate(nextChargeIso) ?? "Sem cobrança prevista",
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [planKey, startIso, endIso, total, subscription?.provider, autoRenew, nextChargeIso, catalog],
  );

  const currentLevel = PLAN_META[planKey].level;
  const upgrades = PLAN_ORDER.filter((key) => PLAN_META[key].level > currentLevel);
  const downgrades = PLAN_ORDER.filter(
    (key) => PLAN_META[key].level < currentLevel && key !== "free",
  );

  const portalMutation = useMutation({
    mutationFn: () => openPortal(),
    onSuccess: (result) => window.open(result.url, "_blank", "noopener"),
    onError: (error: Error) => toast.error(error.message),
  });

  // O cancelamento vai para o provedor que efetivamente cobra esta assinatura.
  const cancelMutation = useMutation({
    mutationFn: () => (isPaddle ? cancelSubscription() : cancelMercadoPago()),
    onSuccess: () => {
      setConfirmCancel(false);
      queryClient.invalidateQueries({ queryKey: ["subscription"] });
      toast.success("Renovação desligada — seu acesso continua até o fim do período já contratado.");
    },
    onError: (error: Error) => toast.error(error.message),
  });


  const changeMutation = useMutation({
    mutationFn: (key: PlanKey) => changePlan({ data: { priceId: PLAN_META[key].checkoutKey! } }),
    onSuccess: (result) => {
      setTargetPlan(null);
      queryClient.invalidateQueries({ queryKey: ["subscription"] });
      queryClient.invalidateQueries({ queryKey: ["my-access"] });
      toast.success(
        result.applied === "immediate"
          ? "Upgrade confirmado! Os novos recursos já estão liberados."
          : "Alteração agendada para a próxima renovação. Seu plano atual continua até lá.",
      );
    },
    onError: (error: Error) => toast.error(error.message),
  });

  const target = targetPlan;
  const isUpgrade = target ? PLAN_META[target].level > currentLevel : false;
  const targetTotal = target ? priceOf(target) : null;
  const diff = target && targetTotal != null && total != null ? targetTotal - total : null;

  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-14">
      <header>
        <p className="text-sm tracking-[0.3em] text-accent uppercase">Speak2Co</p>
        <h1 className="mt-3 text-3xl font-bold md:text-4xl">
          <AltHeading text="Minha Assinatura" />
        </h1>
        <p className="mt-3 text-muted-foreground">
          Plano contratado, condições de pagamento, termos, renovação e histórico — tudo em um só
          lugar.
        </p>
      </header>

      {simulation && (
        <div
          role="status"
          className="mt-8 rounded-2xl border-2 border-dashed border-destructive/60 bg-destructive/10 p-4 text-sm font-semibold text-destructive"
        >
          ⚠️ Você está vendo DADOS FICTÍCIOS de simulação — nada aqui reflete uma compra real.
        </div>
      )}
      {blockedInProduction && (
        <div
          role="status"
          className="mt-8 rounded-2xl border border-border bg-muted/40 p-4 text-sm text-muted-foreground"
        >
          🔒 O modo de simulação está desativado neste ambiente. Os dados abaixo são reais.
        </div>
      )}

      {/* PLANO ATUAL */}
      <section className="mt-8 rounded-3xl border border-accent/40 bg-gradient-to-br from-accent/10 via-card to-card p-6 md:p-8">
        <p className={`flex items-center gap-2 text-sm font-semibold ${status.tone}`}>
          <span aria-hidden="true">●</span>
          {isPending ? "Carregando..." : isPaid ? `Assinatura ${status.label.toLowerCase()}` : "Plano gratuito"}
        </p>
        <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
          Plano {nameOf(planKey)}
        </h2>
        <div className="mt-4">
          <PlanPrice total={isPaid ? total : null} />
        </div>
        <div className="mt-5 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
          <p>Início: {formatDate(startIso) ?? "—"}</p>
          <p>Acesso válido até: {formatDate(endIso) ?? "—"}</p>
          <p>
            Próxima renovação:{" "}
            {autoRenew ? (formatDate(nextChargeIso) ?? "—") : "Renovação desligada"}
          </p>
          <p>
            Forma de pagamento:{" "}
            {subscription?.provider
              ? (PROVIDER_LABEL[subscription.provider] ?? subscription.provider)
              : "—"}
          </p>
        </div>
        {!isPaid && (
          <Button asChild className="mt-6 rounded-full font-semibold">
            <Link to="/premium">Ver planos e assinar</Link>
          </Button>
        )}
      </section>

      {/* DADOS DA CONTRATAÇÃO */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold text-foreground">Dados da contratação</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          O acesso contratado é referente ao período anual de 12 meses, mesmo quando o pagamento é
          feito em {INSTALLMENTS} parcelas.
        </p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <Info label="Data da contratação" value={formatDate(startIso) ?? "—"} />
          <Info label="Início da assinatura" value={formatDate(startIso) ?? "—"} />
          <Info label="Término do período" value={formatDate(endIso) ?? "—"} />
          <Info
            label="Forma de pagamento"
            value={
              subscription?.provider
                ? (PROVIDER_LABEL[subscription.provider] ?? subscription.provider)
                : "—"
            }
          />
          <Info
            label="Parcelas"
            value={isPaid ? `Até ${INSTALLMENTS}x sem juros (ou à vista)` : "—"}
          />
          <Info
            label="Valor de cada parcela"
            value={isPaid && total != null ? BRL(installmentOf(total)) : "—"}
          />
          <Info label="Valor total" value={isPaid && total != null ? BRL(total) : "—"} />
          <Info
            label="Próxima cobrança"
            value={autoRenew ? (formatDate(nextChargeIso) ?? "—") : "Sem cobrança prevista"}
          />
          <Info label="Status do pagamento" value={isPaid ? status.label : "Sem cobrança"} />
        </div>
        {!isPaid ? null : subscription?.status === "pending" && subscription.init_point ? (
          <Button asChild variant="outline" className="mt-4 rounded-full font-semibold">
            <a href={subscription.init_point}>Concluir pagamento</a>
          </Button>
        ) : null}
      </section>

      {/* BENEFÍCIOS */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold text-foreground">Benefícios do meu plano</h2>
        <ul className="mt-5 grid gap-3 md:grid-cols-2">
          {PLAN_BENEFITS[planKey].map((benefit) => (
            <li
              key={benefit}
              className="rounded-xl border border-accent/40 bg-accent/5 p-4 text-sm text-foreground"
            >
              <span className="mr-2 font-bold text-accent" aria-hidden="true">
                ✓
              </span>
              {benefit}
            </li>
          ))}
        </ul>
      </section>

      {/* GESTÃO DA ASSINATURA */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold text-foreground">Gestão da assinatura</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-5">
            <p className="font-semibold text-foreground">Fazer upgrade</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Libere mais recursos imediatamente. Você confirma antes de qualquer cobrança.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {upgrades.length === 0 ? (
                <p className="text-sm text-muted-foreground">
                  Você já está no plano mais completo da Speak2Co.
                </p>
              ) : (
                upgrades.map((key) => (
                  <Button
                    key={key}
                    size="sm"
                    className="rounded-full font-semibold"
                    onClick={() => setTargetPlan(key)}
                  >
                    Upgrade para {nameOf(key)}
                  </Button>
                ))
              )}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-5">
            <p className="font-semibold text-foreground">Alterar plano / downgrade</p>
            <p className="mt-1 text-sm text-muted-foreground">
              A mudança para um plano inferior passa a valer na próxima renovação — nada é retirado
              antes disso.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {downgrades.length === 0 ? (
                <p className="text-sm text-muted-foreground">Nenhum plano inferior disponível.</p>
              ) : (
                downgrades.map((key) => (
                  <Button
                    key={key}
                    size="sm"
                    variant="outline"
                    className="rounded-full font-semibold"
                    onClick={() => setTargetPlan(key)}
                  >
                    Mudar para {nameOf(key)}
                  </Button>
                ))
              )}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-5">
            <p className="font-semibold text-foreground">Renovação</p>
            {isPreference ? (
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                <li>
                  Sem débito automático:{" "}
                  <span className="font-semibold text-foreground">
                    contratação anual paga em até {INSTALLMENTS}x
                  </span>
                </li>
                <li>Acesso garantido até: {formatDate(endIso) ?? "—"}</li>
                <li>
                  Avisamos você antes do vencimento para renovar com uma nova contratação, sem
                  cobrança surpresa.
                </li>
              </ul>
            ) : (
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                <li>
                  Renovação automática:{" "}
                  <span className="font-semibold text-foreground">
                    {autoRenew ? "ativa" : "desligada"}
                  </span>
                </li>
                <li>Data prevista: {autoRenew ? (formatDate(nextChargeIso) ?? "—") : "—"}</li>
                <li>Plano que será renovado: {autoRenew ? nameOf(planKey) : "—"}</li>
                <li>
                  Valor previsto:{" "}
                  {autoRenew && total != null
                    ? `${BRL(total)} (ou ${INSTALLMENTS}x de ${BRL(installmentOf(total))})`
                    : "—"}
                </li>
                <li>Renovação por mais 12 meses, conforme os termos abaixo.</li>
              </ul>
            )}
            {isPreference && renewalSoon && (
              <p className="mt-3 rounded-xl border border-accent/50 bg-accent/10 px-4 py-3 text-sm text-foreground">
                Seu acesso termina em {formatDate(endIso)}. Renove agora para não perder o
                plano — o parcelamento em até {INSTALLMENTS}x continua disponível.
              </p>
            )}

            {isPaddle && !simulation && (
              <Button
                variant="outline"
                size="sm"
                className="mt-4 rounded-full font-semibold"
                disabled={portalMutation.isPending}
                onClick={() => portalMutation.mutate()}
              >
                {portalMutation.isPending ? "Abrindo..." : "Gerenciar renovação e pagamento"}
              </Button>
            )}
          </div>

          <div className="rounded-2xl border border-border bg-card p-5">
            <p className="font-semibold text-foreground">Gerenciar assinatura</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Acesse faturas, forma de pagamento e cancelamento. O cancelamento só acontece após a
              sua confirmação.
            </p>
            {subscription?.status === "past_due" && (
              <p className="mt-3 rounded-xl border border-border bg-muted/40 px-4 py-3 text-sm text-muted-foreground">
                Não conseguimos confirmar a última cobrança. Seu acesso continua liberado enquanto o
                provedor tenta novamente — atualize a forma de pagamento para não perder o plano.
              </p>
            )}
            <div className="mt-4 flex flex-wrap gap-2">
              {isPaddle && !simulation && (
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full font-semibold"
                  disabled={portalMutation.isPending}
                  onClick={() => portalMutation.mutate()}
                >
                  Faturas e pagamento
                </Button>
              )}
              {isPaid && !simulation && !subscription?.cancel_at_period_end && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="rounded-full font-semibold text-destructive"
                  onClick={() => setConfirmCancel(true)}
                >
                  Cancelar assinatura
                </Button>
              )}
              {subscription?.cancel_at_period_end && (
                <p className="text-sm text-muted-foreground">
                  Cancelamento agendado — acesso liberado até {formatDate(endIso) ?? "o fim do período"}.
                </p>
              )}
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Consulte os{" "}
              <Link to="/termos" className="text-accent underline">
                Termos de Uso
              </Link>
              , a{" "}
              <Link to="/reembolso" className="text-accent underline">
                Política de Reembolso
              </Link>{" "}
              e o{" "}
              <Link to="/privacidade" className="text-accent underline">
                Aviso de Privacidade
              </Link>
              .
            </p>
          </div>

        </div>
      </section>

      {/* TERMOS */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold text-foreground">Termos da minha assinatura</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Condições aplicáveis ao plano {nameOf(planKey)} contratado nesta conta.
        </p>
        <div className="mt-5 space-y-3">
          {terms.map((section) => (
            <details
              key={section.title}
              className="group rounded-2xl border border-border bg-card px-5 py-4"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-semibold text-foreground">
                {section.title}
                <span className="text-muted-foreground transition group-open:rotate-180">▾</span>
              </summary>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {section.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </details>
          ))}
        </div>
      </section>

      {/* HISTÓRICO */}
      <SubscriptionEventsSection simulatedEvents={simulation?.events} />

      <div className="mt-10 flex flex-wrap gap-3">
        <Button asChild variant="outline" className="rounded-full font-semibold">
          <Link to="/premium">Ver todos os planos</Link>
        </Button>
        <Button asChild variant="outline" className="rounded-full font-semibold">
          <Link to="/painel">Voltar ao painel</Link>
        </Button>
      </div>

      {/* Simulação (apenas preview/desenvolvimento) */}
      {simulationAllowed && (
        <section className="mt-10 rounded-2xl border border-dashed border-accent/50 bg-accent/5 p-5">
          <p className="font-semibold text-foreground">
            Modo de simulação {simulation ? "ativo" : "desligado"}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Visualize esta tela com dados fictícios. Nada é gravado e nenhuma cobrança é feita.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {SIMULATION_MODES.map((mode) => (
              <Button
                key={mode.value}
                asChild
                size="sm"
                variant={simulacao === mode.value ? "default" : "outline"}
                className="rounded-full text-xs font-semibold"
              >
                <Link to="/assinatura" search={{ simulacao: mode.value }}>
                  {mode.label}
                </Link>
              </Button>
            ))}
            {simulation && (
              <Button asChild size="sm" variant="ghost" className="rounded-full text-xs font-semibold">
                <Link to="/assinatura" search={{ simulacao: undefined }}>
                  Sair da simulação
                </Link>
              </Button>
            )}
          </div>
        </section>
      )}

      {/* Confirmação de mudança de plano */}
      <AlertDialog open={Boolean(target)} onOpenChange={(open) => !open && setTargetPlan(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              {isUpgrade ? "Confirmar upgrade" : "Confirmar alteração de plano"}
            </AlertDialogTitle>
            <AlertDialogDescription asChild>
              <div className="space-y-2 text-left text-sm text-muted-foreground">
                <p>
                  Plano atual: <strong className="text-foreground">{nameOf(planKey)}</strong>
                </p>
                <p>
                  Novo plano:{" "}
                  <strong className="text-foreground">{target ? nameOf(target) : "—"}</strong>
                </p>
                {targetTotal != null && (
                  <p>
                    Novo valor: {BRL(targetTotal)} por 12 meses ({INSTALLMENTS}x de{" "}
                    {BRL(installmentOf(targetTotal))})
                  </p>
                )}
                {diff != null && (
                  <p>
                    Diferença de valor: {diff >= 0 ? "+" : "−"}
                    {BRL(Math.abs(diff))} no período anual.
                  </p>
                )}
                <p>
                  {isUpgrade
                    ? "Cobrança: a diferença é cobrada de forma proporcional aos meses restantes do período contratado."
                    : "Cobrança: nada é cobrado agora. O novo valor passa a valer na próxima renovação."}
                </p>
                <p>
                  Quando passa a valer:{" "}
                  {isUpgrade
                    ? "imediatamente após a confirmação."
                    : `na próxima renovação (${formatDate(nextChargeIso) ?? formatDate(endIso) ?? "fim do período contratado"}).`}
                </p>
                {target && (
                  <div>
                    <p className="font-semibold text-foreground">
                      {isUpgrade ? "Recursos liberados:" : "Recursos que deixarão de estar disponíveis:"}
                    </p>
                    <ul className="mt-1 space-y-1">
                      {(isUpgrade
                        ? PLAN_BENEFITS[target].filter((b) => !PLAN_BENEFITS[planKey].includes(b))
                        : PLAN_BENEFITS[planKey].filter((b) => !PLAN_BENEFITS[target].includes(b))
                      ).map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {!isUpgrade && (
                  <p>
                    Seus benefícios atuais continuam disponíveis até o fim do período já contratado.
                  </p>
                )}
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Voltar</AlertDialogCancel>
            {isPaddle && !simulation ? (
              <AlertDialogAction
                disabled={changeMutation.isPending}
                onClick={(event) => {
                  event.preventDefault();
                  if (target) changeMutation.mutate(target);
                }}
              >
                {changeMutation.isPending ? "Confirmando..." : "Confirmar alteração"}
              </AlertDialogAction>
            ) : (
              <AlertDialogAction asChild>
                <Link to="/premium">Continuar nos planos</Link>
              </AlertDialogAction>
            )}
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Confirmação de cancelamento */}
      <AlertDialog open={confirmCancel} onOpenChange={setConfirmCancel}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Cancelar assinatura?</AlertDialogTitle>
            <AlertDialogDescription asChild>
              <div className="space-y-2 text-left text-sm text-muted-foreground">
                <p>• A renovação automática será desligada.</p>
                <p>
                  • Você continua com todos os recursos do plano {nameOf(planKey)} até{" "}
                  {formatDate(endIso) ?? "o fim do período já contratado"}.
                </p>
                <p>• Depois dessa data, sua conta volta ao plano Free.</p>
                <p>• Nenhuma nova cobrança é feita após a confirmação.</p>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Manter assinatura</AlertDialogCancel>
            <AlertDialogAction
              disabled={cancelMutation.isPending}
              onClick={(event) => {
                event.preventDefault();
                cancelMutation.mutate();
              }}
            >
              {cancelMutation.isPending ? "Cancelando..." : "Confirmar cancelamento"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </main>
  );
}
