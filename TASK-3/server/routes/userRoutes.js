const express = require("express");
const router = express.Router();
const {
  validateRefreshToken,
  validateAccessToken,
} = require("../validations/token.validation");
const userControllers = require("../controllers/user.controllers.js");

// auth routes
router.post("/login", userControllers.login);
router.post("/register", userControllers.register);
router.post("/logout", userControllers.logout);
router.post("/verify-otp", userControllers.verifyOTP);

// restore password routes
router.post("/forgot-password", userControllers.forgotPassword);
router.post("/reset-password", userControllers.resetPassword);

// keep track user route
router.post("/refresh-token", validateRefreshToken);

module.exports = router;
