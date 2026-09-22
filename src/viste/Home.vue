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
    categoria: { it: 'Backend & Architettura', en: 'Backend & Architecture' },
    competenze: ['Java', 'Spring Boot', 'Oracle', 'SQL & SQLite', 'RESTful API', 'Python', 'OOP', 'C / C#']
  },
  {
    categoria: { it: 'Frontend & Mobile', en: 'Frontend & Mobile' },
    competenze: ['Vue.js 3', 'TypeScript', 'JavaScript', 'Vite', 'Flutter', 'Dart', 'HTML5 / CSS3', 'Canvas 2D']
  },
  {
    categoria: { it: 'Cloud, Tooling & Metodi', en: 'Cloud, Tooling & Methods' },
    competenze: ['Cloudflare (Workers, D1, Pages)', 'WebSockets & Durable Objects', 'Git', 'Linux', 'Agile / Scrum', 'Debugging']
  }
]

const esperienze = [
  {
    ruolo: { it: 'Full-Stack Developer (Apprendistato)', en: 'Full-Stack Developer (Apprenticeship)' },
    azienda: 'Park It',
    luogo: { it: 'Perugia, Italia', en: 'Perugia, Italy' },
    periodo: { it: 'Dicembre 2024 – Presente', en: 'December 2024 – Present' },
    descrizione: {
      it: 'Sviluppo, restyling e manutenzione in autonomia di siti web e applicazioni complesse. Progettazione e implementazione end-to-end di nuove funzionalità frontend e backend con integrazione di API RESTful e ottimizzazione delle performance.',
      en: 'Autonomous development, redesign, and maintenance of complex websites and web applications. End-to-end design and implementation of frontend and backend features with RESTful API integration and performance optimization.'
    }
  },
  {
    ruolo: { it: 'Tirocinio Full-Stack Developer', en: 'Full-Stack Developer Intern' },
    azienda: 'Park It',
    luogo: { it: 'Perugia, Italia', en: 'Perugia, Italy' },
    periodo: { it: 'Giugno 2024 – Dicembre 2024', en: 'June 2024 – December 2024' },
    descrizione: {
      it: 'Supporto allo sviluppo e alla manutenzione di applicativi e portali aziendali all’interno del team. Attività di debugging, scrittura di codice robusto e risoluzione di ticket tecnici su componenti esistenti.',
      en: 'Supported development and maintenance of company web applications and portals within the engineering team. Bug fixing, writing robust code, and resolving technical tickets on existing systems.'
    }
  },
  {
    ruolo: { it: 'Sviluppatore Web & Mobile (Tirocinio Universitario)', en: 'Web & Mobile Developer (University Intern)' },
    azienda: 'Levita Srls',
    luogo: { it: 'Perugia, Italia', en: 'Perugia, Italy' },
    periodo: { it: 'Ottobre 2023 – Novembre 2023', en: 'October 2023 – November 2023' },
    descrizione: {
      it: 'Attività di programmazione mobile per applicazioni aziendali. Modifica e manutenzione di siti web aziendali con gestione e caricamento dei contenuti.',
      en: 'Mobile app development for business software. Modification and maintenance of company web properties with content updates.'
    }
  }
]

const formazione = [
  {
    titolo: { it: 'Laurea in Informatica', en: 'Bachelor\'s Degree in Computer Science' },
    istituto: { it: 'Università degli Studi di Perugia', en: 'University of Perugia' },
    anno: { it: 'Aprile 2026', en: 'April 2026' },
    luogo: { it: 'Perugia, Italia', en: 'Perugia, Italy' },
    note: {
      it: 'Tesi sperimentale svolta in collaborazione con Park It: "IoT Parking Management per operatori".',
      en: 'Experimental thesis in partnership with Park It: "IoT Parking Management for operators".'
    }
  },
  {
    titolo: { it: 'Diploma di Liceo Scientifico', en: 'Scientific High School Diploma' },
    istituto: { it: 'Liceo Scientifico "Galeazzo Alessi"', en: 'Scientific High School "Galeazzo Alessi"' },
    anno: { it: 'Perugia, Italia', en: 'Perugia, Italy' },
    luogo: { it: 'Perugia, Italia', en: 'Perugia, Italy' },
    note: {
      it: 'Solida formazione logico-matematica e propensione scientifica al problem solving.',
      en: 'Solid foundation in logic, mathematics, and scientific problem solving.'
    }
  }
]
</script>

