"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { LogoScrolled } from "@/components/Logo";

const categories = [
  {
    emoji: "🍽️",
    title: "Ristorazione",
    color: "from-orange-500 to-red-500",
    bg: "bg-orange-50 border-orange-100",
    items: [
      "Menu QR Interattivo",
      "Prenotazioni Online",
      "Ordinazioni dal Tavolo",
      "Programma Fedeltà",
      "Food Cost Manager",
      "Gestione Magazzino",
      "Assistente AI per Clienti",
      "Gestione Recensioni",
      "Digital Menu Board",
      "Gestione Eventi",
    ],
  },
  {
    emoji: "🏖️",
    title: "Beach Club",
    color: "from-cyan-500 to-blue-500",
    bg: "bg-cyan-50 border-cyan-100",
    items: [
      "Prenotazione Ombrelloni",
      "Ordini dal Lettino",
      "Abbonamenti Stagionali",
      "Gestione Eventi",
      "Digital Signage",
      "App Cliente",
    ],
  },
  {
    emoji: "🏨",
    title: "Hotel & B&B",
    color: "from-indigo-500 to-purple-500",
    bg: "bg-indigo-50 border-indigo-100",
    items: [
      "Check-in Digitale",
      "Concierge AI",
      "Gestione Prenotazioni",
      "Guida Turistica Digitale",
      "Richiesta Servizi in Camera",
      "Raccolta Feedback",
    ],
  },
  {
    emoji: "🛍️",
    title: "Negozi e Retail",
    color: "from-pink-500 to-rose-500",
    bg: "bg-pink-50 border-pink-100",
    items: [
      "Gestione Inventario",
      "Catalogo Digitale",
      "Fidelity Card",
      "Gestione Offerte",
      "Confronto Prezzi",
      "Prenotazione Prodotti",
    ],
  },
  {
    emoji: "🤖",
    title: "Intelligenza Artificiale",
    color: "from-violet-500 to-purple-600",
    bg: "bg-violet-50 border-violet-100",
    items: [
      "Chatbot Aziendale",
      "Assistente WhatsApp",
      "Supporto Clienti Automatico",
      "Generazione Contenuti",
      "Creazione Post Social",
      "Risposte Automatiche Email",
    ],
  },
  {
    emoji: "📄",
    title: "OCR e Documenti",
    color: "from-yellow-500 to-orange-400",
    bg: "bg-yellow-50 border-yellow-100",
    items: [
      "Scanner Scontrini",
      "Scanner Fatture",
      "Lettura Documenti",
      "Archiviazione Automatica",
      "Ricerca Testuale nei Documenti",
      "Estrazione Dati da PDF",
      "Inventario da Fotografie",
    ],
  },
  {
    emoji: "🚚",
    title: "Logistica e Magazzino",
    color: "from-green-500 to-emerald-500",
    bg: "bg-green-50 border-green-100",
    items: [
      "Gestione Consegne",
      "Tracciamento Veicoli",
      "Gestione Ordini",
      "Scanner Codici a Barre",
      "Controllo Merci Ricevute",
    ],
  },
  {
    emoji: "🚗",
    title: "Automotive",
    color: "from-gray-600 to-gray-800",
    bg: "bg-gray-50 border-gray-200",
    items: [
      "Dash Cam Personalizzata",
      "Gestione Flotte",
      "Registro Viaggi",
      "Monitoraggio GPS",
      "Report Veicoli",
    ],
  },
  {
    emoji: "🏥",
    title: "Studi Professionali",
    color: "from-teal-500 to-cyan-600",
    bg: "bg-teal-50 border-teal-100",
    items: [
      "Gestione Appuntamenti",
      "Promemoria Automatici",
      "Archivio Documentale",
      "Gestione Clienti",
      "Preventivi Digitali",
    ],
  },
  {
    emoji: "📺",
    title: "Digital Signage",
    color: "from-purple-500 to-indigo-600",
    bg: "bg-purple-50 border-purple-100",
    items: [
      "Gestione Monitor Remoti",
      "Pubblicità Dinamica",
      "Menu Digitali",
      "Comunicazioni Aziendali",
      "Informazioni in Tempo Reale",
      "Programmazione Contenuti",
    ],
  },
  {
    emoji: "📱",
    title: "App Mobile",
    color: "from-blue-500 to-indigo-500",
    bg: "bg-blue-50 border-blue-100",
    items: [
      "App Aziendale",
      "Marketplace",
      "Gestione Prenotazioni",
      "Social Network Verticali",
      "App Fitness",
      "App Educative",
      "App per Eventi",
      "App per Associazioni",
    ],
  },
  {
    emoji: "🌐",
    title: "Siti Web e Portali",
    color: "from-sky-500 to-blue-600",
    bg: "bg-sky-50 border-sky-100",
    items: [
      "Siti Aziendali",
      "E-commerce",
      "Portali Turistici",
      "Directory Aziendali",
      "Landing Page",
      "Piattaforme SaaS",
      "Portali di Prenotazione",
    ],
  },
];

