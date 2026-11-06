"use client";
import { motion } from "framer-motion";
import { Globe, Smartphone, Tv, Code2, ArrowRight } from "lucide-react";
import { Lang, t } from "@/lib/i18n";
import { SERVICE_KEYS, type ServiceKey } from "@/lib/services";

const icons = [Globe, Smartphone, Tv, Code2];
const seeProjects: Record<Lang, string> = {
  it: "Vedi i progetti",
  en: "See projects",
  de: "Projekte ansehen",
  ro: "Vezi proiectele",
};

export default function Services({ lang, onSelect }: { lang: Lang; onSelect: (key: ServiceKey) => void }) {
  const tr = t[lang].services;

  return (
    <section id="services" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">{tr.title}</h2>
          <p className="text-lg text-gray-500">{tr.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tr.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.button
                key={i}
                type="button"
                onClick={() => onSelect(SERVICE_KEYS[i])}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group text-left flex flex-col bg-white rounded-2xl p-6 border border-gray-200/80 hover:border-blue-200 hover:shadow-[0_12px_32px_-12px_rgba(0,114,255,0.25)] hover:-translate-y-0.5 transition-all focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-100"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br from-cyan-50 to-blue-100 text-blue-600 ring-1 ring-blue-100">
                  <Icon size={22} />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">{item.desc}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600">
                  {seeProjects[lang]}
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
