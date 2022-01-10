import { createRouter, createWebHashHistory } from 'vue-router'
import Sneakers from '../views/Sneakers.vue'
import Tshirt from '../views/Tshirt.vue'
import Gloves from '../views/Gloves.vue'

const routes = [
  {
    path: '/',
    name: 'Sneakers',
    component: Sneakers
  },
  {
    path: '/tshirt',
    name: 'Tshirt',
    component: Tshirt
  },
  {
    path: '/gloves',
    name: 'Gloves',
    component: Gloves
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
