"use client";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { LogoScrolled } from "@/components/Logo";

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      {/* Mini navbar */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/">
            <LogoScrolled size={28} />
          </Link>
          <Link
            href="/"
            className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft size={15} />
            Torna alla home
          </Link>
        </div>
      </header>
      {children}
    </div>
  );
}
