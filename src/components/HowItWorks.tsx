"use client";
import { motion } from "framer-motion";
import { Phone, FileText, Rocket } from "lucide-react";
import { Lang } from "@/lib/i18n";

const steps = {
  it: [
    {
      icon: Phone,
      number: "01",
      title: "Chiamata gratuita",
      desc: "Mi racconti il tuo progetto in una chiamata o su WhatsApp. Nessun impegno, nessun costo.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: FileText,
      number: "02",
      title: "Preventivo in 24h",
      desc: "Ricevi un preventivo chiaro e dettagliato entro 24 ore. Prezzi fissi, nessuna sorpresa.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Rocket,
      number: "03",
      title: "Si parte!",
      desc: "Iniziamo a lavorare. Ti aggiorno ad ogni step e consegno nei tempi concordati.",
      color: "bg-green-100 text-green-600",
    },
  ],
  en: [
    {
      icon: Phone,
      number: "01",
      title: "Free call",
      desc: "Tell me about your project in a call or on WhatsApp. No commitment, no cost.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: FileText,
      number: "02",
      title: "Quote in 24h",
      desc: "You receive a clear, detailed quote within 24 hours. Fixed prices, no surprises.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Rocket,
      number: "03",
      title: "Let's go!",
      desc: "We start working. I update you at every step and deliver on time.",
      color: "bg-green-100 text-green-600",
    },
  ],
};

const titles = {
  it: { title: "Come funziona", subtitle: "Semplice, veloce, trasparente" },
  en: { title: "How it works", subtitle: "Simple, fast, transparent" },
};

export default function HowItWorks({ lang }: { lang: Lang }) {
  const items = steps[lang];
  const { title, subtitle } = titles[lang];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">{title}</h2>
          <p className="text-lg text-gray-500">{subtitle}</p>
        </div>

        <div className="relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-12 left-[16.66%] right-[16.66%] h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-green-200" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {items.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.15 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="relative mb-6">
                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center ${step.color} shadow-sm`}>
                      <Icon size={32} />
                    </div>
                    <span className="absolute -top-2 -right-2 w-6 h-6 bg-gray-900 text-white text-xs font-bold rounded-full flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="font-bold text-xl text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA below steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg shadow-lg shadow-blue-100"
          >
            {lang === "it" ? "Inizia ora — è gratis" : "Start now — it's free"}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
