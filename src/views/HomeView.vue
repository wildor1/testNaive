<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
		<product-list></product-list>
    <SwiperComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import SwiperComponent from '@/components/SwiperComponent.vue'
import ProductList from "@/components/products/ProductList.vue";
export default {
  name: 'HomeView',
  components: {
    SwiperComponent,
    ProductList
  }
}
</script>
