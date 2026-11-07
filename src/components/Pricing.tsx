"use client";
import { useState, type FormEvent, type ReactNode } from "react";
import { motion } from "framer-motion";
import { Check, ChevronDown, ArrowDown, Send, Loader2, CheckCircle2 } from "lucide-react";
import { Lang } from "@/lib/i18n";
import { sendEmail, CONTACT_EMAIL } from "@/lib/sendEmail";

type Package = { tag: string; name: string; price: string; desc: string; features: string[] };

type Content = {
  title: string;
  subtitle: string;
  from: string;
  popular: string;
  cta: string;
  fixedPrice: string;
  base: { tag: string; name: string; price: string; desc: string; features: string[]; excluded: string };
  packages: Package[];
  note: string;
  custom: string;
  addonsTitle: string;
  addons: { name: string; desc: string; price: string }[];
  careTitle: string;
  plans: { name: string; price: string; desc: string }[];
  spot: string;
  termsTitle: string;
  terms: { label: string; text: string }[];
  calc: {
    title: string;
    subtitle: string;
    step1: string;
    step2: string;
    step3: string;
    none: string;
    perYear: string;
    to: string;
    included: string;
    quantity: string;
    baseNote: string;
    estimate: string;
    care: string;
    disclaimer: string;
    send: string;
    sending: string;
    sentTitle: string;
    sentText: string;
    again: string;
    error: string;
    subject: string;
    waIntro: string;
    waPackage: string;
    delivery: string;
    workingDays: string;
    deliveryNote: string;
    deposit: string;
    step4: string;
    name: string;
    business: string;
    email: string;
    phone: string;
    notes: string;
    notesPlaceholder: string;
    dataNote: string;
    waName: string;
    waBusiness: string;
    waEmail: string;
    waPhone: string;
    waNotes: string;
  };
};

