const cors = require("cors");
const express = require("express");
const connectToDatabase = require("./db");
const productRoute = require("../src/app/routes/product.route");
const categoryRoute = require("../src/app/routes/category.route");
const brandRoute = require("../src/app/routes/brand.route");
const userRoute = require("../src/app/routes/user.route");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(async (req, res, next) => {
  if (!req.path.startsWith("/api/v1")) {
    return next();
  }

  try {
    await connectToDatabase();
    return next();
  } catch (error) {
    console.error("Database connection failed:", error.message);
    return res.status(500).json({
      status: "error",
      message: "Database connection failed.",
    });
  }
});
app.get("/api/v1", (req, res) => {
  res.send("Sellpoint Api");
});
app.use("/api/v1/product", productRoute);
app.use("/api/v1/category", categoryRoute);
app.use("/api/v1/brand", brandRoute);
app.use("/api/v1/user", userRoute);
module.exports = app;
