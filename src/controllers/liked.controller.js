const likedModel = require('../models/liked.model')

const getAllLiked = async (req, res, next) => { 
    try {
        const allLiked =  await likedModel.find({})
        allLiked.exec((error,data)=>{
            res.status(200).json({ status: true, data: data })
        })

        
        //next()
    } catch (error) {
        req.status(500).send({ status: false, msg: error.message })
        //next()
    }
    //next()
}
//Tres funciones: 1 para listar todas las canciones a las que el usuario ha dado like. 
//2 método post para crea una instancia del like song
//3 Utilizar delete para eliminar el lije de la canción



module.exports = { getAllLiked }