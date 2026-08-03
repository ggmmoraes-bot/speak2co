import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";

export type PlacementSnapshot = {
  level: string | null;
  score: number | null;
  completedAt: string | null;
  summary: string;
  strengths: string[];
  focus: string[];
  nextSteps: string[];
  writingFeedback: string;
};

type Db = SupabaseClient<Database>;

/**
 * Latest completed placement test for the student, normalized for AI prompts.
 */
export async function getPlacementSnapshot(
  supabase: Db,
  userId: string,
): Promise<PlacementSnapshot | null> {
  const { data } = await supabase
    .from("placement_tests")
    .select("score, level, feedback, completed_at")
    .eq("user_id", userId)
    .eq("completed", true)
    .order("completed_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (!data) return null;

  const feedback = (data.feedback ?? {}) as {
    summary?: string;
    strengths?: string[];
    focus?: string[];
    nextSteps?: string[];
    writingFeedback?: string;
  };

  return {
    level: data.level ?? null,
    score: data.score ?? null,
    completedAt: data.completed_at ?? null,
    summary: feedback.summary ?? "",
    strengths: feedback.strengths ?? [],
    focus: feedback.focus ?? [],
    nextSteps: feedback.nextSteps ?? [],
    writingFeedback: feedback.writingFeedback ?? "",
  };
}

/** Prompt block (pt-BR) describing the placement result. */
export function describePlacement(snapshot: PlacementSnapshot | null): string {
  if (!snapshot) {
    return "O aluno ainda não fez o teste de nivelamento. Use o nível informado no perfil e calibre pelas respostas dele.";
  }
  const date = snapshot.completedAt ? snapshot.completedAt.slice(0, 10) : "recente";
  return [
    `Teste de nivelamento (${date}): nível ${snapshot.level ?? "indefinido"}, acerto de ${snapshot.score ?? 0}%.`,
    snapshot.summary ? `Diagnóstico: ${snapshot.summary}` : "",
    snapshot.strengths.length ? `Pontos fortes: ${snapshot.strengths.join("; ")}` : "",
    snapshot.focus.length ? `Prioridades de melhoria: ${snapshot.focus.join("; ")}` : "",
    snapshot.writingFeedback ? `Análise da escrita: ${snapshot.writingFeedback}` : "",
    snapshot.nextSteps.length ? `Próximos passos sugeridos: ${snapshot.nextSteps.join("; ")}` : "",
  ]
    .filter(Boolean)
    .join("\n");
}

/** Short guidance for the AI teacher's live feedback depth, based on level. */
export function feedbackStyleForLevel(level: string | null | undefined): string {
  switch ((level ?? "").toUpperCase()) {
    case "A1":
      return "Nível A1: use frases muito curtas, vocabulário básico e presente simple. Corrija apenas 1 erro por mensagem, sempre com tradução em português entre parênteses. Faça perguntas fechadas (sim/não).";
    case "A2":
      return "Nível A2: frases curtas e cotidianas, passado e futuro simples. Corrija até 2 erros por mensagem, com explicação bem curta em português. Faça perguntas simples e diretas.";
    case "B1":
      return "Nível B1: converse em inglês natural mas sem gírias difíceis. Corrija os erros que atrapalham a clareza, explicando em inglês simples com um exemplo. Estimule respostas de 2 a 3 frases.";
    case "B2":
      return "Nível B2: converse em inglês fluente, introduza expressões idiomáticas e conectivos. Corrija erros de precisão e sugira alternativas mais naturais. Explique em inglês. Peça justificativas e opiniões.";
    case "C1":
      return "Nível C1: inglês avançado, ritmo de nativo. Foque em nuance, registro, colocação e naturalidade em vez de gramática básica. Desafie com perguntas abertas e vocabulário sofisticado.";
    default:
      return "Nível ainda não avaliado: comece em inglês intermediário simples, observe os erros do aluno e ajuste a complexidade. Sugira fazer o teste de nivelamento em /teste-de-nivel.";
  }
}
