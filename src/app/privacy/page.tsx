import LegalLayout from "@/components/LegalLayout";

export default function Privacy() {
  return (
    <LegalLayout>
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Informativa sulla Privacy</h1>
      <p className="text-gray-400 text-sm mb-10">Ai sensi del Regolamento UE 2016/679 (GDPR)</p>

      <section className="space-y-8 text-gray-700 leading-relaxed">
        <div>
          <h2 className="font-bold text-gray-900 text-lg mb-2">Titolare del trattamento</h2>
          <p>Antoniu Laurentiu Stratulat — Olbia (OT), Italia</p>
          <p>Email: <a href="mailto:dysign.soluzioni@gmail.com" className="text-blue-600 hover:underline">dysign.soluzioni@gmail.com</a></p>
        </div>

        <div>
          <h2 className="font-bold text-gray-900 text-lg mb-2">Dati raccolti</h2>
          <p>Attraverso il modulo di contatto raccogliamo:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Nome e cognome</li>
            <li>Indirizzo email</li>
            <li>Nome dell'attività</li>
            <li>Messaggio libero</li>
          </ul>
          <p className="mt-3">I dati vengono raccolti esclusivamente per rispondere alle richieste di preventivo e non vengono ceduti a terzi.</p>
        </div>

        <div>
          <h2 className="font-bold text-gray-900 text-lg mb-2">Base giuridica del trattamento</h2>
          <p>Il trattamento è basato sul consenso dell'utente (art. 6, par. 1, lett. a GDPR) e sull'esecuzione di misure precontrattuali (art. 6, par. 1, lett. b GDPR).</p>
        </div>

        <div>
          <h2 className="font-bold text-gray-900 text-lg mb-2">Conservazione dei dati</h2>
          <p>I dati vengono conservati per il tempo necessario a gestire la richiesta e comunque non oltre 2 anni dalla ricezione.</p>
        </div>

        <div>
          <h2 className="font-bold text-gray-900 text-lg mb-2">Diritti dell'interessato</h2>
          <p>Hai il diritto di accedere ai tuoi dati, rettificarli, cancellarli o opporti al loro trattamento. Per esercitare questi diritti scrivi a: <a href="mailto:dysign.soluzioni@gmail.com" className="text-blue-600 hover:underline">dysign.soluzioni@gmail.com</a></p>
        </div>

        <div>
          <h2 className="font-bold text-gray-900 text-lg mb-2">Dati di navigazione</h2>
          <p>I sistemi informatici acquisiscono automaticamente alcuni dati tecnici (indirizzo IP, tipo di browser, pagine visitate) necessari al funzionamento del sito. Questi dati non vengono associati a utenti specifici.</p>
        </div>

        <div>
          <h2 className="font-bold text-gray-900 text-lg mb-2">Aggiornamenti</h2>
          <p>Questa informativa può essere aggiornata. La versione vigente è sempre disponibile su questa pagina.</p>
          <p className="text-sm text-gray-400 mt-1">Ultimo aggiornamento: maggio 2026</p>
        </div>
      </section>

      <div className="mt-12">
        <a href="/" className="text-blue-600 hover:underline text-sm">← Torna alla home</a>
      </div>
    </main>
    </LegalLayout>
  );
}
