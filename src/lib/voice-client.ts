import { supabase } from "@/integrations/supabase/client";

async function authHeaders(): Promise<Headers> {
  const { data } = await supabase.auth.getSession();
  const headers = new Headers();
  const token = data.session?.access_token;
  if (token) headers.set("Authorization", `Bearer ${token}`);
  return headers;
}

/** Envia o áudio gravado e devolve a transcrição em texto. */
export async function transcribeAudio(blob: Blob): Promise<string> {
  if (blob.size < 2048) {
    throw new Error("Gravação muito curta — tente novamente falando um pouco mais.");
  }
  const headers = await authHeaders();
  const form = new FormData();
  form.append("audio", blob, "recording.wav");
  const res = await fetch("/api/voice/transcribe", { method: "POST", headers, body: form });
  if (!res.ok) throw new Error((await res.text()) || "Não foi possível transcrever o áudio.");
  const json = (await res.json()) as { text?: string };
  const text = (json.text ?? "").trim();
  if (!text) throw new Error("Não consegui entender o áudio. Tente falar mais perto do microfone.");
  return text;
}

const audioCache = new Map<string, string>();
let currentAudio: HTMLAudioElement | null = null;

export function stopSpeaking() {
  currentAudio?.pause();
  currentAudio = null;
}

/** Gera (ou reaproveita) o áudio da frase e reproduz com voz nativa. */
export async function speakText(text: string, voice = "alloy"): Promise<void> {
  const key = `${voice}:${text}`;
  let url = audioCache.get(key);
  if (!url) {
    const headers = await authHeaders();
    headers.set("Content-Type", "application/json");
    const res = await fetch("/api/voice/speak", {
      method: "POST",
      headers,
      body: JSON.stringify({ text, voice }),
    });
    if (!res.ok) throw new Error((await res.text()) || "Não foi possível gerar o áudio.");
    url = URL.createObjectURL(await res.blob());
    audioCache.set(key, url);
  }
  stopSpeaking();
  const audio = new Audio(url);
  currentAudio = audio;
  await audio.play();
  await new Promise<void>((resolve) => {
    audio.addEventListener("ended", () => resolve(), { once: true });
    audio.addEventListener("error", () => resolve(), { once: true });
  });
  if (currentAudio === audio) currentAudio = null;
}

export type PronunciationResult = {
  score: number;
  transcript: string;
  verdict: string;
  issues: { sound: string; tip: string }[];
  praise: string;
};

/** Compara a fala do aluno com a frase-alvo e devolve nota + dicas de pronúncia. */
export async function checkPronunciation(
  blob: Blob,
  target: string,
): Promise<PronunciationResult> {
  const transcript = await transcribeAudio(blob);
  const headers = await authHeaders();
  headers.set("Content-Type", "application/json");
  const res = await fetch("/api/voice/pronunciation", {
    method: "POST",
    headers,
    body: JSON.stringify({ target, transcript }),
  });
  if (!res.ok) throw new Error((await res.text()) || "Não foi possível avaliar a pronúncia.");
  return (await res.json()) as PronunciationResult;
}
