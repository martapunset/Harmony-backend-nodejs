const playlistRouter = require("express").Router();
const playlistController = require("../controllers/playlist.controller");

playlistRouter
  .get("/", playlistController.getPlaylists)
  .post("/", playlistController.updatePlaylist)
  .delete("/:id", playlistController.deletePlaylist);

module.exports = playlistRouter;
