const { Schema, model } = require("mongoose");

const TrackSchema = Schema({
  title: {
    type: String,
    required: [true, "The title is super required"],
  },
  url: {
    type: String,
  },
  thumbnail: {
    type: String,
  },
  duration: {
    type: Number,
  },
  popularity: {
    type: String,
  },
  genre: {
    type: String
  }, 
  albums: [{ albumId: String }],
});

const TrackModel = model("tracks", TrackSchema);

module.exports = TrackModel;


