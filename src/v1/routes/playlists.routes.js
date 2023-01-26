const express = require("express");
const {
  postPlaylist,
  getAllPlaylists,
  getPlaylistById,
  deletePlaylist,
  patchPlaylist,
} = require("../../controllers/playlist.controller");
const { checkJwt } = require("../../middlewares/check.middleware");
const router = express.Router();
router
  .get("/", checkJwt, getAllPlaylists)
  .get("/:id", checkJwt, getPlaylistById)
  .post("/:id", checkJwt, postPlaylist)
  .delete("/:id", checkJwt, deletePlaylist)
  .patch("/:id", checkJwt, patchPlaylist);

module.exports = router;
