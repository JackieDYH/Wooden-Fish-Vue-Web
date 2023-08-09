<!--
 * @Author: Jackie
 * @Date: 2023-06-25 09:58:10
 * @LastEditTime: 2023-08-09 21:33:12
 * @LastEditors: Jackie
 * @Description: 木鱼
 * @FilePath: /Wooden-Fish-Vue-Web/src/views/MuYu.vue
 * @version: 
-->
<template>
  <div class="muyu">
    <div class="wrap">
      <img src="@/assets/images/my01.png" alt="muyu" class="my" @click="play" />
      <img
        src="@/assets/images/my02.png"
        alt="muyugui"
        :class="isAuto ? 'myg2' : 'myg'"
      />
      <div ref="eleAdd"></div>
      <button @click="autoPlay">{{ isAuto ? '自动' : '手动' }}</button>
    </div>
    <!--木鱼声-->
    <audio ref="audioMusic1">
      <source src="@/assets/music/1.mp3" />
    </audio>
    <!--1s延迟木鱼声-->
    <audio ref="audioMusic2">
      <source src="@/assets/music/2.mp3" />
    </audio>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useUserStore } from '@/store/user';
const userStore = useUserStore();
const isAuto = ref(false); // false 手动 true 自动
const intervalFlag = ref(null);
const eleAdd = ref(null);
const audioMusic1 = ref(null);
const audioMusic2 = ref(null);

// 自动/手动
const play = () => {
  if (isAuto.value) {
    audioMusic1.value.currentTime = 0;
    audioMusic1.value.play();
    userStore.setMerit(+1);

    let eleDiv = document.createElement('div');
    eleDiv.classList.add('show2');
    const add = eleAdd.value.appendChild(eleDiv);

    setTimeout(() => {
      eleAdd.value?.removeChild(add);
    }, 4000);
  } else {
    audioMusic1.value.currentTime = 0;
    audioMusic1.value.play();
    userStore.setMerit(+1);

    let eleDiv = document.createElement('div');
    eleDiv.classList.add('show1');
    const add = eleAdd.value.appendChild(eleDiv);

    setTimeout(() => {
      eleAdd.value?.removeChild(add);
    }, 2000);
  }
};

const autoPlay = () => {
  if (isAuto.value) {
    isAuto.value = false;
    clearInterval(intervalFlag.value);

    // audioMusic1.value.play(); //自动的音乐
    audioMusic1.value.pause(); //音乐停止
  } else {
    isAuto.value = true;
    play();
    //setInterval是两秒后开始执行，所以要先执行一次
    intervalFlag.value = setInterval(play, 2000);
  }
};

onMounted(() => {});
onUnmounted(() => {
  clearInterval(intervalFlag.value);
});
</script>

<style lang="scss" scoped>
@keyframes run {
  from {
    transform: rotateZ(30deg);
  }

  to {
    transform: rotateZ(12deg);
  }
}

.muyu {
  display: flex;
  justify-content: center;
  align-items: center;
  .wrap {
    width: 600px;
    height: 500px;
    position: relative;
    /* transform: translate(0, -40px); */
    .my {
      width: 400px;
      position: absolute;
      bottom: 75px;
      left: 100px;
      &:active + .myg {
        transform: rotateZ(12deg);
        transition: 0.05s;
      }
    }
    .myg {
      height: 100px;
      position: absolute;
      left: 280px;
      top: 80px;
      transform: rotateZ(30deg);
      transition: transform 0.5s cubic-bezier(0.85, 0.1, 0.89, 0.65);
    }

    .myg2 {
      height: 100px;
      position: absolute;
      left: 280px;
      top: 80px;
      transform: rotateZ(30deg);
      animation: run 1s alternate infinite cubic-bezier(0.85, 0.1, 0.89, 0.65);
    }
  }
}
</style>

<style lang="scss">
@keyframes run1 {
  from {
    top: 150px;
  }

  to {
    top: -100px;
  }
}
.show1::after {
  content: '功德+1';
  color: #cecece;
  font-size: 28px;
  position: absolute;
  top: 150px;
  left: 240px;
  animation: run1 2s 0.1s ease-in;
}

.show2::after {
  content: '功德+1';
  color: #cecece;
  font-size: 28px;
  position: absolute;
  top: 180px;
  left: 240px;
  animation: run1 2s 1s ease-in;
}
</style>
