const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    info: {
      type: String,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports =
  mongoose.model.Products || mongoose.model("Products", productSchema);
