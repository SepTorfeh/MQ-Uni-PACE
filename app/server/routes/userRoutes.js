const express = require("express");
const router = express.Router();
const {
    login,
} = require("../controller/userController");

//const {protect, adminProtect} = require("../middlewares/authMiddleware");

router.route("/login").post(login);

module.exports = router;
