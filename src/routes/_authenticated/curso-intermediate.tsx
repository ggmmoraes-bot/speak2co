import { createFileRoute, Outlet } from "@tanstack/react-router";
import { FeatureGate } from "@/components/FeatureGate";

export const Route = createFileRoute("/_authenticated/curso-intermediate")({
  component: () => (
    <FeatureGate
      feature="courses_intermediate"
      title="Curso Intermediate — 20 lições do Método Speak2Co"
      benefit="Desbloqueie as 20 lições B1→B2 com gramática avançada, phrasal verbs, collocations, diálogos longos, exercícios, quiz e checagem de pronúncia com IA."
      requiredPlan="Essential"
    >
      <Outlet />
    </FeatureGate>
  ),
});
