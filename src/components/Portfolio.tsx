"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Lang, t } from "@/lib/i18n";
import ProjectModal, { ProjectData } from "@/components/ProjectModal";

type Project = ProjectData;

const projects: Project[] = [
  {
    title: "DentalCare Plus",
    category: { it: "Sito Web — Germania", en: "Website — Germany" },
    desc: {
      it: "Sito professionale per studio dentistico in Germania. Design moderno, multilingua DE/EN, sistema di prenotazione appuntamenti online e ottimizzazione SEO locale.",
      en: "Professional website for a dental clinic in Germany. Modern design, DE/EN multilingual, online appointment booking and local SEO optimisation.",
    },
    result: { it: "Progetto reale completato e online", en: "Real project — completed and live" },
    tags: ["Sito Web", "Multilingua", "Prenotazioni Online"],
    color: "from-sky-100 to-blue-50",
    image: "/dentalcare-plus.png",
    year: "2024",
    real: true,
    url: "https://www.dentalcare-plus.de/",
  },
  {
    title: "AndroDashCam",
    category: { it: "App Android — Play Store", en: "Android App — Play Store" },
    desc: {
      it: "App dashcam per Android pubblicata sul Google Play Store. Registrazione automatica in loop, rilevamento urti e salvataggio video in background.",
      en: "Android dashcam app published on Google Play Store. Automatic loop recording, crash detection and background video saving.",
    },
    result: { it: "App live su Google Play Store", en: "App live on Google Play Store" },
    tags: ["App Android", "Google Play Store", "Registrazione Video"],
    color: "from-gray-900 to-gray-700",
    image: "/androdashcam.png",
    year: "2024",
    real: true,
    url: "https://play.google.com/store/apps/details?id=com.stratulat.androdashcam.app",
  },
  {
    title: "DySign",
    category: { it: "App TV — Schermo Digitale per Locali", en: "TV App — Digital Screen for Venues" },
    desc: {
      it: "Il tuo schermo TV diventa uno strumento di marketing. Mostra menu, offerte, foto e promozioni — aggiorni tutto dal telefono in pochi secondi, anche mentre sei a casa.",
      en: "Your TV screen becomes a marketing tool. Show menus, offers, photos and promotions — update everything from your phone in seconds, even from home.",
    },
    result: { it: "Già in uso in ristoranti e locali in Sardegna", en: "Already in use in restaurants and venues in Sardinia" },
    tags: ["Schermo TV", "Menu Digitale", "Promozioni Live", "Aggiornamento da telefono"],
    color: "from-violet-600 to-purple-800",
    image: "/dysign-preview.png",
    year: "2025",
    real: true,
  },
];

export default function Portfolio({ lang }: { lang: Lang }) {
  const tr = t[lang].portfolio;
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="portfolio" className="py-24 px-6 bg-gray-50">
      <ProjectModal project={selected} onClose={() => setSelected(null)} lang={lang} />
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">{tr.title}</h2>
          <p className="text-lg text-gray-500">{tr.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              onClick={() => setSelected(p)}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer group flex flex-col"
            >
              {/* Cover */}
              {p.image ? (
                <div className={`bg-gradient-to-br ${p.color} h-36 flex items-center justify-center relative overflow-hidden`}>
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-contain p-4"
                  />
                  {p.real && (
                    <span className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded-full z-10">
                      {lang === "it" ? "✓ Progetto reale" : "✓ Real project"}
                    </span>
                  )}
                </div>
              ) : (
                <div className={`bg-gradient-to-br ${p.color} h-36 flex items-center justify-between px-6`}>
                  <span className="text-6xl">{p.emoji}</span>
                  <span className="text-white/70 text-xs font-semibold bg-black/20 px-2 py-1 rounded-full">{p.year}</span>
                </div>
              )}

              {/* Body */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
                    {p.category[lang]}
                  </span>
                  {p.image && (
                    <span className="text-xs text-gray-400">{p.year}</span>
                  )}
                </div>
                <h3 className="font-bold text-lg text-gray-900 mt-1 mb-2">{p.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-3 flex-1">{p.desc[lang]}</p>
                <p className="text-sm text-green-600 font-semibold mb-3">✓ {p.result[lang]}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {p.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600">
                    <ExternalLink size={14} />
                    {lang === "it" ? "Clicca per vedere →" : "Click to preview →"}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
