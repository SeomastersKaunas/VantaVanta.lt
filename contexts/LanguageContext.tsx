"use client";

import { createContext, useState, useContext, ReactNode } from "react";
import { translations } from "@/lib/translations";

interface LanguageContextType {
  locale: "lt" | "en";
  setLocale: (locale: "lt" | "en") => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<"lt" | "en">("lt");

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export const useTranslations = () => {
  const { locale } = useLanguage();

  const t = (key: string): string => {
    const keys = key.split(".");

    let result: any = translations[locale];

    for (const k of keys) {
      if (result && typeof result === "object" && k in result) {
        result = result[k];
      } else {
        console.warn(
          `Translation key "${key}" not found for locale "${locale}".`
        );
        return key;
      }
    }

    if (typeof result === "string") {
      return result;
    }

    console.warn(`Translation for key "${key}" is an object, not a string.`);
    return key;
  };

  return t;
};
