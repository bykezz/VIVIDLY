const mongoose = require("mongoose");
const express = require("express");
const Joi = require("joi");
const router = express.Router();

const Genre = new mongoose.model(
  "Genre",
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50,
    },
  })
);

router.get("/", async (req, res) => {
  const genres = await Genre.find().sort("name");
  res.send(genres);
});
router.post("/", async (req, res) => {
  const { error } = validateGenre(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  let genre = new Genre({ name: req.body.name });
  genre = await genre.save();
  res.send(genre);
});
router.put("/:id", (req, res) => {
  const genre = genres.find((c) => c.id === parseInt(req.params.id));
  if (!genre) {
    return res.status(404).send("The genre with the given ID was not found.");
  }

  const { error } = validateCourse(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  genre.name = req.body.name;
  res.send(course);
});

router.get("/:id", (req, res) => {
  const genre = genres.find((c) => c.id === parseInt(req.params.id));
  if (!genre) {
    return res.status(404).send("The genre with the given ID was not found.");
  }
  res.send(course);
});

router.delete("/:id", (req, res) => {
  const genre = genres.find((c) => c.id === parseInt(req.params.id));
  if (!genre) {
    return res.status(404).send("The genre with the given ID was not found.");
  }
  const index = genres.indexOf(genre);
  genres.splice(index, 1);
  res.send(genre);
});

const validateCourse = (genre) => {
  const schema = {
    name: Joi.string().min(3).required(),
  };
  return Joi.validate(genre, schema);
};

module.exports = router;
