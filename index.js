const express = require("express");
const mongoose = require("mongoose");

const genres = require("./routes/genres");
const customers = require("./routes/customers");

const app = express();
mongoose
  .connect("mongodb://localhost/vividly")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB..."));

app.use(express.json());

app.use("/api/genres", genres);
app.use("/api/customers", customers);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}....`));
