import type { ReactNode } from "react";
import { Check, Infinity as InfinityIcon } from "lucide-react";
import fluencyArt from "@/assets/speak2fluency.png.asset.json";
import hireArt from "@/assets/speak2hire.asset.json";
import travelArt from "@/assets/speak2travel.asset.json";
import businessArt from "@/assets/speak2business.png.asset.json";
import kidsArt from "@/assets/speak2kids.png.asset.json";
import { AltHeading } from "@/components/AltHeading";
import {
  BRL,
  COMPLETE_PRODUCT,
  INDIVIDUAL_PRODUCTS,
  type IndividualProduct,
  type LifetimeCheckoutKey,
} from "@/lib/subscription-plans";

const ART: Record<IndividualProduct["id"], string> = {
  hire: hireArt.url,
  fluency: fluencyArt.url,
  travel: travelArt.url,
  business: businessArt.url,
  kids: kidsArt.url,
};

/**
 * Vitrine comercial única (página pública e área da aluna): Speak2Co All Access
 * + produtos individuais. Quem chama decide o que cada botão faz.
 */
export function LifetimeCatalog({
  renderAction,
  owned = {},
}: {
  /** Botão de compra de um produto disponível. */
  renderAction: (key: LifetimeCheckoutKey, primary: boolean) => ReactNode;
  /** Produtos que a aluna já possui (por checkoutKey). */
  owned?: Partial<Record<LifetimeCheckoutKey, boolean>>;
}) {
  const installment = COMPLETE_PRODUCT.price / COMPLETE_PRODUCT.installments;
  const ownedBadge = (
    <span className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full border border-gold/50 bg-gold/10 text-sm font-semibold text-gold">
      <Check className="h-4 w-4" /> Você já possui — acesso vitalício
    </span>
  );

  return (
    <div className="flex flex-col gap-14">
      <section aria-labelledby="complete-heading" className="flex flex-col gap-6">
        <p className="text-center text-xs font-semibold tracking-[0.2em] text-gold uppercase">
          Categoria 1 — Plataforma completa
        </p>
        <div className="mx-auto w-full max-w-3xl rounded-3xl border border-gold/60 bg-card p-6 shadow-[0_0_40px_-18px_var(--gold)] sm:p-10">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 id="complete-heading" className="text-2xl font-bold sm:text-3xl">
              <span className="text-foreground">Speak2Co</span>{" "}
              <span className="text-gold">All Access</span>
            </h2>
            <span className="inline-flex items-center gap-1 rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold tracking-wide text-gold uppercase">
              <InfinityIcon className="h-4 w-4" /> Acesso vitalício
            </span>
          </div>
          <p className="mt-6 text-4xl font-bold text-gold">{BRL(COMPLETE_PRODUCT.price)}</p>
          <p className="text-sm font-medium text-foreground">Pagamento único</p>
          <p className="mt-1 text-sm text-muted-foreground">
            ou até {COMPLETE_PRODUCT.installments}x de {BRL(installment)} sem juros no cartão
          </p>
          <ul className="mt-6 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
            {COMPLETE_PRODUCT.benefits.map((b) => (
              <li key={b} className="flex gap-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            {owned.complete_lifetime ? ownedBadge : renderAction("complete_lifetime", true)}
          </div>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            Sem mensalidade · sem renovação automática · sem cobrança recorrente
          </p>
        </div>
      </section>

      <section aria-labelledby="individual-heading" className="flex flex-col gap-6">
        <p className="text-center text-xs font-semibold tracking-[0.2em] text-gold uppercase">
          Categoria 2 — Produtos individuais
        </p>
        <h2 id="individual-heading" className="text-center text-2xl font-bold sm:text-3xl">
          <AltHeading text="Escolha só o que você precisa" />
        </h2>
        <p className="mx-auto max-w-2xl text-center text-sm text-muted-foreground">
          Cada produto é independente: pagamento único de {BRL(19.9)} e acesso vitalício ao produto
          comprado. Você pode comprar quantos quiser, com ou sem o All Access.
        </p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {INDIVIDUAL_PRODUCTS.map((p) => {
            const soon = p.checkoutKey === null;
            return (
              <div
                key={p.id}
                className={`relative flex h-full flex-col rounded-2xl border bg-card p-5 ${
                  soon ? "border-border opacity-80" : "border-gold/30"
                }`}
              >
                {soon && (
                  <span className="absolute top-3 right-3 rounded-full border border-gold/40 bg-background/85 px-3 py-1 text-[10px] font-bold tracking-widest text-gold uppercase">
                    Em breve
                  </span>
                )}
                <img src={ART[p.id]} alt={`Logomarca ${p.name}`} loading="lazy" className="mx-auto h-20 w-auto object-contain" />
                <h3 className="mt-4 text-lg font-semibold text-foreground">{p.name}</h3>
                <p className="mt-1 flex-1 text-sm text-muted-foreground">{p.description}</p>
                <p className="mt-4 text-2xl font-bold text-gold">{BRL(p.price)}</p>
                <p className="text-xs text-muted-foreground">
                  {soon ? "Em desenvolvimento — disponível em breve" : "Pagamento único · acesso vitalício"}
                </p>
                <div className="mt-4">
                  {soon ? (
                    <span className="inline-flex h-11 w-full items-center justify-center rounded-full border border-border text-sm font-semibold text-muted-foreground">
                      Disponível em breve
                    </span>
                  ) : owned[p.checkoutKey!] ? (
                    ownedBadge
                  ) : (
                    renderAction(p.checkoutKey!, false)
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
