import { createServerFn } from "@tanstack/react-start";
import { requireFeature } from "@/lib/entitlement-middleware";
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
  .middleware([requireFeature("product_line_travel")])
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
    const gateway = createLovableAiGatewayProvider(apiKey, undefined, { structuredOutputs: true });

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
  .middleware([requireFeature("product_line_travel")])
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
    const gateway = createLovableAiGatewayProvider(apiKey, undefined, { structuredOutputs: true });

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

const drillSchema = z.object({
  type: z.enum(["vocabulary", "grammar"]),
  question: z.string(),
  options: z.array(z.string()).min(3).max(4),
  answer: z.string(),
  explanation: z.string(),
  sourceHint: z.string(),
});

const drillsSchema = z.object({
  focus: z.string(),
  drills: z.array(drillSchema).min(4).max(10),
});

export type TravelDrill = z.infer<typeof drillSchema>;
export type TravelDrills = z.infer<typeof drillsSchema>;

/** Gera exercícios de vocabulário e gramática a partir das respostas do aluno no role play. */
export const generateTravelDrills = createServerFn({ method: "POST" })
  .middleware([requireFeature("product_line_travel")])
  .inputValidator((input: unknown) =>
    z
      .object({
        trackId: z.string(),
        answers: z.record(z.string(), z.string()),
        conversation: z
          .array(z.object({ role: z.enum(["student", "coach"]), text: z.string().max(1200) }))
          .max(40)
          .default([]),
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
    const studentTurns = data.conversation.filter((m) => m.role === "student");
    if (answered.length === 0 && studentTurns.length === 0)
      throw new Error("Pratique pelo menos uma situação para gerar exercícios.");

    const { getModuleContent } = await import("./speak2travel-modules");
    const moduleContent = getModuleContent(track.id);

    const { data: profile } = await context.supabase
      .from("profiles")
      .select("english_level, target_level")
      .eq("id", context.userId)
      .maybeSingle();

    const material = [
      ...answered.map(
        (p) => `Situação: ${p.situation}\nResposta do aluno: ${data.answers[p.id]}`,
      ),
      ...studentTurns.map((m) => `Fala do aluno no chat: ${m.text}`),
    ].join("\n\n");

    const { createLovableAiGatewayProvider } = await import("./ai-gateway.server");
    const gateway = createLovableAiGatewayProvider(apiKey, undefined, { structuredOutputs: true });

    try {
      const result = await generateText({
        model: gateway("google/gemini-3.6-flash"),
        output: Output.object({ schema: drillsSchema }),
        system:
          "Você cria exercícios personalizados do Speak2Travel (Speak2Co) a partir dos erros e do vocabulário reais do aluno. Gere de 6 a 8 exercícios de múltipla escolha, misturando 'vocabulary' (palavra/expressão certa para a situação de viagem) e 'grammar' (corrigir estrutura que o aluno errou). Enunciados e alternativas em inglês; 'explanation' e 'sourceHint' em português do Brasil. 'answer' deve ser exatamente igual a uma das 'options'. 'sourceHint' explica de qual fala do aluno o exercício veio. Priorize os erros cometidos; se o aluno acertou tudo, avance o nível com vocabulário novo do módulo.",
        prompt: `Nível do aluno: ${profile?.english_level ?? "não avaliado"} (meta ${profile?.target_level ?? "B1"})
Módulo: ${track.title}${moduleContent ? ` — ${moduleContent.label}` : ""}
${moduleContent ? `Vocabulário do módulo: ${moduleContent.vocabulary.map((v) => v.en).join(", ")}` : ""}

Produção real do aluno:
${material}

Devolva 'focus' (1 frase em português dizendo o que estes exercícios treinam) e a lista 'drills'.`,
      });
      return result.output;
    } catch (e) {
      const message = e instanceof Error ? e.message : "";
      if (message.includes("429"))
        throw new Error("Muitas solicitações. Tente novamente em instantes.");
      if (message.includes("402"))
        throw new Error("Créditos de IA esgotados. Adicione créditos para continuar.");
      console.error("[speak2travel] geração de exercícios falhou", e);
      throw new Error("Não foi possível gerar os exercícios agora.");
    }
  });
