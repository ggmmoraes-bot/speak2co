import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { generateText, Output } from "ai";
import { z } from "zod";

const drillSchema = z.object({
  sound: z.string(),
  en: z.string(),
  pt: z.string(),
  tip: z.string(),
  focusWords: z.array(z.string()),
});

const drillsSchema = z.object({
  focus: z.string(),
  drills: z.array(drillSchema).min(4).max(10),
});

export type PronunciationDrill = z.infer<typeof drillSchema>;
export type PronunciationDrills = z.infer<typeof drillsSchema>;

/** Gera frases de treino de pronúncia focadas nos sons que o aluno mais erra no Pronunciation Lab. */
export const generatePronunciationDrills = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) =>
    z
      .object({
        averageScore: z.number().min(0).max(100),
        issues: z
          .array(
            z.object({
              sound: z.string().max(120),
              tip: z.string().max(400).default(""),
              count: z.number().min(1),
            }),
          )
          .min(1)
          .max(12),
        attempts: z
          .array(
            z.object({
              phrase: z.string().max(300),
              transcript: z.string().max(300).default(""),
              score: z.number(),
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

    const { data: profile } = await context.supabase
      .from("profiles")
      .select("english_level, target_level")
      .eq("id", context.userId)
      .maybeSingle();

    const { createLovableAiGatewayProvider } = await import("./ai-gateway.server");
    const gateway = createLovableAiGatewayProvider(apiKey);

    const issueList = data.issues
      .map((i) => `- ${i.sound} (${i.count}x)${i.tip ? ` — dica anterior: ${i.tip}` : ""}`)
      .join("\n");
    const attemptList = data.attempts
      .map((a) => `Alvo: "${a.phrase}" | Falou: "${a.transcript}" | ${a.score}%`)
      .join("\n");

    try {
      const result = await generateText({
        model: gateway("google/gemini-3.6-flash"),
        output: Output.object({ schema: drillsSchema }),
        system:
          "Você é o coach de pronúncia do Speak2Co. A partir dos sons que o aluno mais erra, crie de 6 a 8 frases curtas de treino (6 a 12 palavras) para ele repetir em voz alta. Cada exercício: 'sound' = o som alvo (ex.: /θ/, /r/ final, ending -ed); 'en' = a frase em inglês, natural e útil em viagem/trabalho, repetindo o som alvo várias vezes; 'pt' = tradução em português do Brasil; 'tip' = instrução curta em português de como posicionar boca/língua; 'focusWords' = 2 a 4 palavras da frase que contêm o som. Cubra primeiro os sons mais frequentes. Nunca repita a mesma frase.",
        prompt: `Nível do aluno: ${profile?.english_level ?? "não avaliado"} (meta ${profile?.target_level ?? "B1"})
Média de precisão atual: ${Math.round(data.averageScore)}%

Sons com erros mais frequentes:
${issueList}

Tentativas recentes:
${attemptList || "sem histórico detalhado"}

Devolva 'focus' (1 frase em português dizendo o que este treino corrige) e a lista 'drills'.`,
      });
      return result.output;
    } catch (e) {
      const message = e instanceof Error ? e.message : "";
      if (message.includes("429"))
        throw new Error("Muitas solicitações. Tente novamente em instantes.");
      if (message.includes("402"))
        throw new Error("Créditos de IA esgotados. Adicione créditos para continuar.");
      console.error("[pronunciation-lab] geração de treino falhou", e);
      throw new Error("Não foi possível gerar o treino agora.");
    }
  });
