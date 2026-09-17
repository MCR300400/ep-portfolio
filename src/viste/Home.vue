<script setup>
import { RouterLink } from 'vue-router'
import SchedaProgetto from '../components/SchedaProgetto.vue'

const progettiInEvidenza = [
  {
    titolo: 'ep-board — Lavagna Collaborativa Real-Time',
    descrizione: 'Lavagna infinita collaborativa a 60 FPS per architetture e diagrammi. Cursori multiplayer live, touch gestures, esportazione Retina PNG/SVG e sincronizzazione stateful su Cloudflare Durable Objects (SQLite).',
    tag: ['Cloudflare Pages', 'Durable Objects', 'SQLite', 'WebSockets', 'Vue 3'],
    linkGitHub: 'https://github.com/MCR300400/ep-board',
    linkLive: 'https://ep-board.pages.dev'
  },
  {
    titolo: 'ep-drop — Trasferimento P2P & Appunti',
    descrizione: 'Condivisione istantanea e crittografata di file e appunti tra dispositivi browser-to-browser. Zero server storage, stanze con QR code e segnalazione WebRTC su Cloudflare Workers.',
    tag: ['Cloudflare Pages', 'WebRTC DataChannel', 'WebSockets', 'P2P Transfer'],
    linkGitHub: 'https://github.com/MCR300400/ep-drop',
    linkLive: 'https://ep-drop.pages.dev'
  },
  {
    titolo: 'ep-router — Simulatore & Game di Rete Edge',
    descrizione: 'Puzzle game strategico e simulatore a 60 FPS: instradamento pacchetti tra PoP globali, gestione buffer bloat, edge cache KV e mitigazione attacchi DDoS SYN Flood con Cloudflare WAF.',
    tag: ['Cloudflare Pages', 'Canvas 2D', 'Web Audio API', 'Traffic Engineering'],
    linkGitHub: 'https://github.com/MCR300400/ep-router',
    linkLive: 'https://ep-router.pages.dev'
  },
  {
    titolo: 'ep-algorithms — Selettore Algoritmico',
    descrizione: 'Piattaforma di analisi e simulazione grafica live degli algoritmi informatici fondamentali con wizard decisionale guidato e codice sorgente in 6 linguaggi (Python, Java, TypeScript, C, ecc.).',
    tag: ['Cloudflare Pages', 'Vue 3', 'Vite', 'Algorithms', 'Simulator'],
    linkGitHub: 'https://github.com/MCR300400/ep-algorithms',
    linkLive: 'https://ep-algorithms.pages.dev'
  },
  {
    titolo: 'ep-analytics — Backend Serverless Analytics',
    descrizione: 'Backend serverless per raccolta metriche privacy-first e API di gestione multi-sito con database D1 SQLite globale, Web Crypto hashing SHA-256 e cron rollup notturno. Zero cookie.',
    tag: ['Cloudflare Workers', 'D1 SQLite', 'Web Crypto', 'Cron Triggers'],
    linkGitHub: 'https://github.com/MCR300400/ep-analytics',
    linkLive: 'https://ep-analytics.edoardopippi00.workers.dev/t.js'
  },
  {
    titolo: 'ep-dashboard — Monitoraggio Zero Trust',
    descrizione: 'Pannello analytics privato multi-sito protetto da Cloudflare Access (Zero Trust), con sparkline SVG native senza librerie esterne e auto-refresh in tempo reale a 60s.',
    tag: ['Cloudflare Pages', 'Cloudflare Access', 'Zero Trust', 'SVG Sparklines'],
    linkGitHub: 'https://github.com/MCR300400/ep-dashboard',
    linkLive: 'https://ep-dashboard.pages.dev'
  }
]

const gruppiCompetenze = [
  {
    categoria: 'Backend & Architettura',
    competenze: ['Java', 'Spring Boot', 'Oracle', 'Python', 'RESTful API', 'OOP', 'SQL & SQLite', 'C / C#']
  },
  {
    categoria: 'Frontend & Mobile',
    competenze: ['Vue.js 3', 'Vite', 'Flutter', 'Dart', 'TypeScript', 'JavaScript', 'HTML5 / CSS3']
  },
  {
    categoria: 'Cloud, Tooling & Metodologie',
    competenze: ['Cloudflare (Workers, D1, Pages)', 'Git', 'Agile / Scrum', 'Problem Solving', 'Debugging']
  }
]

