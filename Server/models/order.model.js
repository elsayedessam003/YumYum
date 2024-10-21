const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    status: {
      type: String,
      enum: ["pending", "readt to deliver", "delivered"],
      default: "pending",
    },
    items: [
      {
        productId: { type: mongoose.Schema.Types.ObjectId, ref: "dish" },
        quantity: { type: Number, required: true },
      },
    ],
    total: { type: Number, required: true },
    restaurantId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Restaurant",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
