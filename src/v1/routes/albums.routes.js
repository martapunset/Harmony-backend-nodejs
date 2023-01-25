const albumRouter = require('express').Router()
const albumsController = require('../controllers/albums.controller')

albumRouter
    .get('/', albumsController.getAllAlbums)
    .get('/:id', albumsController.getAlbumByID)
    .post('/album', albumsController.createAlbum)
    .patch('/:id', albumsController.updateAlbum)
    .delete('/:id', albumsController.deleteAlbum)

module.exports = albumRouter