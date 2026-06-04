"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Send, Mail, Globe, Smartphone, Tv, Code2, CheckCircle2 } from "lucide-react";
import { Lang, t } from "@/lib/i18n";

const WHATSAPP_NUMBER = "393883879487";
const EMAIL = "dysign.soluzioni@gmail.com";

const content = {
  it: {
    title: "Richiedi un preventivo",
    subtitle: "Compila il modulo — ti rispondo entro 24h con un preventivo gratuito.",
    yourName: "Il tuo nome *",
    businessName: "Nome dell'attività *",
    email: "Email *",
    projectType: "Tipo di progetto *",
    appType: "Tipo di app *",
    payment: "Piano di pagamento *",
    notes: "Note aggiuntive (opzionale)",
    send: "Invia richiesta",
    whatsapp: "Preferisci WhatsApp?",
    orForm: "oppure compila il modulo",
    sent: "✓ Richiesta inviata! Ti contatto entro 24h.",
    projectTypes: [
      { value: "web", label: "Sito Web", icon: Globe },
      { value: "app", label: "App Mobile", icon: Smartphone },
      { value: "signage", label: "Digital Signage", icon: Tv },
      { value: "custom", label: "Sviluppo Custom", icon: Code2 },
    ],
    appTypes: [
      { value: "ios", label: "iOS" },
      { value: "android", label: "Android" },
      { value: "both", label: "iOS + Android" },
      { value: "web-app", label: "Web App" },
    ],
    payments: [
      { value: "onetime", label: "Una tantum", desc: "Pagamento unico" },
      { value: "monthly", label: "Mensile", desc: "Canone mensile" },
      { value: "annual", label: "Annuale", desc: "Canone annuale" },
    ],
  },
  en: {
    title: "Request a quote",
    subtitle: "Fill in the form — I'll reply within 24h with a free quote.",
    yourName: "Your name *",
    businessName: "Business name *",
    email: "Email *",
    projectType: "Project type *",
    appType: "App type *",
    payment: "Payment plan *",
    notes: "Additional notes (optional)",
    send: "Send request",
    whatsapp: "Prefer WhatsApp?",
    orForm: "or fill in the form",
    sent: "✓ Request sent! I'll get back to you within 24h.",
    projectTypes: [
      { value: "web", label: "Website", icon: Globe },
      { value: "app", label: "Mobile App", icon: Smartphone },
      { value: "signage", label: "Digital Signage", icon: Tv },
      { value: "custom", label: "Custom Dev", icon: Code2 },
    ],
    appTypes: [
      { value: "ios", label: "iOS" },
      { value: "android", label: "Android" },
      { value: "both", label: "iOS + Android" },
      { value: "web-app", label: "Web App" },
    ],
    payments: [
      { value: "onetime", label: "One-time", desc: "Single payment" },
      { value: "monthly", label: "Monthly", desc: "Monthly subscription" },
      { value: "annual", label: "Annual", desc: "Annual subscription" },
    ],
  },
  de: {
    title: "Angebot anfordern",
    subtitle: "Formular ausfüllen — ich antworte innerhalb von 24h mit einem kostenlosen Angebot.",
    yourName: "Ihr Name *",
    businessName: "Unternehmensname *",
    email: "E-Mail *",
    projectType: "Projekttyp *",
    appType: "App-Typ *",
    payment: "Zahlungsplan *",
    notes: "Zusätzliche Notizen (optional)",
    send: "Anfrage senden",
    whatsapp: "Lieber WhatsApp?",
    orForm: "oder Formular ausfüllen",
    sent: "✓ Anfrage gesendet! Ich melde mich innerhalb von 24h.",
    projectTypes: [
      { value: "web", label: "Website", icon: Globe },
      { value: "app", label: "Mobile App", icon: Smartphone },
      { value: "signage", label: "Digital Signage", icon: Tv },
      { value: "custom", label: "Individual Lösung", icon: Code2 },
    ],
    appTypes: [
      { value: "ios", label: "iOS" },
      { value: "android", label: "Android" },
      { value: "both", label: "iOS + Android" },
      { value: "web-app", label: "Web App" },
    ],
    payments: [
      { value: "onetime", label: "Einmalig", desc: "Einmalzahlung" },
      { value: "monthly", label: "Monatlich", desc: "Monatliches Abo" },
      { value: "annual", label: "Jährlich", desc: "Jahresabo" },
    ],
  },
  ro: {
    title: "Solicită o ofertă",
    subtitle: "Completează formularul — îți răspund în 24h cu o ofertă gratuită.",
    yourName: "Numele tău *",
    businessName: "Numele afacerii *",
    email: "Email *",
    projectType: "Tipul proiectului *",
    appType: "Tipul aplicației *",
    payment: "Plan de plată *",
    notes: "Note suplimentare (opțional)",
    send: "Trimite cererea",
    whatsapp: "Preferi WhatsApp?",
    orForm: "sau completează formularul",
    sent: "✓ Cerere trimisă! Te contactez în 24h.",
    projectTypes: [
      { value: "web", label: "Site Web", icon: Globe },
      { value: "app", label: "App Mobile", icon: Smartphone },
      { value: "signage", label: "Digital Signage", icon: Tv },
      { value: "custom", label: "Soluție Custom", icon: Code2 },
    ],
    appTypes: [
      { value: "ios", label: "iOS" },
      { value: "android", label: "Android" },
      { value: "both", label: "iOS + Android" },
      { value: "web-app", label: "Web App" },
    ],
    payments: [
      { value: "onetime", label: "O singură dată", desc: "Plată unică" },
      { value: "monthly", label: "Lunar", desc: "Abonament lunar" },
      { value: "annual", label: "Anual", desc: "Abonament anual" },
    ],
  },
};

