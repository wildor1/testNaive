<template>
  <!-- https://www.naiveui.com/zh-CN/light -->
  <!-- 米思米 -->
  <div>
    <h1>This is Product</h1>
    <div>
      <catagory-select />
    </div>
   <ProductList />
  </div>
</template>

<script>
import CatagorySelect from "@/components/CatagorySelect.vue"
import ProductList from "@/components/products/ProductList.vue"
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    
  },

  components: {
    CatagorySelect,ProductList
  }
});
</script>