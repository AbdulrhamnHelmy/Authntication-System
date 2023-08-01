const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  phone: { type: String, unique: true },
  age: Number,
});

userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};
module.exports = mongoose.model("Users", userSchema);
