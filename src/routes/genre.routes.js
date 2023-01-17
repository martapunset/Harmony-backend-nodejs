const GenreRouter = require('express').Router()
const genreController = require('../controllers/genre.controller')

GenreRouter
    .post("/segundo", genreController.createGenre)
    .get('/', genreController.getGenres)
    .delete('/:id', genreController.deleteGenre)

    module.exports = GenreRouter;