import { createFileRoute, Outlet } from "@tanstack/react-router";
import { LanguageSelector } from "@/components/LanguageSelector";
import { FeatureGate } from "@/components/FeatureGate";

export const Route = createFileRoute("/_authenticated/speak2kids")({
  component: () => (
    <>
    <header className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-3 px-4 pt-5"><span className="font-bold text-foreground">Speak<span className="text-gold">2Kids</span></span><LanguageSelector /></header>
    <FeatureGate
      feature="product_line_kids"
      title="Speak2Kids — Coming Soon"
      benefit="O curso Beginner Kids English (7 a 10 anos) com 20 unidades lúdicas estará disponível em breve como produto individual."
      requiredPlan="Speak2Kids"
    >
      <Outlet />
    </FeatureGate>
    </>
  ),
});
