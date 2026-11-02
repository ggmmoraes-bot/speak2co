import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Shimmer } from "@/components/ai-elements/shimmer";
import { getStudyPlan, type StudyPlan } from "@/lib/study-plan.functions";
import { AltHeading } from "@/components/AltHeading";

export const Route = createFileRoute("/_authenticated/gisele/meu-plano")({
  component: GiselePlanPage,
});

function GiselePlanPage() {
  const fetchPlan = useServerFn(getStudyPlan);
  const { data, isPending } = useQuery({ queryKey: ["study-plan"], queryFn: () => fetchPlan() });

  const weeks = (data?.weekly_focus ?? []) as StudyPlan["weekly_focus"];

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 space-y-6 px-6 py-10">
      <header className="space-y-1">
        <h1 className="text-2xl font-bold"><AltHeading text={"My plan"} /></h1>
        <p className="text-sm italic text-muted-foreground">
          O plano de estudos que orienta as recomendações da Gisele.
        </p>
      </header>

      {isPending && <Shimmer>Loading your plan…</Shimmer>}

      {!isPending && !data && (
        <Card className="space-y-3 p-8 text-center text-sm text-muted-foreground">
          <p>Você ainda não gerou um plano personalizado.</p>
          <Link
            to="/meu-plano"
            className="inline-flex items-center gap-1 font-semibold text-gold hover:underline"
          >
            Generate my plan <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </Card>
      )}

      {data && (
        <>
          <Card className="p-6">
            <p className="text-sm text-muted-foreground">{data.summary}</p>
          </Card>
          <div className="space-y-3">
            {weeks.map((week) => (
              <Card key={week.week} className="space-y-1 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-gold">
                  Week {week.week}
                </p>
                <p className="text-sm font-semibold text-foreground">{week.title}</p>
                <ul className="list-inside list-disc text-xs text-muted-foreground">
                  {week.activities.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
          <Link
            to="/meu-plano"
            className="inline-flex items-center gap-1 text-sm font-semibold text-gold hover:underline"
          >
            Ajustar plano completo <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </>
      )}
    </main>
  );
}
