import DiaryInput from '@/components/DiaryInput.vue'
import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: DiaryInput,
    },
    {
      path: '/history',
      name: 'history',
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
