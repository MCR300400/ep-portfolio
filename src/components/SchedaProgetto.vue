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
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

.scheda:hover {
  transform: translateY(-2px);
  border-color: #cbd5e1;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05);
}

@media (prefers-color-scheme: dark) {
  .scheda {
    background: #1e293b;
    border-color: #334155;
  }
  .scheda:hover {
    border-color: #475569;
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.4);
  }
}

.scheda-titolo {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: inherit;
}

.scheda-descrizione {
  font-size: 0.95rem;
  color: #64748b;
  line-height: 1.55;
  margin-bottom: 1.25rem;
}

@media (prefers-color-scheme: dark) {
  .scheda-descrizione {
    color: #94a3b8;
  }
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
  background: #f1f5f9;
  color: #475569;
  padding: 0.2rem 0.6rem;
  border-radius: 6px;
}

@media (prefers-color-scheme: dark) {
  .tag {
    background: #334155;
    color: #cbd5e1;
  }
}

.scheda-footer {
  display: flex;
  gap: 0.75rem;
  align-items: center;
  border-top: 1px solid #f1f5f9;
  padding-top: 1rem;
}

@media (prefers-color-scheme: dark) {
  .scheda-footer {
    border-top-color: #334155;
  }
}

.pulsante {
  font-size: 0.85rem;
  font-weight: 500;
  padding: 0.45rem 0.9rem;
  border-radius: 6px;
  text-decoration: none;
  transition: all 0.15s ease;
  display: inline-flex;
  align-items: center;
}

.pulsante-primario {
  background: #2563eb;
  color: #ffffff;
}

.pulsante-primario:hover {
  background: #1d4ed8;
}

.pulsante-secondario {
  background: transparent;
  color: #64748b;
  border: 1px solid #cbd5e1;
}

.pulsante-secondario:hover {
  background: #f8fafc;
  color: #0f172a;
}

@media (prefers-color-scheme: dark) {
  .pulsante-secondario {
    color: #94a3b8;
    border-color: #475569;
  }
  .pulsante-secondario:hover {
    background: #334155;
    color: #f8fafc;
  }
}
</style>
