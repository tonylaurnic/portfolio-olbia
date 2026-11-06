"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Star, CalendarCheck, Menu as MenuIcon, X, Sparkles } from "lucide-react";

const serif = Playfair_Display({ subsets: ["latin"], weight: ["500", "700"], style: ["normal", "italic"] });

const WHATSAPP_NUMBER = "393883879487";
const IMG = "/demo-ristorante";

type L = "it" | "en";
type Dish = { name: Record<L, string>; desc: Record<L, string>; price: number };

const menu: { key: string; label: Record<L, string>; dishes: Dish[] }[] = [
  {
    key: "antipasti", label: { it: "Antipasti", en: "Starters" }, dishes: [
      { name: { it: "Carpaccio di pesce spada", en: "Swordfish carpaccio" }, desc: { it: "Agrumi di Sardegna, finocchio e olio nuovo", en: "Sardinian citrus, fennel and new olive oil" }, price: 14 },
      { name: { it: "Cozze e vongole alla marinara", en: "Mussels and clams marinara" }, desc: { it: "Aglio, prezzemolo e pane tostato", en: "Garlic, parsley and toasted bread" }, price: 13 },
      { name: { it: "Tagliere sardo", en: "Sardinian board" }, desc: { it: "Pecorino, salsiccia, olive e pane carasau", en: "Pecorino, sausage, olives and carasau bread" }, price: 16 },
    ],
  },
  {
    key: "primi", label: { it: "Primi", en: "Pasta & rice" }, dishes: [
      { name: { it: "Fregola con arselle", en: "Fregola with clams" }, desc: { it: "Pomodorini, bottarga e basilico", en: "Cherry tomatoes, bottarga and basil" }, price: 18 },
      { name: { it: "Culurgiones al pomodoro", en: "Culurgiones in tomato sauce" }, desc: { it: "Ravioli di patate e menta, fatti a mano", en: "Handmade potato and mint ravioli" }, price: 15 },
      { name: { it: "Spaghetti alla bottarga", en: "Spaghetti with bottarga" }, desc: { it: "Bottarga di muggine di Cabras e limone", en: "Cabras mullet roe and lemon" }, price: 17 },
    ],
  },
  {
    key: "secondi", label: { it: "Secondi", en: "Mains" }, dishes: [
      { name: { it: "Grigliata del pescato", en: "Catch of the day, grilled" }, desc: { it: "Pesce del giorno con verdure di stagione", en: "Today's fish with seasonal vegetables" }, price: 26 },
      { name: { it: "Riso ai frutti di mare", en: "Seafood rice" }, desc: { it: "Per due persone, cotto in padella", en: "For two, cooked in the pan" }, price: 44 },
      { name: { it: "Tagliata di manzo", en: "Sliced beef steak" }, desc: { it: "Patate al rosmarino e sale di Sardegna", en: "Rosemary potatoes and Sardinian salt" }, price: 22 },
    ],
  },
  {
    key: "dolci", label: { it: "Dolci", en: "Desserts" }, dishes: [
      { name: { it: "Seadas", en: "Seadas" }, desc: { it: "Formaggio fresco e miele di corbezzolo", en: "Fresh cheese and strawberry-tree honey" }, price: 7 },
      { name: { it: "Tiramisù della casa", en: "House tiramisù" }, desc: { it: "Con caffè e mirto", en: "With coffee and myrtle" }, price: 6 },
      { name: { it: "Sorbetto al limone", en: "Lemon sorbet" }, desc: { it: "Limoni di Sardegna", en: "Sardinian lemons" }, price: 5 },
    ],
  },
];

const gallery = [
  { src: `${IMG}/mare.jpg`, alt: { it: "Riso ai frutti di mare", en: "Seafood rice" } },
  { src: `${IMG}/pasta.jpg`, alt: { it: "Pasta fatta in casa", en: "Homemade pasta" } },
  { src: `${IMG}/sala.jpg`, alt: { it: "La sala interna", en: "The dining room" } },
  { src: `${IMG}/tagliata.jpg`, alt: { it: "Tagliata di manzo", en: "Sliced beef steak" } },
  { src: `${IMG}/tavola.jpg`, alt: { it: "Una cena in terrazza", en: "Dinner on the terrace" } },
];

const reviews: { text: Record<L, string>; who: string }[] = [
  { text: { it: "Fregola buonissima e tramonto spettacolare. Torneremo!", en: "Amazing fregola and a stunning sunset. We'll be back!" }, who: "Giulia" },
  { text: { it: "Personale gentile, pesce freschissimo. Prenotare dal sito è stato facilissimo.", en: "Kind staff, very fresh fish. Booking on the website was really easy." }, who: "Mark" },
  { text: { it: "Le seadas migliori della zona.", en: "The best seadas around." }, who: "Paolo" },
];

