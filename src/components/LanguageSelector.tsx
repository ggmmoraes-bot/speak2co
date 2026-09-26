import { Globe } from "lucide-react";
import { useI18n, LOCALES, LOCALE_LABELS, type Locale } from "@/lib/i18n";

/**
 * Seletor de idioma sempre visível: as três bandeiras lado a lado,
 * reforçando que a Speak2Co é internacional.
 */
export function LanguageSelector({ className }: { className?: string }) {
  const { locale, setLocale, t } = useI18n();

  return (
    <div
      role="radiogroup"
      aria-label={t("language.change")}
      className={`flex items-center gap-1 rounded-full border border-gold/50 bg-card/70 p-1 shadow-[0_0_18px_color-mix(in_oklab,var(--gold)_25%,transparent)] backdrop-blur ${className ?? ""}`}
    >
      <Globe className="mx-1 hidden h-5 w-5 text-gold sm:block" aria-hidden />
      {LOCALES.map((code: Locale) => {
        const item = LOCALE_LABELS[code];
        const active = code === locale;
        return (
          <button
            key={code}
            type="button"
            role="radio"
            aria-checked={active}
            aria-label={item.label}
            title={item.label}
            onClick={() => setLocale(code)}
            className={`flex h-10 items-center gap-1.5 rounded-full px-2.5 text-sm font-bold transition-all ${
              active
                ? "bg-gold text-gold-ink scale-105"
                : "text-muted-foreground hover:bg-secondary hover:text-foreground"
            }`}
          >
            <span className="text-2xl leading-none" aria-hidden>
              {item.flag}
            </span>
            <span className="hidden sm:inline">{item.short}</span>
          </button>
        );
      })}
    </div>
  );
}
