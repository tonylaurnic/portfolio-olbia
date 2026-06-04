"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X, Search } from "lucide-react";
import { useState } from "react";
import { Lang } from "@/lib/i18n";

const categories = [
  { emoji: "🍽️", it: "Ristorazione", en: "Restaurant", de: "Gastronomie", ro: "Restaurante",
    items: { it: ["Menu QR Interattivo","Prenotazioni Online","Ordinazioni dal Tavolo","Programma Fedeltà","Food Cost Manager","Gestione Magazzino","Assistente AI","Gestione Recensioni","Digital Menu Board","Gestione Eventi"],
             en: ["Interactive QR Menu","Online Booking","Table Orders","Loyalty Program","Food Cost Manager","Stock Management","AI Assistant","Review Management","Digital Menu Board","Event Management"],
             de: ["Interaktives QR-Menü","Online-Reservierung","Tischbestellungen","Treueprogramm","Food-Cost-Manager","Lagerverwaltung","KI-Assistent","Bewertungsmanagement","Digitale Menütafel","Eventmanagement"],
             ro: ["Meniu QR Interactiv","Rezervări Online","Comenzi la Masă","Program Fidelitate","Manager Cost Food","Gestiune Stocuri","Asistent AI","Gestiune Recenzii","Panou Meniu Digital","Gestiune Evenimente"] }},
  { emoji: "🏖️", it: "Beach Club", en: "Beach Club", de: "Beach Club", ro: "Beach Club",
    items: { it: ["Prenotazione Ombrelloni","Ordini dal Lettino","Abbonamenti Stagionali","Gestione Eventi","Digital Signage","App Cliente"],
             en: ["Sunbed Booking","Orders from Sunbed","Seasonal Memberships","Event Management","Digital Signage","Customer App"],
             de: ["Liegestuhlreservierung","Bestellungen vom Liegestuhl","Saisonale Abonnements","Eventmanagement","Digital Signage","Kunden-App"],
             ro: ["Rezervare Șezlong","Comenzi de pe Șezlong","Abonamente Sezoniere","Gestiune Evenimente","Digital Signage","App Client"] }},
  { emoji: "🏨", it: "Hotel & B&B", en: "Hotel & B&B", de: "Hotel & B&B", ro: "Hotel & B&B",
    items: { it: ["Check-in Digitale","Concierge AI","Gestione Prenotazioni","Guida Turistica Digitale","Richiesta Servizi in Camera","Raccolta Feedback"],
             en: ["Digital Check-in","AI Concierge","Booking Management","Digital Tourist Guide","Room Service Request","Feedback Collection"],
             de: ["Digitales Check-in","KI-Concierge","Buchungsverwaltung","Digitaler Reiseführer","Zimmerservice-Anfrage","Feedback-Erfassung"],
             ro: ["Check-in Digital","Concierge AI","Gestiune Rezervări","Ghid Turistic Digital","Cerere Servicii Cameră","Colectare Feedback"] }},
  { emoji: "🛍️", it: "Negozi e Retail", en: "Shops & Retail", de: "Geschäfte & Retail", ro: "Magazine & Retail",
    items: { it: ["Gestione Inventario","Catalogo Digitale","Fidelity Card","Gestione Offerte","Prenotazione Prodotti","Confronto Prezzi"],
             en: ["Inventory Management","Digital Catalogue","Loyalty Card","Offer Management","Product Booking","Price Comparison"],
             de: ["Bestandsverwaltung","Digitaler Katalog","Kundenkarte","Angebotsverwaltung","Produktbuchung","Preisvergleich"],
             ro: ["Gestiune Inventar","Catalog Digital","Card Fidelitate","Gestiune Oferte","Rezervare Produse","Comparare Prețuri"] }},
  { emoji: "🤖", it: "Intelligenza Artificiale", en: "Artificial Intelligence", de: "Künstliche Intelligenz", ro: "Inteligență Artificială",
    items: { it: ["Chatbot Aziendale","Assistente WhatsApp","Supporto Clienti Automatico","Generazione Contenuti","Creazione Post Social","Risposte Email Automatiche"],
             en: ["Business Chatbot","WhatsApp Assistant","Automated Customer Support","Content Generation","Social Post Creation","Automated Email Replies"],
             de: ["Unternehmens-Chatbot","WhatsApp-Assistent","Automatischer Kundensupport","Inhaltsgenerierung","Social-Post-Erstellung","Automatische E-Mail-Antworten"],
             ro: ["Chatbot Afaceri","Asistent WhatsApp","Suport Clienți Automat","Generare Conținut","Creare Postări Social","Răspunsuri Email Automate"] }},
  { emoji: "📄", it: "OCR e Documenti", en: "OCR & Documents", de: "OCR & Dokumente", ro: "OCR & Documente",
    items: { it: ["Scanner Scontrini","Scanner Fatture","Lettura Documenti","Archiviazione Automatica","Ricerca nei Documenti","Estrazione Dati PDF"],
             en: ["Receipt Scanner","Invoice Scanner","Document Reading","Automatic Archiving","Document Search","PDF Data Extraction"],
             de: ["Belegscanner","Rechnungsscanner","Dokumentenlessung","Automatische Archivierung","Dokumentensuche","PDF-Datenextraktion"],
             ro: ["Scanner Chitanțe","Scanner Facturi","Citire Documente","Arhivare Automată","Căutare Documente","Extragere Date PDF"] }},
  { emoji: "🚚", it: "Logistica", en: "Logistics", de: "Logistik", ro: "Logistică",
    items: { it: ["Gestione Consegne","Tracciamento Veicoli","Gestione Ordini","Scanner Codici a Barre","Controllo Merci"],
             en: ["Delivery Management","Vehicle Tracking","Order Management","Barcode Scanner","Goods Control"],
             de: ["Lieferverwaltung","Fahrzeugverfolgung","Auftragsverwaltung","Barcode-Scanner","Warenkontrolle"],
             ro: ["Gestiune Livrări","Urmărire Vehicule","Gestiune Comenzi","Scanner Coduri de Bare","Control Mărfuri"] }},
  { emoji: "🚗", it: "Automotive", en: "Automotive", de: "Automotive", ro: "Auto",
    items: { it: ["Dash Cam Personalizzata","Gestione Flotte","Registro Viaggi","Monitoraggio GPS","Report Veicoli"],
             en: ["Custom Dash Cam","Fleet Management","Travel Log","GPS Monitoring","Vehicle Reports"],
             de: ["Individuelle Dashcam","Flottenmanagement","Fahrtenbuch","GPS-Überwachung","Fahrzeugberichte"],
             ro: ["Dash Cam Personalizată","Gestiune Flotă","Registru Călătorii","Monitorizare GPS","Rapoarte Vehicule"] }},
  { emoji: "🏥", it: "Studi Professionali", en: "Professional Studios", de: "Büros & Praxen", ro: "Birouri Profesionale",
    items: { it: ["Gestione Appuntamenti","Promemoria Automatici","Archivio Documentale","Gestione Clienti","Preventivi Digitali"],
             en: ["Appointment Management","Automatic Reminders","Document Archive","Client Management","Digital Quotes"],
             de: ["Terminverwaltung","Automatische Erinnerungen","Dokumentenarchiv","Kundenverwaltung","Digitale Angebote"],
             ro: ["Gestiune Programări","Remindere Automate","Arhivă Documente","Gestiune Clienți","Oferte Digitale"] }},
  { emoji: "📺", it: "Digital Signage", en: "Digital Signage", de: "Digital Signage", ro: "Digital Signage",
    items: { it: ["Gestione Monitor Remoti","Pubblicità Dinamica","Menu Digitali","Comunicazioni Aziendali","Programmazione Contenuti"],
             en: ["Remote Monitor Management","Dynamic Advertising","Digital Menus","Corporate Communications","Content Scheduling"],
             de: ["Fernverwaltung Monitore","Dynamische Werbung","Digitale Menüs","Unternehmenskommunikation","Inhaltsplanung"],
             ro: ["Gestiune Monitor Remot","Publicitate Dinamică","Meniuri Digitale","Comunicări Corporative","Programare Conținut"] }},
  { emoji: "📱", it: "App Mobile", en: "Mobile Apps", de: "Mobile Apps", ro: "App Mobile",
    items: { it: ["App Aziendale","Marketplace","Gestione Prenotazioni","Social Network","App Fitness","App Educative","App per Eventi"],
             en: ["Business App","Marketplace","Booking Management","Social Network","Fitness App","Educational App","Event App"],
             de: ["Unternehmens-App","Marktplatz","Buchungsverwaltung","Soziales Netzwerk","Fitness-App","Lern-App","Event-App"],
             ro: ["App Afaceri","Marketplace","Gestiune Rezervări","Rețea Socială","App Fitness","App Educativă","App Evenimente"] }},
  { emoji: "🌐", it: "Siti Web e Portali", en: "Websites & Portals", de: "Websites & Portale", ro: "Site-uri & Portaluri",
    items: { it: ["Sito Aziendale","E-commerce","Portale Turistico","Landing Page","Piattaforma SaaS","Portale Prenotazioni"],
             en: ["Business Website","E-commerce","Tourist Portal","Landing Page","SaaS Platform","Booking Portal"],
             de: ["Unternehmenswebsite","E-Commerce","Tourismusportal","Landingpage","SaaS-Plattform","Buchungsportal"],
             ro: ["Site Companie","E-commerce","Portal Turistic","Landing Page","Platformă SaaS","Portal Rezervări"] }},
];

