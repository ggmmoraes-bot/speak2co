import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { getPlanVersions, restorePlanVersion } from "@/lib/study-plan.functions";
import { exportPlanVersionToPdf } from "@/lib/plan-pdf";

type WeeklyFocus = { week: number; title: string; activities: string[] };

type PlanVersion = {
  id: string;
  summary: string;
  weekly_focus: WeeklyFocus[];
  milestones: string[];
  locked_weeks: number[];
  reason: string;
  refined_weeks: number[];
  created_at: string;
};

const REASON_LABEL: Record<string, string> = {
  generated: "Plano gerado",
  refined: "Ajuste aplicado",
  restored: "Versão restaurada",
};

export function PlanVersionsSection() {
  const fetchVersions = useServerFn(getPlanVersions);
  const restore = useServerFn(restorePlanVersion);
  const queryClient = useQueryClient();
  const [openId, setOpenId] = useState<string | null>(null);

  const { data, isLoading } = useQuery({
    queryKey: ["plan-versions"],
    queryFn: () => fetchVersions(),
  });

  const restoreMutation = useMutation({
    mutationFn: (id: string) => restore({ data: { id } }),
    onSuccess: (plan) => {
      queryClient.setQueryData(["study-plan"], plan);
      queryClient.invalidateQueries({ queryKey: ["plan-versions"] });
      toast.success("Plano restaurado para a versão escolhida.");
    },
    onError: (error: Error) => toast.error(error.message),
  });

  const versions = (data ?? []) as unknown as PlanVersion[];

  return (
    <section className="mt-14">
      <h2 className="text-2xl font-semibold">
        Histórico de <span className="text-gold">versões do plano</span>
      </h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Cada ajuste aplicado vira uma versão com data — você pode voltar a qualquer uma delas.
      </p>

      {isLoading ? (
        <p className="mt-4 text-sm text-muted-foreground">Carregando versões…</p>
      ) : versions.length === 0 ? (
        <p className="mt-4 text-sm text-muted-foreground">
          Ainda não há versões salvas. Gere ou ajuste seu plano para criar a primeira.
        </p>
      ) : (
        <div className="mt-6 grid gap-3">
          {versions.map((version, index) => {
            const isOpen = openId === version.id;
            return (
              <div
                key={version.id}
                className="rounded-2xl border border-border bg-card/60 p-5 backdrop-blur"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-xs tracking-widest text-muted-foreground uppercase">
                      {new Date(version.created_at).toLocaleString("pt-BR")}
                      {index === 0 && <span className="ml-2 text-gold">versão atual</span>}
                    </p>
                    <p className="mt-1 font-semibold text-gold">
                      {REASON_LABEL[version.reason] ?? version.reason}
                      {version.refined_weeks.length > 0 &&
                        ` — semana${version.refined_weeks.length > 1 ? "s" : ""} ${version.refined_weeks.join(", ")}`}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setOpenId(isOpen ? null : version.id)}
                      className="rounded-full border-primary/40 bg-transparent text-foreground hover:bg-secondary"
                    >
                      {isOpen ? "Ocultar" : "Ver detalhes"}
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        exportPlanVersionToPdf({
                          createdAt: version.created_at,
                          reasonLabel: REASON_LABEL[version.reason] ?? version.reason,
                          summary: version.summary,
                          weeklyFocus: version.weekly_focus ?? [],
                          milestones: version.milestones ?? [],
                          lockedWeeks: version.locked_weeks ?? [],
                        })
                      }
                      className="rounded-full border-primary/40 bg-transparent text-foreground hover:bg-secondary"
                    >
                      Exportar PDF
                    </Button>
                    {index !== 0 && (

                      <Button
                        size="sm"
                        disabled={restoreMutation.isPending}
                        onClick={() => restoreMutation.mutate(version.id)}
                        className="rounded-full"
                      >
                        {restoreMutation.isPending ? "Restaurando…" : "Restaurar"}
                      </Button>
                    )}
                  </div>
                </div>

                {isOpen && (
                  <div className="mt-4 grid gap-4">
                    <p className="text-sm text-foreground">{version.summary}</p>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {(version.weekly_focus ?? []).map((week) => (
                        <div key={week.week} className="rounded-xl border border-border p-4">
                          <p className="text-xs tracking-widest text-muted-foreground uppercase">
                            Semana {week.week}
                            {version.locked_weeks?.includes(week.week) && (
                              <span className="ml-2 text-gold">🔒</span>
                            )}
                          </p>
                          <p className="mt-1 text-sm font-medium text-foreground">{week.title}</p>
                          <ul className="mt-2 grid gap-1 text-sm text-muted-foreground">
                            {week.activities.map((activity, i) => (
                              <li key={i}>• {activity}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
