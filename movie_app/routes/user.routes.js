const express = require('express');
const userModel = require('../models/user.model');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');



// post data in database
router.post('/signup', async(req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const data = new userModel({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: await bcrypt.hash(req.body.password, salt),
    contact: req.body.contact
  }); 
    const dataToSave = await data.save();
    res.status(200).json(dataToSave, );
    console.log(dataToSave);
  } catch (error) {
    res.status(400).json({message : error.message});
  }
});



router.post('/login' ,async function signIn(req, res) {
  const { email, password } = req.body;

  let user = await userModel.findOne({ email });

  if (!user) {
    return res.status(401).send("This email has not been registered!");
  }

  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword) {
    return res.status(401).send("Invalid Credentials!");
  }

  const token = jwt.sign(
    {
      _id: user._id,
      name: `${user.firstName} ${user.lastName}`,
      isAdmin: user.role === "admin",
    },
    "1@3456Qw-"
  );
  res.header("x-auth-token", token).send({
    name: `${user.firstName} ${user.lastName}`,
    email: user.email,
    isLoggedIn: true,
  });
}
)




module.exports = router;