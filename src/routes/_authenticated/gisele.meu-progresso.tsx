import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { ArrowRight, Flame, Loader2, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shimmer } from "@/components/ai-elements/shimmer";
import { FOCUS_LABEL } from "@/lib/gisele-focus";
import { getGiseleProgress, getGiseleReport } from "@/lib/gisele-data.functions";
import type { GiseleFocus } from "@/lib/gisele.functions";
import { AltHeading } from "@/components/AltHeading";

export const Route = createFileRoute("/_authenticated/gisele/meu-progresso")({
  head: () => ({
    meta: [
      {"title": "My Progress | GiseleAI | Speak2Co"},
      {"name": "description", "content": "My Progress on Speak2Co: personalized English learning and practice."},
      {"property": "og:title", "content": "My Progress | GiseleAI | Speak2Co"},
      {"property": "og:description", "content": "My Progress on Speak2Co: personalized English learning and practice."},
      {"property": "og:type", "content": "website"},
      {"name": "twitter:card", "content": "summary_large_image"},
    ],
  }),
  component: ProgressPage,
});

const WEEKDAY = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function ProgressPage() {
  const fetchFn = useServerFn(getGiseleProgress);
  const reportFn = useServerFn(getGiseleReport);
  const { data, isPending } = useQuery({ queryKey: ["gisele-progress"], queryFn: () => fetchFn() });

  const report = useMutation({
    mutationFn: () => reportFn(),
    onError: (e) =>
      toast.error(e instanceof Error ? e.message : "Não foi possível gerar o relatório."),
  });

  if (isPending || !data) {
    return (
      <div className="flex flex-1 items-center justify-center p-12">
        <Shimmer>Loading your progress…</Shimmer>
      </div>
    );
  }

  const stats = [
    { label: "Minutes this week", value: data.week.minutes },
    { label: "Sessions this week", value: data.week.sessions },
    { label: "Streak (days)", value: data.streakDays },
    { label: "Missions completed", value: data.missionsCompleted },
    { label: "Open recommendations", value: data.openRecommendations },
  ];

  const maxDay = Math.max(...data.week.days.map((d) => d.minutes), 1);
  const maxSkill = Math.max(...data.skills.map((s) => s.count), 1);

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 space-y-6 px-6 py-10">
      <header className="space-y-1">
        <h1 className="text-2xl font-bold"><AltHeading text={"My progress"} /></h1>
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
        <h2 className="flex items-center gap-2 text-sm font-semibold text-foreground">
          <Flame className="h-4 w-4 text-gold" /> This week&apos;s practice
        </h2>
        <Card className="flex items-end justify-between gap-2 p-4">
          {data.week.days.map((d) => (
            <div key={d.date} className="flex flex-1 flex-col items-center gap-1">
              <div className="flex h-24 w-full items-end">
                <div
                  className="w-full rounded-t bg-gold/80"
                  style={{ height: `${Math.max(4, (d.minutes / maxDay) * 96)}px` }}
                />
              </div>
              <span className="text-[10px] text-muted-foreground">
                {WEEKDAY[new Date(`${d.date}T00:00:00`).getDay()]}
              </span>
              <span className="text-[10px] font-semibold text-foreground">{d.minutes}m</span>
            </div>
          ))}
        </Card>
      </section>

      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground">Skills you worked on</h2>
        {data.skills.length === 0 ? (
          <Card className="p-6 text-center text-sm text-muted-foreground">
            Ainda sem habilidades registradas.
          </Card>
        ) : (
          <Card className="space-y-2 p-4">
            {data.skills.map((s) => (
              <div key={s.skill} className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold capitalize text-foreground">{s.skill}</span>
                  <span className="text-muted-foreground">{s.count}</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-secondary">
                  <div
                    className="h-full rounded-full bg-gold"
                    style={{ width: `${(s.count / maxSkill) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </Card>
        )}
      </section>

      {data.priorities.length > 0 && (
        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-foreground">Current priorities</h2>
          {data.priorities.map((p) => (
            <Card key={`${p.category}-${p.observation}`} className="space-y-1 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-gold">
                {p.category} · priority {p.priority}
              </p>
              <p className="whitespace-pre-line text-sm text-muted-foreground">{p.observation}</p>
            </Card>
          ))}
        </section>
      )}

      {data.nextModule && (
        <Card className="space-y-2 p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-gold">
            Recommended Speak2Fluency module
          </p>
          <p className="text-sm font-semibold text-foreground">
            {data.nextModule.titleEn} · {data.nextModule.minutes} min
          </p>
          <p className="text-xs text-muted-foreground">{data.nextModule.objectiveEn}</p>
          <Link
            to="/speak2fluency/modulo/$moduleId"
            params={{ moduleId: data.nextModule.id }}
            className="inline-flex items-center gap-1 text-sm font-semibold text-gold hover:underline"
          >
            Start module <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </Card>
      )}

      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold text-foreground">Progress report</h2>
          <Button
            size="sm"
            onClick={() => report.mutate()}
            disabled={report.isPending}
            className="gap-1 rounded-full bg-gold text-xs font-semibold text-primary-foreground hover:opacity-90"
          >
            {report.isPending ? (
              <Loader2 className="h-3.5 w-3.5 animate-spin" />
            ) : (
              <Sparkles className="h-3.5 w-3.5" />
            )}
            Generate report
          </Button>
        </div>
        {report.data && (
          <div className="space-y-3">
            <Card className="space-y-1 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-gold">
                O que você melhorou
              </p>
              <p className="text-sm text-muted-foreground">{report.data.improved}</p>
            </Card>
            <Card className="space-y-1 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-gold">
                O que vamos trabalhar agora
              </p>
              <p className="text-sm text-muted-foreground">{report.data.workingOn}</p>
            </Card>
            <Card className="space-y-1 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-gold">
                Sua próxima missão
              </p>
              <p className="text-sm font-semibold text-foreground">
                {report.data.nextMission.title} · {report.data.nextMission.minutes} min
              </p>
              <p className="text-sm text-muted-foreground">{report.data.nextMission.description}</p>
            </Card>
          </div>
        )}
      </section>

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

      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-foreground">Recent sessions</h2>
        {data.history.length === 0 ? (
          <Card className="p-6 text-center text-sm text-muted-foreground">
            Suas sessões aparecerão aqui.
          </Card>
        ) : (
          <Card className="divide-y divide-border p-0">
            {data.history.map((h) => (
              <div key={h.id} className="flex items-center justify-between px-4 py-3 text-xs">
                <span className="font-semibold text-foreground">
                  {FOCUS_LABEL[h.focus as GiseleFocus]?.en ?? h.focus}
                </span>
                <span className="text-muted-foreground">
                  {new Date(h.created_at).toLocaleDateString("pt-BR")} · {h.minutes} min
                  {h.score != null ? ` · ${h.score}` : ""}
                </span>
              </div>
            ))}
          </Card>
        )}
      </section>
    </main>
  );
}
