const { Schema } = require("mongoose");

const OrderSchema = new Schema({
  name: String,
  price: Number,
  qty: String,
  mode: String,
});

module.exports = OrderSchema;
