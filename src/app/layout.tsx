import type { Metadata } from "next";
import "./globals.css";
import { UserProvider } from "./providers/userContext";
import { Providers } from "./providers/providers";

export const metadata: Metadata = {
  title: "CNit Academy",
  description: "Cnit Academy Learning Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased w-screen`}>
        <Providers>
          <UserProvider>
            {children}
          </UserProvider>
        </Providers>
      </body>
    </html>
  );
}
