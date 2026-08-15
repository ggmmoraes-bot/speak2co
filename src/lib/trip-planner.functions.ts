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
          "Você é o Trip Planner do Speak2Travel (Speak2Co). Monta um English Survival & Travel Plan altamente personalizado. O Trip Planner só atende destinos em países onde o inglês é língua oficial ou principal de comunicação (ex.: USA, UK, Ireland, Canada, Australia, New Zealand, Singapore, South Africa, Malta, Jamaica, Philippines, Nigeria, Kenya, Índia em contexto de negócios). Se o destino informado não for de um país de língua inglesa, defina englishSpeakingDestination como false e deixe as seções vazias. Cada item tem 'en' (inglês natural e específico do destino) e 'pt' (tradução/explicação curta em português). Nada de conteúdo genérico: use referências reais do destino, cultura local, clima da época informada e gastronomia típica.",
        prompt: `Aluno: ${profile?.full_name ?? "aluno"}
Nível atual de inglês: ${profile?.english_level ?? "não avaliado"}
Nível desejado: ${profile?.target_level ?? "B1"}
Objetivo: ${profile?.goal ?? "viajar com confiança"}
Destino: ${data.destination}
Datas da viagem: ${tripDates}

Preencha: englishSpeakingDestination (boolean), country (país do destino), overview (2-3 frases em português sobre a viagem e o preparo de inglês) e as nove seções abaixo, cada uma com "intro" (1-2 frases em português) e "items" (lista de { en, pt }):
- essentialVocabulary: 12 a 16 palavras/termos essenciais para essa viagem.
- localExpressions: 10 a 14 expressões, gírias e diferenças de vocabulário locais.
- atTheAirport: 12 a 16 frases cobrindo check-in, baggage, security, immigration, boarding, customs, connecting flights e arrival.
- atTheDestination: 12 a 16 frases para hotel, transportation, directions, shopping, sightseeing e asking for information.
- emergencyPhrases: 10 a 14 frases para hospital, doctor, police, lost documents, lost luggage, asking for help e emergency services.
- weather: clima previsto para o destino nessas datas + 8 a 12 itens de vocabulário/frases sobre clima.
- clothesToTake: 10 a 14 itens de roupas e acessórios adequados à estação e às condições previstas.
- typicalFood: 10 a 14 comidas e bebidas típicas com nome em inglês e explicação curta.
- atTheRestaurant: 12 a 16 frases para making a reservation, ordering food, asking about ingredients, dietary restrictions, asking for the bill, payment e tipping quando aplicável.`,
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
