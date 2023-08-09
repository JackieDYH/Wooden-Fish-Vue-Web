<!--
 * @Author: Jackie
 * @Date: 2023-06-25 09:58:10
 * @LastEditTime: 2023-08-09 17:36:00
 * @LastEditors: Jackie
 * @Description: 木鱼
 * @FilePath: /Wooden-Fish-Vue-Web/src/views/MuYu.vue
 * @version: 
-->
<template>
  <div class="muyu">
    <div class="wrap">
      <img src="@/assets/images/my01.png" alt="muyu" class="my" />
      <img src="@/assets/images/my02.png" alt="muyugui" class="myg" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

onMounted(() => {});
</script>

<style lang="scss" scoped>
.muyu {
  .wrap {
    width: 600px;
    height: 500px;
    position: relative;
    transform: translate(0, -40px);
    .my {
      width: 400px;
      position: absolute;
      bottom: 75px;
      left: 100px;
    }
    .myg {
      height: 100px;
      position: absolute;
      left: 280px;
      top: 80px;
      transform: rotateZ(30deg);
      transition: transform 0.5s cubic-bezier(0.85, 0.1, 0.89, 0.65);
    }
  }
}
</style>
