const express = require("express");
const router = new express.Router();
const orderController = require("../controllers/OrderController");

router.post("/api/orders", orderController.orderProduct);

module.exports = router;
