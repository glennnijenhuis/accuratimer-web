import { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('./pages/index.vue'),
  },
  {
    path: '/privacy',
    component: () => import('./pages/privacy.vue'),
  },
  {
    path: '/support',
    component: () => import('./pages/support.vue'),
  },
  {
    path: '/terms',
    component: () => import('./pages/terms.vue'),
  },
]
