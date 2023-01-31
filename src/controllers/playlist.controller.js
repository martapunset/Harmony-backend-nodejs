const playlistmodel = require("../models/playlist.model");

const getPlaylists = async (req, res, next) => {
  try {
    const allArtists = await playlistmodel.find({}).lean().exec();

    res.status(200).send({ status: true, data: allArtists });
    //next()
  } catch (error) {
    req.status(500).send({ status: false, msg: error.message });
    //next()
  }
  //next()
};

const deletePlaylist = async (req, res, next) => {
  const { id } = req.params;
  try {
    const artist = await playlistmodel.findOneAndDelete({ _id: id });

    res.status(200).send({ status: true, data: artist._id });
  } catch (error) {
    res.status(500).send({ status: false, msg: error.message });
  }
};

const createPlaylist = async (req, res, next) => {
  const { id } = req.params;
  const { name, collaborative, description, thumbnail, numberSongs, tracks, following, followedBy } = req.body;

  try {
    const playlist = await playlistmodel
      .create({ name, collaborative, description, thumbnail, numberSongs, tracks, following, followedBy }

      )

    res.status(200).send({ status: true, data: playlist });
  } catch (error) {
    res.status(500).send({ status: false, msg: error.message });
  }
};

module.exports = { getPlaylists, createPlaylist, deletePlaylist };
// name, collaborative, description, thumbnail, numberSongs, tracks, following, followedBy
