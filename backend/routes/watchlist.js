const express = require("express");
const router = express.Router();
const WatchlistModel = require("../models/WatchListModel");
const authenticateToken = require("../middleware/auth");
const sendMail = require("../utils/mailer");

// Watchlist Routes
router
  .get("/", authenticateToken, async (req, res) => {
    try {
      const data = await WatchlistModel.find();
      res.json(data);
    } catch (err) {
      res.status(500).json({ error: "Failed to fetch watchlist" });
    }
  })
  .delete("/:id", authenticateToken, async (req, res) => {
    try {
      const { id } = req.params;
      let deletedItem = await WatchlistModel.findByIdAndDelete(id);

      if (!deletedItem) {
        return res.status(404).json({ message: "Watchlist item not found" });
      }

      await sendMail(
        req.user.email,
        "Stock Removed from Watchlist",
        `You have removed ${deletedItem.name} from your watchlist.`
      );
      res.json({ message: "Watchlist item deleted and email sent!" });
    } catch (err) {
      console.log("Error deleting watchlist item : ", err);
      res.status(500).json({ error: "Failed to delete item" });
    }
  });

module.exports = router;
