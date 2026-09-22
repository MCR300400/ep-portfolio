<script setup>
import SchedaProgetto from '../components/SchedaProgetto.vue'
import { listaProgetti } from '../dati/progetti'
import { useLingua } from '../composables/useLingua'

const { isItalian } = useLingua()
const progetti = listaProgetti
</script>

<template>
  <div class="pagina-progetti">
    <div class="testata-pagina">
      <h1>{{ isItalian ? 'Progetti & Architetture' : 'Projects & Architectures' }}</h1>
      <p>
        {{ isItalian
          ? 'Una selezione di progetti software, architetture serverless e implementazioni ad alte prestazioni.'
          : 'A curated selection of software projects, serverless architectures, and high-performance applications.'
        }}
      </p>
    </div>

    <div class="griglia-progetti">
      <SchedaProgetto
        v-for="p in progetti"
        :key="p.id"
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
