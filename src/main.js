/*
 * @Author: Jackie
 * @Date: 2023-06-25 09:58:10
 * @LastEditTime: 2023-08-07 21:07:10
 * @LastEditors: Jackie
 * @Description: main
 * @FilePath: /Wooden-Fish-Vue-Web/src/main.js
 * @version:
 */
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
// import { createPinia } from 'pinia';
// const pinia = createPinia();
// 解决js文件使用报错问题
import pinia from '@/store/store';

// 为了解决setup语法下不支持 .$reset() 方法的问题
// pinia.use(({ store }) => {
//   const initialState = JSON.parse(JSON.stringify(store.$state));
//   store.$reset = () => {
//     store.$state = JSON.parse(JSON.stringify(initialState));
//   };
// });

// 数据持久化
// import piniaPluginPersist from 'pinia-plugin-persist';
// pinia.use(piniaPluginPersist);

// 公共样式
import '@/assets/styles/index.scss';
import '@/utils/AutoResize.js';

createApp(App).use(pinia).use(router).mount('#app');
