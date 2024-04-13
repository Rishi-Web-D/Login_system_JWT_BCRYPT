const userDetail = require("../models/userDetail");
const { sendtoken } = require("../utils/sendToken");


exports.homepage = (req, res, next) => {
  res.send("Homepage , This is '/' Route ");
};
exports.register = async function (req, res, next) {
  try {
    const user = new userDetail(req.body);
    await user.save();
    res.json({message:"User Registered sucessfully",user: user,token: await user.getjwttoken()});
  } catch (error) {
    res.status(400).send("Error in registering user");
  }
};
exports.login = async function (req, res, next) {
  try {
    const user = await userDetail.findOne({
      $or: [{ email: req.body.email }, { phone: req.body.phone }],
    });
    if (!user) {
      return res.status(404).send("User not found");
    }
    const rightPass = user.password === req.body.password ? true : false;
    if(!rightPass){
        return res.status(401).send("Invalid Password");
    }
    res.json({message:"User Logged in sucessfully",user: user,token: await user.getjwttoken()});
  } catch (error) {
    res.json({ message: "Error While logging in user", error: error });
  }
};

exports.logout = function(req, res, next) {
    res.json({ message: "Sucessfully Logged!" });
    
}