function OptionCard({
  selected,
  onClick,
  children,
}: {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative flex flex-col items-center justify-center gap-1 px-3 py-3 rounded-xl border-2 text-sm font-medium transition-all ${
        selected
          ? "border-blue-500 bg-blue-50 text-blue-700"
          : "border-gray-200 bg-white text-gray-600 hover:border-blue-200"
      }`}
    >
      {selected && (
        <CheckCircle2 size={14} className="absolute top-1.5 right-1.5 text-blue-500" />
      )}
      {children}
    </button>
  );
}

export default function Contact({ lang }: { lang: Lang }) {
  const tr = content[lang];
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    lang === "it"
      ? "Ciao! Ho visto il tuo portfolio e vorrei un preventivo."
      : "Hi! I saw your portfolio and I'd like a quote."
  )}`;

  const [form, setForm] = useState({
    name: "",
    business: "",
    email: "",
    projectType: "",
    appType: "",
    payment: "",
    notes: "",
  });
  const [sent, setSent] = useState(false);

  function set(key: string, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  const showAppType = form.projectType === "app";

  return (
    <section id="contact" className="py-24 px-6 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 mb-3">{tr.title}</h2>
          <p className="text-gray-500 text-lg">{tr.subtitle}</p>
        </motion.div>

        {/* WhatsApp button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-8"
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-2xl transition-colors shadow-lg shadow-green-100"
          >
            <MessageCircle size={20} />
            {tr.whatsapp}
          </a>
        </motion.div>

        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-gray-400 text-sm">{tr.orForm}</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {sent ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16 text-green-600 font-semibold text-xl"
          >
            {tr.sent}
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Name + Business */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{tr.yourName}</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => set("name", e.target.value)}
                  placeholder="Es. Mario Rossi"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-400 bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{tr.businessName}</label>
                <input
                  type="text"
                  required
                  value={form.business}
                  onChange={(e) => set("business", e.target.value)}
                  placeholder="Es. Ristorante da Mario"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-400 bg-white"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{tr.email}</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => set("email", e.target.value)}
                placeholder="mario@esempio.it"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-400 bg-white"
              />
            </div>

            {/* Project type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">{tr.projectType}</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {tr.projectTypes.map((p) => {
                  const Icon = p.icon;
                  return (
                    <OptionCard
                      key={p.value}
                      selected={form.projectType === p.value}
                      onClick={() => set("projectType", p.value)}
                    >
                      <Icon size={20} />
                      <span>{p.label}</span>
                    </OptionCard>
                  );
                })}
              </div>
            </div>

            {/* App type — only shown when Mobile App is selected */}
            {showAppType && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
              >
                <label className="block text-sm font-medium text-gray-700 mb-2">{tr.appType}</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {tr.appTypes.map((a) => (
                    <OptionCard
                      key={a.value}
                      selected={form.appType === a.value}
                      onClick={() => set("appType", a.value)}
                    >
                      <span>{a.label}</span>
                    </OptionCard>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Payment plan */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">{tr.payment}</label>
              <div className="grid grid-cols-3 gap-3">
                {tr.payments.map((p) => (
                  <OptionCard
                    key={p.value}
                    selected={form.payment === p.value}
                    onClick={() => set("payment", p.value)}
                  >
                    <span className="font-bold">{p.label}</span>
                    <span className="text-xs text-gray-400 font-normal">{p.desc}</span>
                  </OptionCard>
                ))}
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{tr.notes}</label>
              <textarea
                rows={3}
                value={form.notes}
                onChange={(e) => set("notes", e.target.value)}
                placeholder={lang === "it" ? "Descrivi brevemente il tuo progetto..." : "Briefly describe your project..."}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-400 bg-white resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl transition-colors text-lg"
            >
              <Send size={18} />
              {tr.send}
            </button>
          </form>
        )}

        <p className="text-center text-gray-400 text-sm mt-6 flex items-center justify-center gap-1">
          <Mail size={14} />
          {EMAIL}
        </p>
      </div>
    </section>
  );
}
