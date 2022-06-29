<template>
  <div>
    <div class="products">
      <n-grid cols="2 s:3 m:4 l:5 xl:6 2xl:7" responsive="screen">
        <template v-for="product in products" :key="product._id">
          <n-gi>
            <product-item :product="product"></product-item>
          </n-gi>
        </template>
      </n-grid>
    </div>
  </div>
</template>

<style>
</style>

<script>
import ProductItem from './ProductItem';
import { defineComponent } from "vue";
import { NGrid, NGi } from 'naive-ui'
export default defineComponent({
  name: 'product-list',
  data() {
    return {
      products: [{ _id: 1, name: 'jay' }, { _id: 2, name: 'kate' }]
    }
  },
  components: {
    ProductItem, NGrid, NGi
  }
})
</script>