/*
 * @Author: Jackie
 * @Date: 2023-06-25 09:58:10
 * @LastEditTime: 2023-08-08 21:32:05
 * @LastEditors: Jackie
 * @Description: routers
 * @FilePath: /Wooden-Fish-Vue-Web/src/router/index.js
 * @version:
 */
import {
  createRouter,
  createWebHistory,
  createWebHashHistory
} from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'muyu',
    component: () => import('@/views/MuYu.vue')
  },
  {
    path: '/shaoxiang',
    name: 'shaoxiang',
    component: () => import('@/views/ShaoXiang.vue')
  },
  {
    path: '/qiuqian',
    name: 'qiuqian',
    component: () => import('@/views/QiuQian.vue')
  },
  { path: '/:pathMatch(.*)', component: () => import('@/views/MuYu.vue') }
];

const router = createRouter({
  // history: createWebHashHistory(process.env.BASE_URL),
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
