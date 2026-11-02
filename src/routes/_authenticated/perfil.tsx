import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import logo from "@/assets/speak2co-logo.asset.json";
import { getCefrStage } from "@/lib/placement-content";

export const Route = createFileRoute("/_authenticated/perfil")({
  head: () => ({
    meta: [
      { title: "Completar perfil — Speak2Co" },
      {
        name: "description",
        content:
          "Informe seu nome, objetivo e nível de inglês desejado para receber um plano de estudos personalizado na Speak2Co.",
      },
      { property: "og:title", content: "Completar perfil — Speak2Co" },
      {
        property: "og:description",
        content: "Personalize seu plano de inglês na Speak2Co em poucos passos.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PerfilPage,
});

const LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"] as const;

const schema = z.object({
  full_name: z.string().trim().min(2, "Informe seu nome completo").max(100),
  goal: z.string().trim().min(5, "Descreva seu objetivo com pelo menos 5 caracteres").max(500),
  target_level: z.enum(LEVELS, { message: "Escolha o nível desejado" }),
});

function PerfilPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [fullName, setFullName] = useState("");
  const [goal, setGoal] = useState("");
  const [targetLevel, setTargetLevel] = useState<string>("");
  const [englishLevel, setEnglishLevel] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    (async () => {
      const { data: userData } = await supabase.auth.getUser();
      if (!active || !userData.user) return;
      const { data } = await supabase
        .from("profiles")
        .select("full_name, goal, target_level, english_level")
        .eq("id", userData.user.id)
        .maybeSingle();
      if (!active || !data) return;
      setFullName(data.full_name ?? "");
      setGoal(data.goal ?? "");
      setTargetLevel(data.target_level ?? "");
      setEnglishLevel(data.english_level ?? null);
    })();
    return () => {
      active = false;
    };
  }, []);


  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = schema.safeParse({ full_name: fullName, goal, target_level: targetLevel });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]!.message);
      return;
    }
    setLoading(true);
    const { data: userData } = await supabase.auth.getUser();
    if (!userData.user) {
      setLoading(false);
      toast.error("Sessão expirada. Entre novamente.");
      return;
    }
    const { error } = await supabase
      .from("profiles")
      .update({
        full_name: parsed.data.full_name,
        goal: parsed.data.goal,
        target_level: parsed.data.target_level,
      })
      .eq("id", userData.user.id);
    setLoading(false);
    if (error) {
      toast.error("Não foi possível salvar seu perfil. Tente novamente.");
      return;
    }
    toast.success("Perfil atualizado! Seu conteúdo será personalizado.");
    navigate({ to: "/painel" });
  }

  return (
    <main className="surface-navy min-h-screen px-6 py-12">
      <div className="mx-auto max-w-xl">
        <img src={logo.url} alt="Logo Speak2Co" className="w-14 rounded-full" />

        <h1 className="mt-8 text-3xl font-semibold sm:text-4xl">
          Complete seu <span className="text-gold">perfil</span>
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Assim personalizamos seu plano de estudos e as práticas com o AI Teacher.
        </p>

        {(() => {
          const stage = getCefrStage(englishLevel);
          if (!stage) return null;
          return (
            <section className="mt-8 rounded-3xl border border-gold/40 bg-gold/10 p-6">
              <p className="text-xs tracking-widest text-gold uppercase">
                Seu estágio no teste de nivelamento
              </p>
              <p className="mt-2 text-2xl font-semibold text-foreground">
                {stage.name} <span className="text-muted-foreground">({stage.range})</span>
              </p>
              <p className="mt-1 text-sm text-foreground/80">{stage.headline}</p>
              <p className="mt-3 text-xs text-muted-foreground">
                Nível CEFR identificado: <span className="font-semibold text-gold">{englishLevel}</span>
              </p>
            </section>
          );
        })()}

        {!englishLevel && (
          <p className="mt-8 rounded-2xl border border-border bg-card/60 p-5 text-sm text-muted-foreground">
            Faça o teste de nivelamento para descobrir seu estágio Speak2Co — Beginner,
            Intermediate, Upper-Intermediate ou Advanced.
          </p>
        )}


        <form
          onSubmit={handleSubmit}
          className="mt-10 grid gap-5 rounded-3xl border border-border bg-card/70 p-8 backdrop-blur"
        >
          <div className="grid gap-2">
            <Label htmlFor="perfil-nome">Nome completo</Label>
            <Input
              id="perfil-nome"
              autoComplete="name"
              maxLength={100}
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="perfil-objetivo">Seu objetivo com o inglês</Label>
            <Textarea
              id="perfil-objetivo"
              rows={4}
              maxLength={500}
              placeholder="Ex.: passar em entrevistas internacionais e viajar com confiança"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="perfil-nivel">Nível desejado</Label>
            <Select value={targetLevel} onValueChange={setTargetLevel}>
              <SelectTrigger id="perfil-nivel">
                <SelectValue placeholder="Escolha o nível que quer alcançar" />
              </SelectTrigger>
              <SelectContent>
                {LEVELS.map((level) => (
                  <SelectItem key={level} value={level}>
                    {level}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="bg-gold text-primary-foreground glow-gold mt-2 rounded-full font-semibold hover:opacity-90"
          >
            Save profile
          </Button>
        </form>
      </div>
    </main>
  );
}
