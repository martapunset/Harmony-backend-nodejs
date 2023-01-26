const express = require("express");

const {
  getAllAlbums,
  getAlbumById,
  postAlbum,
  deleteAlbum,
  patchAlbum,
} = require("../../controllers/albums.controller");

const { checkJwt } = require("../../middlewares/check.middleware");

const router = express.Router();

router
  .get("/", getAllAlbums)
  .get("/:id", checkJwt, getAlbumById)
  .post("/", checkJwt, postAlbum)
  .delete("/:id", checkJwt, deleteAlbum)
  .patch("/:id", checkJwt, patchAlbum);

module.exports = router;

// const albumRouter = require('express').Router()
// const albumsController = require('../controllers/albums.controller')

// albumRouter
//     .get('/', albumsController.getAllAlbums)
//     .get('/:id', albumsController.getAlbumByID)
//     .post('/album', albumsController.createAlbum)
//     .patch('/:id', albumsController.updateAlbum)
//     .delete('/:id', albumsController.deleteAlbum)

// module.exports = albumRouter