const tx = {
  it: {
    demo: "Questo è un sito dimostrativo realizzato da Qui.SiteApp. Il ristorante è di fantasia.",
    demoCta: "Voglio un sito così",
    nav: ["Menu", "Galleria", "Prenota", "Dove siamo"],
    heroKicker: "Olbia · Sardegna",
    heroTitle: "Cucina di mare, con vista sul golfo",
    heroText: "Pesce del giorno, pasta fatta a mano e i sapori della Sardegna, in terrazza sul mare.",
    book: "Prenota un tavolo",
    seeMenu: "Guarda il menu",
    menuTitle: "Il nostro menu",
    menuNote: "Prezzi d'esempio. Il menu si aggiorna dal telefono in pochi secondi.",
    galleryTitle: "La nostra cucina",
    reviewsTitle: "Dicono di noi",
    reviewsNote: "Recensioni d'esempio",
    bookTitle: "Prenota il tuo tavolo",
    bookText: "Scegli giorno, ora e numero di persone: ti confermiamo subito.",
    name: "Nome", phone: "Telefono", date: "Data", time: "Ora", people: "Persone",
    send: "Invia la prenotazione",
    sentTitle: "Prenotazione ricevuta!",
    sentText: "Questa è una simulazione: nel sito vero la richiesta arriva subito al ristorante su WhatsApp o via email.",
    again: "Nuova prenotazione",
    whereTitle: "Dove siamo",
    address: "Lungomare di esempio, Olbia",
    hours: "Mar–Dom 12:30–15:00 · 19:30–23:30",
    closed: "Lunedì chiuso",
    phoneDemo: "Telefono di esempio",
    footer: "Terrazza Maestrale è un ristorante di fantasia: questa pagina mostra cosa può avere il sito del tuo locale.",
    madeBy: "Sito realizzato da",
    waText: "Ciao! Ho visto la demo del ristorante su quisiteapp.it e vorrei un sito così per il mio locale.",
  },
  en: {
    demo: "This is a sample website made by Qui.SiteApp. The restaurant is fictional.",
    demoCta: "I want a site like this",
    nav: ["Menu", "Gallery", "Book", "Find us"],
    heroKicker: "Olbia · Sardinia",
    heroTitle: "Seafood with a view of the bay",
    heroText: "Catch of the day, handmade pasta and the flavours of Sardinia, on a terrace by the sea.",
    book: "Book a table",
    seeMenu: "See the menu",
    menuTitle: "Our menu",
    menuNote: "Sample prices. The menu can be updated from a phone in seconds.",
    galleryTitle: "Our kitchen",
    reviewsTitle: "What guests say",
    reviewsNote: "Sample reviews",
    bookTitle: "Book your table",
    bookText: "Choose day, time and party size: we'll confirm right away.",
    name: "Name", phone: "Phone", date: "Date", time: "Time", people: "Guests",
    send: "Send booking",
    sentTitle: "Booking received!",
    sentText: "This is a simulation: on a real website the request goes straight to the restaurant via WhatsApp or email.",
    again: "New booking",
    whereTitle: "Find us",
    address: "Sample seafront, Olbia",
    hours: "Tue–Sun 12:30–15:00 · 19:30–23:30",
    closed: "Closed on Mondays",
    phoneDemo: "Sample phone",
    footer: "Terrazza Maestrale is a fictional restaurant: this page shows what your venue's website could include.",
    madeBy: "Website by",
    waText: "Hi! I saw the restaurant demo on quisiteapp.it and I'd like a website like this for my business.",
  },
} as const;

const TIMES = ["12:30", "13:00", "13:30", "14:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00"];
const ids = ["menu", "galleria", "prenota", "dove"];

