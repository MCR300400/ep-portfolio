import { ref } from 'vue'

const TEMA_KEY = 'ep_tema'

function ottieniTemaIniziale() {
  if (typeof window === 'undefined') return 'dark'
  try {
    const salvato = localStorage.getItem(TEMA_KEY)
    if (salvato === 'light' || salvato === 'dark') {
      return salvato
    }
  } catch (e) {
    console.debug('Impossibile accedere a localStorage:', e)
  }
  // Default richiesto: Dark
  return 'dark'
}

const tema = ref(ottieniTemaIniziale())

export function aggiornaMetaThemeColor(temaCorrente = tema.value) {
  if (typeof document === 'undefined') return
  const isHero = document.documentElement.classList.contains('su-hero-arancione')
  let colore
  if (isHero) {
    colore = temaCorrente === 'light' ? '#ea580c' : '#f97316'
  } else {
    colore = temaCorrente === 'light' ? '#fbfaf8' : '#121316'
  }
  const metaTheme = document.getElementById('theme-color-meta') || document.querySelector('meta[name="theme-color"]')
  if (metaTheme) {
    metaTheme.setAttribute('content', colore)
  }
}

export function useTema() {
  function applicaTema(nuovoTema) {
    tema.value = nuovoTema
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', nuovoTema)
      aggiornaMetaThemeColor(nuovoTema)
      try {
        localStorage.setItem(TEMA_KEY, nuovoTema)
      } catch (e) {
        console.warn('Impossibile salvare il tema in localStorage:', e)
      }
    }
  }

  function toggleTema() {
    applicaTema(tema.value === 'dark' ? 'light' : 'dark')
  }

  return {
    tema,
    toggleTema,
    applicaTema,
    aggiornaMetaThemeColor
  }
}
