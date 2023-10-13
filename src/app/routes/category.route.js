const { getCategory, createCategory } = require("../controller/category.controller");
const Category = require("../models/Category");

const router = require("express").Router();
router.route("/").get(getCategory);
router.route("/").post(createCategory);


module.exports = router;