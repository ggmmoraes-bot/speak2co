import { createFileRoute, Outlet } from "@tanstack/react-router";
import { FeatureGate } from "@/components/FeatureGate";

export const Route = createFileRoute("/_authenticated/curso-upper")({
  component: () => (
    <FeatureGate
      feature="courses_upper_intermediate"
      title="Curso Upper-Intermediate — 50 unidades do Método Speak2Co"
      benefit="Desbloqueie as 50 unidades B2 com collocations avançadas, gramática complexa, argumentação, reading/listening, checagem obrigatória e pronúncia com IA."
      requiredPlan="Speak2Co All Access"
    >
      <Outlet />
    </FeatureGate>
  ),
});
