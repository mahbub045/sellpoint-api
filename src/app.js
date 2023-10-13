const cors = require("cors");
const express = require("express");
const productRoute = require("../src/app/routes/product.route");
const categoryRoute = require("../src/app/routes/category.route");
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/api/v1", (req, res) => {
    res.send("Sellpoint Api")
})
app.get("/", (req, res) => {
    res.send("Sellpoint Api")
})
app.use("/api/v1/product", productRoute);
app.use("/api/v1/category", categoryRoute);
module.exports = app;