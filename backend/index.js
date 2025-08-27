require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const HoldingModel = require("./models/HoldingModel");
const PositionModel = require("./models/PositionModel");
const UserModel = require("./models/UserModel");
const WatchlistModel = require("./models/WatchListModel");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const sendMail = require("./utils/mailer");
const app = express();
const authenticateToken = require("./middleware/auth");

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
    origin: ["http://localhost:3000", "http://localhost:3001"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

// app.get("/:symbol", async (req, res) => {
//   const { symbol } = req.params;

//   try {
//     const response = await fetch(
//       `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${process.env.ALPHA_KEY}`
//     );
//     const data = await response.json();

//     if (data["Error Message"] || !data["Time Series (5min)"]) {
//       return res.status(400).json({ error: "Invalid symbol or API issue" });
//     }

//     res.json(data);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Failed to fetch stock data" });
//   }
// });

app.get("/allholdings", authenticateToken, async (req, res) => {
  try {
    let allholdings = await HoldingModel.find({});
    res.json(allholdings);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

app.get("/allpositions", authenticateToken, async (req, res) => {
  try {
    let allpositions = await PositionModel.find({});
    res.json(allpositions);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

app.get("/watchlist", authenticateToken, async (req, res) => {
  try {
    const data = await WatchlistModel.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch watchlist" });
  }
});

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
      `You successfully bought ${qty} shares of ${watchlistItem.name} at ₹${price}.`
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

app.delete("/watchlist/:id", authenticateToken, async (req, res) => {
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

app.delete("/allholdings/:id", authenticateToken, async (req, res) => {
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

app.post("/signup", async (req, res) => {
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
});

app.post("/login", async (req, res) => {
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
});

app.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged out successfully" });
});

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
