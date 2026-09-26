import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logoIntro from "@/assets/speak2co-logo-intro.mp4.asset.json";
import logoIntroWebm from "@/assets/speak2co-logo-intro.webm.asset.json";
import { Button } from "@/components/ui/button";
import { LanguageSelector } from "@/components/LanguageSelector";
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
  const [introDone, setIntroDone] = useState(false);

  // Garante a entrada da página mesmo se o autoplay for bloqueado ou o vídeo demorar.
  useEffect(() => {
    const timer = window.setTimeout(() => setIntroDone(true), 8000);
    return () => window.clearTimeout(timer);
  }, []);


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

      <div className="absolute top-4 right-4 z-20 sm:top-6 sm:right-6">
        <LanguageSelector />
      </div>

      <section className="relative z-10 flex w-full max-w-xl flex-col items-center text-center">
        <div className="logo-entrance aspect-square w-[min(76vw,42vh,420px)] overflow-hidden rounded-full drop-shadow-[0_24px_48px_color-mix(in_oklab,var(--gold)_30%,transparent)] sm:w-[min(58vw,48vh,460px)]">
          <video
            className="h-full w-full scale-[1.35] object-cover"
            autoPlay
            muted
            playsInline
            preload="auto"
            aria-label="Animação da logomarca oficial Speak2Co"
            onEnded={() => setIntroDone(true)}
            onError={() => setIntroDone(true)}
          >
            <source src={logoIntroWebm.url} type="video/webm" />
            <source src={logoIntro.url} type="video/mp4" />
          </video>
        </div>

        <div
          className={`flex w-full flex-col items-center transition-opacity duration-700 ${introDone ? "opacity-100" : "pointer-events-none opacity-0"}`}
        >
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
            <Link to="/planos">Ver planos e preços</Link>
          </Button>
        </div>


        <nav className="mt-12 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
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
      </section>
    </main>
  );
}
