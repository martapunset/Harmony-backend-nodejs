const { Schema, model } = require("mongoose");

const LikedSchema = Schema({
  title: {
    type: String,
  },
});

const LikedModel = model("liked", LikedSchema);

module.exports = LikedModel;
