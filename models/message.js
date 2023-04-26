const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  text: { type: String, minLength: 1, maxLength: 100, required: true },
  user: { type: String, minLength: 1, maxLength: 30, required: true },
  added: { type: Date, default: new Date().toLocaleDateString() },
});

module.exports = mongoose.model("Message", MessageSchema);
