<!--
 * @Author: Jackie
 * @Date: 2023-06-25 09:58:10
 * @LastEditTime: 2023-08-08 11:33:01
 * @LastEditors: Jackie
 * @Description: file content
 * @FilePath: /Wooden-Fish-Vue-Web/src/views/HomeView.vue
 * @version: 
-->
<template>
  <div class="home">
    <h1 class="title">This is an home page</h1>
    <p>{{ windowHeight }}-{{ windowWidth }}-{{ loading }}--{{ sizeRatio }}</p>
    <p>{{ name }}-{{ age }}-{{ num }}</p>
    <button @click="setLoading">点击</button>
    <button @click="reset">重置</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useAppStore } from '@/store/app';
import { useUserStore } from '@/store/user';
const appStore = useAppStore();
const userStore = useUserStore();
const { sizeRatio, windowWidth, windowHeight, loading } = storeToRefs(appStore);
const { name, age, num } = storeToRefs(userStore);

const isLoading = ref(false);
// 设置 loading
const setLoading = () => {
  appStore.isLoading(isLoading.value);
  appStore.$patch({ windowWidth: 100, windowHeight: 200 });
  // userStore.addNum(1);
  userStore.$patch({ name: 'dyh', age: 1000 });
  isLoading.value = !isLoading.value;
};

const reset = () => {
  appStore.$reset();
  userStore.$reset();
};

onMounted(() => {
  console.log('home', appStore);
});
</script>

<style lang="scss" scoped>
.home {
  .title {
    font-size: 18px;
  }
}
</style>
