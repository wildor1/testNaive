<template>
	<div>
		<!-- https://swiperjs.com/demos#autoplay -->
		<swiper :autoplay="{delay:2500,disableOnInteraction:false}" :centeredSlides="true" :pagination="{clickable:true}" 
			:space-between="30" :navigation="true" :modules="modules"
			class="mySwiper">
			<swiper-slide><img src="1.png" alt="" srcset=""></swiper-slide>
			<swiper-slide><img src="2.jpg" alt="" srcset=""></swiper-slide>
			<swiper-slide><img src="3.jpg" alt=""></swiper-slide>
		</swiper>
		<button @click="swiper.slideNext()">Slide to the next slide</button>
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
			// const onSwiper = (swiper) => {
			// 	console.log(swiper);
			// };
			// const onSlideChange = () => {
			// 	console.log('slide change');
			// };
			// const swiper = useSwiper();
			return {
				modules: [Autoplay, Pagination, Navigation],
				// swiper,
				// onSwiper,
				// onSlideChange,
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
		height: 100%;
		object-fit: cover;
	}
</style>