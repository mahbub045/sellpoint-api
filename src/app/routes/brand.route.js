const { createBrand, getBrand } = require("../controller/brand.controller");
const Brand = require("../models/Brand");

const router = require("express").Router();
router.route("/").post(createBrand);
router.route('/').get(getBrand);

module.exports = router;