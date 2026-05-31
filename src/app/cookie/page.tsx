import LegalLayout from "@/components/LegalLayout";

export default function Cookie() {
  return (
    <LegalLayout>
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Politica sui Cookie</h1>
      <p className="text-gray-400 text-sm mb-10">Ai sensi della Direttiva UE 2009/136/CE e del GDPR</p>

      <section className="space-y-8 text-gray-700 leading-relaxed">
        <div>
          <h2 className="font-bold text-gray-900 text-lg mb-2">Cosa sono i cookie</h2>
          <p>I cookie sono piccoli file di testo che i siti web salvano sul tuo dispositivo quando li visiti. Servono a far funzionare il sito correttamente e a migliorare la tua esperienza di navigazione.</p>
        </div>

        <div>
          <h2 className="font-bold text-gray-900 text-lg mb-2">Cookie utilizzati su questo sito</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse mt-2">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">Tipo</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">Scopo</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">Durata</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border border-gray-200">Tecnici</td>
                  <td className="p-3 border border-gray-200">Necessari al funzionamento del sito (preferenza lingua)</td>
                  <td className="p-3 border border-gray-200">Sessione</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 border border-gray-200">Analitici anonimi</td>
                  <td className="p-3 border border-gray-200">Statistiche di visita aggregate (nessun dato personale)</td>
                  <td className="p-3 border border-gray-200">30 giorni</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-gray-500">Questo sito <strong>non utilizza</strong> cookie di profilazione o cookie di terze parti per pubblicità.</p>
        </div>

        <div>
          <h2 className="font-bold text-gray-900 text-lg mb-2">Come disabilitare i cookie</h2>
          <p>Puoi disabilitare i cookie nelle impostazioni del tuo browser. Tieni presente che la disabilitazione potrebbe influire sul corretto funzionamento di alcune parti del sito.</p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
            <li><strong>Chrome:</strong> Impostazioni → Privacy e sicurezza → Cookie</li>
            <li><strong>Safari:</strong> Preferenze → Privacy → Gestisci dati sito web</li>
            <li><strong>Firefox:</strong> Impostazioni → Privacy e sicurezza → Cookie</li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-gray-900 text-lg mb-2">Contatti</h2>
          <p>Per qualsiasi domanda sui cookie scrivi a: <a href="mailto:dysign.soluzioni@gmail.com" className="text-blue-600 hover:underline">dysign.soluzioni@gmail.com</a></p>
          <p className="text-sm text-gray-400 mt-2">Ultimo aggiornamento: maggio 2026</p>
        </div>
      </section>

    </main>
    </LegalLayout>
  );
}
