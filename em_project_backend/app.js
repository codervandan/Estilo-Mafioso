const express = require("express");
const mongoose = require("mongoose");
const dns = require("dns");
const cors = require("cors");
require("dotenv").config();

dns.setServers(["8.8.8.8", "1.1.1.1"]);

const clothingItemsRouter = require("./routes/clothingItems");

const app = express();

const { PORT = 3001, MONGODB_URI = "mongodb://127.0.0.1:27017/estilo_mafioso_db" } = process.env;

app.use(cors());
app.use(express.json());

app.use("/clothing-items", clothingItemsRouter);

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

app.get("/", (req, res) => {
  res.send("Estilo Mafioso backend is running");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
