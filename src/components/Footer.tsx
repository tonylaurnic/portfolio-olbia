import Link from "next/link";
import Logo from "@/components/Logo";
import { Lang, t } from "@/lib/i18n";

export default function Footer({ lang }: { lang: Lang }) {
  const year = new Date().getFullYear();

  const legal = {
    it: [
      { label: "Note Legali & Contatti", href: "/note-legali" },
      { label: "Informativa sulla Privacy", href: "/privacy" },
      { label: "Politica sui Cookie", href: "/cookie" },
    ],
    en: [
      { label: "Legal Notice & Contacts", href: "/note-legali" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Cookie Policy", href: "/cookie" },
    ],
  };

  return (
    <footer className="bg-[#070d1f] text-gray-400 pt-12 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mb-10">
          <div className="flex flex-col items-center md:items-start gap-3">
            <Logo size={34} />
            <p className="text-sm text-gray-500 max-w-xs text-center md:text-left">
              {lang === "it"
                ? "Sviluppatore freelance a Olbia, Sardegna."
                : "Freelance developer in Olbia, Sardinia."}
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-600 mb-1">
              {lang === "it" ? "Legale & Informazioni" : "Legal & Information"}
            </p>
            {legal[lang].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 text-center text-xs text-gray-600">
          © {year} Qui.SiteApp — Antoniu Laurentiu Stratulat — {t[lang].footer.rights}
        </div>
      </div>
    </footer>
  );
}
