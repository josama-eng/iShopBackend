const Order = require("../models/OrderModel");

async function orderProduct(req, res) {
  try {
    if (req.body) {
      const newOrder = await Order.create(req.body);
      newOrder.save();
      res.status(220).send("Order completed");
    } else {
      res.status(420).send("Error");
    }
  } catch (err) {
    console.log(err);
    res.status(420).send(error);
  }
}

module.exports = {
  orderProduct,
};
