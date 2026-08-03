import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import logo from "@/assets/speak2co-logo.asset.json";

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

type Profile = { full_name: string | null; plan: string; english_level: string | null };

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
        .select("full_name, plan, english_level")
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
        </div>
      </div>
    </main>
  );
}
