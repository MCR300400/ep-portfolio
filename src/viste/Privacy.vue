<template>
  <div class="pagina-privacy">
    <h1>Informativa sulla Privacy & Analytics</h1>
    <p class="data-aggiornamento">Ultimo aggiornamento: Settembre 2026</p>

    <section>
      <h2>Filosofia Privacy-First</h2>
      <p>
        Questo sito web è progettato seguendo il principio della <em>privacy by design</em>.
        Raccogliamo esclusivamente metriche aggregate anonime necessarie al monitoraggio delle prestazioni tecniche
        e alla comprensione delle visite, senza profilazione dell'utente né cessione a terze parti.
      </p>
    </section>

    <section>
      <h2>Zero Cookie, Zero Storage Locale</h2>
      <p>
        Questo sito web <strong>non utilizza cookie</strong> di tracciamento, né memorizza identificatori persistenti
        tramite <code>localStorage</code> o <code>sessionStorage</code>. Per questo motivo non è necessario alcun
        banner o popup di consenso preventivo ai sensi delle linee guida GDPR ed ePrivacy.
      </p>
    </section>

    <section>
      <h2>Come funziona l'anonimizzazione dei visitatori</h2>
      <p>
        Le metriche di visita sono elaborate tramite un backend proprietario (Cloudflare Worker):
      </p>
      <ul>
        <li>
          <strong>Nessun indirizzo IP in chiaro</strong> viene mai salvato nel database.
        </li>
        <li>
          L'identificatore del visitatore è generato calcolando un hash crittografico SHA-256 combinando
          l'indirizzo IP, il browser User-Agent, un segreto lato server (SALT) e la data corrente.
        </li>
        <li>
          L'hash ruota e si resetta automaticamente ogni 24 ore: non è possibile correlare le visite dello stesso
          utente tra giorni diversi né ricostruire la cronologia personale dell'utente nel tempo.
        </li>
      </ul>
    </section>

    <section>
      <h2>Dati Raccolti</h2>
      <p>I soli dati registrati sono:</p>
      <ul>
        <li>Percorso della pagina visualizzata (URL path)</li>
        <li>Referrer (sito web di provenienza, se disponibile)</li>
        <li>Stima del tempo di permanenza sulla singola pagina</li>
        <li>Paese e città approssimativi ricavati a livello edge (senza geolocalizzazione GPS)</li>
      </ul>
    </section>

    <section>
      <h2>Titolare del Trattamento</h2>
      <p>
        Per qualsiasi informazione o chiarimento sul trattamento dei dati, puoi contattare
        <strong>Edoardo Pippi</strong> all'indirizzo email
        <a href="mailto:edoardo.pippi@example.com">edoardo.pippi@example.com</a>.
      </p>
    </section>
  </div>
</template>

<style scoped>
.pagina-privacy {
  padding: 2.5rem 0;
  max-width: 720px;
  line-height: 1.65;
}

h1 {
  font-size: 2.2rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
}

.data-aggiornamento {
  color: #94a3b8;
  font-size: 0.85rem;
  margin-bottom: 2rem;
}

section {
  margin-bottom: 2rem;
}

h2 {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 0.6rem;
  color: #0f172a;
}

@media (prefers-color-scheme: dark) {
  h2 {
    color: #f1f5f9;
  }
}

p {
  color: #475569;
  margin-bottom: 0.75rem;
}

@media (prefers-color-scheme: dark) {
  p {
    color: #94a3b8;
  }
}

ul {
  padding-left: 1.25rem;
  color: #475569;
}

@media (prefers-color-scheme: dark) {
  ul {
    color: #94a3b8;
  }
}

li {
  margin-bottom: 0.4rem;
}

code {
  background: #f1f5f9;
  padding: 0.15rem 0.35rem;
  border-radius: 4px;
  font-size: 0.88em;
}

@media (prefers-color-scheme: dark) {
  code {
    background: #334155;
    color: #e2e8f0;
  }
}

a {
  color: #2563eb;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
