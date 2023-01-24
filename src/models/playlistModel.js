const { Schema, model } = require("mongoose");

const PlaylistSchema = new Schema(
  {
    name: {
      type: String,
      require: [true, "Name is required"],
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
    tracks: [
      {
        type: Schema.Types.ObjectId,
        ref: "track",
      },
    ],
    followers: [
      {
        type: Schema.Types.ObjectId,
        ref: "user",
      },
    ],
    genres: [
      {
        type: Schema.Types.ObjectId,
        ref: "genre",
      },
    ],
    moods: [
      {
        type: Schema.Types.ObjectId,
        ref: "mood",
      },
    ],
    ownership: [
      {
        type: Schema.Types.ObjectId,
        require: [true, "ownership is required"],
        ref: "user",
      },
    ],
  },
  { timestamps: true }
);

module.exports = model("playlist", PlaylistSchema);