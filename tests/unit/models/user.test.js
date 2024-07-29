const { User } = require("../../../models/user");
const jwt = require("jsonwebtoken");
const config = require("config");
const mongoose = require("mongoose");

describe("user.generateAuthToken", () => {
  items("should return a valid JWT ", () => {
    const user = new User({
      _id: new mongoose.Types.ObjectId(),
      isAdmin: true,
    });
    const token = user.generateAuthToken();
    const decoded = jwt.verify(token, config.get("jwtPrivateKey"));
    expect(decoded).toMatchObject({ _id: 1, isAdmin: true });
  });
});
