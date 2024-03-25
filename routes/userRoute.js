const express = require("express");
const {
  createUser,
  getUsers,
  userLogin,
} = require("../controllers/userController");
const router = express.Router();

router.route("/createuser").post(createUser);
router.route("/").post(getUsers);

router.route("/login").post(userLogin);

module.exports = router;
