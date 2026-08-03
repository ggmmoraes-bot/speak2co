import { useCallback, useEffect, useState } from "react";
import { applyPlaybackSettings } from "@/lib/voice-client";

export type VoiceSettings = {
  autoSpeak: boolean;
  volume: number; // 0 a 1
  rate: number; // 0.5 a 2
};

const STORAGE_KEY = "speak2co:voice-settings";
const DEFAULTS: VoiceSettings = { autoSpeak: false, volume: 1, rate: 1 };

function read(): VoiceSettings {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULTS;
    const parsed = JSON.parse(raw) as Partial<VoiceSettings>;
    return {
      autoSpeak: Boolean(parsed.autoSpeak),
      volume: Math.min(1, Math.max(0, Number(parsed.volume ?? 1))),
      rate: Math.min(2, Math.max(0.5, Number(parsed.rate ?? 1))),
    };
  } catch {
    return DEFAULTS;
  }
}

/** Preferências de voz do Professor IA, persistidas no navegador. */
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

  return { settings, update };
}
