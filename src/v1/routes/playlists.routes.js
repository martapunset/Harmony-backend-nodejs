const playlistRouter = require("express").Router();
const playlistController = require("../../controllers/playlist.controller");

playlistRouter
  .get("/", playlist.controller.getPlaylists)
  .post("/", playlist.controller.updatePlaylist)
  .delete("/:id", playlist.controller.deletePlaylist);

module.exports = playlistRouter;
