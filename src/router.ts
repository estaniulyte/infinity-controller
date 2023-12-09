import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from './components/Dashboard.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: '/', name: 'Home', component: Dashboard }],
})
