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
          <p>Email: <a href="mailto:info@quisiteapp.it" className="text-blue-600 hover:underline">info@quisiteapp.it</a></p>
        </div>

        <div>
          <h2 className="font-bold text-gray-900 text-lg mb-2">Dati raccolti</h2>
          <p>Quando compili il modulo di contatto o il modulo di preventivo, oppure ci scrivi via email, trattiamo i dati che ci invii, ad esempio:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Nome e cognome</li>
            <li>Indirizzo email e numero di telefono</li>
            <li>Nome dell'attività</li>
            <li>Contenuto del messaggio e scelte fatte nel calcolatore del preventivo</li>
          </ul>
          <p className="mt-3">Il sito non salva questi dati in un proprio database: il messaggio viene inoltrato alla nostra casella email. I dati vengono usati esclusivamente per rispondere alle richieste e non vengono venduti né ceduti a terzi per altri scopi.</p>
        </div>

        <div>
          <h2 className="font-bold text-gray-900 text-lg mb-2">Fornitori che trattano i dati</h2>
          <p>Per recapitare i messaggi dei moduli usiamo Web3Forms, un servizio esterno che riceve il modulo e lo inoltra via email a <a href="mailto:info@quisiteapp.it" className="text-blue-600 hover:underline">info@quisiteapp.it</a>. Web3Forms tratta i dati solo per questo invio, secondo la propria <a href="https://web3forms.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">informativa privacy</a>.</p>
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
          <p>Hai il diritto di accedere ai tuoi dati, rettificarli, cancellarli o opporti al loro trattamento. Per esercitare questi diritti scrivi a: <a href="mailto:info@quisiteapp.it" className="text-blue-600 hover:underline">info@quisiteapp.it</a></p>
        </div>

        <div>
          <h2 className="font-bold text-gray-900 text-lg mb-2">Dati di navigazione</h2>
          <p>I sistemi informatici acquisiscono automaticamente alcuni dati tecnici (indirizzo IP, tipo di browser, pagine visitate) necessari al funzionamento del sito. Questi dati non vengono associati a utenti specifici.</p>
        </div>

        <div>
          <h2 className="font-bold text-gray-900 text-lg mb-2">Aggiornamenti</h2>
          <p>Questa informativa può essere aggiornata. La versione vigente è sempre disponibile su questa pagina.</p>
          <p className="text-sm text-gray-400 mt-1">Ultimo aggiornamento: novembre 2026</p>
        </div>
      </section>

      <div className="mt-12">
        <a href="/" className="text-blue-600 hover:underline text-sm">← Torna alla home</a>
      </div>
    </main>
    </LegalLayout>
  );
}
