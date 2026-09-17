<script setup>
import SchedaProgetto from '../components/SchedaProgetto.vue'

const progetti = [
  {
    titolo: 'ep-board — Lavagna Collaborativa Real-Time',
    descrizione: 'Lavagna infinita collaborativa a 60 FPS per la progettazione di architetture software, diagrammi di sistema, flussi logici e brainstorming. Cursori multiplayer live, gesture multi-touch (pinch-to-zoom e two-finger pan), strumenti vettoriali completi con levigatura del tratto SVG, note adesive, esportazione Retina PNG/SVG e sincronizzazione stateful su Cloudflare Workers & SQLite Durable Objects.',
    tag: ['Cloudflare Pages', 'Durable Objects', 'SQLite', 'WebSockets', 'Vue 3', 'Canvas 2D'],
    linkGitHub: 'https://github.com/MCR300400/ep-board',
    linkLive: 'https://ep-board.pages.dev'
  },
  {
    titolo: 'ep-drop — Trasferimento P2P & Condivisione File',
    descrizione: 'Piattaforma temporanea per il trasferimento crittografato e ad alta velocità di file e appunti testuali tra smartphone, tablet e computer direttamente nel browser. Zero archiviazione su server esterni, stanze usa-e-getta protette con generazione QR code e segnalazione WebSockets a bassissima latenza orchestrata da Cloudflare Workers.',
    tag: ['Cloudflare Pages', 'WebRTC DataChannel', 'WebSockets', 'Durable Objects', 'Vue 3', 'P2P Transfer'],
    linkGitHub: 'https://github.com/MCR300400/ep-drop',
    linkLive: 'https://ep-drop.pages.dev'
  },
  {
    titolo: 'ep-router — Simulatore & Game di Routing di Rete',
    descrizione: 'Puzzle game strategico e simulatore a 60 FPS incentrato sull\'ingegneria del traffico di rete e architetture edge. Instradamento pacchetti tra PoP globali (Milano, Londra, Tokyo, Francoforte, Virginia), gestione buffer bloat server, edge caching KV e mitigazione attacchi DDoS SYN Flood con regole Cloudflare WAF. Include sintetizzatore procedurale basato su Web Audio API.',
    tag: ['Cloudflare Pages', 'Canvas 2D', 'Web Audio API', 'Vue 3', 'Traffic Engineering', 'Game Engine'],
    linkGitHub: 'https://github.com/MCR300400/ep-router',
    linkLive: 'https://ep-router.pages.dev'
  },
  {
    titolo: 'ep-algorithms — Piattaforma di Selezione Algoritmica',
    descrizione: 'Piattaforma interattiva di selezione, analisi computazionale e simulazione passo-passo degli algoritmi informatici fondamentali. Include un wizard decisionale a risposta multipla per identificare l\'algoritmo ottimale in base ai vincoli, simulatore grafico live a 60 FPS e codice sorgente verificato in 6 linguaggi (Python, Java, TypeScript, JavaScript, C, C#).',
    tag: ['Cloudflare Pages', 'Vue 3', 'Vite', 'Algorithms', 'Interactive Simulator'],
    linkGitHub: 'https://github.com/MCR300400/ep-algorithms',
    linkLive: 'https://ep-algorithms.pages.dev'
  },
  {
    titolo: 'ep-dashboard — Monitoraggio & Analytics Zero Trust',
    descrizione: 'Pannello analytics multi-sito privato servito su Cloudflare Pages e protetto da Cloudflare Access (Zero Trust). Monitoraggio trend in tempo reale con sparkline SVG native calcolate a mano senza librerie esterne pesanti, auto-refresh temporizzato a 60s con countdown e raggruppamento dati ad altissima efficienza.',
    tag: ['Cloudflare Pages', 'Cloudflare Access', 'Zero Trust', 'Vue 3', 'SVG Sparklines'],
    linkGitHub: 'https://github.com/MCR300400/ep-dashboard',
    linkLive: 'https://ep-dashboard.pages.dev'
  },
  {
    titolo: 'ep-analytics — Backend Serverless Analytics (Worker + D1)',
    descrizione: 'Backend serverless distribuito per raccolta metriche di traffico privacy-first e API RESTful protette. Zero dipendenze runtime, hashing con rotazione giornaliera SHA-256 (Web Crypto), database relazionale distribuito D1 SQLite e cron trigger notturno automatico per il rollup statistico. Zero cookie e piena conformità GDPR.',
    tag: ['Cloudflare Workers', 'D1 SQLite', 'Web Crypto', 'Cron Triggers', 'Privacy-First', 'Serverless API'],
    linkGitHub: 'https://github.com/MCR300400/ep-analytics',
    linkLive: 'https://ep-analytics.edoardopippi00.workers.dev/t.js'
  },
  {
    titolo: 'ep-ws — Realtime WebSocket Signaling & Durable Objects',
    descrizione: 'Cluster serverless stateful su Cloudflare Workers con Durable Objects e storage SQLite integrato per la gestione della presenza in tempo reale, sincronizzazione dello stato dei canvas multiplayer e segnalazione WebRTC per ep-board ed ep-drop.',
    tag: ['Cloudflare Workers', 'Durable Objects', 'SQLite', 'WebSockets', 'Edge Computing', 'Stateful Edge'],
    linkGitHub: 'https://github.com/MCR300400/ep-ws',
    linkLive: 'https://ep-ws.edoardopippi00.workers.dev'
  },
  {
    titolo: 'ep-portfolio — Portfolio Personale su Cloudflare Pages',
    descrizione: 'Sito portfolio personale sviluppato in Vue 3 e Vite, servito a bassissima latenza sulla rete edge globale di Cloudflare Pages. Telemetria privacy-first integrata con ep-analytics, navigazione fluida SPA in history mode, design system grafite minerale/arancio artigianale dark/light e zero cookie.',
    tag: ['Cloudflare Pages', 'Vue 3', 'Vite', 'Vue Router', 'Responsive Design'],
    linkGitHub: 'https://github.com/MCR300400/ep-portfolio',
    linkLive: 'https://ep-portfolio.pages.dev'
  },
  {
    titolo: 'Gaia D\'Alessio — Editorial Academic Portfolio',
    descrizione: 'Sito web portfolio accademico e professionale curato con direzione artistica editoriale (Anti-AI Look), 100% responsive e ospitato su Cloudflare Pages. Tipografia classica con Cormorant Garamond, palette sobria carta/fumo antracite, standard di certificazione linguistica QCER e sezioni strutturate per pubblicazioni e percorsi accademici.',
    tag: ['Cloudflare Pages', 'HTML5 / CSS3', 'Editorial Design', 'Anti-AI Look', 'Responsive'],
    linkGitHub: 'https://github.com/MCR300400/gdalessio-portfolio',
    linkLive: 'https://gdalessio-portfolio.pages.dev'
  },
  {
    titolo: 'TikTok Stories Video Automation Pipeline',
    descrizione: 'Pipeline autonoma in Python basata su pattern Produttore-Consumatore per la generazione e pubblicazione programmata di video verticali su TikTok. Ricezione storie via bot Telegram, elaborazione LLM con Groq Cloud, sintesi vocale neurale Edge-TTS, sottotitoli animati ASS e montaggio FFmpeg.',
    tag: ['Python', 'Telegram Bot', 'Groq Llama 3', 'FFmpeg', 'Edge-TTS', 'APScheduler'],
    linkGitHub: 'https://github.com/MCR300400/tiktok-stories-automation',
    linkLive: ''
  },
  {
    titolo: 'IoT Parking Management per Operatori',
    descrizione: 'Architettura per il monitoraggio e la gestione intelligente dei parcheggi per operatori del settore, basata su sensori IoT e integrazione API RESTful. Progetto di tesi sperimentale di laurea in Informatica in partnership con Park It.',
    tag: ['IoT', 'Java', 'Spring Boot', 'RESTful API', 'Smart Mobility', 'Oracle SQL'],
    linkGitHub: '',
    linkLive: ''
  }
]
</script>

<template>
  <div class="pagina-progetti">
    <div class="testata-pagina">
      <h1>Progetti & Architetture</h1>
      <p>Una selezione di progetti software, architetture serverless e implementazioni ad alte prestazioni.</p>
    </div>

    <div class="griglia-progetti">
      <SchedaProgetto
        v-for="p in progetti"
        :key="p.titolo"
        :titolo="p.titolo"
        :descrizione="p.descrizione"
        :tag="p.tag"
        :link-git-hub="p.linkGitHub"
        :link-live="p.linkLive"
      />
    </div>
  </div>
</template>

<style scoped>
.pagina-progetti {
  padding: 2.5rem 0;
}

.testata-pagina {
  max-width: 600px;
  margin-bottom: 2.5rem;
}

.testata-pagina h1 {
  font-size: 2.2rem;
  font-weight: 800;
  margin-bottom: 0.75rem;
  letter-spacing: -0.015em;
  color: var(--testo-primario);
}

.testata-pagina p {
  color: var(--testo-secondario);
  font-size: 1.05rem;
  line-height: 1.6;
}

.griglia-progetti {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
}
</style>
