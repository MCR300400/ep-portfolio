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
  <article class="progetto-entry">
    <div class="progetto-header">
      <h3 class="progetto-titolo">{{ t(titolo) }}</h3>
      <div class="progetto-link-gruppo" v-if="linkGitHub || linkLive">
        <a
          v-if="linkLive"
          :href="linkLive"
          target="_blank"
          rel="noopener noreferrer"
          class="link-azione primario"
        >
          {{ t('scheda.visita') }}
        </a>
        <a
          v-if="linkGitHub"
          :href="linkGitHub"
          target="_blank"
          rel="noopener noreferrer"
          class="link-azione secondario"
        >
          {{ t('scheda.github') }}
        </a>
      </div>
    </div>

    <p class="progetto-descrizione">{{ t(descrizione) }}</p>

    <div class="progetto-meta" v-if="tag && tag.length">
      <span class="meta-tag">{{ tag.join(' · ') }}</span>
    </div>
  </article>
</template>

<style scoped>
.progetto-entry {
  padding: 1.85rem 0;
  border-bottom: 1px solid var(--bordo-sottile);
}

.progetto-entry:first-child {
  padding-top: 0.5rem;
}

.progetto-entry:last-child {
  border-bottom: none;
}

.progetto-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 0.65rem;
}

.progetto-titolo {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--testo-primario);
  letter-spacing: -0.015em;
  line-height: 1.35;
}

.progetto-descrizione {
  font-size: 0.94rem;
  color: var(--testo-secondario);
  line-height: 1.68;
  margin-bottom: 0.85rem;
  max-width: 72ch;
}

.progetto-meta {
  font-size: 0.8rem;
  color: var(--testo-terziario);
  letter-spacing: 0.01em;
}

.progetto-link-gruppo {
  display: inline-flex;
  align-items: center;
  gap: 0.85rem;
}

.link-azione {
  font-size: 0.84rem;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.15s ease, opacity 0.15s ease;
}

.link-azione.primario {
  color: var(--accento);
}

.link-azione.primario:hover {
  text-decoration: underline;
  color: var(--accento-hover);
}

.link-azione.secondario {
  color: var(--testo-terziario);
}

.link-azione.secondario:hover {
  color: var(--testo-primario);
  text-decoration: underline;
}
</style>
