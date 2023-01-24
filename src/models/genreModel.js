const { Schema, model } = require("mongoose");

const GenreSchema = new Schema({
  name: {
    type: String,
    require: [true, "Genre is required"],
  },
});

module.exports = model("genre", GenreSchema);
