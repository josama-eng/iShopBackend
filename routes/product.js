const express = require("express");
const router = new express.Router();
const productController = require("../controllers/ProductController");

router.post("/api/products", productController.addProduct);

router.get("/api/products", productController.getProducts);

module.exports = router;
