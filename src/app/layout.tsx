import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SplashScreen from "@/components/SplashScreen";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sviluppatore Web, Mobile & SEO a Olbia | Qui.SiteApp",
  description:
    "Sviluppatore freelance a Olbia, Sardegna. Creo siti web, app mobile con Flutter e strategie SEO per far crescere la tua attività. Preventivo gratuito.",
  keywords: [
    "sviluppatore web Olbia",
    "app mobile Sardegna",
    "SEO Olbia",
    "siti web Olbia",
    "freelance Olbia",
    "Flutter developer Sardegna",
  ],
  openGraph: {
    title: "Sviluppatore Web, Mobile & SEO a Olbia",
    description:
      "Creo siti web professionali, app mobile e strategie SEO a Olbia, Sardegna.",
    locale: "it_IT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white">
        <SplashScreen />
        {children}
      </body>
    </html>
  );
}