const deliverables = [
  "Analisi del progetto",
  "Design UI/UX",
  "Sviluppo Flutter / Web",
  "Backend e Database",
  "Intelligenza Artificiale",
  "Pubblicazione Android / iOS / Web",
  "Assistenza e manutenzione",
];

export default function Idee() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/"><LogoScrolled size={28} /></Link>
          <div className="flex items-center gap-4">
            <Link href="/#contact" className="hidden md:flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors">
              Richiedi una consulenza gratuita <ArrowRight size={14} />
            </Link>
            <Link href="/" className="text-sm text-gray-500 hover:text-gray-800 transition-colors">← Home</Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900 py-20 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block bg-blue-500/20 text-blue-300 text-sm font-semibold px-4 py-1.5 rounded-full border border-blue-500/30 mb-6">
            💡 Idee e Soluzioni Digitali
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Hai un'idea?<br />
            <span className="text-blue-400">Posso realizzarla.</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8">
            App mobile, piattaforme web, sistemi AI, OCR, automazioni e software su misura
            per aziende, professionisti e attività locali.
          </p>
          <a
            href="https://wa.me/393883879487?text=Ciao%20Antoniu!%20Ho%20visto%20la%20pagina%20idee%20e%20vorrei%20parlare%20di%20un%20progetto."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl transition-colors text-lg shadow-lg"
          >
            <MessageCircle size={20} />
            Parliamone su WhatsApp
          </a>
        </motion.div>
      </div>

      {/* Categories */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.1 }}
              className={`rounded-2xl border p-6 ${cat.bg}`}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-2xl shadow-sm`}>
                  {cat.emoji}
                </div>
                <h2 className="font-extrabold text-gray-900 text-lg">{cat.title}</h2>
              </div>

              {/* Items */}
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item, j) => (
                  <span
                    key={j}
                    className="bg-white text-gray-700 text-xs font-medium px-3 py-1.5 rounded-full border border-gray-200 shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom solution banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-3xl bg-gradient-to-br from-slate-900 to-blue-950 p-10 text-center"
        >
          <div className="text-4xl mb-4">🔧</div>
          <h2 className="text-3xl font-extrabold text-white mb-3">Non trovi quello che cerchi?</h2>
          <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto">
            Posso sviluppare software personalizzati partendo dalla tua idea o dal problema che vuoi risolvere.
            <br /><span className="text-blue-400 font-semibold">Dal concept al prodotto finale.</span>
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {deliverables.map((d, i) => (
              <span key={i} className="flex items-center gap-1.5 bg-blue-500/20 text-blue-300 text-sm font-medium px-4 py-2 rounded-full border border-blue-500/20">
                ✅ {d}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/393883879487?text=Ciao%20Antoniu!%20Vorrei%20discutere%20un%20progetto%20personalizzato."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl transition-colors text-lg"
            >
              <MessageCircle size={20} />
              Scrivimi su WhatsApp
            </a>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors text-lg"
            >
              Richiedi una consulenza gratuita
              <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
