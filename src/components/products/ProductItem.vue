<template>
  <div>
    <n-watermark
    content="核心机密"
    cross
    selectable
    :font-size="16"
    :line-height="16"
    :width="192"
    :height="128"
    :x-offset="12"
    :y-offset="28"
    :rotate="-15"
  >
    <n-card hoverable=true>
      <template #cover>
        <img src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg">
      </template>
      <template #header-extra>
        #header-extra
      </template>
      卡片内容
      <template #footer>
        {{ product.name }}
        发货时效:24小时以内
      </template>
    </n-card>
    </n-watermark>
  </div>
</template>

<style>
.n-card {
  max-width: 300px;
}
</style>

<script>
import { NCard,NWatermark } from 'naive-ui'
export default {
  name: 'product-item',
  props: ['product'],
  components: { NCard ,NWatermark}
}
</script>