const content: Record<Lang, Content> = {
  it: {
    title: "Prezzi chiari",
    subtitle: "Scegli il punto di partenza: il prezzo finale viene fissato nel preventivo, prima di iniziare.",
    from: "da",
    popular: "Più richiesto",
    cta: "Chiedi informazioni",
    fixedPrice: "prezzo fisso",
    base: {
      tag: "Per iniziare",
      name: "Pagina Base",
      price: "€100",
      desc: "Una sola pagina pubblica per essere online in modo semplice.",
      features: [
        "Una pagina con grafica già pronta",
        "Testi, logo e foto forniti dal cliente",
        "Pulsante per chiamata o WhatsApp",
        "Dati dell'attività e P.IVA",
        "Un giro di modifiche prima della pubblicazione",
      ],
      excluded: "Non include altre pagine, modulo contatti, mappa e social.",
    },
    packages: [
      {
        tag: "Start",
        name: "Sito a Pagina Unica",
        price: "€650",
        desc: "Ideale per liberi professionisti, singoli servizi o il lancio di un prodotto.",
        features: ["Una sola pagina da scorrere", "Perfetto su smartphone e molto veloce", "Pulsanti per WhatsApp e chiamata", "Modulo contatti con avviso via email", "Mappa Google e collegamenti ai social", "Informative di base su privacy e cookie"],
      },
      {
        tag: "Azienda",
        name: "Sito Vetrina Aziendale",
        price: "€1.250",
        desc: "Perfetto per aziende, artigiani, attività locali e studi professionali.",
        features: ["Fino a 5-6 pagine personalizzate", "Home, Chi Siamo, Servizi, Contatti", "Galleria fotografica interattiva", "Ottimizzazione di base per Google", "Statistiche delle visite (Google Analytics)", "Pannello per modificare i contenuti da solo"],
      },
      {
        tag: "Vendita",
        name: "Negozio Online",
        price: "€2.200",
        desc: "Per negozi fisici o marchi che vogliono vendere prodotti o servizi online.",
        features: ["Carrello e pagamento sicuro", "Pagamenti con carta, Apple Pay e PayPal", "Gestione magazzino, spedizioni e sconti", "Schede prodotto dettagliate e varianti", "Email automatiche di conferma ordine", "Avviso immediato a ogni vendita"],
      },
      {
        tag: "Hotel e strutture",
        name: "Sito con Prenotazioni",
        price: "€2.800",
        desc: "Per hotel, B&B, houseboat, noleggi e attività con prenotazioni dirette.",
        features: ["Collegamento al sistema di prenotazioni (es. Octorate)", "Calendari sincronizzati, niente doppie prenotazioni", "App per gli ospiti, senza passare da App Store o Google Play", "Vendita di extra e servizi a bordo", "Accesso rapido degli ospiti con QR code", "Sito completo in più lingue"],
      },
    ],
    note: "Regime forfettario (Legge 190/2014): i prezzi indicati sono netti, senza applicazione dell'IVA né ritenuta d'acconto. Dominio (l'indirizzo del sito), spazio online (hosting) e servizi esterni a pagamento sono a carico del cliente.",
    custom: "App per smartphone, lavagne elettroniche e soluzioni su misura: preventivo dedicato.",
    addonsTitle: "Funzioni aggiuntive",
    addons: [
      { name: "Sito in più lingue", desc: "Scelta della lingua e struttura per 2 o più lingue. Traduzione dei testi fornita dal cliente o preventivata a parte.", price: "€50 a lingua per le prime 2, poi €350" },
      { name: "Collegamento al sistema di prenotazioni", desc: "Disponibilità aggiornata in tempo reale e prenotazione delle camere, con Octorate, Bed-in-Cloud, Smoobu e sistemi simili.", price: "€600 – €900" },
      { name: "App per ospiti e clienti", desc: "Si installa da QR code o link, si consulta anche senza connessione e offre riepilogo ordini e comandi con un tocco.", price: "€950 – €1.500" },
      { name: "Calcolatore di preventivo", desc: "I clienti scelgono le opzioni sul sito, vedono il totale e ti inviano la richiesta già compilata.", price: "€450 – €800" },
      { name: "Sito più veloce e più visibile su Google", desc: "Analisi tecnica, alleggerimento delle pagine e ottimizzazioni dedicate, fino al punteggio verde (90+) nel test di velocità di Google.", price: "€400" },
      { name: "Pagine o schede aggiuntive", desc: "Nuove sezioni o schede di alloggi e prodotti oltre a quelle previste nel pacchetto.", price: "€90 / pagina" },
    ],
    careTitle: "Assistenza e manutenzione",
    plans: [
      { name: "Piano Base", price: "€35/mese o €350/anno (2 mesi gratis)", desc: "Controllo della sicurezza, copie di sicurezza settimanali, aggiornamenti tecnici e rinnovo del certificato di sicurezza del sito." },
      { name: "Piano Pro", price: "€75/mese o €750/anno (2 mesi gratis)", desc: "Tutto il Piano Base, più 2 ore al mese di modifiche a contenuti, testi e immagini e supporto prioritario su WhatsApp." },
    ],
    spot: "Interventi singoli: €45/ora per modifiche straordinarie o consulenze.",
    calc: {
      title: "Fai un preventivo",
      subtitle: "Scegli cosa ti serve e vedi subito una stima.",
      step1: "1. Scegli il pacchetto",
      step2: "2. Aggiungi le funzioni che ti servono",
      step3: "3. Vuoi l'assistenza?",
      none: "Nessuna assistenza",
      perYear: "/anno",
      to: "a",
      included: "Già incluso",
      quantity: "Quantità",
      baseNote: "La Pagina Base non prevede aggiunte: per aggiungere funzioni scegli un altro pacchetto.",
      estimate: "La tua stima",
      care: "per l'assistenza",
      disclaimer: "Stima indicativa: il prezzo finale viene fissato nel preventivo ufficiale. Dominio e spazio online esclusi.",
      send: "Invia la richiesta di preventivo",
      sending: "Invio in corso…",
      sentTitle: "Richiesta inviata!",
      sentText: "Grazie, ti ricontattiamo entro 24 ore al telefono o all'email che hai indicato con il preventivo ufficiale.",
      again: "Fai un altro preventivo",
      error: "Invio non riuscito. Riprova tra poco oppure scrivici a",
      subject: "Richiesta di preventivo dal sito",
      waIntro: "Buongiorno, ho compilato il preventivo sul sito e vorrei ricevere quello ufficiale.",
      waPackage: "Pacchetto",
      delivery: "Consegna stimata",
      workingDays: "giorni lavorativi",
      deposit: "Anticipo del 30% per iniziare",
      step4: "4. I tuoi dati",
      name: "Il tuo nome *",
      business: "Nome dell'attività *",
      email: "La tua email *",
      phone: "Telefono *",
      notes: "Note aggiuntive (opzionale)",
      notesPlaceholder: "Descrivi brevemente il tuo progetto...",
      dataNote: "I dati vengono inviati via email a Qui.SiteApp solo per risponderti, come descritto nella Privacy.",
      waName: "Nome",
      waBusiness: "Attività",
      waEmail: "Email",
      waPhone: "Telefono",
      waNotes: "Note",
      deliveryNote: "Tempi indicativi: la data di consegna viene confermata nel preventivo ufficiale. I giorni si contano dal primo pagamento e dalla ricezione di tutti i materiali.",
    },
    termsTitle: "Condizioni di fornitura",
    terms: [
      { label: "Proprietà", text: "il sito e il relativo codice sono di esclusiva proprietà del cliente a saldo avvenuto." },
      { label: "Garanzia", text: "60 giorni di garanzia e correzione errori inclusi dopo la consegna." },
      { label: "Pagamenti", text: "di norma 30% all'avvio, 40% alla verifica finale, 30% alla pubblicazione. Pagamento a rate mensili disponibile su richiesta." },
      { label: "Costi di terzi", text: "dominio, spazio online (hosting) e servizi esterni a pagamento sono a carico del cliente." },
    ],
  },
  en: {
    title: "Clear pricing",
    subtitle: "Choose your starting point: the final price is fixed in the quote, before work begins.",
    from: "from",
    popular: "Most popular",
    cta: "Ask for details",
    fixedPrice: "fixed price",
    base: {
      tag: "To get started",
      name: "Basic Page",
      price: "€100",
      desc: "A single public page to get online the simple way.",
      features: [
        "One page with a ready-made design",
        "Text, logo and photos supplied by the client",
        "Call or WhatsApp button",
        "Business details and VAT number",
        "One round of changes before publication",
      ],
      excluded: "Does not include other pages, a contact form, a map or social media.",
    },
    packages: [
      {
        tag: "Start",
        name: "Single-Page Website",
        price: "€650",
        desc: "Ideal for freelancers, single services or launching a product.",
        features: ["One scrolling page", "Great on smartphones and very fast", "WhatsApp and call buttons", "Contact form with email alerts", "Google map and links to social media", "Basic privacy and cookie policy"],
      },
      {
        tag: "Business",
        name: "Business Website",
        price: "€1,250",
        desc: "Perfect for companies, artisans, local businesses and professional firms.",
        features: ["Up to 5-6 custom pages", "Home, About, Services, Contact", "Interactive photo gallery", "Basic optimisation for Google", "Visitor statistics (Google Analytics)", "Panel to edit the content yourself"],
      },
      {
        tag: "Sales",
        name: "Online Shop",
        price: "€2,200",
        desc: "For physical shops or brands that want to sell products or services online.",
        features: ["Cart and secure payment", "Card, Apple Pay and PayPal payments", "Stock, shipping and discount management", "Detailed product pages and variants", "Automatic order confirmation emails", "Instant alert for every sale"],
      },
      {
        tag: "Hotels & rentals",
        name: "Website with Bookings",
        price: "€2,800",
        desc: "For hotels, B&Bs, houseboats, rentals and businesses with direct bookings.",
        features: ["Connection to your booking system (e.g. Octorate)", "Synced calendars, no double bookings", "Guest app, with no app store needed", "Sale of extras and on-board services", "Quick guest access by QR code", "Full website in several languages"],
      },
    ],
    note: "Italian flat-rate tax scheme (Law 190/2014): prices shown are net, with no VAT or withholding tax applied. Domain (the site's address), web hosting and paid external services are paid by the client.",
    custom: "Smartphone apps, in-store screens and tailor-made solutions: dedicated quote.",
    addonsTitle: "Extra features",
    addons: [
      { name: "Website in several languages", desc: "Language selector and structure for 2 or more languages. Translations supplied by the client or quoted separately.", price: "€50 per language for the first 2, then €350" },
      { name: "Connection to your booking system", desc: "Real-time availability and room booking, with Octorate, Bed-in-Cloud, Smoobu and similar systems.", price: "€600 – €900" },
      { name: "App for guests and clients", desc: "Installs from a QR code or link, works without a connection and offers order summaries and one-tap actions.", price: "€950 – €1,500" },
      { name: "Quote calculator", desc: "Clients choose options on your site, see the total and send you a request that is already filled in.", price: "€450 – €800" },
      { name: "Faster website, more visible on Google", desc: "Technical review, lighter pages and dedicated optimisation, up to a green score (90+) on Google PageSpeed.", price: "€400" },
      { name: "Extra pages or listings", desc: "New sections or accommodation and product listings beyond those included in the package.", price: "€90 / page" },
    ],
    careTitle: "Support and maintenance",
    plans: [
      { name: "Base Plan", price: "€35/month or €350/year (2 months free)", desc: "Security checks, weekly safety copies, technical updates and renewal of the site's security certificate." },
      { name: "Pro Plan", price: "€75/month or €750/year (2 months free)", desc: "Everything in the Base Plan, plus 2 hours a month of content, text and image changes and priority WhatsApp support." },
    ],
    spot: "One-off work: €45/hour for extra changes or consulting.",
    calc: {
      title: "Get a quote",
      subtitle: "Choose what you need and see an estimate straight away.",
      step1: "1. Choose your package",
      step2: "2. Add the features you need",
      step3: "3. Would you like support?",
      none: "No support",
      perYear: "/year",
      to: "to",
      included: "Already included",
      quantity: "Quantity",
      baseNote: "The Basic Page has no add-ons: to add features, choose another package.",
      estimate: "Your estimate",
      care: "for support",
      disclaimer: "Indicative estimate: the final price is fixed in the quote. Domain and web hosting not included.",
      send: "Send quote request",
      sending: "Sending…",
      sentTitle: "Request sent!",
      sentText: "Thank you, we'll get back to you within 24 hours by phone or email with the official quote.",
      again: "Make another estimate",
      error: "Sending failed. Please try again shortly or write to",
      subject: "Quote request from the website",
      waIntro: "Hello, I used the calculator on your website and would like a quote.",
      waPackage: "Package",
      delivery: "Estimated delivery",
      workingDays: "working days",
      deposit: "30% deposit to start",
      step4: "4. Your details",
      name: "Your name *",
      business: "Business name *",
      email: "Your email *",
      phone: "Phone *",
      notes: "Additional notes (optional)",
      notesPlaceholder: "Briefly describe your project...",
      dataNote: "Your details are emailed to Qui.SiteApp only to reply to you, as described in the Privacy Policy.",
      waName: "Name",
      waBusiness: "Business",
      waEmail: "Email",
      waPhone: "Phone",
      waNotes: "Notes",
      deliveryNote: "Indicative times: the delivery date is confirmed in the quote. Days are counted from receipt of the first payment and all materials.",
    },
    termsTitle: "Terms of supply",
    terms: [
      { label: "Ownership", text: "the site and its code belong exclusively to the client once paid in full." },
      { label: "Warranty", text: "60 days of warranty and error fixing included after delivery." },
      { label: "Payments", text: "normally 30% at start, 40% at final review, 30% at publication. Monthly instalments available on request." },
      { label: "Third-party costs", text: "domain, web hosting and paid external services are paid by the client." },
    ],
  },
  de: {
    title: "Klare Preise",
    subtitle: "Wählen Sie Ihren Ausgangspunkt: Der Endpreis wird vor Projektbeginn im Angebot festgelegt.",
    from: "ab",
    popular: "Am beliebtesten",
    cta: "Informationen anfragen",
    fixedPrice: "Festpreis",
    base: {
      tag: "Zum Einstieg",
      name: "Basis-Seite",
      price: "€100",
      desc: "Eine einzige öffentliche Seite, um einfach online zu sein.",
      features: [
        "Eine Seite mit fertigem Design",
        "Texte, Logo und Fotos vom Kunden",
        "Button für Anruf oder WhatsApp",
        "Unternehmensdaten und USt-IdNr.",
        "Eine Änderungsrunde vor der Veröffentlichung",
      ],
      excluded: "Nicht enthalten: weitere Seiten, Kontaktformular, Karte und soziale Netzwerke.",
    },
    packages: [
      {
        tag: "Start",
        name: "Website mit einer Seite",
        price: "€650",
        desc: "Ideal für Selbstständige, einzelne Dienstleistungen oder eine Produkteinführung.",
        features: ["Eine einzige Seite zum Scrollen", "Perfekt auf dem Smartphone und sehr schnell", "Buttons für WhatsApp und Anruf", "Kontaktformular mit E-Mail-Benachrichtigung", "Google-Karte und Links zu sozialen Netzwerken", "Grundlegende Datenschutz- und Cookie-Hinweise"],
      },
      {
        tag: "Unternehmen",
        name: "Unternehmenswebsite",
        price: "€1.250",
        desc: "Perfekt für Unternehmen, Handwerker, lokale Betriebe und Kanzleien.",
        features: ["Bis zu 5-6 individuelle Seiten", "Start, Über uns, Leistungen, Kontakt", "Interaktive Fotogalerie", "Grundlegende Optimierung für Google", "Besucherstatistik (Google Analytics)", "Bereich, um Inhalte selbst zu ändern"],
      },
      {
        tag: "Verkauf",
        name: "Onlineshop",
        price: "€2.200",
        desc: "Für Ladengeschäfte oder Marken, die Produkte oder Dienstleistungen online verkaufen möchten.",
        features: ["Warenkorb und sichere Bezahlung", "Zahlung per Karte, Apple Pay und PayPal", "Verwaltung von Lager, Versand und Rabatten", "Detaillierte Produktseiten und Varianten", "Automatische Bestellbestätigungen per E-Mail", "Sofortige Benachrichtigung bei jedem Verkauf"],
      },
      {
        tag: "Hotels & Vermietung",
        name: "Website mit Buchungen",
        price: "€2.800",
        desc: "Für Hotels, B&Bs, Hausboote, Vermietungen und Betriebe mit Direktbuchungen.",
        features: ["Anbindung an Ihr Buchungssystem (z. B. Octorate)", "Synchronisierte Kalender, keine Doppelbuchungen", "Gäste-App, ganz ohne App Store", "Verkauf von Extras und Bordservices", "Schneller Gästezugang per QR-Code", "Vollständige Website in mehreren Sprachen"],
      },
    ],
    note: "Italienische Pauschalbesteuerung (Gesetz 190/2014): Die angegebenen Preise sind Nettopreise, ohne Mehrwertsteuer und ohne Quellensteuer. Domain (die Adresse der Website), Webhosting und kostenpflichtige externe Dienste trägt der Kunde.",
    custom: "Smartphone-Apps, Bildschirme für Geschäfte und individuelle Lösungen: eigenes Angebot.",
    addonsTitle: "Zusatzfunktionen",
    addons: [
      { name: "Website in mehreren Sprachen", desc: "Sprachauswahl und Struktur für 2 oder mehr Sprachen. Übersetzungen vom Kunden oder separat kalkuliert.", price: "€50 pro Sprache für die ersten 2, danach €350" },
      { name: "Anbindung an Ihr Buchungssystem", desc: "Verfügbarkeit in Echtzeit und Zimmerbuchung, mit Octorate, Bed-in-Cloud, Smoobu und ähnlichen Systemen.", price: "€600 – €900" },
      { name: "App für Gäste und Kunden", desc: "Per QR-Code oder Link installierbar, auch ohne Verbindung nutzbar, mit Bestellübersicht und Aktionen per Fingertipp.", price: "€950 – €1.500" },
      { name: "Preisrechner", desc: "Kunden wählen Optionen auf Ihrer Website, sehen die Summe und senden Ihnen eine fertig ausgefüllte Anfrage.", price: "€450 – €800" },
      { name: "Schnellere Website, besser sichtbar bei Google", desc: "Technische Prüfung, schlankere Seiten und gezielte Optimierung bis zum grünen Wert (90+) bei Google PageSpeed.", price: "€400" },
      { name: "Zusätzliche Seiten oder Einträge", desc: "Neue Bereiche oder Unterkunfts- und Produkteinträge über den Paketumfang hinaus.", price: "€90 / Seite" },
    ],
    careTitle: "Support und Wartung",
    plans: [
      { name: "Basis-Plan", price: "€35/Monat oder €350/Jahr (2 Monate gratis)", desc: "Sicherheitskontrollen, wöchentliche Sicherungskopien, technische Updates und Erneuerung des Sicherheitszertifikats der Website." },
      { name: "Pro-Plan", price: "€75/Monat oder €750/Jahr (2 Monate gratis)", desc: "Alles aus dem Basis-Plan, dazu 2 Stunden pro Monat für Änderungen an Inhalten, Texten und Bildern sowie bevorzugter WhatsApp-Support." },
    ],
    spot: "Einzelleistungen: €45/Stunde für zusätzliche Änderungen oder Beratung.",
    calc: {
      title: "Angebot erstellen",
      subtitle: "Wählen Sie, was Sie brauchen, und sehen Sie sofort eine Schätzung.",
      step1: "1. Paket wählen",
      step2: "2. Gewünschte Funktionen hinzufügen",
      step3: "3. Möchten Sie Support?",
      none: "Kein Support",
      perYear: "/Jahr",
      to: "bis",
      included: "Bereits enthalten",
      quantity: "Anzahl",
      baseNote: "Die Basis-Seite hat keine Zusätze: Für weitere Funktionen wählen Sie ein anderes Paket.",
      estimate: "Ihre Schätzung",
      care: "für den Support",
      disclaimer: "Unverbindliche Schätzung: Der Endpreis wird im Angebot festgelegt. Domain und Webhosting nicht enthalten.",
      send: "Angebotsanfrage senden",
      sending: "Wird gesendet…",
      sentTitle: "Anfrage gesendet!",
      sentText: "Vielen Dank, wir melden uns innerhalb von 24 Stunden telefonisch oder per E-Mail mit dem offiziellen Angebot.",
      again: "Neue Schätzung erstellen",
      error: "Senden fehlgeschlagen. Bitte versuchen Sie es gleich noch einmal oder schreiben Sie an",
      subject: "Angebotsanfrage über die Website",
      waIntro: "Guten Tag, ich habe den Rechner auf Ihrer Website genutzt und möchte ein Angebot.",
      waPackage: "Paket",
      delivery: "Geschätzte Lieferzeit",
      workingDays: "Werktage",
      deposit: "30 % Anzahlung zum Start",
      step4: "4. Ihre Daten",
      name: "Ihr Name *",
      business: "Unternehmensname *",
      email: "Ihre E-Mail *",
      phone: "Telefon *",
      notes: "Zusätzliche Notizen (optional)",
      notesPlaceholder: "Beschreiben Sie Ihr Projekt kurz...",
      dataNote: "Ihre Daten werden nur zur Beantwortung per E-Mail an Qui.SiteApp gesendet, wie in der Datenschutzerklärung beschrieben.",
      waName: "Name",
      waBusiness: "Unternehmen",
      waEmail: "E-Mail",
      waPhone: "Telefon",
      waNotes: "Notizen",
      deliveryNote: "Unverbindliche Zeitangabe: Der Liefertermin wird im Angebot bestätigt. Die Tage zählen ab Eingang der ersten Zahlung und aller Materialien.",
    },
    termsTitle: "Lieferbedingungen",
    terms: [
      { label: "Eigentum", text: "die Website und ihr Code gehören nach vollständiger Bezahlung ausschließlich dem Kunden." },
      { label: "Gewährleistung", text: "60 Tage Gewährleistung und Fehlerbehebung nach der Lieferung inklusive." },
      { label: "Zahlung", text: "in der Regel 30 % zum Start, 40 % bei der Endprüfung, 30 % bei der Veröffentlichung. Monatliche Raten auf Anfrage." },
      { label: "Kosten Dritter", text: "Domain, Webhosting und kostenpflichtige externe Dienste trägt der Kunde." },
    ],
  },
  ro: {
    title: "Prețuri clare",
    subtitle: "Alege punctul de plecare: prețul final se stabilește în ofertă, înainte de a începe.",
    from: "de la",
    popular: "Cel mai solicitat",
    cta: "Cere informații",
    fixedPrice: "preț fix",
    base: {
      tag: "Pentru început",
      name: "Pagină de bază",
      price: "€100",
      desc: "O singură pagină publică, pentru a fi online simplu.",
      features: [
        "O pagină cu grafică gata pregătită",
        "Texte, logo și fotografii furnizate de client",
        "Buton pentru apel sau WhatsApp",
        "Datele afacerii și codul de TVA",
        "O rundă de modificări înainte de publicare",
      ],
      excluded: "Nu include alte pagini, formular de contact, hartă și rețele sociale.",
    },
    packages: [
      {
        tag: "Start",
        name: "Site cu o singură pagină",
        price: "€650",
        desc: "Ideal pentru liber-profesioniști, servicii individuale sau lansarea unui produs.",
        features: ["O singură pagină de derulat", "Perfect pe smartphone și foarte rapid", "Butoane pentru WhatsApp și apel", "Formular de contact cu notificare pe email", "Hartă Google și linkuri către rețelele sociale", "Politică de bază de confidențialitate și cookie-uri"],
      },
      {
        tag: "Companie",
        name: "Site de prezentare",
        price: "€1.250",
        desc: "Perfect pentru companii, meșteșugari, afaceri locale și cabinete profesionale.",
        features: ["Până la 5-6 pagini personalizate", "Acasă, Despre noi, Servicii, Contact", "Galerie foto interactivă", "Optimizare de bază pentru Google", "Statistici ale vizitelor (Google Analytics)", "Panou pentru a modifica singur conținutul"],
      },
      {
        tag: "Vânzări",
        name: "Magazin online",
        price: "€2.200",
        desc: "Pentru magazine fizice sau branduri care vor să vândă produse sau servicii online.",
        features: ["Coș și plată securizată", "Plăți cu cardul, Apple Pay și PayPal", "Gestionare stocuri, livrări și reduceri", "Fișe de produs detaliate și variante", "Emailuri automate de confirmare a comenzii", "Notificare imediată la fiecare vânzare"],
      },
      {
        tag: "Hoteluri și închirieri",
        name: "Site cu rezervări",
        price: "€2.800",
        desc: "Pentru hoteluri, B&B-uri, case plutitoare, închirieri și afaceri cu rezervări directe.",
        features: ["Conectare la sistemul de rezervări (ex. Octorate)", "Calendare sincronizate, fără rezervări duble", "Aplicație pentru oaspeți, fără magazin de aplicații", "Vânzare de extra și servicii la bord", "Acces rapid pentru oaspeți prin cod QR", "Site complet în mai multe limbi"],
      },
    ],
    note: "Regim forfetar italian (Legea 190/2014): prețurile afișate sunt nete, fără TVA și fără reținere la sursă. Domeniul (adresa site-ului), găzduirea web și serviciile externe plătite sunt în sarcina clientului.",
    custom: "Aplicații pentru smartphone, ecrane pentru localuri și soluții personalizate: ofertă dedicată.",
    addonsTitle: "Funcții suplimentare",
    addons: [
      { name: "Site în mai multe limbi", desc: "Selector de limbă și structură pentru 2 sau mai multe limbi. Traducerile sunt furnizate de client sau cotate separat.", price: "€50 pe limbă pentru primele 2, apoi €350" },
      { name: "Conectare la sistemul de rezervări", desc: "Disponibilitate în timp real și rezervarea camerelor, cu Octorate, Bed-in-Cloud, Smoobu și sisteme similare.", price: "€600 – €900" },
      { name: "Aplicație pentru oaspeți și clienți", desc: "Se instalează din cod QR sau link, se poate consulta fără conexiune și oferă rezumat comenzi și comenzi dintr-o atingere.", price: "€950 – €1.500" },
      { name: "Calculator de ofertă", desc: "Clienții aleg opțiunile pe site, văd totalul și îți trimit cererea deja completată.", price: "€450 – €800" },
      { name: "Site mai rapid și mai vizibil pe Google", desc: "Analiză tehnică, pagini mai ușoare și optimizări dedicate, până la scorul verde (90+) pe Google PageSpeed.", price: "€400" },
      { name: "Pagini sau fișe suplimentare", desc: "Secțiuni noi sau fișe de cazare și produse peste cele incluse în pachet.", price: "€90 / pagină" },
    ],
    careTitle: "Asistență și mentenanță",
    plans: [
      { name: "Plan Base", price: "€35/lună sau €350/an (2 luni gratuite)", desc: "Controale de securitate, copii de siguranță săptămânale, actualizări tehnice și reînnoirea certificatului de securitate al site-ului." },
      { name: "Plan Pro", price: "€75/lună sau €750/an (2 luni gratuite)", desc: "Tot ce include Planul Base, plus 2 ore pe lună de modificări la conținut, texte și imagini și suport prioritar pe WhatsApp." },
    ],
    spot: "Intervenții punctuale: €45/oră pentru modificări suplimentare sau consultanță.",
    calc: {
      title: "Creează-ți oferta",
      subtitle: "Alege ce ai nevoie și vezi imediat o estimare.",
      step1: "1. Alege pachetul",
      step2: "2. Adaugă funcțiile de care ai nevoie",
      step3: "3. Dorești asistență?",
      none: "Fără asistență",
      perYear: "/an",
      to: "până la",
      included: "Deja inclus",
      quantity: "Cantitate",
      baseNote: "Pagina de bază nu permite adaosuri: pentru alte funcții alege un alt pachet.",
      estimate: "Estimarea ta",
      care: "pentru asistență",
      disclaimer: "Estimare orientativă: prețul final se stabilește în ofertă. Domeniul și găzduirea web nu sunt incluse.",
      send: "Trimite cererea de ofertă",
      sending: "Se trimite…",
      sentTitle: "Cerere trimisă!",
      sentText: "Mulțumim, te contactăm în 24 de ore la telefon sau pe email cu oferta oficială.",
      again: "Fă o nouă estimare",
      error: "Trimiterea nu a reușit. Încearcă din nou în curând sau scrie-ne la",
      subject: "Cerere de ofertă de pe site",
      waIntro: "Bună ziua, am folosit calculatorul de pe site și aș dori o ofertă.",
      waPackage: "Pachet",
      delivery: "Livrare estimată",
      workingDays: "zile lucrătoare",
      deposit: "Avans de 30% pentru început",
      step4: "4. Datele tale",
      name: "Numele tău *",
      business: "Numele afacerii *",
      email: "Emailul tău *",
      phone: "Telefon *",
      notes: "Note suplimentare (opțional)",
      notesPlaceholder: "Descrie pe scurt proiectul tău...",
      dataNote: "Datele sunt trimise prin email către Qui.SiteApp doar pentru a-ți răspunde, așa cum este descris în Politica de confidențialitate.",
      waName: "Nume",
      waBusiness: "Afacere",
      waEmail: "Email",
      waPhone: "Telefon",
      waNotes: "Note",
      deliveryNote: "Termene orientative: data livrării se confirmă în ofertă. Zilele se numără de la primirea primei plăți și a tuturor materialelor.",
    },
    termsTitle: "Condiții de furnizare",
    terms: [
      { label: "Proprietate", text: "site-ul și codul său aparțin exclusiv clientului după achitarea integrală." },
      { label: "Garanție", text: "60 de zile de garanție și corectare a erorilor incluse după livrare." },
      { label: "Plăți", text: "de regulă 30% la început, 40% la verificarea finală, 30% la publicare. Plata lunară în rate este disponibilă la cerere." },
      { label: "Costuri terți", text: "domeniul, găzduirea web și serviciile externe plătite sunt în sarcina clientului." },
    ],
  },
};

