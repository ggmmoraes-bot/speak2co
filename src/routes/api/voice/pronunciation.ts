import { createFileRoute } from "@tanstack/react-router";
import { generateText } from "ai";
import { createLovableAiGatewayProvider } from "@/lib/ai-gateway.server";
import { verifyChatRequest } from "@/lib/chat-auth.server";

type Result = {
  score: number;
  transcript: string;
  verdict: string;
  issues: { sound: string; tip: string }[];
  praise: string;
};

function normalize(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9'\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
}

/** Similaridade simples palavra a palavra entre o alvo e o que foi entendido. */
function wordScore(target: string, transcript: string) {
  const a = normalize(target);
  const b = normalize(transcript);
  if (a.length === 0) return 0;
  const remaining = [...b];
  let hits = 0;
  for (const word of a) {
    const idx = remaining.indexOf(word);
    if (idx >= 0) {
      hits++;
      remaining.splice(idx, 1);
    }
  }
  const extraPenalty = Math.min(remaining.length, a.length) * 0.5;
  return Math.max(0, Math.round(((hits - extraPenalty) / a.length) * 100));
}

export const Route = createFileRoute("/api/voice/pronunciation")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const auth = await verifyChatRequest(request);
        if (!auth.ok) return new Response(auth.message, { status: auth.status });

        const body = (await request.json()) as { target?: string; transcript?: string };
        const target = (body.target ?? "").trim();
        const transcript = (body.transcript ?? "").trim();
        if (!target || !transcript) {
          return new Response("Frase-alvo e transcrição são obrigatórias", { status: 400 });
        }

        const score = wordScore(target, transcript);
        const apiKey = process.env["LOVABLE_API_KEY"];
        if (!apiKey) return new Response("IA indisponível no momento", { status: 503 });

        const gateway = createLovableAiGatewayProvider(apiKey);
        let parsed: Partial<Result> = {};
        try {
          const { text } = await generateText({
            model: gateway("google/gemini-3.6-flash"),
            system:
              "Você é um professor de pronúncia de inglês. Responda SOMENTE com JSON válido, sem markdown, no formato " +
              '{"verdict":"string em português (1 frase)","praise":"string em português (1 frase curta e encorajadora)",' +
              '"issues":[{"sound":"som ou palavra em inglês","tip":"dica curta em português de como articular"}]}. ' +
              "No máximo 3 issues. Se a fala estiver correta, retorne issues vazio.",
            prompt: `Frase-alvo: "${target}"\nO que foi reconhecido na fala do aluno: "${transcript}"\nSimilaridade calculada: ${score}%.\nAponte as prováveis falhas de pronúncia que explicam a diferença.`,
          });
          const clean = text.replace(/```json|```/g, "").trim();
          parsed = JSON.parse(clean) as Partial<Result>;
        } catch (e) {
          console.error("[voice/pronunciation]", e);
        }

        const result: Result = {
          score,
          transcript,
          verdict:
            parsed.verdict ??
            (score >= 85
              ? "Muito bom! Sua fala ficou bem próxima da frase-alvo."
              : "Ainda há diferenças entre o que você falou e a frase-alvo."),
          issues: Array.isArray(parsed.issues) ? parsed.issues.slice(0, 3) : [],
          praise: parsed.praise ?? "Continue praticando — repetição é o que fixa a pronúncia!",
        };
        return Response.json(result);
      },
    },
  },
});
