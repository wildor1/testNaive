<template>
  <div class="swiperClass">
    <!-- https://swiperjs.com/demos#autoplay -->
    <swiper
      :autoplay="{ delay: 2500, disableOnInteraction: false }"
      :centeredSlides="true"
      :pagination="{ clickable: true }"
      :space-between="30"
      :navigation="true"
      :loop="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide>
        <div class="swiper-seat">
          <dir class="textarea">
            <p class="textstyle">专业的医疗台车</p>
            <p class="textstyle">质量良好</p>
          </dir>
        <img src="1.jpg" alt="" srcset="" style="width: 60vw" />
      </div>
      </swiper-slide>
      <swiper-slide id="black"><img src="2.jpg" alt="" /></swiper-slide>
    <swiper-slide>
      <div class="swiper-seat">
        <p class="textstyle">日本轮子的网站可以查看https://www.yueicaster.co.jp/en</p>
        <img src="3.jpg" alt="" srcset="" style="width: 60vw" />
      </div>
    </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
export default {
  name: "SwiperComponent",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
};
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.textstyle {
  font: 30px sans-serif;
  /* color: #0d396a; */
  color: whitesmoke;
  width: 38vw;
  margin: 2vh 2vw;
  word-wrap: break-word;
}
.textarea{
  background: #0d396a;
}
.swiper-seat{
  display: flex; 
  flex-direction: row
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  /* background-color: #0d396a; */
  background-color: white;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 48vh;
  object-fit: contain;
  /* background-size: contain; */
}
</style>