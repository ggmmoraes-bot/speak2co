import type { Locale } from "@/lib/i18n";

/** Bandeiras em SVG (emojis de bandeira não aparecem no Windows). */
export function FlagIcon({ locale, className = "h-5 w-7" }: { locale: Locale; className?: string }) {
  const cls = `${className} shrink-0 overflow-hidden rounded-[3px] ring-1 ring-black/20`;
  if (locale === "pt")
    return (
      <svg viewBox="0 0 28 20" className={cls} aria-hidden>
        <rect width="28" height="20" fill="#009C3B" />
        <path d="M14 2.5 25.5 10 14 17.5 2.5 10Z" fill="#FFDF00" />
        <circle cx="14" cy="10" r="4.6" fill="#002776" />
        <path d="M9.5 9.2c3-.9 6.3-.5 9 1.1" stroke="#fff" strokeWidth="0.9" fill="none" />
      </svg>
    );
  if (locale === "es")
    return (
      <svg viewBox="0 0 28 20" className={cls} aria-hidden>
        <rect width="28" height="20" fill="#AA151B" />
        <rect y="5" width="28" height="10" fill="#F1BF00" />
        <rect x="6" y="7.5" width="3" height="5" rx="0.6" fill="#AA151B" />
      </svg>
    );
  return (
    <svg viewBox="0 0 28 20" className={cls} aria-hidden>
      <rect width="28" height="20" fill="#fff" />
      {[0, 2, 4, 6, 8, 10, 12].map((i) => (
        <rect key={i} y={(i * 20) / 13} width="28" height={20 / 13} fill="#B22234" />
      ))}
      <rect width="12" height={(20 / 13) * 7} fill="#3C3B6E" />
      {[0, 1, 2].map((r) =>
        [0, 1, 2, 3].map((c) => (
          <circle key={`${r}${c}`} cx={1.8 + c * 2.8} cy={1.8 + r * 3.2} r="0.55" fill="#fff" />
        )),
      )}
    </svg>
  );
}
