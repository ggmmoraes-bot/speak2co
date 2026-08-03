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
      .select("summary, weekly_focus, milestones, locked_weeks, updated_at")
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

    const { data: past } = await context.supabase
      .from("daily_exercises")
      .select("week_number, items, explanation_feedback")
      .eq("user_id", context.userId)
      .eq("completed", true)
      .order("exercise_date", { ascending: false })
      .limit(30);

    const helpfulTopics: string[] = [];
    const unhelpfulTopics: string[] = [];
    for (const row of past ?? []) {
      const items = (row.items ?? []) as { question: string }[];
      const feedback = (row.explanation_feedback ?? {}) as Record<string, string>;
      for (const [index, value] of Object.entries(feedback)) {
        const question = items[Number(index)]?.question;
        if (!question) continue;
        (value === "helpful" ? helpfulTopics : unhelpfulTopics).push(question);
      }
    }
    const feedbackHint =
      helpfulTopics.length + unhelpfulTopics.length === 0
        ? "Sem feedback do aluno ainda."
        : `Explicações que ajudaram (reforce esse estilo e temas): ${helpfulTopics.slice(0, 10).join(" | ") || "nenhuma"}\nExplicações que NÃO ajudaram (explique esses temas de outra forma, com mais exemplos e passo a passo): ${unhelpfulTopics.slice(0, 10).join(" | ") || "nenhuma"}`;

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

Feedback do aluno sobre explicações anteriores:
${feedbackHint}

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

    const { data: existingPlan } = await context.supabase
      .from("study_plans")
      .select("weekly_focus, locked_weeks")
      .eq("user_id", context.userId)
      .maybeSingle();
    const lockedWeeks = ((existingPlan?.locked_weeks ?? []) as number[]).map(Number);
    const existingByWeek = new Map(
      ((existingPlan?.weekly_focus ?? []) as StudyPlan["weekly_focus"]).map((w) => [w.week, w]),
    );
    const finalWeeks = output.weekly_focus.map((w) =>
      lockedWeeks.includes(w.week) ? (existingByWeek.get(w.week) ?? w) : w,
    );
    output = { ...output, weekly_focus: finalWeeks };

    const { error: upsertError } = await context.supabase.from("study_plans").upsert(
      {
        user_id: context.userId,
        summary: output.summary,
        weekly_focus: output.weekly_focus,
        milestones: output.milestones,
        locked_weeks: lockedWeeks,
      },
      { onConflict: "user_id" },
    );
    if (upsertError) throw new Error(upsertError.message);

    await context.supabase.from("study_plan_versions").insert({
      user_id: context.userId,
      summary: output.summary,
      weekly_focus: output.weekly_focus,
      milestones: output.milestones,
      locked_weeks: lockedWeeks,
      reason: "generated",
      refined_weeks: [],
    });

    return output;
  });

