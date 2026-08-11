import { createFileRoute } from "@tanstack/react-router";
import { verifyChatRequest } from "@/lib/chat-auth.server";

const MAX_BYTES = 20 * 1024 * 1024;

export const Route = createFileRoute("/api/voice/transcribe")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const auth = await verifyChatRequest(request);
        if (!auth.ok) return new Response(auth.message, { status: auth.status });

        const apiKey = process.env["LOVABLE_API_KEY"];
        if (!apiKey) return new Response("IA indisponível no momento", { status: 503 });

        const form = await request.formData();
        const audio = form.get("audio");
        if (!(audio instanceof File) || audio.size === 0) {
          return new Response("Áudio obrigatório", { status: 400 });
        }
        if (audio.size > MAX_BYTES) {
          return new Response("Áudio muito longo", { status: 413 });
        }

        // Provider de STT configurável (VoiceSettings); hoje só OpenAI está habilitado.
        const provider = String(form.get("provider") ?? "auto");
        const model =
          provider === "openai" ? "openai/gpt-4o-transcribe" : "openai/gpt-4o-transcribe";

        const upstream = new FormData();
        upstream.append("model", model);
        upstream.append("file", audio, "recording.wav");


        const res = await fetch("https://ai.gateway.lovable.dev/v1/audio/transcriptions", {
          method: "POST",
          headers: { Authorization: `Bearer ${apiKey}` },
          body: upstream,
        });
        if (!res.ok) {
          const detail = await res.text().catch(() => "");
          console.error("[voice/transcribe]", res.status, detail);
          return new Response("Não foi possível transcrever o áudio.", { status: res.status });
        }
        const json = (await res.json()) as { text?: string };
        return Response.json({ text: json.text ?? "" });
      },
    },
  },
});
