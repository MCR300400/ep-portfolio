<script setup>
import { useLingua } from '../composables/useLingua'

const { isItalian } = useLingua()
</script>

<template>
  <div class="pagina-contatti">
    <header class="testata-pagina">
      <h1 class="titolo-sezione">{{ isItalian ? 'Contatti' : 'Contact' }}</h1>
      <p class="descrizione-sezione">
        {{ isItalian
          ? 'Interessato a nuove opportunità professionali, collaborazioni o progetti di sviluppo software full-stack? Puoi scrivermi direttamente.'
          : 'Interested in new professional opportunities, collaborations, or full-stack software development projects? Feel free to reach out.'
        }}
      </p>
    </header>

    <div class="elenco-contatti">
      <div class="canale-contatto">
        <span class="label">Email</span>
        <a href="mailto:edoardopippi00@gmail.com" class="valore">edoardopippi00@gmail.com</a>
      </div>
      <div class="canale-contatto">
        <span class="label">{{ isItalian ? 'Sede' : 'Location' }}</span>
        <span class="valore-statico">{{ isItalian ? 'Perugia, Italia' : 'Perugia, Italy' }}</span>
      </div>
      <div class="canale-contatto">
        <span class="label">GitHub</span>
        <a href="https://github.com/MCR300400" target="_blank" rel="noopener noreferrer" class="valore">github.com/MCR300400</a>
      </div>
      <div class="canale-contatto">
        <span class="label">LinkedIn</span>
        <a href="https://www.linkedin.com/in/edoardo-pippi" target="_blank" rel="noopener noreferrer" class="valore">linkedin.com/in/edoardo-pippi</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pagina-contatti {
  padding: 4rem 0 5rem;
  max-width: 68ch;
}

.testata-pagina {
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

/* Elenco aperto, ZERO card, ZERO ombre, ZERO hover jumps */
.elenco-contatti {
  display: flex;
  flex-direction: column;
}

.canale-contatto {
  display: grid;
  grid-template-columns: 140px 1fr;
  align-items: baseline;
  gap: 1.5rem;
  padding: 1.35rem 0;
  border-bottom: 1px solid var(--bordo-sottile);
}

.canale-contatto:first-child {
  padding-top: 0.5rem;
}

.canale-contatto:last-child {
  border-bottom: none;
}

.label {
  font-size: 0.95rem;
  font-weight: 650;
  color: var(--accento);
}

.valore {
  font-size: 1.05rem;
  font-weight: 550;
  color: var(--testo-primario);
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-color: var(--bordo-medio);
  transition: color 0.15s ease, text-decoration-color 0.15s ease;
}

.valore:hover {
  color: var(--accento);
  text-decoration-color: var(--accento);
}

.valore-statico {
  font-size: 1.05rem;
  font-weight: 550;
  color: var(--testo-primario);
}

@media (max-width: 640px) {
  .pagina-contatti {
    padding: 2.5rem 0 3.5rem;
  }
  .titolo-sezione {
    font-size: 1.85rem;
  }
  .canale-contatto {
    grid-template-columns: 1fr;
    gap: 0.35rem;
    padding: 1rem 0;
  }
}
</style>
