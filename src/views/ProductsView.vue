<template>
  <!-- https://www.naiveui.com/zh-CN/light -->
  <!-- 米思米 -->
  <div>
    <h1>This is Product</h1>
    <div>
      <!-- {{ product.name }} -->
    </div>
    <div class="cataloge">
      <span id="两通"></span>
      <span id="三通"></span>
    </div>
    <div class="cataloge">
      <span id="空心"></span>
      <span id="实心"></span>
    </div>
    <n-space>
      <n-radio :checked="checkedValue === 'Definitely Maybe'" value="Definitely Maybe" name="basic-demo"
        @change="handleChange">
        Definitely Maybe
      </n-radio>
      <n-radio :checked="checkedValue === 'Be Here Now'" value="Be Here Now" name="basic-demo" @change="handleChange" label=" Be Here Now">
        Be Here Now
      </n-radio>
    </n-space>
  </div>
</template>

<script>
  import { defineComponent, ref } from "vue";
  import { NSpace, NRadio } from 'naive-ui'
  export default defineComponent({
    setup() {
      const checkedValueRef = ref(null);
      return {
        checkedValue: checkedValueRef,
        handleChange(e) {
          checkedValueRef.value = e.target.value;
        }
      };
    },

    components: {
      NSpace, NRadio 
    }
  });
</script>