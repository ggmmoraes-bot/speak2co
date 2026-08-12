import { BRL, INSTALLMENTS, installmentOf } from "@/lib/subscription-plans";

/**
 * Hierarquia comercial do preço: a parcela mensal em destaque, deixando claro
 * que a contratação é anual, com o valor total logo abaixo em menor destaque.
 */
export function PlanPrice({
  total,
  align = "left",
  compact = false,
}: {
  total: number | null;
  align?: "left" | "center";
  compact?: boolean;
}) {
  const alignClass = align === "center" ? "text-center" : "text-left";

  if (total == null || total <= 0) {
    return (
      <div className={alignClass}>
        <p className={`font-bold text-accent ${compact ? "text-2xl" : "text-4xl"}`}>Gratuito</p>
        <p className="text-sm font-medium text-foreground">Sem cobrança</p>
        <p className="mt-1 text-xs text-muted-foreground">Acesso permanente aos recursos free</p>
      </div>
    );
  }

  return (
    <div className={alignClass}>
      <p className={`font-bold text-accent ${compact ? "text-2xl" : "text-4xl"}`}>
        <span className="text-[0.6em] font-semibold">{INSTALLMENTS}x de </span>
        {BRL(installmentOf(total))}
      </p>
      <p className="text-sm font-medium text-foreground">Plano anual — acesso por 12 meses</p>
      <p className="mt-1 text-xs text-muted-foreground">
        Valor total: {BRL(total)} · em até {INSTALLMENTS}x sem juros ou à vista
      </p>
    </div>
  );
}
