import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Locale = "pt" | "en";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue | undefined>(undefined);

const detectBrowserLocale = (): Locale => {
  if (typeof navigator === "undefined") {
    return "en";
  }

  return navigator.language.toLowerCase().startsWith("pt") ? "pt" : "en";
};

export const LocaleProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<Locale>(detectBrowserLocale);

  useEffect(() => {
    document.documentElement.lang = locale === "pt" ? "pt-BR" : "en";
  }, [locale]);

  const value = useMemo(() => ({ locale, setLocale }), [locale]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
};

export const useLocale = () => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider");
  }

  return context;
};
