import Logo from "@/components/Logo";
import { Lang, t } from "@/lib/i18n";

export default function Footer({ lang }: { lang: Lang }) {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#070d1f] text-gray-400 py-10 px-6 text-center text-sm">
      <div className="flex justify-center mb-3">
        <Logo size={34} />
      </div>
      <p>© {year} — {t[lang].footer.rights}</p>
    </footer>
  );
}
