const artistsmodel = require('../models/artists.model')

const getArtists = async (req, res, next) => { 
    try {
        const allArtists = await artistsmodel.find({}).lean().exec()

        res.status(200).send({ status: true, data: allArtists})
        //next()
    } catch (error) {
        req.status(500).send({ status: false, msg: error.message })
        //next()
    }
    //next()
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

// const createArtists = async (req, res, next) => {
//     const { id } = req.params
//     const { title, yearReleased, genre } = req.body
//     //console.log(body);
//     try {
//         const newArtist= await artistsModel.create({
//             title,
//             yearReleased,
//             genre
//         })

//         if (id) {
//             await authorModel
//                 .updateOne(
//                     { _id: id },
//                     { $push: { albums: newAlbum._id } }
//                 )
//         }

//         res.status(201).send({ status: true, data: newAlbum._id })
//         //next()
//     } catch (error) {
//         req.status(500).send({ status: false, msg: error.message })
//         //next()
//     }
//     //next()
// }



module.exports = { getArtists, getArtistsByID, updateArtists, deleteArtists }