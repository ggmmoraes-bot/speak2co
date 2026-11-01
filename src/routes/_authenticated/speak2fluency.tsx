import { createFileRoute, Outlet } from "@tanstack/react-router";
import { FeatureGate } from "@/components/FeatureGate";

export const Route = createFileRoute("/_authenticated/speak2fluency")({
  component: () => (
    <FeatureGate
      feature="product_line_fluency"
      title="Speak2Fluency é um produto individual"
      benefit="Desbloqueie os 8 módulos de fluência espontânea, a rotina diária de 25 minutos, os desafios de fala e o feedback da IA em pronunciation, stress, intonation e fluency."
      requiredPlan="Speak2Fluency"
    >
      <Outlet />
    </FeatureGate>
  ),
});
