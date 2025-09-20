import DiaryWriter from '@/views/DiaryWriter.vue'
import { createRouter, createWebHistory } from 'vue-router'
export const router = createRouter({
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
      component: () => import('../views/DiaryHistory.vue'),
    },
    {
      path: '/diary-analysis/:id',
      name: 'diary-analysis',
      component: () => import('../views/DiaryAnalysis.vue'),
    },
    {
      path: '/insights',
      name: 'insights',
      component: () => import('../views/DiaryInsights.vue'),
    },
  ],
})
