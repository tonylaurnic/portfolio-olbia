export default function NoteLegali() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Note Legali & Contatti</h1>
      <p className="text-gray-400 text-sm mb-10">Ai sensi dell'art. 2250 c.c. e del D.Lgs. 70/2003</p>

      <section className="space-y-8 text-gray-700 leading-relaxed">
        <div>
          <h2 className="font-bold text-gray-900 text-lg mb-2">Titolare del sito</h2>
          <p>Antoniu Laurentiu Stratulat</p>
          <p>Libero professionista — P.IVA: <em>(in fase di attivazione)</em></p>
          <p>Olbia (OT), Sardegna — Italia</p>
        </div>

        <div>
          <h2 className="font-bold text-gray-900 text-lg mb-2">Contatti</h2>
          <p>Email: <a href="mailto:dysign.soluzioni@gmail.com" className="text-blue-600 hover:underline">dysign.soluzioni@gmail.com</a></p>
          <p>WhatsApp: <a href="https://wa.me/393883879487" className="text-blue-600 hover:underline">+39 388 387 9487</a></p>
        </div>

        <div>
          <h2 className="font-bold text-gray-900 text-lg mb-2">Hosting e infrastruttura</h2>
          <p>Il sito è ospitato su Vercel Inc., 340 Pine Street, San Francisco, CA 94104, USA.</p>
        </div>

        <div>
          <h2 className="font-bold text-gray-900 text-lg mb-2">Proprietà intellettuale</h2>
          <p>Tutti i contenuti presenti su questo sito (testi, immagini, loghi, codice) sono di proprietà di Antoniu Laurentiu Stratulat salvo dove diversamente indicato. È vietata la riproduzione senza autorizzazione scritta.</p>
        </div>

        <div>
          <h2 className="font-bold text-gray-900 text-lg mb-2">Limitazione di responsabilità</h2>
          <p>Il titolare non si assume responsabilità per eventuali danni derivanti dall'uso del sito o dall'impossibilità di accedervi.</p>
        </div>
      </section>

      <div className="mt-12">
        <a href="/" className="text-blue-600 hover:underline text-sm">← Torna alla home</a>
      </div>
    </main>
  );
}
