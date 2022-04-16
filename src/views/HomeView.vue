<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <SwiperComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import SwiperComponent from '@/components/SwiperComponent.vue'
export default {
  name: 'HomeView',
  components: {
    SwiperComponent
  }
}
</script>
