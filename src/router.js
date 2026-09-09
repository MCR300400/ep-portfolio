import { createRouter, createWebHistory } from 'vue-router'
import Home from './viste/Home.vue'
import Progetti from './viste/Progetti.vue'
import Contatti from './viste/Contatti.vue'
import Privacy from './viste/Privacy.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/progetti', name: 'Progetti', component: Progetti },
  { path: '/contatti', name: 'Contatti', component: Contatti },
  { path: '/privacy', name: 'Privacy', component: Privacy }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
