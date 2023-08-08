/*
 * @Author: Jackie
 * @Date: 2023-08-08 11:37:29
 * @LastEditTime: 2023-08-08 11:53:38
 * @LastEditors: Jackie
 * @Description: pinia app data
 * @FilePath: /Wooden-Fish-Vue-Web/src/hooks/useAppData.js
 * @version:
 */
import { ref } from 'vue';
import { useAppStore } from '@/store/app.js';
export const useAppData = () => {
  const appStore = useAppStore();
  return { appStore };
};
