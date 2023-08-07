/*
 * @Author: Jackie
 * @Date: 2023-08-07 18:27:58
 * @LastEditTime: 2023-08-07 20:50:26
 * @LastEditors: Jackie
 * @Description: app
 * @FilePath: /Wooden-Fish-Vue-Web/src/store/app.js
 * @version:
 */
import { defineStore, storeToRefs } from 'pinia';

export const useAppStore = defineStore('app', {
  // 状态
  state: () => ({
    sizeRatio: 0,
    windowWidth: 0, //document.documentElement.clientWidth,
    windowHeight: 0, //document.documentElement.clientHeight,
    loading: false,
    toastMessage: ''
  }),
  getters: {
    getSizeRatio: (state) => state.sizeRatio,
    getWindowWH: (state) => {
      return { w: state.windowWidth, h: state.windowHeight };
    }
  },
  actions: {
    isLoading(val) {
      this.loading = val;
    },
    showLoading() {
      this.loading = true;
    },
    hideLoading() {
      this.loading = false;
    },
    setSizeRatio(val) {
      this.sizeRatio = val;
    },
    setWindowWidth(val) {
      this.windowWidth = val;
    },
    setWindowHeight(val) {
      console.log(val, 123);
      this.windowHeight = val;
    }
  },
  persist: {
    enabled: true, // 开启缓存  默认会存储在本地localstorage
    storage: sessionStorage, // 缓存使用方式
    paths: [] // 需要缓存键
    // strategies: [ //自定义key和存储方式
    //   {
    //     key: 'indexStore',
    //     storage: localStorage //可以选择对应的存储形式（localStorage或者sessionStroage）
    //   }
    // ]
  }
});
