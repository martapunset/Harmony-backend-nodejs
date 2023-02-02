const artistsRouter = require('express').Router()
const artistsController = require('../controllers/artists.controller')


artistsRouter
    .get('/', artistsController.getAllArtists)
    .post('/', artistsController.updateArtists)
    .delete('/:id', artistsController.deleteArtists)

module.exports = artistsRouter