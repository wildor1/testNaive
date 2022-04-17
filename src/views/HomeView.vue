<template>
  <div class="home">
    <product-list></product-list>
  </div>
  <SwiperComponent />
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