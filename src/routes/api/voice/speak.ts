import { createFileRoute } from "@tanstack/react-router";
import { verifyChatRequest } from "@/lib/chat-auth.server";

const MAX_CHARS = 3000;

export const Route = createFileRoute("/api/voice/speak")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const auth = await verifyChatRequest(request);
        if (!auth.ok) return new Response(auth.message, { status: auth.status });

        const apiKey = process.env["LOVABLE_API_KEY"];
        if (!apiKey) return new Response("IA indisponível no momento", { status: 503 });

        const body = (await request.json()) as { text?: string; voice?: string; provider?: string };
        const text = (body.text ?? "").trim().slice(0, MAX_CHARS);
        if (!text) return new Response("Texto obrigatório", { status: 400 });

        const voice = body.voice || "alloy";
        const OPENAI_VOICES = ["alloy", "nova", "shimmer", "fable", "echo", "onyx"];
        const provider = body.provider === "openai" || body.provider === "elevenlabs"
          ? body.provider
          : OPENAI_VOICES.includes(voice)
            ? "openai"
            : "elevenlabs";

        // ElevenLabs: Voice IDs próprios (ex.: voz clonada da fundadora).
        if (provider === "elevenlabs") {
          const elevenKey =
            process.env["ELEVENLABS_TTS_API_KEY"] || process.env["ELEVENLABS_API_KEY"];
          if (!elevenKey) return new Response("Voz indisponível no momento", { status: 503 });
          const elevenVoice = OPENAI_VOICES.includes(voice) ? "m3m72XeqSLA8AEuQecN0" : voice;
          const elevenRes = await fetch(
            `https://api.elevenlabs.io/v1/text-to-speech/${encodeURIComponent(elevenVoice)}?output_format=mp3_44100_128`,

            {
              method: "POST",
              headers: { "xi-api-key": elevenKey, "Content-Type": "application/json" },
              body: JSON.stringify({
                text,
                model_id: "eleven_multilingual_v2",
                voice_settings: {
                  stability: 0.5,
                  similarity_boost: 0.8,
                  style: 0.3,
                  use_speaker_boost: true,
                },
              }),
            },
          );
          if (!elevenRes.ok) {
            const detail = await elevenRes.text().catch(() => "");
            console.error("[voice/speak:elevenlabs]", elevenRes.status, detail);
            return new Response("Não foi possível gerar o áudio.", { status: elevenRes.status });
          }
          return new Response(elevenRes.body, {
            headers: { "Content-Type": "audio/mpeg", "Cache-Control": "no-store" },
          });
        }

        const res = await fetch("https://ai.gateway.lovable.dev/v1/audio/speech", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "openai/gpt-4o-mini-tts",
            input: text,
            voice,
            response_format: "mp3",
            instructions:
              "Speak clear, natural American English at a slightly slow, teacher-like pace for an English learner.",
          }),
        });
        if (!res.ok) {
          const detail = await res.text().catch(() => "");
          console.error("[voice/speak]", res.status, detail);
          return new Response("Não foi possível gerar o áudio.", { status: res.status });
        }

        return new Response(res.body, {
          headers: { "Content-Type": "audio/mpeg", "Cache-Control": "no-store" },
        });
      },
    },
  },
});
