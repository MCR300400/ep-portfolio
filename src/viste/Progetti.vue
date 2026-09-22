<script setup>
import SchedaProgetto from '../components/SchedaProgetto.vue'
import { listaProgetti } from '../dati/progetti'
import { useLingua } from '../composables/useLingua'

const { isItalian } = useLingua()
const progetti = listaProgetti
</script>

<template>
  <div class="contenitore pagina-progetti">
    <header class="testata-pagina">
      <h1 class="titolo-sezione">{{ isItalian ? 'Tutti i Progetti' : 'All Projects' }}</h1>
      <p class="descrizione-sezione">
        {{ isItalian
          ? 'Archivio completo delle applicazioni web, tool interattivi ed esperimenti distribuiti su Cloudflare.'
          : 'Complete register of web applications, interactive tools, and systems deployed on Cloudflare.'
        }}
      </p>
    </header>

    <div class="elenco-progetti">
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
  padding: 4rem 0 5rem;
}

.testata-pagina {
  max-width: 65ch;
  margin-bottom: 2.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 2px solid var(--bordo-medio);
}

.titolo-sezione {
  font-size: 2.4rem;
  font-weight: 850;
  margin-bottom: 0.75rem;
  letter-spacing: -0.025em;
  color: var(--testo-primario);
}

.descrizione-sezione {
  color: var(--testo-secondario);
  font-size: 1.1rem;
  line-height: 1.65;
}

.elenco-progetti {
  display: flex;
  flex-direction: column;
}

@media (max-width: 768px) {
  .pagina-progetti {
    padding: 2.5rem 0 3.5rem;
  }
  .titolo-sezione {
    font-size: 1.85rem;
  }
}
</style>
