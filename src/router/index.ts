import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/users/TheLogin.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/users/TheLogin.vue')
    }
  ]
})

export default router
