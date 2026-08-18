import { BRL, INSTALLMENTS, installmentOf } from "@/lib/subscription-plans";

/**
 * Hierarquia comercial do preço: a parcela mensal em destaque, deixando claro
 * que a contratação é anual, com o valor total logo abaixo em menor destaque.
 * Quando o aluno tem benefício individual, `discountedTotal` mostra o valor já
 * com desconto (o parcelamento incide sobre ele).
 */
export function PlanPrice({
  total,
  discountedTotal = null,
  align = "left",
  compact = false,
}: {
  total: number | null;
  discountedTotal?: number | null;
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

  const hasDiscount = discountedTotal != null && discountedTotal > 0 && discountedTotal < total;
  const charged = hasDiscount ? discountedTotal! : total;

  return (
    <div className={alignClass}>
      {hasDiscount && (
        <p className="text-sm text-muted-foreground line-through">{BRL(total)}</p>
      )}
      <p className={`font-bold text-accent ${compact ? "text-2xl" : "text-4xl"}`}>
        <span className="text-[0.6em] font-semibold">{INSTALLMENTS}x de </span>
        {BRL(installmentOf(charged))}
      </p>
      <p className="text-sm font-medium text-foreground">Plano anual — acesso por 12 meses</p>
      <p className="mt-1 text-xs text-muted-foreground">
        Valor total: {BRL(charged)} · em até {INSTALLMENTS}x sem juros no cartão ou à vista (Pix ou
        boleto)
      </p>
    </div>
  );
}

