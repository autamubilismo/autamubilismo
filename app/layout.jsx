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
  title: "autamubilismo - Noticias e Artigos",
  description: "As ultimas noticias e artigos sobre automobilismo",
  openGraph: {
    title: "autamubilismo",
    description: "As ultimas noticias e artigos sobre automobilismo",
    images: ["/og-default.jpg"],
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
