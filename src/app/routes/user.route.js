const { createUser, getUser } = require("../controller/user.controller");

const router = require("express").Router();
router.route("/").post(createUser);
router.route('/').get(getUser);

module.exports = router;