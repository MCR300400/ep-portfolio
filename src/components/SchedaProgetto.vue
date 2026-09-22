<script setup>
import { useLingua } from '../composables/useLingua'

const { t } = useLingua()

defineProps({
  titolo: { type: [String, Object], required: true },
  descrizione: { type: [String, Object], required: true },
  tag: { type: Array, default: () => [] },
  linkGitHub: { type: String, default: '' },
  linkLive: { type: String, default: '' }
})
</script>

<template>
  <article class="scheda">
    <div class="scheda-corpo">
      <div class="scheda-top">
        <h3 class="scheda-titolo">{{ t(titolo) }}</h3>
        <span v-if="linkLive" class="status-live" title="Live su Cloudflare">
          <span class="live-dot"></span>
          Live
        </span>
      </div>
      <p class="scheda-descrizione">{{ t(descrizione) }}</p>
      <div class="scheda-tag">
        <span v-for="tagItem in tag" :key="tagItem" class="tag">{{ tagItem }}</span>
      </div>
    </div>
    <div class="scheda-footer" v-if="linkGitHub || linkLive">
      <a v-if="linkGitHub" :href="linkGitHub" target="_blank" rel="noopener noreferrer" class="pulsante pulsante-secondario">
        {{ t('scheda.github') }}
      </a>
      <a
        v-if="linkLive"
        :href="linkLive"
        target="_blank"
        rel="noopener noreferrer"
        class="pulsante pulsante-primario"
        :title="'Apri ' + linkLive"
      >
        <svg
          class="icona-cf"
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2.2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          <polyline points="15 3 21 3 21 9"></polyline>
          <line x1="10" y1="14" x2="21" y2="3"></line>
        </svg>
        {{ t('scheda.visita') }}
      </a>
    </div>
  </article>
</template>

<style scoped>
.scheda {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: var(--bg-superficie);
  border: 1px solid var(--bordo-sottile);
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: var(--ombra-scheda);
  position: relative;
  transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;
}

.scheda::before {
  content: "";
  position: absolute;
  top: -1px;
  left: 1.5rem;
  right: 1.5rem;
  height: 2px;
  background: transparent;
  transition: background-color 0.18s ease;
}

.scheda:hover {
  transform: translateY(-2px);
  border-color: var(--accento-bordo);
  box-shadow: var(--ombra-scheda-hover);
}

.scheda:hover::before {
  background: var(--accento);
}

.scheda-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 0.65rem;
}

.scheda-titolo {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--testo-primario);
  letter-spacing: -0.015em;
  line-height: 1.35;
}

.status-live {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--accento-emerald);
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.25);
  padding: 0.15rem 0.45rem;
  border-radius: 4px;
  white-space: nowrap;
  flex-shrink: 0;
}

.live-dot {
  width: 5px;
  height: 5px;
  background-color: var(--accento-emerald);
  border-radius: 50%;
}

.scheda-descrizione {
  font-size: 0.92rem;
  color: var(--testo-secondario);
  line-height: 1.62;
  margin-bottom: 1.25rem;
}

.scheda-tag {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 1.35rem;
}

.tag {
  font-size: 0.73rem;
  font-weight: 500;
  background: var(--bg-superficie-elevata);
  color: var(--testo-secondario);
  border: 1px solid var(--bordo-sottile);
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
}

.scheda-footer {
  display: flex;
  gap: 0.65rem;
  align-items: center;
  border-top: 1px solid var(--bordo-sottile);
  padding-top: 1.1rem;
}

.pulsante {
  font-size: 0.84rem;
  font-weight: 600;
  padding: 0.45rem 0.9rem;
  border-radius: 6px;
  text-decoration: none;
  transition: all 0.15s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
}

.pulsante-primario {
  background: var(--accento);
  color: var(--accento-contrasto);
  border: 1px solid transparent;
}

.pulsante-primario:hover {
  background: var(--accento-hover);
}

.pulsante-secondario {
  background: var(--bg-superficie);
  color: var(--testo-secondario);
  border: 1px solid var(--bordo-medio);
}

.pulsante-secondario:hover {
  background: var(--bg-superficie-elevata);
  color: var(--testo-primario);
  border-color: var(--bordo-forte);
}

.icona-cf {
  flex-shrink: 0;
}
</style>
