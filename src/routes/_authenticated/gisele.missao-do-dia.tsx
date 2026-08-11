import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { toast } from "sonner";
import { CheckCircle2, Loader2, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shimmer } from "@/components/ai-elements/shimmer";
import { getDailyMission } from "@/lib/gisele-data.functions";
import { createGiseleThread, type GiseleFocus } from "@/lib/gisele.functions";
import { AltHeading } from "@/components/AltHeading";

export const Route = createFileRoute("/_authenticated/gisele/missao-do-dia")({
  component: MissionPage,
});

function MissionPage() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const fetchFn = useServerFn(getDailyMission);
  const createFn = useServerFn(createGiseleThread);
  const [loading, setLoading] = useState(false);

  const { data, isPending } = useQuery({ queryKey: ["gisele-mission"], queryFn: () => fetchFn() });

  async function start(missionTitle: string, focus: string, context: string) {
    try {
      setLoading(true);
      const thread = await createFn({
        data: {
          focus: focus as GiseleFocus,
          title: missionTitle,
          contextNote: context,
        },
      });
      await queryClient.invalidateQueries({ queryKey: ["gisele-threads"] });
      navigate({ to: "/gisele/$threadId", params: { threadId: thread.id } });
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Não foi possível iniciar a missão.");
    } finally {
      setLoading(false);
    }
  }

  if (isPending || !data) {
    return (
      <div className="flex flex-1 items-center justify-center p-12">
        <Shimmer>Loading today&apos;s mission…</Shimmer>
      </div>
    );
  }

  const { mission, all } = data;

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 space-y-6 px-6 py-10">
      <header className="space-y-1">
        <h1 className="text-2xl font-bold"><AltHeading text={"Mission of the day"} /></h1>
        <p className="text-sm italic text-muted-foreground">
          Uma prática curta e objetiva para manter a constância.
        </p>
      </header>

      {mission ? (
        <Card className="space-y-4 border-gold/40 p-6">
          <div className="flex items-center gap-2 text-gold">
            <Target className="h-4 w-4" />
            <span className="text-xs font-semibold uppercase tracking-wide">
              {mission.level} · {mission.minutes} min
            </span>
          </div>
          <h2 className="text-xl font-bold text-foreground">{mission.title}</h2>
          <p className="text-sm text-muted-foreground">{mission.context}</p>
          <p className="text-sm font-semibold text-foreground">Goal: {mission.objective}</p>
          <ul className="space-y-1 text-xs text-muted-foreground">
            {mission.criteria.map((c) => (
              <li key={c} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" />
                {c}
              </li>
            ))}
          </ul>
          <Button
            onClick={() => start(mission.title, mission.focus, `${mission.context} ${mission.objective}`)}
            disabled={loading}
            className="rounded-full bg-gold font-semibold text-primary-foreground hover:opacity-90"
          >
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Start mission
          </Button>
        </Card>
      ) : (
        <Card className="p-8 text-center text-sm text-muted-foreground">
          Nenhuma missão disponível no momento.
        </Card>
      )}

      {all.length > 1 && (
        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-foreground">All missions</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {all
              .filter((m) => m.id !== mission?.id)
              .map((m) => (
                <Card key={m.id} className="flex flex-col gap-2 p-4">
                  <p className="text-sm font-semibold text-foreground">{m.title}</p>
                  <p className="text-xs text-muted-foreground">{m.objective}</p>
                  <Button
                    size="sm"
                    variant="outline"
                    disabled={loading}
                    onClick={() => start(m.title, m.focus, `${m.context} ${m.objective}`)}
                    className="mt-auto w-fit rounded-full text-xs"
                  >
                    Practise
                  </Button>
                </Card>
              ))}
          </div>
        </section>
      )}
    </main>
  );
}
