import { ToastSetup } from "@/lib/toast";
import { TooltipSetup } from "@/lib/tooltip";
import type { Metadata } from "next";
import { sansMono } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Enzo Mariotto",
  description: "Portfólio de Enzo Mariotto - Desenvolvedor Fullstack",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={sansMono.className}>
        {children}
        <TooltipSetup />
        <ToastSetup />
      </body>
    </html>
  );
}
