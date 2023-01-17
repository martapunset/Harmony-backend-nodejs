const genreModel = require('../models/genre.model');

const getGenres = async (req, res, next) => {
    try {
        const genres = await genreModel.find({}).lean().exec()

        res.status(200).send({ status: true, data: genres })
        //next()
    } catch (error) {
        req.status(500).send({ status: false, msg: error.message })
        //next()
    }
    //next()
}

const createGenre = async (req, res, next) => {
    const { id } = req.params
    const { name } = req.body
    try {
        const newGenre = await genreModel.create({
            name
        })

        if (id) {
            await authorModel
                .updateOne(
                    { _id: id },
                    { $push: { albums: newGenre._id } }
                )
        }

        res.status(201).send({ status: true, data: newAlbum._id })
        next()
    } catch (error) {
        req.status(500).send({ status: false, msg: error.message })
        next()
    }
    next()
}

const deleteGenre = async (req, res, next) => {
    const { id } = req.params
    try {
        const album = await genreModel.findOneAndDelete({ _id: id })

        res.status(200).send({ status: true, data: album._id })
    } catch (error) {
        res.status(500).send({ status: false, msg: error.message  })
    }
}

module.exports = { getGenres, createGenre, deleteGenre };