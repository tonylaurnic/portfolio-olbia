"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MapPin, Star, Briefcase, Users } from "lucide-react";
import { useState, useEffect } from "react";
import { Lang, t } from "@/lib/i18n";

const roles = {
  it: ["Sviluppatore Web", "App Mobile", "Digital Signage", "Software Custom"],
  en: ["Web Developer", "Mobile Apps", "Digital Signage", "Custom Software"],
};

const stats = {
  it: [
    { icon: Briefcase, value: "20+", label: "Progetti" },
    { icon: Star, value: "5★", label: "Recensioni" },
    { icon: Users, value: "15+", label: "Clienti" },
  ],
  en: [
    { icon: Briefcase, value: "20+", label: "Projects" },
    { icon: Star, value: "5★", label: "Reviews" },
    { icon: Users, value: "15+", label: "Clients" },
  ],
};

export default function Hero({ lang }: { lang: Lang }) {
  const tr = t[lang].hero;
  const s = stats[lang];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles[lang].length);
    }, 2200);
    return () => clearInterval(interval);
  }, [lang]);

  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900 px-6 pt-16 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16">

        {/* Left — text */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 text-sm font-medium px-3 py-1 rounded-full mb-6 border border-green-500/30"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            {tr.badge}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4"
          >
            <span className="text-slate-400 text-2xl md:text-3xl font-medium block mb-2">
              {lang === "it" ? "👋 Ciao, sono" : "👋 Hi, I'm"}
            </span>
            <span className="text-white">Antoniu</span>{" "}
            <br className="hidden md:block" />
            <span className="relative inline-block">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.35 }}
                  className="text-blue-400 inline-block"
                >
                  {roles[lang][roleIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-1 text-blue-400 font-medium mb-5"
          >
            <MapPin size={16} />
            <span>{tr.location}</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-slate-300 mb-10 leading-relaxed max-w-lg"
          >
            {tr.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg shadow-lg shadow-blue-900"
            >
              {tr.cta}
              <ArrowRight size={20} />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 transition-colors text-lg"
            >
              {tr.ctaSecondary}
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex gap-8"
          >
            {s.map((st, i) => {
              const Icon = st.icon;
              return (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-lg bg-blue-500/20 flex items-center justify-center">
                    <Icon size={16} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-white font-bold leading-none">{st.value}</p>
                    <p className="text-slate-400 text-xs mt-0.5">{st.label}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Right — value widget */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative flex justify-center items-center"
        >
          {/* Glow */}
          <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full" />

          {/* Main card */}
          <div className="relative w-80 bg-white/5 border border-white/10 backdrop-blur-sm rounded-3xl p-6 shadow-2xl flex flex-col gap-4">

            {/* Header */}
            <div className="flex items-center justify-between mb-2">
              <span className="text-white/50 text-xs font-medium uppercase tracking-widest">Qui.SiteApp</span>
              <span className="flex items-center gap-1.5 text-green-400 text-xs font-semibold">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                {lang === "it" ? "Online ora" : "Online now"}
              </span>
            </div>

            {/* Feature rows */}
            {[
              { emoji: "⚡", title: lang === "it" ? "Sito in 5 giorni" : "Site in 5 days", sub: lang === "it" ? "Consegna rapida garantita" : "Fast delivery guaranteed", color: "from-yellow-400/20 to-orange-400/10 border-yellow-400/20" },
              { emoji: "💶", title: lang === "it" ? "Costi minimi" : "Minimal costs", sub: lang === "it" ? "Prezzi fissi, nessuna sorpresa" : "Fixed prices, no surprises", color: "from-green-400/20 to-emerald-400/10 border-green-400/20" },
              { emoji: "📱", title: lang === "it" ? "Mobile & SEO inclusi" : "Mobile & SEO included", sub: lang === "it" ? "Ottimizzato per Google" : "Optimised for Google", color: "from-blue-400/20 to-indigo-400/10 border-blue-400/20" },
              { emoji: "🛠️", title: lang === "it" ? "Supporto continuo" : "Ongoing support", sub: lang === "it" ? "Sempre disponibile per te" : "Always here for you", color: "from-purple-400/20 to-pink-400/10 border-purple-400/20" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.12 }}
                className={`flex items-center gap-3 bg-gradient-to-r ${item.color} border rounded-2xl px-4 py-3`}
              >
                <span className="text-2xl">{item.emoji}</span>
                <div>
                  <p className="text-white font-bold text-sm leading-tight">{item.title}</p>
                  <p className="text-white/50 text-xs mt-0.5">{item.sub}</p>
                </div>
              </motion.div>
            ))}

            {/* CTA inside card */}
            <motion.a
              href="#contact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="mt-1 w-full text-center bg-blue-500 hover:bg-blue-400 text-white font-bold py-3 rounded-2xl text-sm transition-colors"
            >
              {lang === "it" ? "Preventivo gratuito →" : "Free quote →"}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
