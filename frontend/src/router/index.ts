import DiaryLobby from '@/components/DiaryLobby.vue'
import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: DiaryLobby,
    },
    {
      path: '/history',
      name: 'history',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/DiaryHistory.vue'),
    },
    {
      path: '/report',
      name: 'report',
      component: () => import('../components/DiaryReport.vue'),
    },
  ],
})

export default router
