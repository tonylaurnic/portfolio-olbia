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
  metadataBase: new URL("https://quisiteapp.it"),
  title: "Siti Web e App a Olbia | Qui.SiteApp",
  description:
    "Qui.SiteApp, studio a Olbia, Sardegna. Realizziamo siti web, app per smartphone e lavagne elettroniche per negozi e ristoranti per far crescere la tua attività. Preventivo gratuito.",
  keywords: [
    "sviluppatore web Olbia",
    "app mobile Sardegna",
    "SEO Olbia",
    "siti web Olbia",
    "freelance Olbia",
    "Flutter developer Sardegna",
  ],
  openGraph: {
    title: "Siti Web e App a Olbia",
    description:
      "Siti web professionali, app e lavagne elettroniche per negozi e ristoranti a Olbia, Sardegna.",
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
