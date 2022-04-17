<template>
  <form @submit.prevent="saveProduct">
    <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
      <div class="form-group">
        <label>Name</label>
        <input
          type="text"
          placeholder="Name"
          v-model="model2.name"
          name="name"
          class="form-control" />
      </div>
      <div class="form-group">
        <label>Price</label>
        <input
          type="number"
          class="form-control"
          placeholder="Price"
          v-model="model2.price"
          name="price" />
      </div>
      <div class="form-group">
        <label>Manufacturer</label>
        <select
          type="text"
          class="form-control"
          v-model="model2.manufacturer"
          name="manufacturer">
          <template v-for="(manufacturer,index) in manufacturers" :key="index">
            <option :value="manufacturer._id" :selected="manufacturer._id == (model2.manufacturer && model2.manufacturer._id)">{{manufacturer.name}}</option>
          </template>
        </select>
      </div>
    </div>

    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
      <div class="form-group">
        <label>Image</label>
        <input
          type="text"
          lass="form-control"
          placeholder="Image"
          v-model="model2.image"
          name="image"
          class="form-control" />
      </div>
      <div class="form-group">
        <label>Description</label>
        <textarea
          class="form-control"
          placeholder="Description"
          rows="5"
          v-model="model2.description"
          name="description"
         ></textarea>
      </div>
      <div class="form-group new-button">
        <button class="button">
          <i class="fa fa-pencil"></i>
          <!-- Conditional rendering for input text -->
          <span v-if="isEditing">Update Product</span>
          <span v-else>Add Product</span>
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  props: ['model1', 'manufacturers', 'isEditing'],
  methods: {
    //调用了父组件的 save-product 方法，并把修改后的 this.model 变量内容传给父组件。
    saveProduct() {
      this.$emit('save-product', this.model1)
    }
  },
  computed: {
    model2(){
      return this.model1
    }
  },

}
</script>