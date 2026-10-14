"use client";
import { motion, useReducedMotion } from "framer-motion";
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

const featureStyles = [
  { icon: Zap, color: "from-yellow-400/20 to-orange-400/10 border-yellow-400/20" },
  { icon: Wallet, color: "from-green-400/20 to-emerald-400/10 border-green-400/20" },
  { icon: Smartphone, color: "from-blue-400/20 to-indigo-400/10 border-blue-400/20" },
  { icon: Wrench, color: "from-purple-400/20 to-pink-400/10 border-purple-400/20" },
];

const features = {
  it: [
    { title: "Sito in 5 giorni", sub: "Tempi di consegna garantiti" },
    { title: "Prezzi trasparenti", sub: "Costi fissi, nessuna sorpresa" },
    { title: "Mobile & SEO inclusi", sub: "Ottimizzato per Google" },
    { title: "Assistenza continua", sub: "Supporto dopo la consegna" },
  ],
  en: [
    { title: "Site in 5 days", sub: "Guaranteed delivery times" },
    { title: "Transparent pricing", sub: "Fixed costs, no surprises" },
    { title: "Mobile & SEO included", sub: "Optimised for Google" },
    { title: "Ongoing support", sub: "Assistance after delivery" },
  ],
  de: [
    { title: "Website in 5 Tagen", sub: "Garantierte Lieferzeiten" },
    { title: "Transparente Preise", sub: "Festpreise, keine Überraschungen" },
    { title: "Mobile & SEO inklusive", sub: "Für Google optimiert" },
    { title: "Laufender Support", sub: "Betreuung nach der Lieferung" },
  ],
  ro: [
    { title: "Site în 5 zile", sub: "Termene de livrare garantate" },
    { title: "Prețuri transparente", sub: "Costuri fixe, fără surprize" },
    { title: "Mobile & SEO incluse", sub: "Optimizat pentru Google" },
    { title: "Asistență continuă", sub: "Suport după livrare" },
  ],
};

export default function Hero({ lang }: { lang: Lang }) {
  const tr = t[lang].hero;
  const s = stats[lang];
  const reduceMotion = useReducedMotion();

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
              {lang === "it" ? "Studio digitale a Olbia" : lang === "de" ? "Digitalstudio in Olbia" : lang === "ro" ? "Studio digital în Olbia" : "Digital studio in Olbia"}
            </span>
            <span className="text-white">Qui.SiteApp</span>
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

          {/* Promo banner */}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.6, rotate: -4 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 14, delay: 0.3 }}
            className="relative block w-fit mb-6 mt-2"
          >
            <motion.div
              animate={reduceMotion ? undefined : { scale: [1, 1.04, 1] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 px-6 py-4 shadow-2xl shadow-red-900/50"
            >
              {/* Shine sweep */}
              {!reduceMotion && (
                <motion.span
                  aria-hidden
                  initial={{ x: "-150%" }}
                  animate={{ x: "250%" }}
                  transition={{ duration: 1.4, repeat: Infinity, repeatDelay: 1.6, ease: "easeInOut" }}
                  className="absolute inset-y-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                />
              )}
              <p className="relative text-2xl md:text-3xl font-black text-white uppercase tracking-tight leading-none">
                {tr.slogan}
              </p>
              <p className="relative mt-2 flex items-baseline gap-2 text-white">
                <span className="text-base md:text-lg font-semibold text-white/90">{tr.promoFrom}</span>
                <span className="text-5xl md:text-6xl font-black leading-none text-yellow-300 drop-shadow-[0_2px_0_rgba(0,0,0,0.25)]">
                  {tr.promoPrice}
                </span>
              </p>
            </motion.div>

            {/* Tag */}
            <motion.span
              animate={reduceMotion ? undefined : { rotate: [12, 6, 12] }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-3 -right-4 rotate-12 bg-yellow-300 text-red-700 text-xs font-black uppercase px-3 py-1 rounded-full shadow-lg"
            >
              {tr.promoTag}
            </motion.span>
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
                {lang === "it" ? "Online ora" : lang === "de" ? "Jetzt online" : lang === "ro" ? "Online acum" : "Online now"}
              </span>
            </div>

            {/* Feature rows */}
            {features[lang].map((item, i) => {
              const Icon = featureStyles[i].icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.12 }}
                  className={`flex items-center gap-3 bg-gradient-to-r ${featureStyles[i].color} border rounded-2xl px-4 py-3`}
                >
                  <Icon size={22} className="text-white/80 shrink-0" />
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
              className="mt-1 w-full text-center bg-blue-500 hover:bg-blue-400 text-white font-bold py-3 rounded-2xl text-sm transition-colors"
            >
              {lang === "it" ? "Preventivo gratuito →" : lang === "de" ? "Kostenloses Angebot →" : lang === "ro" ? "Ofertă gratuită →" : "Free quote →"}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
