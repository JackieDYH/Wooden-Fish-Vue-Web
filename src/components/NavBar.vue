<!--
 * @Author: Jackie
 * @Date: 2023-08-07 18:21:45
 * @LastEditTime: 2023-08-08 21:49:29
 * @LastEditors: Jackie
 * @Description: 导航
 * @FilePath: /Wooden-Fish-Vue-Web/src/components/NavBar.vue
 * @version: 
-->
<template>
  <div class="navbar">
    <img src="@/assets/images/muyu.png" class="but" @click="goPath('/')" />
    <img
      src="@/assets/images/shaoxiang.png"
      class="but"
      @click="goPath('/shaoxiang')"
    />
    <img
      src="@/assets/images/qiuqian.png"
      class="but"
      @click="goPath('/qiuqian')"
    />
    <img src="@/assets/images/yinyue.png" class="but" @click="music" />
  </div>
</template>

<script setup>
import { onMounted, reactive } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const goPath = (path) => {
  router.push(path);
};
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  /*水平垂直居中*/
  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translate(-50%, 0);
  .but {
    width: 50px;
    height: 120px;
    margin: 0 30px;
    cursor: pointer;
    &:hover {
      width: 60px;
      height: 120px;
      margin: 0 25px;
    }
    &:active {
      width: 50px;
      height: 120px;
      margin: 0 30px;
    }
  }
}
</style>
