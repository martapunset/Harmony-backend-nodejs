const { Schema, model } = require("mongoose");

const AlbumSchema = Schema({
  title: {
    type: String,
    required: [true, "The title is super required"],
  },
  yearReleased: {
    type: Number,
  },
  thumbnail: {
    type: String,
  },
  totalTracks: {
    type: Number,
  },
});

const AlbumModel = model("album", AlbumSchema);

module.exports = AlbumModel;
