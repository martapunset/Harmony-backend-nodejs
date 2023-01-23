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

const updatePlaylist = async (req, res, next) => {
  const { id } = req.params;
  const { ...fields } = req.body;

  try {
    const author = await playlistmodel
      .findOneAndUpdate(
        { _id: id },
        {
          $set: {
            ...fields,
          },
        },
        { new: true }
      )
      .lean()
      .exec();

    res.status(200).send({ status: true, data: author });
  } catch (error) {
    res.status(500).send({ status: false, msg: error.message });
  }
};

module.exports = { getPlaylists, updatePlaylist, deletePlaylist };
