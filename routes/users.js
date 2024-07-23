const express = require("express");
const { User, validate } = require("../models/user");
const mongoose = require("mongoose");
const router = express.Router();

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  User.findOne({ email: req.body.email });
  const user = new User({ name: req.body.name });
  await user.save();
  res.send(user);
});

module.exports = router;
