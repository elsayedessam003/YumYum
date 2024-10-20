require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cloudinary = require("cloudinary").v2;
const bodyParser = require("body-parser");

const AppError = require("./utils/appError");
const userRouter = require("./routes/user.routes");
const restaurantRouter = require("./routes/restaurantRoutes");
const cartRoutes = require("./routes/cart.routes");
const dishRouter = require("./routes/dishRoutes");
const orderRouter = require("./routes/order.routes");
const reviewRouter = require("./routes/reviewRoutes");
const paymentRouter = require("./routes/paymentRoutes");
const errorController = require("./controllers/error.controller");

// mongoose.connect("mongodb://localhost:27017/yum-yum_DB").then(() => {
//   console.log("DB connection established");
// });
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
console.log(DB);
mongoose
  .connect(DB)
  .then(() => console.log("DB connection successful!"))
  .catch((err) => console.error("DB connection error:", err));

cloudinary.config({
  cloud_name: process.env.APP_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.APP_CLOUDINARY_API_KEY,
  api_secret: process.env.APP_CLOUDINARY_SECRET_KEY,
});

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.use("/api/v1", userRouter);
app.use("/api/v1/restaurants", restaurantRouter);
app.use("/api/v1/cart", cartRoutes);
app.use("/api/v1/dishes", dishRouter);
app.use("/api/v1/orders", orderRouter);
app.use("/api/v1/reviews", reviewRouter);
app.use("/api/v1/payments", paymentRouter);

app.all("*", (req, res, next) => [
  next(AppError.create("Page not found", "Error", 404)),
]);
app.use(errorController);
app.listen(3000, () => {
  console.log("server running... ");
});
