"use client";
import { motion } from "framer-motion";
import { MessageCircle, Mail } from "lucide-react";
import { Lang } from "@/lib/i18n";

const WHATSAPP_NUMBER = "393883879487";
const EMAIL = "info@quisiteapp.it";

const content: Record<Lang, { title: string; subtitle: string; whatsapp: string; message: string }> = {
  it: {
    title: "Richiedi un preventivo",
    subtitle: "Scrivici su WhatsApp e raccontaci il tuo progetto: riceverai entro 24 ore un preventivo gratuito.",
    whatsapp: "Scrivici su WhatsApp",
    message: "Buongiorno, ho visitato il sito Qui.SiteApp e vorrei richiedere un preventivo.",
  },
  en: {
    title: "Request a quote",
    subtitle: "Message us on WhatsApp and tell us about your project: you will receive a free quote within 24 hours.",
    whatsapp: "Message us on WhatsApp",
    message: "Hello, I visited the Qui.SiteApp website and would like to request a quote.",
  },
  de: {
    title: "Angebot anfordern",
    subtitle: "Schreiben Sie uns auf WhatsApp und erzählen Sie uns von Ihrem Projekt: Sie erhalten innerhalb von 24 Stunden ein kostenloses Angebot.",
    whatsapp: "Auf WhatsApp schreiben",
    message: "Guten Tag, ich habe die Website von Qui.SiteApp besucht und möchte ein Angebot anfordern.",
  },
  ro: {
    title: "Solicită o ofertă",
    subtitle: "Scrie-ne pe WhatsApp și povestește-ne despre proiectul tău: vei primi o ofertă gratuită în 24 de ore.",
    whatsapp: "Scrie-ne pe WhatsApp",
    message: "Bună ziua, am vizitat site-ul Qui.SiteApp și aș dori să solicit o ofertă.",
  },
};

export default function Contact({ lang }: { lang: Lang }) {
  const tr = content[lang];

  return (
    <section id="contact" className="py-24 px-6 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-4xl font-extrabold text-gray-900 mb-3">{tr.title}</h2>
        <p className="text-gray-500 text-lg mb-8">{tr.subtitle}</p>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(tr.message)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-bold px-10 py-4 rounded-2xl transition-colors shadow-lg shadow-green-100"
        >
          <MessageCircle size={20} />
          {tr.whatsapp}
        </a>
        <a
          href={`mailto:${EMAIL}`}
          className="mt-6 text-gray-500 hover:text-blue-600 text-sm flex items-center justify-center gap-1 transition-colors"
        >
          <Mail size={14} />
          {EMAIL}
        </a>
      </motion.div>
    </section>
  );
}
