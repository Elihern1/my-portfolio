"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Lang } from "@/lib/i18n";
import { i18n } from "@/lib/i18n";

type LangContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (typeof i18n)["en"];
};

const LangContext = createContext<LangContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved === "en" || saved === "fr") setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("lang", l);
  };

  const value = useMemo(
    () => ({ lang, setLang, t: i18n[lang] }),
    [lang]
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
