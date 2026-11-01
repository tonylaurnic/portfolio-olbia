"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, CheckCircle2, RefreshCw } from "lucide-react";
import Image from "next/image";
import { Lang } from "@/lib/i18n";

export type ProjectData = {
  title: string;
  category: Record<string, string>;
  desc: Record<string, string>;
  result: Record<string, string>;
  tags: string[];
  color: string;
  emoji?: string;
  image?: string;
  year: string;
  real?: boolean;
  url?: string;
  stores?: { appStore?: string; playStore?: string };
};

const storeLabels: Record<Lang, { appStore: string; playStore: string }> = {
  it: { appStore: "Scarica su", playStore: "Disponibile su" },
  en: { appStore: "Download on the", playStore: "Get it on" },
  de: { appStore: "Laden im", playStore: "Jetzt bei" },
  ro: { appStore: "Descarcă din", playStore: "Descarcă de pe" },
};

function StoreBadge({ href, label, name, children }: { href: string; label: string; name: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 h-11 pl-2.5 pr-3.5 bg-black hover:bg-gray-800 text-white border border-gray-600 rounded-lg shadow-sm transition-colors"
    >
      {children}
      <span className="flex flex-col text-left">
        <span className="text-[10px] leading-none text-gray-200 whitespace-nowrap">{label}</span>
        <span className="text-[17px] leading-tight font-semibold whitespace-nowrap">{name}</span>
      </span>
    </a>
  );
}

export function StoreLinks({ stores, lang }: { stores: NonNullable<ProjectData["stores"]>; lang: Lang }) {
  const labels = storeLabels[lang];
  return (
    <div className="flex flex-wrap gap-2" onClick={(e) => e.stopPropagation()}>
      {stores.appStore && (
        <StoreBadge href={stores.appStore} label={labels.appStore} name="App Store">
          <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current shrink-0" aria-hidden="true">
            <path d="M17.05 12.54c-.03-2.6 2.13-3.86 2.22-3.92-1.21-1.77-3.1-2.01-3.77-2.04-1.6-.16-3.13.94-3.94.94-.81 0-2.07-.92-3.4-.89-1.75.03-3.36 1.02-4.26 2.58-1.82 3.15-.46 7.82 1.3 10.38.87 1.25 1.9 2.65 3.25 2.6 1.3-.05 1.8-.84 3.37-.84 1.57 0 2.02.84 3.4.81 1.4-.02 2.29-1.27 3.15-2.53.99-1.45 1.4-2.86 1.42-2.93-.03-.01-2.71-1.04-2.74-4.16zM14.46 4.9c.72-.87 1.2-2.08 1.07-3.29-1.03.04-2.28.69-3.02 1.56-.66.76-1.24 1.99-1.09 3.17 1.15.09 2.32-.58 3.04-1.44z" />
          </svg>
        </StoreBadge>
      )}
      {stores.playStore && (
        <StoreBadge href={stores.playStore} label={labels.playStore} name="Google Play">
          <svg viewBox="0 0 24 24" className="w-7 h-7 shrink-0" aria-hidden="true">
            <path fill="#00c3ff" d="M4 3.3v17.4c0 .3.1.5.2.7L13.5 12 4.2 2.6c-.1.2-.2.4-.2.7z" />
            <path fill="#00e676" d="M4.2 2.6 13.5 12l3.2-3.2L5.7 2.5c-.6-.3-1.1-.2-1.5.1z" />
            <path fill="#ffd600" d="m16.7 8.8-3.2 3.2 3.2 3.2 4.2-2.4c.8-.5.8-1.6 0-2z" />
            <path fill="#ff3a44" d="M4.2 21.4c.4.3.9.4 1.5.1l11-6.3-3.2-3.2z" />
          </svg>
        </StoreBadge>
      )}
    </div>
  );
}

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

function PhoneMockup({ image, title, stores }: { image?: string; title: string; stores: NonNullable<ProjectData["stores"]> }) {
  const platforms = [stores.appStore && "iPhone", stores.playStore && "Android"].filter(Boolean).join(" · ");

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
              <p className="text-gray-400 text-xs mt-1">{platforms}</p>
            </div>
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
              {project.stores ? (
                <PhoneMockup image={project.image} title={project.title} stores={project.stores} />
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
                  {project.stores && (
                    <div className="mt-2">
                      <StoreLinks stores={project.stores} lang={lang} />
                    </div>
                  )}
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
