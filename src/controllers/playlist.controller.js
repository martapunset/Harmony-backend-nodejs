const mongoose = require("mongoose");
const { Playlist } = require("../models");

const playlistController = {
  getAllPlaylists: async (req, res) => {
    try {
      const playlists = await Playlist.find({})
        .populate("tracks")
        .populate("followers")
        .populate("genres")
        .populate("moods")
        .populate("ownership")
        .lean();

      if (playlists.length < 1) {
        return res.status(404).send({
          status: "False",
          message: "The DB id currently empty",
        });
      }
      res.status(200).send(playlists);
    } catch (err) {
      res.status(400).send(err);
    }
  },
  getPlaylistById: async (req, res, next) => {
    const {
      params: { id },
    } = req;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send({
        status: "FALSE",
        message: `${id} is an invalid ID`,
      });
    }

    try {
      const playlist = await Playlist.findById(id)
        .populate("tracks")
        .populate("followers")
        .populate("genres")
        .populate("moods")
        .populate("ownership")
        .lean();

      if (!playlist) {
        return res.status(404).send({
          status: "FALSE",
          message: `Playlist ${id} was not found`,
        });
      }

      res.status(200).send(playlist);
    } catch (err) {
      res.status(400).send(err);
    }
  },
  postPlaylist: async (req, res) => {
    const {
      body,
      params: { id },
    } = req;
    try {
      const playlistExist = await Playlist.findOne({
        name: body.name,
        ownership: id,
      });

      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send({
          status: "FALSE",
          message: `${id} is an invalid ID`,
        });
      }

      if (playlistExist) {
        return res.status(400).send({
          status: "false",
          message: "Playlist already exist",
        });
      }
      if (body.ownership) {
        const playlist = await Playlist.create({
          ...body,
          ownership: [id, ...body.ownership],
        });
        res.status(201).send({
          status: "Created ",
          data: playlist,
        });
      } else {
        const playlist = await Playlist.create({ ...body, ownership: [id] });
        res.status(201).send({
          status: "Created ",
          data: playlist,
        });
      }
    } catch (err) {
      res.status(400).send(err.message);
    }
  },
  deletePlaylist: async (req, res) => {
    const {
      params: { id },
    } = req;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send({
        status: "FALSE",
        message: `${id} is an invalid ID`,
      });
    }

    try {
      const playlist = await Playlist.findByIdAndDelete(id);

      if (!playlist) {
        res.status(404).send({
          status: "FALSE",
          message: `User ${id} was not found`,
        });
        res.status(200).send(playlist);
      }
    } catch (err) {
      res.status(400).send(err);
    }
  },
  patchPlaylist: async (req, res) => {
    const {
      params: { id },
      body,
    } = req;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send({
        status: "FALSE",
        message: `${id} is an invalid ID`,
      });
    }

    try {
      const playlist = await Playlist.findByIdAndUpdate(
        { _id: id },
        { ...body }
      );

      if (!playlist) {
        res.status(404).send({
          status: "FALSE",
          message: `Playlist ${id} was not found`,
        });
      }
      res.status(201).send({
        status: "OK",
        message: `Playlist ${id} updated successfully`,
      });
    } catch (err) {
      res.status(400).send(err);
    }
  },
};

module.exports = {
  postPlaylist: playlistController.postPlaylist,
  getAllPlaylists: playlistController.getAllPlaylists,
  getPlaylistById: playlistController.getPlaylistById,
  deletePlaylist: playlistController.deletePlaylist,
  patchPlaylist: playlistController.patchPlaylist,
};

// const playlistmodel = require("../models/playlist.model");

// const getPlaylists = async (req, res, next) => {
//   try {
//     const allArtists = await playlistmodel.find({}).lean().exec();

//     res.status(200).send({ status: true, data: allArtists });
//     //next()
//   } catch (error) {
//     req.status(500).send({ status: false, msg: error.message });
//     //next()
//   }
//   //next()
// };

// const deletePlaylist = async (req, res, next) => {
//   const { id } = req.params;
//   try {
//     const artist = await playlistmodel.findOneAndDelete({ _id: id });

//     res.status(200).send({ status: true, data: artist._id });
//   } catch (error) {
//     res.status(500).send({ status: false, msg: error.message });
//   }
// };

// const updatePlaylist = async (req, res, next) => {
//   const { id } = req.params;
//   const { ...fields } = req.body;

//   try {
//     const author = await playlistmodel
//       .findOneAndUpdate(
//         { _id: id },
//         {
//           $set: {
//             ...fields,
//           },
//         },
//         { new: true }
//       )
//       .lean()
//       .exec();

//     res.status(200).send({ status: true, data: author });
//   } catch (error) {
//     res.status(500).send({ status: false, msg: error.message });
//   }
// };

// module.exports = { getPlaylists, updatePlaylist, deletePlaylist };
