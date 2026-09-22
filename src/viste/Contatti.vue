<script setup>
import { useLingua } from '../composables/useLingua'

const { isItalian } = useLingua()
</script>

<template>
  <div class="pagina-contatti">
    <header class="testata-pagina">
      <h1>{{ isItalian ? 'Contatti' : 'Contact' }}</h1>
      <p>
        {{ isItalian
          ? 'Per opportunità lavorative, collaborazioni su software o per scambiare due parole su architetture web, puoi contattarmi direttamente qui.'
          : 'For work opportunities, software collaborations, or discussions on web architecture, you can reach out directly below.'
        }}
      </p>
    </header>

    <div class="elenco-contatti">
      <div class="riga-contatto">
        <span class="canale-label">Email</span>
        <a href="mailto:edoardopippi00@gmail.com" class="canale-valore">edoardopippi00@gmail.com</a>
      </div>
      <div class="riga-contatto">
        <span class="canale-label">{{ isItalian ? 'Sede' : 'Location' }}</span>
        <span class="canale-valore-statico">{{ isItalian ? 'Perugia, Italia' : 'Perugia, Italy' }}</span>
      </div>
      <div class="riga-contatto">
        <span class="canale-label">GitHub</span>
        <a href="https://github.com/MCR300400" target="_blank" rel="noopener noreferrer" class="canale-valore">github.com/MCR300400</a>
      </div>
      <div class="riga-contatto">
        <span class="canale-label">LinkedIn</span>
        <a href="https://www.linkedin.com/in/edoardo-pippi" target="_blank" rel="noopener noreferrer" class="canale-valore">linkedin.com/in/edoardo-pippi</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pagina-contatti {
  padding: 3.5rem 0 4rem;
  max-width: 60ch;
}

.testata-pagina {
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
  color: var(--testo-secondario);
  font-size: 1.05rem;
  line-height: 1.65;
}

.elenco-contatti {
  display: flex;
  flex-direction: column;
}

.riga-contatto {
  display: grid;
  grid-template-columns: 100px 1fr;
  align-items: baseline;
  gap: 1rem;
  padding: 1.1rem 0;
  border-bottom: 1px solid var(--bordo-sottile);
}

.riga-contatto:first-child {
  padding-top: 0;
}

.riga-contatto:last-child {
  border-bottom: none;
}

.canale-label {
  font-size: 0.88rem;
  color: var(--testo-terziario);
}

.canale-valore {
  font-size: 1rem;
  font-weight: 550;
  color: var(--testo-primario);
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-color: var(--bordo-medio);
  transition: color 0.15s ease, text-decoration-color 0.15s ease;
}

.canale-valore:hover {
  color: var(--accento);
  text-decoration-color: var(--accento);
}

.canale-valore-statico {
  font-size: 1rem;
  color: var(--testo-primario);
}
</style>
