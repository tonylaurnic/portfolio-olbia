"use client";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Rocket, Shield, Clock } from "lucide-react";
import { Lang } from "@/lib/i18n";

const perks = {
  it: [
    { icon: Rocket, title: "Consegna rapida", desc: "Sito pronto in 5 giorni lavorativi" },
    { icon: Shield, title: "Prezzi fissi", desc: "Nessuna sorpresa in fattura" },
    { icon: Clock, title: "Sempre disponibile", desc: "Rispondo entro poche ore" },
    { icon: MessageCircle, title: "Supporto incluso", desc: "Assistenza post-consegna" },
  ],
  en: [
    { icon: Rocket, title: "Fast delivery", desc: "Site ready in 5 working days" },
    { icon: Shield, title: "Fixed prices", desc: "No surprises on the invoice" },
    { icon: Clock, title: "Always available", desc: "I reply within a few hours" },
    { icon: MessageCircle, title: "Support included", desc: "Post-delivery assistance" },
  ],
};

export default function Testimonials({ lang }: { lang: Lang }) {
  const items = perks[lang];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Perks grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-3">
                  <Icon size={22} />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 px-8 py-14 text-center"
        >
          {/* Decorative blobs */}
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/5 rounded-full blur-2xl" />
          <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-cyan-400/10 rounded-full blur-2xl" />

          <div className="relative z-10">
            <p className="text-blue-200 font-medium mb-3 text-sm uppercase tracking-widest">
              {lang === "it" ? "Hai un progetto in mente?" : "Got a project in mind?"}
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
              {lang === "it" ? "Lavoriamo insieme." : "Let's work together."}
            </h2>
            <p className="text-blue-200 text-lg mb-8 max-w-xl mx-auto">
              {lang === "it"
                ? "Preventivo gratuito in 24h. Nessun impegno, nessuna complicazione."
                : "Free quote in 24h. No commitment, no complications."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors text-lg shadow-xl"
              >
                {lang === "it" ? "Inizia ora" : "Get started"}
                <ArrowRight size={20} />
              </a>
              <a
                href={`https://wa.me/393883879487?text=${encodeURIComponent(lang === "it" ? "Ciao Antoniu! Vorrei un preventivo." : "Hi Antoniu! I'd like a quote.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl transition-colors text-lg"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
