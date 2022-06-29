<template>
  <SwiperComponent />
  <n-grid cols="4" item-responsive responsive="screen">
    <n-grid-item span="0 m:1 l:2" style="background-color:green">
      <n-card hoverable=true>
        <template #cover>
          <img src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg">
        </template>
        <template #header-extra>
          #header-extra
        </template>
        技术专栏
        <template #footer>
          发货时效:24小时以内
        </template>
      </n-card>
    </n-grid-item>
    <n-grid-item  style="background-color:blue">
      <div class="green">
        <n-card hoverable=true>
          <template #cover>
            <img src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg">
          </template>
          <template #header-extra>
            #header-extra
          </template>
          新品上市
          <template #footer>
            发货时效:24小时以内
          </template>
        </n-card>
      </div>
    </n-grid-item>
  </n-grid>
  <n-grid cols="4" item-responsive responsive="screen">

    <n-grid-item style="background-color:red">
      <div class="green">
        <n-card hoverable=true>
          <template #cover>
            <img src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg">
          </template>
          <template #header-extra>
            #header-extra
          </template>
          愿景
          <template #footer>
            发货时效:24小时以内
          </template>
        </n-card>
      </div>
    </n-grid-item>
    <n-grid-item span="0 m:1 l:2" style="background-color:yellow">
      <n-card hoverable=true>
        <template #cover>
          <img src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg">
        </template>
        <template #header-extra>
          #header-extra
        </template>
        技术专栏
        <template #footer>
          发货时效:24小时以内
        </template>
      </n-card>
    </n-grid-item>
  </n-grid>


</template>

<script>
import { NCard,NGrid ,NGridItem } from 'naive-ui'
import SwiperComponent from '@/components/SwiperComponent.vue'
export default {
  name: 'HomeView',
  components: {
    SwiperComponent, NCard,NGrid ,NGridItem
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