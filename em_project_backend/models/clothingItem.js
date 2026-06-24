const mongoose = require("mongoose");

const clothingItemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 30,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    description: {
      type: String,
      required: true,
      maxlength: 300,
    },
    category: {
      type: String,
      required: true,
      enum: ["shirt", "shorts", "hoodie", "pants", "accessory", "set"],
    },
    sizes: {
      type: [String],
      default: ["S", "M", "L", "XL"],
    },
    inStock: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("ClothingItem", clothingItemSchema);
