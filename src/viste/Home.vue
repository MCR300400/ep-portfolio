<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import SchedaProgetto from '../components/SchedaProgetto.vue'
import { listaProgetti } from '../dati/progetti'
import { useLingua } from '../composables/useLingua'

const { isItalian, t } = useLingua()

const progettiInEvidenza = computed(() => listaProgetti.filter(p => p.inEvidenza))

const gruppiCompetenze = [
  {
    categoria: { it: 'Backend & Sistemi', en: 'Backend & Systems' },
    competenze: ['Java', 'Spring Boot', 'SQL & SQLite', 'Oracle', 'REST API', 'Python', 'C / C#']
  },
  {
    categoria: { it: 'Frontend & Mobile', en: 'Frontend & Mobile' },
    competenze: ['Vue.js 3', 'TypeScript', 'Vite', 'Flutter / Dart', 'Canvas 2D', 'HTML5 / CSS3']
  },
  {
    categoria: { it: 'Cloud & Tooling', en: 'Cloud & Tooling' },
    competenze: ['Cloudflare Workers & D1', 'Durable Objects & WebSockets', 'Git', 'Linux', 'Agile / Scrum']
  }
]

const esperienze = [
  {
    ruolo: { it: 'Full-Stack Developer (Apprendistato)', en: 'Full-Stack Developer (Apprenticeship)' },
    azienda: 'Park It',
    luogo: { it: 'Perugia, Italia', en: 'Perugia, Italy' },
    periodo: { it: '2024 – Presente', en: '2024 – Present' },
    descrizione: {
      it: 'Sviluppo, restyling e manutenzione di applicazioni web e servizi interni. Progettazione di funzionalità end-to-end con integrazione di API RESTful e ottimizzazione delle performance.',
      en: 'Development, redesign, and maintenance of web applications and internal services. End-to-end design of features with RESTful API integration and performance optimization.'
    }
  },
  {
    ruolo: { it: 'Tirocinio Full-Stack Developer', en: 'Full-Stack Developer Intern' },
    azienda: 'Park It',
    luogo: { it: 'Perugia, Italia', en: 'Perugia, Italy' },
    periodo: { it: '2024', en: '2024' },
    descrizione: {
      it: 'Attività di sviluppo e manutenzione su applicativi e portali aziendali all’interno del team tecnico. Risoluzione ticket, debugging e scrittura di codice per componenti esistenti.',
      en: 'Development and maintenance of company web applications within the technical team. Bug fixing, debugging, and code improvements on existing components.'
    }
  },
  {
    ruolo: { it: 'Tirocinio Sviluppatore Web & Mobile', en: 'Web & Mobile Developer Intern' },
    azienda: 'Levita Srls',
    luogo: { it: 'Perugia, Italia', en: 'Perugia, Italy' },
    periodo: { it: '2023', en: '2023' },
    descrizione: {
      it: 'Sviluppo mobile per applicazioni aziendali, manutenzione e gestione dei contenuti su siti web.',
      en: 'Mobile app development for business software, maintenance and content updates on company websites.'
    }
  }
]

const formazione = [
  {
    titolo: { it: 'Laurea in Informatica', en: 'Bachelor\'s Degree in Computer Science' },
    istituto: { it: 'Università degli Studi di Perugia', en: 'University of Perugia' },
    anno: '2026',
    note: {
      it: 'Tesi sperimentale svolta in collaborazione con Park It: "IoT Parking Management per operatori".',
      en: 'Experimental thesis in collaboration with Park It: "IoT Parking Management for operators".'
    }
  },
  {
    titolo: { it: 'Diploma di Liceo Scientifico', en: 'Scientific High School Diploma' },
    istituto: { it: 'Liceo Scientifico "Galeazzo Alessi"', en: 'Scientific High School "Galeazzo Alessi"' },
    anno: 'Perugia',
    note: {
      it: 'Indirizzo tradizionale con solida preparazione scientifica e logico-matematica.',
      en: 'Traditional scientific curriculum with strong grounding in mathematics and logic.'
    }
  }
]
</script>

