<script setup>
import { useLingua } from '../composables/useLingua'

const { isItalian } = useLingua()
</script>

<template>
  <div class="contenitore pagina-privacy" v-if="isItalian">
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
      <h2>Zero Cookie, Preferenze Tecniche Essenziali</h2>
      <p>
        Questo sito web <strong>non utilizza cookie</strong> di profilazione o tracciamento.
        L'unica informazione salvata localmente nel browser (tramite <code>localStorage</code>) è strettamente tecnica ed
        esente da obbligo di consenso: serve unicamente a ricordare la preferenza sul tema visivo scelto (chiaro o scuro) e la lingua selezionata.
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
          l'indirizzo IP, il browser User-Agent, un segreto lato server (SALT) e la data UTC corrente.
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
        <a href="mailto:edoardopippi00@gmail.com">edoardopippi00@gmail.com</a>.
      </p>
    </section>
  </div>

  <div class="contenitore pagina-privacy" v-else>
    <h1>Privacy Policy & Analytics Notice</h1>
    <p class="data-aggiornamento">Last updated: September 2026</p>

    <section>
      <h2>Privacy-First Philosophy</h2>
      <p>
        This website is built adhering to strict <em>privacy by design</em> principles.
        We only collect anonymous aggregate metrics necessary to monitor technical performance
        and gauge overall visits, without any user profiling or third-party data sharing.
      </p>
    </section>

    <section>
      <h2>Zero Cookies, Essential Technical Storage Only</h2>
      <p>
        This website <strong>does not use cookies</strong> for profiling or tracking.
        The only client-side storage used (via <code>localStorage</code>) is strictly technical and
        consent-exempt: it simply remembers your preferred visual theme (light or dark) and language preference.
      </p>
    </section>

    <section>
      <h2>How Visitor Anonymization Works</h2>
      <p>
        Visit metrics are processed by a custom serverless backend (Cloudflare Worker):
      </p>
      <ul>
        <li>
          <strong>No plain-text IP addresses</strong> are ever stored in the database.
        </li>
        <li>
          Visitor IDs are generated via a SHA-256 cryptographic hash combining the client IP address,
          browser User-Agent, a server-side secret (SALT), and the current UTC date.
        </li>
        <li>
          The hash automatically rotates and resets every 24 hours: it is impossible to link visits from
          the same user across different days or reconstruct an individual browsing history over time.
        </li>
      </ul>
    </section>

    <section>
      <h2>Data Collected</h2>
      <p>The only information logged consists of:</p>
      <ul>
        <li>Requested page path (URL path)</li>
        <li>Referrer (originating website, if present)</li>
        <li>Estimated time spent on the page</li>
        <li>Approximate country and city resolved at the Cloudflare edge (no GPS tracking)</li>
      </ul>
    </section>

    <section>
      <h2>Data Controller</h2>
      <p>
        For any inquiries or information regarding data handling, feel free to contact
        <strong>Edoardo Pippi</strong> at
        <a href="mailto:edoardopippi00@gmail.com">edoardopippi00@gmail.com</a>.
      </p>
    </section>
  </div>
</template>

<style scoped>
.pagina-privacy {
  padding: 2.5rem 0;
  max-width: 720px;
  line-height: 1.7;
}

h1 {
  font-size: 2.2rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  color: var(--testo-primario);
  letter-spacing: -0.015em;
}

.data-aggiornamento {
  color: var(--testo-terziario);
  font-size: 0.85rem;
  margin-bottom: 2rem;
}

section {
  margin-bottom: 2.25rem;
}

h2 {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 0.6rem;
  color: var(--testo-primario);
}

p {
  color: var(--testo-secondario);
  margin-bottom: 0.75rem;
}

ul {
  padding-left: 1.25rem;
  color: var(--testo-secondario);
}

li {
  margin-bottom: 0.4rem;
}

code {
  background: var(--bg-superficie-elevata);
  color: var(--accento);
  padding: 0.15rem 0.38rem;
  border-radius: 4px;
  border: 1px solid var(--bordo-sottile);
  font-size: 0.88em;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
}

a {
  color: var(--accento);
  text-decoration: none;
  transition: color 0.15s ease;
}

a:hover {
  color: var(--accento-hover);
  text-decoration: underline;
}
</style>
