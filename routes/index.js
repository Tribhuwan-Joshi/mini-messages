require("dotenv").config();
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Message = require("../models/message");

// connect mongodb
mongoose.set("strictQuery", false);
async function connectToDatabase() {
  await mongoose.connect(process.env.MONGO_URL);
}
connectToDatabase().catch((err) => console.log(err));

/* GET home page. */
router.get("/", async function (req, res, next) {
  try {
    const messages = await Message.find({});
    res.render("index", { title: "Mini Message", messages: messages });
  } catch (err) {
    console.log(err.message);
    next(err);
  }
});

router.get("/new", function (req, res) {
  res.render("form");
});
router.post("/new", async function (req, res) {
  try {
    const user = req.body.username;
    const text = req.body.text;
    const message = new Message({ text, user });
    await message.save();
    res.redirect("/");
  } catch (err) {
    console.log(err.message);
    next(err);
  }
});
module.exports = router;
