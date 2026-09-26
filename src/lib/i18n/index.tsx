import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { supabase } from "@/integrations/supabase/client";
import { pt } from "./dictionaries/pt";
import { en } from "./dictionaries/en";
import { es } from "./dictionaries/es";
import {
  DEFAULT_LOCALE,
  isLocale,
  LOCALES,
  LOCALE_LABELS,
  normalizeLocale,
  type Dictionary,
  type Locale,
} from "./types";

export { LOCALES, LOCALE_LABELS, DEFAULT_LOCALE, isLocale, type Locale };

const DICTIONARIES: Record<Locale, Dictionary> = { pt, en, es };

const STORAGE_KEY = "speak2co.locale";

type I18nValue = {
  locale: Locale;
  setLocale: (next: Locale) => void;
  /** Traduz uma chave; cai para inglês e depois para a própria chave legível. */
  t: (key: string, vars?: Record<string, string | number>) => string;
};

const I18nContext = createContext<I18nValue | null>(null);

function interpolate(template: string, vars?: Record<string, string | number>) {
  if (!vars) return template;
  return template.replace(/\{(\w+)\}/g, (match, name: string) =>
    name in vars ? String(vars[name]) : match,
  );
}

/** Fallback final: nunca mostrar chave técnica ao aluno. */
function humanize(key: string) {
  const last = key.split(".").pop() ?? key;
  const spaced = last.replace(/[_-]/g, " ").replace(/([a-z0-9])([A-Z])/g, "$1 $2");
  return spaced.charAt(0).toUpperCase() + spaced.slice(1);
}

export function translate(locale: Locale, key: string, vars?: Record<string, string | number>) {
  const value =
    DICTIONARIES[locale]?.[key] ?? DICTIONARIES[DEFAULT_LOCALE]?.[key] ?? DICTIONARIES.pt[key];
  return interpolate(value ?? humanize(key), vars);
}

export function I18nProvider({ children }: { children: ReactNode }) {
  // O SSR sempre renderiza o idioma padrão; a preferência é aplicada após a hidratação.
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    let active = true;

    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isLocale(stored)) {
      setLocaleState(stored);
    } else {
      const detected = normalizeLocale(window.navigator.language) ?? DEFAULT_LOCALE;
      setLocaleState(detected);
      window.localStorage.setItem(STORAGE_KEY, detected);
    }

    // A preferência salva no perfil vence quando existir e o dispositivo não tiver escolha manual.
    (async () => {
      const { data: userData } = await supabase.auth.getUser();
      if (!active || !userData.user) return;
      const { data } = await supabase
        .from("profiles")
        .select("preferred_language")
        .eq("id", userData.user.id)
        .maybeSingle();
      const remote = (data as { preferred_language?: string | null } | null)?.preferred_language;
      if (active && isLocale(remote) && !isLocale(stored)) {
        setLocaleState(remote);
        window.localStorage.setItem(STORAGE_KEY, remote);
      }
    })();

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* armazenamento indisponível: a escolha vale para esta sessão */
    }
    void (async () => {
      const { data: userData } = await supabase.auth.getUser();
      if (!userData.user) return;
      await supabase.from("profiles").update({ preferred_language: next }).eq("id", userData.user.id);
    })();
  }, []);

  const value = useMemo<I18nValue>(
    () => ({
      locale,
      setLocale,
      t: (key, vars) => translate(locale, key, vars),
    }),
    [locale, setLocale],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext);
  if (ctx) return ctx;
  // Sem provider (testes isolados), o idioma padrão mantém a interface utilizável.
  return {
    locale: DEFAULT_LOCALE,
    setLocale: () => {},
    t: (key, vars) => translate(DEFAULT_LOCALE, key, vars),
  };
}

export function useT() {
  return useI18n().t;
}
