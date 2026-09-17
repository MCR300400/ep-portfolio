import { ref, computed } from 'vue'

const LINGUA_KEY = 'ep_lingua'

function ottieniLinguaIniziale() {
  if (typeof window === 'undefined') return 'it'
  try {
    const salvata = localStorage.getItem(LINGUA_KEY)
    if (salvata === 'it' || salvata === 'en') return salvata
    const browserLang = navigator.language || navigator.userLanguage || ''
    if (browserLang.startsWith('it')) return 'it'
    return 'it'
  } catch (e) {
    console.debug('Impossibile accedere a localStorage per la lingua:', e)
    return 'it'
  }
}

const lingua = ref(ottieniLinguaIniziale())

export function useLingua() {
  const isItalian = computed(() => lingua.value === 'it')
  const isEnglish = computed(() => lingua.value === 'en')

  function applicaLingua(nuovaLingua) {
    lingua.value = nuovaLingua
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('lang', nuovaLingua)
      try {
        localStorage.setItem(LINGUA_KEY, nuovaLingua)
      } catch (e) {
        console.warn('Impossibile salvare la lingua in localStorage:', e)
      }
    }
  }

  function toggleLingua() {
    applicaLingua(lingua.value === 'it' ? 'en' : 'it')
  }

  function t(valore) {
    if (!valore) return ''
    if (typeof valore === 'object') {
      return valore[lingua.value] || valore.it || ''
    }
    return dizionario[valore]?.[lingua.value] || valore
  }

  return {
    lingua,
    isItalian,
    isEnglish,
    setLingua: applicaLingua,
    toggleLingua,
    t
  }
}

export const dizionario = {
  // Navigazione
  'nav.home': { it: 'Home', en: 'Home' },
  'nav.progetti': { it: 'Progetti', en: 'Projects' },
  'nav.contatti': { it: 'Contatti', en: 'Contact' },
  'nav.privacy': { it: 'Privacy', en: 'Privacy' },

  // Contatore
  'contatore.singolare': { it: 'visitatore unico', en: 'unique visitor' },
  'contatore.plurale': { it: 'visitatori unici', en: 'unique visitors' },
  'contatore.tooltip': {
    it: 'Visitatori unici totali tracciati nel rispetto della privacy',
    en: 'Total unique visitors tracked with privacy-first analytics'
  },

  // Scheda Progetto
  'scheda.visita': { it: 'Visita →', en: 'Visit →' },
  'scheda.github': { it: 'GitHub', en: 'GitHub' }
}