<template>
  <div class="pagina-home">
    <!-- Hero Section: Nome e Cognome in grande con colore arancione principale -->
    <section class="sezione-hero">
      <div class="hero-top-tag">
        {{ isItalian ? 'Full-Stack Software Developer • Perugia, Italia' : 'Full-Stack Software Developer • Perugia, Italy' }}
      </div>

      <h1 class="nome-hero">
        Edoardo<br />
        <span class="cognome-arancione">Pippi</span>
      </h1>

      <p class="sottotitolo-hero">
        {{ isItalian
          ? 'Progetto e sviluppo applicazioni web, mobile e architetture scalabili con Java, Spring Boot, Vue.js e l’ecosistema cloud di Cloudflare.'
          : 'Designing and building web, mobile apps and scalable architectures with Java, Spring Boot, Vue.js, and the Cloudflare cloud ecosystem.'
        }}
      </p>

      <div class="bio-dettaglio">
        <p v-if="isItalian">
          Sviluppatore con oltre 2 anni di esperienza professionale nella realizzazione di soluzioni software end-to-end. Attualmente lavoro presso <strong>Park It</strong> e frequento il corso di Laurea in Informatica presso l’<strong>Università degli Studi di Perugia</strong>.
        </p>
        <p v-else>
          Software developer with over 2 years of professional experience building end-to-end software solutions. Currently working at <strong>Park It</strong> and completing a Computer Science Degree at the <strong>University of Perugia</strong>.
        </p>
      </div>

      <div class="azioni-hero">
        <RouterLink to="/progetti" class="pulsante-hero primario">
          {{ isItalian ? 'Esplora i progetti' : 'Explore projects' }}
        </RouterLink>
        <RouterLink to="/contatti" class="pulsante-hero secondario">
          {{ isItalian ? 'Contattami' : 'Get in touch' }}
        </RouterLink>
      </div>
    </section>

    <!-- Sezione Progetti in evidenza (No card, indice aperto) -->
    <section class="sezione-blocco">
      <div class="sezione-testata">
        <div>
          <h2>{{ isItalian ? 'Progetti in evidenza' : 'Featured Projects' }}</h2>
          <span class="sezione-descrizione">
            {{ isItalian ? 'Applicazioni ed esperimenti distribuiti su Cloudflare' : 'Live applications and systems on Cloudflare' }}
          </span>
        </div>
        <RouterLink to="/progetti" class="link-tutti">
          {{ isItalian ? 'Tutti i progetti' : 'All projects' }}
        </RouterLink>
      </div>

      <div class="elenco-progetti">
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

    <!-- Sezione Competenze Tecniche (No card, colonne tipografiche) -->
    <section class="sezione-blocco">
      <div class="sezione-testata">
        <div>
          <h2>{{ isItalian ? 'Competenze Tecniche' : 'Technical Skills' }}</h2>
          <span class="sezione-descrizione">
            {{ isItalian ? 'Tecnologie e linguaggi consolidati sul campo' : 'Production-tested tools and languages' }}
          </span>
        </div>
      </div>

      <div class="griglia-competenze">
        <div v-for="g in gruppiCompetenze" :key="t(g.categoria)" class="gruppo-competenza">
          <h3 class="titolo-competenza">{{ t(g.categoria) }}</h3>
          <ul class="lista-competenze">
            <li v-for="c in g.competenze" :key="c" class="item-competenza">
              {{ c }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Sezione Esperienza Professionale (No card, timeline aperta) -->
    <section class="sezione-blocco">
      <div class="sezione-testata">
        <div>
          <h2>{{ isItalian ? 'Esperienza Professionale' : 'Work Experience' }}</h2>
          <span class="sezione-descrizione">
            {{ isItalian ? 'Percorso lavorativo e ruoli ricoperti' : 'Career path and roles' }}
          </span>
        </div>
      </div>

      <div class="elenco-esperienze">
        <article v-for="esp in esperienze" :key="t(esp.ruolo) + t(esp.periodo)" class="riga-esperienza">
          <div class="esperienza-periodo">{{ t(esp.periodo) }}</div>
          <div class="esperienza-corpo">
            <h3 class="esperienza-ruolo">{{ t(esp.ruolo) }}</h3>
            <div class="esperienza-meta">
              <span class="esperienza-azienda">{{ esp.azienda }}</span>
              <span class="separatore">•</span>
              <span class="esperienza-luogo">{{ t(esp.luogo) }}</span>
            </div>
            <p class="esperienza-descrizione">{{ t(esp.descrizione) }}</p>
          </div>
        </article>
      </div>
    </section>

    <!-- Sezione Formazione (No card, layout aperto) -->
    <section class="sezione-blocco">
      <div class="sezione-testata">
        <div>
          <h2>{{ isItalian ? 'Istruzione & Formazione' : 'Education & Qualifications' }}</h2>
          <span class="sezione-descrizione">
            {{ isItalian ? 'Percorso accademico e scientifico' : 'Academic background' }}
          </span>
        </div>
      </div>

      <div class="elenco-formazione">
        <article v-for="f in formazione" :key="t(f.titolo)" class="riga-formazione">
          <div class="formazione-periodo">{{ t(f.anno) }}</div>
          <div class="formazione-corpo">
            <h3 class="formazione-titolo">{{ t(f.titolo) }}</h3>
            <div class="formazione-istituto">{{ t(f.istituto) }} · {{ t(f.luogo) }}</div>
            <p class="formazione-note">{{ t(f.note) }}</p>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<style scoped>
.pagina-home {
  padding-bottom: 5rem;
}

/* ==========================================================================
   Hero Section: Grande impatto del nome con l'arancione su ogni schermo
   ========================================================================== */
.sezione-hero {
  padding: 5rem 0 4rem;
  border-bottom: 1px solid var(--bordo-sottile);
}

.hero-top-tag {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--accento);
  margin-bottom: 1.25rem;
  letter-spacing: 0.02em;
}

