const artistsRouter = require('express').Router()
const artistsController = require('../controllers/artists.controller')


artistsRouter
    .get('/', artistsController.getArtists)
    .post('/', artistsController.updateArtists)
    .delete('/:id', artistsController.deleteArtists)

module.exports = artistsRouter