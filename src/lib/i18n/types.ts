export const LOCALES = ["pt", "en", "es"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

export const LOCALE_LABELS: Record<Locale, { label: string; short: string; flag: string }> = {
  pt: { label: "Português", short: "PT", flag: "🇧🇷" },
  en: { label: "English", short: "EN", flag: "🇺🇸" },
  es: { label: "Español", short: "ES", flag: "🇪🇸" },
};

export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && (LOCALES as readonly string[]).includes(value);
}

/** Mapeia o idioma do navegador para um idioma suportado. */
export function normalizeLocale(tag: string | null | undefined): Locale | null {
  if (!tag) return null;
  const base = tag.toLowerCase().split("-")[0];
  if (base === "pt") return "pt";
  if (base === "en") return "en";
  if (base === "es") return "es";
  return null;
}

export type Dictionary = Record<string, string>;
