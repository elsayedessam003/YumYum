require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cloudinary = require('cloudinary').v2;

const AppError = require('./utils/appError');
const userRouter = require("./routes/user.route");
const restaurantRouter = require("./routes/restaurant.route");
const errorController = require('./controllers/error.controller')

mongoose.connect('mongodb://localhost:27017/yum-yum_DB').then(()=>{
  console.log('DB connection established');
})

cloudinary.config({
  cloud_name: process.env.APP_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.APP_CLOUDINARY_API_KEY ,
  api_secret: process.env.APP_CLOUDINARY_SECRET_KEY
})

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1", userRouter);
app.use("/api/v1/restaurant", restaurantRouter);

app.all("*", (req, res, next) => [
  next(AppError.create("Page not found", ERROR, 404)),
]);
app.use(errorController);
app.listen(3000,()=>{
  console.log('server running... ');
})