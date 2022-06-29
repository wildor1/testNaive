<template>
  <n-carousel autoplay=true interval=2000 effect="custom" style="height:450px" trigger="hover"
    :transition-props="{ name: 'creative' }"  show-arrow>
    <div class="textPicArrange">
      <div class="textarea">
        <p class="textstyle">专业的医疗台车</p>
        <p class="textstyle">质量良好</p>
      </div>
      <!-- pic size 1920 × 647 -->
      <img src="1.jpg" alt="" srcset="" class="carousel-img" />
    </div>
    <img src="2.jpg" alt="" class="carousel-img" />
    <div class="textPicArrange">
      <p class="textstyle">日本轮子的网站可以查看https://www.yueicaster.co.jp/en</p>
      <img src="3.jpg" alt="" srcset="" class="carousel-img" />
    </div>
  </n-carousel>
</template>

<script>
import { NCarousel } from "naive-ui"
export default {
  name: "SwiperComponent",
  components: {
    NCarousel
  },
};
</script>

<style scoped>
.carousel-img {
  width: 100%;
  height: 450px;
  object-fit: cover;
}

.textstyle {
  font: 30px sans-serif;
  /* color: #0d396a; */
  color: whitesmoke;
  width: 38vw;
  margin: 2vh 2vw;
  word-wrap: break-word;
}

.textarea {
  background: #0d396a;
}

.textPicArrange {
  display: flex;
  flex-direction: row
}

:deep(.creative-enter-from),
:deep(.creative-leave-to) {
  opacity: 0;
  transform: scale(0.9);
}

:deep(.creative-enter-active),
:deep(.creative-leave-active) {
  transition: all 0.3s ease;
}
</style>