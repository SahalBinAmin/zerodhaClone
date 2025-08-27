const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/UserModel");

// Signup
router
  .post("/signup", async (req, res) => {
    try {
      const { email, password } = req.body;
      console.log("Received:", req.body);
      const existingUser = await UserModel.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
      }
      const hashedPassword = await bcrypt.hash(password, 10);

      const registeredUser = new UserModel({ email, password: hashedPassword });
      await registeredUser.save();

      res.status(201).json({ message: `User registered successfully` });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "User couldn't register successfully" });
    }
  })
  .post("/login", async (req, res) => {
    try {
      const { email, password } = req.body;

      const loginUser = await UserModel.findOne({ email });
      if (!loginUser) {
        return res.status(400).json({ message: "Invalid email or password" });
      }

      const isMatch = await bcrypt.compare(password, loginUser.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid email or password" });
      }

      const token = jwt.sign(
        { id: loginUser._id, email: loginUser.email },
        process.env.JWT_SECRET || "mySecretKey",
        { expiresIn: "1h" }
      );
      res.cookie("token", token, {
        httpOnly: true,
        secure: false,
        sameSite: "Lax",
        maxAge: 3600000,
      });

      res.json({ message: "Login successful" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Error logging in" });
    }
  })
  .post("/logout", (req, res) => {
    res.clearCookie("token");
    res.json({ message: "Logged out successfully" });
  });

module.exports = router;
