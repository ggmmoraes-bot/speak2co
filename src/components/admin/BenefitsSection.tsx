import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  searchBeneficiaries,
  listBenefits,
  grantCourtesy,
  grantDiscount,
  setBenefitStatus,
  listBenefitHistory,
} from "@/lib/benefits-admin.functions";

type Beneficiary = { id: string; email: string | null; full_name: string | null; plan: string };

const STATUS_LABEL: Record<string, string> = {
  active: "Ativo",
  inactive: "Inativo",
  revoked: "Revogado",
  expired: "Expirado",
};

function fmtDate(value: string | null) {
  if (!value) return "—";
  return new Date(value).toLocaleDateString("pt-BR");
}

/**
 * Benefícios e Assinaturas Especiais — visível apenas dentro do painel
 * administrativo, que já é bloqueado no servidor para quem não é admin.
 */
export function BenefitsSection() {
  const queryClient = useQueryClient();
  const search = useServerFn(searchBeneficiaries);
  const fetchBenefits = useServerFn(listBenefits);
  const courtesy = useServerFn(grantCourtesy);
  const discount = useServerFn(grantDiscount);
  const changeStatus = useServerFn(setBenefitStatus);
  const fetchHistory = useServerFn(listBenefitHistory);

  const [term, setTerm] = useState("");
  const [results, setResults] = useState<Beneficiary[]>([]);
  const [selected, setSelected] = useState<Beneficiary | null>(null);
  const [mode, setMode] = useState<"courtesy" | "discount">("courtesy");
  const [permanent, setPermanent] = useState(true);
  const [startsAt, setStartsAt] = useState("");
  const [endsAt, setEndsAt] = useState("");
  const [percent, setPercent] = useState("10");
  const [code, setCode] = useState("");
  const [usageLimit, setUsageLimit] = useState("1");
  const [note, setNote] = useState("");
  const [busy, setBusy] = useState(false);
  const [historyOf, setHistoryOf] = useState<string | null>(null);

  const { data } = useQuery({ queryKey: ["admin-benefits"], queryFn: () => fetchBenefits() });
  const history = useQuery({
    queryKey: ["admin-benefit-history", historyOf],
    queryFn: () => fetchHistory({ data: { id: historyOf! } }),
    enabled: Boolean(historyOf),
  });

  async function handleSearch() {
    if (term.trim().length < 2) return;
    setBusy(true);
    try {
      const res = await search({ data: { query: term.trim() } });
      setResults(res.users as Beneficiary[]);
      if (!res.users.length) toast.info("Nenhum aluno encontrado com esse nome ou e-mail.");
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Não foi possível buscar.");
    } finally {
      setBusy(false);
    }
  }

  async function refresh() {
    await queryClient.invalidateQueries({ queryKey: ["admin-benefits"] });
  }

  async function handleGrant() {
    if (!selected) return;
    setBusy(true);
    try {
      const base = {
        userId: selected.id,
        email: selected.email,
        planKey: "signature" as const,
        startsAt: startsAt || null,
        endsAt: permanent ? null : endsAt || null,
        note: note.trim() || null,
      };
      if (mode === "courtesy") {
        await courtesy({ data: base });
        toast.success("Cortesia concedida — o plano Signature já está liberado para o aluno.");
      } else {
        await discount({
          data: {
            ...base,
            discountPercent: Number(percent) || 10,
            code: code.trim() || null,
            usageLimit: usageLimit.trim() ? Number(usageLimit) : null,
          },
        });
        toast.success("Desconto especial concedido.");
      }
      setNote("");
      setCode("");
      await refresh();
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Não foi possível conceder o benefício.");
    } finally {
      setBusy(false);
    }
  }

  async function handleStatus(id: string, status: "active" | "inactive" | "revoked") {
    try {
      await changeStatus({ data: { id, status } });
      toast.success(status === "revoked" ? "Benefício revogado." : "Status atualizado.");
      await refresh();
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Não foi possível atualizar o benefício.");
    }
  }

  const benefits = data?.benefits ?? [];

  return (
    <section
      id="beneficios"
      className="mt-10 scroll-mt-24 rounded-2xl border border-gold/40 bg-card p-6 target:ring-2 target:ring-gold/60"
    >
      <h2 className="text-xl font-semibold text-foreground">Benefícios e Assinaturas Especiais</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Conceda o Signature como cortesia ou um desconto individual. O aluno continua sendo aluno —
        nada disso aparece para ele e os preços públicos não mudam.
      </p>

      {/* Buscar aluno */}
      <div className="mt-6 rounded-xl border border-dashed border-border p-5">
        <Label htmlFor="ben-search">Buscar aluno por nome ou e-mail</Label>
        <div className="mt-2 flex gap-2">
          <Input
            id="ben-search"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            placeholder="maria ou maria@email.com"
          />
          <Button disabled={busy} onClick={handleSearch} className="rounded-full font-semibold">
            Buscar
          </Button>
        </div>

        {results.length > 0 && (
          <ul className="mt-4 grid gap-2">
            {results.map((user) => (
              <li key={user.id}>
                <button
                  type="button"
                  onClick={() => setSelected(user)}
                  className={`w-full rounded-lg border px-3 py-2 text-left text-sm transition ${
                    selected?.id === user.id
                      ? "border-gold bg-gold/10"
                      : "border-border hover:border-gold/50"
                  }`}
                >
                  <span className="font-medium text-foreground">{user.full_name ?? "Sem nome"}</span>
                  <span className="ml-2 text-muted-foreground">{user.email}</span>
                  <span className="ml-2 text-xs uppercase text-muted-foreground">{user.plan}</span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Conceder */}
      {selected && (
        <div className="mt-6 rounded-xl border border-border p-5">
          <p className="text-sm text-muted-foreground">
            Beneficiado:{" "}
            <span className="font-semibold text-foreground">
              {selected.full_name ?? selected.email}
            </span>
          </p>

          <div className="mt-4 flex gap-2">
            <Button
              variant={mode === "courtesy" ? "default" : "outline"}
              className="rounded-full"
              onClick={() => setMode("courtesy")}
            >
              Conceder assinatura gratuita
            </Button>
            <Button
              variant={mode === "discount" ? "default" : "outline"}
              className="rounded-full"
              onClick={() => setMode("discount")}
            >
              Conceder desconto especial
            </Button>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div>
              <Label>Plano</Label>
              <Input value="Signature" readOnly />
            </div>

            {mode === "courtesy" ? (
              <div className="flex items-end gap-2">
                <Button
                  variant={permanent ? "default" : "outline"}
                  className="rounded-full"
                  onClick={() => setPermanent(true)}
                >
                  Permanente
                </Button>
                <Button
                  variant={!permanent ? "default" : "outline"}
                  className="rounded-full"
                  onClick={() => setPermanent(false)}
                >
                  Temporária
                </Button>
              </div>
            ) : (
              <>
                <div>
                  <Label htmlFor="ben-percent">Desconto (%)</Label>
                  <Input
                    id="ben-percent"
                    value={percent}
                    onChange={(e) => setPercent(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="ben-code">Código (opcional)</Label>
                  <Input
                    id="ben-code"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="SIGNATURE10"
                  />
                </div>
                <div>
                  <Label htmlFor="ben-limit">Limite de utilização</Label>
                  <Input
                    id="ben-limit"
                    value={usageLimit}
                    onChange={(e) => setUsageLimit(e.target.value)}
                  />
                </div>
              </>
            )}

            <div>
              <Label htmlFor="ben-start">Data de início</Label>
              <Input
                id="ben-start"
                type="date"
                value={startsAt}
                onChange={(e) => setStartsAt(e.target.value)}
              />
            </div>
            {(mode === "discount" || !permanent) && (
              <div>
                <Label htmlFor="ben-end">Data de término</Label>
                <Input
                  id="ben-end"
                  type="date"
                  value={endsAt}
                  onChange={(e) => setEndsAt(e.target.value)}
                />
              </div>
            )}
            <div className="md:col-span-3">
              <Label htmlFor="ben-note">Observação interna</Label>
              <Input id="ben-note" value={note} onChange={(e) => setNote(e.target.value)} />
            </div>
          </div>

          <Button
            disabled={busy}
            onClick={handleGrant}
            className="mt-5 rounded-full bg-gold font-semibold text-primary-foreground hover:opacity-90"
          >
            {mode === "courtesy" ? "Conceder cortesia Signature" : "Conceder desconto"}
          </Button>
        </div>
      )}

      {/* Tabela */}
      <div className="mt-8 overflow-x-auto">
        <table className="w-full min-w-[900px] text-sm">
          <thead>
            <tr className="text-left text-xs uppercase tracking-wider text-muted-foreground">
              <th className="pb-2">Usuário</th>
              <th className="pb-2">E-mail</th>
              <th className="pb-2">Benefício</th>
              <th className="pb-2">Plano</th>
              <th className="pb-2">Desconto</th>
              <th className="pb-2">Validade</th>
              <th className="pb-2">Status</th>
              <th className="pb-2">Concessão</th>
              <th className="pb-2" />
            </tr>
          </thead>
          <tbody>
            {benefits.map((b: any) => (
              <tr key={b.id} className="border-t border-border/60">
                <td className="py-3 text-foreground">{b.full_name ?? "—"}</td>
                <td className="py-3 text-muted-foreground">{b.email_snapshot ?? "—"}</td>
                <td className="py-3">{b.kind === "courtesy" ? "Cortesia" : "Desconto especial"}</td>
                <td className="py-3 capitalize">{b.plan_key}</td>
                <td className="py-3">{Number(b.discount_percent)}%</td>
                <td className="py-3">
                  {b.ends_at ? `${fmtDate(b.starts_at)} – ${fmtDate(b.ends_at)}` : "Permanente"}
                </td>
                <td className="py-3">{STATUS_LABEL[b.status] ?? b.status}</td>
                <td className="py-3">{fmtDate(b.created_at)}</td>
                <td className="py-3 text-right">
                  <div className="flex justify-end gap-2">
                    {b.status === "active" && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="rounded-full"
                        onClick={() => handleStatus(b.id, "inactive")}
                      >
                        Desativar
                      </Button>
                    )}
                    {b.status === "inactive" && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="rounded-full"
                        onClick={() => handleStatus(b.id, "active")}
                      >
                        Reativar
                      </Button>
                    )}
                    {b.status !== "revoked" && (
                      <Button
                        size="sm"
                        variant="destructive"
                        className="rounded-full"
                        onClick={() => handleStatus(b.id, "revoked")}
                      >
                        Revogar
                      </Button>
                    )}
                    <Button
                      size="sm"
                      variant="ghost"
                      className="rounded-full"
                      onClick={() => setHistoryOf(historyOf === b.id ? null : b.id)}
                    >
                      Histórico
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
            {!benefits.length && (
              <tr>
                <td className="py-6 text-muted-foreground" colSpan={9}>
                  Nenhum benefício concedido ainda.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {historyOf && (
        <div className="mt-6 rounded-xl border border-border p-5">
          <h3 className="font-semibold text-foreground">Histórico de auditoria</h3>
          <ul className="mt-3 grid gap-2 text-sm text-muted-foreground">
            {(history.data?.events ?? []).map((event: any) => (
              <li key={event.id}>
                <span className="text-foreground">{event.action}</span> ·{" "}
                {new Date(event.created_at).toLocaleString("pt-BR")}
              </li>
            ))}
            {!history.data?.events?.length && <li>Sem registros.</li>}
          </ul>
        </div>
      )}
    </section>
  );
}
