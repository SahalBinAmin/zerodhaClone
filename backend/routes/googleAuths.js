const express = require("express");
const router = express.Router();
const passport = require("../config/passport");
const jwt = require("jsonwebtoken");

// Google OAuth Routes
router
  .get(
    "/",
    passport.authenticate("google", {
      scope: ["profile", "email"],
      prompt: "select_account",
    })
  )
  .get(
    "/callback",
    passport.authenticate("google", {
      failureRedirect: process.env.FRONTEND_URL + "login",
    }),
    (req, res) => {
      const token = jwt.sign(
        { id: req.user._id, email: req.user.email },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );

      res.cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
      });

      res.redirect(process.env.DASHBOARD_URL);
    }
  );

module.exports = router;
