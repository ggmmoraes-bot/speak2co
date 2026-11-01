import { createFileRoute, Outlet } from "@tanstack/react-router";
import { FeatureGate } from "@/components/FeatureGate";

export const Route = createFileRoute("/_authenticated/speak2hire")({
  component: () => (
    <FeatureGate
      feature="product_line_hire"
      title="Speak2Hire é uma Product Line Premium"
      benefit="Desbloqueie o simulador de entrevistas em inglês com perguntas reais, método STAR, temporizador, feedback por competência da IA e materiais de preparação."
      requiredPlan="Speak2Hire"
    >
      <Outlet />
    </FeatureGate>
  ),
});
