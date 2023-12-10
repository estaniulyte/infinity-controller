import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from './components/Dashboard.vue'
import UnderDevelopmentMsg from './components/UnderDevelopmentMsg.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: Dashboard },
    { path: '/networks', name: 'Networks', component: UnderDevelopmentMsg },
    { path: '/devices', name: 'Devices', component: UnderDevelopmentMsg },
    { path: '/alerts', name: 'Alerts', component: UnderDevelopmentMsg },
    { path: '/firmwares', name: 'Firmwares', component: UnderDevelopmentMsg },
    { path: '/clients', name: 'Clients', component: UnderDevelopmentMsg },
    { path: '/maps', name: 'Maps', component: UnderDevelopmentMsg },
    { path: '/users', name: 'Users', component: UnderDevelopmentMsg },
    { path: '/billing', name: 'Billing', component: UnderDevelopmentMsg },
    {
      path: '/hotspot-profiles',
      name: 'Hotspot profiles',
      component: UnderDevelopmentMsg,
    },
    {
      path: '/guest-access',
      name: 'Guest Access',
      component: UnderDevelopmentMsg,
    },
    { path: '/about', name: 'About', component: UnderDevelopmentMsg },
  ],
})