export const previewStudyPlanRefinement = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const apiKey = process.env["LOVABLE_API_KEY"];
    if (!apiKey) throw new Error("AI indisponível no momento.");

    const [{ data: profile }, { data: plan, error: planError }] = await Promise.all([
      context.supabase
        .from("profiles")
        .select("full_name, english_level, goal, target_level")
        .eq("id", context.userId)
        .maybeSingle(),
      context.supabase
        .from("study_plans")
        .select("summary, weekly_focus, milestones, locked_weeks")
        .eq("user_id", context.userId)
        .maybeSingle(),
    ]);
    if (planError) throw new Error(planError.message);
    if (!plan) throw new Error("Gere seu plano de estudos antes de ajustá-lo.");

    const { data: past, error: pastError } = await context.supabase
      .from("daily_exercises")
      .select("week_number, items, explanation_feedback")
      .eq("user_id", context.userId)
      .eq("completed", true)
      .order("exercise_date", { ascending: false })
      .limit(60);
    if (pastError) throw new Error(pastError.message);

    const weeks = (plan.weekly_focus ?? []) as StudyPlan["weekly_focus"];
    const problemsByWeek = new Map<number, string[]>();
    for (const row of past ?? []) {
      const weekNumber = row.week_number;
      if (weekNumber == null) continue;
      const items = (row.items ?? []) as { question: string }[];
      const feedback = (row.explanation_feedback ?? {}) as Record<string, string>;
      for (const [index, value] of Object.entries(feedback)) {
        if (value !== "not_helpful") continue;
        const question = items[Number(index)]?.question;
        if (!question) continue;
        const list = problemsByWeek.get(weekNumber) ?? [];
        list.push(question);
        problemsByWeek.set(weekNumber, list);
      }
    }

    const lockedWeeks = new Set(((plan.locked_weeks ?? []) as number[]).map(Number));
    const affectedWeeks = weeks.filter((w) => problemsByWeek.has(w.week));
    const targetWeeks = affectedWeeks.filter((w) => !lockedWeeks.has(w.week));
    if (affectedWeeks.length === 0) {
      throw new Error(
        "Nenhuma explicação foi marcada como \"não ajudou\" ainda. Marque no histórico para eu ajustar essa parte do plano.",
      );
    }
    if (targetWeeks.length === 0) {
      throw new Error(
        "Todas as semanas afetadas pelo seu feedback estão travadas. Destrave alguma semana para ajustar o plano.",
      );
    }

    const { createLovableAiGatewayProvider } = await import("./ai-gateway.server");
    const gateway = createLovableAiGatewayProvider(apiKey);

    const refinedSchema = z.object({
      weekly_focus: z.array(
        z.object({ week: z.number(), title: z.string(), activities: z.array(z.string()) }),
      ),
    });

    let refined: z.infer<typeof refinedSchema>;
    try {
      const result = await generateText({
        model: gateway("google/gemini-2.5-flash"),
        output: Output.object({ schema: refinedSchema }),
        system:
          "Você é o professor de inglês da Speak2Co. Reescreva APENAS as semanas indicadas do plano de estudos, mantendo os mesmos números de semana. Use abordagens diferentes das atuais, mais passo a passo e com mais exemplos, focando nos pontos em que o aluno disse que a explicação não ajudou. Escreva em português do Brasil, com 3 atividades práticas por semana.",
        prompt: `Aluno: ${profile?.full_name ?? "aluno"}
Nível atual: ${profile?.english_level ?? "não avaliado"}
Nível desejado: ${profile?.target_level ?? "B2"}
Objetivo: ${profile?.goal ?? "melhorar o inglês geral"}
Resumo do plano (não altere): ${plan.summary ?? ""}

Semanas a reescrever:
${targetWeeks
  .map(
    (w) =>
      `Semana ${w.week} — título atual: ${w.title}; atividades atuais: ${w.activities.join("; ")}; pontos que não ficaram claros: ${(problemsByWeek.get(w.week) ?? []).slice(0, 6).join(" | ")}`,
  )
  .join("\n")}

Devolva somente essas semanas reescritas.`,
      });
      refined = result.output;
    } catch (e) {
      const message = e instanceof Error ? e.message : "";
      if (message.includes("429")) throw new Error("Muitas solicitações. Tente novamente em instantes.");
      if (message.includes("402")) throw new Error("Créditos de IA esgotados. Adicione créditos para continuar.");
      console.error("[study-plan] refinamento falhou", e);
      throw new Error("Não foi possível ajustar seu plano agora.");
    }

    const refinedByWeek = new Map(refined.weekly_focus.map((w) => [w.week, w]));

    return {
      weeks: targetWeeks.map((w) => ({
        week: w.week,
        before: { title: w.title, activities: w.activities },
        after: {
          week: w.week,
          title: refinedByWeek.get(w.week)?.title ?? w.title,
          activities: refinedByWeek.get(w.week)?.activities ?? w.activities,
        },
        unclear: (problemsByWeek.get(w.week) ?? []).slice(0, 6),
      })),
    };
  });

