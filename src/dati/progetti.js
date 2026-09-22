export const listaProgetti = [
  {
    id: 'leetcodedone',
    inEvidenza: true,
    titolo: {
      it: 'LeetCodeDone — Archivio Soluzioni & Algoritmi',
      en: 'LeetCodeDone — LeetCode Solutions & Algorithm Archive'
    },
    descrizione: {
      it: 'Piattaforma web interattiva ad alte prestazioni per esplorare, cercare e consultare oltre 70 sfide LeetCode risolte in Python, Java e SQL. Ricerca full-text istantanea per numero e topic, categorizzazione per difficoltà (Easy, Medium, Hard), visualizzatore di codice con syntax highlighting e supporto a soluzioni multiple con confronto TLE.',
      en: 'High-performance interactive web platform to explore, filter, and inspect over 70 solved LeetCode challenges in Python, Java, and SQL. Instant full-text search by number and topic, difficulty classification (Easy, Medium, Hard), syntax-highlighted code viewer, and multi-approach TLE comparison.'
    },
    tag: ['Cloudflare Pages', 'Vue 3', 'TypeScript', 'Tailwind CSS', 'Algorithms', 'LeetCode'],
    linkGitHub: 'https://github.com/MCR300400/LeetCodeDone',
    linkLive: 'https://leetcodedone.pages.dev'
  },
  {
    id: 'ep-vetrine',
    inEvidenza: true,
    titolo: {
      it: 'ep-vetrine — Studio & Totem Builder per Vetrine Digitali',
      en: 'ep-vetrine — Digital Storefront & Totem Showcase Studio'
    },
    descrizione: {
      it: 'Applicazione web modulare per comporre, personalizzare e visualizzare in tempo reale vetrine digitali, locandine e totem da esposizione per boutique e negozi. Zero logiche di sconto/prezzo e massimo focus su brand identity, nuovi arrivi, capsule collection e narrazione materica. Include anteprima multi-formato (16:9, 9:16, 4:5), modalità Kiosk a schermo intero, generatore QR code client-side ed export PDF/JSON.',
      en: 'Modular web application to compose, customize, and preview in real time digital storefronts, posters, and display totems for boutiques and retail shops. Zero discount or pricing mechanics, placing exclusive focus on brand identity, new arrivals, seasonal capsules, and tactile storytelling. Features multi-format preview (16:9, 9:16, 4:5), fullscreen Kiosk mode, client-side QR generation, and PDF/JSON export.'
    },
    tag: ['Cloudflare Pages', 'Vue 3', 'TypeScript', 'Tailwind CSS', 'Kiosk Mode', 'Client-side QR'],
    linkGitHub: 'https://github.com/MCR300400/ep-vetrine',
    linkLive: 'https://ep-vetrine.pages.dev'
  },
  {
    id: 'ep-board',
    inEvidenza: true,
    titolo: {
      it: 'ep-board — Lavagna Collaborativa Real-Time',
      en: 'ep-board — Real-Time Collaborative Whiteboard'
    },
    descrizione: {
      it: 'Lavagna infinita collaborativa a 60 FPS per architetture software, diagrammi di sistema, flussi logici e brainstorming. Cursori multiplayer live, gesture multi-touch (pinch-to-zoom e two-finger pan), strumenti vettoriali completi con levigatura del tratto SVG, note adesive, esportazione Retina PNG/SVG e sincronizzazione stateful su Cloudflare Workers & SQLite Durable Objects.',
      en: 'Infinite collaborative whiteboard at 60 FPS for software architecture, system diagrams, logic flows, and brainstorming. Live multiplayer cursors, multi-touch gestures (pinch-to-zoom and two-finger pan), vector drawing tools with smooth SVG paths, sticky notes, Retina PNG/SVG export, and stateful synchronization on Cloudflare Workers & SQLite Durable Objects.'
    },
    tag: ['Cloudflare Pages', 'Durable Objects', 'SQLite', 'WebSockets', 'Vue 3', 'Canvas 2D'],
    linkGitHub: 'https://github.com/MCR300400/ep-board',
    linkLive: 'https://ep-board.pages.dev'
  },
  {
    id: 'ep-drop',
    inEvidenza: true,
    titolo: {
      it: 'ep-drop — Trasferimento P2P & Condivisione File',
      en: 'ep-drop — P2P File & Clipboard Transfer'
    },
    descrizione: {
      it: 'Piattaforma temporanea per il trasferimento crittografato e ad alta velocità di file e appunti testuali tra smartphone, tablet e computer direttamente nel browser. Zero archiviazione su server esterni, stanze usa-e-getta protette con generazione QR code e segnalazione WebSockets a bassissima latenza orchestrata da Cloudflare Workers.',
      en: 'Instant, encrypted high-speed file and clipboard sharing between phones, tablets, and desktops directly in the browser. Zero server-side storage, disposable rooms protected with QR codes, and ultra-low latency WebSocket signaling orchestrated by Cloudflare Workers.'
    },
    tag: ['Cloudflare Pages', 'WebRTC DataChannel', 'WebSockets', 'Durable Objects', 'Vue 3', 'P2P Transfer'],
    linkGitHub: 'https://github.com/MCR300400/ep-drop',
    linkLive: 'https://ep-drop.pages.dev'
  },
  {
    id: 'ep-router',
    inEvidenza: true,
    titolo: {
      it: 'ep-router — Simulatore & Game di Routing di Rete',
      en: 'ep-router — Edge Network Routing Simulator & Game'
    },
    descrizione: {
      it: 'Puzzle game strategico e simulatore a 60 FPS incentrato sull\'ingegneria del traffico di rete e architetture edge. Instradamento pacchetti tra PoP globali (Milano, Londra, Tokyo, Francoforte, Virginia), gestione buffer bloat server, edge caching KV e mitigazione attacchi DDoS SYN Flood con regole Cloudflare WAF. Include sintetizzatore procedurale basato su Web Audio API.',
      en: 'Strategic puzzle game and 60 FPS network simulator focused on traffic engineering and edge architectures. Packet routing across global PoPs (Milan, London, Tokyo, Frankfurt, Virginia), buffer bloat management, KV edge caching, and DDoS SYN Flood attack mitigation with Cloudflare WAF. Includes a procedural synthesizer powered by Web Audio API.'
    },
    tag: ['Cloudflare Pages', 'Canvas 2D', 'Web Audio API', 'Vue 3', 'Traffic Engineering', 'Game Engine'],
    linkGitHub: 'https://github.com/MCR300400/ep-router',
    linkLive: 'https://ep-router.pages.dev'
  },
  {
    id: 'ep-algorithms',
    inEvidenza: true,
    titolo: {
      it: 'ep-algorithms — Piattaforma di Selezione Algoritmica',
      en: 'ep-algorithms — Algorithm Selector & Interactive Simulator'
    },
    descrizione: {
      it: 'Piattaforma interattiva di selezione, analisi computazionale e simulazione passo-passo degli algoritmi informatici fondamentali. Include un wizard decisionale a risposta multipla per identificare l\'algoritmo ottimale in base ai vincoli, simulatore grafico live a 60 FPS e codice sorgente verificato in 6 linguaggi (Python, Java, TypeScript, JavaScript, C, C#).',
      en: 'Interactive platform for exploration, computational analysis, and step-by-step visual simulation of fundamental computer science algorithms. Features a decision wizard to determine optimal algorithms based on constraints, a live 60 FPS graphical simulator, and verified code implementations in 6 programming languages.'
    },
    tag: ['Cloudflare Pages', 'Vue 3', 'Vite', 'Algorithms', 'Interactive Simulator'],
    linkGitHub: 'https://github.com/MCR300400/ep-algorithms',
    linkLive: 'https://ep-algorithms.pages.dev'
  },
  {
    id: 'ep-dashboard',
    inEvidenza: true,
    titolo: {
      it: 'ep-dashboard — Monitoraggio & Analytics Zero Trust',
      en: 'ep-dashboard — Zero Trust Multi-Site Analytics Dashboard'
    },
    descrizione: {
      it: 'Pannello analytics multi-sito privato servito su Cloudflare Pages e protetto da Cloudflare Access (Zero Trust). Monitoraggio trend in tempo reale con sparkline SVG native calcolate a mano senza librerie esterne pesanti, auto-refresh temporizzato a 60s con countdown e raggruppamento dati ad altissima efficienza.',
      en: 'Private multi-site analytics dashboard hosted on Cloudflare Pages and protected by Cloudflare Access (Zero Trust). Real-time traffic trend monitoring with hand-crafted native SVG sparklines, automatic 60s timed refresh with visual countdown, and high-efficiency metric aggregation.'
    },
    tag: ['Cloudflare Pages', 'Cloudflare Access', 'Zero Trust', 'Vue 3', 'SVG Sparklines'],
    linkGitHub: 'https://github.com/MCR300400/ep-dashboard',
    linkLive: 'https://ep-dashboard.pages.dev'
  },
  {
    id: 'ep-portfolio',
    inEvidenza: false,
    titolo: {
      it: 'ep-portfolio — Portfolio Personale su Cloudflare Pages',
      en: 'ep-portfolio — Personal Developer Portfolio on Cloudflare Pages'
    },
    descrizione: {
      it: 'Sito portfolio personale sviluppato in Vue 3 e Vite, servito a bassissima latenza sulla rete edge globale di Cloudflare Pages. Telemetria privacy-first integrata con ep-analytics, navigazione fluida SPA in history mode, design system grafite minerale/arancio artigianale dark/light e zero cookie.',
      en: 'Personal developer portfolio built with Vue 3 and Vite, deployed globally with ultra-low latency on Cloudflare Pages. Built-in privacy-first telemetry with ep-analytics, smooth SPA routing, artisan graphite/orange light & dark design system, and zero cookies.'
    },
    tag: ['Cloudflare Pages', 'Vue 3', 'Vite', 'Vue Router', 'Responsive Design'],
    linkGitHub: 'https://github.com/MCR300400/ep-portfolio',
    linkLive: 'https://ep-portfolio.pages.dev'
  },
  {
    id: 'gdalessio-portfolio',
    inEvidenza: false,
    titolo: {
      it: 'Gaia D\'Alessio — Editorial Academic Portfolio',
      en: 'Gaia D\'Alessio — Editorial Academic Portfolio'
    },
    descrizione: {
      it: 'Sito web portfolio accademico e professionale curato con direzione artistica editoriale, 100% responsive e ospitato su Cloudflare Pages. Tipografia classica con Cormorant Garamond, palette sobria carta/fumo antracite, standard di certificazione linguistica QCER e sezioni strutturate per pubblicazioni e percorsi accademici.',
      en: 'Curated academic and professional portfolio with bespoke editorial art direction, 100% responsive and hosted on Cloudflare Pages. Classic typography with Cormorant Garamond, muted paper & warm charcoal palette, and structured sections for academic research and publications.'
    },
    tag: ['Cloudflare Pages', 'Vue 3', 'Tailwind CSS', 'Editorial Design', 'Responsive'],
    linkGitHub: 'https://github.com/MCR300400/gdalessio-portfolio',
    linkLive: 'https://gdalessio-portfolio.pages.dev'
  },
  {
    id: 'tiktok-stories',
    inEvidenza: false,
    titolo: {
      it: 'TikTok Stories Video Automation Pipeline',
      en: 'TikTok Stories Video Automation Pipeline'
    },
    descrizione: {
      it: 'Pipeline autonoma in Python basata su pattern Produttore-Consumatore per la generazione e pubblicazione programmata di video verticali su TikTok. Ricezione storie via bot Telegram, elaborazione LLM con Groq Cloud, sintesi vocale neurale Edge-TTS, sottotitoli animati ASS e montaggio FFmpeg.',
      en: 'Autonomous Python pipeline based on a Producer-Consumer pattern for scheduled vertical video generation and publishing on TikTok. Story ingestion via Telegram Bot, LLM processing with Groq Cloud, neural voice synthesis via Edge-TTS, animated ASS subtitles, and FFmpeg video assembly.'
    },
    tag: ['Python', 'Telegram Bot', 'Groq Llama 3', 'FFmpeg', 'Edge-TTS', 'APScheduler'],
    linkGitHub: 'https://github.com/MCR300400/tiktok-stories-automation',
    linkLive: ''
  },
  {
    id: 'iot-parking',
    inEvidenza: false,
    titolo: {
      it: 'IoT Parking Management per Operatori',
      en: 'IoT Parking Management for Operators'
    },
    descrizione: {
      it: 'Architettura per il monitoraggio e la gestione intelligente dei parcheggi per operatori del settore, basata su sensori IoT e integrazione API RESTful. Progetto di tesi sperimentale di laurea in Informatica in partnership con Park It.',
      en: 'Architecture for smart parking monitoring and management for parking facility operators, based on IoT sensors and RESTful API integration. Experimental Computer Science degree thesis in partnership with Park It.'
    },
    tag: ['IoT', 'Java', 'Spring Boot', 'RESTful API', 'Smart Mobility', 'Oracle SQL'],
    linkGitHub: '',
    linkLive: ''
  }
]
