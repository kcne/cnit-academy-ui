import type { Metadata } from "next";
import "./globals.css";

import { UserProvider } from "./providers/userContext";
import { Providers } from "./providers/providers";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import I18nProvider from "./providers/i18nProvider";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "CNit Academy",
  description: "Cnit Academy Learning Platform",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    lng: string;
  };
}

export default function RootLayout({
  children,
  params: { lng },
}: RootLayoutProps) {
  return (
    <html lang={lng}>
      <body className={`antialiased w-screen`}>
        <Providers>
          <UserProvider>
            <I18nProvider>
              {children}
              <Toaster />
              <div className="fixed bottom-4 left-4 z-50">
                <LanguageSwitcher />
              </div>
            </I18nProvider>
          </UserProvider>
        </Providers>
      </body>
    </html>
  );
}
