import DiaryWriter from '@/components/DiaryWriter.vue'
import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: DiaryWriter,
    },
    {
      path: '/history',
      name: 'history',
      component: () => import('../components/DiaryHistory.vue'),
    },
    {
      path: '/diary-analysis/:id',
      name: 'diary-analysis',
      component: () => import('../components/DiaryAnalysis.vue'),
    },
  ],
})

export default router
