<script setup>
import { ref, onMounted } from 'vue'

const API = import.meta.env.VITE_API_URL
const visite = ref(null)
const caricamento = ref(true)

async function caricaContatore() {
  if (!API) {
    caricamento.value = false
    return
  }
  try {
    const res = await fetch(`${API}/pubblico/contatore?sito=portfolio`)
    if (res.ok) {
      const data = await res.json()
      visite.value = data.visite
    }
  } catch (err) {
    console.debug('Contatore non disponibile:', err)
  } finally {
    caricamento.value = false
  }
}

onMounted(() => {
  caricaContatore()
})
</script>

<template>
  <div v-if="visite !== null" class="badge-contatore" title="Visite totali tracciate nel rispetto della privacy">
    <span class="pulsante-dot"></span>
    <span class="testo">{{ visite.toLocaleString('it-IT') }} visite</span>
  </div>
</template>

<style scoped>
.badge-contatore {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  background: rgba(37, 99, 235, 0.08);
  border: 1px solid rgba(37, 99, 235, 0.2);
  color: #2563eb;
  padding: 0.25rem 0.65rem;
  border-radius: 9999px;
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.01em;
}

.pulsante-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #10b981;
  box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
  }
  70% {
    box-shadow: 0 0 0 6px rgba(16, 185, 129, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
  }
}
</style>
