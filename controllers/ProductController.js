const Product = require("../models/ProductModel");

async function addProduct(req, res) {
  try {
    const newProduct = await Product.create(req.body);
    newProduct.save();
  } catch (error) {
    log.error(error);
    res.status(420).send(error);
  }
}

async function getProducts(req, res) {
  try {
    const allProducts = await Product.find({});
    if (!allProducts.length) {
      return res.status(400).send("No products in database");
    } else {
      res.send(allProducts);
    }
  } catch (error) {
    log.error(error);
    res.status(420).send(error);
  }
}

async function productDetails(req, res) {
  let { id } = req.params;
  try {
    const singleProduct = await Products.findOne({ _id: id })
      .then((response) => {
        res.status(215).send(response);
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    res.status(416).send(error);
  }
}

module.exports = {
  addProduct,
  getProducts,
  productDetails,
};
