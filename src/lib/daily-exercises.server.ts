import { NoObjectGeneratedError } from "ai";

type Item = {
  question: string;
  options: string[];
  answer: string;
  explanation: string;
};

export type RescuedExercise = {
  title: string;
  instructions: string;
  items: Item[];
};

function str(...values: unknown[]): string {
  for (const value of values) {
    if (typeof value === "string" && value.trim()) return value.trim();
  }
  return "";
}

function firstArray(source: Record<string, unknown>, keys: string[]): unknown[] {
  for (const key of keys) {
    const value = source[key];
    if (Array.isArray(value)) return value;
  }
  return [];
}

function extractJson(text: string): unknown {
  const trimmed = text.trim().replace(/^```(?:json)?/i, "").replace(/```$/, "").trim();
  try {
    return JSON.parse(trimmed);
  } catch {
    const start = trimmed.indexOf("{");
    const end = trimmed.lastIndexOf("}");
    if (start === -1 || end <= start) return null;
    try {
      return JSON.parse(trimmed.slice(start, end + 1));
    } catch {
      return null;
    }
  }
}

/**
 * Gemini frequently answers with Portuguese keys (titulo, questoes, alternativas...),
 * which fails the schema validation even though the content is fine.
 * Normalize those variants instead of failing the whole generation.
 */
export function rescueExercise(error: unknown): RescuedExercise | null {
  if (!NoObjectGeneratedError.isInstance(error) || !error.text) return null;
  const raw = extractJson(error.text);
  if (!raw || typeof raw !== "object") return null;
  const root = raw as Record<string, unknown>;

  const rawItems = firstArray(root, ["items", "questoes", "questões", "perguntas", "exercicios", "exercícios"]);
  const items: Item[] = [];

  for (const entry of rawItems) {
    if (!entry || typeof entry !== "object") continue;
    const it = entry as Record<string, unknown>;
    const question = str(it["question"], it["questao"], it["questão"], it["pergunta"], it["enunciado"]);
    const rawOptions = firstArray(it, ["options", "alternativas", "opcoes", "opções"]);
    const options = rawOptions.map((o) => str(o)).filter(Boolean);
    const answer = str(it["answer"], it["resposta"], it["resposta_correta"], it["correta"], it["gabarito"]);
    const explanation = str(it["explanation"], it["explicacao"], it["explicação"], it["justificativa"]);
    if (!question || options.length < 2 || !answer) continue;
    const normalizedAnswer = options.includes(answer)
      ? answer
      : (options.find((o) => o.toLowerCase() === answer.toLowerCase()) ?? options[0]!);
    items.push({ question, options, answer: normalizedAnswer, explanation });
  }

  if (items.length === 0) return null;

  return {
    title: str(root["title"], root["titulo"], root["título"]) || "Exercício do dia",
    instructions:
      str(root["instructions"], root["instrucoes"], root["instruções"], root["enunciado"]) ||
      "Escolha a alternativa correta em cada questão.",
    items,
  };
}
