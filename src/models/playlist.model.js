const { Schema, model } = require("mongoose");

const PlaylistSchema = Schema({
  name: {
    type: String,
    required: [true, "The name is super required"],
  },
  collaborative: {
    type: Boolean,
  },
  description: {
    type: TextBlob,
  },
  thumbnail: {
    type: String,
  },
  numberSongs: {
    type: Number,
  },
  following: [{ userId: String }],

  followedBy: [{ userId: String }],
});

const PlaylistModel = model("playlists", PlaylistSchema);

module.exports = PlaylistModel;
