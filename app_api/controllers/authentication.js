const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const passport = require('passport');

// Register
const register = async (req, res) => {
  if (!req.body.name || !req.body.email || !req.body.password) {
    return res.status(400).json({ message: "All fields required" });
  }

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: "",
  });
  user.setPassword(req.body.password);
  const q = await user.save();

  if (!q) {
    return res.status(400).json(err);
  } else {
    const token = user.generateJWT();
    return res.status(200).json({ token });
  }
};

// Login
const login = async (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({ message: "All fields required" });
  }

  const user = await User.findOne({ email: req.body.email });
  if (!user || !user.validPassword(req.body.password)) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  // Auth succeeded - generate JWT
  const token = user.generateJWT();
  return res.status(200).json({ token });
};


// Middleware to protect routes
const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: "Missing Authorization header" });
  }

  const token = authHeader.split(" ")[1];
  console.log("Token:", token)

  jwt.verify(token, process.env.JWT_SECRET || "mysecret", (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Invalid token" });
    }
    req.user = user;
    next();
  });
};

module.exports = {
  register,
  login,
  authenticateJWT,
};
