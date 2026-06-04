"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";
import { Lang } from "@/lib/i18n";

const WHATSAPP_NUMBER = "393883879487";

const messages = {
  it: { tooltip: "Ciao! Come posso aiutarti? 👋", pretext: "Ciao Antoniu! Ho visto il tuo portfolio e vorrei un preventivo." },
  en: { tooltip: "Hi! How can I help you? 👋", pretext: "Hi Antoniu! I saw your portfolio and I'd like a quote." },
  de: { tooltip: "Hallo! Wie kann ich helfen? 👋", pretext: "Hallo Antoniu! Ich habe Ihr Portfolio gesehen und möchte ein Angebot." },
  ro: { tooltip: "Bună! Cum te pot ajuta? 👋", pretext: "Bună Antoniu! Am văzut portofoliul tău și aș dori o ofertă." },
};

export default function WhatsAppFloat({ lang }: { lang: Lang }) {
  const [showTooltip, setShowTooltip] = useState(false);
  const m = messages[lang];
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(m.pretext)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            className="bg-white text-gray-800 text-sm font-medium px-4 py-2 rounded-2xl shadow-lg border border-gray-100 max-w-[200px] text-right"
          >
            {m.tooltip}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-xl shadow-green-200 transition-colors"
        aria-label="WhatsApp"
      >
        {/* WhatsApp SVG icon */}
        <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white">
          <path d="M16 2C8.268 2 2 8.268 2 16c0 2.44.638 4.733 1.754 6.726L2 30l7.463-1.732A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5a11.44 11.44 0 0 1-5.823-1.592l-.418-.247-4.43 1.028 1.054-4.32-.272-.44A11.46 11.46 0 0 1 4.5 16C4.5 9.596 9.596 4.5 16 4.5S27.5 9.596 27.5 16 22.404 27.5 16 27.5zm6.29-8.61c-.345-.172-2.04-1.006-2.355-1.12-.316-.115-.546-.172-.776.172-.23.345-.89 1.12-1.09 1.35-.2.23-.4.258-.745.086-.345-.172-1.455-.536-2.772-1.71-1.024-.914-1.715-2.043-1.915-2.388-.2-.345-.021-.531.15-.703.155-.155.345-.402.517-.603.172-.2.23-.345.345-.575.115-.23.057-.431-.029-.603-.086-.172-.776-1.87-1.063-2.562-.28-.672-.564-.58-.776-.59-.2-.01-.43-.012-.66-.012s-.603.086-.918.431c-.316.345-1.205 1.178-1.205 2.872s1.233 3.332 1.405 3.562c.172.23 2.427 3.708 5.88 5.198.822.355 1.463.567 1.963.726.824.263 1.575.226 2.168.137.661-.099 2.04-.834 2.327-1.638.287-.804.287-1.493.2-1.638-.086-.144-.316-.23-.66-.402z" />
        </svg>
      </motion.a>
    </div>
  );
}
