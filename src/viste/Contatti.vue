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
          ? 'Interessato a opportunità professionali, collaborazioni su architetture cloud, backend e sviluppo full-stack? Scrivimi pure.'
          : 'Interested in professional opportunities, collaborations on cloud architectures, backend systems, and full-stack engineering? Feel free to reach out.'
        }}
      </p>
    </div>

    <div class="riquadro-contatti">
      <div class="canale-contatto">
        <span class="label">Email</span>
        <a href="mailto:edoardopippi00@gmail.com" class="valore">edoardopippi00@gmail.com</a>
      </div>
      <div class="canale-contatto">
        <span class="label">{{ isItalian ? 'Sede operativa' : 'Location' }}</span>
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
  padding: 3rem 0;
  max-width: 620px;
}

.testata-pagina h1 {
  font-size: 2.1rem;
  font-weight: 800;
  margin-bottom: 0.75rem;
  letter-spacing: -0.02em;
  color: var(--testo-primario);
}

.testata-pagina p {
  color: var(--testo-secondario);
  font-size: 1.05rem;
  line-height: 1.62;
  margin-bottom: 2rem;
}

.riquadro-contatti {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  background: var(--bg-superficie);
  border: 1px solid var(--bordo-sottile);
  border-radius: 8px;
  padding: 1.75rem;
  box-shadow: var(--ombra-scheda);
}

.canale-contatto {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--bordo-sottile);
}

.canale-contatto:last-child {
  padding-bottom: 0;
  border-bottom: none;
}

.label {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--testo-terziario);
}

.valore {
  font-size: 1.05rem;
  font-weight: 600;
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
  font-weight: 600;
  color: var(--testo-primario);
}
</style>
