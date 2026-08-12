import { createFileRoute, Outlet } from "@tanstack/react-router";
import { FeatureGate } from "@/components/FeatureGate";

export const Route = createFileRoute("/_authenticated/curso-beginner")({
  component: () => (
    <FeatureGate
      feature="courses_beginner"
      title="Curso Beginner — 30 unidades do Método Speak2Co"
      benefit="Desbloqueie as 30 unidades completas com vocabulário, verbos, gramática, conversação, exercícios, quiz e checagem de pronúncia com IA."
      requiredPlan="Essential"
    >
      <Outlet />
    </FeatureGate>
  ),
});