<template>
  <div class="pagina-home">
    <!-- Hero Section: Human, authentic, understated -->
    <header class="sezione-hero">
      <h1 class="titolo-hero">Edoardo Pippi</h1>
      <p class="sottotitolo-ruolo">
        {{ isItalian ? 'Sviluppatore software a Perugia.' : 'Software developer based in Perugia, Italy.' }}
      </p>

      <p class="bio-intro">
        {{ isItalian
          ? 'Sviluppo applicazioni web, backend e sistemi software con Java, Spring Boot, Vue.js e database relazionali. Lavoro presso Park It e sperimento con l’architettura serverless di Cloudflare.'
          : 'I build web applications, backend services, and software systems with Java, Spring Boot, Vue.js, and relational databases. Currently working at Park It and exploring Cloudflare serverless architecture.'
        }}
      </p>

      <div class="link-rapidi">
        <a href="mailto:edoardopippi00@gmail.com" class="link-testo">Email</a>
        <span class="punto">/</span>
        <a href="https://github.com/MCR300400" target="_blank" rel="noopener noreferrer" class="link-testo">GitHub</a>
        <span class="punto">/</span>
        <a href="https://www.linkedin.com/in/edoardo-pippi" target="_blank" rel="noopener noreferrer" class="link-testo">LinkedIn</a>
      </div>
    </header>

    <!-- Progetti in Evidenza: Clean editorial index -->
    <section class="sezione-blocco">
      <div class="sezione-testata">
        <h2>{{ isItalian ? 'Progetti selezionati' : 'Selected projects' }}</h2>
        <RouterLink to="/progetti" class="link-tutti">
          {{ isItalian ? 'Tutti i progetti' : 'All projects' }}
        </RouterLink>
      </div>

      <div class="indice-progetti">
        <SchedaProgetto
          v-for="p in progettiInEvidenza"
          :key="p.id"
          :titolo="p.titolo"
          :descrizione="p.descrizione"
          :tag="p.tag"
          :link-git-hub="p.linkGitHub"
          :link-live="p.linkLive"
        />
      </div>
    </section>

    <!-- Esperienza Professionale -->
    <section class="sezione-blocco">
      <div class="sezione-testata">
        <h2>{{ isItalian ? 'Esperienza' : 'Experience' }}</h2>
      </div>

      <div class="lista-cronologica">
        <article v-for="esp in esperienze" :key="t(esp.ruolo) + t(esp.periodo)" class="item-cronologico">
          <div class="cronologico-header">
            <span class="cronologico-periodo">{{ t(esp.periodo) }}</span>
            <div class="cronologico-titoli">
              <h3 class="cronologico-ruolo">{{ t(esp.ruolo) }}</h3>
              <span class="cronologico-azienda">{{ esp.azienda }} · {{ t(esp.luogo) }}</span>
            </div>
          </div>
          <p class="cronologico-descrizione">{{ t(esp.descrizione) }}</p>
        </article>
      </div>
    </section>

    <!-- Formazione -->
    <section class="sezione-blocco">
      <div class="sezione-testata">
        <h2>{{ isItalian ? 'Formazione' : 'Education' }}</h2>
      </div>

      <div class="lista-cronologica">
        <article v-for="f in formazione" :key="t(f.titolo)" class="item-cronologico">
          <div class="cronologico-header">
            <span class="cronologico-periodo">{{ f.anno }}</span>
            <div class="cronologico-titoli">
              <h3 class="cronologico-ruolo">{{ t(f.titolo) }}</h3>
              <span class="cronologico-azienda">{{ t(f.istituto) }}</span>
            </div>
          </div>
          <p class="cronologico-descrizione">{{ t(f.note) }}</p>
        </article>
      </div>
    </section>

    <!-- Competenze: Clean typographic columns -->
    <section class="sezione-blocco">
      <div class="sezione-testata">
        <h2>{{ isItalian ? 'Competenze' : 'Skills' }}</h2>
      </div>

      <div class="griglia-competenze-editoriale">
        <div v-for="g in gruppiCompetenze" :key="t(g.categoria)" class="colonna-competenza">
          <h3 class="titolo-competenza">{{ t(g.categoria) }}</h3>
          <p class="elenco-tecnologie">{{ g.competenze.join(', ') }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.pagina-home {
  padding-bottom: 4rem;
}

.sezione-hero {
  padding: 4.5rem 0 3rem;
  border-bottom: 1px solid var(--bordo-sottile);
}

.titolo-hero {
  font-size: 2.25rem;
  font-weight: 750;
  color: var(--testo-primario);
  letter-spacing: -0.025em;
  line-height: 1.15;
  margin-bottom: 0.35rem;
}

.sottotitolo-ruolo {
  font-size: 1.1rem;
  color: var(--testo-terziario);
  margin-bottom: 1.5rem;
}

.bio-intro {
  font-size: 1.05rem;
  line-height: 1.72;
  color: var(--testo-secondario);
  max-width: 68ch;
  margin-bottom: 1.75rem;
}

.link-rapidi {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.92rem;
}

.link-testo {
  color: var(--testo-primario);
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-color: var(--bordo-medio);
  transition: color 0.15s ease, text-decoration-color 0.15s ease;
}

.link-testo:hover {
  color: var(--accento);
  text-decoration-color: var(--accento);
}

.punto {
  color: var(--testo-terziario);
}

/* Sezioni a blocchi */
.sezione-blocco {
  margin-top: 3.5rem;
}

.sezione-testata {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 1.25rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--bordo-sottile);
}

