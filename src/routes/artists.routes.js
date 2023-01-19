const artistsRouter = require('express').Router()
const artistsController = require('../controllers/')


artistsRouter
    .get('/', artistsController)
    .post('/', artistsController)
    .delete('/:id', artistsController)

module.exports = artistsRoutes