import { Eye, X } from "lucide-react";
import { setPreviewPlan, useAdminPreviewPlan, useIsAdmin } from "@/lib/entitlements";

const OPTIONS = [
  { key: "", label: "Admin (acesso total)" },
  { key: "free", label: "Cadastro Gratuito" },
  { key: "complete", label: "All Access" },
  { key: "essential", label: "Essential (legado)" },
  { key: "premium", label: "Premium (legado)" },
  { key: "signature", label: "Signature (legado)" },
];

const LABELS: Record<string, string> = {
  free: "Cadastro Gratuito",
  complete: "All Access",
  essential: "Essential (legado)",
  premium: "Premium (legado)",
  signature: "Signature (legado)",
};

/**
 * Só aparece para administradores. Permite ver a plataforma como um aluno de
 * cada plano — os bloqueios passam a seguir a tabela "Compare os planos".
 * Enquanto a pré-visualização está ativa, o seletor sai do cabeçalho e vira
 * uma barra discreta no rodapé, para a tela ficar idêntica à de um aluno.
 */
/** Barra global de saída — renderizada uma única vez no layout autenticado. */
export function AdminPlanPreviewBar() {
  const preview = useAdminPreviewPlan();
  if (!preview) return null;
  return (
      <div className="fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-3 rounded-full border border-gold/40 bg-background/95 px-4 py-2 text-xs shadow-lg backdrop-blur">
        <Eye className="h-3.5 w-3.5 text-gold" />
        <span className="text-muted-foreground">
          Vendo como aluno <strong className="text-gold">{LABELS[preview] ?? preview}</strong>
        </span>
        <button
          type="button"
          onClick={() => setPreviewPlan(null)}
          className="flex items-center gap-1 rounded-full border border-border px-2 py-1 font-semibold text-foreground hover:bg-secondary"
        >
          <X className="h-3 w-3" /> Sair
        </button>
      </div>
  );
}

export function AdminPlanPreview() {
  const isAdmin = useIsAdmin();
  const preview = useAdminPreviewPlan();

  // Ferramenta interna: nunca renderiza para aluno, seja qual for o plano.
  if (!isAdmin) return null;

  // Enquanto a pré-visualização está ativa, a barra global cuida da saída.
  if (preview) return null;

  return (
    <label className="flex items-center gap-2 rounded-full border border-gold/40 bg-gold/5 px-3 py-1.5 text-xs text-muted-foreground">
      <Eye className="h-3.5 w-3.5 text-gold" />
      <span className="hidden sm:inline">Ver como</span>
      <select
        value=""
        onChange={(e) => setPreviewPlan(e.target.value || null)}
        className="bg-transparent text-xs font-semibold text-gold outline-none"
      >
        {OPTIONS.map((o) => (
          <option key={o.key} value={o.key} className="bg-background text-foreground">
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}
