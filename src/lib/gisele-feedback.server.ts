import type { SupabaseClient } from "@supabase/supabase-js";
import { streamText, Output } from "ai";
import { z } from "zod";
import type { Database } from "@/integrations/supabase/types";
import { createLovableAiGatewayProvider } from "@/lib/ai-gateway.server";
import { withGiselePersona } from "@/lib/gisele-ai-persona";

type Client = SupabaseClient<Database>;

import {
  FEEDBACK_PROMPT_RULES,
  GiseleFeedbackSchema,
  type GiseleFeedback,
} from "@/lib/gisele-feedback-types";

export const FeedbackSchema = GiseleFeedbackSchema;
export type SessionFeedback = GiseleFeedback;

/**
 * Gera o feedback da sessão no formato obrigatório da Gisele AI
 * (o que foi bem, principal ponto a melhorar, como melhorar, convite ao retry)
 * e grava feedback + recomendações.
 */
export async function generateSessionFeedback(
  supabase: Client,
  userId: string,
  threadId: string,
): Promise<SessionFeedback> {
  const { data: thread } = await supabase
    .from("chat_threads")
    .select("id, context")
    .eq("id", threadId)
    .eq("user_id", userId)
    .eq("product", "gisele")
    .maybeSingle();
  if (!thread) throw new Error("Sessão não encontrada.");

  const { data: rows } = await supabase
    .from("chat_messages")
    .select("role, parts")
    .eq("thread_id", threadId)
    .order("created_at", { ascending: true })
    .limit(60);

  const transcript = (rows ?? [])
    .map((row) => {
      const parts = Array.isArray(row.parts)
        ? (row.parts as { type?: string; text?: string }[])
        : [];
      const text = parts
        .map((p) => (p.type === "text" ? (p.text ?? "") : ""))
        .join(" ")
        .trim();
      return text ? `${row.role === "user" ? "Student" : "Gisele"}: ${text}` : "";
    })
    .filter(Boolean)
    .join("\n");

  if (!transcript) throw new Error("Fale um pouco mais antes de pedir o feedback.");

  const apiKey = process.env["LOVABLE_API_KEY"];
  if (!apiKey) throw new Error("IA indisponível no momento.");

  const gateway = createLovableAiGatewayProvider(apiKey, undefined, { structuredOutputs: true });
  const result = streamText({
    model: gateway("google/gemini-3.6-flash"),
    system: withGiselePersona(
      `${FEEDBACK_PROMPT_RULES}
Contexto da atividade: ${thread.context ?? "conversa livre"}.`,
    ),
    prompt: `Transcrição da sessão:\n${transcript}`,
    output: Output.object({ schema: FeedbackSchema }),
  });

  // Degradação graciosa: se a saída estruturada falhar, tentamos JSON puro
  // antes de devolver erro ao aluno.
  let feedback: SessionFeedback;
  try {
    feedback = (await result.output) as SessionFeedback;
  } catch (structuredError) {
    console.warn("[gisele-feedback] structured output failed", structuredError);
    const retry = streamText({
      model: gateway("google/gemini-3.6-flash"),
      system:
        'Responda APENAS com um JSON válido, sem markdown, no formato {"whatYouDidWell":string,"letsImprove":string,"pronunciation":string,"fluency":string,"grammar":string,"vocabulary":string,"naturalness":string,"nextStep":string,"category":"grammar"|"vocabulary"|"pronunciation"|"fluency"|"strategy","priority":1|2|3,"recommendations":[{"type":"practice"|"lesson"|"review"|"mission","content":string,"priority":1|2|3}]}',
      prompt: `Transcrição da sessão:\n${transcript}`,
    });
    const raw = (await retry.text).trim().replace(/^```(?:json)?|```$/g, "");
    const parsed = FeedbackSchema.safeParse(JSON.parse(raw));
    if (!parsed.success) {
      throw new Error("Não consegui gerar o feedback agora. Continue a conversa e tente de novo.");
    }
    feedback = parsed.data;
  }

  const { data: session } = await supabase
    .from("gisele_sessions")
    .select("id")
    .eq("user_id", userId)
    .eq("thread_id", threadId)
    .maybeSingle();

  await supabase.from("ai_feedback").insert({
    user_id: userId,
    session_id: session?.id ?? null,
    category: feedback.category,
    observation: `✅ ${feedback.whatYouDidWell}\n🎯 ${feedback.letsImprove}\n➡️ ${feedback.nextStep}`,
    priority: feedback.priority,
  });

  if (feedback.recommendations.length > 0) {
    await supabase.from("ai_recommendations").insert(
      feedback.recommendations.map((r) => ({
        user_id: userId,
        session_id: session?.id ?? null,
        type: r.type,
        content: r.content,
        priority: r.priority,
      })),
    );
  }

  return feedback;
}
