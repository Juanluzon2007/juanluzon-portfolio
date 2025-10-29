"use client";

import React, { useState, createContext, useContext, useEffect } from 'react';
import { translations } from '@/lib/i18n';

export type Language = 'es' | 'en';
export type TFunction = (key: string) => string;

type LanguageContextType = {
  language: Language;
  toggleLanguage: () => void;
  t: TFunction;
};

export const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en'); // Default to English

  // On initial load, try to read language from cookie
  useEffect(() => {
    const langFromCookie = document.cookie
      .split('; ')
      .find(row => row.startsWith('lang='))
      ?.split('=')[1];

    if (langFromCookie === 'es' || langFromCookie === 'en') {
      setLanguage(langFromCookie);
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = language === 'es' ? 'en' : 'es';
    setLanguage(newLang);
    // Set cookie to persist language choice
    document.cookie = `lang=${newLang};path=/;max-age=31536000`; // Expires in 1 year
    window.location.reload(); // Reload to apply language on server components
  };

  const t: TFunction = (key: string) => {
    const keys = key.split('.');
    let result: any = translations[language];
    for (const k of keys) {
      result = result?.[k];
      if (result === undefined) {
        // Fallback to English if translation is not found
        let fallbackResult: any = translations.en;
        for (const fk of keys) {
            fallbackResult = fallbackResult?.[fk];
        }
        return fallbackResult || key;
      }
    }
    return result || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
