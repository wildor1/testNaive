const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const model = mongoose.model;
const model = mongoose.model.bind(mongoose);
const ObjectId = mongoose.Schema.Types.ObjectId;

//ObjectId 是一个特殊的数据类型，
//我们用它来定义我们的单个 MongoDB 文档的主键，用于标志存储数据的唯一性
const productSchema = Schema({
  id: ObjectId,
  name: String,
  image: String,
  price: Number,
  description: String,
  manufacturer: { type: ObjectId, ref: 'Manufacturer' }
});

const manufacturerSchema = Schema({
  id: ObjectId,
  name: String,
});

const Product = model('Product', productSchema);
const Manufacturer = model('Manufacturer', manufacturerSchema);

module.exports = { Product, Manufacturer };