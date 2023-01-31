const { Schema, model } = require("mongoose");

const LikedSchema = Schema({
  title: {
    type: String,
  }
});

//Guardar referencia al usuario, user_id
//Guardar referencia a la canción a la que ha dado like song_id
const LikedModel = model("liked", LikedSchema);

module.exports = LikedModel;
