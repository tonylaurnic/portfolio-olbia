"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Lang, t } from "@/lib/i18n";
import { SERVICE_KEYS, type ServiceKey } from "@/lib/services";
import ProjectModal, { ProjectData, StoreLinks } from "@/components/ProjectModal";

type Project = ProjectData & { services: ServiceKey[] };

const projects: Project[] = [
  {
    title: "Terrazza Maestrale",
    services: ["web"],
    category: { it: "Demo — Sito per ristoranti", en: "Demo — Restaurant website", de: "Demo — Website für Restaurants", ro: "Demo — Site pentru restaurante" },
    desc: {
      it: "Simulazione di un sito per un ristorante di fantasia a Olbia: menu sfogliabile, galleria di foto, prenotazione del tavolo e versione in inglese per i turisti. Provalo come farebbero i tuoi clienti.",
      en: "Simulated website for a fictional restaurant in Olbia: browsable menu, photo gallery, table booking and an English version for tourists. Try it as your customers would.",
      de: "Simulierte Website für ein fiktives Restaurant in Olbia: Speisekarte, Fotogalerie, Tischreservierung und englische Version für Touristen. Probieren Sie sie aus wie Ihre Gäste.",
      ro: "Simulare de site pentru un restaurant fictiv din Olbia: meniu, galerie foto, rezervare de masă și versiune în engleză pentru turiști. Încearcă-l așa cum l-ar folosi clienții tăi.",
    },
    result: { it: "Demo interattiva: provala", en: "Interactive demo: try it", de: "Interaktive Demo: ausprobieren", ro: "Demo interactiv: încearcă-l" },
    tags: ["Sito Web", "Menu", "Prenotazioni", "Italiano e inglese"],
    color: "from-amber-100 to-orange-50",
    image: "/demo-ristorante/anteprima.jpg",
    year: "2026",
    url: "/demo/ristorante",
  },
  {
    title: "DentalCare Plus",
    services: ["web"],
    category: { it: "Sito Web — Germania", en: "Website — Germany", de: "Website — Deutschland", ro: "Site Web — Germania" },
    desc: {
      it: "Sito professionale per studio dentistico in Germania. Design moderno, in tedesco e inglese, con prenotazione degli appuntamenti online e ottimizzazione per farsi trovare su Google in zona.",
      en: "Professional website for a dental clinic in Germany. Modern design, in German and English, with online appointment booking and optimised to be found on Google locally.",
      de: "Professionelle Website für eine Zahnarztpraxis in Deutschland. Modernes Design, auf Deutsch und Englisch, mit Online-Terminbuchung und optimiert, um lokal bei Google gefunden zu werden.",
      ro: "Site profesional pentru o clinică dentară din Germania. Design modern, în germană și engleză, cu programări online și optimizat pentru a fi găsit pe Google în zonă.",
    },
    result: { it: "Progetto reale completato e online", en: "Real project — completed and live", de: "Echtes Projekt — fertiggestellt und online", ro: "Proiect real — finalizat și online" },
    tags: ["Sito Web", "In più lingue", "Prenotazioni Online"],
    color: "from-sky-100 to-blue-50",
    image: "/dentalcare-plus.png",
    year: "2024",
    real: true,
    url: "https://www.dentalcare-plus.de/",
  },
  {
    title: "TrackMyTruck",
    services: ["app", "custom"],
    category: { it: "App iPhone — Food truck e mercati", en: "iPhone App — Food trucks & markets", de: "iPhone-App — Foodtrucks & Märkte", ro: "Aplicație iPhone — Food truck-uri și piețe" },
    desc: {
      it: "Mappa in tempo reale di food truck, ambulanti e bancarelle: i clienti vedono chi è aperto vicino a loro, con menu e offerte. I titolari gestiscono tutto da una piattaforma web collegata.",
      en: "Real-time map of food trucks, street vendors and market stalls: customers see who is open nearby, with menus and offers. Owners manage everything from a connected web platform.",
      de: "Echtzeitkarte von Foodtrucks, Straßenhändlern und Marktständen: Kunden sehen, wer in der Nähe geöffnet hat, mit Menüs und Angeboten. Inhaber verwalten alles über eine verbundene Web-Plattform.",
      ro: "Hartă în timp real cu food truck-uri, vânzători ambulanți și tarabe: clienții văd cine este deschis în apropiere, cu meniuri și oferte. Proprietarii gestionează totul dintr-o platformă web conectată.",
    },
    result: { it: "App disponibile su App Store", en: "App available on the App Store", de: "App im App Store verfügbar", ro: "Aplicație disponibilă pe App Store" },
    tags: ["App iPhone", "Mappa in tempo reale", "Piattaforma web"],
    color: "from-orange-100 to-amber-50",
    image: "/app-trackmytruck.jpg",
    year: "2026",
    real: true,
    stores: { appStore: "https://apps.apple.com/app/id6823933620" },
  },
  {
    title: "vitaFit",
    services: ["app"],
    category: { it: "App iPhone e Android — Salute", en: "iPhone & Android App — Health", de: "iPhone- & Android-App — Gesundheit", ro: "Aplicație iPhone și Android — Sănătate" },
    desc: {
      it: "Digiuno intermittente e controllo del peso in un'unica app: timer, storico dei progressi e menu personalizzati creati con l'intelligenza artificiale.",
      en: "Intermittent fasting and weight tracking in one app: timer, progress history and personalised menus created with artificial intelligence.",
      de: "Intervallfasten und Gewichtskontrolle in einer App: Timer, Fortschrittsverlauf und personalisierte Menüs, erstellt mit künstlicher Intelligenz.",
      ro: "Post intermitent și controlul greutății într-o singură aplicație: cronometru, istoric al progresului și meniuri personalizate create cu inteligență artificială.",
    },
    result: { it: "App disponibile su App Store e Google Play", en: "App available on the App Store and Google Play", de: "App im App Store und bei Google Play verfügbar", ro: "Aplicație disponibilă pe App Store și Google Play" },
    tags: ["App iPhone", "App Android", "Intelligenza Artificiale"],
    color: "from-emerald-100 to-green-50",
    image: "/app-vitafit.jpg",
    year: "2026",
    real: true,
    stores: {
      appStore: "https://apps.apple.com/app/id6812498963",
      playStore: "https://play.google.com/store/apps/details?id=com.antoniustratulat.vitafit",
    },
  },
  {
    title: "Chef Planner",
    services: ["app"],
    category: { it: "App iPhone e Android — Cucina", en: "iPhone & Android App — Cooking", de: "iPhone- & Android-App — Kochen", ro: "Aplicație iPhone și Android — Gătit" },
    desc: {
      it: "Trasforma qualsiasi ricetta in una scheda ordinata e pronta da cucinare: da una foto, da un sito, da YouTube o dai social, con ingredienti e passaggi estratti dall'intelligenza artificiale.",
      en: "Turns any recipe into a tidy card ready to cook: from a photo, a website, YouTube or social media, with ingredients and steps extracted by artificial intelligence.",
      de: "Macht aus jedem Rezept eine übersichtliche Karte zum Nachkochen: aus einem Foto, einer Website, YouTube oder sozialen Netzwerken, mit Zutaten und Schritten, die künstliche Intelligenz erkennt.",
      ro: "Transformă orice rețetă într-o fișă ordonată, gata de gătit: dintr-o fotografie, un site, YouTube sau rețele sociale, cu ingrediente și pași extrași de inteligența artificială.",
    },
    result: { it: "App disponibile su App Store e Google Play", en: "App available on the App Store and Google Play", de: "App im App Store und bei Google Play verfügbar", ro: "Aplicație disponibilă pe App Store și Google Play" },
    tags: ["App iPhone", "App Android", "Ricette", "Intelligenza Artificiale"],
    color: "from-rose-100 to-orange-50",
    image: "/app-chefplanner.jpg",
    year: "2026",
    real: true,
    stores: {
      appStore: "https://apps.apple.com/app/id6811906553",
      playStore: "https://play.google.com/store/apps/details?id=com.antoniustratulat.chef_planner_app",
    },
  },
  {
    title: "AndroDash",
    services: ["app"],
    category: { it: "App Android — Play Store", en: "Android App — Play Store", de: "Android-App — Play Store", ro: "App Android — Play Store" },
    desc: {
      it: "App dashcam per Android pubblicata sul Google Play Store. Registrazione automatica continua, rilevamento urti e salvataggio dei video mentre usi altre app.",
      en: "Android dashcam app published on Google Play Store. Continuous automatic recording, crash detection and video saving while you use other apps.",
      de: "Android-Dashcam-App im Google Play Store. Automatische Daueraufnahme, Aufprallerkennung und Videospeicherung, während Sie andere Apps nutzen.",
      ro: "Aplicație dashcam pentru Android publicată pe Google Play Store. Înregistrare automată continuă, detectare impact și salvare video în timp ce folosești alte aplicații.",
    },
    result: { it: "App disponibile su Google Play Store", en: "App available on Google Play Store", de: "App im Google Play Store verfügbar", ro: "Aplicație disponibilă pe Google Play Store" },
    tags: ["App Android", "Google Play Store", "Registrazione Video"],
    color: "from-gray-900 to-gray-700",
    image: "/androdashcam.png",
    year: "2024",
    real: true,
    stores: { playStore: "https://play.google.com/store/apps/details?id=com.stratulat.androdashcam.app" },
  },
  {
    title: "DySign",
    services: ["screen"],
    category: { it: "App TV — Lavagna Elettronica per Locali", en: "TV App — Digital Screen for Venues", de: "TV-App — Digitaler Bildschirm für Lokale", ro: "App TV — Ecran Digital pentru Localuri" },
    desc: {
      it: "Il tuo schermo TV diventa uno strumento per farti pubblicità. Mostra menu, offerte, foto e promozioni — aggiorni tutto dal telefono in pochi secondi, anche mentre sei a casa.",
      en: "Your TV screen becomes a marketing tool. Show menus, offers, photos and promotions — update everything from your phone in seconds, even from home.",
      de: "Ihr TV-Bildschirm wird zum Marketingtool. Zeigen Sie Menüs, Angebote, Fotos und Aktionen — alles vom Handy in Sekunden aktualisierbar.",
      ro: "Ecranul tău TV devine un instrument de marketing. Afișezi meniuri, oferte, fotografii și promoții — actualizezi totul de pe telefon în câteva secunde.",
    },
    result: { it: "Progetto reale completato", en: "Real project — completed", de: "Echtes Projekt — fertiggestellt", ro: "Proiect real — finalizat" },
    tags: ["Schermo TV", "Menu Digitale", "Promozioni Aggiornate", "Aggiornamento da telefono"],
    color: "from-violet-600 to-purple-800",
    image: "/dysign-preview.png",
    year: "2025",
    real: true,
  },
];

