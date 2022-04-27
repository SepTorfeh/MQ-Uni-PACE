const express = require("express");
const router = express.Router();
const {
    submit,
} = require("../controller/surveyController");

// protect is used for questionnaire page
// it will make sure that user is loged in
const {protect} = require("../middlewares/authMiddleware");

router.route("/submit").post(protect, submit);

module.exports = router;