export const applyStudyPlanRefinement = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) =>
    z
      .object({
        weeks: z.array(
          z.object({ week: z.number(), title: z.string(), activities: z.array(z.string()) }),
        ),
      })
      .parse(input),
  )
  .handler(async ({ data, context }) => {
    const { data: plan, error: planError } = await context.supabase
      .from("study_plans")
      .select("summary, weekly_focus, milestones, locked_weeks")
      .eq("user_id", context.userId)
      .maybeSingle();
    if (planError) throw new Error(planError.message);
    if (!plan) throw new Error("Gere seu plano de estudos antes de ajustá-lo.");

    const lockedWeeks = new Set(((plan.locked_weeks ?? []) as number[]).map(Number));
    const refinedByWeek = new Map(
      data.weeks.filter((w) => !lockedWeeks.has(w.week)).map((w) => [w.week, w]),
    );
    const weeks = (plan.weekly_focus ?? []) as StudyPlan["weekly_focus"];
    const mergedWeeks = weeks.map((w) => refinedByWeek.get(w.week) ?? w);

    const { error: updateError } = await context.supabase
      .from("study_plans")
      .update({ weekly_focus: mergedWeeks })
      .eq("user_id", context.userId);
    if (updateError) throw new Error(updateError.message);

    await context.supabase.from("study_plan_versions").insert({
      user_id: context.userId,
      summary: plan.summary ?? "",
      weekly_focus: mergedWeeks,
      milestones: (plan.milestones ?? []) as string[],
      locked_weeks: [...lockedWeeks],
      reason: "refined",
      refined_weeks: [...refinedByWeek.keys()],
    });

    return {
      summary: plan.summary,
      weekly_focus: mergedWeeks,
      milestones: (plan.milestones ?? []) as string[],
      locked_weeks: [...lockedWeeks],
      refined_weeks: [...refinedByWeek.keys()],
    };
  });

export const setWeekLock = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) =>
    z.object({ week: z.number(), locked: z.boolean() }).parse(input),
  )
  .handler(async ({ data, context }) => {
    const { data: plan, error: planError } = await context.supabase
      .from("study_plans")
      .select("locked_weeks")
      .eq("user_id", context.userId)
      .maybeSingle();
    if (planError) throw new Error(planError.message);
    if (!plan) throw new Error("Gere seu plano de estudos antes de travar semanas.");

    const current = new Set(((plan.locked_weeks ?? []) as number[]).map(Number));
    if (data.locked) current.add(data.week);
    else current.delete(data.week);
    const lockedWeeks = [...current].sort((a, b) => a - b);

    const { error: updateError } = await context.supabase
      .from("study_plans")
      .update({ locked_weeks: lockedWeeks })
      .eq("user_id", context.userId);
    if (updateError) throw new Error(updateError.message);

    return { locked_weeks: lockedWeeks };
  });

export const getPlanVersions = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data, error } = await context.supabase
      .from("study_plan_versions")
      .select("id, summary, weekly_focus, milestones, locked_weeks, reason, refined_weeks, created_at")
      .eq("user_id", context.userId)
      .order("created_at", { ascending: false })
      .limit(30);
    if (error) throw new Error(error.message);
    return data ?? [];
  });

export const restorePlanVersion = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) => z.object({ id: z.string().uuid() }).parse(input))
  .handler(async ({ data, context }) => {
    const { data: version, error } = await context.supabase
      .from("study_plan_versions")
      .select("summary, weekly_focus, milestones, locked_weeks")
      .eq("id", data.id)
      .eq("user_id", context.userId)
      .maybeSingle();
    if (error) throw new Error(error.message);
    if (!version) throw new Error("Versão não encontrada.");

    const { error: updateError } = await context.supabase
      .from("study_plans")
      .update({
        summary: version.summary,
        weekly_focus: version.weekly_focus,
        milestones: version.milestones,
        locked_weeks: version.locked_weeks,
      })
      .eq("user_id", context.userId);
    if (updateError) throw new Error(updateError.message);

    await context.supabase.from("study_plan_versions").insert({
      user_id: context.userId,
      summary: version.summary,
      weekly_focus: version.weekly_focus,
      milestones: version.milestones,
      locked_weeks: version.locked_weeks,
      reason: "restored",
      refined_weeks: [],
    });

    return {
      summary: version.summary,
      weekly_focus: version.weekly_focus,
      milestones: version.milestones,
      locked_weeks: version.locked_weeks,
    };
  });
