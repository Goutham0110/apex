const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  item: {
    type: String,
    required: [true, "item name not specified"],
  },
  quantity: {
    type: Number,
    required: [true, "item quantity not specified"],
  },
  price: {
    type: Number,
    required: [true, "price is not specified"],
  },
  purchase_type: {
    type: String,
    enum: {
      values: ["Online", "Offline"],
      message: "{VALUE} is nott supported",
    },
  },
  supplier: {
    type: String,
    required: [true, "spllier name or link is not specified"],
  },
  recurring: {
    type: String,
    enum: {
      values: ["Recurring", "Non recurring"],
      message: "{VALUE} is nott supported",
    },
  },
  justification: {
    type: String,
    lowercase: true,
    trim: true,
    minLength: 10,
  },
});

module.exports = mongoose.model("item", itemSchema);