interface Props {
  onSelect: (value: string) => void;
  onClose: () => void;
  lang: Lang;
}

const labels = {
  it: { title: "Sfoglia le idee", search: "Cerca un'idea...", select: "Seleziona" },
  en: { title: "Browse ideas", search: "Search an idea...", select: "Select" },
  de: { title: "Ideen durchsuchen", search: "Idee suchen...", select: "Auswählen" },
  ro: { title: "Răsfoiește ideile", search: "Caută o idee...", select: "Selectează" },
};

export default function IdeeModal({ onSelect, onClose, lang }: Props) {
  const [query, setQuery] = useState("");
  const lb = labels[lang];

  const filtered = query.trim()
    ? categories.map(cat => ({
        ...cat,
        items: { ...cat.items, [lang]: cat.items[lang].filter(i => i.toLowerCase().includes(query.toLowerCase())) }
      })).filter(cat => cat.items[lang].length > 0)
    : categories;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-end md:items-center justify-center p-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 60 }}
          onClick={e => e.stopPropagation()}
          className="bg-white rounded-3xl w-full max-w-2xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b shrink-0">
            <h2 className="font-extrabold text-gray-900 text-xl">💡 {lb.title}</h2>
            <button onClick={onClose} className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
              <X size={16} />
            </button>
          </div>

          {/* Search */}
          <div className="px-6 py-3 border-b shrink-0">
            <div className="flex items-center gap-2 bg-gray-50 rounded-xl px-3 py-2">
              <Search size={16} className="text-gray-400" />
              <input
                autoFocus
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder={lb.search}
                className="flex-1 bg-transparent text-sm outline-none text-gray-700 placeholder-gray-400"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="overflow-y-auto flex-1 px-6 py-4 space-y-6">
            {filtered.map((cat, i) => (
              <div key={i}>
                <h3 className="flex items-center gap-2 font-bold text-gray-800 text-sm mb-3">
                  <span>{cat.emoji}</span>
                  <span>{cat[lang] as string}</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items[lang].map((item, j) => (
                    <button
                      key={j}
                      onClick={() => { onSelect(item); onClose(); }}
                      className="text-sm bg-gray-50 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-300 text-gray-600 px-3 py-1.5 rounded-full border border-gray-200 transition-colors"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
