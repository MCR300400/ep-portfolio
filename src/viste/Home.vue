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
    competenze: ['Java', 'Spring Boot', 'SQL & SQLite', 'Oracle', 'RESTful API', 'Python', 'C / C#']
  },
  {
    categoria: { it: 'Frontend & Interfacce', en: 'Frontend & Interfaces' },
    competenze: ['Vue.js 3', 'TypeScript', 'Vite', 'Flutter / Dart', 'Canvas 2D', 'Web Audio API']
  },
  {
    categoria: { it: 'Edge & Cloudflare Stack', en: 'Edge & Cloudflare Stack' },
    competenze: ['Cloudflare Workers', 'D1 Database', 'Durable Objects', 'WebSockets', 'Pages', 'Zero Trust']
  }
]

const telemetryHighlights = [
  {
    label: { it: 'Architettura Edge', en: 'Edge Architecture' },
    valore: '100% Serverless',
    dettaglio: { it: 'Deploy globale su Cloudflare V8 isolates', en: 'Global deploy on Cloudflare V8 isolates' }
  },
  {
    label: { it: 'Overhead Runtime', en: 'Runtime Overhead' },
    valore: '0 dipendenze',
    dettaglio: { it: 'Worker nativo per telemetria e ingest', en: 'Zero runtime dependencies on backend worker' }
  },
  {
    label: { it: 'Sincronizzazione', en: 'Synchronization' },
    valore: 'Real-time state',
    dettaglio: { it: 'Durable Objects & WebSockets a 60 FPS', en: 'Durable Objects & WebSockets at 60 FPS' }
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
        {{ isItalian ? 'Software Developer • Architetture Cloud & Sistemi Edge' : 'Software Developer • Cloud & Edge Architectures' }}
      </div>
      <h1 class="titolo-hero">
        {{ isItalian
          ? 'Progetto e sviluppo applicazioni web ad alte prestazioni, sistemi distribuiti e architetture edge.'
          : 'Designing and building high-performance web applications, distributed systems, and edge architectures.'
        }}
      </h1>
      <p class="sottotitolo-hero">
        {{ isItalian
          ? 'Ciao, sono Edoardo Pippi. Sviluppatore full-stack con oltre 2 anni di esperienza sul campo. Specializzato in Java, Spring Boot, Vue.js 3 e l’ecosistema serverless Cloudflare.'
          : 'Hi, I am Edoardo Pippi. Full-stack developer with over 2 years of professional experience. Specializing in Java, Spring Boot, Vue.js 3, and the Cloudflare serverless ecosystem.'
        }}
      </p>

      <div class="azioni-hero">
        <RouterLink to="/progetti" class="pulsante-hero primario">
          {{ isItalian ? 'Esplora i progetti' : 'Explore projects' }}
        </RouterLink>
        <RouterLink to="/contatti" class="pulsante-hero secondario">
          {{ isItalian ? 'Contattami' : 'Get in touch' }}
        </RouterLink>
      </div>

      <!-- Telemetry Highlights Strip -->
      <div class="telemetria-strip">
        <div v-for="tItem in telemetryHighlights" :key="t(tItem.label)" class="telemetria-item">
          <span class="telemetria-valore">{{ tItem.valore }}</span>
          <span class="telemetria-titolo">{{ t(tItem.label) }}</span>
          <span class="telemetria-desc">{{ t(tItem.dettaglio) }}</span>
        </div>
      </div>
    </section>

    <!-- Sezione Progetti in evidenza -->
    <section class="sezione-blocco">
      <div class="sezione-testata">
        <div>
          <h2>{{ isItalian ? 'Progetti in evidenza' : 'Featured Projects' }}</h2>
          <span class="sezione-sottotitolo">
            {{ isItalian ? 'Applicazioni ed esperimenti operativi ospitati su Cloudflare' : 'Live applications and operational systems on Cloudflare' }}
          </span>
        </div>
        <RouterLink to="/progetti" class="link-tutti">
          {{ isItalian ? 'Tutti i progetti' : 'All projects' }}
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

    <!-- Sezione Competenze Tecniche -->
    <section class="sezione-blocco">
      <div class="sezione-testata">
        <div>
          <h2>{{ isItalian ? 'Competenze Tecniche' : 'Technical Skills' }}</h2>
          <span class="sezione-sottotitolo">
            {{ isItalian ? 'Strumenti e tecnologie consolidate in produzione' : 'Production-tested tools and languages' }}
          </span>
        </div>
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

    <!-- Sezione Esperienza Lavorativa -->
    <section class="sezione-blocco">
      <div class="sezione-testata">
        <div>
          <h2>{{ isItalian ? 'Esperienza Professionale' : 'Work Experience' }}</h2>
          <span class="sezione-sottotitolo">
            {{ isItalian ? 'Percorso lavorativo e contributi tecnici' : 'Career timeline and technical contributions' }}
          </span>
        </div>
      </div>
      <div class="timeline-esperienze">
        <article v-for="esp in esperienze" :key="t(esp.ruolo) + t(esp.periodo)" class="item-esperienza">
          <div class="linea-indicatore">
            <span class="nodo-tempo"></span>
          </div>
          <div class="contenuto-esperienza">
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
          </div>
        </article>
      </div>
    </section>

    <!-- Sezione Formazione & Istruzione -->
    <section class="sezione-blocco">
      <div class="sezione-testata">
        <div>
          <h2>{{ isItalian ? 'Istruzione & Formazione' : 'Education & Qualifications' }}</h2>
          <span class="sezione-sottotitolo">
            {{ isItalian ? 'Formazione accademica e scientifica' : 'Academic and scientific background' }}
          </span>
        </div>
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
  padding-bottom: 3rem;
}

.sezione-hero {
  padding: 4.5rem 0 3.5rem;
  max-width: 860px;
}

.badge-disponibile {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.35rem 0.85rem;
  background: var(--accento-sfondo);
  color: var(--accento);
  border: 1px solid var(--accento-bordo);
  border-radius: 6px;
  font-size: 0.82rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.dot {
  width: 7px;
  height: 7px;
  background-color: var(--accento-emerald);
  border-radius: 50%;
  box-shadow: 0 0 8px var(--accento-emerald);
}

.titolo-hero {
  font-size: 2.75rem;
  font-weight: 800;
  line-height: 1.18;
  letter-spacing: -0.028em;
  margin-bottom: 1.25rem;
  color: var(--testo-primario);
}

.sottotitolo-hero {
  font-size: 1.12rem;
  line-height: 1.7;
  color: var(--testo-secondario);
  margin-bottom: 2rem;
  max-width: 720px;
}

.azioni-hero {
  display: flex;
  gap: 0.85rem;
  margin-bottom: 3rem;
}

.pulsante-hero {
  padding: 0.75rem 1.45rem;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.94rem;
  text-decoration: none;
  transition: all 0.18s ease;
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

/* Telemetry Strip */
.telemetria-strip {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
  padding: 1.25rem;
  background: var(--bg-superficie);
  border: 1px solid var(--bordo-sottile);
  border-radius: 8px;
}

.telemetria-item {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.telemetria-valore {
  font-size: 1.1rem;
  font-weight: 750;
  color: var(--accento-testo);
  letter-spacing: -0.01em;
}

.telemetria-titolo {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--testo-primario);
}

.telemetria-desc {
  font-size: 0.78rem;
  color: var(--testo-terziario);
  line-height: 1.4;
}

/* Sezioni */
.sezione-blocco {
  margin-top: 4.5rem;
}

.sezione-testata {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.75rem;
}

.sezione-testata h2 {
  font-size: 1.55rem;
  font-weight: 750;
  color: var(--testo-primario);
  letter-spacing: -0.02em;
}

.sezione-sottotitolo {
  display: block;
  font-size: 0.88rem;
  color: var(--testo-terziario);
  margin-top: 0.25rem;
}

.link-tutti {
  color: var(--accento);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  padding-bottom: 2px;
  border-bottom: 1px solid transparent;
  transition: all 0.15s ease;
}

.link-tutti:hover {
  border-bottom-color: var(--accento);
}

/* Griglia Progetti */
.griglia-progetti {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.25rem;
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
  border-radius: 8px;
  padding: 1.4rem;
  box-shadow: var(--ombra-scheda);
}

.titolo-competenza {
  font-size: 0.98rem;
  font-weight: 700;
  color: var(--testo-primario);
  margin-bottom: 0.85rem;
  letter-spacing: -0.01em;
}

.lista-badge {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.badge-tech {
  font-size: 0.76rem;
  font-weight: 550;
  padding: 0.25rem 0.55rem;
  background: var(--bg-superficie-elevata);
  color: var(--testo-secondario);
  border: 1px solid var(--bordo-sottile);
  border-radius: 4px;
}

/* Timeline Esperienze */
.timeline-esperienze {
  display: flex;
  flex-direction: column;
}

.item-esperienza {
  display: flex;
  gap: 1.25rem;
}

.linea-indicatore {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 16px;
}

.nodo-tempo {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--accento);
  box-shadow: 0 0 0 3px var(--accento-sfondo);
  margin-top: 0.4rem;
  flex-shrink: 0;
}

.linea-indicatore::after {
  content: "";
  flex: 1;
  width: 2px;
  background: var(--bordo-sottile);
  margin-top: 0.35rem;
}

.item-esperienza:last-child .linea-indicatore::after {
  display: none;
}

.contenuto-esperienza {
  flex: 1;
  background: var(--bg-superficie);
  border: 1px solid var(--bordo-sottile);
  border-radius: 8px;
  padding: 1.35rem 1.5rem;
  margin-bottom: 1.25rem;
  box-shadow: var(--ombra-scheda);
}

.esp-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}

.esp-ruolo {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--testo-primario);
  letter-spacing: -0.01em;
}

.esp-azienda {
  display: flex;
  align-items: center;
  gap: 0.4rem;
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
  font-size: 0.78rem;
  font-weight: 600;
  padding: 0.2rem 0.6rem;
  background: var(--bg-superficie-elevata);
  color: var(--testo-secondario);
  border: 1px solid var(--bordo-sottile);
  border-radius: 4px;
  white-space: nowrap;
}

.esp-descrizione {
  font-size: 0.92rem;
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
  border-radius: 8px;
  padding: 1.4rem;
  box-shadow: var(--ombra-scheda);
}

.formazione-top {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 0.5rem;
  margin-bottom: 0.35rem;
}

.formazione-titolo {
  font-size: 1.02rem;
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
  font-size: 0.86rem;
  line-height: 1.55;
  color: var(--testo-terziario);
}

@media (max-width: 680px) {
  .titolo-hero {
    font-size: 2.05rem;
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
