import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
      name: 'Home',
      path: '/',
      component: () => import('../components/pages/Home.vue')
    },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
