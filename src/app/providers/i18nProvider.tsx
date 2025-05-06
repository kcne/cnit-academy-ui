'use client';

import { PropsWithChildren, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/config/i18n';
import { useParams } from 'next/navigation';
import { fallbackLng } from '@/config/i18nSettings';

// This provider simply ensures the i18next instance is available
// Language initialization and updates are handled in i18n.ts via Zustand
export default function I18nProvider({ children }: PropsWithChildren) {
  const params = useParams();
  const currentLng = (params?.lng || params?.locale || fallbackLng) as string;

  // Ensure language is set correctly on initial render (server and client)
  // This runs *before* children are rendered
  if (i18n.language !== currentLng) {
    i18n.changeLanguage(currentLng);
  }
  
  // Optional: Keep effect for potential updates if params change dynamically
  // (though direct language switching is handled by zustand now)
  useEffect(() => {
    if (i18n.language !== currentLng) {
      i18n.changeLanguage(currentLng);
    }
  }, [currentLng]);

  return (
    <I18nextProvider i18n={i18n}>
      {children}
    </I18nextProvider>
  );
} 