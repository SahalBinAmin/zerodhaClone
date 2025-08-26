const express = require("express");
const router = express.Router();
const WatchlistModel = require("../models/WatchListModel");
const authenticateToken = require("../middleware/auth");

// Get watchlist
router.get("/", authenticateToken, async (req, res) => {
  try {
    const data = await WatchlistModel.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch watchlist" });
  }
});

// Delete watchlist item
router.delete("/:id", authenticateToken, async (req, res) => {
  try {
    await WatchlistModel.findByIdAndDelete(req.params.id);
    res.json({ message: "Watchlist item deleted" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete item" });
  }
});

module.exports = router;
