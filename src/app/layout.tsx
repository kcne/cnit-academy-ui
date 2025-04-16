import type { Metadata } from "next";
import "./globals.css";
import { UserProvider } from "./context/userContext";
import ResponsiveNav from "./components/Navbar";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { Providers } from "./providers";

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
            <ResponsiveNav />
            {children}
          </UserProvider>
        </Providers>
      </body>
    </html>
  );
}
