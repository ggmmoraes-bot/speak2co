import { createServerFn } from "@tanstack/react-start";
import { requireFeature } from "@/lib/entitlement-middleware";
import { generateText, Output } from "ai";
import { z } from "zod";

const feedbackSchema = z.object({
  score: z.number().min(0).max(100),
  summary: z.string(),
  strengths: z.array(z.string()).min(1).max(5),
  improvements: z.array(z.string()).min(1).max(6),
  corrections: z
    .array(z.object({ original: z.string(), corrected: z.string(), why: z.string() }))
    .max(10),
  correctedText: z.string(),
});

export type WritingFeedback = z.infer<typeof feedbackSchema>;

/** Correção de produção escrita do Learning Tools → Writing. */
export const reviewWriting = createServerFn({ method: "POST" })
  .middleware([requireFeature("learning_tools")])
  .inputValidator((input: unknown) =>
    z
      .object({
        taskTitle: z.string().max(200),
        prompt: z.string().max(1000),
        level: z.string().max(40),
        text: z.string().min(20).max(6000),
      })
      .parse(input),
  )
  .handler(async ({ data }) => {
    const apiKey = process.env["LOVABLE_API_KEY"];
    if (!apiKey) throw new Error("AI indisponível no momento.");

    const { createLovableAiGatewayProvider } = await import("./ai-gateway.server");
    const gateway = createLovableAiGatewayProvider(apiKey, undefined, { structuredOutputs: true });

    try {
      const result = await generateText({
        model: gateway("google/gemini-3.6-flash"),
        output: Output.object({ schema: feedbackSchema }),
        system:
          "You are the writing coach of Speak2Co. Correct the student's text with warmth and precision. Return: 'score' (0-100 for task achievement, accuracy, range and cohesion), 'summary' (2 sentences in Brazilian Portuguese), 'strengths' (in English, short), 'improvements' (in Brazilian Portuguese, actionable), 'corrections' (up to 8 items: original excerpt, corrected version, and 'why' explained in Brazilian Portuguese), and 'correctedText' (the full text rewritten naturally at the student's level, keeping their ideas and voice). Never invent content the student did not write.",
        prompt: `Task: ${data.taskTitle}
Level: ${data.level}
Prompt given to the student: ${data.prompt}

Student's text:
"""
${data.text}
"""`,
      });
      return result.output;
    } catch (e) {
      const message = e instanceof Error ? e.message : "";
      if (message.includes("429"))
        throw new Error("Muitas solicitações. Tente novamente em instantes.");
      if (message.includes("402"))
        throw new Error("Créditos de IA esgotados. Adicione créditos para continuar.");
      console.error("[writing] correção falhou", e);
      throw new Error("Não foi possível corrigir seu texto agora.");
    }
  });
