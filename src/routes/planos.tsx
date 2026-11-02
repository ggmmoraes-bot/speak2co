import { createFileRoute, Link } from "@tanstack/react-router";
import logo from "@/assets/speak2co-logo.asset.json";
import { AltHeading } from "@/components/AltHeading";
import { Button } from "@/components/ui/button";
import { LifetimeCatalog } from "@/components/LifetimeCatalog";
import { siteUrl } from "@/lib/site";

const TITLE = "Planos e preços — Speak2Co";
const DESCRIPTION =
  "Speak2Co All Access por R$ 97,90 com acesso vitalício e produtos individuais por R$ 19,90: pagamento único, sem mensalidade. Comece grátis hoje.";

export const Route = createFileRoute("/planos")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: siteUrl("/planos") },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: siteUrl("/planos") }],
  }),
  component: PublicPlans,
});

function PublicPlans() {
  return (
    <main className="surface-navy min-h-screen px-6 py-14">
      <div className="mx-auto flex max-w-6xl flex-col gap-16">
        <header className="flex flex-col items-center text-center">
          <img
            src={logo.url}
            alt="Logomarca oficial Speak2Co"
            className="aspect-square w-[min(46vw,220px)] rounded-full object-contain"
          />
          <h1 className="mt-6 text-3xl font-bold sm:text-4xl">
            <AltHeading text="English for Every Opportunity" />
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-muted-foreground sm:text-base">
            Plataforma premium de inglês com cursos completos do A1 ao C1, professor de IA, certificados
            e Product Lines especializadas. Faça o teste de nivelamento gratuito e receba um plano de
            estudos personalizado hoje mesmo.
          </p>
          <div className="mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="btn-gold h-12 flex-1 rounded-full text-sm font-semibold">
              <Link to="/auth">Create free account</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="btn-gold-outline h-12 flex-1 rounded-full text-sm font-semibold text-foreground"
            >
              <Link to="/auth">I already have an account</Link>
            </Button>
          </div>
        </header>

        <LifetimeCatalog
          renderAction={(_key, primary) => (
            <Button
              asChild
              variant={primary ? "default" : "outline"}
              className={
                primary
                  ? "btn-gold h-12 w-full rounded-full text-sm font-bold text-gold-ink uppercase"
                  : "btn-gold-outline h-11 w-full rounded-full text-sm font-semibold text-foreground"
              }
            >
              <Link to="/auth">{primary ? "Get lifetime access" : "Buy"}</Link>
            </Button>
          )}
        />
        <p className="-mt-8 text-center text-xs text-muted-foreground">
          A compra é feita dentro da plataforma, depois de criar sua conta gratuita.
        </p>

        <section className="flex flex-col items-center gap-4 rounded-3xl border border-gold/30 px-6 py-10 text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">
            <AltHeading text="Comece hoje pelo teste gratuito" />
          </h2>
          <p className="max-w-xl text-sm text-muted-foreground">
            Crie sua conta, faça o teste de nivelamento CEFR e receba seu plano de estudos personalizado
            em minutos. Você pode comprar seu acesso vitalício quando quiser.
          </p>
          <Button asChild size="lg" className="btn-gold h-12 rounded-full px-10 text-sm font-semibold">
            <Link to="/auth">Create my account</Link>
          </Button>
        </section>

        <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
          <Link to="/" className="hover:text-accent">
            Início
          </Link>
          <span aria-hidden="true">•</span>
          <Link to="/termos" className="hover:text-accent">
            Termos de Uso
          </Link>
          <span aria-hidden="true">•</span>
          <Link to="/reembolso" className="hover:text-accent">
            Política de Reembolso
          </Link>
          <span aria-hidden="true">•</span>
          <Link to="/privacidade" className="hover:text-accent">
            Aviso de Privacidade
          </Link>
        </nav>
      </div>
    </main>
  );
}
