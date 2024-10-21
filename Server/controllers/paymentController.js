const asyncHandler = require("express-async-handler");
const AppError = require("../utils/appError");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const Product = require("../models/dishModel");

class PaymentController {
  createPayment = asyncHandler(async (req, res, next) => {
    let products = req.body.products;
    products.forEach(async (product) => {
      console.log(product);
      const productDb = await Product.findById(product._id);
      if (!productDb) {
        return next(AppError.create("Product not found", "Error", 404));
      }

      if (product.price !== productDb.price) {
        return next(AppError.create("Price mismatch", "Error", 400));
      }
    });
    console.log(products);

    const lineItems = products.map((product) => {
      console.log(product);
      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: product.name,
          },
          unit_amount: Math.round(product.price * 100),
        },
        quantity: product.quantity,
      };
    });
    console.log(lineItems);
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `http://localhost:8000/success`,
      cancel_url: `http://localhost:8000/fail`,
    });

    res.status(200).json({
      message: "Success",
      data: session,
    });
  });
}
module.exports = new PaymentController();
