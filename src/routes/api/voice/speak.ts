import { createFileRoute } from "@tanstack/react-router";
import { verifyChatRequest } from "@/lib/chat-auth.server";

const MAX_CHARS = 3000;

/**
 * Estilos de fala da GiseleAI — mesma voz oficial, entregas diferentes.
 * (natural, warm/acolhedora, professional, didactic/didática)
 */
function styleSettings(style?: string) {
  switch (style) {
    case "warm":
      return {
        stability: 0.4,
        similarity_boost: 0.85,
        style: 0.45,
        use_speaker_boost: true,
        speed: 0.95,
      };
    case "professional":
      return {
        stability: 0.7,
        similarity_boost: 0.85,
        style: 0.15,
        use_speaker_boost: true,
        speed: 1.0,
      };
    case "didactic":
      return {
        stability: 0.75,
        similarity_boost: 0.85,
        style: 0.1,
        use_speaker_boost: true,
        speed: 0.8,
      };
    default:
      return {
        stability: 0.5,
        similarity_boost: 0.85,
        style: 0.25,
        use_speaker_boost: true,
        speed: 0.95,
      };
  }
}

export const Route = createFileRoute("/api/voice/speak")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const auth = await verifyChatRequest(request);
        if (!auth.ok) return new Response(auth.message, { status: auth.status });

        const apiKey = process.env["LOVABLE_API_KEY"];
        if (!apiKey) return new Response("IA indisponível no momento", { status: 503 });

        const body = (await request.json()) as {
          text?: string;
          voice?: string;
          provider?: string;
          scope?: string;
          style?: string;
        };
        const text = (body.text ?? "").trim().slice(0, MAX_CHARS);
        if (!text) return new Response("Texto obrigatório", { status: 400 });

        const OPENAI_VOICES = ["alloy", "nova", "shimmer", "fable", "echo", "onyx"];
        const isGiseleScope = body.scope === "gisele";
        // A Gisele AI tem UMA única identidade vocal oficial — nenhuma outra
        // voz pode ser usada, mesmo que o cliente peça.
        const { GISELE_ELEVENLABS_VOICE_ID } = await import("@/lib/gisele-voice-config");
        const voice = isGiseleScope ? GISELE_ELEVENLABS_VOICE_ID : body.voice || "alloy";
        const provider = isGiseleScope
          ? "elevenlabs"
          : body.provider === "openai" || body.provider === "elevenlabs"
            ? body.provider
            : OPENAI_VOICES.includes(voice)
              ? "openai"
              : "elevenlabs";

        // Escopo completo da Gisele AI (Signature) — checagem real de plano.
        if (isGiseleScope) {
          const { assertGiseleScope } = await import("@/lib/brand-voice.server");
          try {
            await assertGiseleScope(auth.supabase, auth.userId);
          } catch (e) {
            return new Response(e instanceof Error ? e.message : "Acesso negado", { status: 403 });
          }
        }

        // ElevenLabs: Voice IDs próprios (ex.: voz autorizada da fundadora).
        if (provider === "elevenlabs") {
          const { checkBrandVoiceAccess } = await import("@/lib/brand-voice.server");
          const brand = await checkBrandVoiceAccess(auth.supabase, auth.userId);
          if (!brand.allowed) {
            return new Response(brand.reason ?? "Recurso indisponível no seu plano", { status: 403 });
          }
          const elevenKey =
            process.env["ELEVENLABS_TTS_API_KEY"] || process.env["ELEVENLABS_API_KEY"];
          if (!elevenKey) return new Response("Voz indisponível no momento", { status: 503 });
          // Voz oficial da GiseleAI (configuração interna). IDs antigos salvos
          // no perfil são remapeados para a voz atual.
          const { isGiseleVoiceId } = await import("@/lib/gisele-voice-config");
          const elevenVoice =
            OPENAI_VOICES.includes(voice) || isGiseleVoiceId(voice)
              ? GISELE_ELEVENLABS_VOICE_ID
              : voice;
          const elevenRes = await fetch(
            `https://api.elevenlabs.io/v1/text-to-speech/${encodeURIComponent(elevenVoice)}?output_format=mp3_44100_128`,

            {
              method: "POST",
              headers: { "xi-api-key": elevenKey, "Content-Type": "application/json" },
              body: JSON.stringify({
                text,
                model_id: "eleven_multilingual_v2",
                voice_settings: styleSettings(body.style),
              }),
            },
          );
          if (!elevenRes.ok) {
            const detail = await elevenRes.text().catch(() => "");
            console.error("[voice/speak:elevenlabs]", elevenRes.status, detail);
            if (elevenRes.status === 401 || elevenRes.status === 402) {
              return new Response(
                "Créditos de voz esgotados — o áudio volta assim que os créditos forem adicionados.",
                { status: 402 },
              );
            }
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
            voice: OPENAI_VOICES.includes(voice) ? voice : "alloy",
            response_format: "mp3",
            instructions:
              "Speak clear, natural American English at a slightly slow, teacher-like pace for an English learner.",
          }),
        });
        if (!res.ok) {
          const detail = await res.text().catch(() => "");
          console.error("[voice/speak]", res.status, detail);
          if (res.status === 402 || res.status === 403) {
            return new Response(
              "Créditos de IA esgotados — o áudio volta assim que os créditos forem adicionados.",
              { status: res.status },
            );
          }
          if (res.status === 429) {
            return new Response("Muitas solicitações de áudio. Tente novamente em instantes.", {
              status: 429,
            });
          }
          return new Response("Não foi possível gerar o áudio.", { status: res.status });
        }

        return new Response(res.body, {
          headers: { "Content-Type": "audio/mpeg", "Cache-Control": "no-store" },
        });
      },
    },
  },
});
