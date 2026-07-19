"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
} from "react";
import { translations, type Lang, type Translation } from "./translations";

type LanguageContextValue = {
  lang: Lang;
  t: Translation;
  toggleLang: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "lang";
const LANG_EVENT = "lang-change";

function subscribe(callback: () => void) {
  window.addEventListener(STORAGE_KEY, callback);
  window.addEventListener(LANG_EVENT, callback);
  return () => {
    window.removeEventListener(STORAGE_KEY, callback);
    window.removeEventListener(LANG_EVENT, callback);
  };
}

function getSnapshot(): Lang {
  return window.localStorage.getItem(STORAGE_KEY) === "en" ? "en" : "ru";
}

function getServerSnapshot(): Lang {
  return "ru";
}

function setStoredLang(lang: Lang) {
  window.localStorage.setItem(STORAGE_KEY, lang);
  window.dispatchEvent(new Event(LANG_EVENT));
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      t: translations[lang],
      toggleLang: () => setStoredLang(lang === "ru" ? "en" : "ru"),
    }),
    [lang]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
