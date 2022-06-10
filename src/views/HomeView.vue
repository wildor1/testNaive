<template>
  <div class="home">
    <product-list></product-list>

  </div>

  <SwiperComponent />
  <footer>
    Copyright © 2022 Apple Inc. 保留所有权利。隐私政策 使用条款 销售政策 法律信息 网站地图
    京ICP备10214630 营业执照 无线电发射设备销售备案编号11201910351200
  </footer>
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
  footer {
    padding-top: 6px;
    margin-top: 6px;
    border-top: 1px solid black;
  }
  .class{
    position: relative;
    top:78px
  }
  
</style>