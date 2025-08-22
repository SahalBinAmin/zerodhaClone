const { model } = require("mongoose");
const watchlistSchema = require("../Schemas/WatchListSchema");

const watchlistModel = model("WatchList", watchlistSchema);
module.exports = watchlistModel;
