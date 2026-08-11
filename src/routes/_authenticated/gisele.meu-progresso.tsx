import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { Card } from "@/components/ui/card";
import { Shimmer } from "@/components/ai-elements/shimmer";
import { FOCUS_LABEL } from "@/lib/gisele-focus";
import { getGiseleProgress } from "@/lib/gisele-data.functions";
import type { GiseleFocus } from "@/lib/gisele.functions";

export const Route = createFileRoute("/_authenticated/gisele/meu-progresso")({
  component: ProgressPage,
});

function ProgressPage() {
  const fetchFn = useServerFn(getGiseleProgress);
  const { data, isPending } = useQuery({ queryKey: ["gisele-progress"], queryFn: () => fetchFn() });

  if (isPending || !data) {
    return (
      <div className="flex flex-1 items-center justify-center p-12">
        <Shimmer>Loading your progress…</Shimmer>
      </div>
    );
  }

  const stats = [
    { label: "Sessions", value: data.sessions },
    { label: "Minutes", value: data.minutes },
    { label: "Corrections", value: data.corrections },
    { label: "Feedback", value: data.feedbackCount },
    { label: "Open recommendations", value: data.openRecommendations },
  ];

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 space-y-6 px-6 py-10">
      <header className="space-y-1">
        <h1 className="text-2xl font-bold text-foreground">My progress</h1>
        <p className="text-sm italic text-muted-foreground">
          Seu ritmo de prática com a Gisele, em números reais.
        </p>
      </header>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
        {stats.map((s) => (
          <Card key={s.label} className="p-4 text-center">
            <p className="text-2xl font-bold text-gold">{s.value}</p>
            <p className="text-[11px] text-muted-foreground">{s.label}</p>
          </Card>
        ))}
      </div>

      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground">Practice by focus</h2>
        {data.byFocus.length === 0 && (
          <Card className="p-8 text-center text-sm text-muted-foreground">
            Ainda sem sessões registradas.
          </Card>
        )}
        {data.byFocus.map((f) => {
          const label = FOCUS_LABEL[f.focus as GiseleFocus] ?? FOCUS_LABEL.conversation;
          const max = Math.max(...data.byFocus.map((x) => x.sessions), 1);
          return (
            <Card key={f.focus} className="space-y-2 p-4">
              <div className="flex items-center justify-between text-sm">
                <span className="font-semibold text-foreground">{label.en}</span>
                <span className="text-xs text-muted-foreground">
                  {f.sessions} sessions · {f.minutes} min
                </span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-secondary">
                <div
                  className="h-full rounded-full bg-gold"
                  style={{ width: `${(f.sessions / max) * 100}%` }}
                />
              </div>
            </Card>
          );
        })}
      </section>
    </main>
  );
}
