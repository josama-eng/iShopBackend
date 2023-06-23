const express = require("express");
const userController = require("../controllers/UserController");
const router = new express.Router();

//register user
router.post("/api/register", userController.registerUser);

// //log user
router.post("/api/login", userController.logUser);

module.exports = router;
