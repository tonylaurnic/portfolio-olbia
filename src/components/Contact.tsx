"use client";
import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle2, Loader2 } from "lucide-react";
import { Lang } from "@/lib/i18n";
import { sendEmail, CONTACT_EMAIL } from "@/lib/sendEmail";

type Copy = {
  title: string; subtitle: string;
  name: string; email: string; message: string; messagePlaceholder: string;
  send: string; sending: string;
  sentTitle: string; sentText: string; again: string;
  error: string; privacy: string; privacyLink: string; orEmail: string;
  subject: string;
};

const content: Record<Lang, Copy> = {
  it: {
    title: "Richiedi un preventivo",
    subtitle: "Raccontaci il tuo progetto: riceverai entro 24 ore un preventivo gratuito.",
    name: "Nome *", email: "Email *", message: "Messaggio *",
    messagePlaceholder: "Che tipo di attività hai e cosa ti serve?",
    send: "Invia la richiesta", sending: "Invio in corso…",
    sentTitle: "Messaggio inviato!", sentText: "Grazie, ti rispondiamo entro 24 ore all'indirizzo email che hai indicato.", again: "Invia un altro messaggio",
    error: "Invio non riuscito. Riprova tra poco oppure scrivici direttamente a",
    privacy: "Inviando il modulo accetti il trattamento dei dati per rispondere alla richiesta, come descritto nella", privacyLink: "Privacy",
    orEmail: "oppure scrivici a",
    subject: "Nuova richiesta dal sito",
  },
  en: {
    title: "Request a quote",
    subtitle: "Tell us about your project: you will receive a free quote within 24 hours.",
    name: "Name *", email: "Email *", message: "Message *",
    messagePlaceholder: "What kind of business do you have and what do you need?",
    send: "Send request", sending: "Sending…",
    sentTitle: "Message sent!", sentText: "Thank you, we'll reply within 24 hours to the email address you provided.", again: "Send another message",
    error: "Sending failed. Please try again shortly or write to us directly at",
    privacy: "By sending this form you agree to the processing of your data to answer your request, as described in the", privacyLink: "Privacy Policy",
    orEmail: "or write to",
    subject: "New request from the website",
  },
  de: {
    title: "Angebot anfordern",
    subtitle: "Erzählen Sie uns von Ihrem Projekt: Sie erhalten innerhalb von 24 Stunden ein kostenloses Angebot.",
    name: "Name *", email: "E-Mail *", message: "Nachricht *",
    messagePlaceholder: "Was für ein Unternehmen haben Sie und was brauchen Sie?",
    send: "Anfrage senden", sending: "Wird gesendet…",
    sentTitle: "Nachricht gesendet!", sentText: "Vielen Dank, wir antworten innerhalb von 24 Stunden an die angegebene E-Mail-Adresse.", again: "Weitere Nachricht senden",
    error: "Senden fehlgeschlagen. Bitte versuchen Sie es gleich noch einmal oder schreiben Sie uns direkt an",
    privacy: "Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten zur Beantwortung Ihrer Anfrage zu, wie in der", privacyLink: "Datenschutzerklärung beschrieben",
    orEmail: "oder schreiben Sie an",
    subject: "Neue Anfrage über die Website",
  },
  ro: {
    title: "Solicită o ofertă",
    subtitle: "Povestește-ne despre proiectul tău: vei primi o ofertă gratuită în 24 de ore.",
    name: "Nume *", email: "Email *", message: "Mesaj *",
    messagePlaceholder: "Ce fel de afacere ai și de ce ai nevoie?",
    send: "Trimite cererea", sending: "Se trimite…",
    sentTitle: "Mesaj trimis!", sentText: "Mulțumim, îți răspundem în 24 de ore la adresa de email indicată.", again: "Trimite alt mesaj",
    error: "Trimiterea nu a reușit. Încearcă din nou în curând sau scrie-ne direct la",
    privacy: "Trimițând formularul accepți prelucrarea datelor pentru a răspunde cererii, așa cum este descris în", privacyLink: "Politica de confidențialitate",
    orEmail: "sau scrie-ne la",
    subject: "Cerere nouă de pe site",
  },
};

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact({ lang }: { lang: Lang }) {
  const tr = content[lang];
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const get = (k: string) => String(data.get(k) ?? "").trim();
    setStatus("sending");
    try {
      await sendEmail({
        subject: `${tr.subject} — ${get("name")}`,
        name: get("name"),
        email: get("email"),
        message: get("message"),
        botcheck: get("botcheck"),
      });
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  const field = "w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition";

  return (
    <section id="contact" className="py-24 px-6 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto"
      >
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-3">{tr.title}</h2>
          <p className="text-gray-500 text-lg mb-10">{tr.subtitle}</p>
        </div>

        {status === "sent" ? (
          <div className="bg-white border border-gray-200 rounded-2xl p-10 text-center" role="status">
            <CheckCircle2 size={44} className="mx-auto text-green-500" />
            <p className="mt-4 text-2xl font-bold text-gray-900">{tr.sentTitle}</p>
            <p className="mt-2 text-gray-500">{tr.sentText}</p>
            <button onClick={() => setStatus("idle")} className="mt-6 text-sm font-semibold text-blue-600 hover:underline">{tr.again}</button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 grid sm:grid-cols-2 gap-4 text-left">
            {/* Honeypot: hidden from people, filled by bots */}
            <input type="text" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
            <div>
              <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-1">{tr.name}</label>
              <input id="contact-name" name="name" required pattern=".*\S.*" maxLength={100} autoComplete="name" className={field} />
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-1">{tr.email}</label>
              <input id="contact-email" name="email" type="email" required maxLength={200} autoComplete="email" className={field} />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-1">{tr.message}</label>
              <textarea id="contact-message" name="message" required minLength={5} maxLength={4000} rows={5} placeholder={tr.messagePlaceholder} className={`${field} resize-none`} />
            </div>
            <p className="sm:col-span-2 text-xs text-gray-500">
              {tr.privacy} <a href="/privacy" className="text-blue-600 hover:underline">{tr.privacyLink}</a>.
            </p>
            {status === "error" && (
              <p className="sm:col-span-2 text-sm text-red-600" role="alert">
                {tr.error} <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold underline">{CONTACT_EMAIL}</a>.
              </p>
            )}
            <button
              type="submit"
              disabled={status === "sending"}
              className="sm:col-span-2 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:opacity-60 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
            >
              {status === "sending" ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
              {status === "sending" ? tr.sending : tr.send}
            </button>
          </form>
        )}

        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="mt-6 text-gray-500 hover:text-blue-600 text-sm flex items-center justify-center gap-1 transition-colors"
        >
          <Mail size={14} />
          {tr.orEmail} {CONTACT_EMAIL}
        </a>
      </motion.div>
    </section>
  );
}
