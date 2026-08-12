import { createFileRoute } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import giseleAiArt from "@/assets/gisele-ai-art.png.asset.json";
import { BrandText } from "@/components/BrandText";
import { Button } from "@/components/ui/button";
import { getMySubscription, startMercadoPagoCheckout } from "@/lib/subscriptions.functions";
import { getPlanCatalog } from "@/lib/entitlements.functions";
import { changePaddlePlan } from "@/lib/payments.functions";
import { usePaddleCheckout } from "@/hooks/usePaddleCheckout";
import { usePreviewPlan } from "@/lib/entitlements";
import { PaymentTestModeBanner } from "@/components/PaymentTestModeBanner";
import { PlanUnlockedDialog } from "@/components/PlanUnlockedDialog";
import { PlanPrice } from "@/components/PlanPrice";

export const Route = createFileRoute("/_authenticated/premium")({
  head: () => ({
    meta: [
      { title: "Planos anuais — Speak2Co" },
      {
        name: "description",
        content:
          "Assinaturas anuais Speak2Co: Essential, Premium e Signature com acesso por 12 meses e parcelamento em até 12x sem juros.",
      },
      { property: "og:title", content: "Planos anuais — Speak2Co" },
      {
        property: "og:description",
        content:
          "Escolha seu plano anual Speak2Co e pague à vista ou em até 12x sem juros, com Pix, boleto ou cartão.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PremiumPage,
});

const BRL = (value: number) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

type Tier = {
  id: "essential" | "premium" | "signature";
  label: string;
  badge: string;
  description: string;
  yearly: { key: "essential_yearly" | "premium_yearly" | "signature_yearly"; price: number };
  perks: string[];
  highlight: boolean;
};

const TIERS: Tier[] = [
  {
    id: "essential",
    label: "Essential",
    badge: "Ideal para iniciantes",
    description: "Perfeito para quem está construindo a base no inglês.",
    yearly: { key: "essential_yearly", price: 430.8 },
    perks: [
      "Curso Beginner (A1–A2) e Intermediate (B1) completos",
      "Plano de estudos personalizado completo",
      "Exercícios diários, quizzes e AI Pronunciation",
      "AI Teacher — 20 minutos por dia",
    ],
    highlight: false,
  },
  {
    id: "premium",
    label: "Premium ⭐",
    badge: "Mais Vendido",
    description: "Inclui todos os benefícios do Essential mais conteúdos exclusivos.",
    yearly: { key: "premium_yearly", price: 479.0 },
    perks: [
      "Tudo do Essential",
      "Curso Upper-Intermediate (B2)",
      "Speak2Hire, Speak2Travel e Speak2Fluency completos",
      "Certificados de evolução",
      "AI Teacher — uso ilimitado",
    ],
    highlight: true,
  },
  {
    id: "signature",
    label: "Signature 👑",
    badge: "Experiência Completa",
    description:
      "Acesso total a todos os recursos, benefícios premium e futuras funcionalidades.",
    yearly: { key: "signature_yearly", price: 579.0 },
    perks: [
      "Tudo do Premium",
      "GiseleAI by Speak2Co ilimitada",
      "Voice Room com a voz autorizada da fundadora",
      "Feedback e relatórios personalizados da mentora",
    ],
    highlight: false,
  },
];

type CellValue = boolean | string;

const COMPARISON_ROWS: { feature: string; essential: CellValue; premium: CellValue; signature: CellValue }[] = [
  { feature: "Aulas guiadas", essential: true, premium: true, signature: true },
  { feature: "Curso Beginner (A1–A2)", essential: true, premium: true, signature: true },
  { feature: "Curso Intermediate (B1)", essential: true, premium: true, signature: true },
  { feature: "Curso Upper-Intermediate (B2)", essential: false, premium: true, signature: true },
  { feature: "Exercícios diários", essential: true, premium: true, signature: true },
  { feature: "Quizzes de vocabulário e gramática", essential: true, premium: true, signature: true },
  { feature: "Plano de estudos personalizado", essential: true, premium: true, signature: true },
  { feature: "Teste de nivelamento (CEFR)", essential: true, premium: true, signature: true },
  { feature: "Trilhas completas — Speak2Hire", essential: false, premium: true, signature: true },
  { feature: "Trilhas completas — Speak2Travel (10 módulos)", essential: false, premium: true, signature: true },
  { feature: "Trilhas completas — Speak2Fluency (8 módulos)", essential: false, premium: true, signature: true },
  { feature: "Rotina diária de fluência (25 min) — Speak2Fluency", essential: false, premium: true, signature: true },
  { feature: "Feedback de IA em pronunciation, stress, intonation e fluency", essential: false, premium: true, signature: true },
  { feature: "Simulador de entrevista com IA", essential: false, premium: true, signature: true },
  { feature: "Role play de viagem com IA", essential: false, premium: true, signature: true },
  { feature: "Certificados de evolução", essential: false, premium: true, signature: true },
  { feature: "Ranking de fluência", essential: false, premium: true, signature: true },
  { feature: "AI Teacher (chat)", essential: "20 min/dia", premium: "Ilimitado", signature: "Ilimitado" },
  { feature: "AI Pronunciation (feedback de pronúncia)", essential: true, premium: true, signature: true },
  { feature: "GiseleAI ilimitada", essential: false, premium: false, signature: true },
  { feature: "Voice Room com voz autorizada da fundadora", essential: false, premium: false, signature: true },
  { feature: "Memória contextual e plano da mentora", essential: false, premium: false, signature: true },
  { feature: "Relatórios de progresso escritos pela GiseleAI", essential: false, premium: false, signature: true },
  { feature: "Missão do dia e recomendações personalizadas", essential: false, premium: false, signature: true },
];

const GISELE_SHOWCASE = [
  {
    titleEn: "Conversation with real feedback",
    titlePt: "Conversas com feedback em 4 blocos: correção, vocabulário, pronúncia e próximo passo.",
  },
  {
    titleEn: "Voice Room",
    titlePt: "Fale e ouça em tempo real com a voz autorizada da fundadora e sotaque nativo em inglês.",
  },
  {
    titleEn: "Contextual memory",
    titlePt: "Ela lembra do seu nível, dos seus erros recorrentes e do seu progresso nos produtos Speak2.",
  },
  {
    titleEn: "Daily mission & reports",
    titlePt: "Missão do dia, recomendações e relatórios de evolução escritos por ela.",
  },
];

function cell(value: CellValue) {
  if (value === true) return <span className="font-bold text-accent">✓</span>;
  if (value === false) return <span className="text-muted-foreground/40">—</span>;
  return <span className="text-foreground">{value}</span>;
}

function PremiumPage() {
  const previewPlan = usePreviewPlan();
  const queryClient = useQueryClient();
  const fetchSubscription = useServerFn(getMySubscription);
  const checkout = useServerFn(startMercadoPagoCheckout);
  const paddle = usePaddleCheckout();
  const fetchCatalog = useServerFn(getPlanCatalog);
  const changePlan = useServerFn(changePaddlePlan);
  const { data: catalog } = useQuery({ queryKey: ["plan-catalog"], queryFn: () => fetchCatalog() });

  /** Preço anual vindo do banco, com fallback para o valor de tabela. */
  const yearlyPriceOf = (tier: Tier) => {
    const value = catalog?.plans.find((p) => p.key === tier.id)?.yearly_price;
    return value == null ? tier.yearly.price : Number(value);
  };
  const installmentOf = (total: number) => total / 12;

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
          : "Downgrade agendado — seu plano atual continua até o fim dos 12 meses já pagos.",
      );
    },
    onError: (error: Error) => toast.error(error.message),
  });

  const startPaddle = (priceId: string) => {
    paddle.openCheckout(priceId).catch((error: Error) => toast.error(error.message));
  };

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
        <p className="text-sm uppercase tracking-[0.3em] text-accent">Planos anuais Speak2Co</p>
        <h1 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
          English for Every Opportunity
        </h1>
        <p className="mt-3 text-muted-foreground">
          Todos os planos são anuais: acesso por 12 meses, à vista ou em até 12x sem juros.
        </p>
      </header>

      <section className="mt-10 overflow-hidden rounded-3xl border border-accent/40 bg-gradient-to-br from-accent/15 via-card to-card p-6 md:p-8">
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
          <img
            src={giseleAiArt.url}
            alt="GiseleAI by Speak2Co — mentora de inglês com IA"
            className="w-full max-w-sm shrink-0 rounded-2xl object-contain ring-1 ring-accent/40 md:w-72"
            loading="lazy"
          />
          <div className="flex-1 text-center md:text-left">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Exclusivo Signature</p>
            <h2 className="mt-2 text-2xl font-bold md:text-3xl">
              <BrandText text="GiseleAI" /> <span className="text-foreground">by</span>{" "}
              <BrandText text="Speak2Co" />
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">
                Your Personal English Mentor powered by AI.
              </span>{" "}
              A mentoria completa da Speak2Co: ela conhece o seu nível, o seu histórico e conduz a
              sua evolução todos os dias.
            </p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {GISELE_SHOWCASE.map((item) => (
                <li
                  key={item.titleEn}
                  className="rounded-xl border border-border/60 bg-background/40 p-3 text-left"
                >
                  <p className="text-sm font-semibold text-accent">{item.titleEn}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{item.titlePt}</p>
                </li>
              ))}
            </ul>
            {currentTier === "signature" ? (
              <p className="mt-5 text-sm font-semibold text-accent">
                ✓ Incluída no seu plano Signature — acesse em "GiseleAI" no painel.
              </p>
            ) : (
              <Button
                className="mt-5 rounded-full font-semibold"
                disabled={paddle.loading}
                onClick={() => startPaddle("signature_yearly")}
              >
                🔒 Desbloquear GiseleAI com o Signature
              </Button>
            )}
          </div>
        </div>
      </section>


      {!previewPlan && !isActive && showPending && (
        <div className="mt-8 rounded-xl border border-border bg-card p-4 text-center text-muted-foreground">
          Encontramos uma assinatura aguardando pagamento.
          <a className="ml-1 font-semibold text-accent underline" href={pending!.init_point!}>
            Concluir pagamento
          </a>
        </div>
      )}

      <section className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <article className="flex flex-col rounded-2xl border border-border bg-card p-8 shadow-lg">
          <span className="self-start rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
            Para começar
          </span>
          <h2 className="mt-4 text-xl font-semibold text-foreground">Free</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Conheça a plataforma e descubra o seu nível de inglês.
          </p>
          <div className="mt-5">
            <PlanPrice total={null} />
          </div>
          <p className="mt-3 text-xs text-muted-foreground">Sem contratação e sem renovação</p>
          <ul className="mt-6 flex-1 space-y-2 text-sm text-muted-foreground">
            <li>• Teste de nivelamento CEFR</li>
            <li>• Amostra do plano de estudos</li>
            <li>• Exercícios diários limitados</li>
            <li>• AI Teacher — 20 minutos por dia</li>
          </ul>
          <div className="mt-8">
            <Button className="w-full" variant="outline" disabled>
              {currentTier ? "Plano de entrada" : "Seu plano atual"}
            </Button>
          </div>
        </article>
        {TIERS.map((tier) => {
          const total = yearlyPriceOf(tier);
          const isCurrent = currentTier === tier.id;
          return (
            <article
              key={tier.id}
              className={`flex flex-col rounded-2xl border bg-card p-8 shadow-lg ${
                tier.highlight ? "border-accent ring-1 ring-accent/40" : "border-border"
              }`}
            >
              <span
                className={`self-start rounded-full px-3 py-1 text-xs font-semibold ${
                  tier.highlight
                    ? "bg-accent text-accent-foreground"
                    : "bg-accent/10 text-accent"
                }`}
              >
                {tier.badge}
              </span>
              <h2 className="mt-4 text-xl font-semibold text-foreground">{tier.label}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{tier.description}</p>

              <div className="mt-5">
                <PlanPrice total={total} />
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                Contratação anual · Renovação automática conforme os termos
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
                    onClick={() => changeMutation.mutate(tier.yearly.key)}
                  >
                    {changeMutation.isPending
                      ? "Atualizando..."
                      : levelOf(tier.id) > levelOf(currentTier)
                        ? "Fazer upgrade agora"
                        : "Agendar downgrade para a próxima renovação"}
                  </Button>
                ) : (
                  <>
                    <Button
                      className="h-auto w-full whitespace-normal py-2 text-xs leading-tight"
                      variant={tier.highlight ? "default" : "outline"}
                      disabled={paddle.loading}
                      onClick={() => startPaddle(tier.yearly.key)}
                    >
                      {paddle.loading ? "Abrindo checkout..." : "Assinar com cartão (internacional)"}
                    </Button>
                    <Button
                      className="h-auto w-full whitespace-normal py-2 text-xs leading-tight"
                      variant="ghost"
                      disabled={mutation.isPending}
                      onClick={() => mutation.mutate(tier.yearly.key)}
                    >
                      {mutation.isPending
                        ? "Abrindo checkout..."
                        : "Assinar com Mercado Pago (Pix/boleto/cartão)"}
                    </Button>
                  </>
                )}
              </div>
            </article>
          );
        })}
      </section>

      <section className="mt-14">
        <h2 className="text-center text-2xl font-bold text-foreground">Compare os planos</h2>
        <p className="mt-2 text-center text-sm text-muted-foreground">
          Veja exatamente o que cada plano anual libera durante os 12 meses de acesso.
        </p>

        {/* Mobile: cards por plano */}
        <div className="mt-8 space-y-4 md:hidden">
          {TIERS.map((tier) => (
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
                <span className="text-right text-xs font-medium text-muted-foreground">
                  12x {BRL(installmentOf(yearlyPriceOf(tier)))}
                  <br />
                  Plano anual · total {BRL(yearlyPriceOf(tier))}
                </span>
                <span className="ml-auto text-muted-foreground transition group-open:rotate-180">
                  ▾
                </span>
              </summary>
              <div className="divide-y divide-border border-t border-border px-5 pb-4">
                {COMPARISON_ROWS.map((row) => (
                  <div key={row.feature} className="flex items-center justify-between gap-3 py-2.5">
                    <span className="min-w-0 text-sm text-muted-foreground">{row.feature}</span>
                    <span className="shrink-0 text-sm">{cell(row[tier.id])}</span>
                  </div>
                ))}
              </div>
            </details>
          ))}
          <p className="text-center text-xs text-muted-foreground">
            Acesso por 12 meses · Renovação anual automática conforme os termos.
          </p>
        </div>

        {/* Desktop: tabela comparativa */}
        <div className="mt-8 hidden overflow-x-auto rounded-2xl border border-border bg-card shadow-lg md:block">
          <table className="w-full min-w-[680px] text-left text-sm">
            <thead>
              <tr className="border-b border-border bg-accent/5">
                <th className="px-6 py-4 font-semibold text-foreground">Recurso</th>
                {TIERS.map((tier) => (
                  <th
                    key={tier.id}
                    className={`px-6 py-4 text-center font-semibold ${
                      tier.highlight ? "text-accent" : "text-foreground"
                    }`}
                  >
                    {tier.label}
                    <span className="mt-1 block text-xs font-medium text-muted-foreground">
                      {tier.badge}
                    </span>
                  </th>
                ))}
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
                {TIERS.map((tier) => (
                  <td key={tier.id} className="px-6 py-4 text-center text-foreground">
                    12 meses
                  </td>
                ))}
              </tr>
              <tr>
                <td className="px-6 py-4 text-muted-foreground">Parcela mensal (plano anual)</td>
                {TIERS.map((tier) => (
                  <td
                    key={tier.id}
                    className={`px-6 py-4 text-center ${
                      tier.highlight ? "text-accent" : "text-foreground"
                    }`}
                  >
                    <span className="text-lg font-bold">12x {BRL(installmentOf(yearlyPriceOf(tier)))}</span>
                  </td>
                ))}
              </tr>
              <tr>
                <td className="px-6 py-4 text-muted-foreground">Valor total da contratação</td>
                {TIERS.map((tier) => (
                  <td key={tier.id} className="px-6 py-4 text-center text-muted-foreground">
                    {BRL(yearlyPriceOf(tier))} por 12 meses
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 hidden text-center text-xs text-muted-foreground md:block">
          Acesso por 12 meses · Renovação anual automática conforme os termos.
        </p>
      </section>

      <section className="mt-14">
        <h2 className="text-center text-2xl font-bold text-foreground">Perguntas frequentes</h2>
        <div className="mx-auto mt-6 max-w-3xl space-y-3">
          {[
            {
              q: "Existe plano mensal?",
              a: "Não. A Speak2Co trabalha exclusivamente com assinaturas anuais — você garante 12 meses de acesso e pode parcelar em até 12x sem juros no cartão.",
            },
            {
              q: "Como funciona o parcelamento em 12x sem juros?",
              a: "O valor anual pode ser dividido em até 12 vezes iguais no cartão de crédito, sem acréscimo. O acesso é liberado integralmente na aprovação da compra.",
            },
            {
              q: "A renovação é automática?",
              a: "Sim. A renovação é anual e automática conforme os termos, e você pode cancelar quando quiser em Minha Assinatura — o acesso continua até o fim dos 12 meses já pagos.",
            },
            {
              q: "Posso trocar de plano depois?",
              a: "Pode. Upgrades entram em vigor na hora, com cobrança proporcional aos meses restantes. Downgrades são agendados para a próxima renovação anual.",
            },
          ].map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-border bg-card px-5 py-4 shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-semibold text-foreground">
                {item.q}
                <span className="text-muted-foreground transition group-open:rotate-180">▾</span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{item.a}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
