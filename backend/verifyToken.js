const jwt = require("jsonwebtoken");
require("dotenv").config();

const secret = process.env.SECRET;

const verifyToken = (req, res, next) => {
  const token = req.headers.token;
  if (!token) {
    res.json({ error: "Please authenticate with a valid token" });
  } else {
    try {
      const data = jwt.verify(token, secret);
      req.User = data;
      next();
    } catch (error) {
      res.send(error);
    }
  }
};

module.exports = verifyToken;
