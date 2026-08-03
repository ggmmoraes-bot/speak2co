import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { getStudyPlan, generateStudyPlan } from "@/lib/study-plan.functions";
import { Button } from "@/components/ui/button";
import logo from "@/assets/speak2co-logo.asset.json";
import { DailyExercisesSection } from "@/components/DailyExercisesSection";

type WeeklyFocus = { week: number; title: string; activities: string[] };

export const Route = createFileRoute("/_authenticated/painel")({
  head: () => ({
    meta: [
      { title: "Meu painel — Speak2Co" },
      {
        name: "description",
        content: "Painel do aluno Speak2Co: seu plano, seu nível de inglês e seus próximos passos.",
      },
      { property: "og:title", content: "Meu painel — Speak2Co" },
      { property: "og:description", content: "Acompanhe sua evolução no inglês com a Speak2Co." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Painel,
});

type Profile = {
  full_name: string | null;
  plan: string;
  english_level: string | null;
  goal: string | null;
  target_level: string | null;
};

function Painel() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    let active = true;
    (async () => {
      const { data: userData } = await supabase.auth.getUser();
      if (!active || !userData.user) return;
      setEmail(userData.user.email ?? "");
      const { data } = await supabase
        .from("profiles")
        .select("full_name, plan, english_level, goal, target_level")
        .eq("id", userData.user.id)
        .maybeSingle();
      if (active && data) setProfile(data as Profile);
    })();
    return () => {
      active = false;
    };
  }, []);

  async function handleSignOut() {
    await queryClient.cancelQueries();
    queryClient.clear();
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  }

  return (
    <main className="surface-navy min-h-screen px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <div className="flex items-center justify-between">
          <img src={logo.url} alt="Logo Speak2Co" className="w-14 rounded-full" />
          <Button
            variant="outline"
            onClick={handleSignOut}
            className="rounded-full border-primary/40 bg-transparent text-foreground hover:bg-secondary"
          >
            Sair
          </Button>
        </div>

        <h1 className="mt-10 text-3xl font-semibold sm:text-4xl">
          Olá, <span className="text-gold">{profile?.full_name ?? email}</span>
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">English for Every Opportunity</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur">
            <p className="text-xs tracking-widest text-muted-foreground uppercase">Seu plano</p>
            <p className="mt-2 text-xl font-semibold text-gold">
              {profile?.plan === "premium" ? "Premium" : "Gratuito"}
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur">
            <p className="text-xs tracking-widest text-muted-foreground uppercase">Nível de inglês</p>
            <p className="mt-2 text-xl font-semibold text-gold">
              {profile?.english_level ?? "A definir"}
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur">
            <p className="text-xs tracking-widest text-muted-foreground uppercase">Nível desejado</p>
            <p className="mt-2 text-xl font-semibold text-gold">
              {profile?.target_level ?? "A definir"}
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur">
            <p className="text-xs tracking-widest text-muted-foreground uppercase">Seu objetivo</p>
            <p className="mt-2 text-sm text-foreground">
              {profile?.goal ?? "Conte pra gente o que você quer conquistar com o inglês."}
            </p>
          </div>
        </div>

        <Button
          asChild
          className="bg-gold text-primary-foreground glow-gold mt-8 rounded-full font-semibold hover:opacity-90"
        >
          <Link to="/perfil">
            {profile?.goal && profile?.target_level ? "Editar meu perfil" : "Completar meu perfil"}
          </Link>
        </Button>

        <StudyPlanSection profileReady={Boolean(profile?.goal && profile?.target_level)} />
      </div>
    </main>
  );
}

function StudyPlanSection({ profileReady }: { profileReady: boolean }) {
  const fetchPlan = useServerFn(getStudyPlan);
  const generate = useServerFn(generateStudyPlan);
  const queryClient = useQueryClient();

  const { data: plan, isLoading } = useQuery({
    queryKey: ["study-plan"],
    queryFn: () => fetchPlan(),
  });

  const mutation = useMutation({
    mutationFn: () => generate(),
    onSuccess: (data) => {
      queryClient.setQueryData(["study-plan"], data);
      toast.success("Seu plano de estudos foi gerado!");
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
      </div>

      {!profileReady ? (
        <p className="mt-4 text-sm text-muted-foreground">
          Complete seu perfil para gerarmos um plano personalizado com seu objetivo e nível desejado.
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
                <p className="text-xs tracking-widest text-muted-foreground uppercase">
                  Semana {week.week}
                </p>
                <p className="mt-1 font-semibold text-gold">{week.title}</p>
                <ul className="mt-3 grid gap-1.5 text-sm text-muted-foreground">
                  {week.activities.map((activity, i) => (
                    <li key={i}>• {activity}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {milestones.length > 0 && (
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
        </div>
      ) : (
        <p className="mt-4 text-sm text-muted-foreground">
          Ainda não há um plano gerado. Clique em “Gerar plano”.
        </p>
      )}

      <DailyExercisesSection hasPlan={Boolean(plan)} />
    </section>
  );
}

