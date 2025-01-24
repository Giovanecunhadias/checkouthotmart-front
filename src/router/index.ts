import { createRouter, createWebHistory } from 'vue-router'
import PixView from '@/views/PixView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'pix',
      component: PixView
    },
    {
      path: '/form',
      name: 'form',
      component: import (/* webpackChunkName: "form" */ '@/views/FormView.vue'),
    },
    {
      path: '/yampi',
      name: 'yampi',
      component: import (/* webpackChunkName: "yampi" */ '@/views/YampiView.vue'),
    }
  ]
})

export default router
