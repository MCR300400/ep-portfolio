<script setup>
import { RouterLink } from 'vue-router'
import Contatore from './Contatore.vue'
</script>

<template>
  <header class="header">
    <div class="contenitore header-interno">
      <RouterLink to="/" class="logo">
        <span class="logo-iniziali">EP</span>
        <span class="logo-nome">Edoardo Pippi</span>
      </RouterLink>

      <nav class="nav">
        <RouterLink to="/" class="nav-link">Home</RouterLink>
        <RouterLink to="/progetti" class="nav-link">Progetti</RouterLink>
        <RouterLink to="/contatti" class="nav-link">Contatti</RouterLink>
        <RouterLink to="/privacy" class="nav-link">Privacy</RouterLink>
      </nav>

      <div class="header-extra">
        <Contatore />
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  background: rgba(255, 255, 255, 0.85);
  border-bottom: 1px solid #e2e8f0;
  transition: all 0.2s ease;
}

@media (prefers-color-scheme: dark) {
  .header {
    background: rgba(15, 23, 42, 0.85);
    border-bottom: 1px solid #1e293b;
  }
}

.header-interno {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
  padding: 0 1.5rem;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  color: inherit;
  font-weight: 700;
  font-size: 1.1rem;
}

.logo-iniziali {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 8px;
  background: linear-gradient(135deg, #2563eb, #3b82f6);
  color: #fff;
  font-size: 0.85rem;
  font-weight: 800;
}

.nav {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.nav-link {
  text-decoration: none;
  font-size: 0.92rem;
  font-weight: 500;
  color: #64748b;
  transition: color 0.15s ease;
  position: relative;
  padding: 0.25rem 0;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: #2563eb;
}

.nav-link.router-link-active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: #2563eb;
  border-radius: 2px;
}

.header-extra {
  display: flex;
  align-items: center;
}

@media (max-width: 640px) {
  .logo-nome {
    display: none;
  }
  .nav {
    gap: 0.9rem;
  }
  .nav-link {
    font-size: 0.85rem;
  }
}
</style>
