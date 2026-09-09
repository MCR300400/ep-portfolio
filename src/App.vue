<script setup>
import { RouterView, RouterLink } from 'vue-router'
import Intestazione from './components/Intestazione.vue'
</script>

<template>
  <div class="layout-app">
    <Intestazione />

    <main class="contenitore corpo-principale">
      <RouterView />
    </main>

    <footer class="footer">
      <div class="contenitore footer-interno">
        <p class="copyright">
          &copy; {{ new Date().getFullYear() }} Edoardo Pippi. Realizzato con Vue 3 & Cloudflare.
        </p>
        <div class="link-footer">
          <RouterLink to="/privacy">Privacy & Cookie</RouterLink>
          <a href="https://github.com/edoardopippi" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
/* Reset & stili globali */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  background-color: #f8fafc;
  color: #0f172a;
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
}

@media (prefers-color-scheme: dark) {
  body {
    background-color: #0f172a;
    color: #f8fafc;
  }
}

.contenitore {
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.layout-app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.corpo-principale {
  flex: 1;
}

.footer {
  border-top: 1px solid #e2e8f0;
  padding: 2rem 0;
  margin-top: 4rem;
  font-size: 0.88rem;
  color: #64748b;
}

@media (prefers-color-scheme: dark) {
  .footer {
    border-top-color: #1e293b;
    color: #94a3b8;
  }
}

.footer-interno {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.link-footer {
  display: flex;
  gap: 1.25rem;
}

.link-footer a {
  color: inherit;
  text-decoration: none;
  transition: color 0.15s ease;
}

.link-footer a:hover {
  color: #2563eb;
}
</style>
