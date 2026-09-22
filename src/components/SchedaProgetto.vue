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
  <article class="progetto-riga">
    <div class="progetto-testata">
      <div class="progetto-info">
        <h3 class="progetto-titolo">{{ t(titolo) }}</h3>
        <div class="progetto-tag" v-if="tag && tag.length">
          <span v-for="tagItem in tag" :key="tagItem" class="tag-item">{{ tagItem }}</span>
        </div>
      </div>

      <div class="progetto-azioni" v-if="linkGitHub || linkLive">
        <a
          v-if="linkLive"
          :href="linkLive"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-azione btn-primario"
          :title="'Apri ' + linkLive"
        >
          <svg
            class="icona-link"
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
        <a
          v-if="linkGitHub"
          :href="linkGitHub"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-azione btn-secondario"
        >
          {{ t('scheda.github') }}
        </a>
      </div>
    </div>

    <p class="progetto-descrizione">{{ t(descrizione) }}</p>
  </article>
</template>

<style scoped>
.progetto-riga {
  padding: 2.25rem 0;
  border-bottom: 1px solid var(--bordo-sottile);
}

.progetto-riga:first-child {
  padding-top: 0;
}

.progetto-riga:last-child {
  border-bottom: none;
}

.progetto-testata {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 0.85rem;
}

.progetto-info {
  flex: 1;
  min-width: 260px;
}

.progetto-titolo {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--testo-primario);
  letter-spacing: -0.015em;
  line-height: 1.3;
  margin-bottom: 0.45rem;
}

.progetto-tag {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.tag-item {
  font-size: 0.78rem;
  font-weight: 550;
  color: var(--accento);
  background: var(--accento-sfondo);
  border: 1px solid var(--accento-bordo);
  padding: 0.15rem 0.55rem;
  border-radius: 4px;
}

.progetto-descrizione {
  font-size: 1rem;
  color: var(--testo-secondario);
  line-height: 1.7;
  max-width: 80ch;
}

/* Azioni: NESSUN effetto di hover (nessun translateY, no scale, no glow) */
.progetto-azioni {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  flex-shrink: 0;
}

.btn-azione {
  font-size: 0.86rem;
  font-weight: 600;
  padding: 0.45rem 0.95rem;
  border-radius: 6px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  transition: background-color 0.15s ease, color 0.15s ease, border-color 0.15s ease;
}

.btn-primario {
  background: var(--accento);
  color: var(--accento-contrasto);
  border: 1px solid var(--accento);
}

.btn-primario:hover {
  background: var(--accento-hover);
  border-color: var(--accento-hover);
}

.btn-secondario {
  background: transparent;
  color: var(--testo-secondario);
  border: 1px solid var(--bordo-medio);
}

.btn-secondario:hover {
  color: var(--testo-primario);
  border-color: var(--testo-terziario);
}

.icona-link {
  flex-shrink: 0;
}

@media (max-width: 640px) {
  .progetto-riga {
    padding: 1.75rem 0;
  }
  .progetto-titolo {
    font-size: 1.18rem;
  }
  .progetto-azioni {
    width: 100%;
    margin-top: 0.25rem;
  }
}
</style>
