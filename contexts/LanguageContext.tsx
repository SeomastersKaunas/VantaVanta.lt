"use client";

import { createContext, useState, useContext, ReactNode } from "react";
import { translations } from "@/lib/translations";

// 1. Automatically define the Locale type based on the keys in your translations object.
// This results in: "lt" | "en" | "ru" | "pl" | "de" automatically.
export type Locale = keyof typeof translations;

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // Default language remains 'lt', but type allows any defined language
  const [locale, setLocale] = useState<Locale>("lt");

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

    // Access the specific language object
    let result: any = translations[locale];

    for (const k of keys) {
      if (result && typeof result === "object" && k in result) {
        result = result[k];
      } else {
        console.warn(
          `Translation key "${key}" not found for locale "${locale}".`
        );
        // Fallback: Optional - check English if translation is missing in current lang
        // return translations['en'][...]; 
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