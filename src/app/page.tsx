"use client";
import { useState } from "react";
import { Lang } from "@/lib/i18n";
import type { ServiceKey } from "@/lib/services";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";

export default function Home() {
  const [lang, setLang] = useState<Lang>("it");
  const [category, setCategory] = useState<ServiceKey | null>(null);
  // A service card filters the portfolio to that category and jumps there.
  const showCategory = (key: ServiceKey) => {
    setCategory(key);
    document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar lang={lang} setLang={setLang} />
      <main>
        <Hero lang={lang} />
        <Services lang={lang} onSelect={showCategory} />
        <HowItWorks lang={lang} />
        <About lang={lang} />
        <Testimonials lang={lang} />
        <Pricing lang={lang} />
        <Contact lang={lang} />
        <Portfolio lang={lang} category={category} setCategory={setCategory} />
      </main>
      <Footer lang={lang} />
    </>
  );
}
