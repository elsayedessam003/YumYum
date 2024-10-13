require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cloudinary = require("cloudinary").v2;
const bodyParser = require("body-parser");

const AppError = require("./utils/appError");
const userRouter = require("./routes/user.route");
const restaurantRouter = require("./routes/restaurant.route");
const gRestaurantRouter = require("./routes/global.restaurant.route");
const errorController = require("./controllers/error.controller");

mongoose.connect("mongodb://localhost:27017/yum-yum_DB").then(() => {
  console.log("DB connection established");
});
// const DB = process.env.DATABASE.replace(
//   "<PASSWORD>",
//   process.env.DATABASE_PASSWORD
// );

// mongoose
//   .connect(DB, {
//     useCreateIndex: true,
//     useFindAndModify: false,
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("DB connection successful");
//   });

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
app.use("/api/v1/my/restaurant", restaurantRouter);
app.use("/api/v1/restaurant", gRestaurantRouter);

app.all("*", (req, res, next) => [
  next(AppError.create("Page not found", ERROR, 404)),
]);
app.use(errorController);
app.listen(3000, () => {
  console.log("server running... ");
});
