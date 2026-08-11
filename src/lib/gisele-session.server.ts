import type { SupabaseClient } from "@supabase/supabase-js";
import { generateText, Output } from "ai";
import { z } from "zod";
import type { Database } from "@/integrations/supabase/types";
import { createLovableAiGatewayProvider } from "@/lib/ai-gateway.server";
import { withGiselePersona } from "@/lib/gisele-ai-persona";

type Client = SupabaseClient<Database>;

const SummarySchema = z.object({
  summary: z.string(),
  strengths: z.array(z.string()).max(3),
  weaknesses: z.array(z.string()).max(3),
  reviewItems: z.array(z.string()).max(5),
});

/**
 * Encerra a sessão: a Gisele resume o que foi praticado e grava a memória de
 * mentoria (pontos fortes, pontos a melhorar e itens de revisão espaçada).
 */
export async function summarizeSession(supabase: Client, userId: string, threadId: string) {
  const { data: thread } = await supabase
    .from("chat_threads")
    .select("id")
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
      const parts = Array.isArray(row.parts) ? (row.parts as { type?: string; text?: string }[]) : [];
      const text = parts.map((p) => (p.type === "text" ? (p.text ?? "") : "")).join(" ").trim();
      return text ? `${row.role === "user" ? "Student" : "Gisele"}: ${text}` : "";
    })
    .filter(Boolean)
    .join("\n");

  if (!transcript) throw new Error("Ainda não há conversa suficiente para resumir esta sessão.");

  const apiKey = process.env["LOVABLE_API_KEY"];
  if (!apiKey) throw new Error("IA indisponível no momento.");

  const gateway = createLovableAiGatewayProvider(apiKey);
  const { output } = await generateText({
    model: gateway("google/gemini-3.6-flash"),
    output: Output.object({ schema: SummarySchema }),
    system: withGiselePersona(
      `Você está encerrando uma sessão de mentoria Signature. Resuma o que REALMENTE aconteceu na conversa abaixo, sem inventar progresso.
- summary: 2 frases em inglês, com tradução curta em português entre parênteses.
- strengths / weaknesses: observações objetivas de linguagem (gramática, vocabulário, pronúncia, fluência).
- reviewItems: itens curtos para revisão espaçada (estruturas ou palavras a retomar em alguns dias).`,
    ),
    prompt: transcript.slice(-8000),
  });

  const now = new Date();
  const reviewAt = new Date(now);
  reviewAt.setDate(reviewAt.getDate() + 2);

  const memoryRows = [
    ...output.strengths.map((content) => ({ kind: "strength" as const, content, review_at: null })),
    ...output.weaknesses.map((content) => ({ kind: "weakness" as const, content, review_at: null })),
    ...output.reviewItems.map((content) => ({
      kind: "review" as const,
      content,
      review_at: reviewAt.toISOString(),
    })),
  ].map((row) => ({ ...row, user_id: userId, source: `session:${threadId}` }));

  if (memoryRows.length) {
    const { error } = await supabase.from("gisele_memory").insert(memoryRows);
    if (error) console.error("[gisele] memory insert failed", error.message);
  }

  const minutes = Math.max(1, Math.round((rows?.length ?? 0) * 0.5));
  const { error: sessionError } = await supabase
    .from("gisele_sessions")
    .update({
      summary: output.summary,
      corrections: output.weaknesses,
      minutes,
    })
    .eq("thread_id", threadId)
    .eq("user_id", userId);
  if (sessionError) console.error("[gisele] session update failed", sessionError.message);

  return output;
}
