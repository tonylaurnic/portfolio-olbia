"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, CheckCircle2, RefreshCw } from "lucide-react";
import Image from "next/image";
import { Lang } from "@/lib/i18n";

export type ProjectData = {
  title: string;
  category: { it: string; en: string };
  desc: { it: string; en: string };
  result: { it: string; en: string };
  tags: string[];
  color: string;
  emoji?: string;
  image?: string;
  year: string;
  real?: boolean;
  url?: string;
};

interface Props {
  project: ProjectData | null;
  onClose: () => void;
  lang: Lang;
}

function BrowserMockup({ url, title }: { url: string; title: string }) {
  const [blocked, setBlocked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [key, setKey] = useState(0);

  return (
    <div className="flex flex-col h-full bg-[#1e1e1e] rounded-t-2xl overflow-hidden">
      {/* Traffic lights + tab bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#2d2d2d]">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        {/* Address bar */}
        <div className="flex-1 mx-3 flex items-center gap-2 bg-[#3a3a3a] rounded-md px-3 py-1">
          <div className="w-3 h-3 rounded-full border border-green-500 border-opacity-60 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
          </div>
          <span className="text-[11px] text-gray-300 font-mono truncate flex-1">{url}</span>
          <button onClick={() => { setKey(k => k + 1); setBlocked(false); setLoading(true); }}>
            <RefreshCw size={11} className="text-gray-400 hover:text-white transition-colors" />
          </button>
        </div>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <ExternalLink size={13} className="text-gray-400 hover:text-white transition-colors" />
        </a>
      </div>

      {/* Viewport */}
      <div className="relative flex-1 bg-white">
        {loading && !blocked && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-50 z-10">
            <div className="flex flex-col items-center gap-3">
              <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
              <span className="text-xs text-gray-400">Caricamento...</span>
            </div>
          </div>
        )}

        {blocked ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 gap-5 p-8">
            <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center">
              <ExternalLink size={28} className="text-blue-600" />
            </div>
            <div className="text-center">
              <p className="font-bold text-gray-800 text-lg mb-1">{title}</p>
              <p className="text-sm text-gray-500 mb-6">
                {`Il sito non consente l'anteprima incorporata.`}<br />
                {"Aprilo direttamente nel browser."}
              </p>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
              >
                <ExternalLink size={16} />
                Visita {title}
              </a>
            </div>
          </div>
        ) : (
          <iframe
            key={key}
            src={url}
            className="w-full h-full border-0"
            title={title}
            onLoad={() => setLoading(false)}
            onError={() => { setBlocked(true); setLoading(false); }}
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          />
        )}
      </div>
    </div>
  );
}

function PhoneMockup({ image, title, url, lang }: { image?: string; title: string; url?: string; lang: Lang }) {
  return (
    <div className="flex items-center justify-center flex-1 bg-gradient-to-br from-gray-900 to-gray-800 py-8">
      {/* Phone frame */}
      <div className="relative w-56 h-[480px]">
        {/* Outer shell */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-700 to-gray-900 rounded-[3rem] shadow-2xl border border-gray-600" />
        {/* Side buttons */}
        <div className="absolute -left-1 top-24 w-1 h-10 bg-gray-600 rounded-l-sm" />
        <div className="absolute -left-1 top-36 w-1 h-10 bg-gray-600 rounded-l-sm" />
        <div className="absolute -right-1 top-28 w-1 h-14 bg-gray-600 rounded-r-sm" />
        {/* Screen bezel */}
        <div className="absolute inset-[6px] bg-black rounded-[2.5rem] overflow-hidden">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-b-2xl z-10 flex items-center justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-gray-700" />
            <div className="w-3 h-3 rounded-full bg-gray-800 border border-gray-700" />
          </div>
          {/* Screen content */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black flex flex-col items-center justify-center gap-5 pt-6">
            {image ? (
              <div className="relative w-24 h-24 rounded-2xl overflow-hidden shadow-2xl">
                <Image src={image} alt={title} fill className="object-cover" />
              </div>
            ) : (
              <div className="w-24 h-24 rounded-2xl bg-gray-700 flex items-center justify-center text-4xl">📱</div>
            )}
            <div className="text-center px-4">
              <p className="text-white font-bold text-base">{title}</p>
              <p className="text-gray-400 text-xs mt-1">Android App</p>
            </div>
            {/* Fake app UI */}
            <div className="w-full px-4 space-y-2">
              <div className="h-2 bg-gray-700 rounded-full" />
              <div className="h-2 bg-gray-700 rounded-full w-3/4" />
              <div className="h-8 bg-blue-600/40 rounded-xl mt-3 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse mr-1" />
                <span className="text-white text-xs font-bold">REC</span>
              </div>
            </div>
            {url && (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 bg-white text-gray-900 text-xs font-bold px-4 py-2 rounded-xl mt-2 hover:bg-gray-100 transition-colors shadow"
              >
                <ExternalLink size={12} />
                {lang === "it" ? "Apri su Play Store" : "Open on Play Store"}
              </a>
            )}
          </div>
        </div>
        {/* Home indicator */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-16 h-1 bg-gray-500 rounded-full" />
      </div>
    </div>
  );
}

export default function ProjectModal({ project, onClose, lang }: Props) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = project ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  const isPlayStore = project?.url?.includes("play.google.com");

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 60, scale: 0.96 }}
            transition={{ type: "spring", damping: 26, stiffness: 260 }}
            className="fixed inset-x-4 top-[3vh] bottom-[3vh] md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-[900px] bg-white rounded-3xl shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-8 h-8 bg-black/10 hover:bg-black/20 rounded-full flex items-center justify-center transition-colors"
            >
              <X size={16} />
            </button>

            {/* Preview — takes most space */}
            <div className="flex-1 overflow-hidden flex flex-col min-h-0">
              {isPlayStore ? (
                <PhoneMockup image={project.image} title={project.title} url={project.url} lang={lang} />
              ) : project.url ? (
                <BrowserMockup url={project.url} title={project.title} />
              ) : project.image ? (
                <div className="flex-1 relative bg-gray-900 flex items-center justify-center overflow-hidden">
                  <Image src={project.image} alt={project.title} fill className="object-contain" />
                </div>
              ) : (
                <div className={`bg-gradient-to-br ${project.color} flex-1 flex items-center justify-center`}>
                  <span className="text-9xl">{project.emoji}</span>
                </div>
              )}
            </div>

            {/* Info strip at bottom */}
            <div className="shrink-0 border-t bg-white px-6 py-4">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-0.5">
                    <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">{project.category[lang]}</span>
                    <span className="text-xs text-gray-400">{project.year}</span>
                    {project.real && (
                      <span className="flex items-center gap-1 text-xs text-green-600 font-semibold">
                        <CheckCircle2 size={11} />
                        {lang === "it" ? "Progetto reale" : "Real project"}
                      </span>
                    )}
                  </div>
                  <h2 className="font-extrabold text-gray-900 text-xl leading-tight">{project.title}</h2>
                  <p className="text-gray-500 text-xs mt-1 leading-relaxed line-clamp-2">{project.desc[lang]}</p>
                </div>
                <div className="shrink-0 text-right">
                  <p className="text-green-600 font-semibold text-xs">✓ {project.result[lang]}</p>
                  <div className="flex flex-wrap gap-1 mt-2 justify-end">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
