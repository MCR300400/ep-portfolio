<script setup>
import SchedaProgetto from '../components/SchedaProgetto.vue'

const progetti = [
  {
    titolo: 'ep-analytics (Worker + D1)',
    descrizione: 'Backend serverless per raccolta metriche e API di gestione multi-sito. Zero dipendenze runtime, hashing con rotazione giornaliera SHA-256 e cron rollup.',
    tag: ['Cloudflare Workers', 'D1 SQLite', 'Web Crypto', 'Cron Triggers'],
    linkGitHub: 'https://github.com/MCR300400/ep-analytics',
    linkLive: ''
  },
  {
    titolo: 'TikTok Stories Video Automation',
    descrizione: 'Pipeline autonoma in Python basata su pattern Produttore-Consumatore per la generazione e pubblicazione programmata di video verticali su TikTok. Ricezione storie via bot Telegram, elaborazione LLM con Groq, sintesi vocale neurale Edge-TTS, sottotitoli animati ASS e montaggio FFmpeg.',
    tag: ['Python', 'Telegram Bot', 'Groq Llama 3', 'FFmpeg', 'Edge-TTS', 'APScheduler'],
    linkGitHub: 'https://github.com/MCR300400/tiktok-stories-automation',
    linkLive: ''
  },
  {
    titolo: 'ep-portfolio (Pages + Vue 3)',
    descrizione: 'Sito portfolio con tracciamento pageview e durata della permanenza integrato con Vue Router in modalità history. Zero cookie, zero script invasivi.',
    tag: ['Vue 3', 'Vite', 'Vue Router', 'Cloudflare Pages'],
    linkGitHub: 'https://github.com/MCR300400/ep-portfolio',
    linkLive: '/'
  },
  {
    titolo: 'ep-dashboard (Pages + Access)',
    descrizione: 'Pannello analytics multi-sito privato protetto da Cloudflare Access (Zero Trust). Sparkline SVG pure calcolate a mano e monitoraggio in tempo reale.',
    tag: ['Vue 3', 'Cloudflare Access', 'SVG Sparklines', 'Zero Trust'],
    linkGitHub: 'https://github.com/MCR300400/ep-dashboard',
    linkLive: ''
  },
  {
    titolo: 'ep-algorithms (Pages + Vue 3)',
    descrizione: 'Piattaforma interattiva di selezione algoritmica e guida computazionale senza backend. Motore decisionale guidato a risposta multipla, simulatore grafico live passo-passo e codice sorgente in 6 linguaggi (Python, Java, TypeScript, JavaScript, C, C#).',
    tag: ['Vue 3', 'Vite', 'Algorithms', 'Interactive Simulator', 'Cloudflare Pages'],
    linkGitHub: 'https://github.com/MCR300400/ep-algorithms',
    linkLive: ''
  },
  {
    titolo: 'IoT Parking Management per Operatori',
    descrizione: 'Architettura per il monitoraggio e la gestione intelligente dei parcheggi per operatori del settore, basata su sensori IoT e integrazione API. Progetto di tesi di laurea in Informatica in partnership con Park It.',
    tag: ['IoT', 'Java', 'Spring Boot', 'RESTful API', 'Smart Mobility'],
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
