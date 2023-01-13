// const albumRouter = express.Router()
const albumRouter = require('express').Router()
const albumsController = require('../controllers/albums.controller')
// o destructuring = const { checkParam, doubleCheckParam } = require('../controllers/music.controllers')

albumRouter
    //Obtener los detalles de una cuenta
    .get('/', albumsController.getAllAlbums) //y deveria funcionar igual
    .get('/:id', albumsController.getAlbumByID)
    //Crear una cuenta
    .post('/album', albumsController.createAlbum) //kiero k aki le haga el chekeo
    //como segundo parametro se pasa el middleware k se ejecuta primero luego el siguiente
    //Actualizar una cuenta, el put mas o menos es el patch
    .patch('/:id', albumsController.updateAlbum)
    //Eliminar una cuenta
    .delete('/:id', albumsController.deleteAlbum)

//esto se va al controller
// .get('/', (req, res) => {
//     console.log('all albums');
//     try {
//         res.status(200).send("All Albums") //par amanejar la base de datos, data
//     } catch (error) {
//         req.status(500).send({ status: 'FALSE' }) //no me sale con: {status:OK ,msg:"All albums"}
//     }
// })

// .post("/album", (req, res) => {
//     const body = req.body
//     console.log(body);
//     try {
//         res.status(201).send("Albums created")    
//     } catch (error) {
//         req.status(500).send('FALSE')
//     }
//  }) //crear un nuevoalbum de ahi /album

// .delete("/:id", (req, res) => {
//     const {id} = req.params
//     try {
//         res.status(201).send({status:"OK", msg:`Delete ${id}`})    
//     } catch (error) {
//         req.status(500).send({ status: 'FALSE'})
//     }
// })

module.exports = albumRouter