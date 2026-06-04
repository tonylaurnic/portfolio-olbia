"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Calendar, Coffee } from "lucide-react";
import { Lang, t } from "@/lib/i18n";

const skills = [
  { name: "Siti Web moderni e veloci", level: 90 },
  { name: "App iOS & Android", level: 85 },
  { name: "App per TV & schermi digitali", level: 82 },
  { name: "Design semplice e professionale", level: 80 },
  { name: "Sistemi gestionali su misura", level: 78 },
  { name: "E-commerce e negozi online", level: 75 },
];

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

            <div className="flex flex-wrap gap-2">
              {["Siti Web", "App Mobile", "App per TV", "E-commerce", "Negozi Online", "Digital Signage", "Design UI", "Sistemi Gestionali"].map((tech) => (
                <span key={tech} className="bg-blue-500/15 text-blue-300 text-sm font-medium px-3 py-1 rounded-full border border-blue-500/20">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Skill bars */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-white font-bold text-lg mb-6 border-l-4 border-blue-500 pl-3">
              {tr.skills}
            </h3>
            <div className="space-y-5">
              {skills.map((s, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="font-medium text-slate-200">{s.name}</span>
                    <span className="text-slate-400">{s.level}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.1 }}
                      className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
