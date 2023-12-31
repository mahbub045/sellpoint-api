const { getProducts, createProducts, getProductByCategory, getSearchData } = require("../controller/product.controller");
const Product = require("../models/Products");

const router = require("express").Router();
router.route("/name").get(getSearchData);
router.route("/").get(getProducts);
router.route("/").post(createProducts);
router.route("/:categoryName").get(getProductByCategory);

module.exports = router;