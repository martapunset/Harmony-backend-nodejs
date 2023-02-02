const artistsmodel = require('../models/artists.model')

const getAllArtists = async (req, res, next) => { 
    try {
        const allArtists = artistsmodel.find({})
        allArtists.exec((error,data)=>{
            res.status(200).json({ status: true, data: data })
        })
    } catch (error) {
        res.status(500).send({ status: false, msg: error.message })
    }
}

const getArtistsByID = async (req, res, next) => {
    const { id } = req.params
    try {
        const Artists = await artistsmodel.findById(id).lean().exec()

        res.status(200).send({ status: true, data: Artists})
    } catch (error) {
        res.status(500).send({ status: false, msg: error.message })
    }
}

const deleteArtists = async (req, res, next) => {
    const { id } = req.params
    try {
        const artist = await artistsmodel.findOneAndDelete({ _id: id })

        res.status(200).send({ status: true, data: artist._id })
    } catch (error) {
        res.status(500).send({ status: false, msg: error.message  })
    }
}

const updateArtists = async (req, res, next) => {
    const { id } = req.params
    const { ...fields } = req.body

    try {
        const author = await artistsModel.findOneAndUpdate(
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

module.exports = { getAllArtists, getArtistsByID, updateArtists, deleteArtists }