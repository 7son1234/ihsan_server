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
  img:{
    type:String
  },
  id:{
    type:String,
    unique:true,
    required: true,
  } 
});

const PRODUCT_MODEL = model("product", productSchema);

module.exports=PRODUCT_MODEL;