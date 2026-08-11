import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { getAIProfile, saveAIProfile } from "@/lib/gisele-data.functions";
import { SUPPORT_LANGUAGES, useVoiceSettings } from "@/lib/use-voice-settings";

export const Route = createFileRoute("/_authenticated/gisele/preferencias")({
  component: PreferencesPage,
});

const LEVELS = ["A1", "A2", "B1", "B2", "C1"];

function PreferencesPage() {
  const fetchProfile = useServerFn(getAIProfile);
  const saveFn = useServerFn(saveAIProfile);
  const { settings, update } = useVoiceSettings();
  const { data } = useQuery({ queryKey: ["ai-profile"], queryFn: () => fetchProfile() });

  const [objective, setObjective] = useState("");
  const [level, setLevel] = useState("B1");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!data) return;
    setObjective(data.objective ?? "");
    setLevel(data.level ?? "B1");
  }, [data]);

  async function save() {
    try {
      setSaving(true);
      await saveFn({ data: { objective, level } });
      toast.success("Preferências salvas.");
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Não foi possível salvar.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <main className="mx-auto w-full max-w-2xl flex-1 space-y-6 px-6 py-10">
      <header className="space-y-1">
        <h1 className="text-2xl font-bold text-foreground">Preferences</h1>
        <p className="text-sm italic text-muted-foreground">
          Objetivo, nível e idioma de apoio da mentoria.
        </p>
      </header>

      <Card className="space-y-5 p-6">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-foreground" htmlFor="objective">
            Your goal <span className="italic text-muted-foreground">/ Seu objetivo</span>
          </label>
          <Input
            id="objective"
            value={objective}
            onChange={(e) => setObjective(e.target.value)}
            placeholder="Ex.: Falar com clientes internacionais com segurança"
          />
        </div>

        <div className="space-y-2">
          <p className="text-sm font-semibold text-foreground">
            Level <span className="italic text-muted-foreground">/ Nível</span>
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
            Support language{" "}
            <span className="italic text-muted-foreground">/ Idioma de apoio</span>
          </p>
          <div className="grid gap-2">
            {SUPPORT_LANGUAGES.map((l) => (
              <button
                key={l.id}
                type="button"
                onClick={() => update({ supportLanguage: l.id })}
                className={`rounded-lg border px-3 py-2 text-left text-xs transition-colors ${
                  settings.supportLanguage === l.id
                    ? "border-gold bg-gold/10 text-foreground"
                    : "border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                <span className="block font-semibold">{l.label}</span>
                {l.description}
              </button>
            ))}
          </div>
        </div>

        <Button
          onClick={save}
          disabled={saving}
          className="rounded-full bg-gold font-semibold text-primary-foreground hover:opacity-90"
        >
          {saving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Save preferences
        </Button>
      </Card>
    </main>
  );
}
