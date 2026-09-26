import { Globe, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useI18n, LOCALES, LOCALE_LABELS, type Locale } from "@/lib/i18n";

export function LanguageSelector({ className }: { className?: string }) {
  const { locale, setLocale, t } = useI18n();
  const current = LOCALE_LABELS[locale];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className={`rounded-full ${className ?? ""}`}
          aria-label={t("language.change")}
        >
          <Globe className="h-4 w-4 text-gold" />
          <span className="ml-2 text-sm font-semibold">{current.short}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-44">
        {LOCALES.map((code: Locale) => {
          const item = LOCALE_LABELS[code];
          return (
            <DropdownMenuItem
              key={code}
              onSelect={() => setLocale(code)}
              className="cursor-pointer gap-2"
            >
              <span aria-hidden>{item.flag}</span>
              <span className="flex-1">{item.label}</span>
              {code === locale && <Check className="h-4 w-4 text-gold" />}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
