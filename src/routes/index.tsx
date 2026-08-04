import { createFileRoute, Link } from "@tanstack/react-router";
import { Briefcase, Plane, Sparkles, GraduationCap, Globe } from "lucide-react";
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
          "A Speak2Co é uma plataforma criada para transformar o aprendizado do inglês em uma experiência prática, acessível e personalizada.",
      },
      { property: "og:title", content: "Speak2Co — English for Every Opportunity" },
      {
        property: "og:description",
        content:
          "A Speak2Co é uma plataforma criada para transformar o aprendizado do inglês em uma experiência prática, acessível e personalizada.",
      },
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
    <main className="surface-navy min-h-screen">
      <header className="sticky top-0 z-30 border-b border-border/60 bg-background/70 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2 text-lg font-semibold tracking-tight">
            <span className="text-foreground">Speak</span><span className="text-gold">2Co</span>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            <a
              href="#product-lines"
              className="text-muted-foreground transition-colors hover:text-gold"
            >
              Product Lines
            </a>
            <Button asChild size="sm" className="bg-gold text-primary-foreground rounded-full font-semibold hover:opacity-90">
              <Link to="/auth">Começar</Link>
            </Button>
          </nav>
        </div>
      </header>

      <section className="mx-auto flex max-w-5xl flex-col items-center px-6 pt-16 pb-20 text-center sm:pt-24">
        <img
          src={logo.url}
          alt="Logo Speak2Co"
          className="w-64 rounded-full sm:w-80 glow-gold"
        />

        <h1 className="mt-10 text-4xl font-semibold tracking-tight sm:text-6xl">
          <span className="text-foreground">Speak</span><span className="text-gold">2Co</span>

        </h1>
        <p className="mt-4 text-lg tracking-[0.2em] text-muted-foreground uppercase sm:text-xl">
          English for Every Opportunity
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-gold text-primary-foreground glow-gold rounded-full px-10 text-base font-semibold hover:opacity-90"
          >
            <Link to="/auth">Começar</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full border-primary/40 bg-transparent px-8 text-base text-foreground hover:bg-secondary"
          >
            <Link to="/auth">Entrar</Link>
          </Button>
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-6 px-6 pb-20 sm:grid-cols-3">
        {features.map((f) => (
          <div
            key={f.title}
            className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur"
          >
            <f.icon className="h-7 w-7 text-primary" />
            <h2 className="mt-4 text-lg font-semibold text-gold">{f.title}</h2>
            <p className="mt-1 text-sm font-medium text-muted-foreground">{f.subtitle}</p>
            <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
          </div>
        ))}
      </section>

      <section id="product-lines" className="mx-auto max-w-5xl px-6 pb-24 scroll-mt-24">
        <h2 className="text-center text-2xl font-semibold sm:text-3xl">
          Product <span className="text-gold">Lines</span>
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {products.map((p) => (
            <article
              key={p.name}
              className="flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-deep)]"
            >
              <img src={p.image} alt={`Arte ${p.name}`} className="aspect-square w-full object-cover" />
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-2">
                  <p.icon className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-semibold text-gold">{p.name}</h3>
                </div>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.tagline}</p>
                {(p.name === "Speak2Travel" || p.name === "Speak2Hire") && (
                  <Button
                    asChild
                    className="bg-gold text-primary-foreground mt-5 w-full rounded-full font-semibold hover:opacity-90"
                  >
                    <Link to={p.name === "Speak2Travel" ? "/speak2travel" : "/speak2hire"}>
                      Começar {p.name}
                    </Link>
                  </Button>
                )}

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
