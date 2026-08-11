import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Loader2, RotateCcw, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { speakText, stopSpeaking } from "@/lib/voice-client";
import {
  AI_VOICES,
  STT_PROVIDERS,
  SUPPORT_LANGUAGES,
  TTS_PROVIDERS,
  useVoiceSettings,
  type SupportLanguage,
} from "@/lib/use-voice-settings";


export const Route = createFileRoute("/_authenticated/gisele/configuracoes")({
  head: () => ({
    meta: [
      { title: "Configurações de voz — GiseleAI by Speak2Co" },
      {
        name: "description",
        content:
          "Escolha a voz, a velocidade da fala e o idioma das explicações da GiseleAI na Speak2Co.",
      },
      { property: "og:title", content: "Configurações de voz — GiseleAI by Speak2Co" },
      {
        property: "og:description",
        content: "Personalize voz, velocidade e idioma da sua mentora de inglês com IA.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GiseleSettingsPage,
});

const SAMPLE =
  "Hi! I'm Gisele, your English mentor. Let's practise together — ready when you are.";

function GiseleSettingsPage() {
  const { settings, update, reset } = useVoiceSettings();
  const [testing, setTesting] = useState(false);

  async function testVoice(voice?: string) {
    try {
      stopSpeaking();
      setTesting(true);
      await speakText(SAMPLE, {
        voice: voice ?? settings.voice,
        volume: settings.volume,
        rate: settings.rate,
      });
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Não foi possível tocar o áudio.");
    } finally {
      setTesting(false);
    }
  }

  return (
    <div className="mx-auto w-full max-w-3xl flex-1 space-y-8 overflow-y-auto p-6 md:p-10">
      <header className="space-y-2">
        <p className="text-xs tracking-widest text-muted-foreground uppercase">Settings</p>
        <h1 className="text-2xl font-semibold text-foreground md:text-3xl">
          Voz e idioma da <span className="text-gold">GiseleAI</span>
        </h1>
        <p className="text-sm text-muted-foreground">
          Escolha como sua mentora fala com você. A voz é gerada por IA e as preferências ficam
          salvas neste navegador.
        </p>
      </header>

      <section className="space-y-4 rounded-2xl border border-gold/30 bg-card/60 p-6 backdrop-blur">
        <div>
          <h2 className="text-sm font-semibold text-foreground">Voice · Voz</h2>
          <p className="text-xs text-muted-foreground">Toque para ouvir uma amostra.</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {AI_VOICES.map((v) => {
            const active = settings.voice === v.id;
            return (
              <button
                key={v.id}
                type="button"
                onClick={() => {
                  update({ voice: v.id });
                  void testVoice(v.id);
                }}
                className={`flex items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left transition-colors ${
                  active
                    ? "border-gold bg-secondary text-foreground"
                    : "border-border text-muted-foreground hover:border-gold/50 hover:text-foreground"
                }`}
              >
                <span>
                  <span className="block text-sm font-medium">{v.label}</span>
                  <span className="block text-xs text-muted-foreground">{v.description}</span>
                </span>
                <Volume2 className={`h-4 w-4 shrink-0 ${active ? "text-gold" : ""}`} />
              </button>
            );
          })}
        </div>
      </section>

      <section className="space-y-6 rounded-2xl border border-border bg-card/60 p-6 backdrop-blur">
        <h2 className="text-sm font-semibold text-foreground">Playback · Reprodução</h2>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label>Speaking speed · Velocidade da fala</Label>
            <span className="text-xs text-muted-foreground">{settings.rate.toFixed(2)}x</span>
          </div>
          <Slider
            value={[settings.rate]}
            min={0.5}
            max={2}
            step={0.05}
            onValueChange={([value]) => update({ rate: value ?? 1 })}
          />
          <div className="flex flex-wrap gap-2">
            {[0.75, 1, 1.25, 1.5].map((r) => (
              <Button
                key={r}
                variant="outline"
                size="sm"
                className="rounded-full"
                onClick={() => update({ rate: r })}
              >
                {r}x
              </Button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label>Volume</Label>
            <span className="text-xs text-muted-foreground">
              {Math.round(settings.volume * 100)}%
            </span>
          </div>
          <Slider
            value={[settings.volume]}
            min={0}
            max={1}
            step={0.05}
            onValueChange={([value]) => update({ volume: value ?? 1 })}
          />
        </div>

        <div className="flex items-center justify-between gap-4">
          <div>
            <Label>Auto-play replies · Falar automaticamente</Label>
            <p className="text-xs text-muted-foreground">
              Toca a resposta da GiseleAI assim que ela chega.
            </p>
          </div>
          <Switch
            checked={settings.autoSpeak}
            onCheckedChange={(checked) => update({ autoSpeak: checked })}
          />
        </div>

        <Button
          variant="outline"
          className="rounded-full"
          disabled={testing}
          onClick={() => void testVoice()}
        >
          {testing ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Tocando...
            </>
          ) : (
            <>
              <Volume2 className="mr-2 h-4 w-4" /> Testar voz
            </>
          )}
        </Button>
      </section>

      <section className="space-y-4 rounded-2xl border border-border bg-card/60 p-6 backdrop-blur">
        <div>
          <h2 className="text-sm font-semibold text-foreground">Language · Idioma</h2>
          <p className="text-xs text-muted-foreground">
            A prática é sempre em inglês; isso define o idioma das explicações.
          </p>
        </div>
        <div className="space-y-3">
          {SUPPORT_LANGUAGES.map((lang) => {
            const active = settings.supportLanguage === lang.id;
            return (
              <button
                key={lang.id}
                type="button"
                onClick={() => update({ supportLanguage: lang.id as SupportLanguage })}
                className={`block w-full rounded-xl border px-4 py-3 text-left transition-colors ${
                  active
                    ? "border-gold bg-secondary text-foreground"
                    : "border-border text-muted-foreground hover:border-gold/50 hover:text-foreground"
                }`}
              >
                <span className="block text-sm font-medium">{lang.label}</span>
                <span className="block text-xs text-muted-foreground">{lang.description}</span>
              </button>
            );
          })}
        </div>
      </section>
      <section className="space-y-4 rounded-2xl border border-border bg-card/60 p-6 backdrop-blur">
        <div>
          <h2 className="text-sm font-semibold text-foreground">Voice engines · Motores de voz</h2>
          <p className="text-xs text-muted-foreground">
            Defina quais motores a GiseleAI usa para ouvir você (STT) e para falar (TTS).
          </p>
        </div>

        <div className="space-y-2">
          <Label>Speech-to-text · Reconhecimento de fala</Label>
          <div className="grid gap-2 sm:grid-cols-2">
            {STT_PROVIDERS.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => update({ sttProvider: p.id })}
                className={`rounded-xl border px-4 py-3 text-left text-xs transition-colors ${
                  settings.sttProvider === p.id
                    ? "border-gold bg-secondary text-foreground"
                    : "border-border text-muted-foreground hover:border-gold/50 hover:text-foreground"
                }`}
              >
                <span className="block text-sm font-medium">{p.label}</span>
                {p.description}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <Label>Text-to-speech · Síntese de voz</Label>
          <div className="grid gap-2 sm:grid-cols-3">
            {TTS_PROVIDERS.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => update({ ttsProvider: p.id })}
                className={`rounded-xl border px-4 py-3 text-left text-xs transition-colors ${
                  settings.ttsProvider === p.id
                    ? "border-gold bg-secondary text-foreground"
                    : "border-border text-muted-foreground hover:border-gold/50 hover:text-foreground"
                }`}
              >
                <span className="block text-sm font-medium">{p.label}</span>
                {p.description}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between gap-4">
          <div>
            <Label>Microphone consent · Consentimento de microfone</Label>
            <p className="text-xs text-muted-foreground">
              Autorizo gravar minha voz e enviá-la para transcrição durante as sessões.
            </p>
          </div>
          <Switch
            checked={settings.voiceConsent}
            onCheckedChange={(checked) => update({ voiceConsent: checked })}
          />
        </div>
      </section>


      <Button
        variant="ghost"
        className="rounded-full text-muted-foreground"
        onClick={() => {
          reset();
          toast.success("Preferências restauradas.");
        }}
      >
        <RotateCcw className="mr-2 h-4 w-4" /> Restaurar padrão
      </Button>
    </div>
  );
}
