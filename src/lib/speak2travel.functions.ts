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

const coachTurnSchema = z.object({
  reply: z.string(),
  correction: z.string(),
  pronunciation: z.string(),
  nextTip: z.string(),
});

export type TravelCoachTurn = z.infer<typeof coachTurnSchema>;

/** Conversa em tempo real com a IA dentro do role play do módulo. */
export const chatTravelRolePlay = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) =>
    z
      .object({
        trackId: z.string(),
        promptId: z.string(),
        message: z.string().min(1).max(1200),
        history: z
          .array(
            z.object({
              role: z.enum(["student", "coach"]),
              text: z.string().max(1200),
            }),
          )
          .max(20)
          .default([]),
      })
      .parse(input),
  )
  .handler(async ({ context, data }) => {
    const apiKey = process.env["LOVABLE_API_KEY"];
    if (!apiKey) throw new Error("AI indisponível no momento.");

    const track = getTravelTrack(data.trackId);
    if (!track) throw new Error("Trilha não encontrada.");
    const prompt = track.prompts.find((p) => p.id === data.promptId) ?? track.prompts[0];
    if (!prompt) throw new Error("Situação não encontrada.");

    const { getModuleContent } = await import("./speak2travel-modules");
    const moduleContent = getModuleContent(track.id);

    const { data: profile } = await context.supabase
      .from("profiles")
      .select("full_name, english_level, target_level")
      .eq("id", context.userId)
      .maybeSingle();

    const conversation = data.history
      .map((m) => `${m.role === "student" ? "Student" : "Coach"}: ${m.text}`)
      .join("\n");

    const { createLovableAiGatewayProvider } = await import("./ai-gateway.server");
    const gateway = createLovableAiGatewayProvider(apiKey);

    try {
      const result = await generateText({
        model: gateway("google/gemini-3.6-flash"),
        output: Output.object({ schema: coachTurnSchema }),
        system:
          "Você é o coach de conversação do Speak2Travel (Speak2Co). Faça um role play de viagem: interprete o interlocutor da cena (agente, atendente, oficial, garçom...) em inglês natural, curto (1 a 3 frases) e realista, mantendo a conversa avançando com uma pergunta. Além disso, corrija o inglês do aluno. 'reply' = sua fala em inglês no personagem. 'correction' = em português do Brasil, correção de gramática/vocabulário com a versão correta em inglês entre aspas (se estiver perfeito, elogie de forma curta). 'pronunciation' = em português, uma dica de pronúncia sobre uma palavra específica que o aluno usou, com a sílaba tônica indicada em MAIÚSCULAS. 'nextTip' = em português, uma frase curta sugerindo o que dizer em seguida em inglês.",
        prompt: `Aluno: ${profile?.full_name ?? "aluno"} (nível ${profile?.english_level ?? "não avaliado"}, meta ${profile?.target_level ?? "B1"})
Módulo: ${track.title}${moduleContent ? ` — ${moduleContent.label}` : ""}
Cena: ${prompt.situation}
Fala inicial do interlocutor: ${prompt.cue}
Tarefa do aluno: ${prompt.task}
Expressões-alvo: ${prompt.keyPhrases.join(" | ")}
${moduleContent ? `Vocabulário do módulo: ${moduleContent.vocabulary.map((v) => v.en).join(", ")}` : ""}

Conversa até agora:
${conversation || "(início da conversa)"}

Nova fala do aluno: ${data.message}`,
      });
      return result.output;
    } catch (e) {
      const message = e instanceof Error ? e.message : "";
      if (message.includes("429"))
        throw new Error("Muitas solicitações. Tente novamente em instantes.");
      if (message.includes("402"))
        throw new Error("Créditos de IA esgotados. Adicione créditos para continuar.");
      console.error("[speak2travel] role play chat falhou", e);
      throw new Error("Não foi possível falar com a IA agora.");
    }
  });
