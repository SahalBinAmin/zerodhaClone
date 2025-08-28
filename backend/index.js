require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const HoldingModel = require("./models/HoldingModel");
const WatchlistModel = require("./models/WatchListModel");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const sendMail = require("./utils/mailer");
const session = require("express-session");
const passport = require("./config/passport");
const authenticateToken = require("./middleware/auth");

const app = express();

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

main()
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(uri);
}

app.use(
  cors({
    origin: [
      "https://zerodha-clone-seven-tan.vercel.app/",
      "https://zerodha-clone-cd2u.vercel.app/",
    ],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(
  session({
    secret: process.env.JWT_SECRET || "mySecret",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Buy from watchlist and add to holdings
app.post("/buy/:id", authenticateToken, async (req, res) => {
  try {
    const watchlistItem = await WatchlistModel.findById(req.params.id);
    if (!watchlistItem) {
      return res.status(404).json({ message: "Stock not found in watchlist" });
    }

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
    await sendMail(
      req.user.email,
      "Stock Purchase Confirmation",
      `You successfully bought ${qty} shares of ${watchlistItem.name} at PKR${price}.`
    );

    return res.status(201).json({
      message: "Stock bought successfully and email sent!",
      HoldingModel: newHolding,
    });
  } catch (err) {
    console.error("Error buying stock:", err);
    res.status(500).json({ message: "Server error" });
  }
});

app.use("/allpositions", require("./routes/positions"));
app.use("/watchlist", require("./routes/watchlist"));
app.use("/allholdings", require("./routes/holdings"));
app.use("/auth/google", require("./routes/googleAuths"));
app.use("/", require("./routes/auth"));

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
