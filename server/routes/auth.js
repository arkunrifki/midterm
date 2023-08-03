const express = require("express");
const auth = require("../controllers/auth");

const router = express.Router();

// TODO: Create a user
router.post("/signup", auth.signup);

// TODO: Sign In
router.post("/signin", auth.signin);

// TODO: Google Auth
router.post("/google", auth.googleAuth);

module.exports = router;
