const express = require("express");
const {
  getAllGenres,
  postGenre,
} = require("../../controllers/genre.controller");
const { checkJwt } = require("../../middlewares/check.middleware");

const router = express.Router();
router.get("/", getAllGenres).post("/", postGenre);
module.exports = router;

// const GenreRouter = require("express").Router();
// const genreController = require("../../controllers/genre.controller");

// GenreRouter.post("/segundo", genreController.createGenre)
//   .get("/", genreController.getGenres)
//   .patch("/:id", genreController.updateGenre)
//   .delete("/:id", genreController.deleteGenre);

// module.exports = GenreRouter;
