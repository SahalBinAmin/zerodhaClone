const express = require("express");
const router = express.Router();
const HoldingModel = require("../models/HoldingModel");
const WatchlistModel = require("../models/WatchListModel");
const authenticateToken = require("../middleware/auth");

// Get all holdings
router.get("/", authenticateToken, async (req, res) => {
  try {
    const holdings = await HoldingModel.find({});
    res.json(holdings);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Buy from watchlist and add to holdings
router.post("/buy/:id", authenticateToken, async (req, res) => {
  try {
    const watchlistItem = await WatchlistModel.findById(req.params.id);
    if (!watchlistItem)
      return res.status(404).json({ message: "Stock not found" });

    const { qty, avg, net, day, price } = req.body;

    const newHolding = new HoldingModel({
      name: watchlistItem.name,
      qty,
      avg,
      price,
      net,
      day,
    });

    await newHolding.save();
    res
      .status(201)
      .json({ message: "Stock bought successfully", holding: newHolding });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Delete a holding
router.delete("/:id", authenticateToken, async (req, res) => {
  try {
    const deleted = await HoldingModel.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Holding not found" });
    res.json({ message: "Holding deleted successfully", id: req.params.id });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
