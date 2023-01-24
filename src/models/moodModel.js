const { Schema, model } = require("mongoose");

const MoodSchema = new Schema({
  name: {
    type: String,
    require: [true, "Mood is required"],
  },
});

module.exports = model("mood", MoodSchema);
