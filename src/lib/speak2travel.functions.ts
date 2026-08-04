import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { generateText, Output } from "ai";
import { z } from "zod";
import { getTravelTrack } from "./speak2travel-content";

const itemSchema = z.object({
  promptId: z.string(),
  strengths: z.string(),
  improvements: z.string(),
  rewrite: z.string(),
});

const travelFeedbackSchema = z.object({
  score: z.number(),
  summary: z.string(),
  highlights: z.array(z.string()),
  focus: z.array(z.string()),
  items: z.array(itemSchema),
});

export type TravelFeedback = z.infer<typeof travelFeedbackSchema>;

export const evaluateTravelPractice = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) =>
    z
      .object({
        trackId: z.string(),
        answers: z.record(z.string(), z.string()),
      })
      .parse(input),
  )
  .handler(async ({ context, data }) => {
    const apiKey = process.env["LOVABLE_API_KEY"];
    if (!apiKey) throw new Error("AI indisponível no momento.");

    const track = getTravelTrack(data.trackId);
    if (!track) throw new Error("Trilha não encontrada.");

    const answered = track.prompts.filter(
      (p) => (data.answers[p.id] ?? "").trim().length > 0,
    );
    if (answered.length === 0)
      throw new Error("Responda pelo menos uma situação antes de finalizar.");

    const { data: profile } = await context.supabase
      .from("profiles")
      .select("full_name, english_level, goal, target_level")
      .eq("id", context.userId)
      .maybeSingle();

    const transcript = answered
      .map(
        (p) =>
          `Situação (${p.id}): ${p.situation}\nFala do interlocutor: ${p.cue}\nTarefa: ${p.task}\nExpressões sugeridas: ${p.keyPhrases.join(" | ")}\nResposta do aluno: ${data.answers[p.id]}`,
      )
      .join("\n\n");

    const { createLovableAiGatewayProvider } = await import("./ai-gateway.server");
    const gateway = createLovableAiGatewayProvider(apiKey);

    try {
      const result = await generateText({
        model: gateway("google/gemini-2.5-flash"),
        output: Output.object({ schema: travelFeedbackSchema }),
        system:
          "Você é o coach do Speak2Travel, módulo de inglês para viagens da Speak2Co. Avalie respostas de situações reais de viagem (aeroporto, imigração, hotel, transporte, passeios). Comentários e orientações em português do Brasil; as reescritas (rewrite) sempre em inglês natural, educado e curto, como um viajante fluente falaria. Cobre: clareza, naturalidade (nada de tradução literal do português), gramática essencial, cortesia e objetividade. Dê uma nota de 0 a 100.",
        prompt: `Aluno: ${profile?.full_name ?? "aluno"}
Nível atual: ${profile?.english_level ?? "não avaliado"}
Nível desejado: ${profile?.target_level ?? "B1"}
Objetivo: ${profile?.goal ?? "viajar com confiança"}
Trilha: ${track.title}

Transcrição da prática:
${transcript}

Devolva: score (0-100), summary (2-3 frases), highlights (2 a 4 acertos), focus (2 a 4 prioridades) e items com um objeto por situação respondida (promptId exatamente como informado, strengths, improvements e rewrite — a resposta modelo em inglês).`,
      });
      return result.output;
    } catch (e) {
      const message = e instanceof Error ? e.message : "";
      if (message.includes("429"))
        throw new Error("Muitas solicitações. Tente novamente em instantes.");
      if (message.includes("402"))
        throw new Error("Créditos de IA esgotados. Adicione créditos para continuar.");
      console.error("[speak2travel] feedback falhou", e);
      throw new Error("Não foi possível avaliar sua prática agora.");
    }
  });