const esperienze = [
  {
    ruolo: 'Full-Stack Developer (Apprendistato)',
    azienda: 'Park It',
    luogo: 'Perugia, Italia',
    periodo: 'Dicembre 2024 – Presente',
    descrizione: 'Sviluppo, restyling e manutenzione in autonomia di siti web e applicazioni complesse. Progettazione e implementazione end-to-end di nuove funzionalità frontend e backend con integrazione di API RESTful e ottimizzazione delle performance.'
  },
  {
    ruolo: 'Tirocinio Full-Stack Developer',
    azienda: 'Park It',
    luogo: 'Perugia, Italia',
    periodo: 'Giugno 2024 – Dicembre 2024',
    descrizione: 'Supporto allo sviluppo e alla manutenzione di applicativi e portali aziendali all’interno del team. Attività di debugging, scrittura di codice robusto e risoluzione di ticket tecnici su componenti esistenti.'
  },
  {
    ruolo: 'Sviluppatore Web & Mobile (Tirocinio Universitario)',
    azienda: 'Levita Srls',
    luogo: 'Perugia, Italia',
    periodo: 'Ottobre 2023 – Novembre 2023',
    descrizione: 'Attività di programmazione mobile per applicazioni aziendali. Modifica e manutenzione di siti web aziendali con gestione e caricamento dei contenuti.'
  }
]

const formazione = [
  {
    titolo: 'Laurea in Informatica',
    istituto: 'Università degli Studi di Perugia',
    anno: 'Aprile 2026',
    luogo: 'Perugia, Italia',
    note: 'Tesi sperimentale svolta in collaborazione con Park It: "IoT Parking Management per operatori".'
  },
  {
    titolo: 'Diploma di Liceo Scientifico',
    istituto: 'Liceo Scientifico "Galeazzo Alessi"',
    anno: 'Perugia, Italia',
    luogo: 'Perugia, Italia',
    note: 'Solida formazione logico-matematica e propensione scientifica al problem solving.'
  }
]
</script>

