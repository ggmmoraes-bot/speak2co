import { getPaddleEnvironment } from "@/lib/paddle";

/** Aviso exibido apenas no ambiente de teste de pagamentos. */
export function PaymentTestModeBanner() {
  if (getPaddleEnvironment() !== "sandbox") return null;

  return (
    <div className="w-full rounded-xl border border-gold/40 bg-gold/10 px-4 py-2 text-center text-sm text-foreground">
      Os pagamentos feitos na pré-visualização estão em modo de teste — nenhuma cobrança real é
      feita.
    </div>
  );
}
