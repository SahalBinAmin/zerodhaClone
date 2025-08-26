require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

mongoose
  .connect(uri)
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err));

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

// Routers
app.use("/allholdings", require("./routes/holdings"));
app.use("/watchlist", require("./routes/watchlist"));
app.use("/", require("./routes/auth"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