<template>
  <div class="pagina-home">
    <!-- Hero Section -->
    <section class="sezione-hero">
      <div class="badge-disponibile">
        <span class="dot"></span>
        Full-Stack Software Developer • Perugia, Italia
      </div>
      <h1 class="titolo-hero">
        Progetto e sviluppo applicazioni web, mobile e architetture scalabili.
      </h1>
      <p class="sottotitolo-hero">
        Ciao, sono <strong>Edoardo Pippi</strong>. Sviluppatore con oltre 2 anni di esperienza professionale
        nella realizzazione di soluzioni software end-to-end. Specializzato in <strong>Java</strong>,
        <strong>Spring Boot</strong>, <strong>Vue.js 3</strong> e <strong>Flutter</strong>, con approccio Agile e passione per l'ingegneria del software pulita ed efficiente.
      </p>
      <div class="azioni-hero">
        <RouterLink to="/progetti" class="pulsante-hero primario">Esplora i progetti</RouterLink>
        <RouterLink to="/contatti" class="pulsante-hero secondario">Contattami</RouterLink>
      </div>
    </section>

    <!-- Sezione Competenze Tecniche -->
    <section class="sezione-blocco">
      <div class="sezione-testata">
        <h2>Competenze Tecniche</h2>
        <span class="sezione-sottotitolo">Stack tecnologico consolidato sul campo</span>
      </div>
      <div class="griglia-competenze">
        <div v-for="g in gruppiCompetenze" :key="g.categoria" class="scheda-competenza">
          <h3 class="titolo-competenza">{{ g.categoria }}</h3>
          <div class="lista-badge">
            <span v-for="c in g.competenze" :key="c" class="badge-tech">{{ c }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Sezione Progetti in evidenza -->
    <section class="sezione-blocco">
      <div class="sezione-testata">
        <h2>Progetti in evidenza</h2>
        <RouterLink to="/progetti" class="link-tutti">Vedi tutti &rarr;</RouterLink>
      </div>
      <div class="griglia-progetti">
        <SchedaProgetto
          v-for="p in progettiInEvidenza"
          :key="p.titolo"
          :titolo="p.titolo"
          :descrizione="p.descrizione"
          :tag="p.tag"
          :link-git-hub="p.linkGitHub"
          :link-live="p.linkLive"
        />
      </div>
    </section>

    <!-- Sezione Esperienza Lavorativa & Formazione -->
    <section class="sezione-blocco">
      <div class="sezione-testata">
        <h2>Esperienza Professionale</h2>
        <span class="sezione-sottotitolo">Percorso e ruoli ricoperti</span>
      </div>
      <div class="lista-esperienze">
        <article v-for="esp in esperienze" :key="esp.ruolo + esp.periodo" class="scheda-esperienza">
          <div class="esp-header">
            <div>
              <h3 class="esp-ruolo">{{ esp.ruolo }}</h3>
              <div class="esp-azienda">
                <span class="nome-azienda">{{ esp.azienda }}</span>
                <span class="separatore">•</span>
                <span class="luogo-azienda">{{ esp.luogo }}</span>
              </div>
            </div>
            <span class="esp-periodo">{{ esp.periodo }}</span>
          </div>
          <p class="esp-descrizione">{{ esp.descrizione }}</p>
        </article>
      </div>
    </section>

    <!-- Sezione Formazione & Istruzione -->
    <section class="sezione-blocco">
      <div class="sezione-testata">
        <h2>Istruzione & Formazione</h2>
        <span class="sezione-sottotitolo">Percorso accademico</span>
      </div>
      <div class="griglia-formazione">
        <article v-for="f in formazione" :key="f.titolo" class="scheda-formazione">
          <div class="formazione-top">
            <h3 class="formazione-titolo">{{ f.titolo }}</h3>
            <span class="formazione-anno">{{ f.anno }}</span>
          </div>
          <div class="formazione-istituto">{{ f.istituto }}</div>
          <p class="formazione-note">{{ f.note }}</p>
        </article>
      </div>
    </section>
  </div>
</template>

<style scoped>
.pagina-home {
  padding-bottom: 2rem;
}

.sezione-hero {
  padding: 4.5rem 0 3.5rem;
  max-width: 820px;
}

.badge-disponibile {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.35rem 0.8rem;
  background: var(--accento-sfondo);
  color: var(--accento);
  border: 1px solid var(--accento-bordo);
  border-radius: 9999px;
  font-size: 0.82rem;
  font-weight: 550;
  margin-bottom: 1.5rem;
  letter-spacing: 0.01em;
}

.dot {
  width: 6px;
  height: 6px;
  background-color: var(--accento);
  border-radius: 50%;
}

.titolo-hero {
  font-size: 2.85rem;
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.025em;
  margin-bottom: 1.25rem;
  color: var(--testo-primario);
}

.sottotitolo-hero {
  font-size: 1.15rem;
  line-height: 1.68;
  color: var(--testo-secondario);
  margin-bottom: 2.25rem;
}

.sottotitolo-hero strong {
  color: var(--testo-primario);
  font-weight: 600;
}

.azioni-hero {
  display: flex;
  gap: 1rem;
}

.pulsante-hero {
  padding: 0.75rem 1.45rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
}

.pulsante-hero.primario {
  background: var(--accento);
  color: var(--accento-contrasto);
  border: 1px solid transparent;
}

.pulsante-hero.primario:hover {
  background: var(--accento-hover);
}

.pulsante-hero.secondario {
  background: var(--bg-superficie);
  color: var(--testo-primario);
  border: 1px solid var(--bordo-medio);
}

.pulsante-hero.secondario:hover {
  background: var(--bg-superficie-elevata);
  border-color: var(--bordo-forte);
}

/* Sezioni a blocchi strutturati */
.sezione-blocco {
  margin-top: 4rem;
}

.sezione-testata {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.sezione-testata h2 {
  font-size: 1.6rem;
  font-weight: 750;
  color: var(--testo-primario);
  letter-spacing: -0.015em;
}

.sezione-sottotitolo {
  font-size: 0.88rem;
  color: var(--testo-terziario);
}

.link-tutti {
  color: var(--accento);
  text-decoration: none;
  font-weight: 550;
  font-size: 0.9rem;
  transition: color 0.15s ease;
}

.link-tutti:hover {
  color: var(--accento-hover);
  text-decoration: underline;
}

/* Griglia Competenze */
.griglia-competenze {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.25rem;
}

.scheda-competenza {
  background: var(--bg-superficie);
  border: 1px solid var(--bordo-sottile);
  border-radius: 12px;
  padding: 1.4rem;
  box-shadow: var(--ombra-scheda);
  transition: border-color 0.2s ease, background-color 0.25s ease;
}

.scheda-competenza:hover {
  border-color: var(--accento-bordo);
}

.titolo-competenza {
  font-size: 1rem;
  font-weight: 700;
  color: var(--testo-primario);
  margin-bottom: 0.9rem;
  letter-spacing: -0.01em;
}

.lista-badge {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
}

.badge-tech {
  font-size: 0.78rem;
  font-weight: 550;
  padding: 0.25rem 0.6rem;
  background: var(--bg-superficie-elevata);
  color: var(--testo-secondario);
  border: 1px solid var(--bordo-sottile);
  border-radius: 6px;
}

/* Griglia Progetti */
.griglia-progetti {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
}

/* Esperienze lavorative */
.lista-esperienze {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.scheda-esperienza {
  background: var(--bg-superficie);
  border: 1px solid var(--bordo-sottile);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: var(--ombra-scheda);
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
}

.scheda-esperienza:hover {
  border-color: var(--accento-bordo);
  transform: translateY(-2px);
  box-shadow: var(--ombra-scheda-hover);
}

.esp-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 0.85rem;
}

.esp-ruolo {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--testo-primario);
  letter-spacing: -0.01em;
}

.esp-azienda {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.88rem;
  margin-top: 0.2rem;
}

.nome-azienda {
  font-weight: 650;
  color: var(--accento);
}

.separatore {
  color: var(--testo-terziario);
}

.luogo-azienda {
  color: var(--testo-terziario);
}

.esp-periodo {
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.22rem 0.65rem;
  background: var(--bg-superficie-elevata);
  color: var(--testo-secondario);
  border: 1px solid var(--bordo-sottile);
  border-radius: 9999px;
  white-space: nowrap;
}

.esp-descrizione {
  font-size: 0.94rem;
  line-height: 1.62;
  color: var(--testo-secondario);
}

/* Griglia Formazione */
.griglia-formazione {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.25rem;
}

.scheda-formazione {
  background: var(--bg-superficie);
  border: 1px solid var(--bordo-sottile);
  border-radius: 12px;
  padding: 1.4rem;
  box-shadow: var(--ombra-scheda);
  transition: border-color 0.2s ease;
}

.scheda-formazione:hover {
  border-color: var(--accento-bordo);
}

.formazione-top {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 0.5rem;
  margin-bottom: 0.35rem;
}

.formazione-titolo {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--testo-primario);
}

.formazione-anno {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--accento);
  white-space: nowrap;
}

.formazione-istituto {
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--testo-secondario);
  margin-bottom: 0.65rem;
}

.formazione-note {
  font-size: 0.88rem;
  line-height: 1.55;
  color: var(--testo-terziario);
}

@media (max-width: 680px) {
  .titolo-hero {
    font-size: 2.1rem;
  }
  .sottotitolo-hero {
    font-size: 1rem;
  }
  .azioni-hero {
    flex-direction: column;
    align-items: stretch;
  }
  .pulsante-hero {
    justify-content: center;
  }
  .esp-header {
    flex-direction: column;
  }
}
</style>
