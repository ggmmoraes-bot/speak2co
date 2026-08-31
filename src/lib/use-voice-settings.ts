import { useCallback, useEffect, useState } from "react";
import { applyPlaybackSettings } from "@/lib/voice-client";
import { GISELE_ELEVENLABS_VOICE_ID, isGiseleVoiceId } from "@/lib/gisele-voice-config";

/** Voz oficial da GiseleAI — configuração interna (ver gisele-voice-config.ts). */
export const FOUNDER_VOICE_ID = GISELE_ELEVENLABS_VOICE_ID;

/** A voz da GiseleAI é sempre sintética (gerada por IA). */
export function isBrandVoice(voiceId: string | undefined | null) {
  return isGiseleVoiceId(voiceId);
}

/**
 * A GiseleAI tem UMA única identidade vocal oficial.
 * Nenhuma outra voz pode ser oferecida ou selecionada pelo aluno.
 */
export const AI_VOICES = [
  {
    id: FOUNDER_VOICE_ID,
    label: "GiseleAI voice",
    description: "Voz oficial da GiseleAI — gerada por IA, não é uma pessoa real",
  },
] as const;

/** Estilos de fala — mesma voz oficial, apenas entrega diferente. */
export const GISELE_VOICE_STYLES = [
  { id: "natural", label: "Natural", description: "Ritmo equilibrado do dia a dia." },
  { id: "warm", label: "Acolhedora", description: "Tom mais próximo e encorajador." },
  { id: "professional", label: "Profissional", description: "Clareza executiva e firme." },
  { id: "didactic", label: "Didática", description: "Mais devagar, ideal para repetir." },
] as const;

export type GiseleVoiceStyle = (typeof GISELE_VOICE_STYLES)[number]["id"];

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

/** Providers configuráveis de fala (STT) e voz (TTS). */
export type SttProvider = "auto" | "openai";
export type TtsProvider = "auto" | "openai" | "elevenlabs";

export const STT_PROVIDERS: { id: SttProvider; label: string; description: string }[] = [
  { id: "auto", label: "Automatic", description: "A plataforma escolhe o melhor motor." },
  { id: "openai", label: "OpenAI transcribe", description: "Alta precisão para inglês." },
];

/** A voz da GiseleAI é sempre a oficial — não há escolha de motor de TTS. */
export const TTS_PROVIDERS: { id: TtsProvider; label: string; description: string }[] = [
  { id: "elevenlabs", label: "GiseleAI voice", description: "Voz oficial da GiseleAI." },
];

export type VoiceSettings = {
  autoSpeak: boolean;
  volume: number; // 0 a 1
  rate: number; // 0.5 a 2
  voice: string;
  voiceStyle: GiseleVoiceStyle;
  supportLanguage: SupportLanguage;
  sttProvider: SttProvider;
  ttsProvider: TtsProvider;
};

const STORAGE_KEY = "speak2co:voice-settings";
const DEFAULTS: VoiceSettings = {
  autoSpeak: true,
  volume: 1,
  rate: 1,
  voice: FOUNDER_VOICE_ID,
  voiceStyle: "natural",
  supportLanguage: "bilingual",
  sttProvider: "auto",
  ttsProvider: "elevenlabs",
};

function read(): VoiceSettings {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULTS;
    const parsed = JSON.parse(raw) as Partial<VoiceSettings>;
    const supportLanguage = SUPPORT_LANGUAGES.some((l) => l.id === parsed.supportLanguage)
      ? (parsed.supportLanguage as SupportLanguage)
      : DEFAULTS.supportLanguage;
    const sttProvider = STT_PROVIDERS.some((p) => p.id === parsed.sttProvider)
      ? (parsed.sttProvider as SttProvider)
      : DEFAULTS.sttProvider;
    const voiceStyle = GISELE_VOICE_STYLES.some((s) => s.id === parsed.voiceStyle)
      ? (parsed.voiceStyle as GiseleVoiceStyle)
      : DEFAULTS.voiceStyle;
    return {
      autoSpeak: parsed.autoSpeak !== false,
      volume: Math.min(1, Math.max(0, Number(parsed.volume ?? 1))),
      rate: Math.min(2, Math.max(0.5, Number(parsed.rate ?? 1))),
      // Migração automática: qualquer voz antiga salva vira a voz oficial.
      voice: FOUNDER_VOICE_ID,
      voiceStyle,
      supportLanguage,
      sttProvider,
      ttsProvider: "elevenlabs",
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
      // A identidade vocal é fixa: nenhuma outra voz pode ser gravada.
      const next: VoiceSettings = {
        ...prev,
        ...patch,
        voice: FOUNDER_VOICE_ID,
        ttsProvider: "elevenlabs",
      };
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
