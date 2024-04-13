exports.sendtoken = (user, statusCode, res) => {
    const token = user.getjwttoken();
  
    const options = {
      expires: new Date(
        Date.now() + 1 * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
    };
    res
      .status(statusCode)
  
      .cookie("token", token, options)
      .json({ sucess: true, id: user._id, token: token });
    // res.json({ token });
  };
  