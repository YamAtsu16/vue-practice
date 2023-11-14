import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import PersonBase from '../components/PersonBase.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'PersonBase',
    component: PersonBase
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
