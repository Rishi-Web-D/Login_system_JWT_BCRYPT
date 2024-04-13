const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userDetail = new mongoose.Schema({
  email: String,
  phone: Number,
  password: String,
});

//json web token
userDetail.methods.getjwttoken = async function () {
  try {
    return jwt.sign({ id: this._id }, "hello" , {//Secret key
      expiresIn: "1h",
    });
  } catch (error) {
    console.log(error);
  }
};

const user = mongoose.model("Users", userDetail);

module.exports = user;
