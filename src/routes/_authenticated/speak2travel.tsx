import { createFileRoute, Outlet } from "@tanstack/react-router";
import { FeatureGate } from "@/components/FeatureGate";

export const Route = createFileRoute("/_authenticated/speak2travel")({
  component: () => (
    <FeatureGate
      feature="product_line_travel"
      title="Speak2Travel é um produto individual"
      benefit="Desbloqueie os 10 módulos de inglês para viagens, o Trip Planner com IA, os role plays de aeroporto, hotel e restaurante e todo o material complementar com checagem de pronúncia."
      requiredPlan="Speak2Travel"
    >
      <Outlet />
    </FeatureGate>
  ),
});
