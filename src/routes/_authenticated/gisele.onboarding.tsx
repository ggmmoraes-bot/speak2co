import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { getAIProfile, saveAIProfile } from "@/lib/gisele-data.functions";
import { GISELE_GOALS } from "@/lib/gisele-goals";

import { AI_VOICES } from "@/lib/use-voice-settings";
import { AltHeading } from "@/components/AltHeading";

export const Route = createFileRoute("/_authenticated/gisele/onboarding")({
  component: OnboardingPage,
});

const LEVELS = ["A1", "A2", "B1", "B2", "C1"];

function OnboardingPage() {
  const navigate = useNavigate();
  const fetchProfile = useServerFn(getAIProfile);
  const saveFn = useServerFn(saveAIProfile);

  const { data } = useQuery({ queryKey: ["ai-profile"], queryFn: () => fetchProfile() });

  const [objective, setObjective] = useState("");
  const [level, setLevel] = useState("B1");
  const [voice, setVoice] = useState<string>(AI_VOICES[0].id);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!data) return;
    setObjective(data.objective ?? "");
    setLevel(data.level ?? "B1");
    setVoice(data.preferred_voice ?? AI_VOICES[0].id);
  }, [data]);

  async function save() {
    try {
      setSaving(true);
      await saveFn({
        data: {
          objective,
          level,
          preferred_voice: voice,
          onboarding_completed: true,
        },
      });
      toast.success("Tudo pronto. A Gisele já conhece o seu objetivo.");
      navigate({ to: "/gisele" });
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Não foi possível salvar.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <main className="mx-auto w-full max-w-2xl flex-1 space-y-6 px-6 py-10">
      <header className="space-y-1">
        <h1 className="text-2xl font-bold"><AltHeading text={"Let's set up your mentorship"} /></h1>
        <p className="text-sm italic text-muted-foreground">
          Conte seu objetivo para a Gisele adaptar cada sessão.
        </p>
      </header>

      <Card className="space-y-5 p-6">
        <div className="space-y-2">
          <p className="text-sm font-semibold text-foreground">
            My English Goal <span className="italic text-muted-foreground">/ Meu objetivo</span>
          </p>
          <div className="flex flex-wrap gap-2">
            {GISELE_GOALS.map((g) => (
              <button
                key={g.id}
                type="button"
                onClick={() => setObjective(g.en)}
                className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${
                  objective === g.en
                    ? "border-gold bg-gold/15 text-gold"
                    : "border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {g.en}
                <span className="ml-1 font-normal italic opacity-70">/ {g.pt}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-foreground" htmlFor="objective">
            Tell me more <span className="italic text-muted-foreground">/ Conte mais</span>
          </label>
          <Input
            id="objective"
            value={objective}
            onChange={(e) => setObjective(e.target.value)}
            placeholder="Ex.: Passar em entrevistas em inglês para vagas internacionais"
          />
        </div>


        <div className="space-y-2">
          <p className="text-sm font-semibold text-foreground">
            Current level <span className="italic text-muted-foreground">/ Nível atual</span>
          </p>
          <div className="flex flex-wrap gap-2">
            {LEVELS.map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLevel(l)}
                className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition-colors ${
                  level === l
                    ? "border-gold bg-gold/15 text-gold"
                    : "border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-semibold text-foreground">
            Preferred voice <span className="italic text-muted-foreground">/ Voz preferida</span>
          </p>
          <div className="grid gap-2 sm:grid-cols-2">
            {AI_VOICES.map((v) => (
              <button
                key={v.id}
                type="button"
                onClick={() => setVoice(v.id)}
                className={`rounded-lg border px-3 py-2 text-left text-xs transition-colors ${
                  voice === v.id
                    ? "border-gold bg-gold/10 text-foreground"
                    : "border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                <span className="block font-semibold">{v.label}</span>
                {v.description}
              </button>
            ))}
          </div>
        </div>

        <Button
          onClick={save}
          disabled={saving}
          className="w-full rounded-full bg-gold font-semibold text-primary-foreground hover:opacity-90"
        >
          {saving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Start mentorship
        </Button>
      </Card>
    </main>
  );
}
