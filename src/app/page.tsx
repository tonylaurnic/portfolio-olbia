"use client";
import { useState } from "react";
import { Lang } from "@/lib/i18n";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HowItWorks from "@/components/HowItWorks";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  const [lang, setLang] = useState<Lang>("it");

  return (
    <>
      <Navbar lang={lang} setLang={setLang} />
      <main>
        <Hero lang={lang} />
        <Services lang={lang} />
        <HowItWorks lang={lang} />
        <Portfolio lang={lang} />
        <About lang={lang} />
        <Testimonials lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
      <WhatsAppFloat lang={lang} />
    </>
  );
}
