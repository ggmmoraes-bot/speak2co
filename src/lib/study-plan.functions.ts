import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { generateText, Output } from "ai";
import { z } from "zod";

const planSchema = z.object({
  summary: z.string(),
  weekly_focus: z.array(z.object({ week: z.number(), title: z.string(), activities: z.array(z.string()) })),
  milestones: z.array(z.string()),
});

export type StudyPlan = z.infer<typeof planSchema>;

export const getStudyPlan = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data, error } = await context.supabase
      .from("study_plans")
      .select("summary, weekly_focus, milestones, updated_at")
      .eq("user_id", context.userId)
      .maybeSingle();
    if (error) throw new Error(error.message);
    return data;
  });

export const generateStudyPlan = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const apiKey = process.env["LOVABLE_API_KEY"];
    if (!apiKey) throw new Error("AI indisponível no momento.");

    const { data: profile, error: profileError } = await context.supabase
      .from("profiles")
      .select("full_name, english_level, goal, target_level")
      .eq("id", context.userId)
      .maybeSingle();
    if (profileError) throw new Error(profileError.message);
    if (!profile?.full_name || !profile.goal || !profile.target_level) {
      throw new Error("Complete seu perfil (nome, objetivo e nível desejado) antes de gerar o plano.");
    }

    const { createLovableAiGatewayProvider } = await import("./ai-gateway.server");
    const gateway = createLovableAiGatewayProvider(apiKey);

    let output: StudyPlan;
    try {
      const result = await generateText({
        model: gateway("google/gemini-2.5-flash"),
        output: Output.object({ schema: planSchema }),
        system:
          "Você é o professor de inglês da Speak2Co. Crie planos de estudo de inglês objetivos, motivadores e práticos. Escreva tudo em português do Brasil, exceto exemplos em inglês. Gere exatamente 8 semanas e de 4 a 6 marcos.",
        prompt: `Aluno: ${profile.full_name}
Nível atual: ${profile.english_level ?? "não avaliado"}
Nível desejado: ${profile.target_level}
Objetivo: ${profile.goal}

Crie um plano de estudos personalizado com um resumo curto (2 a 3 frases), foco semanal (8 semanas, cada uma com título e 3 atividades práticas) e marcos de evolução.`,
      });
      output = result.output;
    } catch (e) {
      const message = e instanceof Error ? e.message : "";
      if (message.includes("429")) throw new Error("Muitas solicitações. Tente novamente em instantes.");
      if (message.includes("402")) throw new Error("Créditos de IA esgotados. Adicione créditos para continuar.");
      console.error("[study-plan] geração falhou", e);
      throw new Error("Não foi possível gerar seu plano agora.");
    }

    const { error: upsertError } = await context.supabase.from("study_plans").upsert(
      {
        user_id: context.userId,
        summary: output.summary,
        weekly_focus: output.weekly_focus,
        milestones: output.milestones,
      },
      { onConflict: "user_id" },
    );
    if (upsertError) throw new Error(upsertError.message);

    return output;
  });
