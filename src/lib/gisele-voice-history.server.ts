import type { SupabaseClient } from "@supabase/supabase-js";
import { generateText, Output } from "ai";
import { z } from "zod";
import type { Database } from "@/integrations/supabase/types";
import { createLovableAiGatewayProvider } from "@/lib/ai-gateway.server";
import { withGiselePersona } from "@/lib/gisele-ai-persona";

type Client = SupabaseClient<Database>;

export type VoiceTranscriptTurn = {
  role: "student" | "gisele";
  text: string;
  at: string;
};

export type SoftCorrection = {
  /** O que o aluno disse. */
  original: string;
  /** Como soaria mais natural em inglês. */
  better: string;
  /** Explicação curta e gentil (bilíngue). */
  why: string;
};

const AnalysisSchema = z.object({
  summary: z.string(),
  estimatedLevel: z.enum(["A1", "A2", "B1", "B2", "C1", "C2"]),
  levelNote: z.string(),
  softCorrections: z
    .array(z.object({ original: z.string(), better: z.string(), why: z.string() }))
    .max(8),
});

function transcriptToText(turns: VoiceTranscriptTurn[]) {
  return turns
    .map((t) => `${t.role === "student" ? "Student" : "Gisele"}: ${t.text}`)
    .join("\n")
    .slice(-8000);
}

/** Garante que existe uma linha de sessão de voz para a thread. */
async function ensureVoiceSession(supabase: Client, userId: string, threadId: string) {
  const { data } = await supabase
    .from("gisele_sessions")
    .select("id")
    .eq("user_id", userId)
    .eq("thread_id", threadId)
    .maybeSingle();
  if (data) return data.id;

  const { data: created, error } = await supabase
    .from("gisele_sessions")
    .insert({ user_id: userId, thread_id: threadId, focus: "conversation", session_type: "voice" })
    .select("id")
    .single();
  if (error) throw new Error(error.message);
  return created.id;
}

/**
 * Autosave: grava a transcrição da conversa por voz a cada turno, para que o
 * histórico fique completo mesmo se o aluno sair sem encerrar a sessão.
 */
export async function saveVoiceTranscript(
  supabase: Client,
  userId: string,
  threadId: string,
  turns: VoiceTranscriptTurn[],
) {
  const sessionId = await ensureVoiceSession(supabase, userId, threadId);
  const minutes = Math.max(1, Math.round(turns.length * 0.5));
  const { error } = await supabase
    .from("gisele_sessions")
    .update({
      session_type: "voice",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      transcript: turns as any,
      minutes,
    })
    .eq("id", sessionId)
    .eq("user_id", userId);
  if (error) throw new Error(error.message);
  return { ok: true, sessionId };
}

/**
 * Encerramento da sessão de voz: além da transcrição, guarda as correções
 * suaves (o que o aluno disse → como soaria melhor) e o nível estimado.
 */
export async function finalizeVoiceSession(
  supabase: Client,
  userId: string,
  threadId: string,
  turns: VoiceTranscriptTurn[],
) {
  const sessionId = await ensureVoiceSession(supabase, userId, threadId);
  const text = transcriptToText(turns);
  if (!text.trim()) throw new Error("Ainda não há conversa suficiente para salvar esta sessão.");

  const apiKey = process.env["LOVABLE_API_KEY"];
  if (!apiKey) throw new Error("IA indisponível no momento.");

  const gateway = createLovableAiGatewayProvider(apiKey, undefined, { structuredOutputs: true });
  const { output } = await generateText({
    model: gateway("google/gemini-3.6-flash"),
    output: Output.object({ schema: AnalysisSchema }),
    system: withGiselePersona(
      `Você está arquivando uma sessão de conversa por VOZ da mentoria GiseleAI. Analise apenas o que realmente aconteceu, sem inventar.
- summary: 2 frases em inglês com tradução curta em português entre parênteses.
- estimatedLevel: nível CEFR estimado do aluno NESTA sessão (A1..C2), com base no que ele produziu.
- levelNote: 1 frase explicando o porquê do nível, em inglês com tradução curta.
- softCorrections: até 8 correções SUAVES do que o aluno disse. Em cada item: original (fala do aluno), better (versão natural em inglês) e why (explicação curta e gentil em inglês com tradução em português). Ignore erros de transcrição automática.`,
    ),
    prompt: text,
  });

  const minutes = Math.max(1, Math.round(turns.length * 0.5));
  const { error } = await supabase
    .from("gisele_sessions")
    .update({
      session_type: "voice",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      transcript: turns as any,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      soft_corrections: output.softCorrections as any,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      corrections: output.softCorrections.map((c) => c.better) as any,
      estimated_level: output.estimatedLevel,
      summary: `${output.summary}\n${output.levelNote}`,
      minutes,
    })
    .eq("id", sessionId)
    .eq("user_id", userId);
  if (error) throw new Error(error.message);

  return { sessionId, ...output };
}
