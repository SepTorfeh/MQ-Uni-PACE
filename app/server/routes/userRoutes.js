const express = require("express");
const router = express.Router();
const {
    login,
} = require("../controller/userController");

// protect is used for questionnaire page
// it will make sure that user is loged in
const {protect} = require("../middlewares/authMiddleware");

router.route("/login").post(login);
// next route is for the questionnaire form

module.exports = router;
