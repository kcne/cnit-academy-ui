import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { fallbackLng, languages } from '@/config/i18nSettings';

interface LanguageState {
  language: string;
  setLanguage: (lang: string) => void;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      language: fallbackLng,
      setLanguage: (lang: string) => {
        if (languages.includes(lang)) {
          set({ language: lang });
        } else {
          console.warn(`Attempted to set unsupported language: ${lang}`);
          set({ language: fallbackLng }); // Fallback to default if unsupported
        }
      },
    }),
    {
      name: 'language-storage', // Name of the item in storage (must be unique)
      storage: createJSONStorage(() => localStorage), // Use localStorage for persistence
    }
  )
); 