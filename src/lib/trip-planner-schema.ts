import { z } from "zod";

export const tripPlanSchema = z.object({
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

/** Schema tolerante: o modelo às vezes devolve objetos onde pedimos texto. */
const looseText = z.union([z.string(), z.number(), z.record(z.any())]);

export const rawTripPlanSchema = z.object({
  destination: z.string().optional(),
  overview: looseText.optional(),
  weather: looseText.optional(),
  packing: z.array(looseText).optional(),
  vocabulary: z
    .array(
      z.union([
        z.string(),
        z.object({ term: looseText.optional(), meaning: looseText.optional() }),
      ]),
    )
    .optional(),

  expressions: z.array(looseText).optional(),
  likelySituations: z.array(looseText).optional(),
  studyPlan: z
    .array(
      z.object({
        day: looseText.optional(),
        focus: looseText.optional(),
        task: looseText.optional(),
      }),
    )
    .optional(),
});

export const tripPlanInputSchema = z.object({
  destination: z.string().min(2).max(80),
  days: z.number().int().min(1).max(60),
});

function toText(value: unknown): string {
  if (value == null) return "";
  if (typeof value === "string") return value.trim();
  if (typeof value === "number" || typeof value === "boolean") return String(value);
  if (Array.isArray(value)) return value.map(toText).filter(Boolean).join(" ");
  if (typeof value === "object") {
    return Object.values(value as Record<string, unknown>)
      .map(toText)
      .filter(Boolean)
      .join(" — ");
  }
  return "";
}

export function normalizeTripPlan(
  raw: z.infer<typeof rawTripPlanSchema>,
  destination: string,
): TripPlan {
  const list = (items?: unknown[]) => (items ?? []).map(toText).filter(Boolean);
  return {
    destination,
    overview: toText(raw.overview),
    weather: toText(raw.weather),
    packing: list(raw.packing),
    vocabulary: (raw.vocabulary ?? [])
      .map((v) => {
        if (typeof v === "string") {
          const match = v.match(/^(.+?)\s*[—–\-(:]\s*(.+?)\)?$/);
          return match
            ? { term: match[1].trim(), meaning: match[2].trim() }
            : { term: v.trim(), meaning: "" };
        }
        return { term: toText(v.term), meaning: toText(v.meaning) };
      })
      .filter((v) => v.term),

    expressions: list(raw.expressions),
    likelySituations: list(raw.likelySituations),
    studyPlan: (raw.studyPlan ?? [])
      .map((s, index) => ({
        day: toText(s.day) || `Dia ${index + 1}`,
        focus: toText(s.focus),
        task: toText(s.task),
      }))
      .filter((s) => s.focus || s.task),
  };
}
