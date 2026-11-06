import type { Metadata } from "next";
import RestaurantDemo from "@/components/demo/RestaurantDemo";

// Fictional restaurant used as a live sample: kept out of search results so it is never mistaken for a real venue.
export const metadata: Metadata = {
  title: "Demo sito per ristoranti | Qui.SiteApp",
  description: "Esempio di sito web per un ristorante realizzato da Qui.SiteApp: menu, galleria, prenotazione e versione in inglese.",
  robots: { index: false, follow: true },
};

export default function RistoranteDemoPage() {
  return <RestaurantDemo />;
}