.sezione-testata h2 {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--testo-primario);
  letter-spacing: -0.015em;
}

.link-tutti {
  color: var(--testo-terziario);
  text-decoration: none;
  font-size: 0.88rem;
  transition: color 0.15s ease;
}

.link-tutti:hover {
  color: var(--accento);
}

/* Cronologia esperienze & formazione */
.lista-cronologica {
  display: flex;
  flex-direction: column;
}

.item-cronologico {
  padding: 1.35rem 0;
  border-bottom: 1px solid var(--bordo-sottile);
}

.item-cronologico:first-child {
  padding-top: 0.25rem;
}

.item-cronologico:last-child {
  border-bottom: none;
}

.cronologico-header {
  display: grid;
  grid-template-columns: 140px 1fr;
  gap: 1rem;
  align-items: baseline;
  margin-bottom: 0.5rem;
}

.cronologico-periodo {
  font-size: 0.85rem;
  color: var(--testo-terziario);
}

.cronologico-titoli {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.cronologico-ruolo {
  font-size: 1.02rem;
  font-weight: 650;
  color: var(--testo-primario);
  letter-spacing: -0.01em;
}

.cronologico-azienda {
  font-size: 0.88rem;
  color: var(--testo-terziario);
}

.cronologico-descrizione {
  font-size: 0.92rem;
  line-height: 1.65;
  color: var(--testo-secondario);
  margin-left: calc(140px + 1rem);
  max-width: 68ch;
}

/* Competenze editoriali */
.griglia-competenze-editoriale {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  padding-top: 0.5rem;
}

.titolo-competenza {
  font-size: 0.92rem;
  font-weight: 700;
  color: var(--testo-primario);
  margin-bottom: 0.5rem;
  letter-spacing: -0.01em;
}

.elenco-tecnologie {
  font-size: 0.9rem;
  line-height: 1.65;
  color: var(--testo-secondario);
}

@media (max-width: 640px) {
  .cronologico-header {
    grid-template-columns: 1fr;
    gap: 0.25rem;
  }
  .cronologico-descrizione {
    margin-left: 0;
    margin-top: 0.5rem;
  }
}
</style>
