const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: String,
  age: Number,
  phone: {
    type: String,
    required: true,
  },
  pass: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    unique: true,
    required: true,
  },
  cart: {
    type: Array,
  }
});

const USER_MODEL = model("user", userSchema);

module.exports = USER_MODEL;