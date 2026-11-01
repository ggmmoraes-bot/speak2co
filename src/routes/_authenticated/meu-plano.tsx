import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StudyPlanSection } from "@/components/StudyPlanSection";
import { PlanVersionsSection } from "@/components/PlanVersionsSection";
import { useAccess, hasFeature, FEATURE_KEYS } from "@/lib/entitlements";
import { supabase } from "@/integrations/supabase/client";
import { useEffect, useState } from "react";
import { Lock } from "lucide-react";

export const Route = createFileRoute("/_authenticated/meu-plano")({
  head: () => ({
    meta: [
      { title: "Meu plano de estudos — Speak2Co" },
      {
        name: "description",
        content:
          "Sua trilha personalizada de inglês na Speak2Co: plano semanal, exercícios diários e marcos de evolução.",
      },
      { property: "og:title", content: "Meu plano de estudos — Speak2Co" },
      {
        property: "og:description",
        content: "Acompanhe sua trilha personalizada de inglês semana a semana.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MeuPlano,
});

function MeuPlano() {
  const { data: access } = useAccess();
  const [profileReady, setProfileReady] = useState(false);

  useEffect(() => {
    let active = true;
    (async () => {
      const { data: userData } = await supabase.auth.getUser();
      if (!active || !userData.user) return;
      const { data } = await supabase
        .from("profiles")
        .select("goal, target_level")
        .eq("id", userData.user.id)
        .maybeSingle();
      if (active) setProfileReady(Boolean(data?.goal && data?.target_level));
    })();
    return () => {
      active = false;
    };
  }, []);

  const fullPlan = hasFeature(access, FEATURE_KEYS.studyPlanFull);

  return (
    <main className="surface-navy min-h-screen px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <Button asChild variant="outline" className="rounded-full">
          <Link to="/painel">
            <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para a Home
          </Link>
        </Button>

        <StudyPlanSection fullPlan={fullPlan} profileReady={profileReady} />

        {fullPlan ? (
          <PlanVersionsSection />
        ) : (
          <div className="mt-8 rounded-2xl border border-gold/40 bg-card/60 p-6 backdrop-blur">
            <div className="flex items-center gap-2 text-gold">
              <Lock className="h-4 w-4" />
              <p className="text-xs tracking-widest uppercase">Histórico de versões bloqueado</p>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Com o Speak2Co Complete você consulta todas as versões anteriores do seu plano e volta para
              qualquer uma delas.
            </p>
            <Button
              asChild
              className="mt-4 rounded-full bg-gold font-semibold text-primary-foreground hover:opacity-90"
            >
              <Link to="/upgrade/essential" search={{ feature: "historico" as const }}>
                Conhecer o Speak2Co Complete
              </Link>
            </Button>
          </div>
        )}
      </div>
    </main>
  );
}
