const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();


//register
router.post("/register", async (req, res) => {
  const userpass = CryptoJS.SHA512(req.body.password).toString(
    CryptoJS.enc.Hex
  );
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: userpass,
  });
  try {
    const data = await newUser.save();
    res.status(201).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

//login //error solve by laters username checking error

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
    });

    !user && res.status(404).json("data not found");
    const checkpass = CryptoJS.SHA512(req.body.password).toString(
      CryptoJS.enc.Hex
    );

    const acccesToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_CODE,
      { expiresIn: "1h" }
    );

    const { password, ...others } = user._doc;

    if (password === checkpass) {
      res.status(200).json({ ...others, acccesToken });
    } else {
      res.status(404).json("password wrong");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
