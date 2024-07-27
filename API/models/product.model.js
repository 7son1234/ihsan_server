const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  name:{
    type: String,
    required:true
  },
  price: {
    type: Number,
    required:true, 
  },
  barcode:{
    type: String,
    required: true,
  },
  id:{
    type:Number,
    unique:true,
    required: true,
  } 
});

const PRODUCT_MODEL = model("product", productSchema);

module.exports=PRODUCT_MODEL;