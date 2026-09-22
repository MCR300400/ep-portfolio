<script setup>
import SchedaProgetto from '../components/SchedaProgetto.vue'
import { listaProgetti } from '../dati/progetti'
import { useLingua } from '../composables/useLingua'

const { isItalian } = useLingua()
const progetti = listaProgetti
</script>

<template>
  <div class="pagina-progetti">
    <header class="testata-pagina">
      <h1>{{ isItalian ? 'Progetti' : 'Projects' }}</h1>
      <p>
        {{ isItalian
          ? 'Applicazioni web, strumenti di lavoro ed esperimenti software ospitati su infrastruttura Cloudflare.'
          : 'Web applications, tools, and software experiments hosted on Cloudflare infrastructure.'
        }}
      </p>
    </header>

    <div class="lista-progetti">
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
  padding: 3.5rem 0 4rem;
}

.testata-pagina {
  max-width: 60ch;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--bordo-sottile);
}

.testata-pagina h1 {
  font-size: 2rem;
  font-weight: 750;
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
  color: var(--testo-primario);
}

.testata-pagina p {
  color: var(--testo-secondary, var(--testo-secondario));
  font-size: 1.05rem;
  line-height: 1.65;
}

.lista-progetti {
  display: flex;
  flex-direction: column;
}
</style>
