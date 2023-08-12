<!--
 * @Author: Jackie
 * @Date: 2023-08-08 21:32:44
 * @LastEditTime: 2023-08-12 17:31:29
 * @LastEditors: Jackie
 * @Description: 求签
 * @FilePath: /Wooden-Fish-Vue-Web/src/views/QiuQian.vue
 * @version: 
-->
<template>
  <div class="qiuqian">
    <div v-if="data.showtc" class="tc">
      <div class="title">{{ data.qnow['title'] }}</div>
      <div class="content">{{ data.qnow['content'].substr(0, 16) }}</div>
      <div class="content">{{ data.qnow['content'].substr(16, 16) }}</div>
    </div>
    <div v-if="data.showj" class="j">
      <div class="shiyi">诗意：{{ data.qnow['诗意'] }}</div>
      <div class="jieyue">解曰：{{ data.qnow['解曰'] }}</div>
    </div>

    <div class="btn" v-if="!data.showtc" @click="qiu">求签（500功德一次）</div>
    <div
      class="btn jieb"
      v-if="data.showtc == 1 && data.showj == 0"
      @click="jie"
    >
      解签（1000功德一次）
    </div>
  </div>
</template>

<script setup>
import { reactive, computed, watchEffect, onMounted } from 'vue';
import qian from '@/utils/signData.json';
import { useUserStore } from '@/store/user';
const userStore = useUserStore();
let data = reactive({
  qdata: [], //全部签文数据
  qnow: {}, //当前签文数据
  showtc: 0, //显示标题和内容
  showj: 0 //显示解签
});

//生命周期函数，
//onMounted：在初始化页面完成后执行
onMounted(() => {
  data.qdata = qian;
});

const qiu = () => {
  let rand = Math.floor(Math.random() * 100);
  data.qnow = data.qdata[rand];
  data.showtc = 1;
  userStore.setMerit(-500); //功德
};
const jie = () => {
  data.showj = 1;
  userStore.setMerit(-1000); //功德
};
</script>
<style lang="scss" scoped>
.qiuqian {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /*元素垂直排列*/
  /*水平垂直居中*/
  align-items: center;
  justify-content: center;

  .title {
    color: white;
    font-size: 30px;
    margin: 20px 0;
  }

  .content {
    color: white;
    font-size: 24px;
    margin: 10px 0;
  }

  .tc {
    display: flex;
    flex-direction: column;
    /*元素垂直排列*/
    /*水平垂直居中*/
    align-items: center;
    justify-content: center;
  }

  .shiyi {
    color: #cecece;
    font-size: 18px;
    margin: 10px 0;
  }
  .jieyue {
    color: #cecece;
    font-size: 18px;
    margin: 10px 0;
  }

  .btn {
    padding: 8px 12px;
    border-radius: 5px;
    background-color: #cecece;
    color: #000;
    font-size: 16px;
    cursor: pointer;
    user-select: none;

    text-align: center;
    text-decoration: none;
    transition: background-color 0.3s ease;
    &:hover {
      background-color: #888;
    }
    &:active {
      background-color: #444;
    }
    &:jieb {
      margin: 50px 0;
    }
  }
}
</style>
