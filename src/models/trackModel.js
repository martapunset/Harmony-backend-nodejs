const { Schema, model } = require("mongoose");

const TrackSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "the name of the song is required"],
    },
    description: {
      type: String,
    },
    img: {
      id: String,
      url: {
        type: String,
        require: [true, "img is required"],
      },
    },
    file: {
      type: String,
      required: [true, "the file is required"],
    },
    album: {
      type: Schema.Types.ObjectId,
      ref: "album",
    },
    playlists: [
      {
        type: Schema.Types.ObjectId,
        ref: "playlist",
      },
    ],
    genres: [
      {
        type: Schema.Types.ObjectId,
        ref: "genre",
      },
    ],
    ownership: [
      {
        type: Schema.Types.ObjectId,
        required: [true, "the ownership is required"],
        ref: "user",
      },
    ],
  },
  { timestamps: true }
);

module.exports = model("track", TrackSchema);