const User = require("../models/UserModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secretKey = process.env.JWT_SECRET_KEY;

//register user
async function registerUser(req, res) {
  try {
    //check if email already exists in db
    const posibleUser = await User.findOne({ email: req.body.email });
    if (posibleUser) {
      return res
        .status(412)
        .send("User with this email address already exist.");
    } else {
      const newUser = await User.create(req.body);
      newUser.save();
      res.status(220).send("ok");
    }
  } catch (err) {
    console.log(err);
    return res.status(400).send(err);
  }
}

// log user
async function logUser(req, res) {
  try {
    const { email, password } = req.body;

    User.findOne({ email })
      .then((data) => {
        if (!data) {
          return res.status(215).send("Bad credentials.");
        }
        let ts = new Date().getTime();
        let token = jwt.sign({ ...data, ts }, secretKey);

        res.status(217).send({
          user: data,
          token,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (err) {
    res.status(420).send(err);
    console.log(err);
  }
}

module.exports = {
  registerUser,
  logUser,
  //   activate,
};
