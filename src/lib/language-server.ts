import { cookies } from 'next/headers';
import { translations } from '@/lib/i18n';
import type { Language, TFunction } from '@/context/language-context';

// This function can be used in Server Components to get the language
export async function getLanguage(): Promise<Language> {
  const cookieStore = cookies();
  const langCookie = cookieStore.get('lang');
  const lang = langCookie?.value;
  if (lang === 'es' || lang === 'en') {
    return lang;
  }
  return 'en'; // Default to English
}

// This function can be used in Server Components to get the translation function
export async function getT(): Promise<TFunction> {
  const language = await getLanguage();
  return (key: string) => {
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
}
