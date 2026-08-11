import { useCallback, useEffect, useState } from "react";
import { applyPlaybackSettings } from "@/lib/voice-client";

/** Voz clonada da fundadora (ElevenLabs). */
export const FOUNDER_VOICE_ID = "m3m72XeqSLA8AEuQecN0";

export const AI_VOICES = [
  {
    id: FOUNDER_VOICE_ID,
    label: "Gisele Moraes (Founder)",
    description: "Voz clonada da fundadora — gerada por IA",
  },
  { id: "alloy", label: "Alloy", description: "Neutra e equilibrada" },
  { id: "nova", label: "Nova", description: "Feminina, clara e acolhedora" },
  { id: "shimmer", label: "Shimmer", description: "Feminina, suave" },
  { id: "fable", label: "Fable", description: "Expressiva, sotaque britânico" },
  { id: "echo", label: "Echo", description: "Masculina, calma" },
  { id: "onyx", label: "Onyx", description: "Masculina, grave" },
] as const;

export type SupportLanguage = "en" | "bilingual" | "pt";

export const SUPPORT_LANGUAGES: { id: SupportLanguage; label: string; description: string }[] = [
  { id: "en", label: "English only", description: "Imersão total, sem tradução." },
  {
    id: "bilingual",
    label: "English + português",
    description: "Inglês em destaque com tradução curta quando necessário.",
  },
  {
    id: "pt",
    label: "Explicações em português",
    description: "Prática em inglês, explicações em português.",
  },
];

export type VoiceSettings = {
  autoSpeak: boolean;
  volume: number; // 0 a 1
  rate: number; // 0.5 a 2
  voice: string;
  supportLanguage: SupportLanguage;
};

const STORAGE_KEY = "speak2co:voice-settings";
const DEFAULTS: VoiceSettings = {
  autoSpeak: false,
  volume: 1,
  rate: 1,
  voice: "alloy",
  supportLanguage: "bilingual",
};

function read(): VoiceSettings {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULTS;
    const parsed = JSON.parse(raw) as Partial<VoiceSettings>;
    const voice = AI_VOICES.some((v) => v.id === parsed.voice) ? parsed.voice! : DEFAULTS.voice;
    const supportLanguage = SUPPORT_LANGUAGES.some((l) => l.id === parsed.supportLanguage)
      ? (parsed.supportLanguage as SupportLanguage)
      : DEFAULTS.supportLanguage;
    return {
      autoSpeak: Boolean(parsed.autoSpeak),
      volume: Math.min(1, Math.max(0, Number(parsed.volume ?? 1))),
      rate: Math.min(2, Math.max(0.5, Number(parsed.rate ?? 1))),
      voice,
      supportLanguage,
    };
  } catch {
    return DEFAULTS;
  }
}

/** Preferências de voz da GiseleAI, persistidas no navegador. */
export function useVoiceSettings() {
  const [settings, setSettings] = useState<VoiceSettings>(DEFAULTS);

  // Ler apenas após a hidratação para evitar divergência de SSR.
  useEffect(() => {
    setSettings(read());
  }, []);

  const update = useCallback((patch: Partial<VoiceSettings>) => {
    setSettings((prev) => {
      const next = { ...prev, ...patch };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        // storage indisponível — mantemos apenas em memória
      }
      applyPlaybackSettings({ volume: next.volume, rate: next.rate });
      return next;
    });
  }, []);

  const reset = useCallback(() => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
    setSettings(DEFAULTS);
  }, []);

  return { settings, update, reset };
}
