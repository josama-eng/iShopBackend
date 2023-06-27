require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("./db/conntect");
const userRoute = require("./routes/user");
const productRoute = require("./routes/product");
const orderRoute = require("./routes/order");

const server = express();
const PORT = process.env.PORT || 5000;

server.use(cors());
server.use(express.json());
server.use("/public", express.static(path.join(__dirname, "public")));

server.use(userRoute);
server.use(productRoute);
server.use(orderRoute);

server.get("/", (req, res) => {
  res.send("Server is working");
});

server.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Server is running on port ${PORT}`);
  }
});
