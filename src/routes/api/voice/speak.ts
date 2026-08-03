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

        const body = (await request.json()) as { text?: string; voice?: string };
        const text = (body.text ?? "").trim().slice(0, MAX_CHARS);
        if (!text) return new Response("Texto obrigatório", { status: 400 });

        const res = await fetch("https://ai.gateway.lovable.dev/v1/audio/speech", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "openai/gpt-4o-mini-tts",
            input: text,
            voice: body.voice || "alloy",
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
