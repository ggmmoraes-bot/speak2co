import { createFileRoute, Outlet } from "@tanstack/react-router";
import { FeatureGate } from "@/components/FeatureGate";

export const Route = createFileRoute("/_authenticated/speak2kids")({
  component: () => (
    <FeatureGate
      feature="product_line_kids"
      title="Speak2Kids — Coming Soon"
      benefit="O curso Beginner Kids English (7 a 10 anos) com 20 unidades lúdicas estará disponível em breve como produto individual."
      requiredPlan="Speak2Kids"
    >
      <Outlet />
    </FeatureGate>
  ),
});
