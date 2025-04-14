import type { Metadata } from "next";
import "./globals.css";
import { UserProvider } from "./context/userContext";
import ResponsiveNav from "./components/Navbar";


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
      <body
        className={`antialiased w-screen`}
      >
      <UserProvider>
      <ResponsiveNav/>
          {children}
      </UserProvider>
      </body>
    </html>
  );
}
