import { supabase } from "@/integrations/supabase/client";

async function authHeaders(): Promise<Headers> {
  const { data } = await supabase.auth.getSession();
  const headers = new Headers();
  const token = data.session?.access_token;
  if (token) headers.set("Authorization", `Bearer ${token}`);
  return headers;
}

/** Envia o áudio gravado e devolve a transcrição em texto. */
export async function transcribeAudio(
  blob: Blob,
  options: { provider?: string; scope?: string } = {},
): Promise<string> {
  if (blob.size < 2048) {
    throw new Error("Gravação muito curta — tente novamente falando um pouco mais.");
  }
  const headers = await authHeaders();
  const form = new FormData();
  form.append("audio", blob, "recording.wav");
  if (options.provider) form.append("provider", options.provider);
  if (options.scope) form.append("scope", options.scope);
  const res = await fetch("/api/voice/transcribe", { method: "POST", headers, body: form });
  if (!res.ok) throw new Error((await res.text()) || "Não foi possível transcrever o áudio.");
  const json = (await res.json()) as { text?: string };
  const text = (json.text ?? "").trim();
  if (!text) throw new Error("Não consegui entender o áudio. Tente falar mais perto do microfone.");
  return text;
}


const audioCache = new Map<string, string>();
let currentAudio: HTMLAudioElement | null = null;

/** Ajusta volume/velocidade do áudio que já está tocando. */
export function applyPlaybackSettings({ volume, rate }: { volume?: number; rate?: number }) {
  if (!currentAudio) return;
  if (volume !== undefined) currentAudio.volume = Math.min(1, Math.max(0, volume));
  if (rate !== undefined) currentAudio.playbackRate = Math.min(2, Math.max(0.5, rate));
}

export function stopSpeaking() {
  currentAudio?.pause();
  currentAudio = null;
}

export type SpeakOptions = {
  voice?: string;
  /** 0 a 1 */
  volume?: number;
  /** 0.5 a 2 */
  rate?: number;
  /** Provider de TTS: "auto" (pela voz), "openai" ou "elevenlabs". */
  provider?: string;
  /** Escopo de permissão verificado no servidor (ex.: "gisele"). */
  scope?: string;
};

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, Number.isFinite(value) ? value : min));

/** Gera (ou reaproveita) o áudio da frase e reproduz com voz nativa. */
export async function speakText(text: string, options: SpeakOptions | string = {}): Promise<void> {
  const opts: SpeakOptions = typeof options === "string" ? { voice: options } : options;
  const voice = opts.voice ?? "alloy";
  const provider = opts.provider ?? "auto";
  const volume = clamp(opts.volume ?? 1, 0, 1);
  const rate = clamp(opts.rate ?? 1, 0.5, 2);
  const key = `${provider}:${voice}:${opts.scope ?? ""}:${text}`;
  let url = audioCache.get(key);
  if (!url) {
    const headers = await authHeaders();
    headers.set("Content-Type", "application/json");
    const res = await fetch("/api/voice/speak", {
      method: "POST",
      headers,
      body: JSON.stringify({ text, voice, provider, scope: opts.scope }),
    });
    if (!res.ok) throw new Error((await res.text()) || "Não foi possível gerar o áudio.");
    url = URL.createObjectURL(await res.blob());
    audioCache.set(key, url);
  }

  stopSpeaking();
  const audio = new Audio(url);
  audio.volume = volume;
  audio.playbackRate = rate;
  (audio as HTMLAudioElement & { preservesPitch?: boolean }).preservesPitch = true;
  currentAudio = audio;
  await audio.play();
  await new Promise<void>((resolve) => {
    audio.addEventListener("ended", () => resolve(), { once: true });
    audio.addEventListener("error", () => resolve(), { once: true });
  });
  if (currentAudio === audio) currentAudio = null;
}

export type PronunciationDimension = { score: number; tip: string };

export type PronunciationResult = {
  score: number;
  transcript: string;
  verdict: string;
  issues: { sound: string; tip: string }[];
  praise: string;
  dimensions?: {
    pronunciation: PronunciationDimension;
    stress: PronunciationDimension;
    intonation: PronunciationDimension;
    fluency: PronunciationDimension;
  };
};

/** Compara a fala do aluno com a frase-alvo e devolve nota + dicas de pronúncia. */
export async function checkPronunciation(
  blob: Blob,
  target: string,
  durationMs?: number,
): Promise<PronunciationResult> {
  const transcript = await transcribeAudio(blob);
  const headers = await authHeaders();
  headers.set("Content-Type", "application/json");
  const res = await fetch("/api/voice/pronunciation", {
    method: "POST",
    headers,
    body: JSON.stringify({ target, transcript, durationMs }),
  });
  if (!res.ok) throw new Error((await res.text()) || "Não foi possível avaliar a pronúncia.");
  return (await res.json()) as PronunciationResult;
}
