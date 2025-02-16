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
    },
    {
      path: '/adoreii',
      name: 'adoreii',
      component: import (/* webpackChunkName: "adoreii" */ '@/views/AdoreiiView.vue'),
    },
    {
      path:'/detalhesdopedido',
      name:'detalhesdopedido',
      component: import (/* webpackChunkName: "detalhesdopedido" */ '@/views/DetalhesDoPedidoView.vue'),
    },
    {
      path: '/polihousi',
      name: 'polihousi',
      component: import (/* webpackChunkName: "polihousi" */ '@/views/PolihousiView.vue'),
    },
    {
      path: '/vega',
      name: 'vega',
      component: import (/* webpackChunkName: "vega" */ '@/views/VegaView.vue'),
    },
    {
      path: '/cartx',
      name: 'cartx',
      component: import (/* webpackChunkName: "cartx" */ '@/views/CartxView.vue'),

    },
    {
      path: '/pedido',
      name: 'pedido',
      component: import (/* webpackChunkName: "pedido" */ '@/views/PedidoView.vue'),
    }



  ]
})

export default router
