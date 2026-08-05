import { Eye } from "lucide-react";
import { setPreviewPlan, usePreviewPlan } from "@/lib/entitlements";

const OPTIONS = [
  { key: "", label: "Admin (acesso total)" },
  { key: "free", label: "Free" },
  { key: "essential", label: "Essential" },
  { key: "premium", label: "Premium" },
  { key: "signature", label: "Signature" },
];

/**
 * Só aparece para administradores. Permite ver a plataforma como um aluno de
 * cada plano — os bloqueios passam a seguir a tabela "Compare os planos".
 */
export function AdminPlanPreview() {
  const preview = usePreviewPlan();

  return (
    <label className="flex items-center gap-2 rounded-full border border-gold/40 bg-gold/5 px-3 py-1.5 text-xs text-muted-foreground">
      <Eye className="h-3.5 w-3.5 text-gold" />
      <span className="hidden sm:inline">Ver como</span>
      <select
        value={preview ?? ""}
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
