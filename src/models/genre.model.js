const { Schema, model } = require("mongoose");

const GenreSchema = Schema({
  name: {
    type: String,
    unique: true,
    trim: true,
  },
  popularity: {
    type: Number,
    trim: true,
  },
});

const GenreModel = model("genre", GenreSchema);

module.exports = GenreModel;
