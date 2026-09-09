import { createContext, useContext, useState, useCallback } from 'react';

import es from './es.json';
import en from './en.json';
import pt from './pt.json';
import ger from './ger.json';

// ─── Constantes ──────────────────────────────────────────────────────────────

const TRANSLATIONS = { es, en, pt, ger };

export const SUPPORTED_LANGUAGES = [
  { code: 'es', label: 'ES', name: 'Español' },
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'pt', label: 'PT', name: 'Português' },
  { code: 'ger', label: 'GER', name: 'Deutsch' },
];

const DEFAULT_LANGUAGE = 'es';

// ─── Helpers ─────────────────────────────────────────────────────────────────

/**
 * Resuelve una clave anidada tipo "home.hero.title" en el objeto de traducciones.
 * Si la clave no existe, devuelve la propia clave como fallback.
 */
function resolvePath(obj, path) {
  return path.split('.').reduce((acc, key) => {
    if (acc && typeof acc === 'object' && key in acc) return acc[key];
    return undefined;
  }, obj) ?? path;
}

// ─── Context ─────────────────────────────────────────────────────────────────

const I18nContext = createContext(null);

// ─── Provider ────────────────────────────────────────────────────────────────

export function I18nProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('terra-brasilis-lang');
    if (saved && SUPPORTED_LANGUAGES.some((lang) => lang.code === saved)) {
      document.documentElement.lang = saved;
      return saved;
    }
    document.documentElement.lang = DEFAULT_LANGUAGE;
    return DEFAULT_LANGUAGE;
  });

  const t = useCallback(
    (key) => resolvePath(TRANSLATIONS[language], key),
    [language]
  );

  const changeLanguage = useCallback((code) => {
    if (SUPPORTED_LANGUAGES.some((lang) => lang.code === code)) {
      setLanguage(code);
      localStorage.setItem('terra-brasilis-lang', code);
      document.documentElement.lang = code;
    }
  }, []);

  return (
    <I18nContext.Provider value={{ language, changeLanguage, t, SUPPORTED_LANGUAGES }}>
      {children}
    </I18nContext.Provider>
  );
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

/**
 * Hook para acceder al sistema de internacionalización.
 *
 * @returns {{ t: (key: string) => string, language: string, changeLanguage: (code: string) => void, SUPPORTED_LANGUAGES: Array }}
 *
 * @example
 * const { t, language, changeLanguage } = useTranslation();
 * return <h1>{t('inicio.hero.title')}</h1>;
 */
export function useTranslation() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useTranslation debe usarse dentro de <I18nProvider>');
  return ctx;
}
