const express = require("express");
const router = express.Router();
const HoldingModel = require("../models/HoldingModel");
const authenticateToken = require("../middleware/auth");
const sendMail = require("../utils/mailer");

//Holding Routes
router
  .get("/", authenticateToken, async (req, res) => {
    try {
      let allholdings = await HoldingModel.find({});
      res.json(allholdings);
    } catch (err) {
      res.status(500).json({ message: "Server error" });
    }
  })
  .delete("/:id", authenticateToken, async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await HoldingModel.findByIdAndDelete(id);
      if (!deleted) {
        return res.status(404).json({ message: "Holding not found" });
      }
      await sendMail(
        req.user.email,
        "Stock Sold",
        `You have sold all your holdings of ${deleted.name}.`
      );

      res.json({ message: "Holding deleted successfully and email sent", id });
    } catch (err) {
      console.error("Error deleting holding:", err);
      res.status(500).json({ message: "Server error" });
    }
  });

module.exports = router;
