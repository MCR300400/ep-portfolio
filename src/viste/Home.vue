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
    <!-- Prima schermata a tutta altezza (100vh) con sfondo arancione e nome gigante -->
    <section class="hero-arancione-fullscreen">
      <div class="contenitore hero-fullscreen-interno">
        <div class="hero-top-meta">
          <span class="meta-label">
            {{ isItalian ? 'Portfolio & Ingegneria Software' : 'Software Engineering Portfolio' }}
          </span>
          <span class="meta-sede">Perugia, Italia</span>
        </div>

        <div class="hero-titolo-blocco">
          <h1 class="nome-gigante">
            <span class="nome-riga">Edoardo</span>
            <span class="nome-riga">Pippi</span>
          </h1>
          <p class="hero-qualifica">
            {{ isItalian
              ? 'Full-Stack Software Developer • Java, Spring Boot, Vue.js & Cloudflare'
              : 'Full-Stack Software Developer • Java, Spring Boot, Vue.js & Cloudflare'
            }}
          </p>
        </div>

        <div class="hero-bottom-bar">
          <a href="#contenuto" class="indicatore-scroll">
            <span>{{ isItalian ? 'Scorri per scoprire' : 'Scroll down' }}</span>
            <svg
              class="icona-freccia-giu"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M12 5v14"></path>
              <path d="m19 12-7 7-7-7"></path>
            </svg>
          </a>

          <div class="hero-link-rapidi">
            <RouterLink to="/progetti" class="link-hero-pill">
              {{ isItalian ? 'Progetti' : 'Projects' }}
            </RouterLink>
            <RouterLink to="/contatti" class="link-hero-pill">
              {{ isItalian ? 'Contatti' : 'Contact' }}
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Contenuto principale sotto la prima 100vh -->
    <div id="contenuto" class="contenitore contenuto-sotto-hero">
      
      <!-- Bio introduttiva -->
      <section class="sezione-bio">
        <p class="bio-testo" v-if="isItalian">
          Sviluppatore con oltre 2 anni di esperienza professionale nella realizzazione di soluzioni software end-to-end. Specializzato in <strong>Java</strong>, <strong>Spring Boot</strong>, <strong>Vue.js 3</strong> e architetture edge su <strong>Cloudflare</strong>. Lavoro presso <strong>Park It</strong> e frequento il corso di Laurea in Informatica presso l’<strong>Università degli Studi di Perugia</strong>.
        </p>
        <p class="bio-testo" v-else>
          Software developer with over 2 years of professional experience building end-to-end software solutions. Specialized in <strong>Java</strong>, <strong>Spring Boot</strong>, <strong>Vue.js 3</strong>, and <strong>Cloudflare</strong> edge architectures. Currently working at <strong>Park It</strong> and studying Computer Science at the <strong>University of Perugia</strong>.
        </p>
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
  </div>
</template>

<style scoped>
.pagina-home {
  padding-bottom: 5rem;
}

/* ==========================================================================
   PRIMA 100VH: Sfondo colore principale Arancione con Nome e Cognome gigante
   ========================================================================== */
.hero-arancione-fullscreen {
  width: 100%;
  min-height: calc(100dvh - 4.25rem);
  background-color: var(--accento);
  color: #ffffff;
  display: flex;
  align-items: stretch;
  position: relative;
  box-sizing: border-box;
}

.hero-fullscreen-interno {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
}

.hero-top-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: rgba(255, 255, 255, 0.88);
}

.meta-label,
.meta-sede {
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
}

.hero-titolo-blocco {
  margin: auto 0;
  padding: 1.5rem 0;
}

/* Nome gigante responsive su mobile, tablet e desktop */
.nome-gigante {
  font-size: clamp(3.8rem, 13.5vw, 9.8rem);
  font-weight: 900;
  line-height: 0.88;
  letter-spacing: -0.045em;
  color: #ffffff;
  margin-bottom: 1.5rem;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
}

.nome-riga {
  display: block;
}

.hero-qualifica {
  font-size: clamp(1.1rem, 2.3vw, 1.65rem);
  font-weight: 600;
  color: #ffffff;
  line-height: 1.35;
  letter-spacing: -0.015em;
  max-width: 48ch;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
}

.hero-bottom-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.25rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.25);
}

.indicatore-scroll {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
  font-weight: 650;
  color: #ffffff;
  text-decoration: none;
  transition: opacity 0.15s ease;
}

.indicatore-scroll:hover {
  opacity: 0.85;
}

.hero-link-rapidi {
  display: flex;
  gap: 0.75rem;
}

.link-hero-pill {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--accento);
  background: #ffffff;
  padding: 0.5rem 1.15rem;
  border-radius: 9999px;
  text-decoration: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);
  transition: background-color 0.15s ease, color 0.15s ease;
}

.link-hero-pill:hover {
  background: #fff3eb;
}

/* ==========================================================================
   Contenuto sotto la prima 100vh
   ========================================================================== */
.contenuto-sotto-hero {
  padding-top: 4rem;
}

.sezione-bio {
  padding-bottom: 3.5rem;
  border-bottom: 1px solid var(--bordo-sottile);
}

.bio-testo {
  font-size: 1.25rem;
  line-height: 1.75;
  color: var(--testo-secondario);
  max-width: 65ch;
}

.bio-testo strong {
  color: var(--testo-primario);
  font-weight: 650;
}

/* Sezioni a blocchi aperti (ZERO card, ZERO hover physics) */
.sezione-blocco {
  margin-top: 4.5rem;
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
  .hero-arancione-fullscreen {
    min-height: calc(100dvh - 3.75rem);
  }
  .hero-fullscreen-interno {
    padding-top: 1.75rem;
    padding-bottom: 1.75rem;
  }
  .nome-gigante {
    font-size: clamp(3.2rem, 14vw, 5.5rem);
    line-height: 0.92;
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
  .sezione-blocco {
    margin-top: 3.5rem;
  }
  .sezione-testata h2 {
    font-size: 1.5rem;
  }
  .contenuto-sotto-hero {
    padding-top: 2.5rem;
  }
}
</style>
