import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";

import { Toaster } from "@/components/ui/sonner";

import "@/styles/globals.css";
import "@fontsource/joti-one";
import { Head } from "@/layouts/head";

export const metadata: Metadata = {
  title: "Cloudinary Hackathon Halloween",
  description: "Powered by Next.js and Cloudinary",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Head />
          <main className="max-w-screen-lg mx-auto p-4">{children}</main>
          <Toaster richColors closeButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
