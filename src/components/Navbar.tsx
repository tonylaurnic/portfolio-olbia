"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Logo, { LogoScrolled } from "@/components/Logo";
import { Lang, t } from "@/lib/i18n";

interface NavbarProps {
  lang: Lang;
  setLang: (l: Lang) => void;
}

export default function Navbar({ lang, setLang }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const handler = () => setLangOpen(false);
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);
  const tr = t[lang].nav;

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const ids = ["services", "portfolio", "about", "contact"];
    const observers = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  const links = [
    { label: tr.services, href: "#services", id: "services" },
    { label: tr.portfolio, href: "#portfolio", id: "portfolio" },
    { label: lang === "it" ? "Idee" : "Ideas", href: "/idee", id: "idee" },
    { label: tr.about, href: "#about", id: "about" },
    { label: tr.contact, href: "#contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#">
          {scrolled ? <LogoScrolled size={32} /> : <Logo size={32} />}
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`relative transition-colors hover:text-blue-400 ${
                  active === l.id
                    ? "text-blue-400"
                    : scrolled ? "text-gray-700" : "text-white/80"
                }`}
              >
                {l.label}
                {active === l.id && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {/* Language dropdown */}
          <div className="relative">
            <button
              onClick={(e) => { e.stopPropagation(); setLangOpen(!langOpen); }}
              className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border transition-colors ${
                scrolled
                  ? "border-gray-200 text-gray-700 hover:border-blue-400 bg-white"
                  : "border-white/20 text-white/80 hover:border-white/50 bg-white/5"
              }`}
            >
              {lang === "it" ? "🇮🇹 IT" : lang === "en" ? "🇬🇧 EN" : lang === "de" ? "🇩🇪 DE" : "🇷🇴 RO"}
              <svg className={`w-3 h-3 transition-transform ${langOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {langOpen && (
              <div className="absolute right-0 top-full mt-1 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50 min-w-[110px]">
                {(["it","en","de","ro"] as const).map((l) => (
                  <button
                    key={l}
                    onClick={() => { setLang(l); setLangOpen(false); }}
                    className={`w-full flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-blue-50 hover:text-blue-600 ${
                      lang === l ? "bg-blue-50 text-blue-600" : "text-gray-700"
                    }`}
                  >
                    {l === "it" ? "🇮🇹" : l === "en" ? "🇬🇧" : l === "de" ? "🇩🇪" : "🇷🇴"}
                    {l === "it" ? "Italiano" : l === "en" ? "English" : l === "de" ? "Deutsch" : "Română"}
                  </button>
                ))}
              </div>
            )}
          </div>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-1 bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            {t[lang].hero.cta}
          </a>

          {/* Mobile burger */}
          <button
            className={`md:hidden transition-colors ${scrolled ? "text-gray-800" : "text-white"}`}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`font-medium hover:text-blue-600 transition-colors ${
                active === l.id ? "text-blue-600" : "text-gray-700"
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
