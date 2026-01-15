import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppShellWrapper } from "@/components/layout/AppShellWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Autamubilismo — Fórmula 1, automobilismo e cultura do paddock",
  description: "Autamubilismo é um espaço independente de Fórmula 1 e automobilismo, criado para informar, contextualizar e acolher. Mais do que notícias: história, dados, fandoms e paixão.",
  openGraph: {
    title: "Autamubilismo — Fórmula 1, automobilismo e cultura do paddock",
    description: "Autamubilismo é um espaço independente de Fórmula 1 e automobilismo, criado para informar, contextualizar e acolher. Mais do que notícias: história, dados, fandoms e paixão.",
    images: ["/og-default-v2.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="UTF-8" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AppShellWrapper>{children}</AppShellWrapper>
      </body>
    </html>
  );
}
