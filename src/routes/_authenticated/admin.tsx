import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useAccess, usePreviewPlan } from "@/lib/entitlements";
import { UpgradeScreen } from "@/components/FeatureGate";
import {
  requireAdminAccess,
  getAdminCatalog,
  upsertPlan,
  deletePlan,
  upsertFeature,
  setPlanFeature,

} from "@/lib/admin.functions";

export const Route = createFileRoute("/_authenticated/admin")({
  head: () => ({
    meta: [
      { title: "Painel administrativo — Speak2Co" },
      {
        name: "description",
        content:
          "Gerencie planos, preços, limites do Professor IA e a matriz de recursos liberados em cada assinatura da Speak2Co.",
      },
      { property: "og:title", content: "Painel administrativo — Speak2Co" },
      {
        property: "og:description",
        content: "Configure planos e permissões de acesso da Speak2Co sem alterar código.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AdminPage,
});

type PlanForm = {
  key: string;
  name: string;
  tagline: string;
  access_level: string;
  monthly_price: string;
  yearly_price: string;
  monthly_checkout_key: string;
  yearly_checkout_key: string;
  ai_daily_minutes: string;
  sort_order: string;
  highlight: boolean;
  is_active: boolean;
};

const EMPTY_PLAN: PlanForm = {
  key: "",
  name: "",
  tagline: "",
  access_level: "10",
  monthly_price: "",
  yearly_price: "",
  monthly_checkout_key: "",
  yearly_checkout_key: "",
  ai_daily_minutes: "",
  sort_order: "10",
  highlight: false,
  is_active: true,
};

function num(value: string) {
  if (value.trim() === "") return null;
  const n = Number(value);
  return Number.isFinite(n) ? n : null;
}

function AdminPage() {
  const { data: access, isPending: accessPending } = useAccess();
  const previewPlan = usePreviewPlan();
  const queryClient = useQueryClient();

  const checkAdmin = useServerFn(requireAdminAccess);
  const fetchCatalog = useServerFn(getAdminCatalog);
  const savePlan = useServerFn(upsertPlan);
  const removePlan = useServerFn(deletePlan);
  const saveFeature = useServerFn(upsertFeature);
  const togglePlanFeature = useServerFn(setPlanFeature);

  // Validação real no backend: o servidor confirma a role de admin.
  // Em modo "Ver como" nem chegamos a perguntar — a tela fica bloqueada.
  const gate = useQuery({
    queryKey: ["admin-gate"],
    queryFn: () => checkAdmin(),
    enabled: !previewPlan,
    retry: false,
    staleTime: 60_000,
  });

  const serverAdmin = gate.data?.isAdmin === true && !previewPlan;

  const { data, isPending } = useQuery({
    queryKey: ["admin-catalog"],
    queryFn: () => fetchCatalog(),
    enabled: serverAdmin,
  });

  const [planForm, setPlanForm] = useState<PlanForm>(EMPTY_PLAN);
  const [featureForm, setFeatureForm] = useState({
    key: "",
    name: "",
    category: "geral",
    description: "",
  });
  const [busy, setBusy] = useState(false);

  const matrix = useMemo(() => {
    const map = new Map<string, boolean>();
    for (const row of data?.planFeatures ?? []) map.set(`${row.plan_key}|${row.feature_key}`, row.enabled);
    return map;
  }, [data]);

  if (!previewPlan && (accessPending || gate.isPending)) {
    return <div className="p-12 text-center text-sm text-muted-foreground">Carregando...</div>;
  }
  if (!serverAdmin || access?.isAdmin !== true) {
    return (
      <UpgradeScreen
        title="Área restrita"
        benefit={
          previewPlan
            ? "Você está no modo “Ver como” — nesta pré-visualização o painel administrativo fica indisponível, como para qualquer aluno."
            : "Esta página é exclusiva para administradores da Speak2Co."
        }
      />
    );
  }


  async function refresh() {
    await queryClient.invalidateQueries({ queryKey: ["admin-catalog"] });
    await queryClient.invalidateQueries({ queryKey: ["my-access"] });
    await queryClient.invalidateQueries({ queryKey: ["plan-catalog"] });
  }

  async function handleSavePlan() {
    setBusy(true);
    try {
      await savePlan({
        data: {
          key: planForm.key.trim(),
          name: planForm.name.trim(),
          tagline: planForm.tagline.trim() || null,
          access_level: Number(planForm.access_level) || 0,
          monthly_price: num(planForm.monthly_price),
          yearly_price: num(planForm.yearly_price),
          monthly_checkout_key: planForm.monthly_checkout_key.trim() || null,
          yearly_checkout_key: planForm.yearly_checkout_key.trim() || null,
          ai_daily_minutes: num(planForm.ai_daily_minutes),
          sort_order: Number(planForm.sort_order) || 0,
          highlight: planForm.highlight,
          is_active: planForm.is_active,
        },
      });
      toast.success("Plano salvo.");
      setPlanForm(EMPTY_PLAN);
      await refresh();
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Não foi possível salvar o plano.");
    } finally {
      setBusy(false);
    }
  }

  async function handleSaveFeature() {
    setBusy(true);
    try {
      await saveFeature({
        data: {
          key: featureForm.key.trim(),
          name: featureForm.name.trim(),
          category: featureForm.category.trim() || "geral",
          description: featureForm.description.trim() || null,
        },
      });
      toast.success("Recurso salvo.");
      setFeatureForm({ key: "", name: "", category: "geral", description: "" });
      await refresh();
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Não foi possível salvar o recurso.");
    } finally {
      setBusy(false);
    }
  }

  async function handleToggle(planKey: string, featureKey: string, enabled: boolean) {
    try {
      await togglePlanFeature({ data: { plan_key: planKey, feature_key: featureKey, enabled } });
      await refresh();
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Não foi possível atualizar o acesso.");
    }
  }

  const plans = data?.plans ?? [];
  const features = data?.features ?? [];

  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-14">
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-gold">Administração</p>
          <h1 className="mt-2 text-3xl font-bold text-foreground">Planos e permissões</h1>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Crie novos planos, ajuste preços e limites do Professor IA e defina exatamente quais
            recursos cada assinatura libera — tudo sem mexer no código.
          </p>
        </div>
        <Button asChild variant="outline" className="rounded-full font-semibold">
          <Link to="/painel">Voltar ao painel</Link>
        </Button>
      </header>

      {isPending && <p className="mt-8 text-sm text-muted-foreground">Carregando catálogo...</p>}

      <section className="mt-10 rounded-2xl border border-border bg-card p-6">
        <h2 className="text-xl font-semibold text-foreground">Planos</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[720px] text-sm">
            <thead>
              <tr className="text-left text-xs uppercase tracking-wider text-muted-foreground">
                <th className="pb-2">Plano</th>
                <th className="pb-2">Nível</th>
                <th className="pb-2">Anual</th>
                <th className="pb-2">12x</th>

                <th className="pb-2">IA / dia</th>
                <th className="pb-2">Ativo</th>
                <th className="pb-2" />
              </tr>
            </thead>
            <tbody>
              {plans.map((plan) => (
                <tr key={plan.key} className="border-t border-border/60">
                  <td className="py-3">
                    <p className="font-semibold text-foreground">{plan.name}</p>
                    <p className="text-xs text-muted-foreground">{plan.key}</p>
                  </td>
                  <td>{plan.access_level}</td>
                  <td>{plan.yearly_price != null ? `R$ ${Number(plan.yearly_price).toFixed(2)}` : "—"}</td>
                  <td>
                    {plan.yearly_price != null
                      ? `12x R$ ${(Number(plan.yearly_price) / 12).toFixed(2)}`
                      : "—"}
                  </td>

                  <td>{plan.ai_daily_minutes == null ? "Ilimitado" : `${plan.ai_daily_minutes} min`}</td>
                  <td>{plan.is_active ? "Sim" : "Não"}</td>
                  <td className="py-3 text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="rounded-full text-xs"
                        onClick={() =>
                          setPlanForm({
                            key: plan.key,
                            name: plan.name,
                            tagline: plan.tagline ?? "",
                            access_level: String(plan.access_level ?? 0),
                            monthly_price: plan.monthly_price != null ? String(plan.monthly_price) : "",
                            yearly_price: plan.yearly_price != null ? String(plan.yearly_price) : "",
                            monthly_checkout_key: plan.monthly_checkout_key ?? "",
                            yearly_checkout_key: plan.yearly_checkout_key ?? "",
                            ai_daily_minutes:
                              plan.ai_daily_minutes != null ? String(plan.ai_daily_minutes) : "",
                            sort_order: String(plan.sort_order ?? 0),
                            highlight: Boolean(plan.highlight),
                            is_active: Boolean(plan.is_active),
                          })
                        }
                      >
                        Editar
                      </Button>
                      {plan.key !== "free" && (
                        <Button
                          size="sm"
                          variant="ghost"
                          className="rounded-full text-xs text-destructive"
                          onClick={async () => {
                            try {
                              await removePlan({ data: { key: plan.key } });
                              toast.success("Plano removido.");
                              await refresh();
                            } catch (e) {
                              toast.error(e instanceof Error ? e.message : "Falha ao remover.");
                            }
                          }}
                        >
                          Remover
                        </Button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 rounded-xl border border-dashed border-border p-5">
          <h3 className="font-semibold text-foreground">
            {plans.some((p) => p.key === planForm.key) ? "Editar plano" : "Novo plano"}
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div>
              <Label htmlFor="plan-key">Chave (slug)</Label>
              <Input
                id="plan-key"
                value={planForm.key}
                onChange={(e) => setPlanForm({ ...planForm, key: e.target.value })}
                placeholder="signature"
              />
            </div>
            <div>
              <Label htmlFor="plan-name">Nome</Label>
              <Input
                id="plan-name"
                value={planForm.name}
                onChange={(e) => setPlanForm({ ...planForm, name: e.target.value })}
                placeholder="Signature"
              />
            </div>
            <div>
              <Label htmlFor="plan-level">Nível de acesso</Label>
              <Input
                id="plan-level"
                value={planForm.access_level}
                onChange={(e) => setPlanForm({ ...planForm, access_level: e.target.value })}
              />
            </div>
            <div className="md:col-span-3">
              <Label htmlFor="plan-tagline">Chamada</Label>
              <Input
                id="plan-tagline"
                value={planForm.tagline}
                onChange={(e) => setPlanForm({ ...planForm, tagline: e.target.value })}
                placeholder="Experiência VIP com a GiseleAI"
              />
            </div>
            <div>
              <Label htmlFor="plan-yearly">Preço anual (R$)</Label>
              <Input
                id="plan-yearly"
                value={planForm.yearly_price}
                onChange={(e) => setPlanForm({ ...planForm, yearly_price: e.target.value })}
              />
            </div>

            <div>
              <Label htmlFor="plan-ai">Minutos de IA por dia (vazio = ilimitado)</Label>
              <Input
                id="plan-ai"
                value={planForm.ai_daily_minutes}
                onChange={(e) => setPlanForm({ ...planForm, ai_daily_minutes: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="plan-installment">Parcelamento (12x sem juros)</Label>
              <Input
                id="plan-installment"
                readOnly
                value={
                  planForm.yearly_price
                    ? `12x de R$ ${(Number(planForm.yearly_price) / 12).toFixed(2)}`
                    : "—"
                }
              />
            </div>

            <div>
              <Label htmlFor="plan-ck-y">Checkout anual</Label>
              <Input
                id="plan-ck-y"
                value={planForm.yearly_checkout_key}
                onChange={(e) => setPlanForm({ ...planForm, yearly_checkout_key: e.target.value })}
                placeholder="premium_yearly"
              />
            </div>
            <div>
              <Label htmlFor="plan-order">Ordem</Label>
              <Input
                id="plan-order"
                value={planForm.sort_order}
                onChange={(e) => setPlanForm({ ...planForm, sort_order: e.target.value })}
              />
            </div>
            <div className="flex items-center gap-3">
              <Switch
                id="plan-highlight"
                checked={planForm.highlight}
                onCheckedChange={(v) => setPlanForm({ ...planForm, highlight: v })}
              />
              <Label htmlFor="plan-highlight">Destacar na vitrine</Label>
            </div>
            <div className="flex items-center gap-3">
              <Switch
                id="plan-active"
                checked={planForm.is_active}
                onCheckedChange={(v) => setPlanForm({ ...planForm, is_active: v })}
              />
              <Label htmlFor="plan-active">Plano ativo</Label>
            </div>
          </div>
          <div className="mt-5 flex gap-3">
            <Button
              disabled={busy || !planForm.key || !planForm.name}
              onClick={handleSavePlan}
              className="rounded-full bg-gold font-semibold text-primary-foreground hover:opacity-90"
            >
              Salvar plano
            </Button>
            <Button variant="ghost" className="rounded-full" onClick={() => setPlanForm(EMPTY_PLAN)}>
              Limpar
            </Button>
          </div>
        </div>
      </section>

      <section className="mt-10 rounded-2xl border border-border bg-card p-6">
        <h2 className="text-xl font-semibold text-foreground">Matriz de recursos</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Marque o que cada plano libera. As mudanças valem imediatamente para os alunos.
        </p>
        <div className="mt-5 overflow-x-auto">
          <table className="w-full min-w-[700px] text-sm">
            <thead>
              <tr className="text-left text-xs uppercase tracking-wider text-muted-foreground">
                <th className="pb-2">Recurso</th>
                {plans.map((plan) => (
                  <th key={plan.key} className="pb-2 text-center">
                    {plan.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature) => (
                <tr key={feature.key} className="border-t border-border/60">
                  <td className="py-3">
                    <p className="font-medium text-foreground">{feature.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {feature.category} · {feature.key}
                    </p>
                  </td>
                  {plans.map((plan) => (
                    <td key={plan.key} className="py-3 text-center">
                      <Switch
                        checked={matrix.get(`${plan.key}|${feature.key}`) === true}
                        onCheckedChange={(v) => handleToggle(plan.key, feature.key, v)}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 rounded-xl border border-dashed border-border p-5">
          <h3 className="font-semibold text-foreground">Novo recurso</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-4">
            <div>
              <Label htmlFor="f-key">Chave</Label>
              <Input
                id="f-key"
                value={featureForm.key}
                onChange={(e) => setFeatureForm({ ...featureForm, key: e.target.value })}
                placeholder="live_mentoring"
              />
            </div>
            <div>
              <Label htmlFor="f-name">Nome</Label>
              <Input
                id="f-name"
                value={featureForm.name}
                onChange={(e) => setFeatureForm({ ...featureForm, name: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="f-cat">Categoria</Label>
              <Input
                id="f-cat"
                value={featureForm.category}
                onChange={(e) => setFeatureForm({ ...featureForm, category: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="f-desc">Descrição</Label>
              <Input
                id="f-desc"
                value={featureForm.description}
                onChange={(e) => setFeatureForm({ ...featureForm, description: e.target.value })}
              />
            </div>
          </div>
          <Button
            disabled={busy || !featureForm.key || !featureForm.name}
            onClick={handleSaveFeature}
            className="mt-5 rounded-full bg-gold font-semibold text-primary-foreground hover:opacity-90"
          >
            Salvar recurso
          </Button>
        </div>
      </section>
    </main>
  );
}
