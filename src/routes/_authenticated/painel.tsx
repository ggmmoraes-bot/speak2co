import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { ShieldCheck, Sparkles, Compass, Target, Gift, UserRound } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { BrandText } from "@/components/BrandText";
import { EcosystemSection } from "@/components/EcosystemCard";
import { PlanUnlockedDialog } from "@/components/PlanUnlockedDialog";
import { buildHomeSections } from "@/lib/home-hub";
import { useAccess, aiMinutesLeft, useAdminPreviewPlan, useIsAdmin } from "@/lib/entitlements";
import { AdminPlanPreview } from "@/components/AdminPlanPreview";
import { getCefrStage } from "@/lib/placement-content";
import logo from "@/assets/speak2co-logo.asset.json";

export const Route = createFileRoute("/_authenticated/painel")({
  head: () => ({
    meta: [
      { title: "Home — Speak2Co" },
      {
        name: "description",
        content:
          "Descubra todo o ecossistema Speak2Co: cursos de inglês, linhas de produto, recursos de IA, ferramentas de aprendizagem e suporte.",
      },
      { property: "og:title", content: "Home — Speak2Co" },
      {
        property: "og:description",
        content: "Everything you need to achieve your English goals in one place.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Painel,
});

type Profile = {
  full_name: string | null;
  plan: string;
  english_level: string | null;
  goal: string | null;
  target_level: string | null;
};

function Painel() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [email, setEmail] = useState<string>("");
  const { data: access } = useAccess();
  const previewPlan = useAdminPreviewPlan();
  // Somente a role administrativa real (validada no servidor) libera as ferramentas internas.
  const isAdminAccount = useIsAdmin();

  useEffect(() => {
    let active = true;
    (async () => {
      const { data: userData } = await supabase.auth.getUser();
      if (!active || !userData.user) return;
      setEmail(userData.user.email ?? "");
      const { data } = await supabase
        .from("profiles")
        .select("full_name, plan, english_level, goal, target_level")
        .eq("id", userData.user.id)
        .maybeSingle();
      if (active && data) setProfile(data as Profile);
    })();
    return () => {
      active = false;
    };
  }, []);

  async function handleSignOut() {
    await queryClient.cancelQueries();
    queryClient.clear();
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  }

  const sections = buildHomeSections(access);
  const stage = getCefrStage(profile?.english_level);
  const firstName = (profile?.full_name ?? email).split(" ")[0];

  return (
    <main className="surface-navy min-h-screen px-6 py-10">
      <PlanUnlockedDialog />
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
          <Link to="/painel" className="flex min-w-0 items-center gap-3">
            <img src={logo.url} alt="Logo Speak2Co" className="h-11 w-11 shrink-0 rounded-full" />
            <span className="truncate text-lg font-semibold tracking-tight">
              <BrandText text="Speak2Co" />
            </span>
          </Link>
          <div className="flex shrink-0 items-center gap-2">
            {isAdminAccount && <AdminPlanPreview />}
            {isAdminAccount && !previewPlan && (
              <>
                <Button asChild variant="outline" className="rounded-full">
                  <Link to="/admin">
                    <ShieldCheck className="h-4 w-4 text-gold" />
                    <span className="ml-2 hidden sm:inline">Administração</span>
                  </Link>
                </Button>
                <Button asChild variant="outline" className="rounded-full">
                  <Link to="/admin" hash="beneficios">
                    <Gift className="h-4 w-4 text-gold" />
                    <span className="ml-2 hidden sm:inline">Benefícios</span>
                  </Link>
                </Button>
              </>
            )}
            <Button variant="outline" onClick={handleSignOut} className="rounded-full">
              Sair
            </Button>
          </div>
        </div>

        {/* Hero */}
        <section className="relative mt-8 overflow-hidden rounded-[2rem] border border-gold/30 bg-card/50 p-8 backdrop-blur sm:p-12">
          <span
            aria-hidden
            className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-gold/15 blur-3xl"
          />
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_auto]">
            <div className="min-w-0">
              <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase">
                {access?.plan?.name ?? "Free"} Plan
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
                Welcome to <BrandText text="Speak2Co" />
                {firstName ? <span className="text-gold">, {firstName}</span> : "!"}
              </h1>
              <p className="mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
                Everything you need to achieve your English goals in one place.
              </p>

              <div className="mt-6 flex flex-wrap gap-2 text-xs">
                <span className="badge-gold rounded-full px-3 py-1 font-semibold text-gold">
                  Level: {profile?.english_level ?? "A definir"}
                  {stage ? ` · ${stage.name}` : ""}
                </span>
                {access?.aiDailyMinutes != null && (
                  <span className="badge-gold rounded-full px-3 py-1 font-semibold text-gold">
                    AI Teacher: {aiMinutesLeft(access)}/{access.aiDailyMinutes} min hoje
                  </span>
                )}
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <Button
                  asChild
                  className="glow-gold rounded-full bg-gold font-semibold text-primary-foreground hover:opacity-90"
                >
                  <Link to="/teste-de-nivel">
                    <Target className="mr-2 h-4 w-4" /> Fazer teste de nivelamento
                  </Link>
                </Button>
                <Button asChild variant="outline" className="rounded-full font-semibold">
                  <Link to="/meu-plano">
                    <Compass className="mr-2 h-4 w-4 text-gold" /> Meu plano de estudos
                  </Link>
                </Button>
                <Button asChild variant="outline" className="rounded-full font-semibold">
                  <Link to="/perfil">
                    <UserRound className="mr-2 h-4 w-4 text-gold" /> Meu perfil
                  </Link>
                </Button>
                <Button asChild variant="outline" className="rounded-full font-semibold">
                  <Link to="/assinatura" search={{ simulacao: undefined }}>
                    <ShieldCheck className="mr-2 h-4 w-4 text-gold" /> Minha assinatura
                  </Link>
                </Button>
                <Button asChild variant="outline" className="rounded-full font-semibold">
                  <Link to="/premium">
                    <Sparkles className="mr-2 h-4 w-4 text-gold" /> Planos
                  </Link>
                </Button>
              </div>
            </div>

            <img
              src={logo.url}
              alt="Globo dourado da marca Speak2Co"
              className="glow-gold mx-auto hidden w-56 rounded-full lg:block"
            />
          </div>
        </section>

        {sections.map((section) => (
          <EcosystemSection
            key={section.id}
            titleEn={section.titleEn}
            titlePt={section.titlePt}
            items={section.items}
            {...(section.compact ? { compact: true } : {})}
            {...(section.id === "product-lines" ? { catalog: true } : {})}
          />
        ))}

        <footer className="mt-16 border-t border-border py-8 text-center text-xs tracking-[0.2em] text-muted-foreground uppercase">
          Speak2Co · English for Every Opportunity
        </footer>
      </div>
    </main>
  );
}
