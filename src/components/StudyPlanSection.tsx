import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { Lock, Loader2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DailyExercisesSection } from "@/components/DailyExercisesSection";
import { ExerciseHistorySection } from "@/components/ExerciseHistorySection";
import { createThread } from "@/lib/chat.functions";
import {
  getStudyPlan,
  generateStudyPlan,
  previewStudyPlanRefinement,
  applyStudyPlanRefinement,
  setWeekLock,
} from "@/lib/study-plan.functions";

type WeeklyFocus = { week: number; title: string; activities: string[] };

type RefinementPreview = {
  weeks: {
    week: number;
    before: { title: string; activities: string[] };
    after: { week: number; title: string; activities: string[] };
    unclear: string[];
  }[];
};

export function StudyPlanSection({
  profileReady,
  fullPlan,
}: {
  profileReady: boolean;
  fullPlan: boolean;
}) {
  const fetchPlan = useServerFn(getStudyPlan);
  const generate = useServerFn(generateStudyPlan);
  const previewRefinement = useServerFn(previewStudyPlanRefinement);
  const applyRefinement = useServerFn(applyStudyPlanRefinement);
  const toggleLock = useServerFn(setWeekLock);
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const newThread = useServerFn(createThread);
  const [preview, setPreview] = useState<RefinementPreview | null>(null);
  const [practiceWeek, setPracticeWeek] = useState<number | null>(null);

  /** Abre o Professor IA já com a prática da semana indicada pelo plano. */
  async function practiceWithAi(week: WeeklyFocus) {
    if (practiceWeek !== null) return;
    try {
      setPracticeWeek(week.week);
      const thread = await newThread({
        data: { title: `Semana ${week.week} — ${week.title}` },
      });
      await queryClient.invalidateQueries({ queryKey: ["chat-threads"] });
      const prompt = `Vamos fazer a prática da Semana ${week.week} do meu plano de estudos: "${week.title}".

Atividades planejadas:
${week.activities.map((a) => `- ${a}`).join("\n")}

Conduza esta prática comigo passo a passo, em inglês adequado ao meu nível, com correções em português quando eu errar. Comece pela primeira atividade.`;
      await navigate({
        to: "/professor/$threadId",
        params: { threadId: thread.id },
        search: { prompt },
      });
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Não foi possível abrir a prática com a IA.");
    } finally {
      setPracticeWeek(null);
    }
  }

  const { data: plan, isLoading } = useQuery({
    queryKey: ["study-plan"],
    queryFn: () => fetchPlan(),
  });

  const mutation = useMutation({
    mutationFn: () => generate(),
    onSuccess: (data) => {
      queryClient.setQueryData(["study-plan"], data);
      queryClient.invalidateQueries({ queryKey: ["plan-versions"] });
      toast.success("Seu plano de estudos foi gerado!");
    },
    onError: (error: Error) => toast.error(error.message),
  });

  const previewMutation = useMutation({
    mutationFn: () => previewRefinement(),
    onSuccess: (data) => {
      const result = data as RefinementPreview & { notice?: string | null };
      if (result.notice || result.weeks.length === 0) {
        setPreview(null);
        toast.info(result.notice ?? "Nada para ajustar no seu plano por enquanto.");
        return;
      }
      setPreview({ weeks: result.weeks });
    },
    onError: (error: Error) => toast.error(error.message),
  });

  const applyMutation = useMutation({
    mutationFn: (weeks: RefinementPreview["weeks"]) =>
      applyRefinement({ data: { weeks: weeks.map((w) => w.after) } }),
    onSuccess: (data) => {
      queryClient.setQueryData(["study-plan"], data);
      queryClient.invalidateQueries({ queryKey: ["plan-versions"] });
      setPreview(null);
      const list = (data as { refined_weeks: number[] }).refined_weeks;
      toast.success(
        `Semana${list.length > 1 ? "s" : ""} ${list.join(", ")} atualizada${
          list.length > 1 ? "s" : ""
        } com base no seu feedback.`,
      );
    },
    onError: (error: Error) => toast.error(error.message),
  });

  const lockMutation = useMutation({
    mutationFn: (vars: { week: number; locked: boolean }) => toggleLock({ data: vars }),
    onSuccess: (data, vars) => {
      const list = (data as { locked_weeks: number[] }).locked_weeks;
      queryClient.setQueryData(["study-plan"], (old: unknown) =>
        old ? { ...(old as object), locked_weeks: list } : old,
      );
      setPreview((current) =>
        current && vars.locked
          ? { weeks: current.weeks.filter((w) => w.week !== vars.week) }
          : current,
      );
      toast.success(
        vars.locked ? `Semana ${vars.week} travada.` : `Semana ${vars.week} destravada.`,
      );
    },
    onError: (error: Error) => toast.error(error.message),
  });

  const autoRan = useRef(false);
  useEffect(() => {
    if (autoRan.current) return;
    if (isLoading || plan || !profileReady || mutation.isPending) return;
    autoRan.current = true;
    mutation.mutate();
  }, [isLoading, plan, profileReady, mutation]);

  const weeks = (plan?.weekly_focus ?? []) as WeeklyFocus[];
  const milestones = (plan?.milestones ?? []) as string[];
  const limited = Boolean((plan as { limited?: boolean } | null)?.limited);
  const totalWeeks = (plan as { total_weeks?: number } | null)?.total_weeks ?? weeks.length;
  const previewWeeks = (plan as { preview_weeks?: number } | null)?.preview_weeks ?? weeks.length;
  const lockedWeeks = new Set(
    (((plan as { locked_weeks?: number[] } | null)?.locked_weeks ?? []) as number[]).map(Number),
  );

  return (
    <section className="mt-14">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-2xl font-semibold">
          Seu <span className="text-gold">plano de estudos</span>
        </h2>
        {profileReady && (
          <Button
            variant="outline"
            disabled={mutation.isPending}
            onClick={() => mutation.mutate()}
            className="rounded-full border-primary/40 bg-transparent text-foreground hover:bg-secondary"
          >
            {mutation.isPending ? "Gerando…" : plan ? "Gerar novamente" : "Gerar plano"}
          </Button>
        )}
        {profileReady && plan && fullPlan && (
          <Button
            variant="outline"
            disabled={previewMutation.isPending || mutation.isPending}
            onClick={() => previewMutation.mutate()}
            className="rounded-full border-primary/40 bg-transparent text-foreground hover:bg-secondary"
          >
            {previewMutation.isPending ? "Preparando prévia…" : "Ver prévia do ajuste"}
          </Button>
        )}
        {profileReady && plan && !fullPlan && (
          <Button
            asChild
            className="rounded-full bg-gold font-semibold text-primary-foreground hover:opacity-90"
          >
            <Link to="/upgrade/essential" search={{ feature: "ajustes" as const }}>
              <Lock className="mr-2 h-4 w-4" />
              Ajustar com IA · Essential
            </Link>
          </Button>
        )}
      </div>

      {limited && (
        <div className="mt-5 rounded-2xl border border-gold/40 bg-card/60 p-5 backdrop-blur">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-gold">
              <Sparkles className="h-4 w-4" />
              <p className="text-xs tracking-widest uppercase">Modo degustação · plano Gratuito</p>
            </div>
            <p className="text-sm font-semibold text-foreground">
              {previewWeeks} de {totalWeeks} semanas liberadas ·{" "}
              <span className="text-gold">
                {Math.max(totalWeeks - previewWeeks, 0)} semana
                {totalWeeks - previewWeeks === 1 ? "" : "s"} bloqueada
                {totalWeeks - previewWeeks === 1 ? "" : "s"}
              </span>
            </p>
          </div>
          <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-secondary">
            <div
              className="h-full rounded-full bg-gold transition-all"
              style={{
                width: `${totalWeeks > 0 ? Math.round((previewWeeks / totalWeeks) * 100) : 0}%`,
              }}
            />
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Você já pode praticar as semanas 1–{previewWeeks}. As semanas {previewWeeks + 1}–
            {totalWeeks} são liberadas no plano Essential.
          </p>
        </div>
      )}

      {preview && (
        <div className="mt-6 rounded-2xl border border-gold/40 bg-card/60 p-6 backdrop-blur">
          <p className="text-xs tracking-widest text-muted-foreground uppercase">
            Prévia do ajuste — nada foi salvo ainda
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Compare o que muda nas semanas afetadas pelo seu feedback antes de aplicar.
          </p>

          <div className="mt-5 grid gap-5">
            {preview.weeks.map((item) => (
              <div key={item.week} className="rounded-xl border border-border p-4">
                <p className="font-semibold text-gold">Semana {item.week}</p>
                {item.unclear.length > 0 && (
                  <p className="mt-1 text-xs text-muted-foreground">
                    Exercícios marcados como “não ajudou”: {item.unclear.join(" | ")}
                  </p>
                )}
                <div className="mt-3 grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="text-xs tracking-widest text-muted-foreground uppercase">Antes</p>
                    <p className="mt-1 text-sm font-medium text-foreground">{item.before.title}</p>
                    <ul className="mt-2 grid gap-1.5 text-sm text-muted-foreground">
                      {item.before.activities.map((activity, i) => (
                        <li key={i}>• {activity}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs tracking-widest text-gold uppercase">Depois</p>
                    <p className="mt-1 text-sm font-medium text-foreground">{item.after.title}</p>
                    <ul className="mt-2 grid gap-1.5 text-sm text-muted-foreground">
                      {item.after.activities.map((activity, i) => (
                        <li key={i}>• {activity}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <Button
              disabled={applyMutation.isPending}
              onClick={() => applyMutation.mutate(preview.weeks)}
              className="rounded-full"
            >
              {applyMutation.isPending ? "Aplicando…" : "Aplicar ajuste"}
            </Button>
            <Button
              variant="outline"
              disabled={applyMutation.isPending}
              onClick={() => setPreview(null)}
              className="rounded-full border-primary/40 bg-transparent text-foreground hover:bg-secondary"
            >
              Manter como está
            </Button>
            <Button
              variant="outline"
              disabled={previewMutation.isPending || applyMutation.isPending}
              onClick={() => previewMutation.mutate()}
              className="rounded-full border-primary/40 bg-transparent text-foreground hover:bg-secondary"
            >
              {previewMutation.isPending ? "Gerando…" : "Gerar outra prévia"}
            </Button>
          </div>
        </div>
      )}

      {!profileReady ? (
        <p className="mt-4 text-sm text-muted-foreground">
          Complete seu perfil para gerarmos um plano personalizado com seu objetivo e nível
          desejado.
        </p>
      ) : mutation.isPending || isLoading ? (
        <p className="mt-4 text-sm text-muted-foreground">
          Montando seu plano personalizado com o professor de IA…
        </p>
      ) : plan ? (
        <div className="mt-6 grid gap-6">
          <div className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur">
            <p className="text-sm leading-relaxed text-foreground">{plan.summary}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {weeks.map((week) => (
              <div
                key={week.week}
                className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur"
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="text-xs tracking-widest text-muted-foreground uppercase">
                    Semana {week.week}
                    {lockedWeeks.has(week.week) && (
                      <span className="ml-2 text-gold">🔒 travada</span>
                    )}
                  </p>
                  {fullPlan && (
                    <Button
                      variant="outline"
                      size="sm"
                      disabled={lockMutation.isPending}
                      onClick={() =>
                        lockMutation.mutate({
                          week: week.week,
                          locked: !lockedWeeks.has(week.week),
                        })
                      }
                      className="h-7 rounded-full border-primary/40 bg-transparent px-3 text-xs text-foreground hover:bg-secondary"
                    >
                      {lockedWeeks.has(week.week) ? "Destravar" : "Travar"}
                    </Button>
                  )}
                </div>
                <p className="mt-1 font-semibold text-gold">{week.title}</p>
                <ul className="mt-3 grid gap-1.5 text-sm text-muted-foreground">
                  {week.activities.map((activity, i) => (
                    <li key={i}>• {activity}</li>
                  ))}
                </ul>
                <Button
                  size="sm"
                  disabled={practiceWeek !== null}
                  onClick={() => void practiceWithAi(week)}
                  className="mt-4 rounded-full bg-gold font-semibold text-primary-foreground hover:opacity-90"
                >
                  {practiceWeek === week.week ? (
                    <Loader2 className="mr-1 h-4 w-4 animate-spin" />
                  ) : (
                    <Sparkles className="mr-1 h-4 w-4" />
                  )}
                  Praticar com a IA
                </Button>
              </div>
            ))}

            {limited && (
              <div className="relative overflow-hidden rounded-2xl border border-gold/40 bg-card/60 p-6 backdrop-blur sm:col-span-2">
                <div className="flex items-center gap-2 text-gold">
                  <Lock className="h-4 w-4" />
                  <p className="text-xs tracking-widest uppercase">
                    Semanas {previewWeeks + 1}–{totalWeeks} bloqueadas
                  </p>
                </div>
                <p className="mt-3 text-sm font-semibold text-foreground">
                  Você está vendo uma degustação do seu plano de estudos.
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  O plano Gratuito libera as {previewWeeks} primeiras semanas. Com o plano Essential
                  você desbloqueia as {Math.max(totalWeeks - previewWeeks, 0)} semanas restantes, os
                  marcos de evolução, os ajustes do plano com IA, o travamento de semanas e o
                  histórico de versões.
                </p>
                <Button
                  asChild
                  className="mt-4 rounded-full bg-gold font-semibold text-primary-foreground hover:opacity-90"
                >
                  <Link to="/upgrade/essential" search={{}}>
                    Liberar com o Essential
                  </Link>
                </Button>
              </div>
            )}
          </div>

          {fullPlan && milestones.length > 0 && (
            <div className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur">
              <p className="text-xs tracking-widest text-muted-foreground uppercase">
                Marcos de evolução
              </p>
              <ul className="mt-3 grid gap-1.5 text-sm text-foreground">
                {milestones.map((milestone, i) => (
                  <li key={i}>✓ {milestone}</li>
                ))}
              </ul>
            </div>
          )}

          {!fullPlan && (
            <div className="rounded-2xl border border-gold/40 bg-card/60 p-6 backdrop-blur">
              <div className="flex items-center gap-2 text-gold">
                <Lock className="h-4 w-4" />
                <p className="text-xs tracking-widest uppercase">Marcos de evolução bloqueados</p>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                Os marcos mostram cada conquista prevista no seu plano. Eles fazem parte do plano
                Essential.
              </p>
              <Button
                asChild
                className="mt-4 rounded-full bg-gold font-semibold text-primary-foreground hover:opacity-90"
              >
                <Link to="/upgrade/essential" search={{ feature: "marcos" as const }}>
                  Fazer upgrade para o Essential
                </Link>
              </Button>
            </div>
          )}
        </div>
      ) : (
        <p className="mt-4 text-sm text-muted-foreground">
          Ainda não há um plano gerado. Clique em “Gerar plano”.
        </p>
      )}

      <DailyExercisesSection hasPlan={Boolean(plan)} />
      <ExerciseHistorySection />
    </section>
  );
}
