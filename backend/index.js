require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const HoldingModel = require("./models/HoldingModel");
const PositionModel = require("./models/PositionModel");
const UserModel = require("./models/UserModel");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const app = express();
const session = require("express-session");
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
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(
  session({ secret: "myNewSecret", resave: false, saveUninitialized: true })
);

app.get("/allholdings", async (req, res) => {
  let allholdings = await HoldingModel.find({});
  res.json(allholdings);
});

app.get("/allpositions", async (req, res) => {
  let allpositions = await PositionModel.find({});
  res.json(allpositions);
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
    res.json({ message: "Login successful", token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error logging in" });
  }
});

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
