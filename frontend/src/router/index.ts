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
      component: () => import('../components/DiaryHistory.vue'),
      props: { title: 'Your Diaries' },
    },
    {
      path: '/report',
      name: 'report',
      component: () => import('../components/DiaryReport.vue'),
    },
  ],
})

export default router
