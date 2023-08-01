const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const userRouter = require("./Routes/user.cjs");
const app = express();
app.use(bodyparser.json());

const url = "mongodb+srv://mego:mego123mego@mego.2xmv7wd.mongodb.net/mego";

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(url);
    console.log("Connected to Mongo DB");
  } catch (err) {
    console.log("Error while connect to mongo DB" + err);
    process.exit();
  }
};
connectDB();

app.use("/", userRouter);

app.listen(8000);
