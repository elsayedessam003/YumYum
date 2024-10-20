const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Dish = require("./dishModel");
const cartSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    restaurantId: {
      type: mongoose.Schema.Types.ObjectId,
      // required: true,
      ref: "Restaurant",
    },
    items: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "Dish",
        },
        quantity: { type: Number, required: true, min: 1 },
        notes: String,
      },
    ],
    total: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);
// cartSchema.post("save", async function (next) {
//   let total = 0;
//   await this.items.forEach(async (item) => {
//     const newItem = await Dish.findById(item.productId);
//     total += newItem.price * item.quantity;
//     this.total = total;
//   });
//   // save this.total to the database
//   await this.save();
//   console.log(`cart total in post: ${this.total}`);
//   next();
// });
module.exports = mongoose.model("Cart", cartSchema);
