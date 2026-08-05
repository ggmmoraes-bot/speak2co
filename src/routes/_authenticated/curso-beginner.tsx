import { createFileRoute, Outlet } from "@tanstack/react-router";
import { FeatureGate } from "@/components/FeatureGate";

export const Route = createFileRoute("/_authenticated/curso-beginner")({
  component: () => (
    <FeatureGate
      feature="courses_beginner"
      title="Curso Beginner — 20 lições do Método Speak2Co"
      benefit="Desbloqueie as 20 lições completas com vocabulário, verbos, gramática, conversação, exercícios, quiz e checagem de pronúncia com IA."
      requiredPlan="Essential"
    >
      <Outlet />
    </FeatureGate>
  ),
});
