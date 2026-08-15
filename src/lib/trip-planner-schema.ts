import { z } from "zod";

/** Seções fixas do English Survival & Travel Plan. */
export const TRIP_SECTIONS = [
  { id: "essentialVocabulary", titleEn: "Essential Vocabulary", titlePt: "Vocabulário essencial" },
  { id: "localExpressions", titleEn: "Local Expressions / Words", titlePt: "Expressões locais" },
  { id: "atTheAirport", titleEn: "At the Airport", titlePt: "No aeroporto" },
  { id: "atTheDestination", titleEn: "At the Destination", titlePt: "No destino" },
  { id: "emergencyPhrases", titleEn: "Emergency Phrases", titlePt: "Frases de emergência" },
  { id: "weather", titleEn: "Weather", titlePt: "Clima" },
  { id: "clothesToTake", titleEn: "Clothes to Take", titlePt: "O que levar" },
  { id: "typicalFood", titleEn: "Typical Food", titlePt: "Comidas típicas" },
  { id: "atTheRestaurant", titleEn: "At the Restaurant", titlePt: "No restaurante" },
] as const;

export type TripSectionId = (typeof TRIP_SECTIONS)[number]["id"];

export type TripItem = { en: string; pt: string };

export type TripSection = {
  id: TripSectionId;
  titleEn: string;
  titlePt: string;
  intro: string;
  items: TripItem[];
};

export type TripPlan = {
  destination: string;
  country: string;
  tripDates: string;
  overview: string;
  sections: TripSection[];
};

const sectionSchema = z.object({
  intro: z.string(),
  items: z.array(z.object({ en: z.string(), pt: z.string() })),
});

export const rawTripPlanSchema = z.object({
  englishSpeakingDestination: z.boolean(),
  country: z.string(),
  overview: z.string(),
  essentialVocabulary: sectionSchema,
  localExpressions: sectionSchema,
  atTheAirport: sectionSchema,
  atTheDestination: sectionSchema,
  emergencyPhrases: sectionSchema,
  weather: sectionSchema,
  clothesToTake: sectionSchema,
  typicalFood: sectionSchema,
  atTheRestaurant: sectionSchema,
});

export const tripPlanInputSchema = z.object({
  destination: z.string().min(2).max(80),
  startDate: z.string().min(4).max(30),
  endDate: z.string().min(4).max(30),
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

function normalizeItem(raw: unknown): TripItem {
  if (typeof raw === "string") {
    const match = raw.match(/^(.+?)\s*[—–|]\s*(.+)$/);
    return match
      ? { en: (match[1] ?? "").trim(), pt: (match[2] ?? "").trim() }
      : { en: raw.trim(), pt: "" };
  }
  const obj = (raw ?? {}) as Record<string, unknown>;
  return { en: toText(obj["en"]), pt: toText(obj["pt"]) };
}

export function normalizeTripPlan(
  raw: z.infer<typeof rawTripPlanSchema>,
  destination: string,
  tripDates: string,
): TripPlan {
  const source = raw as unknown as Record<string, { intro?: unknown; items?: unknown[] }>;
  return {
    destination,
    country: toText(raw.country),
    tripDates,
    overview: toText(raw.overview),
    sections: TRIP_SECTIONS.map((section) => {
      const data = source[section.id] ?? {};
      return {
        id: section.id,
        titleEn: section.titleEn,
        titlePt: section.titlePt,
        intro: toText(data.intro),
        items: (data.items ?? []).map(normalizeItem).filter((item) => item.en),
      };
    }).filter((section) => section.items.length > 0 || section.intro),
  };
}
