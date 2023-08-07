/*
 * @Author: Jackie
 * @Date: 2023-07-24 16:34:03
 * @LastEditTime: 2023-08-07 17:54:01
 * @LastEditors: Jackie
 * @Description: user pinia
 * @FilePath: /Wooden-Fish-Vue-Web/src/store/user.js
 * @version:
 */
import { defineStore, storeToRefs } from 'pinia';
import { toRefs, ref, reactive, computed } from 'vue';

export const useUserStore = defineStore(
  'user',
  () => {
    

    return {
    };
  },
  {
    persist: {
      enabled: true, // 开启缓存  默认会存储在本地localstorage
      storage: sessionStorage, // 缓存使用方式
      paths: [] // 需要缓存键
    }
  }
);