function Fold({ title, children }: { title: string; children: ReactNode }) {
  return (
    <details className="group bg-white border border-gray-200 rounded-2xl">
      <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-6 py-5 font-bold text-gray-900 [&::-webkit-details-marker]:hidden">
        {title}
        <ChevronDown size={20} className="shrink-0 text-gray-400 transition-transform group-open:rotate-180" />
      </summary>
      <div className="px-6 pb-6">{children}</div>
    </details>
  );
}

function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
          <Check size={16} className="shrink-0 mt-0.5 text-blue-600" />
          {item}
        </li>
      ))}
    </ul>
  );
}

type Addon = {
  min: number;
  max: number;
  days: [number, number];
  daysPer?: number; // quantity covered by one `days` block, default 1
  limit?: number;
  intro?: { quantity: number; price: number };
};

function addonCost(addon: Addon, quantity: number, unitPrice: number) {
  const introQuantity = Math.min(quantity, addon.intro?.quantity ?? 0);
  return introQuantity * (addon.intro?.price ?? 0) + (quantity - introQuantity) * unitPrice;
}

// Keep in sync with the price texts in `content`.
const CALC = {
  packages: [100, 650, 1250, 2200, 2800],
  packageDays: [[2, 3], [5, 7], [10, 15], [20, 30], [25, 35]],
  addons: [
    { min: 350, max: 350, days: [1, 2], limit: 5, intro: { quantity: 2, price: 50 } },
    { min: 600, max: 900, days: [3, 5] },
    { min: 950, max: 1500, days: [7, 10] },
    { min: 450, max: 800, days: [3, 5] },
    { min: 400, max: 400, days: [2, 3] },
    { min: 90, max: 90, days: [1, 2], daysPer: 5, limit: 20 },
  ] as Addon[],
  care: [350, 750],
};
const DEPOSIT_RATE = 0.3;
const BASE_PACKAGE = 0;
const BOOKING_PACKAGE = 4;
const INCLUDED_IN_BOOKING = [0, 1, 2]; // languages, booking connection, guest app

