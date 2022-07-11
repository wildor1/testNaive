<template>
  <SwiperComponent />
  <div class="mt-40 bg-white border-t border-solid border-gray-200">
    <div class="mx-12 py-12">
      <div class="p-5 text-left text-4xl">最新产品</div>
      <div class="flex justify-between">
        <div class="flex-66 hover:shadow-md">
          <img src="1.jpg">
          #header-extra
          技术专栏
          发货时效:24小时以内
        </div>
        <div class="flex-33">
          <img src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg">
          #header-extra
          新品上市
        </div>
      </div>
    </div>
    <div style="background-color:white;margin-top:15px" class="flex">
      <img src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg">
      #header-extra
      愿景
      发货时效:24小时以内
      <img src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg">
      #header-extra
    </div>
  </div>

</template>

<script>
  import SwiperComponent from '@/components/SwiperComponent.vue'
  export default {
    name: 'HomeView',
    components: {
      SwiperComponent,
    }
  }
</script>

<style>
  .class {
    position: relative;
    top: 78px
  }

  .n-card {
    max-width: 100%;
  }
</style>