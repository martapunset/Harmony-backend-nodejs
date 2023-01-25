const mongoose = require("mongoose");
const { Track } = require("../models");

const tracksController = {
  getAllTracks: async (req, res) => {
    try {
      const allTracks = await Track.find({})
        .populate("album")
        .populate("playlists")
        .populate("genres")
        .populate("ownership")
        .lean();

      res.status(200).send({ status: "OK", data: allTracks });
    } catch (err) {
      res
        .status(err?.status || 500)
        .send({ status: "FAILED", data: { error: err?.message || err } });
    }
  },

  getOneTrack: async (req, res) => {
    const {
      params: { id },
    } = req;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send({
        status: "FAILED",
        data: { error: `${id} is an invalid ID` },
      });
    }

    try {
      const track = await Track.findById(id)
        .populate("album")
        .populate("playlists")
        .populate("genres")
        .populate("ownership")
        .lean();

      if (!track) {
        return res.status(404).send({
          status: "FAILED",
          data: { error: `Track ${id} was not found` },
        });
      }

      res.status(200).send({ status: "OK", data: track });
    } catch (err) {
      res
        .status(err?.status || 500)
        .send({ status: "FAILED", data: { error: err?.message || err } });
    }
  },

  postNewTrack: async (req, res) => {
    const {
      body,
      params: { id },
    } = req;

    try {
      const newTrack = await Track.create({
        ...body,
        ownership: [id, ...body.ownership],
      });
      res.status(201).send({ status: "OK", data: newTrack });
    } catch (err) {
      res
        .status(err?.status || 500)
        .send({ status: "FAILED", data: { error: err?.message || err } });
    }
  },

  deleteOneTrack: async (req, res) => {
    const {
      params: { id },
    } = req;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send({
        status: "FAILED",
        data: { error: `${id} is an invalid ID` },
      });
    }

    try {
      const track = await Track.findByIdAndDelete(id);

      if (!track) {
        return res.status(404).send({
          status: "FAILED",
          data: { error: `Track ${id} was not found` },
        });
      }

      res.status(204).send({ status: "OK" });
    } catch (err) {
      res
        .status(err?.status || 500)
        .send({ status: "FAILED", data: { error: err?.message || err } });
    }
  },

  patchOneTrack: async (req, res) => {
    const {
      params: { id },
      body,
    } = req;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send({
        status: "FAILED",
        data: { error: `${id} is an invalid ID` },
      });
    }

    try {
      const track = await Track.findByIdAndUpdate({ _id: id }, { ...body });

      if (!track) {
        return res.status(404).send({
          status: "FAILED",
          data: { error: `Track ${id} was not found` },
        });
      }

      res.status(201).send({ status: "OK", data: track });
    } catch (err) {
      res
        .status(err?.status || 500)
        .send({ status: "FAILDED", data: { error: err?.message || err } });
    }
  },
};

module.exports = tracksController;

// const tracksmodel = require("../models/track.model");

// const getTracks = async (req, res, next) => {
//   try {
//     const allArtists = await tracksmodel.find({}).lean().exec();

//     res.status(200).send({ status: true, data: allArtists });
//     //next()
//   } catch (error) {
//     req.status(500).send({ status: false, msg: error.message });
//     //next()
//   }
//   //next()
// };

// const deleteTrack = async (req, res, next) => {
//   const { id } = req.params;
//   try {
//     const artist = await tracksmodel.findOneAndDelete({ _id: id });

//     res.status(200).send({ status: true, data: artist._id });
//   } catch (error) {
//     res.status(500).send({ status: false, msg: error.message });
//   }
// };

// const updateTrack = async (req, res, next) => {
//   const { id } = req.params;
//   const { ...fields } = req.body;

//   try {
//     const author = await tracksmodel
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

// module.exports = { getTracks, updateTrack, deleteTrack };
