import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { generateText, Output } from "ai";
import { z } from "zod";

const tripPlanSchema = z.object({
  destination: z.string(),
  overview: z.string(),
  weather: z.string(),
  packing: z.array(z.string()),
  vocabulary: z.array(z.object({ term: z.string(), meaning: z.string() })),
  expressions: z.array(z.string()),
  likelySituations: z.array(z.string()),
  studyPlan: z.array(z.object({ day: z.string(), focus: z.string(), task: z.string() })),
});

export type TripPlan = z.infer<typeof tripPlanSchema>;

export const generateTripPlan = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) =>
    z
      .object({
        destination: z.string().min(2).max(80),
        days: z.number().int().min(1).max(60),
      })
      .parse(input),
  )
  .handler(async ({ context, data }): Promise<TripPlan> => {
    const apiKey = process.env["LOVABLE_API_KEY"];
    if (!apiKey) throw new Error("AI indisponível no momento.");

    const { data: profile } = await context.supabase
      .from("profiles")
      .select("full_name, english_level, goal, target_level")
      .eq("id", context.userId)
      .maybeSingle();

    const { createLovableAiGatewayProvider } = await import("./ai-gateway.server");
    const gateway = createLovableAiGatewayProvider(apiKey);

    try {
      const result = await generateText({
        model: gateway("google/gemini-2.5-flash"),
        output: Output.object({ schema: tripPlanSchema }),
        system:
          "Você é o Trip Planner do Speak2Travel (Speak2Co). Monta preparação de inglês para viagens reais. Escreva explicações em português do Brasil e mantenha vocabulário, expressões e situações em inglês natural. Seja prático e específico ao destino informado.",
        prompt: `Aluno: ${profile?.full_name ?? "aluno"}
Nível atual de inglês: ${profile?.english_level ?? "não avaliado"}
Nível desejado: ${profile?.target_level ?? "B1"}
Objetivo: ${profile?.goal ?? "viajar com confiança"}
Destino: ${data.destination}
Dias de viagem: ${data.days}

Gere: overview (2-3 frases), weather (clima típico e o que esperar), packing (5 a 8 itens), vocabulary (10 a 14 termos em inglês com significado em português), expressions (8 a 12 frases em inglês úteis nesse destino), likelySituations (5 a 7 situações prováveis, em português com a frase-chave em inglês) e studyPlan com um item por dia de estudo antes da viagem (máximo 7 itens; day, focus, task).`,
      });
      return { ...result.output, destination: data.destination };
    } catch (e) {
      const message = e instanceof Error ? e.message : "";
      if (message.includes("429"))
        throw new Error("Muitas solicitações. Tente novamente em instantes.");
      if (message.includes("402"))
        throw new Error("Créditos de IA esgotados. Adicione créditos para continuar.");
      console.error("[trip-planner] geração falhou", e);
      throw new Error("Não foi possível montar seu Trip Planner agora.");
    }
  });
