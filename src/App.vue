<!--
 * @Author: Jackie
 * @Date: 2023-06-25 09:58:10
 * @LastEditTime: 2023-08-09 10:39:30
 * @LastEditors: Jackie
 * @Description: app
 * @FilePath: /Wooden-Fish-Vue-Web/src/App.vue
 * @version: 
-->
<template>
  <router-view />
  <NavBar />
</template>
<script setup>
import NavBar from '@/components/NavBar.vue';
</script>
<style lang="scss">
#app {
  width: 60%;
  height: 100vh;
  margin: 0 auto;
  position: relative;
}
</style>
