<!--
 * @Author: Jackie
 * @Date: 2023-06-25 09:58:10
 * @LastEditTime: 2023-08-12 17:47:42
 * @LastEditors: Jackie
 * @Description: 烧香
 * @FilePath: /Wooden-Fish-Vue-Web/src/views/ShaoXiang.vue
 * @version: 
-->
<template>
  <div class="shaoxiang" v-show="data.display">
    <canvas
      id="container"
      width="500"
      height="500"
      @mousemove="mousepos"
    ></canvas>
  </div>
  <div class="note" v-if="!data.display">
    <div class="f">烧香将花费500功德，烧完可得1000功德，确定要烧香吗？</div>
    <div class="button-container">
      <button class="b1" @click="cal">取消</button>
      <button class="b2" @click="yes">确定</button>
    </div>
  </div>
</template>

<script setup>
import {
  reactive,
  computed,
  watchEffect,
  onMounted,
  onBeforeUnmount
} from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/store/user';
const userStore = useUserStore();

const router = useRouter();
//context用于接受自定义事件和插槽
//数据
let data = reactive({
  center: { x: 250, y: 250 }, //画布中心点坐标
  spiralExpanse: 8, //螺旋间距
  pointnum: 550, //螺旋上点的数量
  points: [],
  animationFrame: true, //游戏运行标志，为null时结束

  display: 0 //开始提示框
});

//生命周期函数，
//onMounted：在初始化页面完成后执行
onMounted(() => {});

const cal = () => {
  router.push('/');
};

const yes = () => {
  data.display = 1;
  userStore.setMerit(-500); //功德
  setupSets();
  drawLoop();
};

//初始化点螺线上的点
const setupSets = () => {
  for (let i = 0; i < data.pointnum; i++) {
    let point = {}; //x,y为点的坐标，life线段的透明度，active为点是否消失
    let angle = 0.05 * -i;
    point.x = data.center.x + data.spiralExpanse * angle * Math.cos(angle);
    point.y = data.center.y + data.spiralExpanse * angle * Math.sin(angle);
    point.active = true;
    point.life = 1;

    data.points.push(point);
  }
};

const draw = () => {
  var canvas = document.getElementById('container');
  if (!canvas.getContext) return;
  var ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, 500, 500); //清空所有的内容
  ctx.lineCap = 'round';
  ctx.moveTo(data.points[0].x, data.points[0].y);

  for (let i = 1; i < data.points.length; i++) {
    if (data.points[i].life < 1 && data.points[i].active === true) {
      ctx.strokeStyle =
        'rgba(244, 110, 28, ' + (0.1 + data.points[i].life) + ')';
    } else {
      ctx.strokeStyle =
        'rgba(255, 255, 255, ' + (0.1 + data.points[i].life) + ')';
    }
    ctx.lineWidth = 6 * data.points[i].life + 4 + '';

    ctx.beginPath();
    ctx.moveTo(data.points[i - 1].x, data.points[i - 1].y);
    ctx.lineTo(data.points[i].x, data.points[i].y);
    ctx.stroke();
  }
};

const drawLoop = () => {
  //动画更新
  update();
  if (data.animationFrame) {
    draw();
    data.animationFrame = requestAnimationFrame(drawLoop);
  }
};

const update = () => {
  let foundActive = false; //所有点是否消失

  for (let i = 1; i < data.points.length; i++) {
    let dot = data.points[i];
    let a = data.mouseX - dot.x;
    let b = data.mouseY - dot.y;
    let distance = Math.sqrt(a * a + b * b);

    if (data.points[i].active === true) {
      //只要还有一个点存在，则founActive为true
      foundActive = true;
    }

    if (distance < 25 && data.points[i].active === true) {
      //点逐渐消失

      data.points[i].life = data.points[i].life - 0.04; //透明度逐渐减小，直至为零
      if (data.points[i].life <= 0) {
        data.points[i].active = false;
      }
    } else if (data.points[i].active === true && data.points[i].life < 1) {
      data.points[i].life = data.points[i].life + 0.05; //如果点完全消失前鼠标移开了，则点逐渐变回来
    }
  }

  if (foundActive === false) {
    //所有点都消失后游戏结束
    cancelAnimationFrame(data.animationFrame);
    data.animationFrame = null;
    endGame();
  }
};

//退出前执行
onBeforeUnmount(() => {
  cancelAnimationFrame(data.animationFrame);
  data.animationFrame = null;
});

const mousepos = (e) => {
  //定位鼠标位置
  data.mouseX = e.offsetX;
  data.mouseY = e.offsetY;
};

const endGame = () => {
  alert('烧香结束，恭喜获得1000点功德！');
  userStore.setMerit(1000); //功德
  router.push('/');
};
</script>
<style lang="scss" scoped>
.shaoxiang {
  width: 100%;
  height: 100%;
  position: relative;

  #container {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
}
.note {
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 10px;
}

.f {
  font-size: 16px;
  margin-bottom: 10px;
}
.button-container {
  text-align: right;
  .b1 {
    background-color: #ddd;
    color: #333;
    padding: 5px 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-right: 20px;
  }

  .b2 {
    background-color: #008dff;
    color: #fff;
    padding: 5px 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
}
</style>
