"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Calendar, Coffee } from "lucide-react";
import { Lang, t } from "@/lib/i18n";

const skills = {
  it: ["Siti Web", "App iOS & Android", "App per TV & Schermi Digitali", "Design UI/UX", "E-commerce", "Sistemi Gestionali", "Intelligenza Artificiale", "Digital Signage"],
  en: ["Websites", "iOS & Android Apps", "TV & Digital Signage Apps", "UI/UX Design", "E-commerce", "Management Systems", "Artificial Intelligence", "Digital Signage"],
  de: ["Websites", "iOS & Android Apps", "TV & Digital Signage Apps", "UI/UX Design", "E-Commerce", "Verwaltungssysteme", "Künstliche Intelligenz", "Digital Signage"],
  ro: ["Site-uri Web", "App iOS & Android", "App TV & Digital Signage", "Design UI/UX", "E-commerce", "Sisteme de Gestiune", "Inteligență Artificială", "Digital Signage"],
};

const facts = {
  it: [
    { icon: MapPin, text: "Olbia, Sardegna" },
    { icon: Calendar, text: "5+ anni come sviluppatore" },
    { icon: Coffee, text: "18 anni come sushiman 🍣" },
  ],
  en: [
    { icon: MapPin, text: "Olbia, Sardinia" },
    { icon: Calendar, text: "5+ years as developer" },
    { icon: Coffee, text: "18 years as sushiman 🍣" },
  ],
  de: [
    { icon: MapPin, text: "Olbia, Sardinien" },
    { icon: Calendar, text: "5+ Jahre als Entwickler" },
    { icon: Coffee, text: "18 Jahre als Sushiman 🍣" },
  ],
  ro: [
    { icon: MapPin, text: "Olbia, Sardinia" },
    { icon: Calendar, text: "5+ ani ca dezvoltator" },
    { icon: Coffee, text: "18 ani ca sushiman 🍣" },
  ],
};

export default function About({ lang }: { lang: Lang }) {
  const tr = t[lang].about;

  return (
    <section id="about" className="py-24 px-6 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white mb-3">{tr.title}</h2>
          <p className="text-slate-400 text-lg">
            {lang === "it" ? "La persona dietro ai progetti" : "The person behind the projects"}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

          {/* Photo + facts */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center lg:items-start gap-6"
          >
            <div className="relative">
              <div className="w-52 h-52 rounded-3xl overflow-hidden border-4 border-blue-500/30 shadow-2xl">
                <Image
                  src="/profile.jpg"
                  alt="Antoniu Laurentiu Stratulat"
                  fill
                  className="object-cover object-center"
                />
              </div>
              {/* Online badge */}
              <div className="absolute -bottom-3 -right-3 bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                {lang === "it" ? "Disponibile" : lang === "de" ? "Verfügbar" : lang === "ro" ? "Disponibil" : "Available"}
              </div>
            </div>

            <div>
              <h3 className="text-white font-extrabold text-2xl">Antoniu Laurentiu</h3>
              <p className="text-blue-400 font-medium">Stratulat</p>
            </div>

            <div className="space-y-3 w-full">
              {facts[lang].map((f, i) => {
                const Icon = f.icon;
                return (
                  <div key={i} className="flex items-center gap-3 text-slate-300 text-sm">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center shrink-0">
                      <Icon size={14} className="text-blue-400" />
                    </div>
                    {f.text}
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Bio + tags */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-1"
          >
            <h3 className="text-white font-bold text-lg mb-4 border-l-4 border-blue-500 pl-3">
              {lang === "it" ? "La mia storia" : "My story"}
            </h3>
            <p className="text-slate-300 leading-relaxed mb-4">{tr.p1}</p>
            <p className="text-slate-300 leading-relaxed mb-6">{tr.p2}</p>

          </motion.div>

          {/* Skills as checkmarks */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-white font-bold text-lg mb-6 border-l-4 border-blue-500 pl-3">
              {tr.skills}
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {skills[lang].map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.07 }}
                  className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3"
                >
                  <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-200 text-sm font-medium">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
