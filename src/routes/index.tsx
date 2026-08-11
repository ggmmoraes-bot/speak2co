import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import logo from "@/assets/speak2co-logo.asset.json";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { siteUrl } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Speak2Co — English for Every Opportunity" },
      {
        name: "description",
        content: "Entre na Speak2Co, a experiência premium para inglês e novas oportunidades.",
      },
      { property: "og:title", content: "Speak2Co — English for Every Opportunity" },
      {
        property: "og:description",
        content: "Acesse a experiência Speak2Co e transforme seu inglês em novas oportunidades.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: siteUrl("/") },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: siteUrl("/") }],
  }),
  component: Index,
});

function Index() {
  const navigate = useNavigate();

  useEffect(() => {
    let active = true;
    supabase.auth.getSession().then(({ data }) => {
      if (active && data.session) navigate({ to: "/painel", replace: true });
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) navigate({ to: "/painel", replace: true });
    });
    return () => {
      active = false;
      sub.subscription.unsubscribe();
    };
  }, [navigate]);

  return (

    <main className="surface-navy relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-12">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] [background-size:clamp(88px,12vw,160px)_clamp(88px,12vw,160px)] [mask-image:radial-gradient(ellipse_at_center,black_0%,transparent_72%)]"
      />
      <div aria-hidden="true" className="pointer-events-none absolute h-[min(90vw,760px)] w-[min(90vw,760px)] rounded-full border border-gold/10" />
      <div aria-hidden="true" className="pointer-events-none absolute h-[min(72vw,590px)] w-[min(72vw,590px)] rounded-full border border-gold/10" />

      <section className="relative z-10 flex w-full max-w-xl flex-col items-center text-center">
        <div className="logo-entrance aspect-square w-[min(76vw,42vh,420px)] overflow-hidden rounded-full drop-shadow-[0_24px_48px_color-mix(in_oklab,var(--gold)_30%,transparent)] sm:w-[min(58vw,48vh,460px)]">
          <img
            src={logo.url}
            alt="Logomarca oficial Speak2Co"
            className="h-full w-full object-contain"
          />
        </div>

        <p className="mt-8 text-xs font-medium tracking-[0.32em] text-muted-foreground uppercase sm:text-sm">
          English for Every Opportunity.
        </p>

        <div className="mt-10 flex w-full max-w-sm flex-col gap-3 sm:max-w-md sm:flex-row">
          <Button asChild size="lg" className="btn-gold h-12 flex-1 rounded-full px-6 text-sm font-semibold">
            <Link to="/auth">Entrar na plataforma</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="btn-gold-outline h-12 flex-1 rounded-full px-6 text-sm font-semibold text-foreground"
          >
            <Link to="/auth">Criar conta / Entrar</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
