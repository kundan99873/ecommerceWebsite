const express = require("express");
const router = express.Router();
const User = require("../model/userModel");
const cryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const verifyToken = require("../verifyToken");
require("dotenv").config();

const pass = process.env.PASS;
const secret = process.env.SECRET;

router.post("/register", async (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: cryptoJS.AES.encrypt(req.body.password, pass).toString(),
  });

  try {
    const existedUser = await User.findOne({
      email: req.body.email,
    });
    if (existedUser) {
      return res.send("User already existed");
    }
    await User.create(newUser)
      .then((data) => {
        res.send("user created successfully...");
        console.log(data);
      })
      .catch((err) => {
        res.json(err);
      });
  } catch (error) {
    res.send("Internal Server Error");
    console.log(error);
  }
});

router.post("/login", async (req, res) => {
  let success = false;
  try {
    const user = await User.findOne({
      email: req.body.email,
    });

    if (!user) {
      return res.json({
        success: success,
        error: "Please login with correct credentials",
      });
    }

    var bytes = cryptoJS.AES.decrypt(user.password, pass);
    var originalText = bytes.toString(cryptoJS.enc.Utf8);

    if (req.body.password !== originalText) {
      return res.json({
        success: success,
        error: "Please login with correct credentials",
      });
    }

    const data = {
      id: user.id,
    };

    const token = jwt.sign(data, secret);
    success = true;
    res.json({ success, token });
  } catch (error) {
    console.log(error);
  }
});

router.get("/userDetail", verifyToken, async (req, res) => {
  try {
    await User.findById(req.User.id)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  } catch (error) {
    res.json(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