/* Fluid responsive typography: Scala splendidamente da 320px a 2560px */
.nome-hero {
  font-size: clamp(3.2rem, 11vw, 7.5rem);
  font-weight: 850;
  line-height: 0.95;
  letter-spacing: -0.04em;
  color: var(--testo-primario);
  margin-bottom: 1.75rem;
}

.cognome-arancione {
  color: var(--accento);
  display: inline-block;
}

.sottotitolo-hero {
  font-size: clamp(1.2rem, 2.5vw, 1.65rem);
  font-weight: 500;
  line-height: 1.45;
  color: var(--testo-primario);
  letter-spacing: -0.015em;
  max-width: 48ch;
  margin-bottom: 1.5rem;
}

.bio-dettaglio {
  font-size: 1.05rem;
  line-height: 1.72;
  color: var(--testo-secondario);
  max-width: 65ch;
  margin-bottom: 2.5rem;
}

.bio-dettaglio strong {
  color: var(--testo-primario);
  font-weight: 600;
}

/* Azioni Hero: statiche, stabili, ZERO effetti di hover */
.azioni-hero {
  display: flex;
  gap: 1rem;
}

.pulsante-hero {
  padding: 0.85rem 1.65rem;
  border-radius: 6px;
  font-weight: 650;
  font-size: 0.95rem;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  transition: background-color 0.15s ease, color 0.15s ease, border-color 0.15s ease;
}

.pulsante-hero.primario {
  background: var(--accento);
  color: var(--accento-contrasto);
  border: 1px solid var(--accento);
}

.pulsante-hero.primario:hover {
  background: var(--accento-hover);
  border-color: var(--accento-hover);
}

