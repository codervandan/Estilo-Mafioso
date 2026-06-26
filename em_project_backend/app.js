const express = require("express");
const mongoose = require("mongoose");
const dns = require("dns");
const cors = require("cors");
const { errors } = require("celebrate");
require("dotenv").config();

const clothingItemsRouter = require("./routes/clothingItems");
const NotFoundError = require("./utils/errors/not-found-error");
const errorHandler = require("./middlewares/error-handler");
const { requestLogger, errorLogger } = require("./middlewares/logger");

dns.setServers(["8.8.8.8", "1.1.1.1"]);

const app = express();

const { PORT = 3001, MONGODB_URI = "mongodb://127.0.0.1:27017/estilo_mafioso_db" } = process.env;

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

app.use(requestLogger);

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Estilo Mafioso backend is running");
});

app.use("/clothing-items", clothingItemsRouter);

app.use((req, res, next) => {
  next(new NotFoundError("Requested resource not found"));
});

app.use(errorLogger);

app.use(errors());

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
