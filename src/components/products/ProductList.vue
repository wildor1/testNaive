<template>
  <div>
    <div class="products">
      <div class="container">
      </div>
      <template v-for="product in products" :key="product._id">
        <product-item :product="product" ></product-item>
      </template>
    </div>
  </div>
</template>

<style>
.product {
  border-bottom: 1px solid black;
}

.product__image {
  width: 100px;
  height: 100px;
}
</style>

<script>
import ProductItem from './ProductItem';
export default {
  name: 'product-list',
  computed: {
    // a computed getter
    products() {
      return this.$store.getters.allProducts;
    }
  },
  created() {
    if (this.products.length === 0) {
      this.$store.dispatch('allProducts')
    }
  },
  methods: {
    addToCart(product) {
      this.$store.commit('ADD_TO_CART', {
        product
      });
    }
  },
   components: {
    'product-item': ProductItem
  }
}
</script>