<template>
  <div class="pagina-contatti">
    <div class="testata-pagina">
      <h1>Contatti</h1>
      <p>Interessato a collaborare o a discutere di architetture cloud e serverless? Scrivimi pure.</p>
    </div>

    <div class="riquadro-contatti">
      <div class="canale-contatto">
        <span class="label">Email</span>
        <a href="mailto:edoardo.pippi@example.com" class="valore">edoardo.pippi@example.com</a>
      </div>
      <div class="canale-contatto">
        <span class="label">GitHub</span>
        <a href="https://github.com/edoardopippi" target="_blank" rel="noopener noreferrer" class="valore">github.com/edoardopippi</a>
      </div>
      <div class="canale-contatto">
        <span class="label">LinkedIn</span>
        <a href="https://linkedin.com/in/edoardopippi" target="_blank" rel="noopener noreferrer" class="valore">linkedin.com/in/edoardopippi</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pagina-contatti {
  padding: 2.5rem 0;
  max-width: 600px;
}

.testata-pagina h1 {
  font-size: 2.2rem;
  font-weight: 800;
  margin-bottom: 0.75rem;
}

.testata-pagina p {
  color: #64748b;
  font-size: 1.05rem;
  line-height: 1.5;
  margin-bottom: 2rem;
}

@media (prefers-color-scheme: dark) {
  .testata-pagina p {
    color: #94a3b8;
  }
}

.riquadro-contatti {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.75rem;
}

@media (prefers-color-scheme: dark) {
  .riquadro-contatti {
    background: #1e293b;
    border-color: #334155;
  }
}

.canale-contatto {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.label {
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #94a3b8;
}

.valore {
  font-size: 1.05rem;
  font-weight: 500;
  color: #2563eb;
  text-decoration: none;
}

.valore:hover {
  text-decoration: underline;
}
</style>
