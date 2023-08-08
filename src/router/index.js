/*
 * @Author: Jackie
 * @Date: 2023-06-25 09:58:10
 * @LastEditTime: 2023-08-08 15:37:49
 * @LastEditors: Jackie
 * @Description: file content
 * @FilePath: /Wooden-Fish-Vue-Web/src/router/index.js
 * @version:
 */
import {
  createRouter,
  createWebHistory,
  createWebHashHistory
} from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
];

const router = createRouter({
  // history: createWebHashHistory(process.env.BASE_URL),
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
