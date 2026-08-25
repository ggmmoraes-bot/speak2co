import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import logo from "@/assets/speak2co-logo.asset.json";
import fluencyArt from "@/assets/speak2fluency.png.asset.json";
import hireArt from "@/assets/speak2hire.asset.json";
import travelArt from "@/assets/speak2travel.asset.json";
import businessArt from "@/assets/speak2business.png.asset.json";
import kidsArt from "@/assets/speak2kids.png.asset.json";
import { AltHeading } from "@/components/AltHeading";
import { PlanPrice } from "@/components/PlanPrice";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { PLAN_BENEFITS, PLAN_META, PLAN_ORDER } from "@/lib/subscription-plans";
import { siteUrl } from "@/lib/site";

const TITLE = "Planos e preços — Speak2Co";
const DESCRIPTION =
  "Conheça os planos anuais da Speak2Co: cursos completos, AI Teacher, Speak2Hire, Speak2Travel, Speak2Fluency, Speak2Business, Speak2Kids e GiseleAI. Comece grátis hoje.";

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

const PLAN_TAGLINE: Record<string, string> = {
  free: "Comece agora, sem cartão",
  essential: "Construa a base do seu inglês",
  premium: "Mais vendido — fluência e carreira",
  signature: "Mentoria exclusiva com a GiseleAI",
};

const PRODUCT_LINES = [
  {
    title: "Speak2Hire",
    art: hireArt.url,
    text: "Entrevistas de emprego em inglês simuladas com IA e feedback profissional.",
  },
  {
    title: "Speak2Travel",
    art: travelArt.url,
    text: "Inglês para viagens: 10 módulos, Trip Planner e material de sobrevivência.",
  },
  {
    title: "Speak2Fluency",
    art: fluencyArt.url,
    text: "Rotina diária de fluência com missões, simulações e feedback da IA.",
  },
  {
    title: "Speak2Business",
    art: businessArt.url,
    text: "Inglês corporativo para reuniões, negociação e liderança. Acesso a partir do Premium.",
    comingSoon: true,
  },
  {
    title: "Speak2Kids",
    art: kidsArt.url,
    text: "Inglês lúdico para crianças, com atividades interativas. Acesso a partir do Premium.",
    comingSoon: true,
  },
];

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
              <Link to="/auth">Criar conta grátis</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="btn-gold-outline h-12 flex-1 rounded-full text-sm font-semibold text-foreground"
            >
              <Link to="/auth">Já sou aluno</Link>
            </Button>
          </div>
        </header>

        <section aria-labelledby="planos-heading" className="flex flex-col gap-8">
          <h2 id="planos-heading" className="text-center text-2xl font-bold sm:text-3xl">
            <AltHeading text="Escolha o seu plano" />
          </h2>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {PLAN_ORDER.map((key) => {
              const meta = PLAN_META[key];
              const highlight = key === "premium";
              return (
                <Card
                  key={key}
                  className={`flex h-full flex-col border ${
                    highlight ? "border-gold/60 shadow-[0_0_40px_-18px_var(--gold)]" : "border-border"
                  }`}
                >
                  <CardHeader className="gap-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-lg font-semibold text-foreground">{meta.name}</span>
                      {highlight ? (
                        <span className="rounded-full bg-gold/15 px-3 py-1 text-[11px] font-semibold tracking-wide text-gold uppercase">
                          Mais vendido
                        </span>
                      ) : null}
                    </div>
                    <p className="text-xs text-muted-foreground">{PLAN_TAGLINE[key]}</p>
                    <PlanPrice total={meta.yearlyPrice} compact />
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col gap-4">
                    <ul className="flex flex-1 flex-col gap-2 text-sm text-muted-foreground">
                      {PLAN_BENEFITS[key].map((benefit) => (
                        <li key={benefit} className="flex gap-2">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      className={
                        highlight
                          ? "btn-gold h-11 w-full rounded-full text-sm font-semibold"
                          : "btn-gold-outline h-11 w-full rounded-full text-sm font-semibold text-foreground"
                      }
                      variant={highlight ? "default" : "outline"}
                    >
                      <Link to="/auth">{key === "free" ? "Começar grátis" : `Assinar ${meta.name}`}</Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <p className="text-center text-xs text-muted-foreground">
            Todos os planos pagos são anuais, com acesso por 12 meses e parcelamento em até 12x sem juros.
            A contratação é feita dentro da plataforma após criar sua conta.
          </p>
        </section>

        <section aria-labelledby="product-lines-heading" className="flex flex-col gap-8">
          <h2 id="product-lines-heading" className="text-center text-2xl font-bold sm:text-3xl">
            <AltHeading text="Product Lines Speak2Co" />
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {PRODUCT_LINES.map((item) => (
              <Card key={item.title} className="relative h-full border-border">
                {"comingSoon" in item && item.comingSoon ? (
                  <span className="absolute top-3 right-3 rounded-full border border-gold/40 bg-background/85 px-3 py-1 text-[10px] font-bold tracking-widest text-gold uppercase backdrop-blur">
                    Coming Soon
                  </span>
                ) : null}
                <CardContent className="flex flex-col items-center gap-4 pt-6 text-center">
                  <img src={item.art} alt={`Logomarca ${item.title}`} className="h-24 w-auto object-contain" />
                  <p className="text-sm text-muted-foreground">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="flex flex-col items-center gap-4 rounded-3xl border border-gold/30 px-6 py-10 text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">
            <AltHeading text="Comece hoje pelo teste gratuito" />
          </h2>
          <p className="max-w-xl text-sm text-muted-foreground">
            Crie sua conta, faça o teste de nivelamento CEFR e receba seu plano de estudos personalizado
            em minutos. Você pode assinar quando quiser.
          </p>
          <Button asChild size="lg" className="btn-gold h-12 rounded-full px-10 text-sm font-semibold">
            <Link to="/auth">Criar minha conta</Link>
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
