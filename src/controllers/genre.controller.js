const genreModel = require('../models/genre.model');

const getGenres = async (req, res, next) => {
    try {
        const genress = await genreModel.find({}).lean().exec()

        res.status(200).send({ status: true, data: genress })
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

        res.status(201).send({ status: true, data: newGenre._id })
        next()
    } catch (error) {
        res.status(500).send({ status: false, msg: error.message })
        next()
    }
    next()
}

const updateGenre = async (req, res, next) => {
    const { id } = req.params
    const { ...fields } = req.body

    try {
        const author = await genreModel.findOneAndUpdate(
            { _id: id },
            {
                $set: {
                    ...fields
                }
            },
            { new: true }
        ).lean().exec()

        res.status(200).send({  status: true, data: author })
    } catch (error) {
        res.status(500).send({ status: false, msg: error.message })
    }
}

const deleteGenre = async (req, res, next) => {
    const { id } = req.params
    try {
        const genre = await genreModel.findOneAndDelete({ _id: id })

        res.status(200).send({ status: true, data: genre._id })
    } catch (error) {
        res.status(500).send({ status: false, msg: error.message  })
    }
}

module.exports = { getGenres, createGenre, deleteGenre, updateGenre };