.pulsante-hero.secondario {
  background: transparent;
  color: var(--testo-primario);
  border: 1px solid var(--bordo-forte);
}

.pulsante-hero.secondario:hover {
  border-color: var(--accento);
  color: var(--accento);
}

/* ==========================================================================
   Sezioni a blocchi aperti (ZERO card, ZERO hover physics)
   ========================================================================== */
.sezione-blocco {
  margin-top: 5rem;
}

.sezione-testata {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 1rem;
  padding-bottom: 1.25rem;
  border-bottom: 2px solid var(--bordo-medio);
  margin-bottom: 1.5rem;
}

.sezione-testata h2 {
  font-size: 1.85rem;
  font-weight: 800;
  color: var(--testo-primario);
  letter-spacing: -0.025em;
  line-height: 1.2;
}

.sezione-descrizione {
  display: block;
  font-size: 0.92rem;
  color: var(--testo-terziario);
  margin-top: 0.25rem;
}

.link-tutti {
  color: var(--accento);
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: underline;
  text-underline-offset: 3px;
  transition: color 0.15s ease;
}

.link-tutti:hover {
  color: var(--accento-hover);
}

/* Elenco Progetti */
.elenco-progetti {
  display: flex;
  flex-direction: column;
}

/* Griglia Competenze (3 Colonne tipografiche aperte) */
.griglia-competenze {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 3rem 2rem;
  padding-top: 1rem;
}

.gruppo-competenza {
  display: flex;
  flex-direction: column;
}

.titolo-competenza {
  font-size: 1.15rem;
  font-weight: 750;
  color: var(--accento);
  letter-spacing: -0.015em;
  margin-bottom: 1rem;
  padding-bottom: 0.45rem;
  border-bottom: 1px solid var(--bordo-sottile);
}

.lista-competenze {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
}

.item-competenza {
  font-size: 0.98rem;
  color: var(--testo-secondario);
  line-height: 1.5;
}

/* Esperienze e Formazione (Righe aperte a 2 colonne) */
.elenco-esperienze,
.elenco-formazione {
  display: flex;
  flex-direction: column;
}

.riga-esperienza,
.riga-formazione {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 2rem;
  padding: 2.25rem 0;
  border-bottom: 1px solid var(--bordo-sottile);
}

.riga-esperienza:first-child,
.riga-formazione:first-child {
  padding-top: 0.5rem;
}

.riga-esperienza:last-child,
.riga-formazione:last-child {
  border-bottom: none;
}

.esperienza-periodo,
.formazione-periodo {
  font-size: 0.95rem;
  font-weight: 650;
  color: var(--accento);
  letter-spacing: -0.01em;
}

.esperienza-ruolo,
.formazione-titolo {
  font-size: 1.25rem;
  font-weight: 750;
  color: var(--testo-primario);
  letter-spacing: -0.015em;
  margin-bottom: 0.35rem;
}

.esperienza-meta,
.formazione-istituto {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
  color: var(--testo-terziario);
  margin-bottom: 0.85rem;
}

.esperienza-azienda {
  font-weight: 600;
  color: var(--testo-primario);
}

.separatore {
  color: var(--testo-terziario);
}

.esperienza-descrizione,
.formazione-note {
  font-size: 0.98rem;
  line-height: 1.7;
  color: var(--testo-secondario);
  max-width: 72ch;
}

/* Adattamenti Mobile & Tablet */
@media (max-width: 768px) {
  .sezione-hero {
    padding: 3.5rem 0 3rem;
  }
  .riga-esperienza,
  .riga-formazione {
    grid-template-columns: 1fr;
    gap: 0.5rem;
    padding: 1.75rem 0;
  }
  .esperienza-periodo,
  .formazione-periodo {
    font-size: 0.88rem;
  }
  .azioni-hero {
    flex-direction: column;
    align-items: stretch;
  }
  .pulsante-hero {
    justify-content: center;
  }
  .sezione-blocco {
    margin-top: 3.5rem;
  }
  .sezione-testata h2 {
    font-size: 1.5rem;
  }
}
</style>
