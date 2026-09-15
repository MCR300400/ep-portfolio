<script setup>
defineProps({
  titolo: { type: String, required: true },
  descrizione: { type: String, required: true },
  tag: { type: Array, default: () => [] },
  linkGitHub: { type: String, default: '' },
  linkLive: { type: String, default: '' }
})
</script>

<template>
  <div class="scheda">
    <div class="scheda-corpo">
      <h3 class="scheda-titolo">{{ titolo }}</h3>
      <p class="scheda-descrizione">{{ descrizione }}</p>
      <div class="scheda-tag">
        <span v-for="t in tag" :key="t" class="tag">{{ t }}</span>
      </div>
    </div>
    <div class="scheda-footer" v-if="linkGitHub || linkLive">
      <a v-if="linkGitHub" :href="linkGitHub" target="_blank" rel="noopener noreferrer" class="pulsante pulsante-secondario">
        GitHub
      </a>
      <a v-if="linkLive" :href="linkLive" target="_blank" rel="noopener noreferrer" class="pulsante pulsante-primario">
        Visita &rarr;
      </a>
    </div>
  </div>
</template>

<style scoped>
.scheda {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: var(--bg-superficie);
  border: 1px solid var(--bordo-sottile);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: var(--ombra-scheda);
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease, background-color 0.25s ease;
}

.scheda:hover {
  transform: translateY(-2px);
  border-color: var(--accento-bordo);
  box-shadow: var(--ombra-scheda-hover);
}

.scheda-titolo {
  font-size: 1.22rem;
  font-weight: 650;
  margin-bottom: 0.5rem;
  color: var(--testo-primario);
  letter-spacing: -0.01em;
}

.scheda-descrizione {
  font-size: 0.95rem;
  color: var(--testo-secondario);
  line-height: 1.6;
  margin-bottom: 1.25rem;
}

.scheda-tag {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tag {
  font-size: 0.75rem;
  font-weight: 500;
  background: var(--bg-superficie-elevata);
  color: var(--testo-secondario);
  border: 1px solid var(--bordo-sottile);
  padding: 0.22rem 0.58rem;
  border-radius: 6px;
  transition: all 0.2s ease;
}

.scheda-footer {
  display: flex;
  gap: 0.75rem;
  align-items: center;
  border-top: 1px solid var(--bordo-sottile);
  padding-top: 1.15rem;
}

.pulsante {
  font-size: 0.85rem;
  font-weight: 550;
  padding: 0.48rem 0.95rem;
  border-radius: 6px;
  text-decoration: none;
  transition: all 0.18s ease;
  display: inline-flex;
  align-items: center;
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
</style>