export default function RestaurantDemo() {
  const [lang, setLang] = useState<L>("it");
  const [tab, setTab] = useState(menu[0].key);
  const [navOpen, setNavOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const s = tx[lang];
  const today = new Date().toISOString().slice(0, 10);
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(s.waText)}`;
  const current = menu.find((m) => m.key === tab) ?? menu[0];

  return (
    <div className="min-h-screen bg-[#fbf8f3] text-stone-800">
      {/* Demo banner: always tells visitors this is a Qui.SiteApp sample */}
      <div className="bg-[#070d1f] text-white text-sm">
        <div className="max-w-6xl mx-auto px-4 py-2.5 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <p className="flex items-center gap-2 text-gray-300">
            <Sparkles size={15} className="text-cyan-400 shrink-0" />
            {s.demo}
          </p>
          <a href={waUrl} target="_blank" rel="noopener noreferrer"
            className="shrink-0 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 font-semibold px-4 py-1.5 rounded-full transition-colors">
            {s.demoCta} · da €100
          </a>
        </div>
      </div>

      {/* Restaurant navbar */}
      <header className="sticky top-0 z-40 bg-[#fbf8f3]/90 backdrop-blur border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="#top" className={`${serif.className} text-2xl font-bold text-[#0e3b4a]`}>Terrazza Maestrale</a>
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
            {s.nav.map((n, i) => (
              <a key={n} href={`#${ids[i]}`} className="hover:text-[#c2703d] transition-colors">{n}</a>
            ))}
            <LangSwitch lang={lang} setLang={setLang} />
          </nav>
          <div className="flex md:hidden items-center gap-3">
            <LangSwitch lang={lang} setLang={setLang} />
            <button aria-label="Menu" onClick={() => setNavOpen((o) => !o)}>{navOpen ? <X /> : <MenuIcon />}</button>
          </div>
        </div>
        {navOpen && (
          <nav className="md:hidden border-t border-stone-200 px-4 py-3 flex flex-col gap-3 text-sm font-medium">
            {s.nav.map((n, i) => (
              <a key={n} href={`#${ids[i]}`} onClick={() => setNavOpen(false)}>{n}</a>
            ))}
          </nav>
        )}
      </header>

      {/* Hero */}
      <section id="top" className="relative h-[78vh] min-h-[480px] flex items-end">
        <Image src={`${IMG}/hero.jpg`} alt="Terrazza sul mare" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
          className="relative max-w-6xl mx-auto px-4 pb-16 w-full text-white">
          <p className="uppercase tracking-[0.25em] text-xs font-semibold text-amber-200 mb-3">{s.heroKicker}</p>
          <h1 className={`${serif.className} text-4xl sm:text-6xl font-bold max-w-2xl leading-tight`}>{s.heroTitle}</h1>
          <p className="mt-4 max-w-xl text-lg text-white/85">{s.heroText}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#prenota" className="bg-[#c2703d] hover:bg-[#a95e30] px-6 py-3 rounded-full font-semibold transition-colors">{s.book}</a>
            <a href="#menu" className="bg-white/15 hover:bg-white/25 backdrop-blur px-6 py-3 rounded-full font-semibold transition-colors">{s.seeMenu}</a>
          </div>
        </motion.div>
      </section>

      {/* Menu */}
      <section id="menu" className="py-20 px-4 scroll-mt-16">
        <div className="max-w-3xl mx-auto">
          <h2 className={`${serif.className} text-4xl font-bold text-center text-[#0e3b4a]`}>{s.menuTitle}</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {menu.map((m) => (
              <button key={m.key} onClick={() => setTab(m.key)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${tab === m.key ? "bg-[#0e3b4a] text-white" : "bg-white border border-stone-200 hover:border-[#0e3b4a]"}`}>
                {m.label[lang]}
              </button>
            ))}
          </div>
          <motion.ul key={tab + lang} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-10 divide-y divide-stone-200">
            {current.dishes.map((d) => (
              <li key={d.name.it} className="py-5 flex items-baseline gap-4">
                <div className="flex-1">
                  <p className={`${serif.className} text-xl font-medium`}>{d.name[lang]}</p>
                  <p className="text-sm text-stone-500 mt-1">{d.desc[lang]}</p>
                </div>
                <span className="font-semibold text-[#c2703d]">€{d.price}</span>
              </li>
            ))}
          </motion.ul>
          <p className="mt-6 text-center text-xs text-stone-400">{s.menuNote}</p>
        </div>
      </section>

      {/* Gallery */}
      <section id="galleria" className="py-20 px-4 bg-[#0e3b4a] scroll-mt-16">
        <div className="max-w-6xl mx-auto">
          <h2 className={`${serif.className} text-4xl font-bold text-center text-white`}>{s.galleryTitle}</h2>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-3">
            {gallery.map((g, i) => (
              <div key={g.src} className={`relative overflow-hidden rounded-xl group ${i === 0 ? "col-span-2 row-span-2 aspect-square md:aspect-auto" : i === gallery.length - 1 ? "aspect-[4/3] md:col-span-2 md:aspect-auto" : "aspect-[4/3]"}`}>
                <Image src={g.src} alt={g.alt[lang]} fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute bottom-0 inset-x-0 p-3 text-sm text-white bg-gradient-to-t from-black/60 to-transparent">{g.alt[lang]}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className={`${serif.className} text-4xl font-bold text-center text-[#0e3b4a]`}>{s.reviewsTitle}</h2>
          <p className="text-center text-xs text-stone-400 mt-2">{s.reviewsNote}</p>
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {reviews.map((r) => (
              <figure key={r.who} className="bg-white rounded-2xl p-6 border border-stone-200">
                <div className="flex gap-0.5 text-amber-500">{Array.from({ length: 5 }, (_, i) => <Star key={i} size={16} fill="currentColor" />)}</div>
                <blockquote className="mt-3 text-stone-700">“{r.text[lang]}”</blockquote>
                <figcaption className="mt-4 text-sm font-semibold text-stone-500">— {r.who}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Booking (simulated: nothing is sent anywhere) */}
      <section id="prenota" className="py-20 px-4 bg-[#f3ebe0] scroll-mt-16">
        <div className="max-w-xl mx-auto">
          <h2 className={`${serif.className} text-4xl font-bold text-center text-[#0e3b4a]`}>{s.bookTitle}</h2>
          <p className="text-center text-stone-600 mt-3">{s.bookText}</p>
          {sent ? (
            <div className="mt-8 bg-white rounded-2xl p-8 text-center border border-stone-200">
              <CalendarCheck size={40} className="mx-auto text-green-600" />
              <p className={`${serif.className} text-2xl font-bold mt-4`}>{s.sentTitle}</p>
              <p className="text-stone-600 mt-2">{s.sentText}</p>
              <button onClick={() => setSent(false)} className="mt-6 text-sm font-semibold text-[#c2703d] hover:underline">{s.again}</button>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="mt-8 bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 grid grid-cols-2 gap-4">
              <Field label={s.name} className="col-span-2"><input required name="name" autoComplete="name" className={inputCls} /></Field>
              <Field label={s.phone} className="col-span-2"><input required type="tel" name="phone" autoComplete="tel" className={inputCls} /></Field>
              <Field label={s.date}><input required type="date" name="date" min={today} defaultValue={today} className={inputCls} suppressHydrationWarning /></Field>
              <Field label={s.time}>
                <select name="time" defaultValue="20:30" className={inputCls}>{TIMES.map((t) => <option key={t}>{t}</option>)}</select>
              </Field>
              <Field label={s.people} className="col-span-2">
                <select name="people" defaultValue="2" className={inputCls}>{Array.from({ length: 10 }, (_, i) => <option key={i}>{i + 1}</option>)}</select>
              </Field>
              <button type="submit" className="col-span-2 mt-2 bg-[#c2703d] hover:bg-[#a95e30] text-white font-semibold py-3 rounded-full transition-colors">{s.send}</button>
            </form>
          )}
        </div>
      </section>

      {/* Where */}
      <section id="dove" className="py-20 px-4 scroll-mt-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className={`${serif.className} text-4xl font-bold text-[#0e3b4a]`}>{s.whereTitle}</h2>
            <ul className="mt-6 space-y-4 text-stone-700">
              <li className="flex gap-3"><MapPin className="text-[#c2703d] shrink-0" />{s.address}</li>
              <li className="flex gap-3"><Clock className="text-[#c2703d] shrink-0" /><span>{s.hours}<br /><span className="text-stone-500">{s.closed}</span></span></li>
              <li className="flex gap-3"><Phone className="text-[#c2703d] shrink-0" />{s.phoneDemo}: 0789 000 000</li>
            </ul>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image src={`${IMG}/tavola.jpg`} alt={s.whereTitle} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </section>

      <footer className="bg-[#0e3b4a] text-white/70 text-sm py-10 px-4 text-center">
        <p className={`${serif.className} text-2xl text-white`}>Terrazza Maestrale</p>
        <p className="mt-3 max-w-xl mx-auto">{s.footer}</p>
        <p className="mt-4">
          {s.madeBy}{" "}
          <Link href="/" target="_blank" className="font-semibold text-cyan-300 hover:underline">Qui.SiteApp</Link>
          {" · "}
          <a href={waUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-cyan-300 hover:underline">{s.demoCta}</a>
        </p>
      </footer>
    </div>
  );
}

const inputCls = "w-full mt-1 rounded-lg border border-stone-300 bg-white px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#c2703d]/40 focus:border-[#c2703d]";

function Field({ label, className = "", children }: { label: string; className?: string; children: React.ReactNode }) {
  return <label className={`block text-sm font-medium text-stone-600 ${className}`}>{label}{children}</label>;
}

function LangSwitch({ lang, setLang }: { lang: L; setLang: (l: L) => void }) {
  return (
    <div className="flex rounded-full border border-stone-300 overflow-hidden text-xs font-semibold">
      {(["it", "en"] as const).map((l) => (
        <button key={l} onClick={() => setLang(l)} className={`px-2.5 py-1 uppercase ${lang === l ? "bg-[#0e3b4a] text-white" : ""}`}>{l}</button>
      ))}
    </div>
  );
}
