<template>
  <div class="home">
    <product-list></product-list>
  </div>
  <SwiperComponent />
  <div style="font-size:80px">1221</div>
  <div style="font-size:80px">1221</div>
  <div style="font-size:80px">1221</div>
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

<style>
  .class{
    position: relative;
    top:78px
  }
</style>