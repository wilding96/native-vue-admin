import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'
import permissionRouter from './modules/permission'

export const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/index.vue'),
        meta: { title: '首页' },
      },
    ],
  },
  {
    path: '/login',
    name: 'Home',
    meta: {
      title: '登录',
      keepAlive: true,
      requireAuth: true,
    },
    component: () => import('@/views/login.vue'),
  },
  {
    path: '/use',
    name: 'Use',
    meta: {
      title: 'use',
      keepAlive: true,
      requireAuth: true,
    },
    component: () => import('@/views/vueUse.vue'),
  },
  {
    path: '/homeBoard',
    name: 'homeBoard',
    meta: {
      title: 'use',
      keepAlive: true,
      requireAuth: true,
    },
    component: () => import('@/views/homeBoard.vue'),
  },
  {
    path: '/:pathMatch(.*)',
    name: 'NotFound',
    component: () => import('@/views/error/404.vue'),
    meta: { title: '找不到页面' },
  },
]
// 异步组件
export const asyncRoutes = [permissionRouter]

const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes,
})
export default router