function eur(lang: Lang, value: number) {
  return `€${new Intl.NumberFormat(lang === "en" ? "en-US" : "de-DE").format(value)}`;
}

type SendStatus = "idle" | "sending" | "sent" | "error";

function PriceCalculator({ lang, c, pkg, setPkg }: { lang: Lang; c: Content; pkg: number; setPkg: (i: number) => void }) {
  const [quantities, setQuantities] = useState<number[]>(CALC.addons.map(() => 0));
  const [care, setCare] = useState<number | null>(null);
  const [details, setDetails] = useState({ name: "", business: "", email: "", phone: "", notes: "" });
  const [status, setStatus] = useState<SendStatus>("idle");
  const [botcheck, setBotcheck] = useState("");
  const setDetail = (key: keyof typeof details, value: string) =>
    setDetails((prev) => ({ ...prev, [key]: value }));

  const isBase = pkg === BASE_PACKAGE;
  const included = (i: number) => pkg === BOOKING_PACKAGE && INCLUDED_IN_BOOKING.includes(i);
  const setQuantity = (i: number, value: number) =>
    setQuantities((prev) => prev.map((q, j) => (j === i ? value : q)));

  const packages = [c.base, ...c.packages];
  const chosen = CALC.addons.flatMap((addon, i) =>
    !isBase && !included(i) && quantities[i] > 0 ? [{
          ...addon,
          quantity: quantities[i],
          name: c.addons[i].name,
          low: addonCost(addon, quantities[i], addon.min),
          high: addonCost(addon, quantities[i], addon.max),
          blocks: Math.ceil(quantities[i] / (addon.daysPer ?? 1)),
        }] : []
  );
  const min = chosen.reduce((sum, a) => sum + a.low, CALC.packages[pkg]);
  const max = chosen.reduce((sum, a) => sum + a.high, CALC.packages[pkg]);

  const priceRange = (low: number, high: number) => {
    if (isBase) return eur(lang, low);
    return low === high ? `${c.from} ${eur(lang, low)}` : `${c.from} ${eur(lang, low)} ${c.calc.to} ${eur(lang, high)}`;
  };
  const estimate = isBase ? `${priceRange(min, max)} ${c.fixedPrice}` : priceRange(min, max);
  const deposit = `${c.calc.deposit}: ${priceRange(Math.round(min * DEPOSIT_RATE), Math.round(max * DEPOSIT_RATE))}`;
  const [daysMin, daysMax] = CALC.packageDays[pkg];
  const delivery = `${c.calc.delivery}: ${chosen.reduce((sum, a) => sum + a.days[0] * a.blocks, daysMin)}–${chosen.reduce((sum, a) => sum + a.days[1] * a.blocks, daysMax)} ${c.calc.workingDays}`;
  const addonLabel = (a: (typeof chosen)[number]) => (a.limit ? `${a.name} x${a.quantity}` : a.name);
  const addonPrice = (a: (typeof chosen)[number]) =>
    a.low === a.high ? eur(lang, a.low) : `${eur(lang, a.low)} – ${eur(lang, a.high)}`;
  const careLine = care === null ? null : `+ ${eur(lang, CALC.care[care])}${c.calc.perYear} ${c.calc.care}`;

  const message = [
    `${c.calc.waName}: ${details.name.trim()}`,
    `${c.calc.waBusiness}: ${details.business.trim()}`,
    `${c.calc.waEmail}: ${details.email.trim()}`,
    `${c.calc.waPhone}: ${details.phone.trim()}`,
    `${c.calc.waPackage}: ${packages[pkg].name}`,
    ...(chosen.length
      ? [`${c.addonsTitle}: ${chosen.map(addonLabel).join(", ")}`]
      : []),
    ...(care === null ? [] : [`${c.careTitle}: ${c.plans[care].name}`]),
    `${c.calc.estimate}: ${estimate}`,
    ...(isBase ? [] : [deposit]),
    delivery,
    ...(details.notes.trim() ? [`${c.calc.waNotes}: ${details.notes.trim()}`] : []),
  ].join("\n");

  const send = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await sendEmail({
        subject: `${c.calc.subject} — ${details.business.trim()} (${packages[pkg].name}) · ${details.phone.trim()}`,
        name: details.name.trim(),
        email: details.email.trim(),
        message: `${c.calc.waIntro}\n\n${message}`,
        botcheck,
      });
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  const fieldClass = "w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-400 bg-white text-gray-900 placeholder:text-gray-400";

  return (
    <div id="preventivo" className="max-w-4xl mx-auto bg-white border-2 border-blue-600 rounded-2xl p-6 md:p-8 mb-6 scroll-mt-24">
      <h3 className="font-bold text-2xl text-gray-900">{c.calc.title}</h3>
      <p className="text-gray-500 mb-6">{c.calc.subtitle}</p>

      <fieldset className="mb-6">
        <legend className="font-semibold text-gray-900 mb-3">{c.calc.step1}</legend>
        <div className="grid sm:grid-cols-2 gap-2">
          {packages.map((p, i) => (
            <label
              key={p.name}
              className={`flex items-center gap-3 p-3 rounded-xl border-2 cursor-pointer text-sm transition-colors ${
                pkg === i ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-blue-200"
              }`}
            >
              <input type="radio" name="calc-package" checked={pkg === i} onChange={() => setPkg(i)} className="accent-blue-600" />
              <span className="flex-1 font-medium text-gray-900">{p.name}</span>
              <span className="shrink-0 font-bold text-blue-600">{i === BASE_PACKAGE ? p.price : `${c.from} ${p.price}`}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="mb-6">
        <legend className="font-semibold text-gray-900 mb-3">{c.calc.step2}</legend>
        {isBase ? (
          <p className="text-sm text-gray-500">{c.calc.baseNote}</p>
        ) : (
          <div className="divide-y divide-gray-100">
            {c.addons.map((addon, i) => {
              const { limit } = CALC.addons[i];
              const inputId = `calc-addon-${i}`;
              return (
                <div key={addon.name} className="flex items-center gap-3 py-3 text-sm">
                  {!limit && (
                    <input
                      id={inputId}
                      type="checkbox"
                      disabled={included(i)}
                      checked={included(i) || quantities[i] > 0}
                      onChange={(e) => setQuantity(i, e.target.checked ? 1 : 0)}
                      className="accent-blue-600"
                    />
                  )}
                  <label htmlFor={limit ? undefined : inputId} className="flex-1 font-medium text-gray-900">
                    {addon.name}
                    <span className="block font-normal text-gray-500">{included(i) ? c.calc.included : addon.price}</span>
                  </label>
                  {limit && !included(i) && (
                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        disabled={quantities[i] === 0}
                        aria-label={`${c.calc.quantity} - 1: ${addon.name}`}
                        onClick={() => setQuantity(i, quantities[i] - 1)}
                        className="w-9 h-9 rounded-lg border border-gray-200 font-bold text-gray-700 hover:border-blue-400 disabled:opacity-40"
                      >
                        −
                      </button>
                      <span className="w-7 text-center font-semibold text-gray-900">{quantities[i]}</span>
                      <button
                        type="button"
                        disabled={quantities[i] === limit}
                        aria-label={`${c.calc.quantity} + 1: ${addon.name}`}
                        onClick={() => setQuantity(i, quantities[i] + 1)}
                        className="w-9 h-9 rounded-lg border border-gray-200 font-bold text-gray-700 hover:border-blue-400 disabled:opacity-40"
                      >
                        +
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </fieldset>

      <fieldset className="mb-6">
        <legend className="font-semibold text-gray-900 mb-3">{c.calc.step3}</legend>
        <div className="grid sm:grid-cols-3 gap-2">
          {[null, 0, 1].map((option) => (
            <label
              key={option ?? "none"}
              className={`flex items-center gap-2 p-3 rounded-xl border-2 cursor-pointer text-sm transition-colors ${
                care === option ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-blue-200"
              }`}
            >
              <input type="radio" name="calc-care" checked={care === option} onChange={() => setCare(option)} className="accent-blue-600" />
              <span className="font-medium text-gray-900">
                {option === null ? c.calc.none : `${c.plans[option].name} (${eur(lang, CALC.care[option])}${c.calc.perYear})`}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="bg-gray-50 rounded-xl p-5" aria-live="polite">
        <ul className="space-y-1 text-sm text-gray-600 border-b border-gray-200 pb-3 mb-3">
          <li className="flex justify-between gap-4">
            <span>{packages[pkg].name}</span>
            <span className="shrink-0 font-semibold">{isBase ? packages[pkg].price : `${c.from} ${packages[pkg].price}`}</span>
          </li>
          {chosen.map((a) => (
            <li key={a.name} className="flex justify-between gap-4">
              <span>{addonLabel(a)}</span>
              <span className="shrink-0 font-semibold">{addonPrice(a)}</span>
            </li>
          ))}
        </ul>
        <p className="text-sm font-semibold text-gray-500">{c.calc.estimate}</p>
        <p className="text-2xl md:text-3xl font-extrabold text-blue-600">{estimate}</p>
        {careLine && <p className="font-semibold text-gray-700">{careLine}</p>}
        {!isBase && <p className="font-semibold text-gray-700">{deposit}</p>}
        <p className="font-semibold text-gray-700">{delivery}</p>
        <p className="text-xs text-gray-500 mt-2">{c.calc.disclaimer}</p>
        <p className="text-xs text-gray-500 mt-1">{c.calc.deliveryNote}</p>
      </div>

      {status === "sent" ? (
        <div className="mt-6 border border-green-200 bg-green-50 rounded-xl p-6 text-center" role="status">
          <CheckCircle2 size={36} className="mx-auto text-green-600" />
          <p className="mt-3 text-xl font-bold text-gray-900">{c.calc.sentTitle}</p>
          <p className="mt-1 text-gray-600">{c.calc.sentText}</p>
          <button type="button" onClick={() => setStatus("idle")} className="mt-4 text-sm font-semibold text-blue-600 hover:underline">{c.calc.again}</button>
        </div>
      ) : (
      <form onSubmit={send} className="mt-6">
        {/* Honeypot: hidden from people, filled by bots */}
        <input type="text" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden value={botcheck} onChange={(e) => setBotcheck(e.target.value)} />
        <fieldset>
          <legend className="font-semibold text-gray-900 mb-3">{c.calc.step4}</legend>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="calc-name" className="block text-sm font-medium text-gray-700 mb-1">{c.calc.name}</label>
              <input id="calc-name" type="text" required pattern=".*\S.*" autoComplete="name" value={details.name} onChange={(e) => setDetail("name", e.target.value)} className={fieldClass} />
            </div>
            <div>
              <label htmlFor="calc-business" className="block text-sm font-medium text-gray-700 mb-1">{c.calc.business}</label>
              <input id="calc-business" type="text" required pattern=".*\S.*" autoComplete="organization" value={details.business} onChange={(e) => setDetail("business", e.target.value)} className={fieldClass} />
            </div>
            <div>
              <label htmlFor="calc-email" className="block text-sm font-medium text-gray-700 mb-1">{c.calc.email}</label>
              <input id="calc-email" type="email" required maxLength={200} autoComplete="email" value={details.email} onChange={(e) => setDetail("email", e.target.value)} className={fieldClass} />
            </div>
            <div>
              <label htmlFor="calc-phone" className="block text-sm font-medium text-gray-700 mb-1">{c.calc.phone}</label>
              <input id="calc-phone" type="tel" required pattern="[0-9+ ]{6,20}" maxLength={20} autoComplete="tel" inputMode="tel" placeholder="+39 333 123 4567" value={details.phone} onChange={(e) => setDetail("phone", e.target.value)} className={fieldClass} />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="calc-notes" className="block text-sm font-medium text-gray-700 mb-1">{c.calc.notes}</label>
              <textarea id="calc-notes" rows={3} placeholder={c.calc.notesPlaceholder} value={details.notes} onChange={(e) => setDetail("notes", e.target.value)} className={`${fieldClass} resize-none`} />
            </div>
          </div>
        </fieldset>
        <p className="text-xs text-gray-500 mt-3 mb-4">{c.calc.dataNote}</p>
        {status === "error" && (
          <p className="text-sm text-red-600 mb-4" role="alert">
            {c.calc.error} <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold underline">{CONTACT_EMAIL}</a>.
          </p>
        )}
        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
        >
          {status === "sending" ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
          {status === "sending" ? c.calc.sending : c.calc.send}
        </button>
      </form>
      )}
    </div>
  );
}

export default function Pricing({ lang }: { lang: Lang }) {
  const c = content[lang];
  const [pkg, setPkg] = useState(2); // Most requested package
  // "Ask for details" picks the package in the calculator and scrolls there, where the request is sent by email.
  const choose = (i: number) => {
    setPkg(i);
    document.getElementById("preventivo")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-24 px-6 bg-gray-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">{c.title}</h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">{c.subtitle}</p>
        </motion.div>

        {/* Entry offer */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-[1fr_1.4fr_auto] gap-6 md:items-center bg-white border border-gray-200 rounded-2xl p-6 mb-6"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-blue-600 mb-1">{c.base.tag}</p>
            <h3 className="font-bold text-xl text-gray-900">{c.base.name}</h3>
            <p className="text-3xl font-extrabold text-blue-600 my-1">
              {c.base.price} <span className="text-sm font-medium text-gray-400">{c.fixedPrice}</span>
            </p>
            <p className="text-sm text-gray-500">{c.base.desc}</p>
          </div>
          <div>
            <FeatureList items={c.base.features} />
            <p className="text-xs text-gray-400 mt-3">{c.base.excluded}</p>
          </div>
          <button
            type="button"
            onClick={() => choose(BASE_PACKAGE)}
            className="inline-flex items-center justify-center gap-2 border-2 border-blue-600 text-blue-700 hover:bg-blue-50 font-semibold px-5 py-3 rounded-xl transition-colors"
          >
            <ArrowDown size={18} />
            {c.cta}
          </button>
        </motion.div>

        {/* Packages */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {c.packages.map((pkg, i) => {
            const popular = i === 1;
            return (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`flex flex-col bg-white rounded-2xl p-6 ${popular ? "border-2 border-blue-600 shadow-lg shadow-blue-100" : "border border-gray-200"}`}
              >
                <p className="text-xs font-bold uppercase tracking-wide text-blue-600 mb-2">{popular ? c.popular : pkg.tag}</p>
                <h3 className="font-bold text-lg text-gray-900">{pkg.name}</h3>
                <p className="text-3xl font-extrabold text-blue-600 my-2">
                  <span className="text-sm font-medium text-gray-400">{c.from}</span> {pkg.price}
                </p>
                <p className="text-sm text-gray-500 mb-5">{pkg.desc}</p>
                <div className="flex-1 mb-6">
                  <FeatureList items={pkg.features} />
                </div>
                <button
                  type="button"
                  onClick={() => choose(i + 1)}
                  className={`inline-flex items-center justify-center gap-2 font-semibold px-4 py-3 rounded-xl transition-colors ${
                    popular ? "bg-blue-600 hover:bg-blue-700 text-white" : "border-2 border-blue-600 text-blue-700 hover:bg-blue-50"
                  }`}
                >
                  <ArrowDown size={18} />
                  {c.cta}
                </button>
              </motion.div>
            );
          })}
        </div>

        <p className="text-sm text-gray-500 text-center max-w-3xl mx-auto mb-2">{c.note}</p>
        <p className="text-sm text-gray-500 text-center mb-10">{c.custom}</p>

        <PriceCalculator lang={lang} c={c} pkg={pkg} setPkg={setPkg} />

        {/* Details */}
        <div className="space-y-4 max-w-4xl mx-auto">
          <Fold title={c.addonsTitle}>
            <div className="divide-y divide-gray-100">
              {c.addons.map((addon) => (
                <div key={addon.name} className="py-4 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900">{addon.name}</h4>
                    <p className="text-sm text-gray-500">{addon.desc}</p>
                  </div>
                  <p className="shrink-0 font-bold text-blue-600 text-sm">{addon.price}</p>
                </div>
              ))}
            </div>
          </Fold>

          <Fold title={c.careTitle}>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              {c.plans.map((plan) => (
                <div key={plan.name} className="bg-gray-50 rounded-xl p-5">
                  <h4 className="font-semibold text-gray-900">{plan.name}</h4>
                  <p className="font-bold text-blue-600 text-sm mb-2">{plan.price}</p>
                  <p className="text-sm text-gray-500">{plan.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600">{c.spot}</p>
          </Fold>

          <Fold title={c.termsTitle}>
            <ul className="space-y-2 text-sm text-gray-600">
              {c.terms.map((term) => (
                <li key={term.label}>
                  <strong className="text-gray-900">{term.label}:</strong> {term.text}
                </li>
              ))}
            </ul>
          </Fold>
        </div>
      </div>
    </section>
  );
}
