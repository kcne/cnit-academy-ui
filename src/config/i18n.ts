'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import resourcesToBackend from 'i18next-resources-to-backend';
import { useLanguageStore } from '@/store/languageStore';
import { fallbackLng, languages } from '@/config/i18nSettings';

// Import translation files directly
import en from '../../public/locales/en/common.json';
import sr from '../../public/locales/sr/common.json';

// Skip initialization if i18next is already initialized
if (!i18n.isInitialized) {
  const resources = {
    en: {
      common: en,
    },
    sr: {
      common: sr,
    },
  };

  i18n
    .use(initReactI18next)
    // LanguageDetector is used mainly for initial detection if no language is specified
    // and to potentially set the initial Zustand state if needed, though our middleware handles redirection.
    .use(LanguageDetector) 
    .init({
      resources,
      fallbackLng: fallbackLng,
      // lng: initialLanguage, // Removed: Initial language is set by I18nProvider
      defaultNS: 'common',
      supportedLngs: languages,
      interpolation: {
        escapeValue: false,
      },
      react: {
        useSuspense: false,
      },
      // Configuration for LanguageDetector
      detection: {
        // Order and from where user language should be detected
        order: ['path', 'localStorage', 'navigator', 'htmlTag', 'cookie'],
        // Cache user language preference in localStorage
        caches: ['localStorage'],
        // Specify the name of the cache item
        lookupLocalStorage: 'language-storage', 
      },
    });
}

// Subscribe to Zustand store changes to update i18n language
if (typeof window !== 'undefined') {
  useLanguageStore.subscribe((state) => {
    if (i18n.language !== state.language) {
      i18n.changeLanguage(state.language);
    }
  });
}

export default i18n; 