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
    type: String,
  },
  thumbnail: {
    type: String,
  },
  numberSongs: {
    type: Number,
  },

  tracks: [{ trackId: String }],
  
  following: [{ userId: String }],

  followedBy: [{ userId: String }],
});

const PlaylistModel = model("playlists", PlaylistSchema);

module.exports = PlaylistModel;