"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Lang } from "@/lib/i18n";
import { i18n } from "@/lib/i18n";

type Translations = typeof i18n.en; 
type LangContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
};

const LangContext = createContext<LangContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved === "en" || saved === "fr") {
      setLangState(saved);
      document.documentElement.lang = saved;
    } else {
      document.documentElement.lang = "en";
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("lang", l);
    document.documentElement.lang = l;
  };

  const value = useMemo<LangContextValue>(
    () => ({ lang, setLang, t: i18n[lang] as Translations }),
    [lang]
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
