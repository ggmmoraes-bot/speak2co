import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Briefcase, Check, Globe, GraduationCap, Plane, Sparkles } from "lucide-react";
import logo from "@/assets/speak2co-logo.asset.json";
import hire from "@/assets/speak2hire.asset.json";
import travel from "@/assets/speak2travel.asset.json";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Speak2Co — English for Every Opportunity" },
      {
        name: "description",
        content:
          "Entre na Speak2Co e transforme o inglês em confiança para estudar, viajar e conquistar novas oportunidades.",
      },
      { property: "og:title", content: "Speak2Co — English for Every Opportunity" },
      {
        property: "og:description",
        content:
          "Aprenda inglês com um plano personalizado, prática com IA e situações reais para sua próxima oportunidade.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const products = [
  {
    name: "Speak2Hire",
    tagline: "Ace your interview. Anywhere in the world.",
    image: hire.url,
    icon: Briefcase,
  },
  {
    name: "Speak2Travel",
    tagline: "Your passport to confidence. Anywhere in the world.",
    image: travel.url,
    icon: Plane,
  },
];

const features = [
  {
    icon: Sparkles,
    title: "AI Teacher",
    subtitle: "Professor de IA",
    text: "Converse em inglês 24h e receba correções de gramática e pronúncia.",
  },
  {
    icon: GraduationCap,
    title: "Personalized Plan",
    subtitle: "Plano personalizado",
    text: "Teste de nivelamento e trilha de estudos feita para o seu objetivo.",
  },
  {
    icon: Globe,
    title: "Real Situations",
    subtitle: "Situações reais",
    text: "Aeroporto, hotel, reuniões e entrevistas — treine antes de viver.",
  },
];

function Index() {
  return (
    <main className="surface-navy min-h-screen overflow-hidden">
      <header className="absolute inset-x-0 top-0 z-30">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
          <Link to="/" aria-label="Speak2Co — início" className="flex items-center gap-3">
            <span className="h-px w-8 bg-gold" />
            <span className="text-sm font-semibold tracking-[0.24em] text-foreground uppercase">
              Speak<span className="text-gold">2Co</span>
            </span>
          </Link>
          <Link
            to="/auth"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-gold"
          >
            Já sou aluno
          </Link>
        </div>
      </header>

      <section className="relative flex min-h-[min(860px,100svh)] items-center px-6 pt-28 pb-16 lg:px-10 lg:pt-24">
        <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] [background-size:clamp(80px,10vw,160px)_clamp(80px,10vw,160px)] [mask-image:linear-gradient(to_bottom,black,transparent_88%)]" />
        <div className="pointer-events-none absolute inset-y-24 left-1/2 hidden w-px bg-border/50 lg:block" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
          <div className="max-w-2xl">
            <p className="mb-6 flex items-center gap-3 text-xs font-semibold tracking-[0.3em] text-gold uppercase">
              <span className="h-px w-10 bg-gold" />
              The next chapter starts here
            </p>
            <h1 className="max-w-xl text-5xl leading-[0.98] font-semibold tracking-tight text-foreground sm:text-7xl lg:text-8xl">
              English for
              <span className="block text-gold">Every Opportunity.</span>
            </h1>
            <p className="mt-7 max-w-lg text-base leading-7 text-muted-foreground sm:text-lg">
              Uma jornada prática e personalizada para você falar inglês com mais confiança — nos estudos, no trabalho e no mundo.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button asChild size="lg" className="btn-gold rounded-full px-7 text-base font-semibold">
                <Link to="/auth">
                  Começar agora
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="btn-gold-outline rounded-full px-7 text-base text-foreground"
              >
                <Link to="/auth">Criar minha conta</Link>
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-xs text-muted-foreground">
              {["Teste de nivelamento", "Plano com IA", "Prática de pronúncia"].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <Check aria-hidden="true" className="icon-gold h-4 w-4" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative flex min-h-[320px] items-center justify-center lg:min-h-[520px]">
            <div className="absolute h-[min(72vw,500px)] w-[min(72vw,500px)] rounded-full border border-gold/20" />
            <div className="absolute h-[min(56vw,380px)] w-[min(56vw,380px)] rounded-full border border-gold/30" />
            <div className="absolute h-[min(43vw,290px)] w-[min(43vw,290px)] rounded-full border border-border/60" />
            <div className="relative flex flex-col items-center">
              <img
                src={logo.url}
                alt="Logomarca oficial Speak2Co"
                className="relative z-10 w-[min(64vw,350px)] object-contain drop-shadow-[0_24px_48px_color-mix(in_oklab,var(--gold)_30%,transparent)]"
              />
              <div className="mt-5 flex items-center gap-3 text-xs tracking-[0.28em] text-muted-foreground uppercase">
                <span className="h-px w-8 bg-gold/70" />
                Learn · Speak · Belong
                <span className="h-px w-8 bg-gold/70" />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-x-6 bottom-6 z-10 mx-auto flex max-w-7xl items-center justify-between text-[10px] tracking-[0.28em] text-muted-foreground uppercase lg:inset-x-10">
          <span>Speak2Co Method™</span>
          <span className="hidden sm:block">Scroll to explore</span>
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-6 px-6 py-20 sm:grid-cols-3">
        {features.map((f) => (
          <div key={f.title} className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur">
            <f.icon className="icon-gold h-7 w-7" />
            <h2 className="mt-4 text-lg font-semibold text-gold">{f.title}</h2>
            <p className="mt-1 text-sm font-medium text-muted-foreground">{f.subtitle}</p>
            <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
          </div>
        ))}
      </section>

      <section id="product-lines" className="mx-auto max-w-5xl scroll-mt-24 px-6 pb-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold tracking-[0.24em] text-gold uppercase">Explore the ecosystem</p>
            <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">
              Product <span className="text-gold">Lines</span>
            </h2>
          </div>
          <Link to="/auth" className="link-gold text-sm">
            Acessar a plataforma <ArrowRight aria-hidden="true" className="ml-1 inline h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {products.map((p) => (
            <article key={p.name} className="flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-deep)]">
              <img src={p.image} alt={`Arte ${p.name}`} className="aspect-square w-full object-contain" />
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-2">
                  <p.icon className="icon-gold h-5 w-5" />
                  <h3 className="text-xl font-semibold text-gold">{p.name}</h3>
                </div>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.tagline}</p>
                <Button asChild className="btn-gold mt-5 w-full rounded-full font-semibold">
                  <Link to={p.name === "Speak2Travel" ? "/speak2travel" : "/speak2hire"}>
                    Começar {p.name}
                    <ArrowRight aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center text-xs tracking-[0.2em] text-muted-foreground uppercase">
        Speak2Co · English for Every Opportunity
      </footer>
    </main>
  );
}
