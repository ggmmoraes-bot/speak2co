import { createFileRoute, Link } from "@tanstack/react-router";
import { AltHeading } from "@/components/AltHeading";

export const Route = createFileRoute("/reembolso")({
  head: () => ({
    meta: [
      { title: "Política de Reembolso | Speak2Co" },
      {
        name: "description",
        content:
          "Garantia de 30 dias nas compras Speak2Co: como pedir reembolso, prazos e como o pagamento é devolvido.",
      },
      { property: "og:title", content: "Política de Reembolso | Speak2Co" },
      {
        property: "og:description",
        content: "Garantia de satisfação de 30 dias nas compras da Speak2Co.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RefundPage,
});

const ITEMS = [
  "Garantia de satisfação de 30 dias: se a Speak2Co não for para você, peça o reembolso integral em até 30 dias contados da data da compra.",
  "Compras com cartão internacional são processadas pela Paddle.com, nossa revendedora e Merchant of Record. O pedido de reembolso pode ser feito diretamente em paddle.net, informando o e-mail usado na compra, ou pelo nosso atendimento — nós encaminhamos.",
  "Compras feitas em reais pelo Mercado Pago são reembolsadas pelo mesmo meio de pagamento utilizado na contratação.",
  "O valor é devolvido pelo mesmo meio de pagamento. O prazo de crédito depende do banco ou da operadora do cartão, normalmente entre 5 e 10 dias úteis após a aprovação.",
  "Todas as compras são de pagamento único com acesso vitalício: não há mensalidade nem renovação automática a cancelar.",
  "Certificados e PDFs já emitidos continuam sendo seus, mesmo após o reembolso; o acesso à plataforma é encerrado quando o reembolso é processado.",
];

function RefundPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-16">
      <p className="text-sm tracking-[0.3em] text-accent uppercase">Speak2Co</p>
      <h1 className="mt-3 text-3xl font-bold md:text-4xl">
        <AltHeading text="Política de Reembolso" />
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">
        Última atualização: agosto de 2026. Veja também os{" "}
        <Link to="/termos" className="text-accent underline">
          Termos de Uso
        </Link>
        .
      </p>

      <ul className="mt-10 space-y-4 text-sm leading-relaxed text-muted-foreground">
        {ITEMS.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </main>
  );
}
