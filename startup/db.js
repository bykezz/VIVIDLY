module.exports = function () {
  mongoose
    .connect("mongodb://localhost/vividly")
    .then(() => console.log("Connected to MongoDB..."))
    .catch((err) => console.error("Could not connect to MongoDB..."));
};
