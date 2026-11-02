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
import { AltHeading } from "@/components/AltHeading";

export const Route = createFileRoute("/_authenticated/gisele/preferencias")({
  head: () => ({
    meta: [
      {"title": "Preferences | GiseleAI | Speak2Co"},
      {"name": "description", "content": "Preferences on Speak2Co: personalized English learning and practice."},
      {"property": "og:title", "content": "Preferences | GiseleAI | Speak2Co"},
      {"property": "og:description", "content": "Preferences on Speak2Co: personalized English learning and practice."},
      {"property": "og:type", "content": "website"},
      {"name": "twitter:card", "content": "summary_large_image"},
    ],
  }),
  component: PreferencesPage,
});

const LEVELS = ["A1", "A2", "B1", "B2", "C1"];

type PracticeFormat = "text" | "audio" | "voice";

const FORMATS: { id: PracticeFormat; label: string; description: string }[] = [
  { id: "voice", label: "Voice", description: "Conversa falada, com turnos curtos." },
  { id: "audio", label: "Audio", description: "Ouvir e repetir frases-alvo." },
  { id: "text", label: "Text", description: "Escrever respostas e receber correções." },
];

function PreferencesPage() {
  const fetchProfile = useServerFn(getAIProfile);
  const saveFn = useServerFn(saveAIProfile);
  const { settings, update } = useVoiceSettings();
  const { data } = useQuery({ queryKey: ["ai-profile"], queryFn: () => fetchProfile() });

  const [objective, setObjective] = useState("");
  const [level, setLevel] = useState("B1");
  const [minutes, setMinutes] = useState(15);
  const [format, setFormat] = useState<PracticeFormat>("voice");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!data) return;
    setObjective(data.objective ?? "");
    setLevel(data.level ?? "B1");
    const stored = Number(data.preferences?.["minutesPerDay"]);
    if (Number.isFinite(stored) && stored > 0) setMinutes(stored);
    const storedFormat = String(data.preferences?.["format"] ?? "");
    if (storedFormat === "text" || storedFormat === "audio" || storedFormat === "voice") {
      setFormat(storedFormat);
    }
  }, [data]);

  async function save() {
    try {
      setSaving(true);
      await saveFn({
        data: {
          objective,
          level,
          preferences: { minutesPerDay: minutes, format },
        },
      });
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
        <h1 className="text-2xl font-bold"><AltHeading text={"Preferences"} /></h1>
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
            Time available per day{" "}
            <span className="italic text-muted-foreground">/ Tempo disponível por dia</span>
          </p>
          <div className="flex flex-wrap gap-2">
            {[10, 15, 25, 40].map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setMinutes(m)}
                className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition-colors ${
                  minutes === m
                    ? "border-gold bg-gold/15 text-gold"
                    : "border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {m} min
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-semibold text-foreground">
            Preferred practice format{" "}
            <span className="italic text-muted-foreground">/ Formato preferido</span>
          </p>
          <div className="grid gap-2">
            {FORMATS.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setFormat(f.id)}
                className={`rounded-lg border px-3 py-2 text-left text-xs transition-colors ${
                  format === f.id
                    ? "border-gold bg-gold/10 text-foreground"
                    : "border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                <span className="block font-semibold">{f.label}</span>
                {f.description}
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
