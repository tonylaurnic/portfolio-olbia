"use client";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Star, Briefcase, Users, Zap, Wallet, Smartphone, Wrench } from "lucide-react";
import { Lang, t } from "@/lib/i18n";

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
  de: [
    { icon: Briefcase, value: "20+", label: "Projekte" },
    { icon: Star, value: "5★", label: "Bewertungen" },
    { icon: Users, value: "15+", label: "Kunden" },
  ],
  ro: [
    { icon: Briefcase, value: "20+", label: "Proiecte" },
    { icon: Star, value: "5★", label: "Recenzii" },
    { icon: Users, value: "15+", label: "Clienți" },
  ],
};

const featureIcons = [Zap, Wallet, Smartphone, Wrench];

const features = {
  it: [
    { title: "Siti semplici in 5–7 giorni", sub: "Giorni lavorativi, dall'avvio del progetto" },
    { title: "Prezzi trasparenti", sub: "Costi fissi, nessuna sorpresa" },
    { title: "Perfetto su smartphone", sub: "E ottimizzato per Google" },
    { title: "Assistenza continua", sub: "Supporto dopo la consegna" },
  ],
  en: [
    { title: "Simple sites in 5–7 days", sub: "Working days, from project start" },
    { title: "Transparent pricing", sub: "Fixed costs, no surprises" },
    { title: "Great on smartphones", sub: "And optimised for Google" },
    { title: "Ongoing support", sub: "Assistance after delivery" },
  ],
  de: [
    { title: "Einfache Websites in 5–7 Tagen", sub: "Werktage ab Projektstart" },
    { title: "Transparente Preise", sub: "Festpreise, keine Überraschungen" },
    { title: "Perfekt auf dem Smartphone", sub: "Und für Google optimiert" },
    { title: "Laufender Support", sub: "Betreuung nach der Lieferung" },
  ],
  ro: [
    { title: "Site-uri simple în 5–7 zile", sub: "Zile lucrătoare, de la începerea proiectului" },
    { title: "Prețuri transparente", sub: "Costuri fixe, fără surprize" },
    { title: "Perfect pe smartphone", sub: "Și optimizat pentru Google" },
    { title: "Asistență continuă", sub: "Suport după livrare" },
  ],
};

export default function Hero({ lang }: { lang: Lang }) {
  const tr = t[lang].hero;
  const s = stats[lang];

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-[#070d1f] px-6 pt-16 overflow-hidden">
      {/* Brand glows + faint grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 right-[-10%] w-[640px] h-[640px] rounded-full bg-blue-600/25 blur-[120px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[520px] h-[520px] rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.6)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      </div>
      <div className="relative max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16">

        {/* Left — text */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/[0.04] text-slate-300 text-sm font-medium px-3.5 py-1.5 rounded-full mb-8 border border-white/10"
          >
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            {tr.badge}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6"
          >
            <span className="flex items-center gap-3 text-cyan-300/90 text-xs md:text-sm font-semibold uppercase tracking-[0.25em] mb-4">
              <span className="h-px w-8 bg-cyan-300/60" />
              {lang === "it" ? "Studio digitale a Olbia" : lang === "de" ? "Digitalstudio in Olbia" : lang === "ro" ? "Studio digital în Olbia" : "Digital studio in Olbia"}
            </span>
            <span className="block text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight">
              <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">Qui.Site</span>
              <span className="text-white">App</span>
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-1.5 text-slate-400 text-sm font-medium mb-8"
          >
            <MapPin size={15} className="text-cyan-400" />
            <span>{tr.location}</span>
          </motion.div>

          {/* Promo: refined price card in brand colours */}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="group relative flex w-fit items-center gap-5 mb-8 rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-white/[0.07] to-white/[0.02] px-5 py-4 backdrop-blur-sm hover:border-cyan-300/50 transition-colors"
          >
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-300">{tr.promoTag}</p>
              <p className="mt-1 text-lg md:text-xl font-semibold text-white">{tr.slogan}</p>
            </div>
            <span className="h-12 w-px bg-white/15" />
            <div>
              <p className="text-xs text-slate-400">{tr.promoFrom}</p>
              <p className="text-4xl md:text-5xl font-bold leading-none tracking-tight bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                {tr.promoPrice}
              </p>
            </div>
            <ArrowRight size={18} className="text-cyan-300/70 group-hover:translate-x-1 transition-transform" />
          </motion.a>

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
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors shadow-[0_10px_30px_-10px_rgba(0,114,255,0.7)]"
            >
              {tr.cta}
              <ArrowRight size={18} />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap bg-white/[0.04] hover:bg-white/10 text-white font-semibold px-7 py-3.5 rounded-xl border border-white/15 transition-colors"
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
                  <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center">
                    <Icon size={16} className="text-cyan-300" />
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
          <div className="absolute inset-0 bg-blue-500/15 blur-3xl rounded-full" />

          {/* Main card */}
          <div className="relative w-80 bg-gradient-to-b from-white/[0.08] to-white/[0.03] border border-white/10 backdrop-blur-md rounded-3xl p-6 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] flex flex-col gap-3">

            {/* Header */}
            <div className="flex items-center justify-between mb-2">
              <span className="text-white/50 text-xs font-medium uppercase tracking-widest">Qui.SiteApp</span>
              <span className="flex items-center gap-1.5 text-green-400 text-xs font-semibold">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                {lang === "it" ? "Online ora" : lang === "de" ? "Jetzt online" : lang === "ro" ? "Online acum" : "Online now"}
              </span>
            </div>

            {/* Feature rows */}
            {features[lang].map((item, i) => {
              const Icon = featureIcons[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.12 }}
                  className="flex items-center gap-3 bg-white/[0.03] border border-white/[0.08] rounded-2xl px-4 py-3"
                >
                  <span className="w-9 h-9 shrink-0 rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 border border-cyan-300/20 flex items-center justify-center">
                    <Icon size={17} className="text-cyan-300" />
                  </span>
                  <div>
                    <p className="text-white font-bold text-sm leading-tight">{item.title}</p>
                    <p className="text-white/50 text-xs mt-0.5">{item.sub}</p>
                  </div>
                </motion.div>
              );
            })}

            {/* CTA inside card */}
            <motion.a
              href="#contact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="mt-2 w-full text-center bg-white text-[#070d1f] hover:bg-cyan-50 font-semibold py-3 rounded-2xl text-sm transition-colors"
            >
              {lang === "it" ? "Preventivo gratuito →" : lang === "de" ? "Kostenloses Angebot →" : lang === "ro" ? "Ofertă gratuită →" : "Free quote →"}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
