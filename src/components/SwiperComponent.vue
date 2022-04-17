<template>
	<div class="swiperClass">
		<!-- https://swiperjs.com/demos#autoplay -->
		<swiper :autoplay="{delay:2500,disableOnInteraction:false}" :centeredSlides="true" :pagination="{clickable:true}"
			:space-between="30" :navigation="true" :loop="true" :modules="modules" class="mySwiper">
			<swiper-slide>
				<img src="1.jpg" alt="" srcset="">
			</swiper-slide>
			<swiper-slide>
				<div
					style="background-image: url(2.jpg);width: 100%;height: 50vh;color: red;text-align:left">
					<p style="margin-top: 200px;margin-left: 100px;width: 100px;word-wrap: break-word">
						日本轮子网站https://www.yueicaster.co.jp/en/
					</p>
				</div>
			</swiper-slide>
			<swiper-slide><img src="3.jpg" alt=""></swiper-slide>
		</swiper>
	</div>
</template>

<script>
	import { Swiper, SwiperSlide } from 'swiper/vue'
	import { Autoplay, Pagination, Navigation } from "swiper";
	import 'swiper/css';
	import "swiper/css/pagination";
	import "swiper/css/navigation";
	export default {
		name: 'SwiperComponent',
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

	.swiper-slide {
		text-align: center;
		font-size: 18px;
		background: #fff;

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