<script setup>
import { useLingua } from '../composables/useLingua'

const { isItalian } = useLingua()
</script>

<template>
  <div class="pagina-contatti">
    <div class="testata-pagina">
      <h1>{{ isItalian ? 'Contatti' : 'Contact' }}</h1>
      <p>
        {{ isItalian
          ? 'Interessato a nuove opportunità professionali, collaborazioni o progetti di sviluppo software full-stack? Sentiti libero di contattarmi.'
          : 'Interested in new professional opportunities, collaborations, or full-stack software development projects? Feel free to reach out.'
        }}
      </p>
    </div>

    <div class="riquadro-contatti">
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
  padding: 2.5rem 0;
  max-width: 600px;
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
  margin-bottom: 2rem;
}

.riquadro-contatti {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  background: var(--bg-superficie);
  border: 1px solid var(--bordo-sottile);
  border-radius: 12px;
  padding: 1.75rem;
  box-shadow: var(--ombra-scheda);
  transition: background-color 0.25s ease, border-color 0.2s ease, box-shadow 0.2s ease;
}

.canale-contatto {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.label {
  font-size: 0.78rem;
  font-weight: 650;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--testo-terziario);
}

.valore {
  font-size: 1.05rem;
  font-weight: 550;
  color: var(--accento);
  text-decoration: none;
  transition: color 0.15s ease;
}

.valore:hover {
  color: var(--accento-hover);
  text-decoration: underline;
}

.valore-statico {
  font-size: 1.05rem;
  font-weight: 550;
  color: var(--testo-primario);
}
</style>
