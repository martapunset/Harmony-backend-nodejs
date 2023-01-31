const likedRouter = require('express').Router()
const likedController = require('../controllers/albums.controller')

likedRouter
    .get('/liked', likedController.getAllLiked)
    //Cambiar funciones
    // .post('/liked', albumsController.createAlbum)
    // .delete('/liked/:id', albumsController.deleteAlbum)

module.exports = likedRouter