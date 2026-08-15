import { createServerFn } from "@tanstack/react-start";
import { requireFeature } from "@/lib/entitlement-middleware";
import {
  normalizeTripPlan,
  rawTripPlanSchema,
  tripPlanInputSchema,
  type TripPlan,
} from "./trip-planner-schema";

export type { TripPlan };

export const generateTripPlan = createServerFn({ method: "POST" })
  .middleware([requireFeature("product_line_travel")])
  .inputValidator((input: unknown) => tripPlanInputSchema.parse(input))
  .handler(async ({ context, data }): Promise<TripPlan> => {
    const apiKey = process.env["LOVABLE_API_KEY"];
    if (!apiKey) throw new Error("AI indisponível no momento.");

    const { generateText, Output } = await import("ai");

    const { data: profile } = await context.supabase
      .from("profiles")
      .select("full_name, english_level, goal, target_level")
      .eq("id", context.userId)
      .maybeSingle();

    const { createLovableAiGatewayProvider } = await import("./ai-gateway.server");
    const gateway = createLovableAiGatewayProvider(apiKey, undefined, { structuredOutputs: true });

    const tripDates = `${data.startDate} → ${data.endDate}`;

    try {
      const result = await generateText({
        model: gateway("google/gemini-2.5-flash"),
        output: Output.object({ schema: rawTripPlanSchema }),
        system:
          "Você é o Trip Planner do Speak2Travel (Speak2Co). Monta um English Survival & Travel Plan altamente personalizado. Só atende destinos em países onde o inglês é língua oficial ou principal; se não for, defina englishSpeakingDestination como false. Cada item tem 'en' (inglês natural e específico do destino) e 'pt' (tradução curta em português). Evite conteúdo genérico: use cultura local, clima da época e gastronomia típica.",
        prompt: `Aluno nível ${profile?.english_level ?? "não avaliado"}, objetivo: ${profile?.goal ?? "viajar com confiança"}.
Destino: ${data.destination}
Datas da viagem: ${tripDates}

Preencha country, overview (2-3 frases em português) e as nove seções, cada uma com intro em português e 10 a 14 itens:
essentialVocabulary (palavras essenciais), localExpressions (expressões e gírias locais), atTheAirport (check-in, baggage, security, immigration, boarding, customs, connecting flights, arrival), atTheDestination (hotel, transportation, directions, shopping, sightseeing, asking for information), emergencyPhrases (hospital, doctor, police, lost documents, lost luggage, asking for help, emergency services), weather (clima previsto nessas datas e vocabulário de clima), clothesToTake (roupas e itens para a estação), typicalFood (comidas e bebidas típicas com explicação), atTheRestaurant (reservation, ordering, ingredients, dietary restrictions, the bill, payment, tipping).`,
      });

      if (result.output.englishSpeakingDestination === false) {
        throw new Error(
          "O Trip Planner está disponível apenas para destinos em países de língua inglesa.",
        );
      }

      const plan = normalizeTripPlan(result.output, data.destination, tripDates);
      if (plan.sections.length === 0) {
        throw new Error("Não foi possível montar seu Trip Planner agora. Tente outro destino.");
      }
      return plan;
    } catch (e) {
      const message = e instanceof Error ? e.message : "";
      if (message.includes("língua inglesa") || message.includes("Tente outro destino")) throw e;
      if (message.includes("429"))
        throw new Error("Muitas solicitações. Tente novamente em instantes.");
      if (message.includes("402"))
        throw new Error("Créditos de IA esgotados. Adicione créditos para continuar.");
      console.error("[trip-planner] geração falhou", e);
      throw new Error("Não foi possível montar seu Trip Planner agora.");
    }
  });
