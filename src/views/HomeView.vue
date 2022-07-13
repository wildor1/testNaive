<template>
  <div>
    <SwiperComponent />
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