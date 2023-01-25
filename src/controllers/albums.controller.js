const mongoose = require("mongoose");
const { Album } = require("../models");

const albumController = {
  getAllAlbums: async (req, res) => {
    try {
      const albums = await Album.find({})
        .populate("tracks")
        .populate("genres")
        .populate("ownership")
        .lean();

      if (albums.length < 1) {
        return res.status(404).send({
          status: "FALSE",
          message: `The DB is currently empty`,
        });
      }

      res.status(200).send(albums);
    } catch (error) {
      res.status(400).send(error.message);
    }
  },
  getAlbumById: async (req, res) => {
    const {
      body,
      params: { id },
    } = req;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send({
        status: "FALSE",
        message: `${id} is an invalid ID`,
      });
    }
    try {
      const album = await Album.findById(id)
        .populate("tracks")
        .populate("genres")
        .populate("ownership")
        .lean();

      if (!album) {
        return res.status(404).send({
          status: "FALSE",
          message: `Album ${id} was not found`,
        });
      }

      res.status(200).send(album);
    } catch (error) {
      res.status(400).send(error.message);
    }
  },

  postAlbum: async (req, res) => {
    const {
      body,
      params: { id },
    } = req;

    if (!body.img) {
      body.img =
        "http://icons.iconseeker.com/png/fullsize/music-notes/note-yellow.png";
    }

    try {
      const albumExists = await Album.findOne({
        name: body.name,
        ownership: body.ownership[0],
      });
      if (albumExists) {
        res.status(400).send({
          status: false,
          massage: "Album already exist",
        });
      }
      if (body.ownership) {
        console.log(id, typeof body.ownership);

        const album = await Album.create({ ...body });
        res.status(201).send({
          status: "Album created collab 2",
          data: album,
        });
      } else {
        console.log("1 collab");
        const album = await Album.create({ ...body });
        res.status(201).send({
          status: "Album created 1",
          data: album,
        });
      }
    } catch (error) {
      res.status(400).send(error.message);
    }
  },
  deleteAlbum: async (req, res) => {
    const {
      params: { id },
    } = req;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send({
        status: "FALSE",
        message: `Album ${id} is invalid`,
      });
    }

    try {
      const album = await Album.findByIdAndDelete(id);

      if (!album) {
        res.status(404).send({
          status: "FALSE",
          message: `Album ${id} was not found`,
        });
      }

      res.status(200).send(album);
    } catch (error) {
      res.status(400).send(error.message);
    }
  },
  patchAlbum: async (req, res) => {
    const {
      params: { id },
      body,
    } = req;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send({
        status: "FALSE",
        message: `Album ${id} is invalid`,
      });
    }

    try {
      const album = await Album.findByIdAndUpdate({ _id: id }, { ...body });

      if (!album) {
        res.status(404).send({
          status: "FALSE",
          message: `Album ${id} was not found`,
        });
      }
      res.status(201).send({
        status: "OK",
        message: `Album ${id} updated successfully`,
      });
    } catch (error) {
      res.status(400).send(error.message);
    }
  },
};

module.exports = {
  getAllAlbums: albumController.getAllAlbums,
  getAlbumById: albumController.getAlbumById,
  postAlbum: albumController.postAlbum,
  deleteAlbum: albumController.deleteAlbum,
  patchAlbum: albumController.patchAlbum,
};

// const albumModel = require('../models/album.model')

// const getAllAlbums =  (req, res, next) => {
//     try {
//         const allAlbums =  albumModel.find({})
//         allAlbums.exec((error,data)=>{
//             res.status(200).json({ status: true, data: data })
//         })

//         //next()
//     } catch (error) {
//         req.status(500).send({ status: false, msg: error.message })
//         //next()
//     }
//     //next()
// }

// const getAlbumByID = async (req, res, next) => {
//     const { id } = req.params
//     try {
//         const album = await albumModel.findById(id).lean().exec()

//         res.status(200).send({ status: true, data: album })
//     } catch (error) {
//         res.status(500).send({ status: false, msg: error.message })
//     }
// }

// const deleteAlbum = async (req, res, next) => {
//     const { id } = req.params
//     try {
//         const album = await albumModel.findOneAndDelete({ _id: id })

//         res.status(200).send({ status: true, data: album._id })
//     } catch (error) {
//         res.status(500).send({ status: false, msg: error.message  })
//     }
// }

// const updateAlbum = async (req, res, next) => {
//     const { id } = req.params
//     const { ...fields } = req.body

//     try {
//         const author = await albumModel.findOneAndUpdate(
//             { _id: id },
//             {
//                 $set: {
//                     ...fields
//                 }
//             },
//             { new: true }
//         ).lean().exec()

//         res.status(200).send({ status: true, data: author })
//     } catch (error) {
//         res.status(500).send({ status: false, msg: error.message })
//     }
// }

// const createAlbum = async (req, res, next) => {
//     const { id } = req.params
//     const { title, yearReleased, genre } = req.body
//     //console.log(body);
//     try {
//         const newAlbum = await albumModel.create({
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

// module.exports = { getAllAlbums, createAlbum, getAlbumByID, updateAlbum, deleteAlbum }
