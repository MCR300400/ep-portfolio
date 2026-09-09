<script setup>
import { RouterLink } from 'vue-router'
import SchedaProgetto from '../components/SchedaProgetto.vue'

const progettiInEvidenza = [
  {
    titolo: 'Cloudflare Analytics Engine',
    descrizione: 'Backend serverless ad alte prestazioni con Cloudflare Workers e database relazionale distribuito D1, con rollup cron notturno e zero cookie.',
    tag: ['Cloudflare Workers', 'D1 SQL', 'Cron Triggers', 'Web Crypto'],
    linkGitHub: 'https://github.com',
    linkLive: '/progetti'
  },
  {
    titolo: 'Gestionale Analytics Multi-Sito',
    descrizione: 'Dashboard privata in Vue 3 protetta da Cloudflare Access, monitoraggio trend con sparkline SVG native senza librerie esterne.',
    tag: ['Vue 3', 'Vite', 'Cloudflare Access', 'Zero Trust'],
    linkGitHub: 'https://github.com',
    linkLive: '/progetti'
  }
]
</script>

<template>
  <div class="pagina-home">
    <section class="sezione-hero">
      <div class="badge-disponibile">
        <span class="dot"></span>
        Ingegneria Serverless & Architetture Cloud
      </div>
      <h1 class="titolo-hero">
        Sviluppo soluzioni web scalabili, veloci e resilienti.
      </h1>
      <p class="sottotitolo-hero">
        Ciao, sono <strong>Edoardo Pippi</strong>. Realizzo architetture moderne con approccio
        edge computing, serverless e frontend reattivi ad alta efficienza.
      </p>
      <div class="azioni-hero">
        <RouterLink to="/progetti" class="pulsante-hero primario">Esplora i progetti</RouterLink>
        <RouterLink to="/contatti" class="pulsante-hero secondario">Contattami</RouterLink>
      </div>
    </section>

    <section class="sezione-in-evidenza">
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
  </div>
</template>

<style scoped>
.sezione-hero {
  padding: 4rem 0 3rem;
  max-width: 760px;
}

.badge-disponibile {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.35rem 0.75rem;
  background: rgba(37, 99, 235, 0.08);
  color: #2563eb;
  border-radius: 9999px;
  font-size: 0.82rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
}

.dot {
  width: 6px;
  height: 6px;
  background-color: #2563eb;
  border-radius: 50%;
}

.titolo-hero {
  font-size: 2.75rem;
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin-bottom: 1.25rem;
}

.sottotitolo-hero {
  font-size: 1.15rem;
  line-height: 1.6;
  color: #64748b;
  margin-bottom: 2rem;
}

@media (prefers-color-scheme: dark) {
  .sottotitolo-hero {
    color: #94a3b8;
  }
}

.azioni-hero {
  display: flex;
  gap: 1rem;
}

.pulsante-hero {
  padding: 0.7rem 1.4rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  transition: all 0.2s ease;
}

.pulsante-hero.primario {
  background: #2563eb;
  color: #ffffff;
}

.pulsante-hero.primario:hover {
  background: #1d4ed8;
}

.pulsante-hero.secondario {
  background: transparent;
  color: inherit;
  border: 1px solid #cbd5e1;
}

.pulsante-hero.secondario:hover {
  background: #f1f5f9;
}

@media (prefers-color-scheme: dark) {
  .pulsante-hero.secondario {
    border-color: #475569;
  }
  .pulsante-hero.secondario:hover {
    background: #1e293b;
  }
}

.sezione-in-evidenza {
  margin-top: 3rem;
}

.sezione-testata {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.sezione-testata h2 {
  font-size: 1.5rem;
  font-weight: 700;
}

.link-tutti {
  color: #2563eb;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
}

.griglia-progetti {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
}

@media (max-width: 640px) {
  .titolo-hero {
    font-size: 2rem;
  }
  .sottotitolo-hero {
    font-size: 1rem;
  }
}
</style>
