var express = require("express");
var router = express.Router();
const {
  homepage,
  register,
  login,
  logout,
} = require("../controllers/indexControl");

/* GET home page. */
router.get("/", homepage);
router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
module.exports = router;
