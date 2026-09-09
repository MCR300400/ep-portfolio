# ep-portfolio (Cloudflare Pages + Vue 3)

Sito web portfolio personale di Edoardo Pippi, realizzato in Vue 3 e Vite, progettato per il deploy ad alte prestazioni e a costo zero su Cloudflare Pages.

## Caratteristiche
- **Vue 3 + Vue Router 4** in modalità history con `public/_redirects` per il routing client-side senza 404 al refresh.
- **Header di sicurezza statici** via `public/_headers` (nessun consumo di invocazioni Worker o Functions).
- **Modulo Analytics nativo client-side** (`src/analytics.js`): tracciamento visualizzazioni per cambio rotta e calcolo del tempo di permanenza via evento `visibilitychange`.
- **Privacy & Zero Cookie**: Nessun banner cookie necessario, rispetto totale del GDPR.

## Installazione e Avvio
```bash
# Installa le dipendenze
npm install

# Copia le variabili d'ambiente
cp .env.example .env.local

# Avvia il server di sviluppo
npm run dev

# Build di produzione per Cloudflare Pages
npm run build
```

## Deploy su Cloudflare Pages
- **Framework preset**: `Vite`
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Environment variables**:
  - `VITE_API_URL`: `https://analytics.edoardopippi.dev`
  - `VITE_CHIAVE_SITO`: `ep_portfolio_3450331ce975`
