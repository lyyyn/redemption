const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const ProductSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    quantity: {
      type: String,
      required: true
    },
    image: {
      type: String,
    },
    isActive: {
      type: Boolean,
      default: false
    },
    date: {
      type: Date,
      default: Date.now
    },
    redemption: [{
      user: String,
      quantity: Number,
      date: Date,
    }] 
  });

const Product = mongoose.model('Product', ProductSchema)
module.exports = Product;