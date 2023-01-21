const albumModel = require('../models/album.model')

const getAllAlbums =  (req, res, next) => { 
    try {
        const allAlbums =  albumModel.find({})
        allAlbums.exec((error,data)=>{
            res.status(200).json({ status: true, data: data })
        })

        
        //next()
    } catch (error) {
        req.status(500).send({ status: false, msg: error.message })
        //next()
    }
    //next()
}

const getAlbumByID = async (req, res, next) => {
    const { id } = req.params
    try {
        const album = await albumModel.findById(id).lean().exec()

        res.status(200).send({ status: true, data: album })
    } catch (error) {
        res.status(500).send({ status: false, msg: error.message })
    }
}

const deleteAlbum = async (req, res, next) => {
    const { id } = req.params
    try {
        const album = await albumModel.findOneAndDelete({ _id: id })

        res.status(200).send({ status: true, data: album._id })
    } catch (error) {
        res.status(500).send({ status: false, msg: error.message  })
    }
}

const updateAlbum = async (req, res, next) => {
    const { id } = req.params
    const { ...fields } = req.body

    try {
        const author = await albumModel.findOneAndUpdate(
            { _id: id },
            {
                $set: {
                    ...fields
                }
            },
            { new: true }
        ).lean().exec()

        res.status(200).send({ status: true, data: author })
    } catch (error) {
        res.status(500).send({ status: false, msg: error.message })
    }
}

const createAlbum = async (req, res, next) => {
    const { id } = req.params
    const { title, yearReleased, genre } = req.body
    //console.log(body);
    try {
        const newAlbum = await albumModel.create({
            title,
            yearReleased,
            genre
        })

        if (id) {
            await authorModel
                .updateOne(
                    { _id: id },
                    { $push: { albums: newAlbum._id } }
                )
        }

        res.status(201).send({ status: true, data: newAlbum._id })
        //next()
    } catch (error) {
        req.status(500).send({ status: false, msg: error.message })
        //next()
    }
    //next()
}



module.exports = { getAllAlbums, createAlbum, getAlbumByID, updateAlbum, deleteAlbum }