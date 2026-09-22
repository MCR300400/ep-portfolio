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
    competenze: ['Java', 'Spring Boot', 'Oracle', 'Python', 'RESTful API', 'OOP', 'SQL & SQLite', 'C / C#']
  },
  {
    categoria: { it: 'Frontend & Mobile', en: 'Frontend & Mobile' },
    competenze: ['Vue.js 3', 'Vite', 'Flutter', 'Dart', 'TypeScript', 'JavaScript', 'HTML5 / CSS3']
  },
  {
    categoria: { it: 'Cloud, Tooling & Metodologie', en: 'Cloud, Tooling & Methodologies' },
    competenze: ['Cloudflare (Workers, D1, Pages)', 'Git', 'Agile / Scrum', 'Problem Solving', 'Debugging']
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
    <!-- Hero Section -->
    <section class="sezione-hero">
      <div class="badge-disponibile">
        <span class="dot"></span>
        {{ isItalian ? 'Full-Stack Software Developer • Perugia, Italia' : 'Full-Stack Software Developer • Perugia, Italy' }}
      </div>
      <h1 class="titolo-hero">
        {{ isItalian
          ? 'Progetto e sviluppo applicazioni web, mobile e architetture scalabili.'
          : 'Designing and building web, mobile apps and scalable architectures.'
        }}
      </h1>
      <p class="sottotitolo-hero" v-if="isItalian">
        Ciao, sono <strong>Edoardo Pippi</strong>. Sviluppatore con oltre 2 anni di esperienza professionale
        nella realizzazione di soluzioni software end-to-end. Specializzato in <strong>Java</strong>,
        <strong>Spring Boot</strong>, <strong>Vue.js 3</strong> e <strong>Flutter</strong>, con approccio Agile e passione per l'ingegneria del software pulita ed efficiente.
      </p>
      <p class="sottotitolo-hero" v-else>
        Hi, I am <strong>Edoardo Pippi</strong>. Software developer with over 2 years of professional experience
        building end-to-end software solutions. Specialized in <strong>Java</strong>,
        <strong>Spring Boot</strong>, <strong>Vue.js 3</strong>, and <strong>Flutter</strong>, with an Agile mindset and a passion for clean, high-performance software engineering.
      </p>
      <div class="azioni-hero">
        <RouterLink to="/progetti" class="pulsante-hero primario">
          {{ isItalian ? 'Esplora i progetti' : 'Explore projects' }}
        </RouterLink>
        <RouterLink to="/contatti" class="pulsante-hero secondario">
          {{ isItalian ? 'Contattami' : 'Get in touch' }}
        </RouterLink>
      </div>
    </section>

    <!-- Sezione Competenze Tecniche -->
    <section class="sezione-blocco">
      <div class="sezione-testata">
        <h2>{{ isItalian ? 'Competenze Tecniche' : 'Technical Skills' }}</h2>
        <span class="sezione-sottotitolo">
          {{ isItalian ? 'Stack tecnologico consolidato sul campo' : 'Field-tested technology stack' }}
        </span>
      </div>
      <div class="griglia-competenze">
        <div v-for="g in gruppiCompetenze" :key="t(g.categoria)" class="scheda-competenza">
          <h3 class="titolo-competenza">{{ t(g.categoria) }}</h3>
          <div class="lista-badge">
            <span v-for="c in g.competenze" :key="c" class="badge-tech">{{ c }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Sezione Progetti in evidenza -->
    <section class="sezione-blocco">
      <div class="sezione-testata">
        <h2>{{ isItalian ? 'Progetti in evidenza' : 'Featured Projects' }}</h2>
        <RouterLink to="/progetti" class="link-tutti">
          {{ isItalian ? 'Vedi tutti →' : 'View all →' }}
        </RouterLink>
      </div>
      <div class="griglia-progetti">
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

    <!-- Sezione Esperienza Lavorativa & Formazione -->
    <section class="sezione-blocco">
      <div class="sezione-testata">
        <h2>{{ isItalian ? 'Esperienza Professionale' : 'Work Experience' }}</h2>
        <span class="sezione-sottotitolo">
          {{ isItalian ? 'Percorso e ruoli ricoperti' : 'Career path and roles' }}
        </span>
      </div>
      <div class="lista-esperienze">
        <article v-for="esp in esperienze" :key="t(esp.ruolo) + t(esp.periodo)" class="scheda-esperienza">
          <div class="esp-header">
            <div>
              <h3 class="esp-ruolo">{{ t(esp.ruolo) }}</h3>
              <div class="esp-azienda">
                <span class="nome-azienda">{{ esp.azienda }}</span>
                <span class="separatore">•</span>
                <span class="luogo-azienda">{{ t(esp.luogo) }}</span>
              </div>
            </div>
            <span class="esp-periodo">{{ t(esp.periodo) }}</span>
          </div>
          <p class="esp-descrizione">{{ t(esp.descrizione) }}</p>
        </article>
      </div>
    </section>

    <!-- Sezione Formazione & Istruzione -->
    <section class="sezione-blocco">
      <div class="sezione-testata">
        <h2>{{ isItalian ? 'Istruzione & Formazione' : 'Education & Qualifications' }}</h2>
        <span class="sezione-sottotitolo">
          {{ isItalian ? 'Percorso accademico' : 'Academic background' }}
        </span>
      </div>
      <div class="griglia-formazione">
        <article v-for="f in formazione" :key="t(f.titolo)" class="scheda-formazione">
          <div class="formazione-top">
            <h3 class="formazione-titolo">{{ t(f.titolo) }}</h3>
            <span class="formazione-anno">{{ t(f.anno) }}</span>
          </div>
          <div class="formazione-istituto">{{ t(f.istituto) }}</div>
          <p class="formazione-note">{{ t(f.note) }}</p>
        </article>
      </div>
    </section>
  </div>
</template>

<style scoped>
.pagina-home {
  padding-bottom: 2rem;
}

.sezione-hero {
  padding: 4.5rem 0 3.5rem;
  max-width: 820px;
}

.badge-disponibile {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.35rem 0.8rem;
  background: var(--accento-sfondo);
  color: var(--accento);
  border: 1px solid var(--accento-bordo);
  border-radius: 9999px;
  font-size: 0.82rem;
  font-weight: 550;
  margin-bottom: 1.5rem;
  letter-spacing: 0.01em;
}

.dot {
  width: 6px;
  height: 6px;
  background-color: var(--accento);
  border-radius: 50%;
}

.titolo-hero {
  font-size: 2.85rem;
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.025em;
  margin-bottom: 1.25rem;
  color: var(--testo-primario);
}

.sottotitolo-hero {
  font-size: 1.15rem;
  line-height: 1.68;
  color: var(--testo-secondario);
  margin-bottom: 2.25rem;
}

.sottotitolo-hero strong {
  color: var(--testo-primario);
  font-weight: 600;
}

.azioni-hero {
  display: flex;
  gap: 1rem;
}

.pulsante-hero {
  padding: 0.75rem 1.45rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
}

.pulsante-hero.primario {
  background: var(--accento);
  color: var(--accento-contrasto);
  border: 1px solid transparent;
}

.pulsante-hero.primario:hover {
  background: var(--accento-hover);
}

.pulsante-hero.secondario {
  background: var(--bg-superficie);
  color: var(--testo-primario);
  border: 1px solid var(--bordo-medio);
}

.pulsante-hero.secondario:hover {
  background: var(--bg-superficie-elevata);
  border-color: var(--bordo-forte);
}

/* Sezioni a blocchi strutturati */
.sezione-blocco {
  margin-top: 4rem;
}

.sezione-testata {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.sezione-testata h2 {
  font-size: 1.6rem;
  font-weight: 750;
  color: var(--testo-primario);
  letter-spacing: -0.015em;
}

.sezione-sottotitolo {
  font-size: 0.88rem;
  color: var(--testo-terziario);
}

.link-tutti {
  color: var(--accento);
  text-decoration: none;
  font-weight: 550;
  font-size: 0.9rem;
  transition: color 0.15s ease;
}

.link-tutti:hover {
  color: var(--accento-hover);
  text-decoration: underline;
}

/* Griglia Competenze */
.griglia-competenze {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.25rem;
}

.scheda-competenza {
  background: var(--bg-superficie);
  border: 1px solid var(--bordo-sottile);
  border-radius: 12px;
  padding: 1.4rem;
  box-shadow: var(--ombra-scheda);
  transition: border-color 0.2s ease, background-color 0.25s ease;
}

.scheda-competenza:hover {
  border-color: var(--accento-bordo);
}

.titolo-competenza {
  font-size: 1rem;
  font-weight: 700;
  color: var(--testo-primario);
  margin-bottom: 0.9rem;
  letter-spacing: -0.01em;
}

.lista-badge {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
}

.badge-tech {
  font-size: 0.78rem;
  font-weight: 550;
  padding: 0.25rem 0.6rem;
  background: var(--bg-superficie-elevata);
  color: var(--testo-secondario);
  border: 1px solid var(--bordo-sottile);
  border-radius: 6px;
}

/* Griglia Progetti */
.griglia-progetti {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
}

/* Esperienze lavorative */
.lista-esperienze {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.scheda-esperienza {
  background: var(--bg-superficie);
  border: 1px solid var(--bordo-sottile);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: var(--ombra-scheda);
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
}

.scheda-esperienza:hover {
  border-color: var(--accento-bordo);
  transform: translateY(-2px);
  box-shadow: var(--ombra-scheda-hover);
}

.esp-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 0.85rem;
}

.esp-ruolo {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--testo-primario);
  letter-spacing: -0.01em;
}

.esp-azienda {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.88rem;
  margin-top: 0.2rem;
}

.nome-azienda {
  font-weight: 650;
  color: var(--accento);
}

.separatore {
  color: var(--testo-terziario);
}

.luogo-azienda {
  color: var(--testo-terziario);
}

.esp-periodo {
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.22rem 0.65rem;
  background: var(--bg-superficie-elevata);
  color: var(--testo-secondario);
  border: 1px solid var(--bordo-sottile);
  border-radius: 9999px;
  white-space: nowrap;
}

.esp-descrizione {
  font-size: 0.94rem;
  line-height: 1.62;
  color: var(--testo-secondario);
}

/* Griglia Formazione */
.griglia-formazione {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.25rem;
}

.scheda-formazione {
  background: var(--bg-superficie);
  border: 1px solid var(--bordo-sottile);
  border-radius: 12px;
  padding: 1.4rem;
  box-shadow: var(--ombra-scheda);
  transition: border-color 0.2s ease;
}

.scheda-formazione:hover {
  border-color: var(--accento-bordo);
}

.formazione-top {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 0.5rem;
  margin-bottom: 0.35rem;
}

.formazione-titolo {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--testo-primario);
}

.formazione-anno {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--accento);
  white-space: nowrap;
}

.formazione-istituto {
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--testo-secondario);
  margin-bottom: 0.65rem;
}

.formazione-note {
  font-size: 0.88rem;
  line-height: 1.55;
  color: var(--testo-terziario);
}

@media (max-width: 680px) {
  .titolo-hero {
    font-size: 2.1rem;
  }
  .sottotitolo-hero {
    font-size: 1rem;
  }
  .azioni-hero {
    flex-direction: column;
    align-items: stretch;
  }
  .pulsante-hero {
    justify-content: center;
  }
  .esp-header {
    flex-direction: column;
  }
}
</style>