const filterCopy: Record<Lang, { all: string; empty: string; emptyCta: string }> = {
  it: { all: "Tutti", empty: "Ogni soluzione su misura nasce dalle esigenze del cliente: raccontaci la tua idea.", emptyCta: "Richiedi un preventivo" },
  en: { all: "All", empty: "Every custom solution starts from the client's needs: tell us your idea.", emptyCta: "Request a quote" },
  de: { all: "Alle", empty: "Jede maßgeschneiderte Lösung entsteht aus den Bedürfnissen des Kunden: Erzählen Sie uns Ihre Idee.", emptyCta: "Angebot anfordern" },
  ro: { all: "Toate", empty: "Fiecare soluție personalizată pornește de la nevoile clientului: povestește-ne ideea ta.", emptyCta: "Solicită o ofertă" },
};

export default function Portfolio({ lang, category, setCategory }: {
  lang: Lang;
  category: ServiceKey | null;
  setCategory: (key: ServiceKey | null) => void;
}) {
  const tr = t[lang].portfolio;
  const fc = filterCopy[lang];
  const [selected, setSelected] = useState<Project | null>(null);
  const shown = category ? projects.filter((p) => p.services.includes(category)) : projects;
  const chips: { key: ServiceKey | null; label: string }[] = [
    { key: null, label: fc.all },
    ...SERVICE_KEYS.map((key, i) => ({ key, label: t[lang].services.items[i].title })),
  ];

  return (
    <section id="portfolio" className="py-24 px-6 bg-gray-50 border-t border-gray-200 scroll-mt-16">
      <ProjectModal project={selected} onClose={() => setSelected(null)} lang={lang} />
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">{tr.title}</h2>
          <p className="text-lg text-gray-500">{tr.subtitle}</p>
        </div>

        {/* Category filter (also set by the service cards) */}
        <div className="flex flex-wrap justify-center gap-2 mb-10" role="group" aria-label={tr.title}>
          {chips.map((c) => {
            const active = category === c.key;
            return (
              <button
                key={c.key ?? "all"}
                type="button"
                aria-pressed={active}
                onClick={() => setCategory(c.key)}
                className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${
                  active ? "bg-blue-600 border-blue-600 text-white shadow-sm" : "bg-white border-gray-200 text-gray-600 hover:border-blue-300 hover:text-blue-700"
                }`}
              >
                {c.label}
              </button>
            );
          })}
        </div>

        {shown.length === 0 && (
          <div className="max-w-xl mx-auto text-center bg-white border border-gray-200 rounded-2xl p-8">
            <p className="text-gray-600">{fc.empty}</p>
            <a href="#contact" className="mt-4 inline-block font-semibold text-blue-600 hover:underline">{fc.emptyCta} →</a>
          </div>
        )}

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
          {shown.map((p, i) => (
            <motion.div
              key={p.title}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
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
                {p.stores && (
                  <div className="mb-3">
                    <StoreLinks stores={p.stores} lang={lang} />
                  </div>
                )}
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600">
                    <ExternalLink size={14} />
                    {lang === "it" ? "Clicca per vedere →" : "Click to preview →"}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
